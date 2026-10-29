type ContactEnv = {
  SENDER_API_KEY?: string;
  SENDER_FROM_EMAIL?: string;
  SENDER_FROM_NAME?: string;
  CONTACT_ALLOWED_ORIGINS?: string;
  SENDER_LEAD_STATUS_FIELD?: string;
  TURNSTILE_SECRET_KEY?: string;
};

type ContactContext = {
  request: Request;
  env: ContactEnv;
  waitUntil?: (promise: Promise<unknown>) => void;
};

const RECIPIENT = "umair@guildframe.com";
const SENDER_API = "https://api.sender.net/v2";
const MAX_BYTES = 32 * 1024;
const FIELD_LIMITS: Record<string, number> = {
  name: 100, email: 254, game_category: 100, platform: 80,
  service_interest: 160, launch_timing: 100, project_link: 2000,
  heard_about: 200, message: 6000, source: 200, page_url: 1000,
  first_touch_path: 200, first_touch_referrer_host: 200,
  first_touch_utm_source: 100, first_touch_utm_medium: 100,
  first_touch_utm_campaign: 100, first_touch_utm_content: 100,
  first_touch_evidence: 100, "cf-turnstile-response": 2048, _gotcha: 200,
};
const LABELS: Record<string, string> = {
  name: "Name", email: "Reply email", game_category: "Project type",
  platform: "Campaign platform", service_interest: "Service requested",
  launch_timing: "Launch timing", project_link: "Project link",
  heard_about: "How they heard about Guildframe", message: "Project details",
  source: "Form location", page_url: "Submission page",
  first_touch_path: "First page visited", first_touch_referrer_host: "Referrer host",
  first_touch_utm_source: "Campaign source", first_touch_utm_medium: "Campaign medium",
  first_touch_utm_campaign: "Campaign name", first_touch_utm_content: "Campaign content",
  first_touch_evidence: "Attribution evidence",
};

class InputError extends Error {
  status: number;
  constructor(status: number, message: string) { super(message); this.status = status; }
}

function emailIsValid(value: string) {
  return value.length <= 254 && /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
}

function allowedOrigins(env: ContactEnv) {
  const values = (env.CONTACT_ALLOWED_ORIGINS || "https://guildframe.com,https://www.guildframe.com").split(",");
  return new Set(values.map(value => {
    try { const url = new URL(value.trim()); return url.protocol === "https:" || url.hostname === "localhost" ? url.origin : ""; }
    catch { return ""; }
  }).filter(Boolean));
}

function checkOrigin(request: Request, origins: Set<string>) {
  const origin = request.headers.get("Origin");
  let sourceOrigin = origin;
  if (!sourceOrigin) {
    try { sourceOrigin = new URL(request.headers.get("Referer") || "").origin; }
    catch { sourceOrigin = null; }
  }
  if (!origins.has(new URL(request.url).origin) || !sourceOrigin || !origins.has(sourceOrigin) || request.headers.get("Sec-Fetch-Site") === "cross-site") {
    throw new InputError(403, "Please send your enquiry from the Guildframe website.");
  }
}

async function readFields(request: Request) {
  const type = request.headers.get("Content-Type") || "";
  if (!/^(application\/json|application\/x-www-form-urlencoded|multipart\/form-data)(?:\s*;|$)/i.test(type)) {
    throw new InputError(415, "This form format is not supported.");
  }
  const declaredSize = request.headers.get("Content-Length");
  if (declaredSize && (!/^\d+$/.test(declaredSize) || Number(declaredSize) > MAX_BYTES)) {
    throw new InputError(413, "Please shorten your enquiry and try again.");
  }
  if (!request.body) throw new InputError(400, "Please complete the enquiry form.");
  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let size = 0;
  let body = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) { await reader.cancel(); throw new InputError(413, "Please shorten your enquiry and try again."); }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
  } catch (error) {
    if (error instanceof InputError) throw error;
    throw new InputError(400, "The form could not be read. Please try again.");
  } finally { reader.releaseLock(); }

  const fields: Record<string, string> = Object.create(null);
  let entries: [string, unknown][];
  try {
    if (/^application\/json/i.test(type)) {
      const parsed: unknown = JSON.parse(body);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid object");
      entries = Object.entries(parsed);
    } else {
      entries = [...(await new Response(body, { headers: { "Content-Type": type } }).formData()).entries()];
    }
  } catch { throw new InputError(400, "The form could not be read. Please try again."); }
  if (entries.length > 40) throw new InputError(400, "The form contains too many fields.");
  const seen = new Set<string>();
  for (const [key, value] of entries) {
    if (seen.has(key) || typeof value !== "string") throw new InputError(400, "Please submit each form field once, without attachments.");
    seen.add(key);
    if (!Object.hasOwn(FIELD_LIMITS, key)) continue;
    if (value.length > FIELD_LIMITS[key] || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) {
      throw new InputError(422, "A form field is too long or contains unsupported characters.");
    }
    if (key !== "message" && /[\r\n]/.test(value)) throw new InputError(422, "Please use one line for each field except your project details.");
    fields[key] = value.trim();
  }
  return fields;
}

function validateFields(fields: Record<string, string>, origins: Set<string>) {
  if (!fields.name || !emailIsValid(fields.email || "") || !fields.message || !fields.game_category || !fields.service_interest) {
    throw new InputError(422, "Please include your name, a valid email, project type, service and project details.");
  }
  if (fields.project_link) {
    try { if (!["https:", "http:"].includes(new URL(fields.project_link).protocol)) throw new Error("Invalid protocol"); }
    catch { throw new InputError(422, "Please use a complete http or https project link."); }
  }
  if (fields.page_url) {
    try {
      const page = new URL(fields.page_url);
      fields.page_url = origins.has(page.origin) ? `${page.origin}${page.pathname}` : "";
    } catch { fields.page_url = ""; }
  }
}

function reply(request: Request, status: number, message: string, requestId: string) {
  const headers = new Headers({ "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer", "X-Frame-Options": "DENY", "X-Request-Id": requestId });
  if (status === 405) headers.set("Allow", "POST");
  if (status >= 500) headers.set("Retry-After", "60");
  if (request.headers.get("Accept")?.includes("text/html") && !request.headers.get("Accept")?.includes("application/json")) {
    headers.set("Content-Type", "text/html; charset=utf-8");
    headers.set("Content-Security-Policy", "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'");
    return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Guildframe enquiry</title><style>body{font:18px/1.7 system-ui;color:#233b35;background:#f7f5ef;max-width:36rem;margin:12vh auto;padding:1.5rem}a{color:inherit}</style><main><h1>${status < 300 ? "Thank you" : "Your enquiry could not be sent"}</h1><p>${escapeHtml(message)}</p><p><a href="mailto:${RECIPIENT}">Email ${RECIPIENT}</a></p><p><a href="/#start-project">Return to Guildframe</a></p></main></html>`, { status, headers });
  }
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify({ ok: status < 300, message, requestId }), { status, headers });
}

async function verifyTurnstile(request: Request, secret: string, token: string, origins: Set<string>) {
  if (!token) throw new InputError(422, "Please complete the security check and try again.");
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST", headers: { "Content-Type": "application/json" }, signal: AbortSignal.timeout(8000),
    body: JSON.stringify({ secret, response: token, remoteip: request.headers.get("CF-Connecting-IP") || undefined }),
  });
  const result = await response.json() as { success?: boolean; hostname?: string };
  if (!response.ok || !result.success || !result.hostname || ![...origins].some(origin => new URL(origin).hostname === result.hostname)) {
    throw new InputError(422, "The security check expired or failed. Please try again.");
  }
}

async function markExistingSubscriber(email: string, env: ContactEnv, requestId: string) {
  const field = env.SENDER_LEAD_STATUS_FIELD?.trim();
  if (!field) return;
  // A field token is a setting, never a caller-controlled subscriber status.
  if (!/^(?:\{\{[A-Za-z0-9_]+\}\}|\{\$[A-Za-z0-9_]+\})$/.test(field)) throw new Error("Invalid lead field configuration");
  const headers = { Authorization: `Bearer ${env.SENDER_API_KEY}`, Accept: "application/json", "Content-Type": "application/json" };
  const lookup = await fetch(`${SENDER_API}/subscribers/${encodeURIComponent(email)}`, { headers, signal: AbortSignal.timeout(8000) });
  if (lookup.status === 404) return;
  if (!lookup.ok) throw new Error("Subscriber lookup failed");
  const profile = await lookup.json() as { data?: { id?: string; email?: string } };
  if (!profile.data?.id || profile.data.email?.toLowerCase() !== email.toLowerCase()) return;
  const update = await fetch(`${SENDER_API}/subscribers/${encodeURIComponent(profile.data.id)}`, {
    method: "PATCH", headers, signal: AbortSignal.timeout(8000),
    body: JSON.stringify({ fields: { [field]: "active_enquiry" }, trigger_automation: false }),
  });
  if (!update.ok) throw new Error("Subscriber field update failed");
  const result = await update.json() as { success?: boolean };
  if (result.success !== true) throw new Error("Subscriber field update rejected");
  console.info("contact_existing_lead_updated", { requestId });
}

export async function onRequest(context: ContactContext): Promise<Response> {
  const { request, env } = context;
  const requestId = crypto.randomUUID();
  if (request.method !== "POST") return reply(request, 405, "Please use the enquiry form to send a project.", requestId);
  try {
    const origins = allowedOrigins(env);
    checkOrigin(request, origins);
    const fields = await readFields(request);
    if (fields._gotcha) return reply(request, 200, "Your enquiry has been sent. Thank you.", requestId);
    validateFields(fields, origins);
    const key = env.SENDER_API_KEY?.trim();
    const from = env.SENDER_FROM_EMAIL?.trim();
    const fromName = env.SENDER_FROM_NAME?.trim() || "Guildframe website";
    if (!key || !from || !emailIsValid(from) || fromName.length > 100 || /[\r\n\u0000]/.test(fromName)) {
      console.error("contact_not_configured", { requestId });
      return reply(request, 503, `The form is temporarily unavailable. Please email ${RECIPIENT}.`, requestId);
    }
    if (env.TURNSTILE_SECRET_KEY) await verifyTurnstile(request, env.TURNSTILE_SECRET_KEY, fields["cf-turnstile-response"] || "", origins);
    const rows = Object.entries(LABELS).filter(([key]) => fields[key]);
    const [replyLocal, replyDomain] = fields.email.split("@");
    const replyUrl = `mailto:${encodeURIComponent(replyLocal)}@${replyDomain}?subject=${encodeURIComponent("Re: your Guildframe project")}`;
    const text = ["GUILDFRAME\nNew project enquiry", `Reply to ${fields.name}: ${fields.email}\n${replyUrl}`, ...rows.map(([key, label]) => `${label}:\n${fields[key]}`), `Reference: ${requestId}`, "This enquiry does not grant marketing consent."].join("\n\n");
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Guildframe project enquiry</title></head>
<body style="margin:0;background:#f7f5ef;color:#233b35;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6">
<main style="max-width:640px;margin:0 auto;padding:24px 16px">
<header style="padding:24px;background:#233b35;color:#fffaf0;border-radius:12px 12px 0 0">
<p style="margin:0 0 12px;font-size:13px;letter-spacing:2px;font-weight:bold">GUILDFRAME</p>
<h1 style="margin:0;font-size:28px;line-height:1.2">New project enquiry</h1></header>
<section aria-label="Reply to the creator" style="padding:24px;background:#fffdf7;border:1px solid #d6ddcc;border-top:0">
<p style="margin:0 0 18px">${escapeHtml(fields.name)} has shared a project with you.</p>
<a href="${escapeHtml(replyUrl)}" style="display:inline-block;max-width:100%;box-sizing:border-box;background:#233b35;color:#fffaf0;text-decoration:none;font-size:16px;font-weight:bold;padding:14px 20px;border-radius:7px;overflow-wrap:anywhere">Reply to ${escapeHtml(fields.name)}</a>
<p style="margin:14px 0 0;font-size:14px;color:#58674f;overflow-wrap:anywhere">${escapeHtml(fields.email)}<br>Use the reply button to contact the creator directly.</p></section>
<section aria-label="Enquiry details" style="padding:24px;background:#fffdf7;border:1px solid #d6ddcc;border-top:0;border-radius:0 0 12px 12px">
<table style="width:100%;border-collapse:collapse;table-layout:fixed"><caption style="text-align:left;font-size:19px;font-weight:bold;padding-bottom:16px">Project details</caption><tbody>
${rows.map(([key, label]) => `<tr><th scope="row" style="width:34%;text-align:left;vertical-align:top;font-size:14px;font-weight:bold;padding:14px 12px 14px 0;border-top:1px solid #e3e7db;overflow-wrap:anywhere">${label}</th><td style="vertical-align:top;font-size:15px;padding:14px 0;border-top:1px solid #e3e7db;white-space:pre-wrap;overflow-wrap:anywhere;word-break:break-word">${escapeHtml(fields[key])}</td></tr>`).join("")}
</tbody></table></section>
<footer style="padding:20px 4px;font-size:12px;color:#58674f;overflow-wrap:anywhere"><p style="margin:0 0 8px">This enquiry does not grant marketing consent.</p><p style="margin:0">Reference: ${requestId}</p></footer>
</main></body></html>`;
    const delivery = await fetch(`${SENDER_API}/message/send`, {
      method: "POST", signal: AbortSignal.timeout(10000),
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ from: { email: from, name: fromName }, to: { email: RECIPIENT, name: "Umair" }, subject: "Guildframe: tabletop launch enquiry", text, html, headers: { "Reply-To": fields.email, "X-Guildframe-Request-Id": requestId } }),
    });
    const result = await delivery.json().catch(() => null) as { success?: boolean; emailId?: string } | null;
    if (!delivery.ok || result?.success !== true || !result.emailId) {
      console.error("contact_delivery_rejected", { requestId, status: delivery.status });
      return reply(request, 502, `Your enquiry could not be sent. Please try again or email ${RECIPIENT}.`, requestId);
    }
    console.info("contact_delivery_accepted", { requestId, emailId: result.emailId });
    if (env.SENDER_LEAD_STATUS_FIELD) {
      const update = markExistingSubscriber(fields.email, env, requestId).catch(() => { console.error("contact_lead_update_failed", { requestId }); });
      if (context.waitUntil) context.waitUntil(update); else await update;
    }
    return reply(request, 200, "Your enquiry has been sent. Thank you.", requestId);
  } catch (error) {
    if (error instanceof InputError) return reply(request, error.status, error.message, requestId);
    console.error("contact_delivery_unavailable", { requestId });
    return reply(request, 503, `Your enquiry could not be sent. Please try again or email ${RECIPIENT}.`, requestId);
  }
}

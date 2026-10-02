const INBOX = "umair@guildframe.com";
const SENDER = "enquiries@forms.guildframe.com";
const MAX_BODY_BYTES = 32_768;

const CATEGORIES = [
  "Board game", "Card game or TCG", "Tabletop RPG", "Miniatures or terrain",
  "Dice or accessories", "Something else for the tabletop",
];
const PLATFORMS = ["Kickstarter", "Gamefound", "Not decided", "Another platform"];

export interface Inquiry {
  name: string;
  email: string;
  game_category: string;
  platform: string;
  project_link: string;
  message: string;
  source: string;
  page_url: string;
}

interface EmailMessage {
  to: string;
  from: { email: string; name: string };
  replyTo: { email: string; name: string };
  subject: string;
  html: string;
  text: string;
}

export interface Env {
  EMAIL: { send(message: EmailMessage): Promise<{ messageId: string }> };
  CONTACT_RATE_LIMIT: { limit(options: { key: string }): Promise<{ success: boolean }> };
  ALLOWED_ORIGIN?: string;
}

class FormError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

function field(data: FormData, name: string, limit: number, required = false) {
  const values = data.getAll(name);
  if (values.length > 1 || values.some((value) => typeof value !== "string")) {
    throw new FormError("Please check the form fields and try again.");
  }
  const value = ((values[0] as string | undefined) ?? "").trim();
  if ((required && !value) || value.length > limit || /[\u0000\u007f]/.test(value)) {
    throw new FormError(`Please check your ${name.replaceAll("_", " ")} and try again.`);
  }
  if (name !== "message" && /[\r\n]/.test(value)) {
    throw new FormError("Please check the form fields and try again.");
  }
  return value;
}

function httpLink(value: string) {
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) throw new Error();
    return url;
  } catch {
    throw new FormError("Please enter a complete project link, starting with https://.");
  }
}

async function readForm(request: Request) {
  const contentType = request.headers.get("Content-Type") ?? "";
  if (!/^(multipart\/form-data|application\/x-www-form-urlencoded)(?:;|$)/i.test(contentType)) {
    throw new FormError("Please submit your request using the website form.", 415);
  }
  if (Number(request.headers.get("Content-Length")) > MAX_BODY_BYTES) {
    throw new FormError("Your request is too long. Please shorten the message.", 413);
  }
  const reader = request.body?.getReader();
  if (!reader) throw new FormError("Please fill in the form before sending.");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new FormError("Your request is too long. Please shorten the message.", 413);
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  try {
    return await new Response(bytes, { headers: { "Content-Type": contentType } }).formData();
  } catch {
    throw new FormError("The form could not be read. Please try again.");
  }
}

function validateInquiry(data: FormData, origin: string): Inquiry {
  for (const value of data.values()) {
    if (typeof value !== "string") throw new FormError("Please share artwork as a link rather than a file.");
  }
  const inquiry: Inquiry = {
    name: field(data, "name", 120, true),
    email: field(data, "email", 254, true),
    game_category: field(data, "game_category", 80, true),
    platform: field(data, "platform", 80) || "Not decided",
    project_link: field(data, "project_link", 2_048),
    message: field(data, "message", 5_000, true),
    source: field(data, "source", 160) || "Website",
    page_url: field(data, "page_url", 2_048),
  };
  if (!/^[^\s@<>"'\\]+@[^\s@<>"'\\]+\.[^\s@<>"'\\]+$/.test(inquiry.email)) {
    throw new FormError("Please enter an email address I can reply to.");
  }
  if (!CATEGORIES.includes(inquiry.game_category) || !PLATFORMS.includes(inquiry.platform)) {
    throw new FormError("Please choose a project type and campaign platform from the form.");
  }
  if (inquiry.project_link) inquiry.project_link = httpLink(inquiry.project_link).href;
  if (inquiry.page_url) {
    const page = httpLink(inquiry.page_url);
    if (page.origin !== origin) throw new FormError("Please submit your request from the Guildframe website.");
    // Attribution includes the page path, without query parameters or fragments.
    inquiry.page_url = `${page.origin}${page.pathname}`;
  } else {
    inquiry.page_url = origin;
  }
  return inquiry;
}

export function buildInquiryEmail(inquiry: Inquiry, receivedAt = new Date()): EmailMessage {
  const received = `${new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(receivedAt)} UTC`;
  const reply = `mailto:${encodeURIComponent(inquiry.email)}?subject=${encodeURIComponent("Re: your Guildframe campaign mockup")}`;
  const link = (url: string) => `<a href="${escapeHtml(url)}" style="color:#174c50;word-break:break-all">${escapeHtml(url)}</a>`;
  const rows = [
    ["Name", escapeHtml(inquiry.name)],
    ["Email", `<a href="mailto:${escapeHtml(inquiry.email)}" style="color:#174c50">${escapeHtml(inquiry.email)}</a>`],
    ["Project type", escapeHtml(inquiry.game_category)],
    ["Campaign platform", escapeHtml(inquiry.platform)],
    ["Artwork or project", inquiry.project_link ? link(inquiry.project_link) : "No link supplied"],
    ["Page", link(inquiry.page_url)],
    ["Form", escapeHtml(inquiry.source)],
    ["Received (UTC)", escapeHtml(received)],
  ].map(([label, value]) => `<tr><th align="left" valign="top" style="padding:12px 0;border-bottom:1px solid #e5e0d5;font-size:13px;font-weight:400;color:#5d6662;width:145px">${label}</th><td style="padding:12px 0 12px 16px;border-bottom:1px solid #e5e0d5;font-size:14px;color:#173d40;word-break:break-word">${value}</td></tr>`).join("");
  return {
    to: INBOX,
    from: { email: SENDER, name: "Guildframe enquiries" },
    replyTo: { email: inquiry.email, name: inquiry.name },
    subject: `Guildframe mockup request: ${inquiry.game_category}`,
    text: `GUILDFRAME\nNew campaign mockup request\n\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nProject type: ${inquiry.game_category}\nCampaign platform: ${inquiry.platform}\nArtwork or project: ${inquiry.project_link || "No link supplied"}\nPage: ${inquiry.page_url}\nForm: ${inquiry.source}\nReceived (UTC): ${received}\n\nPROJECT BRIEF\n${inquiry.message}\n\nReply to this email to contact ${inquiry.name}.`,
    html: `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Guildframe mockup request</title></head><body style="margin:0;background:#f6f3e9;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f3e9"><tr><td align="center" style="padding:32px 16px"><table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;border-radius:20px;overflow:hidden;background:#fffdf6"><tr><td style="padding:28px 32px;background:#174c50;color:#fffdf6"><p style="margin:0 0 24px;font-size:16px;letter-spacing:2px;font-weight:700">GUILDFRAME<span style="color:#ee866e">.</span></p><p style="margin:0 0 10px;font-size:12px;letter-spacing:1px;color:#cfe3cd">FREE CAMPAIGN MOCKUP</p><h1 style="margin:0;font-size:27px;line-height:1.25">New request from ${escapeHtml(inquiry.name)}</h1></td></tr><tr><td style="padding:20px 32px 32px"><table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">${rows}</table><h2 style="margin:28px 0 12px;font-size:18px;color:#173d40">About the project</h2><p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#283f3d;word-break:break-word">${escapeHtml(inquiry.message).replace(/\r?\n/g, "<br>")}</p><a href="${escapeHtml(reply)}" style="display:inline-block;padding:14px 22px;border-radius:8px;background:#ee866e;color:#173d40;font-size:14px;font-weight:700;text-decoration:none">Reply to ${escapeHtml(inquiry.name)}</a><p style="margin:20px 0 0;font-size:12px;line-height:1.6;color:#5d6662">You can also use Reply in your email app. It goes to ${escapeHtml(inquiry.email)}.</p></td></tr></table><p style="margin:20px 0 0;font-size:12px;color:#69746f">Sent from the Guildframe website to ${INBOX}.</p></td></tr></table></body></html>`,
  };
}

function respond(request: Request, status: number, message: string, extraHeaders: Record<string, string> = {}) {
  const headers = {
    "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow", ...extraHeaders,
  };
  if (request.headers.get("Accept")?.includes("application/json")) {
    return Response.json({ ok: status === 200, message }, { status, headers });
  }
  const title = status === 200 ? "Thanks for sending your game." : "Your request could not be sent.";
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} | Guildframe</title></head><body style="margin:0;padding:48px 24px;background:#f6f3e9;color:#173d40;font-family:Arial,sans-serif"><main style="max-width:540px;margin:auto"><p>GUILDFRAME</p><h1>${title}</h1><p>${escapeHtml(message)}</p><p><a style="color:#174c50" href="mailto:${INBOX}">Email ${INBOX}</a></p><p><a style="color:#174c50" href="https://guildframe.com/#start-project">Back to Guildframe</a></p></main></body></html>`, {
    status,
    headers: { ...headers, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'" },
  });
}

export async function handleContactRequest(request: Request, env: Env): Promise<Response> {
  if (new URL(request.url).pathname !== "/api/contact") return respond(request, 404, "This page could not be found.");
  if (request.method !== "POST") return respond(request, 405, "Please use the website form to send your request.", { Allow: "POST" });
  const origin = env.ALLOWED_ORIGIN || "https://guildframe.com";
  if (request.headers.get("Origin") !== origin) return respond(request, 403, "Please submit your request from the Guildframe website.");
  try {
    if (!env.CONTACT_RATE_LIMIT || !env.EMAIL) throw new FormError(`Please email ${INBOX} while the form is unavailable.`, 503);
    const ip = request.headers.get("CF-Connecting-IP");
    if (!ip) throw new FormError("Your request could not be checked. Please try again.", 503);
    const allowed = await env.CONTACT_RATE_LIMIT.limit({ key: ip });
    if (!allowed.success) return respond(request, 429, "Please wait a minute before trying again.", { "Retry-After": "60" });
    const data = await readForm(request);
    if (field(data, "_gotcha", 5_000)) return respond(request, 200, "Thanks for sending your game. I'll reply to your email.");
    const inquiry = validateInquiry(data, origin);
    const result = await env.EMAIL.send(buildInquiryEmail(inquiry));
    if (!result?.messageId) throw new Error("Email was not accepted");
    return respond(request, 200, "Thanks for sending your game. I'll reply to your email.");
  } catch (error) {
    if (error instanceof FormError) return respond(request, error.status, error.message);
    // Email addresses, messages and provider error text stay out of request logs.
    console.error("contact_delivery_failed");
    return respond(request, 503, `Your request could not be sent. Please try again or email ${INBOX}.`);
  }
}

const contactWorker = { fetch: handleContactRequest };
export default contactWorker;

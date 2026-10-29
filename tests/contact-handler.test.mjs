import test from "node:test";
import assert from "node:assert/strict";
import { onRequest } from "../functions/api/contact.ts";

const environment = { SENDER_API_KEY: "test-server-secret", SENDER_FROM_EMAIL: "umair@guildframe.com" };
const details = { name: "Test Creator", email: "creator@example.com", game_category: "Board game", service_interest: "Campaign copy and design", message: "Please help with our launch." };
function request(fields = details, options = {}) {
  return new Request("https://guildframe.com/api/contact", { method: "POST", headers: { Origin: "https://guildframe.com", Accept: "application/json", "Content-Type": "application/json", ...options.headers }, body: options.body ?? JSON.stringify(fields) });
}
function mockFetch(t, implementation) {
  const calls = [];
  t.mock.method(globalThis, "fetch", async (url, options) => { calls.push({ url: String(url), options, body: options?.body ? JSON.parse(options.body) : undefined }); return implementation(url, options, calls.length); });
  return calls;
}
const accepted = () => Response.json({ success: true, emailId: "test-email-id" });

test("delivers to a fixed inbox, escapes HTML and keeps the credential server-side", async t => {
  const calls = mockFetch(t, accepted);
  const response = await onRequest({ request: request({ ...details, name: '<img src=x onerror="alert(1)">', message: "<script>bad()</script>\nA real project question.", to: "attacker@example.com", _subject: "Injected subject" }), env: environment });
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.ok, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.sender.net/v2/message/send");
  assert.equal(calls[0].options.headers.Authorization, "Bearer test-server-secret");
  assert.deepEqual(calls[0].body.to, { email: "umair@guildframe.com", name: "Umair" });
  assert.equal(calls[0].body.from.email, "umair@guildframe.com");
  assert.equal(calls[0].body.headers["Reply-To"], "creator@example.com");
  assert.equal(calls[0].body.subject, "Guildframe: tabletop launch enquiry");
  assert.ok(calls[0].body.html.includes("&lt;script&gt;"));
  assert.ok(!calls[0].body.html.includes("<script>"));
  assert.ok(calls[0].body.text.includes("<script>bad()</script>"));
  assert.ok(!JSON.stringify(result).includes("test-server-secret"));
  assert.equal(response.headers.get("Cache-Control"), "no-store");
});

test("rejects cross-origin and missing-origin requests before contacting Sender", async t => {
  const calls = mockFetch(t, accepted);
  for (const headers of [{ Origin: "https://attacker.example" }, { Origin: "null" }, { Origin: "https://guildframe.com", "Sec-Fetch-Site": "cross-site" }]) {
    assert.equal((await onRequest({ request: request(details, { headers }), env: environment })).status, 403);
  }
  const noOrigin = request(); noOrigin.headers.delete("Origin");
  assert.equal((await onRequest({ request: noOrigin, env: environment })).status, 403);
  assert.equal(calls.length, 0);
});

test("provides a safe direct reply action when Sender drops Reply-To", async t => {
  const calls = mockFetch(t, accepted);
  const name = 'A & B <Studio> "Launch"';
  const email = "creator+team&ops@example.com";
  const response = await onRequest({ request: request({ ...details, name, email }), env: environment });
  assert.equal(response.status, 200);
  const payload = calls[0].body;
  const action = payload.html.match(/<a href="([^"]+)"[^>]*>Reply to ([\s\S]*?)<\/a>/);
  assert.ok(action, "missing prominent reply link");
  const target = new URL(action[1]);
  assert.equal(target.protocol, "mailto:");
  assert.equal(decodeURIComponent(target.pathname), email);
  assert.equal(target.searchParams.get("subject"), "Re: your Guildframe project");
  assert.deepEqual([...target.searchParams.keys()], ["subject"]);
  assert.equal(action[2], "A &amp; B &lt;Studio&gt; &quot;Launch&quot;");
  assert.ok(payload.text.includes(`Reply to ${name}: ${email}`));
  assert.ok(payload.text.includes(action[1]));
  assert.equal(payload.headers["Reply-To"], email, "retain the best-effort requested header");
});

test("enforces validation, raw byte limit and form content type", async t => {
  const calls = mockFetch(t, accepted);
  for (const fields of [{ ...details, email: "person@example.com\r\nBcc: attacker@example.com" }, { ...details, message: " " }, { ...details, service_interest: "" }, { ...details, project_link: "javascript:alert(1)" }, { ...details, message: "a".repeat(6001) }]) {
    assert.equal((await onRequest({ request: request(fields), env: environment })).status, 422);
  }
  assert.equal((await onRequest({ request: request({}, { body: "x".repeat(32769) }), env: environment })).status, 413);
  assert.equal((await onRequest({ request: request({}, { body: "{}", headers: { "Content-Length": "999999" } }), env: environment })).status, 413);
  assert.equal((await onRequest({ request: request({}, { body: "text", headers: { "Content-Type": "text/plain" } }), env: environment })).status, 415);
  assert.equal(calls.length, 0);
});

test("accepts the existing multipart form and rejects duplicate fields and files", async t => {
  const calls = mockFetch(t, accepted);
  const makeForm = () => { const form = new FormData(); for (const [key, value] of Object.entries(details)) form.set(key, value); return form; };
  const makeRequest = body => new Request("https://guildframe.com/api/contact", { method: "POST", headers: { Origin: "https://guildframe.com", Accept: "application/json" }, body });
  assert.equal((await onRequest({ request: makeRequest(makeForm()), env: environment })).status, 200);
  const duplicate = makeForm(); duplicate.append("email", "different@example.com");
  assert.equal((await onRequest({ request: makeRequest(duplicate), env: environment })).status, 400);
  const attachment = makeForm(); attachment.set("upload", new Blob(["file"]), "upload.txt");
  assert.equal((await onRequest({ request: makeRequest(attachment), env: environment })).status, 400);
  assert.equal(calls.length, 1);
});

test("silently drops honeypot submissions without sending or enrolling anyone", async t => {
  const calls = mockFetch(t, accepted);
  const response = await onRequest({ request: request({ ...details, _gotcha: "spam" }), env: environment });
  assert.equal(response.status, 200);
  assert.equal(calls.length, 0);
});

test("provider rejection, unavailable credentials and transport failure never report success or retry", async t => {
  const calls = mockFetch(t, (_url, _options, attempt) => {
    if (attempt === 1) return Response.json({ success: false, error: "private provider detail" }, { status: 403 });
    throw new Error("private token or transport detail");
  });
  const failed = await onRequest({ request: request(), env: environment });
  assert.equal(failed.status, 502);
  assert.ok(!(await failed.text()).includes("private provider detail"));
  assert.equal((await onRequest({ request: request(), env: {} })).status, 503);
  const unavailable = await onRequest({ request: request(), env: environment });
  assert.equal(unavailable.status, 503);
  assert.ok(!(await unavailable.text()).includes("private token"));
  assert.equal(calls.length, 2);
});

for (const field of ["{{lead_status}}", "{$lead_status}"]) {
test(`updates an existing matching subscriber using ${field}, preserving suppression and groups`, async t => {
  const calls = mockFetch(t, (_url, _options, attempt) => attempt === 1 ? accepted() : attempt === 2 ? Response.json({ data: { id: "existing-id", email: details.email, status: { email: "unsubscribed" } } }) : Response.json({ success: true }));
  const pending = [];
  const response = await onRequest({ request: request(), env: { ...environment, SENDER_LEAD_STATUS_FIELD: field }, waitUntil: promise => pending.push(promise) });
  assert.equal(response.status, 200);
  await Promise.all(pending);
  assert.equal(calls.length, 3);
  assert.equal(calls[1].url, "https://api.sender.net/v2/subscribers/creator%40example.com");
  assert.equal(calls[2].url, "https://api.sender.net/v2/subscribers/existing-id");
  assert.equal(calls[2].options.method, "PATCH");
  assert.deepEqual(calls[2].body, { fields: { [field]: "active_enquiry" }, trigger_automation: false });
});
}

test("invalid custom field configuration never makes a subscriber request", async t => {
  const calls = mockFetch(t, accepted);
  const response = await onRequest({ request: request(), env: { ...environment, SENDER_LEAD_STATUS_FIELD: "{{lead_status}}:invalid" } });
  assert.equal(response.status, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.sender.net/v2/message/send");
});

test("an unknown subscriber stays outside marketing and lookup failures do not undo sent mail", async t => {
  let lookupStatus = 404;
  const calls = mockFetch(t, (_url, _options, attempt) => attempt % 2 ? accepted() : Response.json({ error: "Lookup unavailable" }, { status: lookupStatus }));
  for (const status of [404, 500]) {
    lookupStatus = status;
    const response = await onRequest({ request: request(), env: { ...environment, SENDER_LEAD_STATUS_FIELD: "{{lead_status}}" } });
    assert.equal(response.status, 200);
  }
  assert.equal(calls.length, 4);
  assert.ok(calls.every(call => call.url.endsWith("/message/send") || call.options.method === undefined));
});

test("configured Turnstile is required and checked for the trusted hostname", async t => {
  const calls = mockFetch(t, () => Response.json({ success: true, hostname: "attacker.example" }));
  const env = { ...environment, TURNSTILE_SECRET_KEY: "test-turnstile-secret" };
  assert.equal((await onRequest({ request: request(), env })).status, 422);
  assert.equal((await onRequest({ request: request({ ...details, "cf-turnstile-response": "token" }), env })).status, 422);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
});

test("method errors and native no-JavaScript responses are usable", async t => {
  mockFetch(t, accepted);
  const method = await onRequest({ request: new Request("https://guildframe.com/api/contact"), env: environment });
  assert.equal(method.status, 405);
  assert.equal(method.headers.get("Allow"), "POST");
  const response = await onRequest({ request: request(details, { headers: { Accept: "text/html" } }), env: environment });
  assert.equal(response.status, 200);
  assert.ok(response.headers.get("Content-Type").startsWith("text/html"));
  assert.ok((await response.text()).includes("Return to Guildframe"));
});

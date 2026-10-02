import assert from "node:assert/strict";
import test from "node:test";
import { buildInquiryEmail, handleContactRequest } from "../workers/contact/index.ts";

const fields = {
  name: "Test Publisher", email: "publisher@example.com", game_category: "Card game or TCG",
  platform: "Kickstarter", project_link: "https://example.com/cards", message: "A card game.\nArtwork is ready.",
  source: "Homepage", page_url: "https://guildframe.com/card-game-kickstarter-campaign-design?email=private#start-project",
};
function request(values = {}, headers = {}) {
  return new Request("https://guildframe.com/api/contact", {
    method: "POST", body: new URLSearchParams({ ...fields, ...values }),
    headers: { Origin: "https://guildframe.com", Accept: "application/json", "CF-Connecting-IP": "192.0.2.8", ...headers },
  });
}
function setup({ allowed = true, fail = false, emptyResult = false } = {}) {
  const sent = [];
  const env = {
    CONTACT_RATE_LIMIT: { async limit() { return { success: allowed }; } },
    EMAIL: { async send(message) {
      if (fail) throw new Error("Private provider details");
      sent.push(message);
      return emptyResult ? {} : { messageId: "test-message-id" };
    } },
  };
  return { env, sent };
}

test("valid card-game request sends one formatted email to the fixed Guildframe inbox", async () => {
  const { env, sent } = setup();
  const response = await handleContactRequest(request({ to: "attacker@example.com", _subject: "Injected subject" }), env);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(sent.length, 1);
  const email = sent[0];
  assert.equal(email.to, "umair@guildframe.com");
  assert.equal(email.from.email, "enquiries@forms.guildframe.com");
  assert.equal(email.replyTo.email, fields.email);
  assert.equal(email.subject, "Guildframe mockup request: Card game or TCG");
  assert.match(email.html, /About the project/);
  assert.match(email.html, /A card game\.<br>Artwork is ready\./);
  assert.match(email.text, /PROJECT BRIEF\nA card game\./);
  assert.doesNotMatch(email.html + email.text, /email=private|#start-project|attacker@example/);
});

test("email template escapes visitor HTML and preserves a readable plain-text copy", () => {
  const email = buildInquiryEmail({ ...fields, name: '<img src=x onerror="alert(1)">', message: "<script>attack()</script>\n& text" });
  assert.doesNotMatch(email.html, /<script>|<img src=x/);
  assert.match(email.html, /&lt;script&gt;attack\(\)&lt;\/script&gt;<br>&amp; text/);
  assert.match(email.text, /<script>attack\(\)<\/script>/);
});

test("honeypot submissions never send email", async () => {
  const { env, sent } = setup();
  const response = await handleContactRequest(request({ _gotcha: "Spam" }), env);
  assert.equal(response.status, 200);
  assert.equal(sent.length, 0);
});

test("invalid or unsafe fields do not send email", async (t) => {
  for (const [label, changes] of Object.entries({
    "missing name": { name: "" }, "missing brief": { message: "" }, "bad email": { email: "wrong" },
    "header injection": { email: "visitor@example.com\r\nBcc: attacker@example.com" },
    "unknown category": { game_category: "Spam" }, "unknown platform": { platform: "Spam" },
    "script link": { project_link: "javascript:alert(1)" }, "credential link": { project_link: "https://user:pass@example.com" },
    "external page": { page_url: "https://evil.example/" }, "overlong brief": { message: "x".repeat(5001) },
  })) await t.test(label, async () => {
    const { env, sent } = setup();
    assert.equal((await handleContactRequest(request(changes), env)).status, 400);
    assert.equal(sent.length, 0);
  });
});

test("duplicate fields and file uploads are rejected", async () => {
  for (const file of [false, true]) {
    const { env, sent } = setup();
    const body = new FormData();
    for (const [key, value] of Object.entries(fields)) body.append(key, value);
    if (file) body.append("artwork", new Blob(["file"]), "artwork.txt");
    else body.append("email", "second@example.com");
    const response = await handleContactRequest(new Request("https://guildframe.com/api/contact", {
      method: "POST", body, headers: { Origin: "https://guildframe.com", "CF-Connecting-IP": "192.0.2.8" },
    }), env);
    assert.equal(response.status, 400);
    assert.equal(sent.length, 0);
  }
});

test("cross-site and missing-origin requests are rejected", async () => {
  const { env, sent } = setup();
  for (const origin of ["https://evil.example", "https://guildframe.com.evil.example", "null", ""]) {
    assert.equal((await handleContactRequest(request({}, { Origin: origin }), env)).status, 403);
  }
  assert.equal(sent.length, 0);
});

test("rate limiting returns a useful retry delay without sending", async () => {
  const { env, sent } = setup({ allowed: false });
  const response = await handleContactRequest(request(), env);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("Retry-After"), "60");
  assert.equal(sent.length, 0);
});

test("unconfigured email, unconfigured rate limit and missing client IP fail without sending", async () => {
  const { env, sent } = setup();
  for (const broken of [{ ...env, EMAIL: undefined }, { ...env, CONTACT_RATE_LIMIT: undefined }]) {
    assert.equal((await handleContactRequest(request(), broken)).status, 503);
  }
  const withoutIp = request(); withoutIp.headers.delete("CF-Connecting-IP");
  assert.equal((await handleContactRequest(withoutIp, env)).status, 503);
  assert.equal(sent.length, 0);
});

test("provider failure or missing acceptance ID cannot produce a success response", async () => {
  for (const options of [{ fail: true }, { emptyResult: true }]) {
    const { env } = setup(options);
    const response = await handleContactRequest(request(), env);
    assert.equal(response.status, 503);
    const payload = await response.json();
    assert.equal(payload.ok, false);
    assert.doesNotMatch(payload.message, /Private provider details/);
  }
});

test("request bodies are bounded even without a Content-Length header", async () => {
  const { env, sent } = setup();
  const response = await handleContactRequest(request({ message: "x".repeat(40_000) }), env);
  assert.equal(response.status, 413);
  assert.equal(sent.length, 0);
});

test("GET and other routes never send; unsupported payloads return 415", async () => {
  const { env, sent } = setup();
  assert.equal((await handleContactRequest(new Request("https://guildframe.com/api/contact"), env)).status, 405);
  assert.equal((await handleContactRequest(new Request("https://guildframe.com/other"), env)).status, 404);
  const unsupported = request(); unsupported.headers.set("Content-Type", "application/json");
  assert.equal((await handleContactRequest(unsupported, env)).status, 415);
  assert.equal(sent.length, 0);
});

test("native form responses are readable HTML and are never cached or indexed", async () => {
  const { env } = setup();
  const response = await handleContactRequest(request({}, { Accept: "text/html" }), env);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("Content-Type"), /text\/html/);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.match(response.headers.get("X-Robots-Tag"), /noindex/);
  assert.match(await response.text(), /Thanks for sending your game/);
});

import test from "node:test";
import assert from "node:assert/strict";
import { safeCampaignValue, safePagePath, safeReferrerHost } from "../app/components/lead-attribution-values.mjs";

let moduleId = 0;
const freshAttribution = () => import(`../app/components/lead-attribution.ts?test=${++moduleId}`);

function browser(t, { url = "https://guildframe.com/buy", referrer = "" } = {}) {
  const storageAccess = [];
  const window = { location: new URL(url) };
  for (const key of ["localStorage", "sessionStorage"]) {
    Object.defineProperty(window, key, { configurable: true, get() { storageAccess.push(key); throw new Error("Storage unavailable"); } });
  }
  const document = { referrer };
  for (const [key, value] of Object.entries({ window, document })) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
    t.after(() => previous ? Object.defineProperty(globalThis, key, previous) : delete globalThis[key]);
  }
  return { window, document, storageAccess };
}

test("campaign labels are bounded and exclude URLs, email addresses and markup", () => {
  assert.equal(safeCampaignValue(" creator_newsletter "), "creator_newsletter");
  assert.equal(safeCampaignValue("Orbit launch-2026.11"), "Orbit launch-2026.11");
  assert.equal(safeCampaignValue("x".repeat(100)), "x".repeat(100));
  for (const value of [null, undefined, 12, {}, [], "", " ", "x".repeat(101), "person@example.com", "https://search.example/private", "campaign?email=private", "<script>bad</script>", "line\nbreak"]) {
    assert.equal(safeCampaignValue(value), undefined, String(value));
  }
});

test("page paths omit queries and fragments without inventing a valid page", () => {
  for (const [value, expected] of [["/", "/"], ["/buy/", "/buy"], ["/guides/project-plan?email=private@example.com#form", "/guides/project-plan"]]) {
    assert.equal(safePagePath(value), expected);
  }
  for (const value of [null, "", "//attacker.example", "https://guildframe.com/buy", "/bad//path", "/../private", "/person@example.com", "/person%40example.com", "/path with spaces", "/x\n", `/${"x".repeat(200)}`]) {
    assert.equal(safePagePath(value), undefined, String(value));
  }
});

test("referrer hosts are normalized DNS names without URL details or IP addresses", () => {
  assert.equal(safeReferrerHost("WWW.Google.COM."), "google.com");
  assert.equal(safeReferrerHost("chat.openai.com"), "chat.openai.com");
  for (const value of [null, "", "localhost", "127.0.0.1", "[::1]", "https://google.com", "google.com/search?email=private", "person@example.com", "bad..example", "-bad.example", "example.com:443", `${"x".repeat(64)}.example`]) {
    assert.equal(safeReferrerHost(value), undefined, String(value));
  }
});

test("first touch survives client navigation without using storage or exposing query data", async t => {
  const { window, document, storageAccess } = browser(t, {
    url: "https://guildframe.com/guides/project-plan/?utm_source=ChatGPT&utm_medium=referral&utm_campaign=orbit_launch&utm_content=rules_preview&utm_term=private-search&gclid=private-click&email=private@example.net#form",
    referrer: "https://www.google.com/search?q=private@example.net#private-fragment",
  });
  const { getLeadAttribution } = await freshAttribution();
  const expected = {
    first_touch_path: "/guides/project-plan",
    first_touch_referrer_host: "google.com",
    first_touch_utm_source: "ChatGPT",
    first_touch_utm_medium: "referral",
    first_touch_utm_campaign: "orbit_launch",
    first_touch_utm_content: "rules_preview",
    first_touch_evidence: "campaign_tags",
  };
  const first = getLeadAttribution();
  assert.deepEqual(first, expected);
  window.location = new URL("https://guildframe.com/buy?utm_source=later_source");
  document.referrer = "https://guildframe.com/guides/project-plan";
  first.first_touch_path = "/changed";
  first.first_touch_utm_source = "changed";
  assert.deepEqual(getLeadAttribution(), expected, "callers cannot mutate the captured first touch");
  assert.deepEqual(storageAccess, [], "attribution does not read or write browser storage before consent");
});

test("absent, internal, malformed and unsupported referrers remain direct or unknown", async t => {
  const { document, storageAccess } = browser(t);
  for (const referrer of ["", "https://www.guildframe.com/guides/foo?email=private", "not a URL", "javascript:alert(1)", "file:///private/file", "http://127.0.0.1/private"]) {
    document.referrer = referrer;
    const { getLeadAttribution, getObservedAiSource } = await freshAttribution();
    assert.deepEqual(getLeadAttribution(), { first_touch_path: "/buy", first_touch_evidence: "direct_or_unknown" }, referrer);
    assert.equal(getObservedAiSource(), undefined, referrer);
  }
  assert.deepEqual(storageAccess, []);
});

test("invalid paths and campaign values do not become home-page or AI attribution", async t => {
  browser(t, { url: "https://guildframe.com/person%40example.net?utm_source=private%40example.net&utm_campaign=%3Cscript%3E&gclid=chatgpt" });
  const { getLeadAttribution, getObservedAiSource } = await freshAttribution();
  assert.deepEqual(getLeadAttribution(), { first_touch_evidence: "direct_or_unknown" });
  assert.equal(getObservedAiSource(), undefined);
});

test("duplicate campaign labels are ignored while a valid external hostname remains evidence", async t => {
  browser(t, { url: "https://guildframe.com/buy?utm_source=chatgpt&utm_source=google", referrer: "https://www.perplexity.ai/search/private?q=private@example.net" });
  const { getLeadAttribution, getObservedAiSource } = await freshAttribution();
  assert.deepEqual(getLeadAttribution(), { first_touch_path: "/buy", first_touch_referrer_host: "perplexity.ai", first_touch_evidence: "external_referrer" });
  assert.equal(getObservedAiSource(), "perplexity");
});

test("a new page session does not manufacture a previous landing page", async t => {
  const { window, document } = browser(t, { url: "https://guildframe.com/guides/project-plan?utm_source=chatgpt" });
  const firstSession = await freshAttribution();
  assert.equal(firstSession.getLeadAttribution().first_touch_utm_source, "chatgpt");
  window.location = new URL("https://guildframe.com/buy");
  document.referrer = "https://guildframe.com/guides/project-plan";
  const nextSession = await freshAttribution();
  assert.deepEqual(nextSession.getLeadAttribution(), { first_touch_path: "/buy", first_touch_evidence: "direct_or_unknown" });
});

test("AI sources require a known campaign source or hostname, including proper subdomains", async () => {
  const { getObservedAiSource } = await freshAttribution();
  for (const [source, host] of [["chatgpt", "chat.openai.com"], ["perplexity", "perplexity.ai"], ["copilot", "copilot.microsoft.com"], ["claude", "claude.ai"], ["gemini", "gemini.google.com"], ["you", "you.com"], ["phind", "phind.com"]]) {
    assert.equal(getObservedAiSource({ first_touch_utm_source: source.toUpperCase() }), source);
    assert.equal(getObservedAiSource({ first_touch_referrer_host: `www.${host}` }), source);
    assert.equal(getObservedAiSource({ first_touch_referrer_host: `${host}.attacker.example` }), undefined);
  }
  assert.equal(getObservedAiSource({ first_touch_path: "/chatgpt", first_touch_evidence: "direct_or_unknown" }), undefined);
});

test("server rendering captures no attribution", async () => {
  const { getLeadAttribution, hasAnalyticsConsent } = await freshAttribution();
  assert.equal(getLeadAttribution(), undefined);
  assert.equal(hasAnalyticsConsent(), false);
});

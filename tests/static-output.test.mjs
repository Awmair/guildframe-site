import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

const pages = [
  ["/", "Shopify Theme for Tabletop Game Creators | Guildframe", "Your Kickstarter"],
  ["/buy", "Buy Guildframe | Guildframe", "Get Guildframe"],
  ["/shopify-theme-for-board-games", "Shopify Theme for Board Games | Guildframe", "board game Shopify theme"],
  ["/kickstarter-to-shopify", "Kickstarter to Shopify for Tabletop Creators | Guildframe", "funded Kickstarter"],
  ["/shopify-theme-for-ttrpg", "Shopify Theme for TTRPG Publishers | Guildframe", "TTRPG Shopify theme"],
  ["/shopify-theme-for-miniatures", "Shopify Theme for Miniatures and Terrain | Guildframe", "miniatures Shopify theme"],
  ["/guides", "Tabletop Ecommerce and Kickstarter Guides | Guildframe", "Build what comes"],
  ["/guides/move-from-kickstarter-to-shopify", "How to Move From Kickstarter to Shopify | Guildframe", "How to Move From Kickstarter"],
  ["/guides/best-shopify-themes-for-board-games", "Best Shopify Themes for Board Games in 2026 | Guildframe", "Best Shopify Themes for Board Games"],
  ["/guides/kickstarter-late-pledges-vs-shopify", "Kickstarter Late Pledges vs Shopify | Guildframe", "Kickstarter Late Pledges vs Shopify"],
  ["/guides/backerkit-vs-shopify-vs-gamefound", "BackerKit vs Shopify vs Gamefound After Crowdfunding | Guildframe", "BackerKit vs Shopify vs Gamefound"],
];

const outputFile = (path) =>
  new URL(path === "/" ? "index.html" : `${path.slice(1)}.html`, outputRoot);

const readPage = (path) => readFile(outputFile(path), "utf8");

test("exports every public page with search essentials", async (t) => {
  for (const [path, title, phrase] of pages) {
    await t.test(path, async () => {
      const html = await readPage(path);
      assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`, "i"));
      assert.match(html, /<meta name="description" content="[^"]+"/i);
      assert.match(html, /<link rel="canonical" href="http:\/\/localhost:3000/i);
      assert.match(html, new RegExp(phrase, "i"));
      assert.match(html, /application\/ld\+json/i);
      assert.doesNotMatch(html, /<meta name="robots" content="noindex/i);
      assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, path);
    });
  }
});

test("exports a complete sitemap and crawlable robots policy", async () => {
  const sitemap = await readFile(new URL("sitemap.xml", outputRoot), "utf8");
  const robots = await readFile(new URL("robots.txt", outputRoot), "utf8");

  for (const [path] of pages) {
    const escaped = path === "/" ? "/" : path;
    assert.match(sitemap, new RegExp(`<loc>http:\/\/localhost:3000${escaped}<\\/loc>`));
  }

  assert.match(robots, /User-agent: \*/i);
  assert.match(robots, /Allow: \//i);
  assert.match(robots, /Sitemap: http:\/\/localhost:3000\/sitemap\.xml/i);
});

test("exports AEO and social metadata", async () => {
  const solutionPaths = pages.slice(2, 6).map(([path]) => path);
  const articlePaths = pages.slice(7).map(([path]) => path);

  for (const path of solutionPaths) {
    const html = await readPage(path);
    assert.match(html, /"@type":"FAQPage"/i, path);
    assert.match(html, /"@type":"Product"/i, path);
    assert.match(html, /"price":"419"/i, path);
    assert.match(html, /"priceCurrency":"USD"/i, path);
  }

  for (const path of articlePaths) {
    const html = await readPage(path);
    assert.match(html, /<meta property="og:type" content="article"/i, path);
    assert.match(html, /"@type":"Article"/i, path);
    assert.match(html, /"@type":"FAQPage"/i, path);
    assert.match(html, /"isAccessibleForFree":true/i, path);
  }

  const homepage = await readPage("/");
  assert.match(homepage, /og-guildframe-launch-v2\.jpg/i);
  assert.match(homepage, /"image":"http:\/\/localhost:3000\/og-guildframe-launch-v2\.jpg"/i);
  assert.match(homepage, /"availability":"https:\/\/schema\.org\/InStock"/i);
  assert.match(homepage, /G-TEST123456/i);
});

test("keeps purchase, recovery and redirects launch-ready", async () => {
  const home = await readPage("/");
  const buy = await readPage("/buy");
  const missing = await readFile(new URL("404.html", outputRoot), "utf8");
  const redirects = await readFile(new URL("_redirects", outputRoot), "utf8");
  const headers = await readFile(new URL("_headers", outputRoot), "utf8");

  assert.match(home, /href="\/buy"[^>]*class="checkout-button"/i);
  assert.doesNotMatch(home, /href="#faq"[^>]*class="checkout-button"/i);
  assert.match(home, /data-analytics-event="begin_checkout"/i);
  assert.match(buy, /https:\/\/checkout\.example\/guildframe/i);
  assert.match(buy, /data-analytics-event="checkout_redirect"/i);
  assert.match(missing, /This path ends here/i);
  assert.match(missing, /content="noindex/i);
  assert.match(redirects, /^\/pricing \/#pricing 301/m);
  assert.match(headers, /X-Content-Type-Options: nosniff/i);
});

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) files.push(...await collectSourceFiles(url));
    if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) files.push(url);
  }
  return files;
}

test("keeps copy and responsive mockups clean", async () => {
  const appRoot = new URL("../app/", import.meta.url);
  const files = await collectSourceFiles(appRoot);
  for (const file of files) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(source, /[—–]/u, file.pathname);
  }

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const imageRule = css.match(/\.seo-hero-visual img\s*\{([^}]+)\}/)?.[1] ?? "";
  assert.match(imageRule, /height:\s*auto/i);
  assert.match(imageRule, /object-fit:\s*contain/i);
  assert.doesNotMatch(imageRule, /object-fit:\s*cover/i);
});

test("does not ship GitHub Actions workflows", async () => {
  await assert.rejects(access(new URL("../.github/workflows/", import.meta.url)));
});

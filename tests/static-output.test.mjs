import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

const pages = [
  ["/", "Shopify Theme and Store Design for Tabletop Creators | Guildframe", "Your Kickstarter"],
  ["/buy", "Buy Guildframe | Guildframe", "Build it yourself"],
  ["/done-for-you-shopify-store", "Done-for-You Shopify Store for Tabletop Brands | Guildframe", "Your complete Shopify store"],
  ["/shopify-theme-for-board-games", "Shopify Theme for Board Games | Guildframe", "board game Shopify theme"],
  ["/kickstarter-to-shopify", "Kickstarter to Shopify for Tabletop Creators | Guildframe", "funded Kickstarter"],
  ["/shopify-theme-for-ttrpg", "Shopify Theme for TTRPG Publishers | Guildframe", "TTRPG Shopify theme"],
  ["/shopify-theme-for-miniatures", "Shopify Theme for Miniatures and Terrain | Guildframe", "miniatures Shopify theme"],
  ["/guides", "Tabletop Ecommerce and Kickstarter Guides | Guildframe", "Build what comes"],
  ["/guides/what-happens-after-kickstarter-is-funded", "What Happens After Your Kickstarter Is Funded? | Guildframe", "What Happens After Your Kickstarter Is Funded"],
  ["/guides/move-from-kickstarter-to-shopify", "Kickstarter to Shopify Migration Guide | Guildframe", "Kickstarter to Shopify Migration Guide"],
  ["/guides/best-shopify-themes-for-board-games", "Best Shopify Themes for Board Games in 2026 | Guildframe", "Best Shopify Themes for Board Games"],
  ["/guides/kickstarter-late-pledges-vs-shopify", "Selling After Kickstarter: Late Pledges vs Shopify | Guildframe", "Selling After Kickstarter"],
  ["/guides/backerkit-vs-shopify-vs-gamefound", "BackerKit vs Shopify vs Gamefound After Crowdfunding | Guildframe", "BackerKit vs Shopify vs Gamefound"],
  ["/guides/kickstarter-to-shopify-launch-timeline", "Kickstarter to Shopify Launch Timeline | Guildframe", "Kickstarter to Shopify Launch Timeline"],
  ["/guides/sell-board-game-preorders-on-shopify", "How to Sell Board Game Preorders on Shopify | Guildframe", "How to Sell Board Game Preorders"],
  ["/guides/sell-board-game-expansions-add-ons-shopify", "Sell Board Game Expansions and Add-ons on Shopify | Guildframe", "How to Sell Board Game Expansions"],
  ["/about", "About Guildframe | Guildframe", "Tabletop worlds deserve"],
  ["/editorial-policy", "Editorial Policy | Guildframe", "Useful first"],
  ["/authors/guildframe", "Guildframe Editorial Team | Guildframe", "Guildframe Editorial Team"],
  ["/resources", "Tabletop Ecommerce Checklists and References | Guildframe", "Reference tools"],
  ["/resources/board-game-shopify-store-checklist", "Board Game Shopify Store Checklist | Guildframe", "Board Game Shopify Store Checklist"],
  ["/resources/kickstarter-to-shopify-migration-checklist", "Kickstarter to Shopify Migration Checklist | Guildframe", "Kickstarter to Shopify Migration Checklist"],
  ["/resources/backerkit-vs-shopify-vs-gamefound-comparison", "Tabletop Crowdfunding Platform Role Matrix | Guildframe", "Tabletop Crowdfunding Platform Role Matrix"],
  ["/resources/board-game-product-page-checklist", "Board Game Shopify Product Page Checklist | Guildframe", "Board Game Shopify Product Page Checklist"],
  ["/resources/kickstarter-tabletop-games-benchmark", "2024 Kickstarter Tabletop Games Funding Benchmark | Guildframe", "6,646"],
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
  assert.match(robots, /User-agent: OAI-SearchBot/i);
  assert.match(robots, /User-agent: ChatGPT-User/i);
  assert.match(robots, /User-agent: GPTBot/i);
  assert.match(robots, /Disallow: \/$/im);
  assert.doesNotMatch(robots, /Content-Signal:/i);
  assert.match(robots, /Sitemap: http:\/\/localhost:3000\/sitemap\.xml/i);
  assert.doesNotMatch(sitemap, /<changefreq>|<priority>/i);
  assert.equal((sitemap.match(/<lastmod>2026-07-(?:17|18|19)T00:00:00.000Z<\/lastmod>/g) ?? []).length, pages.length);
  assert.match(sitemap, /<lastmod>2026-07-19T00:00:00.000Z<\/lastmod>/);
});

test("exports AEO and social metadata", async () => {
  const solutionPaths = [
    "/shopify-theme-for-board-games",
    "/kickstarter-to-shopify",
    "/shopify-theme-for-ttrpg",
    "/shopify-theme-for-miniatures",
  ];
  const articlePaths = [
    "/guides/what-happens-after-kickstarter-is-funded",
    "/guides/move-from-kickstarter-to-shopify",
    "/guides/best-shopify-themes-for-board-games",
    "/guides/kickstarter-late-pledges-vs-shopify",
    "/guides/backerkit-vs-shopify-vs-gamefound",
    "/guides/kickstarter-to-shopify-launch-timeline",
    "/guides/sell-board-game-preorders-on-shopify",
    "/guides/sell-board-game-expansions-add-ons-shopify",
    "/resources/board-game-shopify-store-checklist",
    "/resources/kickstarter-to-shopify-migration-checklist",
    "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    "/resources/board-game-product-page-checklist",
    "/resources/kickstarter-tabletop-games-benchmark",
  ];
  const modifiedDates = new Map([
    ["/guides/what-happens-after-kickstarter-is-funded", "2026-07-19"],
    ["/guides/move-from-kickstarter-to-shopify", "2026-07-19"],
    ["/guides/best-shopify-themes-for-board-games", "2026-07-19"],
    ["/guides/kickstarter-to-shopify-launch-timeline", "2026-07-19"],
    ["/guides/kickstarter-late-pledges-vs-shopify", "2026-07-18"],
    ["/guides/backerkit-vs-shopify-vs-gamefound", "2026-07-18"],
    ["/resources/backerkit-vs-shopify-vs-gamefound-comparison", "2026-07-18"],
  ]);

  for (const path of solutionPaths) {
    const html = await readPage(path);
    assert.match(html, /"@type":"Product"/i, path);
    assert.match(html, /"price":"419"/i, path);
    assert.match(html, /"priceCurrency":"USD"/i, path);
  }

  for (const path of articlePaths) {
    const html = await readPage(path);
    assert.match(html, /<meta property="og:type" content="article"/i, path);
    assert.match(html, /"@type":"(?:Article|TechArticle)"/i, path);
    assert.match(html, /"isAccessibleForFree":true/i, path);
    assert.match(html, /"reviewedBy":\{"@id":"http:\/\/localhost:3000\/authors\/guildframe#editorial-team"\}/i, path);
    const modifiedDate = modifiedDates.get(path) ?? "2026-07-17";
    assert.match(html, new RegExp(`"dateModified":"${modifiedDate}"`, "i"), path);
    assert.match(html, /"citation":\["https:\/\//i, path);
    assert.match(html, /Sources reviewed/i, path);
  }

  const referencePaths = [
    "/resources/board-game-shopify-store-checklist",
    "/resources/kickstarter-to-shopify-migration-checklist",
    "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    "/resources/board-game-product-page-checklist",
    "/resources/kickstarter-tabletop-games-benchmark",
  ];
  for (const path of referencePaths) {
    const html = await readPage(path);
    assert.match(html, /"@type":"TechArticle"/i, path);
    assert.match(html, /Guildframe Editorial Team/i, path);
  }

  assert.match(await readPage("/about"), /"@type":"AboutPage"/i);
  assert.match(await readPage("/editorial-policy"), /Guildframe Editorial Policy/i);
  assert.match(await readPage("/authors/guildframe"), /"@type":"ProfilePage"/i);
  assert.match(
    await readPage("/authors/guildframe"),
    /"dateCreated":"2026-07-16T19:00:00Z"/i,
  );
  assert.match(
    await readPage("/authors/guildframe"),
    /"dateModified":"2026-07-17T19:00:00Z"/i,
  );
  assert.match(await readPage("/resources"), /"@type":"CollectionPage"/i);

  const homepage = await readPage("/");
  assert.match(homepage, /og-guildframe-offers-v3\.jpg/i);
  assert.match(homepage, /"image":"http:\/\/localhost:3000\/og-guildframe-offers-v3\.jpg"/i);
  assert.match(homepage, /"availability":"https:\/\/schema\.org\/InStock"/i);
  assert.match(homepage, /"@type":"OnlineStore"/i);
  assert.match(homepage, /"@type":"Service"/i);
  assert.match(homepage, /"price":"1399"/i);
  assert.doesNotMatch(homepage, /"@type":"Audience"/i);
  assert.doesNotMatch(homepage, /OutOfStock/i);
  assert.match(homepage, /G-TEST123456/i);

  const service = await readPage("/done-for-you-shopify-store");
  assert.match(service, /"@type":"Service"/i);
  assert.match(service, /"price":"1399"/i);
  assert.match(service, /"priceCurrency":"USD"/i);

  const benchmark = await readPage("/resources/kickstarter-tabletop-games-benchmark");
  assert.match(benchmark, /kickstarter-tabletop-games-benchmark-2024\.csv/i);
  assert.match(benchmark, /Guildframe calculations from Kickstarter/i);
  assert.doesNotMatch(benchmark, /"@type":"FAQPage"/i);
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
  assert.match(home, /Buy the theme for \$419/i);
  assert.match(home, /Get the full store for \$1,399/i);
  assert.doesNotMatch(home, /free custom setup|custom setup included|included free/i);
  assert.match(missing, /This path ends here/i);
  assert.match(missing, /content="noindex/i);
  assert.match(redirects, /^\/pricing \/#pricing 301/m);
  assert.match(headers, /X-Content-Type-Options: nosniff/i);
});

test("keeps every indexable page title, description and canonical unique", async () => {
  const titles = new Map();
  const descriptions = new Map();
  const canonicals = new Map();

  for (const [path] of pages) {
    const html = await readPage(path);
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];

    assert.ok(title, `missing title: ${path}`);
    assert.ok(description, `missing description: ${path}`);
    assert.ok(canonical, `missing canonical: ${path}`);
    assert.equal(titles.get(title), undefined, `duplicate title: ${title}`);
    assert.equal(descriptions.get(description), undefined, `duplicate description: ${description}`);
    assert.equal(canonicals.get(canonical), undefined, `duplicate canonical: ${canonical}`);

    titles.set(title, path);
    descriptions.set(description, path);
    canonicals.set(canonical, path);
  }
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
    assert.doesNotMatch(source, /free custom setup|free setup included|custom setup included|setup bonus/i, file.pathname);
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

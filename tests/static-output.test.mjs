import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

const pages = [
  ["/", "Shopify Stores for Tabletop Games | Guildframe", "Shopify stores"],
  ["/buy", "Buy Guildframe | Guildframe", "Build it yourself"],
  ["/done-for-you-shopify-store", "Shopify Design and Development for Tabletop Brands | Guildframe", "Your tabletop world"],
  ["/shopify-theme-for-board-games", "Shopify Theme for Board Games | Guildframe", "board game Shopify theme"],
  ["/kickstarter-to-shopify", "Kickstarter to Shopify for Funded Tabletop Games | Guildframe", "Your campaign funded"],
  ["/shopify-theme-for-ttrpg", "Shopify Theme for TTRPG Publishers | Guildframe", "TTRPG Shopify theme"],
  ["/shopify-theme-for-miniatures", "Shopify Theme for Miniatures and Terrain | Guildframe", "miniatures Shopify theme"],
  ["/guides", "Tabletop Ecommerce and Kickstarter Guides | Guildframe", "Build what comes"],
  ["/guides/what-happens-after-kickstarter-is-funded", "What Happens After Your Kickstarter Is Funded? | Guildframe", "What Happens After Your Kickstarter Is Funded"],
  ["/guides/move-from-kickstarter-to-shopify", "Kickstarter to Shopify Migration Guide | Guildframe", "Kickstarter to Shopify Migration Guide"],
  ["/guides/best-shopify-themes-for-board-games", "6 Best Shopify Themes for Board Games in 2026 | Guildframe", "6 Best Shopify Themes for Board Games"],
  ["/guides/shopify-developer-vs-diy-theme", "Shopify Developer vs DIY Theme for Tabletop Brands | Guildframe", "Shopify Developer vs DIY Theme"],
  ["/guides/kickstarter-late-pledges-vs-shopify", "Selling After Kickstarter: Late Pledges vs Shopify | Guildframe", "Selling After Kickstarter"],
  ["/guides/backerkit-vs-shopify-vs-gamefound", "BackerKit vs Shopify vs Gamefound After Crowdfunding | Guildframe", "BackerKit vs Shopify vs Gamefound"],
  ["/guides/kickstarter-to-shopify-launch-timeline", "Kickstarter to Shopify Launch Timeline | Guildframe", "Kickstarter to Shopify Launch Timeline"],
  ["/guides/sell-board-game-preorders-on-shopify", "How to Sell Board Game Preorders on Shopify | Guildframe", "How to Sell Board Game Preorders"],
  ["/guides/sell-board-game-expansions-add-ons-shopify", "Sell Board Game Expansions and Add ons on Shopify | Guildframe", "How to Sell Board Game Expansions"],
  ["/guides/selling-miniatures-internationally-vat-ioss", "Selling Miniatures Internationally: VAT and IOSS | Guildframe", "Selling Miniatures Internationally"],
  ["/guides/how-much-does-a-board-game-website-cost", "How Much Does a Board Game Website Cost? | Guildframe", "How Much Does a Board Game Website Cost"],
  ["/guides/shopify-vs-etsy-for-selling-miniatures", "Shopify vs Etsy for Selling Miniatures | Guildframe", "Shopify vs Etsy for Selling Miniatures"],
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

test("exports the project inquiry form on every public page", async (t) => {
  for (const [path] of pages) {
    await t.test(path, async () => {
      const html = await readPage(path);
      const form = html.match(
        /<form\b(?=[^>]*\baction="https:\/\/formspree\.io\/f\/mrewkezq")[^>]*>[\s\S]*?<\/form>/i,
      )?.[0];

      assert.ok(form, `missing Formspree inquiry form: ${path}`);
      assert.match(
        form,
        /<input\b(?=[^>]*\bname="name")(?=[^>]*\btype="text")(?=[^>]*\brequired(?:="")?)[^>]*>/i,
        `missing required name field: ${path}`,
      );
      assert.match(
        form,
        /<input\b(?=[^>]*\bname="email")(?=[^>]*\btype="email")(?=[^>]*\brequired(?:="")?)[^>]*>/i,
        `missing required email field: ${path}`,
      );
      assert.match(
        form,
        /<textarea\b(?=[^>]*\bname="message")(?=[^>]*\brequired(?:="")?)[^>]*>/i,
        `missing required message field: ${path}`,
      );

      const formId = html.indexOf('id="start-project"');
      const formSectionEnd = html.indexOf("</section>", formId);
      const footerStart = html.indexOf("<footer", formSectionEnd);
      assert.ok(formId >= 0 && formSectionEnd > formId && footerStart > formSectionEnd);
      assert.doesNotMatch(
        html.slice(formSectionEnd + "</section>".length, footerStart),
        /<section\b/i,
        `inquiry form must be the last section before the footer: ${path}`,
      );
    });
  }
});

test("routes every homepage free-preview CTA to one inquiry section", async () => {
  const home = await readPage("/");
  const previewCtas = [...home.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
    .filter(([, , contents]) =>
      /\bGet my free preview\b/i.test(contents.replace(/<[^>]+>/g, " ")),
    );

  assert.ok(previewCtas.length > 0, "missing homepage free-preview CTAs");
  for (const [, attributes] of previewCtas) {
    assert.match(attributes, /\bhref="#start-project"/i);
  }
  assert.equal(
    (home.match(/<section\b[^>]*\bid="start-project"[^>]*>/gi) ?? []).length,
    1,
    "homepage must contain exactly one #start-project form section",
  );
  assert.ok(
    home.indexOf("Your game deserves a store") < home.indexOf('id="start-project"'),
    "homepage final choice section must appear before the inquiry form",
  );
});

test("keeps every internal page link and section anchor valid", async () => {
  const knownPaths = new Set(pages.map(([path]) => path));
  const pageCache = new Map();

  for (const [sourcePath] of pages) {
    const html = await readPage(sourcePath);
    const hrefs = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)]
      .map((match) => match[1].replaceAll("&amp;", "&"));

    for (const href of hrefs) {
      const target = new URL(href, `http://localhost:3000${sourcePath}`);
      if (target.origin !== "http://localhost:3000") continue;

      const targetPath = target.pathname === "/"
        ? "/"
        : target.pathname.replace(/\/$/, "");
      if (!knownPaths.has(targetPath)) {
        assert.equal(target.hash, "", `asset link cannot target a section: ${href} on ${sourcePath}`);
        await access(new URL(targetPath.slice(1), outputRoot));
        continue;
      }

      if (!target.hash) continue;
      const targetHtml = pageCache.get(targetPath) ?? await readPage(targetPath);
      pageCache.set(targetPath, targetHtml);
      const id = decodeURIComponent(target.hash.slice(1));
      assert.match(
        targetHtml,
        new RegExp(`\\bid="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "i"),
        `broken section anchor ${href} on ${sourcePath}`,
      );
    }
  }
});

test("exports a complete sitemap and crawlable robots policy", async () => {
  const sitemap = await readFile(new URL("sitemap.xml", outputRoot), "utf8");
  const robots = await readFile(new URL("robots.txt", outputRoot), "utf8");
  const llms = await readFile(new URL("llms.txt", outputRoot), "utf8");

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
  assert.equal((sitemap.match(/<lastmod>2026-07-(?:17|18|19|21|23)T00:00:00.000Z<\/lastmod>/g) ?? []).length, pages.length);
  assert.match(sitemap, /<lastmod>2026-07-23T00:00:00.000Z<\/lastmod>/);
  assert.match(llms, /^# Guildframe$/m);
  assert.match(llms, /https:\/\/guildframe\.com\/done-for-you-shopify-store/i);
  assert.match(llms, /\$2,500/);
  assert.match(llms, /\$349/);
  assert.match(llms, /within 72 hours/i);
});

test("exports AEO and social metadata", async () => {
  const solutionPaths = [
    "/shopify-theme-for-board-games",
    "/shopify-theme-for-ttrpg",
    "/shopify-theme-for-miniatures",
  ];
  const articlePaths = [
    "/guides/what-happens-after-kickstarter-is-funded",
    "/guides/move-from-kickstarter-to-shopify",
    "/guides/best-shopify-themes-for-board-games",
    "/guides/shopify-developer-vs-diy-theme",
    "/guides/kickstarter-late-pledges-vs-shopify",
    "/guides/backerkit-vs-shopify-vs-gamefound",
    "/guides/kickstarter-to-shopify-launch-timeline",
    "/guides/sell-board-game-preorders-on-shopify",
    "/guides/sell-board-game-expansions-add-ons-shopify",
    "/guides/selling-miniatures-internationally-vat-ioss",
    "/guides/how-much-does-a-board-game-website-cost",
    "/guides/shopify-vs-etsy-for-selling-miniatures",
    "/resources/board-game-shopify-store-checklist",
    "/resources/kickstarter-to-shopify-migration-checklist",
    "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    "/resources/board-game-product-page-checklist",
    "/resources/kickstarter-tabletop-games-benchmark",
  ];
  const modifiedDates = new Map([
    ["/guides/what-happens-after-kickstarter-is-funded", "2026-07-21"],
    ["/guides/move-from-kickstarter-to-shopify", "2026-07-21"],
    ["/guides/best-shopify-themes-for-board-games", "2026-07-21"],
    ["/guides/shopify-developer-vs-diy-theme", "2026-07-21"],
    ["/guides/kickstarter-to-shopify-launch-timeline", "2026-07-21"],
    ["/guides/kickstarter-late-pledges-vs-shopify", "2026-07-18"],
    ["/guides/backerkit-vs-shopify-vs-gamefound", "2026-07-18"],
    ["/resources/backerkit-vs-shopify-vs-gamefound-comparison", "2026-07-18"],
    ["/guides/selling-miniatures-internationally-vat-ioss", "2026-07-23"],
    ["/guides/how-much-does-a-board-game-website-cost", "2026-07-23"],
    ["/guides/shopify-vs-etsy-for-selling-miniatures", "2026-07-23"],
  ]);

  for (const path of solutionPaths) {
    const html = await readPage(path);
    assert.match(html, /"@type":"Product"/i, path);
    assert.match(html, /"price":"349"/i, path);
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
  assert.match(homepage, /og-guildframe-offers-v6\.jpg/i);
  assert.match(homepage, /"image":"http:\/\/localhost:3000\/og-guildframe-offers-v6\.jpg"/i);
  assert.match(homepage, /"availability":"https:\/\/schema\.org\/InStock"/i);
  assert.match(homepage, /"@type":"Organization"/i);
  assert.match(homepage, /"@type":"Service"/i);
  assert.match(homepage, /"price":"2500"/i);
  assert.doesNotMatch(homepage, /"@type":"Audience"/i);
  assert.doesNotMatch(homepage, /OutOfStock/i);
  assert.match(homepage, /G-TEST123456/i);

  const homepageImages = homepage.match(/<img\b[^>]*>/gi) ?? [];
  assert.ok(homepageImages.length > 0, "Homepage should contain images");
  for (const image of homepageImages) {
    assert.match(image, /\bwidth="\d+"/i, image);
    assert.match(image, /\bheight="\d+"/i, image);
  }

  const service = await readPage("/done-for-you-shopify-store");
  assert.match(service, /"@type":"Service"/i);
  assert.match(service, /"price":"2500"/i);
  assert.match(service, /"priceCurrency":"USD"/i);

  const campaignService = await readPage("/kickstarter-to-shopify");
  assert.match(campaignService, /"@type":"Service"/i);
  assert.match(campaignService, /"@type":"FAQPage"/i);

  const benchmark = await readPage("/resources/kickstarter-tabletop-games-benchmark");
  assert.match(benchmark, /kickstarter-tabletop-games-benchmark-2024\.csv/i);
  assert.match(benchmark, /Guildframe calculations from Kickstarter/i);
  assert.match(benchmark, /"@type":"FAQPage"/i);
});

test("keeps purchase, recovery and redirects launch-ready", async () => {
  const home = await readPage("/");
  const buy = await readPage("/buy");
  const missing = await readFile(new URL("404.html", outputRoot), "utf8");
  const redirects = await readFile(new URL("_redirects", outputRoot), "utf8");
  const headers = await readFile(new URL("_headers", outputRoot), "utf8");

  assert.match(home, /href="#start-project"[^>]*class="[^"]*checkout-button[^"]*"/i);
  assert.doesNotMatch(home, /class="hero-text-link" href="#process">\s*See how it works/i);
  assert.doesNotMatch(
    home,
    /<h3>Send your store brief<\/h3>|<h3>We design and build<\/h3>|<h3>Review and publish<\/h3>/i,
  );
  assert.ok(
    home.indexOf("Choose how your store gets built.") < home.indexOf("pricing-options"),
    "The pricing introduction should appear before the pricing cards",
  );
  assert.doesNotMatch(home, /href="#faq"[^>]*class="checkout-button"/i);
  assert.match(home, /data-analytics-event="theme_interest"/i);
  assert.match(
    buy,
    /<a\b(?=[^>]*href="#theme-checkout")(?=[^>]*class="buy-checkout-button")[^>]*>/i,
  );
  assert.match(buy, /Secure checkout link pending/i);
  assert.doesNotMatch(buy, /https:\/\/checkout\.example\/guildframe/i);
  assert.doesNotMatch(buy, /data-analytics-event="checkout_redirect"/i);
  assert.match(home, /Get the theme/i);
  assert.match(home, /Get my free preview/i);
  assert.doesNotMatch(
    home,
    /Start my store|Build my(?: Shopify)? store|Get free preview|Get my free store preview|Request (?:a |my )?free (?:store )?preview/i,
  );
  assert.match(home, /\$2,500/i);
  assert.match(home, /\$349/i);
  assert.match(home, /within 72 hours/i);
  assert.doesNotMatch(home, /Build my store for \$2,500|Get the theme for \$349/i);
  assert.doesNotMatch(home, /\$419|\$1,399|within 48 hours|free 48-hour/i);
  assert.doesNotMatch(home, /Three ways to build your store/i);
  assert.match(home, /Rune Single/i);
  assert.match(home, /Rune Studio/i);
  assert.match(home, /Saga Single/i);
  assert.match(home, /Saga Studio/i);
  assert.doesNotMatch(home, /mailto:/i);
  assert.doesNotMatch(home, /Got questions or queries|You will hear from the developer/i);
  assert.doesNotMatch(home, />Umair</i);
  assert.match(home, /Shopify Partner/i);
  assert.doesNotMatch(home, /free custom setup|custom setup included|included free/i);

  const primaryPricing = home.match(/<section\b[^>]*\bid="pricing"[^>]*>[\s\S]*?<\/section>/i)?.[0] ?? "";
  const finalPricing = home.match(/<section\b[^>]*\bid="pricing-final"[^>]*>[\s\S]*?<\/section>/i)?.[0] ?? "";
  assert.ok(primaryPricing, "missing primary pricing section");
  assert.equal(finalPricing, "", "homepage should have only one pricing section");
  assert.match(primaryPricing, /Guildframe Care Plan/i);
  assert.match(primaryPricing, /\$99/i);
  assert.match(missing, /This path ends here/i);
  assert.match(missing, /content="noindex/i);
  assert.match(redirects, /^\/pricing \/#pricing 301/m);
  assert.doesNotMatch(redirects, /^\/resources\s/m);
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
    assert.doesNotMatch(source, /[\u2013\u2014]/u, file.pathname);
    assert.doesNotMatch(source, /free custom setup|free setup included|custom setup included|setup bonus/i, file.pathname);
    assert.doesNotMatch(source, /48[ -]?hours?|48-hour/i, file.pathname);
  }

  for (const [path] of pages) {
    const html = await readPage(path);
    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-zA-Z0-9#]+;/g, " ");
    assert.doesNotMatch(visibleText, /[\u2013\u2014]|\b[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+\b/u, path);
  }

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const imageRule = css.match(/\.seo-hero-visual img\s*\{([^}]+)\}/)?.[1] ?? "";
  assert.match(imageRule, /height:\s*auto/i);
  assert.match(imageRule, /object-fit:\s*contain/i);
  assert.doesNotMatch(imageRule, /object-fit:\s*cover/i);

  for (const selector of ["funded-creator-visual", "campaign-service-hero-image"]) {
    const rule = css.match(new RegExp(`\\.${selector} img\\s*\\{([^}]+)\\}`))?.[1] ?? "";
    assert.match(rule, /height:\s*auto/i, selector);
    assert.doesNotMatch(rule, /object-fit:\s*cover/i, selector);
  }
});

test("does not ship GitHub Actions workflows", async () => {
  await assert.rejects(access(new URL("../.github/workflows/", import.meta.url)));
});

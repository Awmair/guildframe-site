import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);
const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() || "https://formspree.io/f/mrewkezq";

const pages = [
  ["/", "Kickstarter Agency for Board Games & Tabletop | Guildframe", "Kickstarter launches"],
  ["/buy", "Start Your Tabletop Launch Project | Guildframe", "Start your tabletop launch project"],
  ["/done-for-you-shopify-store", "Shopify Store Planning After Your Campaign | Guildframe", "Plan a Shopify store after crowdfunding"],
  ["/shopify-theme-for-board-games", "Shopify Theme and Store Setup for Board Games | Guildframe", "Plan your board game"],
  ["/kickstarter-to-shopify", "Kickstarter to Shopify for Funded Tabletop Games | Guildframe", "Move from Kickstarter"],
  ["/shopify-theme-for-ttrpg", "Shopify Store and Theme Setup for TTRPG Publishers | Guildframe", "Plan your TTRPG"],
  ["/shopify-theme-for-miniatures", "Shopify Store and Theme Setup for Miniatures | Guildframe", "Plan your miniatures"],
  ["/guides", "Kickstarter Marketing, Design & Launch Guides | Guildframe", "Kickstarter marketing"],
  ["/guides/what-happens-after-kickstarter-is-funded", "What Happens After Your Kickstarter Is Funded? | Guildframe", "What Happens After Your Kickstarter Is Funded"],
  ["/guides/move-from-kickstarter-to-shopify", "Kickstarter to Shopify Migration Guide | Guildframe", "Kickstarter to Shopify Migration Guide"],
  ["/guides/best-shopify-themes-for-board-games", "6 Best Shopify Themes for Board Games in 2026 | Guildframe", "6 Best Shopify Themes for Board Games"],
  ["/guides/shopify-developer-vs-diy-theme", "Shopify Developer vs DIY Theme | Guildframe", "Shopify Developer vs DIY Theme"],
  ["/guides/kickstarter-late-pledges-vs-shopify", "Selling After Kickstarter: Late Pledges vs Shopify | Guildframe", "Selling After Kickstarter"],
  ["/guides/backerkit-vs-shopify-vs-gamefound", "BackerKit vs Shopify vs Gamefound | Guildframe", "BackerKit vs Shopify vs Gamefound"],
  ["/guides/kickstarter-to-shopify-launch-timeline", "Kickstarter to Shopify Launch Timeline | Guildframe", "Kickstarter to Shopify Launch Timeline"],
  ["/guides/sell-board-game-preorders-on-shopify", "How to Sell Board Game Preorders on Shopify | Guildframe", "How to Sell Board Game Preorders"],
  ["/guides/sell-board-game-expansions-add-ons-shopify", "Board Game Expansions & Bundles on Shopify | Guildframe", "How to Sell Board Game Expansions"],
  ["/guides/selling-miniatures-internationally-vat-ioss", "Selling Miniatures Internationally: VAT and IOSS | Guildframe", "Selling Miniatures Internationally"],
  ["/guides/how-much-does-a-board-game-website-cost", "How Much Does a Board Game Website Cost? | Guildframe", "How Much Does a Board Game Website Cost"],
  ["/guides/shopify-vs-etsy-for-selling-miniatures", "Shopify vs Etsy for Selling Miniatures | Guildframe", "Shopify vs Etsy for Selling Miniatures"],
  ["/guides/build-a-tabletop-shopify-store-with-ai", "Build a Tabletop Shopify Store With AI | Guildframe", "Build a Tabletop Shopify Store With AI"],
  ["/about", "About Guildframe | Guildframe", "About Guildframe"],
  ["/editorial-policy", "Editorial Policy | Guildframe", "Guildframe editorial policy"],
  ["/authors/guildframe", "Umair: Campaign Designer & Guide Author | Guildframe", "Umair, campaign designer"],
  ["/resources", "Tabletop Campaign Checklists & Crowdfunding Resources | Guildframe", "Campaign checklists"],
  ["/resources/board-game-shopify-store-checklist", "Board Game Shopify Store Checklist | Guildframe", "Board Game Shopify Store Checklist"],
  ["/resources/kickstarter-to-shopify-migration-checklist", "Kickstarter to Shopify Migration Checklist | Guildframe", "Kickstarter to Shopify Migration Checklist"],
  ["/resources/backerkit-vs-shopify-vs-gamefound-comparison", "Tabletop Crowdfunding Platform Role Matrix | Guildframe", "Tabletop Crowdfunding Platform Role Matrix"],
  ["/resources/board-game-product-page-checklist", "Board Game Shopify Product Page Checklist | Guildframe", "Board Game Shopify Product Page Checklist"],
  ["/resources/kickstarter-tabletop-games-benchmark", "2024 Kickstarter Tabletop Games Funding Benchmark | Guildframe", "6,646"],
  ["/resources/tabletop-shopify-metafield-schema", "Tabletop Shopify Metafield Schema | Guildframe", "Tabletop Shopify Metafield Schema"],
  ["/campaign-design", "Kickstarter Campaign Designer: Copy & Graphics | Guildframe", "Kickstarter campaign design"],
  ["/gamefound-campaign-design", "Gamefound Page Design for Tabletop Games | Guildframe", "Gamefound page design"],
  ["/board-game-kickstarter-campaign-design", "Board Game Kickstarter Page Design | Guildframe", "for board games"],
  ["/card-game-kickstarter-campaign-design", "Card Game & TCG Kickstarter Page Design | Guildframe", "for card games"],
  ["/ttrpg-kickstarter-campaign-design", "TTRPG Kickstarter Page Design | Guildframe", "for your tabletop RPG"],
  ["/miniatures-kickstarter-campaign-design", "Miniatures & Terrain Kickstarter Page Design | Guildframe", "for miniatures"],
  ["/tabletop-accessories-campaign-design", "Tabletop Accessories Kickstarter Page Design | Guildframe", "for dice"],
  ["/guides/board-game-kickstarter-campaign-design-cost", "Kickstarter Campaign Design Cost & Budget Guide | Guildframe", "How Much Does Board Game Kickstarter Campaign Design Cost"],
  ["/guides/board-game-kickstarter-page-checklist", "Board Game Kickstarter Page Checklist | Guildframe", "Board Game Kickstarter Page Checklist Before Launch"],
  ["/guides/what-to-send-kickstarter-campaign-designer", "What to Send Your Kickstarter Campaign Designer | Guildframe", "What to Send Your Kickstarter Campaign Designer"],
  ["/guides/kickstarter-reward-tier-graphics", "Kickstarter Reward Tier Graphics for Board Games | Guildframe", "Kickstarter Reward Tier Graphics for Board Games"],
  ["/guides/ttrpg-kickstarter-campaign-page-design", "How to Design a TTRPG Kickstarter Campaign Page | Guildframe", "How to Design a TTRPG Kickstarter Campaign Page"],
  ["/guides/kickstarter-vs-gamefound-campaign-page-design", "Kickstarter vs Gamefound: Page Design | Guildframe", "Kickstarter vs Gamefound: Campaign Page Design Differences"],
  ["/guides/kickstarter-campaign-graphics-mobile-readability", "Kickstarter Image Sizes & Mobile Graphics | Guildframe", "Kickstarter Image Sizes and Readable Campaign Graphics"],
  ["/guides/when-to-hire-kickstarter-campaign-designer", "When to Hire a Kickstarter Campaign Designer | Guildframe", "When Should You Hire a Kickstarter Campaign Designer"],

  ["/guides/kickstarter-prelaunch-page-guide", "Kickstarter Prelaunch Page Guide for Tabletop Games | Guildframe", "Kickstarter Prelaunch Page"],
  ["/guides/board-game-kickstarter-gameplay-rulebook", "Board Game Kickstarter Gameplay & Rulebook Guide | Guildframe", "How to Explain Board Game Gameplay"],
  ["/guides/kickstarter-campaign-video-planning", "Kickstarter Video Requirements & Tabletop Video Planning | Guildframe", "Kickstarter Campaign Video"],
  ["/guides/kickstarter-stretch-goals-planning", "Kickstarter Stretch Goals for Board Games: Planning Guide | Guildframe", "Kickstarter Stretch Goals"],
  ["/guides/kickstarter-shipping-delivery-page", "Kickstarter Shipping Costs & Delivery: Creator Page Guide | Guildframe", "How to Explain Kickstarter Shipping"],
  ["/guides/kickstarter-prototype-risks-disclosure", "Kickstarter Prototype Images & Risks for Tabletop Creators | Guildframe", "Kickstarter Prototype Images and Risks"],
  ["/guides/kickstarter-review-launch-timeline", "Kickstarter Review Time & Launch Timeline for Game Creators | Guildframe", "Kickstarter Review to Launch"],
  ["/guides/gamefound-launch-page-checklist", "Gamefound Launch Page Checklist & Tester Mode Guide | Guildframe", "Gamefound Launch Checklist"],
  ["/guides/card-game-kickstarter-launch-guide", "Card Game & TCG Kickstarter Launch Page Guide | Guildframe", "Card Game Kickstarter Launch Guide"],
  ["/guides/miniatures-stl-kickstarter-launch-guide", "Miniatures & STL Kickstarter Launch Page Guide | Guildframe", "Miniatures and STL Kickstarter Pages"],
  ["/resources/tabletop-campaign-launch-worksheet", "Tabletop Campaign Launch Worksheet | Guildframe", "Tabletop Campaign Launch Worksheet"],
  ["/kickstarter-launch-services", "Kickstarter Launch Services for Tabletop Games | Guildframe", "Kickstarter launch services"],
  ["/kickstarter-prelaunch-marketing", "Kickstarter Prelaunch Marketing for Board Games | Guildframe", "Kickstarter prelaunch marketing"],
  ["/kickstarter-advertising", "Kickstarter Advertising for Board Games & TTRPGs | Guildframe", "Kickstarter advertising"],
  ["/kickstarter-campaign-management", "Kickstarter Campaign Management for Tabletop Games | Guildframe", "Kickstarter campaign management"],
  ["/gamefound-launch-services", "Gamefound Launch Services for Tabletop Creators | Guildframe", "Gamefound launch services"],
  ["/post-campaign-support", "Post Campaign Support for Funded Tabletop Games | Guildframe", "After the campaign"],
  ["/guides/board-game-kickstarter-marketing-plan", "Board Game Kickstarter Marketing Plan & Launch Checklist | Guildframe", "Board Game Kickstarter Marketing Plan"],
  ["/guides/kickstarter-prelaunch-email-list", "Kickstarter Prelaunch Email List for Board Games | Guildframe", "Kickstarter Prelaunch Email List"],
  ["/guides/kickstarter-advertising-budget-board-games", "Kickstarter Advertising Budget for Board Games | Guildframe", "Kickstarter Advertising Budget"],
  ["/guides/kickstarter-live-campaign-updates", "Kickstarter Campaign Updates & Live Support Plan | Guildframe", "Kickstarter Campaign Updates"],
];

const afterFundingPaths = new Set(['/guides/what-happens-after-kickstarter-is-funded', '/guides/move-from-kickstarter-to-shopify', '/guides/best-shopify-themes-for-board-games', '/guides/shopify-developer-vs-diy-theme', '/guides/kickstarter-late-pledges-vs-shopify', '/guides/backerkit-vs-shopify-vs-gamefound', '/guides/kickstarter-to-shopify-launch-timeline', '/guides/sell-board-game-preorders-on-shopify', '/guides/sell-board-game-expansions-add-ons-shopify', '/guides/selling-miniatures-internationally-vat-ioss', '/guides/how-much-does-a-board-game-website-cost', '/guides/shopify-vs-etsy-for-selling-miniatures', '/guides/build-a-tabletop-shopify-store-with-ai']);

const outputFile = (path) =>
  new URL(path === "/" ? "index.html" : `${path.slice(1)}.html`, outputRoot);

const readPage = (path) => readFile(outputFile(path), "utf8");

test("exports every public page with search essentials", async (t) => {
  for (const [path, title, phrase] of pages) {
    await t.test(path, async () => {
      const html = await readPage(path);
      assert.equal(html.match(/<title>([^<]+)<\/title>/i)?.[1].replaceAll("&amp;", "&"), title);
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
        new RegExp(`<form\\b(?=[^>]*\\baction="${formEndpoint.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}")[^>]*>[\\s\\S]*?<\\/form>`, "i"),
      )?.[0];

      assert.ok(form, `missing project inquiry form: ${path}`);
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

test("routes free mockup calls to one inquiry section", async()=>{
 const home=await readPage("/");
 const calls=[...home.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].filter(([, ,text])=>/free (?:campaign )?mockup/i.test(text.replace(/<[^>]+>/g," ")));
 assert.ok(calls.length>=1);for(const [,attrs] of calls)assert.match(attrs,/href="#start-project"/);
 assert.equal((home.match(/<section\b[^>]*id="start-project"/g)||[]).length,1);
 assert.ok(home.indexOf('id="pricing"')<home.indexOf('id="start-project"'));
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
  assert.equal((sitemap.match(/<lastmod>[^<]+<\/lastmod>/g) ?? []).length, pages.length);
  assert.match(sitemap, /<lastmod>2026-09-30T00:00:00.000Z<\/lastmod>/);
  assert.match(llms, /^# Guildframe$/m);
  assert.match(llms, /https:\/\/guildframe\.com\/done-for-you-shopify-store/i);
  assert.match(llms, /campaign-design#pricing/);
  assert.match(llms, /no payment or obligation/i);
});

test("makes every canonical page reachable from the homepage", async () => {
  const known = new Set(pages.map(([path]) => path));
  const reached = new Set(["/"]);
  const pending = ["/"];
  while (pending.length) {
    const current = pending.pop();
    const html = await readPage(current);
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
      const target = new URL(href.replaceAll("&amp;", "&"), `http://localhost:3000${current}`);
      const path = target.pathname.replace(/\/$/, "") || "/";
      if (target.origin === "http://localhost:3000" && known.has(path) && !reached.has(path)) {
        reached.add(path);
        pending.push(path);
      }
    }
  }
  assert.deepEqual([...known].filter(path => !reached.has(path)), []);
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
    "/guides/build-a-tabletop-shopify-store-with-ai",
    "/resources/board-game-shopify-store-checklist",
    "/resources/kickstarter-to-shopify-migration-checklist",
    "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    "/resources/board-game-product-page-checklist",
    "/resources/kickstarter-tabletop-games-benchmark",
    "/resources/tabletop-shopify-metafield-schema",
  ];
  articlePaths.push("/guides/board-game-kickstarter-campaign-design-cost");
  articlePaths.push("/guides/board-game-kickstarter-page-checklist");
  articlePaths.push("/guides/what-to-send-kickstarter-campaign-designer");
  articlePaths.push("/guides/kickstarter-reward-tier-graphics");
  articlePaths.push("/guides/ttrpg-kickstarter-campaign-page-design");
  articlePaths.push("/guides/kickstarter-vs-gamefound-campaign-page-design");
  articlePaths.push("/guides/kickstarter-campaign-graphics-mobile-readability");
  articlePaths.push("/guides/when-to-hire-kickstarter-campaign-designer");


  for (const path of solutionPaths) {
    const html = await readPage(path);
    assert.match(html, /"@type":"WebPage"/i, path);
    assert.doesNotMatch(html, /"@type":"Product"/i, path);
  }

  for (const path of articlePaths) {
    const html = await readPage(path);
    assert.match(html, /<meta property="og:type" content="article"/i, path);
    assert.match(html, /"@type":"(?:Article|TechArticle)"/i, path);
    assert.match(html, /"isAccessibleForFree":true/i, path);
    assert.match(html, /"author":\{"@id":"http:\/\/localhost:3000\/authors\/guildframe#umair"\}/i, path);
    const modifiedDate = datedPages.get(path) ?? "2026-10-03";
    assert.match(html, new RegExp(`"dateModified":"${modifiedDate}"`, "i"), path);
    assert.match(html, /"citation":\[\{"@type":"CreativeWork","name":"[^"]+","url":"https?:\/\//i, path);
    assert.match(html, /"citation":\[[\s\S]*?"publisher":\{"@type":"Organization","name":"[^"]+"\}/i, path);
    assert.match(html, /Sources and references/i, path);
    assert.match(html, new RegExp(`"@id":"http://localhost:3000${path}#breadcrumb"`, "i"), path);
    assert.match(html, new RegExp(`"@id":"http://localhost:3000${path}#article"`, "i"), path);
  }

  const referencePaths = [
    "/resources/board-game-shopify-store-checklist",
    "/resources/kickstarter-to-shopify-migration-checklist",
    "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    "/resources/board-game-product-page-checklist",
    "/resources/kickstarter-tabletop-games-benchmark",
    "/resources/tabletop-shopify-metafield-schema",
  ];
  for (const path of referencePaths) {
    const html = await readPage(path);
    assert.match(html, /"@type":"TechArticle"/i, path);
    assert.match(html, /<meta name="author" content="Umair"/i, path);
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
    /"dateModified":"2026-10-03"/i,
  );
  assert.match(await readPage("/resources"), /"@type":"CollectionPage"/i);

  const homepage = await readPage("/");
  assert.match(homepage, /og-guildframe-launch\.jpg/i);
  assert.match(homepage, /"@type":"Organization"/i);
  assert.match(homepage, /"@type":"Service"/i);
  assert.doesNotMatch(homepage, /"price":"975"/i);
  assert.doesNotMatch(homepage, /"@type":"Audience"/i);
  assert.doesNotMatch(homepage, /OutOfStock/i);
  assert.match(homepage, /G-TEST123456/i);

  const homepageImages = homepage.match(/<img\b[^>]*>/gi) ?? [];
  assert.ok(homepageImages.length > 0, "Homepage should contain images");
  for (const image of homepageImages) {
    assert.match(image, /\bwidth="\d+"/i, image);
    assert.match(image, /\bheight="\d+"/i, image);
  }

  const service = await readPage("/campaign-design");
  assert.match(service, /"@type":"Service"/i);
  assert.match(service, /"price":"975"/i);
  assert.match(service, /"priceCurrency":"USD"/i);

  const campaignService = await readPage("/kickstarter-to-shopify");
  assert.match(campaignService, /"@type":"FAQPage"/i);

  const benchmark = await readPage("/resources/kickstarter-tabletop-games-benchmark");
  assert.match(benchmark, /kickstarter-tabletop-games-benchmark-2024\.csv/i);
  assert.match(benchmark, /Guildframe calculations from Kickstarter/i);
  assert.match(benchmark, /"@type":"FAQPage"/i);
});

test("keeps campaign pricing, recovery and redirects ready",async()=>{
 const home=await readPage("/");const campaign=await readPage("/campaign-design");const buy=await readPage("/buy");
 for(const html of [home,campaign,buy]){assert.match(html,/free mockup/i);assert.doesNotMatch(html,/\$79|\$2,500|\$99|fiverr|checkout pending|within 72 hours/i);}
 assert.match(home,/mailto:umair@guildframe.com/);assert.doesNotMatch(home,/"price":"975"/);assert.match(campaign,/"priceCurrency":"USD"/);
 assert.match(home,/Concept mockups showing different types/i);assert.match(home,/prefers-reduced-motion|gf-home/i);
 const missing=await readFile(new URL("404.html",outputRoot),"utf8");assert.match(missing,/This page could not be found/);assert.match(missing,/content="noindex/);
 const redirects=await readFile(new URL("_redirects",outputRoot),"utf8");assert.match(redirects,/^\/pricing \/#pricing 301/m);assert.match(redirects,/^\/customization \/campaign-design 301/m);
 const headers=await readFile(new URL("_headers",outputRoot),"utf8");assert.match(headers,/X-Content-Type-Options: nosniff/i);
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

const retiredOfferPrice = /\$(?:349|419|1,399|2,199)\b|\b(?:349|419|1,399|2,199)\s+dollars?\b/i;
const retiredPresetName = /\b(?:Rune Single|Rune Studio|Saga Single|Saga Studio|Nightbanner|Brightmarch|Vaultmark)\b/i;
const guildframeThemeClaim = [
  /\bthe Guildframe (?:DIY |Shopify |tabletop |premium )?theme\b/i,
  /\bGuildframe(?:'s|&apos;s)? (?:DIY |Shopify |tabletop |premium )?theme\b/i,
  /\bGuildframe (?:offers?|provides?|sells?) (?:an? )?(?:(?:\$[\d,]+|[\d,]+ dollars?) )?(?:DIY |Shopify |tabletop |premium )*theme\b/i,
  /\b(?:buy|purchase|order|get) (?:a |the )?(?:DIY |Shopify |tabletop |premium )*theme (?:from|by) Guildframe\b/i,
];
const commercialOfferPaths = new Set([
  "/",
  "/buy",
  "/about",
  "/done-for-you-shopify-store",
  "/kickstarter-to-shopify",
  "/shopify-theme-for-board-games",
  "/shopify-theme-for-ttrpg",
  "/shopify-theme-for-miniatures",
]);

const visibleText = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-zA-Z0-9#]+;/g, " ")
  .replace(/\s+/g, " ");

const sourceCustomerCopy = (source) => source
  .replace(/\b(?:href|src)\s*=\s*["'`][^"'`]*["'`]/gi, " ")
  .replace(/\b(?:image|path|url)\s*:\s*["'`][^"'`]*["'`]/gi, " ");

function assertNoRetiredOfferClaims(copy, label) {
  assert.doesNotMatch(copy, retiredPresetName, label);
  for (const pattern of guildframeThemeClaim) {
    assert.doesNotMatch(copy, pattern, label);
  }

  for (const sentence of copy.split(/[.!?]/)) {
    if (!retiredOfferPrice.test(sentence)) continue;
    if (/\bGuildframe\b[^.!?]{0,120}\b(?:does not|doesn't|is not)\b[^.!?]{0,40}\btheme\b/i.test(sentence)) {
      continue;
    }
    assert.doesNotMatch(
      sentence,
      /\bGuildframe\b/i,
      `retired Guildframe offer price in ${label}: ${sentence.trim()}`,
    );
  }
}

test("keeps retired Guildframe offer claims out of operational source and customer copy", async () => {
  const appRoot = new URL("../app/", import.meta.url);
  const files = await collectSourceFiles(appRoot);
  const envExample = await readFile(new URL("../.env.example", import.meta.url), "utf8");
  const preflight = await readFile(new URL("../scripts/launch-preflight.mjs", import.meta.url), "utf8");

  assert.doesNotMatch(envExample, /NEXT_PUBLIC_GUIDE_CHECKOUT_ENABLED/);
  assert.doesNotMatch(envExample, /NEXT_PUBLIC_THEME_CHECKOUT_ENABLED/);
  assert.doesNotMatch(preflight, /NEXT_PUBLIC_GUIDE_CHECKOUT_ENABLED/);
  assert.doesNotMatch(preflight, /NEXT_PUBLIC_THEME_CHECKOUT_ENABLED|Theme checkout/);

  for (const file of files) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(source, /NEXT_PUBLIC_THEME_CHECKOUT_ENABLED/, file.pathname);
    assertNoRetiredOfferClaims(sourceCustomerCopy(source), file.pathname);
  }

  for (const [path] of pages) {
    const copy = visibleText(await readPage(path));
    assertNoRetiredOfferClaims(copy, path);
    if (commercialOfferPaths.has(path)) {
      assert.doesNotMatch(copy, retiredOfferPrice, path);
    }
  }
});

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
    const copy = visibleText(html);
    assert.doesNotMatch(copy, /[\u2013\u2014]/u, path);
  }

  for (const [path] of pages) {
    for (const image of (await readPage(path)).match(/<img\b[^>]*>/gi) ?? []) {
      assert.match(image, /\bwidth="[1-9]\d*"/i, path);
      assert.match(image, /\bheight="[1-9]\d*"/i, path);
      assert.match(image, /\balt="[^"]+"/i, path);
    }
  }

});

test("does not ship GitHub Actions workflows", async () => {
  await assert.rejects(access(new URL("../.github/workflows/", import.meta.url)));
});

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const readableDate = (iso) => {
  const [year, month, day] = iso.split("-").map(Number);
  return `${monthNames[month - 1]} ${day}, ${year}`;
};

// The sitemap, the schema dateModified and the date a reader sees must never
// drift apart. A hardcoded visible date previously survived several content
// updates because nothing compared it with app/content-dates.ts.
const datedPages = new Map([
  ["/guides/when-to-hire-kickstarter-campaign-designer", "2026-10-03"],
  ["/guides/kickstarter-campaign-graphics-mobile-readability", "2026-10-03"],
  ["/guides/kickstarter-vs-gamefound-campaign-page-design", "2026-10-03"],
  ["/guides/ttrpg-kickstarter-campaign-page-design", "2026-10-03"],
  ["/guides/kickstarter-reward-tier-graphics", "2026-10-03"],
  ["/guides/what-to-send-kickstarter-campaign-designer", "2026-10-03"],
  ["/guides/board-game-kickstarter-page-checklist", "2026-10-03"],
  ["/guides/board-game-kickstarter-campaign-design-cost", "2026-10-03"],
  ["/about", "2026-10-03"],
  ["/editorial-policy", "2026-10-03"],
  ["/authors/guildframe", "2026-10-03"],
  ["/guides/what-happens-after-kickstarter-is-funded", "2026-09-30"],
  ["/guides/move-from-kickstarter-to-shopify", "2026-09-30"],
  ["/guides/best-shopify-themes-for-board-games", "2026-09-30"],
  ["/guides/shopify-developer-vs-diy-theme", "2026-09-30"],
  ["/guides/kickstarter-late-pledges-vs-shopify", "2026-09-30"],
  ["/guides/backerkit-vs-shopify-vs-gamefound", "2026-09-30"],
  ["/guides/kickstarter-to-shopify-launch-timeline", "2026-09-30"],
  ["/guides/sell-board-game-preorders-on-shopify", "2026-09-30"],
  ["/guides/sell-board-game-expansions-add-ons-shopify", "2026-09-30"],
  ["/guides/selling-miniatures-internationally-vat-ioss", "2026-09-30"],
  ["/guides/how-much-does-a-board-game-website-cost", "2026-09-30"],
  ["/guides/shopify-vs-etsy-for-selling-miniatures", "2026-09-30"],
  ["/guides/build-a-tabletop-shopify-store-with-ai", "2026-09-30"],
  ["/resources/board-game-shopify-store-checklist", "2026-09-30"],
  ["/resources/kickstarter-to-shopify-migration-checklist", "2026-09-30"],
  ["/resources/backerkit-vs-shopify-vs-gamefound-comparison", "2026-09-30"],
  ["/resources/board-game-product-page-checklist", "2026-09-30"],
  ["/resources/kickstarter-tabletop-games-benchmark", "2026-09-30"],
  ["/resources/tabletop-shopify-metafield-schema", "2026-09-30"],
  ...pages.filter(([p]) => p.startsWith("/guides/") && !afterFundingPaths.has(p) && !["/guides/when-to-hire-kickstarter-campaign-designer","/guides/ttrpg-kickstarter-campaign-page-design","/guides/what-to-send-kickstarter-campaign-designer","/guides/board-game-kickstarter-campaign-design-cost"].includes(p)).map(([p]) => [p, "2026-10-03"]),
  ["/resources/tabletop-campaign-launch-worksheet", "2026-10-03"],
]);

test("keeps visible review dates, schema dates and sitemap dates identical", async (t) => {
  const sitemap = await readFile(new URL("sitemap.xml", outputRoot), "utf8");
  const contentDates = await readFile(new URL("../app/content-dates.ts", import.meta.url), "utf8");

  for (const [path, expected] of datedPages) {
    await t.test(path, async () => {
      const html = await readPage(path);
      assert.match(
        html,
        new RegExp(`<time datetime="${expected}">${readableDate(expected)}</time>`, "i"),
        `visible review date must match ${expected}`,
      );
      assert.doesNotMatch(
        html,
        new RegExp(`<time datetime="${expected}">(?!${readableDate(expected)})`, "i"),
        `visible review date must not be hardcoded away from ${expected}`,
      );
      assert.match(html, new RegExp(`"dateModified":"${expected}"`), `schema dateModified must be ${expected}`);

      const entry = sitemap.match(
        new RegExp(`<loc>http://localhost:3000${path}</loc>\\s*<lastmod>([^<]+)</lastmod>`),
      );
      assert.ok(entry, `sitemap entry missing: ${path}`);
      assert.equal(entry[1], `${expected}T00:00:00.000Z`, `sitemap lastmod must be ${expected}`);
    });
  }

  for (const expected of new Set(datedPages.values())) {
    assert.ok(contentDates.includes(`"${expected}"`), `app/content-dates.ts must still declare ${expected}`);
  }
});

test("keeps the React payload files out of the search index", async () => {
  const robots = await readFile(new URL("robots.txt", outputRoot), "utf8");
  assert.match(robots, /^Disallow: \/\*\.txt\$$/m, "static export payload files must be disallowed");
  assert.match(robots, /^Allow: \/llms\.txt$/m, "llms.txt must stay explicitly allowed");

  const payload = await readFile(new URL("about.txt", outputRoot), "utf8");
  assert.match(payload, /About Guildframe/i, "about.txt still mirrors page text, so the rule is required");
});

test("publishes an accurate llms.txt for every canonical route", async () => {
  const llms = await readFile(new URL("llms.txt", outputRoot), "utf8");
  for (const [path] of pages) {
    const url = `https://guildframe.com${path === "/" ? "/" : path}`;
    assert.ok(llms.includes(url), `llms.txt must list ${url}`);
  }
  assert.match(llms, /campaign-design#pricing/i, "llms.txt must link the current design price");
  assert.match(llms, /kickstarter-tabletop-games-benchmark-2024\.csv/i, "llms.txt must expose the citable dataset");
  assert.doesNotMatch(llms, /[–—]/u, "llms.txt must follow the no visible dash rule");
});

test("keeps every meta description inside the truncation limit", async (t) => {
  for (const [path] of pages) {
    await t.test(path, async () => {
      const html = await readPage(path);
      const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? "";
      assert.ok(description.length >= 90, `description too short (${description.length}): ${path}`);
      assert.ok(description.length <= 160, `description too long (${description.length}): ${path}`);
    });
  }
});

test("keeps comparison tables, campaign pages and answers connected",async()=>{
 const benchmark=await readPage("/resources/kickstarter-tabletop-games-benchmark");assert.doesNotMatch(benchmark,/<th(?=[\s>])(?![^>]*\bscope=)/i);assert.match(benchmark,/"@type":"Dataset"/);assert.match(benchmark,/"@type":"DataDownload"/);assert.match(benchmark,/"encodingFormat":"text\/csv"/);
 const buy=await readPage("/buy");assert.match(buy,/href="\/campaign-design"/);assert.match(buy,/class="seo-breadcrumbs"/);
 const home=await readPage("/");assert.match(home,/"@type":"FAQPage"/);assert.match(home,/How much does a full launch cost/);
 const cost=await readPage("/guides/board-game-kickstarter-campaign-design-cost");assert.match(cost,/<caption>/);assert.match(cost,/scope="col"/);assert.match(cost,/Other designers.{0,4} prices depend on their scope/i);
});

test("connects the high intent launch pages to the service",async()=>{
 const guideIndex=await readPage("/guides");
 const launchPaths=pages.filter(([p])=>p.startsWith("/guides/")&&!afterFundingPaths.has(p));
 assert.equal(launchPaths.length,22);
 for(const [path] of launchPaths){assert.ok(guideIndex.includes(`href="${path}"`),path);const html=await readPage(path);assert.match(html,/href="\/campaign-design"/);assert.match(html,/"@type":"FAQPage"/);}
 for(const image of ["board-games","card-games","ttrpgs","miniatures","accessories"]){assert.ok((await readPage("/")).includes(`/images/campaign/${image}.webp`),image);}
});

test("ships no unreferenced image asset in the deployable output", async () => {
  const textExtensions = new Set([".css", ".html", ".js", ".json", ".txt", ".webmanifest", ".xml"]);
  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".svg", ".webp"]);
  const allowed = new Set(["/favicon.png", "/favicon-192x192.png", "/favicon-512x512.png"]);

  const walk = async (directory) => {
    const entries = await readdir(directory, { withFileTypes: true });
    const found = [];
    for (const entry of entries) {
      const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
      if (entry.isDirectory()) found.push(...await walk(url));
      if (entry.isFile()) found.push(url);
    }
    return found;
  };

  const files = await walk(outputRoot);
  const extensionOf = (url) => url.pathname.slice(url.pathname.lastIndexOf("."));
  const corpus = (await Promise.all(
    files.filter((url) => textExtensions.has(extensionOf(url))).map((url) => readFile(url, "utf8")),
  )).join("\n");

  for (const url of files.filter((entry) => imageExtensions.has(extensionOf(entry)))) {
    const relative = `/${decodeURIComponent(url.pathname).slice(decodeURIComponent(outputRoot.pathname).length)}`;
    if (allowed.has(relative)) continue;
    assert.ok(corpus.includes(relative), `unreferenced asset shipped to production: ${relative}`);
  }
});

test("shows verified client projects separately from concept mockups", async () => {
  const html = await readPage("/");
  const work = html.match(/<section\b[^>]*\bid="past-work"[\s\S]*?<\/section>/)?.[0];
  assert.ok(work);
  const links = [
    "https://www.kickstarter.com/projects/hans-h-h-hansen/scentedrealms-fantasy-scents-for-immersive-gameplay",
    "https://www.kickstarter.com/projects/snotgoblingaming/futureproof-wargaming-terrain-by-snot-goblin-gaming",
    "https://www.kickstarter.com/projects/quivertime/quiver-time-citadel-deck-block-cards-dice-tokens-and-coins",
  ];
  for (const href of links) assert.ok(work.includes(`href="${href}"`));
  for (const asset of ["scented-realms", "futureproof", "quiver-time"]) {
    assert.ok(work.includes(`/images/work/${asset}.webp`));
    await access(new URL(`images/work/${asset}.webp`, outputRoot));
  }
  assert.doesNotMatch(work, /SNACK ATTACK|ORBITAL CREW|COMMON GROUND|Concept mockup/);
  const concepts = html.match(/<section\b[^>]*\bid="mockups"[\s\S]*?<\/section>/)?.[0];
  assert.ok(concepts);
  assert.equal((concepts.match(/Concept mockup/g) ?? []).length, 3);
  for (const asset of ["party-cards", "adventure-cards", "minimal-cards"]) {
    assert.ok(concepts.includes(`/images/campaign/${asset}.webp`));
    await access(new URL(`images/campaign/${asset}.webp`, outputRoot));
  }
});

test("preserves project matched client excerpts and attribution", async () => {
  for (const path of ["/", "/campaign-design"]) {
    const html = await readPage(path);
    const quotes = html.match(/<section\b[^>]*\bid="testimonials"[\s\S]*?<\/section>/)?.[0];
    assert.ok(quotes, path);
    assert.equal((quotes.match(/<blockquote>/g) ?? []).length, 2);
    assert.match(quotes, /Great communication, fast updates, overall great work!/);
    assert.match(quotes, /FutureProof Terrain<\/strong><span>Client: <!-- -->mpmeguire/);
    assert.match(quotes, /Exceptional service with great attention to detail and artistic skills/);
    assert.match(quotes, /ScentedRealms<\/strong><span>Client: <!-- -->softmobile/);
    assert.doesNotMatch(quotes, /Quiver Time|aggregateRating|ratingValue/);
  }
});

test("keeps the site focused on direct enquiries", async () => {
  for (const [path] of pages) {
    const html = await readPage(path);
    assert.doesNotMatch(html, /fiverr|designologists|cloudinary/i, path);
    assert.match(html, /mailto:umair@guildframe\.com/, path);
  }
});


const schemaNodes = (html) => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(([, body]) => {
  const value = JSON.parse(body);
  return value["@graph"] ?? [value];
});

test("resolves article authors and profiles to the visible named person", async () => {
  for (const [path] of pages.filter(([path]) => path.startsWith("/guides/") || path.startsWith("/resources/"))) {
    const html = await readPage(path);
    const nodes = schemaNodes(html);
    const article = nodes.find(node => ["Article", "TechArticle"].includes(node["@type"]));
    assert.ok(article, path);
    const person = nodes.find(node => node["@id"] === article.author["@id"]);
    assert.equal(person?.["@type"], "Person", path);
    assert.equal(person.name, "Umair", path);
    assert.match(html, /By Umair at Guildframe/, path);
    assert.equal(article.dateModified, html.match(/<time datetime="([^"]+)"/i)?.[1], path);
    const breadcrumb = nodes.find(node => node["@type"] === "BreadcrumbList");
    assert.equal(breadcrumb.itemListElement.at(-1).name, article.headline, path);
  }
  const nodes = schemaNodes(await readPage("/authors/guildframe"));
  const profile = nodes.find(node => node["@type"] === "ProfilePage");
  assert.ok(nodes.some(node => node["@type"] === "Person" && node["@id"] === profile.mainEntity["@id"]));
});

test("keeps one visible design price and truthful scoped launch services", async () => {
  for (const [path] of pages) {
    const html = await readPage(path);
    const text = visibleText(html);
    assert.equal((text.match(/\$975/g) ?? []).length, path === "/campaign-design" ? 1 : 0, path);
    const nodes = schemaNodes(html);
    for (const node of nodes.filter(node => node["@type"] === "Service")) {
      if (path === "/campaign-design") {
        assert.equal(node.offers.price, "975");
        assert.equal(node.offers.priceCurrency, "USD");
      } else assert.equal(node.offers, undefined, path);
    }
  }
  for (const path of ["/", "/kickstarter-launch-services", "/kickstarter-advertising"]) {
    const html = await readPage(path);
    assert.match(visibleText(html), /paid advertising/i);
    assert.match(visibleText(html), /Umair/);
    assert.match(visibleText(html), /budget/i);
  }
});

test("keeps technical campaign guidance sourced and category answers visible", async () => {
  const mobile = await readPage("/guides/kickstarter-campaign-graphics-mobile-readability");
  assert.match(visibleText(mobile), /700 pixels/);
  assert.match(visibleText(mobile), /50 MB/);
  assert.match(mobile, /help\.kickstarter\.com/);
  const card = await readPage("/card-game-kickstarter-campaign-design");
  assert.match(visibleText(card), /drawing new card artwork/);
  const vat = await readPage("/guides/selling-miniatures-internationally-vat-ioss");
  assert.doesNotMatch(vat, /webgate\.acceptance/);
  assert.match(vat, /trade\.ec\.europa\.eu/);
  assert.match(visibleText(vat), /declaration lines/);
});

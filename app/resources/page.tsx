import { LibrarySearch } from "../components/LibrarySearch";
import Link from "next/link";
import { Icon } from "../components/chrome/Icon";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Tabletop Campaign Checklists & Crowdfunding Resources",
  description:
    "Plan tabletop crowdfunding with campaign worksheets, checklists and funding data. Find store and migration references for after funding.",
  path: "/resources",
  keywords: ["tabletop campaign checklist", "Kickstarter launch worksheet", "crowdfunding resources"],
});

const resources = [
  {title:"Tabletop campaign page study",copy:"Inspect 25 public campaign pages with source links, evidence notes and a downloadable comparison. Unknown details stay marked.",href:"/resources/tabletop-campaign-page-study",tag:"Original research"},
  {title:"Campaign advertising budget calculator",copy:"Change reward margins, signup costs and conversion assumptions to see whether your ad budget covers the costs entered.",href:"/guides/kickstarter-advertising-budget-board-games#advertising-calculator",tag:"Interactive planning"},
  {title:"Tabletop Campaign Launch Worksheet",copy:"A reusable brief for game facts, asset status, rewards, shipping and final launch checks. Download it and fill it in with your team.",href:"/resources/tabletop-campaign-launch-worksheet",tag:"Campaign planning"},
  {
    title: "Tabletop Shopify Metafield Schema",
    copy: "A reusable product data structure for board games, TTRPGs and miniatures, with the type and purpose of every field.",
    href: "/resources/tabletop-shopify-metafield-schema",
    tag: "Product data",
  },
  {
    title: "Board Game Shopify Store Checklist",
    copy: "Check products, content, shipping, checkout and mobile pages before opening your store.",
    href: "/resources/board-game-shopify-store-checklist",
    tag: "Store launch",
  },
  {
    title: "Kickstarter to Shopify Migration Checklist",
    copy: "Prepare products and campaign artwork, separate backer rewards from store orders and test before launch.",
    href: "/resources/kickstarter-to-shopify-migration-checklist",
    tag: "Migration",
  },
  {
    title: "Tabletop Crowdfunding Platform Role Matrix",
    copy: "Compare which platform handles funding, surveys, delivery details and ongoing store orders.",
    href: "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    tag: "Platform matrix",
  },
  {
    title: "Board Game Product Page Checklist",
    copy: "Check game details, editions, components, delivery information and the purchase buttons.",
    href: "/resources/board-game-product-page-checklist",
    tag: "Product pages",
  },
  {
    title: "2024 Kickstarter Tabletop Games Funding Benchmark",
    copy: "Review Kickstarter’s published 2024 tabletop figures, with calculations and a downloadable CSV.",
    href: "/resources/kickstarter-tabletop-games-benchmark",
    tag: "Original analysis",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": absoluteUrl("/resources"),
            name: "Tabletop Campaign Checklists and Crowdfunding Resources",
            url: absoluteUrl("/resources"),
            description: "Campaign worksheets, tabletop checklists, platform comparisons and Kickstarter funding data.",
            isPartOf: { "@id": absoluteUrl("/#website") },
            mainEntity: { "@id": absoluteUrl("/resources#reference-list") },
            inLanguage: "en",
          },
          {
            "@type": "ItemList",
            "@id": absoluteUrl("/resources#reference-list"),
            numberOfItems: resources.length,
            itemListElement: resources.map((resource, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: { "@type": "TechArticle", name: resource.title, url: absoluteUrl(resource.href) },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Resources", item: absoluteUrl("/resources") },
            ],
          },
        ],
      }} />
      <a className="skip-link" href="#resources-content">Skip to resources</a>
      <SeoHeader />
      <main className="guides-main w-page gd gd-index gd-index--resources" id="resources-content">
        <header className="gd-hero guides-hero resources-hero">
          <div className="gd-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
            <h1 className="gd-title" data-reveal="lines"><span className="w-line"><span>Campaign checklists &amp;</span></span> <span className="w-line"><span><em>useful references.</em></span></span></h1>
            <p className="gd-lead">
              Use the campaign worksheet to collect your game facts, rewards and launch checks. Compare platform roles and funding data, then plan your store when you reach the after funding stage.
            </p>
          </div>
        </header>
        <section className="gd-library tone-board" aria-label="Resource library">
          <div className="gd-library-inner">
            <LibrarySearch count={resources.length} noun="resources"/>
            <div className="guides-grid resources-grid gd-rows" id="reference-list">
              {resources.map((resource) => (
                <Link href={resource.href} key={resource.title} className="gd-row gd-row--plain" data-title={resource.title} data-cursor-label="Open">
                  <div className="gd-row-copy"><h2 className="gd-row-title">{resource.title}</h2><span className="gd-row-summary">{resource.copy}</span><span className="gd-row-tag">{resource.tag}</span></div>
                  <Icon name="arrow" size={20} className="gd-row-arrow"/>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="guides-solutions gd-solutions" aria-labelledby="resources-solutions-title">
          <h2 id="resources-solutions-title" className="w-h2">Need the reasoning <em>behind the checklist?</em></h2>
          <nav aria-label="Related Guildframe guides">
            <Link href="/guides">Read all guides</Link>
            <Link href="/guides/move-from-kickstarter-to-shopify">Migration guide</Link>
            <Link href="/guides/best-shopify-themes-for-board-games">Theme comparison</Link>
            <Link href="/shopify-theme-for-ttrpg">RPG store planning</Link>
            <Link href="/editorial-policy">Editorial policy</Link>
            <Link href="/buy">Start your launch project</Link>
          </nav>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

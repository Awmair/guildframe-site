import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Tabletop Shopify Checklists & Crowdfunding Data",
  description:
    "Shopify store and product page checklists for tabletop publishers, a Kickstarter migration checklist, platform comparisons and 2024 funding data.",
  path: "/resources",
  keywords: ["Shopify checklist", "board game ecommerce checklist", "Kickstarter to Shopify checklist"],
});

const resources = [
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
            name: "Tabletop Shopify Checklists and Crowdfunding Data",
            url: absoluteUrl("/resources"),
            description: "Shopify checklists, platform comparisons and Kickstarter funding data for tabletop publishers.",
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
      <main className="guides-main" id="resources-content">
        <section className="guides-hero resources-hero">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <h1>Shopify checklists &amp; <em>crowdfunding data.</em></h1>
          <p>
            Check what your Shopify store needs, compare platform roles and review Kickstarter tabletop funding figures. Use these references alongside the longer guides.
          </p>
        </section>
        <section className="guides-grid resources-grid">
          {resources.map((resource) => (
            <Link href={resource.href} key={resource.title}>
              <div><span>{resource.tag}</span></div>
              <h2>{resource.title}</h2>
              <p>{resource.copy}</p>
              <strong>Open the reference ↗</strong>
            </Link>
          ))}
        </section>
        <section className="guides-solutions">
          <div><h2>Need the reasoning behind the checklist?</h2></div>
          <nav aria-label="Related Guildframe guides">
            <Link href="/guides">Read all guides ↗</Link>
            <Link href="/guides/move-from-kickstarter-to-shopify">Migration guide ↗</Link>
            <Link href="/guides/best-shopify-themes-for-board-games">Theme comparison ↗</Link>
            <Link href="/editorial-policy">Editorial policy ↗</Link>
          </nav>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

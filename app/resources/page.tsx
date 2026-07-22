import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Tabletop Ecommerce Checklists and References",
  description:
    "Citable checklists and comparison tables for board game Shopify stores, product pages and Kickstarter to Shopify migration.",
  path: "/resources",
  keywords: ["Shopify checklist", "board game ecommerce checklist", "Kickstarter to Shopify checklist"],
});

const resources = [
  {
    title: "Board Game Shopify Store Checklist",
    copy: "A complete launch checklist for catalog, content, operations, mobile UX and search readiness.",
    href: "/resources/board-game-shopify-store-checklist",
    tag: "Store launch",
  },
  {
    title: "Kickstarter to Shopify Migration Checklist",
    copy: "A clear sequence for products, campaign assets, backer boundaries, testing and launch.",
    href: "/resources/kickstarter-to-shopify-migration-checklist",
    tag: "Migration",
  },
  {
    title: "Tabletop Crowdfunding Platform Role Matrix",
    copy: "Assign funding, pledge management, fulfillment data and long term commerce to the right system.",
    href: "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
    tag: "Platform matrix",
  },
  {
    title: "Board Game Product Page Checklist",
    copy: "The content and conversion anatomy of a tabletop Shopify product page, from editions to delivery clarity.",
    href: "/resources/board-game-product-page-checklist",
    tag: "Product pages",
  },
  {
    title: "2024 Kickstarter Tabletop Games Funding Benchmark",
    copy: "Source backed launch, success rate and funding figures with transparent calculations and downloadable data.",
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
            name: "Guildframe Tabletop Ecommerce Reference Library",
            url: absoluteUrl("/resources"),
            description: "Citable checklists and comparison tables for tabletop ecommerce.",
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
          <h1>Reference tools for <em>tabletop commerce.</em></h1>
          <p>
            Source backed checklists and comparison tables built for quick use,
            clean citation and confident post campaign decisions.
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

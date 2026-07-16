import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Tabletop Ecommerce and Kickstarter Guides",
  description:
    "Practical guides for moving from crowdfunding to Shopify, choosing a board game theme and planning post-campaign commerce.",
  path: "/guides",
  keywords: ["tabletop ecommerce guides", "Kickstarter to Shopify guide", "board game ecommerce"],
});

const guides = [
  {
    title: "How to Move From Kickstarter to Shopify After Your Campaign Is Funded",
    copy: "A step-by-step plan for products, content, operations and launch timing after crowdfunding.",
    href: "/guides/move-from-kickstarter-to-shopify",
    tag: "Migration guide",
  },
  {
    title: "Best Shopify Themes for Board Games and Tabletop Creators",
    copy: "Compare purpose-built, premium and free theme routes without mistaking decoration for fit.",
    href: "/guides/best-shopify-themes-for-board-games",
    tag: "Theme comparison",
  },
  {
    title: "Kickstarter Late Pledges vs Shopify: Which Should You Use After Funding?",
    copy: "Understand the job of each channel and when tabletop creators may need both.",
    href: "/guides/kickstarter-late-pledges-vs-shopify",
    tag: "Platform strategy",
  },
  {
    title: "BackerKit vs Shopify vs Gamefound: What Each Platform Does After Crowdfunding",
    copy: "Separate crowdfunding, pledge management and long-term ecommerce before choosing your stack.",
    href: "/guides/backerkit-vs-shopify-vs-gamefound",
    tag: "Platform comparison",
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": absoluteUrl("/guides"),
            name: "Guildframe Guides",
            url: absoluteUrl("/guides"),
            description: "Tabletop ecommerce and post-crowdfunding guides.",
            isPartOf: { "@id": absoluteUrl("/#website") },
            mainEntity: { "@id": absoluteUrl("/guides#guide-list") },
            inLanguage: "en",
          },
          {
            "@type": "ItemList",
            "@id": absoluteUrl("/guides#guide-list"),
            numberOfItems: guides.length,
            itemListElement: guides.map((guide, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Article",
                name: guide.title,
                url: absoluteUrl(guide.href),
              },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
            ],
          },
        ],
      }} />
      <SeoHeader />
      <main className="guides-main">
        <section className="guides-hero">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
          <h1>Build what comes <em>after funding.</em></h1>
          <p>
            Clear, practical guidance for tabletop creators choosing a Shopify
            theme, planning post-campaign commerce and building a permanent store.
          </p>
        </section>
        <section className="guides-grid">
          {guides.map((guide, index) => (
            <Link href={guide.href} key={guide.title}>
              <div>
                <span>{guide.tag}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              <h2>{guide.title}</h2>
              <p>{guide.copy}</p>
              <strong>Read the guide ↗</strong>
            </Link>
          ))}
        </section>
        <section className="guides-solutions">
          <div>
            <h2>Built for your part of the tabletop world.</h2>
          </div>
          <nav aria-label="Guildframe solutions">
            <Link href="/shopify-theme-for-board-games">Board games ↗</Link>
            <Link href="/shopify-theme-for-ttrpg">TTRPGs ↗</Link>
            <Link href="/shopify-theme-for-miniatures">Miniatures ↗</Link>
            <Link href="/kickstarter-to-shopify">Kickstarter to Shopify ↗</Link>
          </nav>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

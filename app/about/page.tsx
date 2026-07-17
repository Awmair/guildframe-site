import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { TrustPage } from "../components/TrustPage";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

export const metadata = pageMetadata({
  title: "About Guildframe",
  description:
    "Learn why Guildframe builds Shopify storefront infrastructure for board games, TTRPGs, miniatures and funded tabletop creators.",
  path: "/about",
  keywords: ["about Guildframe", "Shopify theme for tabletop games", "board game ecommerce"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "@id": absoluteUrl("/about"),
            url: absoluteUrl("/about"),
            name: "About Guildframe",
            description: "Guildframe builds Shopify storefront infrastructure for tabletop creators.",
            mainEntity: { "@id": absoluteUrl("/#organization") },
            isPartOf: { "@id": absoluteUrl("/#website") },
            dateModified: "2026-07-17",
            inLanguage: "en",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
            ],
          },
        ],
      }} />
      <TrustPage
        label="About"
        title="Tabletop worlds deserve better storefronts."
        description="Guildframe is the world's first Shopify theme built specifically for board games and the wider tabletop market. It helps funded creators turn campaign momentum into a permanent store."
        updated="2026-07-17"
      >
        <section>
          <h2>What Guildframe is</h2>
          <p>
            Guildframe combines a purpose-built Shopify theme with a done-for-you
            setup service. It is designed for board games, card games, TTRPGs,
            miniatures, terrain and tabletop accessories. The theme handles the
            storefront experience while Shopify provides products, inventory,
            payments, checkout and customer management.
          </p>
          <p>
            The goal is simple: help creators move from a funded Kickstarter or
            another crowdfunding campaign to a live online shop without rebuilding
            every page, product story and visual system from scratch.
          </p>
        </section>
        <section>
          <h2>Who it is built for</h2>
          <div className="trust-fact-grid">
            <article><strong>Funded creators</strong><p>Campaign teams ready to keep selling after the funding window closes.</p></article>
            <article><strong>Independent publishers</strong><p>Studios that need a focused catalog, richer product storytelling and direct sales.</p></article>
            <article><strong>Growing tabletop brands</strong><p>Teams selling games, expansions, editions, miniatures, terrain and accessories.</p></article>
          </div>
        </section>
        <section>
          <h2>What Guildframe includes</h2>
          <ul className="trust-checklist">
            <li>Four complete visual styles designed for tabletop products</li>
            <li>Responsive storefront layouts for phones, tablets and desktops</li>
            <li>Product structures for editions, expansions, bundles and add-ons</li>
            <li>Campaign storytelling, FAQ, reviews, events, news and contact sections</li>
            <li>Free custom setup during early release</li>
            <li>Shopify products, checkout, inventory and payments underneath</li>
          </ul>
          <p>
            The current Guildframe price is <strong>{siteConfig.price}</strong>. The
            product offer and availability shown on this website are maintained from
            one shared source so the homepage, purchase page and structured data stay aligned.
          </p>
        </section>
        <section>
          <h2>How we publish trustworthy guidance</h2>
          <p>
            Guildframe publishes practical guidance about tabletop ecommerce,
            Shopify and post-campaign operations. Platform claims are checked
            against primary documentation, commercial relationships are disclosed,
            and every guide shows its reviewed date and source list.
          </p>
          <p>
            Read the <Link href="/editorial-policy">editorial policy</Link>, meet the
            <Link href="/authors/guildframe"> Guildframe Editorial Team</Link>, or use
            the <Link href="/resources">reference library</Link> for citable checklists and comparisons.
          </p>
          <p>
            Guildframe also publishes reproducible research such as the
            <Link href="/resources/kickstarter-tabletop-games-benchmark"> 2024 Kickstarter tabletop games funding benchmark</Link>,
            with its calculation method and downloadable data visible on the page.
          </p>
        </section>
      </TrustPage>
    </>
  );
}

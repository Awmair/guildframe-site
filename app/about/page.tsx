import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { TrustPage } from "../components/TrustPage";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

export const metadata = pageMetadata({
  title: "About Guildframe",
  description:
    "Learn why Guildframe designs and develops Shopify storefronts for board games, TTRPGs, miniatures and funded tabletop creators.",
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
            description: "Guildframe designs and develops Shopify storefronts for tabletop creators.",
            mainEntity: { "@id": absoluteUrl("/#organization") },
            isPartOf: { "@id": absoluteUrl("/#website") },
            dateModified: "2026-07-21",
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
        description="Guildframe is a Shopify design and development specialist for board games and the wider tabletop market. It also makes a premium DIY theme for creators who want to build the store themselves."
        updated="2026-07-21"
      >
        <section>
          <h2>What Guildframe is</h2>
          <p>
            Guildframe designs and develops complete Shopify storefronts for
            board games, card games, TTRPGs, miniatures, terrain and tabletop
            accessories. For creators who prefer to build the store themselves,
            Guildframe also offers a premium purpose-built theme.
          </p>
          <p>
            The goal is simple: give tabletop brands a store that understands
            their products, preserves their world and makes buying easy.
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
            <li>Four purpose-built presets: Rune Single, Rune Studio, Saga Single and Saga Studio</li>
            <li>Responsive storefront layouts for phones, tablets and desktops</li>
            <li>Product structures for editions, expansions, bundles and add-ons</li>
            <li>Campaign storytelling, FAQ, reviews, events, news and contact sections</li>
            <li>A $2,199 Shopify design and development service for up to 50 product SKUs</li>
            <li>A separate $349 premium theme for creators who want to build it themselves</li>
            <li>Shopify products, checkout, inventory and payments underneath</li>
          </ul>
          <p>
            The complete Shopify design and development service is <strong>{siteConfig.servicePrice}</strong>
            for up to 50 product SKUs. The Guildframe theme is <strong>{siteConfig.price}</strong>.
            Product and service facts are maintained from shared sources so the
            homepage, offer pages and structured data stay aligned.
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

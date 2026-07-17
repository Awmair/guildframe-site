import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { TrustPage } from "../../components/TrustPage";
import { absoluteUrl, pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Guildframe Editorial Team",
  description:
    "Meet the Guildframe Editorial Team behind our Shopify, tabletop ecommerce and post-crowdfunding guides and references.",
  path: "/authors/guildframe",
  keywords: ["Guildframe Editorial Team", "tabletop ecommerce experts", "Shopify board game guidance"],
});

export default function GuildframeAuthorPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": absoluteUrl("/authors/guildframe"),
            url: absoluteUrl("/authors/guildframe"),
            name: "Guildframe Editorial Team",
            dateCreated: "2026-07-17",
            dateModified: "2026-07-17",
            mainEntity: { "@id": absoluteUrl("/authors/guildframe#editorial-team") },
            isPartOf: { "@id": absoluteUrl("/#website") },
            inLanguage: "en",
          },
          {
            "@type": "Organization",
            "@id": absoluteUrl("/authors/guildframe#editorial-team"),
            name: "Guildframe Editorial Team",
            url: absoluteUrl("/authors/guildframe"),
            memberOf: { "@id": absoluteUrl("/#organization") },
            description: "The Guildframe team that researches and publishes tabletop ecommerce guidance.",
            knowsAbout: [
              "Shopify themes",
              "Board game ecommerce",
              "Kickstarter to Shopify migration",
              "TTRPG stores",
              "Miniatures stores",
              "Post-crowdfunding commerce",
            ],
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Guildframe Editorial Team", item: absoluteUrl("/authors/guildframe") },
            ],
          },
        ],
      }} />
      <TrustPage
        label="Author"
        title="Guildframe Editorial Team"
        description="We research the practical bridge between crowdfunding, tabletop product storytelling and a permanent Shopify storefront."
        updated="2026-07-17"
      >
        <section>
          <h2>Editorial focus</h2>
          <p>
            The Guildframe Editorial Team writes and reviews content about board
            game ecommerce, Shopify theme selection, Kickstarter migration,
            pledge-manager boundaries and post-campaign selling systems.
          </p>
          <p>
            Our work combines platform documentation with the specific catalog and
            storytelling needs of tabletop creators. That includes core games,
            deluxe editions, expansions, bundles, add-ons, miniatures, terrain and
            long-form world building.
          </p>
        </section>
        <section>
          <h2>What we are responsible for</h2>
          <div className="trust-fact-grid">
            <article><strong>Research</strong><p>Finding primary platform sources and separating current facts from general recommendations.</p></article>
            <article><strong>Clarity</strong><p>Turning complex platform choices into direct answers, checklists and comparison tables.</p></article>
            <article><strong>Maintenance</strong><p>Reviewing dates, citations, product facts, internal links and structured data.</p></article>
          </div>
        </section>
        <section>
          <h2>Published work</h2>
          <ul className="trust-link-list">
            <li><Link href="/guides/move-from-kickstarter-to-shopify">How to move from Kickstarter to Shopify</Link></li>
            <li><Link href="/guides/best-shopify-themes-for-board-games">Best Shopify themes for board games</Link></li>
            <li><Link href="/guides/kickstarter-late-pledges-vs-shopify">Kickstarter Late Pledges vs Shopify</Link></li>
            <li><Link href="/guides/backerkit-vs-shopify-vs-gamefound">BackerKit vs Shopify vs Gamefound</Link></li>
            <li><Link href="/resources/kickstarter-tabletop-games-benchmark">2024 Kickstarter tabletop games benchmark</Link></li>
            <li><Link href="/guides/sell-board-game-preorders-on-shopify">How to sell board game preorders on Shopify</Link></li>
            <li><Link href="/guides/sell-board-game-expansions-add-ons-shopify">How to sell expansions and add-ons on Shopify</Link></li>
          </ul>
          <p>
            For the standards behind this work, read the <Link href="/editorial-policy">editorial policy</Link>.
            For reusable decision tools, visit the <Link href="/resources">reference library</Link>.
          </p>
        </section>
      </TrustPage>
    </>
  );
}

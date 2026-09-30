import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { TrustPage } from "../../components/TrustPage";
import { absoluteUrl, pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

export const metadata = pageMetadata({
  title: "Guides by Guildframe",
  description:
    "Guides by Guildframe on campaign design, launch preparation and selling after crowdfunding. Find the sources and how to suggest a correction.",
  path: "/authors/guildframe",
  keywords: ["Guildframe", "tabletop ecommerce experts", "Shopify board game guidance"],
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
            name: "Guildframe",
            dateCreated: "2026-07-16T19:00:00Z",
            dateModified: contentDates.authorGuildframe,
            mainEntity: { "@id": absoluteUrl("/authors/guildframe#editorial-team") },
            isPartOf: { "@id": absoluteUrl("/#website") },
            inLanguage: "en",
          },
          {
            "@type": "Organization",
            "@id": absoluteUrl("/authors/guildframe#editorial-team"),
            name: "Guildframe",
            url: absoluteUrl("/authors/guildframe"),
            memberOf: { "@id": absoluteUrl("/#organization") },
            description: "Guildframe’s campaign design and tabletop publishing guidance.",
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
              { "@type": "ListItem", position: 2, name: "Guildframe", item: absoluteUrl("/authors/guildframe") },
            ],
          },
        ],
      }} />
      <TrustPage
        label="Author"
        title="Guides by Guildframe"
        description="Practical guides on preparing a tabletop campaign and planning sales after funding."
        updated={contentDates.authorGuildframe}
      >
        <section>
          <h2>Editorial focus</h2>
          <p>
            I write these guides to help creators prepare campaign pages, organise their assets and plan what comes after funding. They cover board game launches, Kickstarter migration, pledge management and ongoing sales.
          </p>
          <p>
            The guides use platform documentation alongside the details tabletop projects need to explain: game editions, expansions, bundles, miniatures, terrain and RPG books.
          </p>
          <p>
            Campaign design costs $975 USD. The storefront guides compare Shopify and third party options by the needs of a tabletop catalogue.
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
            <li><Link href="/guides/what-happens-after-kickstarter-is-funded">What happens after your Kickstarter is funded?</Link></li>
            <li><Link href="/guides/move-from-kickstarter-to-shopify">Kickstarter to Shopify migration guide</Link></li>
            <li><Link href="/guides/best-shopify-themes-for-board-games">Best Shopify themes for board games</Link></li>
            <li><Link href="/guides/kickstarter-late-pledges-vs-shopify">Selling after Kickstarter</Link></li>
            <li><Link href="/guides/backerkit-vs-shopify-vs-gamefound">BackerKit vs Shopify vs Gamefound</Link></li>
            <li><Link href="/resources/kickstarter-tabletop-games-benchmark">2024 Kickstarter tabletop games benchmark</Link></li>
            <li><Link href="/guides/sell-board-game-preorders-on-shopify">How to sell board game preorders on Shopify</Link></li>
            <li><Link href="/guides/sell-board-game-expansions-add-ons-shopify">How to sell expansions and add ons on Shopify</Link></li>
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

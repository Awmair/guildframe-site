import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { TrustPage } from "../../components/TrustPage";
import { absoluteUrl, pageMetadata } from "../../site-config";
import { authorId } from "../../seo-entities";
import { contentDates } from "../../content-dates";
import { launchGuides } from "../../launch-guides";

export const metadata = pageMetadata({
  title: "Umair: Campaign Designer & Guide Author",
  description: "Meet Umair, the designer behind Guildframe’s $975 Kickstarter and Gamefound page design. Read his guides on campaign copy, graphics and launch preparation.",
  path: "/authors/guildframe",
});

export default function GuildframeAuthorPage() {
  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfilePage", "@id": absoluteUrl("/authors/guildframe"),
          url: absoluteUrl("/authors/guildframe"), name: "Umair at Guildframe",
          dateCreated: "2026-07-16T19:00:00Z", dateModified: contentDates.authorGuildframe,
          mainEntity: { "@id": authorId() }, isPartOf: { "@id": absoluteUrl("/#website") }, inLanguage: "en",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Author", item: absoluteUrl("/authors/guildframe") },
          ],
        },
      ],
    }} />
    <TrustPage label="Author" title="Umair, campaign designer at Guildframe" description="I write the guides and design Kickstarter and Gamefound pages for tabletop creators." updated={contentDates.authorGuildframe}>
      <section>
        <h2>What I work on</h2>
        <p>I run Guildframe. My work covers campaign page structure, copy, section graphics and reward comparisons for board games, card games, RPGs, miniatures and accessories.</p>
        <p>You can see ScentedRealms, FutureProof Terrain and Quiver Time in <Link href="/#past-work">my past campaign work</Link>. The guides explain the decisions behind a page: what to show first, how to explain the game and how to make rewards easier to compare.</p>
        <p><Link href="/campaign-design">Full campaign page design is $975 USD</Link>. Send your game summary and artwork for a free opening mockup before booking.</p>
      </section>
      <section>
        <h2>How I write the guides</h2>
        <p>I use official platform documentation for requirements and published figures, then explain the practical design choices separately. Each guide links to its sources. Older Shopify articles cover store planning after crowdfunding.</p>
        <p>Read the <Link href="/editorial-policy">editorial policy</Link> for the review and correction process. To flag an error or ask about a project, email <a href="mailto:umair@guildframe.com">umair@guildframe.com</a>.</p>
      </section>
      <section>
        <h2>Campaign design guides</h2>
        <ul className="trust-link-list">{launchGuides.map(g=><li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.title}</Link></li>)}</ul>
        <p>Find the after funding articles in <Link href="/guides">all guides</Link> and the reusable <Link href="/resources">Shopify checklists</Link>.</p>
      </section>
    </TrustPage>
  </>;
}

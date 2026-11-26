import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { TrustPage } from "../../components/TrustPage";
import { absoluteUrl, pageMetadata } from "../../site-config";
import { authorId } from "../../seo-entities";
import { contentDates } from "../../content-dates";
import { launchGuides } from "../../launch-guides";
import { Icon, Roll } from "../../components/chrome/Icon";

export const metadata = pageMetadata({
  title: "Umair: Campaign Designer & Guide Author",
  description: "Meet Umair, Guildframe’s founder, campaign designer and paid advertising specialist. Read his practical tabletop crowdfunding and launch guides.",
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
          dateCreated: "2026-07-16T19:00:00Z", dateModified: `${contentDates.authorGuildframe}T00:00:00Z`,
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
    <TrustPage
      label="Author"
      title="Umair, campaign designer at Guildframe"
      description="I write the guides, lead campaign creative and manage paid advertising at Guildframe."
      updated={contentDates.authorGuildframe}
      portrait
      contents={[
        { id: "what-i-work-on", label: "What I work on" },
        { id: "how-i-write", label: "How I write the guides" },
        { id: "campaign-design-guides", label: "Campaign design guides" },
        { id: "work-with-me", label: "Work with me" },
      ]}
    >
      <section id="what-i-work-on">
        <h2>What I work on</h2>
        <p>I run Guildframe. My work covers campaign planning, copy, graphics and paid advertising for board games, card games, RPGs, miniatures and accessories. Guildframe brings those into a launch scope with prelaunch and campaign support.</p>
        <p>You can see ScentedRealms, FutureProof Terrain, Quiver Time and Cryptic Explorers in <Link href="/work">my past campaign work</Link>. The guides explain the decisions behind a page: what to show first, how to explain the game and how to make rewards easier to compare.</p>
        <p><Link href="/kickstarter-launch-services">See Guildframe’s launch services</Link>. <a href="#start-project">Send your game and launch plans</a> to discuss the scope, or book a 30 minute call.</p>
      </section>
      <section id="how-i-write">
        <h2>How I write the guides</h2>
        <p>I use official platform documentation for requirements and published figures, then explain the practical design choices separately. Each guide links to its sources. Older Shopify articles cover store planning after crowdfunding.</p>
        <p>Read the <Link href="/editorial-policy">editorial policy</Link> for the review and correction process. To flag an error or ask about a project, email <a href="mailto:umair@guildframe.com">umair@guildframe.com</a>.</p>
      </section>
      <section id="campaign-design-guides">
        <h2>Campaign design guides</h2>
        <ul className="st-link-list">{launchGuides.map(g=><li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.title}</Link></li>)}</ul>
        <p>Find the after funding articles in <Link href="/guides">all guides</Link> and the reusable <Link href="/resources">campaign worksheets and store checklists</Link>.</p>
      </section>
      <section id="work-with-me">
        <h2>Work with me on your launch</h2>
        <p>If a guide answered your question and you would like help with the work itself, see how to <Link href="/buy">start your tabletop launch project</Link>. We agree the services, fees and schedule in writing before anything begins.</p>
        <div className="st-actions"><a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="author closing"><Roll>Discuss my project</Roll><Icon name="arrow" /></a></div>
      </section>
    </TrustPage>
  </>;
}

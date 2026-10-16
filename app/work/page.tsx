import Link from "next/link";
import { PastWork } from "../components/PastWork";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";
import { caseStudies, workDate } from "../case-studies";

export const metadata = pageMetadata({ title: "Tabletop Kickstarter Campaign Design Case Studies", description: "Explore campaign design for ScentedRealms, FutureProof Terrain and Quiver Time. See Umair's contribution, design choices and published Kickstarter pages.", path: "/work" });

export default function WorkPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": absoluteUrl("/work"), name: "Guildframe tabletop campaign case studies", url: absoluteUrl("/work"), dateModified: workDate, isPartOf: { "@id": absoluteUrl("/#website") } },
      { "@type": "ItemList", itemListElement: caseStudies.map((project, i) => ({ "@type": "ListItem", position: i + 1, name: project.name, url: absoluteUrl(`/work/${project.slug}`) })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Past work", item: absoluteUrl("/work") }] },
    ] }} />
    <a className="skip-link" href="#work-content">Skip to content</a><SeoHeader />
    <main className="gf-work-page" id="work-content">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Past work" }]} />
      <header className="gf-work-intro"><span className="gf-eyebrow">Campaign design by Umair</span><h1>Tabletop campaigns,<br /><em>with the work explained.</em></h1><p>RPG accessories, modular terrain and card storage. Each case study shows the project, my contribution and the design choices behind the campaign presentation.</p></header>
      <PastWork />
      <aside className="gf-work-note"><p>These projects demonstrate campaign creative. Their funding totals are not presented as Guildframe advertising results.</p><Link className="gf-text-link" href="/kickstarter-launch-services">Explore planning, creative and launch support</Link></aside>
    </main><SeoFooter />
  </>;
}

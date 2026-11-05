import Link from "next/link";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";
import { caseStudies, workDate } from "../case-studies";
import { formatContentDate } from "../content-dates";

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
      <header className="gf-work-intro"><span className="gf-eyebrow">Campaign design by Umair</span><h1>Tabletop campaign<br /><em>design case studies.</em></h1><p>RPG accessories, modular terrain and card storage. Each case study shows the project, my contribution and the design choices behind the campaign presentation.</p><p className="gf-work-updated">Updated <time dateTime={workDate}>{formatContentDate(workDate)}</time></p></header>
      <div className="gf-work-project-list">{caseStudies.map((project, index) => <article className="gf-work-project" aria-labelledby={`project-${project.slug}`} key={project.slug}>
        <figure><Link href={`/work/${project.slug}`} className="gf-work-project-image"><ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading={index === 0 ? undefined : "lazy"} fetchPriority={index === 0 ? "high" : undefined} sizes="(max-width: 760px) calc(100vw - 40px), 56vw" /></Link><figcaption>{project.imageNote}</figcaption></figure>
        <div><span className="gf-eyebrow">{project.category}</span><h2 id={`project-${project.slug}`}><Link href={`/work/${project.slug}`}>{project.name}</Link></h2><p>{project.brief}</p><dl><dt>My contribution</dt><dd>{project.contributionSummary}</dd></dl>{project.testimonial && <blockquote><p>{project.testimonial.quote}</p><footer>Client feedback · {project.testimonial.client}</footer></blockquote>}<nav aria-label={`${project.name} links`}><Link className="gf-text-link" href={`/work/${project.slug}`}>Read the case study</Link><a className="gf-text-link" href={project.href} target="_blank" rel="noopener noreferrer">View the published campaign<span className="gf-sr-only"> in a new tab</span></a></nav></div>
      </article>)}</div>
      <aside className="gf-work-note"><p>These projects demonstrate campaign creative. Their funding totals are not presented as Guildframe advertising results.</p><div><Link className="gf-text-link" href="/campaign-creative">Discuss creative production</Link><Link className="gf-text-link" href="/campaign-design">Explore campaign page design</Link><Link className="gf-text-link" href="/kickstarter-launch-services">Explore full launch support</Link></div></aside>
    </main><SeoFooter />
  </>;
}

import Link from "next/link";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { Icon } from "../components/chrome/Icon";
import { WorkFx } from "../components/work/WorkFx";
import { caseTones } from "../components/work/tones";
import { absoluteUrl, pageMetadata } from "../site-config";
import { caseStudies, workDate } from "../case-studies";
import { mixedWork, wingLabels, type Wing } from "../work-mix";
import { WorkFilter } from "../components/work/WorkFilter";
import { formatContentDate } from "../content-dates";
import { GuideVisual, type GuideVisualData } from "../components/GuideVisual";

export const metadata = pageMetadata({ title: "Tabletop Kickstarter Campaign Design Case Studies", description: "Campaign design for products, tabletop games and a novel: Secubix, Bacàn, ScentedRealms, FutureProof Terrain, Quiver Time, Cryptic Explorers and more.", path: "/work" });

// Built from the client work data, so the wings and names always match the cards below.
const wings: Wing[] = ["products", "tabletop", "books"];
const categoryVisual: GuideVisualData = {
  kind: "compare",
  title: "Seven client campaigns across products, tabletop and books",
  columns: wings.map(wing => ({ name: wingLabels[wing], points: mixedWork.filter(item => item.wing === wing).map(item => item.name) })),
  caption: "Each card links to the published Kickstarter campaign. Funding totals are the creators' results.",
};
const studyFor = (slug?: string) => caseStudies.find(p => p.slug === slug);

const nextLinks = [
  { href: "/campaign-creative", label: "Discuss creative production" },
  { href: "/campaign-design", label: "Explore campaign page design" },
  { href: "/kickstarter-launch-services", label: "Explore full launch support" },
  { href: "/kickstarter-product-campaign-design", label: "Campaigns for products and books" },
  { href: "/tabletop-kickstarter-campaigns", label: "Campaigns for tabletop games" },
  { href: "/buy", label: "Start your launch project" },
];

export default function WorkPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": absoluteUrl("/work"), name: "Guildframe campaign case studies", url: absoluteUrl("/work"), dateModified: workDate, isPartOf: { "@id": absoluteUrl("/#website") } },
      { "@type": "ItemList", itemListElement: caseStudies.map((project, i) => ({ "@type": "ListItem", position: i + 1, name: project.name, url: absoluteUrl(`/work/${project.slug}`) })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Past work", item: absoluteUrl("/work") }] },
    ] }} />
    <a className="skip-link" href="#work-content">Skip to content</a><SeoHeader />
    <main className="w-page wk wk-index" id="work-content" tabIndex={-1}>
      <header className="wk-hero">
        <div className="wk-wrap">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Past work" }]} />
          <h1 className="wk-title" data-reveal="lines"><span className="w-line"><span>Campaign design</span></span> <span className="w-line"><span><em>case studies.</em></span></span></h1>
          <div className="wk-hero-foot">
            <div className="wk-hero-lead" data-reveal="rise">
              <p>A security system for Vespas, an Italian watch, a novel, an RPG accessory, modular terrain, card storage and a survival horror board game. Each project shows what the creator brought, what we did and the published campaign.</p>
              <p className="wk-updated">Updated <time dateTime={workDate}>{formatContentDate(workDate)}</time></p>
            </div>
            <div className="wk-total" data-reveal="rise">
              <strong className="wk-figure">$5M<sup>+</sup></strong>
              <p className="wk-total-label"><span className="w-dot">Client results</span></p>
              <p>Raised on Kickstarter by the campaigns Umair and his team have worked on. These are our clients’ results, and they include campaigns not shown here.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="wk-wrap" aria-label="Case studies by category">
        <GuideVisual data={categoryVisual} />
      </section>

      <WorkFilter wings={wings.map(wing => ({ id: wing, label: wingLabels[wing] }))} total={mixedWork.length}/>

      <section className="wk-deck" id="work-deck" aria-label="Client work">
        {mixedWork.map((item, index) => {
          const project = studyFor(item.caseStudy);
          const caseHref = project ? `/work/${project.slug}` : null;
          const image = <ResponsiveImage src={`/images/work/${item.image}.webp`} alt={item.alt} width={item.imageWidth} height={item.imageHeight} loading={index === 0 ? undefined : "lazy"} fetchPriority={index === 0 ? "high" : undefined} sizes="(max-width: 900px) calc(100vw - 32px), 58vw" />;
          const mediaProps = { className: "wk-card-media", "data-format": "landscape", "data-title": item.name, "data-reveal": "media", "data-wk-tilt": "", tabIndex: -1, "aria-hidden": true as const };
          return <article className="wk-card" data-wings={[item.wing, ...(item.alsoIn ?? [])].join(" ")} aria-labelledby={`project-${item.key}`} key={item.key} style={{ "--tone": project ? caseTones[project.slug] ?? item.tone : item.tone, "--stack": index } as React.CSSProperties}>
            <figure className="wk-card-figure">
              {caseHref
                ? <Link href={caseHref} {...mediaProps} data-cursor-label="Read the case study">{image}</Link>
                : <a href={item.href} target="_blank" rel="noopener noreferrer" {...mediaProps} data-cursor-label="View on Kickstarter">{image}</a>}
              <figcaption>{project ? project.imageNote : "Campaign image"}</figcaption>
            </figure>
            <div className="wk-card-body">
              <h2 className="wk-card-name" id={`project-${item.key}`}>{caseHref ? <Link href={caseHref} data-title={item.name}>{item.name}</Link> : item.name}</h2>
              <p className="wk-tags"><span className="wk-wing">{item.label}</span><span className="w-dot">Client work</span>{item.detail ? <span>{item.detail}</span> : null}</p>
              <p className="wk-card-brief">{project ? project.brief : item.summary}</p>
              <dl className="wk-card-role">
                {project ? <div><dt>Umair’s contribution</dt><dd>{project.contributionSummary}</dd></div> : item.role ? <div><dt>Umair’s contribution</dt><dd>{item.role}</dd></div> : null}
                {item.result ? <div><dt>Client result</dt><dd className="wk-card-result">{item.result} on Kickstarter</dd></div> : null}
              </dl>
              {project?.testimonial && <blockquote className="wk-card-quote"><p>“{project.testimonial.quote}”</p><footer>Client feedback from {project.testimonial.client}</footer></blockquote>}
              <nav className="wk-card-links" aria-label={`${item.name} links`}>
                {caseHref ? <Link className="w-btn w-btn--small" href={caseHref} data-title={item.name}>Read the case study<span className="gf-sr-only"> for {item.name}</span><Icon name="arrow" /></Link> : null}
                <a className="w-link" href={item.href} target="_blank" rel="noopener noreferrer">View the published campaign<span className="gf-sr-only"> for {item.name}, opens in a new tab</span></a>
              </nav>
            </div>
          </article>;
        })}
      </section>

      <aside className="wk-note" aria-labelledby="work-note-title">
        <div className="wk-wrap wk-note-inner">
          <p className="wk-note-text" id="work-note-title">These projects demonstrate campaign creative. Their funding totals are not presented as Guildframe advertising results.</p>
          <div className="wk-rows">{nextLinks.map(link => <Link className="wk-row" href={link.href} key={link.href} data-title={link.label}><span>{link.label}</span><Icon name="arrow" size={22} /></Link>)}</div>
        </div>
      </aside>
      <WorkFx />
    </main><SeoFooter />
  </>;
}

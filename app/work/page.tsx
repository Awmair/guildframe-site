import Link from "next/link";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { Icon } from "../components/chrome/Icon";
import { WorkFx } from "../components/work/WorkFx";
import { caseTones } from "../components/work/tones";
import { absoluteUrl, pageMetadata } from "../site-config";
import { caseStudies, workDate } from "../case-studies";
import { beyondTabletop } from "../past-work";
import { formatContentDate } from "../content-dates";
import { GuideVisual, type GuideVisualData } from "../components/GuideVisual";

export const metadata = pageMetadata({ title: "Tabletop Kickstarter Campaign Design Case Studies", description: "Campaign design for ScentedRealms, FutureProof Terrain, Quiver Time and Cryptic Explorers: Umair's contribution, design choices and the published pages.", path: "/work" });

// Built from the case study data, so the categories and roles always match the cards below.
const categoryVisual: GuideVisualData = {
  kind: "compare",
  title: "Four case studies cover four tabletop categories",
  columns: caseStudies.map(project => ({ name: project.category, points: [project.name, project.contributionSummary] })),
  caption: "Each case study links to the published Kickstarter campaign. Funding totals are the creators' results.",
};

const nextLinks = [
  { href: "/campaign-creative", label: "Discuss creative production" },
  { href: "/campaign-design", label: "Explore campaign page design" },
  { href: "/kickstarter-launch-services", label: "Explore full launch support" },
  { href: "/buy", label: "Start your launch project" },
];

export default function WorkPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": absoluteUrl("/work"), name: "Guildframe tabletop campaign case studies", url: absoluteUrl("/work"), dateModified: workDate, isPartOf: { "@id": absoluteUrl("/#website") } },
      { "@type": "ItemList", itemListElement: caseStudies.map((project, i) => ({ "@type": "ListItem", position: i + 1, name: project.name, url: absoluteUrl(`/work/${project.slug}`) })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Past work", item: absoluteUrl("/work") }] },
    ] }} />
    <a className="skip-link" href="#work-content">Skip to content</a><SeoHeader />
    <main className="w-page wk wk-index" id="work-content" tabIndex={-1}>
      <header className="wk-hero">
        <div className="wk-wrap">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Past work" }]} />
          <h1 className="wk-title" data-reveal="lines"><span className="w-line"><span>Tabletop campaign</span></span> <span className="w-line"><span><em>design case studies.</em></span></span></h1>
          <div className="wk-hero-foot">
            <div className="wk-hero-lead" data-reveal="rise">
              <p>A survival horror board game, an RPG accessory, modular terrain and card storage. Each case study shows the project, my contribution and the design choices behind the campaign presentation.</p>
              <p className="wk-updated">Updated <time dateTime={workDate}>{formatContentDate(workDate)}</time></p>
            </div>
            <div className="wk-total" data-reveal="rise">
              <strong className="wk-figure">$5M<sup>+</sup></strong>
              <p className="wk-total-label"><span className="w-dot">Client results</span></p>
              <p>Raised on Kickstarter by the campaigns I have worked on. These are my clients’ results, and they include campaigns not shown here.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="wk-wrap" aria-label="Case studies by category">
        <GuideVisual data={categoryVisual} />
      </section>

      <section className="wk-deck" aria-label="Client case studies">
        {caseStudies.map((project, index) => <article className="wk-card" aria-labelledby={`project-${project.slug}`} key={project.slug} style={{ "--tone": caseTones[project.slug] ?? caseTones["scented-realms"], "--stack": index } as React.CSSProperties}>
          <figure className="wk-card-figure">
            <Link href={`/work/${project.slug}`} className="wk-card-media" data-format={Number(project.imageWidth) === Number(project.imageHeight) ? "square" : "landscape"} data-title={project.name} data-cursor-label="Read the case study" data-reveal="media" data-wk-tilt="" tabIndex={-1} aria-hidden="true">
              <ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading={index === 0 ? undefined : "lazy"} fetchPriority={index === 0 ? "high" : undefined} sizes="(max-width: 900px) calc(100vw - 32px), 58vw" />
            </Link>
            <figcaption>{project.imageNote}</figcaption>
          </figure>
          <div className="wk-card-body">
            <h2 className="wk-card-name" id={`project-${project.slug}`}><Link href={`/work/${project.slug}`} data-title={project.name}>{project.name}</Link></h2>
            <p className="wk-tags"><span className="w-dot">Client work</span><span>{project.category}</span></p>
            <p className="wk-card-brief">{project.brief}</p>
            <dl className="wk-card-role"><div><dt>My contribution</dt><dd>{project.contributionSummary}</dd></div>{project.result && <div><dt>Client result</dt><dd className="wk-card-result">{project.result.total} on Kickstarter</dd></div>}</dl>
            {project.testimonial && <blockquote className="wk-card-quote"><p>“{project.testimonial.quote}”</p><footer>Client feedback from {project.testimonial.client}</footer></blockquote>}
            <nav className="wk-card-links" aria-label={`${project.name} links`}>
              <Link className="w-btn w-btn--small" href={`/work/${project.slug}`} data-title={project.name}>Read the case study<span className="gf-sr-only"> for {project.name}</span><Icon name="arrow" /></Link>
              <a className="w-link" href={project.href} target="_blank" rel="noopener noreferrer">View the published campaign<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a>
            </nav>
          </div>
        </article>)}
      </section>

      <section className="wk-beyond" aria-labelledby="beyond-title">
        <div className="wk-wrap">
          <div className="wk-beyond-head">
            <h2 className="wk-h2" id="beyond-title" data-reveal="lines"><span className="w-line"><span>Beyond <em>tabletop</em></span></span></h2>
            <p>Client campaigns outside games. The totals are public Kickstarter figures and are my clients’ results. Planning a product of your own? See <Link className="w-link" href="/kickstarter-product-campaign-design">Kickstarter campaign design for product launches</Link>.</p>
          </div>
          <ul className="wk-beyond-list">{beyondTabletop.map(item => <li className="wk-mini" key={item.name}>
            <a className="wk-mini-media" href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" data-cursor-label="View on Kickstarter" data-reveal="media">
              <ResponsiveImage src={`/images/work/${item.image}.webp`} alt={item.alt} width={1400} height={788} loading="lazy" sizes="(max-width: 900px) calc(100vw - 32px), 30vw" />
            </a>
            <div className="wk-mini-body">
              <h3>{item.name}</h3>
              <p className="wk-tags"><span className="w-dot">Client work</span></p>
              <p>{item.line}</p>
              {"role" in item && <p className="wk-mini-role"><span>My contribution: </span>{item.role}</p>}
              <p className="wk-mini-result">{item.result}</p>
              <a className="w-link" href={item.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {item.name}, opens in a new tab</span></a>
            </div>
          </li>)}</ul>
        </div>
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

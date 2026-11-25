import Link from "next/link";
import { ResponsiveImage } from "./ResponsiveImage";
import { clientTestimonials } from "../past-work";
import { caseStudies } from "../case-studies";

const tones = ["#6E2D24", "#22463B", "#2B2E3A"];

/** Client campaigns as a stacked deck of panels, the same build as the home page. */
export function PastWork() {
  return <section className="sv-work" id="past-work" aria-labelledby="past-work-title">
    <div className="w-wrap-wide sv-work-head">
      <h2 id="past-work-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Tabletop Kickstarter</span></span> <span className="w-line"><span><em>campaigns I’ve worked on</em></span></span></h2>
      <p>Creative work for four tabletop projects. Follow the links to see their published Kickstarter campaigns.</p>
    </div>
    <div className="sv-projects">{caseStudies.map((project, index) => <article className="sv-project" key={project.slug} style={{ "--tone": tones[index % tones.length] } as React.CSSProperties}>
      <Link className="sv-project-media" href={`/work/${project.slug}`} data-title={project.name} data-cursor-label="Read the case study" data-reveal="media" tabIndex={-1} aria-hidden="true">
        <ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading="lazy" sizes="(max-width: 900px) calc(100vw - 32px), 58vw"/>
      </Link>
      <div className="sv-project-body">
        <p className="sv-project-tags"><span className="w-dot">Client work</span><span className="w-meta">{project.category}</span></p>
        <h3 className="sv-project-name"><Link href={`/work/${project.slug}`} data-title={project.name}>{project.name}</Link></h3>
        <p className="sv-project-sub">{project.title}</p>
        <p>{project.brief}</p>
        <div className="sv-project-links"><Link className="w-link" href={`/work/${project.slug}`} data-title={project.name}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link><a className="w-link" href={project.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a></div>
        <p className="sv-project-note">{project.imageNote}</p>
      </div>
    </article>)}</div>
  </section>;
}

/** Client feedback, set as plain quotations. */
export function ClientTestimonials() {
  return <section className="sv-quotes" id="testimonials" aria-labelledby="testimonials-title">
    <div className="w-wrap-wide sv-quotes-inner">
      <div className="sv-quotes-head">
        <h2 id="testimonials-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>What campaign</span></span> <span className="w-line"><span><em>clients say</em></span></span></h2>
        <p>Client feedback on the creative work shown above.</p>
      </div>
      <div className="sv-quote-list">{clientTestimonials.map(t => <figure className="sv-quote" key={t.project}><blockquote><p>{t.quote}</p></blockquote><figcaption><strong>{t.project}</strong><span>Client: {t.client}</span></figcaption></figure>)}</div>
    </div>
  </section>;
}

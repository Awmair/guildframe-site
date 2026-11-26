import Link from "next/link";
import { ResponsiveImage } from "../ResponsiveImage";
import { mixedWork } from "../../work-mix";

// Home: every client campaign in one stacked deck, products and tabletop alternating.
// Case studies link to their pages; the three campaigns outside tabletop link to Kickstarter.
export function MixedWork() {
  return (
    <section className="h-work" id="past-work" aria-labelledby="past-work-title" data-tone-shift="">
      <div className="w-wrap-wide h-work-head">
        <h2 id="past-work-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Products, games</span></span> <span className="w-line"><span><em>and a novel</em></span></span></h2>
        <div className="h-work-total" data-reveal="rise">
          <strong className="h-figure">$5M<sup>+</sup></strong>
          <p>Raised on Kickstarter by the campaigns Umair and his team have worked on. These are our clients’ results, and they include campaigns not shown here.</p>
          <Link className="w-link" href="/work">All client work</Link>
        </div>
      </div>
      <div className="h-projects">{mixedWork.map(project => {
        const caseHref = project.caseStudy ? `/work/${project.caseStudy}` : null;
        const media = <ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading="lazy" sizes="(max-width: 900px) calc(100vw - 32px), 58vw"/>;
        return <article className="h-project" data-wing={project.wing} key={project.key} style={{ "--tone": project.tone } as React.CSSProperties}>
          {caseHref
            ? <Link className="h-project-media" href={caseHref} data-title={project.name} data-cursor-label="Read the case study" data-reveal="media" data-wk-tilt="" tabIndex={-1} aria-hidden="true">{media}</Link>
            : <a className="h-project-media" href={project.href} target="_blank" rel="noopener noreferrer" data-cursor-label="View on Kickstarter" data-reveal="media" data-wk-tilt="" tabIndex={-1} aria-hidden="true">{media}</a>}
          <div className="h-project-body">
            <p className="h-project-tags"><span className="h-project-wing">{project.label}</span><span className="w-dot">Client work</span>{project.detail ? <span className="w-meta">{project.detail}</span> : null}</p>
            <h3 className="h-project-name">{caseHref ? <Link href={caseHref} data-title={project.name}>{project.name}</Link> : project.name}</h3>
            <p>{project.summary}</p>
            {project.result ? <p className="h-project-result">{project.result}<span>Public Kickstarter total, the client’s result</span></p> : null}
            {project.testimonial ? <figure><blockquote>“{project.testimonial.quote}”</blockquote><figcaption>Client feedback from {project.testimonial.client}</figcaption></figure> : null}
            <div className="h-project-links">
              {caseHref ? <Link className="w-link" href={caseHref}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link> : null}
              <a className="w-link" href={project.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a>
            </div>
          </div>
        </article>;
      })}</div>
    </section>
  );
}

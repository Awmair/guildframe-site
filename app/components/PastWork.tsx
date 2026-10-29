import { ResponsiveImage } from "./ResponsiveImage";
import {clientTestimonials} from "../past-work";
import {caseStudies} from "../case-studies";
import Link from "next/link";
export function PastWork({compact = false}: {compact?: boolean}) {
  if (compact) return <section className="gf-section gf-studio-work" id="past-work" aria-labelledby="past-work-title">
    <div className="gf-section-heading"><div><span className="gf-eyebrow">Selected client work</span><h2 id="past-work-title">Made for the game.<br/><em>Built for the campaign.</em></h2></div><Link className="gf-text-link" href="/work">Explore the case studies</Link></div>
    <div className="gf-project-panels">{caseStudies.map((project, index) => <article className={`gf-project-panel gf-project-panel-${index}`} key={project.slug}>
      <Link href={`/work/${project.slug}`} className="gf-project-media"><ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width="1200" height="675" loading="lazy" sizes="(max-width: 700px) calc(100vw - 44px), (max-width: 1050px) 46vw, 400px"/><span>{project.imageNote}</span></Link>
      <div className="gf-project-content"><span className="gf-eyebrow">{project.category}</span><h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3><p>{index === 0 ? "Visual direction and campaign presentation for an unfamiliar RPG accessory." : index === 1 ? "A campaign story around modular parts, table use and storage." : "A clear presentation of the cover, divider and card storage options."}</p>
        {project.testimonial ? <blockquote><p>“{project.testimonial.quote}”</p><footer>Client feedback · {project.testimonial.client}</footer></blockquote> : <div className="gf-project-role"><span>Guildframe&apos;s role</span><p>Campaign presentation. Product photography courtesy of Quiver Time.</p></div>}
        <div className="gf-project-links"><Link href={`/work/${project.slug}`}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link><a href={project.href} target="_blank" rel="noopener noreferrer">Kickstarter<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a></div>
      </div>
    </article>)}</div>
  </section>;
  return <section className={`gf-section gf-past-work${compact ? " gf-proof-compact" : ""}`} id="past-work" aria-labelledby="past-work-title">
    <div className="gf-section-heading" data-reveal><div><span className="gf-eyebrow">Past work</span><h2 id="past-work-title">{compact ? <>Real games.<br/><em>Real campaign work.</em></> : <>Tabletop Kickstarter{" "}<br /><em>campaigns I’ve worked on.</em></>}</h2></div>{!compact && <p>Creative work for three tabletop projects. Follow the links to see their published Kickstarter campaigns.</p>}</div>
    <div className="gf-work-grid">{caseStudies.map(project=><article className="gf-work-card" key={project.name} data-reveal><div className="gf-work-image"><ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width="1200" height="675" loading="lazy" /></div><div className="gf-work-copy"><span className="gf-eyebrow">{project.category}</span><h3>{project.name}</h3><p className="gf-work-subtitle">{project.title}</p>{!compact && <p>{project.brief}</p>}<div className="gf-work-actions"><Link className="gf-text-link" href={`/work/${project.slug}`}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link><a className="gf-text-link" href={project.href} target="_blank" rel="noopener noreferrer">View Kickstarter <span className="gf-sr-only"> for {project.name} (opens in a new tab)</span></a></div><small>{project.imageNote}</small></div></article>)}</div>
  </section>;
}
export function ClientTestimonials({compact = false}: {compact?: boolean}) {
  return <section className={`gf-section gf-testimonials${compact ? " gf-quotes-compact" : ""}`} id="testimonials" aria-labelledby="testimonials-title"><div className={`gf-section-heading${compact ? " gf-sr-only" : ""}`} data-reveal><div><span className="gf-eyebrow">Client feedback</span><h2 id="testimonials-title">What campaign{" "}<br /><em>clients say.</em></h2></div><p>Client feedback on the creative work shown above.</p></div><div className="gf-quote-grid">{clientTestimonials.map(t=><figure className="gf-quote" key={t.project} data-reveal><span className="gf-quote-mark" aria-hidden="true">“</span><blockquote><p>{t.quote}</p></blockquote><figcaption><strong>{t.project}</strong><span>Client: {t.client}</span></figcaption></figure>)}</div></section>;
}

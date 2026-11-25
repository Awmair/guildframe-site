import Link from "next/link";
import { JsonLd } from "../JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../SeoChrome";
import { ResponsiveImage } from "../ResponsiveImage";
import { CreativeWalkthrough } from "../CreativeWalkthrough";
import { Icon } from "../chrome/Icon";
import { WorkFx } from "./WorkFx";
import { caseTones } from "./tones";
import { caseStudies } from "../../case-studies";
import { absoluteUrl, siteConfig } from "../../site-config";
import { authorId } from "../../seo-entities";
import { formatContentDate } from "../../content-dates";

type CaseStudy = (typeof caseStudies)[number];
type Faq = { question: string; answer: string };
type Source = { label: string; publisher: string; href: string };

/** A case study told as a story: dark hero tinted from the artwork, the work large, the process, the quote, then the next project. */
export function CaseStudyStory({ project: p, path, title, published, updated, readTime, faqs, sources }: {
  project: CaseStudy;
  path: string;
  title: string;
  published: string;
  updated: string;
  readTime: string;
  faqs: Faq[];
  sources: Source[];
}) {
  const index = caseStudies.findIndex(other => other.slug === p.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const others = caseStudies.filter(other => other.slug !== p.slug && other.slug !== next.slug);
  const hasWalkthrough = p.slug !== "quiver-time";
  const square = p.imageWidth === p.imageHeight;
  const toc = [{ id: "role", label: "My contribution" }, { id: "visual-details", label: "Visual details" }, ...(hasWalkthrough ? [{ id: "walkthrough", label: "Campaign walkthrough" }] : []), { id: "presentation", label: "The campaign presentation" }, { id: "takeaway", label: "For your own launch" }];
  const servicePath = siteConfig.purchasePath;
  const serviceLabel = "Explore launch services";

  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl(path), url: absoluteUrl(path), name: title, description: p.description, isPartOf: { "@id": absoluteUrl("/#website") }, breadcrumb: { "@id": absoluteUrl(`${path}#breadcrumb`) }, primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(siteConfig.socialImage) }, datePublished: published, dateModified: updated, inLanguage: "en" },
      { "@type": "Article", "@id": absoluteUrl(`${path}#article`), headline: title, description: p.description, datePublished: published, dateModified: updated, mainEntityOfPage: { "@id": absoluteUrl(path) }, image: absoluteUrl(siteConfig.socialImage), articleSection: p.category, inLanguage: "en", isAccessibleForFree: true, author: { "@id": authorId() }, publisher: { "@id": absoluteUrl("/#organization") }, citation: sources.map(source => ({ "@type": "CreativeWork", name: source.label, url: source.href.startsWith("/") ? absoluteUrl(source.href) : source.href, publisher: { "@type": "Organization", name: source.publisher } })), about: ["Tabletop games", p.category] },
      { "@type": "BreadcrumbList", "@id": absoluteUrl(`${path}#breadcrumb`), itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Past work", item: absoluteUrl("/work") }, { "@type": "ListItem", position: 3, name: title, item: absoluteUrl(path) }] },
      { "@type": "FAQPage", "@id": absoluteUrl(`${path}#faq`), isPartOf: { "@id": absoluteUrl(path) }, mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ] }} />
    <a className="skip-link" href="#article-content">Skip to article</a>
    <SeoHeader />
    <main className="w-page wk wk-case" id="main-content" tabIndex={-1} style={{ "--tone": caseTones[p.slug] ?? caseTones["scented-realms"] } as React.CSSProperties}>
      <header className="wk-case-hero">
        <img className="wk-case-standee" src="/images/world/standee-easel-v1.webp" width="307" height="480" alt="" aria-hidden="true" />
        <div className="wk-wrap">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Past work", href: "/work" }, { label: title }]} />
          <h1 className="wk-case-title" data-reveal="lines"><span className="w-line"><span>{p.name}:</span></span> <span className="w-line"><span><em>campaign design</em></span></span></h1>
          <div className="wk-case-intro" data-reveal="rise">
            <p className="wk-case-lead">{p.description}</p>
            <p className="wk-case-meta"><span className="w-dot">Client work</span><span>Updated <time dateTime={updated}>{formatContentDate(updated)}</time></span><span>{readTime}</span><Link href="/authors/guildframe">By Umair at Guildframe</Link></p>
          </div>
          <dl className="wk-facts">
            <div><dt>My contribution</dt><dd>{p.contributionSummary}</dd></div>
            <div><dt>Category</dt><dd>{p.category}</dd></div>
            <div><dt>Platform</dt><dd>Kickstarter</dd></div>
            <div><dt>Visual shown here</dt><dd>{p.imageNote}</dd></div>
          </dl>
        </div>
      </header>

      <figure className="wk-lead-figure wk-wrap" data-format={square ? "square" : "landscape"}>
        <div className="wk-lead-media" data-reveal="media" data-wk-tilt="">
          <ResponsiveImage src={`/images/work/${p.image}.webp`} alt={p.alt} width={p.imageWidth} height={p.imageHeight} sizes={square ? "(max-width: 900px) calc(100vw - 32px), 720px" : "(max-width: 1360px) calc(100vw - 32px), 1328px"} fetchPriority="high" />
        </div>
        <figcaption><span>{p.imageContext}</span><a className="w-link" href={`/images/work/${p.image}.webp`} target="_blank" rel="noopener noreferrer">Open the full image<span className="gf-sr-only"> in a new tab</span></a></figcaption>
      </figure>

      <article className="wk-story" id="article-content">
        <nav className="wk-chapters wk-wrap" aria-label="Table of contents">
          {toc.map(item => <a href={`#${item.id}`} key={item.id}>{item.label}</a>)}
          <Link className="wk-chapters-cta" href={servicePath} data-analytics-event="service_interest" data-analytics-label={serviceLabel} data-analytics-location="article sidebar">Plan your game launch</Link>
        </nav>

        <div className="wk-wrap wk-answer" aria-label="Direct answer"><p>{p.brief}</p></div>

        <section className="wk-wrap wk-split" aria-labelledby="role">
          <h2 className="wk-h2" id="role">My contribution</h2>
          <div className="wk-prose"><p>{p.role}</p><p className="wk-credit">{p.credit}</p></div>
        </section>

        <section className="wk-details" aria-labelledby="visual-details">
          <div className="wk-wrap wk-split">
            <h2 className="wk-h2" id="visual-details">{p.proofLabel}</h2>
            <div className="wk-prose"><p>{p.slug === "quiver-time" ? "These detail views use the same Quiver Time product photograph shown above. They are product references." : "These detail views use the same campaign artwork shown above. Each focuses on a specific part of the product presentation."}</p></div>
          </div>
          <div className="wk-wrap wk-detail-grid">{p.proofViews.map(view => <figure className="wk-detail" key={view.title}>
            <div className="wk-detail-media" data-reveal="media"><ResponsiveImage src={`/images/work/${p.image}.webp`} alt={view.alt} width={p.imageWidth} height={p.imageHeight} sizes="(max-width: 760px) calc(100vw - 32px), 50vw" loading="lazy" style={{ objectPosition: view.position, transform: `scale(${view.scale})` }} /></div>
            <figcaption><h3>{view.title}</h3><p>{view.copy}</p></figcaption>
          </figure>)}</div>
          <p className="wk-wrap wk-credit">{p.credit}</p>
        </section>

        {hasWalkthrough && <section className="wk-walk" id="walkthrough" aria-labelledby="case-walkthrough-title">
          <div className="wk-wrap">
            <h2 className="wk-h2" id="case-walkthrough-title">A short campaign <em>walkthrough</em></h2>
            <CreativeWalkthrough project={p.slug as "scented-realms" | "futureproof-terrain"} video={{ src: `/videos/${p.slug}-walkthrough.mp4`, captions: `/videos/${p.slug}-walkthrough.vtt` }} />
          </div>
        </section>}

        <section className="wk-wrap wk-process" aria-labelledby="presentation">
          <h2 className="wk-h2 wk-process-title" id="presentation">{p.headline}</h2>
          <ol className="wk-decisions">{p.decisions.map(decision => <li key={decision.title}><h3>{decision.title}</h3><p>{decision.copy}</p></li>)}</ol>
        </section>

        {p.testimonial && <figure className="wk-quote">
          <div className="wk-wrap">
            <blockquote><p>“{p.testimonial.quote}”</p></blockquote>
            <figcaption>{p.name} client: {p.testimonial.client}</figcaption>
          </div>
        </figure>}

        <section className="wk-wrap wk-split" aria-labelledby="takeaway">
          <h2 className="wk-h2" id="takeaway">What to carry into your <em>own launch</em></h2>
          <div className="wk-prose">
            <p>{p.lesson}</p>
            <p>For a project like this, send the product details, usable images and proposed rewards together. Mark any specifications that are still changing. That makes it possible to plan the page around what a backer can actually choose.</p>
            <ul className="wk-link-list">
              <li><Link className="w-link" href={p.servicePath}>{p.serviceLabel}</Link></li>
              <li><Link className="w-link" href="/campaign-creative">Creative production for your launch</Link></li>
              <li><Link className="w-link" href={`/guides/${p.guide}`}>{p.guideLabel}</Link></li>
            </ul>
            <aside className="wk-callout"><strong>See the published campaign</strong><p><a className="w-link" href={p.href} target="_blank" rel="noopener noreferrer">Open {p.name} on Kickstarter</a>. This case study describes campaign creative, not paid advertising performance or responsibility for the project&apos;s total funding.</p></aside>
          </div>
        </section>

        <div className="wk-wrap wk-backmatter">
          <section className="wk-faq" id="faq" aria-labelledby="case-faq-title">
            <h2 className="wk-h3" id="case-faq-title">Frequently asked questions</h2>
            {faqs.map(faq => <details key={faq.question}><summary>{faq.question}<Icon name="plus" size={20} /></summary><p>{faq.answer}</p></details>)}
          </section>
          <div className="wk-aside-col">
            <section className="wk-sources" aria-labelledby="article-sources-title">
              <h2 className="wk-h3" id="article-sources-title">Sources and references</h2>
              <p>Platform requirements and figures come from the sources below. Layout advice and checklists are Guildframe recommendations.</p>
              <ul>{sources.map(source => <li key={source.href}><a className="w-link" href={source.href} target="_blank" rel="noreferrer">{source.label}</a><span>{source.publisher}</span></li>)}</ul>
            </section>
            <aside className="wk-author" aria-label="About the author"><span className="wk-monogram" aria-hidden="true">U</span><div><strong>Written by Umair</strong><p>Founder, campaign designer and paid advertising specialist at Guildframe.</p><Link className="w-link" href="/authors/guildframe">About the author</Link></div></aside>
          </div>
        </div>

        <div className="wk-wrap wk-cta">
          <h2 className="wk-h2">Need help preparing <em>your launch?</em></h2>
          <div>
            <p>Guildframe handles prelaunch setup, campaign creative, paid advertising and live support for tabletop projects. Share your game and launch plans to agree a scope. A free opening mockup is available for creative enquiries.</p>
            <div className="wk-cta-actions">
              <Link className="w-btn" href={servicePath} data-analytics-event="service_interest" data-analytics-label={serviceLabel} data-analytics-location="article CTA">{serviceLabel}<Icon name="arrow" /></Link>
              <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Get my free mockup" data-analytics-location="article CTA">Get my free mockup<Icon name="arrow" /></a>
            </div>
          </div>
        </div>
      </article>

      <nav className="wk-next" aria-label="More campaign case studies" style={{ "--next-tone": caseTones[next.slug] ?? caseTones["scented-realms"] } as React.CSSProperties}>
        <Link className="wk-next-link" href={`/work/${next.slug}`} data-title={next.name} data-cursor-label="Next case study">
          <span className="wk-next-word" aria-hidden="true">Next</span>
          <span className="wk-next-name"><span className="gf-sr-only">Next case study: </span>{next.name}</span>
          <span className="wk-next-meta">{next.category}</span>
          <span className="wk-next-media" data-format={next.imageWidth === next.imageHeight ? "square" : "landscape"} aria-hidden="true"><ResponsiveImage src={`/images/work/${next.image}.webp`} alt="" width={next.imageWidth} height={next.imageHeight} loading="lazy" sizes="(max-width: 900px) 70vw, 34vw" /></span>
          <span className="wk-next-line" aria-hidden="true"><i /></span>
        </Link>
        <div className="wk-wrap wk-next-more">
          {others.map(other => <Link className="w-link" key={other.slug} href={`/work/${other.slug}`} data-title={other.name}>{other.name}</Link>)}
          <Link className="w-link" href="/work">All case studies</Link>
        </div>
      </nav>
      <WorkFx />
    </main>
    <SeoFooter />
  </>;
}

import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Icon, Roll } from "../components/chrome/Icon";
import { WorkFx } from "../components/work/WorkFx";
import { Board } from "../components/world/Board";
import { gameCategories } from "../campaign-content";
import { mixedWork } from "../work-mix";
import { formatContentDate } from "../content-dates";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";
import { tabletopHub, tabletopHubDate } from "../tabletop-hub";

export const metadata = pageMetadata({ title: tabletopHub.title, description: tabletopHub.description, path: `/${tabletopHub.slug}` });

const path = `/${tabletopHub.slug}`;
const studies = mixedWork.filter(item => item.wing === "tabletop");

export default function TabletopHub() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": absoluteUrl(path), url: absoluteUrl(path), name: tabletopHub.title, description: tabletopHub.description, dateModified: tabletopHubDate, inLanguage: "en", isPartOf: { "@id": absoluteUrl("/#website") }, about: ["Tabletop games", "Kickstarter", "Gamefound"], breadcrumb: { "@id": absoluteUrl(`${path}#breadcrumb`) } },
      { "@type": "ItemList", "@id": absoluteUrl(`${path}#genres`), name: "Tabletop campaign design by genre", itemListElement: [...gameCategories.map(g => g.slug), "gamefound-campaign-design", "gamefound-launch-services"].map((slug, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/${slug}`) })) },
      { "@type": "BreadcrumbList", "@id": absoluteUrl(`${path}#breadcrumb`), itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: tabletopHub.title, item: absoluteUrl(path) }] },
      { "@type": "FAQPage", mainEntity: tabletopHub.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ] }}/>
    <a className="skip-link" href="#tabletop-content">Skip to content</a><SeoHeader/>
    <main className="w-page sv tt" id="tabletop-content" tabIndex={-1}>

      <section className="sv-hero" aria-labelledby="tabletop-title">
        <div className="sv-hero-inner">
          <div className="sv-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tabletop campaigns" }]}/>
            <h1 id="tabletop-title" className="sv-title" data-reveal="lines"><span className="w-line"><span>Tabletop Kickstarter campaigns</span></span> <span className="w-line"><span><em>for game creators.</em></span></span></h1>
            <p className="w-meta">Updated <time dateTime={tabletopHubDate}>{formatContentDate(tabletopHubDate)}</time></p>
          </div>
          <div className="sv-hero-side" data-reveal="rise">
            <p>{tabletopHub.lead}</p>
            <div className="sv-actions">
              <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my game" data-analytics-location="tabletop hub"><Roll>Discuss my game</Roll><Icon name="arrow"/></a>
              <a className="w-link" href="#genres">Find your genre</a>
            </div>
          </div>
          <figure className="sv-hero-figure">
            <div className="sv-cut">
              <ResponsiveImage sizes="(max-width: 900px) calc(100vw - 48px), 44vw" src="/images/campaign/hero.webp" alt="Original board game, cards, RPG books, miniatures and dice together" width={1774} height={887} fetchPriority="high"/>
              <figcaption><span className="w-dot w-dot--concept">Studio concept. Your artwork sets the direction.</span></figcaption>
            </div>
          </figure>
        </div>
      </section>

      <nav className="sv-jump" aria-label="On this page">
        <a href="#genres">Genres</a>
        <a href="#gamefound">Gamefound</a>
        <a href="#tabletop-work">Case studies</a>
        <a href="#tabletop-guides">Guides</a>
        <a href="#tabletop-questions">Your questions</a>
      </nav>

      <section className="sv-scope tone-board" aria-labelledby="tabletop-intro-title">
        <div className="w-wrap-wide sv-scope-inner">
          <div className="sv-scope-intro">
            <h2 id="tabletop-intro-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>A tabletop page has to teach the game.</span></span></h2>
            {tabletopHub.intro.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
            <Link className="w-link" href="/campaign-design#pricing">Campaign page scope and price</Link>
          </div>
          <aside className="sv-deliverables" aria-labelledby="tabletop-scope-title">
            <h3 id="tabletop-scope-title">What a tabletop launch can include</h3>
            <ul>{tabletopHub.scope.map(item => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="tt-board" aria-labelledby="tabletop-board-title">
        <div className="w-wrap-wide tt-board-head">
          <h2 id="tabletop-board-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>The launch,</span></span> <span className="w-line"><span><em>on the board</em></span></span></h2>
          <p>Every stop on the board is a part of the launch. Drag the board, hold to see all of it, and click a stop to open that service.</p>
        </div>
        <div className="tt-board-stage"><Board /></div>
      </section>

      <section className="tt-genres" id="genres" aria-labelledby="genres-title">
        <div className="w-wrap-wide">
          <div className="sv-row-head">
            <h2 id="genres-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Pick your</span></span> <span className="w-line"><span><em>corner of the table</em></span></span></h2>
            <p data-reveal="rise">Each genre page covers what backers of that kind of game look for, the artwork to send and the questions we ask before we start.</p>
          </div>
          <ul className="tt-genre-list">{gameCategories.map((genre, index) => <li key={genre.slug} data-reveal="rise" style={{ ["--i" as string]: index }}>
            <Link className="tt-genre" href={`/${genre.slug}`} data-title={genre.name} data-cursor-label="Open">
              <span className="tt-genre-media" data-wk-tilt="">
                <ResponsiveImage src={`/images/campaign/${genre.image}.webp`} alt={genre.alt} width={1000} height={750} loading="lazy" sizes="(max-width: 760px) 78vw, (max-width: 1100px) 44vw, 30vw"/>
              </span>
              <span className="tt-genre-body">
                <span className="tt-genre-tag">{genre.tag}</span>
                <span className="tt-genre-name">{genre.name}<Icon name="arrow" size={24}/></span>
                <span className="tt-genre-copy">{genre.copy}</span>
              </span>
            </Link>
          </li>)}</ul>
          <p className="tt-concept-note"><span className="w-dot w-dot--concept">Genre images are studio concepts, not client work</span></p>
        </div>
      </section>

      <section className="tt-gamefound h" id="gamefound" aria-labelledby="gamefound-title">
        <div className="w-wrap-wide">
          <div className="h-row-head"><h2 id="gamefound-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Launching on <em>Gamefound</em></span></span></h2><Link className="w-link" href="/guides/kickstarter-vs-gamefound">Kickstarter or Gamefound?</Link></div>
          {tabletopHub.gamefound.map((item, index) => <Link className="h-guide" href={item.href} key={item.href} data-title={item.label} data-cursor-label="Read">
            <span className="h-guide-n" aria-hidden="true">{index + 1}</span><span className="h-guide-title">{item.label}</span><span className="w-meta">{item.meta}</span><Icon name="arrow" size={22}/>
          </Link>)}
        </div>
      </section>

      <section className="h-work tt-work h" id="tabletop-work" aria-labelledby="tabletop-work-title">
        <div className="w-wrap-wide h-work-head">
          <h2 id="tabletop-work-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Four tabletop</span></span> <span className="w-line"><span><em>case studies</em></span></span></h2>
          <div className="h-work-total" data-reveal="rise">
            <p>An RPG accessory, modular terrain, card storage and a survival horror board game. Each case study shows the brief, Umair’s contribution and the design choices behind the page. Funding totals are the creators’ results.</p>
            <Link className="w-link" href="/work">All client work</Link>
          </div>
        </div>
        <div className="h-projects">{studies.map(project => <article className="h-project" data-wing="tabletop" key={project.key} style={{ "--tone": project.tone } as React.CSSProperties}>
          <Link className="h-project-media" href={`/work/${project.caseStudy}`} data-title={project.name} data-cursor-label="Read the case study" data-reveal="media" data-wk-tilt="" tabIndex={-1} aria-hidden="true">
            <ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading="lazy" sizes="(max-width: 900px) calc(100vw - 32px), 58vw"/>
          </Link>
          <div className="h-project-body">
            <p className="h-project-tags"><span className="h-project-wing">{project.label}</span><span className="w-dot">Client work</span>{project.detail ? <span className="w-meta">{project.detail}</span> : null}</p>
            <h3 className="h-project-name"><Link href={`/work/${project.caseStudy}`} data-title={project.name}>{project.name}</Link></h3>
            <p>{project.summary}</p>
            {project.result ? <p className="h-project-result">{project.result}<span>Public Kickstarter total, the client’s result</span></p> : null}
            <div className="h-project-links"><Link className="w-link" href={`/work/${project.caseStudy}`}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link><a className="w-link" href={project.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a></div>
          </div>
        </article>)}</div>
      </section>

      <section className="h-guides tt-guides h" id="tabletop-guides" aria-labelledby="tabletop-guides-title">
        <div className="w-wrap-wide">
          <div className="h-row-head"><h2 id="tabletop-guides-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Tabletop guides</span></span> <span className="w-line"><span><em>and research</em></span></span></h2><Link className="w-link" href="/guides">All guides</Link></div>
          <div className="tt-guide-groups">{tabletopHub.guideGroups.map(group => <div className="tt-guide-group" key={group.name} data-reveal="rise">
            <h3>{group.name}</h3>
            <ul>{group.links.map(link => <li key={link.href}><Link href={link.href} data-title={link.label}><span>{link.label}</span><Icon name="arrow" size={18}/></Link></li>)}</ul>
          </div>)}</div>
        </div>
      </section>

      <section className="sv-faq" id="tabletop-questions" aria-labelledby="tabletop-faq-title">
        <div className="w-wrap-wide sv-faq-inner">
          <div className="sv-faq-head">
            <h2 id="tabletop-faq-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Questions</span></span> <span className="w-line"><span><em>from game creators</em></span></span></h2>
            <a className="w-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="tabletop hub faq">{siteConfig.contactEmail}</a>
          </div>
          <div className="sv-faq-list">{tabletopHub.faqs.map(f => <details key={f.question}><summary>{f.question}<Icon name="plus" size={20}/></summary><p>{f.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="sv-next" aria-labelledby="tabletop-next-title">
        <div className="w-wrap-wide">
          <div className="sv-beyond">
            <h2 id="tabletop-next-title" className="w-h2">See your page before you book</h2>
            <p>Send your game summary and usable artwork. We design one opening section of your campaign page as a free mockup, with no payment and no obligation to book.</p>
            <div className="sv-actions"><a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Free opening mockup" data-analytics-location="tabletop hub closing"><Roll>Request a free mockup</Roll><Icon name="arrow"/></a></div>
          </div>
          <nav className="sv-related" aria-label="Related services">
            <Link href="/kickstarter-launch-services">Full launch services</Link>
            <Link href="/campaign-design">Campaign page design</Link>
            <Link href="/campaign-creative">Scripts, renders and motion</Link>
            <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
            <Link href="/kickstarter-product-campaign-design">Product campaigns</Link>
          </nav>
        </div>
      </section>
      <WorkFx/>
    </main><SeoFooter/>
  </>;
}

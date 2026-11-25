import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon, Roll } from "../components/chrome/Icon";
import { DragStrip } from "../components/DragStrip";
import { CreativeWalkthrough } from "../components/CreativeWalkthrough";
import { JsonLd } from "../components/JsonLd";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { contentDates, formatContentDate } from "../content-dates";
import { caseStudies } from "../case-studies";
import { gameCategories } from "../campaign-content";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

const title = "Tabletop Campaign Creative: Scripts, Renders & Motion";
const description = "Creative production for tabletop Kickstarter and Gamefound launches: scripts, product renders, motion graphics and ad variants, with an agreed scope.";
const faqs = [
  { question: "What can creative production include?", answer: "Scripts and storyboards, product renders, motion graphics, short video edits and still or motion ad variants. The brief names the assets, lengths, formats, review rounds and source files included. Product renders depend on the models and reference material available." },
  { question: "How is this different from campaign page design?", answer: "Creative production covers a defined set of assets for your campaign, prelaunch or ads. Campaign page design covers the copy, section layout, graphics and reward comparisons for a complete Kickstarter or Gamefound page. You can book either service or agree a combined scope." },
  { question: "Can the creative match a bright or playful game?", answer: "Yes. The game's artwork and audience set the direction. A party game, family game, card game, RPG book and terrain range can each need a different approach to colour, type, pacing and explanation. Share your existing art and a few references with the brief." },
  { question: "How much does creative production cost?", answer: "Creative production is quoted after reviewing the assets and delivery needs. A set of still ad variants needs a different scope from a scripted product video or new renders. The proposal lists production fees, any outside costs and the work you receive. Ad management and media spend are agreed separately." },
  { question: "What should I send to start?", answer: "Send a short project summary, your artwork or product photos, any usable models or footage, the proposed rewards and the places the creative will appear. Include your target date and identify anything still in development. We can then agree the deliverables and review schedule." },
];

const assets = [
  { face: "The story", title: "Scripts and storyboards", copy: "A product introduction, gameplay explanation or short ad. The script and shot plan make room for the facts a viewer needs and the artwork you can supply.", output: "Agreed script, scene plan and review stages", tone: "#6E2D24", r: -2.5 },
  { face: "The product", title: "Product renders", copy: "Views of your box, books, cards, miniatures or accessories, using the models and references agreed in the brief. Prototype details stay clearly identified.", output: "Agreed views, dimensions and image formats", tone: "#22463B", r: 1.5 },
  { face: "The explanation", title: "Motion and video", copy: "Motion graphics, product sequences and edits of your usable footage. We plan the duration, text, narration, music permissions and captions together.", output: "Agreed edits, exports and captions", tone: "#2B2E3A", r: -1 },
  { face: "The test", title: "Creative variants for ads", copy: "Different hooks, product views or messages, adapted to the placements in your ad plan. Each variant has a clear question for the test to answer.", output: "Agreed concepts, versions and placement sizes", tone: "#1B4144", r: 2.5 },
];
const steps = [
  { title: "Send the source material", copy: "Your game summary, usable art, photos, models or footage, planned placements and target date. Flag prototypes and details that may change." },
  { title: "Review the direction", copy: "Agree the script or visual plan, asset list, durations and sizes. The brief sets the review rounds and the facts you need to confirm." },
  { title: "Receive the agreed files", copy: "The approved exports, captions and editable sources listed in the brief. We check names, specifications and formats before handoff." },
];

export const metadata = pageMetadata({ title, description, path: "/campaign-creative" });

export default function CampaignCreativePage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/campaign-creative"), name: title, description, url: absoluteUrl("/campaign-creative"), dateModified: contentDates.campaignCreative, isPartOf: { "@id": absoluteUrl("/#website") }, mainEntity: { "@id": absoluteUrl("/campaign-creative#service") }, inLanguage: "en" },
      { "@type": "Service", "@id": absoluteUrl("/campaign-creative#service"), name: "Tabletop campaign creative production", description, url: absoluteUrl("/campaign-creative"), provider: { "@id": absoluteUrl("/#organization") }, serviceType: ["Campaign scripts and storyboards", "Product renders", "Motion graphics", "Advertising creative variants"], areaServed: { "@type": "Place", name: "Worldwide" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Campaign creative", item: absoluteUrl("/campaign-creative") }] },
      { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ] }} />
    <a className="skip-link" href="#creative-content">Skip to content</a><SeoHeader />
    <main className="gf-creative-page w-page cc" id="creative-content" tabIndex={-1}>
      <section className="cc-hero" aria-labelledby="creative-title">
        <div className="cc-hero-inner">
          <div className="cc-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Campaign creative" }]} />
            <h1 id="creative-title" className="cc-title" data-reveal="lines"><span className="w-line"><span>Campaign creative</span></span> <span className="w-line"><span><em>for tabletop launches</em></span></span></h1>
            <div className="cc-hero-side" data-reveal="rise">
              <p className="cc-lead">Scripts, renders, motion and ad variants for your Kickstarter or Gamefound launch. Work directly with Umair on the assets your campaign needs, with the formats, reviews and final files agreed before production.</p>
              <div className="cc-actions">
                <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss creative production" data-analytics-location="campaign-creative"><Roll>Discuss your creative brief</Roll><Icon name="arrow" /></a>
                <a className="w-link" href="#creative-walkthroughs">See the work explained</a>
              </div>
              <p className="cc-date">Updated <time dateTime={contentDates.campaignCreative}>{formatContentDate(contentDates.campaignCreative)}</time></p>
            </div>
          </div>
          <figure className="cc-cover">
            <div className="cc-cover-frame" data-reveal="media"><ResponsiveImage src="/images/work/scented-realms.webp" alt="ScentedRealms campaign artwork presenting its fantasy scent collection" width={1400} height={788} fetchPriority="high" sizes="(max-width: 900px) calc(100vw - 32px), 54vw" /></div>
            <img className="cc-lantern" src="/images/world/standee-lantern-v1.webp" width="431" height="419" alt="" aria-hidden="true" draggable={false} />
            <figcaption><span className="w-dot">Actual campaign artwork from ScentedRealms</span><Link className="w-link" href="/work/scented-realms" data-title="ScentedRealms">See Umair&apos;s contribution</Link></figcaption>
          </figure>
        </div>
        <nav className="cc-jump" aria-label="On this page"><a href="#creative-scope">Production scope</a><a href="#creative-walkthroughs">Work walkthroughs</a><a href="#creative-process">The brief and handoff</a><a href="#creative-questions">Questions</a></nav>
      </section>

      <section className="cc-scope tone-board" id="creative-scope" aria-labelledby="creative-scope-title">
        <div className="w-wrap-wide">
          <div className="cc-head">
            <h2 id="creative-scope-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Production assets</span></span> <span className="w-line"><span><em>for your campaign and ads</em></span></span></h2>
            <p>Choose a defined production scope for a campaign page, prelaunch or ad test. We agree how each asset will be used before making it.</p>
          </div>
          <div className="cc-assets">{assets.map(asset => <article className="cc-asset" key={asset.title} style={{ "--tone": asset.tone, "--r": `${asset.r}deg` } as CSSProperties}>
            <p className="cc-asset-face">{asset.face}</p>
            <div className="cc-asset-body">
              <h3>{asset.title}</h3>
              <p>{asset.copy}</p>
              <p className="cc-asset-out"><Icon name="check" size={16} />{asset.output}</p>
            </div>
          </article>)}</div>
          <aside className="cc-note"><div><h3>Need the complete campaign page?</h3><p>Campaign design covers the page copy, section layout, graphics and reward comparisons. Creative production can supply specific assets for that page or run as a separate brief.</p></div><Link className="w-btn w-btn--ghost" href="/campaign-design" data-title="Campaign page design"><Roll>Explore campaign page design</Roll><Icon name="arrow" /></Link></aside>
        </div>
      </section>

      <section className="cc-walks" id="creative-walkthroughs" aria-labelledby="creative-walkthroughs-title">
        <div className="w-wrap-wide">
          <div className="cc-head">
            <h2 id="creative-walkthroughs-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>See the choices</span></span> <span className="w-line"><span><em>inside the creative</em></span></span></h2>
            <div className="cc-head-side"><p className="w-dot">Real campaign work</p><p>Two short walkthroughs of existing client work. Each explains the product story and Umair&apos;s contribution, with a complete text transcript.</p></div>
          </div>
          <div className="cc-walk-list"><CreativeWalkthrough layout="feature" project="scented-realms" video={{ src: "/videos/scented-realms-walkthrough.mp4", captions: "/videos/scented-realms-walkthrough.vtt" }} /><CreativeWalkthrough layout="feature" project="futureproof-terrain" video={{ src: "/videos/futureproof-terrain-walkthrough.mp4", captions: "/videos/futureproof-terrain-walkthrough.vtt" }} /></div>
        </div>
      </section>

      <section className="cc-style" aria-labelledby="creative-style-title">
        <div className="w-wrap-wide cc-head">
          <h2 id="creative-style-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Creative that follows</span></span> <span className="w-line"><span><em>your game&apos;s style</em></span></span></h2>
          <div className="cc-head-side">
            <p>A bright family game needs a different approach from a tactical miniature range or a quiet RPG book. Share the art, the audience and the part of the game people need to understand.</p>
            <p>Colour, type, pacing and product presentation follow that brief. Party games, TCGs, strategy games, books and accessories all belong in the conversation.</p>
            <Link className="w-link" href="/work" data-title="Work">Explore the actual client projects</Link>
          </div>
        </div>
        <div className="w-wrap-wide cc-strip-head"><p className="w-dot w-dot--concept">Made in the studio, not client work</p><p className="cc-strip-hint" aria-hidden="true"><Icon name="drag" size={16} />Drag</p></div>
        <DragStrip label="Studio concepts by game category">
          {gameCategories.map((category, index) => <figure className="cc-concept" key={category.slug} style={{ "--r": `${[-3, 2, -1.5, 3, -2][index % 5]}deg` } as CSSProperties}>
            <ResponsiveImage src={`/images/campaign/${category.image}.webp`} alt={category.alt} width={1000} height={750} loading="lazy" sizes="(max-width: 900px) 78vw, 440px" draggable={false} />
            <figcaption><strong>{category.name}</strong><span>{category.tag}</span></figcaption>
          </figure>)}
        </DragStrip>
      </section>

      <section className="cc-process tone-board" id="creative-process" aria-labelledby="creative-process-title">
        <div className="w-wrap-wide">
          <div className="cc-head">
            <h2 id="creative-process-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Agree the work,</span></span> <span className="w-line"><span><em>know what you receive</em></span></span></h2>
            <div className="cc-price" data-reveal="rise">
              <p className="cc-price-figure">Scoped quote</p>
              <p>Creative production is quoted per brief. The proposal lists production fees and any outside costs. Paid ad management and media spend have their own agreed budgets.</p>
            </div>
          </div>
          <ol className="cc-steps">{steps.map((step, index) => <li key={step.title}><span className="cc-space" aria-hidden="true">{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="cc-cases" aria-labelledby="creative-projects-title">
        <div className="w-wrap-wide">
          <div className="cc-head">
            <h2 id="creative-projects-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Three projects,</span></span> <span className="w-line"><span><em>each contribution explained</em></span></span></h2>
            <p>Campaign artwork and client product photography are credited on their case pages. The cases describe the creative work and design choices.</p>
          </div>
          <div className="cc-case-list">{caseStudies.map(project => <Link className="cc-case" href={`/work/${project.slug}`} key={project.slug} data-title={project.name} data-cursor-label="Read">
            <span className="cc-case-thumb"><ResponsiveImage src={`/images/work/${project.image}.webp`} alt="" width={project.imageWidth} height={project.imageHeight} loading="lazy" sizes="160px" /></span>
            <span className="cc-case-meta">{project.category}</span>
            <strong className="cc-case-name">{project.name}</strong>
            <span className="cc-case-cta">Read the case study<Icon name="arrow" size={20} /></span>
          </Link>)}</div>
        </div>
      </section>

      <section className="cc-faq" id="creative-questions" aria-labelledby="creative-questions-title">
        <div className="w-wrap-wide cc-faq-inner">
          <div className="cc-faq-side">
            <h2 id="creative-questions-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Questions about</span></span> <span className="w-line"><span><em>creative production</em></span></span></h2>
            <a className="w-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="campaign-creative faq">{siteConfig.contactEmail}</a>
          </div>
          <div className="cc-faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<Icon name="plus" size={20} /></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
      <nav className="cc-related" aria-label="Related launch services"><div className="w-wrap-wide"><Link href="/campaign-design" data-title="Campaign page design">Campaign page design<Icon name="arrow" /></Link><Link href="/kickstarter-advertising" data-title="Paid advertising">Paid advertising<Icon name="arrow" /></Link><Link href="/kickstarter-launch-services" data-title="Full launch services">Full launch services<Icon name="arrow" /></Link></div></nav>
    </main><SeoFooter />
  </>;
}

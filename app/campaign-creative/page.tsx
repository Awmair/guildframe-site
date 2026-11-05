import Link from "next/link";
import { CreativeWalkthrough } from "../components/CreativeWalkthrough";
import { JsonLd } from "../components/JsonLd";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { contentDates, formatContentDate } from "../content-dates";
import { caseStudies } from "../case-studies";
import { absoluteUrl, pageMetadata } from "../site-config";

const title = "Tabletop Campaign Creative: Scripts, Renders & Motion";
const description = "Creative production for tabletop Kickstarter and Gamefound launches: scripts, product renders, motion graphics and ad variants, with an agreed scope.";
const faqs = [
  { question: "What can creative production include?", answer: "Scripts and storyboards, product renders, motion graphics, short video edits and still or motion ad variants. The brief names the assets, lengths, formats, review rounds and source files included. Product renders depend on the models and reference material available." },
  { question: "How is this different from campaign page design?", answer: "Creative production covers a defined set of assets for your campaign, prelaunch or ads. Campaign page design covers the copy, section layout, graphics and reward comparisons for a complete Kickstarter or Gamefound page. You can book either service or agree a combined scope." },
  { question: "Can the creative match a bright or playful game?", answer: "Yes. The game's artwork and audience set the direction. A party game, family game, card game, RPG book and terrain range can each need a different approach to colour, type, pacing and explanation. Share your existing art and a few references with the brief." },
  { question: "How much does creative production cost?", answer: "Creative production is quoted after reviewing the assets and delivery needs. A set of still ad variants needs a different scope from a scripted product video or new renders. The proposal lists production fees, any outside costs and the work you receive. Ad management and media spend are agreed separately." },
  { question: "What should I send to start?", answer: "Send a short project summary, your artwork or product photos, any usable models or footage, the proposed rewards and the places the creative will appear. Include your target date and identify anything still in development. We can then agree the deliverables and review schedule." },
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
    <main className="gf-creative-page" id="creative-content">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Campaign creative" }]} />
      <section className="gf-creative-hero" aria-labelledby="creative-title">
        <div><span className="gf-eyebrow">Scripts, renders, motion and ad variants</span><h1 id="creative-title">Campaign creative<br /><em>for tabletop launches.</em></h1><p>Creative production for your Kickstarter or Gamefound launch. Work directly with Umair on the assets your campaign needs, with the formats, reviews and final files agreed before production.</p><div className="gf-creative-actions"><a className="gf-button" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss creative production" data-analytics-location="campaign-creative">Discuss your creative brief</a><a className="gf-text-link" href="#creative-walkthroughs">See the work explained</a></div><p className="gf-creative-review-date">Updated <time dateTime={contentDates.campaignCreative}>{formatContentDate(contentDates.campaignCreative)}</time></p></div>
        <figure className="gf-creative-cover"><ResponsiveImage src="/images/work/scented-realms.webp" alt="ScentedRealms campaign artwork presenting its fantasy scent collection" width={1400} height={788} fetchPriority="high" sizes="(max-width: 760px) calc(100vw - 40px), 52vw" /><figcaption><span>Actual campaign artwork · ScentedRealms</span><Link href="/work/scented-realms">See Umair&apos;s contribution</Link></figcaption></figure>
      </section>

      <nav className="gf-creative-jump" aria-label="On this page"><a href="#creative-scope">Production scope</a><a href="#creative-walkthroughs">Work walkthroughs</a><a href="#creative-process">The brief and handoff</a><a href="#creative-questions">Questions</a></nav>

      <section className="gf-creative-section" id="creative-scope" aria-labelledby="creative-scope-title">
        <div className="gf-creative-section-heading"><div><span className="gf-eyebrow">Book the assets you need</span><h2 id="creative-scope-title">Production assets<br />for your campaign and ads.</h2></div><p>Choose a defined production scope for a campaign page, prelaunch or ad test. We agree how each asset will be used before making it.</p></div>
        <div className="gf-creative-scope-grid">
          <article><span className="gf-eyebrow">01 / The story</span><h3>Scripts and storyboards</h3><p>A product introduction, gameplay explanation or short ad. The script and shot plan make room for the facts a viewer needs and the artwork you can supply.</p><span className="gf-creative-output">Agreed script, scene plan and review stages</span></article>
          <article><span className="gf-eyebrow">02 / The product</span><h3>Product renders</h3><p>Views of your box, books, cards, miniatures or accessories, using the models and references agreed in the brief. Prototype details stay clearly identified.</p><span className="gf-creative-output">Agreed views, dimensions and image formats</span></article>
          <article><span className="gf-eyebrow">03 / The explanation</span><h3>Motion and video</h3><p>Motion graphics, product sequences and edits of your usable footage. We plan the duration, text, narration, music permissions and captions together.</p><span className="gf-creative-output">Agreed edits, exports and captions</span></article>
          <article><span className="gf-eyebrow">04 / The test</span><h3>Creative variants for ads</h3><p>Different hooks, product views or messages, adapted to the placements in your ad plan. Each variant has a clear question for the test to answer.</p><span className="gf-creative-output">Agreed concepts, versions and placement sizes</span></article>
        </div>
        <aside className="gf-creative-scope-note"><div><h3>Need the complete campaign page?</h3><p>Campaign design covers the page copy, section layout, graphics and reward comparisons. Creative production can supply specific assets for that page or run as a separate brief.</p></div><Link className="gf-text-link" href="/campaign-design">Explore campaign page design</Link></aside>
      </section>

      <section className="gf-creative-section" id="creative-walkthroughs" aria-labelledby="creative-walkthroughs-title">
        <div className="gf-creative-section-heading"><div><span className="gf-eyebrow">Real campaign work</span><h2 id="creative-walkthroughs-title">See the choices<br />inside the creative.</h2></div><p>Two short walkthroughs of existing client work. Each explains the product story and Umair&apos;s contribution, with a complete text transcript.</p></div>
        <div className="gf-creative-walkthrough-grid"><CreativeWalkthrough project="scented-realms" video={{ src: "/videos/scented-realms-walkthrough.mp4", captions: "/videos/scented-realms-walkthrough.vtt" }} /><CreativeWalkthrough project="futureproof-terrain" video={{ src: "/videos/futureproof-terrain-walkthrough.mp4", captions: "/videos/futureproof-terrain-walkthrough.vtt" }} /></div>
      </section>

      <section className="gf-creative-section gf-creative-style" aria-labelledby="creative-style-title"><div><span className="gf-eyebrow">The game sets the direction</span><h2 id="creative-style-title">Creative that follows<br />your game&apos;s style.</h2></div><div><p>A bright family game needs a different approach from a tactical miniature range or a quiet RPG book. Share the art, the audience and the part of the game people need to understand.</p><p>Colour, type, pacing and product presentation follow that brief. Party games, TCGs, strategy games, books and accessories all belong in the conversation.</p><Link className="gf-text-link" href="/work">Explore the actual client projects</Link></div></section>

      <section className="gf-creative-section" id="creative-process" aria-labelledby="creative-process-title"><div className="gf-creative-section-heading"><div><span className="gf-eyebrow">Before production starts</span><h2 id="creative-process-title">Agree the work.<br />Know what you receive.</h2></div><p>Creative production uses a scoped quote. The proposal lists production fees and any outside costs. Paid ad management and media spend have their own agreed budgets.</p></div><ol className="gf-creative-process"><li><span>01</span><h3>Send the source material</h3><p>Your game summary, usable art, photos, models or footage, planned placements and target date. Flag prototypes and details that may change.</p></li><li><span>02</span><h3>Review the direction</h3><p>Agree the script or visual plan, asset list, durations and sizes. The brief sets the review rounds and the facts you need to confirm.</p></li><li><span>03</span><h3>Receive the agreed files</h3><p>The approved exports, captions and editable sources listed in the brief. We check names, specifications and formats before handoff.</p></li></ol></section>

      <section className="gf-creative-section gf-creative-proof-links" aria-labelledby="creative-projects-title"><div className="gf-creative-section-heading"><div><span className="gf-eyebrow">More about the work</span><h2 id="creative-projects-title">Three projects.<br />Each contribution explained.</h2></div><p>Campaign artwork and client product photography are credited on their case pages. The cases describe the creative work and design choices.</p></div><div>{caseStudies.map(project => <Link href={`/work/${project.slug}`} key={project.slug}><span>{project.category}</span><strong>{project.name}</strong><span>Read the case study</span></Link>)}</div></section>

      <section className="gf-creative-section gf-faq" id="creative-questions"><div><span className="gf-eyebrow">Before you book</span><h2>Questions about<br /><em>creative production.</em></h2></div><div>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>
      <nav className="gf-service-related" aria-label="Related launch services"><Link href="/campaign-design">Campaign page design</Link><Link href="/kickstarter-advertising">Paid advertising</Link><Link href="/kickstarter-launch-services">Full launch services</Link><Link href="/resources/tabletop-kickstarter-launch-kit">Free campaign kit</Link></nav>
    </main><SeoFooter />
  </>;
}

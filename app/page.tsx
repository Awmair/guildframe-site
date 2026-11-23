import Link from "next/link";
import { SeoHeader, SeoFooter } from "./components/SeoChrome";
import { JsonLd } from "./components/JsonLd";
import { ResponsiveImage } from "./components/ResponsiveImage";
import { HomeScroll } from "./components/HomeScroll";
import { caseStudies } from "./case-studies";
import { contentDates } from "./content-dates";
import { absoluteUrl, siteConfig } from "./site-config";
import { launchService } from "./seo-entities";

const homeFaqs = [
  { question: "How much will the project cost?", answer: "The campaign page package is $1,400. Full campaign support is $4,500. Ad spend and other third party costs are billed separately. We agree the scope and schedule before work starts." },
  { question: "We already have artwork. Can you work with it?", answer: "Yes. Bring the artwork, game details and existing brand direction. I write the copy and design the campaign graphics around those assets. We confirm any new illustration, 3D or video work separately in the brief." },
  { question: "Can I book only the campaign page?", answer: "Yes. The campaign page package stands on its own. If you later want prelaunch, paid advertising or live campaign support, you can move to full campaign support." },
  { question: "How does the free opening mockup work?", answer: "Send a short game description and usable artwork. I will design one opening campaign section so you can see a direction before booking. There is no payment or obligation." },
  { question: "Do I keep my accounts, contacts and files?", answer: "Yes. Your campaign and marketing accounts stay yours. The brief lists the final files and editable sources I will hand over." },
  { question: "Can you guarantee the campaign will fund?", answer: "I cannot guarantee funding. The product, audience, pricing and fulfilment plan all affect the result. We agree the work, budget and measures of progress before the project starts." },
];
const projectSummaries = [
  "Visual direction and campaign presentation for an unfamiliar RPG accessory.",
  "A campaign story around modular parts, table use and storage.",
  "A clear presentation of the cover, divider and card storage options. Product photography courtesy of Quiver Time.",
];
const concepts = [
  { image: "party-card-game", alt: "Original Snack Attack party game concept with a coral box, illustrated fruit cards and tokens" },
  { image: "strategy-board-game", alt: "Original Tidal Harbour strategy game concept with painted harbour box, hex map and wooden ships" },
  { image: "trading-card-game", alt: "Original Starbound trading card game concept with a celestial deck box and illustrated foil cards" },
  { image: "rpg-book", alt: "Original Moth and Moon folk horror RPG concept with a green clothbound book, adventure zine and character sheets" },
  { image: "miniature-terrain", alt: "Original Orbital Outpost miniature game concept with a lunar box, sculpted mech and modular terrain" },
  { image: "dice-accessories", alt: "Original Prismatic accessories concept with jewel coloured dice, coral suede tray and petrol presentation box" },
];
const featuredGuides = [
  { href: "/guides/board-game-kickstarter-marketing-plan", topic: "Planning", title: "Board game Kickstarter marketing plan" },
  { href: "/guides/kickstarter-advertising-budget-board-games", topic: "Budgets and ads", title: "Kickstarter advertising budget for board games" },
  { href: "/guides/board-game-kickstarter-page-checklist", topic: "Campaign design", title: "Board game Kickstarter page checklist" },
];

function Arrow() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/"), url: absoluteUrl("/"), name: "Kickstarter Launch Services for Tabletop Games", description: siteConfig.description, inLanguage: "en", mainEntity: { "@id": absoluteUrl("/kickstarter-launch-services#service") }, dateModified: contentDates.home, isPartOf: { "@id": absoluteUrl("/#website") } },
      launchService(),
      { "@type": "FAQPage", mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ] }}/>
    <a className="skip-link" href="#main-content">Skip to content</a><SeoHeader/>
    <main id="main-content" className="gfr gfr-home" data-tone="paper">
      <HomeScroll/>
      <section className="gfr-hero-shell" data-tone="paper" aria-labelledby="home-title">
        <div className="gfr-hero">
          <h1 id="home-title" className="gfr-d">Kickstarter launches <em>for tabletop games</em></h1>
          <div className="gfr-hero-bar">
            <img className="gfr-avatar" src="/images/guildframe-founder-portrait-v1.webp" width="48" height="48" alt="Umair, founder of Guildframe" loading="eager"/>
            <p>I write, design and launch campaign pages for board games, card games, RPGs and miniatures. You work with me, Umair, from the brief to the final files.</p>
            <div className="gfr-actions">
              <a className="gfr-btn gfr-btn--ink" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="homepage">Discuss my project<Arrow/></a>
              <a className="gfr-link" href="#pricing">See pricing</a>
            </div>
          </div>
        </div>
      </section>

      <section className="gfr-wrap gfr-section gfr-work" id="past-work" data-tone="paper" aria-labelledby="past-work-title">
        <div className="gfr-rule"><span className="gfr-label">Client work</span><Link className="gfr-label gfr-link" href="/work">All case studies</Link></div>
        <h2 id="past-work-title" className="gfr-d gfr-h2 rv">Three campaigns, <em>three very different games</em></h2>
        <div className="gfr-projects">{caseStudies.map((project, index) => <article className="gfr-project rv" key={project.slug}>
          <Link className={`gfr-tile${index === 2 ? " gfr-tile--contain" : ""}`} href={`/work/${project.slug}`}><ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading="lazy" sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1000px) 46vw, 410px"/></Link>
          <div className="gfr-project-body">
            <div className="gfr-project-head"><h3 className="gfr-d"><Link href={`/work/${project.slug}`}>{project.name}</Link></h3><span className="gfr-label">{project.category}</span></div>
            <p>{projectSummaries[index]}</p>
            {project.testimonial ? <figure><blockquote>“{project.testimonial.quote}”</blockquote><figcaption className="gfr-label">Client feedback from {project.testimonial.client}</figcaption></figure> : null}
          </div>
          <div className="gfr-project-links"><Link className="gfr-link" href={`/work/${project.slug}`}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link><a className="gfr-link" href={project.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a></div>
        </article>)}</div>
      </section>

      <section className="gfr-wrap gfr-concepts" id="concepts" data-tone="paper" aria-label="Original concepts">
        <div className="gfr-rule"><span className="gfr-label">Original concepts</span><span className="gfr-label">Made in the studio, not client work</span></div>
        <div className="gfr-concept-grid rv">{concepts.map(concept => <img key={concept.image} src={`/images/hero/${concept.image}-480w.webp`} srcSet={`/images/hero/${concept.image}-320w.webp 320w, /images/hero/${concept.image}-480w.webp 480w, /images/hero/${concept.image}-640w.webp 640w`} sizes="(max-width: 900px) 30vw, 220px" width="640" height="640" alt={concept.alt} loading="lazy"/>)}</div>
      </section>

      <section className="gfr-wrap gfr-pricing" id="services" data-tone="dark" aria-labelledby="pricing-title">
        <div className="gfr-rule"><span className="gfr-label">Pricing</span><span className="gfr-label">Ad spend is billed separately</span></div>
        <div className="gfr-pricing-intro rv">
          <h2 id="pricing-title" className="gfr-d gfr-h2">Two packages, <em>fixed prices</em></h2>
          <p>We agree the scope and schedule before work starts. Not sure yet? Send your artwork and I will design one opening section of your page at no cost.</p>
          <a className="gfr-link" href="#start-project">Request a free mockup</a>
        </div>
        <article className="gfr-package rv" id="pricing">
          <h3>Campaign page</h3>
          <div className="gfr-d gfr-price">$1,400</div>
          <p>Your Kickstarter or Gamefound page, from the first line of copy to the published page.</p>
          <ul>
            <li>Campaign copy, written for your game</li>
            <li>Page graphics using your artwork</li>
            <li>Reward tiers set up</li>
            <li>Page built on Kickstarter, ready to publish</li>
          </ul>
          <div className="gfr-package-actions"><a className="gfr-btn" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Campaign page" data-analytics-location="homepage pricing">Start with the page<Arrow/></a><Link className="gfr-link" href="/campaign-design#pricing">Full scope</Link></div>
        </article>
        <article className="gfr-package rv">
          <h3>Full campaign support</h3>
          <div className="gfr-d gfr-price">$4,500</div>
          <p>The campaign page, plus the launch around it, from prelaunch to the final handoff.</p>
          <ul>
            <li>Everything in Campaign page</li>
            <li>Prelaunch signup page and emails</li>
            <li>Ad creative and paid advertising</li>
            <li>Live campaign checks and backer updates</li>
            <li>Final files and report at handoff</li>
          </ul>
          <div className="gfr-package-actions"><a className="gfr-btn gfr-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Full campaign support" data-analytics-location="homepage pricing">Plan the full launch<Arrow/></a><Link className="gfr-link" href="/kickstarter-launch-services">Launch services</Link></div>
        </article>
      </section>

      <section className="gfr-wrap gfr-section gfr-process" id="process" data-tone="paper" aria-label="How it works">
        <div className="gfr-rule"><span className="gfr-label">How it works</span></div>
        <ol className="gfr-steps">
          <li className="rv"><h3 className="gfr-d">Plan</h3><p>Send your game summary, rules, artwork and target date. We agree the scope, schedule and who does what.</p></li>
          <li className="rv"><h3 className="gfr-d">Build</h3><p>I write the copy and design the graphics around your confirmed rewards and game facts. You review each round.</p></li>
          <li className="rv"><h3 className="gfr-d">Launch</h3><p>The page goes live. On full support I run the agreed ads, check the page and draft backer updates for your approval.</p></li>
        </ol>
      </section>

      <section className="gfr-wrap gfr-section gfr-guides" data-tone="paper" aria-label="Guides">
        <div className="gfr-rule"><span className="gfr-label">Guides</span><Link className="gfr-label gfr-link" href="/guides">All guides</Link></div>
        {featuredGuides.map(guide => <Link className="gfr-guide rv" href={guide.href} key={guide.href}><span className="gfr-d">{guide.title}</span><span className="gfr-label">{guide.topic}</span></Link>)}
      </section>

      <section className="gfr-wrap gfr-section gfr-faq" id="faq" data-tone="paper" aria-labelledby="faq-title">
        <div className="gfr-rule"><span className="gfr-label">Questions</span><a className="gfr-label gfr-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="homepage faq">{siteConfig.contactEmail}</a></div>
        <h2 id="faq-title" className="gfr-d gfr-h2 rv">Before <em>you ask</em></h2>
        <div>{homeFaqs.map(f => <details key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><p>{f.answer}</p></details>)}</div>
      </section>
    </main><SeoFooter/>
  </>;
}

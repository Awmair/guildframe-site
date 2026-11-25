import Link from "next/link";
import { SeoHeader, SeoFooter } from "./components/SeoChrome";
import { JsonLd } from "./components/JsonLd";
import { ResponsiveImage } from "./components/ResponsiveImage";
import { Board } from "./components/world/Board";
import { Gate, gateBootScript } from "./components/world/Gate";
import { HomeFx } from "./components/world/HomeFx";
import { Icon, Roll } from "./components/chrome/Icon";
import { caseStudies } from "./case-studies";
import { contentDates } from "./content-dates";
import { absoluteUrl, siteConfig } from "./site-config";
import { launchService } from "./seo-entities";
import { Testimonials } from "./components/home/Testimonials";

const homeFaqs = [
  { question: "How much will the project cost?", answer: "The campaign page package is $1,800. Full campaign support is $5,900. Ad spend and other third party costs are billed separately. We agree the scope and schedule before work starts." },
  { question: "We already have artwork. Can you work with it?", answer: "Yes. Bring the artwork, game details and existing brand direction. I write the copy and design the campaign graphics around those assets. We confirm any new illustration, 3D or video work separately in the brief." },
  { question: "Can I book only the campaign page?", answer: "Yes. The campaign page package stands on its own. If you later want prelaunch, paid advertising or live campaign support, you can move to full campaign support." },
  { question: "How does the free opening mockup work?", answer: "Send a short game description and usable artwork. I will design one opening campaign section so you can see a direction before booking. There is no payment or obligation." },
  { question: "Do I keep my accounts, contacts and files?", answer: "Yes. Your campaign and marketing accounts stay yours. The brief lists the final files and editable sources I will hand over." },
  { question: "Can you guarantee the campaign will fund?", answer: "I cannot guarantee funding. The product, audience, pricing and fulfilment plan all affect the result. We agree the work, budget and measures of progress before the project starts." },
];
const projectSummaries = [
  "Visual direction and campaign presentation for an unfamiliar RPG accessory.",
  "A campaign story around modular parts, table use and storage.",
  "A clear presentation of the cover, divider and card storage options. Campaign header image courtesy of Quiver Time.",
  "A structured story for a survival horror game that keeps its graphic novel atmosphere front and center.",
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

const marquee = ["Launch planning", "Prelaunch pages", "Campaign copy", "Page design", "Ad creative", "Paid advertising", "Live campaign checks", "Backer updates", "Gamefound", "Kickstarter to Shopify"];
const tones = ["#6E2D24", "#22463B", "#2B2E3A", "#36304A"];

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/"), url: absoluteUrl("/"), name: "Kickstarter Launch Services for Tabletop Games", description: siteConfig.description, inLanguage: "en", mainEntity: { "@id": absoluteUrl("/kickstarter-launch-services#service") }, dateModified: contentDates.home, isPartOf: { "@id": absoluteUrl("/#website") } },
      launchService(),
      { "@type": "FAQPage", mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ] }}/>
    <a className="skip-link" href="#main-content">Skip to content</a><SeoHeader/>
    <script dangerouslySetInnerHTML={{ __html: gateBootScript }}/>
    <main id="main-content" className="gfr gfr-home h" tabIndex={-1}>
      <section className="gfr-hero-shell" aria-labelledby="home-title">
        <Board/>
        <div className="h-hero">
          <h1 id="home-title" className="h-title" data-reveal="lines"><span className="w-line"><span>Kickstarter launches</span></span> <span className="w-line"><span><em>for tabletop games</em></span></span></h1>
          <div className="h-hero-side" data-reveal="rise">
            <p>I write, design and launch campaign pages for board games, card games, RPGs and miniatures. You work with me, Umair, from the brief to the final files.</p>
            <div className="h-actions">
              <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="homepage"><Roll>Discuss my project</Roll><Icon name="arrow"/></a>
              <a className="w-link" href="#pricing">See pricing</a>
            </div>
          </div>
        </div>
        <a className="h-scroll" href="#past-work" aria-label="Scroll to the work"><span/></a>
      </section>

      <div className="h-marquee" aria-hidden="true">
        <div className="h-marquee-track">{[0, 1].map(copy => <div className="h-marquee-row" key={copy}>{marquee.map(item => <span key={item}>{item}<i/></span>)}</div>)}</div>
      </div>

      <Testimonials />
      <section className="h-work" id="past-work" aria-labelledby="past-work-title" data-tone-shift="">
        <div className="w-wrap-wide h-work-head">
          <h2 id="past-work-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Four campaigns,</span></span> <span className="w-line"><span><em>four very different games</em></span></span></h2>
          <div className="h-work-total" data-reveal="rise">
            <strong className="h-figure">$5M<sup>+</sup></strong>
            <p>Raised on Kickstarter by the campaigns I have worked on. These are my clients’ results, and they include campaigns not shown here.</p>
            <Link className="w-link" href="/work">All case studies</Link>
          </div>
        </div>
        <div className="h-projects">{caseStudies.map((project, index) => <article className="h-project" key={project.slug} style={{ "--tone": tones[index] } as React.CSSProperties}>
          <Link className="h-project-media" href={`/work/${project.slug}`} data-title={project.name} data-cursor-label="Read the case study" data-reveal="media" tabIndex={-1} aria-hidden="true">
            <ResponsiveImage src={`/images/work/${project.image}.webp`} alt={project.alt} width={project.imageWidth} height={project.imageHeight} loading="lazy" sizes="(max-width: 900px) calc(100vw - 32px), 58vw"/>
          </Link>
          <div className="h-project-body">
            <p className="h-project-tags"><span className="w-dot">Client work</span><span className="w-meta">{project.category}</span></p>
            <h3 className="h-project-name"><Link href={`/work/${project.slug}`} data-title={project.name}>{project.name}</Link></h3>
            <p>{projectSummaries[index]}</p>
            {project.testimonial ? <figure><blockquote>“{project.testimonial.quote}”</blockquote><figcaption>Client feedback from {project.testimonial.client}</figcaption></figure> : null}
            <div className="h-project-links"><Link className="w-link" href={`/work/${project.slug}`}>Read the case study<span className="gf-sr-only"> for {project.name}</span></Link><a className="w-link" href={project.href} target="_blank" rel="noopener noreferrer">View on Kickstarter<span className="gf-sr-only"> for {project.name}, opens in a new tab</span></a></div>
          </div>
        </article>)}</div>
      </section>

      <section className="h-concepts" id="concepts" aria-labelledby="concepts-title">
        <div className="w-wrap-wide h-concepts-head">
          <h2 id="concepts-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Studio concepts</span></span></h2>
          <p className="w-dot w-dot--concept">Made in the studio, not client work</p>
        </div>
        <div className="h-concepts-strip" data-cursor="drag" data-cursor-label="Drag">
          {concepts.map((concept, index) => <figure className="h-concept" key={concept.image} style={{ "--r": `${[-4, 3, -2, 5, -3, 2][index]}deg` } as React.CSSProperties}>
            <img src={`/images/hero/${concept.image}-480w.webp`} srcSet={`/images/hero/${concept.image}-320w.webp 320w, /images/hero/${concept.image}-480w.webp 480w, /images/hero/${concept.image}-640w.webp 640w`} sizes="(max-width: 900px) 62vw, 340px" width="640" height="640" alt={concept.alt} loading="lazy" draggable={false}/>
          </figure>)}
        </div>
      </section>

      <section className="h-pricing tone-board" id="services" aria-labelledby="pricing-title">
        <div className="w-wrap-wide">
          <div className="h-pricing-head">
            <h2 id="pricing-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Two packages,</span></span> <span className="w-line"><span><em>fixed prices</em></span></span></h2>
            <div>
              <p>We agree the scope and schedule before work starts. Ad spend is billed separately. Not sure yet? Send your artwork and I will design one opening section of your page at no cost.</p>
              <a className="w-link" href="#start-project">Request a free mockup</a>
            </div>
          </div>
          <div className="h-tiers">
            <article className="h-tier" id="pricing" data-reveal="rise">
              <h3>Campaign page</h3>
              <div className="h-price">$1,800</div>
              <p>Your Kickstarter or Gamefound page, from the first line of copy to the published page.</p>
              <ul>
                <li>Campaign copy, written for your game</li>
                <li>Page graphics using your artwork</li>
                <li>Reward tiers set up</li>
                <li>Page built on Kickstarter, ready to publish</li>
              </ul>
              <div className="h-tier-actions"><a className="w-btn w-btn--ink" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Campaign page" data-analytics-location="homepage pricing"><Roll>Start with the page</Roll><Icon name="arrow"/></a><Link className="w-link" href="/campaign-design#pricing">Full scope</Link></div>
            </article>
            <article className="h-tier h-tier--wide" data-reveal="rise">
              <h3>Full campaign support</h3>
              <div className="h-price">$5,900</div>
              <p>The campaign page, plus the launch around it, from prelaunch to the final handoff.</p>
              <ul>
                <li>Everything in Campaign page</li>
                <li>Prelaunch signup page and emails</li>
                <li>Ad creative and paid advertising</li>
                <li>Live campaign checks and backer updates</li>
                <li>Final files and report at handoff</li>
              </ul>
              <div className="h-tier-actions"><a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Full campaign support" data-analytics-location="homepage pricing"><Roll>Plan the full launch</Roll><Icon name="arrow"/></a><Link className="w-link" href="/kickstarter-launch-services">Launch services</Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="h-process" id="process" aria-label="How it works">
        <div className="h-process-sticky">
          <div className="w-wrap-wide">
            <h2 className="w-h2 h-process-title" data-reveal="lines"><span className="w-line"><span>How it <em>works</em></span></span></h2>
            <div className="h-track" aria-hidden="true"><span className="h-track-line"/><img className="h-track-pawn" src="/images/world/pawn-v1.webp" width="239" height="411" alt=""/></div>
            <ol className="h-steps">
              <li><span className="h-step-space" aria-hidden="true"/><h3>Plan</h3><p>Send your game summary, rules, artwork and target date. We agree the scope, schedule and who does what.</p></li>
              <li><span className="h-step-space" aria-hidden="true"/><h3>Build</h3><p>I write the copy and design the graphics around your confirmed rewards and game facts. You review each round.</p></li>
              <li><span className="h-step-space" aria-hidden="true"/><h3>Launch</h3><p>The page goes live. On full support I run the agreed ads, check the page and draft backer updates for your approval.</p></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="h-guides" aria-labelledby="guides-title">
        <div className="w-wrap-wide">
          <div className="h-row-head"><h2 id="guides-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Read before <em>you launch</em></span></span></h2><Link className="w-link" href="/guides">All guides</Link></div>
          {featuredGuides.map((guide, index) => <Link className="h-guide" href={guide.href} key={guide.href} data-title={guide.title} data-cursor-label="Read">
            <span className="h-guide-n" aria-hidden="true">{index + 1}</span><span className="h-guide-title">{guide.title}</span><span className="w-meta">{guide.topic}</span><Icon name="arrow" size={22}/>
          </Link>)}
        </div>
      </section>

      <section className="h-faq" id="faq" aria-labelledby="faq-title">
        <div className="w-wrap-wide h-faq-inner">
          <div>
            <h2 id="faq-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Before</span></span> <span className="w-line"><span><em>you ask</em></span></span></h2>
            <a className="w-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="homepage faq">{siteConfig.contactEmail}</a>
          </div>
          <div className="h-faq-list">{homeFaqs.map(f => <details key={f.question}><summary>{f.question}<Icon name="plus" size={20}/></summary><p>{f.answer}</p></details>)}</div>
        </div>
      </section>
    </main>
    <Gate/>
    <HomeFx/>
    <SeoFooter/>
  </>;
}

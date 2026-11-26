import Link from "next/link";
import { SeoHeader, SeoFooter } from "./components/SeoChrome";
import { JsonLd } from "./components/JsonLd";
import { Table } from "./components/world/Table";
import { PackageTiers } from "./components/PackageTiers";
import { priceSentence } from "./packages";
import { Gate, gateBootScript } from "./components/world/Gate";
import { HomeFx } from "./components/world/HomeFx";
import { Icon, Roll } from "./components/chrome/Icon";
import { contentDates } from "./content-dates";
import { absoluteUrl, siteConfig } from "./site-config";
import { launchService } from "./seo-entities";
import { Testimonials } from "./components/home/Testimonials";
import { MixedWork } from "./components/home/MixedWork";
import { WhoWeWorkWith } from "./components/home/WhoWeWorkWith";
import { WorkFx } from "./components/work/WorkFx";

const homeFaqs = [
  { question: "How much will the project cost?", answer: `${priceSentence} Both start with a launch strategy we agree with you. Ad spend, ad management and other third party costs are quoted separately.` },
  { question: "Do you only work on games?", answer: "No. We launch everyday products, tabletop games and books. Past work includes a security system for Vespas, an Italian designed watch, a novel and four tabletop campaigns. Tabletop is a specialty, so game creators also get genre pages and guides written for them." },
  { question: "We already have artwork or product images. Can you work with them?", answer: "Yes. Bring your artwork, product photos or renders, the project details and any brand direction. We write the copy and design the campaign graphics around those assets. Any new illustration, 3D or video work is confirmed separately in the brief." },
  { question: "What is the difference between the two packages?", answer: "Launch Ready is for creators who already have a brand and a website: it covers the launch strategy, the campaign page and the campaign video. Brand to Launch is for founders starting from scratch and adds the branding and a professional website. Prelaunch, paid advertising and live campaign management can be added to either." },
  { question: "How does the free opening mockup work?", answer: "Send a short description of your project and usable artwork or product images. We design one opening campaign section so you can see a direction before booking. There is no payment or obligation." },
  { question: "Do I keep my accounts, contacts and files?", answer: "Yes. Your campaign and marketing accounts stay yours. The brief lists the final files and editable sources we hand over." },
  { question: "Can you guarantee the campaign will fund?", answer: "No. Nobody can honestly guarantee funding. The product, audience, pricing and fulfillment plan all affect the result. We agree the work, budget and measures of progress before the project starts." },
];
const concepts = [
  { image: "party-card-game", alt: "Original Snack Attack party game concept with a coral box, illustrated fruit cards and tokens" },
  { image: "strategy-board-game", alt: "Original Tidal Harbour strategy game concept with painted harbour box, hex map and wooden ships" },
  { image: "trading-card-game", alt: "Original Starbound trading card game concept with a celestial deck box and illustrated foil cards" },
  { image: "rpg-book", alt: "Original Moth and Moon folk horror RPG concept with a green clothbound book, adventure zine and character sheets" },
  { image: "miniature-terrain", alt: "Original Orbital Outpost miniature game concept with a lunar box, sculpted mech and modular terrain" },
  { image: "dice-accessories", alt: "Original Prismatic accessories concept with jewel colored dice, coral suede tray and petrol presentation box" },
];
const featuredGuides = [
  { href: "/guides/kickstarter-for-beginners", topic: "Start here", title: "Kickstarter for beginners" },
  { href: "/guides/how-to-design-a-kickstarter-page", topic: "Campaign page", title: "How to design a Kickstarter page" },
  { href: "/guides/board-game-kickstarter-marketing-plan", topic: "Tabletop", title: "Board game Kickstarter marketing plan" },
];

const marquee = ["Everyday products", "Campaign copy", "Tabletop games", "Page design", "Books", "Prelaunch pages", "Gadgets", "Paid advertising", "Watches", "Backer updates", "Kickstarter", "Gamefound", "Indiegogo"];

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/"), url: absoluteUrl("/"), name: "Kickstarter Campaigns for First Time Creators", description: siteConfig.description, inLanguage: "en", mainEntity: { "@id": absoluteUrl("/kickstarter-launch-services#service") }, dateModified: contentDates.home, isPartOf: { "@id": absoluteUrl("/#website") } },
      launchService(),
      { "@type": "FAQPage", mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ] }}/>
    <a className="skip-link" href="#main-content">Skip to content</a><SeoHeader/>
    <script dangerouslySetInnerHTML={{ __html: gateBootScript }}/>
    <main id="main-content" className="gfr gfr-home h" tabIndex={-1}>
      <section className="gfr-hero-shell" aria-labelledby="home-title">
        <Table/>
        <div className="h-hero">
          <h1 id="home-title" className="h-title" data-reveal="lines"><span className="w-line"><span>Your first Kickstarter,</span></span> <span className="w-line"><span><em>done properly.</em></span></span></h1>
          <div className="h-hero-side" data-reveal="rise">
            <p>Umair and his team take first time creators from a working prototype to a live campaign: products, games and books.</p>
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
      <MixedWork />
      <WhoWeWorkWith />

      <section className="h-pricing tone-board" id="services" aria-labelledby="pricing-title">
        <div className="w-wrap-wide">
          <div className="h-pricing-head">
            <h2 id="pricing-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Two packages,</span></span> <span className="w-line"><span><em>campaign ready</em></span></span></h2>
            <div>
              <p>Both start with planning: we lock down the strategy with you before anything is designed. Not sure yet? Send your product images or artwork and we will design one opening section of your page at no cost.</p>
              <a className="w-link" href="#start-project">Request a free mockup</a>
            </div>
          </div>
          <PackageTiers location="homepage pricing"/>
        </div>
      </section>

      <section className="h-process" id="process" aria-label="How it works">
        <div className="h-process-sticky">
          <div className="w-wrap-wide">
            <h2 className="w-h2 h-process-title" data-reveal="lines"><span className="w-line"><span>How it <em>works</em></span></span></h2>
            <div className="h-track" aria-hidden="true"><span className="h-track-line"/><span className="h-track-pawn h-track-piece" data-at="0"><img src="/images/table/proto-product-480.webp" width="447" height="480" alt="" loading="lazy"/><img src="/images/table/page-product-v1.webp" width="540" height="900" alt="" loading="lazy"/><img src="/images/table/final-product-480.webp" width="447" height="480" alt="" loading="lazy"/></span></div>
            <ol className="h-steps">
              <li><span className="h-step-space" aria-hidden="true"/><h3>Plan</h3><p>Send a summary of your project, your artwork or product images and a target date. We agree the scope, schedule and who does what.</p></li>
              <li><span className="h-step-space" aria-hidden="true"/><h3>Build</h3><p>We write the copy and design the graphics around your confirmed rewards and facts. You review each round.</p></li>
              <li><span className="h-step-space" aria-hidden="true"/><h3>Launch</h3><p>The page goes live. On full support Umair runs the agreed ads, checks the page and drafts backer updates for your approval.</p></li>
            </ol>
          </div>
        </div>
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
    <WorkFx/>
    <SeoFooter/>
  </>;
}

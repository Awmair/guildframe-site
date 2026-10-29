import Link from "next/link";
import { HeroGallery } from "./components/HeroGallery";
import { SeoHeader, SeoFooter } from "./components/SeoChrome";
import { JsonLd } from "./components/JsonLd";
import { contentDates } from "./content-dates";
import { absoluteUrl, siteConfig } from "./site-config";
import { launchService } from "./seo-entities";
import { PastWork } from "./components/PastWork";
import { CampaignProcess } from "./components/CampaignProcess";
import { LaunchKitTeaser } from "./components/LaunchKitTeaser";

const homeFaqs = [
  { question: "We already have artwork. Can you work with it?", answer: "Yes. Bring the artwork, game details and existing brand direction. I can develop campaign concepts, messaging, scripts and finished creative around those assets. We confirm any illustration, 3D or video work separately in the brief." },
  { question: "Can I book one part of the launch?", answer: "Yes. Book campaign design, a set of creative assets or a broader launch. The proposal lists the deliverables, review rounds and where your team takes over." },
  { question: "How much will the project cost?", answer: "Campaign design has a fixed price on the design page. For creative production and wider launch support, I quote after reviewing your assets, timing and scope. Ad spend and other costs appear separately." },
  { question: "How does the free opening mockup work?", answer: "Send a short game description and usable artwork. I will design one opening campaign section so you can see a direction before booking. There is no payment or obligation." },
  { question: "Do I keep my accounts, contacts and files?", answer: "Yes. Your campaign and marketing accounts stay yours. The brief lists the final files and editable sources I will hand over." },
  { question: "Can you guarantee the campaign will fund?", answer: "I cannot guarantee funding. The product, audience, pricing and fulfilment plan all affect the result. We agree the work, budget and measures of progress before the project starts." },
];
const featuredGuides = [
  { href: "/guides/board-game-kickstarter-marketing-plan", topic: "Planning", title: "Put the launch in the right order.", image: "strategy-board-game", alt: "Tidal Harbour fictional strategy game concept" },
  { href: "/guides/kickstarter-advertising-budget-board-games", topic: "Budgets & ads", title: "Know what you can afford to spend.", image: "dice-accessories", alt: "Prismatic fictional dice and accessories concept" },
  { href: "/guides/board-game-kickstarter-page-checklist", topic: "Campaign design", title: "See the page through a new backer's eyes.", image: "party-card-game", alt: "Snack Attack fictional party game concept" },
];

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/"), url: absoluteUrl("/"), name: "Kickstarter Launch Services for Tabletop Games", description: siteConfig.description, inLanguage: "en", mainEntity: { "@id": absoluteUrl("/kickstarter-launch-services#service") }, dateModified: contentDates.home, isPartOf: { "@id": absoluteUrl("/#website") } },
      launchService(),
      { "@type": "FAQPage", mainEntity: homeFaqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ] }}/>
    <a className="skip-link" href="#main-content">Skip to content</a><SeoHeader/>
    <main id="main-content" className="gf-home gf-launch-home gf-redesign-home">
      <section className="gf-studio-hero" aria-labelledby="home-title">
        <div className="gf-studio-hero-copy"><span className="gf-eyebrow"><span className="gf-studio-dot"/>An independent tabletop studio</span><h1 id="home-title">Kickstarter launches<br/><em>for tabletop games.</em></h1><p>Campaign pages, ads and launch support for board games, card games, RPGs and miniatures. Work directly with Umair, from the brief to the final files.</p><div className="gf-actions"><a className="gf-button" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="homepage">Discuss my project</a><Link className="gf-studio-secondary" href="/resources/tabletop-kickstarter-launch-kit" data-launch-kit-prompt data-analytics-event="lead_kit_interest" data-analytics-location="homepage hero">Get the free launch kit</Link></div><div className="gf-studio-hero-person"><img src="/images/guildframe-founder-portrait-v1.webp" width="64" height="64" alt="Umair, founder of Guildframe" loading="eager"/><div><strong>Work directly with Umair.</strong><span>For your first campaign, or your next one.</span></div></div></div>
        <HeroGallery/>
      </section>
      <div className="gf-studio-categories" aria-label="Tabletop projects"><span>Board games</span><span>Card games &amp; TCGs</span><span>Tabletop RPGs</span><span>Miniatures &amp; STLs</span><span>Dice &amp; accessories</span></div>
      <PastWork compact/>
      <section className="gf-section gf-studio-services" id="services" aria-labelledby="services-title">
        <div className="gf-section-heading"><div><span className="gf-eyebrow">A page. A creative brief. A whole launch.</span><h2 id="services-title">What does your<br/><em>game need next?</em></h2></div><p>Choose the part you need. We agree the scope, price and handoff before work begins.</p></div>
        <div className="gf-studio-service-grid" id="pricing">
          <article className="gf-studio-service-card"><div className="gf-service-visual gf-service-page" aria-hidden="true"><div className="gf-mini-campaign"><span>SNACK ATTACK</span><img src="/images/hero/party-card-game-320w.webp" width="320" height="320" alt="" loading="lazy"/><b>A little chaos.<br/>A lot of fruit.</b><i/><i/><i/></div><span className="gf-service-visual-label">The campaign page</span></div><div className="gf-studio-service-copy"><span className="gf-eyebrow">01 / Make the game clear</span><h3>Campaign design</h3><p>The story, copy, graphics and reward presentation for your Kickstarter or Gamefound page.</p><Link className="gf-text-link" href="/campaign-design#pricing">See the scope &amp; fixed price</Link></div></article>
          <article className="gf-studio-service-card"><div className="gf-service-visual gf-service-creative" aria-hidden="true"><div className="gf-mini-ad"><span>YOUR NEXT<br/>GAME NIGHT.</span><img src="/images/hero/party-card-game-320w.webp" width="320" height="320" alt="" loading="lazy"/></div><div className="gf-mini-brief"><small>CREATIVE DIRECTION</small><b>01 / The hook<br/>02 / The story<br/>03 / The assets</b></div><span className="gf-service-visual-label">The creative campaign</span></div><div className="gf-studio-service-copy"><span className="gf-eyebrow">02 / Give the artwork a job</span><h3>Creative production</h3><p>Concepts, messaging, scripts, graphics and animated ads. We scope renders and video around your assets.</p><a className="gf-text-link" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Creative production" data-analytics-location="homepage services">Discuss a creative brief</a></div></article>
          <article className="gf-studio-service-card"><div className="gf-service-visual gf-service-launch" aria-hidden="true"><div className="gf-mini-launch"><span>THE LAUNCH PLAN</span><div><b>Brief &amp; direction</b><i>Agreed</i></div><div><b>Audience &amp; creative</b><i>Preparing</i></div><div><b>Campaign &amp; ads</b><i>Next</i></div><div><b>Updates &amp; handoff</b><i>Next</i></div></div><span className="gf-service-visual-label">The wider launch</span></div><div className="gf-studio-service-copy"><span className="gf-eyebrow">03 / Bring the launch together</span><h3>Launch support</h3><p>Prelaunch pages and emails, paid advertising and agreed campaign support, with clear responsibilities.</p><Link className="gf-text-link" href="/kickstarter-launch-services">Explore launch services</Link></div></article>
        </div>
        <div className="gf-returning-publishers"><span aria-hidden="true">✳</span><p><strong>Already have artwork and more games in the pipeline?</strong> Bring an existing title, a new campaign or a batch of creative briefs.</p><a href="#start-project">Tell me what is coming up</a></div><p className="gf-service-example-note">Service previews use the fictional Snack Attack concept.</p>
      </section>
      <CampaignProcess/>
      <LaunchKitTeaser/>
      <section className="gf-section gf-home-library" aria-labelledby="home-guides-title"><div className="gf-section-heading"><div><span className="gf-eyebrow">The open notebook</span><h2 id="home-guides-title">A useful place<br/><em>to start thinking.</em></h2></div><Link className="gf-text-link" href="/guides">Browse the launch guides</Link></div><div className="gf-home-guide-grid">{featuredGuides.map(guide => <Link href={guide.href} className="gf-home-guide" key={guide.href}><div className="gf-home-guide-image"><img src={`/images/hero/${guide.image}-480w.webp`} srcSet={`/images/hero/${guide.image}-320w.webp 320w, /images/hero/${guide.image}-480w.webp 480w`} sizes="(max-width: 700px) 70vw, 300px" width="640" height="640" alt={guide.alt} loading="lazy"/></div><div><span className="gf-eyebrow">{guide.topic}</span><h3>{guide.title}</h3><span className="gf-guide-read">Read the guide</span></div></Link>)}</div></section>
      <section className="gf-section gf-faq gf-studio-faq" id="faq" aria-labelledby="faq-title"><div><span className="gf-eyebrow">Before you send the brief</span><h2 id="faq-title">A few things<br/><em>worth clearing up.</em></h2><p>Still have a question?<br/><a href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="homepage faq">{siteConfig.contactEmail}</a></p></div><div>{homeFaqs.map(f => <details key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><p>{f.answer}</p></details>)}</div></section>
    </main><SeoFooter/>
  </>;
}

import { HeroGallery } from "./components/HeroGallery";
import Link from "next/link";
import {SeoHeader,SeoFooter} from "./components/SeoChrome";
import {JsonLd} from "./components/JsonLd";
import {contentDates} from "./content-dates";
import {absoluteUrl,siteConfig} from "./site-config";
import {launchService} from "./seo-entities";
import {PastWork,ClientTestimonials} from "./components/PastWork";
import {CampaignProcess} from "./components/CampaignProcess";
import {gameCategories} from "./campaign-content";
const homeFaqs = [
 {question: "How much does a full launch cost?", answer: "I quote after reviewing your game, assets, timing and support needs. The proposal separates the service fee, ad spend and other costs. You can also book campaign design at the fixed price on the design page."},
 {question: "Can I hire you just for design or ads?", answer: "Yes. Book a single stage or a broader launch. We agree the deliverables and where your existing team takes over."},
 {question: "How does the free mockup work?", answer: "Send a short game description and usable artwork. I’ll design one opening campaign section so you can see a direction before booking. There is no payment or obligation."},
 {question: "Do I keep my accounts, contacts and files?", answer: "Yes. Your campaign and marketing accounts stay yours. The brief lists the final files and editable sources I’ll hand over."},
 {question: "Do you handle manufacturing and shipping?", answer: "You and your suppliers handle manufacturing, freight, taxes and delivery. I can prepare updates and pledge-manager content using the details you confirm."},
];
export default function Home(){return <>
 <JsonLd data={{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":absoluteUrl("/"),url:absoluteUrl("/"),name:"Kickstarter Launch Services for Tabletop Games",description:siteConfig.description,inLanguage:"en",mainEntity:{"@id":absoluteUrl("/kickstarter-launch-services#service")},dateModified:contentDates.home,isPartOf:{"@id":absoluteUrl("/#website")}},launchService(),{"@type":"FAQPage",mainEntity:homeFaqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}]}}/>
 <a className="skip-link" href="#main-content">Skip to content</a><SeoHeader/>
 <main id="main-content" className="gf-home gf-launch-home">
  <div className="gf-hero-shell"><section className="gf-hero"><div className="gf-hero-copy"><span className="gf-eyebrow"><span className="gf-status-dot"/>Tabletop crowdfunding studio</span><h1>Kickstarter launches{" "}<em>for tabletop games.</em></h1><p>Planning, design, prelaunch marketing and paid ads for board games, card games, RPGs and miniatures.</p><div className="gf-actions"><a className="gf-button" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Plan my launch" data-analytics-location="homepage">Plan my launch <span aria-hidden="true">↗</span></a><a className="gf-text-link" href="#past-work">See the work <span aria-hidden="true">↘</span></a></div><div className="gf-hero-note"><span>Kickstarter &amp; Gamefound</span><span>Work directly with Umair</span></div></div>
   <HeroGallery/>
  </section></div>
  <div className="gf-ticker" aria-label="Projects we work on"><span>Board games</span><i aria-hidden="true">✳</i><span>Card games &amp; TCGs</span><i aria-hidden="true">✳</i><span>Tabletop RPGs</span><i aria-hidden="true">✳</i><span>Miniatures &amp; STLs</span><i aria-hidden="true">✳</i><span>Dice &amp; accessories</span></div>
  <PastWork compact/>
  <ClientTestimonials compact/>
  <CampaignProcess/>
  <section className="gf-section gf-engagements gf-visual-engagements" id="pricing"><div className="gf-section-heading" data-reveal><div><span className="gf-eyebrow">Start where you are</span><h2>Bring us in where<br/><em>you need help.</em></h2></div></div><div className="gf-engagement-grid" id="services"><article data-reveal><span className="gf-engagement-symbol" aria-hidden="true">✳</span><span className="gf-eyebrow">The page &amp; creative</span><h3>Campaign design</h3><p>Copy, graphics and rewards that make your game easy to understand.</p><Link className="gf-text-link" href="/campaign-design#pricing">Scope &amp; design price ↗</Link></article><article data-reveal><span className="gf-engagement-symbol" aria-hidden="true">↗</span><span className="gf-eyebrow">Before you go live</span><h3>Launch preparation</h3><p>A signup page, emails and creative tests before launch day.</p><Link className="gf-text-link" href="/kickstarter-prelaunch-marketing">Prelaunch services ↗</Link></article><article data-reveal><span className="gf-engagement-symbol" aria-hidden="true">◎</span><span className="gf-eyebrow">Bring it together</span><h3>Managed launch</h3><p>Planning, creative, paid advertising and agreed live support.</p><Link className="gf-text-link" href="/kickstarter-launch-services">Full launch services ↗</Link></article></div><div className="gf-genre-links" aria-label="Tabletop campaign categories">{gameCategories.map(g=><Link href={`/${g.slug}`} key={g.slug}>{g.name} <span aria-hidden="true">↗</span></Link>)}<Link href="/gamefound-launch-services">Gamefound <span aria-hidden="true">↗</span></Link></div></section>
  <section className="gf-section gf-faq" id="faq"><div><span className="gf-eyebrow">Before we start</span><h2>Questions you’re{" "}<br/><em>right to ask.</em></h2></div><div>{homeFaqs.map(f=><details key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><p>{f.answer}</p></details>)}</div></section>
  <aside className="gf-section gf-resource-strip" aria-label="Launch preparation resources"><span className="gf-resource-icon" aria-hidden="true">▤</span><div><span className="gf-eyebrow">Planning your launch?</span><p>Start with the checklist.</p></div><Link href="/guides/board-game-kickstarter-page-checklist" className="gf-text-link">Campaign page checklist ↗</Link><Link href="/guides" className="gf-text-link">All launch guides ↗</Link></aside>
 </main><SeoFooter/>
 </>}

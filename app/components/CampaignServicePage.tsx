import Link from "next/link";
import { serviceDelivery, creativeDelivery } from "../service-delivery";
import { caseStudies } from "../case-studies";
import { ResponsiveImage } from "./ResponsiveImage";
import { PastWork, ClientTestimonials } from "./PastWork";
import { MockupGallery } from "./MockupGallery";
import { Breadcrumbs, SeoHeader, SeoFooter } from "./SeoChrome";
import { JsonLd } from "./JsonLd";
import { absoluteUrl, siteConfig } from "../site-config";
import { campaignService, launchService } from "../seo-entities";
import { campaignFaqs, categoryFaqs, gameCategories } from "../campaign-content";
import { campaignModifiedDate, formatContentDate } from "../content-dates";
import { GuideVisual } from "./GuideVisual";
import { BoardDiorama, LaunchTrack, StandeeTile, trackLines } from "./LaunchServices";
import { landmarks } from "./world/board-data";
import { Icon, Roll } from "./chrome/Icon";

export type CampaignPage = {slug:string;title:string;description:string;headline:string;accent:string;image:string;alt:string;introTitle:string;intro:string;details:readonly string[];lead?:string;price?:string;secondTitle:string;secondCopy:string;guide:string;guideTitle:string;kind?:"launch"};

const hubSlug = "kickstarter-launch-services";
const imageSize = (image: string) => image === "hero" || image === "launch-studio" ? [1774, 887] : image === "party-cards" ? [1200, 800] : [1000, 750];

/** The space after this one on the board. Creative pages lead on to ads, Gamefound launches to prelaunch. */
function nextLandmark(page: CampaignPage) {
  const index = landmarks.findIndex(mark => mark.href === `/${page.slug}`);
  if (index >= 0 && index < landmarks.length - 1) return landmarks[index + 1];
  return landmarks.find(mark => mark.slug === (page.kind === "launch" ? "post" : "lantern"))!;
}

export function CampaignServicePage({page}:{page:CampaignPage}){
 const isHub = page.slug === hubSlug;
 const isLaunch = page.kind === "launch";
 const isDesign = page.slug === "campaign-design";
 const landmark = landmarks.find(mark => mark.href === `/${page.slug}`);
 const next = nextLandmark(page);
 const commonFaqs=campaignFaqs.filter(f=>["How much does a full launch cost?","Can I hire you just for design or ads?","How does the free mockup work?","Do I keep my accounts, contacts and files?","Do you handle manufacturing and shipping?"].includes(f.question));
 const delivery=serviceDelivery[page.slug]??creativeDelivery[page.slug];
 const allFaqs=[...new Map([...(delivery?.faqs??[]),...(categoryFaqs[page.slug]??[]),...commonFaqs].map(f=>[f.question,f])).values()];
 const faqs=isDesign?allFaqs:allFaqs.slice(0,7);
 const modified=campaignModifiedDate(page.slug);
 const pillarHub=isHub||isDesign?null:isLaunch?{href:`/${hubSlug}`,label:"Kickstarter launch services for tabletop games"}:{href:"/campaign-design",label:"Kickstarter campaign design"};
 const service=isLaunch?launchService(page.slug,page.title,page.description):{...campaignService(isDesign),"@id":absoluteUrl(`/${page.slug}#service`),name:page.title,url:absoluteUrl(`/${page.slug}`),description:page.description};
 const ctaLabel = isLaunch ? "Discuss my launch" : "Get my free mockup";
 const [imageWidth, imageHeight] = imageSize(page.image);

 return <><JsonLd data={{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":absoluteUrl(`/${page.slug}`),name:page.title,url:absoluteUrl(`/${page.slug}`),description:page.description,dateModified:modified,isPartOf:{"@id":absoluteUrl("/#website")},inLanguage:"en",mainEntity:{"@id":service["@id"]},breadcrumb:{"@id":absoluteUrl(`/${page.slug}#breadcrumb`)}},service,{"@type":"BreadcrumbList","@id":absoluteUrl(`/${page.slug}#breadcrumb`),itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:page.title,item:absoluteUrl(`/${page.slug}`)}]},{"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}]}}/>
 <a className="skip-link" href="#service-content">Skip to content</a><SeoHeader/>
 <main className={`w-page sv${isHub ? " sv--hub" : ""}`} id="service-content" tabIndex={-1}>

  <section className={`sv-hero${isHub ? " sv-hero--hub" : ""}`} aria-labelledby="service-title">
   <div className="sv-hero-inner">
    <div className="sv-hero-copy">
     <Breadcrumbs items={[{label:"Home",href:"/"},{label:page.title}]}/>
     <h1 id="service-title" className="sv-title" data-reveal="lines"><span className="w-line"><span>{page.headline}</span></span>{" "}<span className="w-line"><span><em>{page.accent}</em></span></span></h1>
     <p className="w-meta">Updated <time dateTime={modified}>{formatContentDate(modified)}</time></p>
    </div>
    <div className="sv-hero-side" data-reveal="rise">
     <p>{page.lead ?? page.description}</p>
     <div className="sv-actions">
      <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label={isLaunch?"Discuss my launch":"Free opening mockup"} data-analytics-location={page.slug}><Roll>{ctaLabel}</Roll><Icon name="arrow"/></a>
      <a className="w-link" href={isDesign ? "#pricing" : isHub ? "#track" : "#scope"}>{isDesign ? "See the price" : isHub ? "See every service" : "See the scope"}</a>
     </div>
    </div>
    {isHub ? null : <figure className="sv-hero-figure">
     {landmark ? <StandeeTile mark={landmark}/> : <div className="sv-cut">
      <ResponsiveImage sizes="(max-width: 900px) calc(100vw - 48px), 44vw" src={`/images/campaign/${page.image}.webp`} alt={page.alt} width={imageWidth} height={imageHeight} fetchPriority="high"/>
      <figcaption><span className="w-dot w-dot--concept">Studio concept. Your artwork sets the direction.</span></figcaption>
     </div>}
    </figure>}
   </div>
   {isHub ? <BoardDiorama/> : null}
  </section>

  <nav className="sv-jump" aria-label="On this page">
   {isHub ? <a href="#track">Services</a> : null}
   <a href="#scope">The scope</a>
   {delivery?.visuals ? <a href="#how-it-runs">How it runs</a> : null}
   <a href="#working-together">Working together</a>
   {isDesign ? <a href="#pricing">Design pricing</a> : null}
   <a href="#service-questions">Your questions</a>
   {delivery?.guides ? <a href="#stage-guides">Guides</a> : null}
  </nav>

  {isHub ? <section className="sv-track-section" id="track" aria-labelledby="track-title">
   <div className="w-wrap-wide">
    <div className="sv-row-head">
     <h2 id="track-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>The launch,</span></span> <span className="w-line"><span><em>space by space</em></span></span></h2>
     <p>Book the whole route or only the spaces your team is missing.</p>
    </div>
    <LaunchTrack hubHref={`/${hubSlug}`}/>
    <nav className="sv-inline-links" aria-label="More launch services">
     <Link className="w-link" href="/gamefound-launch-services">Gamefound launch services</Link>
     <Link className="w-link" href="/guides/choose-board-game-kickstarter-marketing-agency">Compare agency proposals</Link>
    </nav>
   </div>
  </section> : null}

  <section className="sv-scope tone-board" id="scope" aria-labelledby="scope-title">
   <div className="w-wrap-wide sv-scope-inner">
    <div className="sv-scope-intro">
     <h2 id="scope-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>{page.introTitle}</span></span></h2>
     <p>{page.intro}</p>
     {page.price ? <p>{page.price}</p> : null}
     <Link className="w-link" href={`/guides/${page.guide}`}>{page.guideTitle}</Link>
    </div>
    <aside className="sv-deliverables" aria-labelledby="deliverables-title">
     <h3 id="deliverables-title">What the scope can include</h3>
     <ul>{page.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
    </aside>
   </div>
  </section>

  {delivery?.visuals ? <section className="sv-scope tone-board" id="how-it-runs" aria-labelledby="how-it-runs-title">
   <div className="w-wrap-wide">
    <div className="sv-row-head">
     <h2 id="how-it-runs-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>How a project runs</span></span></h2>
     {delivery.visualsIntro ? <p>{delivery.visualsIntro}</p> : null}
    </div>
    {delivery.visuals.map(visual => <GuideVisual key={visual.title} data={visual}/>)}
   </div>
  </section> : null}

  <section className="sv-together" id="working-together" aria-labelledby="together-title">
   <div className="w-wrap-wide sv-together-inner">
    <h2 id="together-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>{page.secondTitle}</span></span></h2>
    <div className="sv-together-copy">
     <p>{page.secondCopy}</p>
     <p>Send your project summary, artwork link, current campaign and target date. We’ll agree the deliverables, fees, review process and schedule before work starts.</p>
     {!isLaunch ? <div className="sv-beyond">
      <h3>Need help beyond the page?</h3>
      <p>Guildframe also handles prelaunch setup, email, paid advertising and live campaign support. You can keep an existing team in place and book the work you need.</p>
      <Link className="w-link" href="/kickstarter-launch-services">Explore the launch service</Link>
     </div> : null}
     {page.slug === "kickstarter-prelaunch-marketing" ? <nav className="sv-inline-links" aria-label="Prelaunch planning guides">
      <Link className="w-link" href="/guides/kickstarter-prelaunch-page-vs-landing-page">Platform page or your own landing page?</Link>
      <Link className="w-link" href="/guides/board-game-kickstarter-marketing-plan">Build your launch marketing plan</Link>
     </nav> : null}
    </div>
   </div>
  </section>

  {isDesign ? <section className="sv-pricing tone-board" aria-labelledby="design-price-title">
   <div className="w-wrap-wide">
    <article className="sv-tier" id="pricing" data-reveal="rise">
     <div className="sv-tier-figure">
      <h2 id="design-price-title">Campaign page, start to finish</h2>
      <p className="sv-price"><span className="sv-price-n">$1,800</span> <span className="sv-price-unit">USD per campaign</span></p>
      <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Request a free mockup" data-analytics-location="campaign-design pricing"><Roll>Request a free mockup</Roll><Icon name="arrow"/></a>
     </div>
     <div className="sv-tier-body">
      <p>One Kickstarter or Gamefound campaign page using your supplied artwork. I write the campaign copy, design the page graphics, set up the reward tiers and build the page on the platform, ready for you to publish. The brief confirms the page sections, revision process and final files. Stretch goal graphics are included where agreed.</p>
      <ul aria-label="Included">
       <li>Campaign copy</li>
       <li>Page graphics from your artwork</li>
       <li>Reward tiers set up</li>
       <li>Page built on the platform, ready for you to publish</li>
       <li>Stretch goal graphics where agreed</li>
      </ul>
      <p className="sv-tier-note">Prelaunch setup, paid advertising and live campaign management are part of full campaign support. New illustration and video production are scoped separately. Request a free opening mockup before deciding.</p>
     </div>
    </article>
   </div>
  </section> : null}

  {delivery ? <section className="sv-delivery" aria-labelledby="service-delivery-title">
   <div className="w-wrap-wide">
    <div className="sv-row-head">
     <h2 id="service-delivery-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>{delivery.title}</span></span></h2>
     <p>{delivery.intro}</p>
    </div>
    <ol className="sv-steps">{delivery.steps.map(step => <li key={step.title}><span className="sv-step-space" aria-hidden="true"/><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    <dl className="sv-terms">
     <div><dt>What you bring</dt><dd>{delivery.inputs}</dd></div>
     <div><dt>What the handoff covers</dt><dd>{delivery.handoff}</dd></div>
     {delivery.proofCopy ? <div><dt>Work you can check</dt><dd>{delivery.proofCopy}</dd></div> : null}
    </dl>
    {delivery.proof.length > 0 ? <nav className="sv-proof" aria-label="Related creative case studies"><span>Campaign creative examples:</span>{caseStudies.filter(p => delivery.proof.includes(p.slug)).map(p => <Link className="w-link" key={p.slug} href={`/work/${p.slug}`} data-title={p.name}>{p.name}</Link>)}</nav> : null}
   </div>
  </section> : null}

  {isHub ? <section className="sv-packages tone-board" aria-labelledby="packages-title">
   <div className="w-wrap-wide sv-packages-inner">
    <div>
     <h2 id="packages-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Two packages,</span></span> <span className="w-line"><span><em>fixed prices</em></span></span></h2>
     <p>We agree the scope and schedule before work starts. Ad spend is billed separately.</p>
    </div>
    <div className="sv-package-list">
     <Link className="sv-package" href="/campaign-design#pricing" data-title="Campaign design">
      <span className="sv-package-name">Campaign page</span>
      <span className="sv-package-price">$1,800</span>
      <span className="sv-package-copy">Your Kickstarter or Gamefound page, from the first line of copy to the published page.</span>
      <span className="sv-package-go">Full scope<Icon name="arrow"/></span>
     </Link>
     <a className="sv-package sv-package--full" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Full campaign support" data-analytics-location="launch services packages">
      <span className="sv-package-name">Full campaign support</span>
      <span className="sv-package-price">$5,900</span>
      <span className="sv-package-copy">The campaign page, plus the launch around it, from prelaunch to the final handoff.</span>
      <span className="sv-package-go">Plan the full launch<Icon name="arrow"/></span>
     </a>
    </div>
   </div>
  </section> : null}

  {isDesign || isHub ? <><PastWork/><ClientTestimonials/></> : null}
  {page.slug === "card-game-kickstarter-campaign-design" ? <MockupGallery/> : null}

  <section className="sv-faq" id="service-questions" aria-labelledby="faq-title">
   <div className="w-wrap-wide sv-faq-inner">
    <div className="sv-faq-head">
     <h2 id="faq-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Questions</span></span> <span className="w-line"><span><em>before you book</em></span></span></h2>
     <a className="w-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location={`${page.slug} faq`}>{siteConfig.contactEmail}</a>
    </div>
    <div className="sv-faq-list">{faqs.map(f => <details key={f.question}><summary>{f.question}<Icon name="plus" size={20}/></summary><p>{f.answer}</p></details>)}</div>
   </div>
  </section>

  {delivery?.guides ? <section className="sv-together" id="stage-guides" aria-labelledby="stage-guides-title">
   <div className="w-wrap-wide sv-together-inner">
    <h2 id="stage-guides-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Guides for</span></span> <span className="w-line"><span><em>this stage</em></span></span></h2>
    <div className="sv-together-copy">
     <p>{delivery.guides.intro}</p>
     <nav className="sv-inline-links" aria-label="Guides for this stage">{delivery.guides.links.map(guide => <Link className="w-link" key={guide.slug} href={`/guides/${guide.slug}`}>{guide.label}</Link>)}</nav>
     {pillarHub ? <p>This page is part of our <Link className="w-link" href={pillarHub.href}>{pillarHub.label}</Link>.</p> : null}
    </div>
   </div>
  </section> : null}

  {isDesign ? null : <section className="sv-next" aria-labelledby="book-title">
   <div className="w-wrap-wide">
    <div className="sv-beyond">
     <h2 id="book-title" className="w-h2">{isLaunch ? "Tell us about your launch" : "See your page before you book"}</h2>
     <p>{isLaunch ? "Send your game, artwork and target date through the booking page. We reply with the scope, the price and a schedule, and nothing is billed until you approve the proposal." : "Book the campaign page package, or ask for the free opening mockup first. We design one opening section from your artwork, with no payment and no obligation to book."}</p>
     <div className="sv-actions"><Link className="w-btn w-btn--coral" href="/buy"><Roll>{isLaunch ? "Start your project" : "Book or request a mockup"}</Roll><Icon name="arrow"/></Link></div>
    </div>
   </div>
  </section>}

  <section className="sv-next" aria-labelledby="next-title">
   <div className="w-wrap-wide">
    <Link className="sv-next-card" href={next.href} data-title={next.label} data-cursor-label="Next space">
     <span className="sv-next-copy">
      <span className="sv-next-title" id="next-title">Next on the board: <em>{next.label}</em></span>
      <span className="sv-next-line">{trackLines[next.slug]}</span>
     </span>
     <Icon name="arrow" size={28}/>
     <img className="sv-next-standee" src={next.image} width={next.w} height={next.h} alt="" loading="lazy" decoding="async"/>
    </Link>
    <nav className="sv-related" aria-label="Related services">
     <Link href="/campaign-creative">Scripts, renders and motion</Link>
     {!isHub ? <Link href="/kickstarter-launch-services">Full launch services</Link> : null}
     {!isDesign ? <Link href="/campaign-design#pricing">Campaign design scope &amp; price</Link> : null}
     {page.slug !== "gamefound-launch-services" ? <Link href="/gamefound-launch-services">Gamefound launches</Link> : null}
     {gameCategories.filter(g => g.slug !== page.slug).map(g => <Link key={g.slug} href={`/${g.slug}`}>{g.name}</Link>)}
    </nav>
   </div>
  </section>
 </main><SeoFooter/></>;
}

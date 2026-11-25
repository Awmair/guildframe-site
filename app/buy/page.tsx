import Link from "next/link";
import {TrustPage} from "../components/TrustPage";
import {JsonLd} from "../components/JsonLd";
import {OfferArt} from "../components/studio/OfferArt";
import {Icon, Roll} from "../components/chrome/Icon";
import {absoluteUrl,pageMetadata} from "../site-config";
import {campaignDate} from "../campaign-content";
export const metadata=pageMetadata({title:"Start Your Tabletop Launch Project",description:"Discuss your Kickstarter or Gamefound project with Guildframe. Agree the launch services, fees and schedule, or request a free opening campaign mockup.",path:"/buy"});
export default function Page(){return <>
  <JsonLd data={{"@context":"https://schema.org","@type":"WebPage",name:"Start Your Tabletop Launch Project",url:absoluteUrl("/buy"),dateModified:campaignDate}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","@id":absoluteUrl("/buy#breadcrumb"),itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:"Before you book",item:absoluteUrl("/buy")}]}}/>
  <TrustPage
    variant="offer"
    tone="dusk"
    title="Start your tabletop launch project"
    heading={<><span className="w-line"><span>Start your tabletop</span></span> <span className="w-line"><span><em>launch project</em></span></span></>}
    description="Share your game, current assets and target date. We’ll review the work needed before agreeing a proposal."
    label="Before you book"
    updated={campaignDate}
    art={<OfferArt kind="start"/>}
    actions={<>
      <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="before you book"><Roll>Discuss my project</Roll><Icon name="arrow"/></a>
      <a className="w-link" href="#start-project">Request a free mockup</a>
      <a className="w-link" href="https://cal.com/guildframe/30min" target="_blank" rel="noopener noreferrer" data-analytics-event="call_booking_click" data-analytics-location="before you book">Book a 30 minute call</a>
    </>}
  >
    <section><h2>What happens before booking?</h2><p>The proposal lists the deliverables, fees, ad budget, support period and review schedule. You approve it before work starts. Use the form below to discuss your project or <Link href="/kickstarter-launch-services">explore the launch services</Link>.</p></section>
    <section><h2>Can I start with a creative mockup?</h2><p>Yes. Choose the free opening mockup in the form and share usable artwork. It covers one opening campaign section, with no payment or obligation to book. <Link href="/campaign-design#pricing">Campaign design is also available on its own</Link>.</p></section>
  </TrustPage>
</>}

import Link from "next/link";
import {JsonLd} from "../components/JsonLd";
import {TrustPage} from "../components/TrustPage";
import {StudioDesk} from "../components/studio/StudioDesk";
import {Icon, Roll} from "../components/chrome/Icon";
import {absoluteUrl,pageMetadata} from "../site-config";
import {contentDates} from "../content-dates";
export const metadata=pageMetadata({title:"About Guildframe",description:"Meet Umair, the designer and paid advertising specialist behind Guildframe. Kickstarter and Gamefound launch services for games, RPGs and miniatures.",path:"/about"});

const portrait = <figure className="st-portrait">
  <div className="st-portrait-frame" data-reveal="media">
    <img src="/images/guildframe-founder-portrait-v1.webp" width="1254" height="1254" alt="Umair, founder of Guildframe" loading="lazy" decoding="async"/>
  </div>
  <figcaption>Umair runs Guildframe and leads the creative and advertising work.</figcaption>
</figure>;

export default function Page(){return <>
  <JsonLd data={{"@context":"https://schema.org","@type":"AboutPage",url:absoluteUrl("/about"),name:"About Guildframe",mainEntity:{"@id":absoluteUrl("/#organization")},dateModified:contentDates.about}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","@id":absoluteUrl("/about#breadcrumb"),itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:absoluteUrl("/")},{"@type":"ListItem",position:2,name:"About",item:absoluteUrl("/about")}]}}/>
  <TrustPage
    variant="studio"
    label="About"
    title="About Guildframe"
    heading={<><span className="w-line"><span>About</span></span> <span className="w-line"><span><em>Guildframe</em></span></span></>}
    description="I’m Umair. I run Guildframe, a tabletop crowdfunding studio for Kickstarter and Gamefound launches."
    updated={contentDates.about}
    art={<StudioDesk/>}
    actions={<a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="about"><Roll>Discuss my project</Roll><Icon name="arrow"/></a>}
    aside={portrait}
  >
    <section><h2>The game <em>comes first.</em></h2><p>I work with board game publishers, card game creators, RPG writers and people making miniatures, terrain and tabletop accessories. The campaign needs to explain their project to someone who has never seen it before.</p><p>My work brings campaign creative and paid advertising together. Guildframe also offers launch planning, prelaunch pages and email, live campaign support and the agreed handoff after funding. You can book a specific part or a broader engagement.</p></section>
    <section><h2>Work directly <em>with me.</em></h2><p>I lead the creative and advertising work. We start by checking your assets, audience and intended date, then put the deliverables, fees, budget and review process in writing. If work needs another specialist, that responsibility is named in the scope.</p><p><Link href="/kickstarter-launch-services">Explore the launch services</Link> or email <a href="mailto:umair@guildframe.com">umair@guildframe.com</a>. For creative enquiries, you can request a <a href="#start-project">free mockup of one opening campaign section</a> before booking.</p></section>
    <section><h2>The work <em>you can check.</em></h2><p>The <Link href="/#past-work">Past work section</Link> shows creative work for ScentedRealms, FutureProof Terrain and Quiver Time, with links to their Kickstarter campaigns. The reviews refer to that creative work. Concept mockups show other visual directions and are labelled as concepts.</p><p>Those projects demonstrate design work. Guildframe does not claim their total funding as an advertising result or promise the same outcome for another campaign.</p></section>
    <section><h2>Useful guidance <em>for your next decision.</em></h2><p>The <Link href="/guides">launch guides</Link> cover prelaunch marketing, email, ad budgets, page readiness, rewards and campaign communication. Older after funding articles remain available at their original URLs. The <Link href="/editorial-policy">editorial policy</Link> explains how sources and recommendations are handled.</p></section>
  </TrustPage>
</>}

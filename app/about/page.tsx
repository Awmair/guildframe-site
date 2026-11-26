import Link from "next/link";
import {JsonLd} from "../components/JsonLd";
import {TrustPage} from "../components/TrustPage";
import {StudioDesk} from "../components/studio/StudioDesk";
import {Icon, Roll} from "../components/chrome/Icon";
import {absoluteUrl,pageMetadata} from "../site-config";
import {contentDates} from "../content-dates";
import {GuideVisual,type GuideVisualData} from "../components/GuideVisual";
export const metadata=pageMetadata({title:"About Guildframe",description:"Meet Umair, the designer and paid advertising specialist behind Guildframe. Kickstarter launches for first time creators of products, games and books.",path:"/about"});

const projectSteps: GuideVisualData = {
  kind: "steps",
  title: "Every project is scoped in writing before the work starts",
  steps: [
    { label: "Send the project", detail: "Your artwork or product images and the date you have in mind" },
    { label: "Check the inputs", detail: "Assets, audience and launch date reviewed together" },
    { label: "Agree the scope", detail: "Deliverables, fees, ad budget and reviews in writing" },
    { label: "Build and review", detail: "The agreed review rounds before anything goes live" },
    { label: "Launch and hand off", detail: "Live support if booked, then the agreed handoff" },
  ],
  caption: "How a project with Umair runs. For creative work, a free mockup of one opening section comes before any booking.",
};

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
    description="I’m Umair. With my team I run Guildframe, a launch studio for first time creators on Kickstarter, Gamefound and Indiegogo: everyday products, tabletop games and books."
    updated={contentDates.about}
    art={<StudioDesk/>}
    actions={<a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="about"><Roll>Discuss my project</Roll><Icon name="arrow"/></a>}
    aside={portrait}
  >
    <section><h2>The project <em>comes first.</em></h2><p>I work with first time creators who have a working prototype and a campaign to plan: product designers and small brands, authors, and tabletop creators, from board game publishers and RPG writers to people making miniatures and accessories. Tabletop is our specialty. Whatever the project, the campaign needs to explain it to someone who has never seen it before.</p><p>My work brings campaign creative and paid advertising together. Guildframe also offers launch planning, prelaunch pages and email, live campaign support and the agreed handoff after funding. You can book a specific part or a broader engagement.</p><p>See <Link href="/kickstarter-product-campaign-design">campaigns for products and books</Link> or <Link href="/tabletop-kickstarter-campaigns">campaigns for tabletop games</Link>.</p></section>
    <section><h2>Work directly <em>with me.</em></h2><p>I lead the creative and advertising work. We start by checking your assets, audience and intended date, then put the deliverables, fees, budget and review process in writing. If work needs another specialist, that responsibility is named in the scope.</p><GuideVisual data={projectSteps}/><p><Link href="/kickstarter-launch-services">Explore the launch services</Link> or email <a href="mailto:umair@guildframe.com">umair@guildframe.com</a>. For creative enquiries, you can request a <a href="#start-project">free mockup of one opening campaign section</a> before booking.</p></section>
    <section><h2>The work <em>you can check.</em></h2><p>The <Link href="/#past-work">Past work section</Link> shows creative work for Secubix, Bacàn, A World Without Men, ScentedRealms, FutureProof Terrain, Quiver Time and Cryptic Explorers, with links to their Kickstarter campaigns. The two quoted client excerpts refer to the ScentedRealms and FutureProof Terrain work. Concept mockups show other visual directions and are labeled as concepts.</p><p>Those projects demonstrate design work. Guildframe does not claim their total funding as an advertising result or promise the same outcome for another campaign.</p></section>
    <section><h2>Useful guidance <em>for your next decision.</em></h2><p>The <Link href="/guides">launch guides</Link> cover prelaunch marketing, email, ad budgets, page readiness, rewards and campaign communication. Older after funding articles remain available at their original URLs. The <Link href="/editorial-policy">editorial policy</Link> explains how sources and recommendations are handled.</p></section>
    <section><h2>Ready to talk <em>about your project?</em></h2><p>See how to <Link href="/buy">start your launch project</Link>, with the services, fees and schedule we agree before work begins, or compare the <Link href="/kickstarter-launch-services">Kickstarter launch services</Link>. Send your project when you are ready and I will reply with next steps.</p><div className="st-actions"><a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="about closing"><Roll>Discuss my project</Roll><Icon name="arrow"/></a></div></section>
  </TrustPage>
</>}

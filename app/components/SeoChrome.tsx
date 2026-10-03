import Link from "next/link";
import { ProjectInquiryForm } from "./ProjectInquiryForm";
import { siteConfig } from "../site-config";

export function SeoHeader() {
  return <header className="gf-header glass">
    <Link className="gf-brand" href="/" aria-label="Guildframe home"><img src="/brand/guildframe-campaign-logo.png" alt="Guildframe" width="1000" height="202" /></Link>
    <nav className="gf-desktop-nav" aria-label="Primary navigation"><Link href="/campaign-design">Campaign design</Link><Link href="/#past-work">Past work</Link><Link href="/#process">How it works</Link><Link href="/#faq">FAQs</Link><Link href="/guides">Guides</Link></nav>
    <Link className="gf-button gf-button-small" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Free campaign mockup" data-analytics-location="header">Free mockup <span aria-hidden="true">↗</span></Link>
    <details className="gf-mobile-menu"><summary aria-label="Open navigation">Menu</summary><nav className="glass" aria-label="Mobile navigation"><Link href="/campaign-design">Campaign design</Link><Link href="/#past-work">Past work</Link><Link href="/#process">How it works</Link><Link href="/#faq">FAQs</Link><Link href="/guides">Guides</Link><Link href="/about">About</Link></nav></details>
  </header>;
}
export function SeoFooter() {
  return <><ProjectInquiryForm source="sitewide campaign enquiry" /><footer className="gf-footer">
    <div className="gf-footer-top"><div><Link className="gf-brand" href="/"><img src="/brand/guildframe-campaign-logo.png" alt="Guildframe" width="1000" height="202" /></Link><p>Kickstarter &amp; Gamefound campaign design<br />for board games, card games and tabletop projects.</p><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></div>
    <nav aria-label="Campaign services"><strong>Campaign design</strong><Link href="/campaign-design">Campaign design · $975</Link><Link href="/board-game-kickstarter-campaign-design">Board games</Link><Link href="/card-game-kickstarter-campaign-design">Card games &amp; TCGs</Link><Link href="/ttrpg-kickstarter-campaign-design">Tabletop RPGs</Link><Link href="/miniatures-kickstarter-campaign-design">Miniatures &amp; terrain</Link><Link href="/tabletop-accessories-campaign-design">Dice &amp; accessories</Link><Link href="/gamefound-campaign-design">Gamefound design</Link></nav>
    <nav aria-label="Guildframe resources"><strong>Guides & studio</strong><Link href="/guides">Launch guides</Link><Link href="/about">About Guildframe</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/buy">Before you book</Link><Link href="/resources">Research &amp; references</Link><Link href="/kickstarter-to-shopify">After your campaign</Link><a href="#start-project">Request a free mockup</a></nav></div>
    <div className="gf-footer-bottom"><span>© 2026 Guildframe. Campaign design by Umair.</span><span>Independent design studio.</span></div>
  </footer></>;
}
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}) {
 return <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item,index)=><li key={`${item.label}-${index}`}>{item.href?<Link href={item.href}>{item.label}</Link>:item.label}</li>)}</ol></nav>;
}

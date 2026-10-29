import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../../components/SeoChrome";
import { JsonLd } from "../../components/JsonLd";
import { LaunchKitSignup } from "../../components/LaunchKitSignup";
import { contentDates, formatContentDate } from "../../content-dates";
import { launchKit, launchKitAutomatedSignup } from "../../launch-kit";
import { absoluteUrl, pageMetadata } from "../../site-config";
import "../../launch-kit.css";

export const metadata = pageMetadata({ title: launchKit.title, description: launchKit.description, path: launchKit.path });

export default function LaunchKitPage() {
  const date = contentDates.launchKit;
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl(launchKit.path), url: absoluteUrl(launchKit.path), name: launchKit.title, description: launchKit.description, datePublished: date, dateModified: date, isPartOf: { "@id": absoluteUrl("/#website") }, publisher: { "@id": absoluteUrl("/#organization") }, inLanguage: "en" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Resources", item: absoluteUrl("/resources") }, { "@type": "ListItem", position: 3, name: launchKit.title, item: absoluteUrl(launchKit.path) }] },
    ] }} />
    <a className="skip-link" href="#launch-kit-content">Skip to the launch kit</a>
    <SeoHeader />
    <main className="kit-main" id="launch-kit-content">
      <header className="kit-hero">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Launch kit" }]} />
        <span className="gf-eyebrow">Free working files for tabletop crowdfunding</span>
        <h1>Tabletop campaign<br /><em>launch kit.</em></h1>
        <p>Plan the costs, campaign, emails and creative for your board game, card game, TTRPG, miniatures or terrain project. Edit the files and share them with your team.</p>
        <div className="kit-hero-actions"><a className="gf-button" href="#get-the-kit" data-analytics-event="launch_kit_interest" data-analytics-label="Get the kit and updates" data-analytics-location="launch kit hero">Get the kit &amp; updates</a><a className="kit-text-link" href="#inside-the-kit">See what is inside</a></div>
        <div className="kit-facts"><span>5 useful files</span><span>Editable workbook and documents</span><span>Free by email</span></div>
      </header>
      <section className="kit-contents" id="inside-the-kit" aria-labelledby="kit-contents-title">
        <div className="kit-section-heading"><span className="gf-eyebrow">What you get</span><h2 id="kit-contents-title">A working folder<br /><em>for the whole launch.</em></h2><p>Open the starter guide, then use the part that matches your next decision. {launchKitAutomatedSignup ? "You receive the complete kit after confirming your email." : "Request the kit by email and I will reply with all five files."}</p><figure className="kit-preview"><a href="/downloads/launch-kit/preview-start-here.webp" target="_blank" rel="noreferrer" data-analytics-event="launch_kit_preview" data-analytics-label="View the start guide preview" data-analytics-location="launch kit contents"><img src="/downloads/launch-kit/preview-start-here.webp" width="993" height="1404" alt="First page of the included Start Here guide, listing the five files and the first planning steps" loading="lazy" /></a><figcaption>A page from the included start guide. Open to read.</figcaption></figure></div>
        <ol className="kit-file-list">{launchKit.files.map((file, index) => <li key={file.name}><span className="kit-file-number">0{index + 1}</span><div><span className="kit-file-format">{file.format}</span><h3>{file.title}</h3><p>{file.copy}</p></div></li>)}</ol>
      </section>
      <section className="kit-use" aria-labelledby="kit-use-title">
        <div><span className="gf-eyebrow">Made for tabletop creators</span><h2 id="kit-use-title">Start with the<br /><em>game you have.</em></h2></div>
        <div><p>Planning your first campaign? Start with the message, costs and launch plan. Already have artwork and a publisher team? Use the production brief to decide which renders, clips, scripts and campaign assets still need making.</p><p>Use the kit for board games, card games, tabletop RPGs, miniatures and terrain. Replace the fictional examples with your own confirmed information. Kickstarter and Gamefound have different rules, fees and setup. Check the current requirements for your chosen platform.</p><p>The funding model covers one manufactured product shared by reward tiers, plus digital rewards. Cost additional physical products separately. The kit helps you plan and check assumptions; it does not predict your funding result.</p></div>
      </section>
      <LaunchKitSignup />
      <section className="kit-next" aria-labelledby="kit-next-title"><div><span className="gf-eyebrow">When you want help making it</span><h2 id="kit-next-title">Bring the brief.<br /><em>We can scope the work.</em></h2></div><div><p>Share the game, the artwork you have, the assets you need and your target date. I will review the project and reply with the next steps. Deliverables, fees and timing are agreed before work starts.</p><a className="kit-text-link" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Send a project brief" data-analytics-location="launch kit closing">Send my project brief</a><p className="kit-review">Reviewed <time dateTime={date}>{formatContentDate(date)}</time> · <Link href="/guides">Read the launch guides</Link></p></div></section>
    </main>
    <SeoFooter />
  </>;
}

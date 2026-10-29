import Link from "next/link";
import { TrustPage } from "../components/TrustPage";
import { JsonLd } from "../components/JsonLd";
import { contentDates } from "../content-dates";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

const description = "Terms for using Guildframe's free tabletop launch kit, editing and sharing the files with your team, and arranging separate client services.";
export const metadata = pageMetadata({ title: "Free Kit and Website Terms", description, path: "/terms" });

export default function TermsPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/terms"), url: absoluteUrl("/terms"), name: "Guildframe free kit and website terms", description, dateModified: contentDates.terms, publisher: { "@id": absoluteUrl("/#organization") } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Terms", item: absoluteUrl("/terms") }] },
    ] }} />
    <TrustPage title="Free kit and website terms" description={description} label="Terms" updated={contentDates.terms}>
      <section><h2>Use the files in your own projects</h2><p>The Tabletop Kickstarter Launch Kit is free. You may copy, edit and use its workbook, documents and examples for your own projects. You may share the files with your project team and collaborators for that work, and use the plans, briefs and other outputs you create.</p><p>You may not resell the kit or its substantially unmodified files as a standalone template or download product. Guildframe keeps the rights to the original kit. Your project information and original content remain yours. Rights in third party material remain with its owner.</p></section>
      <section><h2>Check the assumptions</h2><p>The kit and website provide planning information. Fictional examples are labelled and do not represent real customers, supplier quotes or campaign results. Replace example details with your own information, follow the workbook&apos;s stated scope and check formulas after making structural changes.</p><p>Confirm current platform rules, fees, production quotes, shipping arrangements and applicable tax or legal requirements before committing money. The kit does not guarantee funding, sales, advertising results, platform approval or delivery dates. Get appropriate professional advice where your project needs it.</p></section>
      <section><h2>Paid services are agreed separately</h2><p>Downloading the kit or sending an enquiry does not book paid work. Client services require a separate agreed proposal or contract covering the deliverables, fees, responsibilities, timing and handoff. These free kit terms do not replace that agreement.</p></section>
      <section><h2>Your information and questions</h2><p>The <Link href="/privacy">privacy policy</Link> explains enquiry information, kit delivery, optional marketing and analytics choices. A kit request or project enquiry does not itself give permission for marketing emails.</p><p>Contact Umair at <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> with questions about using the files or arranging a project. Contact address: Suite #6291, Edinburgh, Scotland.</p><p>Return to the <Link href="/resources/tabletop-kickstarter-launch-kit">free launch kit</Link> or <Link href="/guides">launch guides</Link>.</p></section>
    </TrustPage>
  </>;
}

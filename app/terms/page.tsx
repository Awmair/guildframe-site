import Link from "next/link";
import { TrustPage } from "../components/TrustPage";
import { JsonLd } from "../components/JsonLd";
import { contentDates } from "../content-dates";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

const description = "Terms for using the Guildframe website, its guides and downloads, files kept from the earlier free launch kit, and arranging separate client services.";
export const metadata = pageMetadata({ title: "Website Terms", description, path: "/terms" });

const contents = [
  { id: "use-the-guides", label: "Use the guides and files in your own projects" },
  { id: "assumptions", label: "Check the assumptions" },
  { id: "paid-services", label: "Paid services are agreed separately" },
  { id: "questions", label: "Your information and questions" }
];

export default function TermsPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", "@id": absoluteUrl("/terms"), url: absoluteUrl("/terms"), name: "Guildframe website terms", description, dateModified: contentDates.terms, publisher: { "@id": absoluteUrl("/#organization") } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Terms", item: absoluteUrl("/terms") }] },
    ] }} />
    <TrustPage title="Website terms" description={description} label="Terms" updated={contentDates.terms} contents={contents}>
      <section id="use-the-guides"><h2>Use the guides and files in your own projects</h2><p>You may use the guides, worksheets and downloads on this site to plan your own projects and share them with your project team. If you downloaded the earlier Tabletop Campaign Launch Kit, you may keep using it: copy, edit and use its files for your own projects, and share them with your project team and collaborators for that work.</p><p>You may not resell the kit, the downloads on this site or their substantially unmodified files as a standalone template or download product. Guildframe keeps the rights to its original material. Your project information and original content remain yours. Rights in third party material remain with its owner.</p></section>
      <section id="assumptions"><h2>Check the assumptions</h2><p>The website and its downloads provide planning information for tabletop crowdfunding. Kickstarter and Gamefound have different settings, fees and rules. Fictional examples are labelled and do not represent real customers, supplier quotes or campaign results. Replace example details with your own information and check formulas after making changes.</p><p>Confirm current platform rules, fees, production quotes, shipping arrangements and applicable tax or legal requirements before committing money. This website does not guarantee funding, sales, advertising results, platform approval or delivery dates. Get appropriate professional advice where your project needs it.</p></section>
      <section id="paid-services"><h2>Paid services are agreed separately</h2><p>Sending an enquiry does not book paid work. Client services require a separate agreed proposal or contract covering the deliverables, fees, responsibilities, timing and handoff. These website terms do not replace that agreement.</p></section>
      <section id="questions"><h2>Your information and questions</h2><p>The <Link href="/privacy">privacy policy</Link> explains enquiry information, earlier email subscriptions and analytics choices. Guildframe no longer offers the free kit or takes new email signups.</p><p>Contact Umair at <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> with questions about using these files or arranging a project. Contact address: Suite #6291, Edinburgh, Scotland.</p><p>Return to the <Link href="/guides">launch guides</Link>.</p></section>
    </TrustPage>
  </>;
}

import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { TrustPage } from "../components/TrustPage";
import { absoluteUrl, pageMetadata } from "../site-config";
import { contentDates } from "../content-dates";
import { Icon, Roll } from "../components/chrome/Icon";

export const metadata = pageMetadata({
  title: "Editorial Policy",
  description:
    "How Guildframe researches, writes, reviews, updates and corrects its marketing, campaign design and tabletop launch guidance.",
  path: "/editorial-policy",
  keywords: ["Guildframe editorial policy", "tabletop ecommerce research", "Shopify guide sources"],
});

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": absoluteUrl("/editorial-policy"),
            url: absoluteUrl("/editorial-policy"),
            name: "Guildframe Editorial Policy",
            description: "How Guildframe researches, reviews and updates its editorial content.",
            about: { "@id": absoluteUrl("/authors/guildframe#umair") },
            publisher: { "@id": absoluteUrl("/#organization") },
            isPartOf: { "@id": absoluteUrl("/#website") },
            dateModified: contentDates.editorialPolicy,
            inLanguage: "en",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Editorial policy", item: absoluteUrl("/editorial-policy") },
            ],
          },
        ],
      }} />
      <TrustPage
        label="Editorial policy"
        title="Guildframe editorial policy"
        description="The guides explain campaign design and launch preparation, with sources for platform facts and clear labels for design advice."
        updated={contentDates.editorialPolicy}
        contents={[{ id: "purpose", label: "Editorial purpose" }, { id: "research", label: "Research and sourcing" }, { id: "commercial-transparency", label: "Commercial transparency" }, { id: "corrections", label: "Review, updates and corrections" }, { id: "checking", label: "How to check the advice" }, { id: "work-with-guildframe", label: "Help with your launch" }]}
      >
        <section id="purpose">
          <h2>Editorial purpose</h2>
          <p>
            Guildframe publishes guidance for tabletop creators preparing
            crowdfunding campaigns and planning what comes after funding.
            Each page answers a practical question, such as what to send a designer or how to compare rewards.
          </p>
        </section>
        <section id="research">
          <h2>Research and sourcing</h2>
          <ol>
            <li><strong>Primary sources first.</strong> Platform help centers, product documentation and official policy pages are preferred.</li>
            <li><strong>Visible evidence.</strong> Guides link to the sources behind platform facts and published figures.</li>
            <li><strong>Current facts.</strong> Time sensitive platform features, pricing and policies are rechecked before material updates.</li>
            <li><strong>Clear inference.</strong> Guildframe recommendations are presented as analysis, not as platform policy.</li>
          </ol>
        </section>
        <section id="commercial-transparency">
          <h2>Commercial transparency</h2>
          <p>
            Guildframe offers Kickstarter and Gamefound launch services, including campaign creative, prelaunch, paid advertising and live support.
            Broader projects use a scoped quote. The design only price is listed on its service page.
            Concept mockups are labeled separately from the client campaigns in Past work. Client quotes are short, verbatim excerpts matched to their projects.
            We do not claim funding results or guaranteed search rankings.
          </p>
          <p>
            Comparisons explain the job each platform performs. They are not paid
            rankings, and inclusion does not imply endorsement by Shopify,
            Kickstarter, BackerKit or Gamefound.
          </p>
        </section>
        <section id="corrections">
          <h2>Review, updates and corrections</h2>
          <ul className="trust-checklist">
            <li>Every guide displays its most recent review date.</li>
            <li>Material changes update the page date and sitemap date.</li>
            <li>Broken sources, changed platform rules and inaccurate product facts are corrected.</li>
            <li>Corrections preserve the useful answer instead of silently changing its intent.</li>
          </ul>
          <p>
            The guides are written by <Link href="/authors/guildframe">Umair at Guildframe</Link>.
            Product and company details are documented on the <Link href="/about">About page</Link>.
          </p>
        </section>
        <section id="checking">
          <h2>How to check the advice</h2>
          <p>
            Use the source links to check platform requirements. Where I recommend a layout, a checklist or a workflow, I explain why it helps. If you find an error, email umair@guildframe.com with the page link and the detail to correct.
          </p>
        </section>
        <section id="work-with-guildframe">
          <h2>Want help with your own launch?</h2>
          <p>
            You can use every guide without booking anything. If you would like us to do the work, see how to <Link href="/buy">start your tabletop launch project</Link> or read about our <Link href="/kickstarter-launch-services">Kickstarter launch services for tabletop games</Link>.
          </p>
          <div className="st-actions"><a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my project" data-analytics-location="editorial policy closing"><Roll>Discuss my project</Roll><Icon name="arrow" /></a></div>
        </section>
      </TrustPage>
    </>
  );
}

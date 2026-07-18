import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { TrustPage } from "../components/TrustPage";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Editorial Policy",
  description:
    "How Guildframe researches, writes, reviews, updates and corrects its Shopify and tabletop ecommerce guidance.",
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
            about: { "@id": absoluteUrl("/authors/guildframe#editorial-team") },
            publisher: { "@id": absoluteUrl("/#organization") },
            isPartOf: { "@id": absoluteUrl("/#website") },
            dateModified: "2026-07-17",
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
        title="Useful first. Verifiable always."
        description="Guildframe guidance is written to answer a creator's real decision clearly, separate facts from judgment and make important claims easy to verify."
        updated="2026-07-17"
      >
        <section>
          <h2>Editorial purpose</h2>
          <p>
            Guildframe publishes guidance for tabletop creators planning Shopify
            stores, moving beyond crowdfunding and comparing post-campaign tools.
            Every page should help a reader make or execute a specific decision.
            We do not create pages merely to target a synonym.
          </p>
        </section>
        <section>
          <h2>Research and sourcing</h2>
          <ol>
            <li><strong>Primary sources first.</strong> Platform help centers, product documentation and official policy pages are preferred.</li>
            <li><strong>Visible evidence.</strong> Guides list the sources reviewed and connect them to structured Article citations.</li>
            <li><strong>Current facts.</strong> Time-sensitive platform features, pricing and policies are rechecked before material updates.</li>
            <li><strong>Clear inference.</strong> Guildframe recommendations are presented as analysis, not as platform policy.</li>
          </ol>
        </section>
        <section>
          <h2>Commercial transparency</h2>
          <p>
            Guildframe sells a Shopify theme and done-for-you store service. Pages about
            Shopify themes, Kickstarter migration and tabletop storefronts may link
            to the relevant Guildframe offer page. Theme price, service price and
            scope must match the visible offers and structured data.
          </p>
          <p>
            Comparisons explain the job each platform performs. They are not paid
            rankings, and inclusion does not imply endorsement by Shopify,
            Kickstarter, BackerKit or Gamefound.
          </p>
        </section>
        <section>
          <h2>Review, updates and corrections</h2>
          <ul className="trust-checklist">
            <li>Every guide displays its most recent review date.</li>
            <li>Material changes update the page date and sitemap date.</li>
            <li>Broken sources, changed platform rules and inaccurate product facts are corrected.</li>
            <li>Corrections preserve the useful answer instead of silently changing its intent.</li>
          </ul>
          <p>
            The responsible author is the <Link href="/authors/guildframe">Guildframe Editorial Team</Link>.
            Product and company details are documented on the <Link href="/about">About page</Link>.
          </p>
        </section>
        <section>
          <h2>AI and search use</h2>
          <p>
            Content is structured for people first, with concise answers, descriptive
            headings, accessible tables, citations and stable entities that also help
            search engines and answer systems interpret it accurately. Guildframe
            does not publish unsupported claims solely to attract citations.
          </p>
        </section>
      </TrustPage>
    </>
  );
}

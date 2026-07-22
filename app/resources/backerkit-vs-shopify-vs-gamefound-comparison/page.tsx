import Link from "next/link";
import { ArticleCallout, ArticleTable, SeoArticlePage } from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Tabletop Crowdfunding Platform Role Matrix",
  description:
    "Map crowdfunding, pledge management and permanent ecommerce responsibilities across BackerKit, Shopify and Gamefound.",
  path: "/resources/backerkit-vs-shopify-vs-gamefound-comparison",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: "2026-07-18",
  keywords: ["tabletop crowdfunding platform matrix", "crowdfunding platform roles", "pledge manager ecommerce workflow"],
});

const faqs = [
  {
    question: "Is Shopify a pledge manager?",
    answer: "No. Shopify is an ecommerce platform for products, checkout, inventory and customer relationships. A pledge manager is designed around backer surveys, upgrades, add ons and fulfillment data after a crowdfunding campaign.",
  },
  {
    question: "Can a creator use BackerKit and Shopify together?",
    answer: "Yes. BackerKit can manage campaign or pledge specific workflows while Shopify runs the permanent public store. The important operational choice is which system owns backer fulfillment data and which owns new retail orders.",
  },
  {
    question: "Can Gamefound and Shopify be used together?",
    answer: "Yes. Gamefound can support crowdfunding and pledge management workflows while Shopify supports ongoing direct ecommerce. Product names, availability and customer messaging should remain consistent across both systems.",
  },
];

export default function PlatformComparisonMatrixPage() {
  return (
    <SeoArticlePage
      slug="backerkit-vs-shopify-vs-gamefound-comparison"
      path="/resources/backerkit-vs-shopify-vs-gamefound-comparison"
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="Platform role matrix"
      category="Crowdfunding operations"
      title="Tabletop Crowdfunding Platform Role Matrix"
      description="Use this operational matrix to assign funding, pledge management, fulfillment data and permanent ecommerce to the right system."
      answer="BackerKit and Gamefound are built around crowdfunding and backer workflows, while Shopify is built for ongoing ecommerce. Many tabletop creators use a campaign or pledge platform for backer specific work and Shopify as the permanent product, checkout and customer layer."
      published="2026-07-17"
      updated="2026-07-18"
      readTime="6 minute reference"
      faqs={faqs}
      sources={[
        { label: "How BackerKit works", publisher: "BackerKit", href: "https://www.backerkit.com/features" },
        { label: "Become a creator on Gamefound", publisher: "Gamefound", href: "https://gamefound.com/en/creators/becomeacreator" },
        { label: "Gamefound Knowledge Base", publisher: "Gamefound", href: "https://help.gamefound.com/" },
        { label: "Shopify products", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products" },
        { label: "Shopify checkout", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/checkout-settings" },
      ]}
      toc={[
        { id: "matrix", label: "Role comparison" },
        { id: "funding", label: "Funding and pledges" },
        { id: "commerce", label: "Permanent commerce" },
        { id: "stacks", label: "Common platform stacks" },
        { id: "decision", label: "Decision checklist" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <p>
        This is the scannable implementation companion to the full <Link href="/guides/backerkit-vs-shopify-vs-gamefound">BackerKit vs Shopify vs Gamefound guide</Link>. Use the guide to choose a stack, then use this matrix to document which system owns each operational job.
      </p>
      <h2 id="matrix">Role comparison at a glance</h2>
      <ArticleTable
        headers={["Capability", "BackerKit", "Shopify", "Gamefound"]}
        rows={[
          ["Crowdfunding campaign", "Yes, through its crowdfunding offering", "No", "Yes"],
          ["Pledge surveys and upgrades", "Core role", "Not a native pledge manager role", "Core role within supported campaign flows"],
          ["Backer add ons", "Designed for campaign workflows", "Handled as retail products or apps", "Designed for campaign workflows"],
          ["Permanent product catalog", "Secondary to campaign workflows", "Core role", "Secondary to crowdfunding workflows"],
          ["Retail checkout", "Campaign and backer context", "Core role", "Campaign and pledge context"],
          ["Inventory for ongoing sales", "Not its primary long term job", "Core role", "Not its primary long term job"],
          ["Brand content and collections", "Limited compared with a full store", "Core role through themes and content", "Campaign focused presentation"],
          ["Repeat customer commerce", "Possible, but not the primary storefront model", "Core role", "Possible within platform context"],
        ]}
      />
      <ArticleCallout>
        This is a role comparison, not a claim that one platform is universally
        better. The right stack depends on whether the current job is funding,
        managing backers or running a permanent store.
      </ArticleCallout>

      <h2 id="funding">Funding and pledge management roles</h2>
      <p>
        BackerKit and Gamefound are relevant when the project still needs a
        campaign, pledge upgrades, add ons, surveys or fulfillment data tied to
        backers. Their workflows retain campaign context that a general ecommerce
        platform does not provide natively.
      </p>
      <ul>
        <li><strong>BackerKit:</strong> campaign and pledge management tools designed around creators and backers.</li>
        <li><strong>Gamefound:</strong> a tabletop focused crowdfunding platform with campaign and pledge workflows.</li>
        <li><strong>Shopify:</strong> a product and checkout platform for standard ecommerce, not the original campaign record.</li>
      </ul>
      <p>
        Do not move survey or fulfillment ownership merely because a storefront is
        opening. First decide which system remains authoritative for backer choices,
        addresses and campaign delivery status.
      </p>

      <h2 id="commerce">Permanent ecommerce role</h2>
      <p>
        Shopify is designed to keep selling after the campaign cycle. It provides a
        permanent catalog, collections, inventory, checkout, customer records,
        discounts, content and an extensible app ecosystem. A Shopify theme controls
        how that system is presented to customers.
      </p>
      <p>
        For a tabletop publisher, the permanent store usually needs to explain core
        games, editions, expansions, bundles and accessories without assuming the
        customer understands a pledge tier. That is the problem solved by a
        purpose built <Link href="/shopify-theme-for-board-games">board game Shopify theme</Link>.
      </p>

      <h2 id="stacks">Common platform stacks</h2>
      <ArticleTable
        headers={["Creator situation", "Practical stack", "Ownership rule"]}
        rows={[
          ["BackerKit campaign with ongoing retail", "BackerKit plus Shopify", "BackerKit owns campaign and backer workflows; Shopify owns new retail orders"],
          ["Gamefound campaign with permanent brand store", "Gamefound plus Shopify", "Gamefound owns campaign pledges; Shopify owns the long term catalog"],
          ["Campaign fulfilled and no pledge manager needed", "Shopify", "Shopify becomes the clear commerce source of truth"],
          ["New campaign while an older catalog keeps selling", "Campaign platform plus Shopify", "Separate current backer promises from existing retail inventory"],
        ]}
      />
      <p>
        The integration can be manual or automated, but the conceptual boundary
        should be written down before data starts moving. Product names, SKUs and
        availability can be shared. Backer records and new customer orders should
        not become ambiguous.
      </p>

      <h2 id="decision">Decision checklist</h2>
      <ul className="article-checklist">
        <li>Are you funding a project, managing existing backers or selling ongoing inventory?</li>
        <li>Which system owns backer surveys, upgrades, addresses and fulfillment status?</li>
        <li>Which system owns new products, retail orders, inventory and repeat customers?</li>
        <li>Will customers need a permanent branded catalog outside the campaign platform?</li>
        <li>How will product names, SKUs, prices and availability stay consistent?</li>
        <li>What changes when a campaign ends or fulfillment completes?</li>
        <li>Which support channel handles backers and which handles retail customers?</li>
      </ul>
      <p>
        Read the full <Link href="/guides/backerkit-vs-shopify-vs-gamefound">BackerKit vs Shopify vs Gamefound guide</Link>
        for more context, or use the <Link href="/resources/kickstarter-to-shopify-migration-checklist">migration checklist</Link>
        when the destination store has already been chosen.
      </p>
    </SeoArticlePage>
  );
}

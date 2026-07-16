import Link from "next/link";
import { ArticleCallout, ArticleTable, SeoArticlePage } from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify Migration Checklist",
  description:
    "A practical Kickstarter to Shopify migration checklist for tabletop creators, from reward tiers and campaign assets to testing and store launch.",
  path: "/resources/kickstarter-to-shopify-migration-checklist",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: "2026-07-17",
  keywords: ["Kickstarter to Shopify migration checklist", "Shopify migration checklist", "move Kickstarter to Shopify"],
});

const faqs = [
  {
    question: "Can Kickstarter products be imported directly into Shopify?",
    answer: "Campaign rewards usually need to be translated into retail products, variants and bundles before import. Product names, prices, SKUs, media and inventory can then be prepared for Shopify using the method appropriate to the catalog size.",
  },
  {
    question: "Does moving to Shopify replace Kickstarter or a pledge manager?",
    answer: "No. Kickstarter remains the campaign and backer communication record. A pledge manager can remain the source of truth for surveys, upgrades and fulfillment. Shopify becomes the permanent store for new and repeat commerce.",
  },
  {
    question: "What should be migrated from a Kickstarter campaign page?",
    answer: "Reuse the strongest product artwork, gameplay explanation, creator story, proof, FAQs and edition logic. Rewrite them into shorter storefront sections that answer what a new customer can buy, what is included and when it ships.",
  },
];

export default function KickstarterToShopifyChecklistPage() {
  return (
    <SeoArticlePage
      slug="kickstarter-to-shopify-migration-checklist"
      path="/resources/kickstarter-to-shopify-migration-checklist"
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="Migration phases"
      category="Shopify migration"
      title="Kickstarter to Shopify Migration Checklist"
      description="A phase-by-phase reference for turning a funded tabletop campaign into a permanent Shopify store without confusing backers or rebuilding every asset."
      answer="A Kickstarter to Shopify migration has six phases: define each platform's role, convert rewards into retail products, map campaign assets to store pages, configure Shopify operations, test every customer path and launch with separate messaging for backers and new buyers."
      published="2026-07-17"
      updated="2026-07-17"
      readTime="6 minute reference"
      faqs={faqs}
      sources={[
        { label: "Migrate to Shopify", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/migrating-to-shopify" },
        { label: "How to transition from Kickstarter to Shopify", publisher: "Shopify", href: "https://www.shopify.com/ca/blog/how-to-transition-from-kickstarter-to-shopify" },
        { label: "Products", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products" },
        { label: "Creator questions about pledges and backers", publisher: "Kickstarter Support", href: "https://help.kickstarter.com/hc/en-us/categories/115000499073-Creator-Questions" },
      ]}
      toc={[
        { id: "scope", label: "Define the system roles" },
        { id: "products", label: "Convert rewards to products" },
        { id: "assets", label: "Map campaign assets" },
        { id: "operations", label: "Configure operations" },
        { id: "test", label: "Test the migration" },
        { id: "launch", label: "Launch clearly" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="scope">Phase 1: define the role of every system</h2>
      <ArticleTable
        headers={["System", "Source of truth for", "Do not use it to replace"]}
        rows={[
          ["Kickstarter", "Campaign, pledges, updates and backer context", "A permanent retail catalog"],
          ["Pledge manager", "Surveys, upgrades, add-ons and fulfillment data", "Long-term brand commerce"],
          ["Shopify", "New products, checkout, inventory and repeat customers", "Original campaign obligations"],
        ]}
      />
      <ul className="article-checklist">
        <li>Name the owner of campaign, fulfillment, product and customer data</li>
        <li>Separate unfulfilled backer rewards from new retail orders</li>
        <li>Define the date when Shopify becomes the public sales destination</li>
        <li>Document how support questions move between campaign and store channels</li>
        <li>Confirm which customer data can be used and for what purpose</li>
      </ul>
      <ArticleCallout>
        Shopify should become the permanent commerce layer, not a silent replacement
        for existing campaign promises or pledge-manager records.
      </ArticleCallout>

      <h2 id="products">Phase 2: convert campaign rewards into retail products</h2>
      <ul className="article-checklist">
        <li>List every item that a new customer can actually buy</li>
        <li>Separate core games, deluxe editions, expansions, accessories and bundles</li>
        <li>Define product titles, handles, prices, SKUs, weights and inventory rules</li>
        <li>Convert pledge choices into products or variants using customer-friendly labels</li>
        <li>Write a contents list for every edition and bundle</li>
        <li>Assign final hero images, gallery media and descriptive alt text</li>
        <li>Mark preorder, backorder or in-stock status accurately</li>
      </ul>
      <p>
        Use the <Link href="/resources/board-game-product-page-checklist">board game product page checklist</Link>
        to complete each product before storefront design begins.
      </p>

      <h2 id="assets">Phase 3: map campaign assets to Shopify pages</h2>
      <ArticleTable
        headers={["Campaign asset", "Shopify destination", "Migration action"]}
        rows={[
          ["Campaign hero and promise", "Homepage or featured collection", "Shorten and add a direct shopping route"],
          ["Reward tier chart", "Products, variants and bundles", "Rebuild around retail choices"],
          ["Gameplay and components", "Product page", "Lead with decision-critical facts"],
          ["Creator story", "About or campaign story", "Preserve identity and remove deadline language"],
          ["Campaign FAQ", "Product FAQ and policies", "Update shipping, returns and availability"],
          ["Updates and reviews", "News, testimonials or proof", "Keep only evergreen customer value"],
        ]}
      />
      <ul className="article-checklist">
        <li>Audit every claim for outdated stretch goals, dates and campaign-only language</li>
        <li>Compress and resize images for responsive delivery</li>
        <li>Replace pledge terminology with product and customer terminology</li>
        <li>Preserve useful proof such as reviews, awards, player quotes and campaign success</li>
        <li>Build navigation around products, collections and customer questions</li>
      </ul>

      <h2 id="operations">Phase 4: configure Shopify operations</h2>
      <ul className="article-checklist">
        <li>Payments and test mode configured</li>
        <li>Shipping markets, rates, packages and delivery estimates verified</li>
        <li>Taxes, duties and selling regions reviewed</li>
        <li>Inventory locations and fulfillment workflow connected</li>
        <li>Order, shipping and support notifications tested</li>
        <li>Privacy, terms, returns and shipping policies published</li>
        <li>Analytics, Search Console, Bing Webmaster Tools and sitemap prepared</li>
      </ul>

      <h2 id="test">Phase 5: test the customer and backer experience</h2>
      <ol>
        <li>Check every main route on phone, tablet and desktop.</li>
        <li>Open each product directly and through its collection.</li>
        <li>Verify editions, variants, prices, stock language and delivery dates.</li>
        <li>Complete a test order with realistic shipping and tax conditions.</li>
        <li>Confirm inventory, order email, analytics and confirmation behavior.</li>
        <li>Ask someone without campaign context to identify what to buy and when it ships.</li>
        <li>Check that backer support routes still point to the correct system.</li>
      </ol>

      <h2 id="launch">Phase 6: launch with two clear messages</h2>
      <p>
        Backers need to know whether the store changes fulfillment, where campaign
        support remains and why a permanent shop is opening. New customers need a
        much shorter message: what is available, what is included and when it ships.
      </p>
      <ul className="article-checklist">
        <li>Backer announcement explains what changes and what does not</li>
        <li>Store launch message focuses on products and availability</li>
        <li>Campaign links point to the correct permanent storefront page</li>
        <li>Outdated launch URLs redirect to their closest current destination</li>
        <li>Sitemap and updated URLs are submitted after the live deployment</li>
      </ul>
      <p>
        For the detailed reasoning behind every phase, read the full
        <Link href="/guides/move-from-kickstarter-to-shopify"> Kickstarter to Shopify migration guide</Link>.
      </p>
    </SeoArticlePage>
  );
}

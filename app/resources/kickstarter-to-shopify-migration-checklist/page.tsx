import Link from "next/link";
import { ArticleCallout, SeoArticlePage } from "../../components/SeoArticlePage";
import { GuideVisual } from "../../components/GuideVisual";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify Migration Checklist",
  description:
    "A tick box Kickstarter to Shopify migration checklist for tabletop creators, in six phases, including the Kickstarter Shopify app sync and the backer update.",
  path: "/resources/kickstarter-to-shopify-migration-checklist",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.migrationChecklist,
  keywords: ["Kickstarter to Shopify migration checklist", "Shopify migration checklist", "move Kickstarter to Shopify", "Kickstarter Shopify app checklist"],
});

const faqs = [
  {
    question: "Can Kickstarter rewards be imported directly into Shopify?",
    answer: "Not as products. Rewards need turning into Shopify products, variants and bundles first. Once those exist, Kickstarter's official Shopify app can match each reward to them and send finalized Pledge Manager orders into the store.",
  },
  {
    question: "Does moving to Shopify replace Kickstarter or a pledge manager?",
    answer: "No. Kickstarter stays the campaign and backer communication record, and the pledge manager still collects surveys, upgrades and add ons. Shopify becomes the permanent store, and can also receive backer orders for fulfillment.",
  },
  {
    question: "What order should I work through the checklist in?",
    answer: "Top to bottom. Each phase depends on the one before it, especially the reward mapping, which needs the products to exist first. The launch timeline shows how the phases line up with campaign milestones.",
  },
  {
    question: "Is this checklist enough on its own?",
    answer: "It is the task list. The reasons behind each task are in the Kickstarter to Shopify migration guide, and the final store test is in the board game Shopify store checklist.",
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
      description="The tick box version of the move. Six phases, each with the tasks to finish before the next one starts."
      answer="Work through six phases in order: name who owns each system, build the store products, map Kickstarter rewards to them, rewrite the campaign content, set up payments and shipping, then tell backers before opening the store. Tick each phase off before starting the next."
      published="2026-07-17"
      updated={contentDates.migrationChecklist}
      readTime="5 minute reference"
      faqs={faqs}
      sources={[
        { label: "Kickstarter app for Shopify", publisher: "Shopify App Store", href: "https://apps.shopify.com/kickstarter" },
        { label: "Kickstarter release notes", publisher: "Kickstarter", href: "https://start.kickstarter.com/kickstarter-release-notes" },
        { label: "How to transition from Kickstarter to Shopify", publisher: "Shopify", href: "https://www.shopify.com/ca/blog/how-to-transition-from-kickstarter-to-shopify" },
        { label: "Products", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products" },
      ]}
      toc={[
        { id: "phases", label: "All six phases" },
        { id: "owners", label: "1. Owners" },
        { id: "products", label: "2. Products" },
        { id: "mapping", label: "3. Reward mapping" },
        { id: "content", label: "4. Content" },
        { id: "operations", label: "5. Operations" },
        { id: "launch", label: "6. Launch" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="phases">The six phases on one page</h2>
      <p>
        This is the task list for the move, with no theory. We keep the reasons in
        the{" "}
        <Link href="/guides/move-from-kickstarter-to-shopify">Kickstarter to Shopify migration guide</Link>{" "}
        so this page stays short enough to print.
      </p>
      <GuideVisual
        data={{
          kind: "checklist",
          title: "Reward mapping waits for the products, so the order matters",
          groups: [
            { name: "1. Owners", items: ["Shopify account owner named", "Support routes split"] },
            { name: "2. Products", items: ["Every item for sale created", "Variants and bundles set"] },
            { name: "3. Reward mapping", items: ["Rewards matched to products", "One test sync passes"] },
            { name: "4. Content", items: ["Pledge wording removed", "Contents lists match boxes"] },
            { name: "5. Operations", items: ["Payments and taxes set", "Test order completes"] },
            { name: "6. Launch", items: ["Backer update sent first", "Store message second"] },
          ],
          source: "Guildframe migration method; Kickstarter app listing, Shopify App Store",
        }}
      />

      <h2 id="owners">Phase 1: name the owners</h2>
      <p>Every system needs one person responsible for it before any setup starts.</p>
      <ul className="article-checklist">
        <li>Owner named for the Shopify account, the pledge manager and the backer updates</li>
        <li>Pledge questions go to the campaign; store questions go to store support</li>
        <li>Backer data used only for the purpose backers agreed to</li>
        <li>Pledge manager confirmed: Kickstarter&apos;s own, or another tool with its own export</li>
      </ul>

      <h2 id="products">Phase 2: build the store products</h2>
      <p>Products come before anything else, because the reward mapping needs them.</p>
      <ul className="article-checklist">
        <li>Every item a new buyer can purchase is listed</li>
        <li>Core games, editions, expansions, accessories and bundles set up as products, variants or bundles</li>
        <li>Titles, prices, SKUs, weights and stock rules final</li>
        <li>Campaign only rewards kept out of the store</li>
      </ul>
      <p>
        Not sure which shape an item takes? Use{" "}
        <Link href="/guides/sell-board-game-expansions-add-ons-shopify">how to sell expansions, add ons and bundles on Shopify</Link>.
      </p>

      <h2 id="mapping">Phase 3: map rewards and test one sync</h2>
      <p>
        This phase only applies when backer rewards ship through Shopify using
        Kickstarter&apos;s official app, listed on the Shopify App Store on July 31, 2026.
      </p>
      <ul className="article-checklist">
        <li>Kickstarter app installed by the store owner</li>
        <li>Every reward matched to its Shopify products and variants</li>
        <li>Late add on changes allowed for, if backer self serve add ons are on</li>
        <li>One finalized order synced and checked item by item</li>
        <li>A test tracking number seen back on Kickstarter</li>
        <li>Decision made: sync all orders, or export in segments by region</li>
      </ul>
      <ArticleCallout>
        Backers can still change orders in the Pledge Manager when you allow it,
        and creators can edit backer orders since October 28, 2026. Sync once
        orders are final, not on the first day.
      </ArticleCallout>

      <h2 id="content">Phase 4: rewrite the campaign content</h2>
      <p>Each product page gets checked against the box before it goes live.</p>
      <ul className="article-checklist">
        <li>Pledge tier names, deadlines and stretch goal wording removed</li>
        <li>Contents list on every product matches the box</li>
        <li>Delivery wording says in stock or preorder, never both</li>
        <li>Creator story moved to the About page</li>
        <li>Each product page passes the <Link href="/resources/board-game-product-page-checklist">product page checklist</Link></li>
      </ul>

      <h2 id="operations">Phase 5: set up payments, shipping and taxes</h2>
      <p>Backer orders and store orders share these settings, so check them once for both.</p>
      <ul className="article-checklist">
        <li>Payment provider live and test mode ready to switch off</li>
        <li>Shipping zones, rates and package weights verified</li>
        <li>Taxes and duties reviewed for each market</li>
        <li>Order and shipping notifications tested</li>
        <li>Privacy, terms, returns and shipping policies published</li>
        <li>A full test order completes on a phone</li>
      </ul>

      <h2 id="launch">Phase 6: tell backers first, then open the store</h2>
      <p>The order of the two messages protects backer trust.</p>
      <ul className="article-checklist">
        <li>Backer update sent: why the store exists, and that rewards ship as planned</li>
        <li>Store message ready: what is available, what is a preorder, when each ships</li>
        <li>Campaign page links to the store</li>
        <li>Final pass through the <Link href="/resources/board-game-shopify-store-checklist">board game Shopify store checklist</Link></li>
      </ul>
      <p>
        For when each phase happens relative to campaign close, see the{" "}
        <Link href="/guides/kickstarter-to-shopify-launch-timeline">Kickstarter to Shopify launch timeline</Link>.
        If you want the backer updates and product content handled, our{" "}
        <Link href="/post-campaign-support">post campaign support</Link> covers
        them, and the <Link href="/done-for-you-shopify-store">store planning brief</Link>{" "}
        scopes the Shopify setup.
      </p>
    </SeoArticlePage>
  );
}

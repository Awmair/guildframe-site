import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { GuideVisual } from "../../components/GuideVisual";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify Migration Guide",
  description:
    "Move from Kickstarter to Shopify by sorting what moves, what stays and what you rebuild, including Kickstarter's official Shopify app for backer orders.",
  path: "/guides/move-from-kickstarter-to-shopify",
  kind: "article",
  publishedTime: "2026-07-16",
  modifiedTime: contentDates.moveFromKickstarter,
  keywords: [
    "move from Kickstarter to Shopify",
    "Kickstarter to Shopify migration guide",
    "Kickstarter Shopify app",
    "migrate Kickstarter products to Shopify",
  ],
});

const faqs = [
  {
    question: "Does Kickstarter have an official Shopify app?",
    answer:
      "Yes. Kickstarter, PBC listed a Kickstarter app on the Shopify App Store on July 31, 2026. It sends finalized Pledge Manager orders to Shopify, matches rewards to products and variants already in your store, and syncs tracking numbers back to Kickstarter.",
  },
  {
    question: "Can I move Kickstarter backers into Shopify as customers?",
    answer:
      "Backer orders can reach Shopify through the app for fulfilment. That is different from adding backers to your marketing list. Follow the permissions attached to the backer data, and invite backers to join your store list rather than subscribing them yourself.",
  },
  {
    question: "Does Shopify replace a pledge manager?",
    answer:
      "Usually not. The pledge manager still collects surveys, shipping details, upgrades and add ons from backers. Shopify becomes the permanent store for new buyers, and with the Kickstarter app it can also receive finalized backer orders for fulfilment.",
  },
  {
    question: "What if I used BackerKit or Gamefound instead of Kickstarter's Pledge Manager?",
    answer:
      "The Kickstarter app sends orders from Kickstarter's own Pledge Manager. If your backer orders live in another pledge manager, check that tool's own Shopify connection or export, and decide which system ships each order before you open the store.",
  },
  {
    question: "Should I copy my campaign page into Shopify?",
    answer:
      "No. Reuse the artwork, gameplay explanation and creator story, then rewrite them for a buyer who has never seen the campaign. Reward tiers become products, variants and bundles, and the campaign FAQ becomes product and policy answers.",
  },
];

export default function MoveKickstarterToShopifyGuide() {
  return (
    <SeoArticlePage
      slug="move-from-kickstarter-to-shopify"
      category="Kickstarter to Shopify"
      title="Kickstarter to Shopify Migration Guide"
      description="Sort your campaign into what moves to Shopify, what stays on Kickstarter and what you rebuild for new buyers, so backer orders and store orders never get mixed up."
      answer="To move from Kickstarter to Shopify, sort everything into three groups: what moves into Shopify, what stays on Kickstarter and what you rebuild for new buyers. Backer orders can now flow into Shopify through Kickstarter's official app, while reward tiers and campaign copy need rewriting as store products."
      published="2026-07-16"
      updated={contentDates.moveFromKickstarter}
      readTime="8 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Kickstarter app for Shopify",
          publisher: "Shopify App Store",
          href: "https://apps.shopify.com/kickstarter",
        },
        {
          label: "Kickstarter release notes",
          publisher: "Kickstarter",
          href: "https://start.kickstarter.com/kickstarter-release-notes",
        },
        {
          label: "How to transition from Kickstarter to Shopify",
          publisher: "Shopify",
          href: "https://www.shopify.com/ca/blog/how-to-transition-from-kickstarter-to-shopify",
        },
        {
          label: "Products",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products",
        },
      ]}
      toc={[
        { id: "three-groups", label: "What moves, stays or gets rebuilt" },
        { id: "kickstarter-app", label: "Kickstarter's Shopify app" },
        { id: "backer-data", label: "Backer data and permission" },
        { id: "content", label: "Rewrite campaign content" },
        { id: "announce", label: "Tell backers first" },
        { id: "next", label: "Where the rest of the work lives" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Kickstarter to Shopify migration">
        Moving a funded tabletop project from a time limited campaign to a
        permanent store. It covers which orders, products and content move into
        Shopify, which stay with the campaign, and which you rebuild for buyers
        who never saw the campaign page.
      </ArticleDefinition>
      <p>
        If your campaign closed this week, start with{" "}
        <Link href="/guides/what-happens-after-kickstarter-is-funded">what happens after a Kickstarter is funded</Link>.
        This guide picks up when you are ready to decide what Shopify takes on.
      </p>

      <h2 id="three-groups">What moves, what stays and what you rebuild</h2>
      <p>
        The fastest way to plan the move is to sort every part of the campaign
        into one of three groups. We do this on a single sheet with the creator
        before anyone opens the Shopify admin, because it settles most of the
        later questions.
      </p>
      <GuideVisual
        data={{
          kind: "compare",
          title: "Most campaign material gets rebuilt, not moved",
          columns: [
            {
              name: "Moves into Shopify",
              points: [
                "Finalized Pledge Manager orders, through Kickstarter's app",
                "Approved artwork, renders and component photos",
                "Final product names, SKUs and prices",
              ],
              verdict: "Moves once the store products exist",
            },
            {
              name: "Stays on Kickstarter",
              points: [
                "Campaign page and backer updates",
                "Backer surveys, upgrades and add ons",
                "Refunds and messages about rewards",
              ],
              verdict: "Backers keep one place to ask",
            },
            {
              name: "Rebuilt for the store",
              points: [
                "Reward tiers as products, variants and bundles",
                "Campaign FAQ as product and policy answers",
                "Delivery wording for new buyers",
              ],
              verdict: "Written for someone who never saw the campaign",
              highlight: true,
            },
          ],
          caption: "Sources: Kickstarter app listing on the Shopify App Store; Guildframe planning method.",
        }}
      />
      <p>
        Most of the work sits in the third group. A new buyer cannot read a pledge
        tier chart, so the rewards need turning into products a stranger can
        choose between. That&apos;s why the migration takes longer than people
        expect even when the artwork is final.
      </p>

      <h2 id="kickstarter-app">Using Kickstarter&apos;s Shopify app for backer orders</h2>
      <p>
        Kickstarter, PBC listed an official Kickstarter app on the Shopify App
        Store on July 31, 2026. It changes the migration because backer orders
        no longer need spreadsheet exports to reach the store that ships them.
      </p>
      <GuideVisual
        data={{
          kind: "steps",
          title: "The app only works after your store products exist",
          steps: [
            { label: "Create the products", detail: "Add every product and variant a reward contains." },
            { label: "Map each reward", detail: "Match Kickstarter rewards to Shopify products and variants." },
            { label: "Finalize backer orders", detail: "Backers complete the Pledge Manager." },
            { label: "Sync or export in segments", detail: "Send all orders, or a group at a time." },
            { label: "Ship and sync tracking", detail: "Shopify tracking numbers flow back to Kickstarter." },
          ],
          source: "Kickstarter app listing, Shopify App Store",
        }}
      />
      <p>
        The listing describes three jobs. The app sends finalized Pledge Manager
        orders to Shopify, matches rewards to existing products and variants, and
        syncs tracking numbers back to Kickstarter. It does not create your
        products, so the catalogue has to be built first.
      </p>
      <ArticleCallout>
        <strong>The honest limit:</strong> the app reads orders from
        Kickstarter&apos;s own Pledge Manager. If your backers used BackerKit,
        Gamefound or another pledge manager, compare those routes in{" "}
        <Link href="/guides/backerkit-vs-shopify-vs-gamefound">BackerKit vs Shopify vs Gamefound</Link>{" "}
        before planning the sync.
      </ArticleCallout>
      <p>
        So the app pulls store setup earlier. You need your products mapped before
        the first backer orders sync, which the{" "}
        <Link href="/guides/kickstarter-to-shopify-launch-timeline">Kickstarter to Shopify launch timeline</Link>{" "}
        puts in order around campaign close.
      </p>

      <h2 id="backer-data">Keep backer data and marketing permission separate</h2>
      <p>
        An order in Shopify is not the same as permission to email someone.
        Backer orders that arrive for fulfilment still carry the terms the backer
        agreed to on Kickstarter.
      </p>
      <ArticleTable
        caption="What each kind of backer information is for"
        headers={["Information", "Use it for", "Do not use it for"]}
        rows={[
          ["Synced Pledge Manager order", "Picking, packing and tracking the reward", "Adding the backer to a store newsletter"],
          ["Backer report", "Backer and fulfilment management", "Building a customer list without consent"],
          ["Store signup", "Store news, restocks and new releases", "Changing what a backer was promised"],
        ]}
      />
      <p>
        We invite backers to the store through a Kickstarter update instead. They
        choose to follow, and your list starts with people who asked to hear from you.
      </p>

      <h2 id="content">Rewrite campaign content for store buyers</h2>
      <p>
        A campaign page sells a promise to people who arrive with context. A store
        page sells a finished box to someone who may have found it through search,
        so every asset needs a new job.
      </p>
      <ArticleTable
        caption="Where each campaign asset goes in the store"
        headers={["Campaign asset", "Store destination", "What changes"]}
        rows={[
          ["Hero art and promise", "Homepage or collection header", "Shorter, with a direct path to the products"],
          ["Reward tiers", "Products, variants and bundles", "Organised around buyer choices, not pledge levels"],
          ["How to play", "Product page and a rules page", "Keep the clearest explanation, drop the campaign repetition"],
          ["Creator story", "About page", "Keep the trust, add what you are making next"],
          ["Campaign FAQ", "Product FAQ and policy pages", "Updated for delivery, returns and stock"],
          ["Stretch goal graphic", "Contents list on the product page", "Stretch goal items listed as box contents"],
        ]}
      />
      <p>
        Turning reward tiers into products is its own decision, covered in{" "}
        <Link href="/guides/sell-board-game-expansions-add-ons-shopify">how to sell expansions, add ons and bundles on Shopify</Link>.
        The page each product lands on is covered by the{" "}
        <Link href="/resources/board-game-product-page-checklist">board game product page checklist</Link>.
      </p>

      <h2 id="announce">Tell backers about the store before new buyers</h2>
      <p>
        Backers and new buyers need different messages, and the order matters.
        A backer who learns about the store from an ad may think retail buyers
        are being shipped first.
      </p>
      <ol>
        <li><strong>Backer update first.</strong> Say why the store exists, that rewards ship as planned and where to ask about a pledge.</li>
        <li><strong>Store page second.</strong> Say what is available now, what is a preorder and when each ships.</li>
        <li><strong>One support route each.</strong> Pledge questions go to the campaign; store orders go to store support.</li>
      </ol>
      <p>
        Clear timing protects trust better than clever launch copy, so we write
        the backer update before the store announcement.
      </p>

      <h2 id="next">Where the rest of the work lives</h2>
      <p>
        This guide covers the move itself. The build, the dates and the final
        checks each have their own page, so you can work through them in order.
      </p>
      <ul>
        <li>The order of the work around campaign close: <Link href="/guides/kickstarter-to-shopify-launch-timeline">launch timeline</Link>.</li>
        <li>A task list you can tick off: <Link href="/resources/kickstarter-to-shopify-migration-checklist">Kickstarter to Shopify migration checklist</Link>.</li>
        <li>What the theme has to show: <Link href="/shopify-theme-for-board-games">Shopify theme setup for board games</Link>.</li>
        <li>The final store test: <Link href="/resources/board-game-shopify-store-checklist">board game Shopify store checklist</Link>.</li>
      </ul>
      <p>
        Doing the move yourself is realistic when the catalogue is small and you
        have time to rewrite the content. When you would rather hand over the
        backer communication and product content, our{" "}
        <Link href="/post-campaign-support">post campaign support</Link>{" "}
        covers it, with optional store setup scoped through the{" "}
        <Link href="/done-for-you-shopify-store">done for you Shopify store</Link> brief.
      </p>
    </SeoArticlePage>
  );
}

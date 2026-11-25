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
  title: "Kickstarter to Shopify Launch Timeline",
  description:
    "When to open a Shopify store after Kickstarter, with the order of work from campaign close to the first store order and the check that ends each stage.",
  path: "/guides/kickstarter-to-shopify-launch-timeline",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.kickstarterToShopifyTimeline,
  keywords: [
    "Kickstarter to Shopify timeline",
    "when to launch Shopify after Kickstarter",
    "when to open a store after Kickstarter",
    "post Kickstarter store launch plan",
  ],
});

const faqs = [
  {
    question: "When should I open my Shopify store after Kickstarter?",
    answer:
      "Open it for orders when you can ship a new order without using stock reserved for backers. For most creators that comes after the pledge manager locks and stock is allocated. Build the store earlier, because Kickstarter's Shopify app needs products in place before backer orders sync.",
  },
  {
    question: "When should I start building the store?",
    answer:
      "Start planning while the campaign is live and build once products and prices are final, usually during the pledge manager stage. If you will ship backer rewards through Shopify with the Kickstarter app, the products and variants must exist before you map rewards.",
  },
  {
    question: "Should the store open before backers receive their rewards?",
    answer:
      "It can, as long as delivery timing is explicit and nobody could reasonably think store buyers are shipping ahead of backers. Many creators open with a signup or clearly labelled preorders first and switch to in stock orders after rewards ship.",
  },
  {
    question: "How long does a Shopify store take after Kickstarter?",
    answer:
      "There is no fixed interval after campaign close. The build depends on final assets, catalogue size, integrations and review speed, and the opening depends on stock and fulfilment. We agree timing after reviewing the catalogue and the delivery plan.",
  },
];

export default function KickstarterToShopifyTimelinePage() {
  return (
    <SeoArticlePage
      slug="kickstarter-to-shopify-launch-timeline"
      category="Post campaign launch planning"
      title="Kickstarter to Shopify Launch Timeline"
      description="Build the store while the pledge manager is open, then open it for orders once backer stock is set aside. Here is the order of work and the check that ends each stage."
      answer="Open your Shopify store for orders once backer stock is set aside and you can ship a new order without delaying a reward, which for most creators comes after the pledge manager locks. Build it earlier, because Kickstarter's Shopify app needs your products in place before backer orders can sync."
      published="2026-07-17"
      updated={contentDates.kickstarterToShopifyTimeline}
      readTime="7 minute read"
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
          label: "How can I use my project's backer report?",
          publisher: "Kickstarter Support",
          href: "https://help.kickstarter.com/hc/en-us/articles/48619766244251-How-can-I-use-my-project-s-backer-report",
        },
        {
          label: "Placing a test order",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/checkout-settings/test-orders",
        },
      ]}
      toc={[
        { id: "timeline", label: "The timeline at a glance" },
        { id: "campaign-live", label: "While the campaign is live" },
        { id: "pledge-manager", label: "While the pledge manager is open" },
        { id: "orders-lock", label: "When backer orders lock" },
        { id: "opening", label: "Choose how the store opens" },
        { id: "launch-gate", label: "The final gate" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Launch timeline">
        The order of work that takes a funded tabletop project from campaign close
        to its first store order. It runs on milestones, not calendar weeks,
        because every campaign reaches them at a different pace.
      </ArticleDefinition>

      <h2 id="timeline">The Kickstarter to Shopify timeline at a glance</h2>
      <p>
        We plan the store against campaign milestones rather than a countdown from
        close day. Each stage ends with one check, and the next stage waits until
        that check passes.
      </p>
      <GuideVisual
        data={{
          kind: "timeline",
          title: "The store is built early but opens late",
          events: [
            { when: "Campaign live", label: "Plan the catalogue", detail: "List what stays on sale after the campaign." },
            { when: "Close day", label: "Lock products and prices", detail: "Final names, SKUs and variants agreed." },
            { when: "Pledge manager open", label: "Build the store", detail: "Products must exist before rewards can be mapped.", highlight: true },
            { when: "Backer orders lock", label: "Sync and allocate", detail: "Backer orders reach Shopify; reward stock is set aside." },
            { when: "Stock confirmed", label: "Open for orders", detail: "Signup, preorders or in stock, whichever is true.", highlight: true },
            { when: "After opening", label: "Watch support and stock", detail: "Fix issues in the first days." },
          ],
          caption: "Milestones, not fixed dates. Each campaign moves through them at its own pace.",
          source: "Kickstarter app listing, Shopify App Store; Guildframe planning method",
        }}
      />
      <p>
        The shape surprises people. The store build moves earlier than you would
        guess, and the opening moves later, so there is often a stretch where the
        store is finished but closed. That&apos;s normal and it protects backers.
      </p>

      <h2 id="campaign-live">While the campaign is live: plan, do not build</h2>
      <p>
        During the campaign, your attention belongs to backers. So we only do the
        planning work that will not change as stretch goals are reached.
      </p>
      <ul>
        <li>List the products that stay on sale after the campaign.</li>
        <li>Mark campaign only rewards that will never appear in the store.</li>
        <li>Reserve the domain and name the person who owns the Shopify account.</li>
        <li>Collect final logos, box renders and component photos as they are approved.</li>
      </ul>
      <p>
        Leave product entry until close day, because a late stretch goal can change
        a contents list you already typed in.
      </p>

      <h2 id="pledge-manager">While the pledge manager is open: build the store</h2>
      <p>
        This is the stage that moved in 2026. Kickstarter&apos;s official Shopify
        app, listed on July 31, 2026, matches rewards to Shopify products and
        variants that already exist. So if Shopify will ship your backer rewards,
        the catalogue has to be in place while backers are still completing the
        Pledge Manager.
      </p>
      <ArticleTable
        caption="What to finish while backers complete the pledge manager"
        headers={["Work", "Why it belongs here", "Done when"]}
        rows={[
          ["Products and variants", "Rewards can only map to products that exist", "Every item a reward contains is in Shopify"],
          ["Reward mapping", "The app needs to know what each reward ships", "Each reward points to its products"],
          ["Shipping zones and taxes", "Backer orders and store orders share them", "Rates match the delivery plan"],
          ["Store pages, kept closed", "Buyers should not find a half built store", "Pages ready for review, password still on"],
        ]}
      />
      <p>
        Kickstarter has also added Pledge Manager changes this year: backer self
        serve add ons from August 20, 2026 and creator edits to backer orders from
        October 28, 2026. Both mean orders can still change in this stage, so we
        sync once orders are final rather than on the first day.
      </p>

      <h2 id="orders-lock">When backer orders lock: sync and allocate stock</h2>
      <p>
        Once backer orders are finalized, they can be sent to Shopify in one go or
        in segments. This is the moment to count what is left for the store.
      </p>
      <ol>
        <li><strong>Sync or export backer orders.</strong> Send them all, or a region at a time if fulfilment ships in waves.</li>
        <li><strong>Set aside reward stock.</strong> Count backer units first, then spares for damage and replacements.</li>
        <li><strong>Count store stock.</strong> Only what remains becomes store inventory.</li>
        <li><strong>Confirm tracking.</strong> Check that a test shipment&apos;s tracking number reaches Kickstarter.</li>
      </ol>
      <p>
        If your pledge manager is not Kickstarter&apos;s own, this stage still
        happens, but through that tool&apos;s export or connection instead.
      </p>

      <h2 id="opening">Choose how the store opens before choosing the date</h2>
      <p>
        Your stock position decides what the store can honestly sell, and that
        decides the opening date. There are three ways to open.
      </p>
      <GuideVisual
        data={{
          kind: "compare",
          title: "What the store sells depends on where your stock is",
          columns: [
            {
              name: "Signup only",
              points: ["Stock not confirmed yet", "Product pages with an email signup", "No payment taken"],
              verdict: "Safe from close day",
            },
            {
              name: "Preorders",
              points: ["Delivery estimate agreed", "Clear preorder label by the price", "Cancellation terms written"],
              verdict: "Once preorder terms are ready",
            },
            {
              name: "In stock",
              points: ["Store stock counted after rewards", "Ships without touching backer units", "Normal delivery promise"],
              verdict: "Once backer stock is set aside",
              highlight: true,
            },
          ],
          source: "Guildframe planning method",
        }}
      />
      <p>
        Late pledges stay in the campaign workflow, so compare{" "}
        <Link href="/guides/kickstarter-late-pledges-vs-shopify">late pledges with Shopify orders</Link>{" "}
        before sending anyone to another checkout. If you are taking preorders, the{" "}
        <Link href="/guides/sell-board-game-preorders-on-shopify">board game preorder guide</Link>{" "}
        covers payment timing and stock rules.
      </p>

      <h2 id="launch-gate">The final gate before the first store order</h2>
      <p>
        We run one last set of questions before switching off the store password.
        Each has a plain answer when the store is ready.
      </p>
      <ArticleTable
        caption="Conditions to check before accepting public orders"
        headers={["Question", "Ready when"]}
        rows={[
          ["What can a buyer purchase?", "Products, prices, editions and availability are final"],
          ["When will it ship?", "The product page and the shipping policy say the same thing"],
          ["What happens to backers?", "Reward orders are tracked separately and explained in an update"],
          ["Can a buyer finish checkout?", "Phone and desktop test orders pass and test mode is off"],
          ["Who answers questions?", "One store support route and one campaign support route are live"],
        ]}
      />
      <ArticleCallout>
        For the page by page store test, use the{" "}
        <Link href="/resources/board-game-shopify-store-checklist">board game Shopify store checklist</Link>.
        For what moves from the campaign and what stays, read the{" "}
        <Link href="/guides/move-from-kickstarter-to-shopify">Kickstarter to Shopify migration guide</Link>.
      </ArticleCallout>
      <p>
        If you want help running this timeline, our{" "}
        <Link href="/post-campaign-support">post campaign support</Link>{" "}
        covers backer updates and product content, and the{" "}
        <Link href="/done-for-you-shopify-store">store planning brief</Link>{" "}
        scopes optional Shopify setup. Send the campaign link, fulfilment status
        and product list, and we will agree the dates with you.
      </p>
    </SeoArticlePage>
  );
}

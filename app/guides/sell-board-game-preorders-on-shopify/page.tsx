import Link from "next/link";
import { contentDates } from "../../content-dates";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "How to Sell Board Game Preorders on Shopify",
  description:
    "Plan board game preorders on Shopify after crowdfunding with clear delivery dates, inventory rules, customer communication and campaign boundaries.",
  path: "/guides/sell-board-game-preorders-on-shopify",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.boardGamePreorders,
  keywords: [
    "board game preorders Shopify",
    "sell board game preorders online",
    "Shopify preorders after Kickstarter",
  ],
});

const faqs = [
  {
    question: "Can Shopify accept preorders for a board game?",
    answer:
      "Yes. Shopify supports preorder purchase options through compatible apps. The product page and checkout flow should clearly state that the item is a preorder, when payment occurs and the expected fulfillment timing.",
  },
  {
    question: "Should I use Kickstarter Late Pledges or Shopify preorders?",
    answer:
      "Use Kickstarter Late Pledges when the buyer should remain in the campaign reward and backer workflow. Use Shopify when the order belongs in your permanent retail catalog and operating system. Some creators use both with explicit inventory and communication boundaries.",
  },
  {
    question: "Can preorder bundles use Shopify Bundles?",
    answer:
      "Shopify currently states that bundles are incompatible with purchase options including preorders. Confirm current compatibility before designing a preorder bundle, and use a suitable alternative only after testing inventory and fulfillment behavior.",
  },
  {
    question: "Is allowing sales after stock reaches zero enough to set up preorders?",
    answer:
      "That inventory setting allows continued selling, but it does not define your preorder payment terms, shipping promise or shared stock limits. Shopify's preorder purchase options require a compatible app and currently support Shopify Payments or PayPal Express. Test the complete setup before opening sales.",
  },
  {
    question: "How much production stock can I offer as preorders?",
    answer:
      "Start with a confirmed production plan, subtract backer rewards, replacement reserves and other commitments, then divide the remaining allocation between sales channels. Keep incoming stock separate from units ready to ship and review orders against each channel's cap.",
  },
];

export default function SellBoardGamePreordersOnShopifyPage() {
  return (
    <SeoArticlePage
      slug="sell-board-game-preorders-on-shopify"
      category="Board game preorders"
      title="How to Sell Board Game Preorders on Shopify After Crowdfunding"
      description="Set up board game preorders on Shopify with clear payment timing, expected delivery and stock reserved for existing backers."
      answer="To sell board game preorders on Shopify, choose a compatible preorder app, confirm payment timing and reserve stock for backer rewards. Label each preorder near the price and purchase button. Test checkout, notifications, cancellation and refunds before taking orders."
      published="2026-07-17"
      updated={contentDates.boardGamePreorders}
      readTime="8 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Purchase options",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products/purchase-options",
        },
        {
          label: "Preorder apps, payments and requirements",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products/purchase-options/pre-orders",
        },
        {
          label: "Selling when tracked stock reaches zero",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/inventory-and-locations/setup/selling-when-out-of-stock",
        },
        {
          label: "Eligibility and considerations for product bundles",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations",
        },
        {
          label: "Late Pledges Common Questions",
          publisher: "Kickstarter Support",
          href: "https://help.kickstarter.com/hc/en-us/articles/24875599658779-Late-Pledges-Common-Questions",
        },
      ]}
      toc={[
        { id: "choose-channel", label: "Choose the order channel" },
        { id: "product", label: "Build the preorder product" },
        { id: "inventory", label: "Protect inventory" },
        { id: "stock-example", label: "Worked stock allocation" },
        { id: "copy", label: "Write clear preorder copy" },
        { id: "mixed-cart", label: "Explain mixed orders" },
        { id: "test", label: "Test the order flow" },
        { id: "stock-template", label: "Download the stock plan" },
        { id: "launch", label: "Launch and communicate" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Shopify preorder">
        A purchase option for an item that is not ready for immediate fulfillment.
        Shopify states that preorders are configured through a compatible purchase
        option app, so the exact payment and management behavior depends on that setup.
      </ArticleDefinition>

      <h2 id="choose-channel">Choose where the order should live</h2>
      <p>
        A late pledge and a retail preorder can look similar to a buyer, but they
        belong to different operating systems. Kickstarter Late Pledges extend the
        campaign and add the buyer to Kickstarter&apos;s backer flow. Shopify preorders
        belong in the permanent store catalog, customer record and order system.
      </p>
      <ArticleTable
        caption="Late pledge and Shopify preorder roles"
        headers={["Decision", "Kickstarter Late Pledge", "Shopify preorder"]}
        rows={[
          ["Buyer context", "Joining a funded campaign", "Ordering from the permanent store"],
          ["Offer structure", "Reward tiers and campaign add ons", "Products, variants and retail offers"],
          ["Customer record", "Backer and campaign systems", "Shopify customer and order systems"],
          ["Best fit", "Campaign continuation", "Ongoing preorder and retail catalog"],
          ["Main risk", "Prolonging campaign complexity", "Confusing retail orders with backer obligations"],
        ]}
      />
      <p>
        For a deeper channel decision, read <Link href="/guides/kickstarter-late-pledges-vs-shopify">Kickstarter Late Pledges vs Shopify</Link>.
      </p>

      <h2 id="product">Build a preorder product customers can understand</h2>
      <ol>
        <li><strong>Name the offer:</strong> include the game and edition without relying on campaign tier names.</li>
        <li><strong>State what is included:</strong> list components, language, edition, exclusives and required base products.</li>
        <li><strong>Choose variants carefully:</strong> use variants only when the buyer is selecting a true version of the same product.</li>
        <li><strong>Configure the purchase option:</strong> document whether payment is collected now, later or in stages.</li>
        <li><strong>Publish the delivery window:</strong> use a date or honest range and identify what could change it.</li>
      </ol>
      <p>
        Shopify&apos;s current preorder guidance requires a preorder app and supports
        merchants using Shopify Payments or PayPal Express. Confirm that your store,
        payment method and app support the collection schedule you want. A setting
        that allows sales after stock reaches zero does not set those payment terms
        or write the customer&apos;s delivery promise for you.
      </p>
      <ArticleCallout>
        <strong>Compatibility warning:</strong> Shopify currently says product
        bundles are incompatible with purchase options such as preorders. Verify
        current platform and app behavior before promising a preorder bundle.
      </ArticleCallout>

      <h2 id="inventory">Protect backer and preorder inventory</h2>
      <p>
        Decide whether preorder units come from the same manufacturing allocation as
        backer rewards. If they do, reserve backer quantities first and include a
        realistic buffer for replacements, damage and support cases. If they do not,
        use separate inventory tracking or an explicit operational report.
      </p>
      <ul className="article-checklist">
        <li>Backer reward quantities are reserved before new sales open</li>
        <li>Each edition and language has a stable SKU</li>
        <li>Replacement and damage stock is protected</li>
        <li>Preorder limits match production and shipping capacity</li>
        <li>The team knows when to stop accepting new orders</li>
      </ul>

      <h2 id="stock-example">Work through a shared production allocation</h2>
      <p>
        This hypothetical example covers one edition and language. A creator plans
        to produce 1,500 games, with 1,100 already promised to backers. The quantities
        below are invented to show the calculation. They are not a recommended
        reserve or a record of stock ready to ship.
      </p>
      <ArticleTable
        caption="Illustrative production allocation for one edition"
        headers={["Allocation", "Units", "Treatment"]}
        rows={[
          ["Planned production", "1,500", "Confirm with the supplier; keep separate from received stock"],
          ["Existing backer rewards", "1,100", "Reserve before opening new sales"],
          ["Replacement and damage reserve", "75", "Protect from normal sales; choose your own reserve"],
          ["Existing retailer commitments", "100", "Reserve against the same production run"],
          ["Remaining for new sales", "225", "1,500 minus 1,100 minus 75 minus 100"],
        ]}
      />
      <p>
        The creator could allocate 125 of those units to Shopify preorders and 100
        to late pledges. After 90 store orders and 60 late pledges, 75 remain: 35 in
        the store allocation and 40 in late pledges. Check both order records before
        moving an unsold allocation between channels. Giving each channel the full
        225 units would promise more than the production plan allows.
      </p>
      <p>
        If the systems do not share stock, name someone to reconcile them and set
        the review frequency. Apply the calculation separately to each edition and
        language. When cartons arrive, replace the production estimate with the
        usable quantity the warehouse confirms before offering immediate dispatch.
      </p>

      <h2 id="copy">Write preorder copy at the buying point</h2>
      <p>
        Do not rely on a policy page that the customer may never open. Repeat the
        essential information near the price, purchase button, cart and confirmation.
        Use the word preorder, explain payment timing and state the expected ship window.
      </p>
      <ArticleTable
        caption="Preorder information placement"
        headers={["Location", "Information to show"]}
        rows={[
          ["Product title or badge", "This item is a preorder"],
          ["Beside the purchase action", "Expected shipping window and payment timing"],
          ["Product details", "Contents, edition, language and known dependencies"],
          ["Cart", "Preorder status and whether mixed orders ship together"],
          ["Confirmation email", "Order summary, expected timing and update channel"],
          ["Policy page", "Cancellation, refund, delay and address change rules"],
        ]}
      />

      <h2 id="mixed-cart">Explain what happens to an order with both kinds of stock</h2>
      <p>
        Suppose a customer orders a card deck that is available now and an expansion
        that is still in production. Decide whether you will hold the deck and send
        both together or support separate shipments. Confirm any extra shipping
        charge before checkout. The app, warehouse instructions and confirmation
        email need to follow the same decision.
      </p>
      <ArticleCallout>
        <p>
          Example wording for a shop that holds the whole order: &quot;This order
          includes an available card deck and a preorder expansion. We will send
          both together when the expansion is ready. Expected dispatch:
          [your confirmed window]. [State the actual payment timing.] If you want
          the deck sooner, [explain the separate order or shipment option you
          support, including any extra shipping charge].&quot;
        </p>
      </ArticleCallout>
      <p>
        Replace every bracketed field and use the wording only when the checkout
        and fulfilment process support it. State whether your estimate refers to
        dispatch or arrival. A confirmation that says an order has been received
        should not suggest that the preorder is already on its way.
      </p>

      <h2 id="test">Test the complete preorder flow</h2>
      <p>
        Place test orders for every important edition, region and payment behavior.
        Confirm the customer facing wording, order tags, inventory changes,
        notifications, taxes and fulfillment status. Test a cancellation and refund
        before the public launch.
      </p>
      <ul>
        <li>Phone navigation and selectors are usable with touch and keyboard.</li>
        <li>The purchase action does not imply immediate shipping.</li>
        <li>Mixed in stock and preorder carts behave as stated.</li>
        <li>Support can identify preorder orders quickly.</li>
        <li>Analytics distinguishes preorder product and checkout activity.</li>
      </ul>
      <p>
        Include the last allowed preorder and the next order after the cap in the
        test. Check a mixed cart, a cancellation and any payment collected later.
        Record what happens to the stock allocation, customer message and fulfilment
        status in each case. An app&apos;s success message alone does not establish
        that the backer reserve stayed protected.
      </p>

      <h2 id="stock-template">Download the stock plan and order review sheet</h2>
      <p>
        Use the <a href="/downloads/buyer-guides/board-game-preorder-stock-plan.txt" download>
          free preorder stock plan (TXT)
        </a> to record production, backer reserves, channel caps and the order cases
        to check. It includes the worked allocation and mixed cart wording above.
        Save and edit it without joining a mailing list.
      </p>

      <h2 id="launch">Launch and communicate like a retailer</h2>
      <p>
        Announce the permanent store without implying that it replaces campaign
        updates. Tell backers whether the store affects their reward. Tell new buyers
        exactly which update channel will carry production or shipping changes.
      </p>
      <p>
        Shopify gives the preorder an ongoing customer and order context. A
        <Link href="/shopify-theme-for-board-games"> board game Shopify theme</Link>
        should make the edition, included components and delivery status clear on
        mobile before adding visual complexity.
      </p>
    </SeoArticlePage>
  );
}

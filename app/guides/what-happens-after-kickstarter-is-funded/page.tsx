import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";
import {contentDates} from "../../content-dates";
import { GuideVisual } from "../../components/GuideVisual";

export const metadata = pageMetadata({
  title: "What Happens After Your Kickstarter Is Funded?",
  description:
    "What happens after a Kickstarter is funded: a dated timeline for payment collection, payout, the pledge manager, production, delivery and new sales.",
  path: "/guides/what-happens-after-kickstarter-is-funded",
  kind: "article",
  publishedTime: "2026-07-18",
  modifiedTime: contentDates.whatHappensAfterKickstarter,
  keywords: [
    "what happens after a Kickstarter project is funded",
    "Kickstarter after funding",
    "what happens when Kickstarter ends",
  ],
});

const faqs = [
  {
    question: "How soon does Kickstarter send the money after funding?",
    answer:
      "Kickstarter collects pledges for 14 calendar days after the deadline, then starts the payout. Kickstarter says it can take another 3 to 14 business days for the funds to appear, depending on your bank. If nothing has arrived 28 days after the end date, check with your bank and then contact Kickstarter Support.",
  },
  {
    question: "When should I open the pledge manager?",
    answer:
      "Once your reward list, shipping prices and survey questions are settled. Kickstarter's Pledge Manager is only available after launch, you end Late Pledges before opening it, its review can take up to 5 business days, and it must stay open for at least 3 weeks.",
  },
  {
    question: "What is new in Kickstarter's Pledge Manager in 2026?",
    answer:
      "The 2026 updates include VAT options, address locking by segment for shipping in waves, multiple tracking numbers, digital reward delivery, backer self serve add ons and creator order editing. A free Kickstarter app for Shopify, listed since July 31, 2026, sends finalized orders to a Shopify store.",
  },
  {
    question: "Can people still buy after a Kickstarter campaign ends?",
    answer:
      "They may be able to use Kickstarter Late Pledges if the creator enabled eligible rewards, place a clearly labeled preorder or buy through the creator's permanent store. Availability, pricing and delivery timing should be consistent across every active route.",
  },
  {
    question: "Should I open a Shopify store immediately after Kickstarter?",
    answer:
      "You can prepare the store immediately, but accept orders only when the products, prices, delivery language, inventory rules and customer support process are accurate. New store orders should remain operationally distinct from backer fulfillment.",
  },
  {
    question: "Does Shopify replace Kickstarter or a pledge manager?",
    answer:
      "No. Kickstarter remains the campaign and backer communication record. A pledge manager can handle surveys, upgrades and fulfillment information. Shopify is the permanent catalog and checkout for ongoing commerce.",
  },
];

export default function WhatHappensAfterKickstarterPage() {
  return (
    <SeoArticlePage
      slug="what-happens-after-kickstarter-is-funded"
      category="After Kickstarter funding"
      title="What Happens After Your Kickstarter Is Funded?"
      description="After Kickstarter funding, collect payments and backer details, prepare production and deliver the rewards. This guide explains the sequence and when to plan new sales."
      answer="After your Kickstarter is funded, Kickstarter spends 14 calendar days collecting pledges, then starts the payout, which can take another 3 to 14 business days to reach your bank. Next you open a pledge manager to confirm backer choices and addresses, then produce and ship the rewards, keeping any late pledges or store sales on separate records."
      published="2026-07-18"
      updated={contentDates.whatHappensAfterKickstarter}
      readTime="9 minute read"
      faqs={faqs}
      sources={[
        {
          label: "If my project is successfully funded, how do I receive my funds?",
          publisher: "Kickstarter Support",
          href: "https://help.kickstarter.com/hc/en-us/articles/360010120934-If-my-project-is-successfully-funded-how-do-I-receive-my-funds",
        },
        {
          label: "How can I use the downloaded backer report?",
          publisher: "Kickstarter Support",
          href: "https://help.kickstarter.com/hc/en-us/articles/115005135894-How-can-I-use-the-downloaded-backer-report",
        },
        {
          label: "Late Pledges Common Questions",
          publisher: "Kickstarter Support",
          href: "https://help.kickstarter.com/hc/en-us/articles/24875599658779-Late-Pledges-Common-Questions",
        },
        {
          label: "How do I use Kickstarter's Pledge Manager?",
          publisher: "Kickstarter Help Center",
          href: "https://help.kickstarter.com/en-us/articles/16236383-how-do-i-use-kickstarter-s-pledge-manager",
        },
        {
          label: "Kickstarter release notes",
          publisher: "Kickstarter",
          href: "https://start.kickstarter.com/kickstarter-release-notes",
        },
        {
          label: "Kickstarter app listing",
          publisher: "Shopify App Store",
          href: "https://apps.shopify.com/kickstarter",
        },
        {
          label: "How to transition from Kickstarter to Shopify",
          publisher: "Shopify",
          href: "https://www.shopify.com/au/blog/how-to-transition-from-kickstarter-to-shopify",
        },
        {
          label: "General checklist for starting a new Shopify store",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/new-to-shopify-checklists/general-checklist",
        },
      ]}
      toc={[
        { id: "first-days", label: "What happens first" },
        { id: "backers", label: "Backer data and communication" },
        { id: "pledge-manager-2026", label: "Pledge manager in 2026" },
        { id: "fulfillment", label: "Production and fulfillment" },
        { id: "sales", label: "Ways to keep selling" },
        { id: "store", label: "When to build the store" },
        { id: "roadmap", label: "Post funding roadmap" },
        { id: "help", label: "Get help after funding" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="After Kickstarter funding">
        The period after a successful campaign closes, when the project moves
        from pledges into payment collection, backer operations, production,
        fulfillment and longer term commerce.
      </ArticleDefinition>

      <h2 id="first-days">What happens in the first days after funding</h2>
      <p>
        Kickstarter begins collecting the pledged amounts when a successfully
        funded campaign ends. Some payments can fail, so the backer report and
        collected total may change while Kickstarter asks affected backers to
        resolve payment problems.
      </p>
      <p>
        Kickstarter says it spends a 14 calendar day window after the deadline
        collecting and processing pledges, then initiates the payout. It can take
        another 3 to 14 business days for the money to appear, depending on your
        bank. So treat the final collected amount, not the public campaign total,
        as the basis for production and cash flow decisions.
      </p>
      <GuideVisual
        data={{
          kind: "timeline",
          title: "The first month after funding runs on Kickstarter's clock",
          events: [
            { when: "Day 0", label: "Campaign ends", detail: "Kickstarter starts charging pledges" },
            { when: "Days 1 to 14", label: "Collection window", detail: "Backers with failed payments are asked to fix them" },
            { when: "Day 14", label: "Payout initiated", detail: "One transaction to one bank account", highlight: true },
            { when: "3 to 14 business days later", label: "Funds arrive", detail: "Timing depends on your bank" },
            { when: "Day 28", label: "Still nothing?", detail: "Check your bank, then contact Kickstarter" },
            { when: "When rewards are settled", label: "Pledge manager opens", detail: "Review up to 5 business days, open 3 weeks or more" },
            { when: "Following months", label: "Production and delivery", detail: "Samples, freight, fulfillment, updates" },
          ],
          caption: "Calendar days after the campaign deadline unless marked. Production timing depends on your suppliers.",
          source: "Kickstarter Help Center, checked November 25, 2026",
        }}
      />
      <ArticleCallout>
        <strong>Do not spend against the headline total too early.</strong> First
        reconcile collected pledges, platform fees, payment processing, tax,
        production, freight, fulfillment and contingency.
      </ArticleCallout>

      <h2 id="backers">Collect backer choices and delivery details</h2>
      <p>
        Once the project has ended successfully, the creator can use the backer
        report and the selected survey or pledge manager workflow to organize
        reward choices, add ons, shipping destinations and fulfillment status.
        Kickstarter notes that report data can continue changing as backers
        complete surveys, update addresses or receive refunds.
      </p>
      <ol>
        <li><strong>Confirm the final pledge records.</strong> Separate collected and dropped pledges before ordering inventory.</li>
        <li><strong>Choose the backer workflow.</strong> Decide where surveys, upgrades, address changes and shipping payments will be handled.</li>
        <li><strong>Publish a clear update.</strong> Tell backers what happens next, when you need information and where support questions should go.</li>
        <li><strong>Protect personal data.</strong> Use backer information for the permitted campaign and fulfillment purpose; do not assume it grants marketing consent.</li>
      </ol>

      <h2 id="pledge-manager-2026">What Kickstarter&apos;s Pledge Manager does in 2026</h2>
      <p>
        Kickstarter opened its own Pledge Manager to all creators in May 2025, and it
        handles surveys, add ons, shipping charges and tax in one place. There is
        no upfront cost, and Kickstarter deducts its usual fees from payments made
        there. It opens only after your project has launched, you end Late Pledges
        before opening it, and it must stay open for at least 3 weeks.
      </p>
      <p>
        The 2026 updates matter for tabletop fulfillment in particular. Here are the
        ones worth checking first for a funded game.
      </p>
      <GuideVisual
        data={{
          kind: "checklist",
          title: "Six 2026 Pledge Manager features worth checking before you open it",
          groups: [
            {
              name: "Shipping",
              items: [
                "Lock addresses by segment to ship in waves (June 1)",
                "Add several tracking numbers to one pledge (March 31)",
                "Send finalized orders to Shopify with Kickstarter's free app (July 31)",
              ],
            },
            {
              name: "Orders and tax",
              items: [
                "Let backers add add ons after submitting (August 20)",
                "Edit a backer's order yourself (October 28)",
                "Choose how VAT is handled, including whether Kickstarter collects it (April 13)",
              ],
            },
          ],
          caption: "Dates are 2026 release dates.",
          source: "Kickstarter release notes and the Shopify App Store listing",
        }}
      />
      <p>
        Kickstarter&apos;s tool is not the only option. Our <Link href="/guides/backerkit-vs-shopify-vs-gamefound">BackerKit vs Shopify vs Gamefound comparison</Link> shows
        when an outside pledge manager or a store makes more sense.
      </p>

      <h2 id="fulfillment">Produce and deliver the rewards</h2>
      <p>
        After funding, finalize files, place production orders, inspect samples, arrange freight and collect missing delivery details. Keep a record of each reward, extra, quantity, address and fulfillment status.
      </p>
      <ArticleTable
        caption="The post funding operating sequence"
        headers={["Stage", "Creator responsibility", "Backer message"]}
        rows={[
          ["Payment collection", "Reconcile collected and dropped pledges", "Explain when the next update will arrive"],
          ["Survey or pledge manager", "Collect choices, addresses, shipping and approved upgrades", "Give one clear action and deadline"],
          ["Production", "Lock quantities, files, suppliers and quality checks", "Share material changes, not artificial activity"],
          ["Freight and fulfillment", "Track inbound inventory and reward dispatch", "State realistic regional timing"],
          ["Completion", "Resolve exceptions, replacements and remaining support", "Confirm delivery and ongoing contact routes"],
        ]}
      />

      <h2 id="sales">Three ways to keep selling after Kickstarter</h2>
      <p>
        People can discover the campaign after it closes, and existing backers may
        want upgrades or additional products. The right sales route depends on the
        promise being made.
      </p>
      <ArticleTable
        caption="Post Kickstarter sales routes"
        headers={["Route", "Use it for", "Avoid it when"]}
        rows={[
          ["Kickstarter Late Pledges", "Extending eligible campaign rewards", "The reward or production allocation is no longer reliable"],
          ["Preorders", "Selling a defined future product with clear timing", "The contents or delivery window are still too uncertain"],
          ["Shopify store", "Building a permanent catalog and buying process", "New retail orders cannot be separated from backer fulfillment"],
        ]}
      />
      <p>
        The detailed
        <Link href="/guides/kickstarter-late-pledges-vs-shopify"> selling after Kickstarter comparison</Link> explains how to choose between late pledges, preorders and Shopify without presenting conflicting offers.
      </p>

      <h2 id="store">When to build a permanent online store</h2>
      <p>
        Begin preparing the store as soon as product facts and final campaign
        assets are stable. Publishing sales can happen later. Shopify recommends
        organizing products, choosing a suitable theme, configuring tax and
        shipping information, testing orders and finalizing policies before the
        storefront goes public.
      </p>
      <p>
        The permanent store should translate campaign reward logic into customer
        language. Core games, deluxe editions, expansions, bundles and accessories
        need understandable products and collections rather than a copied pledge
        chart.
      </p>
      <ul>
        <li>Reuse final campaign art, product explanations and creator story.</li>
        <li>Separate campaign only rewards from the permanent catalog.</li>
        <li>State preorder or delivery timing beside every purchase action.</li>
        <li>Test checkout, shipping, tax, email and inventory behavior.</li>
        <li>Tell backers whether the store changes anything about their fulfillment.</li>
      </ul>
      <p>
        Use the <Link href="/guides/move-from-kickstarter-to-shopify">Kickstarter to Shopify migration guide</Link> for the complete storefront implementation sequence. Decide whether to build the store yourself or hire a developer after reviewing your catalog and operating requirements.
      </p>

      <h2 id="roadmap">Steps after your Kickstarter is funded</h2>
      <ol className="article-checklist">
        <li>Reconcile collected pledges and the final working budget</li>
        <li>Confirm the survey, pledge manager and backer support workflow</li>
        <li>Lock production quantities, specifications and contingency</li>
        <li>Publish a realistic backer communication schedule</li>
        <li>Define whether late pledges or preorders remain available</li>
        <li>Prepare the permanent product catalog and storefront</li>
        <li>Test new order operations before accepting public sales</li>
        <li>Keep backer fulfillment and new retail orders clearly separated</li>
      </ol>
      <p>
        You can prepare the permanent store while fulfillment continues. Open sales when inventory, delivery timing and the process for new orders are ready.
      </p>
<h2 id="choose-order-owner">Choose who owns the backer order</h2><p>An eligible project can use Kickstarter&apos;s native Pledge Manager for backer selections and applicable shipping and tax payments. An external manager may suit a different fulfillment workflow. A permanent retail store handles ongoing sales, but it does not automatically reconcile your existing backer obligations.</p><p>Before choosing, test an existing backer, an upgrade and a new buyer. Confirm which system records each payment and which exports reach your fulfillment partner. See <a href="https://help.kickstarter.com/en-us/articles/16236383-how-do-i-use-kickstarter-s-pledge-manager">Kickstarter&apos;s eligibility and setup guidance</a> and our <Link href="/guides/board-game-pledge-manager-checklist">pledge manager checklist</Link>.</p>
      <h2 id="help">Get help with the work after funding</h2>
      <p>
        We support funded tabletop creators with backer updates, pledge manager
        content and the handoff to a store. You can run this stage yourself with the
        timeline above. The honest limit is that surveys, production questions and
        backer messages all arrive in the same few weeks, when you also want to be
        talking to your manufacturer.
      </p>
      <aside className="article-callout article-callout--service">
        <strong>Funded, or close to it?</strong>
        <p>
          See our <Link href="/post-campaign-support">post campaign support for funded tabletop games</Link>, then
          share your campaign through <Link href="/buy">our booking page</Link> to agree a scope.
        </p>
      </aside>
    </SeoArticlePage>
  );
}

import Link from "next/link";
import {
  ArticleCallout,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { contentDates } from "../../content-dates";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "How Much Does a Board Game Website Cost?",
  description:
    "Calculate the real cost of a board game ecommerce website, including Shopify, themes, design, development, apps, product entry and ongoing support.",
  path: "/guides/how-much-does-a-board-game-website-cost",
  kind: "article",
  publishedTime: "2026-07-23",
  modifiedTime: contentDates.boardGameWebsiteCost,
  keywords: [
    "how much does a board game website cost",
    "board game ecommerce website cost",
    "Shopify store cost for board games",
    "tabletop website design price",
  ],
});

const faqs = [
  {
    question: "How much does a board game Shopify store cost?",
    answer:
      "The total combines the Shopify plan, domain, theme or design work, required apps, product setup and ongoing maintenance. Shopify and third party costs remain separate.",
  },
  {
    question: "Is a free Shopify theme enough for a board game?",
    answer:
      "It can be enough when the catalog is simple and the creator can structure products, prepare content and test the experience. A premium theme or specialist build becomes useful when editions, expansions, bundles, campaign storytelling and a distinctive brand need more support.",
  },
  {
    question: "Which costs continue after launch?",
    answer:
      "Expect the Shopify plan, payment processing, domain renewal and any paid apps. Optional ongoing costs can include development support, email software, analytics, photography and advertising.",
  },
];

export default function BoardGameWebsiteCostPage() {
  return (
    <SeoArticlePage
      slug="how-much-does-a-board-game-website-cost"
      category="Board game website cost"
      title="How Much Does a Board Game Website Cost?"
      description="Budget for a board game website by separating the Shopify plan, theme or development, product content and ongoing costs."
      answer="A board game store budget includes the platform, domain, theme or development, product setup, payment processing and any paid apps. A free theme reduces the theme cost, but you still need to prepare the content and test the store. Get a quote based on your catalogue and required integrations."
      published="2026-07-23"
      updated={contentDates.boardGameWebsiteCost}
      readTime="7 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Shopify pricing",
          publisher: "Shopify",
          href: "https://www.shopify.com/pricing",
        },
        {
          label: "Shopify Payments pricing",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/payments/shopify-payments/onboarding/pricing",
        },
        {
          label: "Adding and buying Shopify themes",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/online-store/themes/adding-themes",
        },
      ]}
      toc={[
        { id: "budget", label: "The four budget layers" },
        { id: "routes", label: "Compare build routes" },
        { id: "hidden", label: "Often missed costs" },
        { id: "tabletop", label: "Tabletop specific work" },
        { id: "choice", label: "Choose the right route" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="budget">Platform, build, content and ongoing costs</h2>
      <ArticleTable
        caption="Board game website budget layers"
        headers={["Layer", "What it covers", "Payment pattern"]}
        rows={[
          ["Commerce platform", "Store admin, hosting, checkout and core ecommerce", "Recurring"],
          ["Store build", "Theme, design, development and content entry", "One time or project based"],
          ["Commerce tools", "Apps for preorders, bundles, email or specialist operations", "Free or recurring"],
          ["Operations", "Domain, payment processing, support and ongoing changes", "Recurring or usage based"],
        ]}
      />
      <p>
        As of September 30, 2026, Shopify lists Basic at 39 dollars per month when paid monthly
        and 29 dollars per month when billed yearly in the United States. Pricing,
        card rates and regional availability can change, so confirm the current plan
        on Shopify before budgeting.
      </p>

      <h2 id="routes">Compare the three practical build routes</h2>
      <ArticleTable
        caption="Board game Shopify build routes"
        headers={["Route", "Starting build cost", "You remain responsible for"]}
        rows={[
          ["Free theme", "No theme purchase", "Planning, design choices, products, content and testing"],
          ["Premium theme", "Current theme price", "Products, content, configuration, testing and publication"],
          ["Custom developer build", "Written quote for your scope", "Final assets, approvals, Shopify and third party costs"],
        ]}
      />
      <p>
        The cheapest route is not always the lowest total cost. Include the hours
        required to plan navigation, organize editions, enter products, format
        artwork and test every buying path.
      </p>

      <h2 id="hidden">Costs that are often missed</h2>
      <ul className="article-checklist">
        <li>Domain registration and renewal</li>
        <li>Payment processing</li>
        <li>Preorder, bundle or subscription apps</li>
        <li>Email marketing software</li>
        <li>Product photography and renders</li>
        <li>Copywriting and policy review</li>
        <li>International tax or customs advice</li>
        <li>Ongoing design and development support</li>
      </ul>
      <ArticleCallout>
        Paid apps should solve a confirmed operating requirement. Do not install a
        large app stack before the catalog, preorder model and fulfillment workflow
        are decided.
      </ArticleCallout>

      <h2 id="tabletop">Budget for editions, expansions and product details</h2>
      <p>
        A board game store often needs more structure than a simple merchandise
        catalog. Core games, deluxe editions, expansions, add ons, language versions
        and bundles must remain understandable together.
      </p>
      <ul>
        <li>Edition and reward conversion into retail products</li>
        <li>Expansion and base game compatibility</li>
        <li>Player count, playtime, age and component information</li>
        <li>Campaign story rewritten for new customers</li>
        <li>Preorder and fulfillment status</li>
        <li>International weights and shipping rules</li>
      </ul>
      <p>
        Review the <Link href="/resources/board-game-product-page-checklist">board game product page checklist</Link>
        to estimate the content work before choosing a build route.
      </p>

      <h2 id="choice">Include the setup time your team can spare</h2>
      <p>
        Use a free or premium theme when you want to build and manage the store
        yourself. Hire a specialist when the team needs a finished result, has a firm
        launch date or cannot spare the time required for structure, content entry and testing.
      </p>
      <p>Use the free <Link href="/resources/board-game-shopify-store-checklist">store checklist</Link> to organise your catalogue and compare the build responsibilities before choosing a route.</p>
    </SeoArticlePage>
  );
}

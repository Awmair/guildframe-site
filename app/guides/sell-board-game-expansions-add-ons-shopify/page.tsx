import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Sell Board Game Expansions and Add-ons on Shopify",
  description:
    "Structure core games, deluxe editions, expansions, add-ons and bundles on Shopify without recreating confusing pledge tiers.",
  path: "/guides/sell-board-game-expansions-add-ons-shopify",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: "2026-07-17",
  keywords: [
    "sell board game expansions Shopify",
    "board game add-ons ecommerce",
    "Shopify bundles for board games",
  ],
});

const faqs = [
  {
    question: "Should a deluxe edition be a variant or a separate product?",
    answer:
      "Use a variant when the editions are close versions of one product and can share the same page without hiding important differences. Use separate products when each edition needs distinct media, contents, merchandising, inventory or search visibility.",
  },
  {
    question: "Can Shopify sell a core game and expansion as a bundle?",
    answer:
      "Yes. Shopify supports fixed and multipack bundles through its first-party Bundles app, subject to current eligibility and compatibility limits. Test inventory, shipping and returns before publishing the offer.",
  },
  {
    question: "How should I show expansion compatibility?",
    answer:
      "State the required base game, compatible edition, language and any player-count or component dependencies near the product title and purchase action. Metafields can store reusable compatibility facts for a compatible theme to display.",
  },
];

export default function SellExpansionsAddonsShopifyPage() {
  return (
    <SeoArticlePage
      slug="sell-board-game-expansions-add-ons-shopify"
      category="Tabletop catalog architecture"
      title="How to Sell Board Game Expansions, Add-ons and Bundles on Shopify"
      description="Turn campaign reward complexity into a catalog that helps a customer choose the right game, edition and compatible extras."
      answer="Sell board game expansions and add-ons on Shopify as separate products when they need independent inventory, media or discovery. Use variants for true versions of one product and bundles for a defined set sold together. Every expansion page should name the required base game, compatible edition, language, included contents and fulfillment status before the purchase action."
      published="2026-07-17"
      updated="2026-07-17"
      readTime="8 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Products",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products",
        },
        {
          label: "Shopify Bundles",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products/bundles/shopify-bundles",
        },
        {
          label: "Metafields",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/custom-data/metafields",
        },
      ]}
      toc={[
        { id: "model", label: "Choose the product model" },
        { id: "variants", label: "Variants or separate products" },
        { id: "bundles", label: "Bundle strategy" },
        { id: "compatibility", label: "Compatibility data" },
        { id: "navigation", label: "Catalog navigation" },
        { id: "qa", label: "Catalog QA" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Tabletop catalog architecture">
        The product, variant, bundle, collection and compatibility structure that
        lets a customer understand what each item is, what it requires and how it
        relates to the rest of the game line.
      </ArticleDefinition>

      <h2 id="model">Choose the right Shopify product model</h2>
      <ArticleTable
        caption="Recommended Shopify models for common tabletop offers"
        headers={["Offer", "Likely model", "Use when"]}
        rows={[
          ["Core game", "Separate product", "It has its own media, inventory and search demand"],
          ["Deluxe edition", "Variant or separate product", "The amount of unique content determines the choice"],
          ["Expansion", "Separate product", "It needs compatibility facts and independent merchandising"],
          ["Language edition", "Variant or separate product", "Use a separate page when content and discovery differ materially"],
          ["Accessory or add-on", "Separate product", "Customers may buy it independently or across releases"],
          ["Core plus expansion set", "Bundle", "A defined set is sold together with synchronized component inventory"],
        ]}
      />
      <ArticleCallout>
        Do not reproduce pledge tiers as permanent product names. A new customer
        should not need campaign history to understand the difference between a
        core game, deluxe edition, expansion and bundle.
      </ArticleCallout>

      <h2 id="variants">Variants or separate products</h2>
      <p>
        Variants keep related choices on one product page and can track price,
        inventory and SKU by option combination. They work well when customers are
        choosing a language, finish or edition that shares most of the same story.
      </p>
      <p>
        Separate products are clearer when editions need different galleries,
        component lists, compatibility, pricing narratives or collection placement.
        They also allow each page to target its own search and merchandising intent.
      </p>
      <ArticleTable
        caption="Variant and separate-product decision test"
        headers={["Question", "Variant signal", "Separate product signal"]}
        rows={[
          ["Does the media change?", "One shared gallery still explains every choice", "Each edition needs different images or video"],
          ["Do contents change?", "Differences are brief and easy to compare", "Component lists differ substantially"],
          ["Will it be marketed alone?", "Usually discovered as the same product", "Needs its own campaign, collection or search entry"],
          ["Is inventory independent?", "Variant inventory is sufficient", "Separate purchasing or fulfillment rules apply"],
          ["Will mobile selectors stay clear?", "A short option list remains understandable", "The choice needs a full comparison page"],
        ]}
      />

      <h2 id="bundles">Use bundles for a defined retail set</h2>
      <p>
        Shopify defines a bundle as two or more related products sold together. Its
        first-party Bundles app supports fixed bundles and multipacks on eligible
        stores. Component inventory determines how many complete bundles can sell.
      </p>
      <ul>
        <li>Name the bundle by customer value, not an old pledge level.</li>
        <li>List every included product and quantity.</li>
        <li>Explain whether the components arrive together.</li>
        <li>Test discounts, taxes, shipping and returns.</li>
        <li>Review current compatibility before combining bundles with preorders.</li>
      </ul>
      <p>
        Shopify currently documents that bundles are not compatible with purchase
        options including preorders. Platform behavior changes, so verify the live
        documentation before building a campaign-specific workflow around it.
      </p>

      <h2 id="compatibility">Make expansion compatibility impossible to miss</h2>
      <p>
        An expansion page should answer the dependency question before the customer
        reaches the cart. Use consistent product fields or metafields for reusable
        facts, then display them visibly in a compatible theme.
      </p>
      <ul className="article-checklist">
        <li>Required base game and edition</li>
        <li>Supported language and region</li>
        <li>Player count, play time and recommended age</li>
        <li>What the expansion adds</li>
        <li>Every component included</li>
        <li>Whether previous add-ons are required or supported</li>
        <li>Current stock, preorder or backorder status</li>
      </ul>

      <h2 id="navigation">Build navigation around how players shop</h2>
      <p>
        Use collections for Core Games, Expansions, Miniatures, Accessories and
        Bundles when the catalog is large enough to justify them. On each product,
        link to the required base game and the most relevant compatible products.
        Avoid placing every cross-sell above the product explanation.
      </p>
      <p>
        A <Link href="/shopify-theme-for-board-games">purpose-built board game Shopify theme</Link> should support product facts, long-form media and related products without requiring the creator to hardcode each relationship into the design.
      </p>

      <h2 id="qa">Catalog quality assurance</h2>
      <ol>
        <li><strong>Search each product:</strong> confirm titles and descriptions distinguish the core game, edition and expansion.</li>
        <li><strong>Browse on mobile:</strong> selectors, compatibility and contents must remain visible and readable.</li>
        <li><strong>Test inventory:</strong> buy the final available component and confirm affected bundles stop correctly.</li>
        <li><strong>Test the cart:</strong> verify titles, variants, quantities, discounts and preorder status.</li>
        <li><strong>Review fulfillment:</strong> confirm the team can identify and pick every component in the order.</li>
        <li><strong>Audit internal links:</strong> every expansion links to its required base product and useful related items.</li>
      </ol>
      <p>
        The catalog succeeds when a first-time visitor can build the right order
        without opening the original campaign page or asking which pledge tier they need.
      </p>
    </SeoArticlePage>
  );
}

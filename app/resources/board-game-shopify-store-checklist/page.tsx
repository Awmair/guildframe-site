import Link from "next/link";
import { ArticleCallout, SeoArticlePage } from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";
import { GuideVisual } from "../../components/GuideVisual";

export const metadata = pageMetadata({
  title: "Board Game Shopify Store Checklist",
  description:
    "A whole store board game Shopify checklist covering catalog, pages, payments, shipping, backer order sync, phone checks, search and a final test order.",
  path: "/resources/board-game-shopify-store-checklist",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.storeChecklist,
  keywords: ["board game Shopify store checklist", "Shopify store checklist", "tabletop ecommerce checklist"],
});

const faqs = [
  {
    question: "What pages does a board game Shopify store need?",
    answer: "Start with a homepage, catalog or collections, complete product pages, about or campaign story, FAQ, contact, shipping, returns, privacy and terms. Add news, events, reviews or retailer information only when they serve a real customer need.",
  },
  {
    question: "Should every expansion have its own product page?",
    answer: "Give an expansion its own page when it has a distinct price, inventory record, media or purchase decision. Use variants when the choice is a version of the same product, such as language or finish.",
  },
  {
    question: "How should a tabletop store handle preorders?",
    answer: "State preorder status and the expected delivery window beside the price and purchase action. Repeat any material timing or cancellation terms before checkout and avoid language that could be mistaken for in stock shipping.",
  },
];

export default function BoardGameShopifyStoreChecklistPage() {
  return (
    <SeoArticlePage
      slug="board-game-shopify-store-checklist"
      path="/resources/board-game-shopify-store-checklist"
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="In this checklist"
      category="Board game ecommerce"
      title="Board Game Shopify Store Checklist"
      description="Check products, page content, shipping, checkout, mobile layouts and search settings before opening your board game store."
      answer="Before launching a board game Shopify store, check five areas across the whole store: catalog, store pages, payments and shipping, phone layouts and search settings. Then place a full test order. If backer rewards ship through Kickstarter's Shopify app, check that every reward maps to a product too."
      published="2026-07-17"
      updated={contentDates.storeChecklist}
      readTime="7 minute reference"
      faqs={faqs}
      sources={[
        { label: "Products", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products" },
        { label: "Online store themes", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/online-store/themes" },
        { label: "Setting up shipping and delivery", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates" },
        { label: "Shopify product structured data", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/appearance/structured-data/product" },
        { label: "Kickstarter app for Shopify", publisher: "Shopify App Store", href: "https://apps.shopify.com/kickstarter" },
      ]}
      toc={[
        { id: "catalog", label: "Catalog and products" },
        { id: "content", label: "Store content" },
        { id: "operations", label: "Operations and checkout" },
        { id: "mobile", label: "Mobile and accessibility" },
        { id: "search", label: "Search readiness" },
        { id: "launch", label: "Launch test" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <p>
        This checklist covers the whole store, the week before it opens. For a
        single product page, use the{" "}
        <Link href="/resources/board-game-product-page-checklist">board game product page checklist</Link>{" "}
        instead.
      </p>
      <GuideVisual
        data={{
          kind: "checklist",
          title: "Five areas to clear before the store password comes off",
          groups: [
            { name: "Catalog", items: ["Stable titles, prices and SKUs", "Expansions separate from core games", "Rewards mapped if backer orders sync"] },
            { name: "Store pages", items: ["Homepage points to a product", "About, FAQ and contact", "Shipping, returns and privacy"] },
            { name: "Payments and shipping", items: ["Test mode off at launch", "Zones and rates verified", "Tax settings match markets"] },
            { name: "Phone", items: ["No sideways scrolling", "Art not cropped badly", "Buttons easy to reach"] },
            { name: "Search", items: ["Unique titles and descriptions", "Structured data matches prices", "Sitemap and robots live"] },
          ],
          source: "Guildframe store checklist; Shopify Help Center",
        }}
      />

      <h2 id="catalog">1. Catalog and product structure</h2>
      <p>
        Begin with the commercial truth of the catalog. Campaign tiers often mix
        products, upgrades and backer rewards. A permanent board game store should
        organize choices in the language a new customer understands.
      </p>
      <ul className="article-checklist">
        <li>Every product has a stable title, price, SKU and inventory rule</li>
        <li>Core games, deluxe editions, expansions, bundles and accessories are clearly separated</li>
        <li>Variants are used for true product options such as language, edition, scale or finish</li>
        <li>Each bundle states exactly what is included</li>
        <li>Preorders, backorders and in stock products use unmistakable delivery language</li>
        <li>Collections use customer terms rather than internal campaign labels</li>
      </ul>
      <p>
        If you are still deciding what is a product, a variant or a bundle, settle
        it first with{" "}
        <Link href="/guides/sell-board-game-expansions-add-ons-shopify">how to sell expansions, add ons and bundles on Shopify</Link>.
        The checklist assumes those choices are made.
      </p>

      <h2 id="content">2. Page content and product explanations</h2>
      <p>
        A board game Shopify theme should help customers understand the game before
        it asks them to buy. Use campaign artwork and story, but rebuild the page
        around a faster retail decision.
      </p>
      <ul className="article-checklist">
        <li>Homepage explains the game world and sends visitors to a specific product or collection</li>
        <li>Product pages show the box, components, table presence and useful detail views</li>
        <li>Player count, play time, age guidance, language and contents are easy to scan</li>
        <li>Edition differences are compared beside the purchase decision</li>
        <li>Rules, how to play media, reviews and awards are visible where relevant</li>
        <li>About or campaign story preserves creator identity without repeating the full campaign</li>
        <li>FAQ, contact, shipping and returns answer operational questions in plain language</li>
      </ul>
      <ArticleCallout>
        A beautiful store is not complete if a visitor cannot tell which box to buy,
        what it includes or when it ships.
      </ArticleCallout>

      <h2 id="operations">3. Shopify operations and checkout</h2>
      <ul className="article-checklist">
        <li>Payments and test mode have been configured correctly</li>
        <li>Shipping zones, rates, package weights and delivery expectations are verified</li>
        <li>Tax settings match the business and markets being served</li>
        <li>Inventory locations and overselling rules match fulfillment reality</li>
        <li>Order notifications and the customer support path have been tested</li>
        <li>Privacy, terms, returns and shipping policies are published and linked</li>
        <li>A complete test order reaches confirmation and updates inventory correctly</li>
        <li>If backer orders sync through Kickstarter&apos;s Shopify app, every reward maps to a product and a test tracking number reaches Kickstarter</li>
      </ul>

      <h2 id="mobile">4. Mobile, tablet and accessibility</h2>
      <p>
        Tabletop artwork is often wide and detailed, while most buying sessions begin
        on a small screen. Test the store at real phone and tablet widths, not only in
        a desktop editor preview.
      </p>
      <ul className="article-checklist">
        <li>Navigation, search, cart and checkout controls remain easy to reach</li>
        <li>Product artwork is not cropped in a way that hides the game or components</li>
        <li>Text stays readable without zooming and no content overflows horizontally</li>
        <li>Variant selectors and purchase buttons have clear labels and visible focus states</li>
        <li>Images use descriptive alt text, explicit dimensions and efficient formats</li>
        <li>Heading order is logical and every page has one descriptive H1</li>
        <li>Motion respects reduced motion preferences</li>
      </ul>

      <h2 id="search">5. Search titles, canonical URLs and structured data</h2>
      <ul className="article-checklist">
        <li>Each page has a unique title, description and canonical URL</li>
        <li>Product facts shown to customers match Product and Offer structured data</li>
        <li>Organization, website, article and breadcrumb entities use stable IDs</li>
        <li>Robots rules allow intended search and answer crawlers</li>
        <li>The XML sitemap contains every public canonical page and accurate modification dates</li>
        <li>Important pages are linked from navigation, guides or the footer</li>
        <li>Source backed guides show review dates and primary citations</li>
      </ul>
      <p>
        Use the <Link href="/resources/board-game-product-page-checklist">board game product page checklist</Link>
        for the product specific layer and the <Link href="/editorial-policy">Guildframe editorial policy</Link>
        for the source and update standard.
      </p>

      <h2 id="launch">6. Final launch test</h2>
      <ol>
        <li>Open the store on a phone, tablet and desktop.</li>
        <li>Enter through the homepage, a collection and a direct product link.</li>
        <li>Select each important edition or variant and confirm price and media changes.</li>
        <li>Add products and bundles to cart, then remove and update quantities.</li>
        <li>Complete a test checkout using realistic shipping and tax conditions.</li>
        <li>Check confirmation, notification, inventory and analytics events.</li>
        <li>Verify live robots, sitemap, canonical URLs and structured data.</li>
      </ol>
      <p>
        A store is ready when a new customer can understand the product, trust the
        delivery promise and complete checkout without campaign era context.
      </p>
      <p>
        If you are not sure when to run this check, the{" "}
        <Link href="/guides/kickstarter-to-shopify-launch-timeline">Kickstarter to Shopify launch timeline</Link>{" "}
        puts it right before the store opens. When you want the store set up or
        reviewed for you, start with the{" "}
        <Link href="/done-for-you-shopify-store">store planning brief</Link>, or see{" "}
        <Link href="/post-campaign-support">post campaign support</Link> for the backer side.
      </p>
    </SeoArticlePage>
  );
}

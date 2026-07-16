import Link from "next/link";
import { ArticleCallout, ArticleTable, SeoArticlePage } from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Board Game Shopify Product Page Checklist",
  description:
    "A board game Shopify product page checklist for artwork, gameplay facts, editions, components, delivery clarity, mobile UX and structured data.",
  path: "/resources/board-game-product-page-checklist",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: "2026-07-17",
  keywords: ["board game Shopify product page", "Shopify product page checklist", "board game product page design"],
});

const faqs = [
  {
    question: "What information belongs above the fold on a board game product page?",
    answer: "Show the product name, strongest image, price, availability or preorder timing, a short value statement, edition choice if needed and a clear purchase action. Player count, play time and age guidance should also be quickly visible when they affect fit.",
  },
  {
    question: "How many images should a board game product page include?",
    answer: "Use enough media to explain the purchase: box and components, table presence, detail views, edition differences and scale where relevant. Image quality and decision value matter more than a fixed count.",
  },
  {
    question: "Should rules and how-to-play content be on the product page?",
    answer: "Include the clearest gameplay explanation and link to complete rules or videos when they help the buying decision. Keep the purchase path readable rather than embedding every possible detail above the primary action.",
  },
];

export default function BoardGameProductPageChecklistPage() {
  return (
    <SeoArticlePage
      slug="board-game-product-page-checklist"
      path="/resources/board-game-product-page-checklist"
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="Page anatomy"
      category="Shopify product pages"
      title="Board Game Shopify Product Page Checklist"
      description="A practical anatomy for tabletop product pages that need to explain the world, the game, the edition and the delivery promise without slowing down the purchase."
      answer="A strong board game Shopify product page combines a clear purchase block with useful artwork, gameplay facts, component details, edition comparison, proof, delivery terms, mobile-friendly controls and Product structured data that matches the visible offer."
      published="2026-07-17"
      updated="2026-07-17"
      readTime="7 minute reference"
      faqs={faqs}
      sources={[
        { label: "Product details", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products/details" },
        { label: "Product media", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products/product-media" },
        { label: "Product page examples", publisher: "Shopify", href: "https://www.shopify.com/blog/product-page" },
        { label: "Product structured data", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/appearance/structured-data/product" },
      ]}
      toc={[
        { id: "purchase", label: "Purchase block" },
        { id: "media", label: "Media and table presence" },
        { id: "facts", label: "Gameplay and contents" },
        { id: "editions", label: "Editions and bundles" },
        { id: "proof", label: "Proof and objections" },
        { id: "mobile", label: "Mobile and search" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="purchase">1. The purchase block</h2>
      <p>
        The first screen should let a customer identify the product, understand its
        current buying status and take the next step. It does not need to explain the
        entire game before the purchase action appears.
      </p>
      <ul className="article-checklist">
        <li>Product name matches the box and catalog language</li>
        <li>Price and any compare-at price are accurate</li>
        <li>Availability, preorder status or delivery timing is visible beside the action</li>
        <li>One short sentence explains the central player experience</li>
        <li>Edition or language choice appears before Add to cart</li>
        <li>Quantity control and purchase button have clear accessible labels</li>
        <li>Player count, play time and age guidance are quickly visible when relevant</li>
      </ul>
      <ArticleCallout>
        Do not make a customer scroll through the entire campaign story to discover
        the price, edition choice or expected delivery window.
      </ArticleCallout>

      <h2 id="media">2. Artwork, components and table presence</h2>
      <ArticleTable
        headers={["Media type", "Question it answers", "Useful example"]}
        rows={[
          ["Box hero", "What product is this?", "Front-facing box or complete product arrangement"],
          ["Component spread", "What is included?", "Boards, cards, miniatures, books and tokens laid out clearly"],
          ["Table scene", "What does play feel like?", "A realistic setup at readable scale"],
          ["Detail image", "What is the quality?", "Card stock, miniature sculpt, terrain texture or book spread"],
          ["Edition comparison", "Which version is right for me?", "Standard and deluxe contents shown side by side"],
          ["Scale reference", "How large is it?", "Miniature, terrain or box shown against a familiar reference"],
        ]}
      />
      <ul className="article-checklist">
        <li>Primary image remains legible on phone and desktop</li>
        <li>Thumbnails are large enough to identify and easy to operate</li>
        <li>Images use descriptive alt text rather than filenames or keyword lists</li>
        <li>Width and height are declared to reduce layout movement</li>
        <li>Files are compressed and responsive sizes avoid oversized mobile downloads</li>
        <li>Video has a visible purpose and does not block the buying path</li>
      </ul>

      <h2 id="facts">3. Gameplay, fit and box contents</h2>
      <p>
        A customer should be able to decide whether the game fits their group and
        taste without opening a campaign archive or external review.
      </p>
      <ul className="article-checklist">
        <li>Player count and best-supported player range</li>
        <li>Typical play time and setup expectations</li>
        <li>Age guidance and important content notes</li>
        <li>Core mechanics, tone and intended player experience</li>
        <li>Cooperative, competitive, solo or campaign structure</li>
        <li>Language dependence and available languages</li>
        <li>Complete contents list and component quantities</li>
        <li>Required base game or compatibility information for expansions</li>
      </ul>

      <h2 id="editions">4. Editions, variants, bundles and add-ons</h2>
      <p>
        Edition choices create friction when the difference is hidden in campaign
        terminology. Compare the contents and value directly beside the selector.
      </p>
      <ArticleTable
        headers={["Choice", "What to show", "Common failure"]}
        rows={[
          ["Standard vs deluxe", "Exact extra components and material differences", "Using names without a contents comparison"],
          ["Core game vs bundle", "Every included product and bundle saving", "Treating the bundle like a pledge tier"],
          ["Language", "Language of cards, rules and packaging", "Hiding language in a small variant label"],
          ["Expansion", "Required base product and compatibility", "Assuming every visitor already owns the core game"],
          ["Preorder", "Expected delivery window and cancellation terms", "Showing only a generic stock badge"],
        ]}
      />

      <h2 id="proof">5. Proof, policies and objections</h2>
      <ul className="article-checklist">
        <li>Reviews, awards or campaign proof are specific and attributable</li>
        <li>How-to-play video or rulebook is available when it reduces uncertainty</li>
        <li>Shipping timing and regions are easy to find</li>
        <li>Returns, damaged items and replacement policy are linked</li>
        <li>Preorder and backorder language is repeated near the purchase action</li>
        <li>FAQ answers product-specific objections rather than repeating general policies</li>
        <li>Related products distinguish expansions, accessories and true alternatives</li>
      </ul>

      <h2 id="mobile">6. Mobile UX, accessibility and search</h2>
      <ul className="article-checklist">
        <li>No horizontal overflow at common phone and tablet widths</li>
        <li>Sticky purchase controls never cover essential content</li>
        <li>Selectors, accordions and thumbnails work with keyboard and touch</li>
        <li>Color is not the only signal for selection, stock or errors</li>
        <li>The page has one descriptive H1 and logical heading order</li>
        <li>Title, description and canonical URL are unique</li>
        <li>Product schema matches visible name, image, price, currency and availability</li>
        <li>Breadcrumbs and internal links connect the page to its collection and related products</li>
      </ul>
      <p>
        Use this page-level reference with the broader
        <Link href="/resources/board-game-shopify-store-checklist"> board game Shopify store checklist</Link>.
        If the catalog began as campaign rewards, continue with the
        <Link href="/resources/kickstarter-to-shopify-migration-checklist"> Kickstarter to Shopify migration checklist</Link>.
      </p>
    </SeoArticlePage>
  );
}

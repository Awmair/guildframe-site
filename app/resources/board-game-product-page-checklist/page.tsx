import Link from "next/link";
import { ArticleCallout, ArticleTable, SeoArticlePage } from "../../components/SeoArticlePage";
import { GuideVisual } from "../../components/GuideVisual";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

export const metadata = pageMetadata({
  title: "Board Game Shopify Product Page Checklist",
  description:
    "What a board game product page should include, zone by zone, from price, edition and delivery to player count, contents, proof and a phone check.",
  path: "/resources/board-game-product-page-checklist",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.productPageChecklist,
  keywords: [
    "board game product page",
    "what should a board game product page include",
    "board game Shopify product page",
    "Shopify product page checklist",
  ],
});

const faqs = [
  {
    question: "What should a board game product page include?",
    answer:
      "Price, edition choice and delivery timing on the first screen. Then the gallery, player count and play time, the full contents list, proof such as reviews or campaign results, and the shipping and returns answers. Every fact should match the box.",
  },
  {
    question: "What belongs on the first screen of a board game product page?",
    answer:
      "The product name, the strongest image, the price, stock or preorder status, the edition selector and the purchase button. Player count and play time belong there too when they decide whether the game fits.",
  },
  {
    question: "How many images should a board game product page include?",
    answer:
      "Enough to answer the buyer's questions: the box, the components laid out, the game set up on a table, close details and an edition comparison if there is one. Each image should answer a different question.",
  },
  {
    question: "Should the rules be on the product page?",
    answer:
      "Put a short gameplay explanation on the page and link to the full rules or a how to play video. The aim is to help the decision without pushing the purchase button far down the page.",
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
      sidebarTitle="Page zones"
      category="Shopify product pages"
      title="Board Game Shopify Product Page Checklist"
      description="One product page, checked from top to bottom. Seven zones, in the order a buyer scrolls, with what each zone has to answer."
      answer="A board game product page should answer, in scroll order: what is it, which edition, when does it ship, who is it for, what is in the box and why trust it. Put the price, edition choice and delivery timing on the first screen, then the gameplay facts, contents list, proof and shipping answers below."
      published="2026-07-17"
      updated={contentDates.productPageChecklist}
      readTime="6 minute reference"
      faqs={faqs}
      sources={[
        { label: "Product details", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products/details" },
        { label: "Product media", publisher: "Shopify Help Center", href: "https://help.shopify.com/en/manual/products/product-media" },
        { label: "Product page examples", publisher: "Shopify", href: "https://www.shopify.com/blog/product-page" },
        { label: "Product structured data", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/appearance/structured-data/product" },
      ]}
      toc={[
        { id: "zones", label: "The seven zones" },
        { id: "first-screen", label: "Zone 1: first screen" },
        { id: "gallery", label: "Zone 2: gallery" },
        { id: "fit", label: "Zone 3: fit facts" },
        { id: "contents", label: "Zone 4: box contents" },
        { id: "proof", label: "Zones 5 to 7: proof, delivery, related" },
        { id: "phone", label: "Check it on a phone" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="zones">The seven zones of a board game product page</h2>
      <p>
        This checklist covers one product page, read from top to bottom. We split
        the page into seven zones because each one answers a different buyer
        question, and the order matches how people scroll.
      </p>
      <GuideVisual
        data={{
          kind: "steps",
          title: "Price and delivery come before the story",
          steps: [
            { label: "First screen", detail: "Name, image, price, edition, delivery, button." },
            { label: "Gallery", detail: "Box, components, table, details." },
            { label: "Fit facts", detail: "Players, time, age, mechanics." },
            { label: "Box contents", detail: "Every component, with quantities." },
            { label: "Proof", detail: "Reviews, awards, campaign result." },
            { label: "Delivery and returns", detail: "Regions, timing, damage policy." },
            { label: "Related products", detail: "Expansions and accessories." },
          ],
          source: "Guildframe product page method",
        }}
      />
      <p>
        If a page skips a zone, the buyer usually goes looking for the answer
        somewhere else, often on the old campaign page. That&apos;s the leak this
        checklist closes.
      </p>

      <h2 id="first-screen">Zone 1: the first screen decides the click</h2>
      <p>
        On a phone, the first screen has room for very little. So we keep only the
        facts that let a buyer act.
      </p>
      <ul className="article-checklist">
        <li>Product name matches the box</li>
        <li>Price, and any compare at price, is accurate</li>
        <li>Stock, preorder or delivery timing sits next to the button</li>
        <li>Edition or language choice appears before Add to cart</li>
        <li>One sentence explains what playing feels like</li>
        <li>Player count and play time show here when they decide fit</li>
      </ul>
      <ArticleCallout>
        A buyer should never scroll through the creator story to find the price,
        the edition choice or the delivery window.
      </ArticleCallout>

      <h2 id="gallery">Zone 2: every image answers one question</h2>
      <p>
        A gallery works when each image does a different job. We plan it as a list
        of questions, then shoot or render to fill the gaps.
      </p>
      <ArticleTable
        headers={["Image", "Question it answers", "Example"]}
        rows={[
          ["Box hero", "What is this?", "Front facing box or full product arrangement"],
          ["Component spread", "What is inside?", "Boards, cards, miniatures and tokens laid out"],
          ["Table scene", "What does play look like?", "A real setup at readable scale"],
          ["Close detail", "Is it good quality?", "Card stock, sculpt detail or book spread"],
          ["Edition comparison", "Which version do I want?", "Standard and deluxe side by side"],
        ]}
      />
      <p>
        Give each image descriptive alt text and declared dimensions, so the page
        stays steady while it loads.
      </p>

      <h2 id="fit">Zone 3: fit facts help buyers rule themselves in</h2>
      <p>
        Fit facts let a buyer decide whether the game suits their group without
        reading a review. Keep them short and scannable.
      </p>
      <ul className="article-checklist">
        <li>Player count and the best supported player range</li>
        <li>Play time and setup time</li>
        <li>Age guidance and any content notes</li>
        <li>Cooperative, competitive, solo or campaign play</li>
        <li>Core mechanics and tone, in plain words</li>
        <li>Language dependence and available languages</li>
      </ul>

      <h2 id="contents">Zone 4: the contents list is the contract</h2>
      <p>
        Buyers treat the contents list as a promise, so it has to match the box
        exactly. Stretch goal items from the campaign belong here as plain contents.
      </p>
      <ul className="article-checklist">
        <li>Every component with its quantity</li>
        <li>Edition differences shown side by side, not hidden in a variant label</li>
        <li>For expansions, the required base game linked by name</li>
        <li>For bundles, every included product listed</li>
      </ul>
      <p>
        Whether an edition should be a variant or its own product is a catalog
        decision, covered in{" "}
        <Link href="/guides/sell-board-game-expansions-add-ons-shopify">how to sell expansions, add ons and bundles on Shopify</Link>.
      </p>

      <h2 id="proof">Zones 5 to 7: proof, delivery and related products</h2>
      <p>
        The lower half of the page handles doubts. Proof answers whether to trust
        you, delivery answers whether it will arrive, and related products answer
        what to buy next.
      </p>
      <GuideVisual
        data={{
          kind: "checklist",
          title: "The lower page answers the doubts the first screen raised",
          groups: [
            { name: "Proof", items: ["Named reviews or awards", "Campaign result, stated accurately", "How to play video or rules"] },
            { name: "Delivery and returns", items: ["Regions and timing", "Preorder wording repeated", "Damaged item policy linked"] },
            { name: "Related products", items: ["Expansions for this game", "Accessories that fit", "No cross sells above the contents"] },
          ],
          source: "Guildframe product page method",
        }}
      />
      <p>
        Proof has to be real and attributable. A specific review quote or a stated
        campaign result does more than a row of generic badges.
      </p>

      <h2 id="phone">Check the finished page on a phone</h2>
      <p>
        Most of these zones fail on small screens first. So we finish every product
        page with a short phone check before it goes live.
      </p>
      <ul className="article-checklist">
        <li>No sideways scrolling at common phone widths</li>
        <li>Sticky buy buttons never cover the delivery line or selector</li>
        <li>Selectors and thumbnails work with touch and keyboard</li>
        <li>Stock and selection are not shown by color alone</li>
        <li>Product structured data matches the visible name, price and availability</li>
      </ul>
      <p>
        This page covers one product. For the whole store, use the{" "}
        <Link href="/resources/board-game-shopify-store-checklist">board game Shopify store checklist</Link>,
        and for what the theme has to support, see{" "}
        <Link href="/shopify-theme-for-board-games">Shopify theme setup for board games</Link>.
        If you want the product pages written from your campaign material, our{" "}
        <Link href="/post-campaign-support">post campaign support</Link>{" "}
        covers product content, with store setup scoped through the{" "}
        <Link href="/done-for-you-shopify-store">store planning brief</Link>.
      </p>
    </SeoArticlePage>
  );
}

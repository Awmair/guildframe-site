import { contentDates } from "../../content-dates";
import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { GuideVisual } from "../../components/GuideVisual";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Board Game Expansions & Bundles on Shopify",
  description:
    "Decide when a board game expansion, edition or add on is its own Shopify product, a variant or a bundle, and how to turn pledge tiers into products.",
  path: "/guides/sell-board-game-expansions-add-ons-shopify",
  kind: "article",
  publishedTime: "2026-07-17",
  modifiedTime: contentDates.expansionsAndAddons,
  keywords: [
    "sell board game expansions Shopify",
    "board game add ons Shopify",
    "Shopify bundles for board games",
    "pledge tiers to Shopify products",
  ],
});

const faqs = [
  {
    question: "Should a board game expansion be its own Shopify product?",
    answer:
      "Usually yes. An expansion needs its own images, stock count, contents list and a line naming the base game it needs. A separate product also gives it its own page in search and its own place in an Expansions collection.",
  },
  {
    question: "Should a deluxe edition be a variant or a separate product?",
    answer:
      "Use a variant when both editions share most of the same images and the difference fits in one short sentence. Use separate products when the deluxe box needs its own gallery, contents list or stock rules.",
  },
  {
    question: "Can Shopify sell a core game and expansion as a bundle?",
    answer:
      "Yes. Shopify's own Bundles app supports fixed bundles and multipacks on eligible stores, and component stock decides how many bundles can sell. Shopify says bundles are not compatible with purchase options, which include preorders, so keep preorder items out of bundles.",
  },
  {
    question: "How do pledge tiers become Shopify products?",
    answer:
      "Break each tier into the items it ships, create those items as products or variants, then rebuild only the useful combinations as bundles. If you use Kickstarter's Shopify app, each reward is matched to those products and variants so backer orders arrive with the right items.",
  },
  {
    question: "How should I show expansion compatibility?",
    answer:
      "Name the required base game, compatible edition and language next to the title and price. Store these facts in metafields so the same line appears on every expansion page without being typed again.",
  },
];

export default function SellExpansionsAddonsShopifyPage() {
  return (
    <SeoArticlePage
      slug="sell-board-game-expansions-add-ons-shopify"
      category="Tabletop catalogue structure"
      title="How to Sell Board Game Expansions, Add ons and Bundles on Shopify"
      description="Decide which items are separate products, which are variants and which are bundles, then turn old pledge tiers into a catalogue a new buyer can follow."
      answer="Sell each board game expansion as its own Shopify product with the required base game named beside the price. Use variants only for versions of the same box, use bundles for fixed sets such as core plus expansion, and break pledge tiers into those products instead of copying a tier as a product."
      published="2026-07-17"
      updated={contentDates.expansionsAndAddons}
      readTime="7 minute read"
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
          label: "Eligibility and considerations for using product bundles",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/products/bundles/eligibility-and-considerations",
        },
        {
          label: "Metafields",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/custom-data/metafields",
        },
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
      ]}
      toc={[
        { id: "three-questions", label: "Three questions per item" },
        { id: "models", label: "Product, variant or bundle" },
        { id: "pledge-tiers", label: "Break up the pledge tiers" },
        { id: "compatibility", label: "The compatibility line" },
        { id: "collections", label: "Collections and cross links" },
        { id: "catalogue-test", label: "Test the catalogue" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Tabletop catalogue structure">
        How base games, editions, expansions, add ons and bundles are set up as
        Shopify products, variants and bundles, so a buyer can tell what each item
        is, what it needs and what it works with.
      </ArticleDefinition>

      <h2 id="three-questions">Ask three questions about every item</h2>
      <p>
        Every item from your campaign fits one of three Shopify shapes. We sort
        them by asking the same three questions in the same order, and the first
        yes decides it.
      </p>
      <GuideVisual
        data={{
          kind: "steps",
          title: "The first yes decides how the item is set up",
          steps: [
            { label: "Does it need its own images or stock count?", detail: "Yes: make it a separate product. Most expansions land here." },
            { label: "Is it the same box in another version?", detail: "Yes: make it a variant, such as language or finish." },
            { label: "Is it a fixed set of items sold together?", detail: "Yes: make it a bundle, such as core plus expansion." },
            { label: "None of the above?", detail: "It is probably campaign only and stays off the store." },
          ],
          source: "Guildframe catalogue method, based on Shopify product and bundle documentation",
        }}
      />
      <p>
        That last step matters more than it looks. Some campaign rewards, like an
        early bird price or a backer only promo card, should never become store
        products at all.
      </p>

      <h2 id="models">Separate product, variant or bundle</h2>
      <p>
        Each shape has a job in Shopify. Choosing the wrong one usually shows up
        later as a confusing selector or a stock count that will not add up.
      </p>
      <GuideVisual
        data={{
          kind: "compare",
          title: "Expansions are products; languages are variants",
          columns: [
            {
              name: "Separate product",
              points: ["Own page, gallery and stock", "Core game, expansion, accessory", "Can be found in search on its own"],
              verdict: "Default for anything sold alone",
              highlight: true,
            },
            {
              name: "Variant",
              points: ["Same page, one selector", "Language, finish, sleeve size", "Price and stock per option"],
              verdict: "For versions of one box",
            },
            {
              name: "Bundle",
              points: ["Two or more products sold together", "Core plus expansion set", "Stock follows the components"],
              verdict: "For fixed sets only",
            },
          ],
          source: "Shopify Help Center: Products and Shopify Bundles",
        }}
      />
      <ArticleTable
        caption="Where common tabletop items usually land"
        headers={["Item", "Usual shape", "Switch when"]}
        rows={[
          ["Core game", "Separate product", "Never; it anchors the line"],
          ["Deluxe edition", "Variant", "The deluxe box needs its own gallery or contents list"],
          ["Expansion", "Separate product", "Never; it needs its own compatibility line"],
          ["Language edition", "Variant", "Content and search differ by country"],
          ["Accessory or add on", "Separate product", "It only ever sells inside one bundle"],
          ["Core plus expansion set", "Bundle", "The set has its own box and SKU"],
        ]}
      />

      <h2 id="pledge-tiers">Break pledge tiers into products, then rebuild bundles</h2>
      <p>
        A pledge tier is a bundle with a campaign name. New buyers do not know what
        &quot;All In&quot; means, so we break each tier into the items it ships and
        then decide which combinations deserve a bundle.
      </p>
      <ArticleTable
        caption="Example: how one fictional pledge tier becomes store products"
        headers={["In the pledge tier", "In the store"]}
        rows={[
          ["Deluxe core game", "Core game product, deluxe variant"],
          ["Expansion one", "Separate expansion product"],
          ["Stretch goal miniatures", "Listed in the deluxe contents, not sold alone"],
          ["Playmat add on", "Separate accessory product"],
          ["Backer only promo card", "Not in the store"],
          ["The tier as a whole", "Optional bundle: deluxe core plus expansion"],
        ]}
      />
      <p>
        This mapping does double duty in 2026. Kickstarter&apos;s official Shopify
        app, listed on July 31, 2026, matches each reward to Shopify products and
        variants so finalized Pledge Manager orders arrive with the right items.
        Build the products first and the reward mapping follows from this table.
      </p>
      <ArticleCallout>
        Add ons can still change after backers submit. Kickstarter added backer
        self serve add ons on August 20, 2026, when the creator turns them on.
        Keep every add on as a real product so late changes still map cleanly.
      </ArticleCallout>

      <h2 id="compatibility">Put the compatibility line beside the price</h2>
      <p>
        An expansion page has one question to answer before the cart: what do I
        need to play this? We put that answer in one line next to the title.
      </p>
      <ul className="article-checklist">
        <li>Required base game, linked to its product page</li>
        <li>Compatible edition and language</li>
        <li>What the expansion adds, in one sentence</li>
        <li>Whether earlier add ons are needed or supported</li>
        <li>Stock, preorder or backorder status</li>
      </ul>
      <p>
        Store these facts as metafields so every expansion shows them the same way.
        The{" "}
        <Link href="/resources/tabletop-shopify-metafield-schema">tabletop metafield schema</Link>{" "}
        lists the fields we use. For everything else on the page, follow the{" "}
        <Link href="/resources/board-game-product-page-checklist">board game product page checklist</Link>.
      </p>

      <h2 id="collections">Collections and cross links</h2>
      <p>
        Once the shapes are set, the catalogue needs paths between them. Buyers
        usually arrive on one product and need a route to its partners.
      </p>
      <ul>
        <li>Use collections such as Core Games, Expansions, Accessories and Bundles once the catalogue is big enough.</li>
        <li>Link every expansion to its base game, and the base game to its expansions.</li>
        <li>Keep cross sells below the product explanation, not above it.</li>
      </ul>
      <p>
        The theme has to display all of this cleanly, which is what{" "}
        <Link href="/shopify-theme-for-board-games">Shopify theme setup for board games</Link>{" "}
        checks.
      </p>

      <h2 id="catalogue-test">Test the catalogue, not just the checkout</h2>
      <p>
        Catalogue mistakes hide until stock runs out. So we test the structure with
        a few deliberate edge cases before the store opens.
      </p>
      <ol>
        <li><strong>Sell the last unit of a component.</strong> Every bundle that contains it should stop selling.</li>
        <li><strong>Add an expansion without the base game.</strong> The cart should still make the dependency clear.</li>
        <li><strong>Mix a preorder with an in stock item.</strong> Bundles cannot be preorders, so check how the order splits and what the delivery line says.</li>
        <li><strong>Sync one backer order.</strong> Confirm each reward arrives as the right products and variants.</li>
      </ol>
      <p>
        If you want this mapping done with you, our{" "}
        <Link href="/post-campaign-support">post campaign support</Link>{" "}
        covers reward and product content, and the{" "}
        <Link href="/done-for-you-shopify-store">store planning brief</Link>{" "}
        scopes the Shopify setup. The{" "}
        <Link href="/guides/move-from-kickstarter-to-shopify">Kickstarter to Shopify migration guide</Link>{" "}
        shows where this fits in the wider move.
      </p>
    </SeoArticlePage>
  );
}

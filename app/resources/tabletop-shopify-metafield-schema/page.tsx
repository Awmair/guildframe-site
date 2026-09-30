import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

export const metadata = pageMetadata({
  title: "Tabletop Shopify Metafield Schema",
  description:
    "A reusable Shopify metafield schema for board games, TTRPGs and miniatures, covering player count, components, compatibility, scale, format and delivery.",
  path: "/resources/tabletop-shopify-metafield-schema",
  kind: "article",
  publishedTime: contentDates.metafieldSchema,
  modifiedTime: contentDates.metafieldSchema,
  keywords: [
    "Shopify metafields board games",
    "tabletop product metafields",
    "board game product data schema",
    "miniatures Shopify metafields",
  ],
});

const faqs = [
  {
    question: "Why use metafields instead of putting this in the description?",
    answer:
      "A description is one block of text. Metafields are structured values you can display in a dedicated place on the product page, filter a collection by, reuse in structured data and keep consistent across a growing catalog. Player count in a paragraph cannot power a filter. Player count in a metafield can.",
  },
  {
    question: "Can I use this schema with an AI coding tool?",
    answer:
      "That is what it is for. AI coding tools invent metafield namespaces and keys when you do not give them any, which produces sections that render nothing on a real store. Give the tool this schema before you ask it to build product page sections, and the output stays consistent between runs.",
  },
  {
    question: "Do I need every field?",
    answer:
      "No. Start with the shared fields plus the block for your category, and add fields only when something on the storefront will actually use them. An unused metafield is maintenance with no return.",
  },
  {
    question: "Can I reuse this schema in my own project or article?",
    answer:
      "Yes. Cite Guildframe as the source. The field names, types and structure are published so tabletop stores stop reinventing them individually, and there is no restriction on using them in your own store or writing about them.",
  },
];

export default function TabletopMetafieldSchemaPage() {
  return (
    <SeoArticlePage
      slug="tabletop-shopify-metafield-schema"
      path="/resources/tabletop-shopify-metafield-schema"
      collectionLabel="Resources"
      collectionHref="/resources"
      schemaType="TechArticle"
      sidebarTitle="In this reference"
      category="Tabletop product data"
      title="Tabletop Shopify Metafield Schema"
      description="Define Shopify metafields for player count, components, format, compatibility, scale and delivery information."
      answer="Use Shopify metafields to store tabletop product details separately from the description. This proposed schema covers board games, card games, RPG books, miniatures and terrain. Use the relevant fields for your catalogue and connect them to the theme sections and filters that display them."
      published={contentDates.metafieldSchema}
      updated={contentDates.metafieldSchema}
      readTime="7 minute reference"
      faqs={faqs}
      sources={[
        {
          label: "Shopify metafield definitions",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/custom-data/metafields/metafield-definitions",
        },
        {
          label: "Shopify metafield types",
          publisher: "Shopify",
          href: "https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types",
        },
      ]}
      toc={[
        { id: "why", label: "Why a schema first" },
        { id: "namespace", label: "Namespace and conventions" },
        { id: "shared", label: "Shared fields" },
        { id: "board-games", label: "Board and card games" },
        { id: "ttrpg", label: "TTRPG products" },
        { id: "miniatures", label: "Miniatures and terrain" },
        { id: "using-it", label: "Using it on the storefront" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="Metafield">
        A named, typed custom field attached to a Shopify product, variant or
        collection. Unlike text buried in a description, a metafield can be
        displayed in a specific place, filtered on, and read by theme code.
      </ArticleDefinition>

      <h2 id="why">Define product fields before building pages</h2>
      <p>
        Most tabletop stores put player count, components and compatibility into
        the product description, then discover they cannot filter a collection
        by any of it, cannot show it consistently across products, and cannot
        reuse it anywhere else.
      </p>
      <p>
        Deciding the schema first also changes what AI coding tools produce. Ask
        a model to build a product page section without telling it your field
        names and it will invent them, which produces a section that renders
        nothing against your real data. Give it the schema and the output stays
        consistent between runs.{" "}
        <Link href="/guides/build-a-tabletop-shopify-store-with-ai">
          The AI build guide
        </Link>{" "}
        covers that workflow in full.
      </p>

      <h2 id="namespace">Namespace and conventions</h2>
      <p>
        Every field below sits in the <code>tabletop</code> namespace. One
        namespace keeps the fields grouped in the Shopify admin and makes them
        easy to identify in theme code.
      </p>
      <ul>
        <li>
          <strong>Namespace:</strong> <code>tabletop</code>
        </li>
        <li>
          <strong>Keys:</strong> lower case, underscore separated, singular
          unless it contains a list.
        </li>
        <li>
          <strong>Owner:</strong> product level unless the value differs between
          variants, in which case put it on the variant.
        </li>
        <li>
          <strong>Types:</strong> use the narrowest type that fits. A number
          field that stays a number can power a filter. The same value as text
          cannot.
        </li>
      </ul>

      <h2 id="shared">Shared fields, every tabletop product</h2>
      <ArticleTable
        caption="Shared tabletop metafields in the tabletop namespace"
        headers={["Key", "Type", "Purpose"]}
        rows={[
          ["edition", "Single line text", "Core, Deluxe, Collector or your own edition name"],
          ["requires_base_game", "Product reference", "The base game an expansion needs, shown as a warning before purchase"],
          ["compatible_editions", "List of single line text", "Which editions of the base game this product works with"],
          ["release_status", "Single line text", "Available, Preorder, Reprinting or Retired"],
          ["expected_delivery", "Date", "The delivery date shown beside a preorder purchase action"],
          ["language", "List of single line text", "Languages included in the box or file"],
          ["box_weight_grams", "Integer", "Shipping weight, kept separate from Shopify weight where packaging differs"],
          ["country_of_origin", "Single line text", "Customs data for international orders"],
          ["hs_code", "Single line text", "Tariff classification for cross border shipping"],
        ]}
      />
      <ArticleCallout>
        <strong>Two fields carry legal weight.</strong>{" "}
        <code>expected_delivery</code> becomes a promise the moment it appears
        next to a buy button, and <code>hs_code</code> with{" "}
        <code>country_of_origin</code> drives customs treatment. Populate both
        from your actual fulfilment and shipping data, never from an estimate a
        model produced. See{" "}
        <Link href="/guides/selling-miniatures-internationally-vat-ioss">
          the international selling guide
        </Link>
        .
      </ArticleCallout>

      <h2 id="board-games">Board and card games</h2>
      <ArticleTable
        caption="Board and card game metafields"
        headers={["Key", "Type", "Purpose"]}
        rows={[
          ["player_count_min", "Integer", "Lowest supported player count, filterable"],
          ["player_count_max", "Integer", "Highest supported player count, filterable"],
          ["playtime_minutes_min", "Integer", "Shortest typical play session"],
          ["playtime_minutes_max", "Integer", "Longest typical play session"],
          ["age_minimum", "Integer", "Publisher age guidance, also used for compliance copy"],
          ["complexity", "Decimal", "Your own weight rating, stated with its scale"],
          ["components", "List of single line text", "What is in the box, rendered as a component list"],
          ["solo_mode", "True or false", "Whether a solo variant is included, a common filter"],
          ["designer", "Single line text", "Credit, and a genuine discovery path for players"],
          ["artist", "Single line text", "Credit, particularly relevant for collector editions"],
        ]}
      />

      <h2 id="ttrpg">TTRPG products</h2>
      <ArticleTable
        caption="TTRPG metafields"
        headers={["Key", "Type", "Purpose"]}
        rows={[
          ["format", "Single line text", "Hardcover, Softcover, PDF or Bundle"],
          ["page_count", "Integer", "Length, one of the strongest buying signals for books"],
          ["game_system", "Single line text", "The ruleset this product is written for"],
          ["setting", "Single line text", "The world or campaign setting"],
          ["reading_order", "Integer", "Where this sits in a series, so new players know where to start"],
          ["digital_delivery", "True or false", "Whether a file is delivered, which changes fulfilment and tax treatment"],
          ["player_facing", "True or false", "Player material or game master material"],
        ]}
      />

      <h2 id="miniatures">Miniatures and terrain</h2>
      <ArticleTable
        caption="Miniature and terrain metafields"
        headers={["Key", "Type", "Purpose"]}
        rows={[
          ["scale", "Single line text", "28mm, 32mm, 1:56 or your stated scale"],
          ["material", "Single line text", "Resin, plastic, metal or MDF"],
          ["assembly_required", "True or false", "Sets expectations before purchase and reduces returns"],
          ["piece_count", "Integer", "Number of pieces or models included"],
          ["base_size_mm", "Integer", "Base diameter, a genuine compatibility question"],
          ["primed", "True or false", "Whether the model ships primed"],
          ["painted", "True or false", "Whether the model ships painted"],
          ["print_ready_files", "True or false", "Whether digital files are included, which changes fulfilment"],
        ]}
      />

      <h2 id="using-it">Using it on the storefront</h2>
      <p>
        These fields can support product pages, collection filters, structured data and generated theme sections. Decide where each field will appear before adding it.
      </p>
      <ol>
        <li>
          <strong>The specification block.</strong> Player count, playtime, age,
          scale and format belong in a compact block near the buy button, not
          buried in prose.
        </li>
        <li>
          <strong>The compatibility notice.</strong> When{" "}
          <code>requires_base_game</code> is set, say so above the purchase
          action. It is the single highest value tabletop specific element on a
          product page.
        </li>
        <li>
          <strong>Collection filters.</strong> Player count, playtime, solo
          mode, scale and format are the filters tabletop customers actually
          want. They only work if the values are typed correctly.
        </li>
        <li>
          <strong>Structured data.</strong> These fields map cleanly to
          additional properties on a product. They do not map to ratings or
          reviews, and no generated markup should claim otherwise.
        </li>
      </ol>
      <p>
        For the page level checklist that sits on top of this schema, use{" "}
        <Link href="/resources/board-game-product-page-checklist">
          the board game product page checklist
        </Link>
        . For the catalog decisions that determine which products carry which
        fields, see{" "}
        <Link href="/guides/sell-board-game-expansions-add-ons-shopify">
          expansions, add ons and bundles
        </Link>
        .
      </p>
    </SeoArticlePage>
  );
}

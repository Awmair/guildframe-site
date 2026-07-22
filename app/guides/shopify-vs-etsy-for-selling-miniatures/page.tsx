import Link from "next/link";
import {
  ArticleCallout,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Shopify vs Etsy for Selling Miniatures",
  description:
    "Compare Shopify and Etsy for selling miniatures, terrain and tabletop accessories by discovery, fees, brand control, catalog structure and repeat customers.",
  path: "/guides/shopify-vs-etsy-for-selling-miniatures",
  kind: "article",
  publishedTime: "2026-07-23",
  modifiedTime: "2026-07-23",
  keywords: [
    "Shopify vs Etsy for selling miniatures",
    "sell miniatures on Shopify",
    "move miniature store from Etsy to Shopify",
    "best platform for selling tabletop miniatures",
  ],
});

const faqs = [
  {
    question: "Is Shopify or Etsy better for selling miniatures?",
    answer:
      "Etsy is useful for marketplace discovery and a faster start. Shopify is stronger when the goal is a permanent branded store, direct customer relationships, richer collections and control over the buying experience. Many miniature sellers can use both with one clear inventory system.",
  },
  {
    question: "Should I leave Etsy when opening Shopify?",
    answer:
      "Not automatically. Keep Etsy when it produces profitable marketplace discovery. Use Shopify as the owned brand store and decide which products belong on each channel. Avoid duplicating inventory without a reliable synchronization process.",
  },
  {
    question: "What does Etsy charge sellers?",
    answer:
      "Etsy currently lists a 20 cent listing fee, a 6.5 percent transaction fee and separate payment processing charges that vary by country. Other fees can apply. Confirm the current fees for your location in Etsy Help before comparing costs.",
  },
];

export default function ShopifyVsEtsyMiniaturesPage() {
  return (
    <SeoArticlePage
      slug="shopify-vs-etsy-for-selling-miniatures"
      category="Miniature store platform comparison"
      title="Shopify vs Etsy for Selling Miniatures and Terrain"
      description="Etsy provides marketplace discovery. Shopify provides an owned store. The strongest choice depends on whether you need initial reach, brand control or both."
      answer="Choose Etsy when marketplace discovery and a low setup barrier matter most. Choose Shopify when you want a branded miniature store, direct customer relationships, stronger catalog organization and control over content and checkout. Established sellers can use Etsy for discovery and Shopify as the permanent brand store, provided inventory and customer promises stay consistent."
      published="2026-07-23"
      updated="2026-07-23"
      readTime="7 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Fees and taxes for selling on Etsy",
          publisher: "Etsy Help",
          href: "https://help.etsy.com/hc/en-us/articles/115014483627-What-are-the-Fees-and-Taxes-for-Selling-on-Etsy",
        },
        {
          label: "Shopify pricing",
          publisher: "Shopify",
          href: "https://www.shopify.com/pricing",
        },
        {
          label: "Shopify platform comparison",
          publisher: "Shopify",
          href: "https://www.shopify.com/compare",
        },
      ]}
      toc={[
        { id: "difference", label: "The core difference" },
        { id: "comparison", label: "Shopify vs Etsy" },
        { id: "etsy", label: "Choose Etsy" },
        { id: "shopify", label: "Choose Shopify" },
        { id: "both", label: "Use both channels" },
        { id: "move", label: "Plan the move" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <h2 id="difference">Etsy is a marketplace. Shopify is your store.</h2>
      <p>
        Etsy puts miniature listings inside a marketplace where shoppers already
        search. Shopify gives the seller a dedicated domain, branded customer
        experience and direct control over the catalog. One is not automatically a
        replacement for the other.
      </p>

      <h2 id="comparison">Shopify vs Etsy at a glance</h2>
      <ArticleTable
        caption="Shopify and Etsy for miniature sellers"
        headers={["Decision area", "Etsy", "Shopify"]}
        rows={[
          ["Discovery", "Marketplace search can introduce new buyers", "The seller builds and owns traffic channels"],
          ["Brand control", "Limited marketplace presentation", "Dedicated domain, theme, content and navigation"],
          ["Catalog structure", "Listings and shop sections", "Products, variants, collections, pages and apps"],
          ["Customer relationship", "Managed within marketplace rules", "Direct store customer and marketing systems"],
          ["Cost model", "Listing, transaction, processing and possible advertising fees", "Subscription, processing and optional app costs"],
          ["Best fit", "Fast testing and marketplace discovery", "Long term brand and catalog growth"],
        ]}
      />

      <h2 id="etsy">Choose Etsy when discovery matters most</h2>
      <p>
        Etsy can be a practical first channel for a sculptor, terrain maker or small
        accessory seller who wants to test demand without first building an audience
        for a separate site. Its listing system is also familiar to buyers searching
        for specific miniature styles or components.
      </p>
      <p>Etsy is usually the better starting point when:</p>
      <ul>
        <li>The catalog is small and easy to represent as individual listings.</li>
        <li>Marketplace search already produces qualified buyers.</li>
        <li>The business is testing products before investing in a full brand store.</li>
        <li>The seller does not yet have an email list or reliable traffic source.</li>
      </ul>
      <ArticleCallout>
        Compare total fees using real orders. Etsy currently lists a 20 cent listing
        fee and a 6.5 percent transaction fee, with separate payment processing and
        possible advertising or regional charges.
      </ArticleCallout>

      <h2 id="shopify">Choose Shopify when the catalog becomes a brand</h2>
      <p>
        Shopify becomes more useful when customers need to understand scales,
        factions, material options, terrain collections, compatible products and
        future releases. The store can combine commerce, photography, guides, email
        capture and customer support under one identity.
      </p>
      <p>Shopify is usually the stronger route when:</p>
      <ul>
        <li>The business can bring traffic from campaigns, content, email or events.</li>
        <li>Products need richer collections and compatibility information.</li>
        <li>The seller wants a direct customer list and repeat purchase system.</li>
        <li>The brand is expanding beyond one marketplace or product style.</li>
        <li>Wholesale, preorders, bundles or subscriptions are becoming important.</li>
      </ul>
      <p>
        Guildframe provides a <Link href="/shopify-theme-for-miniatures">Shopify theme for miniature and terrain stores</Link>
        with layouts designed around detailed products, variants and collections.
      </p>

      <h2 id="both">Using both can be the strongest channel strategy</h2>
      <p>
        Etsy can remain a discovery channel while Shopify becomes the permanent
        brand store. The arrangement works only when product data, pricing,
        inventory and customer messages remain accurate on both channels.
      </p>
      <ArticleTable
        caption="A practical two channel role split"
        headers={["Job", "Recommended owner"]}
        rows={[
          ["Marketplace discovery", "Etsy"],
          ["Complete branded catalog", "Shopify"],
          ["Educational content and guides", "Shopify"],
          ["Direct email capture", "Shopify with customer consent"],
          ["Inventory truth", "One defined source with tested synchronization"],
          ["Customer support", "One documented process across both channels"],
        ]}
      />

      <h2 id="move">Plan the move without losing working demand</h2>
      <ol>
        <li><strong>Audit profitable Etsy listings.</strong> Keep the products that genuinely bring qualified buyers.</li>
        <li><strong>Build the Shopify catalog.</strong> Use clearer product names, collections, variants and compatibility information.</li>
        <li><strong>Choose the inventory owner.</strong> Prevent both channels from selling the same final unit.</li>
        <li><strong>Prepare the brand store.</strong> Add product education, policies, email capture and a direct support route.</li>
        <li><strong>Measure channel value.</strong> Compare profit, repeat orders and customer acquisition, not only gross revenue.</li>
      </ol>
      <p>
        Use the <Link href="/resources/board-game-shopify-store-checklist">Shopify store checklist</Link>
        before directing customers to the new store.
      </p>
    </SeoArticlePage>
  );
}

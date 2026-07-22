import Link from "next/link";
import {
  ArticleCallout,
  ArticleDefinition,
  ArticleTable,
  SeoArticlePage,
} from "../../components/SeoArticlePage";
import { pageMetadata } from "../../site-config";

export const metadata = pageMetadata({
  title: "Selling Miniatures Internationally: VAT and IOSS",
  description:
    "Plan international Shopify sales for miniatures, terrain and tabletop games with shipping zones, HS codes, EU VAT, IOSS, duties and clear customer delivery terms.",
  path: "/guides/selling-miniatures-internationally-vat-ioss",
  kind: "article",
  publishedTime: "2026-07-23",
  modifiedTime: "2026-07-23",
  keywords: [
    "selling miniatures internationally VAT IOSS",
    "Shopify EU VAT miniatures",
    "IOSS tabletop games",
    "international shipping board games Shopify",
  ],
});

const faqs = [
  {
    question: "Do I need IOSS to sell miniatures to the EU?",
    answer:
      "Not every seller must use IOSS. Eligibility and the best collection method depend on where the business and inventory are located, order values and the shipping model. Confirm the decision with a qualified tax adviser or IOSS intermediary before configuring Shopify.",
  },
  {
    question: "Can Shopify collect EU VAT at checkout?",
    answer:
      "Shopify can calculate taxes after the required registrations and settings are added. It can also support duties and import tax collection when the store, carrier and product data meet the requirements. Configuration does not replace registration or filing obligations.",
  },
  {
    question: "What product data is needed for international shipping?",
    answer:
      "Record accurate product weights, package dimensions, country of origin, HS codes, prices and shipping locations. Test the rate and tax result for representative destinations before opening the market.",
  },
  {
    question: "Did EU low value import rules change in July 2026?",
    answer:
      "Yes. EU guidance states that the previous customs duty exemption for low value imports ended on July 1, 2026, with a temporary 3 euro customs duty per item for qualifying consignments. Confirm current treatment with official sources and a customs specialist before shipping.",
  },
];

export default function SellingMiniaturesInternationallyPage() {
  return (
    <SeoArticlePage
      slug="selling-miniatures-internationally-vat-ioss"
      category="International tabletop sales"
      title="Selling Miniatures Internationally: VAT, IOSS and Shopify Setup"
      description="International selling starts with product data, tax decisions and delivery promises before it reaches the checkout settings."
      answer="To sell miniatures, terrain or tabletop games internationally through Shopify, choose the markets you can serve, record accurate weights, HS codes and country of origin, decide whether duties are paid by the seller or customer, confirm VAT and IOSS obligations with a qualified adviser, configure shipping and tax settings, update policies and test representative orders before launch."
      published="2026-07-23"
      updated="2026-07-23"
      readTime="9 minute read"
      faqs={faqs}
      sources={[
        {
          label: "Duties and import taxes",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/international/duties-and-import-taxes",
        },
        {
          label: "EU tax reference",
          publisher: "Shopify Help Center",
          href: "https://help.shopify.com/en/manual/taxes/eu/eu-tax-reference",
        },
        {
          label: "EU applies 3 euro customs duty per item on low value consignments",
          publisher: "European Commission Access2Markets",
          href: "https://webgate.acceptance.ec.europa.eu/portal9/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments",
        },
        {
          label: "EU VAT One Stop Shop",
          publisher: "Your Europe",
          href: "https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm",
        },
      ]}
      toc={[
        { id: "decisions", label: "Make the decisions first" },
        { id: "data", label: "Prepare product data" },
        { id: "vat", label: "Understand VAT and IOSS" },
        { id: "shipping", label: "Configure shipping" },
        { id: "customer", label: "Write customer promises" },
        { id: "test", label: "Test international orders" },
        { id: "faq", label: "Quick answers" },
      ]}
    >
      <ArticleDefinition term="IOSS">
        The Import One Stop Shop is an EU VAT reporting system for eligible distance
        sales of physical goods imported into the EU. Registration, filing and current
        eligibility should be confirmed with an adviser or intermediary.
      </ArticleDefinition>

      <h2 id="decisions">Make the commercial decisions before Shopify setup</h2>
      <p>
        Shopify can calculate rates and taxes only after the business decides where
        it will sell, where inventory ships from and who pays import charges. Start
        with a destination list and a written delivery model for each region.
      </p>
      <ArticleTable
        caption="International selling decisions"
        headers={["Decision", "Question to answer"]}
        rows={[
          ["Markets", "Which countries can the carrier and support process serve reliably?"],
          ["Inventory origin", "Which warehouse or country sends each product?"],
          ["Import charges", "Are duties paid at checkout or collected from the customer on delivery?"],
          ["Tax registration", "Where must the business register, collect and file?"],
          ["Delivery promise", "What time and cost can the customer reasonably expect?"],
        ]}
      />

      <h2 id="data">Prepare the product and customs data</h2>
      <p>
        Miniatures and board games can become expensive to ship because boxes,
        terrain and protective packaging add volume. Record the packed product, not
        only the item on a display shelf.
      </p>
      <ul className="article-checklist">
        <li>Accurate product and package weight</li>
        <li>Package length, width and height</li>
        <li>Country or region of origin</li>
        <li>Appropriate HS code</li>
        <li>Declared product value</li>
        <li>Fulfillment location</li>
        <li>Carrier and service level</li>
      </ul>
      <ArticleCallout>
        Shopify states that HS codes and country of origin affect duty calculations.
        Missing or inaccurate data can create extra charges at delivery.
      </ArticleCallout>

      <h2 id="vat">Understand VAT, IOSS and the July 2026 customs change</h2>
      <p>
        VAT and customs duty are different charges. IOSS is a VAT reporting route for
        eligible imported goods. From July 1, 2026, EU guidance states that the former
        customs duty exemption for low value ecommerce imports ended and a temporary
        3 euro duty per item applies to qualifying consignments.
      </p>
      <p>
        This can materially affect orders containing several miniature packs or add
        ons. Do not publish a blanket duties included promise until a tax and customs
        specialist confirms the model, registrations and carrier support.
      </p>

      <h2 id="shipping">Configure markets, shipping and duties together</h2>
      <ol>
        <li><strong>Create only the markets you can serve.</strong> Avoid accepting orders before rates and support are ready.</li>
        <li><strong>Add shipping zones and rates.</strong> Base them on tested packed orders, not estimates from one product.</li>
        <li><strong>Add customs data.</strong> Complete origin and HS fields for every internationally available SKU.</li>
        <li><strong>Configure taxes after registration.</strong> Enter the registrations and collection rules approved by your adviser.</li>
        <li><strong>Confirm carrier support.</strong> Duty paid orders require compatible labels and operational handling.</li>
      </ol>

      <h2 id="customer">Write the customer promise in plain language</h2>
      <p>
        Tell customers where the order ships from, whether taxes and duties are
        collected at checkout, whether further carrier charges may apply and how
        returns affect those charges. Repeat the essential message on the product,
        cart, policy and order confirmation surfaces.
      </p>
      <p>
        Use the <Link href="/resources/board-game-shopify-store-checklist">board game Shopify store checklist</Link>
        to review the remaining catalog, policy, mobile and checkout work.
      </p>

      <h2 id="test">Test representative international orders</h2>
      <ul>
        <li>One small order and one large order for each priority market</li>
        <li>Products from each fulfillment location</li>
        <li>Orders above and below relevant tax or customs thresholds</li>
        <li>Mixed carts containing games, miniatures and accessories</li>
        <li>Discounted and free promotional items</li>
        <li>Refund and return handling</li>
      </ul>
      <ArticleCallout>
        This guide supports store planning and does not provide tax, customs or legal
        advice. Confirm the live rules for your business and destinations before launch.
      </ArticleCallout>
    </SeoArticlePage>
  );
}

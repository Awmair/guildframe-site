import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";
import { guildframeServiceData } from "../product-data";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify for Funded Tabletop Games",
  description:
    "Turn a funded tabletop campaign into a permanent Shopify store. Plan late pledges, BackerKit or Gamefound handoff, preorders, shipping, EU VAT and IOSS.",
  path: "/kickstarter-to-shopify",
  keywords: [
    "Kickstarter to Shopify",
    "sell board game after Kickstarter",
    "Kickstarter late pledges Shopify",
    "BackerKit to Shopify",
    "Gamefound to Shopify",
    "Shopify store after Kickstarter",
  ],
});

const faqs = [
  {
    question: "When should I build a Shopify store after Kickstarter?",
    answer:
      "Start planning while fulfillment is in progress, once product names, pricing, final artwork and delivery messages are stable. The public store should open only when preorder status, inventory and shipping expectations are accurate.",
  },
  {
    question: "Does Shopify replace BackerKit or Gamefound?",
    answer:
      "No. BackerKit and Gamefound can manage campaign pledges, surveys, upgrades and fulfillment data. Shopify should run the permanent public catalog, retail orders and ongoing customer relationship. Each system needs a clearly defined role.",
  },
  {
    question: "Can Shopify accept late pledges?",
    answer:
      "Shopify can accept preorders or new retail orders, but those orders are not campaign pledges. Keep original backer obligations inside the campaign or pledge manager workflow and label Shopify delivery terms clearly.",
  },
  {
    question: "How long does Guildframe take to build the store?",
    answer:
      "A complete store typically takes 2 to 3 weeks from preview approval to a build that is ready to publish. The delivery plan is confirmed before work begins.",
  },
  {
    question: "Who qualifies for the free 72 hour preview?",
    answer:
      "The preview is for funded creators with final artwork and products ready to sell. Send the campaign, product structure and representative assets so Guildframe can create a useful store direction.",
  },
];

const timeline = [
  {
    title: "Secure the campaign handoff",
    copy: "Confirm payments, surveys, pledge levels, add ons and the system that owns backer fulfillment data.",
  },
  {
    title: "Build while fulfillment moves",
    copy: "Prepare the domain, catalog, policies, store pages and email capture without disrupting backer communication.",
  },
  {
    title: "Open the right sales path",
    copy: "Use late pledges, preorders or regular retail products according to availability and delivery timing.",
  },
  {
    title: "Launch the permanent store",
    copy: "Test mobile, checkout, shipping, taxes and customer messages before directing new buyers to Shopify.",
  },
];

export default function KickstarterToShopifyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/kickstarter-to-shopify#webpage"),
              name: "Kickstarter to Shopify for Funded Tabletop Games",
              url: absoluteUrl("/kickstarter-to-shopify"),
              description:
                "A practical post campaign Shopify service for funded tabletop creators.",
              about: { "@id": absoluteUrl("/done-for-you-shopify-store#service") },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl("/images/post-campaign-tabletop-store-v1.webp"),
              },
              isPartOf: { "@id": absoluteUrl("/#website") },
              inLanguage: "en",
            },
            guildframeServiceData("/images/post-campaign-tabletop-store-v1.webp"),
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Kickstarter to Shopify",
                  item: absoluteUrl("/kickstarter-to-shopify"),
                },
              ],
            },
          ],
        }}
      />
      <a className="skip-link" href="#kickstarter-content">Skip to content</a>
      <SeoHeader />
      <main className="campaign-service-page" id="kickstarter-content">
        <section className="campaign-service-hero">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Kickstarter to Shopify" }]} />
          <div className="campaign-service-hero-grid">
            <div>
              <h1>
                Your campaign funded.
                <em>Now build what comes next.</em>
              </h1>
              <p>
                Guildframe turns a funded tabletop campaign into a permanent
                Shopify store for late demand, preorders, retail sales and future releases.
              </p>
              <p>
                We plan the handoff from Kickstarter, BackerKit or Gamefound,
                then build the catalog, customer journey and international selling setup.
              </p>
              <div className="campaign-service-actions">
                <a className="service-primary-button" href="#start-project">
                  Get my free preview <span aria-hidden="true">↗</span>
                </a>
                <Link href="/guides/kickstarter-to-shopify-launch-timeline">View the launch timeline</Link>
              </div>
              <small>Free previews are for creators with final artwork and products ready to sell.</small>
            </div>
            <div className="campaign-service-hero-image">
              <img
                src="/images/post-campaign-tabletop-store-v1.webp"
                alt="A funded board game campaign becoming a permanent online store with organized products and shipping"
                width="1828"
                height="860"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="campaign-pressure-section">
          <div className="campaign-pressure-heading">
            <h2>The campaign ended. The commercial work did not.</h2>
            <p>
              New buyers still need somewhere to order, backers need clear boundaries
              and the game needs a home beyond the campaign page.
            </p>
          </div>
          <div className="campaign-pressure-grid">
            <article><strong>Capture late demand</strong><p>Choose whether late buyers belong in Kickstarter, a pledge manager or a clearly labeled Shopify preorder.</p></article>
            <article><strong>Protect backer trust</strong><p>Keep campaign fulfillment separate from new retail orders and repeat delivery expectations wherever customers buy.</p></article>
            <article><strong>Open permanent retail</strong><p>Turn rewards into understandable products, editions, bundles and add ons that can support future releases.</p></article>
          </div>
        </section>

        <section className="campaign-timeline-section">
          <div className="campaign-section-heading">
            <h2>A practical post campaign timeline.</h2>
            <p>Prepare the store early, then publish only when the buying promise is accurate.</p>
          </div>
          <ol>
            {timeline.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="campaign-handoff-section">
          <div className="campaign-section-heading campaign-section-heading-light">
            <h2>Give every platform one clear job.</h2>
            <p>Do not force Shopify to become a pledge manager or let the pledge manager become the permanent brand store.</p>
          </div>
          <div className="campaign-handoff-grid">
            <article><span>Kickstarter</span><h3>Funding and campaign communication</h3><p>Keep the original pledge record, campaign updates and backer promises connected to the campaign.</p></article>
            <article><span>BackerKit or Gamefound</span><h3>Surveys and fulfillment data</h3><p>Use the selected pledge system for upgrades, addresses, shipping collection and backer order detail.</p></article>
            <article><span>Shopify</span><h3>Permanent ecommerce</h3><p>Run new retail orders, products, inventory, content, customer accounts and future releases from the store.</p></article>
          </div>
          <Link href="/guides/backerkit-vs-shopify-vs-gamefound">Compare the platform roles ↗</Link>
        </section>

        <section className="campaign-operations-section">
          <div>
            <h2>Preorders and late pledges need different promises.</h2>
            <p>
              A late pledge belongs to the campaign context. A Shopify preorder is a new store order.
              We configure the product status, payment approach, inventory rule and delivery copy so buyers understand the difference.
            </p>
            <Link href="/guides/sell-board-game-preorders-on-shopify">Read the Shopify preorder guide ↗</Link>
          </div>
          <div>
            <h2>International sales start before checkout.</h2>
            <p>
              Shipping zones, package weights, duties and tax treatment affect the promise customers see.
              We configure Shopify around your operational decision, including EU VAT and IOSS requirements where relevant.
            </p>
            <Link href="/guides/selling-miniatures-internationally-vat-ioss">Plan VAT and IOSS setup ↗</Link>
          </div>
        </section>

        <section className="campaign-ready-section">
          <div className="campaign-section-heading">
            <h2>What to prepare while fulfillment runs.</h2>
          </div>
          <ul>
            <li>Final logo, typography and color files</li>
            <li>Approved game artwork and product renders</li>
            <li>Final product names, editions, prices and SKUs</li>
            <li>Box contents, player count, playtime and age guidance</li>
            <li>Preorder availability and expected delivery language</li>
            <li>Package dimensions, weights and shipping regions</li>
            <li>Returns, support and customer contact process</li>
            <li>Clear ownership of backer and new retail order data</li>
          </ul>
        </section>

        <section className="campaign-offer-section">
          <div>
            <h2>See the store direction before committing.</h2>
            <p>
              Send the campaign, final artwork and representative products.
              Guildframe creates a tailored preview within 72 hours at no cost.
            </p>
          </div>
          <div>
            <strong>$2,500</strong>
            <span>Flat fee for up to 50 product SKUs</span>
            <p>A complete store typically takes 2 to 3 weeks after preview approval.</p>
            <a className="service-primary-button" href="#start-project">Get my free preview <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="campaign-faq-section" id="faq">
          <div className="campaign-section-heading"><h2>Questions after funding.</h2></div>
          <div>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

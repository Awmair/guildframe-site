import Link from "next/link";
import { SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { Icon, Roll } from "../components/chrome/Icon";
import { ShopFaq, ShopFrame, ShopHero, ShopTrack } from "../components/shopify/ShopWorld";
import { absoluteUrl, pageMetadata } from "../site-config";
import { contentDates, formatContentDate } from "../content-dates";

export const metadata = pageMetadata({
  title: "Kickstarter to Shopify for Funded Tabletop Games",
  description:
    "Plan a Shopify store after Kickstarter. Separate backer rewards from new orders, prepare your catalogue and discuss optional store setup with Guildframe.",
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
    question: "How long should store preparation take?",
    answer: "Timing depends on your catalogue, assets, operations and review process. Agree a schedule after those requirements are clear.",
  },
  {
    question: "Can Guildframe help with the store after my campaign?",
    answer: "Guildframe offers post campaign communication, product content and artwork support. Optional Shopify planning and setup are scoped under a separate brief after reviewing the catalogue, required features and operating plan. The proposal confirms price, timing and responsibilities.",
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

const prepare = [
  "Final logo, typography and color files",
  "Approved game artwork and product renders",
  "Final product names, editions, prices and SKUs",
  "Box contents, player count, playtime and age guidance",
  "Preorder availability and expected delivery language",
  "Package dimensions, weights and shipping regions",
  "Returns, support and customer contact process",
  "Clear ownership of backer and new retail order data",
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
                "Store planning guidance for tabletop publishers moving from Kickstarter to Shopify.",
              dateModified: contentDates.kickstarter,
              about: { "@type": "Thing", name: "Kickstarter to Shopify migration" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl("/images/campaign/hero.webp"),
              },
              isPartOf: { "@id": absoluteUrl("/#website") },
              inLanguage: "en",
            },
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
      <main className="w-page sh sh-k2s" id="kickstarter-content" tabIndex={-1}>
        <ShopHero
          crumbs={[{ label: "Home", href: "/" }, { label: "Kickstarter to Shopify" }]}
          title={<><span className="w-line"><span>Move from Kickstarter</span></span> <span className="w-line"><span><em>to a Shopify store</em></span></span></>}
        >
          <p className="sh-lead">
            After a funded tabletop campaign, plan a permanent
            Shopify store for late demand, preorders, retail sales and future releases.
          </p>
          <p>
            Review the handoff from Kickstarter, BackerKit or Gamefound,
            then plan the catalogue, buying path and international selling setup.
          </p>
          <div className="sh-actions">
            <Link className="w-btn w-btn--coral" href="/done-for-you-shopify-store" data-title="Shopify store planning" data-analytics-event="service_interest" data-analytics-label="Plan my store handoff" data-analytics-location="Kickstarter to Shopify hero"><Roll>Plan my store handoff</Roll><Icon name="arrow" /></Link>
            <Link className="w-link" href="/resources/board-game-shopify-store-checklist">Use the free store checklist</Link>
          </div>
          <p className="sh-small">Optional store setup needs a separate brief. Reviewed <time dateTime={contentDates.kickstarter}>{formatContentDate(contentDates.kickstarter)}</time>.</p>
        </ShopHero>

        <section className="sh-board tone-board sh-board--lead" aria-labelledby="k2s-after-title">
          <div className="w-wrap-wide">
            <ShopFrame
              src="/images/post-campaign-tabletop-store-v1.webp"
              width={1828}
              height={860}
              alt="A funded tabletop game laid out on a desk with cards, miniatures and shipping boxes, beside a laptop showing the game's new online catalogue"
              caption="The game, the boxes and the store that sells it next"
            />
            <div className="sh-split">
              <div className="sh-split-head">
                <h2 id="k2s-after-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Selling your game</span></span> <span className="w-line"><span><em>after Kickstarter</em></span></span></h2>
                <p>
                  New buyers still need somewhere to order, backers need clear boundaries
                  and the game needs a home beyond the campaign page.
                </p>
              </div>
              <div className="sh-benefits sh-benefits--stack">
                <article><h3>Choose where late buyers order</h3><p>Choose whether late buyers belong in Kickstarter, a pledge manager or a clearly labeled Shopify preorder.</p></article>
                <article><h3>Keep backer rewards separate</h3><p>Keep campaign fulfillment separate from new retail orders and repeat delivery expectations wherever customers buy.</p></article>
                <article><h3>Prepare store products</h3><p>Turn rewards into understandable products, editions, bundles and add ons that can support future releases.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="sh-dusk sh-steps" aria-labelledby="k2s-timeline-title">
          <div className="w-wrap-wide">
            <div className="sh-steps-head">
              <h2 id="k2s-timeline-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>A practical</span></span> <span className="w-line"><span><em>post campaign timeline</em></span></span></h2>
              <p>Prepare products and pages while fulfilment continues. Open sales when you can state availability and delivery terms accurately.</p>
            </div>
            <ShopTrack steps={timeline} />
            <p className="sh-after"><Link className="w-link" href="/guides/kickstarter-to-shopify-launch-timeline">Follow the detailed launch timeline</Link>{" "}or use the <Link className="w-link" href="/guides/move-from-kickstarter-to-shopify">migration guide</Link> to prepare the handoff.</p>
          </div>
        </section>

        <section className="sh-board tone-board sh-roles" aria-labelledby="k2s-roles-title">
          <div className="w-wrap-wide">
            <div className="sh-row-head">
              <div>
                <h2 id="k2s-roles-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>What Kickstarter, pledge managers</span></span> <span className="w-line"><span><em>and Shopify handle</em></span></span></h2>
                <p>Keep a record of which system handles campaign pledges, delivery details and new store orders.</p>
              </div>
              <Link className="w-link" href="/guides/backerkit-vs-shopify-vs-gamefound">Compare the platform roles</Link>
            </div>
            <div className="sh-pieces">
              <article><span className="sh-piece-name">Kickstarter</span><h3>Funding and campaign communication</h3><p>Keep the original pledge record, campaign updates and backer promises connected to the campaign.</p></article>
              <article><span className="sh-piece-name">BackerKit or Gamefound</span><h3>Surveys and fulfillment data</h3><p>Use the selected pledge system for upgrades, addresses, shipping collection and backer order detail.</p></article>
              <article className="sh-piece--store"><span className="sh-piece-name">Shopify</span><h3>Permanent ecommerce</h3><p>Run new retail orders, products, inventory, content, customer accounts and future releases from the store.</p></article>
            </div>
          </div>
        </section>

        <section className="sh-dusk sh-ops" aria-label="Preorders and shipping">
          <div className="w-wrap-wide sh-ops-inner">
            <figure className="sh-cut sh-cut--wide" data-reveal="media">
              <img src="/images/pdp-board-game-store-responsive-v2.jpg" width="1586" height="992" alt="Studio concept Shopify product page for a fictional board game on desktop and phone, with an edition choice, stock status and delivery line" loading="lazy" decoding="async" />
              <figcaption><span className="w-dot w-dot--concept">Studio concept, not client work</span></figcaption>
            </figure>
            <div className="sh-ops-copy">
              <div>
                <h2>Preorders and late pledges need different promises</h2>
                <p>
                  A late pledge belongs to the campaign context. A Shopify preorder is a new store order.
                  Set product availability, payments, inventory and delivery text to match that new order.
                </p>
                <Link className="w-link" href="/guides/sell-board-game-preorders-on-shopify">Read the Shopify preorder guide</Link>
              </div>
              <div>
                <h2>Plan international shipping, VAT and duties</h2>
                <p>
                  Shipping zones, package weights, duties and tax treatment affect the promise customers see.
                  Confirm the tax and customs requirements for your shipping model, then configure Shopify accordingly.
                </p>
                <Link className="w-link" href="/guides/selling-miniatures-internationally-vat-ioss">Plan VAT and IOSS setup</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sh-board tone-board sh-ready" aria-labelledby="k2s-ready-title">
          <div className="w-wrap-wide sh-ready-inner">
            <h2 id="k2s-ready-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>What to prepare</span></span> <span className="w-line"><span><em>while fulfillment runs</em></span></span></h2>
            <ul className="sh-checklist">
              {prepare.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="sh-dusk sh-offer" aria-labelledby="k2s-offer-title">
          <div className="w-wrap-wide sh-offer-inner">
            <div className="sh-offer-copy">
              <h2 id="k2s-offer-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Scope the campaign</span></span> <span className="w-line"><span><em>to store handoff</em></span></span></h2>
              <p>Guildframe can prepare the product content, artwork and communication for the next stage. Optional Shopify planning and setup need a separate brief. Share your campaign link, catalogue, fulfilment status and target opening date.</p>
              <p><Link className="w-link" href="/post-campaign-support" data-title="After the campaign">See post campaign support</Link>{" "}or <Link className="w-link" href="/guides/shopify-developer-vs-diy-theme">compare a developer with DIY setup</Link>.</p>
              <p><Link className="w-link" href="/kickstarter-launch-services" data-title="Launch services">Back to the campaign services</Link></p>
            </div>
            <div className="sh-brief" data-reveal="rise">
              <h3>Your store brief</h3>
              <p>Agree tasks, ownership, price and timing first</p>
              <a className="w-btn w-btn--coral" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Discuss my store handoff" data-analytics-location="Kickstarter to Shopify offer"><Roll>Discuss my store handoff</Roll><Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <ShopFaq title={<><span className="w-line"><span>Questions</span></span> <span className="w-line"><span><em>after funding</em></span></span></>} faqs={faqs} location="Kickstarter to Shopify" />
      </main>
      <SeoFooter />
    </>
  );
}

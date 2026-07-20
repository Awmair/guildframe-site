import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { guildframeServiceData } from "../product-data";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

export const metadata = pageMetadata({
  title: "Shopify Design and Development for Tabletop Brands",
  description:
    "Get a complete Shopify store designed and developed for your tabletop brand for $2,199, including up to 50 product SKUs and a publish-ready handoff.",
  path: "/done-for-you-shopify-store",
  keywords: [
    "Shopify developer for tabletop games",
    "done for you Shopify store",
    "Shopify store design service",
    "Shopify development for board games",
    "tabletop ecommerce agency",
    "Kickstarter to Shopify service",
  ],
});

const deliverables = [
  "Custom storefront design built around your brand",
  "Homepage, catalog, product and essential content pages",
  "Products and supplied campaign content added",
  "Navigation, collections and buying paths structured",
  "Desktop, tablet and mobile design polish",
  "Storefront testing and publish-ready handoff",
];

export default function DoneForYouShopifyStorePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            guildframeServiceData(),
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/done-for-you-shopify-store#webpage"),
              name: "Done-for-You Shopify Store for Tabletop Brands",
              url: absoluteUrl("/done-for-you-shopify-store"),
              description:
                "Shopify design and development for tabletop creators and studios, including up to 50 product SKUs.",
              about: { "@id": absoluteUrl("/done-for-you-shopify-store#service") },
              isPartOf: { "@id": absoluteUrl("/#website") },
              inLanguage: "en",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Done-for-you Shopify store",
                  item: absoluteUrl("/done-for-you-shopify-store"),
                },
              ],
            },
          ],
        }}
      />
      <a className="skip-link" href="#service-content">
        Skip to service details
      </a>
      <SeoHeader />
      <main className="service-page" id="service-content">
        <section className="service-hero">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Done-for-you Shopify store" },
            ]}
          />
          <div className="service-hero-grid">
            <div>
              <h1>
                Your tabletop world.
                <em>Built to sell on Shopify.</em>
              </h1>
              <p>
                We design and develop your complete Shopify storefront, add up
                to 50 product SKUs and take it from an empty store to a polished
                build ready to publish.
              </p>
              <a
                className="service-primary-button"
                href={siteConfig.serviceInquiryUrl}
                data-analytics-event="generate_lead"
                data-analytics-label="Start done-for-you Shopify project"
                data-analytics-location="service hero"
              >
                Start my store project <span aria-hidden="true">↗</span>
              </a>
              <small>
                We confirm the brief, required assets, review process and
                delivery plan before work begins.
              </small>
            </div>
            <aside className="service-price-card" aria-label="Done-for-you service summary">
              <span>Flat project fee</span>
              <strong>$2,199</strong>
              <p>For creators and studios with up to 50 product SKUs.</p>
              <ul>
                <li>Zero to publish-ready</li>
                <li>Custom tabletop storefront</li>
                <li>Responsive design, development and testing</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="service-final-cta service-diy-option">
          <div>
            <h2>Want to build it yourself?</h2>
            <p>
              Get Guildframe, our premium Shopify theme purpose built for
              tabletop games, with four complete presets and full visual editor
              controls.
            </p>
          </div>
          <div>
            <strong className="service-diy-price">$349</strong>
            <Link href="/buy">Get the theme <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="service-deliverables">
          <div className="service-section-heading">
            <h2>The entire storefront, handled.</h2>
            <p>
              We build the customer-facing Shopify experience while you retain
              ownership of the store, products and ongoing operations.
            </p>
          </div>
          <div className="service-deliverable-grid">
            {deliverables.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-process">
          <div className="service-section-heading service-section-heading-light">
            <h2>From assets to launch in three stages.</h2>
          </div>
          <div className="service-process-grid">
            <article>
              <span>01</span>
              <h3>Brief the store</h3>
              <p>Send approved product data, copy, branding and final visual assets.</p>
            </article>
            <article>
              <span>02</span>
              <h3>We design and develop</h3>
              <p>We structure the catalog, build the pages and polish every screen size.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Review and publish</h3>
              <p>Review the completed storefront, approve it and publish on Shopify.</p>
            </article>
          </div>
        </section>

        <section className="service-scope">
          <div>
            <h2>A clear scope. No hourly ambiguity.</h2>
            <p>
              The project includes the complete storefront and up to 50 product
              SKUs. We confirm the pages, assets, review process and delivery
              plan before development begins.
            </p>
          </div>
          <div>
            <h3>You provide</h3>
            <p>Approved product data, copy, brand assets and final images.</p>
            <h3>Separate costs</h3>
            <p>
              Shopify plans, paid apps, custom app development, photography,
              illustration and new copywriting are not included.
            </p>
          </div>
        </section>

        <section className="service-final-cta">
          <h2>Ready to build your tabletop store?</h2>
          <p>Tell us what you sell, what is ready and where your Shopify store stands today.</p>
          <div>
            <a
              className="service-primary-button"
              href={siteConfig.serviceInquiryUrl}
              data-analytics-event="generate_lead"
              data-analytics-label="Start done-for-you Shopify project"
              data-analytics-location="service final CTA"
            >
              Contact the developer <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

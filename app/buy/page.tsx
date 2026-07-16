import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { SeoFooter, SeoHeader } from "../components/SeoChrome";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";

export const metadata: Metadata = pageMetadata({
  title: "Buy Guildframe",
  description:
    "Get the Guildframe Shopify theme for tabletop creators, four complete styles and free custom storefront setup during early release.",
  path: "/buy",
  keywords: [
    "buy Guildframe",
    "tabletop Shopify theme",
    "board game Shopify theme",
    "Kickstarter Shopify theme",
  ],
});

const inclusions = [
  "Four complete storefront styles",
  "Campaign, product and content page templates",
  "Shopify editor controls",
  "Responsive layouts for desktop, tablet and mobile",
  "Setup documentation",
  "$2,500 custom setup included during early release",
];

export default function BuyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": absoluteUrl("/buy#product"),
          name: "Guildframe",
          description: siteConfig.description,
          image: absoluteUrl(siteConfig.socialImage),
          brand: { "@type": "Brand", name: "Guildframe" },
          offers: {
            "@type": "Offer",
            url: absoluteUrl("/buy"),
            priceCurrency: "USD",
            price: "419",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <a className="skip-link" href="#purchase-content">
        Skip to purchase details
      </a>
      <SeoHeader />
      <main className="buy-page" id="purchase-content">
        <section className="buy-hero">
          <div className="buy-copy">
            <h1>
              Get Guildframe.
              <span>Launch your world.</span>
            </h1>
            <p>
              One tabletop-focused Shopify theme, four distinct styles and a
              free custom setup service during early release.
            </p>
            <div className="buy-price-row">
              <strong>$419</strong>
              <span>One-time payment</span>
            </div>

            {siteConfig.checkoutUrl ? (
              <a
                className="buy-checkout-button"
                href={siteConfig.checkoutUrl}
                data-analytics-event="checkout_redirect"
                data-analytics-label="Continue to secure checkout"
                data-analytics-location="purchase page"
                rel="nofollow"
              >
                Continue to secure checkout <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <div className="buy-checkout-pending" id="checkout-unavailable">
                <strong>Checkout is ready to connect.</strong>
                <span>
                  The live payment link is added as a protected launch setting.
                </span>
              </div>
            )}

            <small>
              Requires an active Shopify store. Shopify plan, payment processing
              and third-party app fees are separate.
            </small>
          </div>

          <aside className="buy-inclusions" aria-label="Guildframe purchase summary">
            <img src="/brand/guildframe-logo.svg" alt="Guildframe" />
            <h2>Everything included</h2>
            <ul>
              {inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="buy-setup-scope">
          <div>
            <h2>How free custom setup works</h2>
            <p>
              After purchase, choose a style and send your final logo, product
              details, campaign copy and artwork. We confirm the pages, assets,
              review process and delivery window before work begins.
            </p>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>Buy Guildframe</strong>
              <p>Secure the early release setup bonus.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Send final assets</strong>
              <p>Share the content required for the agreed pages.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Review your store</strong>
              <p>We build, polish and return it ready for review.</p>
            </li>
          </ol>
          <p className="buy-scope-note">
            Custom features, app development, copywriting and work outside the
            agreed visual setup are separate. Most focused stores are estimated
            for review within 3 to 5 business days after final assets arrive.
          </p>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { SeoFooter, SeoHeader } from "../components/SeoChrome";
import { pageMetadata, siteConfig } from "../site-config";
import { guildframeProductData } from "../product-data";

export const metadata: Metadata = pageMetadata({
  title: "Buy Guildframe",
  description:
    "Buy the Guildframe premium Shopify theme for tabletop creators for $349. Get four purpose built presets, flexible editor controls and responsive storefront layouts.",
  path: "/buy",
  keywords: [
    "buy Guildframe",
    "tabletop Shopify theme",
    "board game Shopify theme",
    "Kickstarter Shopify theme",
  ],
});

const inclusions = [
  "Four purpose built storefront presets",
  "Campaign, product and content page templates",
  "Shopify editor controls",
  "Responsive layouts for desktop, tablet and mobile",
  "Setup documentation",
  "One time license with no Guildframe subscription",
];

export default function BuyPage() {
  const checkoutHref = siteConfig.checkoutUrl;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...guildframeProductData(),
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
              Build it yourself.
              <span>Make it unmistakably yours.</span>
            </h1>
            <p>
              Get the complete tabletop focused Shopify theme, choose one of
              four distinct presets and customize every detail without code.
            </p>
            <div className="buy-price-row">
              <strong>$349</strong>
              <span>One time payment</span>
            </div>

            <a
              className="buy-checkout-button"
              href={checkoutHref ?? "#theme-checkout"}
              data-analytics-event="theme_interest"
              data-analytics-label="Get Guildframe theme"
              data-analytics-location="purchase page"
            >
              Get the theme <span aria-hidden="true">↗</span>
            </a>

            <small>
              Requires an active Shopify store. Shopify plan, payment processing
              and third party app fees are separate.
            </small>
          </div>

          <aside className="buy-inclusions" aria-label="Guildframe purchase summary">
            <img src="/brand/guildframe-logo.svg" alt="Guildframe" width="1000" height="220" />
            <h2>Everything included</h2>
            <ul>
              {inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="buy-checkout-placeholder" id="theme-checkout">
          <div>
            <h2>One theme. Four complete storefront directions.</h2>
            <p>
              The secure purchase link will open from this page. Theme access,
              documentation and installation steps are delivered after payment.
            </p>
          </div>
          {checkoutHref ? (
            <a
              className="buy-checkout-button"
              href={checkoutHref}
              data-analytics-event="theme_interest"
              data-analytics-label="Get Guildframe theme"
              data-analytics-location="theme checkout"
            >
              Get the theme <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="buy-checkout-status">Secure checkout link pending</span>
          )}
        </section>

        <section className="buy-setup-scope">
          <div>
            <h2>Want us to build the entire store instead?</h2>
            <p>
              For $2,500, we design and develop your complete Shopify storefront,
              add up to 50 product SKUs and take it from an empty store to a
              reviewed build ready to publish.
            </p>
            <a className="buy-service-link" href="#start-project">
              Get my free preview <span aria-hidden="true">↗</span>
            </a>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>Choose a preset</strong>
              <p>Pick Rune or Saga, then choose the Single or Studio structure.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Add your content</strong>
              <p>Bring in your products, campaign story and final artwork.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Customize and publish</strong>
              <p>Tune the design in Shopify, test the store and go live.</p>
            </li>
          </ol>
          <p className="buy-scope-note">
            The theme requires an active Shopify store. Shopify plan, payment
            processing, paid apps and custom app development are separate.
          </p>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

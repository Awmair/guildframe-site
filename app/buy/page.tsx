import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { absoluteUrl, pageMetadata, siteConfig } from "../site-config";
import { guildframeProductData } from "../product-data";

export const metadata: Metadata = pageMetadata({
  title: "Buy the Guildframe Build Guide",
  description:
    "Build your own tabletop Shopify store using an AI tool for $79. Get the exact prompts to copy, what to fix when the AI gets it wrong, and an example store.",
  path: "/buy",
  keywords: [
    "Guildframe Build Guide",
    "build a tabletop Shopify store",
    "AI Shopify theme development",
    "board game Shopify store guide",
  ],
});

const inclusions = [
  "The exact prompts, written out and ready to copy",
  "What each prompt gets wrong the first time, and how to fix it",
  "How to set up editions, expansions, add ons and preorders",
  "Where to put player count, playtime and what is in the box",
  "A finished example store you can copy from",
  "A plain checklist to run before you open for orders",
];

export default function BuyPage() {
  const checkoutHref = siteConfig.checkoutUrl;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl("/buy#webpage"),
              url: absoluteUrl("/buy"),
              name: "Buy the Guildframe Build Guide",
              description:
                "The $79 Guildframe Build Guide purchase page, including what the guide covers and the current checkout status.",
              isPartOf: { "@id": absoluteUrl("/#website") },
              about: { "@id": absoluteUrl("/buy#product") },
              breadcrumb: { "@id": absoluteUrl("/buy#breadcrumb") },
              inLanguage: "en",
            },
            guildframeProductData(),
            {
              "@type": "BreadcrumbList",
              "@id": absoluteUrl("/buy#breadcrumb"),
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Build guide", item: absoluteUrl("/buy") },
              ],
            },
          ],
        }}
      />
      <a className="skip-link" href="#purchase-content">
        Skip to purchase details
      </a>
      <SeoHeader />
      <main className="buy-page" id="purchase-content">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Build guide" }]} />
        <section className="buy-hero">
          <div className="buy-copy">
            <h1>
              Build it yourself.
              <span>Make it unmistakably yours.</span>
            </h1>
            <p>
              Build your own Shopify store using an AI tool, without hiring
              anyone. The guide gives you the prompts to copy, tells you what to
              do when the AI gets it wrong, and shows you how to set your game,
              editions and expansions up so buyers pick the right thing.
            </p>
            <div className="buy-price-row">
              <strong>$79</strong>
              <span>One time payment</span>
            </div>

            <a
              className="buy-checkout-button"
              href={checkoutHref ?? "#guide-checkout"}
              data-analytics-event="guide_interest"
              data-analytics-label="Get the build guide"
              data-analytics-location="purchase page"
            >
              Get the build guide <span aria-hidden="true">↗</span>
            </a>

            <small>
              You need a Shopify store and an AI tool such as Claude, Cursor or
              Codex. Your Shopify plan, payment processing and any paid apps are
              separate costs.
            </small>
          </div>

          <aside className="buy-inclusions" aria-label="Build guide contents summary">
            <img src="/brand/guildframe-logo.svg" alt="Guildframe" width="1000" height="220" />
            <h2>What you get</h2>
            <ul>
              {inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="buy-checkout-placeholder" id="guide-checkout">
          <div>
            <h2>Written for games, not for a generic shop.</h2>
            <p>
              The secure purchase link will open from this page. The guide, the
              prompt file and the example store are delivered as a download
              after payment.
            </p>
          </div>
          {checkoutHref ? (
            <a
              className="buy-checkout-button"
              href={checkoutHref}
              data-analytics-event="guide_interest"
              data-analytics-label="Get the build guide"
              data-analytics-location="guide checkout"
            >
              Get the build guide <span aria-hidden="true">↗</span>
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
            <p className="buy-decision-note">
              Still deciding? Compare both routes in the{" "}
              <Link href="/guides/shopify-developer-vs-diy-theme">
                Shopify developer vs DIY theme guide
              </Link>
              , read the{" "}
              <Link href="/guides/build-a-tabletop-shopify-store-with-ai">
                free guide on building with AI
              </Link>
              , or budget the whole project with the{" "}
              <Link href="/guides/how-much-does-a-board-game-website-cost">
                board game website cost guide
              </Link>
              .
            </p>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>Plan your products</strong>
              <p>Work out how your game, editions and add ons should be listed.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Copy the prompts</strong>
              <p>Paste them into your AI tool and it builds each part for you.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Check and open</strong>
              <p>Run the checklist, then open the store to customers.</p>
            </li>
          </ol>
          <p className="buy-scope-note">
            You need a Shopify store and an AI tool such as Claude, Cursor or
            Codex. Your Shopify plan, payment processing and any paid apps are
            separate costs.
          </p>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

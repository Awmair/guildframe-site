import Link from "next/link";
import { siteConfig } from "../site-config";

export function SeoHeader() {
  return (
    <header className="seo-header">
      <Link className="seo-brand" href="/" aria-label="Guildframe home">
        <img src="/brand/guildframe-logo.svg" alt="Guildframe" width="1000" height="220" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#styles">Presets</Link>
        <Link href="/shopify-theme-for-board-games">Board games</Link>
        <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
        <Link href="/guides">Guides</Link>
        <Link href="/resources">Resources</Link>
      </nav>
      <Link
        className="seo-header-cta"
        href="/#pricing"
        data-analytics-event="view_pricing"
        data-analytics-label="Compare Guildframe offers"
        data-analytics-location="SEO header"
      >
        View both options <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function SeoFooter() {
  return (
    <footer className="seo-footer">
      <div className="seo-footer-cta">
        <div>
          <h2>Your world deserves a storefront built for it.</h2>
        </div>
        <div className="seo-footer-actions">
          <Link
            className="seo-button seo-button-light"
            href="/buy"
            data-analytics-event="begin_checkout"
            data-analytics-label="Buy Guildframe theme for $419"
            data-analytics-location="SEO footer"
          >
            Buy the $419 theme <span aria-hidden="true">↗</span>
          </Link>
          <Link
            className="seo-button seo-button-outline"
            href="/done-for-you-shopify-store"
            data-analytics-event="service_interest"
            data-analytics-label="View done-for-you Shopify service"
            data-analytics-location="SEO footer"
          >
            Get the $1,399 full build <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="seo-footer-grid">
        <div className="seo-footer-brand">
          <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" width="1000" height="220" />
          <p>
            A premium Shopify theme and flat-fee done-for-you storefront service
            for tabletop game creators.
          </p>
        </div>
        <nav aria-label="Solutions">
          <strong>Solutions</strong>
          <Link href="/shopify-theme-for-board-games">Board game stores</Link>
          <Link href="/shopify-theme-for-ttrpg">TTRPG stores</Link>
          <Link href="/shopify-theme-for-miniatures">Miniature stores</Link>
          <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
          <Link href="/done-for-you-shopify-store">Done-for-you Shopify store</Link>
        </nav>
        <nav aria-label="Resources">
          <strong>Resources</strong>
          <Link href="/guides">Guides</Link>
          <Link href="/guides/move-from-kickstarter-to-shopify">
            Migration guide
          </Link>
          <Link href="/guides/best-shopify-themes-for-board-games">
            Theme comparison
          </Link>
          <Link href="/resources">Checklists and references</Link>
          <Link href="/resources/kickstarter-tabletop-games-benchmark">
            Kickstarter tabletop benchmark
          </Link>
          <Link href="/about">About Guildframe</Link>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/#pricing">Pricing</Link>
        </nav>
      </div>
      <div className="seo-footer-bottom">
        <span>Guildframe. Built for tabletop commerce. Shopify Partner.</span>
        <div>
          <a href={siteConfig.contactInquiryUrl}>Email the developer</a>
          <Link href="/">Back to homepage ↑</Link>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}

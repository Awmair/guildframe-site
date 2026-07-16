import Link from "next/link";

export function SeoHeader() {
  return (
    <header className="seo-header">
      <Link className="seo-brand" href="/" aria-label="Guildframe home">
        <img src="/brand/guildframe-logo.svg" alt="Guildframe" width="1000" height="220" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#styles">Styles</Link>
        <Link href="/shopify-theme-for-board-games">Board games</Link>
        <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
        <Link href="/guides">Guides</Link>
      </nav>
      <Link
        className="seo-header-cta"
        href="/buy"
        data-analytics-event="begin_checkout"
        data-analytics-label="Get Guildframe"
        data-analytics-location="SEO header"
      >
        Get Guildframe <span aria-hidden="true">↗</span>
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
        <Link
          className="seo-button seo-button-light"
          href="/buy"
          data-analytics-event="begin_checkout"
          data-analytics-label="Get Guildframe and free custom setup"
          data-analytics-location="SEO footer"
        >
          Get Guildframe + Free Custom Setup <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="seo-footer-grid">
        <div className="seo-footer-brand">
          <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" width="1000" height="220" />
          <p>
            A Shopify theme for tabletop game creators, with free done-for-you
            storefront setup during early release.
          </p>
        </div>
        <nav aria-label="Solutions">
          <strong>Solutions</strong>
          <Link href="/shopify-theme-for-board-games">Board game stores</Link>
          <Link href="/shopify-theme-for-ttrpg">TTRPG stores</Link>
          <Link href="/shopify-theme-for-miniatures">Miniature stores</Link>
          <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
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
          <Link href="/#pricing">Pricing</Link>
        </nav>
      </div>
      <div className="seo-footer-bottom">
        <span>Guildframe. Built for tabletop commerce.</span>
        <Link href="/">Back to homepage ↑</Link>
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

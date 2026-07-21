import Link from "next/link";
import { ProjectInquiryForm } from "./ProjectInquiryForm";
import { siteConfig } from "../site-config";

export function SeoHeader() {
  return (
    <header className="seo-header">
      <Link className="seo-brand" href="/" aria-label="Guildframe home">
        <img src="/brand/guildframe-logo.svg" alt="Guildframe" width="1000" height="220" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/done-for-you-shopify-store">Services</Link>
        <Link href="/#styles">DIY</Link>
        <Link href="/shopify-theme-for-board-games">Board games</Link>
        <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
        <Link href="/guides">Guides</Link>
      </nav>
      <Link
        className="seo-header-cta"
        href="#start-project"
        data-analytics-event="service_interest"
        data-analytics-label="Get my free preview"
        data-analytics-location="SEO header"
      >
        Get my free preview <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function SeoFooter() {
  return (
    <>
      <div className="seo-footer-cta">
        <div>
          <h2>Your world deserves a storefront built for it.</h2>
        </div>
        <div className="seo-footer-actions">
          <Link
            className="seo-button seo-button-light"
            href="#start-project"
            data-analytics-event="service_interest"
            data-analytics-label="Get my free preview"
            data-analytics-location="SEO footer"
          >
            Get my free preview <span aria-hidden="true">↗</span>
          </Link>
          <Link
            className="seo-button seo-button-outline"
            href="/buy"
            data-analytics-event="begin_checkout"
            data-analytics-label="Get Guildframe theme"
            data-analytics-location="SEO footer"
          >
            Get the theme <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <ProjectInquiryForm source="sitewide page footer" />
      <footer className="seo-footer">
        <div className="seo-footer-grid">
          <div className="seo-footer-brand">
            <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" width="1000" height="220" />
            <p>
              Shopify design, development and a premium DIY theme built
              specifically for tabletop game creators.
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
    </>
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

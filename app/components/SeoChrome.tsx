import Link from "next/link";
import { ProjectInquiryForm } from "./ProjectInquiryForm";
import { SiteHeader } from "./chrome/SiteHeader";
import { siteConfig } from "../site-config";
import { BrandLockup } from "./chrome/Brand";

export function SeoHeader() {
  return <SiteHeader />;
}


export function SeoFooter() {
  return <>
    <ProjectInquiryForm source="project enquiry" />
    <footer className="w-footer">
      <div className="w-footer-grid">
        <div className="w-footer-lead">
          <Link className="w-brand" href="/" data-title="Home"><BrandLockup /></Link>
          <p>Kickstarter launches for first time creators of products, games and books, from the first brief to launch day and the updates after it.</p>
          <a className="w-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="footer">{siteConfig.contactEmail}</a>
        </div>
        <nav aria-label="Campaign services">
          <strong>Launch services</strong>
          <Link href="/kickstarter-launch-services">Kickstarter launches</Link>
          <Link href="/kickstarter-prelaunch-marketing">Prelaunch marketing</Link>
          <Link href="/campaign-design">Campaign page and pricing</Link>
          <Link href="/campaign-creative">Scripts, renders and motion</Link>
          <Link href="/kickstarter-advertising">Paid advertising</Link>
          <Link href="/kickstarter-campaign-management">Campaign management</Link>
          <Link href="/gamefound-launch-services">Gamefound launches</Link>
          <Link href="/post-campaign-support">After the campaign</Link>
        </nav>
        <nav aria-label="Who we work with">
          <strong>Who we work with</strong>
          <Link href="/kickstarter-product-campaign-design">Products</Link>
          <Link href="/tabletop-kickstarter-campaigns">Tabletop</Link>
          <Link href="/kickstarter-product-campaign-design#books">Books</Link>
          <Link href="/board-game-kickstarter-campaign-design">Board games</Link>
          <Link href="/ttrpg-kickstarter-campaign-design">Tabletop RPGs</Link>
        </nav>
        <nav aria-label="Guildframe resources">
          <strong>Guides and studio</strong>
          <Link href="/guides">Launch guides</Link>
          <Link href="/resources">Checklists and references</Link>
          <Link href="/work">Campaign case studies</Link>
          <Link href="/about">About Guildframe</Link>
          <Link href="/authors/guildframe">Meet Umair</Link>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/buy">Before you book</Link>
          <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
          <a href="#start-project">Start a project</a>
        </nav>
      </div>
      <div className="w-footer-word" aria-hidden="true" data-reveal="brand"><BrandLockup className="w-footer-lockup" label="Guildframe" /></div>
      <div className="w-footer-bottom">
        <span>© 2026 Guildframe. Led by Umair.</span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy#analytics" data-analytics-preferences>Analytics choices</Link>
        </nav>
      </div>
    </footer>
  </>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={`${item.label}-${index}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</li>)}</ol></nav>;
}

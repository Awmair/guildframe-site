import type { Metadata } from "next";
import Link from "next/link";
import { SeoFooter, SeoHeader } from "./components/SeoChrome";
import { BrandMark } from "./components/chrome/Brand";
import { Icon, Roll } from "./components/chrome/Icon";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Guildframe page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#not-found-content">
        Skip to content
      </a>
      <SeoHeader />
      <main className="w-page nf" id="not-found-content" tabIndex={-1}>
        <div className="nf-inner">
          <div className="nf-copy">
            <BrandMark className="nf-mark" />
            {/* One unbroken string: the 404 test looks for this exact phrase in the exported HTML. */}
            <h1 className="nf-title">This page could not be found</h1>
            <p className="nf-body">
              That link is out of date or mistyped. The home page, the guides and the case studies are all still here.
            </p>
            <div className="nf-actions">
              <Link className="w-btn w-btn--coral" href="/" data-title="Home">
                <Roll>Back to the table</Roll>
                <Icon name="arrow" />
              </Link>
              <Link className="w-link" href="/guides" data-title="Guides">Guides</Link>
              <Link className="w-link" href="/work" data-title="Work">Work</Link>
            </div>
          </div>
          <div className="nf-scene" aria-hidden="true">
            <div className="nf-board">
              <img className="nf-board-art" src="/images/table/mat-base-v1.webp" width="1536" height="1024" alt="" />
              <BrandMark className="nf-frame" />
            </div>
            <img className="nf-pawn" src="/images/table/dressing-parcel-v1.webp" width="512" height="448" alt="" />
          </div>
        </div>
      </main>
      <SeoFooter />
    </>
  );
}

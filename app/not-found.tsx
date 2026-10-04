import type { Metadata } from "next";
import Link from "next/link";
import { SeoFooter, SeoHeader } from "./components/SeoChrome";

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
      <main className="not-found-page" id="not-found-content">
        <div>
          <span>404</span>
          <h1>This page could not be found.</h1>
          <p>
            Use the links below to find launch services or a practical guide.
          </p>
          <div className="not-found-actions">
            <Link className="seo-button" href="/">
              Return home 
            </Link>
            <Link className="seo-text-link" href="/guides">
              Explore the guides
            </Link>
          </div>
        </div>
      </main>
      <SeoFooter />
    </>
  );
}

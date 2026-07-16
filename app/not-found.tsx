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
      <SeoHeader />
      <main className="not-found-page">
        <div>
          <span>404</span>
          <h1>This path ends here.</h1>
          <p>
            The page may have moved, but your route back to Guildframe is clear.
          </p>
          <div className="not-found-actions">
            <Link className="seo-button" href="/">
              Return home <span aria-hidden="true">↗</span>
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

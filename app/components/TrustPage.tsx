import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";

export function TrustPage({
  title,
  description,
  label,
  updated,
  children,
}: {
  title: string;
  description: string;
  label: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#trust-content">Skip to content</a>
      <SeoHeader />
      <main className="trust-main">
        <header className="trust-hero">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label }]} />
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Reviewed <time dateTime={updated}>July 17, 2026</time></span>
          </div>
        </header>
        <article className="trust-content" id="trust-content">
          {children}
          <aside className="trust-links" aria-label="Guildframe trust links">
            <strong>How Guildframe works</strong>
            <Link href="/about">About Guildframe</Link>
            <Link href="/editorial-policy">Editorial policy</Link>
            <Link href="/authors/guildframe">Editorial team</Link>
            <Link href="/resources">Reference library</Link>
          </aside>
        </article>
      </main>
      <SeoFooter />
    </>
  );
}

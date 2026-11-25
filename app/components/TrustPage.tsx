import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";
import { formatContentDate } from "../content-dates";
import { TrustToc, type TrustTocItem } from "./studio/TrustToc";

export type { TrustTocItem };

/**
 * One template for the studio and trust pages.
 * document: dark hero band, then a numbered reading column on board with a sticky contents list.
 * offer: dark hero with a board piece and actions, then numbered rows (on board or on dusk).
 * studio: the draggable desk as the hero, then the story beside the founder portrait.
 */
export function TrustPage({
  title,
  heading,
  description,
  label,
  updated,
  children,
  variant = "document",
  tone = "board",
  contents,
  art,
  actions,
  aside,
  portrait = false,
}: {
  title: string;
  heading?: ReactNode;
  description: string;
  label: string;
  updated: string;
  children: ReactNode;
  variant?: "document" | "offer" | "studio";
  tone?: "board" | "dusk";
  contents?: TrustTocItem[];
  art?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  portrait?: boolean;
}) {
  const display = heading ?? title;
  return (
    <>
      <a className="skip-link" href="#trust-content">Skip to content</a>
      <SeoHeader />
      <main id="main-content" tabIndex={-1} className={`w-page st st--${variant} st--${tone}`}>
        <header className={`st-hero${art ? " st-hero--art" : ""}`}>
          {variant === "studio" ? art : null}
          <div className="st-hero-inner">
            <div className="st-hero-copy">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label }]} />
              <h1 className="st-title" data-reveal={heading ? "lines" : undefined}>{display}</h1>
              <p className="st-lead">{description}</p>
              <p className="st-reviewed">Reviewed <time dateTime={updated}>{formatContentDate(updated)}</time></p>
              {actions ? <div className="st-actions">{actions}</div> : null}
            </div>
            {variant !== "studio" && art ? <div className="st-hero-art" aria-hidden="true">{art}</div> : null}
            {portrait ? (
              <figure className="st-hero-portrait">
                <img src="/images/guildframe-founder-portrait-v1.webp" width="1254" height="1254" alt="Umair, founder of Guildframe" loading="eager" decoding="async" />
              </figure>
            ) : null}
          </div>
        </header>
        <div className={`st-body${tone === "board" ? " tone-board" : ""}`}>
          <div className={`st-body-grid${contents?.length ? " has-toc" : ""}${aside ? " has-aside" : ""}`}>
            {contents?.length ? <TrustToc items={contents} /> : null}
            {aside ? <div className="st-aside">{aside}</div> : null}
            <article className="st-doc" id="trust-content">
              {children}
              <aside className="st-links" aria-label="Guildframe trust links">
                <strong>How Guildframe works</strong>
                <ul>
                  <li><Link href="/about">About Guildframe</Link></li>
                  <li><Link href="/editorial-policy">Editorial policy</Link></li>
                  <li><Link href="/authors/guildframe">About the author</Link></li>
                  <li><Link href="/resources">Reference library</Link></li>
                </ul>
              </aside>
            </article>
          </div>
        </div>
      </main>
      <SeoFooter />
    </>
  );
}

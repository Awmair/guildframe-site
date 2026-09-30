import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";
import { absoluteUrl, siteConfig } from "../site-config";
import { authorId } from "../seo-entities";
import { formatContentDate } from "../content-dates";

export type ArticleFaq = { question: string; answer: string };
export type ArticleSource = {
  label: string;
  publisher: string;
  href: string;
};

export function SeoArticlePage({
  slug,
  path,
  collectionLabel = "Guides",
  collectionHref = "/guides",
  schemaType = "Article",
  sidebarTitle = "In this guide",
  category,
  title,
  description,
  answer,
  published,
  updated,
  readTime,
  toc,
  faqs,
  sources,
  children,
}: {
  slug: string;
  path?: string;
  collectionLabel?: string;
  collectionHref?: string;
  schemaType?: "Article" | "TechArticle";
  sidebarTitle?: string;
  category: string;
  title: string;
  description: string;
  answer: string;
  published: string;
  updated: string;
  readTime: string;
  toc: { id: string; label: string }[];
  faqs: ArticleFaq[];
  sources: ArticleSource[];
  children: ReactNode;
}) {
  const canonicalPath = path ?? `/guides/${slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl(canonicalPath),
              url: absoluteUrl(canonicalPath),
              name: title,
              description,
              isPartOf: { "@id": absoluteUrl("/#website") },
              breadcrumb: { "@id": absoluteUrl(`${canonicalPath}#breadcrumb`) },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl(siteConfig.socialImage),
              },
              datePublished: published,
              dateModified: updated,
              inLanguage: "en",
            },
            {
              "@type": schemaType,
              "@id": absoluteUrl(`${canonicalPath}#article`),
              headline: title,
              description,
              datePublished: published,
              dateModified: updated,
              mainEntityOfPage: {
                "@id": absoluteUrl(canonicalPath),
              },
              image: absoluteUrl(siteConfig.socialImage),
              articleSection: category,
              inLanguage: "en",
              isAccessibleForFree: true,
              author: { "@id": authorId() },
              publisher: { "@id": absoluteUrl("/#organization") },
              citation: sources.map((source) => ({
                "@type": "CreativeWork",
                name: source.label,
                url: source.href.startsWith("/") ? absoluteUrl(source.href) : source.href,
                publisher: { "@type": "Organization", name: source.publisher },
              })),
              about: [
                "Tabletop games",
                category,
              ],
            },
            {
              "@type": "BreadcrumbList",
              "@id": absoluteUrl(`${canonicalPath}#breadcrumb`),
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: absoluteUrl("/"),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: collectionLabel,
                  item: absoluteUrl(collectionHref),
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: title,
                  item: absoluteUrl(canonicalPath),
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": absoluteUrl(`${canonicalPath}#faq`),
              isPartOf: { "@id": absoluteUrl(canonicalPath) },
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />
      <a className="skip-link" href="#article-content">
        Skip to article
      </a>
      <SeoHeader />
      <main className={`article-main${schemaType === "TechArticle" ? " reference-main" : ""}`}>
        <header className="article-hero">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: collectionLabel, href: collectionHref },
              { label: title },
            ]}
          />
          <div className="article-hero-inner">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="article-meta">
              <span>Updated <time dateTime={updated}>{formatContentDate(updated)}</time></span>
              <span>{readTime}</span>
              <Link href="/authors/guildframe">By Umair at Guildframe</Link>
            </div>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <strong>{sidebarTitle}</strong>
            <nav aria-label="Table of contents">
              {toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  {item.label}
                </a>
              ))}
            </nav>
            <Link
              href={siteConfig.purchasePath}
              data-analytics-event="service_interest"
              data-analytics-label="Campaign design"
              data-analytics-location="article sidebar"
            >
              Campaign design · $975 ↗
            </Link>
          </aside>

          <article className="article-body" id="article-content">
            <div className="article-direct-answer" aria-label="Direct answer">
              <p>{answer}</p>
            </div>
            {children}
            <section className="article-sources" aria-labelledby="article-sources-title">
              <h2 id="article-sources-title">Sources and references</h2>
              <p>
                The sources below cover platform features, policies and figures used in this article. Check the current documentation before making a decision. Practical recommendations are from Umair at Guildframe.
              </p>
              <ul>
                {sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                    <span>{source.publisher}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="article-faq" id="faq">
              <h2>Frequently asked questions</h2>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<i aria-hidden="true">+</i></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
            <div className="article-cta">
              <h2>Need help with your campaign page?</h2>
              <p>
                I design Kickstarter and Gamefound pages for tabletop projects. The $975 package covers page structure, copy and graphics. Send your game and artwork for a free opening mockup.
              </p>
              <div className="article-cta-actions">
                <Link
                  className="seo-button seo-button-light"
                  href={siteConfig.purchasePath}
                  data-analytics-event="service_interest"
                  data-analytics-label="Campaign design"
                  data-analytics-location="article CTA"
                >
                  See campaign design ↗
                </Link>
                <Link
                  className="seo-button seo-button-outline"
                  href="#start-project"
                  data-analytics-event="service_interest"
                  data-analytics-label="Get my free mockup"
                  data-analytics-location="article CTA"
                >
                  Get my free mockup ↗
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <SeoFooter />
    </>
  );
}

export function ArticleCallout({ children }: { children: ReactNode }) {
  return <aside className="article-callout">{children}</aside>;
}

export function ArticleDefinition({
  term,
  children,
}: {
  term: string;
  children: ReactNode;
}) {
  return (
    <dl className="article-definition">
      <dt>{term}</dt>
      <dd>{children}</dd>
    </dl>
  );
}

export function ArticleStatGrid({
  stats,
}: {
  stats: { value: string; label: string; note?: string }[];
}) {
  return (
    <dl className="article-stat-grid" aria-label="Key benchmark figures">
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`}>
          <dt>{stat.value}</dt>
          <dd>
            <strong>{stat.label}</strong>
            {stat.note ? <span>{stat.note}</span> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ArticleTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div
      className="article-table-wrap"
      role="region"
      aria-label={caption ?? "Comparison table"}
      tabIndex={0}
    >
      <table>
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

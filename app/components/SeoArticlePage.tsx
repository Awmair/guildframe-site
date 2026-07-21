import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";
import { absoluteUrl, siteConfig } from "../site-config";

export type ArticleFaq = { question: string; answer: string };
export type ArticleSource = {
  label: string;
  publisher: string;
  href: string;
};

function formatArticleDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}

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
              "@type": schemaType,
              headline: title,
              description,
              datePublished: published,
              dateModified: updated,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": absoluteUrl(canonicalPath),
              },
              image: absoluteUrl(siteConfig.socialImage),
              articleSection: category,
              inLanguage: "en",
              isAccessibleForFree: true,
              author: { "@id": absoluteUrl("/authors/guildframe#editorial-team") },
              reviewedBy: { "@id": absoluteUrl("/authors/guildframe#editorial-team") },
              publisher: { "@id": absoluteUrl("/#organization") },
              citation: sources.map((source) => source.href),
              about: [
                "Shopify",
                "Tabletop games",
                "Crowdfunding",
                category,
              ],
            },
            {
              "@type": "BreadcrumbList",
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
              { label: category },
            ]}
          />
          <div className="article-hero-inner">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="article-meta">
              <span>Updated <time dateTime={updated}>{formatArticleDate(updated)}</time></span>
              <span>{readTime}</span>
              <Link href="/authors/guildframe">Guildframe Editorial Team</Link>
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
              href="#start-project"
              data-analytics-event="theme_interest"
              data-analytics-label="Get Guildframe theme"
              data-analytics-location="article sidebar"
            >
              Get the Guildframe theme ↗
            </Link>
          </aside>

          <article className="article-body" id="article-content">
            <div className="article-direct-answer" aria-label="Direct answer">
              <p>{answer}</p>
            </div>
            {children}
            <section className="article-sources" aria-labelledby="article-sources-title">
              <h2 id="article-sources-title">Sources reviewed</h2>
              <p>
                Platform features and policies can change. These primary sources
                were reviewed on <time dateTime={updated}>{formatArticleDate(updated)}</time>.
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
              <h2>Quick answers</h2>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<i aria-hidden="true">+</i></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
            <div className="article-cta">
              <h2>Choose how your Shopify store gets built.</h2>
              <p>
                Hire Guildframe to design and develop your complete Shopify
                storefront for $2,199, including up to 50 product SKUs, or buy
                the fully customizable Guildframe theme for $349.
              </p>
              <div className="article-cta-actions">
                <Link
                  className="seo-button seo-button-light"
                  href="#start-project"
                  data-analytics-event="theme_interest"
                  data-analytics-label="Get Guildframe theme"
                  data-analytics-location="article CTA"
                >
                  Get the theme ↗
                </Link>
                <Link
                  className="seo-button seo-button-outline"
                  href="#start-project"
                  data-analytics-event="service_interest"
                  data-analytics-label="Get my free preview"
                  data-analytics-location="article CTA"
                >
                  Get my free preview ↗
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
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
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

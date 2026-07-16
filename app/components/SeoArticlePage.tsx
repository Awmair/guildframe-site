import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";
import { absoluteUrl, siteConfig } from "../site-config";

export type ArticleFaq = { question: string; answer: string };

export function SeoArticlePage({
  slug,
  category,
  title,
  description,
  answer,
  published,
  updated,
  readTime,
  toc,
  faqs,
  children,
}: {
  slug: string;
  category: string;
  title: string;
  description: string;
  answer: string;
  published: string;
  updated: string;
  readTime: string;
  toc: { id: string; label: string }[];
  faqs: ArticleFaq[];
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: title,
              description,
              datePublished: published,
              dateModified: updated,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": absoluteUrl(`/guides/${slug}`),
              },
              image: absoluteUrl(siteConfig.socialImage),
              articleSection: category,
              inLanguage: "en",
              isAccessibleForFree: true,
              author: { "@type": "Organization", name: "Guildframe" },
              publisher: {
                "@type": "Organization",
                name: "Guildframe",
                logo: {
                  "@type": "ImageObject",
                  url: absoluteUrl("/brand/guildframe-logo.svg"),
                },
              },
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
                  name: "Guides",
                  item: absoluteUrl("/guides"),
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: title,
                  item: absoluteUrl(`/guides/${slug}`),
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <a className="skip-link" href="#article-content">
        Skip to article
      </a>
      <SeoHeader />
      <main className="article-main">
        <header className="article-hero">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: category },
            ]}
          />
          <div className="article-hero-inner">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="article-meta">
              <span>Updated {updated}</span>
              <span>{readTime}</span>
              <span>Guildframe editorial</span>
            </div>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <strong>In this guide</strong>
            <nav aria-label="Table of contents">
              {toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  {item.label}
                </a>
              ))}
            </nav>
            <Link
              href="/buy"
              data-analytics-event="begin_checkout"
              data-analytics-label="Get Guildframe for $419"
              data-analytics-location="article sidebar"
            >
              Get Guildframe for $419 ↗
            </Link>
          </aside>

          <article className="article-body" id="article-content">
            <div className="article-direct-answer">
              <p>{answer}</p>
            </div>
            {children}
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
              <h2>Turn the campaign you already made into a store you can keep.</h2>
              <p>
                Guildframe gives tabletop creators a purpose-built Shopify
                theme plus free custom setup during early release.
              </p>
              <Link
                className="seo-button seo-button-light"
                href="/buy"
                data-analytics-event="begin_checkout"
                data-analytics-label="Get Guildframe and free custom setup"
                data-analytics-location="article CTA"
              >
                Get Guildframe + Free Custom Setup ↗
              </Link>
            </div>
          </article>
        </div>
      </main>
      <SeoFooter />
    </>
  );
}

export function ArticleCallout({ children }: { children: ReactNode }) {
  return <div className="article-callout">{children}</div>;
}

export function ArticleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="article-table-wrap">
      <table>
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

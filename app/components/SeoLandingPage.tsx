import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";
import { absoluteUrl, siteConfig } from "../site-config";


export type LandingPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  answer: string;
  image: string;
  imageAlt: string;
  audience: string;
  benefits: { title: string; copy: string }[];
  proofTitle: string;
  proofCopy: string;
  capabilities: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  related: { title: string; copy: string; href: string }[];
};

export function SeoLandingPage({ content }: { content: LandingPageContent }) {
  const breadcrumbData = {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`/${content.slug}#breadcrumb`),
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
        name: `${content.title} ${content.highlight}`,
        item: absoluteUrl(`/${content.slug}`),
      },
    ],
  };



  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": absoluteUrl(`/${content.slug}#webpage`),
              name: `${content.title} ${content.highlight}`,
              url: absoluteUrl(`/${content.slug}`),
              description: content.answer,
              isPartOf: { "@id": absoluteUrl("/#website") },
              breadcrumb: { "@id": absoluteUrl(`/${content.slug}#breadcrumb`) },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl(content.image),
              },
              about: { "@id": absoluteUrl("/#organization") },
              inLanguage: "en",
            },

            breadcrumbData,
            {
              "@type": "FAQPage",
              "@id": absoluteUrl(`/${content.slug}#faq`),
              isPartOf: { "@id": absoluteUrl(`/${content.slug}#webpage`) },
              mainEntity: content.faqs.map((faq) => ({
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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SeoHeader />
      <main className="seo-main" id="main-content">
        <section className="seo-hero">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: `${content.title} ${content.highlight}` }]}
          />
          <div className="seo-hero-grid">
            <div className="seo-hero-copy">
              <h1>
                {content.title} <em>{content.highlight}</em>
              </h1>
              <p className="seo-answer">{content.answer}</p>
              <div className="seo-actions"><Link className="seo-button" href="/guides/move-from-kickstarter-to-shopify">Read the migration guide ↗</Link><Link className="seo-text-link" href="/campaign-design">Planning another campaign?</Link></div>
              <div className="seo-proof-strip"><span>After funding reference</span><span>Mobile buying paths</span><span>Clear product information</span></div>
            </div>
            <div className="seo-hero-visual">
              <img
                src={content.image}
                alt={content.imageAlt}
                width="1000"
                height="750"
                fetchPriority="high"
                decoding="async"
              />
              <div>
                <strong>{content.audience}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="seo-benefit-band">
          {content.benefits.map((benefit, index) => (
            <article key={benefit.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{benefit.title}</h2>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </section>

        <section className="seo-proof-section">
          <div className="seo-section-heading">
            <h2>{content.proofTitle}</h2>
            <p>{content.proofCopy}</p>
          </div>
          <div className="seo-capability-grid">
            {content.capabilities.map((item) => (
              <article key={item.title}>
                <i aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="seo-how-section">
          <div className="seo-section-heading seo-section-heading-light">
            <h2>Three steps to prepare your Shopify store</h2>
          </div>
          <div className="seo-steps">
            {content.steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="seo-offer-note"><strong>Before your next launch</strong><p>Guildframe’s current service is campaign design for Kickstarter and Gamefound, at $975 USD.</p><Link href={siteConfig.purchasePath}>See campaign design ↗</Link></div>
        </section>

        <section className="seo-faq-section">
          <div className="seo-section-heading">
            <h2>Shopify store planning questions</h2>
          </div>
          <div className="seo-faq-list">
            {content.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="seo-related-section">
          <div className="seo-section-heading">
            <h2>Shopify setup and migration guides</h2>
          </div>
          <div className="seo-related-grid">
            {content.related.map((item) => (
              <Link href={item.href} key={item.title}>
                <span>Read next ↗</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

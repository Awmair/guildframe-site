import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { Breadcrumbs, SeoFooter, SeoHeader } from "./SeoChrome";
import { absoluteUrl, siteConfig } from "../site-config";
import { guildframeProductData } from "../product-data";

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
        name: content.title,
        item: absoluteUrl(`/${content.slug}`),
      },
    ],
  };

  const productData = guildframeProductData(content.image);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: `${content.title} ${content.highlight}`,
              url: absoluteUrl(`/${content.slug}`),
              description: content.answer,
              isPartOf: { "@id": absoluteUrl("/#website") },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl(content.image),
              },
              about: { "@id": absoluteUrl("/buy#product") },
              inLanguage: "en",
            },
            productData,
            breadcrumbData,
            {
              "@type": "FAQPage",
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
            items={[{ label: "Home", href: "/" }, { label: content.eyebrow }]}
          />
          <div className="seo-hero-grid">
            <div className="seo-hero-copy">
              <h1>
                {content.title} <em>{content.highlight}</em>
              </h1>
              <p className="seo-answer">{content.answer}</p>
              <div className="seo-actions">
                <Link
                  className="seo-button"
                  href={siteConfig.purchasePath}
                  data-analytics-event="theme_interest"
                  data-analytics-label={`Get Guildframe for ${siteConfig.price}`}
                  data-analytics-location="solution hero"
                >
                  Get Guildframe for {siteConfig.price} <span aria-hidden="true">↗</span>
                </Link>
                <Link className="seo-text-link" href="/#styles">
                  Explore the four presets
                </Link>
                <Link className="seo-text-link" href="#start-project">
                  Get my free preview
                </Link>
              </div>
              <div className="seo-proof-strip" aria-label="Guildframe highlights">
                <span>Shopify underneath</span>
                <span>Mobile responsive</span>
                <span>$2,500 full build for up to 50 SKUs</span>
              </div>
            </div>
            <div className="seo-hero-visual">
              <img
                src={content.image}
                alt={content.imageAlt}
                width="1536"
                height="1024"
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
            <h2>From assets to a storefront you can own.</h2>
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
          <div className="seo-offer-note">
            <strong>Choose your build path</strong>
            <p>
              Buy the fully customizable theme for {siteConfig.price}, or get
              the entire Shopify storefront designed and developed for {siteConfig.servicePrice}.
            </p>
            <Link href="/#pricing">Compare both offers ↗</Link>
          </div>
        </section>

        <section className="seo-faq-section">
          <div className="seo-section-heading">
            <h2>Questions creators ask before choosing a theme.</h2>
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
            <h2>Plan the next stage of your tabletop business.</h2>
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

import { ResponsiveImage } from "./ResponsiveImage";
import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SeoFooter, SeoHeader } from "./SeoChrome";
import { Icon, Roll } from "./chrome/Icon";
import { ShopFaq, ShopFrame, ShopHero, ShopRows, ShopTrack } from "./shopify/ShopWorld";
import { absoluteUrl } from "../site-config";
import { GuideVisual, type GuideVisualData } from "./GuideVisual";
import { formatContentDate } from "../content-dates";

export type LandingPageContent = {
  slug: string;
  updated: string;
  eyebrow: string;
  title: string;
  highlight: string;
  answer: string;
  image: string;
  imageAlt: string;
  audience: string;
  store: { src: string; width: number; height: number; alt: string };
  benefits: { title: string; copy: string }[];
  proofTitle: string;
  proofCopy: string;
  capabilities: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  related: { title: string; copy: string; href: string }[];
  /** Optional infographic shown after the explanation section. */
  visual?: GuideVisualData;
  /** Optional heading for the infographic section. */
  visualHeading?: string;
};

export function SeoLandingPage({ content }: { content: LandingPageContent }) {
  const heading = content.highlight.replace(/\.$/, "");
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
              dateModified: content.updated,
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
      <main className="w-page sh sh-theme" id="main-content" tabIndex={-1}>
        <ShopHero
          crumbs={[{ label: "Home", href: "/" }, { label: `${content.title} ${heading}` }]}
          title={<><span className="w-line"><span>{content.title}</span></span> <span className="w-line"><span><em>{heading}</em></span></span></>}
        >
          <p className="sh-lead">{content.answer}</p>
          <div className="sh-actions">
            <Link className="w-btn w-btn--coral" href="/done-for-you-shopify-store" data-title="Shopify store planning" data-analytics-event="service_interest" data-analytics-label="Plan my store brief" data-analytics-location={`${content.slug} hero`}><Roll>Plan my store brief</Roll><Icon name="arrow" /></Link>
            <Link className="w-link" href="/resources/board-game-shopify-store-checklist">Use the free store checklist</Link>
          </div>
          <ul className="sh-meta">
            <li>Separate store brief</li>
            <li>Clear product information</li>
            <li>Reviewed <time dateTime={content.updated}>{formatContentDate(content.updated)}</time></li>
          </ul>
        </ShopHero>

        <section className="sh-board tone-board sh-board--lead" aria-label="Before you build">
          <div className="w-wrap-wide">
            <ShopFrame src={content.store.src} width={content.store.width} height={content.store.height} alt={content.store.alt} caption={content.audience} />
            <div className="sh-benefits">
              {content.benefits.map((benefit) => (
                <article key={benefit.title}>
                  <h2>{benefit.title}</h2>
                  <p>{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sh-board tone-board sh-explain" aria-labelledby="shop-explain-title">
          <div className="w-wrap-wide sh-explain-inner">
            <div className="sh-explain-head">
              <h2 id="shop-explain-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>{content.proofTitle}</span></span></h2>
              <p>{content.proofCopy}</p>
              <figure className="sh-cut" data-reveal="media">
                <ResponsiveImage sizes="(max-width: 900px) calc(100vw - 32px), 40vw" src={content.image} alt={content.imageAlt} width="1000" height="750" loading="lazy" decoding="async" />
                <figcaption><span className="w-dot w-dot--concept">Studio concept, not client work</span></figcaption>
              </figure>
            </div>
            <ul className="sh-needs">
              {content.capabilities.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {content.visual ? (
          <section className="sh-board tone-board sh-visual" aria-labelledby="shop-visual-title">
            <div className="w-wrap-wide">
              <h2 id="shop-visual-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>{content.visualHeading ?? content.visual.title}</span></span></h2>
              <div style={{ maxWidth: "960px" }}>
                <GuideVisual data={content.visual} />
              </div>
            </div>
          </section>
        ) : null}

        <section className="sh-dusk sh-steps" aria-labelledby="shop-steps-title">
          <div className="w-wrap-wide">
            <h2 id="shop-steps-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Three steps to prepare</span></span> <span className="w-line"><span><em>your Shopify store</em></span></span></h2>
            <ShopTrack steps={content.steps} />
            <div className="sh-note">
              <div>
                <h3>Need help after the campaign?</h3>
                <p>Guildframe can scope product content and artwork adaptation, with optional Shopify planning and setup under a separate brief. Share your catalogue and operating plan to agree the work, price and timing.</p>
              </div>
              <div className="sh-note-links">
                <Link className="w-btn" href="/post-campaign-support" data-title="After the campaign" data-analytics-event="service_interest" data-analytics-label="Discuss post-campaign support" data-analytics-location={`${content.slug} offer`}><Roll>Explore post campaign support</Roll><Icon name="arrow" /></Link>
                <Link className="w-link" href="/kickstarter-launch-services" data-title="Launch services">Back to the campaign services</Link>
              </div>
            </div>
          </div>
        </section>

        <ShopFaq title={<span className="w-line"><span>Shopify store <em>planning questions</em></span></span>} faqs={content.faqs} location={content.slug} />

        <section className="sh-board tone-board sh-related" aria-labelledby="shop-related-title">
          <div className="w-wrap-wide">
            <h2 id="shop-related-title" className="w-h2" data-reveal="lines"><span className="w-line"><span>Shopify setup and <em>migration guides</em></span></span></h2>
            <ShopRows items={content.related} />
            <div className="sh-actions">
              <Link className="w-btn w-btn--coral" href="/done-for-you-shopify-store" data-title="Shopify store planning" data-analytics-event="service_interest" data-analytics-label="Plan my store brief" data-analytics-location={`${content.slug} closing`}><Roll>Plan my store brief</Roll><Icon name="arrow" /></Link>
              <Link className="w-link" href="/post-campaign-support">Explore post campaign support</Link>
            </div>
          </div>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "../SeoChrome";
import { Icon } from "../chrome/Icon";
import { siteConfig } from "../../site-config";

/** The shop corner of the board: dusk hero with the shopfront standee and the pawn arriving at it. */
export function ShopHero({ crumbs, title, children }: { crumbs: { label: string; href?: string }[]; title: ReactNode; children: ReactNode }) {
  return (
    <section className="sh-hero" aria-labelledby="shop-title">
      <div className="w-wrap-wide sh-hero-inner">
        <div className="sh-hero-copy">
          <Breadcrumbs items={crumbs} />
          <h1 id="shop-title" className="sh-title" data-reveal="lines">{title}</h1>
          <div className="sh-hero-side">{children}</div>
        </div>
        <div className="sh-shopfront" aria-hidden="true">
          <span className="sh-shopfront-shadow" />
          <span className="sh-standee">
            <img src="/images/world/standee-shop-v1.webp" width="490" height="479" alt="" fetchPriority="high" decoding="async" />
            <span className="sh-sign">Open</span>
          </span>
          <span className="sh-arrival">
            <img className="sh-tile" src="/images/world/start-tile-v1.webp" width="480" height="416" alt="" decoding="async" />
            <img className="sh-pawn" src="/images/world/pawn-v1.webp" width="239" height="411" alt="" decoding="async" />
          </span>
        </div>
      </div>
    </section>
  );
}

/** A store mockup in a cut frame that rises out of the hero into the board below. */
export function ShopFrame({ src, width, height, alt, caption }: { src: string; width: number; height: number; alt: string; caption?: string }) {
  return (
    <figure className="sh-frame">
      <div className="sh-frame-card">
        <img src={src} width={width} height={height} alt={alt} decoding="async" />
      </div>
      <figcaption>
        {caption ? <span>{caption}</span> : null}
        <span className="w-dot w-dot--concept">Studio concept, not client work</span>
      </figcaption>
    </figure>
  );
}

/** Ordered steps laid out as spaces on a dotted track. The pawn waits on the first space. */
export function ShopTrack({ steps }: { steps: { title: string; copy: string }[] }) {
  return (
    <ol className="sh-track" style={{ "--n": steps.length } as React.CSSProperties}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="sh-space" aria-hidden="true">
            {index === 0 ? <img src="/images/world/pawn-v1.webp" width="239" height="411" alt="" loading="lazy" decoding="async" /> : null}
          </span>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </li>
      ))}
    </ol>
  );
}

/** Same FAQ as the home page: heading and email on the left, native details on the right. */
export function ShopFaq({ title, faqs, location }: { title: ReactNode; faqs: { question: string; answer: string }[]; location: string }) {
  return (
    <section className="sh-faq" id="faq" aria-labelledby="shop-faq-title">
      <div className="w-wrap-wide sh-faq-inner">
        <div className="sh-faq-head">
          <h2 id="shop-faq-title" className="w-h2" data-reveal="lines">{title}</h2>
          <a className="w-link" href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location={`${location} faq`}>{siteConfig.contactEmail}</a>
        </div>
        <div className="sh-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<Icon name="plus" size={20} /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Link rows in the style of the home guide list. */
export function ShopRows({ items }: { items: { title: string; copy: string; href: string }[] }) {
  return (
    <div className="sh-rows">
      {items.map((item) => (
        <Link className="sh-row" href={item.href} key={item.href} data-title={item.title} data-cursor-label="Read">
          <span className="sh-row-title">{item.title}</span>
          <span className="sh-row-copy">{item.copy}</span>
          <Icon name="arrow" size={22} />
        </Link>
      ))}
    </div>
  );
}

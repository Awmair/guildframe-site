"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { JsonLd } from "./components/JsonLd";
import { absoluteUrl, siteConfig } from "./site-config";

const styleOptions = [
  {
    name: "Guildframe",
    note: "Flexible and editorial",
    description:
      "Best for growing tabletop brands and larger product ranges.",
    image: "/images/pdp-guildframe-responsive-v1.jpg",
    cover: "/images/presets/guildframe-wide.jpg",
    portrait: "/images/presets/guildframe-portrait.jpg",
    color: "#1657FF",
    surface: "#E9E4D8",
    ink: "#17191C",
    tags: ["Adventure games", "Growing catalogs", "Story-led brands"],
  },
  {
    name: "Nightbanner",
    note: "Dark and cinematic",
    description:
      "Best for fantasy games, TTRPGs, miniatures and artwork-led releases.",
    image: "/images/pdp-nightbanner-responsive-v1.jpg",
    cover: "/images/presets/nightbanner-wide.jpg",
    portrait: "/images/presets/nightbanner-portrait.jpg",
    color: "#776BFF",
    surface: "#101620",
    ink: "#FBF7EE",
    tags: ["Dark fantasy", "TTRPGs", "Miniatures"],
  },
  {
    name: "Brightmarch",
    note: "Bright and playful",
    description:
      "Best for family games, party games and approachable card games.",
    image: "/images/pdp-brightmarch-responsive-v1.jpg",
    cover: "/images/presets/brightmarch-wide.jpg",
    portrait: "/images/presets/brightmarch-portrait.jpg",
    color: "#F06A4C",
    surface: "#F5D987",
    ink: "#182239",
    tags: ["Family games", "Party games", "Colorful cards"],
  },
  {
    name: "Vaultmark",
    note: "Structured and premium",
    description:
      "Best for collector products, TCGs, editions, expansions and larger catalogs.",
    image: "/images/pdp-vaultmark-responsive-v1.jpg",
    cover: "/images/presets/vaultmark-wide.jpg",
    portrait: "/images/presets/vaultmark-portrait.jpg",
    color: "#C69A2E",
    surface: "#191919",
    ink: "#F4EEE3",
    tags: ["Collector editions", "TCGs", "Premium releases"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose a style",
    copy: "Pick a complete look.",
  },
  {
    number: "02",
    title: "Add your products",
    copy: "Add your products and campaign content.",
  },
  {
    number: "03",
    title: "Publish your store",
    copy: "Check everything, then publish.",
  },
  {
    number: "LIVE",
    title: "Your world is open",
    copy: "Your audience can shop.",
  },
];

const features = [
  {
    number: "01",
    icon: "assets",
    title: "Bring what you already made",
    copy: "Reuse your campaign artwork, product images, story and copy.",
  },
  {
    number: "02",
    icon: "editions",
    title: "Sell every version",
    copy: "Show core games, deluxe editions, expansions, bundles, add-ons and preorders.",
  },
  {
    number: "03",
    icon: "pages",
    title: "Your important pages are ready",
    copy: "Product pages, campaign story, FAQs, reviews, events, news and contact pages are included.",
  },
  {
    number: "04",
    icon: "controls",
    title: "Change anything",
    copy: "Control colors, typography, spacing, sections and product information without code.",
  },
  {
    number: "05",
    icon: "responsive",
    title: "Mobile from the start",
    copy: "Every style is designed for phones, tablets and desktops.",
  },
  {
    number: "06",
    icon: "commerce",
    title: "Shopify underneath",
    copy: "Use Shopify products, checkout, inventory, payments and apps normally.",
  },
];

const faqs = [
  {
    question: "What is Guildframe, and does it include Shopify?",
    answer:
      "Guildframe is a tabletop-focused Shopify theme. It requires an active Shopify store and uses Shopify’s checkout, inventory and payments. Shopify plan and app fees are separate.",
  },
  {
    question: "Can I customize it without code?",
    answer:
      "Yes. Change colors, typography, spacing, sections, layouts and product content through Shopify’s visual theme editor.",
  },
  {
    question: "What can I sell with it?",
    answer:
      "Board games, card games, TTRPGs, miniatures, terrain, accessories, editions, expansions, bundles and preorders.",
  },
  {
    question: "Is the 15-minute setup realistic?",
    answer:
      "Yes, for a focused campaign with final products, artwork and copy ready. Larger catalogs naturally take longer.",
  },
  {
    question: "How does free custom setup work?",
    answer:
      "Buy Guildframe, send us your final assets and we’ll build the agreed storefront pages for you to review.",
  },
  {
    question: "What do you need, and when will it be ready?",
    answer:
      "Send your logo, colors, product details, campaign copy and final artwork. Most focused stores are ready for review within an estimated 3 to 5 business days.",
  },
  {
    question: "What is included in the setup?",
    answer:
      "We confirm the pages, assets, review process and delivery window before starting. Custom features, app development, copywriting and extra requests are separate.",
  },
  {
    question: "How long is free setup available?",
    answer:
      "It is a limited-time early release bonus. If the offer is displayed when you buy, it is included with your order.",
  },
];

const customizationOptions = [
  {
    label: "Typography + scale",
    detail: "Change heading size, body type and the visual rhythm of every page.",
  },
  {
    label: "Colors + buttons",
    detail: "Match your campaign palette, calls to action and storefront accents.",
  },
  {
    label: "Spacing + width",
    detail: "Tune page density, section spacing and content width without code.",
  },
  {
    label: "Images + layout",
    detail: "Control image ratios, product media and the order of each section.",
  },
];

export default function Home() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeStyle, setActiveStyle] = useState(0);
  const [activeControl, setActiveControl] = useState(0);
  const [activeSection, setActiveSection] = useState("top");
  const [navFilled, setNavFilled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollY = window.scrollY;
      const pricingTop =
        document.getElementById("pricing")?.offsetTop ?? Number.POSITIVE_INFINITY;
      const hasPassedHero =
        scrollY > Math.min(520, window.innerHeight * 0.65);
      const isApproachingPricing =
        scrollY >= pricingTop - window.innerHeight * 0.15;

      setNavFilled(scrollY > 48);
      setShowMobileCta(hasPassedHero && !isApproachingPricing);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) =>
      observer.observe(node),
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -62%", threshold: [0, 0.15, 0.35] },
    );

    document
      .querySelectorAll<HTMLElement>("main section[id]")
      .forEach((section) => sectionObserver.observe(section));

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      sectionObserver.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const selectedStyle = styleOptions[activeStyle];
  const selectedControl = customizationOptions[activeControl];

  const chooseProcess = (index: number) => {
    setActiveProcess(index);
  };

  const chooseAdjacentStyle = (direction: number) => {
    setActiveStyle((current) =>
      (current + direction + styleOptions.length) % styleOptions.length,
    );
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: "Guildframe",
              description:
                "A Shopify theme and done-for-you setup service for tabletop game creators.",
              category: "Shopify theme for tabletop game creators",
              brand: { "@type": "Brand", name: "Guildframe" },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "419",
                url: absoluteUrl("/buy"),
              },
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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-nav ${navFilled ? "is-filled" : ""}`}>
        <a className="brand-link" href="#top" aria-label="Guildframe home">
          <img src="/brand/guildframe-logo.svg" alt="Guildframe" />
        </a>
        <nav aria-label="Primary navigation">
          <a className={activeSection === "process" ? "is-active" : ""} href="#process">
            How it works
          </a>
          <a className={activeSection === "styles" ? "is-active" : ""} href="#styles">
            Styles
          </a>
          <a
            className={activeSection === "customization" ? "is-active" : ""}
            href="#customization"
          >
            Customize
          </a>
          <a className={activeSection === "features" ? "is-active" : ""} href="#features">
            What&apos;s included
          </a>
          <a className={activeSection === "pricing" ? "is-active" : ""} href="#pricing">
            Pricing
          </a>
        </nav>
        <a className="nav-cta" href="#styles">
          See the demo <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-scene" aria-hidden="true">
            <img
              src="/images/guildframe-tabletop-world-hero-v1.jpg"
              alt=""
              width="1719"
              height="915"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-audience">
              <span aria-hidden="true" />
              <p>
                For board games, card games, TTRPGs, miniatures and terrain.
              </p>
            </div>
            <h1>
              Your Kickstarter.
              <span>Live on Shopify</span>
              in 15 minutes.
            </h1>
            <p className="hero-support">
              Guildframe is a Shopify theme for tabletop game creators. Turn a
              funded Kickstarter into a live store in minutes.
            </p>
            <a className="primary-button" href="#styles">
              See the 4 styles <span aria-hidden="true">↘</span>
            </a>
          </div>

        </section>

        <section className="problem-section section-pad">
          <div className="problem-copy" data-reveal>
            <h2>
              From funded campaign.
              <span>To live storefront.</span>
            </h2>
            <p>
              Agencies cost thousands. Generic themes still need to be rebuilt
              around your products. Guildframe gives you the complete starting
              point.
            </p>
          </div>
        </section>

        <section
          className="process-section section-pad"
          id="process"
        >
          <div className="process-shell" data-reveal>
            <div className="process-copy">
              <h2>1, 2, 3. Live.</h2>
              <p className="process-intro">
                From funded campaign to Shopify store in three clear steps.
              </p>
              <div
                className="process-steps"
                role="tablist"
                aria-label="Store launch steps"
              >
                {processSteps.map((step, index) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeProcess === index}
                    aria-controls="process-visual"
                    className={`process-step ${activeProcess === index ? "is-active" : ""}`}
                    onClick={() => chooseProcess(index)}
                    key={step.number}
                  >
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </div>
                    <i aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <div
              className="process-stage"
              id="process-visual"
              role="tabpanel"
              tabIndex={0}
              aria-label={`${processSteps[activeProcess].title}: ${processSteps[activeProcess].copy}`}
            >
              <div className="stage-grid" aria-hidden="true" />
              <div
                className={`campaign-panel process-visual-layer ${activeProcess === 0 ? "is-active" : ""}`}
                aria-hidden={activeProcess !== 0}
              >
                <div className="campaign-topline">
                  <span>Your Kickstarter</span>
                  <strong className="campaign-funded">
                    <i aria-hidden="true" />
                    Funded · 126%
                  </strong>
                </div>
                <img
                  src="/images/guildframe-launch-kit.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="campaign-meter">
                  <i />
                </div>
                <div className="campaign-meta">
                  <strong>Your campaign</strong>
                  <span>Goal reached · Ready for your store</span>
                </div>
              </div>

              <div
                className={`style-fan process-visual-layer ${activeProcess === 1 ? "is-active" : ""}`}
                aria-hidden={activeProcess !== 1}
              >
                {styleOptions.map((style, index) => {
                  const offsets = [
                    [-42, -26, -8],
                    [-13, -9, -3],
                    [16, 10, 3],
                    [43, 27, 8],
                  ][index];
                  return (
                    <div
                      className="style-fan-card"
                      key={style.name}
                      style={{
                        transform: `translate3d(calc(-50% + ${offsets[0]}%), calc(-50% + ${offsets[1]}%), 0) rotate(${offsets[2]}deg)`,
                        zIndex: index + 1,
                      }}
                    >
                      <img
                        src={style.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{style.name}</span>
                    </div>
                  );
                })}
              </div>

              <div
                className={`product-build process-visual-layer ${activeProcess === 2 ? "is-active" : ""}`}
                aria-hidden={activeProcess !== 2}
              >
                <div className="publish-preview">
                  <img
                    src="/images/guildframe-ready-to-publish-v1.jpg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="publish-status">
                    <div>
                      <strong>Ready to go</strong>
                      <span>Everything is set.</span>
                    </div>
                    <div className="publish-action">
                      Publish store
                      <i />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`live-build process-visual-layer ${activeProcess === 3 ? "is-active" : ""}`}
                aria-hidden={activeProcess !== 3}
              >
                <div className="live-screen">
                  <div className="live-screen-bar" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <strong>Nightbanner · responsive</strong>
                  </div>
                  <img
                    src="/images/pdp-nightbanner-responsive-v1.jpg"
                    alt="Nightbanner Shopify product page shown on desktop and mobile"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="live-stamp">
                  <span>Shopify status</span>
                  <strong>We&apos;re live</strong>
                  <i />
                </div>
              </div>

              <div className="progress-rail" aria-hidden="true">
                <i style={{ transform: `scaleX(${(activeProcess + 1) / processSteps.length})` }} />
              </div>
            </div>
          </div>
        </section>

        <section className="styles-section section-pad" id="styles">
          <div className="styles-intro" data-reveal>
            <div>
              <h2>Four worlds. One engine.</h2>
            </div>
            <p>
              Open a preset to see how completely Guildframe can change
              character.
            </p>
          </div>

          <div className="preset-explorer" data-reveal>
            <div
              className="preset-gallery"
              role="tablist"
              aria-label="Guildframe preset worlds"
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  chooseAdjacentStyle(1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  chooseAdjacentStyle(-1);
                }
              }}
            >
              {styleOptions.map((style, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeStyle === index}
                  aria-controls="preset-detail"
                  className={`preset-card ${activeStyle === index ? "is-active" : ""}`}
                  onClick={() => setActiveStyle(index)}
                  onFocus={() => setActiveStyle(index)}
                  style={
                    {
                      "--preset-accent": style.color,
                      "--preset-surface": style.surface,
                      "--preset-ink": style.ink,
                    } as CSSProperties
                  }
                  key={style.name}
                >
                  <img
                    className="preset-card-image preset-card-image--wide"
                    src={style.cover}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="preset-card-image preset-card-image--portrait"
                    src={style.portrait}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="preset-card-shade" aria-hidden="true" />
                  <div className="preset-card-copy">
                    <h3>{style.name}</h3>
                  </div>
                  <i className="preset-card-mark" aria-hidden="true" />
                </button>
              ))}
            </div>

            <div
              className="preset-detail"
              id="preset-detail"
              role="tabpanel"
              style={
                {
                  "--preset-accent": selectedStyle.color,
                  "--preset-surface": selectedStyle.surface,
                  "--preset-ink": selectedStyle.ink,
                } as CSSProperties
              }
            >
              <div className="preset-detail-copy">
                <span>{selectedStyle.name} preset</span>
                <h3>{selectedStyle.note}</h3>
                <p>{selectedStyle.description}</p>
                <div className="preset-tags" aria-label="Best suited for">
                  {selectedStyle.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="preset-proof">
                <img
                  key={selectedStyle.image}
                  src={selectedStyle.image}
                  alt={`${selectedStyle.name} product page shown on desktop and mobile`}
                  loading="lazy"
                  decoding="async"
                />
                <span>Responsive product page · desktop + mobile</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="customization-section section-pad"
          id="customization"
        >
          <div className="customization-intro" data-reveal>
            <h2>
              Make every detail{" "}
              <span>feel like your game.</span>
            </h2>
            <div>
              <p>
                Change the size, color, type, spacing, buttons and image ratios
                directly in Shopify. No code required.
              </p>
            </div>
          </div>

          <div className="customization-visual" data-reveal>
            <div
              className="customization-controls"
              aria-label="Editable design controls"
            >
              {customizationOptions.map((option, index) => (
                <button
                  type="button"
                  aria-pressed={activeControl === index}
                  className={activeControl === index ? "is-active" : ""}
                  onClick={() => setActiveControl(index)}
                  key={option.label}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div
              className={`customization-editor-frame customization-editor-frame-${activeControl + 1}`}
            >
              <div className="customization-editor-canvas">
                <img
                  src="/images/shopify-theme-editor-customization-v1.jpg"
                  alt="Shopify theme editor showing controls for typography, colors, spacing, width, buttons and image ratios"
                  loading="lazy"
                  decoding="async"
                />
                <i
                  className={`customization-hotspot customization-hotspot-${activeControl + 1}`}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="customization-callout"
              aria-live="polite"
            >
              <span>{selectedControl.label}</span>
              <strong>{selectedControl.detail}</strong>
            </div>
          </div>
        </section>

        <section className="features-section section-pad" id="features">
          <div className="features-heading" data-reveal>
            <h2>
              Move your campaign.
              <span>Not every pixel.</span>
            </h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article data-reveal key={feature.number}>
                <div
                  className={`feature-icon feature-icon-${feature.icon}`}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="comparison-section section-pad">
          <div className="comparison-heading" data-reveal>
            <h2>Compare the real path to launch.</h2>
            <p>
              Price is only half the decision. Compare the work between a blank
              theme and a storefront built specifically for tabletop.
            </p>
          </div>

          <div className="comparison-grid" data-reveal>
            <article>
              <div className="comparison-label">
                <span>Agency or freelancer</span>
                <em>Custom from scratch</em>
              </div>
              <h3>Maximum flexibility. Maximum project.</h3>
              <ul>
                <li><span>Typical cost</span><strong>$2,000+</strong></li>
                <li><span>Time to launch</span><strong>3 to 8 weeks</strong></li>
                <li><span>Tabletop-ready</span><strong>Built to brief</strong></li>
                <li><span>Setup help</span><strong>Usually included</strong></li>
              </ul>
            </article>
            <article>
              <div className="comparison-label">
                <span>Generic Shopify theme</span>
                <em>Blank starting point</em>
              </div>
              <h3>Lower cost. More work left for you.</h3>
              <ul>
                <li><span>Typical cost</span><strong>Around $500</strong></li>
                <li><span>Time to launch</span><strong>Several days</strong></li>
                <li><span>Tabletop-ready</span><strong>Needs adapting</strong></li>
                <li><span>Setup help</span><strong>Self-serve</strong></li>
              </ul>
            </article>
            <article className="comparison-guildframe">
              <div className="comparison-label">
                <span>Guildframe</span>
                <em>Purpose-built for tabletop</em>
              </div>
              <h3>The complete starting point.</h3>
              <ul>
                <li><span>One-time price</span><strong>$419</strong></li>
                <li><span>Self-launch</span><strong>About 15 minutes</strong></li>
                <li><span>Tabletop-ready</span><strong>From day one</strong></li>
                <li><span>Custom setup</span><strong>$2,500 included</strong></li>
              </ul>
            </article>
          </div>
          <p className="comparison-note">
            The 15-minute self-launch is intended for a focused campaign with
            final artwork and content ready. Done-for-you setup is typically
            delivered in 3 to 5 business days after final assets are received.
          </p>
        </section>

        <section className="bonus-section section-pad">
          <div className="bonus-offer" data-reveal>
            <p>A comparable custom store setup can cost</p>
            <s>$2,500</s>
            <div className="bonus-free">
              <strong>$0</strong>
              <span>when you buy Guildframe</span>
            </div>
          </div>
          <div className="bonus-copy" data-reveal>
            <h2>
              Buy Guildframe.
              <span>We&apos;ll design your Shopify store for free.</span>
            </h2>
            <p>
              Buy Guildframe during the early release and we’ll turn your
              supplied campaign assets into a polished Shopify storefront at no
              extra cost. This $2,500 setup bonus is available for a limited time.
            </p>
            <div className="bonus-availability">
              <span>Limited-time early release bonus</span>
              <strong>Estimated delivery: 3 to 5 business days</strong>
            </div>
            <div className="setup-journey" aria-label="How free custom setup works">
              <div className="setup-journey-steps">
                <article>
                  <span>01</span>
                  <h3>Buy Guildframe</h3>
                  <p>Choose your storefront style and secure the setup bonus.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Send your assets</h3>
                  <p>Share your logo, products, campaign copy and final artwork.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Review your store</h3>
                  <p>We build and polish it, then send it back ready to review.</p>
                </article>
              </div>
            </div>
            <a
              href={siteConfig.purchasePath}
              className="bonus-button"
              data-analytics-event="begin_checkout"
              data-analytics-label="Get Guildframe and free custom setup"
              data-analytics-location="custom setup offer"
            >
              Get Guildframe + Free Custom Setup <span aria-hidden="true">↗</span>
            </a>
            <small>
              Scope, required assets and delivery timing are confirmed before
              work begins. New custom features, app development, copywriting and
              requests outside the agreed visual setup are separate.
            </small>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="pricing-intro" data-reveal>
            <h2>
              One price.
              <span>Ready to launch.</span>
            </h2>
            <p>
              Four storefront styles, the complete theme system and $2,500 of
              custom setup included during early release.
            </p>
          </div>

          <div className="pricing-card" data-reveal>
            <div className="pricing-buy">
              <img
                className="pricing-buy-logo"
                src="/brand/guildframe-logo.svg"
                alt="Guildframe"
                loading="lazy"
                decoding="async"
              />
              <div className="pricing-price-row">
                <div className="price">$419</div>
                <span>One-time</span>
              </div>
              <p>Own the theme. Launch when you&apos;re ready.</p>
              <div className="pricing-bonus-callout">
                <s>$2,500 customization</s>
                <strong>Included free</strong>
              </div>
              <a
                href={siteConfig.purchasePath}
                className="checkout-button"
                data-analytics-event="begin_checkout"
                data-analytics-label="Get Guildframe for $419"
                data-analytics-location="pricing"
              >
                Get Guildframe for $419 <span aria-hidden="true">↗</span>
              </a>
              <small>
                Requires an active Shopify store. No subscription fee for
                Guildframe.
              </small>
            </div>

            <div className="pricing-inclusions">
              <h3>Everything included.</h3>
              <ul>
                <li>Four complete styles</li>
                <li>Campaign and product pages</li>
                <li>Shopify editor controls</li>
                <li>Responsive layouts</li>
                <li>Setup documentation</li>
                <li className="pricing-customization-line">
                  $2,500 custom setup included
                </li>
              </ul>
              <div className="pricing-trust" aria-label="Guildframe quality commitments">
                <img
                  src="/images/pricing-trust-icons-v1.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pricing-trust-labels">
                  <div>
                    <strong>Fully customizable</strong>
                    <span>Make it unmistakably yours.</span>
                  </div>
                  <div>
                    <strong>Mobile responsive</strong>
                    <span>Designed for every screen.</span>
                  </div>
                  <div>
                    <strong>Speed optimized</strong>
                    <span>Built to stay lightweight.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-promise" data-reveal>
            <div>
              <h3>Know exactly what we&apos;re building before we begin.</h3>
            </div>
            <p>
              We confirm your pages, supplied assets, review process and
              delivery window before customization starts. Anything outside
              that scope is discussed and approved first. No surprise work.
              No surprise charges.
            </p>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="faq-heading" data-reveal>
            <h2>Questions, answered.</h2>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq, index) => (
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
      </main>

      <a
        className={`mobile-buy-cta ${showMobileCta ? "is-visible" : ""}`}
        href={siteConfig.purchasePath}
        aria-label="Get Guildframe for $419 with free custom setup"
        data-analytics-event="begin_checkout"
        data-analytics-label="Get Guildframe and free setup"
        data-analytics-location="mobile sticky CTA"
      >
        <span>
          <strong>Get Guildframe + free setup</strong>
          <small>Limited-time early release offer</small>
        </span>
        <b>$419</b>
      </a>

      <footer className="site-footer" id="footer">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <h2>
              Your campaign is funded.{" "}
              <span>Keep selling beyond Kickstarter.</span>
            </h2>
            <p>
              Choose your style, add the campaign content you already have and
              give your audience a polished place to keep buying.
            </p>
            <div className="footer-actions">
              <a className="footer-primary" href="#styles">
                See the 4 styles <span aria-hidden="true">↗</span>
              </a>
              <a className="footer-secondary" href="#pricing">
                View pricing
              </a>
            </div>
          </div>

          <div className="footer-visual">
            <img
              src="/images/guildframe-footer-launch-system-v1.jpg"
              alt="A premium tabletop game kit connected to an open storefront"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="footer-directory">
          <div className="footer-brand">
            <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" />
            <p>
              The Kickstarter-to-Shopify system built specifically for
              tabletop creators.
            </p>
            <div className="footer-trust">
              <span>One-time payment</span>
              <span>No code required</span>
              <span>Shopify underneath</span>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div>
              <strong>Explore</strong>
              <a href="#process">How it works</a>
              <a href="#styles">Styles</a>
              <a href="#customization">Customization</a>
              <a href="#features">What&apos;s included</a>
            </div>
            <div>
              <strong>Get Guildframe</strong>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
              <a href="/guides">Guides</a>
              <a href="/kickstarter-to-shopify">Kickstarter to Shopify</a>
            </div>
            <div>
              <strong>For creators</strong>
              <a href="/shopify-theme-for-board-games">Board game stores</a>
              <a href="/shopify-theme-for-ttrpg">TTRPG stores</a>
              <a href="/shopify-theme-for-miniatures">Miniature stores</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>Built for board games, card games, TTRPGs and miniatures.</span>
          <span>Guildframe · Modular. Engineered. Ready to launch.</span>
        </div>
      </footer>
    </>
  );
}

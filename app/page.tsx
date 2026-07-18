"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { JsonLd } from "./components/JsonLd";
import { siteConfig } from "./site-config";
import { guildframeProductData, guildframeServiceData } from "./product-data";

const styleOptions = [
  {
    name: "Rune Single",
    note: "Cinematic for one flagship game",
    description:
      "For one flagship game where atmosphere, story and a focused product journey lead the store.",
    image: "/images/pdp-nightbanner-responsive-v1.jpg",
    cover: "/images/presets/nightbanner-wide.jpg",
    portrait: "/images/presets/nightbanner-portrait.jpg",
    color: "#776BFF",
    surface: "#101620",
    ink: "#FBF7EE",
    tags: ["Flagship games", "Cinematic worlds", "Focused launches"],
  },
  {
    name: "Rune Studio",
    note: "Cinematic for a small studio",
    description:
      "For small studios with multiple games, expansions and a cinematic editorial identity.",
    image: "/images/pdp-guildframe-responsive-v1.jpg",
    cover: "/images/presets/guildframe-wide.jpg",
    portrait: "/images/presets/guildframe-portrait.jpg",
    color: "#1657FF",
    surface: "#E9E4D8",
    ink: "#17191C",
    tags: ["Small studios", "Growing catalogs", "Cinematic brands"],
  },
  {
    name: "Saga Single",
    note: "Playful for one flagship game",
    description:
      "For one flagship game with bright art, approachable energy and a focused product journey.",
    image: "/images/pdp-brightmarch-responsive-v1.jpg",
    cover: "/images/presets/brightmarch-wide.jpg",
    portrait: "/images/presets/brightmarch-portrait.jpg",
    color: "#F06A4C",
    surface: "#F5D987",
    ink: "#182239",
    tags: ["Flagship games", "Playful worlds", "Bright launches"],
  },
  {
    name: "Saga Studio",
    note: "Playful for a small studio",
    description:
      "For small studios with multiple colorful games, expansions and products.",
    image: "/images/pdp-vaultmark-responsive-v1.jpg",
    cover: "/images/presets/vaultmark-wide.jpg",
    portrait: "/images/presets/vaultmark-portrait.jpg",
    color: "#C69A2E",
    surface: "#191919",
    ink: "#F4EEE3",
    tags: ["Small studios", "Growing catalogs", "Playful brands"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Choose a preset",
    copy: "Pick the structure and mood that fit your catalog.",
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
    copy: "Every preset is designed for phones, tablets and desktops.",
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
    question: "What are the two ways to use Guildframe?",
    answer:
      "Buy the $419 theme and build the store yourself with Shopify's visual editor, or choose the $1,399 done-for-you service and we will design and develop the entire storefront from an empty Shopify store to a reviewed build ready to publish.",
  },
  {
    question: "What is included in the done-for-you service?",
    answer:
      "We structure the storefront, configure Guildframe, design the key pages, add your supplied products and content, optimize desktop and mobile layouts, test the buying path and prepare the store for publication.",
  },
  {
    question: "Is the done-for-you price really flat?",
    answer:
      "Yes. The Guildframe design and development service is $1,399 regardless of catalog size. You provide approved product data, copy and visual assets. Shopify fees, paid apps, custom app development, photography and new copywriting are separate.",
  },
  {
    question: "How long does a done-for-you store take?",
    answer:
      "Timing depends on asset readiness, catalog complexity and review speed. We confirm a delivery plan before work begins, then take the approved store from zero to a publish-ready build.",
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

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [guildframeProductData(), guildframeServiceData()],
        }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-nav ${navFilled ? "is-filled" : ""}`}>
        <a className="brand-link" href="#top" aria-label="Guildframe home">
          <img src="/brand/guildframe-logo.svg" alt="Guildframe" width="1000" height="220" />
        </a>
        <nav aria-label="Primary navigation">
          <a className={activeSection === "process" ? "is-active" : ""} href="#process">
            How it works
          </a>
          <a className={activeSection === "styles" ? "is-active" : ""} href="#styles">
            Presets
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
          See the 4 presets <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-scene" aria-hidden="true">
            <img
              src="/images/guildframe-tabletop-world-hero-v1.jpg"
              alt="A tabletop fantasy world built from board game terrain and miniatures"
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
              Build it yourself with our premium tabletop theme, or let us
              design and develop the entire Shopify store for you.
            </p>
            <a className="primary-button" href="#process">
              How it works <span aria-hidden="true">↘</span>
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
              Choose the premium theme and stay hands-on, or hand us the whole
              build. Either way, you start with a system made for tabletop.
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
                role="group"
                aria-label="Store launch steps"
              >
                {processSteps.map((step, index) => (
                  <button
                    type="button"
                    aria-pressed={activeProcess === index}
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
              role="region"
              aria-live="polite"
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
                  alt="A funded Kickstarter campaign ready to become a Shopify store"
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
                        alt={`${style.name} Guildframe storefront preset`}
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
                    alt="A completed Shopify storefront ready to publish"
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
                    <strong>Rune Single / responsive</strong>
                  </div>
                  <img
                    src="/images/pdp-nightbanner-responsive-v1.jpg"
                    alt="Rune Single Shopify product page shown on desktop and mobile"
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
              <h2>Four presets. One premium theme.</h2>
            </div>
            <p>
              Choose a cinematic or playful direction, then pick the version
              built for one flagship game or a small studio catalog.
            </p>
          </div>

          <div className="preset-explorer" data-reveal>
            <div
              className="preset-gallery"
              role="group"
              aria-label="Guildframe preset worlds"
            >
              {styleOptions.map((style, index) => (
                <button
                  type="button"
                  aria-pressed={activeStyle === index}
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
                    alt={`${style.name} tabletop storefront preview`}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="preset-card-image preset-card-image--portrait"
                    src={style.portrait}
                    alt={`${style.name} tabletop storefront mobile preview`}
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
              role="region"
              aria-live="polite"
              aria-label={`${selectedStyle.name} preset details`}
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
                  width="1579"
                  height="996"
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
                <em>Two purpose-built routes</em>
              </div>
              <h3>Use the theme, or use the team.</h3>
              <ul>
                <li><span>Premium theme</span><strong>$419</strong></li>
                <li><span>Done-for-you store</span><strong>$1,399</strong></li>
                <li><span>Tabletop-ready</span><strong>From day one</strong></li>
                <li><span>Catalog size fee</span><strong>None</strong></li>
              </ul>
            </article>
          </div>
          <p className="comparison-note">
            The 15-minute self-launch is intended for a focused campaign with
            final artwork and content ready. Done-for-you delivery depends on
            asset readiness, catalog complexity and the review cycle.
          </p>
        </section>

        <section className="bonus-section section-pad">
          <div className="bonus-offer" data-reveal>
            <p>Done-for-you Shopify store</p>
            <div className="bonus-free">
              <strong>$1,399</strong>
              <span>one flat project fee</span>
            </div>
            <strong className="service-size-proof">Any catalog size. Zero to publish.</strong>
          </div>
          <div className="bonus-copy" data-reveal>
            <h2>
              Hand us the store.
              <span>We&apos;ll take it to launch.</span>
            </h2>
            <p>
              We design and develop your entire Shopify storefront using
              Guildframe, from an empty store to a polished build ready to
              publish. The $1,399 project fee stays the same regardless of store size.
            </p>
            <div className="bonus-availability">
              <span>Flat fee. No per-product surcharge.</span>
              <strong>Delivery plan confirmed before work begins.</strong>
            </div>
            <div className="setup-journey" aria-label="How the done-for-you Shopify service works">
              <div className="setup-journey-steps">
                <article>
                  <span>01</span>
                  <h3>Send your store brief</h3>
                  <p>Share your products, campaign content, branding and final assets.</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>We design and build</h3>
                  <p>We create the pages, catalog structure and responsive storefront.</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Review and publish</h3>
                  <p>Approve the finished build, then publish it on Shopify.</p>
                </article>
              </div>
            </div>
            <a
              href={siteConfig.servicePath}
              className="bonus-button"
              data-analytics-event="service_interest"
              data-analytics-label="View done-for-you Shopify service"
              data-analytics-location="done-for-you offer"
            >
              Get a done-for-you store <span aria-hidden="true">↗</span>
            </a>
            <small>
              You provide approved product data, copy and visual assets. Shopify
              fees, paid apps, custom app development, photography and new
              copywriting are separate.
            </small>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="pricing-intro" data-reveal>
            <h2>
              Choose how you launch.
              <span>Theme or full build.</span>
            </h2>
            <p>
              Stay hands-on with the premium theme, or give us the complete
              Shopify store and receive it ready to publish.
            </p>
          </div>

          <div className="pricing-options" data-reveal>
            <article className="pricing-option pricing-option-theme">
              <span className="pricing-option-label">Do it yourself</span>
              <h3>Guildframe premium theme</h3>
              <p>Everything you need to build the store yourself without code.</p>
              <div className="pricing-price-row">
                <div className="price">$419</div>
                <span>one-time</span>
              </div>
              <ul>
                <li>Rune Single, Rune Studio, Saga Single and Saga Studio</li>
                <li>Campaign, product and content pages</li>
                <li>Full Shopify editor controls</li>
                <li>Responsive, speed-focused layouts</li>
                <li>Setup documentation</li>
              </ul>
              <a
                href={siteConfig.purchasePath}
                className="checkout-button"
                data-analytics-event="begin_checkout"
                data-analytics-label="Buy Guildframe theme for $419"
                data-analytics-location="pricing theme option"
              >
                Buy the theme for $419 <span aria-hidden="true">↗</span>
              </a>
              <small>Requires an active Shopify store. No Guildframe subscription.</small>
            </article>

            <article className="pricing-option pricing-option-service">
              <span className="pricing-option-label">Done for you</span>
              <h3>Complete Shopify store</h3>
              <p>We design and develop the entire storefront from zero to publish.</p>
              <div className="pricing-price-row">
                <div className="price">$1,399</div>
                <span>flat fee</span>
              </div>
              <ul>
                <li>Guildframe theme included in the build</li>
                <li>Full storefront design and development</li>
                <li>Products and supplied content added</li>
                <li>Desktop, tablet and mobile polish</li>
                <li>Buying-path testing and publish handoff</li>
              </ul>
              <a
                href={siteConfig.servicePath}
                className="checkout-button checkout-button-service"
                data-analytics-event="service_interest"
                data-analytics-label="Get done-for-you Shopify store for $1399"
                data-analytics-location="pricing service option"
              >
                Get the full store for $1,399 <span aria-hidden="true">↗</span>
              </a>
              <small>Same service fee regardless of catalog size. Third-party costs are separate.</small>
            </article>
          </div>
          <div className="pricing-promise" data-reveal>
            <div>
              <h3>Two clear offers. No hidden hybrid.</h3>
            </div>
            <p>
              The $419 theme is self-serve and fully customizable. The $1,399
              service is a complete Guildframe storefront build. We confirm the
              brief, required assets, review process and delivery plan first.
            </p>
          </div>
        </section>

        <section className="contact-question-section section-pad" id="contact">
          <div data-reveal>
            <span>Direct help from Guildframe</span>
            <h2>Got questions or queries?</h2>
            <p>
              Ask about the theme, presets, store requirements or the complete
              done-for-you service. You will hear from the developer.
            </p>
            <div className="shopify-partner-badge" aria-label="Guildframe is a Shopify Partner">
              <span aria-hidden="true">S</span>
              <strong>Shopify Partner</strong>
            </div>
          </div>
          <a
            className="contact-question-button"
            href={siteConfig.contactInquiryUrl}
            data-analytics-event="contact_interest"
            data-analytics-label="Email Guildframe"
            data-analytics-location="homepage contact section"
          >
            Contact the developer <span aria-hidden="true">↗</span>
          </a>
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
        href="#pricing"
        aria-label="Compare the Guildframe theme and done-for-you store"
        data-analytics-event="view_pricing"
        data-analytics-label="Compare both Guildframe offers"
        data-analytics-location="mobile sticky CTA"
      >
        <span>
          <strong>Choose your launch path</strong>
          <small>Theme or done-for-you store</small>
        </span>
        <b>View</b>
      </a>

      <footer className="site-footer" id="footer">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <h2>
              Your campaign is funded.{" "}
              <span>Keep selling beyond Kickstarter.</span>
            </h2>
            <p>
              Choose your preset, add the campaign content you already have and
              give your audience a polished place to keep buying.
            </p>
            <div className="footer-actions">
              <a className="footer-primary" href={siteConfig.purchasePath}>
                Buy the $419 theme <span aria-hidden="true">↗</span>
              </a>
              <a className="footer-secondary" href={siteConfig.servicePath}>
                Get the $1,399 full build
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
            <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" width="1000" height="220" />
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
              <a href="#styles">Presets</a>
              <a href="#customization">Customization</a>
              <a href="#features">What&apos;s included</a>
            </div>
            <div>
              <strong>Get Guildframe</strong>
              <a href="#pricing">Pricing</a>
              <a href={siteConfig.servicePath}>Done-for-you Shopify store</a>
              <a href="#faq">FAQ</a>
              <a href="/guides">Guides</a>
              <a href="/resources">Reference library</a>
              <a href="/kickstarter-to-shopify">Kickstarter to Shopify</a>
            </div>
            <div>
              <strong>For creators</strong>
              <a href="/shopify-theme-for-board-games">Board game stores</a>
              <a href="/shopify-theme-for-ttrpg">TTRPG stores</a>
              <a href="/shopify-theme-for-miniatures">Miniature stores</a>
              <a href="/about">About Guildframe</a>
              <a href="/editorial-policy">Editorial policy</a>
              <a href={siteConfig.contactInquiryUrl}>Contact</a>
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

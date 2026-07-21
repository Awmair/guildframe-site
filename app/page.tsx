"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { JsonLd } from "./components/JsonLd";
import { ProjectInquiryForm } from "./components/ProjectInquiryForm";
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
    title: "Send your assets",
    copy: "Share your products, copy, brand kit and final artwork.",
  },
  {
    number: "02",
    title: "See your free preview",
    copy: "Within 72 hours, see a tailored storefront direction at no cost.",
  },
  {
    number: "03",
    title: "Approve the direction",
    copy: "Move forward only if you like it. We complete, test and prepare the store.",
  },
  {
    number: "LIVE",
    title: "Your store is open",
    copy: "Products, pages, mobile and checkout are ready for customers.",
  },
];

const features = [
  {
    number: "01",
    icon: "assets",
    title: "Store architecture",
    copy: "We structure navigation, collections and buying paths around your catalog.",
  },
  {
    number: "02",
    icon: "editions",
    title: "Up to 50 product SKUs",
    copy: "We add your supplied games, editions, expansions, bundles and accessories.",
  },
  {
    number: "03",
    icon: "pages",
    title: "Complete storefront pages",
    copy: "Homepage, catalog, product and essential content pages are designed and built.",
  },
  {
    number: "04",
    icon: "controls",
    title: "Designed for your brand",
    copy: "Your visual identity, product artwork and tabletop world shape the entire experience.",
  },
  {
    number: "05",
    icon: "responsive",
    title: "Polished on every screen",
    copy: "We refine the storefront for phones, tablets and desktop displays.",
  },
  {
    number: "06",
    icon: "commerce",
    title: "Tested and ready to publish",
    copy: "We test the buying path, Shopify checkout and key storefront interactions.",
  },
];

const faqs = [
  {
    question: "What does Guildframe do?",
    answer:
      "Guildframe designs and develops Shopify storefronts for tabletop creators and studios. We also make a premium DIY theme with four complete presets. Both options require an active Shopify store and use Shopify's checkout, inventory and payments.",
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
    question: "How does the free 72-hour preview work?",
    answer:
      "Send your store brief, brand assets and a representative set of products. We create a tailored storefront direction within 72 hours at no cost. You decide whether to continue with the full build after seeing it.",
  },
  {
    question: "What are the two ways to use Guildframe?",
    answer:
      "Hire Guildframe to design and develop your complete Shopify storefront with up to 50 product SKUs, or buy the Guildframe theme and build it yourself with Shopify's visual editor.",
  },
  {
    question: "What is included in the done-for-you service?",
    answer:
      "We structure the storefront, create a custom design around your brand, build the key pages, add your supplied products and content, optimize desktop and mobile layouts, test the buying path and prepare the store for publication.",
  },
  {
    question: "Is the done-for-you price really flat?",
    answer:
      "Yes. The price shown above covers the complete design and development service for creators and studios with up to 50 product SKUs. You provide approved product data, copy and visual assets. Shopify fees, paid apps, custom app development, photography and new copywriting are separate.",
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

function PricingSection({
  id,
  analyticsLocation,
  showIntro = true,
  showPromise = false,
}: {
  id: string;
  analyticsLocation: string;
  showIntro?: boolean;
  showPromise?: boolean;
}) {
  return (
    <section className="pricing-section section-pad" id={id}>
      {showIntro ? (
        <div className="pricing-intro" data-reveal>
          <h2>
            Two ways to launch your store.
            <span>We build it, or you use our theme.</span>
          </h2>
          <p>
            Start with a complete storefront built by a tabletop specialist,
            or use our premium theme and build it yourself.
          </p>
        </div>
      ) : null}

      {showPromise ? (
        <div className="pricing-promise pricing-promise-first" data-reveal>
          <div>
            <h3>One specialist. Two clear ways to launch.</h3>
          </div>
          <p>
            Choose a complete store build for up to 50 product SKUs, or buy
            the fully customizable Guildframe theme and build it yourself.
          </p>
        </div>
      ) : null}

      <div className="pricing-options" data-reveal>
        <article className="pricing-option pricing-option-service">
          <span className="pricing-option-label">Design and development</span>
          <h3>Your complete Shopify store</h3>
          <p>Built specifically for your tabletop brand, from zero to publish.</p>
          <div className="pricing-price-row">
            <div className="price">$2,199</div>
            <span>flat fee</span>
          </div>
          <ul>
            <li>Free store preview within 72 hours</li>
            <li>Custom storefront built around your brand</li>
            <li>Full storefront design and development</li>
            <li>Up to 50 product SKUs added</li>
            <li>Desktop, tablet and mobile polish</li>
            <li>Buying-path testing and publish handoff</li>
          </ul>
          <a
            href="#start-project"
            className="checkout-button checkout-button-service"
            data-analytics-event="service_interest"
            data-analytics-label="Get my free preview"
            data-analytics-location={`${analyticsLocation} service option`}
          >
            Get my free preview <span aria-hidden="true">↗</span>
          </a>
          <small>For creators and studios with up to 50 product SKUs. Third-party costs are separate.</small>
        </article>

        <article className="pricing-option pricing-option-theme">
          <span className="pricing-option-label">Want to build it yourself?</span>
          <h3>Get the Guildframe theme</h3>
          <p>A premium Shopify theme purpose built for tabletop games.</p>
          <div className="pricing-price-row">
            <div className="price">$349</div>
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
            data-analytics-label="Get Guildframe theme"
            data-analytics-location={`${analyticsLocation} theme option`}
          >
            Get the theme <span aria-hidden="true">↗</span>
          </a>
          <small>Requires an active Shopify store. No Guildframe subscription.</small>
        </article>
      </div>
    </section>
  );
}

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
          <a href={siteConfig.servicePath}>Services</a>
          <a className={activeSection === "styles" ? "is-active" : ""} href="#styles">
            Theme
          </a>
          <a className={activeSection === "pricing" ? "is-active" : ""} href="#pricing">
            Pricing
          </a>
          <a href={siteConfig.contactInquiryUrl}>Contact</a>
        </nav>
        <a className="nav-cta" href="#start-project">
          Get my free preview <span aria-hidden="true">↗</span>
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
              <span className="hero-heading-line hero-heading-line-dark">Shopify stores</span>
              <span className="hero-heading-line hero-heading-line-blue">built for tabletop</span>
              <span className="hero-heading-line hero-heading-line-dark">games.</span>
            </h1>
            <p className="hero-support">
              We design and develop complete Shopify storefronts for board
              games, card games, TTRPGs, miniatures and tabletop studios.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href="#start-project"
                data-analytics-event="generate_lead"
                data-analytics-label="Get my free preview"
                data-analytics-location="homepage hero"
              >
                Get my free preview <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

        </section>

        <section className="problem-section section-pad">
          <div className="problem-copy" data-reveal>
            <h2>
              Your game has its own world.
              <span>Your store should feel like part of it.</span>
            </h2>
            <p>
              Editions, expansions, bundles, add-ons and campaign stories all
              need to work together. We build the Shopify store around them.
            </p>
          </div>
        </section>

        <section className="preview-first-section section-pad" id="free-preview">
          <div className="preview-first-heading" data-reveal>
            <h2>
              See your store direction
              <span>before you pay us.</span>
            </h2>
            <p>
              Guildframe is the first Shopify agency to build a tailored store
              preview within 72 hours at no cost. Move forward
              only if you like the direction.
            </p>
          </div>

          <div className="preview-first-comparison" data-reveal>
            <article>
              <h3>The usual agency process</h3>
              <strong>Commit first. Wait weeks.</strong>
              <p>
                Pay, begin the project and wait up to four weeks before you can
                judge whether the creative direction feels right.
              </p>
            </article>
            <article className="preview-first-guildframe">
              <h3>The Guildframe process</h3>
              <strong>Preview first. Decide second.</strong>
              <p>
                See a tailored storefront direction within 72 hours. It is
                free, and there is no obligation to continue.
              </p>
            </article>
          </div>

          <div className="preview-first-action" data-reveal>
            <p>No invoice. No obligation. No four week blind wait.</p>
            <a
              href="#start-project"
              data-analytics-event="generate_lead"
              data-analytics-label="Get my free preview"
              data-analytics-location="free preview section"
            >
              Get my free preview <span aria-hidden="true">↗</span>
            </a>
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
                See the direction free within 72 hours. Continue only if you like it.
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
                  <span>Your store assets</span>
                  <strong className="campaign-funded">
                    <i aria-hidden="true" />
                    Files ready
                  </strong>
                </div>
                <img
                  src="/images/guildframe-launch-kit.jpg"
                  alt="Final product artwork, brand files and store assets ready for a Shopify build"
                  loading="lazy"
                  decoding="async"
                />
                <div className="campaign-meter">
                  <i />
                </div>
                <div className="campaign-meta">
                  <strong>Your build brief</strong>
                  <span>Products, copy and artwork supplied</span>
                </div>
              </div>

              <div
                className={`preview-build process-visual-layer ${activeProcess === 1 ? "is-active" : ""}`}
                aria-hidden={activeProcess !== 1}
              >
                <div className="preview-build-frame">
                  <img
                    src="/images/pdp-guildframe-responsive-v1.jpg"
                    alt="A tailored Shopify storefront direction shown on desktop and mobile"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="preview-build-status">
                    <span>Preview ready</span>
                    <strong>Within 72 hours</strong>
                  </div>
                </div>
                <div className="preview-build-stamp">
                  <strong>Free</strong>
                  <span>No obligation</span>
                </div>
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

        <section className="features-section section-pad" id="features">
          <div className="features-heading" data-reveal>
            <h2>
              Your Shopify store.
              <span>Built from zero to publish.</span>
            </h2>
            <p>
              We handle the structure, design, product setup and final testing
              so you receive a complete storefront ready for customers.
            </p>
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

        <section className="bonus-section section-pad">
          <div className="bonus-offer" data-reveal>
            <p>Shopify design and development</p>
            <div className="bonus-free">
              <strong>Built for you</strong>
              <span>one clear project scope</span>
            </div>
            <strong className="service-size-proof">Up to 50 product SKUs. Zero to publish.</strong>
          </div>
          <div className="bonus-copy" data-reveal>
            <h2>
              Your complete Shopify store.
              <span>One clear price.</span>
            </h2>
            <p>
              We design and develop your storefront from an empty Shopify store
              to a polished, tested build ready to publish. Your brand, your
              products and your world, handled from zero to launch.
            </p>
            <div className="bonus-availability">
              <span>Built for creators and studios with up to 50 product SKUs.</span>
              <strong>Delivery plan confirmed before work begins.</strong>
            </div>
            <a
              href="#start-project"
              className="bonus-button"
              data-analytics-event="service_interest"
              data-analytics-label="Get my free preview"
              data-analytics-location="done-for-you offer"
            >
              Get my free preview <span aria-hidden="true">↗</span>
            </a>
            <small>
              You provide approved product data, copy and visual assets. Shopify
              fees, paid apps, custom app development, photography and new
              copywriting are separate.
            </small>
          </div>
        </section>

        <PricingSection
          id="pricing"
          analyticsLocation="primary pricing"
          showIntro={false}
          showPromise
        />

        <section className="styles-section section-pad" id="styles">
          <div className="theme-entry" data-reveal>
            <h2>Want to build it yourself?</h2>
            <p>
              Buy Guildframe, our premium Shopify theme purpose built for
              tabletop games, then shape it around your world without code.
            </p>
            <a href={siteConfig.purchasePath}>
              Get the theme <span aria-hidden="true">↗</span>
            </a>
          </div>
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

        <PricingSection id="pricing-final" analyticsLocation="final pricing" />

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

        <section className="footer-cta" aria-label="Choose how to build your Shopify store">
          <div className="footer-cta-copy">
            <h2>
              Your game deserves a store.{" "}
              <span>We know how to build it.</span>
            </h2>
            <p>
              Hire Guildframe for the complete Shopify storefront, or build it
              yourself with our premium tabletop theme.
            </p>
            <div className="footer-actions">
              <a className="footer-primary" href="#start-project">
                Get my free preview <span aria-hidden="true">↗</span>
              </a>
              <a className="footer-secondary" href={siteConfig.purchasePath}>
                Get the theme
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
        </section>

        <ProjectInquiryForm source="homepage" />
      </main>

      <a
        className={`mobile-buy-cta ${showMobileCta ? "is-visible" : ""}`}
        href="#start-project"
        aria-label="Get my free preview"
        data-analytics-event="generate_lead"
        data-analytics-label="Get my free preview"
        data-analytics-location="mobile sticky CTA"
      >
        <span>
          <strong>Get my free preview</strong>
          <small>Free preview within 72 hours</small>
        </span>
        <b aria-hidden="true">↗</b>
      </a>

      <footer className="site-footer" id="footer">
        <div className="footer-directory">
          <div className="footer-brand">
            <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" width="1000" height="220" />
            <p>
              Shopify design, development and a premium DIY theme built
              specifically for tabletop creators.
            </p>
            <div className="footer-trust">
              <span>Tabletop specialist</span>
              <span>Clear project pricing</span>
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

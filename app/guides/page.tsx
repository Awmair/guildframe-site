import "./library.css";
import { LibrarySearch } from "../components/LibrarySearch";
import Link from "next/link";
import {launchGuides} from "../launch-guides";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Kickstarter Marketing, Design & Launch Guides",
  description:
    "Practical Kickstarter and Gamefound launch guides for tabletop creators. Plan prelaunch email, ad budgets, campaign design, rewards and backer updates.",
  path: "/guides",
  keywords: ["board game Kickstarter launch", "tabletop campaign design", "card game Kickstarter guide"],
});

const afterFundingGuides = [
  {
    title: "Build a Tabletop Shopify Store With AI",
    copy: "What AI coding tools do well, where they break, and the catalog decisions no model can make for you.",
    href: "/guides/build-a-tabletop-shopify-store-with-ai",
    tag: "AI assisted builds",
  },
  {
    title: "What Happens After Your Kickstarter Is Funded?",
    copy: "What to do about payments, backer details, production, delivery and new orders after funding.",
    href: "/guides/what-happens-after-kickstarter-is-funded",
    tag: "Post funding roadmap",
  },
  {
    title: "Kickstarter to Shopify Migration Guide",
    copy: "A step by step plan for products, content, operations and launch timing after crowdfunding.",
    href: "/guides/move-from-kickstarter-to-shopify",
    tag: "Migration guide",
  },
  {
    title: "Best Shopify Themes for Board Games and Tabletop Creators",
    copy: "Compare Shopify themes by catalogue fit, features and the work needed to set them up.",
    href: "/guides/best-shopify-themes-for-board-games",
    tag: "Theme comparison",
  },
  {
    title: "Shopify Developer vs DIY Theme for Tabletop Brands",
    copy: "Compare cost, time, control and responsibility before choosing who should build your storefront.",
    href: "/guides/shopify-developer-vs-diy-theme",
    tag: "Build comparison",
  },
  {
    title: "Selling After Kickstarter: Late Pledges, Preorders or Shopify?",
    copy: "Choose the right post campaign sales path while keeping delivery promises and backer trust clear.",
    href: "/guides/kickstarter-late-pledges-vs-shopify",
    tag: "Platform strategy",
  },
  {
    title: "BackerKit vs Shopify vs Gamefound: What Each Platform Does After Crowdfunding",
    copy: "Compare the tools for funding, surveys, backer rewards and ongoing retail orders.",
    href: "/guides/backerkit-vs-shopify-vs-gamefound",
    tag: "Platform comparison",
  },
  {
    title: "Kickstarter to Shopify Launch Timeline",
    copy: "A phase by phase plan from campaign close through product setup, testing and public store launch.",
    href: "/guides/kickstarter-to-shopify-launch-timeline",
    tag: "Launch timeline",
  },
  {
    title: "How to Sell Board Game Preorders on Shopify After Crowdfunding",
    copy: "Choose the right order channel and make preorder timing, inventory and customer communication clear.",
    href: "/guides/sell-board-game-preorders-on-shopify",
    tag: "Preorder guide",
  },
  {
    title: "How to Sell Board Game Expansions, Add ons and Bundles on Shopify",
    copy: "Structure core games, editions and compatible extras without recreating confusing pledge tiers.",
    href: "/guides/sell-board-game-expansions-add-ons-shopify",
    tag: "Catalog guide",
  },
  {
    title: "Selling Miniatures Internationally: VAT, IOSS and Shopify",
    copy: "Plan markets, shipping, customs data, EU VAT, IOSS and customer delivery promises before launch.",
    href: "/guides/selling-miniatures-internationally-vat-ioss",
    tag: "International sales",
  },
  {
    title: "How Much Does a Board Game Website Cost?",
    copy: "Budget the platform, theme or build, apps, product setup and ongoing store operation.",
    href: "/guides/how-much-does-a-board-game-website-cost",
    tag: "Cost guide",
  },
  {
    title: "Shopify vs Etsy for Selling Miniatures and Terrain",
    copy: "Compare discovery, fees, brand control, catalog structure and the value of using both channels.",
    href: "/guides/shopify-vs-etsy-for-selling-miniatures",
    tag: "Platform comparison",
  },
];

const campaignGuides = launchGuides.map(g=>({title:g.title,copy:g.description,href:`/guides/${g.slug}`,tag:g.tag}));
const guides=[...campaignGuides,...afterFundingGuides];

const guideFilters = [
  { value: "all", label: "All guides" },
  { value: "planning", label: "Launch planning" },
  { value: "audience", label: "Audience & ads" },
  { value: "campaign", label: "The campaign page" },
  { value: "formats", label: "Your game format" },
  { value: "after", label: "After funding" },
];
function guideStage(href: string) {
  if (/marketing-plan|launch-timeline|funding-goal|cash-flow|manufactur/.test(href)) return "planning";
  if (/email|prelaunch|advertis|meta-ads|roas|cpa|landing|community|facebook|conversion/.test(href)) return "audience";
  if (/launch-guide|ttrpg|miniatures|card-game|gamefound/.test(href) && !/page|reward/.test(href)) return "formats";
  if (/page|graphic|reward|video|stretch|story|gameplay|component|shipping|budget/.test(href)) return "campaign";
  return "planning";
}
function guideImage(href: string, index: number) {
  if (/miniature|terrain/.test(href)) return "miniature-terrain";
  if (/ttrpg|rpg/.test(href)) return "rpg-book";
  if (/card-game|tcg/.test(href)) return "trading-card-game";
  const images = ["strategy-board-game", "party-card-game", "dice-accessories", "rpg-book", "trading-card-game", "miniature-terrain"];
  return images[index % images.length];
}
function GuideCard({ guide, index, stage }: { guide: { title: string; copy: string; href: string; tag: string }; index: number; stage: string }) {
  const image = guideImage(guide.href, index);
  return <Link href={guide.href} className="gf-library-card" data-guide-stage={stage} data-tone={index % 6}>
    <div className="gf-library-card-art" aria-hidden="true"><span className="gf-library-card-type">Guildframe field guide</span><img src={`/images/hero/${image}-480w.webp`} srcSet={`/images/hero/${image}-320w.webp 320w, /images/hero/${image}-480w.webp 480w`} sizes="(max-width: 650px) 70vw, (max-width: 1000px) 40vw, 290px" width="640" height="640" alt="" loading="lazy"/><span className="gf-library-card-number">{String(index + 1).padStart(2, "0")}</span></div>
    <div className="gf-library-card-copy"><span>{guide.tag}</span><h2>{guide.title}</h2><p>{guide.copy}</p><strong>Read the guide</strong></div>
  </Link>;
}

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": absoluteUrl("/guides"),
            name: "Guildframe Guides",
            url: absoluteUrl("/guides"),
            description: "Prelaunch marketing, campaign design, advertising and post-crowdfunding guides.",
            isPartOf: { "@id": absoluteUrl("/#website") },
            mainEntity: { "@id": absoluteUrl("/guides#guide-list") },
            inLanguage: "en",
          },
          {
            "@type": "ItemList",
            "@id": absoluteUrl("/guides#guide-list"),
            numberOfItems: guides.length,
            itemListElement: guides.map((guide, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Article",
                name: guide.title,
                url: absoluteUrl(guide.href),
              },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
            ],
          },
        ],
      }} />
      <a className="skip-link" href="#guides-content">Skip to guides</a>
      <SeoHeader />
      <main className="guides-main gf-studio-library" id="guides-content">
        <section className="guides-hero">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
          <span className="gf-eyebrow">The Guildframe field notes</span>
          <h1>A clearer path<br/><em>to your next launch.</em></h1>
          <p>Practical guides for tabletop creators. Work through the plan, the audience, the page and everything that comes after funding.</p>
          <Link href="/resources/tabletop-kickstarter-launch-kit" className="gf-library-kit-link"><span>Prefer working files?</span> Get the free campaign launch kit</Link>
        </section>
        <nav className="guide-start-here" aria-label="Start with your launch stage">
          <Link href="/guides/board-game-kickstarter-marketing-plan"><span>01 / MAKE THE PLAN</span><strong>What needs to happen before launch?</strong><p>Put the product, audience and campaign in a practical order.</p></Link>
          <Link href="/guides/kickstarter-advertising-budget-board-games"><span>02 / CHECK THE NUMBERS</span><strong>What can you afford to spend?</strong><p>Check reward margins before choosing an ad budget.</p></Link>
          <Link href="/guides/board-game-kickstarter-page-checklist"><span>03 / PREPARE THE PAGE</span><strong>Can a new backer understand the game?</strong><p>Review gameplay, rewards and delivery before publishing.</p></Link>
        </nav>
        <LibrarySearch count={guides.length} noun="guides" filters={guideFilters}/>
        <section className="guides-grid" id="launch-guides" aria-label="Campaign launch guides">
          {campaignGuides.map((guide, index) => <GuideCard guide={guide} index={index} stage={guideStage(guide.href)} key={guide.href}/>)}
        </section>
        <section className="gf-archive-heading" id="after-funding" data-guide-heading="after-funding-guides"><span className="gf-eyebrow">Keep the next stage in view</span><h2>After funding</h2><p>Plan fulfilment, ongoing orders and a permanent home for the game.</p></section>
        <section className="guides-grid" id="after-funding-guides" aria-label="After funding guides">{afterFundingGuides.map((guide, index) => <GuideCard guide={guide} index={index + campaignGuides.length} stage="after" key={guide.href}/>)}</section>
        <p className="gf-library-art-note">Guide illustrations show original fictional game concepts.</p>
        <section className="guides-solutions">
          <div>
            <h2>Find the service for your project.</h2>
          </div>
          <nav aria-label="Guildframe solutions">
            <Link href="/board-game-kickstarter-campaign-design">Board games</Link>
            <Link href="/card-game-kickstarter-campaign-design">Card games &amp; TCGs</Link>
            <Link href="/gamefound-campaign-design">Gamefound page design</Link>
            <Link href="/tabletop-accessories-campaign-design">Dice &amp; accessories</Link>
            <Link href="/ttrpg-kickstarter-campaign-design">TTRPGs</Link>
            <Link href="/miniatures-kickstarter-campaign-design">Miniatures</Link>
            <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
            <Link href="/resources">Checklists and references</Link>
          </nav>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

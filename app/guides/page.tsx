import { LibrarySearch } from "../components/LibrarySearch";
import Link from "next/link";
import { Icon } from "../components/chrome/Icon";
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

// The A to Z guide is pinned first as the starting point for new creators.
const startHere = { title: "The Complete Guide to Launching a Tabletop Kickstarter, A to Z", copy: "Every stage of a tabletop Kickstarter in order, from a tested prototype to delivery, with a plain answer for each and the guide that goes deeper.", href: "/guides/how-to-launch-a-board-game-on-kickstarter", tag: "Start here" };
const campaignGuides = [startHere, ...launchGuides.map(g=>({title:g.title,copy:g.description,href:`/guides/${g.slug}`,tag:g.tag}))];
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
type Guide = { title: string; copy: string; href: string; tag: string };
const stagedGuides = campaignGuides.map((guide, index) => ({ guide, index, stage: guideStage(guide.href) }));
const campaignGroups = guideFilters.filter(option => option.value !== "all" && option.value !== "after").map(option => ({ ...option, items: stagedGuides.filter(item => item.stage === option.value) })).filter(group => group.items.length > 0);
const filtersWithCounts = guideFilters.map(option => ({ ...option, count: option.value === "all" ? guides.length : option.value === "after" ? afterFundingGuides.length : stagedGuides.filter(item => item.stage === option.value).length }));

function GuideRow({ guide, index, stage }: { guide: Guide; index: number; stage: string }) {
  const image = guideImage(guide.href, index);
  return <Link href={guide.href} className="gd-row" data-guide-stage={stage} data-tone={index % 6} data-title={guide.title} data-cursor-label="Read">
    <span className="gd-row-art" aria-hidden="true"><img src={`/images/hero/${image}-320w.webp`} width="320" height="320" alt="" loading="lazy" decoding="async"/></span>
    <div className="gd-row-copy"><h3 className="gd-row-title">{guide.title}</h3><span className="gd-row-summary">{guide.copy}</span><span className="gd-row-tag">{guide.tag}</span></div>
    <Icon name="arrow" size={20} className="gd-row-arrow"/>
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
      <main className="guides-main w-page gd gd-index" id="guides-content">
        <header className="gd-hero guides-hero">
          <div className="gd-hero-copy">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
            <h1 className="gd-title" data-reveal="lines"><span className="w-line"><span>Plan your Kickstarter.</span></span> <span className="w-line"><span><em>Prepare what comes next.</em></span></span></h1>
            <p className="gd-lead">Work through your launch budget, campaign page and marketing plan. Compare outside help, then prepare a store for ongoing sales.</p>
            <nav className="gf-service-related gd-tools" aria-label="Tools and real campaign examples">
              <Link href="/guides/kickstarter-advertising-budget-board-games#advertising-calculator" data-title="Ad budget calculator">Try the ad budget calculator<Icon name="arrow-up-right" size={16}/></Link>
              <Link href="/resources/tabletop-campaign-page-study" data-title="Campaign page study">Explore 25 campaign examples<Icon name="arrow-up-right" size={16}/></Link>
              <Link href="/campaign-creative#creative-walkthroughs" data-title="Creative walkthroughs">Watch the creative walkthroughs<Icon name="arrow-up-right" size={16}/></Link>
            </nav>
          </div>
          <nav className="guide-start-here gd-deal" aria-label="Start with the decision you need to make" data-reveal="rise">
            <Link href="/guides/board-game-kickstarter-marketing-plan" data-title="Marketing plan"><span>Make the plan</span><strong>What needs to happen before launch?</strong><p>Put the product, audience and campaign in a practical order.</p><Icon name="arrow" size={20}/></Link>
            <Link href="/guides/choose-board-game-kickstarter-marketing-agency" data-title="Compare campaign help"><span>Compare campaign help</span><strong>Which work should you hire for?</strong><p>Compare deliverables, fees and responsibilities before choosing an agency.</p><Icon name="arrow" size={20}/></Link>
            <Link href="/guides/best-shopify-themes-for-board-games" data-title="Shopify themes"><span>Plan your store</span><strong>Which Shopify theme fits your games?</strong><p>Compare themes against your catalogue, budget and setup work.</p><Icon name="arrow" size={20}/></Link>
          </nav>
        </header>

        <section className="gd-library tone-board" aria-label="Guide library">
          <div className="gd-library-inner">
            <LibrarySearch count={guides.length} noun="guides" filters={filtersWithCounts}/>
            <div id="launch-guides">
              {campaignGroups.map(group => <section className="gd-group" key={group.value} aria-labelledby={`group-${group.value}`} data-guide-heading={`guides-${group.value}`}>
                <h2 className="gd-group-title" id={`group-${group.value}`}>{group.label}</h2>
                <div className="guides-grid gd-rows" id={`guides-${group.value}`}>
                  {group.items.map(item => <GuideRow guide={item.guide} index={item.index} stage={item.stage} key={item.guide.href}/>)}
                </div>
              </section>)}
            </div>
            <section className="gd-group gd-group--after" id="after-funding" aria-labelledby="after-funding-title" data-guide-heading="after-funding-guides">
              <div className="gd-group-head"><h2 className="gd-group-title" id="after-funding-title">After funding</h2><p>Plan fulfilment, ongoing orders and a permanent home for the game.</p></div>
              <div className="guides-grid gd-rows" id="after-funding-guides" aria-label="After funding guides">{afterFundingGuides.map((guide, index) => <GuideRow guide={guide} index={index + campaignGuides.length} stage="after" key={guide.href}/>)}</div>
            </section>
            <p className="gf-library-art-note">Guide illustrations show original fictional game concepts.</p>
          </div>
        </section>

        <section className="guides-solutions gd-solutions" aria-labelledby="guides-solutions-title">
          <h2 id="guides-solutions-title" className="w-h2">Find the service <em>for your project.</em></h2>
          <nav aria-label="Guildframe solutions">
            <Link href="/board-game-kickstarter-campaign-design">Board games</Link>
            <Link href="/card-game-kickstarter-campaign-design">Card games &amp; TCGs</Link>
            <Link href="/gamefound-campaign-design">Gamefound page design</Link>
            <Link href="/tabletop-accessories-campaign-design">Dice &amp; accessories</Link>
            <Link href="/ttrpg-kickstarter-campaign-design">TTRPGs</Link>
            <Link href="/miniatures-kickstarter-campaign-design">Miniatures</Link>
            <Link href="/kickstarter-to-shopify">Kickstarter to Shopify</Link>
            <Link href="/resources">Checklists and references</Link>
            <Link href="/kickstarter-launch-services">Kickstarter launch services</Link>
            <Link href="/buy">Start your launch project</Link>
          </nav>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

import Link from "next/link";
import {launchGuides} from "../launch-guides";
import { Breadcrumbs, SeoFooter, SeoHeader } from "../components/SeoChrome";
import { JsonLd } from "../components/JsonLd";
import { absoluteUrl, pageMetadata } from "../site-config";

export const metadata = pageMetadata({
  title: "Kickstarter Page Design & Launch Guides",
  description:
    "Practical launch guides for tabletop Kickstarter and Gamefound campaigns. Plan design costs, artwork, reward graphics and a campaign page ready for backers.",
  path: "/guides",
  keywords: ["tabletop ecommerce guides", "Kickstarter to Shopify guide", "board game ecommerce"],
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
            description: "Campaign design, launch preparation and post-crowdfunding guides.",
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
      <main className="guides-main" id="guides-content">
        <section className="guides-hero">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
          <h1>Kickstarter page design <em>&amp; launch guides.</em></h1>
          <p>
            What to budget for design, which files to send and how to review your campaign before launch. There are also guides for planning a store after funding.
          </p>
        </section>
        <section className="guides-grid">
          {campaignGuides.map((guide, index) => (
            <Link href={guide.href} key={guide.title}>
              <div>
                <span>{guide.tag}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              <h2>{guide.title}</h2>
              <p>{guide.copy}</p>
              <strong>Read the guide ↗</strong>
            </Link>
          ))}
        </section>
        <section className="gf-archive-heading"><h2>After funding</h2><p>Existing references for building a store and planning ongoing sales.</p></section><section className="guides-grid">{afterFundingGuides.map(guide=><Link href={guide.href} key={guide.href}><div><span>{guide.tag}</span></div><h2>{guide.title}</h2><p>{guide.copy}</p><strong>Read the guide ↗</strong></Link>)}</section>
        <section className="guides-solutions">
          <div>
            <h2>Find the service for your project.</h2>
          </div>
          <nav aria-label="Guildframe solutions">
            <Link href="/board-game-kickstarter-campaign-design">Board games ↗</Link>
            <Link href="/card-game-kickstarter-campaign-design">Card games &amp; TCGs ↗</Link>
            <Link href="/gamefound-campaign-design">Gamefound page design ↗</Link>
            <Link href="/tabletop-accessories-campaign-design">Dice &amp; accessories ↗</Link>
            <Link href="/ttrpg-kickstarter-campaign-design">TTRPGs ↗</Link>
            <Link href="/miniatures-kickstarter-campaign-design">Miniatures ↗</Link>
            <Link href="/kickstarter-to-shopify">Kickstarter to Shopify ↗</Link>
            <Link href="/resources">Checklists and references ↗</Link>
          </nav>
        </section>
      </main>
      <SeoFooter />
    </>
  );
}

import type { LandingPageContent } from "./components/SeoLandingPage";

const commonSteps = [
  {
    title: "Choose a storefront style",
    copy: "Start with one of four complete visual directions built around tabletop products and campaign storytelling.",
  },
  {
    title: "Bring your campaign assets",
    copy: "Reuse your logo, product images, descriptions, campaign story and final artwork instead of rebuilding every pixel.",
  },
  {
    title: "Review, publish and keep selling",
    copy: "Check your products and pages, connect your Shopify settings and publish a permanent store you control.",
  },
];

export const boardGameContent: LandingPageContent = {
  slug: "shopify-theme-for-board-games",
  eyebrow: "Shopify theme for board games",
  title: "A board game Shopify theme built for",
  highlight: "complete worlds.",
  answer:
    "Guildframe is a Shopify theme for board game creators and publishers. It turns campaign artwork, editions, expansions and product detail into a polished storefront, with mobile layouts and free custom setup included during early release.",
  image: "/images/pdp-guildframe-responsive-v1.jpg",
  imageAlt:
    "Guildframe board game product page displayed on desktop and mobile",
  audience: "board games, card games, expansions and collector editions",
  benefits: [
    {
      title: "Sell the whole product line",
      copy: "Present core games, deluxe editions, expansions, bundles, add-ons and preorders without forcing them into a generic catalog.",
    },
    {
      title: "Keep the campaign story",
      copy: "Carry the world, artwork and product explanation that earned the pledge into the store that follows it.",
    },
    {
      title: "Make every detail yours",
      copy: "Control colors, typography, spacing, layouts and product information through Shopify without code.",
    },
  ],
  proofTitle: "A storefront designed around how tabletop products are actually sold.",
  proofCopy:
    "Board games need more than a product image and an add-to-cart button. Guildframe gives editions, components, campaign context, media, FAQs and related products a clear place in the buying journey.",
  capabilities: [
    {
      title: "Edition-friendly product pages",
      copy: "Explain core, deluxe and collector versions clearly, with strong media and variant choices.",
    },
    {
      title: "Campaign story sections",
      copy: "Reuse the story, proof and artwork that helped your campaign fund.",
    },
    {
      title: "Expansion-ready collections",
      copy: "Organize games, expansions, accessories and bundles as your catalog grows.",
    },
    {
      title: "Responsive by default",
      copy: "Give players a focused buying experience on phones, tablets and desktops.",
    },
    {
      title: "Shopify commerce tools",
      copy: "Use Shopify checkout, inventory, payments, products and compatible apps normally.",
    },
    {
      title: "Done-for-you setup",
      copy: "Send your final assets and we will build the agreed storefront for you to review.",
    },
  ],
  steps: commonSteps,
  faqs: [
    {
      question: "What is the best Shopify theme for a board game store?",
      answer:
        "The best theme is one that can explain the game, distinguish editions, show components clearly, support campaign storytelling and remain easy to shop on mobile. Guildframe is purpose-built around those tabletop requirements.",
    },
    {
      question: "Can Guildframe sell expansions, bundles and preorders?",
      answer:
        "Yes. You can use Shopify products, variants and collections to present core games, expansions, bundles, accessories and preorders. The exact preorder workflow can also use a compatible Shopify app if needed.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "No. Guildframe uses Shopify's visual theme editor, so you can change colors, typography, spacing, sections, layouts and product content without editing code.",
    },
    {
      question: "Does Guildframe include Shopify?",
      answer:
        "No. Guildframe is a theme and setup service for an active Shopify store. Your Shopify plan, payment processing and any third-party app fees are separate.",
    },
  ],
  related: [
    {
      title: "How to move from Kickstarter to Shopify",
      copy: "A practical post-campaign migration plan for products, pages, customers and launch timing.",
      href: "/guides/move-from-kickstarter-to-shopify",
    },
    {
      title: "Best Shopify themes for board games",
      copy: "Compare the main theme routes and choose the right starting point for your catalog.",
      href: "/guides/best-shopify-themes-for-board-games",
    },
    {
      title: "Kickstarter to Shopify storefront system",
      copy: "See how Guildframe turns funded campaign assets into a permanent store.",
      href: "/kickstarter-to-shopify",
    },
  ],
};

export const kickstarterContent: LandingPageContent = {
  slug: "kickstarter-to-shopify",
  eyebrow: "Kickstarter to Shopify",
  title: "Move from a funded Kickstarter to",
  highlight: "a live Shopify store.",
  answer:
    "Guildframe helps tabletop creators move from Kickstarter to Shopify without rebuilding their campaign from scratch. Reuse your final artwork, product information, story and audience proof inside a permanent storefront built for ongoing sales.",
  image: "/images/guildframe-funded-to-live-v2.jpg",
  imageAlt:
    "A funded Kickstarter campaign becoming a live Guildframe Shopify store",
  audience: "funded tabletop campaigns ready for the next stage",
  benefits: [
    {
      title: "Preserve what already worked",
      copy: "Bring the artwork, product copy, campaign story and social proof your audience already understands.",
    },
    {
      title: "Own the ongoing storefront",
      copy: "Build a permanent home for post-campaign sales, new customers, expansions and future releases.",
    },
    {
      title: "Launch with less setup work",
      copy: "Use a tabletop-ready structure and optional done-for-you setup instead of starting with a blank generic theme.",
    },
  ],
  proofTitle: "Crowdfunding validates the game. Shopify helps you keep selling it.",
  proofCopy:
    "A pledge manager, late pledge page and online store can each serve a different job. Guildframe focuses on the permanent storefront: a branded place for products, content, customer discovery and repeat sales after the campaign.",
  capabilities: [
    {
      title: "Campaign content migration",
      copy: "Reuse finalized story sections, artwork, product details and FAQs in a store-friendly structure.",
    },
    {
      title: "Post-campaign product pages",
      copy: "Turn rewards and editions into products customers can understand beyond the pledge window.",
    },
    {
      title: "A home for future launches",
      copy: "Keep news, events, expansions and new campaign links under one recognizable brand.",
    },
    {
      title: "Mobile shopping",
      copy: "Make it easy for returning backers and new customers to browse from any screen.",
    },
    {
      title: "Shopify checkout and inventory",
      copy: "Manage products, inventory, payments and checkout with Shopify's commerce system.",
    },
    {
      title: "Free custom setup",
      copy: "During early release, our team builds the agreed storefront from your supplied final assets.",
    },
  ],
  steps: commonSteps,
  faqs: [
    {
      question: "How do I move from Kickstarter to Shopify?",
      answer:
        "Prepare final product data, campaign artwork, policies and fulfillment timing. Build the Shopify catalog and branded pages, test checkout and mobile, then direct new shoppers to the store while continuing to communicate with backers through the appropriate campaign channels.",
    },
    {
      question: "Does Shopify replace Kickstarter or a pledge manager?",
      answer:
        "No. Kickstarter funds and communicates around the campaign, while pledge managers can handle post-campaign surveys, upgrades and fulfillment data. Shopify is best treated as the permanent online store for ongoing commerce.",
    },
    {
      question: "Can I reuse my Kickstarter campaign page?",
      answer:
        "You can reuse final artwork, product descriptions, story sections and FAQs that you own, then reorganize them for a store where customers browse products and buy directly.",
    },
    {
      question: "When should I open Shopify after a campaign?",
      answer:
        "Open it when your product information, pricing, fulfillment message and customer support process are clear. You can prepare the storefront before fulfillment, but the store must explain availability and delivery timing accurately.",
    },
  ],
  related: [
    {
      title: "What happens after your Kickstarter is funded?",
      copy: "Understand payment collection, backer operations, fulfillment and the path to ongoing sales.",
      href: "/guides/what-happens-after-kickstarter-is-funded",
    },
    {
      title: "Selling after Kickstarter",
      copy: "Compare late pledges, preorders and Shopify without confusing backers or new customers.",
      href: "/guides/kickstarter-late-pledges-vs-shopify",
    },
    {
      title: "Kickstarter to Shopify migration guide",
      copy: "Follow the practical sequence from final campaign assets to a tested permanent store.",
      href: "/guides/move-from-kickstarter-to-shopify",
    },
  ],
};

export const ttrpgContent: LandingPageContent = {
  slug: "shopify-theme-for-ttrpg",
  eyebrow: "Shopify theme for TTRPG creators",
  title: "A TTRPG Shopify theme for",
  highlight: "stories that keep expanding.",
  answer:
    "Guildframe is a Shopify theme for TTRPG publishers and independent creators. Present core books, supplements, adventures, dice and accessories inside a cinematic, mobile-friendly storefront that can grow with your world.",
  image: "/images/pdp-nightbanner-responsive-v1.jpg",
  imageAlt: "Nightbanner TTRPG product page on desktop and mobile",
  audience: "TTRPG books, adventures, supplements, dice and accessories",
  benefits: [
    {
      title: "Lead with the world",
      copy: "Use strong artwork, story sections and editorial layouts to sell the setting before the specification sheet.",
    },
    {
      title: "Organize a growing library",
      copy: "Give core rules, supplements, adventures, bundles and accessories clear paths through the catalog.",
    },
    {
      title: "Stay easy to manage",
      copy: "Update products, content and visual settings through Shopify as new releases join the line.",
    },
  ],
  proofTitle: "Build one storefront for the core book and everything that follows it.",
  proofCopy:
    "TTRPG customers often enter through the world, then need a simple way to understand formats, compatibility and reading order. Guildframe balances atmosphere with practical product discovery.",
  capabilities: [
    {
      title: "World-first art direction",
      copy: "Choose a cinematic preset and tune it to your setting, typography and campaign palette.",
    },
    {
      title: "Format clarity",
      copy: "Explain hardcover, softcover, PDF and bundle options with structured product information.",
    },
    {
      title: "Series and collection paths",
      copy: "Group core rules, adventures and supplements so new players know where to begin.",
    },
    {
      title: "Creator and lore content",
      copy: "Add news, events, campaign story and supporting pages without losing the storefront focus.",
    },
    {
      title: "Mobile responsive layouts",
      copy: "Keep long-form storytelling and product choices readable on smaller screens.",
    },
    {
      title: "Custom setup included",
      copy: "We can turn your final campaign assets into the agreed storefront during early release.",
    },
  ],
  steps: commonSteps,
  faqs: [
    {
      question: "Can I sell physical books and PDFs with Guildframe?",
      answer:
        "Yes. Physical products can use Shopify normally. Digital file delivery typically uses a compatible Shopify app, so choose one that matches your file size, licensing and customer access needs.",
    },
    {
      question: "Can the theme handle a large TTRPG catalog?",
      answer:
        "Yes. Shopify collections, navigation and product data can organize core books, adventures, supplements, accessories and bundles. A clear catalog structure should be planned before setup.",
    },
    {
      question: "Will my store still feel like my game?",
      answer:
        "Yes. Guildframe includes four visual starting points and controls for colors, typography, spacing, sections, media and product content through Shopify's theme editor.",
    },
    {
      question: "Is free setup included with the TTRPG theme?",
      answer:
        "Yes, during the early release offer. We confirm the pages, supplied final assets, review process and estimated delivery window before customization begins.",
    },
  ],
  related: [
    {
      title: "Move your funded TTRPG from Kickstarter to Shopify",
      copy: "Plan the transition without confusing campaign fulfillment and permanent commerce.",
      href: "/guides/move-from-kickstarter-to-shopify",
    },
    {
      title: "Compare post-campaign platforms",
      copy: "See where BackerKit, Shopify and Gamefound fit after crowdfunding.",
      href: "/guides/backerkit-vs-shopify-vs-gamefound",
    },
    {
      title: "Explore the Nightbanner style",
      copy: "See Guildframe's dark, cinematic direction for lore-rich tabletop worlds.",
      href: "/#styles",
    },
  ],
};

export const miniaturesContent: LandingPageContent = {
  slug: "shopify-theme-for-miniatures",
  eyebrow: "Shopify theme for miniatures",
  title: "A miniatures Shopify theme that makes",
  highlight: "detail feel valuable.",
  answer:
    "Guildframe is a Shopify theme for miniature studios, terrain makers and tabletop accessory brands. It gives detailed product photography, scales, variants, collections and campaign stories a polished storefront on desktop and mobile.",
  image: "/images/pdp-vaultmark-responsive-v1.jpg",
  imageAlt: "Premium miniature and collector product page on desktop and mobile",
  audience: "miniatures, terrain, hobby tools and collector products",
  benefits: [
    {
      title: "Make product detail easy to inspect",
      copy: "Use large media, galleries and structured information for scale, material, assembly and box contents.",
    },
    {
      title: "Organize by game, faction or range",
      copy: "Help customers move through connected products, collections, bundles and add-ons.",
    },
    {
      title: "Balance premium and practical",
      copy: "Keep the presentation atmospheric while making price, variants and buying actions obvious.",
    },
  ],
  proofTitle: "Give collectors the confidence to inspect, compare and buy.",
  proofCopy:
    "Miniature stores need disciplined product information as much as dramatic artwork. Guildframe gives photography, specifications, variants and related ranges a strong visual hierarchy.",
  capabilities: [
    {
      title: "High-impact product media",
      copy: "Show painted examples, sprues, packaging and detail views in a clean gallery.",
    },
    {
      title: "Variant-friendly information",
      copy: "Clarify scale, material, pose, finish or edition choices before purchase.",
    },
    {
      title: "Range-based collections",
      copy: "Group factions, terrain sets, accessories and compatible add-ons for easier discovery.",
    },
    {
      title: "Collector-ready visual styles",
      copy: "Start with a premium preset and customize it to match your studio's identity.",
    },
    {
      title: "Responsive shopping",
      copy: "Keep product images, selectors and calls to action usable on phones and tablets.",
    },
    {
      title: "Shopify operations",
      copy: "Manage inventory, payments, checkout, shipping settings and compatible apps in Shopify.",
    },
  ],
  steps: commonSteps,
  faqs: [
    {
      question: "What should a miniatures ecommerce product page include?",
      answer:
        "Include clear scale, material, assembly requirements, contents, dimensions, variant details, shipping expectations and multiple useful images. The purchase action should remain obvious beside that information.",
    },
    {
      question: "Can Guildframe organize factions and product ranges?",
      answer:
        "Yes. Shopify collections, tags, product data and navigation can support factions, ranges, game systems, terrain and accessories. The best structure depends on how customers normally browse your catalog.",
    },
    {
      question: "Can I use video and detailed product images?",
      answer:
        "Guildframe is designed for rich product media. Keep assets optimized for the web so close-up detail stays sharp without making mobile pages unnecessarily heavy.",
    },
    {
      question: "Can you build the store for my studio?",
      answer:
        "Yes. Free custom setup is included during early release when you provide final product information, logo, copy and artwork. We confirm the scope before work starts.",
    },
  ],
  related: [
    {
      title: "Move a funded miniature campaign to Shopify",
      copy: "Turn campaign rewards and add-ons into a clear permanent product catalog.",
      href: "/guides/move-from-kickstarter-to-shopify",
    },
    {
      title: "Kickstarter late pledges vs Shopify",
      copy: "Choose the right channel for post-campaign access and long-term sales.",
      href: "/guides/kickstarter-late-pledges-vs-shopify",
    },
    {
      title: "Explore the Vaultmark style",
      copy: "See Guildframe's structured, premium direction for collectors and editions.",
      href: "/#styles",
    },
  ],
};

import type { LandingPageContent } from "./components/SeoLandingPage";
import { contentDates } from "./content-dates";

function storeContent(
  slug: string,
  kind: string,
  image: string,
  products: string,
  updated: string,
  capabilities: LandingPageContent["capabilities"],
): LandingPageContent {
  return {
    slug,
    updated,
    eyebrow: "After your campaign",
    title: `Plan your ${kind}`,
    highlight: "Shopify store.",
    answer: `After crowdfunding, organise ${products} into a store a new customer can understand. Start with the catalogue, product facts and delivery plan. Guildframe can help with content and scope optional Shopify planning and setup under a separate brief.`,
    image: `/images/campaign/${image}.webp`,
    imageAlt: `Original concept products for a ${kind} store`,
    audience: "Store planning after crowdfunding",
    benefits: [
      { title: "Start with the catalogue", copy: `Map ${products}, editions and optional extras before designing navigation.` },
      { title: "Agree who handles the work", copy: "Name the owners of product content, theme setup, apps, testing and routine updates." },
      { title: "Check the buying path", copy: "Review mobile pages, product choices, delivery messages and checkout before opening sales." },
    ],
    proofTitle: `What your ${kind} store needs to explain.`,
    proofCopy: "Campaign visitors arrive with context. Store customers may be seeing the product for the first time. Reuse the approved artwork and facts, then build the product page around the choice they need to make.",
    capabilities,
    steps: [
      { title: "Prepare the brief", copy: "Gather your campaign link, product list, artwork, stock status and target opening date. Mark decisions that are still unconfirmed." },
      { title: "Agree the scope", copy: "List the pages, product entry, custom sections and app work. Confirm the owners, costs and review process before building." },
      { title: "Build and review", copy: "Test product choices, mobile pages, checkout and the order handoff. Approve publication when the agreed checks pass." },
    ],
    faqs: [
      { question: "Does a store replace campaign fulfilment?", answer: "No. Keep original backer rewards, reserved stock and delivery communication in their own workflow. Your production and fulfilment providers confirm the facts the new store needs." },
      { question: "Do I need a custom theme?", answer: "Not always. Try a suitable Shopify theme with your real products first. Record any content, app or layout gaps before commissioning custom development." },
      { question: "Can Guildframe help with the store?", answer: "Guildframe can help adapt campaign artwork and product content and organise the post-campaign handoff. Optional Shopify planning and setup require a separate brief. Price, timing, software costs and responsibilities are agreed after reviewing the requirements." },
    ],
    related: [
      { title: "Prepare your store brief", copy: "Choose the help you need and gather the inputs for a separate store project.", href: "/done-for-you-shopify-store" },
      { title: "Use the free store checklist", copy: "Check the catalogue, content, shipping, mobile pages and complete order path.", href: "/resources/board-game-shopify-store-checklist" },
      { title: "Compare Shopify themes", copy: "Compare free and paid themes by catalogue needs and remaining setup work.", href: "/guides/best-shopify-themes-for-board-games" },
    ],
  };
}

export const boardGameContent = storeContent(
  "shopify-theme-for-board-games", "board game", "board-games",
  "core games, expansions and bundles", contentDates.boardGames,
  [
    { title: "Edition differences", copy: "Show what the standard and deluxe boxes contain beside the edition choice." },
    { title: "Expansion compatibility", copy: "Name the base game each expansion requires and link customers to it." },
    { title: "Gameplay and contents", copy: "Make player count, play time, rules and component images easy to find." },
    { title: "Availability", copy: "Separate stock ready to ship from preorders and explain what happens to mixed orders." },
  ],
);

export const ttrpgContent = storeContent(
  "shopify-theme-for-ttrpg", "TTRPG", "ttrpgs",
  "books, PDFs, adventures and supplements", contentDates.ttrpg,
  [
    { title: "Print and PDF contents", copy: "State whether a purchase includes print, digital files or both, and how each reaches the customer." },
    { title: "System requirements", copy: "Explain whether the book is a complete game or needs another system or core rulebook." },
    { title: "Readable samples", copy: "Use interior spreads and an example of play to show what the buyer will use at the table." },
    { title: "Format and delivery", copy: "Confirm binding, page count, file formats and the separate delivery terms for physical and digital items." },
  ],
);

export const miniaturesContent = storeContent(
  "shopify-theme-for-miniatures", "miniatures", "miniatures",
  "physical models, STL files, terrain and hobby accessories", contentDates.miniatures,
  [
    { title: "Physical models or files", copy: "Make it clear whether the customer receives a shipped product or a download." },
    { title: "Scale and dimensions", copy: "List scale, measurements, set contents and compatible bases where relevant." },
    { title: "Preparation required", copy: "Explain assembly for physical kits and the supplied support options for printable files." },
    { title: "Licence and fulfilment", copy: "Use the actual file licence terms. State delivery estimates separately for physical stock and preorders." },
  ],
);

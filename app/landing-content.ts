import type { LandingPageContent } from "./components/SeoLandingPage";
import { contentDates } from "./content-dates";

function storeContent(
  slug: string,
  kind: string,
  image: string,
  products: string,
  updated: string,
  capabilities: LandingPageContent["capabilities"],
  store: LandingPageContent["store"],
  overrides: Partial<LandingPageContent> = {},
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
    store,
    benefits: [
      { title: "Start with the catalogue", copy: `Map ${products}, editions and optional extras before designing navigation.` },
      { title: "Agree who handles the work", copy: "Name the owners of product content, theme setup, apps, testing and routine updates." },
      { title: "Check the buying path", copy: "Review mobile pages, product choices, delivery messages and checkout before opening sales." },
    ],
    proofTitle: `What your ${kind} store needs to explain`,
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
      { question: "Can Guildframe help with the store?", answer: "Guildframe can help adapt campaign artwork and product content and organise the post campaign handoff. Optional Shopify planning and setup require a separate brief. Price, timing, software costs and responsibilities are agreed after reviewing the requirements." },
    ],
    related: [
      { title: "Prepare your store brief", copy: "Choose the help you need and gather the inputs for a separate store project.", href: "/done-for-you-shopify-store" },
      { title: "Use the free store checklist", copy: "Check the catalogue, content, shipping, mobile pages and complete order path.", href: "/resources/board-game-shopify-store-checklist" },
      { title: "Compare Shopify themes", copy: "Compare free and paid themes by catalogue needs and remaining setup work.", href: "/guides/best-shopify-themes-for-board-games" },
    ],
    ...overrides,
  };
}

/**
 * The board game page owns one question: what a Shopify theme has to show
 * for a board game catalogue. Theme picks live in the best themes guide,
 * page copy in the product page checklist and catalogue structure in the
 * expansions guide.
 */
export const boardGameContent = storeContent(
  "shopify-theme-for-board-games", "board game", "board-games",
  "core games, expansions and bundles", contentDates.boardGames,
  [
    { title: "An edition selector with contents beside it", copy: "The standard and deluxe boxes need their contents shown next to the choice, not in a separate tab." },
    { title: "An expansion block that names the base game", copy: "Every expansion page needs a visible line naming the game it requires, linked to that product." },
    { title: "Player count and play time near the price", copy: "These decide fit, so the theme should show them on the first screen, ideally from metafields." },
    { title: "Preorder labels the buyer cannot miss", copy: "Stock ready to ship and preorders need different wording beside the button, including in a mixed cart." },
  ],
  { src: "/images/pdp-board-game-store-responsive-v2.jpg", width: 1586, height: 992, alt: "Studio concept Shopify product page for a fictional board game on desktop and phone, with an edition choice, stock status and delivery line" },
  {
    title: "Shopify theme setup",
    highlight: "for board games.",
    answer: "A Shopify theme for board games has to show four things well: an edition selector with contents beside it, an expansion block naming the base game, player count and play time near the price, and clear preorder labels. Plan your board game store around those, then pick and set up a theme that shows them without custom code.",
    audience: "Theme requirements for a board game catalogue",
    benefits: [
      { title: "Test with your real game", copy: "Load one base game, one deluxe edition and one expansion into a theme trial before paying for it." },
      { title: "Check the four board game needs", copy: "Edition contents, the base game line, fit facts and preorder wording should all show without code." },
      { title: "Set it up once, reuse it", copy: "Store the shared facts in metafields so every new expansion page fills itself in." },
    ],
    proofTitle: "What a board game theme has to display",
    proofCopy: "A shirt has a size and a colour. A board game has editions, a base game it depends on and a contents list, so the theme needs to show more than a photo and a price. These are the four things we check first.",
    visualHeading: "Test a theme in five checks",
    visual: {
      kind: "steps",
      title: "One real game tells you more than a theme demo",
      steps: [
        { label: "Load a base game with two editions", detail: "Does the selector show what each box contains?" },
        { label: "Load one expansion", detail: "Can you show the base game line without code?" },
        { label: "Add player count and play time", detail: "Do they appear near the price on a phone?" },
        { label: "Mark one item as a preorder", detail: "Is the delivery wording visible beside the button?" },
        { label: "Open the cart with both", detail: "Can a buyer tell what ships now and what ships later?" },
      ],
      source: "Guildframe theme review method",
    },
    steps: [
      { title: "Send the catalogue", copy: "Share the campaign link, the products that stay on sale and any theme you are already trying." },
      { title: "Agree the theme work", copy: "We list which of the four board game needs the theme covers and which need a section, app or metafield." },
      { title: "Set up and review", copy: "We test the real products on a phone, then you approve the store before it opens." },
    ],
    faqs: [
      { question: "What should a Shopify theme for board games include?", answer: "An edition selector with contents beside it, a visible line naming the base game on every expansion, player count and play time near the price, and clear preorder wording beside the button. Test all four with your own products before paying for a theme." },
      { question: "Which Shopify theme is best for board games?", answer: "It depends on the catalogue size and how much you want to customise. Our best Shopify themes for board games guide compares six options, and this page lists what to test in any of them." },
      { question: "Do I need a custom theme for a board game store?", answer: "Not always. Most of the four board game needs can be met with a suitable theme, metafields and an app or two. Record the gaps from a theme trial before commissioning custom development." },
      { question: "Can Guildframe set up the theme?", answer: "We adapt campaign artwork and product content and organise the post campaign handoff. Optional Shopify theme setup is scoped under a separate brief, with price, timing and software costs agreed after reviewing the catalogue." },
    ],
    related: [
      { title: "Compare six Shopify themes", copy: "Named theme picks for board game catalogues, with what each one suits.", href: "/guides/best-shopify-themes-for-board-games" },
      { title: "Plan expansions and bundles", copy: "Decide what is a product, a variant or a bundle before setting up the theme.", href: "/guides/sell-board-game-expansions-add-ons-shopify" },
      { title: "Check each product page", copy: "Seven zones every board game product page needs, from first screen to related products.", href: "/resources/board-game-product-page-checklist" },
      { title: "Prepare your store brief", copy: "Choose the help you need and gather the inputs for a separate store project.", href: "/done-for-you-shopify-store" },
    ],
  },
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
  { src: "/images/pdp-ttrpg-store-responsive-v2.jpg", width: 1536, height: 1024, alt: "Studio concept Shopify product page for a fictional dark fantasy tabletop release on desktop and phone, with standard and collector editions" },
  {
    visualHeading: "Print, PDF or both",
    visual: {
      kind: "compare",
      title: "Each TTRPG format needs its own delivery promise",
      columns: [
        { name: "Print book", points: ["Binding and page count", "Shipping regions and timing", "Physical stock count"], verdict: "Ships like any physical product" },
        { name: "PDF", points: ["File formats included", "How the download arrives", "Licence for personal use"], verdict: "Delivered straight after checkout" },
        { name: "Print plus PDF", points: ["Both delivery routes stated", "PDF now, book later, said plainly", "One order, two arrival times"], verdict: "Say when each part arrives", highlight: true },
      ],
      source: "Guildframe store planning method",
    },
    related: [
      { title: "Prepare your store brief", copy: "Choose the help you need and gather the inputs for a separate store project.", href: "/done-for-you-shopify-store" },
      { title: "Use the free store checklist", copy: "Check the catalogue, content, shipping, mobile pages and complete order path.", href: "/resources/board-game-shopify-store-checklist" },
      { title: "Move from Kickstarter to Shopify", copy: "What moves into the store, what stays with the campaign and what you rebuild.", href: "/guides/move-from-kickstarter-to-shopify" },
    ],
  },
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
  { src: "/images/pdp-miniatures-store-responsive-v2.jpg", width: 1536, height: 1024, alt: "Studio concept Shopify product page for a fictional collector set on desktop and phone, with set options, quantity and stock status" },
  {
    visualHeading: "Physical kit or STL file",
    visual: {
      kind: "compare",
      title: "A model and its file need different product pages",
      columns: [
        { name: "Physical miniature", points: ["Scale and base size", "Assembly and painting needed", "Shipping regions and timing"], verdict: "Sold and shipped like a boxed product" },
        { name: "STL file", points: ["Supported or unsupported files", "Printer and resin notes", "Licence terms, word for word"], verdict: "Delivered as a download", highlight: true },
      ],
      source: "Guildframe store planning method",
    },
    related: [
      { title: "Prepare your store brief", copy: "Choose the help you need and gather the inputs for a separate store project.", href: "/done-for-you-shopify-store" },
      { title: "Compare Shopify and Etsy", copy: "Choose between a marketplace and your own store for miniatures.", href: "/guides/shopify-vs-etsy-for-selling-miniatures" },
      { title: "Sell miniatures abroad", copy: "Plan VAT, IOSS and customs data before taking international orders.", href: "/guides/selling-miniatures-internationally-vat-ioss" },
    ],
  },
);

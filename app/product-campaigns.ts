import type { CampaignPage } from "./components/CampaignServicePage";
import type { GuideVisualData } from "./components/GuideVisual";
import type { ServiceDelivery } from "./service-delivery";
import { beyondTabletop } from "./past-work";

/*
 * The products wing hub (positioning pick B, November 26, 2026): everyday
 * products, gadgets, watches, plus a short books section until a books page
 * exists. Linked from "Who we work with" in the menu, footer and home page.
 * Proof comes only from `beyondTabletop` in app/past-work.ts.
 */
export const productCampaignSlug = "kickstarter-product-campaign-design";

const raceBox = beyondTabletop.find(p => p.name === "RaceBox")!;

export const productCampaignPage: CampaignPage = {
  slug: productCampaignSlug,
  variant: "product",
  title: "Kickstarter Campaign Design for New Products",
  description: "Kickstarter and Indiegogo campaign design for gadgets, everyday products, watches and books: copy, creative, ads and live support. $1,800 page or $5,900.",
  headline: "Kickstarter campaign design",
  accent: "for products and books.",
  image: "launch-studio",
  heroImage: { src: `/images/work/${raceBox.image}.webp`, width: 1400, height: 788, note: "Client work: the RaceBox campaign image" },
  alt: raceBox.alt,
  lead: "Kickstarter campaign design for a product is the page copy, product creative and reward setup that show backers what you made and why it is worth backing. Umair and his team build that page for gadgets, everyday products, watches and books, on Kickstarter or Indiegogo, and can run the ads and the live campaign around it.",
  price: "The campaign page package is $1,800 for one Kickstarter or Indiegogo page using your product images. Full campaign support at $5,900 adds prelaunch, ad creative, paid ads and live campaign management. Ad spend, software and platform fees are separate, and you pay them in your own accounts.",
  introTitle: "A product page that explains the product before the price.",
  intro: "A backer needs to see what the product does, how it gets used and what arrives in each reward. We plan that page with you, write the copy from your confirmed specifications and design the graphics from your product images. You can ask for a free opening mockup first, so you see a direction before you book.",
  details: [
    "Campaign page copy written from your product features and confirmed specifications",
    "Page design and section graphics built from your product photos, renders and brand",
    "Reward tiers set up so each option shows what arrives and when",
    "Campaign creative such as renders, motion and ad variants, when it is in the scope",
    "Paid advertising with capped tests and a media budget you approve",
    "Live campaign management, from launch day checks to backer updates and FAQ answers",
  ],
  secondTitle: "Who product campaign work suits.",
  secondCopy: "This service suits first time creators with a working prototype, a smaller campaign that needs a strong page and a modest ad budget. That might be a first gadget, a watch or homeware brand, or a book with a clear readership. If you are planning a hardware launch with a goal above $200,000 and a large media budget, a commission based agency with a media team is usually the better fit, and we will tell you so. You confirm the specifications, certifications, prices and delivery dates before they go on the page.",
  guide: "how-to-design-a-kickstarter-page",
  guideTitle: "How to design a Kickstarter page",
};

const productSteps: GuideVisualData = {
  kind: "steps",
  title: "A product campaign runs in five steps, starting with a free mockup",
  steps: [
    { label: "Free opening mockup", detail: "One opening section from your product images, with no payment" },
    { label: "Agree the proposal", detail: "Sections, creative, ad scope, files and dates in writing" },
    { label: "Copy and graphics", detail: "Written from the specifications you confirm" },
    { label: "Build on the platform", detail: "Kickstarter or Indiegogo, reward tiers checked on a phone" },
    { label: "Launch and live support", detail: "Capped ads and backer updates, with full support" },
  ],
  caption: "The campaign page package is $1,800. Full campaign support at $5,900 adds prelaunch, paid ads and live campaign management.",
};

const productCompare: GuideVisualData = {
  kind: "compare",
  title: "Smaller product campaigns fit one of two fixed prices",
  columns: [
    { name: "Campaign page, $1,800", points: ["Copy from your confirmed specifications", "Graphics from your product images", "Reward tiers set up on the platform", "You run the launch and any ads"], verdict: "Suits creators with an audience or their own ads team" },
    { name: "Full campaign support, $5,900", highlight: true, points: ["Everything in the page package", "Prelaunch page and emails", "Ad creative and capped paid ads", "Live checks, updates and FAQ answers"], verdict: "Suits a first product launch with a modest ad budget" },
    { name: "A commission agency", points: ["Goals above $200,000", "Large media budgets and teams", "Fees tied to the pledges raised", "Deep hardware launch experience"], verdict: "Usually the better fit for big hardware launches" },
  ],
  caption: "Ad spend, software and platform fees are separate on both packages.",
};

export const productProofStats: GuideVisualData = {
  kind: "stats",
  title: "Ten years of campaign design, rated 5.0 across 252 reviews",
  stats: [
    { value: "10", label: "Years designing campaigns", note: "Before Guildframe" },
    { value: "252", label: "Client reviews", note: "Left by campaign clients" },
    { value: "5.0", label: "Average rating", note: "Across those 252 reviews" },
  ],
  caption: "Umair's record before Guildframe, from his clients' reviews.",
};

export const productProofIntro = "Product and book campaigns we have worked on. The totals are public Kickstarter figures and are the creators' results, not Guildframe advertising results.";

export const productCampaignDelivery: ServiceDelivery = {
  title: "From product facts to a page ready to publish.",
  intro: "Start with one free opening mockup if you want to see a direction. The proposal then names the page sections, creative, ad scope, review dates and final files.",
  steps: [
    { title: "Bring the product facts", copy: "Send product photos or renders, specifications, materials, reward contents, prices and a target date. Mark prototypes and anything still changing." },
    { title: "Build the page and creative", copy: "We write the copy, design the section graphics and set up the reward tiers. Ad creative and prelaunch work follow when they are in the scope." },
    { title: "Launch and run the campaign", copy: "With full support, we run capped ad tests, check the page on launch day and draft backer updates for your approval." },
  ],
  inputs: "Product images or renders, confirmed specifications, reward contents and prices, shipping regions, a target date and your media budget if ads are included.",
  handoff: "Your Kickstarter project, ad account and contacts stay yours. The brief lists the final files, editable sources, revision rounds and support dates.",
  proof: [],
  proofCopy: "Before Guildframe, Umair spent ten years designing campaigns, with 252 client reviews averaging 5.0. Product work includes two campaigns for RaceBox: a GPS drag meter and lap timer, then RaceBox Micro, which 1,013 backers pledged $122,811 to. It also includes Secubix, a parking surveillance system for Vespas, the TubRing drain protector, the Bacàn watch and the novel A World Without Men. Their public totals are shown below as the creators' results.",
  visualsIntro: "Every product project can start with a free mockup and ends with a page ready for you to publish. Here is the route, then the two ways to book it.",
  visuals: [productSteps, productCompare],
  faqs: [
    { question: "How much does Kickstarter campaign design cost for a product?", answer: "The campaign page package is $1,800 for one Kickstarter or Indiegogo page using your product images. Full campaign support is $5,900 and adds prelaunch, paid ads and live campaign management. Ad spend, software and platform fees are separate." },
    { question: "Do you only work on tabletop games?", answer: "No. We launch everyday products, tabletop games and books. Past work includes the RaceBox drag meter and lap timer, a parking surveillance system for Vespas, a bathtub drain protector, an Italian designed watch and a novel. Tabletop is a specialty, so some of our guides are written for game creators." },
    { question: "Do you work on Indiegogo?", answer: "Yes. We design campaign pages for Kickstarter and Indiegogo, and for Gamefound if you are launching a game. Tell us which platform you are leaning towards and we will plan the page for it." },
    { question: "Is this right for a large hardware launch?", answer: "Usually not. If your goal is above $200,000 and you plan a large ad budget, a commission based agency with a media team is a better fit. We suit smaller product campaigns that need a strong page and modest, carefully tested ads." },
    { question: "Can you work from renders before the final product exists?", answer: "Yes. We label renders and prototypes clearly on the page, so backers know what they are looking at. You confirm the specifications and any changes before launch." },
    { question: "How does the free mockup work for a product?", answer: "We design one opening campaign section from your product images and description. There is no payment and no obligation to book. It shows you a direction before you decide." },
    { question: "Do you handle manufacturing, certification or shipping?", answer: "No. Those stay with you and your suppliers. We turn the facts they confirm into clear page copy, reward graphics and backer updates." },
  ],
  guides: {
    intro: "Start with these guides for product creators, from the first quote to delivery.",
    links: [
      { slug: "how-to-launch-a-product-on-kickstarter", label: "How to launch a product on Kickstarter, A to Z" },
      { slug: "tech-gadget-kickstarter-launch-guide", label: "Tech and gadget Kickstarter launch guide" },
      { slug: "kickstarter-campaign-cost", label: "How much a Kickstarter campaign costs" },
      { slug: "kickstarter-reward-pricing-physical-products", label: "Price rewards for a physical product" },
      { slug: "kickstarter-product-photography", label: "Product photos and renders for your page" },
      { slug: "kickstarter-for-existing-products", label: "Launch version two of a product you sell" },
    ],
  },
};

/** The kinds of product the hub covers. Examples only where a real client campaign exists. */
export const productKinds = [
  { name: "Gadgets and tech", copy: "Electronics, smart devices and tools. The page explains what the product does before the specifications, and labels prototypes and renders clearly.", example: "RaceBox, a GPS drag meter and lap timer, and Secubix, a parking surveillance system for Vespas" },
  { name: "Everyday and design products", copy: "Homeware, bags, straps and the things people carry and use every day. The page shows the product in use, the materials and what arrives in each reward.", example: "TubRing, a bathtub drain protector" },
  { name: "Watches and accessories", copy: "Watches, jewelry and fashion pieces, where finish, size and options decide the pledge. Reward graphics compare colors, sizes and editions side by side.", example: "Bacàn, an Italian designed watch" },
] as const;

const book = beyondTabletop[2];

/** Short books section on the product hub, until a second book client justifies its own page. */
export const booksSection = {
  title: "Books and creative projects",
  copy: [
    "Novels, comics, art books and other creative projects. We design the campaign page, set up the project and rewards on the platform, and support the launch from the first day to the last update.",
    `We worked on the campaign for ${book.name}, ${book.line.charAt(0).toLowerCase()}${book.line.slice(1, -1)}. ${book.result} on Kickstarter, which is the creator's result.`,
  ],
  book,
};

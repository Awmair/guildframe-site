import type { CampaignPage } from "./components/CampaignServicePage";
import type { GuideVisualData } from "./components/GuideVisual";
import type { ServiceDelivery } from "./service-delivery";
import { beyondTabletop } from "./past-work";

/*
 * The one service page for Kickstarter campaigns outside tabletop (option B,
 * approved November 25, 2026). Guildframe stays tabletop first: titles, hubs and
 * guides stay tabletop, and this page is linked lightly from /work, /about
 * and the footer. Proof comes only from `beyondTabletop` in app/past-work.ts.
 */
export const productCampaignSlug = "kickstarter-product-campaign-design";

const secubix = beyondTabletop[0];

export const productCampaignPage: CampaignPage = {
  slug: productCampaignSlug,
  variant: "product",
  title: "Kickstarter Campaign Design for Product Launches",
  description: "Kickstarter campaign design for gadgets, design and lifestyle products and books: copy, creative, ads and live support. $1,800 page or $5,900 full support.",
  headline: "Kickstarter campaign design",
  accent: "for product launches.",
  image: "launch-studio",
  heroImage: { src: `/images/work/${secubix.image}.webp`, width: 1400, height: 788, note: "Client work: the Secubix campaign image" },
  alt: secubix.alt,
  lead: "Kickstarter campaign design for a product is the page copy, product creative and reward setup that show backers what you made and why it is worth backing. Guildframe builds that page for tech gadgets, design and lifestyle products and books, and can run the ads and the live campaign around it.",
  price: "The campaign page package is $1,800 for one Kickstarter page using your product images. Full campaign support at $5,900 adds prelaunch, ad creative, paid ads and live campaign management. Ad spend, software and platform fees are separate, and you pay them in your own accounts.",
  introTitle: "A product page that explains the product before the price.",
  intro: "Most of our work is tabletop, and the same skills carry over to products. A backer needs to see what the product does, how it gets used and what arrives in each reward. We plan that page with you, write the copy from your confirmed specifications and design the graphics from your product images. You can ask for a free opening mockup first, so you see a direction before you book.",
  details: [
    "Campaign page copy written from your product features and confirmed specifications",
    "Page design and section graphics built from your product photos, renders and brand",
    "Reward tiers set up so each option shows what arrives and when",
    "Campaign creative such as renders, motion and ad variants, when it is in the scope",
    "Paid advertising with capped tests and a media budget you approve",
    "Live campaign management, from launch day checks to backer updates and FAQ answers",
  ],
  secondTitle: "Who product campaign work suits.",
  secondCopy: "This service suits smaller product campaigns that need a strong page and a modest ad budget. That might be a first gadget, a watch or homeware brand, or a book with a clear readership. If you are planning a hardware launch with a goal above $200,000 and a large media budget, a commission based agency with a media team is usually the better fit, and we will tell you so. You confirm the specifications, certifications, prices and delivery dates before they go on the page.",
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
    { label: "Build on Kickstarter", detail: "Reward tiers set up and checked on a phone" },
    { label: "Launch and live support", detail: "Capped ads and backer updates, with full support" },
  ],
  caption: "The campaign page package is $1,800. Full campaign support at $5,900 adds prelaunch, paid ads and live campaign management.",
};

const productCompare: GuideVisualData = {
  kind: "compare",
  title: "Smaller product campaigns fit one of two fixed prices",
  columns: [
    { name: "Campaign page, $1,800", points: ["Copy from your confirmed specifications", "Graphics from your product images", "Reward tiers set up on Kickstarter", "You run the launch and any ads"], verdict: "Suits creators with an audience or their own ads team" },
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

export const productProofIntro = "Client campaigns outside tabletop. The totals are public Kickstarter figures and are the creators' results, not Guildframe advertising results.";

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
  proofCopy: "Before Guildframe, Umair spent ten years designing campaigns, with 252 client reviews averaging 5.0. Work outside tabletop includes Secubix, a parking surveillance system for Vespas, the Bacàn watch and the novel A World Without Men. Their public totals are shown below as the creators' results.",
  visualsIntro: "Every product project can start with a free mockup and ends with a page ready for you to publish. Here is the route, then the two ways to book it.",
  visuals: [productSteps, productCompare],
  faqs: [
    { question: "How much does Kickstarter campaign design cost for a product?", answer: "The campaign page package is $1,800 for one Kickstarter page using your product images. Full campaign support is $5,900 and adds prelaunch, paid ads and live campaign management. Ad spend, software and platform fees are separate." },
    { question: "Do you only work on tabletop games?", answer: "Tabletop is our main focus, and our guides are written for game creators. We also design campaigns for tech gadgets, design and lifestyle products and books. Past work includes a parking surveillance system for Vespas, an Italian designed watch and a novel." },
    { question: "Is this right for a large hardware launch?", answer: "Usually not. If your goal is above $200,000 and you plan a large ad budget, a commission based agency with a media team is a better fit. We suit smaller product campaigns that need a strong page and modest, carefully tested ads." },
    { question: "Can you work from renders before the final product exists?", answer: "Yes. We label renders and prototypes clearly on the page, so backers know what they are looking at. You confirm the specifications and any changes before launch." },
    { question: "How does the free mockup work for a product?", answer: "We design one opening campaign section from your product images and description. There is no payment and no obligation to book. It shows you a direction before you decide." },
    { question: "Do you handle manufacturing, certification or shipping?", answer: "No. Those stay with you and your suppliers. We turn the facts they confirm into clear page copy, reward graphics and backer updates." },
  ],
  guides: {
    intro: "These guides are written for tabletop creators, but the page, image and video advice applies to any product on Kickstarter.",
    links: [
      { slug: "how-to-design-a-kickstarter-page", label: "How to design a Kickstarter page" },
      { slug: "kickstarter-campaign-video-planning", label: "Plan the main campaign video" },
      { slug: "kickstarter-campaign-graphics-mobile-readability", label: "Readable campaign graphics on a phone" },
      { slug: "kickstarter-image-sizes", label: "Kickstarter image sizes" },
      { slug: "kickstarter-fees", label: "Kickstarter fees explained" },
    ],
  },
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Renders an ISO content date as the visible review date. Every page must print
 * the same value it publishes in structured data and the sitemap.
 */
export function formatContentDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${monthNames[month - 1]} ${day}, ${year}`;
}

export const contentDates = {
  growthReview: "2026-11-06",
  campaignCreative: "2026-11-06",
  campaignPageStudy: "2026-11-06",
  launchKit: "2026-10-29",
  privacy: "2026-11-05",
  terms: "2026-10-29",
  home: "2026-10-29",
  work: "2026-11-06",
  workPublished: "2026-10-17",
  campaignServices: "2026-10-17",
  campaignDesign: "2026-11-05",
  kickstarterAdvertising: "2026-11-05",
  marketingPlan: "2026-11-05",
  agencySelection: "2026-11-05",
  launchGuideReview: "2026-10-28",
  buy: "2026-10-03",
  doneForYouShopifyStore: "2026-11-05",
  boardGames: "2026-11-05",
  kickstarter: "2026-11-05",
  ttrpg: "2026-11-05",
  miniatures: "2026-11-05",
  guides: "2026-11-06",
  whatHappensAfterKickstarter: "2026-10-28",
  moveFromKickstarter: "2026-10-28",
  bestBoardGameThemes: "2026-11-05",
  shopifyDeveloperVsDiyTheme: "2026-11-05",
  latePledgesVsShopify: "2026-10-28",
  backerkitVsShopifyVsGamefound: "2026-10-28",
  kickstarterToShopifyTimeline: "2026-11-05",
  boardGamePreorders: "2026-11-06",
  expansionsAndAddons: "2026-10-28",
  internationalVatIoss: "2026-10-28",
  boardGameWebsiteCost: "2026-10-28",
  shopifyVsEtsyMiniatures: "2026-10-28",
  about: "2026-10-03",
  editorialPolicy: "2026-10-03",
  authorGuildframe: "2026-10-28",
  resources: "2026-11-06",
  storeChecklist: "2026-09-30",
  migrationChecklist: "2026-09-30",
  platformMatrix: "2026-09-30",
  productPageChecklist: "2026-09-30",
  kickstarterTabletopBenchmark: "2026-10-17",
  buildWithAi: "2026-10-28",
  metafieldSchema: "2026-09-30",
} as const;

export function campaignModifiedDate(slug: string) {
  if (slug === "campaign-design") return contentDates.campaignDesign;
  if (slug === "kickstarter-advertising") return contentDates.kickstarterAdvertising;
  if (slug === "gamefound-launch-services") return contentDates.growthReview;
  return contentDates.campaignServices;
}

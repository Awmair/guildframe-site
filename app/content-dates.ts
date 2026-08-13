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
  home: "2026-08-09",
  buy: "2026-08-09",
  doneForYouShopifyStore: "2026-08-09",
  boardGames: "2026-08-09",
  kickstarter: "2026-07-23",
  ttrpg: "2026-08-09",
  miniatures: "2026-08-09",
  guides: "2026-08-09",
  whatHappensAfterKickstarter: "2026-08-09",
  moveFromKickstarter: "2026-08-09",
  bestBoardGameThemes: "2026-08-09",
  shopifyDeveloperVsDiyTheme: "2026-08-09",
  latePledgesVsShopify: "2026-07-18",
  backerkitVsShopifyVsGamefound: "2026-07-18",
  kickstarterToShopifyTimeline: "2026-07-21",
  boardGamePreorders: "2026-07-17",
  expansionsAndAddons: "2026-07-17",
  internationalVatIoss: "2026-07-23",
  boardGameWebsiteCost: "2026-08-09",
  shopifyVsEtsyMiniatures: "2026-07-23",
  about: "2026-08-09",
  editorialPolicy: "2026-07-21",
  authorGuildframe: "2026-07-18",
  resources: "2026-08-09",
  storeChecklist: "2026-07-17",
  migrationChecklist: "2026-07-17",
  platformMatrix: "2026-07-18",
  productPageChecklist: "2026-07-17",
  kickstarterTabletopBenchmark: "2026-07-17",
  buildWithAi: "2026-08-09",
  metafieldSchema: "2026-08-09",
} as const;

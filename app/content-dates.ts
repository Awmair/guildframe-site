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
  home: "2026-09-30",
  buy: "2026-09-30",
  doneForYouShopifyStore: "2026-09-30",
  boardGames: "2026-09-30",
  kickstarter: "2026-09-30",
  ttrpg: "2026-09-30",
  miniatures: "2026-09-30",
  guides: "2026-09-30",
  whatHappensAfterKickstarter: "2026-09-30",
  moveFromKickstarter: "2026-09-30",
  bestBoardGameThemes: "2026-09-30",
  shopifyDeveloperVsDiyTheme: "2026-09-30",
  latePledgesVsShopify: "2026-09-30",
  backerkitVsShopifyVsGamefound: "2026-09-30",
  kickstarterToShopifyTimeline: "2026-09-30",
  boardGamePreorders: "2026-07-17",
  expansionsAndAddons: "2026-09-30",
  internationalVatIoss: "2026-07-23",
  boardGameWebsiteCost: "2026-09-30",
  shopifyVsEtsyMiniatures: "2026-09-30",
  about: "2026-09-30",
  editorialPolicy: "2026-09-30",
  authorGuildframe: "2026-09-30",
  resources: "2026-08-09",
  storeChecklist: "2026-07-17",
  migrationChecklist: "2026-07-17",
  platformMatrix: "2026-09-30",
  productPageChecklist: "2026-07-17",
  kickstarterTabletopBenchmark: "2026-09-30",
  buildWithAi: "2026-09-30",
  metafieldSchema: "2026-09-30",
} as const;

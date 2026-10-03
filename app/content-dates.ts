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
  home: "2026-10-03",
  buy: "2026-10-03",
  doneForYouShopifyStore: "2026-10-03",
  boardGames: "2026-10-03",
  kickstarter: "2026-10-03",
  ttrpg: "2026-10-03",
  miniatures: "2026-10-03",
  guides: "2026-10-03",
  whatHappensAfterKickstarter: "2026-09-30",
  moveFromKickstarter: "2026-09-30",
  bestBoardGameThemes: "2026-09-30",
  shopifyDeveloperVsDiyTheme: "2026-09-30",
  latePledgesVsShopify: "2026-09-30",
  backerkitVsShopifyVsGamefound: "2026-09-30",
  kickstarterToShopifyTimeline: "2026-09-30",
  boardGamePreorders: "2026-09-30",
  expansionsAndAddons: "2026-09-30",
  internationalVatIoss: "2026-09-30",
  boardGameWebsiteCost: "2026-09-30",
  shopifyVsEtsyMiniatures: "2026-09-30",
  about: "2026-10-03",
  editorialPolicy: "2026-10-03",
  authorGuildframe: "2026-10-03",
  resources: "2026-10-03",
  storeChecklist: "2026-09-30",
  migrationChecklist: "2026-09-30",
  platformMatrix: "2026-09-30",
  productPageChecklist: "2026-09-30",
  kickstarterTabletopBenchmark: "2026-09-30",
  buildWithAi: "2026-09-30",
  metafieldSchema: "2026-09-30",
} as const;

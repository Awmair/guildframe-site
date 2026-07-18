import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site-config";
import { contentDates } from "./content-dates";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", modified: contentDates.home },
    { path: "/buy", modified: contentDates.buy },
    { path: "/shopify-theme-for-board-games", modified: contentDates.boardGames },
    { path: "/kickstarter-to-shopify", modified: contentDates.kickstarter },
    { path: "/shopify-theme-for-ttrpg", modified: contentDates.ttrpg },
    { path: "/shopify-theme-for-miniatures", modified: contentDates.miniatures },
    { path: "/guides", modified: contentDates.guides },
    { path: "/guides/what-happens-after-kickstarter-is-funded", modified: contentDates.whatHappensAfterKickstarter },
    { path: "/guides/move-from-kickstarter-to-shopify", modified: contentDates.moveFromKickstarter },
    { path: "/guides/best-shopify-themes-for-board-games", modified: contentDates.bestBoardGameThemes },
    { path: "/guides/kickstarter-late-pledges-vs-shopify", modified: contentDates.latePledgesVsShopify },
    { path: "/guides/backerkit-vs-shopify-vs-gamefound", modified: contentDates.backerkitVsShopifyVsGamefound },
    { path: "/guides/kickstarter-to-shopify-launch-timeline", modified: contentDates.kickstarterToShopifyTimeline },
    { path: "/guides/sell-board-game-preorders-on-shopify", modified: contentDates.boardGamePreorders },
    { path: "/guides/sell-board-game-expansions-add-ons-shopify", modified: contentDates.expansionsAndAddons },
    { path: "/about", modified: contentDates.about },
    { path: "/editorial-policy", modified: contentDates.editorialPolicy },
    { path: "/authors/guildframe", modified: contentDates.authorGuildframe },
    { path: "/resources", modified: contentDates.resources },
    { path: "/resources/board-game-shopify-store-checklist", modified: contentDates.storeChecklist },
    { path: "/resources/kickstarter-to-shopify-migration-checklist", modified: contentDates.migrationChecklist },
    { path: "/resources/backerkit-vs-shopify-vs-gamefound-comparison", modified: contentDates.platformMatrix },
    { path: "/resources/board-game-product-page-checklist", modified: contentDates.productPageChecklist },
    { path: "/resources/kickstarter-tabletop-games-benchmark", modified: contentDates.kickstarterTabletopBenchmark },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(`${route.modified}T00:00:00.000Z`),
  }));
}

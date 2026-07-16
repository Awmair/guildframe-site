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
    { path: "/guides/move-from-kickstarter-to-shopify", modified: contentDates.moveFromKickstarter },
    { path: "/guides/best-shopify-themes-for-board-games", modified: contentDates.bestBoardGameThemes },
    { path: "/guides/kickstarter-late-pledges-vs-shopify", modified: contentDates.latePledgesVsShopify },
    { path: "/guides/backerkit-vs-shopify-vs-gamefound", modified: contentDates.backerkitVsShopifyVsGamefound },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(`${route.modified}T00:00:00.000Z`),
  }));
}

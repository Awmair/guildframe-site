import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, frequency: "weekly" as const },
    { path: "/buy", priority: 0.9, frequency: "monthly" as const },
    { path: "/shopify-theme-for-board-games", priority: 0.9, frequency: "monthly" as const },
    { path: "/kickstarter-to-shopify", priority: 0.9, frequency: "monthly" as const },
    { path: "/shopify-theme-for-ttrpg", priority: 0.8, frequency: "monthly" as const },
    { path: "/shopify-theme-for-miniatures", priority: 0.8, frequency: "monthly" as const },
    { path: "/guides", priority: 0.8, frequency: "weekly" as const },
    { path: "/guides/move-from-kickstarter-to-shopify", priority: 0.8, frequency: "monthly" as const },
    { path: "/guides/best-shopify-themes-for-board-games", priority: 0.8, frequency: "monthly" as const },
    { path: "/guides/kickstarter-late-pledges-vs-shopify", priority: 0.7, frequency: "monthly" as const },
    { path: "/guides/backerkit-vs-shopify-vs-gamefound", priority: 0.7, frequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-07-16"),
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guildframe",
    short_name: "Guildframe",
    description:
      "A premium Shopify theme and done-for-you store service for tabletop game creators.",
    start_url: "/",
    display: "standalone",
    background_color: "#EEE8DC",
    theme_color: "#2450DC",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guildframe",
    short_name: "Guildframe",
    description:
      "Shopify design and development for tabletop creators, plus a premium DIY theme purpose built for tabletop games.",
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

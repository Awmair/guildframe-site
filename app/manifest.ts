import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guildframe",
    short_name: "Guildframe",
    description:
      "Kickstarter launches for first time creators: products, games and books.",
    start_url: "/",
    display: "standalone",
    background_color: "#133033",
    theme_color: "#133033",
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

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guildframe",
    short_name: "Guildframe",
    description:
      "Kickstarter and Gamefound campaign design for tabletop creators.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF5E7",
    theme_color: "#153E40",
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

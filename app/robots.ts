import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site-config";
import indexNow from "../indexnow.config.json";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const publicTextFiles = ["/", "/llms.txt", `/${indexNow.key}.txt`];
  return {
    rules: [
      // The static export writes a React payload file beside every route
      // (for example /about.txt). Those files duplicate page text, are not
      // landing pages, and only exist for client side navigation.
      { userAgent: "*", allow: publicTextFiles, disallow: "/*.txt$" },
      { userAgent: ["Googlebot", "Bingbot", "PerplexityBot", "Claude-SearchBot"], allow: publicTextFiles, disallow: "/*.txt$" },
      { userAgent: "OAI-SearchBot", allow: publicTextFiles, disallow: "/*.txt$" },
      { userAgent: "ChatGPT-User", allow: publicTextFiles, disallow: "/*.txt$" },
      {
        userAgent: [
          "Amazonbot",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "ClaudeBot",
          "CloudflareBrowserRenderingCrawler",
          "Google-Extended",
          "GPTBot",
          "meta-externalagent",
        ],
        disallow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}

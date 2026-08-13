import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // The static export writes a React payload file beside every route
      // (for example /about.txt). Those files duplicate page text, are not
      // landing pages, and only exist for client side navigation.
      { userAgent: "*", allow: ["/", "/llms.txt"], disallow: "/*.txt$" },
      { userAgent: "OAI-SearchBot", allow: ["/", "/llms.txt"], disallow: "/*.txt$" },
      { userAgent: "ChatGPT-User", allow: ["/", "/llms.txt"], disallow: "/*.txt$" },
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

import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
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

import type { Metadata } from "next";

export const siteConfig = {
  name: "Guildframe",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  purchasePath: "/buy",
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || null,
  analyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || null,
  socialImage: "/og-guildframe-launch-v2.jpg",
  price: "$419",
  description:
    "A Shopify theme and done-for-you setup service for tabletop creators moving from a funded Kickstarter campaign to a permanent online store.",
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  kind = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  kind?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const sharedOpenGraph = {
    title: `${title} | Guildframe`,
    description,
    siteName: "Guildframe",
    url: path,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Guildframe Shopify theme for tabletop game creators",
      },
    ],
  };

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Guildframe Editorial Team", url: "/authors/guildframe" }],
    creator: "Guildframe",
    publisher: "Guildframe",
    alternates: { canonical: path },
    openGraph:
      kind === "article"
        ? {
            ...sharedOpenGraph,
            type: "article",
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: ["Guildframe Editorial Team"],
          }
        : { ...sharedOpenGraph, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Guildframe`,
      description,
      images: [siteConfig.socialImage],
    },
  };
}

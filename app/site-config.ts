import type { Metadata } from "next";

export const siteConfig = {
  name: "Guildframe",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  purchasePath: "/buy",
  servicePath: "/done-for-you-shopify-store",
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || null,
  serviceInquiryUrl:
    process.env.NEXT_PUBLIC_SERVICE_INQUIRY_URL?.trim() ||
    "mailto:hello@guildframe.com?subject=Done-for-you%20Shopify%20store",
  analyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || null,
  socialImage: "/og-guildframe-offers-v3.jpg",
  price: "$419",
  servicePrice: "$1,399",
  description:
    "A premium Shopify theme and flat-fee done-for-you store service for tabletop creators moving from a funded campaign to a permanent online store.",
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

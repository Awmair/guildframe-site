import type { Metadata } from "next";

export const siteConfig = {
  name: "Guildframe",
  contactEmail: "umair@guildframe.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  purchasePath: "/buy",
  servicePath: "/done-for-you-shopify-store",
  checkoutUrl:
    process.env.NEXT_PUBLIC_THEME_CHECKOUT_ENABLED === "true"
      ? process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || null
      : null,
  serviceInquiryUrl:
    process.env.NEXT_PUBLIC_SERVICE_INQUIRY_URL?.trim() ||
    "/#start-project",
  formEndpoint: "https://formspree.io/f/mrewkezq",
  contactInquiryUrl:
    "/#start-project",
  analyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  clarityProjectId:
    process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || "xp0rrg52qu",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || null,
  socialImage: "/og-guildframe-offers-v6.jpg",
  price: "$349",
  servicePrice: "$2,500",
  description:
    "Shopify design and development for tabletop creators, plus a premium DIY theme purpose built for board games, TTRPGs, card games and miniatures.",
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
        alt: "Guildframe Shopify storefront design and theme for tabletop game creators",
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

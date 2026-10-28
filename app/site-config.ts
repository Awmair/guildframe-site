import type { Metadata } from "next";

export const siteConfig = {
  name: "Guildframe",
  contactEmail: "umair@guildframe.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  purchasePath: "/kickstarter-launch-services",
  servicePath: "/kickstarter-launch-services",
  serviceInquiryUrl:
    process.env.NEXT_PUBLIC_SERVICE_INQUIRY_URL?.trim() ||
    "/#start-project",
  formEndpoint:
    process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ||
    "https://formspree.io/f/mrewkezq",
  contactInquiryUrl:
    "/#start-project",
  analyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  clarityProjectId:
    process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || "xp0rrg52qu",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || null,
  socialImage: "/og-guildframe-launch.jpg",
  description:
    "Kickstarter and Gamefound launch services for tabletop creators. Campaign planning, prelaunch, design, paid advertising and live campaign support.",
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

export function pageMetadata({
  title,
  description,
  path,
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
        alt: "Guildframe tabletop crowdfunding launches for games, RPGs, miniatures and accessories",
      },
    ],
  };

  return {
    title,
    description,
    authors: [{ name: "Umair", url: "/authors/guildframe" }],
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
            authors: [absoluteUrl("/authors/guildframe")],
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

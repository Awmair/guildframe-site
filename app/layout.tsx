import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import { Analytics } from "./components/Analytics";
import { absoluteUrl, siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shopify Theme and Store Design for Tabletop Creators | Guildframe",
    template: "%s | Guildframe",
  },
  description:
    "Buy Guildframe's premium tabletop Shopify theme for $419, or get a complete done-for-you Shopify storefront for a flat $1,399.",
  keywords: [
    "Kickstarter to Shopify",
    "Kickstarter Shopify theme",
    "board game Shopify theme",
    "tabletop Shopify theme",
    "card game Shopify theme",
    "TTRPG Shopify theme",
    "Shopify theme for game publishers",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Shopify Theme and Store Design for Tabletop Creators | Guildframe",
    description:
      "Choose a $419 premium tabletop Shopify theme or a $1,399 done-for-you store designed and developed from zero to publish.",
    type: "website",
    siteName: "Guildframe",
    url: "/",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Guildframe premium Shopify theme and done-for-you store service for tabletop creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Theme and Store Design for Tabletop Creators | Guildframe",
    description:
      "A plug-and-play Shopify system built for funded tabletop creators.",
    images: [siteConfig.socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#F2F1ED",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "OnlineStore",
                "@id": absoluteUrl("/#organization"),
                name: "Guildframe",
                url: absoluteUrl("/"),
                logo: absoluteUrl("/brand/guildframe-logo.svg"),
                description: siteConfig.description,
                foundingDate: "2026",
                subjectOf: [
                  { "@id": absoluteUrl("/about") },
                  { "@id": absoluteUrl("/editorial-policy") },
                ],
                knowsAbout: [
                  "Shopify themes",
                  "Tabletop ecommerce",
                  "Kickstarter to Shopify migration",
                  "Board game stores",
                  "TTRPG stores",
                  "Miniatures stores",
                ],
              },
              {
                "@type": "WebSite",
                "@id": absoluteUrl("/#website"),
                name: "Guildframe",
                url: absoluteUrl("/"),
                publisher: { "@id": absoluteUrl("/#organization") },
                inLanguage: "en",
              },
            ],
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

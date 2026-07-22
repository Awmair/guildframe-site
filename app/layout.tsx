import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import { Analytics } from "./components/Analytics";
import { absoluteUrl, siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shopify Stores for Tabletop Games | Guildframe",
    template: "%s | Guildframe",
  },
  description:
    "Guildframe designs and develops complete Shopify stores for tabletop creators. Get a full store for $2,500, or build it yourself with the $349 Guildframe theme.",
  keywords: [
    "Shopify developer for tabletop games",
    "board game Shopify developer",
    "tabletop ecommerce developer",
    "Shopify website design for game studios",
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
    title: "Shopify Stores Built for Tabletop Games | Guildframe",
    description:
      "Get a complete tabletop Shopify store designed and developed for $2,500, or build it yourself with the $349 Guildframe theme.",
    type: "website",
    siteName: "Guildframe",
    url: "/",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Guildframe Shopify design and development for tabletop creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Stores Built for Tabletop Games | Guildframe",
    description:
      "Complete Shopify design and development for tabletop creators, with a premium DIY theme for teams that want to build it themselves.",
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
                "@type": "Organization",
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
                  "Shopify design",
                  "Shopify development",
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

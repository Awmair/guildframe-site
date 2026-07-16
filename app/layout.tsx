import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import { Analytics } from "./components/Analytics";
import { absoluteUrl, siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shopify Theme for Tabletop Game Creators | Guildframe",
    template: "%s | Guildframe",
  },
  description:
    "Guildframe is a Shopify theme for tabletop game creators moving from a funded Kickstarter campaign to a permanent online store.",
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
    title: "Shopify Theme for Tabletop Game Creators | Guildframe",
    description:
      "Move from a funded tabletop Kickstarter to a permanent Shopify store with a purpose-built theme and free custom setup.",
    type: "website",
    siteName: "Guildframe",
    url: "/",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Guildframe: from funded campaign to live Shopify store in minutes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Theme for Tabletop Game Creators | Guildframe",
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
                "@type": "Organization",
                "@id": absoluteUrl("/#organization"),
                name: "Guildframe",
                url: absoluteUrl("/"),
                logo: absoluteUrl("/brand/guildframe-logo.svg"),
                description: siteConfig.description,
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

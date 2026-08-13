import { absoluteUrl, siteConfig } from "./site-config";

export const guildframeOffer = {
  name: "Guildframe Build Guide",
  price: "79",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  category: "Digital build guide for tabletop Shopify stores",
  description:
    "A guide for tabletop creators who want to build their own Shopify store using an AI tool, with the exact prompts to copy, what to fix when the AI gets something wrong, and a finished example store to copy from.",
} as const;

export function guildframeProductData(image = siteConfig.socialImage) {
  return {
    "@type": "Product",
    "@id": absoluteUrl("/buy#product"),
    name: guildframeOffer.name,
    description: guildframeOffer.description,
    category: guildframeOffer.category,
    image: absoluteUrl(image),
    brand: { "@type": "Brand", name: siteConfig.name },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Platform",
        value: "Shopify",
      },
      {
        "@type": "PropertyValue",
        name: "Format",
        value: "Downloadable guide with a prompt file and a finished example store",
      },
      {
        "@type": "PropertyValue",
        name: "AI tools covered",
        value: "Claude, Cursor and Codex",
      },
      {
        "@type": "PropertyValue",
        name: "Catalogs covered",
        value: "Board games, card games, TTRPGs, miniatures and terrain",
      },
    ],
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/buy"),
      priceCurrency: guildframeOffer.priceCurrency,
      price: guildframeOffer.price,
      availability: guildframeOffer.availability,
      seller: { "@id": absoluteUrl("/#organization") },
    },
  };
}

export function guildframeServiceData(image = siteConfig.socialImage) {
  return {
    "@type": "Service",
    "@id": absoluteUrl("/done-for-you-shopify-store#service"),
    name: "Guildframe Shopify Store Design and Development",
    serviceType: "Shopify store design and development for tabletop brands",
    description:
      "Complete Shopify store design and development for tabletop creators and studios with up to 50 product SKUs, from an empty store to a reviewed build ready to publish.",
    image: absoluteUrl(image),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/done-for-you-shopify-store"),
      priceCurrency: "USD",
      price: "2500",
      availability: "https://schema.org/InStock",
      seller: { "@id": absoluteUrl("/#organization") },
    },
  };
}

export function guildframeCarePlanData() {
  return {
    "@type": "Service",
    "@id": absoluteUrl("/#care-plan"),
    name: "Guildframe Care Plan",
    serviceType: "Ongoing Shopify store support for tabletop studios",
    description:
      "Monthly Shopify theme and section updates, small store adjustments and one campaign or product launch page each month after a Guildframe store build.",
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/#pricing"),
      priceCurrency: "USD",
      price: "99",
      availability: "https://schema.org/InStock",
      seller: { "@id": absoluteUrl("/#organization") },
    },
  };
}

import { absoluteUrl, siteConfig } from "./site-config";

export const guildframeOffer = {
  name: "Guildframe",
  price: "419",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  category: "Shopify theme for tabletop game creators",
  description: siteConfig.description,
} as const;

export function guildframeProductData(image = siteConfig.socialImage) {
  return {
    "@type": "Product",
    "@id": absoluteUrl("/buy#product"),
    name: guildframeOffer.name,
    description: guildframeOffer.description,
    category: guildframeOffer.category,
    image: absoluteUrl(image),
    brand: { "@type": "Brand", name: guildframeOffer.name },
    audience: {
      "@type": "Audience",
      audienceType:
        "Board game, card game, TTRPG, miniatures and tabletop creators",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Platform",
        value: "Shopify",
      },
      {
        "@type": "PropertyValue",
        name: "Storefront styles",
        value: "Four complete tabletop styles",
      },
      {
        "@type": "PropertyValue",
        name: "Responsive layouts",
        value: "Desktop, tablet and mobile",
      },
      {
        "@type": "PropertyValue",
        name: "Custom setup",
        value: "Included during early release",
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

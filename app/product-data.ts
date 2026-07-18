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
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Platform",
        value: "Shopify",
      },
      {
        "@type": "PropertyValue",
        name: "Storefront presets",
        value: "Rune Single, Rune Studio, Saga Single and Saga Studio",
      },
      {
        "@type": "PropertyValue",
        name: "Responsive layouts",
        value: "Desktop, tablet and mobile",
      },
      {
        "@type": "PropertyValue",
        name: "Setup model",
        value: "Self-serve theme with Shopify editor controls",
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
    name: "Guildframe Done-for-You Shopify Store",
    serviceType: "Shopify store design and development",
    description:
      "Flat-fee Shopify store design and development for tabletop creators, from an empty store to a reviewed storefront ready to publish.",
    image: absoluteUrl(image),
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/done-for-you-shopify-store"),
      priceCurrency: "USD",
      price: "1399",
      availability: "https://schema.org/InStock",
      seller: { "@id": absoluteUrl("/#organization") },
    },
  };
}

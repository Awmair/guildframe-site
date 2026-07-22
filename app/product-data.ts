import { absoluteUrl, siteConfig } from "./site-config";

export const guildframeOffer = {
  name: "Guildframe",
  price: "349",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  category: "Shopify theme for tabletop game creators",
  description:
    "A premium Shopify theme purpose built for board games, card games, TTRPGs, miniatures and tabletop studios, with four complete storefront presets.",
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
        value: "Self serve theme with Shopify editor controls",
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

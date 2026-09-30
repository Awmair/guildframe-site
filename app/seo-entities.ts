import { absoluteUrl, siteConfig } from "./site-config";

export const authorId = () => absoluteUrl("/authors/guildframe#umair");
export const campaignService = () => ({
  "@type": "Service",
  "@id": absoluteUrl("/campaign-design#service"),
  name: "Guildframe Kickstarter and Gamefound page design",
  serviceType: "Crowdfunding campaign page copy and graphics",
  description: "Page structure, campaign copy, section graphics and reward comparisons using the creator’s artwork.",
  provider: { "@id": absoluteUrl("/#organization") },
  url: absoluteUrl("/campaign-design"),
  offers: {
    "@type": "Offer",
    price: "975",
    priceCurrency: "USD",
    url: absoluteUrl("/campaign-design"),
  },
});

export const authorEntity = () => ({
  "@type": "Person",
  "@id": authorId(),
  name: "Umair",
  url: absoluteUrl("/authors/guildframe"),
  jobTitle: "Campaign designer",
  worksFor: { "@id": absoluteUrl("/#organization") },
  description: "Umair runs Guildframe and designs Kickstarter and Gamefound pages for tabletop projects.",
  email: siteConfig.contactEmail,
  knowsAbout: ["Kickstarter page design", "Gamefound page design", "Campaign copy", "Reward graphics", "Tabletop games"],
});

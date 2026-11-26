import { absoluteUrl, siteConfig } from "./site-config";

export const authorId = () => absoluteUrl("/authors/guildframe#umair");
export const campaignService = (includePrice = false) => ({
  "@type": "Service",
  "@id": absoluteUrl("/campaign-design#service"),
  name: "Guildframe Kickstarter and Gamefound page design",
  serviceType: "Crowdfunding campaign page copy and graphics",
  description: "Page structure, campaign copy, section graphics and reward comparisons using the creator’s artwork or product images.",
  provider: { "@id": absoluteUrl("/#organization") },
  url: absoluteUrl("/campaign-design"),
  ...(includePrice ? { offers: {
    "@type": "Offer",
    price: "1800",
    priceCurrency: "USD",
    url: absoluteUrl("/campaign-design#pricing"),
  } } : {}),
});

export const launchService = (slug = "kickstarter-launch-services", name = "Kickstarter, Gamefound and Indiegogo launch services", description = siteConfig.description) => ({
  "@type": "Service", "@id": absoluteUrl(`/${slug}#service`), name, description,
  serviceType: "Crowdfunding launch services", url: absoluteUrl(`/${slug}`),
  provider: { "@id": absoluteUrl("/#organization") },
});

export const authorEntity = () => ({
  "@type": "Person",
  "@id": authorId(),
  name: "Umair",
  url: absoluteUrl("/authors/guildframe"),
  jobTitle: "Founder, campaign designer and paid advertising specialist",
  worksFor: { "@id": absoluteUrl("/#organization") },
  description: "Umair runs Guildframe, designs crowdfunding campaigns for products, tabletop games and books, and manages paid advertising.",
  email: siteConfig.contactEmail,
  knowsAbout: ["Kickstarter launches", "Gamefound campaigns", "Paid advertising", "Prelaunch marketing", "Campaign copy", "Reward graphics", "Tabletop games", "Product crowdfunding"],
});

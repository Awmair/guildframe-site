/** Guildframe's two packages. One source for every price and scope on the site. */
export type PackageGroup = { title: string; items: readonly string[] };
export type LaunchPackage = {
  slug: "creator-launch" | "founder-launch";
  name: string;
  audience: string;
  price: number;
  priceText: string;
  summary: string;
  groups: readonly PackageGroup[];
};

export const planningGroup: PackageGroup = {
  title: "Planning and strategy",
  items: [
    "Kickoff call and project brief",
    "Audience, positioning and the one line pitch",
    "Funding goal, reward tiers and pricing plan",
    "Launch timeline with the dates agreed",
    "A written launch strategy we both sign off before design starts",
  ],
};

export const pageGroup: PackageGroup = {
  title: "Campaign page",
  items: [
    "Copywriting: the story, product sections, rewards, FAQ, and risks and challenges",
    "Graphics: header, section graphics, feature and comparison graphics, reward and stretch goal graphics",
    "Setup: the page built on Kickstarter, Indiegogo or Gamefound, with rewards, add ons and shipping set up",
    "Delivered campaign ready, for you to review and submit",
  ],
};

export const videoGroup: PackageGroup = {
  title: "Campaign video",
  items: [
    "Script and storyboard",
    "The main campaign video, edited from the product images and videos you provide",
    "Motion graphics, captions and licensed music",
    "A short cut for ads and social posts",
  ],
};

export const brandGroup: PackageGroup = {
  title: "Branding",
  items: [
    "Logo and wordmark",
    "Colour palette and typefaces",
    "A short brand guide",
    "Logo files for print, web and social",
  ],
};

export const websiteGroup: PackageGroup = {
  title: "Professional website",
  items: [
    "Website design and build, up to five pages",
    "Email sign up for your launch list",
    "Works on phones, tablets and desktops",
    "Connected to your domain, ready to go live",
  ],
};

export const packages: readonly LaunchPackage[] = [
  {
    slug: "creator-launch",
    name: "Creator Launch",
    audience: "For creators",
    price: 2500,
    priceText: "$2,500",
    summary: "A locked strategy, the campaign page and the campaign video, ready to launch.",
    groups: [planningGroup, pageGroup, videoGroup],
  },
  {
    slug: "founder-launch",
    name: "Founder Launch",
    audience: "For founders",
    price: 3500,
    priceText: "$3,500",
    summary: "Everything in Creator Launch, plus the brand and a professional website.",
    groups: [planningGroup, brandGroup, pageGroup, videoGroup, websiteGroup],
  },
];

export const [launchReady, brandToLaunch] = packages;

/** The line every page uses about video footage. */
export const videoNote = "We make the video from the product images and videos you provide. We do not film or photograph the product.";

/** What sits outside both packages. */
export const outsideNote = "Ad spend, ad management, prelaunch email campaigns, live campaign management and platform fees are outside both packages and quoted separately if you want them.";

/** One sentence for FAQs, meta copy and guides. */
export const priceSentence = "Creator Launch is $2,500 and covers the strategy, the campaign page and the campaign video. Founder Launch is $3,500 and adds branding and a professional website.";

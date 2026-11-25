import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "kickstarter-agency-cost",
  title: "How Much Does a Kickstarter Agency Cost?",
  seoTitle: "Kickstarter Agency Cost: Real Prices and Models",
  description: "Kickstarter agency cost depends on the model: fixed fee, retainer or a share of pledges. See published prices, what is never included and red flags.",
  tag: "Budget planning",
  answer: "A Kickstarter agency usually charges a fixed fee per campaign, a monthly retainer or a share of the pledges it brings in, and ad spend and platform fees sit on top of all three. The flat prices we could find published today run from $1,800 for our campaign page package to $6,997 for BoostYourCampaign's largest package.",
  relatedSlugs: ["choose-board-game-kickstarter-marketing-agency", "board-game-kickstarter-campaign-design-cost", "when-to-hire-kickstarter-campaign-designer"],
  servicePath: "/buy",
  serviceLabel: "See Guildframe's fixed price packages and book a launch",
  sources: [
    { label: "Crowdfunding marketing agency cost: an honest buyer's guide (January 2026)", publisher: "BoostYourCampaign", href: "https://www.boostyourcampaign.com/kickstarter-marketing/kickstarter-marketing-agency-pricing-2026" },
    { label: "Kickstarter and Jellop", publisher: "Kickstarter", href: "https://updates.kickstarter.com/kickstarter-and-jellop-2/" },
    { label: "Kickstarter consultants for board games", publisher: "Hero Time", href: "https://herotime1.com/academy/marketing/kickstarter-consultants/" },
    { label: "Kickstarter fees for creators", publisher: "Kickstarter", href: "https://www.kickstarter.com/help/fees" },
    { label: "Guildframe launch services and packages", publisher: "Guildframe", href: "/kickstarter-launch-services" },
  ],
  sections: [
    {
      id: "three-models",
      title: "The three ways Kickstarter agencies charge",
      paragraphs: [
        "Most Kickstarter agencies price their work in one of three ways, and the model tells you as much as the number. Here is how each one works:",
      ],
      list: [
        "Fixed fee: one price for an agreed scope, such as the campaign page or the whole launch.",
        "Retainer: a monthly fee for ongoing work, usually through prelaunch and the live campaign.",
        "Commission: a percentage of the pledges the agency's work brings in, sometimes on top of a smaller base fee.",
      ],
      source: 0,
      visual: {
        kind: "compare",
        title: "Fixed fees are predictable, commissions grow with your total",
        columns: [
          { name: "Fixed fee", points: ["One price for an agreed scope", "Cost known before launch", "Does not change with pledges"], verdict: "Easiest to budget" },
          { name: "Retainer", points: ["Monthly fee for ongoing work", "Total depends on the months", "BoostYourCampaign cites $3,000 to $15,000+ a month"], verdict: "Fits long prelaunch work" },
          { name: "Commission", points: ["Share of pledges the agency brings in", "Little or nothing up front", "BoostYourCampaign cites 5 to 15% of pledges"], verdict: "Costs most when you do well" },
        ],
        caption: "Market ranges are BoostYourCampaign's observations of other agencies, not quotes.",
        source: "BoostYourCampaign agency pricing guide, January 2026, checked 25 Nov 2026",
      },
    },
    {
      id: "market-ranges",
      title: "What the market ranges look like",
      paragraphs: [
        "Few agencies publish prices, so the best public picture comes from agencies describing the market. BoostYourCampaign's 2026 buyer's guide is the most detailed we found, and it is written by a competitor with its own packages to sell, so read it with that in mind.",
        "It puts retainers at about $3,000 a month at the low end to $15,000 or more. It says commissions typically run 5 to 15% of pledges, and hybrid deals pair a base fee with a success commission of 3 to 8%. For full service flat fees covering strategy, creative and launch management, it gives $10,000 to $30,000.",
        "So when you compare two proposals, put them in the same model first. A fixed fee and a commission only become comparable once you estimate your likely pledge total and multiply it out. If a proposal mixes models, ask for the total cost at a low, middle and high pledge figure, so you can see where each option gets expensive.",
      ],
      source: 0,
    },
    {
      id: "commission",
      title: "How commission and performance pricing work",
      paragraphs: [
        "Performance pricing sounds safest because you pay when it works, and for some campaigns it is the right call.",
        "Kickstarter's partnership post with Jellop describes this model. Jellop only charges a percentage of the revenues directly attributable to its efforts, with no upfront or setup fees, and creators can end the service at any time. The post does not state the percentage, so ask for it in writing.",
        "The question to settle is attribution. Ask how the agency decides which pledges it brought in: tracked ad clicks, a referral link, or every pledge after a certain date. A backer who saw your ad and then pledged from your newsletter could be counted by both. On a large campaign, a few points of commission can cost more than a fixed fee would have.",
        "That's why commission suits a creator with little cash before launch and a game with clear demand. It suits you less when your own community will bring most of the pledges.",
      ],
      source: 1,
    },
    {
      id: "not-included",
      title: "What an agency fee never includes",
      paragraphs: [
        "Whichever model you pick, several large costs sit outside the agency's price, and a proposal that blurs them is hard to compare. BoostYourCampaign says it plainly about its own packages: the ad spend is yours and sits alongside the flat package price. We work the same way.",
        "A fair comparison adds the same ad budget and the same platform fees to every proposal, then looks at what is left. Our advertising budget guide helps with the first number. Budget these separately from any agency fee:",
      ],
      list: [
        "Ad spend on Meta, Google or other networks, paid to the ad platform",
        "Kickstarter's 5% platform fee and payment processing, which for a US project is 3% plus $0.20 per pledge",
        "Manufacturing, freight, fulfillment and your reserve",
        "Software such as a third party pledge manager or an email tool",
        "New artwork, video production or game design, unless the scope says so",
      ],
      source: 3,
    },
    {
      id: "published-prices",
      title: "Published prices you can check today",
      paragraphs: [
        "Very few agencies publish prices, so the numbers that are public are worth seeing side by side. We checked each of these on 25 November 2026.",
        "BoostYourCampaign lists flat, done for you marketing packages from $3,499 to $6,997. Hero Time's consultant list puts independent crowdfunding consultants at about $20 to $75 an hour, usually for advice and calls while you do the work. Our own prices are $1,800 for the campaign page package and $5,900 for full campaign support.",
        "These are not like for like. A consultant advises, a page package covers the page, and a full launch package covers prelaunch, ads and the live campaign too. So compare the scope list first and the headline price second.",
      ],
      source: 2,
      visual: {
        kind: "bars",
        title: "Published flat prices run from $1,800 to $6,997",
        bars: [
          { label: "Guildframe campaign page", value: 1800, display: "$1,800", highlight: true },
          { label: "BoostYourCampaign, lowest package", value: 3499, display: "$3,499" },
          { label: "Guildframe full campaign support", value: 5900, display: "$5,900", highlight: true },
          { label: "BoostYourCampaign, highest package", value: 6997, display: "$6,997" },
        ],
        caption: "Scopes differ between packages. Ad spend is billed separately in all four.",
        source: "BoostYourCampaign 2026 pricing guide and Guildframe packages, checked 25 Nov 2026",
      },
    },
    {
      id: "scope",
      title: "What the price should buy",
      paragraphs: [
        "A price only means something next to a written scope, so ask every agency for the same list. Our guide to choosing a board game Kickstarter marketing agency goes deeper on the questions, but these five do most of the work:",
      ],
      list: [
        "Which pages, emails, graphics and ads are included, and how many revisions",
        "Who writes the campaign copy and who checks the facts",
        "Who runs the ads, how often they report and what ad budget they expect",
        "What happens during the live campaign and after it ends",
        "Who owns the files, ad accounts and email list when the work is done",
      ],
    },
    {
      id: "red-flags",
      title: "Red flags in agency pricing",
      paragraphs: [
        "Most agencies are straight about price, but a few patterns should make you slow down. None of them proves bad faith on its own. They are questions to ask, and a good agency answers them in writing without fuss. Be careful when you see:",
      ],
      list: [
        "A promised funding total or a guaranteed number of backers",
        "Commission on every pledge, including backers from your own community",
        "Ad spend paid through the agency with no access to the ad account or its reports",
        "No written scope, or a scope that changes after you pay",
        "Pressure to sign before you have seen a plan or sample work",
      ],
    },
    {
      id: "guildframe-prices",
      title: "What Guildframe charges, and the honest limit",
      paragraphs: [
        "We publish our prices because a creator should know the cost before the first call.",
        "The campaign page package is $1,800. It covers your Kickstarter or Gamefound page from the first line of copy to the published page, including page structure, campaign copy, section graphics and reward presentation using your artwork. Full campaign support is $5,900. It covers the campaign page, the prelaunch signup page and emails, ad creative and paid advertising, live campaign checks and the final handoff.",
        "Both are fixed prices, and we agree the scope and schedule before work starts, so the fee does not change with your pledge total. Ad spend, software, platform fees and external production are separate. Before you pay anything, you can ask for a free opening mockup: one opening campaign section built from your artwork, with no payment or obligation.",
        "The honest limit of a fixed price is that you carry the ad spend yourself. If you would rather pay only from results, a commission agency may suit you better, and that is a fair choice. If a fixed price fits, our Kickstarter launch services for tabletop games page explains the full launch, and the buy page has both packages and the booking form.",
      ],
      source: 4,
    },
  ],
  faqs: [
    { question: "How much does a Kickstarter marketing agency cost?", answer: "It depends on the model and the scope. The flat packages we found published run from $1,800 for our campaign page package to $6,997 for BoostYourCampaign's largest package. BoostYourCampaign's guide puts market retainers at about $3,000 to $15,000 or more a month and commissions at 5 to 15% of pledges." },
    { question: "Is ad spend included in an agency's price?", answer: "Usually not. BoostYourCampaign and Guildframe both bill ad spend separately from the package price, so add the same ad budget to every proposal you compare." },
    { question: "Is a commission agency cheaper than a fixed fee?", answer: "Only if the campaign raises less than you expect. A percentage grows with your total, so on a strong campaign it can cost more than a fixed fee. Ask how the agency decides which pledges it brought in." },
    { question: "What is the difference between a consultant and an agency?", answer: "A consultant advises and you do the work. Hero Time's list puts consultants at about $20 to $75 an hour. An agency does the work for you, for a fee or a share of the money raised." },
    { question: "What does Guildframe charge?", answer: "The campaign page package is $1,800 and full campaign support is $5,900, both fixed prices. Ad spend, software, platform fees and external production are separate." },
    { question: "Can I see your work before paying?", answer: "Yes. We build one opening campaign section from your artwork as a free mockup, with no payment or obligation to book." },
  ],
};

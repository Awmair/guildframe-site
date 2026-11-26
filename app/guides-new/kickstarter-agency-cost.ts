import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "kickstarter-agency-cost",
  title: "How Much Does a Kickstarter Agency Cost?",
  seoTitle: "Kickstarter Agency Cost: Real Prices and Models",
  description: "Kickstarter agency cost depends on the model: fixed fee, retainer or a share of pledges. See published prices, what is never included and red flags.",
  tag: "Budget planning",
  answer: "A Kickstarter agency usually charges a fixed fee per campaign, a monthly retainer or a share of the pledges it brings in, and ad spend and platform fees sit on top of all three. For done for you launch work, BoostYourCampaign publishes flat prices of $3,499 to $6,997. Our Creator Launch package is $2,500 for the strategy, campaign page and video, with ads quoted separately.",
  relatedSlugs: ["choose-board-game-kickstarter-marketing-agency", "board-game-kickstarter-campaign-design-cost", "when-to-hire-kickstarter-campaign-designer"],
  servicePath: "/buy",
  serviceLabel: "See Guildframe's packages and book a launch",
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
        source: "BoostYourCampaign agency pricing guide, January 2026, checked November 25, 2026",
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
        "A fair comparison adds the same ad budget and the same platform fees to every proposal, then looks at what is left. Our [Kickstarter advertising budget guide](/guides/kickstarter-advertising-budget-board-games) helps with the first number, and our breakdown of [Kickstarter fees](/guides/kickstarter-fees) covers the second. Budget these separately from any agency fee:",
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
        "Very few agencies publish prices, so the numbers that are public are worth seeing side by side. We checked each of these on November 25, 2026, and we only compare offers that cover the same kind of work.",
        "For full launch work, BoostYourCampaign lists flat, done for you marketing from $3,499 to $6,997. It describes that range as strategy, a prelaunch funnel, the page and live campaign management, with the entry tier covering the prelaunch funnel only. Our packages cover a narrower scope: Creator Launch is $2,500 for the strategy, the page and the video, and Founder Launch is $3,500 and adds branding and a website. Prelaunch, ads and live campaign management are quoted separately on top of either.",
        "Smaller scopes sit on their own line. Hero Time's consultant list puts independent crowdfunding consultants at about $20 to $75 an hour, usually for advice and calls while you do the work. Our Creator Launch package covers the strategy, the page and the video, so set it beside other page and video quotes, as our guide to [board game Kickstarter campaign design cost](/guides/board-game-kickstarter-campaign-design-cost) does. So compare the scope list first and the headline price second.",
      ],
      source: 2,
      visual: {
        kind: "compare",
        title: "On a full launch scope, published flat prices run from $3,499 to $6,997",
        columns: [
          { name: "Guildframe Creator Launch and Founder Launch", points: ["Strategy, goal and reward tiers", "Campaign page copy, graphics and setup", "Campaign video from your images and videos", "Founder Launch adds branding and a website", "Prelaunch, ads and live management quoted separately"], verdict: "$2,500 or $3,500", highlight: true },
          { name: "BoostYourCampaign done for you", points: ["Entry tier: prelaunch funnel and emails", "Middle tier adds live ad management", "Top tier adds strategy, video and paid ads", "Range covers the page and live management"], verdict: "$3,499 to $6,997 flat" },
          { name: "Market full service flat fee", points: ["Strategy, creative and launch management", "BoostYourCampaign's estimate for other agencies", "Not a quote from any one agency"], verdict: "$10,000 to $30,000" },
        ],
        caption: "Ad spend is billed separately in every column. Our packages leave out prelaunch, ads and live management, so add those quotes before you compare totals.",
        source: "BoostYourCampaign 2026 pricing guide and Guildframe packages, checked November 25, 2026",
      },
    },
    {
      id: "scope",
      title: "What the price should buy",
      paragraphs: [
        "A price only means something next to a written scope, so ask every agency for the same list. Our guide to [choosing a board game Kickstarter marketing agency](/guides/choose-board-game-kickstarter-marketing-agency) goes deeper on the questions, but these five do most of the work:",
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
      title: "What Guildframe charges, and what our packages leave to you",
      paragraphs: [
        "We publish our prices because a creator should know the cost before the first call.",
        "Creator Launch is $2,500. It covers the launch strategy, your Kickstarter, Indiegogo or Gamefound page from the first line of copy to a campaign ready for you to submit, and the campaign video, made from the product images and videos you provide. Founder Launch is $3,500. It covers everything in Creator Launch, plus branding and a professional website of up to five pages.",
        "Each package has one price, and we agree the scope and schedule before work starts, so the fee does not change with your pledge total. Ad spend, ad management, prelaunch email campaigns, live campaign management, software, platform fees and external production are quoted or paid separately.",
        "Our packages do leave the ad spend with you. If you would rather pay only from results, a commission agency may suit you better, and that is a fair choice. If a package price fits, our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) page explains the full launch, and [the buy page](/buy) has both packages and the booking form.",
      ],
      source: 4,
    },
  ],
  faqs: [
    { question: "How much does a Kickstarter marketing agency cost?", answer: "It depends on the model and the scope. For full launch work, BoostYourCampaign publishes flat prices of $3,499 to $6,997, and our Creator Launch package is $2,500 for the strategy, page and video, with ads quoted separately. BoostYourCampaign's guide puts market retainers at about $3,000 to $15,000 or more a month and commissions at 5 to 15% of pledges." },
    { question: "Is ad spend included in an agency's price?", answer: "Usually not. BoostYourCampaign and Guildframe both bill ad spend separately from the package price, so add the same ad budget to every proposal you compare." },
    { question: "Is a commission agency cheaper than a fixed fee?", answer: "Only if the campaign raises less than you expect. A percentage grows with your total, so on a strong campaign it can cost more than a fixed fee. Ask how the agency decides which pledges it brought in." },
    { question: "What is the difference between a consultant and an agency?", answer: "A consultant advises and you do the work. Hero Time's list puts consultants at about $20 to $75 an hour. An agency does the work for you, for a fee or a share of the money raised." },
    { question: "What does Guildframe charge?", answer: "Creator Launch is $2,500 and covers the strategy, the campaign page and the campaign video. Founder Launch is $3,500 and adds branding and a professional website. Ad spend, ad management, software, platform fees and external production are separate." },
  ],
};

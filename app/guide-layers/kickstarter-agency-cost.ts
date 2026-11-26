import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "three-models": {
      takeaway: "Kickstarter agencies charge a fixed fee, a monthly retainer or a commission on pledges. The pricing model tells you as much as the number.",
    },
    "market-ranges": {
      visuals: [
        {
          kind: "tips",
          title: "Four steps make two agency proposals comparable",
          tips: [
            {label: "Use one model", text: "Put both proposals in the same pricing model before you compare the numbers."},
            {label: "Multiply it out", text: "Estimate your likely pledge total, then turn any commission into dollars."},
            {label: "Ask for three totals", text: "If a proposal mixes models, ask for the total cost at a low, middle and high pledge figure."},
            {label: "Hold the extras equal", text: "Add the same ad budget and the same platform fees to every proposal, then compare what is left."},
          ],
        },
      ],
      takeaway: "Public market ranges for Kickstarter agency cost run from 5 to 15% commission to $10,000 to $30,000 flat. Compare proposals only after putting them in one model.",
    },
    "commission": {
      paragraphs: [
        "Performance pricing sounds safest because you pay when it works, and for some campaigns it is the right call.",
        "Kickstarter's partnership post with Jellop describes this model. Jellop only charges a percentage of the revenues directly attributable to its efforts, with no upfront or setup fees, and creators can end the service at any time. The post does not state the percentage, so ask for it in writing.",
        "The question to settle is attribution. Ask how the agency decides which pledges it brought in: tracked ad clicks, a referral link, or every pledge after a certain date.",
        "A backer who saw your ad and then pledged from your newsletter could be counted by both. On a large campaign, a few points of commission can cost more than a fixed fee would have.",
        "That's why commission suits a creator with little cash before launch and a project with clear demand. It suits you less when your own community will bring most of the pledges.",
      ],
      visuals: [
        {
          kind: "bars",
          title: "Example: a 10% commission passes a $5,900 fixed fee once attributed pledges top $59,000",
          unit: "$",
          bars: [
            {label: "10% of $20,000 attributed", value: 2000, display: "$2,000"},
            {label: "10% of $50,000 attributed", value: 5000, display: "$5,000"},
            {label: "Fixed fee example", value: 5900, display: "$5,900", highlight: true},
            {label: "10% of $100,000 attributed", value: 10000, display: "$10,000"},
          ],
          caption: "Illustrative example. 10% sits inside the 5 to 15% commission range BoostYourCampaign reports, and $5,900 is our full campaign support price. Ad spend is separate in both.",
        },
        {
          kind: "flow",
          title: "Commission fits a cash poor launch, a fixed fee fits a strong community",
          start: "You are choosing how to pay a Kickstarter agency",
          nodes: [
            {question: "Do you have cash for a fee before launch?", yes: "Go on to the community check", no: "A commission model may suit you, so get the percentage in writing"},
            {question: "Will your own community bring most of the pledges?", yes: "Go on to the scope check", no: "Commission can be fair, once attribution is agreed in writing"},
            {question: "Does the agency give a written scope you can compare?", yes: "Go on to the decision", no: "Ask for one before you compare any price"},
          ],
          end: "A fixed fee is usually the better fit",
        },
      ],
      takeaway: "Commission pricing costs most when your Kickstarter does well. Agree in writing how the agency attributes pledges before you sign.",
    },
    "not-included": {
      paragraphs: [
        "Whichever model you pick, several large costs sit outside the agency's price, and a proposal that blurs them is hard to compare.",
        "BoostYourCampaign says it plainly about its own packages: the ad spend is yours and sits alongside the flat package price. We work the same way.",
        "A fair comparison adds the same ad budget and the same platform fees to every proposal, then looks at what is left. Our [Kickstarter advertising budget guide](/guides/kickstarter-advertising-budget-board-games) helps with the first number, and our breakdown of [Kickstarter fees](/guides/kickstarter-fees) covers the second. Budget these separately from any agency fee:",
      ],
      takeaway: "No Kickstarter agency fee includes ad spend, platform fees, manufacturing or fulfillment. Budget those separately for every proposal you compare.",
    },
    "published-prices": {
      paragraphs: [
        "Very few agencies publish prices, so the numbers that are public are worth seeing side by side. We checked each of these on November 25, 2026, and we only compare offers that cover the same kind of work.",
        "For full launch work, BoostYourCampaign lists flat, done for you marketing from $3,499 to $6,997. It describes that range as strategy, a prelaunch funnel, the page and live campaign management, with the entry tier covering the prelaunch funnel only. Our full campaign support is $5,900 and covers the page, prelaunch, ads and the live campaign.",
        "Smaller scopes sit on their own line. Hero Time's consultant list puts independent crowdfunding consultants at about $20 to $75 an hour, usually for advice and calls while you do the work.",
        "Our campaign page package is $1,800 and covers the page only. Set it beside other page quotes, as our guide to [board game Kickstarter campaign design cost](/guides/board-game-kickstarter-campaign-design-cost) does.",
      ],
      takeaway: "Compare the scope list first and the headline price second. Published full launch prices run from $3,499 to $6,997, and consultants charge about $20 to $75 an hour.",
    },
    "scope": {
      takeaway: "Ask every Kickstarter agency for the same written scope: deliverables, copy, ads, live campaign work and who owns the files and accounts afterwards.",
    },
    "red-flags": {
      paragraphs: [
        "Most agencies are straight about price, but a few patterns should make you slow down. None of them proves bad faith on its own.",
        "They are questions to ask, and a good agency answers them in writing without fuss. Be careful when you see:",
      ],
      takeaway: "Walk away from guaranteed funding totals, commission on your own community and ad spend you can't see. A good agency answers pricing questions in writing.",
    },
    "guildframe-prices": {
      paragraphs: [
        "We publish our prices because a creator should know the cost before the first call.",
        "The campaign page package is $1,800. It covers your Kickstarter or Gamefound page from the first line of copy to the published page. That includes page structure, campaign copy, section graphics and reward presentation using your artwork.",
        "Full campaign support is $5,900. It covers the campaign page, the prelaunch signup page and emails, ad creative and paid advertising, live campaign checks and the final handoff.",
        "Both are fixed prices, and we agree the scope and schedule before work starts, so the fee does not change with your pledge total. Ad spend, software, platform fees and external production are separate.",
        "Before you pay anything, you can ask for a free opening mockup: one opening campaign section built from your artwork, with no payment or obligation.",
        "A fixed price does leave the ad spend with you. If you would rather pay only from results, a commission agency may suit you better, and that is a fair choice.",
        "If a fixed price fits, our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) page explains the full launch, and [the buy page](/buy) has both packages and the booking form.",
      ],
      takeaway: "Guildframe charges $1,800 for the campaign page and $5,900 for full campaign support, both fixed. Ad spend, software and platform fees stay with you.",
    },
  },
};

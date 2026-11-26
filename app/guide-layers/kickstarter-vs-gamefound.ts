import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-answer": {
      takeaway: "In Kickstarter vs Gamefound, your audience decides more than the platform. Both take 5%, so start from where your backers already pledge.",
    },
    "fees": {
      takeaway: "Kickstarter and Gamefound fees are almost the same at 5% plus processing. The real differences sit in ad service fees and post campaign sales.",
    },
    "audience": {
      takeaway: "Gamefound's crowd is tabletop players and Kickstarter's is wider. On either platform, launch day depends on the followers and email list you bring.",
    },
    "pledge-manager": {
      paragraphs: [
        "What happens after funding used to be the clearest gap between the two, and it has narrowed. Gamefound runs the whole journey in one system, from the campaign to Late Pledge to the pledge manager.",
        "In its pledge manager, backers confirm choices, add shipping details and pay what is still owed. Kickstarter now has Late Pledges and its own Pledge Manager, priced like the campaign itself.",
        "You can also use a separate tool such as BackerKit or PledgeBox. Our [pledge manager comparison](/guides/pledge-managers-compared) sets all four side by side, with the fees each one publishes.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Five facts about late pledges and pledge managers on each platform",
          tips: [
            {label: "Gamefound Late Pledge is optional", text: "It takes new pledges after funding, before shipping costs are set, and you can skip it."},
            {label: "Gamefound pledge manager waits for shipping", text: "You launch it once shipping is set up."},
            {label: "Gamefound takes outside campaigns", text: "Campaigns funded on other platforms can move into its pledge manager after a review."},
            {label: "Kickstarter has its own tools now", text: "Late Pledges and the Kickstarter Pledge Manager use the same fees as the campaign."},
            {label: "Ask your fulfillment partner", text: "Choose the pledge manager route your fulfillment partner can work with."},
          ],
          source: "Gamefound Help Center; Kickstarter Help Center",
        },
      ],
      takeaway: "A Kickstarter launch no longer forces a second platform after funding, and a Gamefound launch keeps everything under one login.",
    },
    "ads": {
      takeaway: "Compare Adfound, Jellop and your own Meta ads on how revenue is attributed, not just the percentage. Running your own ads keeps the data and audiences with you.",
    },
    "indiegogo": {
      takeaway: "Gamefound buying Indiegogo makes it a bigger company with wider reach, but there is no published traffic figure for tabletop projects yet. Don't pick on that alone.",
    },
    "which-to-pick": {
      paragraphs: [
        "Genre and experience are the two questions we ask first, because they predict where your backers already are. The comparison below is our working view from planning tabletop launches, not platform data.",
        "Kickstarter tends to fit games with crossover appeal, such as party and family card games, TTRPG books and zines, and licensed worlds whose fans live outside hobby gaming. It also fits creators who already run their own ads or who qualify for Jellop.",
        "Gamefound tends to fit hobby board games, miniatures heavy campaigns and publishers whose backers already have Gamefound accounts. It suits creators who want native stretch goals, Late Pledge and a pledge manager without joining separate tools together.",
        "If this is your first game and your list is small, either can work. Pick the one where you can already point to some of your future backers, then put the saved effort into your page and prelaunch.",
        "For a complete beginner, the easier platform is the one with fewer moving parts for your game. Gamefound keeps stretch goals, Late Pledge and the pledge manager under one login, while Kickstarter's wider site can bring in people who came for something else.",
        "If Kickstarter itself is new to you, [Kickstarter for beginners](/guides/kickstarter-for-beginners) explains how a campaign works from the creator's side.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three questions point a first board game to Kickstarter or Gamefound",
          start: "You are choosing between Kickstarter and Gamefound",
          nodes: [
            {question: "Are your backers mostly hobby tabletop regulars?", yes: "Go on to the account check", no: "Kickstarter fits crossover games whose backers live beyond hobby gaming"},
            {question: "Can you point to future backers who already use Gamefound?", yes: "Go on to the tools check", no: "Pick the platform where you can already point to backers"},
            {question: "Do you want stretch goals, Late Pledge and a pledge manager under one login?", yes: "Go on to the decision", no: "Either works, since Kickstarter now has Late Pledges and its own Pledge Manager"},
          ],
          end: "Gamefound is likely the better fit",
          caption: "Our working view from tabletop launch planning, not platform statistics.",
        },
      ],
      takeaway: "Pick Kickstarter for crossover board games and Gamefound for hobby gamers who already back there. With a small list, choose where you can name some backers.",
    },
    "checklist": {
      takeaway: "Decide between Kickstarter and Gamefound with your own facts: where your followers back, your modeled fees and ads, and which pledge manager your fulfillment partner supports.",
    },
  },
};

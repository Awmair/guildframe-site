import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "what-it-does": {
      paragraphs: [
        "A pledge manager is the system that sits between a funded campaign and a shipped box. The campaign records each pledge, but it does not yet know which language edition someone wants or where they will live when the game ships.",
        "The pledge manager sends each backer a survey, records their choices and sells extras. It then charges what is still owed and exports clean orders to your fulfillment partner. Most tools also let new backers buy in after the campaign ends.",
        "How much you need depends on your rewards. A project with one book, shipping charged at pledge and no extras needs far less than a game with three languages and a miniatures add on.",
        "That's why we start from your messiest order, not from a vendor's feature list. Our guide on [what happens after Kickstarter is funded](/guides/what-happens-after-kickstarter-is-funded) shows where this step sits.",
        "Every tool in this guide covers the same core jobs, roughly in this order.",
      ],
      takeaway: "Every pledge manager runs the same survey, add on, shipping and export jobs. Pick one by testing your messiest order, not by reading feature lists.",
    },
    kickstarter: {
      paragraphs: [
        "Kickstarter's built in option arrived in 2025, and it changed quickly through 2026. It opened to all creators on May 8, 2025, with a backer survey, upgrades and add ons, order exports and post campaign shipping.",
        "The launch also covered US sales tax and EU and UK VAT collection, plus a Tariff Manager for extra charges on US backers.",
        "There is no upfront cost, and Kickstarter takes 5% on all funds collected through it except taxes. Card processing applies on top, which in the US is 3% and $0.20 per pledge, on the full payment with tax included.",
        "The 2026 release notes added much of the flexibility a tabletop campaign needs after funding. Since August 20, backers can change their own orders if you allow it, and since October 28 you can edit a backer's order yourself. Dropped pledges have appeared in Backer Source data on your dashboard since October 13.",
        "For a Kickstarter campaign with straightforward rewards, that makes it the easiest route, because there is no second platform to explain to backers. The limit is that it only serves Kickstarter projects.",
      ],
      takeaway: "The Kickstarter Pledge Manager has no upfront cost and takes 5% of funds collected through it. It is the simplest choice for Kickstarter projects with straightforward rewards.",
    },
    backerkit: {
      paragraphs: [
        "BackerKit is the name most creators search for first, and it works both as a pledge manager for campaigns run elsewhere and alongside its own crowdfunding platform.",
        "Its published pricing has two parts. A campaign fee of 2% or less gets lower as you raise more, and it is due after the campaign ends, before surveys go out. A 3.5% transaction fee applies to post campaign sales such as add ons and preorders, and the campaign fee is waived if you launched on BackerKit.",
        "The pricing page does not list payment processing, so ask for that figure before you compare totals.",
        "For RPG creators, the useful 2026 change is DriveThruRPG delivery. BackerKit launched the integration in June for instant digital rewards during campaigns, then brought it to the pledge manager on October 6.",
        "You connect your DriveThruRPG account once, and backers find their digital rewards in their DriveThruRPG library.",
        "BackerKit makes most sense when your catalog is complex, you plan to keep selling preorders, or your backers already keep their RPG books on DriveThruRPG.",
      ],
      takeaway: "BackerKit suits complex catalogs, ongoing preorders and RPG files delivered through DriveThruRPG. Ask for its payment processing rate before you compare totals.",
    },
    gamefound: {
      paragraphs: [
        "Gamefound treats the pledge manager as one stage of a single system, which is its main appeal. After crowdfunding you can open an optional Late Pledge stage, then the pledge manager. There, backers finalize choices, add shipping details and pay outstanding amounts such as shipping or add ons.",
        "Late Pledge collects new pledges before shipping costs are set, and you can skip it. The pledge manager launches once shipping is set up.",
        "Gamefound also accepts campaigns funded elsewhere. You enter your funding, backer count and currency, then submit the project for review.",
        "For projects funded on Gamefound, there is no charge for managing pledges you already raised. Gamefound takes 5% of each payment collected in the pledge manager. Processing adds 3% and 0.2 per transaction in project currency, which Gamefound gives as $0.2 when the project currency is dollars.",
        "That makes it a strong fit if you launched on Gamefound or want backers in one familiar account, and our guide to [Kickstarter vs Gamefound](/guides/kickstarter-vs-gamefound) covers that platform choice. For a Kickstarter campaign, confirm the rate on your project before you plan around it.",
      ],
      takeaway: "Gamefound charges nothing to manage pledges raised on Gamefound and 5% on new payments. Projects funded elsewhere can use it after a review.",
    },
    pledgebox: {
      takeaway: "PledgeBox takes no fee on money already raised and 3% on survey payments. Check its export against your warehouse format before you choose on price.",
    },
    compare: {
      visuals: [
        {
          kind: "bars",
          title: "Example: on $10,000 of survey spend, the fee rate moves the bill by $200",
          unit: "",
          bars: [
            {label: "3% survey fee", value: 300, display: "$300"},
            {label: "3.5% transaction fee", value: 350, display: "$350"},
            {label: "5% fee on new payments", value: 500, display: "$500", highlight: true},
          ],
          caption: "Example only, before payment processing. Swap in your own expected survey spend for add ons and shipping.",
          source: "Rates from the Kickstarter, BackerKit, Gamefound and PledgeBox pricing pages, checked November 25, 2026",
        },
      ],
      takeaway: "Compare pledge manager fees on the base each tool charges on, using your own survey spend. Then weigh export quality, because a stalled shipment costs more than a percentage point.",
    },
    "which-fits": {
      visuals: [
        {
          kind: "flow",
          title: "Four questions pick a pledge manager for most tabletop campaigns",
          start: "Your campaign is funded and you need a pledge manager",
          nodes: [
            {question: "Did you fund on Kickstarter?", yes: "Kickstarter's own Pledge Manager and PledgeBox are both open to you", no: "Gamefound projects use Gamefound's pledge manager. Indiegogo projects compare PledgeBox and BackerKit"},
            {question: "Is your catalog simple, with few editions and no ongoing preorders?", yes: "Shortlist Kickstarter's own tool and PledgeBox", no: "Look at BackerKit, which suits complex catalogs and preorders"},
            {question: "Do you want backers to stay on Kickstarter with no second platform?", yes: "Use the Kickstarter Pledge Manager", no: "PledgeBox charges 0% on funds already raised and 3% on survey payments"},
            {question: "Does your test order export cleanly to your warehouse?", yes: "Sign up and prepare the backer survey", no: "Fix the export, or test the next tool on your shortlist"},
          ],
          end: "Ready to send backer surveys",
          caption: "The test order is one base game, one expansion and one language choice, sent to two different countries.",
        },
      ],
      takeaway: "Where you funded narrows the pledge manager choice, and your test order export settles it. We write the survey and add on content once you pick.",
    },
  },
  insertAfter: {
    compare: [
      {
        id: "before-you-sign",
        title: "Five checks before you sign with a pledge manager",
        paragraphs: [
          "Published fees only tell part of the story, so we run the same short checks on every tool before a creator commits.",
        ],
        visuals: [
          {
            kind: "tips",
            title: "The questions that change the real cost of a pledge manager",
            tips: [
              {label: "Find the fee base", text: "Some tools charge on money you already raised, others only on new survey money. Work out which applies to you."},
              {label: "Ask for processing", text: "BackerKit's pricing page does not list payment processing. Get that figure in writing before you compare totals."},
              {label: "Confirm your own rate", text: "Gamefound accepts campaigns funded elsewhere after review. Confirm the rate on your project before you plan around it."},
              {label: "Run your own sum", text: "Multiply your expected survey spend by each rate. Example: $10,000 at 3% is $300, and at 5% it is $500."},
              {label: "Test the export", text: "A wrong language code or paid status stalls a shipment at the warehouse. Import one test order before you launch surveys."},
            ],
          },
        ],
        takeaway: "The cheapest pledge manager on paper can cost more in fixes. Check the fee base, processing and export before you sign.",
      },
    ],
  },
};

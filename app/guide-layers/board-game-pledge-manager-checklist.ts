import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    requirements: {
      takeaway: "Choose a pledge manager by the orders you must fulfill, and let your fulfillment partner review a sample export before you pick the tool.",
    },
    native: {
      paragraphs: [
        "Eligible Kickstarter projects can use its native Pledge Manager. The current help describes surveys, upgrades, optional new backers and later shipping or applicable tax collection.",
        "It becomes available after the campaign launches, so check eligibility before including it in your plan.",
        "Kickstarter Late Pledges must end before its Pledge Manager launches. New buyers can still be allowed through the manager when configured. That transition should have a clear public message so someone does not follow an outdated instruction.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Shortlist a pledge manager only after it passes your own order test",
          start: "Campaign funded, or close to launch",
          nodes: [
            {question: "Is your project eligible for Kickstarter's own Pledge Manager?", yes: "Add it to the comparison", no: "Compare outside systems only"},
            {question: "Does each option handle your choices, upgrades and shipping collection?", yes: "Request a sample export", no: "Drop it before manual corrections pile up"},
            {question: "Can your fulfillment partner import that sample export?", yes: "Run the full set of test orders", no: "Ask for a different export or drop it"},
            {question: "Is every fee confirmed on the same order scenario?", yes: "Compare the totals", no: "Ask the provider to confirm, and leave the blank visible"},
          ],
          end: "Commit to the system and plan the backer message",
          caption: "Guildframe's selection order for a board game pledge manager.",
        },
      ],
      takeaway: "Kickstarter's own Pledge Manager belongs in every comparison, but its Late Pledges must end before it opens.",
    },
    stages: {
      paragraphs: [
        "Gamefound distinguishes its optional Late Pledge stage from Pledge Manager. Late Pledge can extend the offer before shipping collection, and Pledge Manager handles shipping details and fees. If you move directly to its manager after crowdfunding, you cannot later open the earlier Late Pledge stage.",
        "A permanent Shopify store has another purpose, which is retail orders and an ongoing catalog. It may run alongside campaign fulfillment.",
        "Decide which system owns each order and how shared stock is allocated. Opening a retail checkout never transfers campaign obligations by itself.",
      ],
      visuals: [
        {
          kind: "compare",
          title: "Late Pledge, Pledge Manager and a retail store each own different orders",
          columns: [
            {name: "Late Pledge on Gamefound", points: ["Optional stage after crowdfunding", "Extends the offer before shipping collection", "Cannot be opened later if you skip it"]},
            {name: "Pledge Manager", points: ["Shipping details and fees", "Surveys, upgrades and remaining payments", "Owns the campaign orders"], highlight: true},
            {name: "Shopify store", points: ["Retail orders and an ongoing catalog", "Can run alongside fulfillment", "Never takes over campaign obligations by itself"]},
          ],
          source: "Gamefound Knowledge Base and Kickstarter Help Center",
        },
      ],
      takeaway: "Pick the stage as carefully as the tool. On Gamefound, skipping Late Pledge closes it for good.",
    },
    fees: {
      takeaway: "Compare pledge manager fees on one identical order scenario, and leave unknown charges blank until the provider confirms them.",
    },
    test: {
      takeaway: "A successful download proves nothing until the person importing the export confirms their system can use it.",
    },
    handoff: {
      paragraphs: [
        "Before opening the manager, agree what the message asks backers to do. The cards below cover the four things it needs.",
        "We help funded creators plan those messages and the move from campaign to pledge manager as part of our post campaign support. Bring the chosen platform, order scenarios and fulfillment requirements so the message matches the actual workflow.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Give backers one clear next action when the pledge manager opens",
          tips: [
            {label: "One link", text: "Do not send several competing links for the same task."},
            {label: "Confirmed facts", text: "Explain the choices, any remaining payments and the deadline using confirmed facts."},
            {label: "A named helper", text: "Agree who answers backer questions before the manager opens."},
            {label: "A public handover", text: "On Kickstarter, say clearly when Late Pledges end and the Pledge Manager begins."},
          ],
        },
      ],
      takeaway: "Open the pledge manager with one message, one link and one deadline that match the real fulfillment workflow.",
    },
  },
};

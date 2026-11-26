import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "collection": {
      visuals: [
        {
          kind: "flow",
          title: "Charge Kickstarter shipping at pledge only when your quotes are firm",
          caption: "Our decision rule, built from the two collection options Kickstarter offers.",
          start: "You are choosing when to collect shipping",
          nodes: [
            {question: "Do you have quotes for package size, weight, origin and destinations?", yes: "Continue", no: "Collect later through a pledge manager, and say so on the page"},
            {question: "Do the quotes cover likely bundles and add ons?", yes: "Continue", no: "Get rates for combined packages, or collect later"},
            {question: "Has your fulfillment partner confirmed any duty wording?", yes: "Continue", no: "Leave duty claims off the page until they confirm"},
          ],
          end: "Charge shipping at pledge, where it counts toward your goal",
          source: "Kickstarter Help Center, shipping options",
        },
      ],
      takeaway: "Kickstarter shipping can be charged at pledge, where it counts toward the funding goal, or later through a pledge manager. Either way, build every charge from real quotes.",
    },
    "estimates": {
      takeaway: "A regional shipping table built from dated quotes, with bundles and exclusions listed, lets backers budget the full cost of a reward.",
    },
    "dates": {
      takeaway: "The estimated delivery date on each Kickstarter reward is the day backers receive it, so count file approval, manufacturing, freight and warehouse intake first.",
    },
    "wording": {
      visuals: [
        {
          kind: "tips",
          title: "A good shipping sentence names five things and guesses none",
          tips: [
            {label: "The system", text: "Say where shipping is collected, at pledge or in a named pledge manager."},
            {label: "The region", text: "Name the destination the estimate covers."},
            {label: "The reward", text: "Name the tier or package, including combined extras."},
            {label: "The amount and date", text: "Give the approved figure and the date of the quote behind it."},
            {label: "No placeholders", text: "Never leave a plausible looking placeholder price on the page."},
            {label: "Tax and duty", text: "The person responsible for those obligations approves that wording first."},
          ],
        },
      ],
      takeaway: "Give your page designer approved shipping wording with the system, region, reward, amount and quote date already filled in.",
    },
    "changes": {
      visuals: [
        {
          kind: "checklist",
          title: "Shipping has to read the same in four places on the campaign",
          caption: "One page that says shipping is included undoes a careful shipping section.",
          groups: [
            {name: "Check against each other", items: ["The story's shipping section", "Native reward tiers", "The FAQ", "Any pledge manager note"]},
            {name: "Every delay update covers", items: ["The current situation", "The next step", "The revised estimate"]},
          ],
        },
      ],
      takeaway: "Name who updates backers when rates or production change, and cross check every mention of shipping before launch.",
    },
    "working-checklist": {
      takeaway: "Your Kickstarter shipping section is ready when a backer can budget beyond the pledge and see a dated estimate without messaging you.",
    },
  },
};

import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    budget: {
      paragraphs: [
        "A quote for ad management is not the same as the amount spent on ads. So we keep every cost on its own line, as the checklist below shows, and check the fee schedule for your creator country.",
        "Ads are optional, so the first budget question is whether you need them at all. A small goal with a real community behind it, such as an email list, a Discord or a group of playtesters, can fund without paid traffic.",
        "The honest ceiling is that without ads you mostly reach people who already know you, so the goal has to fit that audience.",
      ],
      visuals: [
        {
          kind: "checklist",
          title: "Keep ad costs and campaign costs on separate lines",
          groups: [
            {name: "Advertising lines", items: ["Management fee", "Creative production", "Media spend", "Any software"]},
            {name: "Campaign cost model", items: ["Reward production and packaging", "Delivery obligations", "Platform fees for your creator country", "Relevant taxes"]},
            {name: "Decide up front", items: ["Who pays the advertising platform", "Who can change the spending limit"]},
          ],
          caption: "Check the platform fee schedule for your creator country instead of using one payment processing figure everywhere.",
          source: "Kickstarter fee information by creator country",
        },
      ],
      takeaway: "Your Kickstarter advertising budget is media spend only. Keep the management fee and every campaign cost on their own lines.",
    },
    economics: {
      paragraphs: [
        "In this illustrative USD example, a reward brings in $60. Production, packaging, delivery obligations and platform or payment costs total $42 per reward, which leaves $18 before advertising, fixed costs and reserves.",
        "If you also reserve $6 for fixed work and uncertainty, only $12 remains for acquisition. These are invented planning inputs, not industry averages or a Guildframe quote.",
        "At a $12 acquisition cost, the example uses its whole allowance. A $60 pledge would show 5x revenue divided by ad spend, yet the model has no spare margin beyond the reserve already included.",
        "That is why a high ROAS figure alone cannot tell you whether a campaign is profitable. Replace every input with your own reward mix and supplier costs.",
      ],
      takeaway: "The most you can spend to win a backer is what one reward leaves after production, delivery, fees and the reserve.",
    },
    test: {
      paragraphs: [
        "A test brief should say what you are trying to learn and the maximum you will spend to learn it. An illustrative $300 test cap means stop at $300 unless an authorized person approves more.",
        "It does not mean that amount is enough data for every audience or creative comparison.",
        "Review the route in order, from ad delivery to useful visits, successful signups and later attributable pledges. Compare messages using the same destination and reporting period where possible, because a click winner is not automatically the creative that attracts backers.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Review a capped ad test in order before spending another dollar",
          start: "Example: a $300 capped test",
          nodes: [
            {question: "Are the ads delivering useful visits to the tested page?", yes: "Check the signup event next", no: "Review the message and destination before buying more visits"},
            {question: "Does the page record successful signups?", yes: "Look for later attributable pledges", no: "Fix the broken form or destination first"},
            {question: "Do attributable pledges fit the acquisition allowance in your cost model?", yes: "The test has earned a follow up", no: "Pause or change spend under your approval rules"},
            {question: "Has an authorized person approved spend above the cap?", yes: "Raise the cap by the approved amount", no: "Stop at $300"},
          ],
          end: "Write the next test brief with its own cap",
          caption: "Illustrative $300 cap. Use the review rule from your own test brief.",
        },
      ],
      takeaway: "Every Kickstarter ad test needs a written cap, a question and a review rule before the first dollar is spent.",
    },
    leads: {
      takeaway: "A $5 signup is a lead cost, not a cost per backer. Never apply an assumed conversion rate as if it were measured.",
    },
    attribution: {
      paragraphs: [
        "Kickstarter and your advertising platform may count the same result differently. So we agree which report answers which question before the campaign starts.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four rules for reading Kickstarter ad reports",
          tips: [
            {label: "Referral tags", text: "Kickstarter custom referral tags report attributed pledges and amounts, not link clicks."},
            {label: "UTM labels", text: "Google Analytics campaign parameters identify source, medium, campaign and creative on your own page. They are labels, not proof the ad caused a pledge."},
            {label: "One source per figure", text: "Use consistent campaign links, document the reporting source and explain the attribution window."},
            {label: "No stacking", text: "Avoid adding overlapping reports from the ad platform and Kickstarter together."},
          ],
          source: "Kickstarter Help Center and Google Analytics Help",
        },
      ],
      takeaway: "Agree one report per question before launch, and never add ad platform results to Kickstarter's referral totals.",
    },
    profit: {
      paragraphs: [
        "Illustrative example: $2,000 of attributed pledge revenue on $1,000 of media spend is a ROAS of 2.0. Production, delivery, platform fees, taxes, refunds where relevant and service fees still need to be paid. The ratio alone cannot tell you whether the campaign is profitable.",
        "During the live campaign, review spend, reward mix and attributable pledges against the cost model. Increase, change or pause spend under the approval rules you agreed.",
        "When results are unclear, state the uncertainty instead of treating the highest report as the answer. That's how we report on every campaign we run ads for, with media spend kept apart from our fee.",
      ],
      takeaway: "A 2.0 ROAS doubles the ad spend in revenue, not profit. Production, delivery and fees still have to be paid from it.",
    },
    "whole-budget": {
      paragraphs: [
        "The acquisition calculation does not include every bill you must pay before launch. Keep a separate cash plan for creative, setup, recurring support, email software and the test itself. Some costs are paid before any pledge money is available.",
        "For each quote, record whether a cost is fixed, recurring or a percentage, when it is payable and what happens if you delay or cancel.",
        "Avoid putting all of the budget into traffic while the page or production plan is still incomplete. When we manage ads, the media cap, approval rules and reporting go into the written scope before any spend starts.",
      ],
      takeaway: "Keep the ad test inside a full launch cash plan, because some bills fall due before any pledge money arrives.",
    },
  },
};

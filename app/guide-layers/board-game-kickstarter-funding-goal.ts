import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    formula: {
      paragraphs: [
        "We work out a funding goal the same way for every tabletop project. Add up the cash needed to deliver the base promise and add a contingency. Then take away money you already hold and divide by the share of pledges left after fees.",
        "The calculator further down this page uses exactly those steps, so you can swap in your own numbers. The example below uses its default inputs. The goal ends up higher than the cash need because fees come off every pledge, including the ones that only just get you over the line.",
      ],
      takeaway: "Your Kickstarter funding goal is the cash need plus a contingency, minus money you hold, divided by what pledges keep after fees. That is why the goal always lands above the cash need.",
    },
    minimum: {
      paragraphs: [
        "Write down what the campaign promises before you enter a target. Keep optional upgrades outside the base promise until their cost is known, then price them with the [reward pricing guide](/guides/board-game-kickstarter-reward-pricing).",
        "Kickstarter says the goal should cover completing the project and its associated costs. You cannot change the goal or deadline after launch. So treat the target as a production decision first.",
        "That is also why there is no universal realistic goal for a first board game. Yours comes from the smallest print run quote you can actually buy, plus shipping, fees and a reserve.",
        "For every other line in a first launch budget, from art to ads, see [how much it costs to launch a board game on Kickstarter](/guides/board-game-kickstarter-cost).",
      ],
      visuals: [
        {
          kind: "tips",
          title: "The base promise is the smallest version you can deliver",
          tips: [
            {label: "Card game", text: "One finished deck, its box and a printed rules sheet."},
            {label: "Miniature game", text: "The same, plus tooling, trays and specialist packing."},
            {label: "Optional upgrades", text: "Keep them outside the base promise until their cost is known."},
            {label: "Backer check", text: "Then check whether your launch plan can realistically reach the number of backers the goal needs."},
          ],
          caption: "Examples of a base promise. Your own list comes from your rewards and quotes.",
        },
      ],
      takeaway: "A realistic Kickstarter funding goal for a board game starts from the smallest version you can deliver, not from what other campaigns raised.",
    },
    costs: {
      takeaway: "Count the full factory minimum, not just the pledged copies, and keep shipping money on its own line so it is never counted twice.",
    },
    fees: {
      paragraphs: [
        "Fees are an easy line to add too late. Kickstarter's fee page lists a 5% platform fee on total funds raised.",
        "US payment processing adds 3% and $0.20 per pledge, with a discounted rate for pledges under $10. Fees apply only when a project funds.",
        "Because the fees come off the total raised, we divide the cash need by what remains instead of adding fees as one flat line. If postage is charged inside the pledge, it is part of that total too. So a goal that exactly equals your costs leaves you short.",
      ],
      visuals: [
        {
          kind: "stats",
          title: "Kickstarter's US fees take 8% plus $0.20 from each funded pledge",
          stats: [
            {value: "5%", label: "Platform fee", note: "On total funds raised"},
            {value: "3% + $0.20", label: "US payment processing", note: "Per pledge, with a discounted rate under $10"},
            {value: "$0", label: "Fees if the project does not fund", note: "Fees apply only when a project funds"},
          ],
          source: "Kickstarter fees",
        },
      ],
      takeaway: "Divide your cash need by what is left after fees rather than adding fees as a flat line. A goal that only equals your costs will leave you short.",
    },
    example: {
      paragraphs: [
        "This invented USD example uses one reward and assumes all stated costs are complete. It is not a platform fee quote or an industry benchmark.",
        "A $60 reward has $30 in variable production and fulfillment costs. Add an assumed 8% payment and platform allowance of $4.80 and $6 in acquisition costs. That leaves $19.20 toward fixed costs and the reserve.",
        "If the fixed cost and reserve requirement is $9,600, the example needs 500 successfully collected pledges, because $9,600 divided by $19.20 is 500. The matching gross pledge total is $30,000.",
        "Replace every input with your quotes, fee schedule and reward mix, then add any minimum order stock the example leaves out. The $6 acquisition line comes from your ad plan, which the [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) walks through.",
      ],
      takeaway: "What each reward leaves after its own costs decides how many backers the goal needs. Divide the fixed requirement by that contribution.",
    },
    "stress-test": {
      paragraphs: [
        "We always run a second version before a goal is final. If the goal works only when almost everyone buys the most profitable bundle, it needs another review.",
        "Cash timing matters too. A campaign can look affordable on paper while a supplier deposit falls due before collected funds arrive.",
        "Work through the short list first, then run the decision path after it in order before you approve the number.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Run the stress test before the funding goal is final",
          start: "First version of the funding goal",
          nodes: [
            {question: "Does the goal still work with fewer deluxe pledges?", yes: "Next, test a worse shipping mix", no: "Review the reward mix, because the goal leans on one bundle"},
            {question: "Does it survive a more expensive shipping mix and some failed collections?", yes: "Next, test the factory order", no: "Revise the goal with the worse inputs"},
            {question: "Does it cover the smallest factory order you can buy, unsold stock included?", yes: "Next, check cash timing", no: "Add the bought but unsold quantities and recalculate"},
            {question: "Do you know who funds supplier deposits before the payout?", yes: "Record where that money comes from", no: "Find it first, because a future preorder window is not money you hold"},
            {question: "Is the contribution per reward above zero?", yes: "The numbers hold under pressure", no: "Stop and revise before launch"},
          ],
          end: "The goal is ready to approve",
          caption: "Guildframe's stress test order. Use your own quotes and fee schedule at each step.",
        },
      ],
      takeaway: "A board game funding goal is ready when it survives worse inputs, not when it fits the best case.",
    },
    handoff: {
      paragraphs: [
        "Once the goal is set, everyone working on the launch needs the same numbers. Share the same reward names, prices and contents with the designer, advertising lead and production team. Keep a dated budget version with the approved page brief, and recalculate before publishing if a component, box size or shipping promise changes.",
        "This is where we come in. Our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) turn a confirmed offer into a launch plan, prelaunch and campaign page.",
        "The [campaign design cost guide](/guides/board-game-kickstarter-campaign-design-cost) shows how the creative fee fits your budget. Bring supplier quotes and the decisions still open, because a polished page cannot settle missing manufacturing numbers.",
      ],
      takeaway: "Approve one dated budget and share it with the designer, ad lead and production team, so every page and ad uses the same numbers.",
    },
  },
};

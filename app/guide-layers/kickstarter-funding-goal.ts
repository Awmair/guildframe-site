import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "rules": {
      paragraphs: [
        "Kickstarter funding is all or nothing. If the campaign ends short of the goal, backers are not charged and you receive nothing. If it succeeds, pledges are collected and you have to deliver every reward, whatever the total.",
        "Once you launch, you cannot change the funding goal or the deadline. Kickstarter's own guidance is that the goal should cover what you need to complete the project, including its fees, not what you hope to raise. It also notes that the larger the goal, the lower the success rate.",
        "Put together, those rules point one way. The goal is the smallest amount that lets you deliver, worked out before launch and checked against the audience you have. Our guide on [how to launch a Kickstarter campaign](/guides/how-to-launch-a-kickstarter-campaign) shows where the goal sits in the full plan.",
      ],
      visuals: [
        {
          kind: "stats",
          title: "Four Kickstarter rules make the funding goal a fixed promise",
          stats: [
            {value: "All or nothing", label: "Miss the goal and you receive nothing", note: "Backers are not charged and Kickstarter takes no fees"},
            {value: "Locked", label: "Goal and deadline after launch", note: "Neither can be changed once the campaign is live"},
            {value: "Every reward", label: "Has to be delivered if you fund", note: "Whatever the final total"},
            {value: "14 days", label: "Of pledge collection before payout", note: "Calendar days after the deadline"},
          ],
          source: "Kickstarter Help Center",
        },
      ],
      takeaway: "Your Kickstarter funding goal cannot change after launch, and funding is all or nothing. Set it at the smallest amount that lets you deliver every reward, including fees.",
    },
    "need": {
      paragraphs: [
        "Start from the cost of fulfilling every reward at the funding goal itself, not at a hoped for total. The biggest line is usually the minimum order: the factory minimum for a product, the print run for a book or the minimum for a game.",
        "If the minimum is larger than the number of backers at your goal, the unsold units still have to be paid for. Our guide to [manufacturing quotes before Kickstarter](/guides/manufacturing-quotes-before-kickstarter) shows how to get a minimum order and landed cost you can rely on.",
        "Leave out money already spent, such as the prototype, unless you need it back to deliver. Kickstarter collects and processes pledges for 14 calendar days after the deadline before paying out, so also note which bills arrive before the payout.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four checks stop the need from coming out too low",
          tips: [
            {label: "Cost it at the goal", text: "Work out what every reward costs at the funding goal, not at the total you hope to reach."},
            {label: "Pay for the whole minimum order", text: "If the minimum is bigger than your backer count at the goal, the unsold units still go in the need."},
            {label: "Leave out sunk costs", text: "Money already spent, such as the prototype, stays out unless you need it back to deliver."},
            {label: "Time the bills", text: "Payout comes after 14 calendar days of pledge collection, so note any bill due before then."},
          ],
          source: "Kickstarter Help Center, receiving funds",
        },
      ],
      takeaway: "The need behind a Kickstarter funding goal is your full minimum order, tooling, packaging, freight, fulfillment, certification and a reserve. Cost it at the goal, not at a hoped for total.",
    },
    "fees": {
      takeaway: "Add Kickstarter fees on top of your need by dividing it by the share you keep. With a $75 average pledge on a US project, you keep about 91.7%.",
    },
    "backers": {
      paragraphs: [
        "Divide the goal by your average pledge to get the number of backers you need. In the example, $22,000 at $75 is 294 backers.",
        "Then ask whether your email list, followers and community can plausibly bring that many people. Our guide on [followers before launch](/guides/kickstarter-followers-before-launch) uses published conversion figures to test it.",
        "It also helps to know that most successful campaigns are small. In TCF's sample from the first quarter of 2026, the median successful Kickstarter raised $7,060, against an average of $64,567 pulled up by a few very large projects. A modest goal that you can deliver is normal.",
        "If the backer count looks out of reach, the answer is not a lower goal on paper. Change the plan: a smaller minimum order, fewer reward options, a longer prelaunch or a higher average pledge through a bundle. Our guide to [pricing Kickstarter rewards for a physical product](/guides/kickstarter-reward-pricing-physical-products) covers bundles.",
      ],
      visuals: [
        {
          kind: "bars",
          title: "The median successful Kickstarter raised $7,060, far below the average",
          bars: [
            {label: "Median successful campaign", value: 7060, display: "$7,060", highlight: true},
            {label: "Average successful campaign", value: 64567, display: "$64,567"},
          ],
          caption: "A few very large projects pull the average up. Most successful campaigns are small.",
          source: "TCF Q1 2026 crowdfunding report",
        },
        {
          kind: "flow",
          title: "Three questions tell you whether a funding goal is ready to launch",
          start: "You have a goal and the backer count it needs",
          nodes: [
            {question: "Does the goal cover the full need after fees?", yes: "Go on to the audience check", no: "Raise it, because a funded campaign must deliver every reward even at a loss"},
            {question: "Can your email list, followers and community plausibly bring that many backers?", yes: "Go on to the final check", no: "Change the plan: a smaller minimum order, fewer rewards, a longer prelaunch or a bundle"},
            {question: "Is the plan settled before launch day?", yes: "Ready to launch", no: "Settle it first, because the goal and deadline cannot change after launch"},
          ],
          end: "Launch with that goal",
          caption: "Lowering the goal on paper is never the fix for a backer count that looks out of reach.",
        },
      ],
      takeaway: "Divide your Kickstarter goal by the average pledge to get the backers you need. If that number is out of reach, change the plan, not the goal.",
    },
    "by-category": {
      paragraphs: [
        "The method is the same in every category. What changes is the biggest number in the need, as the comparison below shows.",
        "Tabletop creators can use the calculator in our [board game funding goal guide](/guides/board-game-kickstarter-funding-goal). Product creators will find every other budget line in our [product campaign cost guide](/guides/kickstarter-campaign-cost).",
      ],
      visuals: [
        {
          kind: "compare",
          title: "The biggest number in the need depends on what you are making",
          columns: [
            {name: "Everyday product", points: ["Factory minimum", "Tooling", "Any certification"]},
            {name: "Tabletop game", points: ["Factory minimum", "Freight on a heavy box"]},
            {name: "Book", points: ["The print run", "Set by page count, format and binding"]},
          ],
          caption: "The method stays the same: need, divided by the share you keep, checked against backers.",
        },
      ],
      takeaway: "Every Kickstarter funding goal uses the same method. For a product the biggest line is usually the factory minimum and tooling, for a game the minimum and freight, and for a book the print run.",
    },
    "mistakes": {
      takeaway: "Most Kickstarter funding goal mistakes come from aiming at a hoped for total, leaving out fees or forgetting unsold units. Check the backer count before spending on ads.",
    },
    "help": {
      takeaway: "If you miss your Kickstarter goal, nobody is charged and you can relaunch as a new project. We set the goal with you as part of full campaign support at $5,900.",
    },
  },
};

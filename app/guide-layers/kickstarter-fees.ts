import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "platform-fee": {
      visuals: [
        {
          kind: "flow",
          title: "Three questions tell you which Kickstarter fee applies to a pledge",
          start: "A backer pledges to your project",
          nodes: [
            {question: "Did the project reach its funding goal?", yes: "Go on to the pledge size", no: "No fees at all, because Kickstarter only charges funded projects"},
            {question: "Is the pledge $10 or more?", yes: "Go on to the country check", no: "Processing drops to the micropledge rate of 5% plus $0.05, on top of the 5% fee"},
            {question: "Is it a US project?", yes: "Go on to the US rate", no: "Check your country's processing rate on Kickstarter's fee page"},
          ],
          end: "5% platform fee plus 3% and $0.20 per pledge for processing",
          source: "Kickstarter fee page, checked November 25, 2026",
        },
      ],
      takeaway: "Kickstarter fees are 5% of the total raised plus payment processing, which is 3% plus $0.20 per pledge in the US. A project that misses its goal pays nothing.",
    },
    "small-pledges": {
      paragraphs: [
        "The fixed part of the processing fee matters more as the pledge gets smaller. That shows up quickly in tabletop, where PDF tiers, $1 supporter pledges and print and play rewards sit beside the main box.",
        "Here is the math on the US schedule. A $1 supporter pledge loses $0.15, or 15%. A $5 PDF pledge pays $0.25 in platform fee and $0.30 in processing, so $0.55 or 11% goes to fees.",
        "A $40 core game pays $3.40, or 8.5%, and a $100 deluxe pledge pays $8.20, or 8.2%.",
        "None of this means you should drop low tiers, because a digital tier can bring in backers who upgrade later. It does mean a PDF or print and play price should carry its share of fees. A boxed reward carries its manufacturing cost the same way.",
      ],
      takeaway: "Small pledges lose a bigger share to Kickstarter fees: 15% on a $1 pledge against about 8% on a $100 one. Price digital tiers with the fee inside them.",
    },
    "worked-example": {
      paragraphs: [
        "A whole campaign makes the numbers easier to picture. This is an illustrative example, not a quote. 1,000 backers each pledge $40 for the core game on a US project, shipping is collected later, and every pledge collects.",
        "The project raises $40,000. Kickstarter's 5% platform fee is $2,000. Processing at 3% plus $0.20 per pledge is $1,200 plus $200, so $1,400.",
        "Total fees come to $3,400, and the payout before anything else is $36,600.",
        "That $36,600 still has to pay for manufacturing, freight, fulfillment, the reserve and any ad spend. So if your production quote alone was close to $40,000, the campaign funded at a loss before the first box shipped.",
        "We put this line in every launch budget we build, because it is easy to leave out when a goal is set straight from a factory quote.",
      ],
      takeaway: "In this example, Kickstarter fees take $3,400 of a $40,000 campaign. Never set the goal straight from a factory quote, or you can fund at a loss.",
    },
    "after-campaign": {
      paragraphs: [
        "Fees don't stop when the campaign clock reaches zero. Money you collect afterwards through late pledges or a pledge manager carries fees too, and tabletop projects often collect a lot there.",
        "Kickstarter says late pledges pay the same fees as campaign pledges. That is a 5% fee plus payment processing, which in the US is 3% and $0.20 per pledge. The cards below cover the rest.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four fee rules that apply after the campaign ends",
          tips: [
            {label: "Decide on late pledges before launch", text: "They have to be switched on while the project is in draft or still live, and can't be turned on after it ends."},
            {label: "Pledge manager payments carry fees", text: "Kickstarter's pledge manager has no upfront cost, but its usual fees come off shipping, upgrades and extra items paid inside it."},
            {label: "Third party tools add their own charges", text: "If you use another pledge manager, read its current pricing page and add its charges on top."},
            {label: "Shipping is part of the fee base", text: "Shipping collected during the campaign counts toward your goal, so it is also part of the total fees come from."},
          ],
          source: "Kickstarter Help Center, late pledges and Pledge Manager articles",
        },
      ],
      takeaway: "Late pledges and pledge manager payments pay the same Kickstarter fees as campaign pledges. Price shipping and upgrades with the fees already included.",
    },
    "vat": {
      paragraphs: [
        "Tax is not a Kickstarter fee, but it changes what you keep from each pledge, so it belongs in the same budget.",
        "Since April 13, 2026, creators choose how VAT is handled in Kickstarter's pledge manager. You can let Kickstarter collect and remit VAT for you, or handle VAT yourself with your own systems. If you go independent, VAT setup requirements such as tax IDs are removed, and projects with VAT inclusive pricing can now use the pledge manager.",
        "Kickstarter still collects and remits applicable taxes for the US and Canada where required. Which VAT route suits you depends on where you are registered and where you ship, and that is a question for your accountant.",
        "We make sure the reward prices on the page say clearly whether VAT is included. Then backers in the UK and EU are not surprised at checkout.",
      ],
      takeaway: "Since April 13, 2026, you choose whether Kickstarter handles VAT in the pledge manager. Either way, say clearly on the page whether reward prices include VAT.",
    },
    "tariffs": {
      paragraphs: [
        "If your game is made overseas and ships to US backers, import costs can change between the campaign and fulfillment. Kickstarter's Tariff Manager gives you a way to pass that cost on openly.",
        "Accepted creators can add a tariff surcharge to each item in Kickstarter's pledge manager. It only applies to backers with a US shipping address.",
        "Backers see the total surcharge at checkout and on their order confirmation. A backer who won't pay contacts you to adjust the pledge, take a refund or agree another option.",
        "You request access through a banner on the pledge manager page, and Kickstarter decides whether to enable it for your project.",
        "Because Kickstarter deducts its usual fees from payments made in its pledge manager, we plan as if a surcharge carries those fees too, then confirm with Kickstarter support. We also price the surcharge from your freight forwarder's current quote, because import rules can change between launch and delivery.",
      ],
      takeaway: "The Tariff Manager adds a per item surcharge for US backers in Kickstarter's pledge manager. Plan as if the surcharge carries the usual fees.",
    },
    "funding-goal": {
      takeaway: "Set your Kickstarter goal by dividing what you need after fees by the share you keep. A $30,000 need becomes a goal of about $32,800 in the example.",
    },
    "budget": {
      paragraphs: [
        "Fees are the easiest cost in a launch to calculate, which is exactly why they shouldn't be the one that surprises you. For every other line in a first launch budget, from art to shipping, see [how much it costs to launch a board game on Kickstarter](/guides/board-game-kickstarter-cost).",
        "When we plan a launch, one sheet holds the goal, the reward prices, the fees and the ad budget. A change to one then shows up in the others. You can do this yourself with the rates above and a spreadsheet.",
        "What it really costs you is time, because checking country rates, pledge manager costs, VAT and tariff options takes hours you may want to spend on the game.",
        "If you'd like that work done with you, our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover the budget, the funding goal and the campaign page around them. Ad spend is a separate line again, and our [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to size it.",
        "Whichever way you plan it, check these lines are in the sheet before you set the goal:",
      ],
      takeaway: "Put every Kickstarter fee in one budget sheet with the goal and reward prices: platform fee, processing, late pledges, pledge manager, VAT and tariffs.",
    },
  },
};

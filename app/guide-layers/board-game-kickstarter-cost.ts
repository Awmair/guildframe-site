import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-answer": {
      paragraphs: [
        "Launching a board game on Kickstarter costs money twice. First you pay for everything that gets the game ready to show, out of your own pocket, before a single pledge arrives.",
        "Then, if the campaign funds, the pledges pay for making and delivering the game, after Kickstarter and the payment partners take their share. Most first time creators budget for the second part, usually just the printing quote, and get surprised by the first.",
        "That's why we split every launch budget into two columns. This guide walks through each line in plain terms and links to the guide that goes deeper on it.",
        "If you'd like the whole journey first, start with [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter). Once you see both budgets side by side, the goal and the date get much easier to judge.",
      ],
      takeaway: "The cost to launch a board game on Kickstarter comes in two budgets: your own money before launch, and backer money after funding. Plan both before you set a goal.",
    },
    "before-launch": {
      takeaway: "Your before launch budget is prototypes, art, reviewer copies, the page and video, and prelaunch marketing. You pay all of it even if the Kickstarter campaign misses.",
    },
    "before-launch-amounts": {
      paragraphs: [
        "People often ask us for one number here, and an honest answer has to start with your game. A small card game with your own art and a phone video can cost very little before launch. A miniatures game with sculpts and renders costs far more.",
        "So we price each line for the actual game, with real quotes where we can get them.",
      ],
      takeaway: "Write down every before launch line, put a number next to it, and add them up before you pick a launch date.",
    },
    "from-funding": {
      paragraphs: [
        "The second budget is paid from what backers pledge, so it only matters if you fund. It's also the bigger one, and it has far more lines than the printing quote.",
        "Kickstarter's June 2026 guide to why campaigns fail after funding lists the costs that add up fast: shipping, customs, duties, packaging and per order handling. It also warns that you lose a few more percentage points to expired cards, cancellations and the occasional refund.",
        "Here is what that looks like with real fee rates. In this illustrative example, 750 backers pledge $40 each on a US project, so the campaign raises $30,000. Fees take about $2,550, and a 20% reserve keeps back $6,000.",
        "That leaves about $21,450 to make, ship and deliver every game. Shipping deserves its own planning, so read our guide to the [shipping and delivery section of your page](/guides/kickstarter-shipping-delivery-page) before you price rewards.",
        "If you make the game overseas and ship to US backers, our guide to [board game tariffs and US shipping](/guides/board-game-tariffs-shipping-us) covers import costs. Kickstarter also notes that overseas manufacturing usually takes about twelve months from campaign end to the last delivery, so leave room for a year of change.",
      ],
      takeaway: "Pledges are not profit. After fees and a reserve, a $30,000 example campaign has about $21,450 left to make, ship and deliver the board game.",
    },
    "fees": {
      takeaway: "Kickstarter fees are 5% plus payment processing, about 8 to 10 percent in total. Plan on losing roughly a tenth of every pledge.",
    },
    "marketing": {
      paragraphs: [
        "Marketing is the line first timers most often set at zero, and it often decides whether day one is busy. Some of it costs time rather than money: posting the game, joining communities and sending copies to reviewers.",
        "Ads are different, because every backer they bring has a price. Kickstarter's tabletop marketing guide says one backer won through ads can cost $15 to $50. It adds that successful campaigns often aim for a 2.5x return on ad spend.",
        "So test small, and only once the page is ready to turn visitors into backers. Our [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to size ads for your price point.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Ads only pay back once the page is ready and the price can carry them",
          start: "You have money set aside for ads",
          nodes: [
            {question: "Is the campaign page ready to turn visitors into backers?", yes: "Go on to the next check", no: "Fix the page first, because ads multiply a page that works"},
            {question: "Can your reward price carry a cost of $15 to $50 per backer?", yes: "Go on to the next check", no: "Lean on free channels: communities, reviewers and email"},
            {question: "Have you run a small test and read the results?", yes: "Go on to scaling", no: "Run a small test before you spend the full budget"},
          ],
          end: "Scale spend while the return holds near 2.5x ad spend",
          caption: "The $15 to $50 range and the 2.5x return target come from Kickstarter's tabletop marketing guide.",
          source: "Kickstarter blog, How to market a tabletop game in 7 steps (February 20, 2025)",
        },
      ],
      takeaway: "Ads multiply a campaign page that already works. Fund board game ads after the page is ready, not instead of it, and test small first.",
    },
    "help": {
      paragraphs: [
        "You don't have to hire anyone to launch on Kickstarter, and plenty of first games are built by the creator alone. If you do want help, compare published fixed prices rather than vague quotes.",
        "Our own prices are public. The campaign page package is $1,800. Full campaign support is $5,900 and covers the prelaunch page and emails, the campaign page, ad creative and paid advertising, live campaign checks and the final handoff.",
        "Ad spend, software, platform fees and production are separate. For comparison, BoostYourCampaign publishes full marketing packages at $3,499 to $6,997 flat in its 2026 pricing guide.",
        "Our guides to [Kickstarter agency cost](/guides/kickstarter-agency-cost) and [campaign design cost](/guides/board-game-kickstarter-campaign-design-cost) compare pricing models and what a fair quote includes. Whoever you choose, put the fee in the before launch column, because the work happens before the campaign money arrives.",
      ],
      takeaway: "Hiring help is optional. If you hire, compare published fixed prices and count the fee as a before launch cost.",
    },
    "small-budget": {
      takeaway: "On a small budget, save on testing prototypes, extra tiers and video gear. Never cut final cover art, real quotes or the reserve.",
    },
    "profit": {
      takeaway: "Treat profit on a first board game Kickstarter as a bonus. The real goal is to fund the print run without a loss, so build the reserve into the goal.",
    },
    "your-budget": {
      paragraphs: [
        "You can build this budget yourself in an afternoon with a spreadsheet and two columns. The cards below show how we would start it.",
        "Where a solo budget falls short is experience, because a first budget can't flag the lines you didn't know existed. When we plan a launch with you, the budget, goal, reward prices and page are built together, so a change in one shows up in the others.",
        "That's what our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover. Manufacturing, shipping and ad spend stay yours, and we don't give tax advice.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four habits that make a first Kickstarter budget honest",
          tips: [
            {label: "Use two columns", text: "One for before launch costs you pay yourself, one for costs paid from the funding."},
            {label: "Price what you can today", text: "Fill in every line you can price now with a real number."},
            {label: "Mark the rest as a question", text: "A visible question mark is safer than a guess that looks finished."},
            {label: "Quote the biggest lines first", text: "Manufacturing, freight and fulfillment move the total most, so get those quotes early."},
          ],
        },
      ],
      takeaway: "A board game Kickstarter budget is ready when every line has a quote or a number. Add the fees and reserve, then set the goal from the total.",
    },
  },
};

import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "board-game-kickstarter-cost",
  title: "How Much Does It Cost to Launch a Board Game on Kickstarter?",
  seoTitle: "Board Game Kickstarter Cost: What You Pay",
  description: "How much it costs to launch a board game on Kickstarter, line by line. What you pay before launch, what comes out of the funding and where to save.",
  tag: "Budget planning",
  answer: "Launching a board game on Kickstarter costs money in two stages. Before launch you pay for prototypes, art, reviewer copies, the page and early marketing yourself, and after funding the pledges pay for manufacturing, shipping, fulfillment, fees of 8 to 10 percent and a reserve that Kickstarter suggests starting at 20 to 30 percent.",
  relatedSlugs: ["kickstarter-fees", "board-game-kickstarter-funding-goal", "kickstarter-advertising-budget-board-games", "kickstarter-agency-cost"],
  servicePath: "/kickstarter-launch-services",
  serviceLabel: "Kickstarter launch services for tabletop games",
  sources: [
    { label: "Kickstarter fees for creators", publisher: "Kickstarter", href: "https://www.kickstarter.com/help/fees" },
    { label: "Why Kickstarter campaigns fail after funding, and how to avoid it (June 3, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/why-kickstarter-campaigns-fail-after-funding-and-how-to-avoid-it/" },
    { label: "How to market a tabletop game in 7 steps (February 20, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps/" },
    { label: "Crowdfunding marketing agency cost: an honest buyer's guide (2026)", publisher: "BoostYourCampaign", href: "https://www.boostyourcampaign.com/kickstarter-marketing/kickstarter-marketing-agency-pricing-2026" },
    { label: "Guildframe launch services and packages", publisher: "Guildframe", href: "/kickstarter-launch-services" },
  ],
  sections: [
    {
      id: "short-answer",
      title: "The short answer: you need two budgets",
      paragraphs: [
        "Launching a board game on Kickstarter costs money twice. First you pay for everything that gets the game ready to show, out of your own pocket, before a single pledge arrives.",
        "Then, if the campaign funds, the pledges pay for making and delivering the game, after Kickstarter and the payment partners take their share. Most first time creators budget for the second part, usually just the printing quote, and get surprised by the first.",
        "That's why we split every launch budget into two columns. This guide walks through each line in plain terms and links to the guide that goes deeper on it. If you'd like the whole journey first, start with [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter). Once you see both budgets side by side, the goal and the date get much easier to judge.",
      ],
      visual: {
        kind: "compare",
        title: "One budget is your money, the other comes from backers",
        columns: [
          { name: "Before launch", points: ["Prototypes and playtesting", "Art for the cover and key pieces", "Reviewer copies and postage", "Campaign page and video", "Prelaunch email and ad tests"], verdict: "Paid even if the campaign misses" },
          { name: "After funding", points: ["Kickstarter and payment fees", "Manufacturing and samples", "Freight, duties and tariffs", "Fulfillment and packaging", "A reserve for surprises"], verdict: "Paid from the money you raise", highlight: true },
        ],
        caption: "The cost lines most board game launches carry. Amounts depend on your game, so price each one yourself.",
      },
    },
    {
      id: "before-launch",
      title: "What you pay before launch",
      paragraphs: [
        "The first budget decides whether you can try at all, because nobody has pledged yet. These are the lines most board games need:",
      ],
      list: [
        "Prototypes and playtesting: a rough playable copy early, then a better one to photograph. Kickstarter's own tabletop marketing guide says to make the first one as quickly and sloppily as possible.",
        "Art: enough finished art to show the look, usually the cover and a few key components. Our guide on [whether your game is ready](/guides/is-my-game-ready-for-kickstarter) covers how much is enough.",
        "Reviewer and preview copies, plus the postage to send them. Our [reviewer outreach guide](/guides/board-game-reviewer-outreach) explains who to send them to.",
        "The campaign page and video, whether you make them yourself or hire help.",
        "Prelaunch marketing: email software, a signup page and any small ad tests.",
      ],
      source: 2,
    },
    {
      id: "before-launch-amounts",
      title: "Why we don't quote an average for these lines",
      paragraphs: [
        "People often ask us for one number here, and an honest answer has to start with your game. A small card game with your own art and a phone video can cost very little before launch. A miniatures game with sculpts and renders costs far more.",
        "So we price each line for the actual game, with real quotes where we can get them. The takeaway is simple: write down every before launch line, put a number next to it, and add them up before you pick a date.",
      ],
    },
    {
      id: "from-funding",
      title: "What comes out of the funding",
      paragraphs: [
        "The second budget is paid from what backers pledge, so it only matters if you fund. It's also the bigger one, and it has far more lines than the printing quote.",
        "Kickstarter's June 2026 guide to why campaigns fail after funding lists the costs that add up fast: shipping, customs, duties, packaging and per order handling. It also warns that you lose a few more percentage points to expired cards, cancellations and the occasional refund.",
        "Here is what that looks like with real fee rates. In this illustrative example, 750 backers pledge $40 each on a US project, so the campaign raises $30,000. Fees take about $2,550, and a 20% reserve keeps back $6,000. That leaves about $21,450 to make, ship and deliver every game.",
        "Shipping deserves its own planning, so read our guide to the [shipping and delivery section of your page](/guides/kickstarter-shipping-delivery-page) before you price rewards. If you make the game overseas and ship to US backers, our guide to [board game tariffs and US shipping](/guides/board-game-tariffs-shipping-us) covers import costs. Kickstarter also notes that overseas manufacturing usually takes about twelve months from campaign end to the last delivery, so build your numbers with room for a year of change.",
      ],
      source: 1,
      visual: {
        kind: "split",
        title: "Example: a $30,000 campaign leaves about $21,450 to make and ship the game",
        total: "Example: 750 backers at $40 = $30,000 pledged",
        parts: [
          { label: "Left to make, ship and deliver", share: 21450, display: "$21,450" },
          { label: "Reserve for surprises (20%)", share: 6000, display: "$6,000" },
          { label: "Kickstarter and payment fees", share: 2550, display: "$2,550" },
        ],
        caption: "Illustrative example, not an average. Fees use Kickstarter's US rates of 5% plus 3% and $0.20 a pledge. The 20% reserve is the low end of the 20 to 30 percent Kickstarter suggests.",
        source: "Kickstarter fee page and Kickstarter blog (June 3, 2026), checked November 25, 2026",
      },
    },
    {
      id: "fees",
      title: "Kickstarter and payment fees in one line",
      paragraphs: [
        "Fees are the easiest line to work out, so get them right once and move on. Kickstarter charges nothing if your project doesn't fund. If it does, it takes 5% of the total plus payment processing, which in the US is 3% plus $0.20 per pledge.",
        "Kickstarter's own guide puts the platform and payment partners together at 8 to 10 percent of funds. Our guide to [Kickstarter fees](/guides/kickstarter-fees) covers small pledges, late pledges, VAT and tariff surcharges in detail. For your budget, plan on losing about a tenth of every pledge before anything else.",
      ],
      source: 0,
    },
    {
      id: "marketing",
      title: "Marketing and ads",
      paragraphs: [
        "Marketing is the line first timers most often set at zero, and it often decides whether day one is busy. Some of it costs time rather than money: posting the game, joining communities and sending copies to reviewers.",
        "Ads are different, because every backer they bring has a price. Kickstarter's tabletop marketing guide says the cost to win one backer through ads can range from $15 to $50, and that successful campaigns often aim for a 2.5x return on ad spend.",
        "So test small, and only once the page is ready to turn visitors into backers. Our [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to size ads for your price point. The rule we follow is that ads multiply a page that works, so fund them after the page, not instead of it.",
      ],
      source: 2,
    },
    {
      id: "help",
      title: "What help costs if you hire it",
      paragraphs: [
        "You don't have to hire anyone to launch on Kickstarter, and plenty of first games are built by the creator alone. If you do want help, compare published prices rather than vague quotes.",
        "Our own prices are public. Creator Launch is $2,500 and covers the launch strategy, the campaign page and the campaign video, made from the images and videos you provide. Founder Launch is $3,500 and adds branding and a professional website. Ad spend, ad management, prelaunch emails, live campaign management, software, platform fees and production are quoted or paid separately. For comparison, BoostYourCampaign publishes full marketing packages at $3,499 to $6,997 flat in its 2026 pricing guide.",
        "Our guides to [Kickstarter agency cost](/guides/kickstarter-agency-cost) and [campaign design cost](/guides/board-game-kickstarter-campaign-design-cost) compare pricing models and what a fair quote includes. Whoever you choose, put the fee in the before launch column, because the work happens before the campaign money arrives.",
      ],
      source: 3,
    },
    {
      id: "small-budget",
      title: "Launching on a small budget",
      paragraphs: [
        "A tight budget is normal for a first game, and it changes what you do yourself, not whether you can launch. Can you launch a Kickstarter with no money at all? Not really, because the prototype, the art you show and the copies you send all cost something before anyone pledges.",
        "What you can do is spend where backers notice and save where they don't. Here is where we'd save, and where we wouldn't:",
      ],
      list: [
        "Save on a simple prototype for testing, free community channels and a phone video shot in good light.",
        "Save on extra reward tiers and on stretch goals that add components you haven't priced.",
        "Don't cut final art on the cover and key components, because that's what backers judge first.",
        "Don't cut real manufacturer and shipping quotes, because a guess there costs more than anything else.",
        "Don't cut the reserve. It's the line that stops a funded campaign turning into a loss.",
      ],
    },
    {
      id: "profit",
      title: "Will you make a profit on your first campaign?",
      paragraphs: [
        "We usually tell first time creators to treat profit as a bonus. A first campaign's real job is to pay for the print run, build your list and prove people want the game.",
        "Profit comes from two places. One is pricing: if each reward is priced from the full cost of making, shipping and fees, every backer adds a little margin, and our [reward pricing guide](/guides/board-game-kickstarter-reward-pricing) shows how. The other is what comes after, such as late pledges, spare copies and a store for people who missed the campaign.",
        "The real risk is the opposite, funding at a loss. That happens when the goal comes from the printing quote alone. So we plan the reserve into the goal, so it is funded rather than hoped for, and our [funding goal guide](/guides/board-game-kickstarter-funding-goal) walks through that sheet.",
      ],
    },
    {
      id: "your-budget",
      title: "Build your own budget, and where we fit",
      paragraphs: [
        "You can build this budget yourself in an afternoon with a spreadsheet and two columns. Fill in what you can price today, mark the rest as a question, and get quotes for the biggest lines first.",
        "Where a solo budget falls short is experience, because a first budget can't flag the lines you didn't know existed. When we plan a launch with you, the budget, goal, reward prices and page are built together, so a change in one shows up in the others. That's what our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover. Manufacturing, shipping and ad spend stay yours, and we don't give tax advice.",
      ],
      source: 4,
      visual: {
        kind: "steps",
        title: "A budget is ready when every line has a quote or a number",
        steps: [
          { label: "List every before launch cost", detail: "Prototype, art, copies, page, video, prelaunch" },
          { label: "Get real quotes", detail: "Manufacturer, freight and fulfillment" },
          { label: "Add the fees", detail: "Kickstarter puts them at 8 to 10 percent of funds" },
          { label: "Add a reserve", detail: "Kickstarter suggests starting at 20 to 30 percent" },
          { label: "Set the goal from the total", detail: "Then price each reward from it" },
        ],
        source: "Kickstarter fee page and Kickstarter blog (June 3, 2026), checked November 25, 2026",
      },
    },
  ],
  faqs: [
    { question: "How much money do I need to launch a board game on Kickstarter?", answer: "Enough to pay for everything before launch: prototypes, the art you show, reviewer copies, the page, video and early marketing. Manufacturing, shipping and fees come out of the funding if you reach your goal. The amount depends on your game, so price each line yourself." },
    { question: "Can I start a Kickstarter with no money?", answer: "Not really. The prototype, the art you show and the copies you send all cost something before anyone pledges. You can keep that small by doing more yourself, but don't cut final art on the key pieces, real quotes or the reserve." },
    { question: "What costs do first time creators forget?", answer: "Kickstarter's own guide lists shipping, customs, duties, packaging and per order handling, plus a few percentage points lost to expired cards, cancellations and refunds. Before launch, reviewer copies and their postage are easy to miss too." },
    { question: "How much of the funding do I actually keep?", answer: "Kickstarter says it and its payment partners take 8 to 10 percent of funds. In our illustrative example, a $30,000 US campaign at $40 a pledge pays about $2,550 in fees, and a 20% reserve leaves about $21,450 to make and ship the game." },
    { question: "Do I pay Kickstarter anything if I don't reach my goal?", answer: "No. Kickstarter says there are no fees if funding isn't successful. You still carry whatever you spent before launch." },
    { question: "How much should I keep back in case things go wrong?", answer: "Kickstarter's June 2026 guide suggests 20 to 30 percent as a good place to start. We plan the reserve into the goal, so it is funded rather than hoped for." },
    { question: "Is it cheaper to do everything myself?", answer: "It costs less money and more time. Plenty of first games are built by the creator alone. If you compare help, use published prices: ours are $2,500 for Creator Launch and $3,500 for Founder Launch, with ad spend, ad management and production separate." },
  ],
};

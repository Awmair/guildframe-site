import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "kickstarter-vs-gamefound",
  title: "Kickstarter vs Gamefound for Board Games in 2026",
  seoTitle: "Kickstarter vs Gamefound for Board Games in 2026",
  description: "Kickstarter vs Gamefound for board games in 2026: fees, audience, pledge managers, Adfound and Jellop ads, the Indiegogo deal and which one fits your game.",
  tag: "Platform planning",
  servicePath: "/gamefound-launch-services",
  serviceLabel: "Gamefound launch services for tabletop creators",
  answer: "Both platforms take a 5% platform fee, so fees rarely decide it. Pick Kickstarter when your audience reaches beyond hobby gaming or you run your own ads. Pick Gamefound when you sell to tabletop regulars and want stretch goals, late pledges, a pledge manager and ads in one system.",
  relatedSlugs: ["kickstarter-vs-gamefound-campaign-page-design", "gamefound-launch-page-checklist", "pledge-managers-compared", "kickstarter-advertising-budget-board-games"],
  sources: [
    { label: "Kickstarter fees and payment processing", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236674-what-are-the-fees" },
    { label: "Fees for projects funded on Gamefound", publisher: "Gamefound", href: "https://help.gamefound.com/article/284-fees-for-projects-funded-on-gamefound" },
    { label: "Adfound fees and billing", publisher: "Gamefound", href: "https://help.gamefound.com/article/415-adfound-fees-and-billing" },
    { label: "Kickstarter and Jellop", publisher: "Kickstarter", href: "https://updates.kickstarter.com/kickstarter-and-jellop-2/" },
    { label: "Gamefound acquires Indiegogo", publisher: "PR Newswire", href: "https://www.prnewswire.com/news-releases/gamefound-acquires-indiegogo-a-groundbreaking-leap-forward-for-global-creativity-and-creator-empowerment-302511967.html" },
    { label: "Pledge manager and Late Pledge for external campaigns", publisher: "Gamefound", href: "https://help.gamefound.com/article/299-getting-started-with-pledge-manager-and-late-pledge-for-imported-projects" },
  ],
  sections: [
    {
      id: "short-answer",
      title: "Your audience decides more than the platform",
      paragraphs: [
        "Your own audience matters more than the platform you pick. Kickstarter and Gamefound both take 5% of the money you collect, so the choice rests on who your backers are and how you want to run the months after funding.",
        "Kickstarter is a general crowdfunding site, so your game sits beside books, films and gadgets, and people browsing for those can find it too. Gamefound is built for tabletop. Stretch goals, a Late Pledge stage, a pledge manager and its own ad service all live in one system.",
        "We build campaign pages, prelaunch email and paid ads for both platforms, so this guide is about fit rather than loyalty. Start from your backers, then let the platform follow.",
      ],
    },
    {
      id: "fees",
      title: "Fees are almost the same, so look at the extras",
      paragraphs: [
        "Fees are the first thing most creators compare, and the headline numbers are nearly identical. Kickstarter collects a 5% fee on the funds you raise, and its payment processor charges 3% and $0.20 per pledge on top in the US.",
        "Gamefound also takes 5% of the collected amount, plus a payment processing fee on each transaction. Its pledge manager charges nothing for managing pledges you already raised. On new payments collected there, it takes 5% plus processing of 3% and 0.2 per transaction in your project currency, which Gamefound gives as $0.2 when the project currency is dollars.",
        "Kickstarter's own Pledge Manager uses the same fees as a successful project. That means 5% on all funds except taxes, with card processing charged on the full payment, tax included.",
        "So the real money differences sit elsewhere, in ad service fees and in how much you sell after the campaign. Model those with your own reward prices before you call either platform cheaper.",
      ],
      visual: {
        kind: "stats",
        title: "Both platforms take the same 5% platform fee",
        stats: [
          { value: "5%", label: "Kickstarter platform fee", note: "On funds collected, plus US processing of 3% + $0.20 per pledge" },
          { value: "5%", label: "Gamefound platform fee", note: "On the collected amount, plus processing per transaction" },
          { value: "5%", label: "Kickstarter Pledge Manager", note: "On all funds except taxes, plus processing" },
          { value: "5% + 3%", label: "Gamefound pledge manager", note: "On new payments only, plus 0.2 per transaction in project currency" },
        ],
        source: "Kickstarter and Gamefound fee pages, checked November 25, 2026",
      },
      source: 0,
    },
    {
      id: "audience",
      title: "Audience and discovery work differently",
      paragraphs: [
        "Discovery is where the two platforms feel most different, because they draw from different crowds. Kickstarter puts tabletop inside a much wider site, so a party game or a richly illustrated RPG book can catch people who came for something else.",
        "Gamefound's crowd is tabletop players by design. In its July 2025 announcement, Gamefound said it raised over $165 million for board games in 2024 and grew over 70% year over year. It also said it hosted 8 of the year's 10 biggest board game campaigns.",
        "Those are company figures, and the biggest campaigns come from established publishers with large mailing lists. A first time creator does not inherit that audience just by launching there. On either platform, launch day depends on the followers and email subscribers you bring with you.",
        "That's why we plan prelaunch audience work before we talk about platform choice. The platform's own traffic is a bonus on top of your list, never a replacement for it.",
      ],
      source: 4,
    },
    {
      id: "pledge-manager",
      title: "Pledge managers and late pledges now exist on both",
      paragraphs: [
        "What happens after funding used to be the clearest gap between the two, and it has narrowed. Gamefound runs the whole journey in one system. You crowdfund, open an optional Late Pledge stage, then move to a pledge manager where backers confirm choices, add shipping details and pay what is still owed.",
        "The Late Pledge stage takes new pledges after funding, before shipping costs are set. You can skip it and go straight to the pledge manager, which you launch once shipping is set up. Gamefound also accepts campaigns funded on other platforms into its pledge manager after a review.",
        "Kickstarter now has Late Pledges and its own Pledge Manager, priced like the campaign itself. You can also use a separate tool such as BackerKit or PledgeBox. Our [pledge manager comparison](/guides/pledge-managers-compared) sets all four side by side, with the fees each one publishes.",
        "So a Kickstarter launch no longer forces a second platform after funding, and a Gamefound launch keeps everything under one login. Choose the route your fulfillment partner can work with.",
      ],
      source: 5,
    },
    {
      id: "ads",
      title: "Adfound, Jellop or your own Meta ads",
      paragraphs: [
        "Paid ads are often where most of a campaign's marketing budget goes, so the ad route deserves as much thought as the platform. Each platform has a managed option, and you can always run ads yourself.",
        "Adfound is Gamefound's ad service, and its fee is a share of the revenue attributed to your ads. A dedicated campaign costs nothing in the Upcoming phase and 5% during crowdfunding, Late Pledge and pledge manager. Catalog campaigns cost 15%.",
        "Adfound measures Meta results on a seven day click and one day view window, and it sets the final fee seven days after the campaign ends. That window decides how much revenue counts as ad driven, so read it before you compare percentages.",
        "On Kickstarter, the ad partner is Jellop, an outside agency Kickstarter works with to run digital ad campaigns. Kickstarter says Jellop charges a percentage of revenue directly attributable to its work, with no upfront or setup fees. It also says Jellop suits experienced creators raising over $20,000, with a strong video and an average order of $100 or more.",
        "Running your own Meta ads means you pay the ad spend and do the work, but you keep the ad account, the audiences and every lesson from the creative tests. That's the route we run for clients, with spend limits you approve and reporting you can check yourself.",
      ],
      table: {
        headers: ["Route", "How it is paid", "Best fit"],
        rows: [
          ["Adfound on Gamefound", "5% of attributed revenue while live, 15% for catalog campaigns", "Gamefound creators who want ads run inside the platform"],
          ["Jellop on Kickstarter", "A percentage of attributed revenue, no upfront fees", "Experienced creators raising over $20,000 with average orders of $100 or more"],
          ["Your own Meta ads", "Ad spend plus your time or a specialist's fee", "Creators who want to keep the data and test their own creative"],
        ],
      },
      source: 2,
    },
    {
      id: "indiegogo",
      title: "What Gamefound buying Indiegogo means for you",
      paragraphs: [
        "Gamefound announced its purchase of Indiegogo on July 24, 2025, and creators still ask what it changes. By the companies' own figures, Indiegogo brings a community of 38 million members and nearly $3 billion in historical funding.",
        "Gamefound said it will continue as a dedicated tabletop platform, and that Gamefound campaigns will be featured on Indiegogo for extra exposure. That is a stated plan, not a published traffic number for tabletop projects.",
        "Our honest read is that this makes Gamefound a bigger company with a wider reach. It does not yet tell you how many Indiegogo visitors will see your board game. We would not pick Gamefound for this alone, but it is a fair point in its favor over the long run.",
      ],
      source: 4,
    },
    {
      id: "which-to-pick",
      title: "Which platform fits your game and experience",
      paragraphs: [
        "Genre and experience are the two questions we ask first, because they predict where your backers already are. The comparison below is our working view from planning tabletop launches, not platform data.",
        "Kickstarter tends to fit games with crossover appeal, such as party and family card games, TTRPG books and zines, and licensed worlds whose fans live outside hobby gaming. It also fits creators who already run their own ads or who qualify for Jellop.",
        "Gamefound tends to fit hobby board games, miniatures heavy campaigns and publishers whose backers already have Gamefound accounts. It suits creators who want native stretch goals, Late Pledge and a pledge manager without joining separate tools together.",
        "If this is your first game and your list is small, either can work. Pick the one where you can already point to some of your future backers, then put the saved effort into your page and prelaunch.",
        "For a complete beginner, the easier platform is the one with fewer moving parts for your game. Gamefound keeps stretch goals, Late Pledge and the pledge manager under one login, while Kickstarter's wider site can bring in people who came for something else. If Kickstarter itself is new to you, [Kickstarter for beginners](/guides/kickstarter-for-beginners) explains how a campaign works from the creator's side.",
      ],
      visual: {
        kind: "compare",
        title: "Kickstarter suits crossover games, Gamefound suits hobby gamers",
        columns: [
          {
            name: "Kickstarter",
            points: ["Party, family and card games with broad appeal", "TTRPG books, zines and licensed worlds", "Creators running their own Meta ads", "Experienced creators who qualify for Jellop"],
            verdict: "Pick it when your backers live beyond hobby gaming",
          },
          {
            name: "Gamefound",
            points: ["Hobby and strategy board games", "Miniatures heavy campaigns with many add ons", "Publishers whose backers already use Gamefound", "Creators who want late pledges and a pledge manager in one place"],
            verdict: "Pick it when your backers are already tabletop regulars",
          },
        ],
        caption: "Our working view from tabletop launch planning, not platform statistics.",
      },
    },
    {
      id: "checklist",
      title: "Check your answers before you commit",
      paragraphs: [
        "A short checklist keeps the decision honest, because it moves the question from opinion to your own facts. Work through the groups below with your list size, reward prices and fulfillment plan in front of you.",
        "Once you pick, the campaign page needs adapting to that editor. Gamefound separates story and reward sections by campaign stage, while Kickstarter has its own prelaunch page and preview link. Our guide to [Kickstarter vs Gamefound page design](/guides/kickstarter-vs-gamefound-campaign-page-design) covers those differences.",
        "If you want one team to plan the launch, build the page, run the ads and support the live campaign, that is what our [Gamefound launch services](/gamefound-launch-services) cover. The same work applies on Kickstarter, and you keep control of your project settings throughout.",
      ],
      visual: {
        kind: "checklist",
        title: "Audience, money and the months after funding decide the platform",
        groups: [
          { name: "Your audience", items: ["Where do your current followers already back projects?", "Does your game appeal beyond hobby gamers?", "How many email subscribers will see launch day?"] },
          { name: "Your money", items: ["Have you modeled 5% plus processing on your real reward prices?", "Which ad route fits your budget and your need for data?", "Will you sell add ons and late pledges after funding?"] },
          { name: "After the campaign", items: ["Which pledge manager can your fulfillment partner import?", "Who handles surveys, shipping charges and tax?", "Do you want one platform login from launch to delivery?"] },
        ],
      },
    },
  ],
  faqs: [
    { question: "Is Gamefound or Kickstarter better for a first board game?", answer: "Neither is better for every first game. Pick Kickstarter when your audience reaches beyond hobby gaming, and Gamefound when your backers are tabletop regulars. Your own email list matters more than either platform's traffic." },
    { question: "Are Gamefound fees lower than Kickstarter fees?", answer: "Not in any meaningful way. Both take a 5% platform fee plus payment processing. The bigger differences come from ad service fees and pledge manager fees on money raised after the campaign." },
    { question: "Can I fund on Kickstarter and use Gamefound's pledge manager?", answer: "Yes. Gamefound accepts campaigns funded on other platforms into its pledge manager and Late Pledge stages after a review. Ask Gamefound for the fees on your project before you commit." },
    { question: "How much does Adfound cost?", answer: "Adfound charges a share of revenue attributed to your ads. A dedicated campaign is free in the Upcoming phase and 5% during crowdfunding, Late Pledge and pledge manager. Catalog campaigns cost 15%." },
    { question: "Which is easier for a complete beginner?", answer: "The easier platform is the one with fewer moving parts for your game. Gamefound keeps stretch goals, Late Pledge and the pledge manager under one login, while Kickstarter's wider site can bring in people browsing for something else. On either one, launch day still depends on the followers and email subscribers you bring with you." },
    { question: "Did Gamefound buy Indiegogo?", answer: "Yes. Gamefound announced the purchase on July 24, 2025. It said Gamefound continues as a dedicated tabletop platform and that Gamefound campaigns will be featured on Indiegogo for extra exposure." },
    { question: "Can Guildframe run my campaign on either platform?", answer: "Yes. We plan launches, design campaign pages, run prelaunch email and paid ads, and manage live campaigns on Kickstarter and Gamefound. You keep control of your project settings, prices, shipping and publication." },
  ],
};

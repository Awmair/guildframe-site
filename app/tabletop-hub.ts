/*
 * The tabletop wing hub at /tabletop-kickstarter-campaigns. It takes over the
 * tabletop head term from the home page and links every tabletop genre page,
 * the Gamefound pages, the four tabletop case studies, the tabletop guides and
 * the benchmark. Every linked URL keeps its slug and title.
 */
export const tabletopHubDate = "2026-11-26";

export const tabletopHub = {
  slug: "tabletop-kickstarter-campaigns",
  title: "Tabletop Kickstarter Campaigns for Board Games & RPGs",
  description: "Kickstarter and Gamefound campaigns for board games, card games, TTRPGs, miniatures and accessories: genre pages, case studies and launch guides.",
  lead: "Tabletop is our specialty. Umair and his team plan, write, design and launch Kickstarter and Gamefound campaigns for board games, card games, tabletop RPGs, miniatures and accessories, from the first brief to the backer updates after funding.",
  intro: [
    "A backer has to understand how your game plays before they compare rewards. So the page shows a turn, the components and the decisions players make, then lays out each edition and add on with the same names from the first image to the last reward.",
    "The services are the same ones every project gets: the campaign page at $1,800, or full campaign support at $5,900 with prelaunch, paid ads and live campaign management. What changes for tabletop is the craft inside them, and the genre pages below show it for each kind of game.",
  ],
  scope: [
    "A gameplay explanation with a sample turn or round",
    "Component spreads that separate the base game, upgrades and expansions",
    "Reward comparisons for core, deluxe and all in pledges",
    "Stretch goal graphics where they are agreed",
    "Prelaunch pages, emails and capped ad tests with full support",
    "Backer updates and pledge manager copy after funding",
  ],
  gamefound: [
    { href: "/gamefound-campaign-design", label: "Gamefound campaign page design", meta: "Story and rewards" },
    { href: "/gamefound-launch-services", label: "Gamefound launch services", meta: "Full launch" },
    { href: "/guides/gamefound-launch-page-checklist", label: "Gamefound launch checklist", meta: "Guide" },
  ],
  guideGroups: [
    { name: "Plan the launch", links: [
      { href: "/guides/how-to-launch-a-board-game-on-kickstarter", label: "How to launch a board game on Kickstarter" },
      { href: "/guides/is-my-game-ready-for-kickstarter", label: "Is my game ready for Kickstarter?" },
      { href: "/guides/board-game-kickstarter-marketing-plan", label: "Board game Kickstarter marketing plan" },
      { href: "/guides/board-game-kickstarter-launch-day-checklist", label: "Board game launch checklist" },
      { href: "/guides/board-game-reviewer-outreach", label: "Board game reviewer outreach" },
      { href: "/guides/choose-board-game-kickstarter-marketing-agency", label: "Choosing a board game marketing agency" },
    ] },
    { name: "Money and rewards", links: [
      { href: "/guides/board-game-kickstarter-cost", label: "Board game Kickstarter cost" },
      { href: "/guides/board-game-kickstarter-funding-goal", label: "Board game funding goal calculator" },
      { href: "/guides/board-game-kickstarter-reward-pricing", label: "Pricing board game rewards" },
      { href: "/guides/kickstarter-advertising-budget-board-games", label: "Advertising budget for board games" },
      { href: "/guides/board-game-tariffs-shipping-us", label: "Board game tariffs and US shipping" },
      { href: "/guides/board-game-pledge-manager-checklist", label: "Pledge manager checklist" },
    ] },
    { name: "The campaign page", links: [
      { href: "/guides/board-game-kickstarter-page-checklist", label: "Board game Kickstarter page checklist" },
      { href: "/guides/board-game-kickstarter-gameplay-rulebook", label: "Explaining gameplay and rulebooks" },
      { href: "/guides/kickstarter-reward-tier-graphics", label: "Reward tier graphics" },
      { href: "/guides/kickstarter-stretch-goals-planning", label: "Stretch goals for card and board games" },
      { href: "/guides/board-game-kickstarter-campaign-design-cost", label: "Board game campaign design cost" },
      { href: "/resources/tabletop-campaign-page-study", label: "Tabletop campaign page study" },
    ] },
    { name: "By genre and platform", links: [
      { href: "/guides/card-game-kickstarter-launch-guide", label: "Card game launch guide" },
      { href: "/guides/tcg-kickstarter-launch-guide", label: "Trading card game guide" },
      { href: "/guides/ttrpg-kickstarter-launch-guide", label: "TTRPG launch guide" },
      { href: "/guides/ttrpg-kickstarter-campaign-page-design", label: "TTRPG campaign page design" },
      { href: "/guides/miniatures-stl-kickstarter-launch-guide", label: "Miniatures and STL pages" },
      { href: "/guides/terrain-and-dice-kickstarter-launch-guide", label: "Terrain, dice and accessories" },
      { href: "/guides/kickstarter-vs-gamefound", label: "Kickstarter vs Gamefound for board games" },
      { href: "/guides/kickstarter-vs-gamefound-campaign-page-design", label: "Page design on Kickstarter and Gamefound" },
    ] },
    { name: "Research and worksheets", links: [
      { href: "/resources/kickstarter-tabletop-games-benchmark", label: "Highest funded tabletop Kickstarters of 2024" },
      { href: "/resources/tabletop-campaign-launch-worksheet", label: "Tabletop campaign launch worksheet" },
      { href: "/shopify-theme-for-board-games", label: "Shopify store setup for board games" },
    ] },
  ],
  faqs: [
    { question: "Do you still specialize in tabletop games?", answer: "Yes. Tabletop is our specialty and has its own genre pages, case studies and guides. We also launch everyday products and books, and the same services and prices apply to every project." },
    { question: "Which tabletop genres do you work on?", answer: "Board games, card games and TCGs, tabletop RPGs, miniatures and terrain, and dice and accessories. Each genre page lists what we show on the page and the artwork to send." },
    { question: "Do you work on Gamefound as well as Kickstarter?", answer: "Yes. We design and launch campaigns on both. The Gamefound pages explain how the story, rewards and campaign stages change the work." },
    { question: "How much does a tabletop campaign cost?", answer: "The campaign page package is $1,800. Full campaign support is $5,900 and adds prelaunch, paid ads and live campaign management. Ad spend, software and platform fees are separate." },
    { question: "What should I send for a free mockup?", answer: "A short summary of your game and usable artwork, such as the box art or a few components. We design one opening section of your page, with no payment and no obligation to book." },
  ],
};

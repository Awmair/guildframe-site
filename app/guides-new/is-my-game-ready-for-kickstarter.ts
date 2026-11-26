import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "is-my-game-ready-for-kickstarter",
  title: "Is My Game Ready for Kickstarter? What You Need Before You Launch",
  seoTitle: "What You Need Before Launching a Kickstarter",
  description: "What you need before you launch a board game on Kickstarter: how finished the game should be, how much art, and whether a prototype is enough.",
  tag: "New to Kickstarter",
  servicePath: "/kickstarter-launch-services",
  serviceLabel: "Kickstarter launch services for tabletop games",
  answer: "Your game is ready for Kickstarter when strangers have played it from the written rules and you have a prototype you can photograph. You also need enough finished art to show the final look, real quotes for making and shipping it, and people waiting to back it, which usually takes longest.",
  relatedSlugs: ["kickstarter-prototype-risks-disclosure", "board-game-kickstarter-funding-goal", "kickstarter-followers-before-launch", "board-game-kickstarter-gameplay-rulebook"],
  sources: [
    { label: "How to playtest your board game before you launch on Kickstarter (May 14, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-playtest-your-board-game-before-you-launch-on-kickstarter/" },
    { label: "How to tell your campaign story (February 9, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/kickstarter-lessons/how-to-tell-your-campaign-story/" },
    { label: "What are the rules for hardware and product design projects?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects" },
    { label: "Why Kickstarter campaigns fail after funding, and how to avoid it (June 3, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/why-kickstarter-campaigns-fail-after-funding-and-how-to-avoid-it/" },
    { label: "From concept to fulfillment: the complete Kickstarter journey (September 9, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/from-concept-to-fulfillment-the-complete-kickstarter-journey/" },
    { label: "12 things you must do before launching on Kickstarter (February 13, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/12-things-you-must-do-before-launching-on-kickstarter/" },
    { label: "How to market a tabletop game in 7 steps (February 20, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps/" },
  ],
  sections: [
    {
      id: "short-answer",
      title: "Four signs your game is ready",
      paragraphs: [
        "Your game is ready for Kickstarter when four things are true at once. The game works, it looks like itself, the numbers add up and people are waiting for it. Miss one and the campaign usually shows it on day one.",
        "We tell creators kindly when they're early, because a campaign page can't hide an unfinished game. Kickstarter's own story guide says backers want to know a project is well planned and achievable, including its current stage of development. That's a high bar for a first game, and it's reachable.",
        "This page covers readiness of the game itself. For the full journey from prototype to delivery, read our guide on [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter). Use the checklist below as your starting point, then work through each group.",
      ],
      visual: {
        kind: "checklist",
        title: "Ready means four things are true",
        groups: [
          { name: "The game", items: ["Played by strangers", "Rules stable between sessions", "Learnable from the written rules"] },
          { name: "The look", items: ["Cover or box art finished", "A few final components", "One consistent art style"] },
          { name: "The numbers", items: ["Manufacturer quote in writing", "Shipping and fulfillment quotes", "A goal that covers both"] },
          { name: "The people", items: ["Prelaunch page live", "An email list growing", "Day one backers you can name"] },
        ],
        caption: "Guildframe's readiness check for a first tabletop campaign.",
      },
      source: 1,
    },
    {
      id: "the-game",
      title: "The game itself: tested by strangers, rules stable",
      paragraphs: [
        "The first question is whether the game works without you in the room. Friends are a fine start, but they can't tell you that.",
        "Kickstarter's playtesting guide puts it plainly, noting that friends and family will tell you the game is great. It suggests testing with other designers, players of similar games and design events, and finishing with blind tests where you hand over the box and say nothing. If players can't work something out from the written rules alone, the guide says the rules need to change.",
        "There's no magic number of sessions, and Kickstarter's guide doesn't give one. We look for two signs instead: strangers finish the game from the rulebook, and your last few sessions changed only small things. When both are true, your design is ready to show. Our guide to [explaining gameplay and the rulebook on your page](/guides/board-game-kickstarter-gameplay-rulebook) picks up from there.",
      ],
      source: 0,
    },
    {
      id: "art",
      title: "How much art you need before Kickstarter",
      paragraphs: [
        "Creators often think every card must be finished before launch, and that belief keeps good games waiting for years. You need enough art to show backers what the final game will look like, and that's less than you'd think.",
        "For most board games, that means finished cover or box art and one consistent style. Add a handful of final components, such as a few cards, a section of the board or a hero miniature. The rest can be funded by the campaign, as long as the page says clearly what's final and what isn't.",
        "If you plan to hire a designer, our guide on [what to send your Kickstarter campaign designer](/guides/what-to-send-kickstarter-campaign-designer) shows how to mark finished files and placeholders. Enough art to set the look is the real target.",
      ],
    },
    {
      id: "prototype",
      title: "Can you launch with a prototype?",
      paragraphs: [
        "Yes, most tabletop games launch with a prototype, and backers expect it. What matters is that you label it honestly.",
        "Kickstarter's hardware and product design rules require working prototypes and don't allow photorealistic renderings. That article applies to the hardware and product design categories and doesn't mention games, so check the rules for the category you'll actually launch in before planning your images.",
        "Then label each image as a prototype, render or final artwork, and say what's still changing. Our guide to [labeling prototypes and writing the risks section](/guides/kickstarter-prototype-risks-disclosure) covers the wording. A clearly labeled prototype builds more trust than a polished image nobody believes.",
      ],
      source: 2,
    },
    {
      id: "numbers",
      title: "The numbers you need first",
      paragraphs: [
        "This is the part first timers skip most, and it's the one that hurts most later. You need real quotes before you set a goal or a price.",
        "Ask a manufacturer to quote your smallest realistic print run in writing. Kickstarter's June 2026 post on failure after funding advises getting real fulfillment quotes before you finalize reward prices. It adds that Kickstarter and payment partners take 8 to 10 percent of funds, and suggests a contingency of 20 to 30 percent as a starting point.",
        "The same post says overseas manufacturing usually takes about twelve months from campaign end to delivery. So your numbers also tell you how long backers will wait. Our guides to [setting your funding goal](/guides/board-game-kickstarter-funding-goal), [Kickstarter fees](/guides/kickstarter-fees) and [what it costs to launch a board game on Kickstarter](/guides/board-game-kickstarter-cost) take each piece in turn.",
        "With written quotes in hand, your goal stops being a guess. That alone puts you ahead of many first campaigns.",
      ],
      source: 3,
    },
    {
      id: "people",
      title: "The people you need first",
      paragraphs: [
        "A finished game with nobody waiting still struggles, because a new creator can't count on Kickstarter to fill an empty first day. Building those people takes months, so start early.",
        "Kickstarter's September 2026 journey post recommends activating your prelaunch page right away, so it gathers followers while you build everything else. For a first time creator that page only opens after review approval, so our planning example starts the email list 3 months or more before launch and opens the Kickstarter prelaunch page 6 to 12 weeks out. Show the game somewhere every week in between. Our guides on [how many followers you need before launch](/guides/kickstarter-followers-before-launch) and [how to get your first Kickstarter backers](/guides/how-to-get-kickstarter-backers) cover the targets and the sources.",
        "Reviews aren't required before launch, but an outside voice is the cheapest trust a new creator can add. Our guide to [board game reviewer outreach](/guides/board-game-reviewer-outreach) explains how to ask. Start the people work now, even if the game needs more time.",
      ],
      source: 4,
    },
    {
      id: "can-wait",
      title: "What can wait until after launch",
      paragraphs: [
        "Some things feel urgent but don't decide whether you fund. Knowing which ones lets you spend your energy where it counts.",
        "Stretch goals can wait, and Kickstarter's June 2026 post advises keeping them simple and costing them before you promise anything. A full website can wait too, because a single signup page does the job before launch. A store, a logo animation and final art for every component can all follow the money.",
        "One thing can't wait, though. Kickstarter notes that reward tiers can't be changed after someone pledges, so your game and its contents need to be settled before launch day. Finish the design first and leave the extras for later.",
      ],
      visual: {
        kind: "compare",
        title: "Must have, should have, can wait",
        columns: [
          { name: "Must have", points: ["Game tested by strangers", "Photographable prototype", "Cover art and a few final pieces", "Written manufacturing quote"], verdict: "Launch only when these are done", highlight: true },
          { name: "Should have", points: ["Prelaunch page with followers", "Email list", "Shipping quotes by region", "An outside review or preview"], verdict: "Start now, they take months" },
          { name: "Can wait", points: ["Stretch goals", "A full website or store", "Final art for every card", "Logo animation"], verdict: "Fund these with the campaign" },
        ],
        caption: "Guildframe's grouping for a first board game.",
      },
      source: 5,
    },
    {
      id: "readiness-check",
      title: "A readiness check you can do today",
      paragraphs: [
        "You can test your readiness in one sitting with honest answers to a few questions. Each no is a task to add to your plan, not a verdict on your game.",
        "Answer these six questions on paper before you pick a launch date.",
      ],
      list: [
        "Has someone who has never met you played it from the written rules alone?",
        "Could you photograph a full set of components this week?",
        "Do you have cover or box art that looks like the final game?",
        "Do you have a written quote for your smallest print run?",
        "Do you know roughly what shipping one copy to your main countries costs?",
        "Can you name the people who will back you on day one, and how you'll reach them?",
      ],
    },
    {
      id: "not-ready-yet",
      title: "Not ready yet? What to do in the next three months",
      paragraphs: [
        "Not being ready is normal, and finding out now is far cheaper than finding out on launch day. Three focused months can close most of the gap.",
        "Kickstarter's tabletop marketing guide encourages building a rough prototype quickly and testing it early, and that's where most first games still are. So spend the first month on blind tests and rules fixes while an email signup goes live, the second on cover art and quotes, and the third on showing the game every week. When you're picking a date, our guide on [when to launch a Kickstarter](/guides/when-to-launch-a-kickstarter) helps you choose.",
        "We help creators at exactly this point. Our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) start with an asset review and a launch schedule with named responsibilities. Once your art is ready, share your project through the [enquiry form](/buy) or book a 30 minute call.",
      ],
      visual: {
        kind: "timeline",
        title: "Example: three months from almost ready to ready",
        events: [
          { when: "Month 1", label: "Fix the game, open the list", detail: "Blind tests, rules changes, email signup live" },
          { when: "Month 2", label: "Set the look and the numbers", detail: "Cover art, a few final pieces, written quotes" },
          { when: "Month 3", label: "Gather people", detail: "Weekly posts, plan the Kickstarter prelaunch page" },
          { when: "Then", label: "Pick a launch date", detail: "Once all four groups are true", highlight: true },
        ],
        caption: "Illustrative Guildframe plan for a creator with a working prototype. Your own timing depends on your game.",
      },
      source: 6,
    },
  ],
  faqs: [
    { question: "Can I launch a Kickstarter with only a prototype?", answer: "Yes, most tabletop games launch with a prototype. Label each image honestly as a prototype, render or final artwork. Then check the rules for your category, because Kickstarter's hardware and product design rules require working prototypes and ban photorealistic renderings." },
    { question: "How much of the art has to be finished before Kickstarter?", answer: "Enough to show what the final game looks like, which means finished cover or box art, a handful of final components and one consistent style. The rest can be funded by the campaign if the page says what's final." },
    { question: "Do I need a manufacturer before I launch?", answer: "You need a written quote for your smallest realistic print run, plus fulfillment quotes. Kickstarter advises getting real fulfillment quotes before you finalize reward prices." },
    { question: "How much playtesting is enough?", answer: "There's no set number. We look for strangers finishing the game from the written rules and your last few sessions changing only small things. Kickstarter's playtesting guide recommends blind tests near the end of development." },
    { question: "Do I need reviews before launching my Kickstarter?", answer: "No, reviews aren't required. But an outside voice is the cheapest trust a new creator can add to the page." },
    { question: "How do I know my game is not ready yet?", answer: "If strangers can't play it from the written rules, you have no written quote, or nobody is waiting to back it, it's not ready yet. Each gap is a task you can usually close in a few focused months." },
    { question: "Can I launch now and finish the game with the money?", answer: "The money can pay for final art and production, but the design itself should be finished first. Backers want a project that is well planned and achievable, and reward tiers can't be changed after someone pledges." },
  ],
};

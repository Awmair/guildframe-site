import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "how-to-market-a-kickstarter",
  title: "How to Market a Kickstarter Campaign: A Beginner's Guide for Tabletop Creators",
  seoTitle: "How to Market a Kickstarter: Beginner Guide",
  description: "How to market a Kickstarter when you have never done marketing before. What to do first, which channels suit a board game and what can wait.",
  tag: "Prelaunch",
  answer: "Marketing a Kickstarter means getting a few hundred of the right players to know your game exists and follow it before launch day, so day one isn't empty. Start with who the game is for, build one place to send people, show the game every week, and add paid ads only once your page is ready to turn visitors into backers.",
  servicePath: "/kickstarter-prelaunch-marketing",
  serviceLabel: "Kickstarter prelaunch marketing",
  relatedSlugs: ["board-game-kickstarter-marketing-plan", "kickstarter-prelaunch-email-list", "kickstarter-followers-before-launch"],
  sources: [
    { label: "How To Market a Tabletop Game in 7 Steps (February 20, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps/" },
    { label: "From Concept to Fulfillment: The Complete Kickstarter Journey (September 9, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/from-concept-to-fulfillment-the-complete-kickstarter-journey/" },
    { label: "Setting up your project's prelaunch page", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page" },
    { label: "How can my project get featured or selected as a Project We Love?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236466-how-can-my-project-get-featured-or-selected-as-a-project-we-love" },
    { label: "The Anatomy of a Great Kickstarter Prelaunch Page (October 29, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/the-anatomy-of-a-great-kickstarter-prelaunch-page/" },
    { label: "Board Game Kickstarter Marketing 101 (October 14, 2020)", publisher: "Meeple Mountain", href: "https://www.meeplemountain.com/articles/board-game-kickstarter-marketing-101/" },
    { label: "Kickstarter launch services for tabletop games", publisher: "Guildframe", href: "/kickstarter-launch-services" },
  ],
  sections: [
    {
      id: "what-it-means",
      title: "What Kickstarter marketing actually means for a first campaign",
      paragraphs: [
        "If the word marketing makes you uneasy, you're in good company, because it's the question we hear most from first time creators. For a tabletop Kickstarter it means one plain thing. You help the right players notice your game and follow it before launch, so the first day has people waiting.",
        "Kickstarter's own tabletop guide says marketing before the campaign matters more than marketing during it. That matches what we see on every launch. Most of the work happens in the months before you press the button, and the live campaign mostly collects what you built.",
        "This page covers the marketing part only. For the whole journey from prototype to delivery, start with our guide on [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter), then come back here when you reach marketing.",
        "So think of marketing as five small jobs done in order, rather than a long list of channels to join.",
      ],
      visual: {
        kind: "steps",
        title: "Marketing a Kickstarter is five jobs, done in this order",
        steps: [
          { label: "Know the player", detail: "One sentence on who the game is for." },
          { label: "Build the landing spot", detail: "A prelaunch page and an email signup." },
          { label: "Show the game weekly", detail: "Photos, short clips, rules previews and playtests." },
          { label: "Collect follows and emails", detail: "Every post and demo asks for one of the two." },
          { label: "Tell everyone on launch day", detail: "Followers, your list, your communities and your friends." },
        ],
        source: "Guildframe launch planning",
      },
      source: 0,
    },
    {
      id: "who-its-for",
      title: "Start with who the game is for",
      paragraphs: [
        "Every marketing choice gets easier once you can describe your player in one sentence. “People who love quick card games they can teach in five minutes” points you to very different places than “miniatures painters who play long campaign games”.",
        "Write that sentence down, then list three games your player already owns. Those games tell you which communities, reviewers and conventions to look at, and which campaign pages to study. When we start a launch plan, this is the first thing we ask a creator for.",
        "Skip this step and you end up posting everywhere and being heard nowhere. A clear picture of your player is the cheapest marketing tool you have.",
      ],
    },
    {
      id: "three-jobs",
      title: "The three things to build before you send anyone anywhere",
      paragraphs: [
        "Once you know your player, the groundwork before launch comes down to three things. Each one should exist before you spend time or money sending people to look at your game.",
      ],
      list: [
        "A place to send people. Kickstarter's prelaunch page lets visitors ask to be notified, and Kickstarter emails those followers when your project goes live. Our [Kickstarter prelaunch page guide](/guides/kickstarter-prelaunch-page-guide) walks through setting it up.",
        "A reason to follow. A rules preview, a short video of one turn, a print and play file or a first look at the art gives people something real to judge.",
        "A way to reach them again. Kickstarter's notice goes out at launch, while an email list you own lets you write whenever you choose. Our [prelaunch email list guide](/guides/kickstarter-prelaunch-email-list) explains how to start one from nothing.",
      ],
      visual: {
        kind: "stats",
        title: "People who follow before launch pledge far more often than people who arrive later",
        stats: [
          { value: "32%", label: "of prelaunch followers pledge on average", note: "Once the campaign goes live" },
          { value: "17%", label: "of people who follow after launch pledge", note: "The same measure, after launch" },
        ],
        source: "Kickstarter, October 2025",
      },
      source: 4,
    },
    {
      id: "channels",
      title: "Pick two or three channels you can keep up",
      paragraphs: [
        "A first time creator can't be everywhere, and trying usually means doing everything badly. We'd rather you pick two or three channels that suit your player and post on them every week until launch.",
        "Here's how the main options compare for a tabletop game, in plain terms.",
      ],
      list: [
        "Communities and forums. Discord servers, Facebook groups, subreddits and BoardGameGeek, where players already talk about games. They're free and slow, and they're where your first real fans come from. Each one sets its own rules on self promotion, so read them before you post.",
        "Short video and social. TikTok, Instagram and short YouTube clips suit games that look good on a table. Kickstarter's guide notes that simple, low effort videos performed well for the tabletop campaign it profiled.",
        "Reviewers and previews. You borrow someone else's audience for a video or article. Our [board game reviewer outreach guide](/guides/board-game-reviewer-outreach) covers timing and what to send.",
        "Conventions and game nights. They're slow to scale, but nothing beats someone playing your game and asking where to follow it.",
        "Paid ads. They're fast and easy to measure, but they cost money and work best once everything else is in place.",
      ],
      visual: {
        kind: "compare",
        title: "Free channels cost time and paid channels cost money",
        columns: [
          { name: "Communities", points: ["Costs your time", "Steady weekly replies", "Start as early as you can"], verdict: "Where first fans come from" },
          { name: "Short video", points: ["Costs your time", "One or two clips a week", "Start once the game looks good on a table"], verdict: "Good for visual games" },
          { name: "Reviewers", points: ["Costs prototype copies and postage", "Outreach well ahead", "Start once a playable prototype exists"], verdict: "Borrowed audiences" },
          { name: "Conventions", points: ["Costs travel and table fees", "A weekend each", "Start whenever one is near you"], verdict: "Warmest followers per hour" },
          { name: "Paid ads", points: ["$15 to $50 per backer", "Testing and tracking", "Start once the page is ready"], verdict: "Scale, not a starting point", highlight: true },
        ],
        caption: "The ad cost per backer is Kickstarter's published range. Everything else is our planning guidance, not a measured figure.",
        source: "Kickstarter, February 2025; Guildframe",
      },
      source: 0,
    },
    {
      id: "does-kickstarter-promote",
      title: "Does Kickstarter bring backers by itself?",
      paragraphs: [
        "Kickstarter does help, just not in the way many first timers hope. Its launch journey guide says projects can appear in a Launching soon section where people browsing the category can follow them, and its homepage shows a Recommended for you list based on what each visitor has searched for, browsed and backed. Its team also picks some projects as Projects We Love.",
        "Kickstarter is honest about the limit. Its Help Center says there is no secret formula for being chosen as a Project We Love, and that being selected isn't the secret to success. Its launch journey guide adds that strong early pledges help a project reach more people browsing the site.",
        "So treat platform traffic as a bonus that rewards a strong start, not as the plan. The people you bring on day one are what earn you the rest.",
      ],
      source: 3,
    },
    {
      id: "no-budget",
      title: "How to market a Kickstarter with no budget",
      paragraphs: [
        "You can market a first campaign with very little money, as long as you have time. The free routes are the ones above, which means communities, weekly posts, playtests, game nights and reviewer outreach with a few prototype copies.",
        "The honest ceiling is reach. Free channels grow one person at a time, so they suit a modest goal and a long prelaunch. If your funding goal needs thousands of backers, free work alone rarely gets there in a few months.",
        "One quick test comes from Meeple Mountain's 2020 marketing guide. It says a campaign is ready when you can raise at least 30% of your goal within 24 hours. That's a rule of thumb rather than a platform figure, but it tells you whether free marketing has done enough. For finding those first people one group at a time, read [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers).",
      ],
      source: 5,
    },
    {
      id: "ads",
      title: "When paid ads start to make sense",
      paragraphs: [
        "Ads are the part first timers most often start too early. An ad can only send people to a page, so if the page, the reward tiers and the follow button aren't ready, you pay for visitors who leave.",
        "Kickstarter's tabletop guide puts the cost of winning a backer through ads at $15 to $50. It says that for many tabletop creators, success relies on a 2.5x return on ad spend, which means $2.50 pledged for every $1 spent on ads. Low priced games leave a thin ad budget, so it suggests raising the average pledge with reward tiers and add ons.",
        "We start ads with small tests once the landing page turns visitors into followers, then put more behind what works. Our [Kickstarter advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to size the spend against your rewards.",
      ],
      source: 0,
    },
    {
      id: "rhythm",
      title: "A simple weekly rhythm until launch",
      paragraphs: [
        "Marketing works best as a small, steady habit. Kickstarter's launch journey guide plans about 50 days of setup, creative work and paid testing before launch, and we like to start the community work earlier than that when the game is ready to show.",
        "A good week for a first timer is simple. Post one thing that shows the game, answer every comment, invite new people to the prelaunch page and email list, and note where each new follower came from.",
        "To know when you have enough people, our guide to [how many followers you need before launch](/guides/kickstarter-followers-before-launch) turns your goal into a target. For the full schedule with weeks and budget lines, our [board game Kickstarter marketing plan](/guides/board-game-kickstarter-marketing-plan) lays it out. This page stays with the basics, so you know what each part of that plan is for.",
      ],
      source: 1,
    },
    {
      id: "help",
      title: "Doing it yourself or getting help",
      paragraphs: [
        "You can do all of this yourself, and plenty of creators do. The honest limit is time, because weekly posts, community replies, email, ad tests and finishing the game all land on the same person in the same months.",
        "We plan and run prelaunch marketing for tabletop creators for a living. We write an audience brief from your game and playtest feedback, build the landing page and signup flow in your own accounts, and write the welcome email and prelaunch sequence. Then we set up tracking and run paid creative tests with spend limits you approve. You keep the game, the community voice and the final say, and ad spend and email software sit outside our fee.",
        "If you'd rather hand over the whole campaign, read our guide to [choosing a board game Kickstarter marketing agency](/guides/choose-board-game-kickstarter-marketing-agency) first. When you're ready, tell us about your game through [Kickstarter prelaunch marketing](/kickstarter-prelaunch-marketing), or see the full range of [Kickstarter launch services for tabletop games](/kickstarter-launch-services).",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I market a Kickstarter with no audience?",
      answer: "Start with one sentence on who the game is for, then show the game every week in two or three communities where those players already talk. Send everyone to your prelaunch page and email signup, and grow outward from playtesters and local groups.",
    },
    {
      question: "Does Kickstarter market my campaign for me?",
      answer: "Only a little. Prelaunch projects can appear in Launching soon, and Kickstarter recommends projects to visitors based on their searches and backings. Its Help Center says being picked as a Project We Love isn't the secret to success, so plan to bring your own first backers.",
    },
    {
      question: "How early should I start marketing my Kickstarter?",
      answer: "Kickstarter's launch journey guide plans about 50 days of prelaunch work before launch. We like to start community posting earlier, as soon as the game looks good on a table, and to set the launch date once followers are growing steadily.",
    },
    {
      question: "Do I have to run ads for a board game Kickstarter?",
      answer: "No. Free channels can fund a modest goal with a long prelaunch. Kickstarter puts the cost of a backer through ads at $15 to $50, so ads make sense once your page converts and your average pledge leaves room for that cost.",
    },
    {
      question: "Which social media is best for a board game Kickstarter?",
      answer: "The one your player already uses and you can keep up every week. Short video suits games that look good on a table, while forums and Discord servers suit players who like to talk rules and strategy. Two channels done well beat five done badly.",
    },
    {
      question: "How much should I spend marketing my first Kickstarter?",
      answer: "It depends on your goal and how many backers free work can bring. Our advertising budget guide sizes paid spend against your reward prices. Money you can't afford to lose shouldn't go into ads before the page is ready.",
    },
    {
      question: "Can someone do the marketing for me?",
      answer: "Yes. We run prelaunch marketing for tabletop creators, with the landing page, emails, tracking and small paid tests set up in your own accounts. You keep the game, the community voice and the final say, and ad spend is budgeted separately.",
    },
  ],
};

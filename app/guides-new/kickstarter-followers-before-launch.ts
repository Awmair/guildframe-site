import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "kickstarter-followers-before-launch",
  title: "How Many Kickstarter Followers Do You Need Before Launch?",
  seoTitle: "Kickstarter Followers Before Launch: How Many?",
  description: "How many Kickstarter followers you need before launch, using published conversion figures, three scenarios and a worked funding goal example.",
  tag: "Prelaunch",
  answer: "You need enough prelaunch followers that a cautious share of them covers your funding goal, so the right number depends on your goal and average pledge. Kickstarter reports that 32% of prelaunch followers pledge on average and BackerKit found 20 to 25%, so we plan on a lower rate and treat anything above it as a bonus.",
  servicePath: "/kickstarter-prelaunch-marketing",
  serviceLabel: "Kickstarter prelaunch marketing",
  relatedSlugs: ["kickstarter-prelaunch-email-list", "kickstarter-prelaunch-page-guide", "board-game-kickstarter-funding-goal"],
  sources: [
    { label: "The Anatomy of a Great Kickstarter Prelaunch Page (October 29, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/the-anatomy-of-a-great-kickstarter-prelaunch-page/" },
    { label: "Setting up your project's prelaunch page", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page" },
    { label: "Take full advantage of Kickstarter's prelaunch page (February 24, 2020)", publisher: "BackerKit", href: "https://blog.backerkit.com/take-full-advantage-of-kickstarters-pre-launch-page-to-promote-your-upcoming-project/" },
    { label: "Prelaunch Promos, Accessories, and Expansions (KS Lesson #281, December 18, 2023)", publisher: "Stonemaier Games", href: "https://stonemaiergames.com/prelaunch-promos-accessories-and-expansions-ks-lesson-281/" },
    { label: "Meepify, Matchmaking, and Knowing the Size of Your Audience (June 29, 2020)", publisher: "Stonemaier Games", href: "https://stonemaiergames.com/meepify-matchmaking-and-knowing-the-size-of-your-audience/" },
    { label: "How Long Should a Prelaunch Take? (2025 update)", publisher: "LaunchBoom", href: "https://www.launchboom.com/crowdfunding-tips/how-long-should-a-prelaunch-take-updated/" },
    { label: "How to Build a Prelaunch Email List on Kickstarter", publisher: "LaunchBoom", href: "https://www.launchboom.com/crowdfunding-tips/how-to-build-a-prelaunch-email-list" },
    { label: "From Followers to Funded (September 10, 2025)", publisher: "BackerKit", href: "https://blog.backerkit.com/from-followers-to-funded-4-new-crowdfunding-features-to-grow-and-activate-your-audience/" },
  ],
  sections: [
    {
      id: "no-single-number",
      title: "Start from your goal, because no follower count works for everyone",
      paragraphs: [
        "This is the question we hear most from creators in prelaunch, and the honest answer starts with your own numbers. A $5,000 zine and a $60,000 miniatures game need very different audiences, so a single target like 1,000 followers tells you very little.",
        "Jamey Stegmaier of Stonemaier Games makes the same point about mailing lists. What matters is how many people on the list would actually buy your game. He warns that a creator can build a list of 10,000 people and still fail to fund. Before launch, he says, you simply don't know how many will back.",
        "So we treat the follower count as a planning input, not a pass mark. You bring the funding goal and the average pledge you expect. We turn those into a backer target, then test that target against published conversion rates. That's how a vague worry becomes a number you can track every week.",
      ],
      source: 4,
    },
    {
      id: "published-figures",
      title: "Published conversion figures sit between 20% and 32%",
      paragraphs: [
        "A handful of platforms and launch firms have published how often prelaunch followers turn into backers. They measure slightly different things, so read each one with its date and context.",
        "Kickstarter's own figure is the newest and the most useful for a Kickstarter launch. It also says people who follow before launch are almost twice as likely to back as people who find the project after it goes live. That's why the prelaunch page deserves real attention, even though it is only one part of your audience.",
      ],
      list: [
        "Kickstarter (October 2025): on average, 32% of prelaunch followers pledge once the campaign goes live, compared with 17% of people who follow after launch.",
        "BackerKit (February 2020): its internal research found that on average 20 to 25% of prelaunch followers end up pledging.",
        "Gamefound, as reported by Stonemaier Games (December 2023): successful campaigns that gave followers a free promo converted at 24%, while successful campaigns without that gift converted at 32%.",
        "LaunchBoom, as reported by Stonemaier Games: newsletter subscribers converted at about 5 to 10%, and people who paid $1 before the campaign at about 35 to 45%.",
      ],
      source: 0,
    },
    {
      id: "scenarios",
      title: "Plan with three scenarios instead of one rate",
      paragraphs: [
        "Averages hide a wide spread. Kickstarter's 32% is an average across all kinds of projects, including creators who already have an established audience. A first time creator with followers from cold ads should not plan on matching it.",
        "That's why we model three cases. The low case is our own cautious planning assumption, set at half of BackerKit's lower figure. The typical case uses BackerKit's range. The strong case uses Kickstarter's average, which we treat as a good result for a first campaign rather than the expected one.",
        "If your plan only works in the strong case, the plan needs more audience or a smaller goal. If it works in the low case, you can launch with confidence and treat platform traffic and ads as extra.",
      ],
      visual: {
        kind: "bars",
        title: "A cautious plan assumes far fewer followers will pledge than the averages suggest",
        unit: "%",
        bars: [
          { label: "Low: our cautious case", value: 10, display: "10%" },
          { label: "Typical: BackerKit average", value: 22.5, display: "20 to 25%" },
          { label: "Strong: Kickstarter average", value: 32, display: "32%", highlight: true },
        ],
        caption: "Share of prelaunch followers who pledge. The low case is a Guildframe planning assumption, not a published figure.",
        source: "BackerKit (2020); Kickstarter (2025)",
      },
    },
    {
      id: "worked-example",
      title: "Worked example: followers for a $15,000 goal",
      paragraphs: [
        "Here's how we run the numbers for a creator. This example is illustrative, so replace each input with your own goal and reward prices. Imagine a card game with a $15,000 funding goal and an expected average pledge of $50, including shipping collected at pledge.",
        "First we divide the goal by the average pledge, which gives 300 backers. Then we divide those 300 backers by each conversion rate. At 10% you would need 3,000 followers. At 20 to 25% you would need 1,200 to 1,500. At 32% you would need about 940.",
        "We like the low case to cover the goal from followers and your own email list together. LaunchBoom says 20 to 40% of funding often comes directly from the platform itself, but we leave that out of the goal math because you cannot plan when it arrives. If the low case leaves a gap, you can grow the audience, extend the prelaunch or revisit the goal.",
        "Our guide to [setting a funding goal](/guides/board-game-kickstarter-funding-goal) shows how to build that goal from production costs. Then the follower target rests on a real budget rather than a hopeful round number.",
      ],
      visual: {
        kind: "bars",
        title: "The same $15,000 goal needs 940 to 3,000 followers depending on conversion",
        bars: [
          { label: "Low case at 10%", value: 3000, display: "3,000" },
          { label: "Typical case at 20 to 25%", value: 1350, display: "1,200 to 1,500" },
          { label: "Strong case at 32%", value: 940, display: "about 940", highlight: true },
        ],
        caption: "Example: a $15,000 goal at a $50 average pledge needs 300 backers. Followers needed equals 300 divided by the conversion rate.",
        source: "Rates from BackerKit (2020) and Kickstarter (2025); goal and pledge are illustrative",
      },
      source: 5,
    },
    {
      id: "quality",
      title: "Who your followers are matters more than how many",
      paragraphs: [
        "A follower count can grow fast and still convert badly. The Gamefound figures show this clearly, because campaigns that offered followers a free promo had many more followers but a lower conversion rate than campaigns that offered nothing.",
        "Commitment is the strongest signal we can measure before launch. LaunchBoom reports that people who place a $1 reservation are 30 times more likely to buy than people who only leave an email. BackerKit quotes a creator whose reservation holders were over 12 times more likely to pledge.",
        "So when we review a prelaunch, we look at where followers came from. People who read your rules sample, joined your Discord or played your print and play file behave very differently from people who clicked a contest ad. A smaller, warmer audience often beats a bigger, colder one. When we plan a prelaunch, we rank follower sources roughly like this, from warmest to coldest.",
      ],
      list: [
        "Your own email list and returning backers",
        "Playtesters, convention demo players and community members",
        "Followers who came from reviews, previews or actual play coverage",
        "Followers from paid ads, which you can measure by cost per follower",
        "Followers who joined for a giveaway or contest, which we treat with the most caution",
      ],
      source: 3,
    },
    {
      id: "grow",
      title: "How we grow followers before launch",
      paragraphs: [
        "Growing followers is steady weekly work rather than one big push. Kickstarter recommends sharing the prelaunch page at least one week before launch, and first time creators only get the Promotion tab after project approval. LaunchBoom suggests a standard prelaunch of two to four months for a product launch. Our own planning example starts the email list 3 months or more before launch and opens the Kickstarter prelaunch page 6 to 12 weeks out, so a first time creator submits for review before that window opens.",
        "If you are starting from almost nothing, the first followers are the people who have already played the game, such as playtesters and friends from your game nights. Send them the prelaunch page and ask them to click Notify me on launch. Our guide on [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers) covers where the next ones come from, one source at a time.",
        "We usually plan the prelaunch around the steps below. Each one gives people a reason to follow that goes beyond a countdown, and each one can be measured.",
      ],
      visual: {
        kind: "steps",
        title: "Followers grow fastest when every step gives people a reason to care",
        steps: [
          { label: "Get the prelaunch page live early", detail: "Our example opens it 6 to 12 weeks before launch, after review approval for a first project." },
          { label: "Send your own list to it", detail: "Ask email subscribers and community members to click Notify me on launch." },
          { label: "Show the game in play", detail: "A sample turn, rules preview or playable demo gives people something to judge." },
          { label: "Post a few useful prelaunch updates", detail: "Updates notify current followers, so save them for real news." },
          { label: "Test small ad budgets", detail: "Measure cost per follower before you scale spend." },
          { label: "Check the count weekly", detail: "Compare progress against your low case and move the date if needed." },
        ],
        source: "Kickstarter Help Center; LaunchBoom",
      },
      source: 1,
    },
    {
      id: "track",
      title: "Read the count weekly and set the launch date from it",
      paragraphs: [
        "The follower number becomes useful once you compare it with your scenarios every week. Kickstarter only shows the follower count on the public page once 10 or more people have opted in to a launch notification.",
        "Kickstarter does not let you message prelaunch followers directly. Instead, a prelaunch update notifies everyone currently following the page. That makes your own email list important too, because you control when and how often you write to it, and our [prelaunch email list guide](/guides/kickstarter-prelaunch-email-list) covers the setup.",
        "Two weeks before your planned date, we check whether the low case covers the goal. If it doesn't, moving the launch by a few weeks usually costs less than a slow first day. A date you can meet beats a countdown you can't.",
      ],
      source: 1,
    },
    {
      id: "help",
      title: "Where Guildframe fits in your prelaunch",
      paragraphs: [
        "We plan and run prelaunches for tabletop creators for a living, so this math is part of every launch plan we write. You can do it yourself with a spreadsheet and the figures above. The hard part is the weekly work of growing a warm audience while you finish the game.",
        "Our prelaunch service starts with an audience brief and a landing page with a signup flow in your own accounts. We add a welcome email and prelaunch sequence, tracking, and paid creative tests with spend limits you approve. It ends with a launch readiness review, and ad spend and email software are budgeted separately from the service fee. If you want a second opinion on your follower target, share your goal, average pledge and current count with us through our [Kickstarter prelaunch marketing](/kickstarter-prelaunch-marketing) service.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is 1,000 Kickstarter followers enough to launch?",
      answer: "It depends on your goal and average pledge. In our illustrative example, 1,000 followers at a 20% conversion rate gives about 200 backers, which covers a $10,000 goal at a $50 average pledge but not a $15,000 one.",
    },
    {
      question: "What percentage of Kickstarter followers become backers?",
      answer: "Kickstarter reported in October 2025 that 32% of prelaunch followers pledge on average. BackerKit found 20 to 25% in 2020. We plan around a lower rate because averages include creators with large returning audiences.",
    },
    {
      question: "Does a free promo for followers improve conversion?",
      answer: "Gamefound figures reported by Stonemaier Games show successful campaigns with a follower gift converted at 24%, compared with 32% for those without. The gift campaigns had more followers, so a gift can grow the count while lowering the rate.",
    },
    {
      question: "How long should a Kickstarter prelaunch run?",
      answer: "Kickstarter recommends sharing the prelaunch page at least one week before launch. LaunchBoom suggests a standard prelaunch of two to four months. Our planning example starts the email list 3 months or more ahead and opens the Kickstarter prelaunch page 6 to 12 weeks before launch, then we adjust the length by how long it takes your low case to cover the goal.",
    },
    {
      question: "Can I message my Kickstarter followers before launch?",
      answer: "Not directly. Kickstarter lets you publish prelaunch updates, which notify everyone currently following the page. Followers also get an email when the project goes live.",
    },
    {
      question: "Are Kickstarter followers the same as an email list?",
      answer: "No. Followers receive Kickstarter's notifications, while your own email list lets you write when you choose. We build both and count them together in the low case.",
    },
    {
      question: "I have almost no followers. Where do I get the first ones?",
      answer: "Start with the people who have already played the game, such as playtesters and friends from your game nights. Send them the prelaunch page and ask them to click Notify me on launch, then give new people a reason to follow with a sample turn or rules preview. Our guide on how to get Kickstarter backers covers where the next ones come from.",
    },
  ],
};

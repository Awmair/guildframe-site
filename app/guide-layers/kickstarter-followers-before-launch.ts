import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "no-single-number": {
      paragraphs: [
        "This is the question we hear most from creators in prelaunch, and the honest answer starts with your own numbers. A $5,000 zine and a $60,000 miniatures game need very different audiences, so a single target like 1,000 followers tells you very little.",
        "Jamey Stegmaier of Stonemaier Games makes the same point about mailing lists. What matters is how many people on the list would actually buy your game.",
        "He warns that a creator can build a list of 10,000 people and still fail to fund. Before launch, he says, you simply don't know how many will back.",
        "So we treat the follower count as a planning input, not a pass mark. You bring the funding goal and the average pledge you expect.",
        "We turn those into a backer target, then test that target against published conversion rates. That's how a vague worry becomes a number you can track every week.",
      ],
      takeaway: "No single Kickstarter follower count works for every project. Start from your funding goal and average pledge, then turn them into a backer target.",
    },
    "published-figures": {
      takeaway: "Published figures put prelaunch follower conversion between 20% and 32%, and Kickstarter says prelaunch followers are almost twice as likely to back.",
    },
    "scenarios": {
      paragraphs: [
        "Averages hide a wide spread. Kickstarter's 32% is an average across all kinds of projects, including creators who already have an established audience. A first time creator with followers from cold ads should not plan on matching it.",
        "That's why we model three cases. The low case is our own cautious planning assumption, set at half of BackerKit's lower figure.",
        "The typical case uses BackerKit's range. The strong case uses Kickstarter's average, which we treat as a good result for a first campaign rather than the expected one.",
        "If your plan only works in the strong case, the plan needs more audience or a smaller goal. If it works in the low case, you can launch with confidence and treat platform traffic and ads as extra.",
      ],
      takeaway: "Plan your Kickstarter followers with three conversion cases: 10%, 20 to 25% and 32%. Launch with confidence only when the low case still funds.",
    },
    "worked-example": {
      paragraphs: [
        "Here's how we run the numbers for a creator. This example is illustrative, so replace each input with your own goal and reward prices.",
        "Imagine a card game with a $15,000 funding goal and an expected average pledge of $50, including shipping collected at pledge. First we divide the goal by the average pledge, which gives 300 backers.",
        "Then we divide those 300 backers by each conversion rate. At 10% you would need 3,000 followers. At 20 to 25% you would need 1,200 to 1,500, and at 32% about 940.",
        "We like the low case to cover the goal from followers and your own email list together. LaunchBoom says 20 to 40% of funding often comes directly from the platform itself, but we leave that out because you cannot plan when it arrives.",
        "If the low case leaves a gap, you can grow the audience, extend the prelaunch or revisit the goal. Our guide to [setting a funding goal](/guides/board-game-kickstarter-funding-goal) shows how to build that goal from production costs.",
        "Then the follower target rests on a real budget rather than a hopeful round number.",
      ],
      takeaway: "Followers needed equals your goal divided by your average pledge, divided again by the conversion rate. A $15,000 example goal needs 940 to 3,000 followers.",
    },
    "quality": {
      paragraphs: [
        "A follower count can grow fast and still convert badly. The Gamefound figures show this clearly, because campaigns that offered followers a free promo had many more followers but a lower conversion rate than campaigns that offered nothing.",
        "Commitment is the strongest signal we can measure before launch. LaunchBoom reports that people who place a $1 reservation are 30 times more likely to buy than people who only leave an email. BackerKit quotes a creator whose reservation holders were over 12 times more likely to pledge.",
        "So when we review a prelaunch, we look at where followers came from. People who read your rules sample, joined your Discord or played your print and play file behave very differently from people who clicked a contest ad.",
        "A smaller, warmer audience often beats a bigger, colder one. When we plan a prelaunch, we rank follower sources roughly like this, from warmest to coldest.",
      ],
      takeaway: "Who your Kickstarter followers are matters more than how many. Warm followers from your list, playtests and reviews convert far better than giveaway entrants.",
    },
    "grow": {
      paragraphs: [
        "Growing followers is steady weekly work rather than one big push. Kickstarter recommends sharing the prelaunch page at least one week before launch, and first time creators only get the Promotion tab after project approval.",
        "LaunchBoom suggests a standard prelaunch of two to four months for a product launch. Our own planning example starts the email list 3 months or more before launch and opens the Kickstarter prelaunch page 6 to 12 weeks out.",
        "So a first time creator submits for review before that window opens.",
        "If you are starting from almost nothing, the first followers are the people who have already played the game, such as playtesters and friends from your game nights. Send them the prelaunch page and ask them to click Notify me on launch.",
        "Our guide on [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers) covers where the next ones come from, one source at a time.",
        "We usually plan the prelaunch around the steps below. Each one gives people a reason to follow that goes beyond a countdown, and each one can be measured.",
      ],
      takeaway: "Grow Kickstarter followers with weekly work over two to four months. Start with people who have played the game, then add previews, updates and small ad tests.",
    },
    "track": {
      paragraphs: [
        "The follower number becomes useful once you compare it with your scenarios every week. The cards below show the platform rules that shape what you see and who you can reach.",
        "Those rules make your own email list important too, and our [prelaunch email list guide](/guides/kickstarter-prelaunch-email-list) covers the setup.",
        "Two weeks before your planned date, we check whether the low case covers the goal. If it doesn't, moving the launch by a few weeks usually costs less than a slow first day. A date you can meet beats a countdown you can't.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four platform rules shape how you read and reach followers",
          tips: [
            {label: "The count appears at 10", text: "Kickstarter only shows the follower count publicly once 10 or more people opt in."},
            {label: "No direct messages", text: "Kickstarter does not let you message prelaunch followers directly."},
            {label: "Updates reach everyone", text: "A prelaunch update notifies everyone currently following, so save updates for real news."},
            {label: "Your list is yours", text: "Your own email list is the one channel where you control when and how often you write."},
          ],
          source: "Kickstarter Help Center, Setting up your project's prelaunch page",
        },
        {
          kind: "flow",
          title: "Two weeks out, the low case decides whether you keep the date",
          start: "Two weeks before your planned launch date",
          nodes: [
            {question: "Has the prelaunch page been shared for at least a week?", yes: "Go on to the audience check", no: "Share it for at least a week first, as Kickstarter recommends"},
            {question: "Are most followers from warm sources rather than giveaways?", yes: "Go on to the goal check", no: "Discount the giveaway followers and rerun the low case"},
            {question: "Does the low case cover the goal from followers and your email list?", yes: "Go on to launch", no: "Move the date a few weeks, grow the audience or revisit the goal"},
          ],
          end: "Launch on the date and treat platform traffic and ads as extra",
          caption: "Guildframe's launch date check. Moving a few weeks usually costs less than a slow first day.",
        },
      ],
      takeaway: "Check your Kickstarter follower count against the low case every week. Two weeks out, move the date if the low case does not cover the goal.",
    },
    "help": {
      paragraphs: [
        "We plan and run prelaunches for tabletop creators for a living, so this math is part of every launch plan we write. You can do it yourself with a spreadsheet and the figures above. The hard part is the weekly work of growing a warm audience while you finish the game.",
        "Our prelaunch service starts with an audience brief and a landing page with a signup flow in your own accounts. We add a welcome email and prelaunch sequence, tracking, and paid creative tests with spend limits you approve.",
        "It ends with a launch readiness review, and ad spend and email software are budgeted separately from the service fee.",
        "If you want a second opinion on your follower target, share your goal, average pledge and current count with us through our [Kickstarter prelaunch marketing](/kickstarter-prelaunch-marketing) service.",
      ],
      takeaway: "You can run the follower math yourself. We help with the weekly prelaunch work: landing page, emails, tracking, ad tests and a launch readiness review.",
    },
  },
};

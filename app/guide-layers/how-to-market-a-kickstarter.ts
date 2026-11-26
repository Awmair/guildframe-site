import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "what-it-means": {
      takeaway: "Marketing a Kickstarter means helping the right players notice your game and follow it before launch. Most of the work happens before the campaign goes live.",
    },
    "who-its-for": {
      takeaway: "Describe your player in one sentence and name three games they own. That sentence picks your communities, reviewers and conventions for you.",
    },
    "three-jobs": {
      takeaway: "Before you promote a Kickstarter, build a place to send people, a reason to follow and a way to reach them again. Prelaunch followers pledge far more often.",
    },
    "channels": {
      takeaway: "Pick two or three Kickstarter marketing channels that suit your player and post every week. Free channels cost time, paid ads cost money.",
    },
    "does-kickstarter-promote": {
      paragraphs: [
        "Kickstarter does help, just not in the way many first timers hope. Its launch journey guide says projects can appear in a Launching soon section where people browsing the category can follow them.",
        "Its homepage shows a Recommended for you list based on what each visitor has searched for, browsed and backed. Its team also picks some projects as Projects We Love.",
        "Kickstarter is honest about the limit. Its Help Center says there is no secret formula for being chosen as a Project We Love, and that being selected isn't the secret to success.",
        "Its launch journey guide adds that strong early pledges help a project reach more people browsing the site. So treat platform traffic as a bonus that rewards a strong start, not as the plan.",
      ],
      takeaway: "Kickstarter promotes projects that start strong. The backers you bring on day one are what earn you the platform traffic.",
    },
    "no-budget": {
      paragraphs: [
        "You can market a first campaign with very little money, as long as you have time. The free routes are the ones above, which means communities, weekly posts, playtests, game nights and reviewer outreach with a few prototype copies.",
        "The honest ceiling is reach. Free channels grow one person at a time, so they suit a modest goal and a long prelaunch. If your funding goal needs thousands of backers, free work alone rarely gets there in a few months.",
        "One quick test comes from Meeple Mountain's 2020 marketing guide. It says a campaign is ready when you can raise at least 30% of your goal within 24 hours.",
        "That's a rule of thumb rather than a platform figure, but it tells you whether free marketing has done enough. For finding those first people one group at a time, read [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers).",
      ],
      takeaway: "You can market a Kickstarter with no budget if you have time and a modest goal. Check whether free work could raise 30% of the goal in the first 24 hours.",
    },
    "ads": {
      paragraphs: [
        "Ads are the part first timers most often start too early. An ad can only send people to a page, so if the page, the reward tiers and the follow button aren't ready, you pay for visitors who leave.",
        "Kickstarter's tabletop guide puts the cost of winning a backer through ads at $15 to $50. It says that for many tabletop creators, success relies on a 2.5x return on ad spend, which means $2.50 pledged for every $1 spent.",
        "Low priced games leave a thin ad budget, so it suggests raising the average pledge with reward tiers and add ons.",
        "We start ads with small tests once the landing page turns visitors into followers, then put more behind what works. Our [Kickstarter advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to size the spend against your rewards.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Paid ads make sense only after three checks pass",
          start: "You are deciding whether to pay for Kickstarter ads",
          nodes: [
            {question: "Does your goal need more backers than free channels can reach by launch?", yes: "Go on to the page check", no: "Stay with free channels and keep the weekly rhythm"},
            {question: "Is your landing page already turning visitors into followers?", yes: "Go on to the price check", no: "Fix the page and the follow button first"},
            {question: "Can your average pledge carry $15 to $50 per backer?", yes: "Go on to testing", no: "Raise the average pledge with reward tiers and add ons"},
          ],
          end: "Start small ad tests and put more behind what returns about 2.5x",
          caption: "The $15 to $50 range and the 2.5x return come from Kickstarter's tabletop marketing guide.",
          source: "Kickstarter blog, How to market a tabletop game in 7 steps (February 20, 2025)",
        },
      ],
      takeaway: "Start Kickstarter ads with small tests only once the page converts and the pledge can carry $15 to $50 per backer. Then scale what works.",
    },
    "rhythm": {
      paragraphs: [
        "Marketing works best as a small, steady habit. Kickstarter's launch journey guide plans about 50 days of setup, creative work and paid testing before launch. We like to start the community work earlier when the game is ready to show.",
        "In our planning example, the email list starts 3 months or more before launch. The Kickstarter prelaunch page opens 6 to 12 weeks out, and the project goes to review at least two weeks before the date.",
        "A good week for a first timer is simple, and the cards below show it.",
        "To know when you have enough people, our guide to [how many followers you need before launch](/guides/kickstarter-followers-before-launch) turns your goal into a target. For the full schedule with weeks and budget lines, our [board game Kickstarter marketing plan](/guides/board-game-kickstarter-marketing-plan) lays it out.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "One good marketing week before a Kickstarter has four habits",
          tips: [
            {label: "Show the game once", text: "Post one thing that shows the game: a photo, a short clip, a rules preview or a playtest."},
            {label: "Answer every comment", text: "Replies are where a follower turns into someone who pledges on day one."},
            {label: "Invite people to follow", text: "Point new people to the prelaunch page and the email list in every post and demo."},
            {label: "Note the source", text: "Write down where each new follower came from, so you know which channel to keep."},
          ],
        },
      ],
      takeaway: "Kickstarter marketing is a weekly habit: one post, every reply answered, two follow links shared and each new follower's source noted.",
    },
    "help": {
      paragraphs: [
        "You can do all of this yourself, and plenty of creators do. The pressure point is that weekly posts, community replies, email and ad tests all fall to one person. Often the game itself still needs work too.",
        "We plan and run prelaunch marketing for tabletop creators for a living. We write an audience brief from your game and playtest feedback, then build the landing page and signup flow in your own accounts. We also write the welcome email and prelaunch sequence.",
        "Then we set up tracking and run paid creative tests with spend limits you approve. You keep the game, the community voice and the final say, and ad spend and email software sit outside our fee.",
        "If you'd rather hand over the whole campaign, read our guide to [choosing a board game Kickstarter marketing agency](/guides/choose-board-game-kickstarter-marketing-agency) first. When you're ready, tell us about your game through [Kickstarter prelaunch marketing](/kickstarter-prelaunch-marketing), or see the full range of [Kickstarter launch services for tabletop games](/kickstarter-launch-services).",
      ],
      takeaway: "Run Kickstarter marketing yourself if you have the hours. If not, we can take the prelaunch page, emails, tracking and ad tests while you keep the community voice.",
    },
  },
};

import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "where-backers-come-from": {
      paragraphs: [
        "If you've told friends and family and now have twenty interested people, you're exactly where most first campaigns start. Backers reach a Kickstarter in three ways. They come from your own list, from Kickstarter itself, or from outside traffic such as communities, reviews and ads.",
        "For a new creator, the first group does the heavy lifting. Kickstarter's homepage recommends projects based on what each visitor has searched for and backed, and its Help Center says there is no secret formula for being featured.",
        "Its launch journey guide adds that strong early figures can help a project appear to more people browsing the site. So the platform tends to reward a start you made yourself.",
        "This page is about finding those first people. For the whole journey, see [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter), and for the wider picture read [how to market a Kickstarter](/guides/how-to-market-a-kickstarter).",
      ],
      takeaway: "Your first hundred Kickstarter backers are people you go and find, in rings that start close to home. Kickstarter tends to reward a start you made yourself.",
    },
    "playtesters": {
      takeaway: "Playtesters and local game stores are your warmest audience. End every session by asking for a follow, an email signup and one friend who would enjoy the game.",
    },
    "communities": {
      paragraphs: [
        "Online communities are where most first time creators find backers beyond their own circle. Discord servers, Facebook groups, subreddits and BoardGameGeek all hold players who already enjoy games like yours.",
        "The etiquette matters more than the platform, and the rules below keep you welcome. Every community sets its own self promotion rules, so read them before you post anything about your campaign.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Community rules that keep a first time creator welcome",
          tips: [
            {label: "Join as a player first", text: "Share work in progress where the group allows it, and answer questions without pushing a link."},
            {label: "BoardGameGeek has one place for promotion", text: "Its promotion guide says to announce games in the Press Releases forums, and promoting anywhere else is not permitted."},
            {label: "No promotional private messages", text: "On BoardGameGeek they can get an account warned, suspended or deleted. Kickstarter warns that unsolicited messages could get you suspended too."},
            {label: "Three beats thirty", text: "Being a useful member of three communities beats dropping a link in thirty."},
          ],
          source: "BoardGameGeek, Guide to Promoting Your Game; Kickstarter",
        },
      ],
      takeaway: "To get Kickstarter backers from communities, join as a player, follow each group's promotion rules and never send promotional private messages.",
    },
    "in-person": {
      takeaway: "Plan a tabletop show around your campaign: a few months before launch it brings followers, during the campaign it brings pledges and an update story.",
    },
    "follow": {
      paragraphs: [
        "Interest fades fast unless it lands somewhere. That's why every ring of people needs the same two places to go. One is your Kickstarter prelaunch page and the other is your own email signup.",
        "The prelaunch page matters because Kickstarter emails followers when the project goes live. On average, 32% of prelaunch followers pledge once it does, compared with 17% of people who follow after launch.",
        "Kickstarter recommends setting up and sharing the page at least one week before your launch date. The follower count shows on the page once ten or more people opt in.",
        "Our own planning example opens it 6 to 12 weeks before launch, with the email list started 3 months or more ahead.",
        "The email list matters because you control it. You can send a rules preview, a launch reminder and a last day nudge whenever you choose.",
        "Setup and sequences live in our [prelaunch email list guide](/guides/kickstarter-prelaunch-email-list), and the page itself in our [Kickstarter prelaunch page guide](/guides/kickstarter-prelaunch-page-guide). Before you ask anyone to follow, have these three things ready.",
      ],
      takeaway: "Send every new contact to two places: your Kickstarter prelaunch page and your email signup. On average 32% of prelaunch followers pledge at launch.",
    },
    "friends-family": {
      takeaway: "Friends and family give day one momentum but rarely fund a board game alone. Ask them to pledge in the first hours and share with one person who plays.",
    },
    "reviewers": {
      takeaway: "Reviewers and previews are borrowed reach. Start early, send a playable prototype and point every preview to your prelaunch page.",
    },
    "not-enough": {
      visuals: [
        {
          kind: "flow",
          title: "Check three things before you trust your first backers to carry the launch",
          start: "You know your funding goal and your average pledge",
          nodes: [
            {question: "Is your prelaunch page live and an email signup ready?", yes: "Go on to the target check", no: "Set up both first, so interest has somewhere to land"},
            {question: "Does the follower target for your goal look reachable with free work?", yes: "Go on to the day one check", no: "Add paid ads as the fifth ring, and test small first"},
            {question: "Could your circle and your list cover about 30% of the goal in 24 hours?", yes: "Go on to launch planning", no: "Widen the rings through communities, shows and reviewers before you set a date"},
          ],
          end: "Set the launch date and ask your first rings to pledge in the first hours",
          caption: "The 30% in 24 hours test is a rule of thumb from Meeple Mountain's 2020 guide. Kickstarter's tabletop guide puts an ad backer at $15 to $50.",
          source: "Meeple Mountain (October 14, 2020); Kickstarter blog (February 20, 2025)",
        },
      ],
      takeaway: "If free work can't reach your follower target, paid ads are the fifth ring. Test small, and walk away from anyone promising a set number of backers.",
    },
    "help": {
      paragraphs: [
        "Finding the first hundred is personal work, and much of it should stay yours. Players want to talk to the designer, so the playtests, community replies and demos are best done by you.",
        "We take on the parts that eat your evenings. Through our prelaunch marketing service we build the landing page and signup flow in your own accounts, then write the welcome email and prelaunch sequence.",
        "We set up tracking so you can see which ring each follower came from, and run paid creative tests with spend limits you approve. Ad spend and email software sit outside our fee.",
        "If you'd like a second opinion first, share your goal, your expected pledge and how many people you have today through [Kickstarter prelaunch marketing](/kickstarter-prelaunch-marketing). We'll tell you plainly how close the plan is, and our wider [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover the rest of the campaign.",
      ],
      takeaway: "Keep playtests, community replies and demos yourself. We can build the prelaunch page, emails, tracking and ad tests that turn interest into Kickstarter backers.",
    },
  },
};

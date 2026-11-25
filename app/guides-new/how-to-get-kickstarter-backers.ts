import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "how-to-get-kickstarter-backers",
  title: "How to Get Your First Kickstarter Backers When Nobody Knows Your Game",
  seoTitle: "How to Get Kickstarter Backers: Your First 100",
  description: "How to get backers on Kickstarter when you have no audience. Where the first 100 people come from for a board game and what to ask them to do.",
  tag: "Prelaunch",
  answer: "Your first Kickstarter backers come from people you reach yourself, one group at a time, starting with playtesters, local game groups, online communities where your players already talk, and people who see the game at a demo or in a review. Ask each of them to follow your prelaunch page and join your email list, so they hear the moment you launch.",
  servicePath: "/kickstarter-prelaunch-marketing",
  serviceLabel: "Kickstarter prelaunch marketing",
  relatedSlugs: ["kickstarter-followers-before-launch", "kickstarter-prelaunch-page-guide", "board-game-reviewer-outreach"],
  sources: [
    { label: "How can my project get featured or selected as a Project We Love?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236466-how-can-my-project-get-featured-or-selected-as-a-project-we-love" },
    { label: "From Concept to Fulfillment: The Complete Kickstarter Journey (September 9, 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/from-concept-to-fulfillment-the-complete-kickstarter-journey/" },
    { label: "How To Market a Tabletop Game in 7 Steps (February 20, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps/" },
    { label: "Guide to Promoting Your Game", publisher: "BoardGameGeek", href: "https://boardgamegeek.com/wiki/page/Guide_to_Promoting_Your_Game" },
    { label: "How to Get Featured on Kickstarter (updated February 15, 2024)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/how-to-get-featured-on-kickstarter/" },
    { label: "PAX Unplugged news and dates", publisher: "PAX Unplugged", href: "https://unplugged.paxsite.com/en-us/info/news.html" },
    { label: "Exhibit at UK Games Expo", publisher: "UK Games Expo", href: "https://www.ukgamesexpo.co.uk/exhibit/" },
    { label: "When is Gen Con?", publisher: "Gen Con", href: "https://gencon.zendesk.com/hc/en-us/articles/360053945412-When-is-Gen-Con" },
    { label: "SPIEL Essen", publisher: "SPIEL Essen", href: "https://spiel-essen.de/en" },
    { label: "The Anatomy of a Great Kickstarter Prelaunch Page (October 29, 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/the-anatomy-of-a-great-kickstarter-prelaunch-page/" },
    { label: "Setting up your project's prelaunch page", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page" },
    { label: "Board Game Kickstarter Marketing 101 (October 14, 2020)", publisher: "Meeple Mountain", href: "https://www.meeplemountain.com/articles/board-game-kickstarter-marketing-101/" },
  ],
  sections: [
    {
      id: "where-backers-come-from",
      title: "Where Kickstarter backers actually come from",
      paragraphs: [
        "If you've told friends and family and now have twenty interested people, you're exactly where most first campaigns start. Backers reach a Kickstarter in three ways. They come from your own list, from Kickstarter itself, or from outside traffic such as communities, reviews and ads.",
        "For a new creator, the first group does the heavy lifting. Kickstarter's homepage recommends projects based on what each visitor has searched for and backed, and its Help Center says there is no secret formula for being featured. Its launch journey guide adds that strong early figures can help a project appear to more people browsing the site. So the platform tends to reward a start you made yourself.",
        "This page is about finding those first people. For the whole journey, see [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter), and for the wider picture read [how to market a Kickstarter](/guides/how-to-market-a-kickstarter).",
        "The takeaway is simple. Your first hundred backers are people you go and find, in rings that start close to home.",
      ],
      visual: {
        kind: "steps",
        title: "The first 100 backers come in rings, starting with people who played it",
        steps: [
          { label: "People who played it", detail: "Playtesters, friends who sat at the table, local groups." },
          { label: "People in your communities", detail: "Discord servers, forums, groups and subreddits for your kind of game." },
          { label: "People who saw it shown", detail: "Game nights, store demos and conventions." },
          { label: "People reached through reviewers", detail: "Previews and videos from creators your players trust." },
          { label: "People reached through ads", detail: "Paid traffic, once the page and signup are ready." },
        ],
        source: "Guildframe launch planning",
      },
      source: 0,
    },
    {
      id: "playtesters",
      title: "Start with the people who have already played it",
      paragraphs: [
        "Your warmest audience is everyone who has sat at a table with your game. Kickstarter's tabletop guide suggests playtesting with friends and family first, then widening to online communities, reviewers and niche groups. It also mentions digital tools such as Tabletop Simulator for reaching players further away.",
        "Every playtest is a chance to ask for a follow. At the end of a session, ask whether they'd follow the prelaunch page, whether they'd join the email list, and whether they know one other person who'd enjoy the game.",
        "Local game stores and game nights work the same way. A store owner who has watched your game being played can tell regulars about it. The numbers are small, but in our experience these are the people most likely to pledge on day one.",
      ],
      source: 2,
    },
    {
      id: "communities",
      title: "Go where your players already talk",
      paragraphs: [
        "Online communities are where most first time creators find backers beyond their own circle. Discord servers, Facebook groups, subreddits and BoardGameGeek all hold players who already enjoy games like yours.",
        "The etiquette matters more than the platform. Join as a player first, share work in progress where the group allows it, and answer questions without pushing a link. Every community sets its own self promotion rules, so read them before you post anything about your campaign.",
        "BoardGameGeek is strict about this. Its guide to promoting a game says to announce it in the Press Releases forums, and that promoting anywhere else is not permitted. Promotional private messages can get an account warned, suspended or deleted. Kickstarter gives a similar warning about unsolicited messages, which could get you suspended from the platform.",
        "So being a useful member of three communities beats dropping a link in thirty.",
      ],
      source: 3,
    },
    {
      id: "in-person",
      title: "Show the game in person",
      paragraphs: [
        "Nothing turns a stranger into a follower faster than a game they've just enjoyed. Game nights, store demos and conventions are slow to scale, but each person who plays and asks where to follow is worth chasing.",
        "If a big show is within reach, plan it around your campaign. A show a few months before launch gives you followers, while a show during the campaign gives you pledges and a story for an update. These are the next dates for four major shows, checked on each organizer's site when we updated this guide.",
      ],
      list: [
        "PAX Unplugged, Philadelphia, December 4 to 6, 2026",
        "UK Games Expo, NEC Birmingham, June 4 to 6, 2027",
        "Gen Con, Indianapolis, August 5 to 8, 2027",
        "SPIEL Essen, October 21 to 24, 2027",
      ],
      visual: {
        kind: "timeline",
        title: "The next four major tabletop shows run from December 2026 to October 2027",
        events: [
          { when: "Dec 4 to 6, 2026", label: "PAX Unplugged", detail: "Philadelphia" },
          { when: "Jun 4 to 6, 2027", label: "UK Games Expo", detail: "NEC Birmingham" },
          { when: "Aug 5 to 8, 2027", label: "Gen Con", detail: "Indianapolis", highlight: true },
          { when: "Oct 21 to 24, 2027", label: "SPIEL Essen", detail: "Essen, Germany" },
        ],
        caption: "Dates as published by each organizer on November 25, 2026. Check again before you book travel.",
        source: "PAX Unplugged; UK Games Expo; Gen Con; SPIEL Essen",
      },
    },
    {
      id: "follow",
      title: "Turn interest into a follow you can use",
      paragraphs: [
        "Interest fades fast unless it lands somewhere. That's why every ring of people needs the same two places to go. One is your Kickstarter prelaunch page and the other is your own email signup.",
        "The prelaunch page matters because Kickstarter emails followers when the project goes live. On average, 32% of prelaunch followers pledge once it does, compared with 17% of people who follow after launch. Kickstarter recommends setting up and sharing the page at least one week before your launch date, and the follower count shows on the page once ten or more people opt in. Our own planning example opens it 6 to 12 weeks before launch, with the email list started 3 months or more ahead.",
        "The email list matters because you control it. You can send a rules preview, a launch reminder and a last day nudge whenever you choose. Setup and sequences live in our [prelaunch email list guide](/guides/kickstarter-prelaunch-email-list), and the page itself in our [Kickstarter prelaunch page guide](/guides/kickstarter-prelaunch-page-guide). Before you ask anyone to follow, have these three things ready.",
      ],
      visual: {
        kind: "checklist",
        title: "Have the pitch, the link and the ask ready before you ask anyone to follow",
        groups: [
          { name: "The pitch", items: ["One sentence on who the game is for", "Three clear photos or renders", "A short clip of one turn"] },
          { name: "The link", items: ["Approved Kickstarter prelaunch page", "Email signup form", "A short link or QR code to share"] },
          { name: "The ask", items: ["Follow the prelaunch page", "Join the email list", "Tell one friend who plays"] },
        ],
      },
      source: 9,
    },
    {
      id: "friends-family",
      title: "What friends and family can and can't do",
      paragraphs: [
        "Friends and family are good for one thing above all, which is momentum on day one. A handful of early pledges makes the page look alive to the strangers who arrive next.",
        "They're rarely enough to fund a game by themselves, and that's normal. Most of them aren't tabletop players, so they may back once but won't share it in the groups that matter. Ask them to pledge in the first hours and to send the link to one person who plays games.",
        "A planning test from Meeple Mountain's 2020 guide helps here. It says a campaign is ready when you can raise at least 30% of your goal within 24 hours. Treat it as a rule of thumb, then count how much of that 30% your friends, family, playtesters and email list could really cover.",
      ],
      source: 11,
    },
    {
      id: "reviewers",
      title: "Borrow audiences through reviewers and previews",
      paragraphs: [
        "Reviewers and preview channels have audiences that already trust them, which makes them the fourth ring. One honest preview can reach more of your players than months of posting on your own.",
        "They need lead time, a playable prototype and a clear ask, so start early. Our [board game reviewer outreach guide](/guides/board-game-reviewer-outreach) covers who to contact, when and what to send. Treat every preview as borrowed reach, and make sure it points to your prelaunch page.",
      ],
    },
    {
      id: "not-enough",
      title: "When the first hundred is not enough",
      paragraphs: [
        "A hundred real backers can fund a small game. In an illustrative case with a $50 average pledge, that covers a $5,000 goal, but many goals need more. Our guide on [how many followers you need before launch](/guides/kickstarter-followers-before-launch) turns your own goal into a target with cautious conversion rates.",
        "If the target is bigger than free work can reach, paid ads are the fifth ring. Kickstarter's tabletop guide puts the cost of winning a backer through ads at $15 to $50, so test small and size the spend with our [Kickstarter advertising budget guide](/guides/kickstarter-advertising-budget-board-games).",
        "Be wary of anyone who promises a set number of backers for a fee. Our guide to [choosing a board game Kickstarter marketing agency](/guides/choose-board-game-kickstarter-marketing-agency) lists the red flags to watch for.",
      ],
      source: 2,
    },
    {
      id: "help",
      title: "Where Guildframe comes in",
      paragraphs: [
        "Finding the first hundred is personal work, and much of it should stay yours. Players want to talk to the designer, so the playtests, community replies and demos are best done by you.",
        "We take on the parts that eat your evenings. Through our prelaunch marketing service we build the landing page and signup flow in your own accounts, then write the welcome email and prelaunch sequence. We set up tracking so you can see which ring each follower came from, and run paid creative tests with spend limits you approve. Ad spend and email software sit outside our fee.",
        "If you'd like a second opinion first, share your goal, your expected pledge and how many people you have today through [Kickstarter prelaunch marketing](/kickstarter-prelaunch-marketing). We'll tell you plainly how close the plan is, and our wider [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover the rest of the campaign.",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I get backers if I have no followers?",
      answer: "Start with people who have played your game, then join two or three communities where your players already talk. Ask everyone to follow your prelaunch page and join your email list, and build outward one group at a time.",
    },
    {
      question: "How many backers can I expect from friends and family?",
      answer: "Usually only a small share of what a game needs, because most of them aren't tabletop players. They're most useful as early pledges on day one, which make the page look alive to the strangers who arrive next.",
    },
    {
      question: "Do people browse Kickstarter and find games without help?",
      answer: "Some do. Kickstarter recommends projects to visitors based on their searches and backings, and strong early figures can help a project appear to more people. Its Help Center also says being featured isn't the secret to success, so plan on bringing your first backers yourself.",
    },
    {
      question: "Is it worth going to a convention before I launch?",
      answer: "Often, if one is within reach. People who play your game at a demo are among the warmest followers you can get. Bring a card or sign with a link to your prelaunch page so every demo ends with a follow.",
    },
    {
      question: "Can I post my Kickstarter on Reddit and BoardGameGeek?",
      answer: "Only where the rules allow it. BoardGameGeek asks creators to announce games in its Press Releases forums and does not permit promotion elsewhere. Each subreddit sets its own self promotion rules, so read them before you post a link.",
    },
    {
      question: "How do I find my first 100 backers?",
      answer: "Work in rings. Start with playtesters and local groups, then online communities, then demos in person, then reviewers and previews. Paid ads come last, once the prelaunch page and email signup are ready to catch people.",
    },
    {
      question: "Should I pay someone who promises backers?",
      answer: "Be very careful. Nobody can guarantee how many people will pledge. A fair service describes the work, the reporting and who controls the ad accounts, and our agency guide lists the red flags to watch for.",
    },
  ],
};

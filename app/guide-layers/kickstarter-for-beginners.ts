import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "start-here": {
      takeaway: "Kickstarter for beginners in one line: backers pledge toward your goal, nobody pays unless you reach it, and once you fund you owe every reward.",
    },
    "how-it-works": {
      paragraphs: [
        "The mechanics are simpler than they look, and three or four rules explain most of what happens.",
        "How does Kickstarter work? You build a project page with rewards, set a funding goal and a deadline, and launch. Once the campaign is live, the goal and the deadline are locked.",
        "People pledge money for the rewards. If the total reaches the goal by the deadline, their pledges are collected.",
        "What happens if I don't hit my goal? No money changes hands. Backers are not charged, you receive nothing, and Kickstarter takes no fee.",
        "Kickstarter says there is no platform consequence for starting over, and our guide on [why Kickstarter campaigns fail](/guides/why-kickstarter-campaigns-fail) covers how to relaunch stronger.",
        "What is a pledge, and what does a backer expect? A pledge is a promise to pay for a reward if the project funds, and backers can cancel it at any time before the campaign ends.",
        "After a successful campaign it is collected and can no longer be canceled. Backers then expect the reward you described, and under Kickstarter's rules you are responsible for delivering it.",
        "How long does a campaign run? You choose a length from 1 to 60 days, and Kickstarter recommends 30 days or less. Our guide to [Kickstarter review and launch timing](/guides/kickstarter-review-launch-timeline) covers the rules around it.",
      ],
      takeaway: "Kickstarter is all or nothing: nobody pays anything unless you fund, and once you fund you owe the rewards. Campaigns run 1 to 60 days, and 30 or less is recommended.",
    },
    "who-can-launch": {
      paragraphs: [
        "Before you plan anything else, check that Kickstarter will let you launch from where you live, because the rules are strict and set by country.",
        "Who can launch a Kickstarter? Anyone 18 or older who lives in a supported country, has a government ID from that country and has a bank account there. The account has to be in your name, or your company's name, and accept direct deposits in the currency you raise.",
        "Can I launch from outside the United States? Yes, if you live in one of the supported countries. If you don't, Kickstarter points to doing business where projects are allowed, and mentions Stripe Atlas as one way to set up a US company.",
        "Kickstarter says it cannot give legal or tax advice on that, so talk to an attorney or tax professional first.",
        "Do I need a company or an LLC? No. Individuals can launch, and a business can too, as long as it launches in the country where it is registered.",
        "Whether a company makes sense for you is a question for an accountant, because it depends on your country and your plans. Kickstarter lists these countries as places creators can launch from:",
      ],
      takeaway: "To launch a Kickstarter you need to be 18 or older, live in a supported country and hold a local ID and bank account. You don't need a company.",
    },
    "money": {
      paragraphs: [
        "Money is where most beginner worries sit, so here are the plain facts with a link to the page that has the detail.",
        "Is Kickstarter free? Setting up a project costs nothing, and there are no fees if you don't fund. If you do, Kickstarter takes 5% of the total raised, and payment processing adds 3% plus $0.20 per pledge on a US project.",
        "Our guide to [Kickstarter fees](/guides/kickstarter-fees) works through the math on a real pledge.",
        "When do I get the money? Kickstarter spends 14 calendar days after your deadline collecting and processing pledges, then starts the payout. Your bank may take another 3 to 14 business days to show it.",
        "Our guide on [what happens after Kickstarter is funded](/guides/what-happens-after-kickstarter-is-funded) covers what to do in those weeks.",
        "Do I pay tax on Kickstarter money? You may. Kickstarter says creators may owe income or other taxes, and the amount can depend on things like project expenses.",
        "It cannot give tax advice and recommends an accountant or tax advisor, and we don't give tax advice either.",
        "How much does it cost to launch? More than the printing quote, because art, prototypes, the page and marketing come out of your pocket before anyone pledges. Our guide to [board game Kickstarter cost](/guides/board-game-kickstarter-cost) adds it up line by line.",
      ],
      takeaway: "Kickstarter is free to set up and charges 5% plus processing only if you fund. Budget for two stages: money you spend before launch and money from the funding.",
    },
    "before-launch": {
      paragraphs: [
        "Most of what decides a campaign happens before you press launch, so these are the questions worth answering early.",
        "Can I launch with a prototype? Yes, as long as the page shows it honestly and labels what is not final. Our guide [is my game ready for Kickstarter](/guides/is-my-game-ready-for-kickstarter) covers how finished the game, art and numbers should be.",
        "Do I need an audience first? Yes, because on the campaigns we work on, the first day comes mostly from people who already knew about the game. A prelaunch page and an email list are how you gather them.",
        "In our own planning, the email list starts 3 months or more before launch and the Kickstarter prelaunch page opens 6 to 12 weeks out. Our guide on [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers) covers where the first hundred come from.",
        "How long does it take to prepare? Kickstarter's own review takes up to three business days, plus up to three more after changes, so we submit at least two weeks before the launch date.",
        "The preparation before that usually takes months for a first game. Our guide on [when to launch a Kickstarter](/guides/when-to-launch-a-kickstarter) helps you work back from a date.",
        "Do I need to know marketing and design? You need to learn the basics, and both can be learned. Start with [how to market a Kickstarter](/guides/how-to-market-a-kickstarter) and [how to design a Kickstarter page](/guides/how-to-design-a-kickstarter-page).",
      ],
      takeaway: "If you only do one thing early, start gathering followers. Open an email list 3 months or more before launch and submit for review at least two weeks out.",
    },
    "during-and-after": {
      paragraphs: [
        "The live weeks and the months after are where a creator earns trust, so it helps to know what they ask of you.",
        "What do I do while the campaign is live? The cards below cover the habits. Our guide to [live campaign updates](/guides/kickstarter-live-campaign-updates) shows what to post and when.",
        "What happens when it ends? If you funded, pledges are collected, the payout follows, and you start collecting addresses and extra orders, usually through a pledge manager. Then comes manufacturing and shipping.",
        "Kickstarter says that for creators who manufacture overseas, campaign end to the last reward arriving is usually about twelve months. Our comparison of [pledge managers](/guides/pledge-managers-compared) explains the tools.",
        "What do I owe backers? Under Kickstarter's Terms of Use you have to complete the project and deliver the rewards.",
        "If something makes that impossible, Kickstarter expects you to explain what happened, show how the money was used and offer refunds.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "What a live Kickstarter campaign asks of a first time creator",
          tips: [
            {label: "Answer comments", text: "Reply to backer questions on the campaign page while it is live, so nobody waits for an answer."},
            {label: "Post updates that show progress", text: "Use updates to show the game moving forward during the campaign."},
            {label: "Expect a quiet middle", text: "Pledges usually slow in the middle stretch, so plan updates for it rather than worrying."},
            {label: "Keep going after the end", text: "The promise lasts until the last box arrives, so keep honest updates coming through fulfillment."},
          ],
        },
      ],
      takeaway: "Your Kickstarter promise lasts until the last reward arrives, often about twelve months after an overseas print run. Regular honest updates keep backers on your side.",
    },
    "is-it-right": {
      paragraphs: [
        "Kickstarter is one route to publishing a game, so it is worth checking it fits before you commit months to it.",
        "Is Kickstarter still worth it for board games? For many creators, yes. Kickstarter reported 6,646 tabletop projects launched in 2024, 5,314 funded and $220 million pledged to successful tabletop campaigns.",
        "That 80% success rate covers every tabletop project, including experienced publishers, so it is encouraging context rather than a promise.",
        "Should I pitch a publisher or self publish? Pitching a publisher means they carry the cost and the risk, and you usually earn a smaller share. Self publishing on Kickstarter means you carry the cost, the work and the risk, and keep more control.",
        "If you would rather design games than run a small business, pitching first is a fair choice.",
        "Should I use Kickstarter or Gamefound? Both work for tabletop, and the right one depends on where your players already back games. Our guide to [Kickstarter vs Gamefound](/guides/kickstarter-vs-gamefound) compares them.",
        "Can I run a Kickstarter by myself? Yes, many creators do, and it means learning the page, the marketing and the logistics yourself. If you hire help, our guide to [choosing a board game Kickstarter marketing agency](/guides/choose-board-game-kickstarter-marketing-agency) covers what to ask.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three questions tell you whether to self publish on Kickstarter",
          start: "You have a game you want to publish",
          nodes: [
            {question: "Do you want to carry the cost, the work and the risk yourself?", yes: "Go on to the country check", no: "Pitch a publisher first, because they carry the cost and the risk"},
            {question: "Do you live in a supported country with a local ID and bank account?", yes: "Go on to the platform check", no: "Ask an attorney or tax professional about launching through a business"},
            {question: "Do your players already back games on Kickstarter?", yes: "Go on to planning", no: "Compare Gamefound, where your players may already back"},
          ],
          end: "Self publish on Kickstarter and start your prelaunch",
        },
      ],
      takeaway: "Kickstarter funded about 80% of tabletop projects in 2024, but that includes experienced publishers. Doing it alone is possible, so get help only where it saves real time or risk.",
    },
    "next-steps": {
      paragraphs: [
        "You don't need every answer before you start, only the next one, so pick the step that matches where you are.",
        "If you want the whole map, our guide on [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter) walks from prototype to delivery in order.",
        "If you want a second pair of eyes, we do this for a living. Our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover planning, the page, prelaunch and the live campaign.",
        "When you are ready, share your project through the [enquiry form](/buy) or book a 30 minute call.",
      ],
      takeaway: "Start with the next question, not every question. The tabletop A to Z guide gives the whole map, and a 30 minute call is an easy first step.",
    },
  },
};

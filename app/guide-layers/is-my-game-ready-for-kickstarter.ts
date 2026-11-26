import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-answer": {
      takeaway: "Your game is ready for Kickstarter when it works without you, looks like itself, has real numbers behind it and has people waiting for launch day.",
    },
    "the-game": {
      paragraphs: [
        "The first question is whether the game works without you in the room. Friends are a fine start, but they can't tell you that.",
        "Kickstarter's playtesting guide puts it plainly, noting that friends and family will tell you the game is great. It suggests testing with other designers, players of similar games and design events, then finishing with blind tests where you hand over the box and say nothing.",
        "If players can't work something out from the written rules alone, the guide says the rules need to change. There's no magic number of sessions, and Kickstarter's guide doesn't give one.",
        "We look for two signs instead: strangers finish the game from the rulebook, and your last few sessions changed only small things. When both are true, your design is ready to show.",
        "Our guide to [explaining gameplay and the rulebook on your page](/guides/board-game-kickstarter-gameplay-rulebook) picks up from there.",
      ],
      takeaway: "A board game is ready to show on Kickstarter when strangers finish it from the written rules and your recent playtests change only small things.",
    },
    "art": {
      paragraphs: [
        "Creators often think every card must be finished before launch, and that belief keeps good games waiting for years. You need enough art to show backers what the final game will look like, and that's less than you'd think.",
        "For most board games, the cards below are enough. The rest can be funded by the campaign, as long as the page says clearly what's final and what isn't.",
        "If you plan to hire a designer, our guide on [what to send your Kickstarter campaign designer](/guides/what-to-send-kickstarter-campaign-designer) shows how to mark finished files and placeholders.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Enough art for a Kickstarter launch is less than every card",
          tips: [
            {label: "Finished cover or box art", text: "This is what backers judge first, so it should look like the final game."},
            {label: "One consistent style", text: "Every image on the page should feel like the same game."},
            {label: "A handful of final components", text: "For example a few cards, a section of the board or a hero miniature."},
            {label: "Say what is final", text: "Mark finished art and placeholders on the page, so backers know what the campaign will fund."},
          ],
        },
      ],
      takeaway: "Before Kickstarter you need finished cover art, one consistent style and a few final components. Enough art to set the look is the real target.",
    },
    "prototype": {
      takeaway: "You can launch a board game on Kickstarter with a prototype. Label every image as prototype, render or final art, and check your category's rules first.",
    },
    "numbers": {
      takeaway: "Get a written manufacturer quote and real fulfillment quotes before you set a goal. Then add 8 to 10 percent fees and a 20 to 30 percent contingency.",
    },
    "people": {
      paragraphs: [
        "A finished game with nobody waiting still struggles, because a new creator can't count on Kickstarter to fill an empty first day. Building those people takes months, so start early.",
        "Kickstarter's September 2026 journey post recommends activating your prelaunch page right away, so it gathers followers while you build everything else. For a first time creator that page only opens after review approval.",
        "So our planning example starts the email list 3 months or more before launch and opens the Kickstarter prelaunch page 6 to 12 weeks out. Show the game somewhere every week in between.",
        "Our guides on [how many followers you need before launch](/guides/kickstarter-followers-before-launch) and [how to get your first Kickstarter backers](/guides/how-to-get-kickstarter-backers) cover the targets and the sources.",
        "Reviews aren't required before launch, but an outside voice is the cheapest trust a new creator can add. Our guide to [board game reviewer outreach](/guides/board-game-reviewer-outreach) explains how to ask.",
      ],
      takeaway: "Start the people work now, even if the game needs more time. Open an email list 3 months or more before launch and the prelaunch page 6 to 12 weeks out.",
    },
    "can-wait": {
      takeaway: "Stretch goals, a full website and final art for every card can wait. Reward tier contents cannot, because tiers lock once someone pledges.",
    },
    "readiness-check": {
      visuals: [
        {
          kind: "flow",
          title: "Fix the first gap you hit before you pick a launch date",
          start: "You want to know if your game is ready for Kickstarter",
          nodes: [
            {question: "Has a stranger played it from the written rules alone?", yes: "Go on to the look", no: "Run blind tests and fix the rules first"},
            {question: "Could you photograph cover art and a few final components this week?", yes: "Go on to the numbers", no: "Finish the cover and a handful of final pieces"},
            {question: "Do you have a written print quote and rough shipping costs?", yes: "Go on to the people", no: "Get quotes before you set a goal or a price"},
            {question: "Can you name your day one backers and how you'll reach them?", yes: "Go on to the date", no: "Open an email list and show the game every week"},
          ],
          end: "Pick a launch date",
          caption: "Guildframe's readiness order. Each no is a task for your plan, not a verdict on your game.",
        },
      ],
      takeaway: "Answer the six readiness questions on paper before you choose a Kickstarter launch date. Fix gaps in order: the game, the look, the numbers, then the people.",
    },
    "not-ready-yet": {
      paragraphs: [
        "Not being ready is normal, and finding out now is far cheaper than finding out on launch day. Three focused months can close most of the gap.",
        "Kickstarter's tabletop marketing guide encourages building a rough prototype quickly and testing it early, and that's where most first games still are.",
        "So spend the first month on blind tests and rules fixes while an email signup goes live. Spend the second on cover art and quotes, and the third on showing the game every week.",
        "When you're picking a date, our guide on [when to launch a Kickstarter](/guides/when-to-launch-a-kickstarter) helps you choose.",
        "We help creators at exactly this point. Our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) start with an asset review and a launch schedule with named responsibilities. Once your art is ready, you can also ask for a free opening mockup of your campaign page, with no payment or obligation.",
      ],
      takeaway: "If your game isn't ready for Kickstarter yet, three focused months can close most of the gap: fix the game, set the look and numbers, then gather people.",
    },
  },
};

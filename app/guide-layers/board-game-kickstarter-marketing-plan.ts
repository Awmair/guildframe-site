import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    positioning: {
      takeaway: "Write the one sentence pitch before you choose any channel, because every board game marketing channel repeats it.",
    },
    readiness: {
      takeaway: "Buy traffic only after reward contents, shipping countries and the costs behind each tier are confirmed.",
    },
    phases: {
      paragraphs: [
        "We run board game marketing in five phases, and each one has a check before the next begins. This eight week example covers the last eight weeks before launch.",
        "It assumes you already have a playable prototype, usable artwork, reward cost estimates and an email signup that opened a month or more earlier. If those inputs are missing, move the dates instead of skipping the checks.",
        "Give each row an owner and a review date. You can do the work in house or bring in help for single stages. The useful question at each review is whether the next phase has what it needs.",
        "Kickstarter's own advice is to start planning promotion as soon as you decide to run a project, beginning with the community you already have.",
      ],
      visuals: [
        {
          kind: "stats",
          title: "Three lead times anchor the board game marketing plan",
          stats: [
            {value: "3 months+", label: "Email list running before launch"},
            {value: "6 to 12 weeks", label: "Prelaunch page open before launch"},
            {value: "2 weeks+", label: "Submitted for Kickstarter review before launch"},
          ],
          caption: "Guildframe's house timeline, not a Kickstarter rule.",
        },
      ],
      takeaway: "Give each marketing phase an owner and a review date, and move to the next phase only when its check passes.",
    },
    channels: {
      takeaway: "Plan your email list, Kickstarter followers, paid ads and reviewers side by side, because each one does a job the others cannot.",
    },
    "worked-budget": {
      paragraphs: [
        "A board game marketing strategy needs a spending rule as much as a channel list. In this hypothetical USD example, a publisher sets aside $1,000 for paid media.",
        "Campaign design, ad management, email software and production have separate budgets. The amounts are invented planning inputs, not a Guildframe quote, an industry average or a recommended minimum.",
        "Suppose the first $250 test produces 50 valid signups. That is $5 per signup and leaves $750 unspent. It does not tell you what a backer will cost.",
        "So we check that the welcome email arrived and subscribers used the game material before approving another test. The [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) shows how to set the ceiling from your reward margin.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Release the next slice of ad budget only when its condition passes",
          start: "Example: a $1,000 media allowance",
          nodes: [
            {question: "Did the page, signup event and welcome email pass a real test?", yes: "Run the first $250 test in week 4", no: "Fix the route before any spend"},
            {question: "Did subscribers receive the welcome email and use the game material?", yes: "Review the first results", no: "Fix delivery or the sample before spending more"},
            {question: "Is the specific issue from the first test fixed?", yes: "Release the revised $250 test in week 3", no: "Hold the budget until it is"},
            {question: "Is the campaign live, with reward economics checked and pledge reporting working?", yes: "Release the $300 live campaign test", no: "Keep that money unspent"},
            {question: "Has the publisher approved a defined use for the last $200?", yes: "Spend the reserve on that use", no: "The reserve stays unspent"},
          ],
          end: "Total spend stays inside the $1,000 ceiling",
          caption: "Hypothetical USD example from the table on this page, not a recommended budget.",
        },
      ],
      takeaway: "Release ad budget in stages tied to conditions. A $5 signup tells you nothing yet about your cost per backer.",
    },
    audience: {
      paragraphs: [
        "People sign up for a game they can picture at their table, so we lead with something useful. Ask permission to email, then make every message worth opening.",
        "The [prelaunch email list guide](/guides/kickstarter-prelaunch-email-list) has a five message sequence you can adapt.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Give a visitor something to play or read before you ask for anything",
          tips: [
            {label: "Lead with play", text: "A gameplay video, a downloadable rulebook or a print and play sample gives a visitor a reason to stay."},
            {label: "One idea per email", text: "Use each message to explain one part of the game or share a real change."},
            {label: "Ask first", text: "Get permission to email before you send anything beyond the signup promise."},
            {label: "Played beats seen", text: "A subscriber who has played a sample round is far easier to convert on launch day than one who only saw a box render."},
          ],
        },
      ],
      takeaway: "Build your board game audience with something to play or read, because a sample round converts better than a box render.",
    },
    measure: {
      takeaway: "Measure only what decides whether to spend more. A signup count tests interest, but it is not a promise of a future pledge.",
    },
    launch: {
      paragraphs: [
        "Before you announce a fixed date, we put the rules, reward contents, manufacturing assumptions, shipping approach, campaign page and signup test in one review. Unresolved issues get an owner.",
        "A large follower count cannot fix an unfinished reward or a delivery plan you cannot afford.",
        "A short runway is a common reason to wait too. A month can finish the page but cannot build a new audience, so moving the date is usually cheaper than a weak launch.",
        "When the answer is launch, the [launch checklist](/guides/board-game-kickstarter-launch-day-checklist) covers the final week and the first hour. Check the live campaign link, email links and ad destinations before promoting, and keep a draft update ready for the first common backer questions.",
      ],
      takeaway: "Launch, revise or wait is one review with owners. Moving the date is usually cheaper than a weak launch.",
    },
    help: {
      takeaway: "You can run every phase yourself, but the audience, the ads and the page all peak in the same weeks.",
    },
  },
};

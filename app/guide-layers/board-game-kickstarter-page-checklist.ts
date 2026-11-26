import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "opening": {
      takeaway: "The opening of a board game Kickstarter page needs the name, a real product image and one line on what players do, with player count and play time close by.",
    },
    "gameplay": {
      visuals: [
        {
          kind: "tips",
          title: "One clear turn explains a board game faster than the full rules",
          tips: [
            {label: "Pick a revealing turn", text: "Choose a turn or round that shows the main decisions."},
            {label: "Few labeled steps", text: "Show the action, what happens next and what the player is trying to achieve."},
            {label: "Real components", text: "Use the actual board, cards or pieces in the explanation."},
            {label: "Somewhere to go deeper", text: "Add a rules link, playthrough or independent preview if you have one."},
            {label: "Its own space for contents", text: "Give the component list a separate block so readers can check the box."},
          ],
          source: "Kickstarter Help Center, images and media in a project",
        },
      ],
      takeaway: "Explain one turn with real components before any rule detail, and give the component list its own space on the page.",
    },
    "rewards": {
      takeaway: "Use one name per product across copy, graphics and Kickstarter rewards, and compare editions by what actually changes in the box.",
    },
    "review": {
      paragraphs: [
        "The fastest test we know is a reader who has never seen the game. Ask them to read the preview and describe the game, reward options and delivery plan. Let them read it before explaining it yourself, then use their unanswered questions to revise the page.",
        "On a phone, check key labels without zooming. Review links, image loading, spelling, product names and production details.",
        "Check the public prelaunch page separately, because it serves a different purpose and Kickstarter's website and app may show different details. Every question the reader asks is a fix you can make before launch day.",
      ],
      takeaway: "A new reader with a phone finds the gaps in a board game Kickstarter page faster than another proofread. Check the prelaunch page as a separate page.",
    },
    "final-platform-check": {
      takeaway: "Run the board game page checklist on the assembled Kickstarter preview, not just the exported files, before the creator approves launch.",
    },
    "five-minute-check": {
      visuals: [
        {
          kind: "flow",
          title: "Spend on traffic only after a new reader passes the five minute check",
          caption: "A clarity test, not a conversion forecast.",
          start: "Your campaign preview is assembled",
          nodes: [
            {question: "Could a new reader answer all five questions without your help?", yes: "Continue", no: "Change the page or add the missing fact, then test a new reader"},
            {question: "Is the page unchanged since that test?", yes: "Continue", no: "Repeat the test after any major reward or layout change"},
            {question: "Did the platform preview pass the link, label, reward and shipping checks?", yes: "Continue", no: "Fix it in the platform, not only in the files"},
          ],
          end: "Start paid traffic and approve the launch",
        },
      ],
      takeaway: "Run a five minute review with someone new to the game before you spend on ads, and again after big reward or layout changes.",
    },
  },
};

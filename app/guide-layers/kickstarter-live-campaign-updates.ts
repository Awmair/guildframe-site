import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "how-often": {
      paragraphs: [
        "Kickstarter does not set a required frequency during the campaign. Its Help Center says some creators post every day and some post more sporadically. After funding, it expects at least one new update a month until rewards are delivered.",
        "There is also a backstop. Once a project goes more than four weeks without an update and rewards are not yet fulfilled, backers can send an anonymous update request. Kickstarter then emails the creator, so the monthly rhythm after funding is the floor, not a target.",
        "During the campaign we plan one useful update every three to five days, with extra posts around the moments backers care about. The timeline below is the rhythm we use for a 30 day campaign.",
        "Skip a slot rather than post filler, because an update that says nothing teaches backers to stop opening them.",
      ],
      visuals: [
        {
          kind: "stats",
          title: "Kickstarter sets a monthly floor after funding, and we plan every 3 to 5 days while live",
          stats: [
            {value: "3 to 5 days", label: "Between updates during the campaign", note: "Guildframe recommendation"},
            {value: "4 weeks+", label: "Without an update before backers can request one", note: "Kickstarter then emails the creator"},
            {value: "1 a month", label: "Kickstarter's minimum after funding", note: "Until rewards are delivered"},
          ],
          source: "Kickstarter Help Center",
        },
      ],
      takeaway: "Post a useful Kickstarter update every three to five days while the campaign is live, then at least monthly until rewards are delivered.",
    },
    owners: {
      takeaway: "Name who checks comments, who confirms product facts and who publishes, even when one person does all three.",
    },
    calendar: {
      visuals: [
        {
          kind: "flow",
          title: "Post an update only when it passes these three checks",
          start: "An update slot comes up",
          nodes: [
            {question: "Does it answer a real question or show real progress?", yes: "Draft it from the approved facts", no: "Skip the slot rather than post filler"},
            {question: "Has the person who owns those facts confirmed them?", yes: "Check the reward names next", no: "Hold it until the owner confirms"},
            {question: "Do the reward names match the page, comments and emails?", yes: "Ready to publish", no: "Use the same reward names everywhere first"},
          ],
          end: "Publish and log it on the approval sheet",
        },
      ],
      takeaway: "Draft Kickstarter updates before launch week, and make every one answer a real backer question rather than fill the calendar.",
    },
    "quiet-middle": {
      paragraphs: [
        "A quiet stretch can feel like failure on a first campaign, so it helps to know what normal looks like. Kickstarter says pledges come rolling in during the first few days, then momentum slows into a mid campaign plateau, and it calls that plateau completely normal.",
        "So we plan the quiet weeks instead of waiting them out, using the slots in the rhythm above.",
        "If the first days were slow as well, our guide on [why Kickstarter campaigns fail](/guides/why-kickstarter-campaigns-fail) walks through whether to push on or relaunch.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Five useful posts for the quiet middle of a tabletop campaign",
          tips: [
            {label: "A sample turn", text: "Show one real decision a player makes."},
            {label: "A review", text: "Point backers to new coverage of the game."},
            {label: "A recurring question", text: "Answer the comment people keep asking, once and clearly."},
            {label: "A stretch goal", text: "Show what comes next, with confirmed contents."},
            {label: "A share request", text: "Ask early backers to share the project with friends who play."},
          ],
          source: "Kickstarter, how to overcome the mid campaign slump",
        },
      ],
      takeaway: "A mid campaign plateau is normal on Kickstarter, so fill the quiet weeks with useful updates rather than waiting them out.",
    },
    "delay-template": {
      paragraphs: [
        "Delay updates are the hardest to write, and silence is what worries backers most. Kickstarter's handbook says backers worry when they don't hear from you, and it encourages creators to share delays or changes to the plan.",
        "Here is a short example for a card game. \"Our card proofs came back with a color shift on the night deck, so the printer is running a second proof. That moves our delivery estimate from March to April or May.\"",
        "\"Everything else is on schedule. We'll post photos of the new proofs next Friday, even if the fix isn't final.\"",
        "Send it as soon as the facts are confirmed, then keep the promise about when backers will hear next. We use the same six part structure for every delay update, so nothing important is left out.",
      ],
      takeaway: "A good Kickstarter delay update says what happened, gives the new estimate as a range and names the date of the next update.",
    },
    questions: {
      paragraphs: [
        "Most mid campaign updates start as a comment someone asked twice. Save the question, the current answer and the person who confirmed it.",
        "A question about sleeved card storage needs checked dimensions, and one about an RPG supplement needs the correct system requirements. A generic answer can create a new problem.",
        "When several people ask the same thing, improve the campaign page or publish an update so the answer is easier to find. Use consistent reward names and product descriptions across comments, emails and the page.",
      ],
      takeaway: "Turn any question asked twice into a page fix or an update, with the answer checked by the person who owns the facts.",
    },
    changes: {
      visuals: [
        {
          kind: "checklist",
          title: "Check a new promise before it becomes campaign copy",
          groups: [
            {name: "Confirm first", items: ["Cost", "Production impact", "Reward eligibility", "Delivery implications"]},
            {name: "Then update together", items: ["Campaign page", "Reward chart", "Email", "Live ads"]},
            {name: "Then remove", items: ["Obsolete creative from the active plan"]},
          ],
        },
      ],
      takeaway: "Confirm the cost and delivery impact of a new sculpt, deck or box before announcing it, then update every channel at once.",
    },
    reporting: {
      takeaway: "End every live campaign review with decisions and owners, not just a page of numbers.",
    },
    close: {
      takeaway: "At campaign close, hand over the FAQ record, reports and the next update date, so backers know where the next message will come from.",
    },
    "approval-sheet": {
      takeaway: "Keep a draft apart from an approved update, and store the approved wording with its publication link.",
    },
  },
};

import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "at-a-glance": {
      takeaway: "A board game Kickstarter launch checklist runs about 90 days. The order of the checks matters more than the exact dates.",
    },
    offer: {
      takeaway: "Lock rewards, quotes, the funding goal and the shipping approach 90 to 60 days out, because every later asset repeats the offer.",
    },
    prelaunch: {
      paragraphs: [
        "This phase builds the audience you launch to, so the signup route you opened at 90 days now needs real traffic. In our planning example the prelaunch page opens 6 to 12 weeks before launch. Your own email list and Kickstarter prelaunch followers both matter, but they behave differently.",
        "Kickstarter sends your followers a launch notification email when the project goes live. You cannot message those followers directly, though a prelaunch update reaches them. Your own [prelaunch email list](/guides/kickstarter-prelaunch-email-list) is the channel you control, so test the form, the welcome email and the unsubscribe link with a real address.",
        "One rule catches first time creators out. Kickstarter only lets a first time creator switch on the prelaunch page after the project has been submitted for review and approved.",
        "Repeat creators can open it from the Promotion tab sooner. That's why we plan an early submission for a first project, so the follow button is live while the audience is still growing.",
        "These five checks close the phase, and the decision path after them shows when your prelaunch page can go live.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "First time creators need approval before the prelaunch page can go live",
          start: "Kickstarter draft with a target launch date",
          nodes: [
            {question: "Is this your first Kickstarter project?", yes: "Submit the project for review early", no: "Open the prelaunch page from the Promotion tab now"},
            {question: "Has Kickstarter approved the project?", yes: "Switch on the prelaunch page", no: "Wait for approval, which can take up to three business days"},
            {question: "Is the page linked from your own pages, with a referral link per channel?", yes: "Start sending traffic", no: "Add the links and referral tags before you promote"},
          ],
          end: "Follow button live while the list is still growing",
          source: "Kickstarter Help Center, prelaunch page and project review",
        },
      ],
      takeaway: "Your email list is the channel you control. Kickstarter followers only hear the launch notification and your prelaunch updates.",
    },
    "page-and-review": {
      paragraphs: [
        "By now the campaign page should be close to final, so this phase is about proof. We read the page on a phone with someone who has never played the game, using the [Kickstarter page checklist](/guides/board-game-kickstarter-page-checklist). If they cannot say what comes in the box, the page is not finished.",
        "Kickstarter says review can take up to three business days. If the team asks for changes, the next review takes up to three more business days after you reply, and busy periods run longer.",
        "Setting a target launch date does not launch the project. So we submit at least 2 weeks before the launch date and keep that time for change requests.",
        "Ad tests should still run inside a cap in this phase. Use the [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) to set a ceiling your reward margin can carry. Before moving on, these five checks should pass.",
      ],
      visuals: [
        {
          kind: "stats",
          title: "Two review rounds can take six business days, so submit two weeks ahead",
          stats: [
            {value: "Up to 3", label: "Business days for Kickstarter review", note: "Kickstarter Help Center"},
            {value: "Up to 3 more", label: "Business days after you answer changes", note: "Busy periods run longer"},
            {value: "2 weeks", label: "Our submission lead before launch", note: "Guildframe planning rule"},
          ],
          source: "Kickstarter Help Center, project review",
        },
      ],
      takeaway: "Submit for Kickstarter review at least two weeks before launch, so a change request never moves your date.",
    },
    owners: {
      takeaway: "Name one owner per launch job, because the email can be perfect while the ads still point at a preview link.",
    },
    "launch-day": {
      takeaway: "Kickstarter launches are manual, so publish by hand, check the live page on a phone, send the email, then switch on ads.",
    },
    gamefound: {
      takeaway: "Gamefound Tester Mode proves an order route works before launch, but it does not prove a real payment or a payout.",
    },
    "first-days": {
      paragraphs: [
        "The first days tell you which parts of the page still confuse people. These five habits turn those questions into fixes.",
        "A big first hour total is good news, but it does not prove every part of the launch works. The checks above are what keep the second week healthy.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Five habits for days 1 to 3 of a board game Kickstarter",
          tips: [
            {label: "One question list", text: "Log repeated questions about gameplay, editions, shipping and timing in one place."},
            {label: "Confirm, then fix", text: "Change the page wording once the creator confirms the facts."},
            {label: "Dropped pledges", text: "Kickstarter now shows them in the dashboard's Backer Source data. Check for channels whose pledges later fail."},
            {label: "Spend against margin", text: "Compare ad spend with the reward margin before approving more budget."},
            {label: "First backer update", text: "Post one that answers the most common question."},
          ],
          source: "Kickstarter release notes, October 13, 2026",
        },
      ],
      takeaway: "In the first days after launch, fix what confuses backers and check ad spend against margin before raising the budget.",
    },
    "full-checklist": {
      takeaway: "Put a name beside every line of the launch checklist. A line with no owner a week out is the one most likely to fail.",
    },
    help: {
      takeaway: "Most creators can run this checklist alone. The hard part is owning six launch jobs on the same morning, which is where we help.",
    },
  },
};

import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "review": {
      takeaway: "Kickstarter review takes up to 3 business days, plus about 3 more for each round of changes. Treat that as planning guidance and leave a buffer.",
    },
    "dependencies": {
      paragraphs: [
        "We start with the dependencies rather than a universal number of weeks. Your launch needs complete editor fields, accurate rewards, a finished page, platform review and owner approval, and production decisions may block some of those tasks.",
        "As Guildframe's planning example, we start the email list 3 months or more before launch, open the prelaunch page 6 to 12 weeks out and submit for review at least 2 weeks before the date.",
        "Each task gets an owner. We can prepare the copy and graphics, but the creator confirms prices, account information, product facts and delivery plans. Your [prelaunch page](/guides/kickstarter-prelaunch-page-guide) can go live while this work continues, so followers build up during review.",
      ],
      visuals: [
        {
          kind: "timeline",
          title: "Example: submit for review two weeks before a launch you planned three months out",
          caption: "Guildframe's planning example. Your dependencies set the real dates.",
          events: [
            {when: "3 months or more out", label: "Start the email list"},
            {when: "6 to 12 weeks out", label: "Open the prelaunch page", detail: "Followers build during the rest of the work"},
            {when: "2 weeks or more out", label: "Submit for review", detail: "Leaves room for requested changes", highlight: true},
            {when: "Launch day", label: "Creator clicks Launch"},
          ],
        },
      ],
      takeaway: "Build your Kickstarter launch timeline from dependencies and owners, then submit for review at least two weeks before the date you announce.",
    },
    "date": {
      visuals: [
        {
          kind: "flow",
          title: "Announce a public Kickstarter launch date only after four checks pass",
          start: "You have a launch date in mind",
          nodes: [
            {question: "Is the project submitted at least 2 weeks before that date?", yes: "Continue", no: "Keep the date private until you submit"},
            {question: "Is the project approved?", yes: "Continue", no: "Allow 3 more business days for each round of changes"},
            {question: "Has the final preview been checked after the last edit?", yes: "Continue", no: "Run the final page check on a phone and a desktop"},
            {question: "Is one named person ready to click Launch?", yes: "Continue", no: "Name them, because Kickstarter launches cannot be scheduled"},
          ],
          end: "Announce the date, then send links once the campaign is live",
          source: "Kickstarter Help Center, project review and launching",
        },
        {
          kind: "tips",
          title: "Launching on Kickstarter is a manual click, so plan the people around it",
          tips: [
            {label: "Name the launcher", text: "One person clicks Launch project after approval."},
            {label: "Confirm the time zone", text: "Agree the exact launch time with everyone sending announcements."},
            {label: "Check the public URL", text: "Agree who opens the public page right after launch and confirms it is live."},
            {label: "Prepare links early", text: "Draft announcement links in advance, then verify they point to the live campaign."},
          ],
          source: "Kickstarter Help Center, launching an approved project",
        },
      ],
      takeaway: "Kickstarter cannot launch your campaign automatically on a set date. Name the person who clicks Launch and agree who checks the public page.",
    },
    "duration": {
      visuals: [
        {
          kind: "stats",
          title: "Kickstarter campaigns run 1 to 60 days, and the deadline is fixed once you launch",
          stats: [
            {value: "1 to 60 days", label: "Allowed campaign length"},
            {value: "30 days or fewer", label: "Kickstarter's recommendation", note: "Not a funding guarantee"},
            {value: "Fixed", label: "Deadline after launch", note: "Duration cannot be adjusted"},
          ],
          source: "Kickstarter Help Center, maximum project duration",
        },
      ],
      takeaway: "Pick your Kickstarter campaign duration before launch, because the deadline cannot change afterwards. Kickstarter recommends 30 days or fewer.",
    },
    "final-check": {
      takeaway: "Any change made during Kickstarter review can ripple through graphics, rewards and FAQ, so run one full check after the last edit.",
    },
    "help": {
      takeaway: "Finish the page before submission, so the review buffer goes to Kickstarter's questions rather than your own fixes.",
    },
    "working-checklist": {
      takeaway: "Plan the whole launch calendar around review, and give every launch action an owner.",
    },
  },
};

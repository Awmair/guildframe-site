import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-answer": {
      paragraphs: [
        "Most first board games need several months of preparation, and the right launch date is the first good one after you're actually ready. Ready means three things: people waiting for day one, a page strangers understand and numbers that work.",
        "We've seen more campaigns hurt by launching early than by waiting a month. A date picked for a birthday or a convention feels fixed, but backers never see why you chose it. They only see whether the page and the community were ready.",
        "This guide covers how long each piece takes, how to tell you're ready and which dates to think about. For the whole journey from prototype to delivery, read [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter).",
      ],
      takeaway: "The best time to launch a Kickstarter is the first good date after your audience, page and numbers are ready. Decide readiness first and let the calendar follow.",
    },
    "prep-time": {
      paragraphs: [
        "Preparation takes longer than most first timers expect, because several jobs have to overlap. Kickstarter's own September 2026 plan runs 50 days from the first kickoff meeting to launch, with setup, creative work and five weeks of paid testing happening side by side.",
        "That plan is built for a finished product with a team behind it. A first board game usually isn't there yet, so we plan a longer runway. The timeline below is a Guildframe planning example for a first board game, working back from launch day, not a Kickstarter rule.",
        "Two points on it come straight from Kickstarter. It suggests allowing up to a month between sending a sample and seeing a post, so reviewer copies go out early.",
        "Review can take up to three business days, plus up to three more if Kickstarter asks for changes, so we submit at least two weeks before the launch date. Count backwards from the slowest job, not forwards from today.",
      ],
      takeaway: "Kickstarter's own plan takes 50 days for a finished product, so a first board game needs a longer runway. Submit for review at least two weeks before launch.",
    },
    signals: {
      paragraphs: [
        "A launch date is only as good as the readiness behind it, so we check three signals before we agree one. Each can be checked without guessing.",
        "The audience comes first. Meeple Mountain described an old rule of thumb in 2020 as the 30% rule. It says you're ready when your email list alone could raise at least 30% of your goal in the first 24 hours.",
        "Treat it as a guide, not a law, and use our guide to [Kickstarter followers before launch](/guides/kickstarter-followers-before-launch) to read your own numbers.",
        "Next is the page. Show the preview to someone who hasn't seen your project and ask them to explain it back to you. If they can't, the page needs work, and our guide on [how to design a Kickstarter page](/guides/how-to-design-a-kickstarter-page) can help.",
        "Last are the numbers: a manufacturer quote, a shipping estimate and a goal that covers fees and a reserve. Our guide to [what it costs to launch a board game](/guides/board-game-kickstarter-cost) adds those up.",
        "If the game itself still feels unfinished, start with [whether your game is ready](/guides/is-my-game-ready-for-kickstarter). When all three signals are true, you're ready to pick a date.",
      ],
      takeaway: "Pick a Kickstarter launch date only when audience, page and numbers are all ready. One strong signal does not cover a weak one.",
    },
    "day-and-time": {
      visuals: [
        {
          kind: "tips",
          title: "Day and time rules worth following, once you are ready",
          tips: [
            {label: "Tuesday", text: "Kickstarter says Tuesday launches consistently see higher success rates, and weekends see less engagement."},
            {label: "Late afternoon Eastern", text: "Backers are most active from late afternoon into early evening, with a spike around 4 PM Eastern."},
            {label: "Or 11 am Eastern", text: "Kickstarter's September 2026 plan launches at 11 am Eastern, so treat any hour as a tendency."},
            {label: "Your list's time zone", text: "If most followers are in Europe, a late US launch lands in their night. Pick an hour they are awake."},
            {label: "Stay online", text: "Be at your desk for the first few hours to answer comments and share the launch."},
          ],
          source: "Kickstarter, Best time to launch (updated August 25, 2026)",
        },
      ],
      takeaway: "Tuesday and late afternoon Eastern are good defaults for a Kickstarter launch. Your followers' time zone and your own availability matter more.",
    },
    "months-and-events": {
      paragraphs: [
        "The calendar matters more than the hour, because it decides what else is competing for your backers' attention and money. Kickstarter's launch timing post says the first week of a month tends to do well, with the 1st a top performer.",
        "On holidays, the same post says the holiday season isn't a no go, but it advises launching early enough to avoid the end of year rush. We'd add one more check: look at what's launching in your niche that month, because a huge campaign in your genre takes attention for weeks.",
        "Conventions are the other big date. Showing your game at a show before launch is a great way to collect emails. Launching during one you're attending is hard, because you can't answer comments from a booth all day.",
        "So show the game at an event, then launch a few weeks later while new followers still remember you. These are the big tabletop dates we're planning around, each checked on the organizer's own site:",
      ],
      takeaway: "Launch in the first week of a month and a few weeks after a convention, not during one. Check what else in your niche launches that month.",
    },
    "campaign-length": {
      visuals: [
        {
          kind: "stats",
          title: "Kickstarter allows 60 days, but recommends 30 or fewer",
          stats: [
            {value: "1 to 60 days", label: "Allowed campaign length", note: "Kickstarter's limit"},
            {value: "30 days or less", label: "Kickstarter's recommendation", note: "Shorter suits a small audience"},
            {value: "About 45 days", label: "Kickstarter's own 2026 plan", note: "Built for a finished product with a team"},
          ],
          source: "Kickstarter help center and Kickstarter blog (September 9, 2026)",
        },
      ],
      takeaway: "For a first board game Kickstarter, a campaign of 30 days or less is usually enough. Match the length to the news you can share.",
    },
    "work-back": {
      paragraphs: [
        "Once the signals look close, a backward plan turns a hoped for date into a real one. Take the timeline above, put your launch day at the end and write a real date next to each step.",
        "If any step lands in the past, the date is too early, and it's cheaper to move it now than to launch thin. If every step fits with a week to spare, you have a date you can keep.",
        "The full schedule for the weeks around launch lives in our [board game Kickstarter marketing plan](/guides/board-game-kickstarter-marketing-plan). The day itself has its own [launch day checklist](/guides/board-game-kickstarter-launch-day-checklist).",
      ],
      takeaway: "Write a real date next to every prep step. If one lands in the past, move the launch now rather than launching thin.",
    },
    delay: {
      visuals: [
        {
          kind: "flow",
          title: "Keep or move the launch date: four checks two weeks out",
          start: "Your target launch date is two weeks away",
          nodes: [
            {question: "Could your email list raise about 30% of the goal in the first 24 hours?", yes: "The audience signal holds", no: "Delay, and keep growing the list with something new to show"},
            {question: "Can a stranger explain your project back after reading the preview?", yes: "The page signal holds", no: "Delay, and fix what readers missed"},
            {question: "Did review come back without big changes?", yes: "The page can go live as planned", no: "Delay until the changes are made and approved"},
            {question: "Is the manufacturer quote steady enough to keep the goal?", yes: "The numbers signal holds", no: "Delay, reset the goal, then pick a new date"},
          ],
          end: "Keep the date, then press launch yourself",
          caption: "Kickstarter's Target Launch Date will not launch your project automatically.",
        },
      ],
      takeaway: "Delay a Kickstarter when any readiness signal is short. Tell followers early, with the new date and something new to look at.",
    },
    "plan-with-us": {
      paragraphs: [
        "You can plan all of this yourself with a calendar and the three signals. What a first timer can't plan for yet is how long each job really takes, so the runway often comes up short.",
        "When we plan a launch with you, we set the date from readiness, build the backward plan and keep it updated as the work moves. That's part of our [Kickstarter launch services for tabletop games](/kickstarter-launch-services).",
        "Full campaign support at $5,900 covers the prelaunch page and emails, the campaign page, ads and the live campaign. If you're not sure you're ready, [tell us where you are](/buy#start-project) and we'll give you an honest read.",
      ],
      takeaway: "We set your Kickstarter launch date from readiness and keep the backward plan current. Tell us where you are for an honest read.",
    },
  },
};

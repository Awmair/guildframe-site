import type { LaunchGuide } from "../launch-guides";

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "why-kickstarter-campaigns-fail",
  title: "What Makes a Kickstarter Fail, and How to Avoid It",
  seoTitle: "Why Kickstarter Campaigns Fail and How to Avoid It",
  description: "Why board game Kickstarters fail and how to avoid it. The common reasons first time creators miss their goal, and what to do if a campaign is slow.",
  tag: "Launch risks",
  answer: "Most tabletop Kickstarters fund. Kickstarter reported an 80% success rate for tabletop projects in 2024. The ones that miss usually launched with nobody waiting, a page that did not explain the game, or a price and goal the numbers did not support, and each of those shows before launch day.",
  relatedSlugs: ["kickstarter-followers-before-launch", "board-game-kickstarter-funding-goal", "kickstarter-live-campaign-updates"],
  servicePath: "/kickstarter-launch-services",
  serviceLabel: "Kickstarter launch services for tabletop games",
  sources: [
    { label: "Kickstarter is the biggest platform for games (2024 tabletop figures, 5 February 2025)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/kickstarter-biggest-platform-for-games/" },
    { label: "Top 10 Reasons Your Kickstarter Campaign May Fail (8 July 2021)", publisher: "Stonemaier Games", href: "https://stonemaiergames.com/top-10-reasons-your-kickstarter-campaign-may-fail/" },
    { label: "Why is funding all or nothing?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236582-why-is-funding-all-or-nothing" },
    { label: "How can I cancel my project?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236746-how-can-i-cancel-my-project" },
    { label: "How do I relaunch a project?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236727-how-do-i-relaunch-a-project" },
    { label: "Why Kickstarter campaigns fail after funding, and how to avoid it (3 June 2026)", publisher: "Kickstarter", href: "https://updates.kickstarter.com/why-kickstarter-campaigns-fail-after-funding-and-how-to-avoid-it/" },
    { label: "If I am unable to complete my project as promised, what should I do?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236654-if-i-am-unable-to-complete-my-project-as-promised-what-should-i-do" },
  ],
  sections: [
    {
      id: "short-answer",
      title: "Why Kickstarter campaigns fail, the short version",
      paragraphs: [
        "Most tabletop Kickstarters fund, and the ones that miss usually show the warning signs before launch day. That is good news, because a warning you can see early is one you can fix.",
        "Kickstarter reported 6,646 tabletop projects launched in 2024 and 5,314 funded, an 80% success rate. That still leaves about 1,332 projects that did not reach their goal, roughly one in five. It covers every tabletop project that year, so treat it as context, not as your own odds. Our [Kickstarter tabletop benchmark](/resources/kickstarter-tabletop-games-benchmark) breaks the numbers down further.",
        "When we look at campaigns that missed, the same few causes come up. Nobody was waiting on day one, the page did not explain the game, the price or goal did not add up, the game did not look ready, or it launched too early. Jamey Stegmaier of Stonemaier Games puts an even plainer reason at the top of his list, which is that people did not want the product. So the work that protects a campaign happens before launch, and our guide on [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter) walks through it in order.",
      ],
      source: 0,
      visual: {
        kind: "stats",
        title: "Four out of five tabletop Kickstarters funded in 2024",
        stats: [
          { value: "6,646", label: "Tabletop projects launched", note: "Kickstarter, 2024" },
          { value: "5,314", label: "Reached their goal", note: "Kickstarter, 2024" },
          { value: "80%", label: "Success rate", note: "Kickstarter's own rounded figure" },
          { value: "About 1,332", label: "Did not fund", note: "6,646 minus 5,314" },
        ],
        caption: "These figures cover every tabletop project on Kickstarter in 2024, from first campaigns to established publishers. They are not the odds for any single game.",
        source: "Kickstarter, published 5 Feb 2025, checked 25 Nov 2026",
      },
    },
    {
      id: "audience",
      title: "Nobody was waiting on day one",
      paragraphs: [
        "The most common gap we see in a first campaign is the audience, because many first timers expect Kickstarter to bring the backers.",
        "Stegmaier makes the point bluntly. Few people will find your project on Kickstarter if they did not already know about it. The first day comes from people you reached before launch, through a prelaunch page, an email list and the places where your players already talk.",
        "The fix is to start gathering those people months ahead and to judge your launch date by them. Our guide to [Kickstarter followers before launch](/guides/kickstarter-followers-before-launch) covers how to read your follower count, and [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers) covers where the first hundred come from. If the list is thin, move the date before you spend money on anything else.",
      ],
      source: 1,
    },
    {
      id: "clarity",
      title: "The page did not explain the game",
      paragraphs: [
        "A stranger decides in a minute or two whether your page is worth reading, so an unclear page loses people who might have loved the game.",
        "Stegmaier lists lack of understanding as a reason in its own right. Backers need a clear summary of what the product is and what makes it different, and a cluttered page makes that harder. On first pages we usually find the same things, which are long blocks of text, small type inside images, rules instead of one sample turn, and rewards that are hard to compare.",
        "A good page answers four questions in order. What is this, how does it play, what do I get, and can I trust you? Our guide on [how to design a Kickstarter page](/guides/how-to-design-a-kickstarter-page) shows how to lay that out. Show the page to five people who have never seen the game, and if they cannot explain it back to you, fix the page before you fix anything else.",
      ],
      source: 1,
    },
    {
      id: "numbers",
      title: "The price or the goal did not add up",
      paragraphs: [
        "Numbers sink campaigns quietly, because a goal that looks fine on the page can hide a price backers will not pay or a budget that cannot deliver.",
        "Backers pay months before they receive anything, so Stegmaier notes the price has to feel justified by what they get. A first game often feels expensive next to established titles, because a small print run costs more per copy. The goal has the opposite problem. Set it too low and you fund without enough money to make the game, and set it too high and you scare off people who would otherwise back.",
        "Work the goal up from your smallest real print run, plus freight, fulfillment, fees and a buffer. Kickstarter takes a 5% fee from a funded project, and its payment processor takes 3% and $0.20 per pledge in the US on top. Our guides to the [board game Kickstarter funding goal](/guides/board-game-kickstarter-funding-goal) and [reward pricing](/guides/board-game-kickstarter-reward-pricing) take you through both. The takeaway is that a goal is the least you need to deliver, never a sales target.",
      ],
      source: 2,
    },
    {
      id: "trust",
      title: "The game did not look ready",
      paragraphs: [
        "Backers are funding a promise, so anything that makes the promise look shaky costs pledges.",
        "Stegmaier names two versions of this. One is underwhelming visuals and components, which creators find hard to judge in their own work. The other is lack of trust, with signs like an overly optimistic schedule, typos or unclear shipping plans.",
        "You do not need every piece of art finished, but you do need a tested game, a consistent look and real quotes. Our guide [is my game ready for Kickstarter](/guides/is-my-game-ready-for-kickstarter) covers what has to be done first, and our page on [showing a prototype honestly](/guides/kickstarter-prototype-risks-disclosure) covers how to label what is not final. Honest labels build more trust than polished guesses.",
      ],
      source: 1,
      visual: {
        kind: "compare",
        title: "Every common cause shows up before launch day",
        columns: [
          {
            name: "The sign you can see early",
            points: [
              "Audience: few followers and a quiet email list",
              "Clarity: test readers cannot explain the game back",
              "Numbers: the goal comes straight from a printing quote",
              "Trust: photos look rough and the delivery date is a guess",
              "Timing: the date was picked before the page was ready",
            ],
          },
          {
            name: "What fixes it before launch",
            points: [
              "Build the prelaunch page and list for longer",
              "Lead with one sample turn and a clear reward comparison",
              "Add freight, fulfillment, fees and a buffer to the goal",
              "Reshoot the prototype and date delivery from real quotes",
              "Move the date and tell your followers why",
            ],
            highlight: true,
          },
        ],
        caption: "Causes drawn from Stonemaier Games' list of reasons campaigns fail and from the campaigns we review.",
        source: "Stonemaier Games, 2021; Guildframe review practice",
      },
    },
    {
      id: "timing",
      title: "It launched too early",
      paragraphs: [
        "Launch dates get picked for emotional reasons, like a birthday, a convention or plain impatience, and that is when campaigns go out half ready.",
        "Stegmaier lists unfortunate timing or rushed execution, and he makes a point first timers often miss. You are not bound to the launch date you announced. Moving a date costs you a short, honest update to your followers. Launching before the page and the audience are ready costs you the campaign.",
        "Our guide on [when to launch a Kickstarter](/guides/when-to-launch-a-kickstarter) covers how to pick a date and how much preparation it really takes. When the date and your readiness disagree, trust your readiness.",
      ],
      source: 1,
    },
    {
      id: "live-and-slow",
      title: "Your campaign is live and slow",
      paragraphs: [
        "A slow start feels like a crisis, but you have more options than it seems, so decide calmly and in order.",
        "Start with the first two days. Look at where pledges came from using your [Kickstarter referral tags](/guides/kickstarter-referral-tags-tracking), read every comment for confusion, and ask a few backers what nearly stopped them. A quiet middle is normal for most campaigns, and our guide to [live campaign updates](/guides/kickstarter-live-campaign-updates) covers what to post in those weeks.",
        "Know the rules before you decide. Kickstarter locks the goal and the deadline once a campaign launches, so you cannot lower the goal mid campaign. If you cancel, it is not reversible, the project stays on Kickstarter because projects cannot be deleted, and Kickstarter recommends posting an update so your backers hear it from you. If the campaign simply ends short, no money changes hands and backers are not charged.",
        "Our rule of thumb is to push on while backers keep arriving and comments point to fixable problems. If the first days brought only friends and family and the comments show the page or price is wrong, a clean cancel and a stronger relaunch is often the better path.",
      ],
      source: 2,
      visual: {
        kind: "steps",
        title: "A slow start: decide in this order",
        steps: [
          { label: "Check where pledges came from", detail: "Referral tags show which channels worked" },
          { label: "Read the comments for confusion", detail: "Questions about price or play point to the page" },
          { label: "Fix what you can while live", detail: "Page edits, an update, a clearer reward comparison" },
          { label: "Decide: push on or cancel", detail: "The goal and deadline are locked once you launch" },
          { label: "If you cancel, tell backers first", detail: "Cancelling cannot be undone" },
        ],
        source: "Kickstarter help on all or nothing funding and cancelling, checked 25 Nov 2026",
      },
    },
    {
      id: "relaunch",
      title: "Relaunching after a failed Kickstarter",
      paragraphs: [
        "Missing the goal once is common, and a relaunch is a normal next step, so it is worth planning properly.",
        "Kickstarter says there is no platform consequence for starting over. You build a new draft and copy content and rewards across from the original, which stays available for reference. The new project needs a different title and gets a new URL, and pledges do not transfer, so every backer has to pledge again. Post an update on the old project with a link to the new one, so your first backers can follow you.",
        "Change what the first campaign showed you was wrong. That usually means more time building the list, a clearer page, or a lower price with fewer add ons. A relaunch with the same page and the same audience tends to get the same result, so make the changes visible and tell people what you fixed.",
      ],
      source: 4,
    },
    {
      id: "after-funding",
      title: "Failing after funding",
      paragraphs: [
        "Some campaigns fund and then struggle to deliver, which is harder on everyone than missing the goal.",
        "Kickstarter's June 2026 article, citing research by Ethan Mollick, estimates that 5 to 14 percent of funded campaigns never deliver their rewards. It names the usual causes as treating funding day as the finish line, underbudgeting shipping and customs, and adding too many tiers, add ons and stretch goals. It also notes that overseas manufacturing usually takes about twelve months from campaign end to the last rewards arriving, and suggests a buffer of 20 to 30 percent on top of fulfillment estimates.",
        "Under Kickstarter's Terms of Use, creators of funded projects have to complete the project and deliver rewards. If that becomes impossible, Kickstarter expects you to explain what happened, show how the money was used and offer refunds. Our guide on [what happens after Kickstarter is funded](/guides/what-happens-after-kickstarter-is-funded) covers the steps that keep delivery on track.",
      ],
      source: 5,
    },
    {
      id: "check-and-help",
      title: "A check before you launch, and where we help",
      paragraphs: [
        "Most of what sinks a campaign can be caught in an afternoon of honest checking, so do it a few weeks before launch while there is still time to act.",
        "Run through these questions with someone who will tell you the truth:",
      ],
      list: [
        "Do enough people already follow the project to give you a strong first day?",
        "Can a stranger explain the game back to you after one minute on the page?",
        "Does the goal cover the smallest print run, freight, fulfillment, fees and a buffer?",
        "Does every photo and date look like a creator who will deliver?",
        "Are you launching because you are ready, not because the date arrived?",
      ],
    },
    {
      id: "where-we-help",
      title: "Getting a second pair of eyes",
      paragraphs: [
        "If any answer above is shaky, that is the part to fix first, and you can fix most of them yourself with time and honest testers.",
        "We do this for a living, so we spot these problems quickly and know which ones matter most for your kind of game. Our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover planning, the page, prelaunch and the live campaign. If you want to start small, we can design one [opening campaign section](/campaign-design) from your artwork as a free mockup, with no payment or obligation.",
      ],
    },
  ],
  faqs: [
    { question: "What is the most common reason a board game Kickstarter fails?", answer: "In the campaigns we review, the most common gap is the audience, with nobody waiting on day one. Stonemaier Games puts an even plainer reason first, which is that people did not want the product." },
    { question: "What percentage of board game Kickstarters fail?", answer: "Kickstarter reported 6,646 tabletop projects launched in 2024 and 5,314 funded, an 80% success rate. That leaves about 1,332 that did not reach their goal, roughly one in five." },
    { question: "Should I cancel my Kickstarter if it starts slowly?", answer: "Not straight away. Push on while backers keep arriving and comments point to fixable problems. If the first days brought only friends and family and the page or price is wrong, a clean cancel and a stronger relaunch is often better. Cancelling is not reversible." },
    { question: "Can I relaunch after a failed Kickstarter?", answer: "Yes. Kickstarter says there is no platform consequence for starting over. You build a new draft, copy content and rewards across, use a different title, and ask backers to pledge again because pledges do not transfer." },
    { question: "Do I owe anything if my Kickstarter fails to fund?", answer: "No. If a campaign ends without reaching its goal, no money changes hands, backers are not charged and Kickstarter charges no fee." },
    { question: "Does a failed campaign hurt my next one?", answer: "Not on the platform. Kickstarter says there is no platform consequence for starting over. The old project stays visible, so post an update linking to the new one and show what you fixed." },
    { question: "What happens if I fund but cannot deliver?", answer: "Under Kickstarter's Terms of Use you have to complete the project and deliver rewards. If you cannot, Kickstarter expects you to explain what happened, show how the money was used and offer refunds." },
  ],
};

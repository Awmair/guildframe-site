import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "short-answer": {
      paragraphs: [
        "Most tabletop Kickstarters fund, and the ones that miss usually show the warning signs before launch day. That's good news, because a warning you can see early is one you can fix.",
        "Kickstarter reported 6,646 tabletop projects launched in 2024 and 5,314 funded, an 80% success rate. That still leaves about 1,332 projects that didn't reach their goal, roughly one in five.",
        "It covers every tabletop project that year, so treat it as context, not as your own odds. Our [Kickstarter tabletop benchmark](/resources/kickstarter-tabletop-games-benchmark) breaks the numbers down further.",
        "When we look at campaigns that missed, the same few causes come up. Nobody was waiting on day one, the page didn't explain the project, the price or goal didn't add up, it didn't look ready, or it launched too early.",
        "Jamey Stegmaier of Stonemaier Games puts an even plainer reason at the top of his list, which is that people didn't want the product. So the work that protects a campaign happens before launch, and our guide on [how to launch a board game on Kickstarter](/guides/how-to-launch-a-board-game-on-kickstarter) walks through it in order.",
      ],
      takeaway: "Kickstarter campaigns usually fail for five visible reasons: no audience, an unclear page, numbers that don't add up, a project that looks unready, or an early launch.",
    },
    audience: {
      paragraphs: [
        "The most common gap we see in a first campaign is the audience, because many first timers expect Kickstarter to bring the backers.",
        "Stegmaier makes the point bluntly. Few people will find your project on Kickstarter if they didn't already know about it. The first day comes from people you reached before launch, through a prelaunch page, an email list and the places where your players already talk.",
        "The fix is to start gathering those people months ahead and to judge your launch date by them. If the list is thin, move the date before you spend money on anything else.",
        "Our guide to [Kickstarter followers before launch](/guides/kickstarter-followers-before-launch) covers how to read your follower count, and [how to get Kickstarter backers](/guides/how-to-get-kickstarter-backers) covers where the first hundred come from.",
      ],
      takeaway: "A Kickstarter's first day comes from people you reached before launch. If the prelaunch list is thin, move the date before spending on anything else.",
    },
    clarity: {
      paragraphs: [
        "A stranger decides in a minute or two whether your page is worth reading, so an unclear page loses people who might have loved the project.",
        "Stegmaier lists lack of understanding as a reason in its own right. Backers need a clear summary of what the product is and what makes it different, and a cluttered page makes that harder.",
        "On first pages we usually find the same things: long blocks of text, small type inside images, rules instead of one sample turn, and rewards that are hard to compare.",
        "A good page answers four questions in order, shown below. Our guide on [how to design a Kickstarter page](/guides/how-to-design-a-kickstarter-page) shows how to lay that out.",
        "Show the page to five people who have never seen your project. If they can't explain it back to you, fix the page before you fix anything else.",
      ],
      visuals: [
        {
          kind: "steps",
          title: "A clear Kickstarter page answers four questions in this order",
          steps: [
            {label: "What is this?", detail: "A plain summary of the product and what makes it different"},
            {label: "How does it play?", detail: "One sample turn, not the full rules"},
            {label: "What do I get?", detail: "Rewards that are easy to compare"},
            {label: "Can I trust you?", detail: "Real photos, real quotes and an honest schedule"},
          ],
        },
      ],
      takeaway: "An unclear Kickstarter page loses backers in a minute or two. Answer what it is, how it plays, what backers get and why they can trust you.",
    },
    numbers: {
      paragraphs: [
        "Numbers sink campaigns quietly, because a goal that looks fine on the page can hide a price backers won't pay or a budget that can't deliver.",
        "Backers pay months before they receive anything, so Stegmaier notes the price has to feel justified by what they get. A first game often feels expensive next to established titles, because a small print run costs more per copy.",
        "The goal has the opposite problem. Set it too low and you fund without enough money to make the game, and set it too high and you scare off people who would otherwise back.",
        "Work the goal up from your smallest real print run, plus freight, fulfillment, fees and a buffer. Kickstarter takes a 5% fee from a funded project, and its payment processor takes 3% and $0.20 per pledge in the US on top.",
        "Our guides to the [board game Kickstarter funding goal](/guides/board-game-kickstarter-funding-goal) and [reward pricing](/guides/board-game-kickstarter-reward-pricing) take you through both.",
      ],
      takeaway: "A Kickstarter funding goal is the least you need to deliver, never a sales target. Build it from the smallest print run plus freight, fulfillment, fees and a buffer.",
    },
    trust: {
      takeaway: "Backers fund a promise, so typos, rough photos and guessed dates cost pledges. Honest labels on unfinished work build more trust than polished guesses.",
    },
    timing: {
      paragraphs: [
        "Launch dates get picked for emotional reasons, like a birthday, a convention or plain impatience, and that's when campaigns go out half ready.",
        "Stegmaier lists unfortunate timing or rushed execution, and he makes a point first timers often miss. You aren't bound to the launch date you announced.",
        "Moving a date costs you a short, honest update to your followers. Launching before the page and the audience are ready costs you the campaign.",
        "Our guide on [when to launch a Kickstarter](/guides/when-to-launch-a-kickstarter) covers how to pick a date and how much preparation it really takes. When the date and your readiness disagree, trust your readiness.",
      ],
      takeaway: "You are never bound to an announced Kickstarter launch date. Moving it costs one honest update, while launching half ready can cost the campaign.",
    },
    "live-and-slow": {
      paragraphs: [
        "A slow start feels like a crisis, but you have more options than it seems, so decide calmly and in order.",
        "Start with the first two days. Look at where pledges came from using your [Kickstarter referral tags](/guides/kickstarter-referral-tags-tracking), read every comment for confusion, and ask a few backers what nearly stopped them.",
        "A quiet middle is normal for most campaigns, and our guide to [live campaign updates](/guides/kickstarter-live-campaign-updates) covers what to post in those weeks.",
        "Know the rules before you decide. Kickstarter locks the goal and the deadline once a campaign launches, so you can't lower the goal mid campaign.",
        "If you cancel, it isn't reversible, and the project stays on Kickstarter because projects can't be deleted. Kickstarter recommends posting an update so your backers hear it from you. If the campaign simply ends short, no money changes hands and backers are not charged.",
        "Our rule of thumb is to push on while backers keep arriving and comments point to fixable problems. Sometimes the first days bring only friends and family, and the comments show the page or price is wrong. Then a clean cancel and a stronger relaunch is often the better path.",
      ],
      takeaway: "Kickstarter locks the goal and deadline at launch. Push on while new backers keep arriving, and consider a clean cancel only when the page or price is wrong.",
    },
    relaunch: {
      paragraphs: [
        "Missing the goal once is common, and a relaunch is a normal next step, so it's worth planning properly.",
        "Kickstarter says there is no platform consequence for starting over. You build a new draft and copy content and rewards across from the original, which stays available for reference.",
        "The new project needs a different title and gets a new URL, and pledges don't transfer, so every backer has to pledge again. Post an update on the old project with a link to the new one, so your first backers can follow you.",
        "Change what the first campaign showed you was wrong. That usually means more time building the list, a clearer page, or a lower price with fewer add ons.",
        "A relaunch with the same page and the same audience tends to get the same result, so make the changes visible and tell people what you fixed.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Relaunch only when you can name what changed",
          start: "Your first campaign missed its goal or was canceled",
          nodes: [
            {question: "Do you know what the first campaign showed was wrong?", yes: "Write the problems down: list, page, price or add ons", no: "Read the comments and ask backers what nearly stopped them"},
            {question: "Have you changed the list, page or price in a way people can see?", yes: "Tell people what you fixed", no: "Wait, because the same page and audience tend to get the same result"},
            {question: "Is the new draft set up under a different title?", yes: "Copy content and rewards across from the original", no: "Pick a new title, since the relaunch gets a new URL"},
            {question: "Have you posted an update on the old project linking to the new one?", yes: "Your first backers can follow you across", no: "Post it now, because pledges don't transfer"},
          ],
          end: "Relaunch, and ask every earlier backer to pledge again",
          source: "Kickstarter help center, How do I relaunch a project?",
        },
      ],
      takeaway: "Relaunching a failed Kickstarter carries no platform penalty, but pledges don't transfer. Change the list, page or price visibly before you try again.",
    },
    "after-funding": {
      paragraphs: [
        "Some campaigns fund and then struggle to deliver, which is harder on everyone than missing the goal.",
        "Kickstarter's June 2026 article, citing research by Ethan Mollick, estimates that 5 to 14 percent of funded campaigns never deliver their rewards. It names the usual causes and the habits that prevent them, summarized in the cards below.",
        "Under Kickstarter's Terms of Use, creators of funded projects have to complete the project and deliver rewards. If that becomes impossible, Kickstarter expects you to explain what happened, show how the money was used and offer refunds.",
        "Our guide on [what happens after Kickstarter is funded](/guides/what-happens-after-kickstarter-is-funded) covers the steps that keep delivery on track.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Kickstarter's own warnings for campaigns that fund and then stall",
          tips: [
            {label: "Funding day is not the finish", text: "Treating funding day as the finish line is the first cause Kickstarter names."},
            {label: "Budget shipping and customs", text: "Underbudgeted shipping and customs sink funded projects. Price them before launch."},
            {label: "Keep the catalog small", text: "Too many tiers, add ons and stretch goals make delivery harder."},
            {label: "Plan about twelve months", text: "Overseas manufacturing usually takes about twelve months from campaign end to the last rewards arriving."},
            {label: "Add a 20 to 30 percent buffer", text: "Kickstarter suggests that buffer on top of your fulfillment estimates."},
          ],
          source: "Kickstarter, Why Kickstarter campaigns fail after funding (June 3, 2026)",
        },
      ],
      takeaway: "Between 5 and 14 percent of funded campaigns never deliver. A small catalog, a real shipping budget and a 20 to 30 percent buffer protect delivery.",
    },
    "check-and-help": {
      takeaway: "Run these five questions a few weeks before launch, with someone honest. Each one maps to a common reason Kickstarter campaigns fail.",
    },
    "where-we-help": {
      paragraphs: [
        "If any answer above is shaky, that's the part to fix first, and you can fix most of them yourself with time and honest testers.",
        "We do this for a living, so we spot these problems quickly and know which ones matter most for your kind of project. Our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) cover planning, the page, prelaunch and the live campaign.",
        "If you want to start small, we can design one [opening campaign section](/campaign-design) from your artwork as a free mockup, with no payment or obligation.",
      ],
      takeaway: "Most reasons a Kickstarter fails can be fixed before launch. We review the plan, the page and the audience, starting with a free opening mockup.",
    },
  },
};

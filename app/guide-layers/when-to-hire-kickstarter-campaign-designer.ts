import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    readiness: {
      takeaway: "You can hire a Kickstarter campaign designer before the game is finished. The opening mockup can start once the premise and art direction are settled.",
    },
    inputs: {
      takeaway: "List every missing asset and who supplies it before you agree a design date. Decide whether the schedule starts at booking or when assets arrive.",
    },
    review: {
      visuals: [
        {
          kind: "tips",
          title: "Three reviews every campaign page needs after upload",
          tips: [
            {label: "Your fact check", text: "You confirm product facts, rewards and visibility in the platform view backers will see."},
            {label: "A new reader", text: "Someone who has never seen your project checks whether the page explains the game."},
            {label: "A phone check", text: "Catches labels that looked fine on the design canvas but shrink in the campaign column."},
            {label: "Time to fix", text: "Work back from launch day to allow for assets, design, feedback and preview corrections."},
          ],
        },
      ],
      takeaway: "Review the campaign page after upload, on the platform and on a phone. Leave time in the schedule for corrections before launch day.",
    },
    diy: {
      paragraphs: [
        "Building your own page is a fair choice when someone on the team has the time and the design skills. The honest limit is hours, because layout, graphics, exports and phone checks compete with production, community and prelaunch work in the same weeks.",
        "You can also do both in order. Draft the page yourself with our guide on [how to design a Kickstarter page](/guides/how-to-design-a-kickstarter-page), then bring in a designer for the graphics and final layout.",
        "A designer is worth it when the draft is close but does not read well on a phone, or when those hours are needed elsewhere. Either way, your draft makes a better brief.",
        "When you hire us, you still own the facts: rules, rewards, prices and delivery. We plan the page, write the copy and build the graphics from your artwork, and both packages, Launch Ready at $2,500 and Brand to Launch at $3,500, are priced on our [campaign design](/campaign-design) page.",
        "If you're weighing a full agency instead, our guide to [Kickstarter agency cost](/guides/kickstarter-agency-cost) covers that decision.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Build the page yourself, or hire a campaign designer?",
          start: "You are deciding who builds your Kickstarter page",
          nodes: [
            {question: "Does someone on the team have design skills?", yes: "Doing it yourself is a fair choice", no: "Hire a designer, with your notes as the brief"},
            {question: "Can those hours be spared from production, community and prelaunch work?", yes: "Draft the page yourself", no: "Draft the outline, then hand graphics and final layout to a designer"},
            {question: "Does your draft read well on a phone?", yes: "Run a preview check and publish your own page", no: "Bring in a designer, and your draft becomes the brief"},
          ],
          end: "Either way, you own the facts: rules, rewards, prices and delivery",
        },
      ],
      takeaway: "Hire a Kickstarter campaign designer when your draft is close but fails on a phone, or when your hours are needed for production and prelaunch.",
    },
    prelaunch: {
      paragraphs: [
        "Kickstarter recommends sharing a prelaunch page at least one week before launch, so people can follow the project and get a launch notification. We treat that week as a floor, and in our planning example the page opens 6 to 12 weeks before launch.",
        "Prepare it alongside the full campaign story, not after it. Check that the title and main image explain the project while the longer page is being designed.",
        "Once you have a summary and artwork, request a free opening mockup through our [campaign design](/campaign-design) page. We agree the full scope and timing before any work starts.",
      ],
      visuals: [
        {
          kind: "stats",
          title: "A prelaunch page needs weeks, not days, before launch",
          stats: [
            {value: "1 week", label: "Kickstarter's minimum advice", note: "Share the prelaunch page at least this early"},
            {value: "6 to 12 weeks", label: "Our planning example", note: "When we open the prelaunch page before launch"},
          ],
          source: "Kickstarter Help Center, setting up a prelaunch page; Guildframe planning example",
        },
      ],
      takeaway: "Design the Kickstarter prelaunch page alongside the full campaign, and open it 6 to 12 weeks before launch rather than the one week minimum.",
    },
    "working-checklist": {
      takeaway: "If most rows are settled, you are ready to book a campaign designer. Open items simply become part of the brief.",
    },
  },
};

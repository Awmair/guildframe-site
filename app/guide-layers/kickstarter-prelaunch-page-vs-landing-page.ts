import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    comparison: {
      takeaway: "A Kickstarter follow and an email signup are separate records, so never add the counts together or treat either one as a pledge.",
    },
    platform: {
      paragraphs: [
        "The Kickstarter prelaunch page suits people who are ready to follow the campaign, so it has to explain the game in very little space. Kickstarter's app leaves out the editable prelaunch description, so we check the app view as well as desktop.",
        "Keep the public prelaunch URL apart from your private preview link. The preview is for feedback on the campaign, while the public page is the link you want interested players to follow.",
      ],
      visuals: [
        {
          kind: "checklist",
          title: "Check the Kickstarter prelaunch page the way visitors will see it",
          groups: [
            {name: "Content", items: ["Title, image and description match the game", "The app view makes sense without the editable description", "Desktop view checked as well"]},
            {name: "Links", items: ["Public prelaunch URL kept apart from the private preview", "Every announcement points to the right project"]},
          ],
          source: "Kickstarter Help Center, prelaunch page setup",
        },
      ],
      takeaway: "Kickstarter's app hides the editable prelaunch description, so the title and image must explain the game on their own.",
    },
    landing: {
      paragraphs: [
        "Your own landing page earns its place when the game needs a fuller introduction. Choose the smallest amount of material that helps a visitor decide whether the project is for them.",
        "Tell visitors what signing up means. For example, say you will send a rules preview and the launch announcement, if that is your actual plan. Before sending any traffic, run through these five checks.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Show the smallest sample that lets a visitor decide",
          tips: [
            {label: "Party card game", text: "A short sample round and a clear photo of the deck."},
            {label: "Strategy board game", text: "A turn example and a component spread."},
            {label: "RPG", text: "Readable sample pages."},
            {label: "One page is enough", text: "Before launch, one signup page with a clear promise will do. A full site with a shop, blog and press kit can wait until after the campaign."},
          ],
        },
      ],
      takeaway: "A landing page for your Kickstarter does not need to be a full website. One clear signup promise and a real sample are enough before launch.",
    },
    both: {
      takeaway: "If you run a Kickstarter prelaunch page and a landing page together, give each one job and ask for one next action at a time.",
    },
    measurement: {
      takeaway: "Count email signups and Kickstarter followers separately, and judge a cheap signup by what the subscriber does next.",
    },
    choice: {
      visuals: [
        {
          kind: "flow",
          title: "Send each visitor to the page that matches what they already know",
          start: "Deciding where a new link should point",
          nodes: [
            {question: "Does the game need explaining before someone will follow it?", yes: "Plan your own landing page first", no: "Send them to the Kickstarter prelaunch page"},
            {question: "Will you send a planned email sequence after signup?", yes: "Build the signup and welcome email", no: "Start with the platform follow page instead"},
            {question: "Have you agreed who owns the domain, signup software and contact records?", yes: "Build or book the landing page", no: "Settle ownership before anything is built"},
            {question: "Does a real test signup receive the promised sample?", yes: "Start sending traffic", no: "Fix the signup flow first"},
          ],
          end: "Landing page first, then the Kickstarter follow link by email",
          caption: "A route to test, not a required funnel.",
        },
      ],
      takeaway: "Choose the Kickstarter prelaunch page for an audience that knows the game, and your own landing page when the game needs explaining first.",
    },
    "route-example": {
      paragraphs: [
        "A practical route for a game that needs explanation is: ad or community link, your landing page, a useful sample in the welcome email, then a link to the platform follow page. An existing audience that already knows the game may be ready for the platform page immediately. Treat these as options to test.",
        "Keep a note of the link each email or post uses, and check the public follow page separately from the private preview.",
        "When the campaign goes live, verify every active paid destination and launch message rather than assuming the old link still works. Our prelaunch marketing service sets up these routes and tests every link before launch.",
      ],
      takeaway: "Give each traffic source one first destination, and recheck every live link the day the campaign launches.",
    },
  },
};

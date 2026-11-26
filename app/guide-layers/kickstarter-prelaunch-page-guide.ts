import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "two-links": {
      takeaway: "Promote the public Kickstarter prelaunch page to collect followers, and send the preview link only to people checking the draft. Neither a follow nor a preview view is a pledge.",
    },
    "opening": {
      takeaway: "Your title, subtitle and product image must explain the game on their own, because the Kickstarter app leaves the extra prelaunch description out.",
    },
    "feedback": {
      visuals: [
        {
          kind: "steps",
          title: "Four small tasks turn vague praise into fixes you can make",
          caption: "Give each preview reader the same tasks, then keep one list of confirmed fixes.",
          steps: [
            {label: "Explain the game", detail: "In one sentence, without your help"},
            {label: "Pick a reward", detail: "And say what comes in it"},
            {label: "Find the shipping information", detail: "Note how long it took"},
            {label: "Mark where they got stuck", detail: "That spot is your next edit"},
          ],
        },
      ],
      takeaway: "Preview readers help most when they complete tasks on the draft campaign. Their sticking points show you what to fix before the prelaunch page goes public.",
    },
    "timing": {
      paragraphs: [
        "When you can start depends on whether you have launched before. First time creators get the Promotion tab after the project is submitted and approved, while repeat creators can open it ahead of review.",
        "Kickstarter recommends sharing the prelaunch page at least one week before your intended launch date. We treat that as a floor, not a promise of followers.",
        "In Guildframe's planning example the prelaunch page opens 6 to 12 weeks before launch, so a first time creator submits for review early. A planned date doesn't launch the campaign by itself, so name the person who presses launch and have them check the approved campaign first.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Four checks decide whether your prelaunch page is ready to share",
          start: "You have a draft Kickstarter project",
          nodes: [
            {question: "Can you open the Promotion tab?", yes: "Continue", no: "First time creators submit for review and wait for approval"},
            {question: "Do the title, subtitle and image explain the game?", yes: "Continue", no: "Rewrite the first view before you share anything"},
            {question: "Does the public link open in a private browser window?", yes: "Continue", no: "Fix the link before any email or post points to it"},
            {question: "Is launch day at least a week away?", yes: "Continue", no: "Consider moving the date, since Kickstarter suggests a week minimum"},
          ],
          end: "Share the prelaunch page and start posting updates",
          source: "Kickstarter Help Center, prelaunch page setup",
        },
      ],
      takeaway: "Share your Kickstarter prelaunch page at least a week before launch, and plan for 6 to 12 weeks if you can. First time creators need approval before the Promotion tab opens, so submit early.",
    },
    "followers": {
      visuals: [
        {
          kind: "tips",
          title: "Prelaunch updates are the only way to reach Kickstarter followers before launch",
          tips: [
            {label: "Post real news", text: "Use updates for the confirmed date, a playable preview or what comes in the box."},
            {label: "You cannot message followers", text: "Kickstarter has no direct message to followers, but each prelaunch update notifies them."},
            {label: "Move the date honestly", text: "If the schedule slips, update the public message. An honest date beats a countdown you can't meet."},
            {label: "Build your own list too", text: "Followers live on the platform. A landing page and email list give you a route you control."},
          ],
          source: "Kickstarter Help Center, prelaunch page setup",
        },
      ],
      takeaway: "Treat prelaunch updates as your one channel to Kickstarter followers. Keep them factual, and pair the prelaunch page with an email list you own.",
    },
    "working-checklist": {
      takeaway: "Check the public prelaunch link, the first view and the announcement date together, then point your emails and posts at it.",
    },
  },
};

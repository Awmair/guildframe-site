import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "purpose": {
      takeaway: "The Kickstarter risks and challenges section is a short, specific plan: what could slow delivery, where it stands today and what happens if it goes wrong.",
    },
    "inventory": {
      visuals: [
        {
          kind: "checklist",
          title: "Each tabletop category has its own things to label before images go on the page",
          groups: [
            {name: "Card game", items: ["Is the art final?", "Is the layout final?", "Is the card stock final?"]},
            {name: "Miniatures", items: ["Which images are renders", "Which are test prints", "Which are painted samples"]},
            {name: "RPG book", items: ["Sample spread", "Approved print proof"]},
          ],
        },
      ],
      takeaway: "Sort every image into prototype, render, production sample or final artwork before design starts, because each one supports a different claim.",
    },
    "category": {
      visuals: [
        {
          kind: "flow",
          title: "Check whether the Kickstarter hardware rules cover your project before you plan images",
          caption: "Don't apply the hardware rule to every Games project, and don't assume a tabletop accessory is exempt.",
          start: "You are planning the image list",
          nodes: [
            {question: "Is your project's category clear?", yes: "Continue", no: "Settle the category before any assets are exported"},
            {question: "Do the hardware and product design rules cover it?", yes: "Continue", no: "Follow your category's rules and label every render"},
            {question: "Do you have a working prototype?", yes: "Continue", no: "Build one first, because those rules require it"},
            {question: "Are your product images free of photorealistic renders?", yes: "Continue", no: "Replace them, because those rules ban them"},
          ],
          end: "Plan the image list with clear status labels",
          source: "Kickstarter Help Center, hardware and product design rules",
        },
      ],
      takeaway: "Kickstarter's hardware and product design rules require a working prototype and ban photorealistic renders, but only within their category scope. Check yours first.",
    },
    "progress": {
      visuals: [
        {
          kind: "tips",
          title: "Describe Kickstarter progress in facts a backer can check",
          tips: [
            {label: "Drop almost ready", text: "Say what work is done and which steps remain."},
            {label: "Name the stage", text: "Say whether the rules are tested, the files approved or the production sample still pending."},
            {label: "Link the proof", text: "A rules sample, a playtest account or a product demonstration backs up the words."},
            {label: "Planned stays planned", text: "Never describe an untested mode or a planned component as finished."},
          ],
          source: "Kickstarter Help Center, what to share on a project page",
        },
      ],
      takeaway: "Show prototype progress as finished steps and remaining steps, and use only facts you can confirm.",
    },
    "risks": {
      takeaway: "Write each risk as dependency, status, plan and owner, and make sure the risks section agrees with your timeline and reward dates.",
    },
    "signoff": {
      takeaway: "Put status labels right on the images, in reward graphics and in video captions, and approve every factual claim before launch.",
    },
    "working-checklist": {
      takeaway: "Check the images and the risks and challenges section together, so your Kickstarter page never implies a finished product.",
    },
  },
};

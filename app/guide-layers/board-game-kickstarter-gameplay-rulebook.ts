import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "facts": {
      paragraphs: [
        "Give the confirmed player count, expected play time and player objective before the setting's history. Mention solo play, cooperative play or a required app if they affect someone's decision to back.",
        "For an expansion, state the required base game, and name the languages for any components that carry text. Avoid showing an unsupported mode simply because it makes the pitch broader.",
        "Then answer these four questions before anything else.",
      ],
      visuals: [
        {
          kind: "checklist",
          title: "Backers check these board game facts before they read your gameplay",
          groups: [
            {name: "Always state", items: ["Confirmed player count", "Expected play time", "What a player tries to achieve"]},
            {name: "State when it applies", items: ["Solo or cooperative modes", "A required app", "The base game an expansion needs", "Languages, and which pieces carry text"]},
          ],
        },
      ],
      takeaway: "Open the gameplay section of your board game Kickstarter page with player count, play time and the objective. Lore can wait until a backer knows what they would play.",
    },
    "sample-turn": {
      takeaway: "One sample turn with a real decision and its consequence explains your board game faster than a rules summary. Leave edge cases for the linked rulebook.",
    },
    "rulebook": {
      visuals: [
        {
          kind: "flow",
          title: "A draft rulebook can go on the page once the rules stop changing",
          caption: "The final layout and art can wait. The rules themselves cannot.",
          start: "You have a rulebook draft",
          nodes: [
            {question: "Are the rules final in substance?", yes: "Continue", no: "Wait, because rules that change how a turn works will contradict the page"},
            {question: "Has a blind playtest group learned from it?", yes: "Continue", no: "Run a session where players learn without the designer teaching them"},
            {question: "Does the link label give language, version and draft status?", yes: "Continue", no: "Relabel it, such as Read the draft English rulebook, version 0.8"},
            {question: "Does the link open in a signed out browser?", yes: "Continue", no: "Fix the sharing permissions on your drive"},
          ],
          end: "Link the rulebook next to the gameplay explanation",
          source: "Kickstarter, how to playtest your board game before launch",
        },
      ],
      takeaway: "Link a clearly labeled draft rulebook from your Kickstarter page once the rules are final in substance. Test the link signed out so every backer can open it.",
    },
    "evidence": {
      visuals: [
        {
          kind: "tips",
          title: "Reviewer previews help a board game page only when they are quoted honestly",
          tips: [
            {label: "Keep the meaning", text: "Preserve what the reviewer said, credit them and link to the original preview."},
            {label: "Ask first", text: "Get permission for footage, logos and quotes before they appear in campaign graphics."},
            {label: "Name the sample", text: "Say whether the reviewer played a prototype or a production sample."},
            {label: "Separate the voices", text: "Keep your own claims about the game apart from the reviewer's words."},
          ],
        },
      ],
      takeaway: "Use board game previews as evidence, with permission, credit and a clear note on which version the reviewer played.",
    },
    "test": {
      takeaway: "If someone who has never played can explain a turn from your page on a phone, your gameplay section is doing its job.",
    },
    "working-checklist": {
      takeaway: "Test the sample turn, the rules link and the component facts on a new player before the campaign graphics are made.",
    },
  },
};

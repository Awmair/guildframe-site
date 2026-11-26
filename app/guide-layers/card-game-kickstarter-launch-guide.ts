import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "product": {
      visuals: [
        {
          kind: "steps",
          title: "Explain a card game in the order a new reader needs it",
          caption: "Setting and faction detail comes after the reader knows how a turn works.",
          steps: [
            {label: "Product type", detail: "Complete game, starter product or expansion"},
            {label: "Who plays", detail: "Player count, expected duration and any base product needed"},
            {label: "The main decision", detail: "What a player does on a turn"},
            {label: "The goal", detail: "What they are trying to achieve"},
            {label: "The setting", detail: "Factions and world, once play is clear"},
          ],
        },
      ],
      takeaway: "Open your card game Kickstarter page by naming the product type, player count and the main decision on a turn, before any lore.",
    },
    "cards": {
      paragraphs: [
        "Choose examples that demonstrate the game's choices. Use close ups to explain the information on a card, then show where it fits into a turn. Keep flavor text and rules text distinguishable.",
        "A large deck spread can show variety, but it rarely explains play on a phone, so pair it with a few readable examples. Label unfinished artwork, wording or layouts rather than making the examples appear final.",
        "A sample card section works when it includes these four things.",
      ],
      takeaway: "A few readable sample cards placed in a real turn explain a card game better than a full deck spread, especially on a phone.",
    },
    "contents": {
      takeaway: "State exact card counts, decks, accessories and languages for every card game reward, and promise no rarity your product specification does not guarantee.",
    },
    "proof": {
      visuals: [
        {
          kind: "tips",
          title: "Show what is proven about your card game and what is still pending",
          tips: [
            {label: "Label the rules", text: "Link draft rules or a playthrough with the version clearly shown."},
            {label: "Test blind", text: "Let someone learn the game without you beside them to find gaps in the rules."},
            {label: "Split approved from pending", text: "Say which manufacturing details are approved and which are still open."},
            {label: "Mockups are mockups", text: "Never turn a design mockup into a claim about finished card stock, printing or packaging."},
          ],
          source: "Kickstarter, board game playtesting before launch",
        },
      ],
      takeaway: "Back up your card game page with labeled rules and blind playtest results, and keep unapproved print details clearly marked as pending.",
    },
    "review": {
      paragraphs: [
        "Use the same deck and edition names in native rewards, comparison graphics and the component list. Make digital downloads, optional accessories and additional copies easy to identify.",
        "Check the preview on a phone. Ask someone to choose the smallest reward that lets their group play, then explain what it contains.",
        "If they cannot answer, revise the reward names or comparison before adding more artwork. We run that same check on every card game page we design, before the creator approves launch.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "The smallest playable reward test tells you if the card game reward picker works",
          start: "Hand a tester your preview on a phone",
          nodes: [
            {question: "Can they pick the smallest reward that lets their group play?", yes: "Continue", no: "Rename the rewards or fix the comparison graphic"},
            {question: "Can they say what that reward contains?", yes: "Continue", no: "Add exact deck and card counts to the reward"},
            {question: "Do deck and edition names match across rewards, graphics and the component list?", yes: "Continue", no: "Make every name identical before launch"},
            {question: "Are downloads, accessories and extra copies easy to spot?", yes: "Continue", no: "Label each one in the reward picker"},
          ],
          end: "The creator approves launch",
        },
      ],
      takeaway: "If a tester can find the smallest playable reward on a phone and say what is in it, your card game rewards are ready.",
    },
    "working-checklist": {
      takeaway: "Check gameplay, contents and collectibility claims together before your card game Kickstarter launches.",
    },
  },
};

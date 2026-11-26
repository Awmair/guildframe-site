import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "base-game": {
      paragraphs: [
        "We start every stretch goal plan with the base reward, because a backer should know what the first pledge buys even if no extra goal unlocks. Essential rules, promised components and a playable core game all belong in that base offer.",
        "On a first campaign that matters more than any unlock. Stretch goals are optional, and fewer of them means less added cost and delivery risk.",
        "Then we check each upgrade with whoever owns production before it goes public. A new card may need editing and art, and a new miniature can affect tooling, packaging and shipping. Extra funding doesn't remove those tasks, so no unlock is announced until it has a cost.",
      ],
      takeaway: "Make the base reward a complete, playable game before you plan any Kickstarter stretch goals. Every unlock needs a production cost before it goes public.",
    },
    "examples": {
      paragraphs: [
        "These examples show the kinds of unlocks that suit tabletop games, and the cost each one carries. A card expansion is a natural card game stretch goal, usually a small set of new cards added to every eligible box.",
        "It can fit the existing print run and box, as long as the art, editing and print sheet are planned from the start.",
        "French language campaigns often call this an extension de cartes, and the planning is the same. Board games often use component upgrades such as thicker tokens or a box insert, while TTRPGs add adventures, art or print upgrades. Whatever the unlock, decide which rewards receive it before the graphic exists.",
      ],
      takeaway: "Good stretch goal examples for card games and board games are small, planned upgrades: extra cards, better tokens or an insert, each costed and tied to named rewards.",
    },
    "planning-table": {
      takeaway: "Fill in a stretch goal planning table with unlock, benefit, eligible rewards, cost and delivery effect before any artwork is made.",
    },
    "platforms": {
      paragraphs: [
        "Kickstarter says stretch goals are not part of the official platform, so the creator defines and explains them in the story. Meeting the original funding goal still decides whether the project funds, even if later stretch targets are never reached.",
        "Since May 6, 2026, Kickstarter also lets you link backers straight to a section of your story, such as Stretch Goals, which makes an unlock update easier to act on.",
        "Gamefound has native stretch goals, either manual or automatic. Automatic goals unlock on a backer count, funds raised or a campaign day, and the next goal shows at the top of the project. Check the selected trigger against your approved plan, because a graphic alone doesn't change the project settings.",
      ],
      visuals: [
        {
          kind: "compare",
          title: "Kickstarter stretch goals live in your story; Gamefound stretch goals live in the settings",
          columns: [
            {name: "Kickstarter", points: ["Not part of the official platform", "You define and explain them in the story", "Link backers to the Stretch Goals section", "The funding goal alone decides funding"], verdict: "You keep the story up to date"},
            {name: "Gamefound", points: ["Native stretch goals, manual or automatic", "Triggers: backer count, funds raised or campaign day", "Next goal shows at the top of the project"], verdict: "Check the trigger matches your plan", highlight: true},
          ],
          source: "Kickstarter Help Center and Gamefound Help Center, stretch goals",
        },
      ],
      takeaway: "On Kickstarter, stretch goals are your own story content. On Gamefound, they are a project setting you must check against the approved plan.",
    },
    "addons": {
      visuals: [
        {
          kind: "flow",
          title: "Four questions tell you if an extra is a stretch goal, an add on or part of the base game",
          start: "You have an extra item in mind",
          nodes: [
            {question: "Can the base reward ship complete without it?", yes: "Continue", no: "Put it in the base game, never behind a stretch goal"},
            {question: "Is it a small upgrade rather than an optional expansion?", yes: "Continue", no: "Offer it as an add on that backers choose and pay for"},
            {question: "Has whoever owns production given it a cost?", yes: "Continue", no: "Hold it back until the cost is known"},
            {question: "Can you name every reward that receives it?", yes: "Continue", no: "Decide eligibility before the graphic exists"},
          ],
          end: "Add it to the stretch goal chart",
        },
      ],
      takeaway: "Use a stretch goal for a small upgrade every eligible backer gets, and an add on for a larger or optional expansion with its own price.",
    },
    "graphics": {
      visuals: [
        {
          kind: "tips",
          title: "A stretch goal graphic must be readable without decoding icons",
          tips: [
            {label: "Three parts", text: "Show a readable target, the item name and a status label."},
            {label: "Eligibility in words", text: "Repeat which rewards get it in text, not only as an icon."},
            {label: "More than color", text: "Keep locked and unlocked states distinct without relying on color alone."},
            {label: "Update on unlock", text: "Change the story and any affected component or reward summaries the same day."},
            {label: "One status per item", text: "Never describe the same product as an included bonus and a paid add on."},
          ],
        },
      ],
      takeaway: "Every stretch goal graphic should show target, item, status and eligibility, and match the reward summaries once a goal unlocks.",
    },
    "help": {
      takeaway: "Plan stretch goal order, eligibility and cost before design, then keep every graphic and summary in step as goals unlock mid campaign.",
    },
    "working-checklist": {
      takeaway: "A stretch goal graphic is a promise, so approve its cost, eligibility and wording before you draw it.",
    },
  },
};

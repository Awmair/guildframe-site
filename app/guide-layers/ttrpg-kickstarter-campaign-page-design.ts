import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    experience: {
      paragraphs: [
        "It's tempting to open an RPG page with lore, but a reader first wants to know what a session feels like. So we describe the characters players take, the situations they face and the tone at the table.",
        "A short example of play does more than several paragraphs of world history.",
        "Then say whether this is a complete game, an adventure or a supplement. Name any required core book or system, using the compatibility wording you're allowed to publish, because readers need to know what else they'll need. Answer these four questions near the top.",
      ],
      takeaway: "Open a TTRPG Kickstarter page with what a session feels like, then the system and required books. Save the lore for later sections.",
    },
    samples: {
      visuals: [
        {
          kind: "tips",
          title: "Sample pages that let a reader judge an RPG book",
          tips: [
            {label: "A rules page", text: "Shown at a readable size, so someone can see how play works."},
            {label: "An adventure location", text: "One real location shows the writing and the layout together."},
            {label: "A character sheet or usable table", text: "Practical pages show how the book works during play, which a book render cannot."},
            {label: "A linked sample", text: "If you have a shareable sample or quickstart, link to it and say what's included."},
            {label: "Honest labels", text: "Mark prototype images and unfinished layouts so readers know what is still changing."},
          ],
        },
      ],
      takeaway: "Readable sample spreads sell a TTRPG better than book renders. Label any layout that is still changing.",
    },
    formats: {
      paragraphs: [
        "List what's in each reward. Say when a print book includes its PDF, and name the adventures or maps in a digital bundle. Exact contents are easier to compare than a label like complete package.",
        "Use confirmed page count, dimensions, binding, paper and production details, or label them clearly as estimates. Format and scope can explain a zine on their own, but for a hardback, readers also need to see the contents and how the layout works.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Four checks make every RPG reward say exactly what arrives",
          start: "You are writing the PDF, print and bundle rewards",
          nodes: [
            {question: "Is it a zine whose format and scope explain it on their own?", yes: "Format and scope can carry the reward", no: "For a hardback, also show the contents and how the layout works"},
            {question: "Are page count, dimensions, binding and paper confirmed?", yes: "Publish them as facts", no: "Label each one clearly as an estimate"},
            {question: "Does each print reward say whether its PDF is included?", yes: "Print and digital are easy to compare", no: "Add it, because exact contents beat a label like complete package"},
            {question: "Is every adventure or map in a digital bundle named?", yes: "The bundle reads as a clear list", no: "Name each item and mark which parts are print and which are digital"},
          ],
          end: "Each RPG reward makes its format clear",
        },
      ],
      takeaway: "Separate PDF, print and bundle rewards on a TTRPG page, and list exact contents. Confirmed print specs or clear estimates build trust.",
    },
    category: {
      takeaway: "Kickstarter added a TTRPG subcategory on May 8, 2026. Pick the subcategory that matches what backers mostly receive.",
    },
    direction: {
      paragraphs: [
        "Take the colors, type and imagery from the game itself, as the three examples below show. Whatever the style, keep enough contrast and room for the practical details.",
        "Our campaign design service prepares the page structure, copy and graphics using your artwork. Send a summary, a sample spread and your launch plans for a free mockup of the opening section.",
        "New book illustration and video need their own scope. For the wider plan, from audience to pledge manager, see our [TTRPG Kickstarter launch guide](/guides/ttrpg-kickstarter-launch-guide).",
      ],
      visuals: [
        {
          kind: "compare",
          title: "The game's tone should set the page's look",
          columns: [
            {name: "Noir investigation", points: ["Restrained color", "Room for clues and practical details"]},
            {name: "Whimsical adventure", points: ["Brighter palette", "Enough contrast for reward text"]},
            {name: "Horror zine", points: ["Empty space to build tension", "Sample pages still readable"]},
          ],
          caption: "Illustrative directions, not rules. Contrast and readable details come first in every style.",
        },
      ],
      takeaway: "Build the TTRPG page design from the game's own tone, while keeping contrast and room for system, format and reward details.",
    },
    "working-checklist": {
      takeaway: "Before launch, a group should know what they will play, what they need and which edition they are buying.",
    },
  },
};

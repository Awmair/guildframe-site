import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    summary: {
      paragraphs: [
        "We can only explain a project we understand, so the brief starts in plain language. Describe the product and who it's for.",
        "For a board game, explain the choices players make. For an RPG, describe a session and any required system, and for an accessory, say what it does and what it fits.",
        "Explain the tone you want, too. If you share campaign references, say what you like about each one, such as the layout, the reward comparison or the colors. That tells a designer more than a request to copy another game's page.",
        "Start the brief with these four items.",
      ],
      takeaway: "A Kickstarter campaign designer can only explain what they understand. Open the brief with a plain pitch, the audience, the platform and references with reasons.",
    },
    art: {
      visuals: [
        {
          kind: "tips",
          title: "Five habits that make an artwork folder usable on day one",
          tips: [
            {label: "Originals first", text: "Send original files and transparent versions of the logo and box art where you have them."},
            {label: "Readable card text", text: "Card images need enough resolution for their text to stay readable on the campaign page."},
            {label: "Five folders", text: "Group files into logos, product images, gameplay, interiors and rewards."},
            {label: "Names that explain", text: "Name each file by product, version and status, so a placeholder never passes as final."},
            {label: "A contents sheet", text: "For several editions or bundles, add a PDF or spreadsheet of what each one contains."},
          ],
        },
      ],
      takeaway: "Send your campaign designer original, labelled artwork grouped by type. Clear file names keep placeholders off the finished Kickstarter page.",
    },
    facts: {
      takeaway: "Keep reward names, contents, prices and status in one table. Your designer then works from one approved source for every reward graphic.",
    },
    handoff: {
      visuals: [
        {
          kind: "flow",
          title: "Share your project now, or settle the facts first",
          start: "You want a designer to start on your campaign page",
          nodes: [
            {question: "Do you have a short summary and a link to your artwork?", yes: "The opening section has something to work from", no: "Write the pitch and gather the artwork folder first"},
            {question: "Do you know the platform and your launch plans?", yes: "Share the project and book a 30 minute call", no: "Settle Kickstarter or Gamefound and a rough date first"},
            {question: "Are the reward sheet and production facts ready to publish?", yes: "Agree scope, fee and schedule for the full page", no: "Agree the launch strategy while you prepare the rest"},
          ],
          end: "The full campaign design project starts once scope, fee and schedule are agreed",
        },
      ],
      takeaway: "Name one person to collect feedback and agree who owns each fact. A summary, artwork link, platform and launch plan are enough to share your project and book a call.",
    },
    "working-checklist": {
      takeaway: "Settle the game explanation, artwork folder and reward sheet before the first call. Every fact fixed now saves a revision later.",
    },
  },
};

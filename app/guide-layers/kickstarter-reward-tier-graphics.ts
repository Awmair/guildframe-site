import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    inventory: {
      paragraphs: [
        "We start every reward graphic from one inventory, not from the artwork. List every tier and the items it includes, using one name for each item.",
        "Say whether an expansion bundle includes the base game. For an RPG, list physical books, PDFs and extras separately.",
        "Mark optional extras in both the graphic and the platform setup. If the dice or sleeves beside a box cost extra, a backer should see that straight away.",
      ],
      takeaway: "Build Kickstarter reward tier graphics from one inventory with one name per item. Optional extras get their own label in the graphic and the platform setup.",
    },
    example: {
      takeaway: "A good reward tier graphic shows what changes between tiers. Extras sitting beside a reward in a photo still need a paid separately label.",
    },
    hierarchy: {
      takeaway: "Use the same visual order on every reward tier graphic, ending with the difference from the tier before. Backers then compare tiers at a glance.",
    },
    mobile: {
      paragraphs: [
        "Preview each reward graphic at the width it will take up on a phone. If someone has to pinch to read the contents, simplify the layout or split the information into smaller pieces.",
        "Where the platform allows it, put the essential contents in readable page text too. Our guide to [Kickstarter image sizes](/guides/kickstarter-image-sizes) covers the export dimensions for story and reward images.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four phone checks for every reward comparison graphic",
          tips: [
            {label: "Preview at real width", text: "Look at the exported graphic at the size it takes up on a phone, not on your design screen."},
            {label: "No pinching", text: "If a reader has to zoom to read contents, simplify the layout."},
            {label: "Split dense tiers", text: "Break a crowded comparison into smaller graphics, or use a labeled comparison table."},
            {label: "Repeat in text", text: "Put essential contents in page text, so the reward still makes sense if the image is small or slow to load."},
          ],
        },
      ],
      takeaway: "Reward tier graphics must read at phone width without pinching. Repeat the essential contents in page text in case the image loads slowly.",
    },
    consistency: {
      visuals: [
        {
          kind: "checklist",
          title: "The reward graphics and the reward records must say the same thing",
          groups: [
            {name: "Match on both platforms", items: ["Reward names", "Item counts", "Prices", "Optional extras", "Retired tiers removed from images"]},
            {name: "On Gamefound, also plan for", items: ["Reward sections beside the story", "Visibility set by campaign stage", "Your own check of reward configuration and fulfillment details"]},
          ],
          source: "Gamefound help center, project detailed description",
        },
      ],
      takeaway: "Check every reward graphic against the live reward records before launch. Names, counts, prices and extras must match on Kickstarter and Gamefound.",
    },
    "native-images": {
      visuals: [
        {
          kind: "flow",
          title: "Can this mixed bundle appear in your reward graphic?",
          start: "You want a reward graphic that mixes digital and physical items",
          nodes: [
            {question: "Is the main reward a physical, shippable item?", yes: "Shippable add ons can attach to it", no: "A digital main reward can't take shippable add ons, so change the structure first"},
            {question: "Does every shippable add on ship to all your backer regions?", yes: "Every backer will see the full bundle", no: "Note the regions, because backers only see add ons that ship to their country"},
            {question: "Do names, counts and prices match the reward records?", yes: "Export the graphic, and the native image at 3:2", no: "Fix the graphic or the platform fields until they agree"},
          ],
          end: "Mixed bundle graphic ready for launch",
          source: "Kickstarter Help Center, adding rewards",
        },
      ],
      takeaway: "Kickstarter reward images need a 3:2 ratio and at least 348 x 232 pixels. Check format and shipping rules before a graphic promises a mixed bundle.",
    },
    "working-checklist": {
      takeaway: "Run the inventory, comparison and phone checks on every reward graphic, then compare the result with the reward fields on the platform.",
    },
  },
};

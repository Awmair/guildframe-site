import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "cyberpunk-tcg": {
      paragraphs: [
        "A trading card game set the tabletop crowdfunding record this year. The Official Cyberpunk Trading Card Game launched on Kickstarter on March 17, 2026, with a $100,000 goal and doubled it within minutes. It went on to pass $15M, which Kickstarter reported as the most funded tabletop game in crowdfunding history.",
        "Two details from Kickstarter's own write up matter more to a smaller creator than the total. The team planned to go to print directly after the campaign closed, and they called their organized play program proof that the game is driven by human connection.",
        "Both are print run and community decisions made before launch, not marketing added afterwards. Your game will not have a famous video game world behind it. The structure still transfers: a clear way to start playing, a print plan tied to pledges and a reason for players to meet at a table.",
      ],
      takeaway: "The record TCG Kickstarter planned its print run and organized play before launch. A smaller trading card game can copy that structure without the famous license.",
    },
    "starter-decks-vs-boosters": {
      paragraphs: [
        "A backer's first question about a TCG is whether one reward lets them play. A booster pack on its own usually does not. So we build the reward ladder from a fixed, playable product upward.",
        "Fixed contents and random contents need different wording. A starter deck can list every card, while a booster can only state what your printer has confirmed, such as the pack size and any guaranteed slots.",
        "Our [card game Kickstarter guide](/guides/card-game-kickstarter-launch-guide) covers readable sample cards and deck counts in more detail.",
      ],
      visuals: [
        {
          kind: "steps",
          title: "A TCG reward ladder starts with a product that gets two people playing",
          steps: [
            {label: "Starter deck or two player box", detail: "Fixed contents, full card list, playable out of the box"},
            {label: "Boosters for collecting", detail: "Pack size and guaranteed slots as the printer confirmed"},
            {label: "Larger bundles", detail: "Starter product plus sealed boosters in one tier"},
          ],
          caption: "The order we build TCG reward tiers in, from the smallest playable reward upward.",
        },
      ],
      takeaway: "If a new player cannot point to the smallest reward that gets two people playing, the reward picker needs work before the art does.",
    },
    "booster-randomization": {
      paragraphs: [
        "Booster randomization is a printer decision, not a design decision, and printers handle it very differently. We ask for the method in writing before any rarity language goes on the page. Two printers' own pages show how wide the range is.",
        "PrintNinja says it can randomize cards only on orders larger than 20,000 units. Its randomization is truly random, cannot follow dictated rules, and duplicates are likely, so it does not offer rarities.",
        "Its own example shows why. A 6:3:1 ratio of commons, uncommons and rares across 100 designs would need 2,750,000 cards. It prints 55 cards to a press sheet, with a minimum of 500 press sheets.",
        "QP Market Network works the other way. Its system lets you create rarity tiers, set a drop rate per tier and choose the pack size, then assembles each pack on its own using those rules.",
        "The probabilities must total 100%, duplicates can still appear, and orders start from a single pack. So the printer you choose decides whether your page can say rare at all.",
      ],
      takeaway: "Booster randomization and rarity tiers depend on your printer. Get the collation method in writing before your Kickstarter page mentions rarity.",
    },
    "print-run": {
      takeaway: "Size a TCG print run from closing pledges and pledge manager orders, then add stock for stores, events and replacements.",
    },
    scalpers: {
      takeaway: "Kickstarter allows one pledge per account per project, so fixed booster box tiers and quantity limits are your best tools against scalpers.",
    },
    "organized-play": {
      paragraphs: [
        "A TCG lives or dies on whether people have someone to play with. The Cyberpunk team made their organized play program part of the pitch while the campaign was still live. That timing is the lesson, because the plan for where people play came before the print order.",
        "For a smaller launch, organized play can start modestly. Each choice below changes the print run, so it belongs in the plan from the first draft.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four organized play decisions to make before the print order",
          tips: [
            {label: "Store and organizer rewards", text: "Decide which rewards a store or community organizer would back, and price them as a tier."},
            {label: "Launch event kit", text: "List what a launch event kit contains, so its cards and packs join the print count."},
            {label: "Event promos", text: "Choose which promo cards are held back for events, and say on the page whether they return later."},
            {label: "Your first ten events", text: "Describe them on the page. Backers who can picture where they will play are easier to convince."},
          ],
        },
      ],
      takeaway: "Organized play for a TCG Kickstarter starts small, but it changes the print run. Plan event kits and promo cards before you size the order.",
    },
    "pack-wording": {
      paragraphs: [
        "Once the printer has confirmed the method, the page copy follows from it. We write every pack and box description from the approved specification and nothing beyond it, because rarity promises are the claims backers check first when their cards arrive.",
        "For a random booster, that means the pack size, any guaranteed slots and a plain note that duplicates can appear. For a fixed starter deck, it means the full card list, or at least the card count and the decks needed to play.",
        "If your printer cannot support rarity odds, the page should not suggest them through words like chase card or ultra rare.",
        "Keep the same product names in the story, the reward picker and the pledge manager. That consistency lets a backer trust the reward graphic without reading the small print twice.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "What your TCG page can promise depends on three printer answers",
          start: "You want boosters in your Kickstarter rewards",
          nodes: [
            {question: "Does your printer randomize cards at your order size?", yes: "Get the collation method in writing", no: "Sell fixed starter decks and bundles, and list every card"},
            {question: "Does the printer support rarity tiers with a drop rate per tier?", yes: "Use the confirmed tiers and rates, which must total 100%", no: "State the pack size only, and avoid words like chase card or ultra rare"},
            {question: "Are guaranteed slots confirmed in the specification?", yes: "Name each guaranteed slot in the reward copy", no: "Leave guaranteed slots out of the page"},
          ],
          end: "Write pack contents from the approved specification, with a plain note that duplicates can appear",
          caption: "Example: PrintNinja randomizes only above 20,000 units with no rarities, while QP Market Network supports rarity tiers from one pack.",
        },
      ],
      takeaway: "Write booster pack contents only from the printer's approved specification. Matching product names across page, rewards and pledge manager builds backer trust.",
    },
    "work-with-us": {
      paragraphs: [
        "You can sketch the reward ladder and get printer quotes yourself, and you should, because those facts belong to you. Where creators usually run short is turning collation rules, print minimums and reward limits into a page that a new player understands on a phone.",
        "We do that work for card games and TCGs. We plan the page structure, write the campaign copy, design readable card spreads and build reward comparisons that separate starter products, boosters and bundles.",
        "Since August 20, 2026, Kickstarter's Pledge Manager can also let backers add products after submitting their order, and we plan that catalog with you.",
        "To talk through your cards and your launch, share your project through the [enquiry form](/buy). For the full launch, from prelaunch to the live campaign, see our [Kickstarter launch services for tabletop games](/kickstarter-launch-services), or go straight to our [card game and TCG campaign design](/card-game-kickstarter-campaign-design).",
      ],
      takeaway: "You own the printer quotes and the reward ladder. We turn them into a TCG Kickstarter page a new player understands on a phone.",
    },
  },
};

import type { LaunchGuide } from "../launch-guides";

const source = (label: string, publisher: string, href: string) => ({ label, publisher, href });

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "tcg-kickstarter-launch-guide",
  title: "Trading Card Game Kickstarter Guide: Print Runs, Boosters and Scalpers",
  seoTitle: "TCG Kickstarter Guide: Print Runs and Boosters",
  description: "Plan a trading card game Kickstarter: booster randomization at the printer, print run size, starter decks, scalper proof rewards and organized play.",
  tag: "Card games & TCGs",
  servicePath: "/card-game-kickstarter-campaign-design",
  serviceLabel: "Card game and TCG campaign design",
  answer: "A trading card game Kickstarter works when one reward lets a backer start playing and the booster randomization matches what your printer can actually do. The reward structure should also put cards in players' hands before resellers. Settle collation, print minimums and reward limits with the printer before you design a single reward graphic.",
  relatedSlugs: ["card-game-kickstarter-launch-guide", "board-game-kickstarter-reward-pricing", "board-game-pledge-manager-checklist"],
  sources: [
    source("Cyberpunk TCG becomes the most funded game in crowdfunding history (March 31, 2026)", "Kickstarter", "https://updates.kickstarter.com/cyberpunk-tcg-becomes-the-most-funded-game-in-crowdfunding-history/"),
    source("Trading card game and collectible card game FAQ", "PrintNinja", "https://printninja.com/create-your-own-trading-card-game"),
    source("Card randomization for custom booster packs", "QP Market Network", "https://www.qpmarketnetwork.com/card-randomization"),
    source("Can I pledge to a single project more than once?", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236762-can-i-pledge-to-a-single-project-more-than-once"),
    source("How do I add rewards to my project?", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project"),
    source("Backer self serve add ons (August 20, 2026)", "Kickstarter", "https://start.kickstarter.com/kickstarter-release-notes/backer-self-serve-add-ons"),
    source("Kickstarter launch services for tabletop games", "Guildframe", "/kickstarter-launch-services"),
  ],
  sections: [
    {
      id: "cyberpunk-tcg",
      title: "What the Cyberpunk TCG campaign showed",
      paragraphs: [
        "A trading card game set the tabletop crowdfunding record this year. The Official Cyberpunk Trading Card Game launched on Kickstarter on March 17, 2026, with a $100,000 goal and doubled it within minutes. It went on to pass $15M, which Kickstarter reported as the most funded tabletop game in crowdfunding history.",
        "Two details from Kickstarter's own write up matter more to a smaller creator than the total. The team planned to go to print directly after the campaign closed, and they described their organized play program as proof that the game is driven by human connection. Both are print run and community decisions made before launch, not marketing added afterwards.",
        "Your game will not have a famous video game world behind it. The structure still transfers: a clear way to start playing, a print plan tied to pledges and a reason for players to meet at a table.",
      ],
      visual: {
        kind: "stats",
        title: "Cyberpunk TCG raised over 150 times its funding goal",
        source: "Kickstarter, March 31, 2026",
        stats: [
          { value: "$100,000", label: "Funding goal", note: "Doubled within minutes of the Mar 17 launch" },
          { value: "$15M+", label: "Raised by Mar 31", note: "Biggest TCG on Kickstarter" },
          { value: "Q4 2026", label: "Planned retail release", note: "Printing to start right after the campaign" },
        ],
      },
      source: 0,
    },
    {
      id: "starter-decks-vs-boosters",
      title: "Sell a way to play first, then a way to collect",
      paragraphs: [
        "A backer's first question about a TCG is whether one reward lets them play. A booster pack on its own usually does not. So we build the reward ladder from a fixed, playable product upward: a starter deck or a two player box, then boosters for collecting, then larger bundles.",
        "Fixed contents and random contents need different wording. A starter deck can list every card. A booster can only state what your printer has confirmed, such as the pack size and any guaranteed slots. Our [card game Kickstarter guide](/guides/card-game-kickstarter-launch-guide) covers readable sample cards and deck counts in more detail.",
        "The takeaway is simple. If a new player cannot point to the smallest reward that gets two people playing, the reward picker needs work before the art does.",
      ],
    },
    {
      id: "booster-randomization",
      title: "How booster randomization works at the printer",
      paragraphs: [
        "Booster randomization is a printer decision, not a design decision, and printers handle it very differently. We ask for the method in writing before any rarity language goes on the page. Two printers' own pages show how wide the range is.",
        "PrintNinja says it can randomize cards only on orders larger than 20,000 units, that the randomization is truly random and cannot follow dictated rules, and that duplicates are likely. It does not offer rarities. Its own example shows why: a 6:3:1 ratio of commons, uncommons and rares across 100 designs would need 2,750,000 cards. It prints 55 cards to a press sheet, with a minimum of 500 press sheets.",
        "QP Market Network works the other way. Its system lets you create rarity tiers, set a drop rate per tier and choose the pack size, then assembles each pack on its own using those rules. The probabilities must total 100%, duplicates can still appear, and orders start from a single pack.",
        "So the printer you choose decides whether your page can say rare at all.",
      ],
      visual: {
        kind: "compare",
        title: "Your printer decides whether your boosters can have rarities",
        caption: "As stated on each printer's own page, checked November 25, 2026.",
        columns: [
          { name: "PrintNinja (large runs)", points: ["Randomizes only above 20,000 units", "Truly random, no rules", "No rarity tiers", "55 cards per press sheet"], verdict: "Fixed decks, or random at volume" },
          { name: "QP Market Network (from one pack)", points: ["Rarity tiers you define", "Drop rate per tier", "Each pack drawn on its own", "Orders from one pack"], verdict: "Rarity at small volume", highlight: true },
        ],
      },
      source: 1,
    },
    {
      id: "print-run",
      title: "Size the print run from pledges, not hopes",
      paragraphs: [
        "A crowdfunded TCG has one big advantage over a retail launch: you know demand before you print. That only helps if the print run is built from the pledge data in a fixed order, with your own stock for stores, events and replacements added on top.",
        "We plan the order below with creators before launch, because it also decides what the reward graphics can promise. Ask your printer how your card count lays out on its press sheets, since sheet count drives cost and minimums. Then price each tier from that cost, as our [reward pricing guide](/guides/board-game-kickstarter-reward-pricing) shows.",
      ],
      visual: {
        kind: "steps",
        title: "Six steps turn pledges into a print order you can fund",
        caption: "The planning order we use. Minimums and sheet sizes come from your printer's quote.",
        steps: [
          { label: "Confirm collation and minimums", detail: "Random or fixed, rarity support, minimum run" },
          { label: "Lock pack and box contents", detail: "Cards per pack, packs per box, guaranteed slots" },
          { label: "Count pledges at close", detail: "Every tier and add on, by product" },
          { label: "Add pledge manager orders", detail: "Late pledges and post campaign add ons" },
          { label: "Add stock beyond backers", detail: "Stores, organized play, damaged pack replacements" },
          { label: "Approve proofs, then print", detail: "Only after the counts above are final" },
        ],
      },
      source: 1,
    },
    {
      id: "scalpers",
      title: "Design rewards that reach players before resellers",
      paragraphs: [
        "Scalping hurts a TCG launch twice. Players who miss out feel shut out of the game, and stores see sealed product listed above their price before it reaches them. Reward design will not stop every reseller, but it can make bulk buying harder and playing easier.",
        "Start with the platform rules. Kickstarter allows one pledge per account per project, with one main reward tier in it, and each reward can carry a quantity limit, a time limit and an audience setting. That makes the tier itself the place to cap sealed product.",
        "These are the reward choices we work through with TCG creators.",
      ],
      list: [
        "Put booster boxes in fixed tiers rather than an open add on, so a single pledge carries a known amount of sealed product.",
        "Check whether your pledge manager can cap add on quantities before you rely on it, using our [pledge manager checklist](/guides/board-game-pledge-manager-checklist), then state the cap on the page.",
        "Keep Kickstarter exclusives playable or cosmetic, and say whether promo cards will return through organized play later.",
        "Use a quantity limit on the most sought after tier and say so plainly, instead of hiding scarcity in the copy.",
        "Plan a store tier or retail allocation, so local stores are not competing with resellers for the same boxes.",
      ],
      source: 3,
    },
    {
      id: "organized-play",
      title: "Plan organized play as part of the reward structure",
      paragraphs: [
        "A TCG lives or dies on whether people have someone to play with. The Cyberpunk team made their organized play program part of the pitch while the campaign was still live. That timing is the lesson: the plan for where people play came before the print order.",
        "For a smaller launch, organized play can start modestly. We plan which rewards a store or community organizer would back, what a launch event kit contains and which promo cards are held back for events. Each of those choices changes the print run, so it belongs in the plan from the first draft.",
        "If you can describe your first ten events on the page, backers can picture where they will play.",
      ],
      source: 0,
    },
    {
      id: "pack-wording",
      title: "Write pack contents from the printer's specification",
      paragraphs: [
        "Once the printer has confirmed the method, the page copy follows from it. We write every pack and box description from the approved specification and nothing beyond it, because rarity promises are the claims backers check first when their cards arrive.",
        "For a random booster, that means the pack size, any guaranteed slots and a plain note that duplicates can appear. For a fixed starter deck, it means the full card list, or at least the card count and the decks needed to play. If your printer cannot support rarity odds, the page should not suggest them through words like chase card or ultra rare.",
        "Keep the same product names in the story, the reward picker and the pledge manager. That consistency lets a backer trust the reward graphic without reading the small print twice.",
      ],
      source: 2,
    },
    {
      id: "work-with-us",
      title: "What you can settle alone, and where we help with a TCG",
      paragraphs: [
        "You can sketch the reward ladder and get printer quotes yourself, and you should, because those facts belong to you. Where creators usually run short is turning collation rules, print minimums and reward limits into a page that a new player understands on a phone.",
        "We do that work for card games and TCGs. We plan the page structure, write the campaign copy, design readable card spreads and build reward comparisons that separate starter products, boosters and bundles using your confirmed specifications. Since August 20, 2026, Kickstarter's Pledge Manager can also let backers add products after submitting their order, and we plan that catalog with you.",
        "To see your cards on the opening section first, request a free opening mockup. For the full launch, from prelaunch to the live campaign, see our [Kickstarter launch services for tabletop games](/kickstarter-launch-services), or go straight to our [card game and TCG campaign design](/card-game-kickstarter-campaign-design).",
      ],
      source: 6,
    },
  ],
  faqs: [
    { question: "How much did the Cyberpunk TCG raise on Kickstarter?", answer: "Kickstarter reported on March 31, 2026, that it had passed $15M after launching on March 17 with a $100,000 goal, making it the most funded tabletop game in crowdfunding history." },
    { question: "Can a small TCG print run have rarities?", answer: "It depends on the printer. PrintNinja says it does not offer rarities and only randomizes orders above 20,000 units. QP Market Network lets you set rarity tiers and drop rates from a single pack." },
    { question: "Should my first TCG Kickstarter sell booster boxes?", answer: "Lead with a fixed, playable product such as a starter deck or two player box, then offer boosters for collecting. A booster on its own rarely lets a new player start." },
    { question: "How do I stop scalpers buying up my TCG Kickstarter?", answer: "Put sealed product in fixed tiers, use quantity limits on the most wanted tier, keep exclusives playable or cosmetic and plan a store allocation. Kickstarter already limits each account to one pledge per project." },
    { question: "Can a backer pledge twice to get more booster boxes?", answer: "No. Kickstarter allows one pledge per project per account, with one main reward tier. Extra product comes through add ons or a larger tier." },
    { question: "Do I need organized play before my TCG launches?", answer: "You need a plan for it. Stores, events and promo cards all change the print run, so decide what organized play needs before you lock the print order." },
  ],
};

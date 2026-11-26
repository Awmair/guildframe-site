import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    contents: {
      paragraphs: [
        "A price only means something once the contents are fixed, so we start with a reward sheet. A name such as Deluxe does not tell your factory or fulfillment partner what to pack.",
        "List every item in each tier with its quantities and language versions. Keep variants apart from extra items, because a choice of English or French rules is different from promising both.",
        "Gamefound builds rewards from their included items and lets you mark whether an item can be bought on its own. Once the sheet is approved, the reward graphics, the pledge manager and the price all work from the same list.",
      ],
      visuals: [
        {
          kind: "checklist",
          title: "A reward sheet names every item, so the price, graphics and pledge manager match",
          groups: [
            {name: "For each tier, list", items: ["The game and any expansions", "Upgraded pieces, sleeves and inserts", "Digital files", "Quantities and language versions"]},
            {name: "Then mark", items: ["Variants, such as English or French rules", "Extra items promised on top", "Items backers can buy on their own"]},
          ],
          source: "Gamefound, creating rewards",
        },
      ],
      takeaway: "Price a Kickstarter reward only after its contents are fixed, because a tier name like Deluxe tells nobody what to pack.",
    },
    "cost-model": {
      paragraphs: [
        "Another campaign's pledge price is useful context, but it cannot tell you your margin. They may print a different quantity, ship a different way or plan a different retail price.",
        "So we build each price from six inputs. Fixed work such as campaign design or tooling sits in the project budget once. It then gets spread across the backers you expect, rather than counted in full on every reward.",
      ],
      takeaway: "Build each Kickstarter reward price from six inputs, with fixed work spread across the backers you expect rather than charged in full on every tier.",
    },
    "forty-dollar-pledge": {
      paragraphs: [
        "Fees are the only costs here that are the same for every creator, so we start with them. On a US project, Kickstarter's platform fee is 5% of funds raised. Payment processing is 3% plus $0.20 per pledge.",
        "Pledges under $10 use a micropledge rate of 5% plus $0.05. Fees are only collected if the project funds. Our [Kickstarter fees guide](/guides/kickstarter-fees) covers the full fee picture, including other countries.",
        "For a $40 pledge that means $2.00 to Kickstarter and $1.40 to payment processing, so $3.40 in total. Everything else in the example below is illustrative, so replace it with your own quotes. It assumes shipping to the backer is charged separately.",
        "The point of the example is the last line. A $40 price can look generous and still leave less than $6 to absorb a late freight quote or a damaged shipment.",
      ],
      takeaway: "On a US Kickstarter, a $40 pledge loses $3.40 to fees before you pay for a single component.",
    },
    example: {
      paragraphs: [
        "Once you know your costs, the floor price is simple arithmetic. This hypothetical example assumes $42 in product and fulfillment costs, $6 for acquisition and $6 for fixed work. Add an $8 margin you want to keep, and the total is $62.",
        "Kickstarter's US fees are 8% of the pledge plus $0.20. So the floor price is $62 plus $0.20, divided by 0.92, which comes to about $67.61. Rounding up to $69 gives fees of $5.72 and leaves $9.28 after the $54 in costs.",
        "Run the same sum for every tier, using your real quotes and the fee rates for your country.",
      ],
      takeaway: "On US fees, your reward price floor is costs plus margin plus $0.20, divided by 0.92. Then round up to a real price and run the sum for every tier.",
    },
    tiers: {
      paragraphs: [
        "A deluxe tier can sell for more and still leave less money per box. So we compare the extra revenue with the extra manufacturing, weight, packaging and handling, tier by tier.",
        "A larger box can move the whole parcel into a higher shipping bracket, even when the component upgrade looks cheap. Bundles and stretch goals need the same check, because a discount can pull backers away from the core box. Keep retailer terms separate too, since a pledge price is not automatically a workable wholesale price.",
        "For a first campaign we usually suggest few tiers, often a base game and one deluxe version. Every extra tier is another set of contents, graphics and costs to check.",
        "An early bird price needs the same check. It gives people a reason to back on day one, but later backers can feel penalized, and the discounted price still has to clear your floor.",
        "Run these five checks on every tier, then use the comparison and the decision path below to decide what stays.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Keep a reward tier only if it passes every check",
          start: "A proposed tier, bundle or early bird price",
          nodes: [
            {question: "Does the extra revenue cover the extra manufacturing, weight, packaging and handling?", yes: "Check the packed box next", no: "Reprice it or drop it, because it earns less per box"},
            {question: "Does the packed box stay in the same shipping bracket?", yes: "Test the discount next", no: "Price the higher bracket into the tier"},
            {question: "Does any bundle discount still clear your floor at the mix you expect?", yes: "Check the early bird next", no: "Cut the discount, because it comes out of your margin"},
            {question: "Does an early bird price still clear the floor?", yes: "Check the stretch goals next", no: "Raise the early bird price or skip it"},
            {question: "Is the tier still correct after every stretch goal that changes its contents?", yes: "The tier has earned its place", no: "Recalculate before the stretch goal goes live"},
          ],
          end: "Keep the tier and add it to the reward comparison",
          caption: "Guildframe's tier review order. Use packed sizes and supplier quotes at every step.",
        },
      ],
      takeaway: "A deluxe Kickstarter tier earns its place only when its extra margin is real after the packed size and shipping bracket.",
    },
    shipping: {
      visuals: [
        {
          kind: "compare",
          title: "Charging shipping at the pledge trades rate risk for a clear total",
          columns: [
            {name: "Charge at the pledge", points: ["Backers see the full total on day one", "You commit to rates months before freight is booked"], verdict: "Clear total, more rate risk"},
            {name: "Collect later in the Pledge Manager", points: ["Protects you from rate changes", "The page must explain what backers pay and when"], verdict: "Less rate risk, more explaining"},
          ],
          source: "Kickstarter Pledge Manager release notes",
        },
      ],
      takeaway: "Pick one shipping route early and describe it the same way on the pricing sheet and the campaign page.",
    },
    presentation: {
      visuals: [
        {
          kind: "tips",
          title: "Four ways to show reward prices that backers trust",
          tips: [
            {label: "Exact contents", text: "List what is in each box, not just the tier name."},
            {label: "Price and delivery", text: "Show the price and the delivery estimate side by side."},
            {label: "Later charges", text: "Say plainly if shipping or tax is charged later."},
            {label: "Real MSRP only", text: "Show a retail comparison only when a real retail plan sets it. Otherwise show the campaign price alone."},
          ],
        },
      ],
      takeaway: "A reward comparison should let a backer compare tiers on a phone without doing any arithmetic.",
    },
    help: {
      takeaway: "Bring your supplier quotes and reward sheet, and we test every tier against fees, ads and shipping before the reward graphics are designed.",
    },
  },
};

import type { LaunchGuide } from "../launch-guides";

const source = (label: string, publisher: string, href: string) => ({ label, publisher, href });

export const guide: LaunchGuide = {
  published: "2026-11-25",
  updated: "2026-11-25",
  slug: "terrain-and-dice-kickstarter-launch-guide",
  title: "Launching Terrain, Dice and Accessories on Kickstarter",
  seoTitle: "Terrain and Dice Kickstarter Launch Guide for Creators",
  description: "Launch terrain, dice or accessories on Kickstarter: show scale and assembly, separate STL and physical rewards, plan add ons and price shipping by box size.",
  tag: "Terrain, dice & accessories",
  servicePath: "/miniatures-kickstarter-campaign-design",
  serviceLabel: "Campaign design for miniatures and terrain",
  answer: "Show the product at its real size, put the separate parts beside the finished build and state exactly what each reward contains. Then price shipping from the packed box, because terrain and accessories are often light for their size and carriers can bill by volume.",
  relatedSlugs: ["miniatures-stl-kickstarter-launch-guide", "kickstarter-shipping-delivery-page", "kickstarter-reward-tier-graphics"],
  sources: [
    source("FutureProof Terrain campaign design case study", "Guildframe", "/work/futureproof-terrain"),
    source("Quiver Time CITADEL campaign design case study", "Guildframe", "/work/quiver-time"),
    source("How do I add rewards to my project?", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project"),
    source("New Games and Publishing subcategories: TTRPG, STL and Audiobooks (May 8, 2026)", "Kickstarter", "https://start.kickstarter.com/kickstarter-release-notes/new-games-publishing-subcategories-ttrpg-stl-and-audiobooks"),
    source("Rules for hardware and product design projects", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects"),
    source("Backer self serve add ons (August 20, 2026)", "Kickstarter", "https://start.kickstarter.com/kickstarter-release-notes/backer-self-serve-add-ons"),
    source("Package dimensions, size limits and weight guide", "UPS", "https://www.ups.com/us/en/support/shipping-support/shipping-dimensions-weight"),
    source("Options for charging shipping costs", "Kickstarter", "https://help.kickstarter.com/en-us/articles/16236769-what-options-do-i-have-for-charging-shipping-costs"),
    source("Kickstarter launch services for tabletop games", "Guildframe", "/kickstarter-launch-services"),
  ],
  sections: [
    {
      id: "what-backers-check",
      title: "Backers judge terrain and accessories by size, fit and contents",
      paragraphs: [
        "A board game campaign sells a play experience, but terrain, dice and accessories sell a physical object that has to fit a table, a collection or a carry case. So the first questions a backer asks are practical: how big is it, how does it go together and what exactly arrives in the box.",
        "We have presented both kinds of product. [FutureProof Terrain](/work/futureproof-terrain) is a modular wargaming terrain system from Snot Goblin Gaming. Its campaign had to explain how the pieces connect, what a set can build and how it packs away after play. [Quiver Time's CITADEL Deck Block](/work/quiver-time) is a storage accessory for cards, dice, tokens and coins, and its campaign centered on the magnetic cover, the flexible divider and the storage options.",
        "Neither product could be sold with one dramatic image. That's the thread through this guide: every section of the page should answer a size, fit or contents question before it asks for a pledge.",
      ],
      source: 0,
    },
    {
      id: "scale-and-assembly",
      title: "Show scale and assembly before atmosphere",
      paragraphs: [
        "A scenic table shot tells a backer what the hobby can look like. It does not tell them how tall a wall section is or how many pieces make the building. We put an assembled build and its separate parts close together, then add a scale reference the reader already knows.",
        "On FutureProof Terrain, the campaign artwork put an assembled building in the foreground and the individual walls and floors above it. Seeing both views helps a player connect the separate pieces with the terrain they can put on the table. Short headings beside the terrain carried the practical benefits, rather than a dense product paragraph.",
        "For dice and accessories, the same idea applies at a smaller size. Show the item in a hand, next to a standard card or beside a miniature on its base, and put the confirmed dimensions in text near the image. A reader on a phone should never have to guess the size from a close up.",
        "We use a fixed order for this part of the page, so each image answers the question the previous one raised.",
      ],
      visual: {
        kind: "steps",
        title: "Five images answer the size and assembly questions in order",
        caption: "The order we use for terrain and accessory pages. The FutureProof Terrain presentation showed how the pieces connect, how the sets fit on the table and how they pack away.",
        steps: [
          { label: "The finished build", detail: "One assembled piece on a table, lit so the details read" },
          { label: "The parts laid out", detail: "Every piece in the set, named the same way as the rewards" },
          { label: "A known scale reference", detail: "A based miniature, a die, a card or a hand, with dimensions in text" },
          { label: "How pieces connect", detail: "A close view of the join, clip or magnet that holds a build together" },
          { label: "Packed away", detail: "How the set stores after play and what the box holds" },
        ],
      },
    },
    {
      id: "modular-systems",
      title: "Explain a modular system as parts plus builds",
      paragraphs: [
        "Modular terrain is two products at once: a box of parts and the builds those parts allow. A backer needs both views to judge value, because a set that makes three different buildings is a different offer from a set that makes one large one.",
        "We plan the modular section as a short sequence. First the parts in the starter set, then two or three builds made only from that set, then what changes when a backer adds an expansion. Each build caption names the pieces it uses, so a reader can check the claim against the contents list.",
        "Use the same product names everywhere. If the page calls a piece a corner wall, the reward graphic, the add on list and the pledge manager should call it a corner wall too. The FutureProof lesson was simple: pair an assembled view with the separate contents, then explain scale, assembly and reward differences using the same product names throughout the page.",
        "That naming discipline is what lets a backer build a bigger pledge with confidence rather than guessing which sets combine.",
      ],
      source: 0,
    },
    {
      id: "stl-or-physical",
      title: "Keep STL rewards and physical rewards apart",
      paragraphs: [
        "Many terrain creators sell printed pieces, digital files or both. That choice shapes the whole reward structure, so we settle it before any graphics are made. Kickstarter added an STL subcategory across Games and Publishing on May 8, 2026. That makes file projects easier to find in Discover, but it does not make the offer any clearer on its own.",
        "The platform settings matter here. Kickstarter's reward guidance says a backer must choose a main reward tier before any add ons, and a digital main tier cannot be increased with shippable add ons. So if you want file backers to buy a printed centerpiece, the reward structure has to allow for it from the start.",
        "Our [miniatures and STL guide](/guides/miniatures-stl-kickstarter-launch-guide) covers file formats, supports and license wording in more detail. Here, the job is to make the format impossible to miss.",
      ],
      visual: {
        kind: "compare",
        title: "Each reward format needs its own promise on the page",
        caption: "Planning view we use with terrain creators. Platform rules from Kickstarter's reward guidance.",
        columns: [
          { name: "Physical set", points: ["Material and assembly state", "Dimensions and piece count", "Packed box size for shipping"], verdict: "Needs a shipping plan" },
          { name: "STL files", points: ["File formats and versions", "Supported or unsupported", "Delivery method and license"], verdict: "Cannot take shippable add ons" },
          { name: "Both in one tier", points: ["Physical contents listed first", "Digital contents listed second", "One name that says both"], verdict: "Clearest for bundles", highlight: true },
        ],
      },
      source: 2,
    },
    {
      id: "photography-and-renders",
      title: "Photograph the real product and label every render",
      paragraphs: [
        "Renders are useful for terrain and dice, because they show shape and color before a production run exists. They also create the biggest gap between what a backer imagines and what arrives. So we label every image by what it is: render, test print, painted sample or production piece.",
        "Check your category before you plan the image list. Kickstarter's hardware and product design rules require working prototypes and do not allow photorealistic renderings. A dice tray or a storage box can sit closer to product design than a set of wargaming buildings, so confirm the category the project will actually launch in.",
        "Real photography earns its place in the details. For dice, that means the finish under daylight and the numbers at reading size. For storage, it means the inside as well as the cover. The Quiver Time header did this with a small opened box beside the closed CITADEL, so a visitor saw the compartments as well as the leather. The product and its photography belong to Quiver Time; our work was the way the campaign explained it.",
        "An honest image label costs nothing and saves a long comment thread after launch.",
      ],
      source: 4,
    },
    {
      id: "add-ons",
      title: "Use add ons for extra pieces, colors and storage",
      paragraphs: [
        "Accessory campaigns grow through add ons: another terrain set, a second dice color, a matching tray. Kickstarter allows up to 100 reward tiers and 100 add ons per project, and add ons can be restricted by destination, so the limit is rarely the platform. The limit is how many choices a reader can compare on a phone.",
        "We keep the main tiers few and simple, then group add ons by what they do: more pieces for the same system, a different finish, or storage and carry. For Quiver Time, the lesson was that photography starts the conversation, and dimensions, compatible formats, capacity and bundle contents finish it. Those facts belong next to each add on image.",
        "Backers can also keep buying after the campaign. Since August 20, 2026, Kickstarter's Pledge Manager lets backers change orders and buy new add ons after submitting. The creator decides whether to allow it and sets an end date for the editing period. That helps accessory makers, because a backer who sees a friend's terrain often wants one more set.",
        "Plan the add on list as a catalog the backer can return to, not a wall of options on launch day.",
      ],
      source: 5,
    },
    {
      id: "shipping-weight",
      title: "Price shipping from the packed box, not the product",
      paragraphs: [
        "Terrain is the classic case where shipping surprises a creator. Hollow buildings, foam inserts and large boxes weigh little but take up space, and carriers charge for that space. UPS calculates dimensional weight as length times width times height in inches, divided by 139 for daily rates or 166 for retail rates. Any fraction rounds up to the next pound.",
        "So we ask for the packed box size of every reward and likely bundle before the shipping table is written, following our guide to [the shipping and delivery section](/guides/kickstarter-shipping-delivery-page). Kickstarter counts shipping collected during the pledge toward the funding goal. So part of that total already belongs to the carrier, and an underpriced charge leaves a gap you pay yourself.",
        "The example below uses made up numbers to show the effect. Your fulfillment partner's quote should replace it.",
      ],
      visual: {
        kind: "bars",
        title: "A light terrain box can bill as a much heavier one",
        caption: "Example only: a 16 x 12 x 6 inch box weighing 5 lb. Dimensional weight is 1,152 cubic inches divided by the UPS divisor, rounded up.",
        source: "UPS package dimensions and weight guide",
        unit: " lb",
        bars: [
          { label: "Actual weight (example)", value: 5 },
          { label: "Dimensional, UPS retail rates", value: 7 },
          { label: "Dimensional, UPS daily rates", value: 9, highlight: true },
        ],
      },
      source: 6,
    },
    {
      id: "work-with-us",
      title: "What you can plan alone, and where we help with terrain and dice",
      paragraphs: [
        "You can plan most of this yourself if you have clean photography, confirmed dimensions and a fulfillment quote. Where creators usually run short is the sequencing. A folder of renders and test prints has to become a page that answers size, fit and contents in the right order on a phone.",
        "That's the work we do for terrain, dice and accessory launches. We plan the page structure, write the campaign copy, design the scale and assembly graphics, and build reward and add on comparisons from your confirmed contents. Your product design, photography and production quotes stay yours, and we label them as they are.",
        "If you want to see how your product would open the page, ask for a free opening mockup using your artwork. For the full launch, from prelaunch to the live campaign, see our [Kickstarter launch services for tabletop games](/kickstarter-launch-services), or go straight to our [campaign design for miniatures and terrain](/miniatures-kickstarter-campaign-design).",
      ],
      source: 8,
    },
  ],
  faqs: [
    { question: "How do I show the scale of terrain on a Kickstarter page?", answer: "Pair a finished build with the separate parts, then add a reference the reader knows, such as a based miniature, a die or a hand. Put the confirmed dimensions in text near the image so a phone reader does not have to guess." },
    { question: "Should I offer STL files and physical terrain in the same campaign?", answer: "You can, but keep the formats apart in the reward names and contents. Kickstarter's reward guidance says a digital main tier cannot take shippable add ons, so plan the structure before designing the graphics." },
    { question: "Can I use renders for dice or terrain on Kickstarter?", answer: "Label every render as a render. Kickstarter's hardware and product design rules require working prototypes and do not allow photorealistic renderings, so check which category your project will actually launch in." },
    { question: "Why is shipping so expensive for terrain?", answer: "Terrain boxes are often large for their weight, and carriers can bill by dimensional weight. UPS divides length times width times height in inches by 139 for daily rates or 166 for retail rates, so price shipping from the packed box." },
    { question: "Are add ons or extra reward tiers better for more terrain sets?", answer: "We usually keep a few simple main tiers and put extra sets, finishes and storage in add ons. Kickstarter allows up to 100 of each, but fewer, well grouped choices are easier to compare on a phone." },
    { question: "Can backers add more after the campaign ends?", answer: "Yes, if you allow it. Since August 20, 2026, Kickstarter's Pledge Manager can let backers change orders and buy new add ons after submitting, until the end date you set." },
  ],
};

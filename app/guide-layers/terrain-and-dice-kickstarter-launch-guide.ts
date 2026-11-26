import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "what-backers-check": {
      paragraphs: [
        "A board game campaign sells a play experience, but terrain, dice and accessories sell a physical object that has to fit a table, a collection or a carry case. So the first questions a backer asks are practical: how big is it, how does it go together and what exactly arrives in the box.",
        "We have presented both kinds of product. [FutureProof Terrain](/work/futureproof-terrain) is a modular wargaming terrain system from Snot Goblin Gaming. Its campaign had to explain how the pieces connect, what a set can build and how it packs away after play.",
        "[Quiver Time's CITADEL Deck Block](/work/quiver-time) is a storage accessory for cards, dice, tokens and coins. Its campaign centered on the magnetic cover, the flexible divider and the storage options.",
        "Neither product could be sold with one dramatic image. That's the thread through this guide: every section of the page should answer a size, fit or contents question before it asks for a pledge.",
      ],
      takeaway: "Terrain, dice and accessory backers judge size, fit and contents first. Answer those three questions before your Kickstarter page asks for a pledge.",
    },
    "scale-and-assembly": {
      takeaway: "Show the finished terrain build beside its parts and a known scale reference. A phone reader should never guess size from a close up.",
    },
    "modular-systems": {
      paragraphs: [
        "Modular terrain is two products at once: a box of parts and the builds those parts allow. A backer needs both views to judge value, because a set that makes three different buildings is a different offer from a set that makes one large one.",
        "We plan the modular section as the short sequence below. Each build caption names the pieces it uses, so a reader can check the claim against the contents list.",
        "Use the same product names everywhere. If the page calls a piece a corner wall, the reward graphic, the add on list and the pledge manager should call it a corner wall too.",
        "The FutureProof lesson was simple: pair an assembled view with the separate contents, then explain scale, assembly and reward differences using the same product names throughout the page. That naming discipline lets a backer build a bigger pledge with confidence rather than guessing which sets combine.",
      ],
      visuals: [
        {
          kind: "steps",
          title: "A modular terrain section moves from parts to builds to expansions",
          steps: [
            {label: "Parts in the starter set", detail: "Every piece, named as it appears in the rewards"},
            {label: "Two or three builds", detail: "Made only from the starter set, with the pieces named in each caption"},
            {label: "What an expansion adds", detail: "The new builds a backer gets by adding one more set"},
          ],
          caption: "The sequence we use for modular terrain systems.",
        },
      ],
      takeaway: "Sell modular terrain as parts plus builds, with identical product names on the page, reward graphics and pledge manager.",
    },
    "stl-or-physical": {
      paragraphs: [
        "Many terrain creators sell printed pieces, digital files or both. That choice shapes the whole reward structure, so we settle it before any graphics are made.",
        "Kickstarter added an STL subcategory across Games and Publishing on May 8, 2026. That makes file projects easier to find in Discover, but it does not make the offer any clearer on its own.",
        "The platform settings matter here. Kickstarter's reward guidance says a backer must choose a main reward tier before any add ons, and a digital main tier cannot be increased with shippable add ons. So if you want file backers to buy a printed centerpiece, the reward structure has to allow for it from the start.",
        "Our [miniatures and STL guide](/guides/miniatures-stl-kickstarter-launch-guide) covers file formats, supports and license wording in more detail. Here, the job is to make the format impossible to miss.",
      ],
      takeaway: "A digital STL tier on Kickstarter cannot take shippable add ons. Decide between files, physical terrain or both before you design reward graphics.",
    },
    "photography-and-renders": {
      paragraphs: [
        "Renders are useful for terrain and dice, because they show shape and color before a production run exists. They also create the biggest gap between what a backer imagines and what arrives. So we label every image by what it is: render, test print, painted sample or production piece.",
        "Check your category before you plan the image list. Kickstarter's hardware and product design rules require working prototypes and do not allow photorealistic renderings. A dice tray or a storage box can sit closer to product design than a set of wargaming buildings, so confirm the category the project will actually launch in.",
        "Real photography earns its place in the details. For dice, that means the finish under daylight and the numbers at reading size. For storage, it means the inside as well as the cover.",
        "The Quiver Time header did this with a small opened box beside the closed CITADEL, so a visitor saw the compartments as well as the leather. The product and its photography belong to Quiver Time; our work was the way the campaign explained it.",
        "An honest image label costs nothing and saves a long comment thread after launch.",
      ],
      visuals: [
        {
          kind: "flow",
          title: "Three checks decide which terrain and dice images can go on the page",
          start: "You have renders, test prints and photos for your campaign",
          nodes: [
            {question: "Does the project launch outside Kickstarter's hardware and product design rules?", yes: "Renders can stay, as long as each one is labelled", no: "Show the working prototype, because photorealistic renderings are not allowed"},
            {question: "Is every image labelled render, test print, painted sample or production piece?", yes: "Move on to the detail shots", no: "Add the label before the image goes on the page"},
            {question: "Do real photos show the details backers check?", yes: "Put confirmed dimensions in text next to each one", no: "Add dice numbers at reading size in daylight, or the inside of the storage box"},
          ],
          end: "Image list ready for the campaign page",
          source: "Kickstarter rules for hardware and product design projects",
        },
      ],
      takeaway: "Label every terrain or dice image as a render, test print, painted sample or production piece. Confirm your Kickstarter category before you rely on renders.",
    },
    "add-ons": {
      paragraphs: [
        "Accessory campaigns grow through add ons: another terrain set, a second dice color, a matching tray. Kickstarter allows up to 100 reward tiers and 100 add ons per project, and add ons can be restricted by destination. So the limit is rarely the platform but how many choices a reader can compare on a phone.",
        "We keep the main tiers few and simple, then group add ons by what they do. For Quiver Time, the lesson was that photography starts the conversation, and dimensions, compatible formats, capacity and bundle contents finish it.",
        "Backers can also keep buying after the campaign. Since August 20, 2026, Kickstarter's Pledge Manager lets backers change orders and buy new add ons after submitting. You decide whether to allow it and set an end date for the editing period.",
        "That helps accessory makers, because a backer who sees a friend's terrain often wants one more set. Plan the add on list as a catalog the backer can return to, not a wall of options on launch day.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Group terrain and dice add ons by what they do",
          tips: [
            {label: "More pieces", text: "Extra sets for the same terrain system, named exactly as in the starter set."},
            {label: "A different finish", text: "A second dice color or material, shown in daylight beside the first."},
            {label: "Storage and carry", text: "Trays, boxes and cases, with the inside photographed as well as the cover."},
            {label: "Facts by every image", text: "Dimensions, compatible formats, capacity and bundle contents sit next to each add on picture."},
            {label: "A catalog for later", text: "Backer self serve add ons let people buy one more set after submitting, until the end date you set."},
          ],
        },
      ],
      takeaway: "Keep main reward tiers few and group add ons by purpose. Kickstarter's self serve add ons let accessory backers return and buy more after the campaign.",
    },
    "shipping-weight": {
      paragraphs: [
        "Terrain is the classic case where shipping surprises a creator. Hollow buildings, foam inserts and large boxes weigh little but take up space, and carriers charge for that space.",
        "UPS calculates dimensional weight as length times width times height in inches, divided by 139 for daily rates or 166 for retail rates. Any fraction rounds up to the next pound.",
        "So we ask for the packed box size of every reward and likely bundle before the shipping table is written, following our guide to [the shipping and delivery section](/guides/kickstarter-shipping-delivery-page).",
        "Kickstarter counts shipping collected during the pledge toward the funding goal. Part of that total already belongs to the carrier, and an underpriced charge leaves a gap you pay yourself.",
        "The example below uses made up numbers to show the effect. Your fulfillment partner's quote should replace it.",
      ],
      takeaway: "Price terrain shipping from the packed box size, because dimensional weight can bill a light box as a much heavier one.",
    },
    "work-with-us": {
      takeaway: "Your product, photography and quotes stay yours. We sequence them into a terrain, dice or accessory page that answers size, fit and contents on a phone.",
    },
  },
};

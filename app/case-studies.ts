import { pastWork, clientTestimonials } from "./past-work";

import { contentDates } from "./content-dates";
export const workDate = contentDates.work;

const projectNotes = [
  {
    slug: "scented-realms",
    seoTitle: "ScentedRealms Kickstarter Campaign Design Case Study",
    description: "How Umair presented ScentedRealms on Kickstarter: fantasy art direction, the ScentEngine and a scent collection for tabletop roleplaying sessions.",
    headline: "Explaining a new accessory for the RPG table.",
    brief: "ScentedRealms brings fantasy scents into tabletop roleplaying. Its campaign needed to introduce an unfamiliar product: what the ScentEngine is, what comes in the scent collection and how a group might use it during a session.",
    role: "I developed the visual direction and campaign presentation. The product, packaging and fantasy imagery gave the page its starting point; my work was to bring those pieces into a readable campaign story.",
    decisions: [
      { title: "Introduce the product and the setting together", copy: "The opening artwork places the ScentEngine and scent products in front of a fantasy scene. A visitor can see a physical product while the surrounding imagery establishes the kind of tabletop experience it belongs to." },
      { title: "Keep the collection visible", copy: "The image groups the packaged products and individual scent items. Showing them together gives the collection a physical scale and helps explain an offer that would be difficult to describe with a setting illustration alone." },
      { title: "Give the page a consistent visual direction", copy: "The red frame, dark background and fantasy colour carry the product identity into the campaign presentation. Product labels still need enough space to be read; atmosphere should support the explanation." },
    ],
    lesson: "An unfamiliar RPG accessory needs a product explanation before a reward comparison. Show what it is, where it sits in a session and what a backer receives. The same approach helps with sound tools, gaming tables and other products that change how a group plays.",
    imageContext: "Campaign artwork: the ScentEngine, packaged scents and fantasy collection in one opening composition.",
    credit: "Campaign presentation and visual direction by Umair. Product imagery and the ScentedRealms identity belong to the project creator.",
    servicePath: "/tabletop-accessories-campaign-design", serviceLabel: "Campaign design for tabletop accessories",
    guide: "ttrpg-kickstarter-campaign-page-design", guideLabel: "Planning an RPG campaign page",
  },
  {
    slug: "futureproof-terrain",
    seoTitle: "FutureProof Terrain Kickstarter Campaign Design Case Study",
    description: "A closer look at FutureProof Terrain campaign creative by Umair: modular parts, assembled terrain and a clear product story for wargaming backers.",
    headline: "Showing how modular terrain fits together.",
    brief: "FutureProof Terrain is a modular wargaming terrain system from Snot Goblin Gaming. Its campaign had to explain the parts as well as the finished battlefield: how pieces connect, what a set can build and how it packs away after play.",
    role: "I designed the Kickstarter campaign presentation around the terrain's practical uses. The creator's product imagery supplied the detail; the page structure and graphics brought modularity, table use and storage into the same explanation.",
    decisions: [
      { title: "Show parts beside a finished build", copy: "The campaign artwork puts an assembled building in the foreground and individual walls and floors above it. Seeing both views helps a player connect the separate pieces with the terrain they can put on a table." },
      { title: "Make the practical benefits easy to scan", copy: "Short headings sit beside the terrain, rather than inside a dense product paragraph. The graphic gives the product room to carry the explanation while the copy points to the benefits a wargaming player is likely to compare." },
      { title: "Carry the maker's identity through the layout", copy: "The Snot Goblin mark and green accents frame the product against a dark background. The parts remain the focal point. The launch artwork shown here belongs to the original 2024 campaign linked below." },
    ],
    lesson: "For a terrain or miniatures launch, one dramatic table shot is rarely enough. Pair an assembled view with the separate contents, then explain scale, assembly and reward differences using the same product names throughout the page.",
    imageContext: "Original campaign artwork: a built terrain piece, separate modular components and the February 2024 launch announcement.",
    credit: "Campaign presentation by Umair. Terrain design, product imagery and the Snot Goblin identity belong to the creator.",
    servicePath: "/miniatures-kickstarter-campaign-design", serviceLabel: "Campaign design for miniatures and terrain",
    guide: "miniatures-stl-kickstarter-launch-guide", guideLabel: "Preparing a miniatures or STL launch",
  },
  {
    slug: "quiver-time",
    seoTitle: "Quiver Time CITADEL Kickstarter Campaign Design Case Study",
    description: "Quiver Time CITADEL campaign presentation by Umair: explaining a card storage accessory through its cover, divider, compartments and everyday use.",
    headline: "Making a card storage product easy to understand.",
    brief: "Quiver Time's CITADEL Deck Block is a storage accessory for cards, dice, tokens and coins. The campaign needed to explain its physical features and organisation options so a player could decide whether it suited their collection.",
    role: "I designed the campaign presentation around the magnetic cover, flexible divider and storage options. Quiver Time supplied the product and its photography. The photograph shown here is credited to Quiver Time; it is a product reference, rather than an example of game artwork created by Guildframe.",
    decisions: [
      { title: "Start with how a player uses it", copy: "A storage accessory is easier to evaluate when the page explains what goes inside and how the compartments are used. The campaign presentation centred on the cover, divider and storage options, giving each feature a practical job in the story." },
      { title: "Put compatibility near the product information", copy: "Card players need fit and capacity information before choosing a storage product. That information belongs beside the product and reward explanation, using the creator's confirmed specifications rather than an assumption that every deck will fit." },
      { title: "Keep the product photography distinct from the design work", copy: "The reference photograph shows the black CITADEL product and its packaging. The product and photography are Quiver Time's work. My contribution was the way the campaign explained the product, its features and the offer." },
    ],
    lesson: "For a card game accessory, attractive photography starts the conversation. Dimensions, compatible formats, capacity and bundle contents help finish it. Keep those facts close to the images and use consistent names in the rewards.",
    imageContext: "Product photograph courtesy of Quiver Time: the black CITADEL Deck Block with its packaging.",
    credit: "Campaign presentation by Umair. Product design, branding and the photograph shown here belong to Quiver Time.",
    servicePath: "/tabletop-accessories-campaign-design", serviceLabel: "Campaign design for card storage and accessories",
    guide: "kickstarter-reward-tier-graphics", guideLabel: "Making reward contents easy to compare",
  },
] as const;

export const caseStudies = projectNotes.map((notes, index) => ({
  ...pastWork[index], ...notes,
  testimonial: clientTestimonials.find(t => t.project === pastWork[index].name),
}));

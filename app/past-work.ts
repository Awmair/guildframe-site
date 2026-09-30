export const pastWork = [
  {
    name: "ScentedRealms",
    category: "RPG accessories",
    title: "Fantasy Scents for Immersive Gameplay",
    description: "A scent system for tabletop roleplaying. I developed the visual direction and campaign presentation to explain the ScentEngine, the scent collection and how they fit into a game session.",
    image: "scented-realms",
    alt: "Original Scented Realms campaign graphic with the ScentEngine and fantasy scent collection",
    imageNote: "Campaign artwork",
    href: "https://www.kickstarter.com/projects/hans-h-h-hansen/scentedrealms-fantasy-scents-for-immersive-gameplay",
  },
  {
    name: "FutureProof Terrain",
    category: "Miniatures & terrain",
    title: "Modular Wargaming Terrain",
    description: "A modular terrain system from Snot Goblin Gaming. The campaign presentation showed how the pieces connect, how the sets fit on the table and how they pack away after a game.",
    image: "futureproof",
    alt: "Original FutureProof Modular Terrain launch graphic with assembled terrain and modular wall pieces",
    imageNote: "Campaign artwork",
    href: "https://www.kickstarter.com/projects/snotgoblingaming/futureproof-wargaming-terrain-by-snot-goblin-gaming",
  },
  {
    name: "Quiver Time",
    category: "Card game accessories",
    title: "CITADEL Deck Block",
    description: "A card organiser for decks, dice, tokens and coins. I designed the campaign presentation around the magnetic cover, flexible divider and storage options so players could see how it works.",
    image: "quiver-time",
    alt: "Quiver Time’s original product photograph of the black Citadel Deck Block",
    imageNote: "Product photo courtesy of Quiver Time",
    href: "https://www.kickstarter.com/projects/quivertime/quiver-time-citadel-deck-block-cards-dice-tokens-and-coins",
  },
] as const;

// Verbatim excerpts. Each delivery image identifies the matching project.
// Keep the published client handle; do not infer a person’s name from it.
export const clientTestimonials = [
  { quote: "Great communication, fast updates, overall great work!", client: "mpmeguire", project: "FutureProof Terrain" },
  { quote: "Exceptional service with great attention to detail and artistic skills", client: "softmobile", project: "ScentedRealms" },
] as const;

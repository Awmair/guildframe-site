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
    description: "A card organizer for decks, dice, tokens and coins. I designed the campaign presentation around the magnetic cover, flexible divider and storage options so players could see how it works.",
    image: "quiver-time",
    alt: "Quiver Time’s Kickstarter header image with the red leather CITADEL Deck Block, the Quiver logo and a badge reading 100% funded within 6 days",
    imageNote: "Campaign header image courtesy of Quiver Time",
    href: "https://www.kickstarter.com/projects/quivertime/quiver-time-citadel-deck-block-cards-dice-tokens-and-coins",
  },
  {
    name: "Cryptic Explorers",
    category: "Board games",
    title: "Asymmetrical Squad Tactics and Survival Horror",
    description: "An asymmetrical squad tactics and survival horror game for 2 to 4 players from Tempest Tome Games. I created the campaign presentation that introduces the Cryptonauts, the Goddesses of Death and the customization led gameplay loop.",
    image: "cryptic-explorers",
    alt: "Cryptic Explorers Kickstarter header with the black game box, a horned figure holding a chalice, the Cryptic Explorers logo and banners reading Funded In 27 Hours and Unlocking Stretch Goals",
    imageNote: "Campaign header image",
    href: "https://www.kickstarter.com/projects/tempesttome/cryptic-explorers",
  },
] as const;

// Public Kickstarter totals, as shown on each campaign page. These are the creators' results.
export const campaignResults: Record<string, { total: string; creator: string }> = {
  "Cryptic Explorers": { total: "961 backers pledged $55,686", creator: "Tempest Tome Games" },
};

// Client campaigns outside tabletop. Results are the public Kickstarter totals.
export const beyondTabletop = [
  {
    name: "Secubix",
    line: "A parking surveillance system for Vespas from Vienna. It records the license plate of a car that hits your parked Vespa.",
    role: "Market research, copy written from the product features and a theme matched to the brand, from product images and a short brief.",
    result: "90 backers pledged €32,218",
    image: "secubix",
    alt: "Secubix campaign image with a white Vespa and a close view of the surveillance unit mounted under the seat",
    href: "https://www.kickstarter.com/projects/secubix/secubix-revolutionary-surveillance-system-for-your-vespa",
  },
  {
    name: "Bacàn",
    line: "An Italian designed watch built around affordability, personal style and sustainability.",
    result: "222 backers pledged €20,410",
    image: "bacan",
    alt: "Bacàn Square watch with a rose gold case, dark dial and leather strap on the campaign image",
    href: "https://www.kickstarter.com/projects/bacan/bacan-the-first-watch-that-saves-the-planet",
  },
  {
    name: "A World Without Men",
    line: "A novel by Shay Horch.",
    result: "25 backers pledged $5,149",
    image: "a-world-without-men",
    alt: "Hardcover of A World Without Men by Shay Horch, with an eye reflecting the Earth on the cover",
    href: "https://www.kickstarter.com/projects/shayhorch/a-world-without-men-a-war-against-domination-and-corruption",
  },
  {
    name: "RaceBox",
    line: "A GPS drag meter and lap timer from Florida that measures acceleration, quarter mile runs and laps at the press of a button.",
    role: "Campaign page design.",
    result: "225 backers pledged $44,681",
    image: "racebox",
    alt: "RaceBox drag meter and lap timer with a red trimmed body and a screen showing Lap Timer, Drag Meter, History and Settings",
    href: "https://www.kickstarter.com/projects/racebox/the-ultimate-drag-meter-and-lap-timer",
  },
  {
    name: "RaceBox Micro",
    line: "The same team came back with RaceBox Micro, a small DIY GPS data board with a 25Hz GPS, accelerometer and gyroscope.",
    role: "Campaign page design.",
    result: "1,013 backers pledged $122,811",
    image: "racebox-micro",
    alt: "RaceBox Micro, a small red GPS circuit board, under the words DIY GPS Data for the Driven",
    href: "https://www.kickstarter.com/projects/racebox/racebox-micro",
  },
  {
    name: "TubRing",
    line: "A ring shaped drain protector that sits over a bathtub pop up stopper and catches hair before it clogs the drain.",
    role: "Campaign page design.",
    result: "722 backers pledged $20,745",
    image: "tubring",
    alt: "A woman holding a pink TubRing drain protector, with the words No More Plumbing Bills",
    href: "https://www.kickstarter.com/projects/mytubring/tubringtm-for-a-clog-free-bath-shower-and-more",
  },
] as const;

// More tabletop client campaigns without a full case study. Totals are public Kickstarter figures, the creators' results.
export const moreTabletop = [
  {
    name: "FutureProof Fully Painted",
    line: "Snot Goblin Gaming returned with a fully painted version of its modular wargaming terrain and two new expansions.",
    role: "Campaign page design.",
    result: "2,569 backers pledged $754,782",
    image: "futureproof-painted",
    alt: "FutureProof modular terrain launch graphic showing fully painted Shrine, Forsaken and Lost world terrain sets",
    href: "https://www.kickstarter.com/projects/snotgoblingaming/futureproof-fully-painted-modular-wargaming-terrain",
  },
  {
    name: "Fraud",
    line: "A card game about white collar crime, where players bribe, defraud and run extortion rackets against each other.",
    role: "Campaign page design.",
    result: "181 backers pledged $18,292",
    image: "fraud",
    alt: "Fraud, The Game of White Collar Crime, box art of a businessman behind bars beside a list of the game's schemes",
    href: "https://www.kickstarter.com/projects/1279845108/fraud-the-game-of-white-collar-crimetm",
  },
] as const;

// Verbatim excerpts. Each delivery image identifies the matching project.
// Keep the published client handle; do not infer a person’s name from it.
export const clientTestimonials = [
  { quote: "Great communication, fast updates, overall great work!", client: "mpmeguire", project: "FutureProof Terrain" },
  { quote: "Exceptional service with great attention to detail and artistic skills", client: "softmobile", project: "ScentedRealms" },
] as const;

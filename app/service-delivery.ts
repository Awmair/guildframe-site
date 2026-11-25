import type { GuideVisualData } from "./components/GuideVisual";

type DeliveryStep = { title: string; copy: string };
type StageGuides = { intro: string; links: { slug: string; label: string }[] };
export type ServiceDelivery = {
  title: string; intro: string; steps: DeliveryStep[];
  inputs: string; handoff: string; proof: string[];
  faqs: { question: string; answer: string }[];
  proofCopy?: string;
  visualsIntro?: string;
  visuals?: GuideVisualData[];
  guides?: StageGuides;
};

export const serviceDelivery: Record<string, ServiceDelivery> = {
  "kickstarter-launch-services": {
    title: "Know what happens between the brief and launch day.",
    intro: "Book the whole launch or the stages your team needs. The proposal names the work, its owner and the approval needed before the next stage starts.",
    steps: [
      { title: "Agree the offer and the work", copy: "Review your prototype, rewards, artwork and budget. Map the missing assets and dependencies before setting the production schedule." },
      { title: "Prepare the page and audience", copy: "Build the agreed signup page, email flow, campaign creative and ad tests. Check the forms, links and product details before sending traffic." },
      { title: "Launch with a support plan", copy: "Use an approved launch checklist, spending limits and update schedule. Finish with the agreed files, reporting and outstanding tasks." },
    ],
    inputs: "A playable game or clear product brief, current artwork, proposed rewards, platform, target date and an indication of your service and media budgets.",
    handoff: "Your accounts and contacts stay yours. The proposal lists final files, editable sources, support dates, reporting and any separately priced suppliers or software.",
    proof: ["cryptic-explorers", "futureproof-terrain", "quiver-time", "scented-realms"],
    faqs: [
      { question: "What do Kickstarter launch services include?", answer: "Launch planning, prelaunch pages and email, campaign copy and graphics, paid ads and live support, each with named deliverables. You can book all of it as full campaign support or only the stages you are missing. Manufacturing, freight and fulfillment stay with your suppliers." },
      { question: "How far before launch should I get in touch?", answer: "Send the brief while the date is still flexible. I review the assets and unfinished work before proposing a schedule. If a date is already public, include it so we can identify what can realistically be finished." },
      { question: "Can my existing illustrator or marketing team stay involved?", answer: "Yes. Tell me who is already doing the work. We can split responsibilities and agree who supplies, reviews and publishes each item." },
    ],
  },
  "kickstarter-prelaunch-marketing": {
    title: "A signup flow you can test before buying traffic.",
    intro: "The page is one part of prelaunch. The form, welcome email, useful game material and launch announcement need to work together.",
    steps: [
      { title: "Give the signup a purpose", copy: "Show the game and explain what subscribers will receive. Choose a rules preview, sample round or product demonstration you can actually deliver." },
      { title: "Test the whole email route", copy: "Check the form, contact record, welcome message, links and unsubscribe flow in your accounts. Test on a phone before promotion begins." },
      { title: "Review interest and readiness", copy: "Compare signup costs with delivery, useful clicks and campaign readiness. Agree whether to revise the offer, continue testing or prepare the launch." },
    ],
    inputs: "A game explanation, usable artwork, sample material, proposed rewards, email and domain access, plus an approved test budget if ads are included.",
    handoff: "Landing page content, the agreed email sequence, contact lists in your account and reporting definitions. Platform followers and email subscribers are reported separately.",
    proof: ["scented-realms", "quiver-time"],
    faqs: [
      { question: "When should prelaunch marketing start?", answer: "Once you can explain the game and have some artwork to show. The page, emails and first tests need time to run before launch, so send your target date and we will work out what fits before it." },
      { question: "Should I run ads before my Kickstarter launches?", answer: "Often, yes, but only as capped tests with a clear question, such as which gameplay message brings engaged subscribers. We review the cost of each engaged signup before suggesting any increase in spend." },
      { question: "Can you guarantee a number of launch day backers?", answer: "No. Signups and followers are expressions of interest. We test the message and track engagement, then review actual pledges after launch within the limits of the available reporting." },
    ],
  },
  "kickstarter-advertising": {
    title: "Agree the test, spend limit and reporting first.",
    intro: "Paid advertising can support prelaunch audience building or a live campaign. The destination, objective and measurement change with the stage.",
    steps: [
      { title: "Check what a pledge can afford", copy: "Review reward prices and the costs behind them. Set a test ceiling that leaves room for production, delivery, fees and the rest of your project." },
      { title: "Test a specific message", copy: "Prepare creative variants around gameplay, the product or rewards. Confirm the destination and measurable action before the ads run." },
      { title: "Use the results to decide", copy: "Review spend, qualified signups or attributable pledges. Record the attribution limits and agree changes before increasing the budget." },
    ],
    inputs: "Your campaign or landing page, reward cost model, account access, previous results if available, usable creative and a separate media budget.",
    handoff: "Reporting with the spend period, source and attribution window identified. Your ad account stays yours; management fees and media costs are separate proposal lines.",
    proof: ["futureproof-terrain", "scented-realms"],
    faqs: [
      { question: "Who runs Guildframe's paid ads?", answer: "Umair runs the paid advertising. The brief confirms the channels, creative work, reporting schedule and approval rules for your campaign." },
      { question: "What results will the report show?", answer: "Prelaunch reporting separates spend, valid signups and engagement. Live campaign reporting includes attributable pledges where tracking supports it. ROAS is attributed revenue divided by ad spend; it is not campaign profit." },
      { question: "Are the portfolio campaigns examples of your ad results?", answer: "The published case studies demonstrate campaign design and presentation. They are not advertised as paid advertising case studies or proof that Guildframe generated a campaign's total funding." },
    ],
  },
  "kickstarter-campaign-management": {
    title: "A live campaign needs a named owner for each decision.",
    intro: "Agree the publishing and support arrangements before launch. That gives recurring questions, reward changes and updates a clear route through approval.",
    steps: [
      { title: "Check the launch", copy: "Review the page, reward names, links and launch email. Confirm the person who publishes and the spend limits already approved." },
      { title: "Keep information current", copy: "Draft updates and recurring answers from facts you confirm. Refresh the agreed graphics when a reward or milestone changes." },
      { title: "Close with a clear handoff", copy: "Prepare the close update, organize the final files and list outstanding tasks. Identify who owns the next production and backer communication." },
    ],
    inputs: "Campaign access, approved copy, reward and delivery facts, publishing contacts, support dates and expected working hours.",
    handoff: "Approved update drafts, scoped creative changes, the agreed report and a task list. Production decisions and promises require your confirmation.",
    proof: ["cryptic-explorers", "quiver-time"],
    faqs: [
      { question: "What happens if the first days of the campaign are slow?", answer: "We look at pledges against the goal, where traffic is coming from and how many followers have not pledged yet. Then we agree whether to push updates and ads, adjust the page or plan a relaunch. The decision to cancel is always yours, and we give you the numbers to make it." },
      { question: "Does campaign management mean constant support?", answer: "The proposal specifies support dates, working hours, response expectations and covered channels. Agree these before launch rather than assuming around the clock availability." },
      { question: "Who answers questions about manufacturing or shipping?", answer: "You and your suppliers confirm those facts. Guildframe can prepare the agreed responses and updates, with a named person approving them before publication." },
    ],
  },
  "gamefound-launch-services": {
    title: "Build one consistent offer across the Gamefound project.",
    intro: "Story sections, rewards, product details and campaign messages should describe the same items. We check them together before the stage changes.",
    steps: [
      { title: "Confirm the project setup", copy: "Review your account, current stage, products and planned rewards. Separate confirmed settings from decisions still with the creator." },
      { title: "Prepare the agreed creative", copy: "Develop story copy, section graphics, reward comparisons and the prelaunch or ad work included in your brief." },
      { title: "Review the platform preview", copy: "Check the story and rewards in Gamefound's workflow. You approve prices, shipping, tax settings and publication." },
    ],
    inputs: "A project link, platform status, artwork, products, reward details and a creator contact who can confirm the project settings.",
    handoff: "Platform ready creative and agreed launch communication. Gamefound fees, media spend, manufacturing and fulfillment are separate project costs.",
    proof: ["futureproof-terrain", "cryptic-explorers"],
    faqs: [
      { question: "Should my first game launch on Gamefound or Kickstarter?", answer: "It depends on where your audience already backs projects, your category and how you plan to run the pledge manager. We look at those with you before choosing, and our Kickstarter or Gamefound guide sets out the differences." },
      { question: "Can you adapt an existing Kickstarter page for Gamefound?", answer: "Yes. Send the existing page and current rewards. I review the story, reward presentation and project stage before proposing the adaptation; the platform settings still need your confirmation." },
      { question: "Do you work alongside Gamefound's marketing tools?", answer: "We can scope Guildframe's work around other suppliers or platform tools you use. Tell me what is already covered so creative, traffic and reporting responsibilities are clear." },
    ],
  },
  "post-campaign-support": {
    title: "Give backers a useful next update.",
    intro: "Start with the facts your production team can confirm. Then prepare the pledge manager content, communication and optional store work around those facts.",
    steps: [
      { title: "Review what is outstanding", copy: "List survey questions, unconfirmed products, required graphics and the next production milestone." },
      { title: "Prepare the content", copy: "Use the same reward names and contents in updates, pledge manager descriptions and late pledge creative." },
      { title: "Hand over the next stage", copy: "Organize files, draft the agreed communication and identify who maintains the products and answers delivery questions." },
    ],
    inputs: "Final rewards, current production information, your pledge manager choice, confirmed delivery assumptions and the remaining task list.",
    handoff: "The content and assets listed in the brief. Shopify planning is optional; fulfillment and manufacturing remain with their appointed suppliers.",
    proof: ["quiver-time"],
    faqs: [
      { question: "Can you help after the campaign has already ended?", answer: "Yes. Share the campaign, current platform setup and outstanding work. We can scope communication, pledge manager content, late pledge assets or a separate store project." },
      { question: "When should I plan the pledge manager?", answer: "Before the campaign ends, if you can. Reward names, add ons and shipping rules are easier to settle while the campaign is fresh, and backers start asking about the survey soon after funding." },
      { question: "Should late pledges run through a pledge manager or a store?", answer: "It depends on how long you want to take orders, how you ship and whether you want a lasting shop. We compare the options with you, and our late pledges or Shopify guide covers the trade offs." },
    ],
  },
};

export const creativeDelivery: Record<string, ServiceDelivery> = {
  "campaign-design": {
    title: "From your game files to a page ready for review.", intro: "Start with one free opening mockup if you want to see a direction first. The paid design brief then confirms the full page and file handoff.",
    steps: [{ title: "Plan the page", copy: "Review the artwork, rules, components and rewards. Agree the outline and identify facts or images that still need supplying." }, { title: "Build the copy and graphics", copy: "Explain the gameplay and contents, then make the reward differences easy to compare. Use your artwork to set the visual direction." }, { title: "Check the final presentation", copy: "Review mobile readability, reward names and platform files. Confirm the revision process and editable sources in the brief." }],
    inputs: "Game summary, usable artwork, components or sample pages, reward contents and a target date. Label prototypes and unfinished specifications.",
    handoff: "The agreed campaign copy, graphics and source files. The design price covers the scoped campaign page; ads, prelaunch, video and new illustration are separate.", proof: ["scented-realms", "futureproof-terrain", "quiver-time"],
    faqs: [{ question: "What does the free mockup include?", answer: "One opening campaign section using your existing artwork and game description. It shows a creative direction before booking. It does not include a complete campaign page or new game illustration." }, { question: "Who checks the product facts?", answer: "You confirm rules, contents, reward prices, delivery details and any product claims. I use those approved facts in the campaign copy and graphics." }],
  },
};

const categories = [
  { slug: "board-game-kickstarter-campaign-design", title: "Show a turn before asking someone to choose an edition.", example: "A strategy game needs a decision a player can follow. A party game may need only a short sample round. We choose the explanation around your actual rules.", input: "Rules, player count, play time, component images and the differences between base, deluxe and expansion rewards.", focus: "A readable gameplay example, component presentation and reward comparisons using the same names throughout.", proof: ["cryptic-explorers"] },
  { slug: "card-game-kickstarter-campaign-design", title: "Let a visitor read the cards and follow a round.", example: "A party deck, deckbuilder and TCG need different explanations. Sample cards should establish what players do before pack or bundle choices complicate the offer.", input: "Representative cards, a sample round, deck and pack contents, rules and confirmed edition details.", focus: "Legible card examples, a clear play sequence and reward contents that distinguish complete decks from packs and optional extras.", proof: ["quiver-time"] },
  { slug: "ttrpg-kickstarter-campaign-design", title: "Show the kind of session your book makes possible.", example: "Introduce the premise, a playable situation and readable interior pages. State whether the project is a complete game or needs another system.", input: "Cover and interior art, sample spreads, system requirements, format, binding and the PDF and print rewards.", focus: "Setting and gameplay explanation, readable samples and clear comparisons of digital and physical editions.", proof: ["scented-realms"] },
  { slug: "miniatures-kickstarter-campaign-design", title: "Make physical models and printable files easy to distinguish.", example: "An assembled terrain view answers a different question from a parts spread. Put the views together, then state what each physical set or digital reward contains.", input: "Renders or photographs, scale, dimensions, set contents, assembly details and the actual license terms for files.", focus: "Labeled product views, set comparisons and clear physical or digital reward information.", proof: ["futureproof-terrain"] },
  { slug: "tabletop-accessories-campaign-design", title: "Show the product in use, then answer the fit questions.", example: "A dice tray, card organizer and RPG accessory need more than a finish shot. Explain dimensions, materials, compatibility and the parts included in each choice.", input: "Product photographs, measurements, materials, compatibility notes, finish choices and bundle contents.", focus: "Product explanations and reward graphics based on confirmed specifications, with each color or size named consistently.", proof: ["quiver-time", "scented-realms"] },
  { slug: "gamefound-campaign-design", title: "Keep story graphics and Gamefound rewards in agreement.", example: "Plan the campaign story alongside the reward choices. A visitor should find the same product names, quantities and edition differences in both places.", input: "Your Gamefound project, story outline, product art, reward contents and current platform stage.", focus: "Story sections, reward comparisons and a review in Gamefound's preview using settings you confirm.", proof: ["futureproof-terrain", "cryptic-explorers"] },
];
const pageSteps: GuideVisualData = { kind: "steps", title: "A campaign page project runs in five steps, starting free", steps: [
  { label: "Free opening mockup", detail: "One opening section from your artwork, with no payment or obligation." },
  { label: "Agree the proposal", detail: "Sections, revisions, files and dates in writing." },
  { label: "Plan the page", detail: "Page order, plus the facts and images still missing." },
  { label: "Copy and graphics", detail: "Gameplay, components and reward comparisons from your art." },
  { label: "Build on the platform", detail: "Reward tiers set up and checked on a phone, ready for you to publish." },
], caption: "The campaign page package is $1,800. Full campaign support at $5,900 adds prelaunch, ads and live support." };

type CreativeExtra = { proofCopy: string; faq: { question: string; answer: string }; checklist: GuideVisualData; guides: StageGuides };
const pageFaq = (kind: string) => ({ question: `How much does ${kind} campaign design cost?`, answer: "The campaign page package is $1,800 for one Kickstarter or Gamefound page using your artwork. It covers the copy, page graphics, reward tier setup and the build on the platform. New illustration and video are quoted separately." });
const creativeExtras: Record<string, CreativeExtra> = {
  "board-game-kickstarter-campaign-design": {
    proofCopy: "Cryptic Explorers, an asymmetrical squad tactics and survival horror game for 2 to 4 players from Tempest Tome Games, is our clearest board game example. Umair created the launch facing presentation, which introduces the characters before the rules. The creator's public result is 961 backers pledged $55,686.",
    faq: { question: "How do you explain a complex strategy game on the page?", answer: "We pick one turn and one decision a new player can follow, then show the components that turn uses. The full rules sit in a linked rulebook, so the page stays readable on a phone." },
    checklist: { kind: "checklist", title: "A board game page needs these facts before design starts", groups: [
      { name: "You send", items: ["Rules and a sample turn", "Player count, play time and age", "Component images, marked if prototype", "Base, deluxe and expansion contents"] },
      { name: "We show", items: ["A turn a new player can follow", "Component spreads by edition", "Reward comparisons with the same names", "Table facts near the top of the page"] },
    ] },
    guides: { intro: "These guides cover the board game page in more depth, from the gameplay section to the reward table.", links: [
      { slug: "board-game-kickstarter-page-checklist", label: "Board game page checklist before launch" },
      { slug: "board-game-kickstarter-gameplay-rulebook", label: "Explain gameplay on the page" },
      { slug: "board-game-kickstarter-reward-pricing", label: "Price your board game rewards" },
      { slug: "kickstarter-stretch-goals-planning", label: "Plan stretch goals before the graphic" },
      { slug: "kickstarter-image-sizes", label: "Kickstarter image sizes" },
      { slug: "board-game-tariffs-shipping-us", label: "Board game tariffs and US shipping" },
    ] },
  },
  "card-game-kickstarter-campaign-design": {
    proofCopy: "Quiver Time's CITADEL Deck Block is a storage product for card players, and its campaign had to explain capacity, compartments and fit beside the photography. The same discipline applies to card games, where deck counts and pack contents decide the pledge.",
    faq: { question: "How many sample cards should the page show?", answer: "Enough to show the card layout and one round of play, at a size a phone can read. We choose representative cards with you, so the page explains the game without showing the whole set." },
    checklist: { kind: "checklist", title: "A card game page needs counts and contents stated plainly", groups: [
      { name: "You send", items: ["Representative cards at full size", "A sample round", "Deck, starter and pack contents", "Confirmed edition details"] },
      { name: "We show", items: ["Cards a phone can read", "A clear play sequence", "Complete decks apart from packs and extras", "No rarity claims you have not confirmed"] },
    ] },
    guides: { intro: "These guides cover card game and TCG pages, from readable sample cards to reward graphics.", links: [
      { slug: "card-game-kickstarter-launch-guide", label: "Card game Kickstarter launch guide" },
      { slug: "tcg-kickstarter-launch-guide", label: "TCG Kickstarter launch guide" },
      { slug: "kickstarter-reward-tier-graphics", label: "Reward tier graphics that compare clearly" },
      { slug: "kickstarter-campaign-graphics-mobile-readability", label: "Readable campaign graphics on a phone" },
      { slug: "kickstarter-image-sizes", label: "Kickstarter image sizes" },
    ] },
  },
  "ttrpg-kickstarter-campaign-design": {
    proofCopy: "ScentedRealms brings fantasy scents to the RPG table, so its campaign had to show where the product sits in a session before any reward comparison. Umair developed the visual direction and presentation; the product and imagery belong to the creator.",
    faq: { question: "Does the page work for a zine as well as a hardback?", answer: "Yes. A zine page can be shorter, with a few readable spreads and a clear print and PDF choice. A core rulebook usually needs more room for the setting, the system and an example of play." },
    checklist: { kind: "checklist", title: "An RPG page needs readable samples and clear editions", groups: [
      { name: "You send", items: ["Cover and interior art", "Sample spreads you can share", "System requirements", "Format, binding and page count"] },
      { name: "We show", items: ["The premise and a playable situation", "Spreads a reader can actually read", "PDF and print rewards side by side", "What a group needs to play"] },
    ] },
    guides: { intro: "These guides cover RPG campaigns from the page itself to the risks and delivery details backers ask about.", links: [
      { slug: "ttrpg-kickstarter-launch-guide", label: "TTRPG Kickstarter launch guide" },
      { slug: "ttrpg-kickstarter-campaign-page-design", label: "Design a TTRPG campaign page" },
      { slug: "kickstarter-prototype-risks-disclosure", label: "Show what is ready and what is not" },
      { slug: "kickstarter-shipping-delivery-page", label: "Explain shipping and delivery" },
      { slug: "kickstarter-image-sizes", label: "Kickstarter image sizes" },
    ] },
  },
  "miniatures-kickstarter-campaign-design": {
    proofCopy: "FutureProof Terrain from Snot Goblin Gaming is our terrain example. Umair designed the campaign presentation around an assembled building set beside its separate walls and floors, so a wargamer could see what a set builds and how it packs away.",
    faq: { question: "Can the page explain STL licenses?", answer: "Yes. We put the license terms you supply into plain words beside the digital rewards, such as personal printing or commercial use. You confirm the actual terms before launch." },
    checklist: { kind: "checklist", title: "A miniatures page has to separate models from files", groups: [
      { name: "You send", items: ["Renders or photos, marked as such", "Scale and dimensions", "Set contents and sculpt list", "License terms for STL files"] },
      { name: "We show", items: ["Assembled views beside the parts", "Physical sets apart from digital files", "Scale references in the images", "Labels on anything shown for context"] },
    ] },
    guides: { intro: "These guides cover miniatures, STL and terrain pages, from reward formats to delivery.", links: [
      { slug: "miniatures-stl-kickstarter-launch-guide", label: "Miniatures and STL launch guide" },
      { slug: "terrain-and-dice-kickstarter-launch-guide", label: "Terrain and dice launch guide" },
      { slug: "kickstarter-prototype-risks-disclosure", label: "Label renders, prints and painted examples" },
      { slug: "kickstarter-shipping-delivery-page", label: "Explain shipping and delivery" },
      { slug: "kickstarter-image-sizes", label: "Kickstarter image sizes" },
    ] },
  },
  "tabletop-accessories-campaign-design": {
    proofCopy: "Quiver Time's CITADEL Deck Block and ScentedRealms are both accessory campaigns. One needed capacity and fit explained beside the photography, the other needed an unfamiliar product placed inside a game session. Each case study explains Umair's part.",
    faq: { question: "What photos work best for an accessory campaign?", answer: "Photos of the product in use at the table, close ups of the finish and one shot with something familiar for scale. We label any game or dice shown only for context." },
    checklist: { kind: "checklist", title: "An accessory page sells on fit as much as finish", groups: [
      { name: "You send", items: ["Product photos in use", "Measurements and materials", "Checked compatibility notes", "Color, size and bundle contents"] },
      { name: "We show", items: ["The product at work on the table", "Dimensions beside the images", "Each color and size named the same way", "Context items labeled as not included"] },
    ] },
    guides: { intro: "These guides cover accessory pages, from reward graphics to the cost of shipping physical products.", links: [
      { slug: "terrain-and-dice-kickstarter-launch-guide", label: "Terrain and dice launch guide" },
      { slug: "kickstarter-reward-tier-graphics", label: "Reward tier graphics that compare clearly" },
      { slug: "kickstarter-campaign-graphics-mobile-readability", label: "Readable campaign graphics on a phone" },
      { slug: "kickstarter-shipping-delivery-page", label: "Explain shipping and delivery" },
      { slug: "board-game-tariffs-shipping-us", label: "Tariffs and US shipping" },
      { slug: "kickstarter-image-sizes", label: "Kickstarter image sizes" },
    ] },
  },
  "gamefound-campaign-design": {
    proofCopy: "Our published tabletop pages, including FutureProof Terrain and Cryptic Explorers, launched on Kickstarter. The product explanation in each one is the part that carries over to a Gamefound story, while the layout is rebuilt for Gamefound's sections and reward list.",
    faq: { question: "Can you build one page for both Kickstarter and Gamefound?", answer: "We can plan both from one set of copy and artwork, but each platform needs its own layout, exports and preview check. Include both in the brief so the price and schedule cover them." },
    checklist: { kind: "checklist", title: "A Gamefound page keeps the story and the rewards in agreement", groups: [
      { name: "You send", items: ["Your Gamefound project link", "Story outline and product art", "Reward and add on contents", "The current platform stage"] },
      { name: "We show", items: ["An opening before the reward choices", "Story sections built for Gamefound's editor", "The same names in story and rewards", "A preview check before launch"] },
    ] },
    guides: { intro: "These guides cover the platform choice and the Gamefound page itself.", links: [
      { slug: "kickstarter-vs-gamefound", label: "Kickstarter or Gamefound for your game" },
      { slug: "kickstarter-vs-gamefound-campaign-page-design", label: "How page design differs on each platform" },
      { slug: "gamefound-launch-page-checklist", label: "Check your Gamefound page before launch" },
      { slug: "pledge-managers-compared", label: "Pledge managers compared" },
      { slug: "kickstarter-reward-tier-graphics", label: "Reward tier graphics that compare clearly" },
    ] },
  },
};
const pageKinds: Record<string, string> = { "board-game-kickstarter-campaign-design": "board game", "card-game-kickstarter-campaign-design": "card game", "ttrpg-kickstarter-campaign-design": "TTRPG", "miniatures-kickstarter-campaign-design": "miniatures", "tabletop-accessories-campaign-design": "accessory", "gamefound-campaign-design": "Gamefound" };
for (const c of categories) {
  const extra = creativeExtras[c.slug];
  creativeDelivery[c.slug] = {
    title: c.title, intro: c.example,
    steps: [{ title: "Bring the product facts", copy: c.input }, { title: "Explain the offer", copy: c.focus }, { title: "Review before launch", copy: "Check the copy and graphics on a phone, confirm every reward and approve the final platform files." }],
    inputs: c.input, handoff: c.focus + " The brief confirms the final files, editable sources, revisions and schedule.", proof: c.proof,
    faqs: [pageFaq(pageKinds[c.slug]), extra.faq],
    proofCopy: extra.proofCopy,
    visualsIntro: "Every page project starts with a free mockup and ends with a page ready for you to publish. Here is the route, and the facts we need from you along the way.",
    visuals: [pageSteps, extra.checklist],
    guides: extra.guides,
  };
}

/*
 * Service hub additions (SEO pass, November 25, 2026): named proof, two infographics
 * per page and the guides for each page's stage. Every figure is a Guildframe
 * price or a public result already shown in app/case-studies.ts.
 */
const launchSteps = (title: string, steps: { label: string; detail: string }[]): GuideVisualData => ({ kind: "steps", title, steps });

const launchExtras: Record<string, Pick<ServiceDelivery, "proofCopy" | "visualsIntro" | "visuals" | "guides">> = {
  "kickstarter-launch-services": {
    proofCopy: "Before Guildframe, Umair spent ten years designing campaigns, with 252 client reviews averaging 5.0. Recent tabletop work includes Cryptic Explorers for Tempest Tome Games, FutureProof Terrain for Snot Goblin Gaming, the Quiver Time CITADEL Deck Block and ScentedRealms. Each case study explains our part and leaves the funding total with the creator.",
    visualsIntro: "Every launch moves through the same five stages, so you always know what comes next. You approve each stage before we start the one after it.",
    visuals: [
      launchSteps("A launch runs in five stages, each approved before the next", [
        { label: "Send the brief", detail: "Your game, artwork, rewards and target date. Ask for the free opening mockup if you want a preview." },
        { label: "Agree the proposal", detail: "Deliverables, owners, fees and dates in writing before you pay." },
        { label: "Build the prelaunch", detail: "Signup page, emails and the first capped ad tests in your own accounts." },
        { label: "Finish the campaign page", detail: "Copy, graphics and reward tiers, checked on a phone before Kickstarter review." },
        { label: "Launch and hand off", detail: "Launch checklist, live updates and ad reports, then the final files." },
      ]),
      { kind: "compare", title: "Full campaign support takes the launch work off your desk", columns: [
        { name: "Doing it yourself", points: ["You write the page and design every graphic", "You build the signup page and email sequence", "You learn ad setup, testing and reporting", "You draft every backer update while the campaign is live"], verdict: "Works when you have the time and design skills to spare." },
        { name: "Full campaign support, $5,900", highlight: true, points: ["We write and design the page from your artwork", "We build the prelaunch page, signup and emails", "Umair runs the ad creative, tests and reports", "We draft updates and keep the page current"], verdict: "Ad spend, software and platform fees stay separate." },
      ], caption: "Prices are Guildframe's current packages. The $1,800 campaign page package covers the page on its own." },
    ],
    guides: { intro: "These guides cover the planning and cost questions creators ask before they book. Start with fees and the funding goal, then compare what an agency should cost.", links: [
      { slug: "kickstarter-fees", label: "What Kickstarter fees cost a tabletop creator" },
      { slug: "kickstarter-agency-cost", label: "What a Kickstarter agency costs" },
      { slug: "board-game-kickstarter-funding-goal", label: "Set a funding goal for a board game" },
      { slug: "board-game-tariffs-shipping-us", label: "Board game tariffs and US shipping" },
      { slug: "board-game-kickstarter-marketing-plan", label: "Build a board game Kickstarter marketing plan" },
      { slug: "choose-board-game-kickstarter-marketing-agency", label: "Choose a Kickstarter marketing agency" },
      { slug: "board-game-kickstarter-launch-day-checklist", label: "The launch day checklist" },
      { slug: "kickstarter-vs-gamefound", label: "Kickstarter or Gamefound for your game" },
    ] },
  },
  "kickstarter-prelaunch-marketing": {
    proofCopy: "ScentedRealms shows why prelaunch starts with explanation. An unfamiliar RPG accessory needed the ScentEngine and scent collection explained before any reward comparison. The case study describes the creative work, not signup numbers.",
    visualsIntro: "Prelaunch is a short chain of steps, and each one has to work before traffic arrives. That's why we test the whole route ourselves before any ad money is spent.",
    visuals: [
      launchSteps("Prelaunch works when every link in the signup chain is tested", [
        { label: "Pick the hook", detail: "The gameplay moment or sample that makes a player sign up." },
        { label: "Build the signup page", detail: "Page, form and welcome email in your own accounts." },
        { label: "Test the route", detail: "Submit the form on a phone and check every email and link." },
        { label: "Run capped ad tests", detail: "Small budgets you approve, one question per test." },
        { label: "Review and launch", detail: "Read engagement, then send the launch email on day one." },
      ]),
      { kind: "checklist", title: "A prelaunch scope covers the page, the emails and the traffic", groups: [
        { name: "Page and signup", items: ["Landing page copy and design", "Signup form and welcome email", "A link to your Kickstarter prelaunch page"] },
        { name: "Email", items: ["Prelaunch sequence with gameplay and samples", "Launch announcement email", "Contacts kept in your own account"] },
        { name: "Traffic and tracking", items: ["Analytics and campaign link naming", "Capped ad tests you approve", "Signup and engagement reporting"] },
      ] },
    ],
    guides: { intro: "These guides answer the prelaunch questions we hear most, from follower counts to whether you need your own landing page.", links: [
      { slug: "kickstarter-followers-before-launch", label: "How many followers you need before launch" },
      { slug: "kickstarter-prelaunch-page-vs-landing-page", label: "Kickstarter prelaunch page or your own landing page" },
      { slug: "kickstarter-prelaunch-email-list", label: "Plan a prelaunch email list" },
      { slug: "kickstarter-prelaunch-page-guide", label: "What to show on a Kickstarter prelaunch page" },
      { slug: "board-game-reviewer-outreach", label: "Plan reviewer previews before launch" },
      { slug: "kickstarter-referral-tags-tracking", label: "Track marketing with referral tags" },
      { slug: "kickstarter-advertising-budget-board-games", label: "Set a prelaunch ad test budget" },
    ] },
  },
  "kickstarter-advertising": {
    proofCopy: "Umair builds ads from the same creative he designs for campaign pages, such as the FutureProof Terrain graphic that sets an assembled building beside its separate walls and floors. Our case studies are creative work, not paid advertising results, and every campaign total belongs to its creator.",
    visualsIntro: "We treat every ad budget as a series of small tests. The budget only grows when the last test gave a clear answer.",
    visuals: [
      launchSteps("Ad spend grows only when a capped test earns it", [
        { label: "Check the margin", detail: "Reward costs set what a pledge can afford to pay for." },
        { label: "Set the test cap", detail: "A spend ceiling you approve in writing." },
        { label: "Build the variants", detail: "Gameplay, product and reward hooks from your artwork." },
        { label: "Run and read", detail: "Spend, signups or attributable pledges, with the limits noted." },
        { label: "Decide together", detail: "Raise the budget, change the message or stop." },
      ]),
      { kind: "compare", title: "Handing ads to Umair keeps the testing disciplined", columns: [
        { name: "Running ads yourself", points: ["You set up the ad account and tracking", "You make every creative variant", "You read the reports and judge attribution", "You decide alone when to raise or cut spend"], verdict: "Lowest fees, but tests often run without a clear question." },
        { name: "Ads run by Umair", highlight: true, points: ["We review your account, page and tracking", "We make the variants from your artwork", "Reports split spend, signups and pledges", "Every spending change needs your approval"], verdict: "Included in $5,900 full campaign support. Your ad account and data stay yours." },
      ], caption: "Ad spend is separate from every Guildframe fee and is paid in your own ad account." },
    ],
    guides: { intro: "These guides cover budgets, tracking and how to judge an advertising partner before you hand over an ad account.", links: [
      { slug: "kickstarter-advertising-budget-board-games", label: "Work out a Kickstarter ad test budget" },
      { slug: "kickstarter-referral-tags-tracking", label: "Track ads with referral tags and UTMs" },
      { slug: "kickstarter-agency-cost", label: "What a Kickstarter agency costs" },
      { slug: "choose-board-game-kickstarter-marketing-agency", label: "Choose a Kickstarter marketing agency" },
      { slug: "kickstarter-followers-before-launch", label: "How many followers you need before launch" },
      { slug: "board-game-kickstarter-marketing-plan", label: "Build a board game Kickstarter marketing plan" },
    ] },
  },
  "kickstarter-campaign-management": {
    proofCopy: "Cryptic Explorers, where Umair created the launch facing campaign presentation, shows how a page changes once a campaign is live, with header banners reading Funded In 27 Hours and Unlocking Stretch Goals. Quiver Time's header reports 100% funded within 6 days. Those results belong to the creators.",
    visualsIntro: "A live campaign runs on a rhythm, and every step has a named owner. We agree that rhythm with you before launch day.",
    visuals: [
      launchSteps("A live campaign runs on a set rhythm from launch to close", [
        { label: "Final checks", detail: "Page, rewards, links and the launch email." },
        { label: "Launch day", detail: "A named person presses launch from the checklist." },
        { label: "Live updates", detail: "Drafts from facts you confirm, approved before posting." },
        { label: "Milestones", detail: "Stretch goal and reward graphics when changes are approved." },
        { label: "Close and hand off", detail: "Close update, reports and open tasks with owners." },
      ]),
      { kind: "checklist", title: "We run the communication, you keep the production decisions", groups: [
        { name: "We handle", items: ["Update and email drafts", "Answers to repeated backer questions", "Stretch goal and reward graphics", "Ad reports when ads are included"] },
        { name: "You confirm", items: ["Manufacturing and delivery dates", "Shipping and tax rules", "Reward and price changes", "Who publishes each update"] },
      ] },
    ],
    guides: { intro: "These guides cover the live campaign, from the launch day checklist to the pledge manager that follows it.", links: [
      { slug: "kickstarter-live-campaign-updates", label: "Plan your live campaign updates" },
      { slug: "board-game-kickstarter-launch-day-checklist", label: "The launch day checklist" },
      { slug: "kickstarter-review-launch-timeline", label: "Leave time for Kickstarter review" },
      { slug: "kickstarter-stretch-goals-planning", label: "Plan stretch goals before the graphic" },
      { slug: "board-game-pledge-manager-checklist", label: "Choose a pledge manager" },
      { slug: "what-happens-after-kickstarter-is-funded", label: "What happens after Kickstarter funding" },
    ] },
  },
  "gamefound-launch-services": {
    proofCopy: "Our tabletop pages range from FutureProof Terrain's modular wargaming terrain to Cryptic Explorers' survival horror tactics game for 2 to 4 players. Both launched on Kickstarter, and the same product explanation carries over to a Gamefound story and reward list.",
    visualsIntro: "Gamefound has its own stages and preview tools, so we plan the work around them. You keep the project settings and the publish button.",
    visuals: [
      launchSteps("A Gamefound launch follows the platform's own stages", [
        { label: "Confirm the setup", detail: "Project stage, products and the reward plan." },
        { label: "Build the story", detail: "Story sections and reward graphics made together." },
        { label: "Prelaunch and ads", detail: "Signup route and capped ad tests, where scoped." },
        { label: "Check the preview", detail: "You approve prices, shipping and publication." },
        { label: "Launch and late pledges", detail: "Live updates, then late pledge and pledge manager copy." },
      ]),
      { kind: "checklist", title: "A Gamefound scope covers the page, the audience and what follows", groups: [
        { name: "Campaign page", items: ["Story copy and section graphics", "Reward and add on comparisons", "A preview check before publication"] },
        { name: "Audience", items: ["Prelaunch landing page and emails", "Paid ads with approved caps"] },
        { name: "After launch", items: ["Live campaign updates", "Late pledge and pledge manager copy"] },
      ], caption: "Campaign page package $1,800. Full campaign support $5,900. Gamefound fees and ad spend are separate." },
    ],
    guides: { intro: "These guides compare the platforms and the tools around them, so you can choose before the page is built.", links: [
      { slug: "kickstarter-vs-gamefound", label: "Kickstarter or Gamefound for your game" },
      { slug: "kickstarter-vs-gamefound-campaign-page-design", label: "How page design differs on each platform" },
      { slug: "gamefound-launch-page-checklist", label: "Check your Gamefound page before launch" },
      { slug: "pledge-managers-compared", label: "Pledge managers compared" },
      { slug: "backerkit-vs-shopify-vs-gamefound", label: "BackerKit, Shopify or Gamefound after funding" },
      { slug: "kickstarter-fees", label: "What Kickstarter fees cost a tabletop creator" },
    ] },
  },
  "post-campaign-support": {
    proofCopy: "Quiver Time's CITADEL campaign shows how much a product depends on dimensions, capacity and bundle contents. Those same facts carry into the pledge manager and any store that follows, which is why we keep the names identical. The case study explains Umair's part in the campaign presentation.",
    visualsIntro: "After funding, the same rewards move from the campaign page to a pledge manager and often to a store. We keep their names, images and contents identical at every step.",
    visuals: [
      launchSteps("After funding, the rewards move from page to pledge manager to store", [
        { label: "Close update", detail: "Thank backers and set the date of the next update." },
        { label: "Pledge manager", detail: "Rewards, add ons and survey wording checked." },
        { label: "Late pledges", detail: "The same product names and images as the campaign." },
        { label: "Production updates", detail: "Facts from your suppliers, written for backers." },
        { label: "Store handoff", detail: "An optional Shopify store under a separate brief." },
      ]),
      { kind: "checklist", title: "We prepare the content, your suppliers own the delivery", groups: [
        { name: "We prepare", items: ["Backer update drafts", "Pledge manager descriptions and graphics", "Late pledge product presentation", "Store planning when scoped"] },
        { name: "Your suppliers own", items: ["Manufacturing progress", "Freight, customs and taxes", "Fulfillment and delivery dates"] },
      ] },
    ],
    guides: { intro: "These guides cover the months after funding, from choosing a pledge manager to moving late orders into a store.", links: [
      { slug: "what-happens-after-kickstarter-is-funded", label: "What happens after Kickstarter funding" },
      { slug: "pledge-managers-compared", label: "Pledge managers compared" },
      { slug: "board-game-pledge-manager-checklist", label: "Choose a pledge manager for your board game" },
      { slug: "kickstarter-late-pledges-vs-shopify", label: "Late pledges or a Shopify store" },
      { slug: "backerkit-vs-shopify-vs-gamefound", label: "BackerKit, Shopify or Gamefound" },
      { slug: "move-from-kickstarter-to-shopify", label: "Move from Kickstarter to Shopify" },
      { slug: "kickstarter-to-shopify-launch-timeline", label: "A Kickstarter to Shopify timeline" },
    ] },
  },
};
for (const [slug, extra] of Object.entries(launchExtras)) Object.assign(serviceDelivery[slug], extra);

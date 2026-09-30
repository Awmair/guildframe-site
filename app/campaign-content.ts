export const campaignDate = "2026-09-30";
export const gameCategories = [
 {slug:"board-game-kickstarter-campaign-design",name:"Board games",tag:"Strategy, family & party games",image:"board-games",alt:"Original harbour strategy game beside a colourful abstract family game",copy:"Show a turn, lay out the components and explain what players are trying to do.",focus:"Strategy, family, party, cooperative and solo games",details:["A quick explanation of the main turn and the decisions players make","Component spreads that distinguish the base game from upgrades","Player count, play time, age guidance and language information","Reward comparisons for core games, deluxe editions and expansions"]},
 {slug:"card-game-kickstarter-campaign-design",name:"Card games & TCGs",tag:"Party decks, deckbuilders & TCGs",image:"card-games",alt:"Original space themed trading cards alongside bright food themed party cards",copy:"Show enough cards to explain the game, then make deck sizes and reward contents easy to compare.",focus:"Trading card games, party decks, deckbuilders and collectible games",details:["Legible sample cards with enough scale to understand their layout","A clear explanation of deck size, starter sets and how a round works","Edition and pack contents stated without implying unconfirmed rarity odds","Reward graphics that separate complete decks, bundles and optional extras"]},
 {slug:"ttrpg-kickstarter-campaign-design",name:"Tabletop RPGs",tag:"Rulebooks, adventures & zines",image:"ttrpgs",alt:"Original noir roleplaying hardback and cosmic horror zine with character sheets",copy:"Introduce the setting and the kind of session it offers, with sample pages people can read.",focus:"Core rulebooks, adventures, settings, supplements and indie zines",details:["The premise, intended play experience and whether a system is required","Readable interior spreads, character sheets and a route to sample material","Physical books, PDFs and bundles separated clearly in rewards","Accurate binding, format and production details supplied by the creator"]},
 {slug:"miniatures-kickstarter-campaign-design",name:"Miniatures & terrain",tag:"Physical models, terrain & STLs",image:"miniatures",alt:"Original science fiction mechs, woodland creatures and modular lunar terrain",copy:"Show the sculpts up close, with the scale and contents of each physical or digital set.",focus:"Physical miniatures, STL collections, terrain, skirmish kits and hobby sets",details:["Scale, dimensions and assembly information beside the product imagery","Clear distinctions between physical products and digital files","Labelled comparisons of sculpt sets, poses, terrain pieces and bundles","Creator supplied licence and printing information for digital collections"]},
 {slug:"tabletop-accessories-campaign-design",name:"Dice & accessories",tag:"Dice, storage & gaming accessories",image:"accessories",alt:"Original colourful dice, a coral dice tray, petrol card sleeves and mint tokens",copy:"Show the materials, dimensions and how the accessory fits into a game night.",focus:"Dice, trays, sleeves, tokens, organisers, gaming bags and storage",details:["Dimensions, materials and compatibility explained in everyday language","Useful close ups that show finishes and how the accessory is used","Colour and size choices shown consistently across reward tiers","Bundle contents and any game products shown for context distinguished"]},
] as const;
export const campaignFaqs = [
 {question:"How much does campaign design cost?",answer:"The price is $975 USD for one campaign. We agree the sections, files and schedule before starting. Platform fees, manufacturing and advertising are separate costs."},
 {question:"What is included in the $975 campaign design?",answer:"Page structure, campaign copy, section graphics and reward comparisons using your artwork. Stretch goal graphics are included where needed. The brief lists the final deliverables. New illustration, video and paid advertising are separate."},
 {question:"Do you design for Kickstarter and Gamefound?",answer:"Yes. I prepare the copy and graphics for your chosen platform. Tell me whether you’re using Kickstarter or Gamefound when you request the mockup."},
 {question:"How does the free mockup work?",answer:"Send a short description and a link to any artwork you can share. I’ll review it and design an opening campaign section. You can look at that before deciding whether to book. There’s no payment or obligation."},
 {question:"Can you work with a game that is still in development?",answer:"Yes, if you have enough artwork and a description to work from. Tell me which pieces are unfinished. We can explore the design early, then check the final product details before launch."},
 {question:"Will campaign design guarantee funding?",answer:"No. Design helps people understand the project. Funding also depends on the game, price, audience and launch preparation, so I can’t promise a result."},
 {question:"Do I need finished artwork before getting in touch?",answer:"You need enough artwork to explore a direction, but every piece doesn’t have to be final. Send what you have and label placeholders. The final page needs the artwork and product facts you intend to publish."},
 {question:"How long will the campaign design take?",answer:"I’ll confirm the schedule after reviewing your brief, available artwork and launch date. We allow time for design, feedback and a platform preview check. Tell me about a fixed deadline in your first message."},
 {question:"What if I want changes to the design?",answer:"We agree how feedback and revisions will work before the $975 project starts. Review the opening mockup first so we can discuss the direction before designing the full page."},
 {question:"Will you write the campaign copy?",answer:"Yes. I write the campaign copy from your game information and review it with you. You confirm the rules, contents, production details and other product facts before publication."},
 {question:"What files will I receive?",answer:"You receive the campaign graphics prepared for your chosen platform. We list the output formats and any editable source files in the brief before you book, so you know what will be handed over."},
 {question:"Can you help if I already have a draft campaign page?",answer:"Yes. Send the draft and tell me what needs work. We’ll review the structure, copy and graphics, then agree which sections the $975 project covers."},
 {question:"Do I have to book after the free mockup?",answer:"No. The opening mockup is free to request and there’s no obligation to book the full campaign. You can decide after you’ve seen the direction."},

] as const;


export const categoryFaqs: Record<string, {question:string;answer:string}[]> = {
 "board-game-kickstarter-campaign-design": [
  {question:"What board game artwork should I send?",answer:"Send the box art, component images and a short gameplay explanation. Include player count, play time, proposed rewards and any rules or preview links. Mark prototype images so they can be labelled correctly."},
  {question:"Can you compare a standard and deluxe edition?",answer:"Yes. Reward comparisons can show which components change and which expansions are included. You confirm the contents and prices; I use the same names across the copy and graphics."},
 ],
 "card-game-kickstarter-campaign-design": [
  {question:"Can you design a Kickstarter page for a TCG or party card game?",answer:"Yes. For a TCG, the page can explain the starter decks, sample cards and pack contents. For a party game, a sample round may explain the game in fewer steps. The copy and graphics use your confirmed card information."},
  {question:"Does $975 include drawing new card artwork?",answer:"The campaign page uses your supplied card artwork. New card illustration and game design are separate work. The $975 brief covers campaign copy, page graphics and reward presentation."},
 ],
 "ttrpg-kickstarter-campaign-design": [
  {question:"Can the page show both print books and PDF rewards?",answer:"Yes. I label the physical and digital contents separately and show when a print book includes its PDF. You provide the confirmed format, page count, binding and bundle details."},
  {question:"What should I share for an RPG campaign mockup?",answer:"Send a short description of the game, the cover or usable artwork and any sample spread you can share. Say whether it is a complete system, adventure or supplement and what players need to use it."},
 ],
 "miniatures-kickstarter-campaign-design": [
  {question:"Can you present STL files and physical miniatures in one campaign?",answer:"Yes. The graphics label digital files and physical sets separately, with the scale, sculpt list and included pieces supplied by you. Licence and printing details should be confirmed before publication."},
  {question:"What images help explain modular terrain?",answer:"Show an assembled layout, the individual pieces and a scale reference. Connection details and different configurations help players understand what a set can build. Label anything shown for context that is not included."},
 ],
 "tabletop-accessories-campaign-design": [
  {question:"Do you design campaigns for deck boxes, sleeves and dice?",answer:"Yes. I use your product photos and measurements to explain storage, materials, dimensions and compatibility. Reward graphics can compare finishes, sizes and bundle contents."},
  {question:"How do you explain whether an accessory fits a game?",answer:"Use the dimensions and compatibility you have checked. Show the accessory in use and label cards, dice or games shown only for context. Avoid implying compatibility that has not been confirmed."},
 ],
 "gamefound-campaign-design": [
  {question:"Can I reuse my Kickstarter artwork for Gamefound?",answer:"Existing artwork and some copy can be reused. The page layout, story sections and reward graphics still need a check in the Gamefound editor and preview. Confirm the platform before agreeing the deliverables."},
  {question:"Who controls Gamefound prices, shipping and publication?",answer:"You control the project settings, rewards, prices, taxes, shipping and publication. I prepare the campaign copy and graphics and review how they display in the agreed preview."},
 ],
};

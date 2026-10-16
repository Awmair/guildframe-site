type DeliveryStep = { title: string; copy: string };
export type ServiceDelivery = {
  title: string; intro: string; steps: DeliveryStep[];
  inputs: string; handoff: string; proof: string[];
  faqs: { question: string; answer: string }[];
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
    proof: ["scented-realms", "futureproof-terrain", "quiver-time"],
    faqs: [
      { question: "What does the launch service include?", answer: "Your scope can combine launch planning, prelaunch pages and email, campaign copy and graphics, paid ads and live support. Each stage has named deliverables. Manufacturing, freight and fulfilment remain with your suppliers." },
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
      { question: "Do I need a separate landing page as well as Kickstarter's prelaunch page?", answer: "A Kickstarter follow and an email signup serve different purposes. Your own page is useful when you need more explanation and an email sequence in your tools. We choose the route around your audience and what you can maintain." },
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
    proof: [],
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
      { title: "Close with a clear handoff", copy: "Prepare the close update, organise the final files and list outstanding tasks. Identify who owns the next production and backer communication." },
    ],
    inputs: "Campaign access, approved copy, reward and delivery facts, publishing contacts, support dates and expected working hours.",
    handoff: "Approved update drafts, scoped creative changes, the agreed report and a task list. Production decisions and promises require your confirmation.",
    proof: [],
    faqs: [
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
    handoff: "Platform ready creative and agreed launch communication. Gamefound fees, media spend, manufacturing and fulfilment are separate project costs.",
    proof: [],
    faqs: [
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
      { title: "Hand over the next stage", copy: "Organise files, draft the agreed communication and identify who maintains the products and answers delivery questions." },
    ],
    inputs: "Final rewards, current production information, your pledge manager choice, confirmed delivery assumptions and the remaining task list.",
    handoff: "The content and assets listed in the brief. Shopify planning is optional; fulfilment and manufacturing remain with their appointed suppliers.",
    proof: ["quiver-time"],
    faqs: [{ question: "Can you help after the campaign has already ended?", answer: "Yes. Share the campaign, current platform setup and outstanding work. We can scope communication, pledge manager content, late pledge assets or a separate store project." }],
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
  { slug: "board-game-kickstarter-campaign-design", title: "Show a turn before asking someone to choose an edition.", example: "A strategy game needs a decision a player can follow. A party game may need only a short sample round. We choose the explanation around your actual rules.", input: "Rules, player count, play time, component images and the differences between base, deluxe and expansion rewards.", focus: "A readable gameplay example, component presentation and reward comparisons using the same names throughout.", proof: [] },
  { slug: "card-game-kickstarter-campaign-design", title: "Let a visitor read the cards and follow a round.", example: "A party deck, deckbuilder and TCG need different explanations. Sample cards should establish what players do before pack or bundle choices complicate the offer.", input: "Representative cards, a sample round, deck and pack contents, rules and confirmed edition details.", focus: "Legible card examples, a clear play sequence and reward contents that distinguish complete decks from packs and optional extras.", proof: ["quiver-time"] },
  { slug: "ttrpg-kickstarter-campaign-design", title: "Show the kind of session your book makes possible.", example: "Introduce the premise, a playable situation and readable interior pages. State whether the project is a complete game or needs another system.", input: "Cover and interior art, sample spreads, system requirements, format, binding and the PDF and print rewards.", focus: "Setting and gameplay explanation, readable samples and clear comparisons of digital and physical editions.", proof: ["scented-realms"] },
  { slug: "miniatures-kickstarter-campaign-design", title: "Make physical models and printable files easy to distinguish.", example: "An assembled terrain view answers a different question from a parts spread. Put the views together, then state what each physical set or digital reward contains.", input: "Renders or photographs, scale, dimensions, set contents, assembly details and the actual licence terms for files.", focus: "Labelled product views, set comparisons and clear physical or digital reward information.", proof: ["futureproof-terrain"] },
  { slug: "tabletop-accessories-campaign-design", title: "Show the product in use, then answer the fit questions.", example: "A dice tray, card organiser and RPG accessory need more than a finish shot. Explain dimensions, materials, compatibility and the parts included in each choice.", input: "Product photographs, measurements, materials, compatibility notes, finish choices and bundle contents.", focus: "Product explanations and reward graphics based on confirmed specifications, with each colour or size named consistently.", proof: ["quiver-time", "scented-realms"] },
  { slug: "gamefound-campaign-design", title: "Keep story graphics and Gamefound rewards in agreement.", example: "Plan the campaign story alongside the reward choices. A visitor should find the same product names, quantities and edition differences in both places.", input: "Your Gamefound project, story outline, product art, reward contents and current platform stage.", focus: "Story sections, reward comparisons and a review in Gamefound's preview using settings you confirm.", proof: [] },
];
for (const c of categories) {
  creativeDelivery[c.slug] = {
    title: c.title, intro: c.example,
    steps: [{ title: "Bring the product facts", copy: c.input }, { title: "Explain the offer", copy: c.focus }, { title: "Review before launch", copy: "Check the copy and graphics on a phone, confirm every reward and approve the final platform files." }],
    inputs: c.input, handoff: c.focus + " The brief confirms the final files, editable sources, revisions and schedule.", proof: c.proof,
    faqs: [{ question: "Can I book the page separately from marketing?", answer: "Yes. Campaign copy and graphics can be booked separately. The main campaign design page lists the fixed design fee; prelaunch, advertising and live support have their own scope." }],
  };
}

import type { LaunchGuide } from "./launch-guides";
import { contentDates } from "./content-dates";

/*
 * General guides for first time creators of everyday products, games and books
 * (strategy section 5, guides 1 to 6, written November 26, 2026). They use the
 * same LaunchGuide shape as the tabletop guides and render through
 * app/guides/[slug]/page.tsx. Copy is category neutral: "your product" or
 * "your project", never "your game" on its own.
 *
 * Every platform figure below was checked on November 26, 2026 against the
 * source listed in the guide. Studio prices are Guildframe's own: $1,800 for
 * the campaign page package and $5,900 for full campaign support.
 */

const date = contentDates.generalGuides;

/** Where each general guide sits in the guide library filters. */
export const generalGuideStages: Record<string, "start" | "products"> = {
  "kickstarter-campaign-brief": "start",
  "kickstarter-funding-goal": "start",
  "kickstarter-product-campaign-cost": "products",
  "kickstarter-vs-indiegogo": "products",
  "product-kickstarter-page": "products",
  "kickstarter-version-two": "products",
};

export const generalGuideSlugs = new Set(Object.keys(generalGuideStages));

const kickstarterFees = { label: "Kickstarter fees for creators", publisher: "Kickstarter", href: "https://www.kickstarter.com/help/fees" };
const hardwareRules = { label: "What are the rules for hardware and product design projects?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236428-what-are-the-rules-for-hardware-and-product-design-projects" };
const pageInformation = { label: "What information should I share on my project page?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236738-what-information-should-i-share-on-my-project-page" };
const allOrNothing = { label: "Why is funding all or nothing?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236582-why-is-funding-all-or-nothing" };
const editAfterLaunch = { label: "Can a project be edited after launching?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236599-can-a-project-be-edited-after-launching" };
const payout = { label: "If my project is successfully funded, how do I receive my funds?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236545-if-my-project-is-successfully-funded-how-do-i-receive-my-funds" };
const duration = { label: "What is the maximum project duration?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236742-what-is-the-maximum-project-duration" };
const review = { label: "My project is awaiting review. How does this work?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236415-my-project-is-awaiting-review-how-does-this-work" };
const studioPricing = { label: "Guildframe campaign design scope and price", publisher: "Guildframe", href: "/campaign-design" };

export const generalGuides: LaunchGuide[] = [
  {
    published: date,
    updated: date,
    slug: "kickstarter-campaign-brief",
    title: "What to Send Your Campaign Designer: The Brief Checklist",
    seoTitle: "Kickstarter Campaign Brief: What to Send",
    description: "A Kickstarter campaign brief checklist for products, games and books: the facts, files, rewards and dates a campaign designer needs before work starts.",
    tag: "Start here",
    answer: "Send your campaign designer five things: one paragraph on what you are making, the images and files you already have, a draft reward sheet with prices, your production status and a target launch window. Mark every file as final or draft and name the one person who approves facts, so the page is built on information that will not change under it.",
    relatedSlugs: ["product-kickstarter-page", "kickstarter-funding-goal", "kickstarter-product-campaign-cost", "kickstarter-image-sizes"],
    servicePath: "/campaign-design",
    serviceLabel: "Kickstarter campaign page design",
    sources: [
      pageInformation,
      hardwareRules,
      { label: "How do I include images or other media in my project description and updates?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates" },
      kickstarterFees,
      studioPricing,
    ],
    sections: [
      {
        id: "short-version",
        title: "The brief in one table",
        paragraphs: [
          "This is the list we send after every enquiry. It works for an everyday product, a tabletop game or a book, because a campaign page always needs the same raw material: what the thing is, proof that it exists, what each reward includes and when it can ship.",
          "You do not need every row finished. Send what you have and mark the gaps. A gap we know about is easy to plan around. A gap we find halfway through the design is what moves launch dates.",
        ],
        table: {
          headers: ["Part of the brief", "What to send", "Ready enough when"],
          rows: [
            ["Summary", "One paragraph: what it is, who it is for, why now", "Someone outside the project can repeat it back"],
            ["Files", "Photos, renders, logo, brand colors and fonts, any video", "Each file is labeled final or draft"],
            ["Facts", "Specs, materials, sizes, certifications, page count or component list", "You would print them on the box"],
            ["Rewards", "Tiers, contents, prices, limits and shipping regions", "Every price has a cost behind it"],
            ["Production", "Maker, minimum order, sample status, delivery month", "You have a written quote or a named supplier"],
            ["Audience", "Email list size, platform followers, past customers, communities", "You can give real numbers, even small ones"],
            ["Platform and dates", "Kickstarter, Gamefound or Indiegogo, and a launch window", "A date range, not just soon"],
            ["Approvals", "Who signs off copy, prices and claims", "One named person"],
          ],
        },
        visual: {
          kind: "checklist",
          title: "A usable brief covers the product, the files, the rewards and the plan",
          caption: "Send what you have and mark the gaps. We plan around known gaps before any design starts.",
          groups: [
            { name: "What it is", items: ["One paragraph summary", "Confirmed specs or contents", "Who it is for"] },
            { name: "What exists", items: ["Prototype photos", "Renders labeled as renders", "Logo and brand files"] },
            { name: "What backers get", items: ["Draft reward sheet", "Shipping regions", "Delivery month"] },
            { name: "The plan", items: ["Platform and launch window", "Audience numbers", "One approver"] },
          ],
        },
      },
      {
        id: "summary",
        title: "Start with one paragraph about what you are making",
        paragraphs: [
          "Write it the way you would explain the project to a friend who has never heard of it. Say what it is, who it is for and what it does that the alternatives do not. Three or four plain sentences beat a page of features, because the opening section of the campaign is built from this paragraph.",
          "Kickstarter asks creators to show backers what they are trying to create, how they plan to make it happen, the progress so far, the budget and the story behind it. The summary covers the first and the last of those. The rest of the brief covers the middle three.",
          "For a product, name the problem it solves in one sentence. For a game, say what players do on a turn. For a book, give the genre, the premise and the format. If you have already written a pitch for a factory, a publisher or a friend, send that too.",
        ],
        source: 0,
      },
      {
        id: "files",
        title: "Send the files you have, labeled",
        paragraphs: [
          "Put everything in one shared folder and name files by what they are and how final they are, such as front_view_final.jpg or box_render_draft.png. Include prototype photos even when they are rough. They tell us what can be shown honestly today.",
          "If you are launching a hardware or product design project on Kickstarter, the rules matter here. Kickstarter requires a working prototype and does not allow photorealistic renderings for those projects. So the brief needs real photos or footage of the prototype, and any render should be labeled so we place it correctly.",
          "Brand files help too: a logo as a vector or a large transparent file, your colors and your fonts. If none exist yet, say so. We can work from the product photos alone, which is how Secubix started: product images and a short brief, with the market research and copy written from the product features. For upload sizes, see our [Kickstarter image sizes guide](/guides/kickstarter-image-sizes).",
        ],
        list: [
          "Prototype photos and any video, even rough",
          "Renders, marked as renders",
          "Logo, colors and fonts, or a note that they do not exist yet",
          "Packaging, cover or box art if it exists",
          "Two or three campaign pages you like, with a note on why",
        ],
        source: 1,
      },
      {
        id: "rewards",
        title: "Put every reward in one sheet",
        paragraphs: [
          "Reward lists scattered across messages are the most common reason a page needs rework. Keep one sheet with a row per reward: name, contents, price, any limit, shipping regions and the delivery month. When the sheet changes, change it in one place and tell us.",
          "Prices do not need to be final, but each one should have a cost behind it. Kickstarter takes a 5% platform fee and, for a US project, payment processing of 3% plus $0.20 per pledge, so a reward priced at cost loses money. Our [funding goal guide](/guides/kickstarter-funding-goal) shows how to build the goal from the same sheet.",
        ],
        list: [
          "Reward name, as it will appear on the page",
          "Exact contents, including anything digital",
          "Price and currency",
          "Quantity limit, if any",
          "Regions you will ship to, and whether shipping is charged later",
          "Estimated delivery month",
        ],
        source: 3,
      },
      {
        id: "production-audience",
        title: "Tell us where production and your audience stand",
        paragraphs: [
          "Production status shapes the page more than most creators expect. The delivery date on every reward, the risks section and the way the prototype is presented all depend on whether you have a quote, a sample or only a plan. Send the supplier name if you can, the minimum order and the date a sample is due.",
          "Audience numbers shape the rest. A creator with a large email list needs a page that converts people who already like the project. A creator starting from zero needs a page that explains the project to strangers arriving from ads. Both are fine starting points. We just need the real number. Our guide on [followers before launch](/guides/kickstarter-followers-before-launch) explains why it matters for the goal.",
        ],
      },
      {
        id: "not-yet",
        title: "What you do not need yet",
        paragraphs: [
          "First time creators often wait for things a designer can handle or that come later. You do not need polished copy, a finished video, a website or a perfect logo before you send the brief. Rough notes are enough for copy, because writing the page is part of the work.",
          "Our campaign page package is a fixed $1,800 and covers the page structure, the campaign copy, the section graphics and the reward presentation, built from your images. Full campaign support is $5,900 and adds the prelaunch signup page and emails, ad creative, paid advertising, live campaign checks and the final handoff. Ad spend, software and platform fees stay separate. The full scope is on our [pricing page](/campaign-design#pricing).",
        ],
        source: 4,
      },
      {
        id: "next",
        title: "What happens after you send it",
        paragraphs: [
          "We read the brief, reply with any questions and then agree the scope, the price and the dates in writing before any work starts. If you would like to see a direction first, we design the opening section of your page for free, with no payment or obligation to book.",
          "Product creators can see how we approach their category on our [product campaign page](/kickstarter-product-campaign-design). When the brief is ready, or even half ready, send it through the [project enquiry form](/guides/kickstarter-campaign-brief#start-project) at the bottom of this page.",
        ],
        visual: {
          kind: "steps",
          title: "From brief to work starting, in four steps",
          steps: [
            { label: "Send the brief", detail: "Whatever you have, with the gaps marked" },
            { label: "Questions", detail: "We ask about anything unclear or missing" },
            { label: "Scope in writing", detail: "Sections, files, price and dates agreed" },
            { label: "Free opening mockup", detail: "Optional, before you book" },
          ],
          caption: "The order we follow for every enquiry.",
        },
      },
    ],
    faqs: [
      { question: "What should a Kickstarter campaign brief include?", answer: "A one paragraph summary, the files you have with each marked final or draft, confirmed product facts, a reward sheet with contents and prices, your production status, your audience numbers, the platform and launch window, and the name of the person who approves facts." },
      { question: "What if my product photos are not ready?", answer: "Send what exists, including rough prototype photos, and say when better ones are due. For hardware and product design projects Kickstarter requires a working prototype and does not allow photorealistic renderings, so real photos are needed before launch either way." },
      { question: "Do I need final reward prices before I send a brief?", answer: "No. Draft prices are fine as long as each one has a cost behind it. Keep them in one sheet so a change reaches the page once, not through scattered messages." },
      { question: "Is the brief different for a product, a game and a book?", answer: "The structure is the same. What changes is the proof: specs and a working prototype for a product, a sample turn and component list for a game, and a sample chapter, page count and format for a book." },
    ],
  },
  {
    published: date,
    updated: date,
    slug: "kickstarter-product-campaign-cost",
    title: "How Much Does a Kickstarter Campaign Cost for a Product?",
    seoTitle: "Kickstarter Campaign Cost for a Product",
    description: "What a product Kickstarter costs: money spent before launch, the fees taken from pledges, and our fixed price for a page ($1,800) or full support ($5,900).",
    tag: "Products",
    answer: "A product Kickstarter costs money in two places: what you pay before launch, such as the prototype, photos, the campaign page and any prelaunch ads, and what comes out of the pledges, which is Kickstarter's 5% fee, payment processing of 3% plus $0.20 per pledge in the US, then manufacturing and shipping. Our campaign page package is $1,800 and full campaign support is $5,900, with ad spend and production paid separately.",
    relatedSlugs: ["kickstarter-funding-goal", "kickstarter-fees", "kickstarter-agency-cost", "kickstarter-vs-indiegogo"],
    servicePath: "/kickstarter-product-campaign-design",
    serviceLabel: "Kickstarter campaign design for products",
    sources: [
      kickstarterFees,
      payout,
      hardwareRules,
      { label: "Equipment authorization", publisher: "Federal Communications Commission", href: "https://www.fcc.gov/engineering-technology/laboratory-division/general/equipment-authorization" },
      { label: "CE marking", publisher: "Your Europe, European Union", href: "https://europa.eu/youreurope/business/product-requirements/labels-markings/ce-marking/index_en.htm" },
      studioPricing,
    ],
    sections: [
      {
        id: "two-budgets",
        title: "Two budgets: before launch and after funding",
        paragraphs: [
          "The cost of a product campaign splits by when you pay. Everything before launch comes out of your own pocket, because pledge money arrives only after the campaign ends. Kickstarter collects and processes pledges for 14 calendar days after the deadline before paying out.",
          "Everything after funding is paid from the pledges, but much of it is fixed before you launch: the fees, the factory price, freight and fulfillment. So both budgets need to exist before you set the goal. The table shows which lines sit where and who sets each price.",
        ],
        table: {
          headers: ["Budget line", "When you pay", "Who sets the price"],
          rows: [
            ["Working prototype and samples", "Before launch", "Your maker or workshop"],
            ["Product photos and video", "Before launch", "A photographer, a studio or you"],
            ["Campaign page: copy, graphics, rewards", "Before launch", "Your designer; $1,800 with us"],
            ["Prelaunch page, emails and test ads", "Before launch", "Your ad budget, plus any service fee"],
            ["Certification testing, if your product needs it", "Before launch or before shipping", "A test lab"],
            ["Kickstarter and payment processing fees", "Taken from pledges", "Kickstarter's published rates"],
            ["Manufacturing", "From pledges, often with a deposit first", "Your factory quote"],
            ["Freight, duties and fulfillment", "From pledges", "Your forwarder and fulfillment partner"],
            ["Reserve for surprises", "Kept back from pledges", "You"],
          ],
        },
        source: 1,
      },
      {
        id: "fees",
        title: "What Kickstarter takes from a funded project",
        paragraphs: [
          "Kickstarter charges nothing if a project does not fund. If it does, Kickstarter takes a 5% platform fee on the total raised, and payment processing comes out too. For a US project that is 3% plus $0.20 per pledge, or 5% plus $0.05 for pledges under $10.",
          "Here is the math on a small product launch, as an illustrative example rather than a forecast: 300 backers pledge an average of $89 on a US project. That raises $26,700. The platform fee is $1,335, processing is $801 plus $60, so $861, and $24,504 is left before the factory, freight and shipping are paid.",
          "Our [Kickstarter fees guide](/guides/kickstarter-fees) covers late pledges, the pledge manager and taxes, which carry fees of their own.",
        ],
        visual: {
          kind: "split",
          title: "Example: $2,196 of a $26,700 campaign goes to fees",
          total: "Example: 300 backers at $89 = $26,700 pledged",
          parts: [
            { label: "Left for production and delivery", share: 24504, display: "$24,504" },
            { label: "Kickstarter platform fee (5%)", share: 1335, display: "$1,335" },
            { label: "Payment processing (3% + $0.20 a pledge)", share: 861, display: "$861" },
          ],
          caption: "Illustrative example on Kickstarter's US fee schedule. It assumes every pledge collects.",
          source: "Kickstarter fee page, checked November 26, 2026",
        },
        source: 0,
      },
      {
        id: "before-launch",
        title: "Costs you pay before launch",
        paragraphs: [
          "The prototype is the line you cannot skip. Kickstarter requires creators of hardware and product design projects to show working prototypes, does not allow photorealistic renderings, and asks them to explain how the product will be produced and whether they have made anything like it before. So budget for a prototype that works on camera, not only one that looks right.",
          "Photos and video come next, because the page is built from them. Then the page itself, then whatever it takes to build an audience before launch: a signup page, emails and usually a small ad test.",
          "If your product has electronics, check certification early. In the US, the FCC requires radio frequency devices to be authorized before they are marketed. In the EU, CE marking applies to products covered by EU rules that require it. A test lab can tell you which apply and what they cost, and that answer belongs in your budget and your risks section.",
        ],
        source: 2,
      },
      {
        id: "studio-price",
        title: "What we charge, and what sits outside it",
        paragraphs: [
          "Our prices are fixed and published. The campaign page package is $1,800: page structure, copy written from your confirmed specifications, section graphics from your product images and reward presentation. Full campaign support is $5,900 and adds the prelaunch signup page and emails, ad creative, paid advertising management, live campaign checks and the final handoff.",
          "Neither price includes ad spend, software, platform fees, new photography or production. Those go on their own lines and you pay them in your own accounts. Other studios and agencies price by scope or by a share of pledges, so compare quotes line by line. Our guide to [Kickstarter agency costs](/guides/kickstarter-agency-cost) shows how, and the full scope is on our [pricing page](/campaign-design#pricing).",
        ],
        visual: {
          kind: "compare",
          title: "Two fixed prices, with spend and production kept separate",
          source: "Guildframe pricing, November 2026",
          columns: [
            { name: "Campaign page", points: ["Page structure and copy", "Section graphics from your images", "Reward presentation"], verdict: "$1,800 fixed" },
            { name: "Full campaign support", points: ["Everything in the page package", "Prelaunch page and emails", "Ad creative and paid ads", "Live checks and handoff"], verdict: "$5,900 fixed", highlight: true },
            { name: "Paid separately", points: ["Ad spend", "Software and platform fees", "Photography and video", "Manufacturing and shipping"], verdict: "Paid to the provider" },
          ],
        },
        source: 5,
      },
      {
        id: "budget-sheet",
        title: "Build the sheet before you set the goal",
        paragraphs: [
          "Put both budgets in one sheet, with the reward prices beside them, so a change to one shows in the others. Then work the funding goal back from what you need to deliver, as our [funding goal guide](/guides/kickstarter-funding-goal) explains. Check these lines are in the sheet first:",
        ],
        list: [
          "Prototype, samples and any certification testing",
          "Photos, video and the campaign page",
          "Prelaunch ads, with a cap you have agreed",
          "Kickstarter's 5% fee and processing for your country",
          "Factory price at your real minimum order, plus any deposit",
          "Freight, duties, fulfillment and shipping by region",
          "A reserve for the things that go wrong",
        ],
      },
      {
        id: "where-to-save",
        title: "Where first launches overspend",
        paragraphs: [
          "The costly mistakes we see are about order, not price. Buying ads before the page has been tested on a phone wastes spend on visitors who cannot understand the offer. Paying for a cinematic video before the prototype works means filming it twice.",
          "If you already have an audience or someone to run your ads, the $1,800 page package is usually enough. If you are starting from zero and do not have the hours to run prelaunch and ads yourself, full support at $5,900 covers that work. If your goal is above $200,000 with a large media budget, an agency with a media team is usually the better fit, and we will say so. Tell us about your product through the [enquiry form](/guides/kickstarter-product-campaign-cost#start-project) and we will tell you which fits.",
        ],
      },
    ],
    faqs: [
      { question: "How much does it cost to launch a product on Kickstarter?", answer: "There is no single number. Before launch you pay for the prototype, photos, the campaign page and any prelaunch ads. After funding, Kickstarter's fees, manufacturing, freight and shipping come out of the pledges. Our part is fixed: $1,800 for the campaign page or $5,900 for full campaign support." },
      { question: "Does Kickstarter charge anything if my campaign fails?", answer: "No. Kickstarter says there are no fees if funding is not successful, and backers are not charged." },
      { question: "How much does Kickstarter take from $10,000?", answer: "On a US project, 5% is $500 and processing at 3% is $300, plus $0.20 for each pledge. With 150 pledges that adds $30, so about $830 in total." },
      { question: "Is ad spend included in the $5,900 full support price?", answer: "No. The $5,900 covers the work, including ad creative and managing the ads. Ad spend is paid separately in your own account, with a cap you approve." },
      { question: "When does Kickstarter pay out?", answer: "Kickstarter collects and processes pledges for 14 calendar days after your deadline, then pays out. Anything you spend before then comes from your own funds." },
    ],
  },
  {
    published: date,
    updated: date,
    slug: "kickstarter-vs-indiegogo",
    title: "Kickstarter vs Indiegogo in 2026: Which One for Your Product",
    seoTitle: "Kickstarter vs Indiegogo for Products (2026)",
    description: "Kickstarter vs Indiegogo in 2026: the same 5% fee, goal based funding on both since Indiegogo ended flexible funding, product rules and which one fits.",
    tag: "Platform choice",
    answer: "For a first product launch in 2026, choose by audience and rules rather than fees, because both platforms charge a 5% platform fee plus 3% and $0.20 per pledge for payment processing, and both pay out only if you reach your goal. Indiegogo stopped offering flexible funding to new campaigns on October 16, 2025, when it moved onto Gamefound's technology.",
    relatedSlugs: ["kickstarter-vs-gamefound", "kickstarter-product-campaign-cost", "product-kickstarter-page", "kickstarter-fees"],
    servicePath: "/kickstarter-product-campaign-design",
    serviceLabel: "Kickstarter campaign design for products",
    sources: [
      kickstarterFees,
      { label: "Fees", publisher: "Indiegogo", href: "https://help.indiegogo.com/article/596-fees" },
      { label: "What changed with the Platform Upgrade?", publisher: "Indiegogo", href: "https://help.indiegogo.com/article/645-what-changed-with-the-platform-upgrade" },
      { label: "Indiegogo's acquisition by Gamefound", publisher: "Indiegogo", href: "https://support.indiegogo.com/hc/en-us/articles/39600950083988-Indiegogo-s-Acquisition-by-Gamefound" },
      hardwareRules,
      allOrNothing,
      duration,
      { label: "General project settings", publisher: "Indiegogo", href: "https://help.indiegogo.com/article/485-general-project-settings" },
      review,
      { label: "Q1 2026 crowdfunding report", publisher: "TCF", href: "https://www.tcf.team/blog/q1-2026-crowdfunding-report" },
      studioPricing,
    ],
    sections: [
      {
        id: "at-a-glance",
        title: "Kickstarter and Indiegogo side by side",
        paragraphs: [
          "Most comparisons online were written when Indiegogo offered flexible funding and different fees. Both of those changed in October 2025. Here is how the two platforms compare on their own help pages, checked on November 26, 2026.",
        ],
        table: {
          headers: ["Detail", "Kickstarter", "Indiegogo"],
          rows: [
            ["Platform fee", "5% of funds raised", "5% of the collected amount"],
            ["Payment processing", "3% plus $0.20 per pledge in the US; 5% plus $0.05 under $10", "3% plus 0.20 per transaction in the project currency"],
            ["If you miss the goal", "No fees and backers are not charged", "You pay nothing, including processing"],
            ["Funding model", "All or nothing", "Fixed Funding only for new campaigns since October 16, 2025"],
            ["Longest campaign", "60 days; 30 days or less recommended", "60 days"],
            ["Product rules", "Working prototype required for hardware and product design; no photorealistic renderings", "Two step compliance review; reward prices listed net of taxes"],
            ["After the campaign", "Late Pledges and Pledge Manager", "Late Pledge (formerly InDemand) and Pledge Manager"],
            ["Locked after launch", "Funding goal and deadline", "End date"],
          ],
        },
        source: 2,
      },
      {
        id: "what-changed",
        title: "What changed at Indiegogo",
        paragraphs: [
          "Gamefound bought Indiegogo in July 2025, and on October 16, 2025 Indiegogo moved to an upgraded platform powered by Gamefound technology. For creators, the biggest change is that Flexible Funding is no longer offered for new campaigns. Campaigns that were live on flexible funding at the switch were converted to Fixed Funding.",
          "Other changes from Indiegogo's own list: InDemand is now called Late Pledge, perks are now called rewards, a pledge manager is built in, optional tips go to the creator, new campaigns onboard with the Adyen payment processor and must pass a two step compliance review. Campaign pages support several languages.",
          "If you make tabletop games, Gamefound itself is the third option. Our [Kickstarter vs Gamefound guide](/guides/kickstarter-vs-gamefound) covers that choice.",
        ],
        source: 2,
      },
      {
        id: "fees",
        title: "Fees are now close to a tie",
        paragraphs: [
          "On a $50 pledge, both platforms take a $2.50 platform fee and $1.70 in processing, so $4.20 in total, on their published rates. The one difference we found is at the low end: Kickstarter discounts pledges under $10 to 5% plus $0.05 for processing, and Indiegogo's fee page lists a single processing rate.",
          "After the campaign, both charge on money collected later. Indiegogo's pledge manager has no setup or subscription fee, with transactions charged 5% plus the same processing. Kickstarter deducts its usual fees from late pledges and payments in its pledge manager, as our [Kickstarter fees guide](/guides/kickstarter-fees) explains. So for a product that sells add ons or extra units after funding, the cost is close on both.",
        ],
        visual: {
          kind: "stats",
          title: "On published rates, a $50 pledge costs the same on both",
          stats: [
            { value: "5%", label: "Platform fee", note: "Kickstarter and Indiegogo" },
            { value: "3% + $0.20", label: "Processing per pledge", note: "Kickstarter US; Indiegogo in project currency" },
            { value: "$4.20", label: "Fees on a $50 pledge", note: "Both platforms" },
            { value: "$0", label: "Fees if you miss the goal", note: "Both platforms" },
          ],
          source: "Kickstarter and Indiegogo fee pages, checked November 26, 2026",
        },
        source: 1,
      },
      {
        id: "rules",
        title: "Rules for physical products",
        paragraphs: [
          "Kickstarter is explicit about products. Hardware and product design creators must show working prototypes, cannot use photorealistic renderings, must explain how they will produce the product and must say whether they have made anything like it before. Review takes up to 3 business days, and up to 3 more if Kickstarter asks for changes.",
          "Indiegogo describes a two step compliance review for new campaigns and asks for reward prices net of taxes. We did not find a published prototype rule as specific as Kickstarter's in the Indiegogo help pages we checked, so read its current creator guidelines when you set up. Either way, plan to show a working prototype. Backers expect it, and our [prototype and risks guide](/guides/kickstarter-prototype-risks-disclosure) explains how to label what is and is not finished.",
        ],
        source: 4,
      },
      {
        id: "audience",
        title: "Where your backers already are",
        paragraphs: [
          "With fees and funding rules this close, the deciding question is where your audience already backs projects. Look at the campaigns your target backers support, the platform your competitors used and where your email subscribers have backed before.",
          "Volume is one signal. In TCF's scraped sample of campaigns active or completed in the first quarter of 2026, there were 4,476 Kickstarter projects and 551 Indiegogo campaigns. That is one agency's dataset rather than a platform total, but the gap is large enough to matter for discovery.",
        ],
        visual: {
          kind: "compare",
          title: "Pick the platform your backers already use",
          columns: [
            { name: "Kickstarter fits if", points: ["You can show a working prototype on camera", "Your backers already pledge on Kickstarter", "You want the larger pool of live projects", "You want a 30 day all or nothing run"], verdict: "Our default for a first product launch", highlight: true },
            { name: "Indiegogo fits if", points: ["Your community already uses Indiegogo", "You want its built in pledge manager", "You want campaign pages in several languages", "Your product suits its categories"], verdict: "A fair choice when your audience is there" },
          ],
          caption: "Guildframe recommendations, based on the rules and fees above.",
        },
        source: 9,
      },
      {
        id: "page",
        title: "What changes on the page",
        paragraphs: [
          "The page itself is mostly the same work on either platform: an opening section, how the product works, proof, rewards, shipping and risks. The differences are in the editor, the reward setup and the wording each platform uses. We build product pages for Kickstarter and Indiegogo at the same fixed price, $1,800 for the page and $5,900 for full campaign support.",
          "Read our [section by section guide to a product page](/guides/product-kickstarter-page) for what goes where, see how we work on our [product campaign page](/kickstarter-product-campaign-design), or check the [pricing](/campaign-design#pricing).",
        ],
        source: 10,
      },
    ],
    faqs: [
      { question: "Is Indiegogo cheaper than Kickstarter?", answer: "Not on published rates. Both charge a 5% platform fee and 3% plus $0.20 per pledge for processing, and neither charges fees if you miss your goal. Kickstarter discounts processing on pledges under $10." },
      { question: "Does Indiegogo still offer flexible funding?", answer: "No. Since its platform upgrade on October 16, 2025, Indiegogo offers only Fixed Funding to new campaigns, so like Kickstarter you need to reach the goal to collect." },
      { question: "Which is better for a gadget or physical product?", answer: "Choose the platform your backers already use. If you can show a working prototype and have no strong Indiegogo community, Kickstarter is our default for a first product launch." },
      { question: "Did Gamefound buy Indiegogo?", answer: "Yes. Gamefound acquired Indiegogo in July 2025, and Indiegogo moved onto Gamefound's technology on October 16, 2025." },
    ],
  },
  {
    published: date,
    updated: date,
    slug: "product-kickstarter-page",
    title: "What Goes on a Product Kickstarter Page, Section by Section",
    seoTitle: "Product Kickstarter Page: Section by Section",
    description: "The sections of a product Kickstarter page in the order backers read them: opening, how it works, specs, prototype, rewards, shipping, risks and FAQ.",
    tag: "Products",
    answer: "A product Kickstarter page answers five questions in order: what it is, how it works, what proof exists, what each reward includes and when it will arrive. That means an opening section with the product and the early price, then how it works, specs and what is in the box, prototype photos, rewards, shipping, the team, risks and an FAQ.",
    relatedSlugs: ["kickstarter-campaign-brief", "kickstarter-image-sizes", "kickstarter-prototype-risks-disclosure", "kickstarter-reward-tier-graphics"],
    servicePath: "/kickstarter-product-campaign-design",
    serviceLabel: "Kickstarter campaign design for products",
    sources: [
      { label: "A guide to your Kickstarter campaign page", publisher: "Kickstarter", href: "https://updates.kickstarter.com/kickstarter-lessons/guide-to-kickstarter-campaign-page/" },
      pageInformation,
      hardwareRules,
      { label: "Is a project video required to launch?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236743-is-a-project-video-required-to-launch" },
      studioPricing,
    ],
    sections: [
      {
        id: "order",
        title: "The page in reading order",
        paragraphs: [
          "Backers read a product page on a phone, from the top, so the order matters as much as the content. This is the order we use for product pages, with the job each section does.",
        ],
        table: {
          headers: ["Section", "Its job", "What goes in it"],
          rows: [
            ["Opening", "Say what it is and why it matters", "Product image, one line promise, early price"],
            ["How it works", "Show the product in use", "Three to five steps or scenes"],
            ["Why it is better", "Answer the obvious comparison", "What people use today, and what changes"],
            ["Features with proof", "Back every claim", "Each feature beside a photo, test or number"],
            ["Specs and what is in the box", "Remove doubt about the details", "Size, weight, materials, contents"],
            ["Prototype and progress", "Show what exists today", "Working prototype photos, labeled renders"],
            ["Rewards", "Make the choice easy", "Each tier with contents, price, delivery month"],
            ["Shipping and timeline", "Set delivery expectations", "Regions, when shipping is charged, milestones"],
            ["Team", "Say who is behind it", "Names, experience, anything made before"],
            ["Risks and challenges", "Be honest about what could slip", "Open steps and how you will handle them"],
            ["FAQ", "Answer the questions before they are asked", "Compatibility, warranty, returns, delivery"],
          ],
        },
        visual: {
          kind: "steps",
          title: "Five questions, answered in the order backers ask them",
          steps: [
            { label: "What is it?", detail: "Opening and how it works" },
            { label: "Why this one?", detail: "Comparison and features with proof" },
            { label: "Is it real?", detail: "Specs, prototype and team" },
            { label: "What do I get?", detail: "Rewards and what is in the box" },
            { label: "When does it arrive?", detail: "Shipping, timeline and risks" },
          ],
          caption: "The structure we use for product pages.",
        },
      },
      {
        id: "top",
        title: "Title, main image and the opening section",
        paragraphs: [
          "Kickstarter advises a title that says what the project is about and a subtitle that sums up the campaign. Keep the product name in the title and the benefit in the subtitle. The main image should show the product itself, clearly, because it also appears in search and on shares.",
          "The opening section is the most important part of the page. In one screen it should show the product, say what it does in one line and give the early price or the saving. Secubix is a good example of a product that needs that one line before any feature list: it records the license plate of a car that hits your parked Vespa.",
          "A video is optional. Kickstarter says a project video is not required to launch, though projects with compelling videos tend to succeed at a much higher rate. If you make one, our [campaign video guide](/guides/kickstarter-campaign-video-planning) covers length and planning, and our [image sizes guide](/guides/kickstarter-image-sizes) covers the exports.",
        ],
        source: 0,
      },
      {
        id: "how-it-works",
        title: "How it works, and why it is better",
        paragraphs: [
          "Show the product being used before you list what is inside it. Three to five steps or scenes work well: unbox, set up, use, the moment it solves the problem. A backer should be able to picture owning it from the images alone.",
          "Then answer the comparison every backer is already making. Name what people use today, whether that is a competitor, a cheaper option or nothing at all, and say plainly what your product does differently. Only claim what you can show. If a feature has a test result, a measurement or a certification, put it beside the claim.",
        ],
      },
      {
        id: "proof",
        title: "Specs, what is in the box and the prototype",
        paragraphs: [
          "Specs belong in text as well as graphics, so they survive compression and can be read by search engines. Give size, weight, materials, battery life or capacity, compatibility and anything a buyer would check before paying. Then list exactly what is in the box for each reward.",
          "Kickstarter requires a working prototype for hardware and product design projects and does not allow photorealistic renderings. It also asks creators to explain how they will produce the product and whether they have made anything like it before. So this section shows the real prototype, the stage it is at and the production plan. Our [prototype and risks guide](/guides/kickstarter-prototype-risks-disclosure) covers how to label each image honestly.",
        ],
        list: [
          "Photos or footage of the working prototype",
          "A specs table in plain text",
          "What is in the box, per reward",
          "Certification status, if your product needs it",
          "Your manufacturer stage: quote, sample or production ready",
        ],
        source: 2,
      },
      {
        id: "rewards",
        title: "Rewards, add ons and shipping",
        paragraphs: [
          "Most product pages need only a few rewards: a limited early price, the standard price and a bundle of two or more units. Each tier should show its contents, its price and its delivery month, and the difference between tiers should be visible at a glance. Our [reward tier graphics guide](/guides/kickstarter-reward-tier-graphics) shows how to lay out the comparison.",
          "State where you ship and when shipping is charged, during the campaign or later in a pledge manager. Price every tier with Kickstarter's fees already inside it. Our [shipping and delivery guide](/guides/kickstarter-shipping-delivery-page) covers the wording.",
        ],
      },
      {
        id: "trust",
        title: "Team, risks and the FAQ",
        paragraphs: [
          "Kickstarter asks creators to show how they plan to make the project happen, the progress so far, the budget and the story behind it. The team and risks sections carry most of that. Say who you are, what you have made before and which steps are still open, such as tooling, certification or a final sample.",
          "Kickstarter's own page guide also asks creators to disclose any use of AI, for example in artwork, writing or rendering. Add that note where it applies. Finish with an FAQ that answers the questions backers ask about products: compatibility, warranty, returns, delivery and what happens if a date slips.",
        ],
        source: 0,
      },
      {
        id: "our-page-package",
        title: "What our page package covers",
        paragraphs: [
          "Our campaign page package is a fixed $1,800. It covers the page structure in this order, the copy written from your confirmed specifications, the section graphics built from your product images and the reward presentation. Full campaign support at $5,900 adds prelaunch, ad creative, paid ads and live campaign checks.",
          "Start with our [brief checklist](/guides/kickstarter-campaign-brief) to gather what we need, see our [product campaign page](/kickstarter-product-campaign-design) and [pricing](/campaign-design#pricing), or ask for a free opening section through the [enquiry form](/guides/product-kickstarter-page#start-project).",
        ],
        source: 4,
      },
    ],
    faqs: [
      { question: "What sections does a product Kickstarter page need?", answer: "An opening section, how it works, why it is better, features with proof, specs and what is in the box, the prototype and progress, rewards, shipping and timeline, the team, risks and challenges, and an FAQ." },
      { question: "Can I use renders on a product Kickstarter page?", answer: "Kickstarter does not allow photorealistic renderings for hardware and product design projects and requires a working prototype. Show real photos of the prototype, and label any other render clearly." },
      { question: "Does a product Kickstarter need a video?", answer: "No. Kickstarter says a video is not required to launch, though projects with compelling videos tend to succeed at a much higher rate." },
      { question: "How long should a product Kickstarter page be?", answer: "Long enough to answer what it is, how it works, what proof exists, what each reward includes and when it arrives. We cut any section that does not help with one of those." },
    ],
  },
  {
    published: date,
    updated: date,
    slug: "kickstarter-funding-goal",
    title: "How to Set Your Kickstarter Funding Goal",
    seoTitle: "How to Set Your Kickstarter Funding Goal",
    description: "Set a Kickstarter funding goal from what it costs to deliver, plus fees and a reserve, then check it against how many backers you can reach. Worked example.",
    tag: "Start here",
    answer: "Set your Kickstarter funding goal at the smallest amount that still lets you make and deliver every reward: your minimum order, freight, fulfillment and a reserve, divided by the share of each pledge you keep after fees. Then divide the goal by your expected average pledge and check you can reach that many backers, because Kickstarter does not let you change the goal after launch.",
    relatedSlugs: ["kickstarter-product-campaign-cost", "kickstarter-fees", "kickstarter-followers-before-launch", "board-game-kickstarter-funding-goal"],
    servicePath: "/campaign-design",
    serviceLabel: "Kickstarter campaign page design",
    sources: [
      { label: "How to set the right funding goal for your Kickstarter campaign", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236709-how-to-set-the-right-funding-goal-for-your-kickstarter-campaign" },
      editAfterLaunch,
      allOrNothing,
      kickstarterFees,
      { label: "How do I relaunch a project?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236727-how-do-i-relaunch-a-project" },
      { label: "Q1 2026 crowdfunding report", publisher: "TCF", href: "https://www.tcf.team/blog/q1-2026-crowdfunding-report" },
      payout,
    ],
    sections: [
      {
        id: "rules",
        title: "Three platform rules that shape the goal",
        paragraphs: [
          "Kickstarter funding is all or nothing. If the campaign ends short of the goal, backers are not charged and you receive nothing. If it succeeds, pledges are collected and you have to deliver every reward, whatever the total.",
          "Once you launch, you cannot change the funding goal or the deadline. And Kickstarter's own guidance is that the goal should cover what you need to complete the project, including its fees, not what you hope to raise. It also notes that the larger the goal, the lower the success rate.",
          "Put together, those rules point one way: the goal is the smallest amount that lets you deliver, worked out before launch and checked against the audience you have.",
        ],
        source: 0,
      },
      {
        id: "need",
        title: "Add up what you need to deliver",
        paragraphs: [
          "Start from the cost of fulfilling every reward at the funding goal itself, not at a hoped for total. The biggest line is usually the minimum order: the factory minimum for a product, the print run for a book or the minimum for a game. If the minimum is larger than the number of backers at your goal, the unsold units still have to be paid for.",
          "Leave out money already spent, such as the prototype, unless you need it back to deliver. Kickstarter collects and processes pledges for 14 calendar days after the deadline before paying out, so also note which bills arrive before the payout.",
        ],
        list: [
          "Manufacturing or printing at your real minimum order",
          "Tooling, setup or plate costs",
          "Packaging",
          "Freight and import duties",
          "Fulfillment and shipping, unless charged separately",
          "Any certification still to pay for",
          "A reserve for price changes and failed pledges",
        ],
        source: 6,
      },
      {
        id: "fees",
        title: "Divide by the share you keep",
        paragraphs: [
          "Fees come out of the total you raise, so add them on top of the need rather than inside it. On a US project, Kickstarter takes 5%, and processing is 3% plus $0.20 per pledge. Work out what you keep from your average pledge, then divide your need by that share.",
          "As an illustrative example: you need $20,000 and expect an average pledge of $75. Fees on each pledge are $3.75 plus $2.25 plus $0.20, so $6.20, and you keep $68.80, which is about 91.7%. $20,000 divided by 0.917 is about $21,800, so a goal of $22,000 covers the fees with a little room.",
        ],
        visual: {
          kind: "steps",
          title: "Example: a $20,000 need becomes a $22,000 goal",
          steps: [
            { label: "Add up the need", detail: "$20,000 to make and deliver every reward" },
            { label: "Find the share you keep", detail: "$68.80 of a $75 pledge, about 91.7%" },
            { label: "Divide and round up", detail: "$20,000 / 0.917 = about $21,800, so $22,000" },
            { label: "Count the backers", detail: "$22,000 / $75 = 294 backers needed" },
          ],
          caption: "Illustrative example using Kickstarter's published US rates. Replace every number with your own.",
          source: "Kickstarter fee page, checked November 26, 2026",
        },
        source: 3,
      },
      {
        id: "backers",
        title: "Check the goal against your audience",
        paragraphs: [
          "Divide the goal by your average pledge to get the number of backers you need. In the example, $22,000 at $75 is 294 backers. Then ask whether your email list, followers and community can plausibly bring that many people. Our guide on [followers before launch](/guides/kickstarter-followers-before-launch) uses published conversion figures to test it.",
          "It also helps to know that most successful campaigns are small. In TCF's sample of campaigns from the first quarter of 2026, the median successful Kickstarter raised $7,060, against an average of $64,567 pulled up by a few very large projects. A modest goal that you can deliver is normal.",
          "If the backer count looks out of reach, the answer is not a lower goal on paper. Change the plan: a smaller minimum order, fewer reward options, a longer prelaunch or a higher average pledge through a bundle.",
        ],
        source: 5,
      },
      {
        id: "by-category",
        title: "Goals for products, games and books",
        paragraphs: [
          "The method is the same in every category. What changes is the biggest number in the need. For an everyday product it is usually the factory minimum, tooling and any certification. For a tabletop game it is the factory minimum and freight on a heavy box. For a book it is the print run, which depends on page count, format and binding.",
          "Tabletop creators can use the calculator in our [board game funding goal guide](/guides/board-game-kickstarter-funding-goal). Product creators will find every other budget line in our [product campaign cost guide](/guides/kickstarter-product-campaign-cost).",
        ],
      },
      {
        id: "mistakes",
        title: "Common goal mistakes",
        paragraphs: [
          "We see the same few mistakes on first campaigns. Each one is easy to catch with a sheet and an hour.",
        ],
        list: [
          "Setting the goal to what you hope to raise, not what you need",
          "Setting an artificially low goal and then having to deliver at a loss",
          "Leaving the fees out, or taking them from the need instead of adding them",
          "Forgetting unsold units in the minimum order",
          "Leaving out freight, duties or shipping you will not collect",
          "Spending on ads before checking the backer count is reachable",
        ],
      },
      {
        id: "help",
        title: "If you miss the goal, and where we help",
        paragraphs: [
          "If the campaign ends short, backers are not charged and Kickstarter takes no fees. You can relaunch as a new project with a new URL and a different title, copying content and rewards from the first one, but pledges do not carry over.",
          "We set the goal with you as part of full campaign support at $5,900, in the same sheet as the reward prices and the ad budget. The campaign page package at $1,800 builds the page around the goal you set. See the [pricing](/campaign-design#pricing) or send your numbers through the [enquiry form](/guides/kickstarter-funding-goal#start-project) and we will look at them with you.",
        ],
        source: 4,
      },
    ],
    faqs: [
      { question: "What should my Kickstarter funding goal be?", answer: "The smallest amount that lets you make and deliver every reward, including your minimum order, freight, fulfillment and a reserve, divided by the share of each pledge you keep after fees." },
      { question: "Can I change my Kickstarter funding goal after launch?", answer: "No. Kickstarter says that once you launch, you cannot change your funding goal or deadline." },
      { question: "Should I set a low goal so the campaign funds faster?", answer: "Only if the low goal still covers delivery. If the campaign funds, you have to deliver every reward, so a goal set below your real need can leave you making rewards at a loss." },
      { question: "Do Kickstarter fees come out of the funding goal?", answer: "Fees come out of the total you raise, so add them on top of what you need. On a US project with a $75 average pledge, you keep about 91.7% of each pledge." },
      { question: "What happens if I miss my funding goal?", answer: "Backers are not charged, you receive no funds and Kickstarter takes no fees. You can relaunch as a new project with a new URL and a different title." },
    ],
  },
  {
    published: date,
    updated: date,
    slug: "kickstarter-version-two",
    title: "Launching Version Two: How to Crowdfund the Next Model of Your Product",
    seoTitle: "Second Kickstarter for Version Two of a Product",
    description: "How to crowdfund version two of a product you already sell: what Kickstarter allows, how to show what changed, offers for past customers and stock planning.",
    tag: "Products",
    answer: "You can crowdfund the next model of a product you already sell, as long as the new version is what the campaign creates: Kickstarter does not allow something already on sale elsewhere to be a project's end goal, though the current model can appear as a reward. Lead the page with what changed and why, show a working prototype of version two, and tell your existing customers first, because they already know the product.",
    relatedSlugs: ["product-kickstarter-page", "kickstarter-product-campaign-cost", "kickstarter-funding-goal", "kickstarter-vs-indiegogo"],
    servicePath: "/kickstarter-product-campaign-design",
    serviceLabel: "Kickstarter campaign design for products",
    sources: [
      { label: "Can Kickstarter be used to fund anything?", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236681-can-kickstarter-be-used-to-fund-anything" },
      hardwareRules,
      payout,
      editAfterLaunch,
      studioPricing,
    ],
    sections: [
      {
        id: "rules",
        title: "What Kickstarter allows for a new version",
        paragraphs: [
          "Kickstarter says projects are launched to create something new, and that it does not permit offering something already available elsewhere as a project's end goal. Its own example is a cookbook: if you are already selling one, it should not be the end goal, but if you are making a second cookbook, the first can be offered as a reward.",
          "For a product, that means the campaign funds version two, and version one can sit in the rewards, for example in a bundle. A campaign that only sells existing stock at a discount does not fit the rules.",
          "The product rules still apply. Hardware and product design creators must show a working prototype of what they are funding, cannot use photorealistic renderings and must explain how they will produce it and whether they have made anything like it before. That last point is where a second launch is strong: you can show that you have.",
        ],
        source: 0,
      },
      {
        id: "what-changed",
        title: "Lead with what changed",
        paragraphs: [
          "A backer who knows version one will ask one question first: what is different? A backer who does not will ask why they should not just buy the current model. The opening section has to answer both, so lead with the changes and the reason behind each one.",
          "The best evidence usually comes from your own customers. Reviews, support questions and returns show what people wanted fixed. Saying that a change came from customer feedback is more convincing than a list of upgrades, as long as you can show where the feedback came from.",
        ],
        table: {
          headers: ["Question backers ask", "What the page shows"],
          rows: [
            ["What is new?", "Each change, with a photo of version two"],
            ["Why did you change it?", "The customer feedback or test behind each change"],
            ["What stays the same?", "The parts and features people already liked"],
            ["Does it work with what I own?", "Compatibility with version one accessories or parts"],
            ["Should I wait or buy version one now?", "How the two will be priced and sold after the campaign"],
          ],
        },
        visual: {
          kind: "checklist",
          title: "A version two page answers owners and newcomers at once",
          groups: [
            { name: "For owners", items: ["What changed and why", "Compatibility", "A reward that suits them"] },
            { name: "For newcomers", items: ["What the product does", "Proof from version one", "The early price"] },
            { name: "For both", items: ["Working prototype of version two", "Production plan", "Delivery month"] },
          ],
        },
      },
      {
        id: "customers",
        title: "Your existing customers are the first audience",
        paragraphs: [
          "A first time creator starts from strangers. You start from people who have bought from you. Email the customers who agreed to hear from you before launch, invite them to follow the prelaunch page and ask them what would make them back version two.",
          "Give owners a reason to pledge on day one, such as an early tier or a bundle that pairs well with what they already have. Use your track record on the page: delivery history, units sold and reviews, each with its source. Those are the facts a first launch cannot show, and Kickstarter's product rules ask for them.",
        ],
        source: 1,
      },
      {
        id: "stock",
        title: "Plan around the stock you still sell",
        paragraphs: [
          "Announcing version two can slow sales of version one. Count the stock you hold before you announce, decide whether to sell it through, bundle it in the campaign or keep it as the cheaper model, and set the dates around that plan.",
          "Cash timing matters too. Kickstarter collects and processes pledges for 14 calendar days after the deadline before paying out, so any factory deposit for version two before then comes from your own funds or from version one sales. Put both into the same budget, and set the goal for version two on its own costs, as our [funding goal guide](/guides/kickstarter-funding-goal) explains.",
          "Once launched, the goal and the deadline cannot be changed, and rewards that backers have chosen are locked. So settle the version one offer before launch rather than adding it halfway through.",
        ],
        source: 2,
      },
      {
        id: "timeline",
        title: "A version two launch, step by step",
        paragraphs: [
          "The order below is how we plan a second product launch. The dates depend on your factory and your stock, so we agree them with you rather than assume them.",
        ],
        visual: {
          kind: "steps",
          title: "Seven steps from feedback to the version two launch",
          steps: [
            { label: "Collect feedback", detail: "Reviews, support questions and returns" },
            { label: "Prototype version two", detail: "Working, filmable and photographed" },
            { label: "Plan version one stock", detail: "Sell through, bundle or keep" },
            { label: "Tell your customers", detail: "Email and a prelaunch page to follow" },
            { label: "Build the page", detail: "What changed, proof and rewards" },
            { label: "Launch", detail: "Owners first, then new backers" },
            { label: "Update the shop", detail: "After the campaign, not during it" },
          ],
          caption: "Guildframe planning order for a second product campaign.",
        },
      },
      {
        id: "help",
        title: "Where we help",
        paragraphs: [
          "We build version two pages at the same fixed prices as first launches: $1,800 for the campaign page and $5,900 for full campaign support, which adds the prelaunch page and emails to your existing customers, ad creative, paid ads and live campaign checks. Ad spend and production stay separate.",
          "Our [section by section guide to a product page](/guides/product-kickstarter-page) shows the structure, and our [brief checklist](/guides/kickstarter-campaign-brief) lists what to send. See the [product campaign page](/kickstarter-product-campaign-design), the [pricing](/campaign-design#pricing), or tell us about version two through the [enquiry form](/guides/kickstarter-version-two#start-project).",
        ],
        source: 4,
      },
    ],
    faqs: [
      { question: "Can I put a product that is already for sale on Kickstarter?", answer: "Not as the end goal. Kickstarter does not permit offering something already available elsewhere as a project's end goal. A new version can be the goal, and the existing product can be offered as a reward." },
      { question: "Should I offer version one as a reward?", answer: "It can work, for example in a bundle or as a cheaper tier, if you have the stock. Decide before launch, because rewards that backers have chosen cannot be changed once the campaign is live." },
      { question: "Will a Kickstarter for version two hurt sales of version one?", answer: "It can. Count your stock before you announce, decide whether to sell it through, bundle it or keep it as the cheaper model, and time the announcement around that." },
      { question: "Do I need a new prototype for version two?", answer: "Yes. Kickstarter requires hardware and product design creators to show a working prototype of what they are funding and does not allow photorealistic renderings." },
    ],
  },
];

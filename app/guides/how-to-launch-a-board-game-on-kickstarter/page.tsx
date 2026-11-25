import Link from "next/link";
import { ArticleCallout, SeoArticlePage } from "../../components/SeoArticlePage";
import { GuideVisual, type GuideVisualData } from "../../components/GuideVisual";
import { GuideInlineText, plainGuideText } from "../../components/GuideInlineText";
import { pageMetadata } from "../../site-config";
import { contentDates } from "../../content-dates";

const slug = "how-to-launch-a-board-game-on-kickstarter";
const title = "The Complete Guide to Launching a Tabletop Kickstarter, A to Z";
const seoTitle = "How to Launch a Board Game on Kickstarter";
const metaDescription =
  "How to launch a board game on Kickstarter, from prototype and budget to page, marketing, launch day, shipping and delivery. Plain answers for first timers.";
const heroDescription =
  "Every stage of a tabletop Kickstarter in the order you meet it, from a tested prototype to the last box delivered. Each chapter gives a plain answer and points to the guide that goes deeper.";
const answer =
  "To launch a tabletop game on Kickstarter, you finish the game far enough to show it, work out what it costs to make and ship, and build a page and an audience before launch day. Then you run the campaign for a few weeks, collect the money, and manufacture and deliver the rewards. Most of the work that decides the result happens before you press launch.";

export const metadata = pageMetadata({
  title: seoTitle,
  description: metaDescription,
  path: `/guides/${slug}`,
  kind: "article",
  publishedTime: contentDates.howToLaunch,
  modifiedTime: contentDates.howToLaunch,
  keywords: [
    "how to launch a board game on Kickstarter",
    "how to start a Kickstarter for a board game",
    "how to kickstart a board game",
    "Kickstarter guide for board games",
    "step by step guide to launching a Kickstarter",
  ],
});

const sources = [
  {
    label: "From Concept to Fulfillment: The Complete Kickstarter Journey (9 September 2026)",
    publisher: "Kickstarter",
    href: "https://updates.kickstarter.com/from-concept-to-fulfillment-the-complete-kickstarter-journey/",
  },
  {
    label: "Why Kickstarter Campaigns Fail After Funding (And How to Avoid It) (3 June 2026)",
    publisher: "Kickstarter",
    href: "https://updates.kickstarter.com/why-kickstarter-campaigns-fail-after-funding-and-how-to-avoid-it/",
  },
  {
    label: "How To Market a Tabletop Game in 7 Steps (20 February 2025)",
    publisher: "Kickstarter",
    href: "https://updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps/",
  },
  {
    label: "Kickstarter fees for creators",
    publisher: "Kickstarter",
    href: "https://www.kickstarter.com/help/fees",
  },
  {
    label: "Kickstarter is the biggest platform for games (5 February 2025)",
    publisher: "Kickstarter",
    href: "https://updates.kickstarter.com/kickstarter-biggest-platform-for-games/",
  },
  {
    label: "My project is awaiting review. How does this work?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236415-my-project-is-awaiting-review-how-does-this-work",
  },
  {
    label: "How do I launch my project after it's been approved?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236427-how-do-i-launch-my-project-after-it-s-been-approved",
  },
  {
    label: "What is the maximum project duration?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236742-what-is-the-maximum-project-duration",
  },
  {
    label: "Is a project video required to launch?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236743-is-a-project-video-required-to-launch",
  },
  {
    label: "Setting up your project's prelaunch page",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page",
  },
  {
    label: "If my project is successfully funded, how do I receive my funds?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/hc/en-us/articles/360010120934-If-my-project-is-successfully-funded-how-do-I-receive-my-funds",
  },
  {
    label: "How do I add late pledges to my project?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236699-how-do-i-add-late-pledges-to-my-project",
  },
  {
    label: "How do I use Kickstarter's Pledge Manager?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236383-how-do-i-use-kickstarter-s-pledge-manager",
  },
  {
    label: "Can I charge a tariff surcharge through the pledge manager?",
    publisher: "Kickstarter Support",
    href: "https://help.kickstarter.com/en-us/articles/16236621-can-i-charge-a-tariff-surcharge-through-the-pledge-manager",
  },
  {
    label: "VAT Flexibility in Pledge Manager (release note, 13 April 2026)",
    publisher: "Kickstarter",
    href: "https://start.kickstarter.com/kickstarter-release-notes/vat-flexibility-in-pledge-manager",
  },
  {
    label: "Getting started with pledge manager and late pledge",
    publisher: "Gamefound Help",
    href: "https://help.gamefound.com/article/299-getting-started-with-pledge-manager-and-late-pledge-for-imported-projects",
  },
  {
    label: "Adfound fees and billing",
    publisher: "Gamefound Help",
    href: "https://help.gamefound.com/article/415-adfound-fees-and-billing",
  },
  {
    label: "Fees for projects funded on Gamefound",
    publisher: "Gamefound Help",
    href: "https://help.gamefound.com/article/284-fees-for-projects-funded-on-gamefound",
  },
];

const timeline: GuideVisualData = {
  kind: "timeline",
  title: "Most of a Kickstarter happens before launch day and after the last pledge",
  events: [
    { when: "6 to 12 months before", label: "Finish the game", detail: "Playtest, start final art, ask manufacturers for quotes" },
    { when: "4 to 6 months before", label: "Set the numbers", detail: "Budget, funding goal, reward prices and platform" },
    { when: "3 to 4 months before", label: "Open the doors", detail: "Prelaunch page and email signup live, start showing the game" },
    { when: "2 to 3 months before", label: "Build the page", detail: "Page design, video, prototypes out to reviewers" },
    { when: "4 to 6 weeks before", label: "Test and share", detail: "Small capped ad tests if you use ads, preview link out for feedback" },
    { when: "1 to 2 weeks before", label: "Submit for review", detail: "Review takes up to 3 business days, launch emails written" },
    { when: "Launch day", label: "Press launch yourself", detail: "Kickstarter emails your prelaunch followers", highlight: true },
    { when: "Live campaign", label: "Run the campaign", detail: "1 to 60 days allowed, 30 days or less recommended" },
    { when: "0 to 2 months after", label: "Collect and confirm", detail: "Payout begins 14 days after the deadline, then late pledges and the pledge manager" },
    { when: "2 to 12 months after", label: "Make and deliver", detail: "Manufacturing, freight and delivery, about twelve months with an overseas factory" },
    { when: "After delivery", label: "Keep selling", detail: "A store, restocks and the next campaign" },
  ],
  caption:
    "Guildframe example timeline, adjust to your project. The months before launch are our planning ranges for a first board game, not a Kickstarter rule. Review time, campaign length, payout timing and the twelve month delivery window come from Kickstarter.",
  source: "Kickstarter Support and the Kickstarter blog (June and September 2026), checked 25 Nov 2026",
};

const benchmark: GuideVisualData = {
  kind: "stats",
  title: "Four in five tabletop projects on Kickstarter funded in 2024",
  stats: [
    { value: "6,646", label: "Tabletop projects launched", note: "Kickstarter figure for 2024" },
    { value: "5,314", label: "Reached their goal", note: "About four in five launches" },
    { value: "80%", label: "Success rate", note: "Kickstarter called it the highest in its 15 year history" },
    { value: "$220M", label: "Pledged to successful campaigns", note: "Across every funded tabletop project" },
  ],
  caption:
    "These figures cover every tabletop project, including small zines and repeat creators with large lists, so they describe the category, not your odds.",
  source: "Kickstarter, February 2025, checked 25 Nov 2026",
};

const budget: GuideVisualData = {
  kind: "split",
  title: "Example: where the money goes on a $30,000 board game campaign",
  total: "Illustrative example: $30,000 raised",
  parts: [
    { label: "Manufacturing", share: 11000, display: "$11,000" },
    { label: "Reserve for surprises (20% of the raise)", share: 6000, display: "$6,000" },
    { label: "Shipping and fulfillment", share: 5450, display: "$5,450" },
    { label: "Kickstarter and payment fees (750 pledges at $40)", share: 2550, display: "$2,550" },
    { label: "Marketing and ads", share: 2500, display: "$2,500" },
    { label: "Art, page and reviewer samples", share: 2500, display: "$2,500" },
  ],
  caption:
    "Illustrative example, not an average. Only two figures come from a source. Kickstarter says it and its payment partners take 8 to 10 percent of funds, and it suggests a buffer of 20 to 30 percent on your fulfillment estimate. The fees use the US rates (5% plus 3% and $0.20 per pledge), and our 20% reserve of the raise covers that buffer. Every other share is a Guildframe example, the same one used in our board game cost guide.",
  source: "Kickstarter blog, June 2026, checked 25 Nov 2026",
};

const afterFunding: GuideVisualData = {
  kind: "steps",
  title: "After funding, the money and the games arrive in stages",
  steps: [
    { label: "Campaign ends funded", detail: "Kickstarter collects pledges and some payments fail" },
    { label: "Payout begins", detail: "14 days after the campaign deadline" },
    { label: "Pledge manager and late pledges", detail: "Kickstarter's example keeps the survey open at least a month" },
    { label: "Manufacturing and freight", detail: "Sample checked, files approved, freight booked" },
    { label: "Delivery", detail: "About twelve months after the campaign with an overseas factory" },
  ],
  source: "Kickstarter Support and the Kickstarter blog, checked 25 Nov 2026",
};

type Chapter = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: { lead: string; items: string[] };
  visual?: GuideVisualData;
  afterVisual?: string[];
  nextLead: string;
  next: { href: string; label: string }[];
};

type Stage = { id: string; label: string; chapters: Chapter[] };

const stages: Stage[] = [
  {
    id: "before",
    label: "Before you build the campaign",
    chapters: [
      {
        id: "ready",
        title: "Is my game ready for Kickstarter?",
        paragraphs: [
          "Your game is ready for Kickstarter when it is tested, you can photograph a prototype that looks like the real thing, and you have a manufacturing quote. Kickstarter comes near the end of making a game, not at the start.",
          "Backers are buying a promise, so they want to see a finished design. That means rules that strangers have played without you in the room, art that shows the final look, and a component list you can price. Not every card needs final art, but the box, the board and enough cards to show the style should be done.",
          "The quote matters more than first timers expect. Without one you can't set a funding goal or a reward price, so every number on the page turns into a guess.",
          "If you show a prototype, say so clearly in the images and in your risks section. Our [prototype and risks guide](/guides/kickstarter-prototype-risks-disclosure) covers how to label it so backers trust what they see.",
          "We ask one question before anything else. Could you tell a stranger what is in the box and what it costs to make? If not, you are still making the game, and that is fine.",
        ],
        nextLead: "For the full readiness check, read",
        next: [
          { href: "/guides/is-my-game-ready-for-kickstarter", label: "is my game ready for Kickstarter" },
          { href: "/guides/kickstarter-prototype-risks-disclosure", label: "showing a prototype and writing the risks section" },
        ],
      },
      {
        id: "how-it-works",
        title: "How does Kickstarter work for a first time creator?",
        paragraphs: [
          "Kickstarter is all or nothing. You set a funding goal and a deadline, backers pledge, and you only collect the money if the total reaches the goal by the deadline.",
          "If the project doesn't fund, nobody is charged and Kickstarter takes no fees. If it does fund, Kickstarter collects the pledges, takes its fees and starts the payout 14 days after the campaign ends. So the money arrives after the campaign, and you can't use pledges to pay for the campaign itself.",
          "In return you owe every backer the reward they pledged for. That is the part people forget. A funded campaign is a stack of preorders that you now have to make, pack and ship.",
          "Tabletop does well on the platform. Kickstarter reported 6,646 tabletop projects launched in 2024, with 5,314 funded and $220 million pledged to the ones that succeeded.",
        ],
        visual: benchmark,
        afterVisual: [
          "That 80% covers everything from a small zine to a publisher with a list of thousands, so it tells you the category is healthy, not that your game will fund. Treat Kickstarter as a way to sell a game before you make it, with a deadline that keeps everyone honest.",
        ],
        nextLead: "For the platform basics in plain answers, read",
        next: [
          { href: "/guides/kickstarter-for-beginners", label: "Kickstarter for beginners" },
          { href: "/resources/kickstarter-tabletop-games-benchmark", label: "the Kickstarter tabletop benchmark" },
        ],
      },
      {
        id: "your-game",
        title: "Which guide fits my kind of game?",
        paragraphs: [
          "The journey is the same for every tabletop category, but the details change with what you make. A card game, a TTRPG and a set of STL files have different costs, different backers and different pages.",
        ],
        list: {
          lead: "If your project is one of these, read its own guide alongside this one.",
          items: [
            "[Card game launch guide](/guides/card-game-kickstarter-launch-guide) for smaller boxes, lighter shipping and pages built around card art.",
            "[TCG launch guide](/guides/tcg-kickstarter-launch-guide) for booster contents, rarity and the questions collectors ask before they pledge.",
            "[TTRPG launch guide](/guides/ttrpg-kickstarter-launch-guide) for PDF and print editions and what tabletop roleplayers expect to see.",
            "[Miniatures and STL launch guide](/guides/miniatures-stl-kickstarter-launch-guide) for physical models, digital files and how to show both on one page.",
            "[Terrain and dice launch guide](/guides/terrain-and-dice-kickstarter-launch-guide) for accessories, sets and photos that show scale.",
          ],
        },
        afterVisual: [
          "Everything else in this guide applies to all of them, so come back here for the order of work.",
        ],
        nextLead: "If you make a board game, the rest of this guide is your route, and the page side is covered in",
        next: [{ href: "/board-game-kickstarter-campaign-design", label: "board game Kickstarter campaign design" }],
      },
      {
        id: "platform",
        title: "Should I launch on Kickstarter or Gamefound?",
        paragraphs: [
          "Most first tabletop games launch on Kickstarter, and for a creator without a hobby audience yet that is usually the right call. It is a general crowdfunding site, so people browsing beyond hobby gaming can find your game there too.",
          "Gamefound is built for tabletop. Stretch goals, a late pledge stage, a pledge manager and its own ad service sit in one system, and its crowd is tabletop players by design. That suits creators who already sell to hobby gamers and want one login from campaign to delivery.",
          "Fees rarely decide it. Both platforms take a 5% platform fee on the money collected, plus payment processing, so the choice comes down to where your backers already are and how you want to run the months after funding.",
          "If you can't decide, launch where your existing followers already back games.",
        ],
        nextLead: "For the full comparison, read",
        next: [
          { href: "/guides/kickstarter-vs-gamefound", label: "Kickstarter vs Gamefound for board games" },
          { href: "/gamefound-launch-services", label: "Gamefound launch services for tabletop games" },
        ],
      },
    ],
  },
  {
    id: "money",
    label: "Money",
    chapters: [
      {
        id: "cost",
        title: "How much does it cost to launch a board game on Kickstarter?",
        paragraphs: [
          "Launching costs money before a single pledge arrives. You pay for art, prototypes, reviewer samples, the campaign page, any video and any ads up front, and the pledges only pay you back after the campaign ends.",
          "Then most of the campaign money is already spoken for. The biggest share goes to manufacturing and shipping, a slice goes to fees, and a sensible plan keeps a reserve for things that go wrong. Kickstarter's own advice is to add a buffer of 20 to 30 percent to your fulfillment estimate.",
          "The example below shows one way a $30,000 campaign might split. It is an illustration, not an average, and your own split depends on your components, your print run and where your backers live.",
        ],
        visual: budget,
        afterVisual: [
          "What first timers get wrong is leaving out a line, usually shipping, fees or the reserve. Then the campaign funds and still loses money. If you plan to hire help, our [Kickstarter agency cost guide](/guides/kickstarter-agency-cost) and [campaign design cost guide](/guides/board-game-kickstarter-campaign-design-cost) show what outside work costs.",
          "So build the budget before you set the goal, and let the goal come from the numbers.",
        ],
        nextLead: "For the whole budget line by line, read",
        next: [
          { href: "/guides/board-game-kickstarter-cost", label: "how much it costs to launch a board game on Kickstarter" },
          { href: "/guides/kickstarter-agency-cost", label: "Kickstarter agency cost" },
        ],
      },
      {
        id: "fees",
        title: "What fees does Kickstarter take?",
        paragraphs: [
          "Kickstarter takes 5% of the total raised, plus payment processing, which for a US project is 3% plus $0.20 per pledge. If the project doesn't fund, there are no fees at all.",
          "Kickstarter's own blog puts the combined platform and payment share at 8 to 10 percent of funds, which makes a sensible planning figure. Pledges under $10 use a micropledge rate of 5% plus $0.05, and that matters if you offer PDF or supporter tiers.",
          "Fees carry on after the campaign. Late pledges carry the same fees as campaign pledges, and Kickstarter deducts its usual fees from payments made in its pledge manager, so shipping you collect there sits inside the fee base too.",
          "Put fees in the budget as a share of everything you collect, not only the goal.",
        ],
        nextLead: "For worked examples by pledge size, read",
        next: [{ href: "/guides/kickstarter-fees", label: "Kickstarter fees explained for tabletop creators" }],
      },
      {
        id: "goal",
        title: "How do I set my funding goal?",
        paragraphs: [
          "Your funding goal is the least you need, after fees, to make and ship the smallest print run you would be happy to deliver. It is not a sales target, and it is not the number you hope to raise.",
          "Work it out from the budget. Add the cost of that smallest run, the shipping you won't collect separately, the fees and a reserve, then check the total against how many backers you can realistically bring in during the first days.",
          "First timers go wrong in both directions. A goal set too high fails in public. A goal set artificially low funds fast, then leaves you making games at a loss.",
          "A goal you can defend line by line is the one to launch with.",
        ],
        nextLead: "To work your goal out with a calculator, read",
        next: [{ href: "/guides/board-game-kickstarter-funding-goal", label: "how to set a board game Kickstarter funding goal" }],
      },
      {
        id: "pricing",
        title: "How do I price my game and rewards?",
        paragraphs: [
          "Price from the landed cost up. Landed cost is what one copy costs you once it is made, packed and sitting in the warehouse that ships it, and each reward price has to cover that, the fees and a margin.",
          "Then keep the reward tiers few and easy to compare. Most board game backers want to see quickly what the core game costs, what the deluxe pledge adds and how shipping works. An add on is an extra item a backer can buy on top of a pledge, and it is often a cleaner way to offer extras than another tier.",
          "The common mistake is copying another campaign's prices without knowing its costs. Their price came from their print run and their components, so copying it copies none of the math behind it.",
          "If a tier doesn't cover its own landed cost and fees, it is a discount you are paying for.",
        ],
        nextLead: "For pricing and how to show tiers clearly, read",
        next: [
          { href: "/guides/board-game-kickstarter-reward-pricing", label: "board game Kickstarter reward pricing" },
          { href: "/guides/kickstarter-reward-tier-graphics", label: "reward tier graphics" },
        ],
      },
    ],
  },
  {
    id: "page",
    label: "The campaign page",
    chapters: [
      {
        id: "page-design",
        title: "How do I design the campaign page?",
        paragraphs: [
          "A good campaign page answers four questions in the order a backer asks them. What is this game, how does it play, what do I get, and why should I trust you?",
          "The top needs a clear project image, a title and subtitle that say what kind of game it is, and an opening section that shows the game on the table. Below that comes one turn of play rather than the whole rulebook, then everything in the box and a reward comparison.",
          "Most first pages go wrong with walls of text, tiny type inside images that nobody can read on a phone, and prices that sit far from the rewards they describe. Graphics should also be sized for Kickstarter's layout, and our [image sizes guide](/guides/kickstarter-image-sizes) lists the current numbers.",
          "Page design is the work we do most. We offer a free opening mockup of the top section using your own artwork, so you can see the difference before you pay anything.",
          "Before launch, run the finished page against our [board game page checklist](/guides/board-game-kickstarter-page-checklist).",
        ],
        nextLead: "To build the page section by section, read",
        next: [
          { href: "/guides/how-to-design-a-kickstarter-page", label: "how to design a Kickstarter page" },
          { href: "/guides/board-game-kickstarter-gameplay-rulebook", label: "showing gameplay and the rulebook" },
          { href: "/campaign-design", label: "Kickstarter campaign design" },
        ],
      },
      {
        id: "video",
        title: "Do I need a video?",
        paragraphs: [
          "Kickstarter says a project video is not required to launch, but it also notes that projects with compelling videos tend to succeed at a higher rate. For a tabletop game, a short video is usually worth making.",
          "Short and clear beats polished. Show the box, a few moments of real play and you explaining why you made the game. A phone, good light and a steady stand will get you most of the way.",
          "Where money helps is the product shots. Rendered components, short motion clips and cut downs for ads can lift a page, especially when your prototype doesn't look final yet.",
          "Plan the video around the page, so the two tell the same story.",
        ],
        nextLead: "For a video plan that fits your page, read",
        next: [
          { href: "/guides/kickstarter-campaign-video-planning", label: "Kickstarter campaign video planning" },
          { href: "/campaign-creative", label: "Kickstarter campaign creative for tabletop games" },
        ],
      },
    ],
  },
  {
    id: "audience",
    label: "The audience",
    chapters: [
      {
        id: "prelaunch",
        title: "What is a prelaunch page and how many followers do I need?",
        paragraphs: [
          "A prelaunch page is a Kickstarter page that goes up before the campaign, with a button that lets people follow it. When you launch, Kickstarter sends a launch email to every follower.",
          "Put it up early, usually months before launch, and send everyone who shows interest to it. Pair it with an email signup you own, because Kickstarter's launch email is one message, while your own list can hear from you every week.",
          "Followers are also your best readiness signal. The count, and how fast it grows, tells you whether launch day will start strong or quiet. Our [followers guide](/guides/kickstarter-followers-before-launch) covers the targets and the conversion to expect, so we won't repeat them here.",
          "If the follower count barely moves for weeks, fix the audience before you fix the date.",
        ],
        nextLead: "To set up the page and the list, read",
        next: [
          { href: "/guides/kickstarter-prelaunch-page-guide", label: "the Kickstarter prelaunch page guide" },
          { href: "/guides/kickstarter-followers-before-launch", label: "how many followers you need before launch" },
          { href: "/guides/kickstarter-prelaunch-email-list", label: "building a prelaunch email list" },
          { href: "/guides/kickstarter-prelaunch-page-vs-landing-page", label: "prelaunch page or your own landing page" },
        ],
      },
      {
        id: "marketing",
        title: "How do I market my campaign?",
        paragraphs: [
          "Marketing a Kickstarter means getting a few hundred of the right people to know your game exists before launch day. It starts months before launch, and for most first timers it is the part that decides the result.",
          "Start with who the game is for, then pick two or three channels you can keep up every week. For a board game that might be a Discord or Facebook group where your players already talk, short videos of play, [reviewers and previewers](/guides/board-game-reviewer-outreach), and game nights or conventions.",
          "Kickstarter's own marketing advice for tabletop lists building an online community before launch as one of its seven steps, alongside playtesting with the right audience. That matches what we see, because games with an engaged group behind them start faster.",
          "The mistake is trying every channel at once and keeping none of them up. Three channels kept up every week beat ten tried once.",
        ],
        nextLead: "For the channels in order, and then the full schedule, read",
        next: [
          { href: "/guides/how-to-market-a-kickstarter", label: "how to market a Kickstarter" },
          { href: "/guides/board-game-kickstarter-marketing-plan", label: "board game Kickstarter marketing plan" },
          { href: "/guides/how-to-get-kickstarter-backers", label: "how to get your first Kickstarter backers" },
          { href: "/kickstarter-prelaunch-marketing", label: "Kickstarter prelaunch marketing for tabletop games" },
        ],
      },
      {
        id: "ads",
        title: "Should I run ads?",
        paragraphs: [
          "Run ads only once you have a page that already turns visitors into followers or backers. Ads multiply a page that works. They don't fix one that doesn't.",
          "Kickstarter's tabletop marketing guide says winning a backer through ads can cost $15 to $50, and that successful campaigns often aim for a 2.5x return on ad spend. So for a $40 game, an ad can cost close to the pledge it brings in, which is why the test comes first.",
          "Start small before launch with capped tests, tag every link so you know where backers came from, and only raise spend on what is working. Our [referral tags guide](/guides/kickstarter-referral-tags-tracking) explains how to set the tracking up.",
          "If you can't measure it, don't scale it.",
        ],
        nextLead: "To size and test an ad budget, read",
        next: [
          { href: "/guides/kickstarter-advertising-budget-board-games", label: "Kickstarter advertising budget for board games" },
          { href: "/kickstarter-advertising", label: "Kickstarter advertising for tabletop games" },
        ],
      },
    ],
  },
  {
    id: "launch",
    label: "Launch and the live campaign",
    chapters: [
      {
        id: "when",
        title: "When should I launch?",
        paragraphs: [
          "Launch when the audience and the page are both ready, not when you are tired of waiting. A date fixed before the followers and the page are there is one of the most common reasons we see first campaigns start slowly.",
          "Work backwards from the date. Kickstarter review can take up to three business days, and another three or longer if it asks for changes, so submit at least a week or two early. Then check the date against conventions, holidays or anything else that would pull your backers away.",
          "Kickstarter allows a campaign of 1 to 60 days and recommends 30 days or less. Its own example plan launches at 11 am Eastern.",
          "A short, full campaign reads better to a new visitor than a long, quiet one.",
        ],
        nextLead: "To choose the date and plan the review, read",
        next: [
          { href: "/guides/when-to-launch-a-kickstarter", label: "when to launch a Kickstarter" },
          { href: "/guides/kickstarter-review-launch-timeline", label: "Kickstarter review and launch timeline" },
        ],
      },
      {
        id: "launch-day",
        title: "What happens on launch day?",
        paragraphs: [
          "On launch day you press the launch button yourself, Kickstarter emails your followers, and the first wave of backers arrives. Kickstarter says launching is a manual process, so approval does not publish the campaign for you.",
          "The first day or two set the tone for the whole campaign. In our experience, backers are more willing to join a project that is already moving towards its goal, so write everything you can beforehand. That covers the launch email, the social posts, the first update and replies to the questions you expect.",
          "Then spend the day answering comments and messages quickly and checking the page on a phone. A mistake caught in the first hour costs far less than one caught on day three.",
          "Launch day is for running the plan, not writing it.",
        ],
        nextLead: "For the full list of launch day tasks, read",
        next: [{ href: "/guides/board-game-kickstarter-launch-day-checklist", label: "the board game Kickstarter launch day checklist" }],
      },
      {
        id: "live",
        title: "What do I do while the campaign is live?",
        paragraphs: [
          "While the campaign is live, your job is to answer people, post useful updates and keep the page accurate. It is steady work every day, more like running a shop than throwing a launch party.",
          "Expect a quiet middle. Kickstarter's own example plan calls this stretch the long middle, and it is normal for the days between the start and the end to feel slow. Use them for updates with new art, gameplay clips or answers to common questions.",
          "A stretch goal is an extra reward unlocked when funding passes a set amount. Stretch goals can keep the middle moving, but only if each one is something backers want and you can afford to make, so plan them before launch with the costs in the budget.",
          "A calm, regular update beats a burst of hype.",
        ],
        nextLead: "To plan updates and stretch goals, read",
        next: [
          { href: "/guides/kickstarter-live-campaign-updates", label: "Kickstarter campaign updates" },
          { href: "/guides/kickstarter-stretch-goals-planning", label: "planning stretch goals" },
          { href: "/kickstarter-campaign-management", label: "Kickstarter campaign management for tabletop games" },
        ],
      },
      {
        id: "not-going-well",
        title: "What if the campaign is not going well?",
        paragraphs: [
          "If the campaign is struggling, you can push harder with the time left, cancel and relaunch later, or let it run to the end. Which one is right depends on how far you are from the goal and how much time remains.",
          "Most reasons a campaign struggles were visible before launch. A small audience, a price that doesn't match the game, a page that is hard to read or a goal set too high usually show up first as a quiet prelaunch.",
          "Cancelling is not a disaster. Because Kickstarter is all or nothing, nobody is charged for a campaign that doesn't fund, and a relaunch with a bigger list, a clearer page and a sharper price can do much better.",
          "Treat a weak prelaunch as the warning, and you rarely need the emergency options.",
        ],
        nextLead: "For the failure reasons and the relaunch decision, read",
        next: [{ href: "/guides/why-kickstarter-campaigns-fail", label: "why Kickstarter campaigns fail" }],
      },
    ],
  },
  {
    id: "after",
    label: "After funding",
    chapters: [
      {
        id: "funded",
        title: "I'm funded. What happens now?",
        paragraphs: [
          "When the campaign ends funded, Kickstarter collects the pledges and starts the payout 14 days after the deadline. Some payments fail at this stage, so the amount you receive can be lower than the final total on the page.",
          "Your first job is a clear update to backers. Thank them, say what happens next and tell them when you will need their details. Then set up the pledge manager, settle late pledges and lock the production order.",
          "Late pledges let people back the project after it ends. On Kickstarter they have to be switched on while the project is in draft or still live, so decide before you launch. Kickstarter's own example keeps late pledges open for roughly a month.",
        ],
        visual: afterFunding,
        afterVisual: ["Spend from the collected amount, never from the headline total."],
        nextLead: "For the first weeks after funding, read",
        next: [
          { href: "/guides/what-happens-after-kickstarter-is-funded", label: "what happens after your Kickstarter is funded" },
          { href: "/guides/kickstarter-late-pledges-vs-shopify", label: "late pledges, preorders or a store" },
        ],
      },
      {
        id: "pledge-manager",
        title: "Do I need a pledge manager?",
        paragraphs: [
          "A pledge manager is the tool backers use after the campaign to confirm their reward, add extras, enter their address and pay for shipping. Most board games need one, because shipping and add ons are usually settled there.",
          "Kickstarter has its own pledge manager. There is no upfront cost, Kickstarter deducts its usual fees from payments made inside it, and it only becomes available after your project has launched. Other pledge managers exist, each with its own pricing and features.",
          "A very small campaign with one reward, no add ons and shipping charged during the campaign has less to settle afterwards, so it may only need a simple address survey.",
          "Pick the pledge manager your fulfillment partner can work with, and pick it before launch.",
        ],
        nextLead: "To compare the options, read",
        next: [
          { href: "/guides/pledge-managers-compared", label: "pledge managers compared" },
          { href: "/guides/board-game-pledge-manager-checklist", label: "the pledge manager checklist" },
          { href: "/guides/backerkit-vs-shopify-vs-gamefound", label: "BackerKit vs Shopify vs Gamefound" },
        ],
      },
      {
        id: "manufacturing",
        title: "How does manufacturing work?",
        paragraphs: [
          "Manufacturing usually runs in four steps: quotes, a sample, file approval and mass production. You get quotes before launch, then after funding you order a sample, approve the final print files and pay the factory to produce the full run.",
          "Quotes depend on the component list and the print run, so ask for them on your real components. Ask what is included, such as the box, inserts, shrink wrap and packing, and how long each step takes. The sample is where you catch errors before thousands of copies exist.",
          "Kickstarter's guidance is that with an overseas manufacturer, the window from the end of the campaign to the last rewards arriving is usually about twelve months. That surprises a lot of first timers, so put an honest delivery date on the page.",
          "We don't manufacture games, so we can't quote production for you. We can help you turn the factory's facts into a clear components section and a believable delivery estimate.",
        ],
        nextLead: "For what to ask a manufacturer before launch, read",
        next: [{ href: "/guides/is-my-game-ready-for-kickstarter", label: "is my game ready for Kickstarter" }],
      },
      {
        id: "shipping",
        title: "How do shipping and fulfillment work?",
        paragraphs: [
          "Shipping usually happens in two legs. The finished games travel in bulk by freight to warehouses in the regions where your backers live, then a fulfillment company packs and posts each backer's order.",
          "Shipping often costs more than first timers expect, especially for heavy boxes and distant countries. That is why many board game creators charge shipping after the campaign, in the pledge manager, once real rates are known.",
          "Whatever you decide, the page should say when shipping is charged, roughly what it will be and which countries you ship to.",
          "Backers forgive a high shipping cost far more easily than a surprise one.",
        ],
        nextLead: "To explain shipping on the page, read",
        next: [{ href: "/guides/kickstarter-shipping-delivery-page", label: "writing the shipping and delivery section" }],
      },
      {
        id: "tax",
        title: "What about VAT and tariffs?",
        paragraphs: [
          "VAT and tariffs change what backers pay and what you keep, so they belong in the plan from the start. We don't give tax advice, so treat this chapter as a map and take the decisions to an accountant or customs broker.",
          "For VAT, Kickstarter changed its pledge manager on 13 April 2026. Creators can now let Kickstarter collect VAT for them or handle it through their own systems, and projects with VAT included in their prices can now use the pledge manager. On the page, the job is to say clearly whether prices include VAT.",
          "For US tariffs, Kickstarter's Tariff Manager lets accepted creators add a tariff surcharge to orders in its pledge manager. It applies only to backers with a US shipping address, and backers see the total at checkout. US tariff rules have changed more than once since 2025, so check the current position close to fulfillment.",
          "Price for the rules that apply when you ship, not the ones in place when you launch.",
        ],
        nextLead: "For the detail, read",
        next: [
          { href: "/guides/board-game-tariffs-shipping-us", label: "board game tariffs and US shipping" },
          { href: "/guides/selling-miniatures-internationally-vat-ioss", label: "selling internationally with VAT and IOSS" },
        ],
      },
      {
        id: "backer-updates",
        title: "How do I keep backers happy until delivery?",
        paragraphs: [
          "Backers stay patient when they hear from you regularly and the dates you give are honest. Silence worries them far more than bad news does.",
          "Post an update at least once a month, even when the news is small. Show the factory sample, the freight booking and the warehouse arrival. When a date slips, say so early, say why and give the new date.",
          "Keep one place for address changes and questions, usually the pledge manager, so nothing gets lost across comments, messages and email.",
          "Research cited by Kickstarter estimates that 5 to 14 percent of funded campaigns never deliver their rewards. Steady, specific updates are how you show backers you are not one of them.",
        ],
        nextLead: "For update plans and help after the campaign, read",
        next: [
          { href: "/guides/kickstarter-live-campaign-updates", label: "planning campaign updates" },
          { href: "/post-campaign-support", label: "post campaign support for funded tabletop games" },
        ],
      },
      {
        id: "after-delivery",
        title: "What do I do after delivery?",
        paragraphs: [
          "After delivery, the campaign becomes a product you can keep selling. People still find a game after it ships, and backers ask about expansions and the next project.",
          "Many creators open a store for late buyers, restocks and expansions. A store needs products, shipping and support set up properly, and it should stay separate from any backer orders you are still finishing.",
          "Then start the next campaign earlier than you think. Your backers are now your list, so a second campaign starts from a much stronger place than the first.",
        ],
        nextLead: "To set up selling after the campaign, read",
        next: [
          { href: "/guides/move-from-kickstarter-to-shopify", label: "the Kickstarter to Shopify migration guide" },
          { href: "/guides/kickstarter-to-shopify-launch-timeline", label: "the Kickstarter to Shopify launch timeline" },
          { href: "/guides/sell-board-game-preorders-on-shopify", label: "selling board game preorders" },
        ],
      },
    ],
  },
];

const helpRows: { stage: string; you: string; we: string; href: string; hub: string }[] = [
  { stage: "Planning, costs, goal and pricing", you: "The game, the quotes and the numbers", we: "Launch planning, scope and a schedule with named owners", href: "/kickstarter-launch-services", hub: "Kickstarter launch services for tabletop games" },
  { stage: "Platform choice", you: "Deciding on Kickstarter or Gamefound", we: "Gamefound story page, rewards, prelaunch and ads", href: "/gamefound-launch-services", hub: "Gamefound launch services" },
  { stage: "The campaign page", you: "Art, rules and product facts", we: "Page design and copy, starting with a free opening mockup", href: "/campaign-design", hub: "Kickstarter campaign design" },
  { stage: "Video and visuals", you: "Footage and the prototype", we: "Renders, motion and ad variants", href: "/campaign-creative", hub: "Kickstarter campaign creative" },
  { stage: "Prelaunch and marketing", you: "Showing up in your community", we: "Prelaunch page, signup flow and email sequence", href: "/kickstarter-prelaunch-marketing", hub: "Kickstarter prelaunch marketing" },
  { stage: "Ads", you: "The ad budget and your own ad account", we: "Ad creative, capped tests and clear reports", href: "/kickstarter-advertising", hub: "Kickstarter advertising" },
  { stage: "Launch and the live campaign", you: "Approvals and backer replies", we: "Launch checks, updates and FAQ upkeep", href: "/kickstarter-campaign-management", hub: "Kickstarter campaign management" },
  { stage: "After funding", you: "Manufacturing and shipping decisions", we: "Backer updates and pledge manager content", href: "/post-campaign-support", hub: "Post campaign support" },
  { stage: "After delivery", you: "Stock and the next game", we: "Kickstarter to Shopify store setup, scoped separately", href: "/kickstarter-to-shopify", hub: "Kickstarter to Shopify" },
];

const faqs = [
  {
    question: "How do I launch a board game on Kickstarter step by step?",
    answer:
      "Finish and test the game, get a manufacturing quote, build a budget, then set the funding goal and reward prices. Put up a prelaunch page and build an audience for months. Design the campaign page, submit it for review and launch it yourself. After the campaign, collect payments, run a pledge manager, manufacture and ship.",
  },
  {
    question: "How long does it take to launch a Kickstarter from start to finish?",
    answer:
      "For a first board game, plan on several months before launch and about a year after it. Kickstarter's own example runs about 50 days from kickoff to launch for a creator who already has a product, and it says overseas manufacturing usually takes about twelve months from the end of the campaign to delivery.",
  },
  {
    question: "How much money do I need to launch a board game on Kickstarter?",
    answer:
      "Enough to pay for art, prototypes, reviewer samples, the page and any ads before pledges arrive, because Kickstarter pays out after the campaign ends. The amount depends on your game, so build the budget line by line and keep a reserve. Kickstarter suggests a buffer of 20 to 30 percent on your fulfillment estimate.",
  },
  {
    question: "Can I launch a Kickstarter with just a prototype?",
    answer:
      "Yes, if the game is tested and the prototype looks close to the final product. Label prototype images clearly, explain what will change in the risks section, and get a manufacturing quote first so your prices and goal are real.",
  },
  {
    question: "Do I need an audience before I launch?",
    answer:
      "Yes. Kickstarter emails your prelaunch followers when you go live, but you should not count on the platform to bring a crowd to a project nobody knows about. Build followers and an email list for months before launch, and use the follower count to judge whether you are ready.",
  },
  {
    question: "What fees does Kickstarter take from a board game campaign?",
    answer:
      "Kickstarter takes 5% of the total raised plus payment processing, which for a US project is 3% plus $0.20 per pledge. If the project doesn't fund, there are no fees.",
  },
  {
    question: "Should I launch my first game on Kickstarter or Gamefound?",
    answer:
      "Both take a 5% platform fee, so choose by audience. Kickstarter reaches people browsing beyond hobby gaming. Gamefound is built for tabletop and keeps the campaign, late pledges and pledge manager in one system.",
  },
  {
    question: "Can I do the whole Kickstarter myself?",
    answer:
      "Yes, and many creators do. The honest limit is time, because a first campaign makes you designer, copywriter, marketer and support desk at once. If you get help, you can hand over the page, the ads or the live campaign and keep the game and the decisions.",
  },
  {
    question: "What is the hardest part of a board game Kickstarter?",
    answer:
      "In our experience, building an audience before launch is the hardest part for first timers, because it takes months and the results are slow to show. After funding, the hardest part is usually manufacturing and shipping on time and on budget.",
  },
  {
    question: "Does Guildframe manufacture or ship games?",
    answer:
      "No. We plan, design, advertise and run the campaign with you. Manufacturing, freight, fulfillment and tax advice stay with your factory, your fulfillment partner and your accountant.",
  },
];

const allChapters = stages.flatMap((stage) => stage.chapters);

const visualWords = (data: GuideVisualData) => {
  const parts: string[] = [data.title, data.caption ?? ""];
  if (data.kind === "timeline") data.events.forEach((e) => parts.push(e.when, e.label, e.detail ?? ""));
  if (data.kind === "steps") data.steps.forEach((s) => parts.push(s.label, s.detail ?? ""));
  if (data.kind === "stats") data.stats.forEach((s) => parts.push(s.value, s.label, s.note ?? ""));
  if (data.kind === "split") data.parts.forEach((p) => parts.push(p.label, p.display ?? ""));
  return parts.join(" ");
};

const wordCount = [
  answer,
  ...allChapters.flatMap((c) => [
    c.title,
    ...c.paragraphs,
    ...(c.list ? [c.list.lead, ...c.list.items] : []),
    ...(c.afterVisual ?? []),
    c.visual ? visualWords(c.visual) : "",
    c.nextLead,
    ...c.next.map((n) => n.label),
  ]),
  visualWords(timeline),
  ...helpRows.flatMap((r) => [r.stage, r.you, r.we, r.hub]),
  ...faqs.flatMap((f) => [f.question, f.answer]),
]
  .map(plainGuideText)
  .join(" ")
  .split(/\s+/)
  .filter(Boolean).length;

const toc = [
  { id: "start", label: "Start here" },
  { id: "timeline", label: "The whole timeline" },
  ...stages.map((stage) => ({ id: stage.chapters[0].id, label: stage.label })),
  { id: "help", label: "Where Guildframe can help" },
  { id: "next-step", label: "Your next step" },
  { id: "faq", label: "Quick answers" },
];

function ReadNext({ chapter }: { chapter: Chapter }) {
  return (
    <p className="article-read-next">
      <strong>Read next.</strong> {chapter.nextLead}{" "}
      {chapter.next.map((item, index) => (
        <span key={item.href}>
          {index > 0 ? (index === chapter.next.length - 1 ? " and " : ", ") : null}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
      .
    </p>
  );
}

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section aria-labelledby={chapter.id}>
      <h2 id={chapter.id}>{chapter.title}</h2>
      {chapter.paragraphs.map((p) => (
        <p key={p}>
          <GuideInlineText text={p} />
        </p>
      ))}
      {chapter.list ? (
        <>
          <p>{chapter.list.lead}</p>
          <ul>
            {chapter.list.items.map((item) => (
              <li key={item}>
                <GuideInlineText text={item} />
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {chapter.visual ? <GuideVisual data={chapter.visual} /> : null}
      {(chapter.afterVisual ?? []).map((p) => (
        <p key={p}>
          <GuideInlineText text={p} />
        </p>
      ))}
      <ReadNext chapter={chapter} />
    </section>
  );
}

export default function HowToLaunchABoardGameOnKickstarterPage() {
  return (
    <SeoArticlePage
      slug={slug}
      category="Start here"
      title={title}
      description={heroDescription}
      answer={answer}
      published={contentDates.howToLaunch}
      updated={contentDates.howToLaunch}
      readTime={`${Math.max(1, Math.ceil(wordCount / 200))} min read`}
      toc={toc}
      faqs={faqs}
      sources={sources}
      related={[
        { href: "/guides/is-my-game-ready-for-kickstarter", label: "Is my game ready for Kickstarter?" },
        { href: "/guides/board-game-kickstarter-cost", label: "How much it costs to launch a board game on Kickstarter" },
        { href: "/guides/how-to-market-a-kickstarter", label: "How to market a Kickstarter" },
        { href: "/guides/how-to-design-a-kickstarter-page", label: "How to design a Kickstarter page" },
      ]}
    >
      <section aria-labelledby="start">
        <h2 id="start">How to launch a board game on Kickstarter, in one place</h2>
        <p>
          This guide is the conversation we have with first time creators, written down in order. We
          have designed campaigns for ten years, and the questions arrive in roughly the same sequence
          every time, from whether the game is ready to what happens after the last box ships.
        </p>
        <p>
          Each chapter answers one question in a few paragraphs, says what first timers usually get
          wrong, then points to the deeper guide that covers it properly. Read it top to bottom, or jump
          to the chapter that worries you most.
        </p>
        <p>The chapters follow the order you will meet them.</p>
        <nav aria-label="Chapters in this guide">
          {stages.map((stage) => (
            <div key={stage.id}>
              <p>
                <strong>{stage.label}</strong>
              </p>
              <ul>
                {stage.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <a href={`#${chapter.id}`}>{chapter.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p>
            <strong>Getting help</strong>
          </p>
          <ul>
            <li>
              <a href="#help">Where can Guildframe help at each stage?</a>
            </li>
            <li>
              <a href="#next-step">What should I do next?</a>
            </li>
          </ul>
        </nav>
        <p>
          If you only have time for one thing today, look at the timeline below. It changes how most
          first timers plan.
        </p>
      </section>

      <section aria-labelledby="timeline">
        <h2 id="timeline">How long does a tabletop Kickstarter take from start to finish?</h2>
        <p>
          A Kickstarter takes longer than most first timers plan for, because the campaign itself is the
          shortest part. Kickstarter&apos;s own example plan runs about 50 days from kickoff to launch and
          describes the whole process as about four months of real, staffed work.
        </p>
        <p>
          That plan assumes you already have a product and a launch date. A first game usually is not
          there yet, so the timeline below is our example for a first board game, with the months before
          launch stretched to fit the work that is still to do. The dates after launch come from
          Kickstarter.
        </p>
        <GuideVisual data={timeline} />
        <p>
          The exact months matter less than the shape. Most of the calendar sits before launch day and
          after the last pledge, so plan for both ends.
        </p>
      </section>

      {allChapters.map((chapter) => (
        <ChapterSection chapter={chapter} key={chapter.id} />
      ))}

      <section aria-labelledby="help">
        <h2 id="help">Where can Guildframe help at each stage?</h2>
        <p>
          You can run every stage yourself, and plenty of creators do. The honest limit is time and
          practice, because a first campaign asks you to be designer, copywriter, marketer and support
          desk at once, in the same months you want to spend finishing the game.
        </p>
        <p>
          We plan, design, advertise and run tabletop launches on Kickstarter and Gamefound. Before
          Guildframe, Umair spent ten years designing campaigns, with 252 client reviews averaging 5.0.
          The table shows what stays with you at each stage and where we can take work off your desk.
        </p>
        <div className="article-table-wrap" role="region" aria-label="Where Guildframe can help at each stage" tabIndex={0}>
          <table>
            <caption>Where Guildframe can help at each stage</caption>
            <thead>
              <tr>
                <th scope="col">Stage</th>
                <th scope="col">What you bring</th>
                <th scope="col">Where we help</th>
                <th scope="col">Service</th>
              </tr>
            </thead>
            <tbody>
              {helpRows.map((row) => (
                <tr key={row.stage}>
                  <td>{row.stage}</td>
                  <td>{row.you}</td>
                  <td>{row.we}</td>
                  <td>
                    <Link href={row.href}>{row.hub}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Our prices are fixed. The campaign page package is $1,800. Full campaign support is $5,900 and
          covers the prelaunch page and emails, the campaign page, ad creative and paid advertising, live
          campaign checks and the final handoff. Ad spend, software, platform fees and production are
          separate.
        </p>
        <p>
          We don&apos;t manufacture, ship or give tax advice. Those stay with your factory, your
          fulfillment partner and your accountant, and we turn their facts into clear pages and updates.
        </p>
      </section>

      <section aria-labelledby="next-step">
        <h2 id="next-step">What should I do next?</h2>
        <p>
          Pick the chapter that worries you most and read its guide first. When you want to talk about
          your own game, there are two easy ways to start, and neither asks for payment up front.
        </p>
        <p>
          The lowest risk first step is the free opening mockup. We design one opening campaign section
          using your artwork, with no payment and no obligation to book, so you can judge the work on
          your own game. If you already know what you need, start a project and we will reply with a
          scope for your launch.
        </p>
        <ArticleCallout>
          <strong>Ready to plan your launch?</strong>
          <p>
            <Link href="/buy">Start your tabletop launch project</Link> or{" "}
            <a href="#start-project">request a free opening mockup</a> using your artwork. To see
            everything a full launch includes, read about our{" "}
            <Link href="/kickstarter-launch-services">Kickstarter launch services for tabletop games</Link>.
          </p>
        </ArticleCallout>
      </section>
    </SeoArticlePage>
  );
}

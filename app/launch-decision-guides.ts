import type { LaunchGuide } from "./launch-guides";

export const decisionGuides: LaunchGuide[] = [
  {
    slug: "choose-board-game-kickstarter-marketing-agency",
    title: "How to Choose a Kickstarter Marketing Agency for Your Board Game",
    seoTitle: "Board Game Kickstarter Marketing Agency: Costs & Hiring",
    description: "Choose a board game Kickstarter marketing agency by scope, fees, relevant work and ad reporting. Compare full launch support with design-only or ads-only help.",
    tag: "Hiring launch help",
    published: "2026-10-04",
    updated: "2026-10-04",
    answer: "Choose a Kickstarter marketing agency by matching its services to the jobs your launch still needs. Compare written scopes over the same support period, with service fees and ad spend shown separately. Ask for relevant campaign links, the agency's exact role, a sample report and account ownership terms. Buy full launch support or a defined stage around those needs; a portfolio funding total cannot establish the agency's contribution.",
    servicePath: "/kickstarter-launch-services",
    serviceLabel: "Guildframe's tabletop launch services",
    relatedSlugs: ["board-game-kickstarter-marketing-plan", "kickstarter-advertising-budget-board-games", "board-game-kickstarter-campaign-design-cost"],
    sources: [
      { label: "Kickstarter's promotion handbook", publisher: "Kickstarter", href: "https://www.kickstarter.com/help/handbook/promotion" },
      { label: "Kickstarter custom referral tags and pledge reports", publisher: "Kickstarter", href: "https://help.kickstarter.com/en-us/articles/16236548-how-do-i-create-a-custom-referral-tag-and-track-referral-stats" },
      { label: "Guildframe launch scope", publisher: "Guildframe", href: "/kickstarter-launch-services" },
      { label: "Questions to ask before hiring a marketing service", publisher: "Kickstarter", href: "https://www.kickstarter.com/blog/before-you-work-with-a-marketing-service-consider-this" },
    ],
    sections: [
      { id: "work", title: "Decide which jobs you need help with", paragraphs: ["Make a list of the work left before launch. You might already have a strong mailing list and need a campaign designer. Or you might have finished artwork but no landing page, email flow or way to reach players. Those are different briefs.", "For a board game, ask how the team will explain a turn, show components and compare editions. For a TCG, ask about starter decks and pack contents. For an RPG, ask how it will present sample pages and distinguish books from PDFs. Relevant experience should show up in the decisions, not just the portfolio's theme."], table: { headers: ["Work you need", "What to ask for"], rows: [["Launch planning", "An asset review, dependencies, task owners and a review schedule"], ["Prelaunch", "A landing page, tested signup flow, email sequence and audience tests"], ["Campaign creative", "Written copy, gameplay graphics, reward comparisons and platform checks"], ["Paid advertising", "Named channels, a capped test budget, access rules and reporting"], ["Live support", "Support dates, updates, revision limits and who publishes changes"]] } },
      { id: "proof", title: "Check what the agency actually did on each project", paragraphs: ["Open the real campaign link. Ask which part the agency handled, when it joined and what the creator supplied. Page design, prelaunch consulting and paid advertising are separate contributions. A portfolio should make the role clear.", "If advertising results are part of the pitch, ask about dates, spend, attribution windows and whether reported revenue includes organic pledges. Kickstarter's custom referral reports show attributed pledges and amounts; they are not a count of link clicks. Treat an entire campaign's funding total as context, rather than an ad result."], source: 1, list: ["Can you see a live campaign with similar products or rewards?", "Does the example show the service you are buying?", "Can the agency explain the reporting limits?", "Are testimonials attributed to the client and the relevant work?"] },
      { id: "cost", title: "How much does a Kickstarter marketing agency cost?", paragraphs: ["There is no single fee that covers every tabletop launch. A useful quote lists the work, the number of months or campaign stages covered and how extra changes are charged. A starting price may cover one service, rather than the whole campaign.", "Calculate the commitment as setup and creative fees, plus recurring fees multiplied by the billed periods, plus any percentage fee on its agreed revenue base. Add media, software and other suppliers separately. Check payment dates as well as the total: some work is due before Kickstarter funds are available."], table: { headers: ["Quote line", "Question to settle"], rows: [["Setup and creative", "Which pages, email messages, graphics, revisions and files are included?"], ["Recurring support", "What are the start and end dates, billed periods and rescheduling terms?"], ["Performance fee, if used", "Does it apply to all pledges or attributed pledges? How are refunds, tax, shipping and late pledges treated?"], ["Advertising", "Is media spend separate, and who approves increases?"], ["Software and other suppliers", "Who pays, owns the account and cancels it?"], ["Extra work", "What requires a new quote or approval?"]] } },
      { id: "ownership", title: "Keep ownership and approval rules clear", paragraphs: ["Agree which accounts you own, what access the agency needs and what files it will hand over. List your campaign, domain, advertising accounts, email software and contact records. Decide how access is removed when the work ends.", "Name who can approve product claims, rewards, budgets and publication. The agency can prepare the work, but your production team needs to confirm costs, contents and delivery facts. A close launch date makes these decisions more urgent; it does not make them disappear."] },
      { id: "diy", title: "Book the whole launch or the gap your team cannot cover", paragraphs: ["Keep a job in house when someone has both the skill and time to own it. Kickstarter's hiring advice recommends comparing the service with what you and your collaborators can do yourselves. Use the situations below to write a brief before asking for quotes."], table: { headers: ["Your situation", "Useful brief", "Handoff to settle"], rows: [["Several launch stages lack an owner", "Launch planning plus the prelaunch, creative and live stages you need", "Who supplies the game facts and approves each stage"], ["Email and audience work are covered; the page needs work", "Campaign copy, graphics and reward comparisons", "Who assembles the platform page and checks the preview"], ["The page and signup work; paid traffic needs an owner", "Advertising setup, creative tests and management", "Account access, media cap and the report used for decisions"], ["Rewards, costs or artwork are still unsettled", "An asset and readiness review first", "Which decisions must be finished before production or ad spend"]] }, source: 3 },
      { id: "guildframe", title: "What to send Guildframe for a proposal", paragraphs: ["Send your game summary, platform, current page or project link, usable artwork and possible launch date. Tell Umair what you already have and which work needs an owner. Include a service and media budget if you have set them.", "Guildframe quotes prelaunch, creative, paid advertising and live support around that brief. Service fees and ad spend are separate. Campaign design can also be booked on its own, with its scope and price on the design page. You can request one free opening-section mockup using your artwork before booking creative work."], source: 2 },
    ],
    faqs: [
      { question: "Do I need a Kickstarter agency for my first board game?", answer: "You need owners for the launch work. An agency can fill gaps in planning, creative or marketing; an experienced internal team can handle those jobs itself. Compare the work left, available time and budget before deciding." },
      { question: "Does an agency fee include Kickstarter ad spend?", answer: "Check the proposal. Service fees and the money paid to advertising platforms are different costs. At Guildframe, media spend is listed separately from the service fee." },
      { question: "Should I choose the agency with the biggest funding total?", answer: "Check its role in that campaign, the service you need and how results were measured. The total raised does not establish the agency's contribution or predict your game's outcome." },
      { question: "Can I hire Guildframe for campaign design only?", answer: "Yes. Campaign copy and graphics are available as a separate service using your artwork. The design page lists the current scope and fixed fee; prelaunch, ads and live support are quoted separately." },
    ],
  },
  {
    "slug": "kickstarter-prelaunch-page-vs-landing-page",
    "title": "Kickstarter Prelaunch Page or Your Own Landing Page?",
    "seoTitle": "Kickstarter Prelaunch Page vs Landing Page for Board Games",
    "description": "Compare Kickstarter followers with your own email signup page. Choose the right prelaunch flow for a board game, card game or tabletop RPG campaign.",
    "tag": "Prelaunch decisions",
    "published": "2026-10-04",
    "updated": "2026-11-25",
    "answer": "Use the Kickstarter prelaunch page to collect followers who get an email when the campaign goes live, and your own landing page when the game needs more explaining or you want an email list in your own tools. You can use both, as long as each page has one job and you count each audience separately.",
    "servicePath": "/kickstarter-prelaunch-marketing",
    "serviceLabel": "Kickstarter prelaunch marketing for tabletop games",
    "relatedSlugs": [
      "kickstarter-followers-before-launch",
      "kickstarter-prelaunch-page-guide",
      "kickstarter-prelaunch-email-list",
      "board-game-kickstarter-marketing-plan"
    ],
    "sources": [
      {
        "label": "Kickstarter prelaunch page features and follower notifications",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      },
      {
        "label": "Kickstarter's promotion handbook",
        "publisher": "Kickstarter",
        "href": "https://www.kickstarter.com/help/handbook/promotion"
      }
    ],
    "sections": [
      {
        "id": "comparison",
        "title": "Compare the signup and communication options",
        "paragraphs": [
          "A Kickstarter follow and a signup in your email software are different records, and we keep them apart from day one. Don't add the counts together as if every person were unique, and don't treat either number as a confirmed pledge."
        ],
        "visual": {
          "kind": "compare",
          "title": "A Kickstarter follow and an email signup are two different audiences",
          "columns": [
            {
              "name": "Kickstarter prelaunch page",
              "points": [
                "Visitor taps Notify me on launch",
                "You reach followers through prelaunch updates",
                "Kickstarter sends the launch email"
              ],
              "verdict": "Suits people ready to follow"
            },
            {
              "name": "Your own landing page",
              "points": [
                "Visitor joins your email list",
                "You send the welcome email and sequence",
                "You choose the layout and the sample"
              ],
              "verdict": "Suits a game that needs explaining"
            }
          ],
          "source": "Kickstarter Help Center, prelaunch page setup"
        },
        "table": {
          "headers": [
            "Decision",
            "Kickstarter prelaunch page",
            "Your own landing page"
          ],
          "rows": [
            [
              "Visitor action",
              "Follow the project for a launch notification",
              "Sign up for the emails described on your form"
            ],
            [
              "Communication",
              "Platform launch notification and prelaunch updates",
              "Your welcome email and planned sequence"
            ],
            [
              "Direct messages to followers",
              "Not available; use prelaunch updates",
              "Email subscribers through your own software and permissions"
            ],
            [
              "Page content",
              "Platform fields and editable description; app display differs",
              "Layout and content chosen for your game"
            ],
            [
              "Testing",
              "Check the platform page and follow action",
              "Check signup, delivery, tracking and mobile presentation"
            ]
          ]
        },
        "source": 0
      },
      {
        "id": "platform",
        "title": "Use the platform page for people ready to follow the campaign",
        "paragraphs": [
          "Check the title, image and project description against the game you are promoting. Kickstarter's app leaves out the editable prelaunch description, so we check the app view as well as desktop. The game should still make sense from what visitors can see.",
          "Keep the public prelaunch URL apart from your private preview link. The preview is for feedback on the campaign, while the public page is the link you want interested players to follow. Before launch, check that your announcement points to the right project."
        ],
        "source": 0
      },
      {
        "id": "landing",
        "title": "Use your own page when the game needs a fuller introduction",
        "paragraphs": [
          "A party card game might need a short sample round and a clear photo of the deck. A strategy board game may need a turn example and a component spread, and an RPG can offer readable sample pages. Choose the smallest amount of material that helps a visitor decide whether the project is for them.",
          "Tell visitors what signing up means. For example, say you will send a rules preview and the launch announcement, if that is your actual plan. Before sending any traffic, run through these five checks."
        ],
        "list": [
          "Explain the game and who would enjoy it.",
          "Use accurate images and label prototypes.",
          "Give the signup one clear purpose.",
          "Check the form, confirmation, email delivery and unsubscribe flow.",
          "Test on a phone before sending paid traffic."
        ]
      },
      {
        "id": "both",
        "title": "If you use both pages, give each one a job",
        "paragraphs": [
          "One route to test for a game that needs explaining is to send new visitors to your own page first. They learn the game and join the email list, then a useful email gives them the Kickstarter follow link. An established audience may be ready to go straight to the platform page instead.",
          "Avoid asking a first time visitor to subscribe, follow, download and join a community all at once. Choose the one next action the page supports, and let your launch plan offer the others later."
        ],
        "visual": {
          "kind": "steps",
          "title": "One route to test: explain the game first, then ask for the follow",
          "steps": [
            {
              "label": "Ad or community post",
              "detail": "Points to your landing page"
            },
            {
              "label": "Landing page signup",
              "detail": "One promise, such as a rules sample"
            },
            {
              "label": "Welcome email",
              "detail": "Delivers the sample you promised"
            },
            {
              "label": "Kickstarter follow",
              "detail": "Link to the public prelaunch page"
            },
            {
              "label": "Launch day",
              "detail": "Your list and your followers both hear"
            }
          ],
          "caption": "A route to test, not a required funnel."
        },
        "source": 1
      },
      {
        "id": "measurement",
        "title": "Measure each route without counting people twice",
        "paragraphs": [
          "Keep a record of successful email signups, email clicks and the follower count the platform shows. Note dates and the traffic source when your tools can provide them. Some people will appear in both audiences, which is a reason to read the numbers carefully.",
          "A low signup cost only matters next to what happens afterwards. Check whether subscribers read the game information, use the sample and click campaign links. After launch, compare attributable pledges within the agreed reporting limits, and don't assume every subscriber will back the game."
        ],
        "table": {
          "headers": [
            "Check",
            "What it tells you"
          ],
          "rows": [
            [
              "Successful signup and welcome email",
              "The email flow works for that test contact"
            ],
            [
              "Clicks to rules or campaign",
              "Some subscribers took the next step"
            ],
            [
              "Platform follower count",
              "How many follows the platform reports"
            ],
            [
              "Attributed pledges after launch",
              "The results your campaign tracking can report"
            ],
            [
              "Overlap and tracking limits",
              "Why audience totals and reports may not reconcile"
            ]
          ]
        }
      },
      {
        "id": "choice",
        "title": "Choose the next step based on what you can maintain",
        "paragraphs": [
          "If your audience already knows the game, a platform follow may be the most useful first action. If you need to explain the game and send a planned email sequence, build your own page and test it. Both routes still need accurate assets and a launch plan.",
          "Before booking a landing page, agree who owns the domain, signup software, contact records and updates. If you'd rather hand it over, our prelaunch marketing service builds the landing page, the signup route and the emails, then checks the Kickstarter follow link before launch."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I email Kickstarter prelaunch followers directly?",
        "answer": "No. Kickstarter doesn't let creators message prelaunch followers directly. You can post prelaunch updates, which notify current followers, and your own email list is a separate signup and communication flow."
      },
      {
        "question": "Do I need both a Kickstarter prelaunch page and a landing page?",
        "answer": "It depends on your audience and plan. The platform page collects follows, and your own page can explain the game and collect opt in email signups. Use both when each has a useful job and someone can maintain them."
      },
      {
        "question": "Will a Kickstarter follower appear in my email software?",
        "answer": "No. A platform follow and an email signup are separate actions. Don't assume a follower is a contact in your email software, and test your own signup flow."
      },
      {
        "question": "Is the Kickstarter preview link the prelaunch link?",
        "answer": "No. Kickstarter provides different preview and public prelaunch URLs. The preview is for sharing the draft campaign for review and feedback, so confirm which link you are promoting."
      },
      {
        "question": "Should I send paid ads to the Kickstarter prelaunch page or my landing page?",
        "answer": "Either can work. A landing page lets you measure signups and the welcome email in your own tools, while followers are counted by Kickstarter. If you test both, use separate links and compare them over the same dates."
      }
    ]
  },
];

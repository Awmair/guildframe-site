import type {GuideVisualData} from "./components/GuideVisual";
import {growthGuides} from "./launch-growth-guides";
import {reviseLaunchGuide} from "./launch-guide-revisions";
import {reviseBuyerGuide} from "./growth-buyer-revisions";
import {contentDates} from "./content-dates";
import {marketingGuides} from "./launch-marketing-guides";
import {newLaunchGuides} from "./launch-guides-new";
import {decisionGuides} from "./launch-decision-guides";
import {guide as ngKickstarterVsGamefound} from "./guides-new/kickstarter-vs-gamefound";
import {guide as ngPledgeManagersCompared} from "./guides-new/pledge-managers-compared";
import {guide as ngBoardGameTariffsShippingUs} from "./guides-new/board-game-tariffs-shipping-us";
import {guide as ngKickstarterAgencyCost} from "./guides-new/kickstarter-agency-cost";
import {guide as ngKickstarterFees} from "./guides-new/kickstarter-fees";
import {guide as ngKickstarterFollowersBeforeLaunch} from "./guides-new/kickstarter-followers-before-launch";
import {guide as ngKickstarterImageSizes} from "./guides-new/kickstarter-image-sizes";
import {guide as ngTcgKickstarterLaunchGuide} from "./guides-new/tcg-kickstarter-launch-guide";
import {guide as ngTerrainAndDiceKickstarterLaunchGuide} from "./guides-new/terrain-and-dice-kickstarter-launch-guide";
import {guide as ngTtrpgKickstarterLaunchGuide} from "./guides-new/ttrpg-kickstarter-launch-guide";
export type LaunchSection={id:string;title:string;paragraphs:string[];list?:string[];table?:{headers:string[];rows:string[][]};source?:number;visual?:GuideVisualData};
export type LaunchGuide={published?:string;updated?:string;slug:string;title:string;seoTitle?:string;relatedSlugs:string[];servicePath:string;serviceLabel:string;description:string;tag:string;answer:string;sections:LaunchSection[];faqs:{question:string;answer:string}[];sources:{label:string;publisher:string;href:string}[]};
export const launchGuideDate="2026-09-30";
const originalLaunchGuides:LaunchGuide[]=[
  ...growthGuides,
  ...decisionGuides,
  ...marketingGuides,
  ...newLaunchGuides,
  // seo-pass-2026-11-25 new guides
  ngBoardGameTariffsShippingUs,
  ngKickstarterAgencyCost,
  ngKickstarterFees,
  ngKickstarterFollowersBeforeLaunch,
  ngKickstarterImageSizes,
  ngKickstarterVsGamefound,
  ngPledgeManagersCompared,
  ngTcgKickstarterLaunchGuide,
  ngTerrainAndDiceKickstarterLaunchGuide,
  ngTtrpgKickstarterLaunchGuide,


  {
    "slug": "board-game-kickstarter-campaign-design-cost",
    "title": "How Much Does Board Game Kickstarter Campaign Design Cost?",
    "description": "Budget your tabletop Kickstarter page by scope: copy, graphics, artwork, video and launch support. Compare quotes and see Guildframe’s fixed page price.",
    "tag": "Budget planning",
    "answer": "Kickstarter campaign design cost depends on how many page sections, reward comparisons and graphics the quote covers, and on whether your artwork is final. Guildframe charges a fixed $1,800 for the campaign page package and $5,900 for full campaign support, with ad spend, software and platform fees billed separately.",
    "sources": [
      {
        "label": "Guildframe campaign design scope and price",
        "publisher": "Guildframe",
        "href": "/campaign-design"
      },
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      }
    ],
    "sections": [
      {
        "id": "scope",
        "title": "Check what the quote includes",
        "paragraphs": [
          "Two quotes can both say Kickstarter design and cover very different jobs. A single opening image is a small task. Planning the whole page, editing the copy and designing reward comparisons is a much bigger one.",
          "So write down the sections you need first: the introduction, gameplay, components, editions, rewards, stretch goals, reviews and production plan. Note which images and facts you’ll provide and what the designer will put together. Then ask each designer these questions, so the quotes describe the same job."
        ],
        "visual": {
          "kind": "checklist",
          "title": "A fair quote names every section, reward graphic and review round",
          "caption": "Ask every designer to price the same list. A lower total often means fewer items on it.",
          "groups": [
            { "name": "Page content", "items": ["Opening and campaign copy", "Sample turn graphic", "Component spread"] },
            { "name": "Rewards", "items": ["Edition comparison", "Add on panels", "Stretch goal graphics"] },
            { "name": "Process", "items": ["Revision rounds", "Platform assembly", "Final and editable files"] }
          ]
        },
        "list": [
          "Is campaign copy included, and who confirms the facts?",
          "Which page sections and graphics are included?",
          "Are reward comparisons and stretch goals in the agreed scope?",
          "Who prepares the files and checks the page inside the platform?",
          "What is the delivery schedule and how are changes handled?"
        ]
      },
      {
        "id": "price",
        "title": "Separate campaign creative from the full launch budget",
        "paragraphs": [
          "A design fee and a launch budget are different numbers, so keep them apart from the start. Our campaign page package is a fixed $1,800. It covers page structure, campaign copy, section graphics and reward presentation using your supplied artwork, and we agree the file list, review process and schedule before starting.",
          "Full campaign support is $5,900 and adds the prelaunch signup page and emails, ad creative, paid advertising, live campaign checks and the final handoff. Either way, ad spend, software, platform fees and any outside production stay on their own lines. Other designers’ prices depend on their scope, so one published fee is not an industry average. Separate lines are the honest way to compare our quote with anyone else’s."
        ],
        "visual": {
          "kind": "compare",
          "title": "The service fee is fixed; ad spend and platform fees sit outside it",
          "source": "Guildframe campaign design and launch pricing, November 2026",
          "columns": [
            { "name": "Campaign page package", "points": ["Page outline and campaign copy", "Gameplay, component and reward graphics", "Built from your supplied artwork"], "verdict": "$1,800 fixed" },
            { "name": "Full campaign support", "points": ["Everything in the page package", "Prelaunch signup page and emails", "Ad creative and paid advertising", "Live campaign checks and handoff"], "verdict": "$5,900 fixed", "highlight": true },
            { "name": "Budgeted separately", "points": ["Ad spend", "Software and platform fees", "New illustration or video", "Manufacturing and shipping"], "verdict": "Paid to the provider" }
          ]
        },
        "table": {
          "headers": [
            "Budget item",
            "Treatment"
          ],
          "rows": [
            [
              "Campaign page design",
              "Fixed fee on the campaign design service page"
            ],
            [
              "Free opening section mockup",
              "No payment or obligation to book"
            ],
            [
              "Prelaunch, advertising and live support",
              "A separate scope and quote"
            ],
            [
              "Ad spend, software and platform fees",
              "Budgeted separately from the service fee"
            ],
            [
              "New game illustration or video",
              "Separate production scope if required"
            ]
          ]
        },
        "source": 0
      },
      {
        "id": "assets",
        "title": "Missing assets can change the workload",
        "paragraphs": [
          "Tell the designer which assets are ready. Final card art, component renders and confirmed rewards are a different starting point from a prototype photo and unfinished rules. Label placeholders and explain which images will be replaced.",
          "If you can’t yet show the main product clearly, an opening mockup can help identify what’s missing before you pay for the full page. It also gives you a chance to see whether the design suits the game."
        ]
      },
      {
        "id": "booking",
        "title": "Book against a written brief",
        "paragraphs": [
          "Get the sections, output files, review process and timing in writing. Someone who knows the reward prices and production details should check the finished content before launch.",
          "To start with us, send the game summary, artwork link, platform and planned launch date. You can request a free opening mockup for creative work, or ask about full campaign support. Either way, we put the deliverables, fees and review dates in writing before you commit."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How much does Guildframe charge to design a Kickstarter page?",
        "answer": "The campaign page package is a fixed $1,800 and full campaign support is $5,900. Ad spend, software, platform fees and outside production are billed separately, and the free opening mockup carries no payment or obligation."
      },
      {
        "question": "Is one studio’s design fee an industry average?",
        "answer": "No. A published fee applies to that studio’s stated scope. Compare the work, files, revisions and schedule rather than treating one price as the market average."
      },
      {
        "question": "Does the price include designing the game itself?",
        "answer": "No. Campaign page design presents your game using supplied artwork and confirmed information. New game illustration, rules development and product design are separate work."
      },
      {
        "question": "Can I request a mockup before deciding?",
        "answer": "Yes. Send your project and artwork through the free mockup form. There is no obligation to book the full campaign."
      }
    ],
    "seoTitle": "Kickstarter Campaign Design Cost for Board Games",
    "relatedSlugs": [
      "kickstarter-fees",
      "kickstarter-agency-cost",
      "what-to-send-kickstarter-campaign-designer",
      "when-to-hire-kickstarter-campaign-designer",
      "board-game-kickstarter-page-checklist"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign design for tabletop games",
    "updated": "2026-11-25"
  },
  {
    "slug": "board-game-kickstarter-page-checklist",
    "title": "Board Game Kickstarter Page Checklist Before Launch",
    "description": "Check your board game Kickstarter page before launch: gameplay, box contents, rewards, shipping information and mobile readability.",
    "tag": "Launch preparation",
    "answer": "A board game Kickstarter page is ready when a new reader can explain a turn, name what comes in the box, compare the rewards and find the shipping plan. Check it by handing the preview, on a phone, to someone who hasn’t played the game, then fix every question they had to ask you.",
    "sources": [
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      },
      {
        "label": "Setting up a Kickstarter prelaunch page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      }
    ],
    "sections": [
      {
        "id": "opening",
        "title": "Introduce the game in the opening",
        "paragraphs": [
          "Start with the name, a clear game image and a short explanation of what players do. A box render helps show the product, but the reader still needs to know who they’ll play with and why they might enjoy it.",
          "Put the confirmed player count, play time and age guidance near the gameplay section. Mention solo play or a required companion app there too. Those details help someone decide whether the game fits their group, so the opening should include the points below."
        ],
        "visual": {
          "kind": "checklist",
          "title": "A board game page needs four blocks before any stretch goal art",
          "caption": "Our working order for a board game campaign page. Reviews, stretch goals and risks follow these blocks.",
          "groups": [
            { "name": "Opening", "items": ["Name and logo", "Real product image", "One line on what players do"] },
            { "name": "Game facts", "items": ["Player count", "Play time", "Age guidance and modes"] },
            { "name": "Gameplay", "items": ["Sample turn", "Labelled rules link", "Component list"] },
            { "name": "Rewards and delivery", "items": ["Edition comparison", "Optional extras labelled", "Shipping timing"] }
          ]
        },
        "list": [
          "A readable logo and strong opening image",
          "A premise that works without knowing your setting",
          "Confirmed player count, play time and age guidance",
          "A clear distinction between prototype imagery and final products"
        ]
      },
      {
        "id": "gameplay",
        "title": "Explain a turn before explaining every rule",
        "paragraphs": [
          "Choose a turn or round that shows the main decisions. A few labelled steps can explain an action, what happens next and what the player is trying to achieve.",
          "Use actual components in that explanation. Add a rules link, playthrough or independent preview if you have one. Give the component list its own space so readers can also check what’s in the box."
        ],
        "source": 0
      },
      {
        "id": "rewards",
        "title": "Make reward differences visible",
        "paragraphs": [
          "Keep product names consistent in the copy, graphics and platform rewards. If you use base game, core box and standard edition for the same item, explain that or choose one name.",
          "Compare editions and bundles by their contents, and label optional extras. A large component spread can hide the single difference that matters to someone choosing a reward."
        ],
        "table": {
          "headers": [
            "Check",
            "A reader should know"
          ],
          "rows": [
            [
              "Core reward",
              "The exact box or files included"
            ],
            [
              "Upgraded edition",
              "What changes compared with the core reward"
            ],
            [
              "Bundle",
              "Which games or expansions are included"
            ],
            [
              "Optional extra",
              "Whether it is included or added separately"
            ]
          ]
        }
      },
      {
        "id": "review",
        "title": "Read the page like a new backer",
        "paragraphs": [
          "The fastest test we know is a reader who has never seen the game. Ask them to read the preview and describe the game, reward options and delivery plan. Let them read it before explaining it yourself, then use their unanswered questions to revise the page.",
          "On a phone, check key labels without zooming. Review links, image loading, spelling, product names and production details. Check the public prelaunch page separately, because it serves a different purpose and Kickstarter’s website and app may show different details. Every question the reader asks is a fix you can make before launch day."
        ],
        "visual": {
          "kind": "steps",
          "title": "A stranger with a phone finds the gaps faster than another proofread",
          "steps": [
            { "label": "Hand over the preview", "detail": "On a phone, with no explanation from you" },
            { "label": "Ask them to explain a turn", "detail": "Note where they scroll back or guess" },
            { "label": "Ask them to pick a reward", "detail": "Check they can say what is in it" },
            { "label": "Ask where shipping is covered", "detail": "Timing, regions and how it is charged" },
            { "label": "Fix, then test again", "detail": "Use a new reader for the second round" }
          ]
        },
        "source": 1
      },
      {
        "id": "final-platform-check",
        "title": "Check the assembled campaign, not only the files",
        "paragraphs": [
          "After the last upload, open the actual platform preview. Test the rules and review links without private sharing access. Confirm that heading navigation works where supported, reward prices match the graphics and shipping collection timing is stated.",
          "Review the image labels for prototypes and unfinished artwork. Give the creator a short list of remaining factual decisions before approving launch."
        ],
        "list": [
          "Gameplay and rules links work for a new visitor.",
          "Prototype and render labels are visible beside the images.",
          "Native rewards match contents, prices and optional extras.",
          "Shipping collection timing and delivery estimates agree.",
          "The creator has checked the final mobile and desktop views."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should I put the full rulebook in the campaign story?",
        "answer": "Usually a concise gameplay explanation and a link to the rules are easier to follow. This is a design recommendation, not a Kickstarter requirement."
      },
      {
        "question": "What should I test on a phone?",
        "answer": "The opening, card labels, reward comparisons, image loading, video framing and any link needed to understand or select a reward."
      },
      {
        "question": "What should a board game Kickstarter page include?",
        "answer": "An opening with the name, a real product image and one line on what players do, then player count, play time and age guidance. Follow with a sample turn, a labelled rules link, the component list, an edition comparison and the shipping plan."
      },
      {
        "question": "Can I get help before the page is finished?",
        "answer": "Yes. A free Guildframe mockup can explore the opening and identify the assets needed for the full campaign."
      }
    ],
    "seoTitle": "Board Game Kickstarter Page Checklist Before Launch",
    "relatedSlugs": [
      "board-game-kickstarter-gameplay-rulebook",
      "kickstarter-image-sizes",
      "kickstarter-campaign-video-planning",
      "kickstarter-review-launch-timeline",
      "kickstarter-shipping-delivery-page"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign design for tabletop games",
    "updated": "2026-11-25"
  },
  {
    "slug": "what-to-send-kickstarter-campaign-designer",
    "title": "What to Send Your Kickstarter Campaign Designer",
    "description": "Send your Kickstarter designer the game summary, artwork, reward contents and launch plans. Use this checklist to prepare the brief.",
    "tag": "Your design brief",
    "answer": "Send a short game summary, artwork, gameplay information, reward contents and prices, production details, your platform and a planned launch date. Mark finished files and placeholders. Explain the folder so your designer knows which files to use.",
    "sources": [
      {
        "label": "Guildframe campaign design scope and price",
        "publisher": "Guildframe",
        "href": "/campaign-design"
      },
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      }
    ],
    "sections": [
      {
        "id": "summary",
        "title": "Start with the game in plain language",
        "paragraphs": [
          "Describe the product and who it’s for. For a board game, explain the choices players make. For an RPG, describe a session and any required system. For an accessory, say what it does and which products it fits.",
          "Explain the tone you want. If you share campaign references, say what you like: the layout, reward comparison or colours. That tells the designer more than a request to copy another game’s page."
        ],
        "list": [
          "Game name and a short pitch",
          "Audience, play experience and standout features",
          "Platform and target launch date",
          "Design references with a sentence about each"
        ]
      },
      {
        "id": "art",
        "title": "Send artwork that can actually be used",
        "paragraphs": [
          "Send the best available logo, box art, component images and product photos. Include original files and transparent versions where available. Card images need enough resolution for their text to remain readable on the campaign page.",
          "Group the folder into logos, product images, gameplay, interiors and rewards. Name files by product, version and status. For several editions or bundles, a PDF or spreadsheet with the contents helps the designer use the right images."
        ],
        "list": [
          "Final logo and brand colours if established",
          "Product and component artwork",
          "Interior spreads or sample cards where relevant",
          "Rules, sample adventure or gameplay links",
          "A list of placeholder images that will change"
        ]
      },
      {
        "id": "facts",
        "title": "Keep reward and production facts in a separate document",
        "paragraphs": [
          "Put reward names, contents and prices in one table, with a row for each tier. List optional extras separately. Include compatibility, languages and whether each item is physical or digital.",
          "Share the production, shipping, delivery, risk and team information you’re ready to publish. Mark unresolved facts and estimates. Check that the images only show components included in the reward, or label the extras."
        ],
        "table": {
          "headers": [
            "Field",
            "Example of useful information"
          ],
          "rows": [
            [
              "Reward name",
              "Core game, deluxe edition, digital bundle"
            ],
            [
              "Contents",
              "Specific products and quantities"
            ],
            [
              "Price",
              "Confirmed currency and amount"
            ],
            [
              "Status",
              "Final, estimated or pending confirmation"
            ]
          ]
        }
      },
      {
        "id": "handoff",
        "title": "Agree who reviews the final page",
        "paragraphs": [
          "Choose one person to collect design feedback. If someone else checks rules, rewards or production details, explain how they’ll review the page before agreeing the deadline. Knowing who owns each fact makes corrections easier.",
          "For a free Guildframe mockup, a game summary, artwork link, platform and launch plans are enough to start. We can explore the opening while you prepare the rest. The full project starts after we agree the scope, fees and schedule."
        ],
        "source": 0
      }
    ],
    "faqs": [
      {
        "question": "Do I need all the art finished to request a mockup?",
        "answer": "No. Share enough material to establish a direction and label unfinished pieces clearly. Final campaign production needs the artwork that will actually appear."
      },
      {
        "question": "Should I give a designer my account password?",
        "answer": "No. Start with files, a brief and preview links. If platform access is required later, agree an appropriate access method without putting passwords in the brief."
      },
      {
        "question": "Can the designer write campaign copy?",
        "answer": "Guildframe shapes the copy from your information. You remain responsible for confirming product, gameplay, reward and production facts."
      }
    ],
    "seoTitle": "What to Send Your Kickstarter Campaign Designer",
    "relatedSlugs": [
      "when-to-hire-kickstarter-campaign-designer",
      "board-game-kickstarter-campaign-design-cost",
      "kickstarter-reward-tier-graphics"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign copy and graphics",
    "updated": "2026-10-03"
  },
  {
    "slug": "kickstarter-reward-tier-graphics",
    "title": "Kickstarter Reward Tier Graphics for Board Games",
    "description": "Design Kickstarter reward graphics that show the contents of each tier. Compare board game editions, card decks, RPG books and optional extras.",
    "tag": "Reward design",
    "answer": "A reward graphic should name the tier, show its contents and explain how it differs from the others. Use consistent images and labels, and compare each graphic with the platform’s reward setup before launch.",
    "sources": [
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      },
      {
        "label": "Gamefound project detailed description",
        "publisher": "Gamefound",
        "href": "https://help.gamefound.com/article/214-project-detailed-description"
      },
      {
        "label": "Adding rewards and reward images",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project"
      }
    ],
    "sections": [
      {
        "id": "inventory",
        "title": "Make one reward inventory before making graphics",
        "paragraphs": [
          "List every tier and the items it includes. Use one name for each item. State whether an expansion bundle includes the base game. For an RPG, list physical books, PDFs and extras separately.",
          "Mark optional extras in both the graphic and the platform setup. If the dice or sleeves beside a box cost extra, a backer should be able to see that immediately."
        ],
        "table": {
          "headers": [
            "Reward",
            "What the comparison needs to show"
          ],
          "rows": [
            [
              "Core game",
              "Base contents and edition"
            ],
            [
              "Deluxe game",
              "Everything in core plus the actual upgrades"
            ],
            [
              "Complete bundle",
              "Each included game and expansion"
            ],
            [
              "Digital reward",
              "File format, content and applicable licence"
            ]
          ]
        }
      },
      {
        "id": "example",
        "title": "Example: compare the contents before the artwork",
        "paragraphs": [
          "This fictional reward plan shows how a single list keeps the graphics consistent. Replace the names and counts with your confirmed products. Optional extras need their own label, even if they appear beside a reward in a photograph."
        ],
        "table": {
          "headers": [
            "Example reward",
            "Included",
            "Optional extra"
          ],
          "rows": [
            [
              "Base card game",
              "One complete 60 card deck and rules",
              "Card sleeves"
            ],
            [
              "Two deck bundle",
              "Two complete 60 card decks and rules",
              "Card sleeves"
            ],
            [
              "RPG print + PDF",
              "One printed book and its PDF",
              "Dice set"
            ]
          ]
        }
      },
      {
        "id": "hierarchy",
        "title": "Use a repeatable visual order",
        "paragraphs": [
          "Put the reward name in the same place on each graphic. Show the main product, then the included extras, with a short line explaining the difference. That makes tiers easier to compare.",
          "When several rewards share most contents, try a labelled comparison table. Save detailed component spreads for the product sections, where readers can inspect what they’re buying."
        ],
        "list": [
          "Reward name and edition",
          "Main product image",
          "Included items with quantities where useful",
          "Difference from the previous option",
          "Optional extras labelled separately"
        ]
      },
      {
        "id": "mobile",
        "title": "Check comparison graphics at phone width",
        "paragraphs": [
          "Preview the reward graphic at the width it will occupy on a phone. If someone has to pinch to read the contents, simplify the layout or split the information into smaller sections.",
          "Where the platform allows it, put essential contents in readable page text too. Someone should still be able to understand the reward if the image is small or slow to load."
        ],
        "source": 0
      },
      {
        "id": "consistency",
        "title": "Make the story and reward setup agree",
        "paragraphs": [
          "Check the graphics against the actual reward records before launch. Names, counts, prices and extras must match. Remove images for tiers you’ve retired.",
          "Gamefound places reward sections alongside the story and controls visibility by campaign stage. Plan the graphics for that structure. The creator confirms the reward configuration and fulfilment details on either platform."
        ],
        "source": 1
      },
      {
        "id": "native-images",
        "title": "Check the native reward image and add-on settings",
        "paragraphs": [
          "Kickstarter reward and add-on images use a 3:2 ratio, at least 348 × 232 pixels and a maximum file size of 50 MB. Supported formats in its reward guidance are JPG, PNG and GIF. These are the native reward fields, not the tall section graphics in the story.",
          "A digital main reward cannot accept shippable add-ons. Check product format, destinations and the reward configuration before promising a mixed bundle in a graphic."
        ],
        "source": 2
      }
    ],
    "faqs": [
      {
        "question": "Should every tier have its own large graphic?",
        "answer": "Only when it helps the choice. Shared layouts or a compact comparison can explain similar tiers more clearly."
      },
      {
        "question": "Can I show an optional extra beside the main reward?",
        "answer": "Yes, if it is clearly labelled as optional and the graphic matches the reward configuration. Do not imply that it is included."
      },
      {
        "question": "Are reward graphics included in Guildframe campaign design?",
        "answer": "Reward presentation is part of the campaign design service. The exact graphics and comparison format are agreed in the brief."
      }
    ],
    "seoTitle": "Kickstarter Reward Tier Graphics for Board Games",
    "relatedSlugs": [
      "card-game-kickstarter-launch-guide",
      "miniatures-stl-kickstarter-launch-guide",
      "kickstarter-stretch-goals-planning"
    ],
    "servicePath": "/card-game-kickstarter-campaign-design",
    "serviceLabel": "Card game Kickstarter page design",
    "updated": "2026-10-03"
  },
  {
    "slug": "ttrpg-kickstarter-campaign-page-design",
    "title": "How to Design a TTRPG Kickstarter Campaign Page",
    "description": "Build a TTRPG Kickstarter page that explains the game, shows sample spreads and separates PDF and print rewards. A practical guide for RPG creators.",
    "tag": "RPG launches",
    "answer": "Explain what happens during a session, which system or books players need and what each reward contains. Show readable sample pages and accurate print and digital details. Leave room for those answers within the atmosphere of the game.",
    "sources": [
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      },
      {
        "label": "Guildframe campaign design scope and price",
        "publisher": "Guildframe",
        "href": "/campaign-design"
      }
    ],
    "sections": [
      {
        "id": "experience",
        "title": "Introduce the play experience before the lore",
        "paragraphs": [
          "Give someone a way into the setting. Describe the characters players take, the situations they face and the tone of a session. A short example can do more here than several paragraphs of world history.",
          "Say whether this is a complete game, an adventure or a supplement. Name any required core book or system using the compatibility information you’re authorised to publish. Readers need to know what else they’ll need to play."
        ],
        "list": [
          "What the group does during play",
          "The tone and intended experience",
          "Any required system or additional books",
          "Available sample, quickstart or play material"
        ]
      },
      {
        "id": "samples",
        "title": "Show readable sample pages",
        "paragraphs": [
          "Show a rules page, adventure location, character sheet or usable table at a readable size. A book render shows the physical object; a sample spread lets someone judge how the pages work during play.",
          "If you have a shareable sample, link to it and say what’s included. Label prototype images and unfinished layouts so readers know what is still changing."
        ],
        "source": 0
      },
      {
        "id": "formats",
        "title": "Separate physical, digital and bundle rewards",
        "paragraphs": [
          "List what’s in each reward. Say when a print book includes its PDF, and name the adventures or maps in a digital bundle. Exact contents are easier to compare than a label such as complete package.",
          "Use confirmed page count, dimensions, binding, paper and production details, or clearly label estimates. Format and scope can help explain a zine; for a hardback, readers also need to see the contents and how the layout works."
        ],
        "table": {
          "headers": [
            "Reward format",
            "Questions to answer"
          ],
          "rows": [
            [
              "PDF",
              "Which books or files are included?"
            ],
            [
              "Print book",
              "What format and confirmed specifications?"
            ],
            [
              "Print plus digital",
              "Does it include the matching PDF?"
            ],
            [
              "Bundle",
              "Which adventures, maps or supplements are included?"
            ]
          ]
        }
      },
      {
        "id": "direction",
        "title": "Build a direction that matches the game",
        "paragraphs": [
          "Take the colours, type and imagery from the game. A noir investigation might use restrained colour; a whimsical adventure might be brighter. A horror zine may use empty space to build tension. Keep enough contrast and space for the practical details.",
          "Guildframe prepares page structure, copy and graphics using your artwork. Send a summary, sample spread and launch plans for a free opening mockup. New book illustration and video need their own scope."
        ],
        "source": 1
      }
    ],
    "faqs": [
      {
        "question": "Do I need a fully written book before requesting design?",
        "answer": "Not necessarily. A clear premise and usable artwork can establish a direction. Final campaign claims and sample material must be reviewed for accuracy before launch."
      },
      {
        "question": "Should the campaign include a sample PDF?",
        "answer": "A sample can help readers assess the layout and tone if you have one ready to share. It is a design recommendation, not a platform requirement."
      },
      {
        "question": "Can one campaign show print and digital rewards?",
        "answer": "Yes. Present the contents and format clearly for each option, then make sure the platform reward setup matches."
      }
    ],
    "seoTitle": "How to Design a TTRPG Kickstarter Campaign Page",
    "relatedSlugs": [
      "kickstarter-reward-tier-graphics",
      "what-to-send-kickstarter-campaign-designer",
      "kickstarter-campaign-graphics-mobile-readability"
    ],
    "servicePath": "/ttrpg-kickstarter-campaign-design",
    "serviceLabel": "TTRPG Kickstarter page design",
    "updated": "2026-10-03"
  },
  {
    "slug": "kickstarter-vs-gamefound-campaign-page-design",
    "title": "Kickstarter vs Gamefound: Campaign Page Design Differences",
    "description": "How campaign page design differs on Kickstarter and Gamefound, from story sections and reward layouts to stages and previews, for creators who have picked one.",
    "tag": "Platform planning",
    "answer": "Kickstarter and Gamefound pages need the same core content, a clear game introduction, product images and reward comparisons, but each platform builds the page differently. Gamefound splits the page into story and reward sections with visibility by stage, while on Kickstarter you check the prelaunch page and the campaign preview separately.",
    "sources": [
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      },
      {
        "label": "Gamefound project detailed description",
        "publisher": "Gamefound",
        "href": "https://help.gamefound.com/article/214-project-detailed-description"
      },
      {
        "label": "Setting up a Kickstarter prelaunch page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      },
      {
        "label": "Launching an approved Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236427-how-do-i-launch-my-project-after-it-s-been-approved"
      },
      {
        "label": "Tester Mode",
        "publisher": "Gamefound",
        "href": "https://help.gamefound.com/article/366-tester-mode"
      }
    ],
    "sections": [
      {
        "id": "platform-choice",
        "title": "Still choosing a platform? Start with the comparison",
        "paragraphs": [
          "This guide is about how the campaign page is built once you have picked a platform. If you are still deciding where to launch, read our [Kickstarter vs Gamefound comparison](/guides/kickstarter-vs-gamefound) first, because fees, audience, pledge manager tools and add ons usually matter more than the page editor.",
          "Once the platform is settled, come back here. The rest of this guide covers what changes in the story, the rewards and the checks before launch, so the page you design fits the editor you will actually use."
        ]
      },
      {
        "id": "common",
        "title": "Start with the shared content, then adapt the page",
        "paragraphs": [
          "Most of the work is the same on both platforms. Start with one list of content: the premise, gameplay, components and production facts. Those details stay the same when the platform changes, so decide where each belongs in the chosen editor only after the list is approved.",
          "The difference is in how each platform assembles and reveals that content. The comparison below sums it up, and the sections after it explain each point. This guide covers page preparation, so it doesn't predict which platform will raise more money."
        ],
        "visual": {
          "kind": "compare",
          "title": "The same content, built two different ways",
          "columns": [
            {
              "name": "Kickstarter",
              "points": [
                "One project story for the campaign",
                "A separate public prelaunch page",
                "A preview link for draft feedback",
                "Manual launch after approval"
              ],
              "verdict": "Check the prelaunch page and preview separately"
            },
            {
              "name": "Gamefound",
              "points": [
                "Story and reward sections you can rearrange",
                "Sections unpublished by default",
                "Visibility that changes by stage",
                "Tester Mode for stages and checkout"
              ],
              "verdict": "Check every section in the stage you will promote"
            }
          ],
          "caption": "Summary of the Kickstarter and Gamefound help articles listed in the sources below.",
          "source": "Kickstarter Help Center and Gamefound Help Center"
        },
        "table": {
          "headers": [
            "Design job",
            "What to prepare"
          ],
          "rows": [
            [
              "Opening",
              "Title, premise and principal product image"
            ],
            [
              "Story",
              "Gameplay, components, team and production information"
            ],
            [
              "Rewards",
              "Accurate product names, contents and comparison graphics"
            ],
            [
              "Review",
              "Preview checks on desktop and phone"
            ]
          ]
        }
      },
      {
        "id": "kickstarter",
        "title": "Review Kickstarter’s prelaunch page separately",
        "paragraphs": [
          "On Kickstarter, the first thing many people see is the prelaunch page, not the campaign. Its guidance lists the title, subtitle, image and creator information, with an editable description on desktop. The app doesn’t show that description, so check whether the title and image explain the idea on their own.",
          "The preview and prelaunch page have separate URLs and audiences. Use the preview for detailed feedback, and review the public page as the short introduction people will see before launch."
        ],
        "source": 2
      },
      {
        "id": "gamefound",
        "title": "Plan Gamefound’s sections and their visibility",
        "paragraphs": [
          "Gamefound asks you to think in stages from the start. Its description guidance lists story and reward sections in preview, with more sections for crowdfunding and pledge management. Creators can add and rearrange them, and a published section only becomes visible when its relevant stage begins.",
          "Plan which content belongs in preview and which belongs in the live campaign, then check the actual page and visibility settings with the creator after upload. The [Gamefound launch checklist](/guides/gamefound-launch-page-checklist) walks through those checks, including Tester Mode."
        ],
        "source": 1
      },
      {
        "id": "assets",
        "title": "Export for the editor, then check the uploaded result",
        "paragraphs": [
          "Files that look right on a design canvas can break once uploaded. Keep editable source files and export images using the platform’s current media guidance. Break the page into sections so a phone reader can read the main information, because a single tall image can make every label too small. The [mobile graphics guide](/guides/kickstarter-campaign-graphics-mobile-readability) covers sizes and readability.",
          "After upload, check spacing, compression, labels and reward names on the actual page. We design for either platform as part of our [Kickstarter campaign design](/campaign-design) service, with a separate [Gamefound page design](/gamefound-campaign-design) option, and we confirm the platform before agreeing the files and deliverables."
        ],
        "source": 0
      },
      {
        "id": "stage-checks",
        "title": "Check launch behaviour and stage visibility",
        "paragraphs": [
          "The last difference shows up on launch day. Kickstarter launch is manual after approval, and setting a Target Launch Date does not publish the project. Gamefound descriptions and reward visibility depend on the stage and publication settings, so a finished draft in one stage is not proof that the next public stage is complete.",
          "Use the dedicated launch guides to review the selected platform. Keep the factual reward plan consistent across either platform and adapt the layout to its actual editor, and the page will read the same wherever backers find it."
        ],
        "source": 3
      }
    ],
    "faqs": [
      {
        "question": "Can the same design be moved between platforms?",
        "answer": "Some artwork and copy can be reused, but page structure, media exports and reward presentation should be checked in the destination editor."
      },
      {
        "question": "Should I launch on Kickstarter or Gamefound?",
        "answer": "That choice depends on fees, audience, pledge manager tools and add ons more than on page design. Our Kickstarter vs Gamefound comparison covers the platform decision, and this guide covers the page once you have chosen."
      },
      {
        "question": "Do Gamefound pages need separate preview and live content?",
        "answer": "Plan for it. Gamefound's description guidance lists story and reward sections in preview, with more sections for crowdfunding and pledge management, and a published section only becomes visible when its stage begins."
      },
      {
        "question": "Is Gamefound always better for board games?",
        "answer": "There is no funding comparison in this guide. Choose a platform after checking your audience, eligibility, fees and operating requirements as well as its page editor."
      },
      {
        "question": "Does Guildframe charge differently for Gamefound?",
        "answer": "The fixed campaign design price is listed on the service page. The chosen platform, files and scope are confirmed in the brief. Broader launch services are quoted separately."
      }
    ],
    "seoTitle": "Campaign Page Design on Kickstarter vs Gamefound",
    "relatedSlugs": [
      "kickstarter-vs-gamefound",
      "gamefound-launch-page-checklist",
      "kickstarter-campaign-graphics-mobile-readability",
      "kickstarter-prelaunch-page-guide"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter and Gamefound campaign page design",
    "updated": "2026-11-25"
  },
  {
    "slug": "kickstarter-campaign-graphics-mobile-readability",
    "title": "Kickstarter Image Sizes and Readable Campaign Graphics",
    "description": "Check Kickstarter image size, file formats and mobile readability. Make campaign graphics and reward comparisons readable without zooming.",
    "tag": "Design review",
    "answer": "Review campaign graphics at their actual width on a phone. Readers should be able to understand the premise, component labels and reward differences without zooming. Simplify dense graphics, split them into sections or put the details in readable page text.",
    "sources": [
      {
        "label": "Adding images and media to a Kickstarter project",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236740-how-do-i-include-images-or-other-media-in-my-project-description-and-updates"
      },
      {
        "label": "Gamefound project detailed description",
        "publisher": "Gamefound",
        "href": "https://help.gamefound.com/article/214-project-detailed-description"
      },
      {
        "label": "Adding rewards and reward images",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project"
      },
      {
        "label": "Project video and Discovery Mode",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236743-is-a-project-video-required-to-launch"
      },
      {
        "label": "Adding a story table of contents",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236730-how-do-i-add-a-table-of-contents-to-my-project-s-story"
      }
    ],
    "sections": [
      {
        "id": "specifications",
        "title": "Match the export to the upload field",
        "paragraphs": [
          "A project cover, story section and native reward image serve different purposes. Use the current editor guidance for the specific field. The table separates documented limits from suggested dimensions."
        ],
        "table": {
          "headers": [
            "Destination",
            "Current guidance",
            "Source"
          ],
          "rows": [
            [
              "Kickstarter story image",
              "At most 50 MB; JPEG, PNG or GIF recommended; scale to at least 700 px as recommended",
              "Kickstarter media guidance"
            ],
            [
              "Kickstarter reward image",
              "3:2 ratio; minimum 348 × 232 px; at most 50 MB; JPG, PNG or GIF",
              "Kickstarter reward guidance"
            ],
            [
              "Kickstarter main video",
              "Optional; up to 5120 MB in the Basics tab",
              "Kickstarter video guidance"
            ],
            [
              "Discovery Mode clip",
              "Optional; 9:16 vertical; 60 to 90 seconds recommended for this clip",
              "Kickstarter video guidance"
            ],
            [
              "Gamefound description image",
              "840 to 1200 px wide recommended; check the section media guidance",
              "Gamefound description guidance"
            ]
          ]
        },
        "source": 0
      },
      {
        "id": "test",
        "title": "Upload a sample and check it on a phone",
        "paragraphs": [
          "Upload one representative section early. A large design canvas gives components more room than a phone’s campaign column, so check the uploaded size before designing the rest.",
          "Use your phone and another size if available. Review the opening, a gameplay section and the busiest reward comparison. A backer shouldn’t have to pinch to find the information needed to choose a reward."
        ],
        "list": [
          "Can you read the main idea immediately?",
          "Are product names and reward differences legible?",
          "Does the image load without an unreasonable wait?",
          "Does a narrow crop hide a relevant piece of the product?"
        ]
      },
      {
        "id": "simplify",
        "title": "Give each graphic one main job",
        "paragraphs": [
          "Choose what each graphic needs to explain. The component spread shows the box contents. A sample turn explains play. A reward comparison shows which option includes the expansion. Putting them together can make the labels too small.",
          "Move details to the sections where they’re needed. Shorten captions and leave space around the main item. If two rewards differ by only a few components, try a compact comparison."
        ],
        "table": {
          "headers": [
            "Problem",
            "Useful correction"
          ],
          "rows": [
            [
              "Tiny contents list",
              "Use a short comparison or separate text"
            ],
            [
              "Crowded component spread",
              "Group related pieces and label the groups"
            ],
            [
              "Dense gameplay diagram",
              "Show a few actions in sequence"
            ],
            [
              "Tall decorative section",
              "Break it into focused sections"
            ]
          ]
        }
      },
      {
        "id": "media",
        "title": "Kickstarter image sizes and file formats",
        "paragraphs": [
          "Kickstarter’s current media guidance sets a 50 MB image limit, recommends JPEG, PNG or GIF, and advises scaling images to 700 pixels or more before upload. Uploaded images are compressed. These are story image guidelines; check the Basics editor separately for your project cover.",
          "Keep an editable master, export one section and check the uploaded result before preparing the rest. Larger source files do not fix labels that become too small on a phone.",
          "Gamefound uses its own description editor and media guidance. Confirm the requirements there rather than assuming the Kickstarter export will display the same way."
        ],
        "source": 0
      },
      {
        "id": "review",
        "title": "Ask a fresh reader to find a reward",
        "paragraphs": [
          "Ask someone to find a specific reward, such as the base game with an expansion or the print book with its PDF. Watch where they hesitate. If they have to search several graphics, make the comparison easier to find and read.",
          "Check contrast, heading order, links and essential text too. Guildframe reviews the campaign presentation within the agreed brief. A free opening mockup can help establish readable type and layout early."
        ],
        "source": 0
      },
      {
        "id": "navigation",
        "title": "Make headings work as navigation",
        "paragraphs": [
          "Kickstarter story headings can create a table of contents. Image sections can also receive a heading label. Use names such as gameplay, rewards and shipping that help a reader find an answer.",
          "The section links work on desktop and mobile web; Kickstarter says the feature is not supported in its app. Check the page in both contexts and keep the story understandable without that navigation."
        ],
        "source": 4
      }
    ],
    "faqs": [
      {
        "question": "What size should Kickstarter campaign images be?",
        "answer": "Kickstarter advises scaling story images to 700 pixels or more and limits each file to 50 MB. It recommends JPEG, PNG or GIF. Check the uploaded image on a phone because the platform compresses files and the displayed width varies."
      },
      {
        "question": "Should all campaign text be baked into images?",
        "answer": "Keep essential information available as readable page text where practical. Graphics can support the story without carrying every sentence."
      },
      {
        "question": "Can animated graphics help?",
        "answer": "Sometimes, when movement explains play or shows a product function. Keep a useful still image and readable explanation as well."
      }
    ],
    "seoTitle": "Kickstarter Image Sizes & Mobile Graphics",
    "relatedSlugs": [
      "kickstarter-campaign-video-planning",
      "kickstarter-reward-tier-graphics",
      "board-game-kickstarter-page-checklist"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign copy and graphics",
    "updated": "2026-10-03"
  },
  {
    "slug": "when-to-hire-kickstarter-campaign-designer",
    "title": "When Should You Hire a Kickstarter Campaign Designer?",
    "description": "Contact a Kickstarter page designer once your game summary and usable artwork are ready. Plan assets, rewards and review time before launch.",
    "tag": "Launch timing",
    "answer": "Contact a campaign designer once you can explain the game and share usable artwork and proposed rewards. You can explore an opening design earlier. Schedule the full page around asset delivery and review time; the right start date depends on what is ready.",
    "sources": [
      {
        "label": "Setting up a Kickstarter prelaunch page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      },
      {
        "label": "Guildframe campaign design scope and price",
        "publisher": "Guildframe",
        "href": "/campaign-design"
      }
    ],
    "sections": [
      {
        "id": "readiness",
        "title": "What can start before the game is finished?",
        "paragraphs": [
          "An opening mockup can start before every reward image and production detail is final. For the full page, unfinished content means work will need to be replaced and checked again.",
          "If the premise and art direction are settled, start with the opening and page outline while rewards are being decided. If the game itself is still changing, prepare a more settled brief before commissioning final graphics."
        ],
        "table": {
          "headers": [
            "Stage",
            "Useful design work"
          ],
          "rows": [
            [
              "Premise and art direction established",
              "Opening mockup and page outline"
            ],
            [
              "Reward contents and assets taking shape",
              "Content inventory and comparison plan"
            ],
            [
              "Key facts and artwork confirmed",
              "Final page graphics and copy"
            ],
            [
              "Content uploaded to the platform",
              "Preview review and corrections"
            ]
          ]
        }
      },
      {
        "id": "inputs",
        "title": "Check the inputs before promising a date",
        "paragraphs": [
          "List missing assets and who will supply each one. Component renders, sample spreads, gameplay media, reward prices and production information may come from different people. Include their delivery dates in the design schedule.",
          "Tell the designer what’s available, what will change and when to expect the rest. Agree whether the schedule starts at booking or when the required assets arrive."
        ],
        "list": [
          "A usable logo and principal product artwork",
          "A concise game or product explanation",
          "Proposed reward names and contents",
          "An owner for production and delivery facts",
          "A person who will consolidate design feedback"
        ]
      },
      {
        "id": "review",
        "title": "Leave time for an actual review",
        "paragraphs": [
          "Review the design after upload. The creator checks product facts, rewards and visibility. A new reader checks whether the page explains the game. Phone review can catch labels that looked fine on the design canvas.",
          "Leave time for those checks before launch day. Work back from the launch date to allow for assets, design, feedback and preview corrections. Guildframe agrees timing from the brief because projects vary."
        ],
        "source": 1
      },
      {
        "id": "prelaunch",
        "title": "Prepare the public introduction alongside the full campaign",
        "paragraphs": [
          "Kickstarter recommends sharing a prelaunch page before launch. It lets people follow the project and receive a launch notification. Prepare it alongside the full campaign story.",
          "Check that the title and main image explain the project while the longer page is being designed. Once you have a summary and artwork, request a free Guildframe opening mockup. The full scope and timing are agreed before work starts."
        ],
        "source": 0
      }
    ],
    "faqs": [
      {
        "question": "Should I hire a designer before all the art is final?",
        "answer": "You can explore a direction early, but identify unfinished assets and agree when they must be supplied for final production."
      },
      {
        "question": "How long does Guildframe campaign design take?",
        "answer": "The schedule depends on the assets, page sections and review process. I confirm it after looking at your brief and planned launch date."
      },
      {
        "question": "Can design replace building a prelaunch audience?",
        "answer": "No. Campaign design and audience preparation are different work. A clear page still needs the right people to discover it."
      }
    ],
    "seoTitle": "When to Hire a Kickstarter Campaign Designer",
    "relatedSlugs": [
      "what-to-send-kickstarter-campaign-designer",
      "board-game-kickstarter-campaign-design-cost",
      "board-game-kickstarter-page-checklist"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign copy and graphics",
    "updated": "2026-10-03"
  }

];

const growthUpdatedSlugs = new Set(["choose-board-game-kickstarter-marketing-agency", "board-game-kickstarter-campaign-design-cost", "kickstarter-prelaunch-email-list", "kickstarter-campaign-video-planning", "kickstarter-advertising-budget-board-games"]);
export const launchGuides = originalLaunchGuides.map(reviseLaunchGuide).map(reviseBuyerGuide).map(guide => growthUpdatedSlugs.has(guide.slug) && !(guide.updated && guide.updated > contentDates.growthReview) ? {...guide, updated:contentDates.growthReview} : guide);

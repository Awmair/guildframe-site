import {marketingGuides} from "./launch-marketing-guides";
import {newLaunchGuides} from "./launch-guides-new";
import {decisionGuides} from "./launch-decision-guides";
export type LaunchSection={id:string;title:string;paragraphs:string[];list?:string[];table?:{headers:string[];rows:string[][]};source?:number};
export type LaunchGuide={published?:string;updated?:string;slug:string;title:string;seoTitle?:string;relatedSlugs:string[];servicePath:string;serviceLabel:string;description:string;tag:string;answer:string;sections:LaunchSection[];faqs:{question:string;answer:string}[];sources:{label:string;publisher:string;href:string}[]};
export const launchGuideDate="2026-09-30";
export const launchGuides:LaunchGuide[]=[
  ...decisionGuides,
  ...marketingGuides,
  ...newLaunchGuides,


  {
    "slug": "board-game-kickstarter-campaign-design-cost",
    "title": "How Much Does Board Game Kickstarter Campaign Design Cost?",
    "description": "Budget your tabletop Kickstarter page by scope: copy, graphics, artwork, video and launch support. Compare quotes and see Guildframe’s design-only option.",
    "tag": "Budget planning",
    "answer": "Campaign design cost depends on the copy, graphics, artwork and review work included. Compare quotes against a written file list and schedule. Guildframe lists its fixed design-only price on the campaign design page; prelaunch, advertising and live management are scoped separately. Other designers’ prices depend on their scope, so one published fee is not an industry average.",
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
          "Check what a design quote includes. A single opening image is a different job from planning the whole page, editing the copy and designing reward comparisons. Both may be listed as Kickstarter design.",
          "Write down the sections you need: the introduction, gameplay, components, editions, rewards, stretch goals, reviews and production plan. Note which images and facts you’ll provide and what the designer will put together."
        ],
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
          "Guildframe’s design-only option covers page structure, campaign copy, section graphics and reward presentation using supplied artwork. The current fee is shown on the campaign design page. We agree the file list, review process and schedule before starting.",
          "Prelaunch pages and email, paid advertising and live campaign management are additional services. A full launch proposal should list service fees separately from media spend, software, platform fees and any external production work."
        ],
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
          "To start with Guildframe, send the game summary, artwork link, platform and planned launch date. You can request a free opening mockup for creative work, or discuss a broader launch. Ask for the deliverables, fees and review dates in writing before committing."
        ]
      }
    ],
    "faqs": [
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
    "seoTitle": "Kickstarter Campaign Design Cost & Budget Guide",
    "relatedSlugs": [
      "when-to-hire-kickstarter-campaign-designer",
      "what-to-send-kickstarter-campaign-designer",
      "board-game-kickstarter-page-checklist"
    ],
    "servicePath": "/campaign-design",
    "serviceLabel": "Kickstarter campaign copy and graphics",
    "updated": "2026-10-03"
  },
  {
    "slug": "board-game-kickstarter-page-checklist",
    "title": "Board Game Kickstarter Page Checklist Before Launch",
    "description": "Check your board game Kickstarter page before launch: gameplay, box contents, rewards, shipping information and mobile readability.",
    "tag": "Launch preparation",
    "answer": "Check whether a new reader can explain your game, name what comes in the box, compare the rewards and find the delivery plan. Then review the Kickstarter preview on a phone with someone who hasn’t played the game. Their questions will show you what still needs work.",
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
          "Put the confirmed player count, play time and age guidance near the gameplay section. Mention solo play or a required companion app there too. Those details help someone decide whether the game fits their group."
        ],
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
          "Ask someone unfamiliar with the game to read the preview and describe the game, reward options and delivery plan. Let them read it before explaining it yourself. Use their unanswered questions to revise the page.",
          "On a phone, check key labels without zooming. Review links, image loading, spelling, product names and production details. Check the public prelaunch page separately; it serves a different purpose, and Kickstarter’s website and app may show different details."
        ],
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
        "question": "Can I get help before the page is finished?",
        "answer": "Yes. A free Guildframe mockup can explore the opening and identify the assets needed for the full campaign."
      }
    ],
    "seoTitle": "Board Game Kickstarter Page Checklist",
    "relatedSlugs": [
      "kickstarter-review-launch-timeline",
      "board-game-kickstarter-gameplay-rulebook",
      "kickstarter-shipping-delivery-page"
    ],
    "servicePath": "/board-game-kickstarter-campaign-design",
    "serviceLabel": "Board game Kickstarter page design",
    "updated": "2026-10-03"
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
    "description": "Compare Kickstarter and Gamefound story sections, reward layouts and preview tools. Prepare campaign copy and graphics for the platform you choose.",
    "tag": "Platform planning",
    "answer": "Both platforms need a clear game introduction, product images and rewards. Prepare the assets for the editor you’ll use. Gamefound has separate story and reward sections with visibility by stage. On Kickstarter, check the prelaunch page and campaign preview separately.",
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
      }
    ],
    "sections": [
      {
        "id": "common",
        "title": "Start with the shared content, then adapt the page",
        "paragraphs": [
          "Start with one list of content: the premise, gameplay, components and production facts. Those details stay the same when the platform changes. Then decide where each belongs in the chosen editor.",
          "Review eligibility, payments, project type, fees and operating requirements before choosing a platform. A preferred layout is only one consideration. This guide covers page preparation; it doesn’t predict which platform will raise more money."
        ],
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
          "Kickstarter’s public prelaunch page lets people follow an upcoming project. Its guidance lists the title, subtitle, image and creator information, with an editable description on desktop. The app doesn’t show that description, so check whether the title and image explain the idea on their own.",
          "The preview and prelaunch page have separate URLs and audiences. Use the preview for detailed feedback. Review the public page as the short introduction people will see before launch."
        ],
        "source": 2
      },
      {
        "id": "gamefound",
        "title": "Plan Gamefound’s sections and their visibility",
        "paragraphs": [
          "Gamefound’s description guidance lists story and reward sections in preview, with more sections for crowdfunding and pledge management. Creators can add and rearrange them. A published section only becomes visible when its relevant stage begins.",
          "Plan which content belongs in preview and which belongs in the live campaign. Check the actual page and visibility settings with the creator after upload."
        ],
        "source": 1
      },
      {
        "id": "assets",
        "title": "Export for the editor, then check the uploaded result",
        "paragraphs": [
          "Keep editable source files and export images using the platform’s current media guidance. Break the page into sections so a phone reader can read the main information. A single tall image can make every label too small.",
          "After upload, check spacing, compression, labels and reward names on the actual page. Guildframe designs for either platform. Confirm the platform before agreeing the files and deliverables."
        ],
        "source": 0
      },
      {
        "id": "stage-checks",
        "title": "Check launch behaviour and stage visibility",
        "paragraphs": [
          "Kickstarter launch is manual after approval; setting a Target Launch Date does not publish the project. Gamefound descriptions and reward visibility depend on the stage and publication settings. Do not treat a finished draft in one stage as proof that the next public stage is complete.",
          "Use the dedicated launch guides to review the selected platform. Keep the factual reward plan consistent across either platform and adapt the layout to its actual editor."
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
        "question": "Is Gamefound always better for board games?",
        "answer": "There is no funding comparison in this guide. Choose a platform after checking your audience, eligibility, fees and operating requirements as well as its page editor."
      },
      {
        "question": "Does Guildframe charge differently for Gamefound?",
        "answer": "The fixed campaign design price is listed on the service page. The chosen platform, files and scope are confirmed in the brief. Broader launch services are quoted separately."
      }
    ],
    "seoTitle": "Kickstarter vs Gamefound: Page Design",
    "relatedSlugs": [
      "gamefound-launch-page-checklist",
      "kickstarter-review-launch-timeline",
      "kickstarter-prelaunch-page-guide"
    ],
    "servicePath": "/gamefound-campaign-design",
    "serviceLabel": "Gamefound page design",
    "updated": "2026-10-03"
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

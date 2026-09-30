import {campaignDate} from "./campaign-content";
export type LaunchSection={id:string;title:string;paragraphs:string[];list?:string[];table?:{headers:string[];rows:string[][]};source?:number};
export type LaunchGuide={slug:string;title:string;description:string;tag:string;answer:string;sections:LaunchSection[];faqs:{question:string;answer:string}[];sources:{label:string;publisher:string;href:string}[]};
export const launchGuideDate=campaignDate;
export const launchGuides:LaunchGuide[]=[
  {
    "slug": "board-game-kickstarter-campaign-design-cost",
    "title": "How Much Does Board Game Kickstarter Campaign Design Cost?",
    "description": "Budget for board game Kickstarter campaign design. See Guildframe’s $975 offer, the assets you need and the scope questions to ask before booking.",
    "tag": "Budget planning",
    "answer": "Guildframe campaign design costs $975 USD for one Kickstarter or Gamefound project. The brief covers page structure, copy and graphics using your artwork. You can request a free opening mockup before booking. The price is specific to Guildframe; it isn’t a measured industry average.",
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
        "title": "What the $975 Guildframe project covers",
        "paragraphs": [
          "The $975 Guildframe service covers page structure, campaign copy, visual direction, section graphics and reward presentation. Stretch goal graphics are included where the campaign needs them. We agree the file list and schedule before starting.",
          "I work with your artwork and confirmed product information. New game illustration, video, advertising and fulfilment are separate work. If you need those too, include them in your planning before agreeing the page brief."
        ],
        "table": {
          "headers": [
            "Budget item",
            "Treatment"
          ],
          "rows": [
            [
              "Campaign page design",
              "$975 USD for the agreed campaign"
            ],
            [
              "Free opening section mockup",
              "No payment or obligation to book"
            ],
            [
              "New game illustration or video",
              "Separate scope if required"
            ],
            [
              "Platform, production and advertising costs",
              "Budgeted separately by the creator"
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
          "To start with Guildframe, send the game summary, artwork link, platform and planned launch date. The free mockup comes first; the $975 project starts once we’ve agreed the brief and schedule. A permanent store after funding needs its own budget and brief."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is $975 an average price for campaign design?",
        "answer": "No. It is Guildframe’s stated price for the agreed campaign design service. We have not measured an industry average."
      },
      {
        "question": "Does the price include designing the game itself?",
        "answer": "No. Campaign page design presents your game using supplied artwork and confirmed information. New game illustration, rules development and product design are separate work."
      },
      {
        "question": "Can I request a mockup before deciding?",
        "answer": "Yes. Send your project and artwork through the free mockup form. There is no obligation to book the full campaign."
      }
    ]
  },
  {
    "slug": "board-game-kickstarter-page-checklist",
    "title": "Board Game Kickstarter Page Checklist Before Launch",
    "description": "Check your board game Kickstarter page before launch: opening, gameplay, components, reward contents, production facts and a useful mobile review.",
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
        "href": "https://help.kickstarter.com/hc/en-us/articles/360034769114-Setting-up-your-project-s-pre-launch-page"
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
    ]
  },
  {
    "slug": "what-to-send-kickstarter-campaign-designer",
    "title": "What to Send Your Kickstarter Campaign Designer",
    "description": "Prepare a useful Kickstarter campaign design brief: artwork, gameplay, reward contents, production facts and launch plans in one organised handoff.",
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
          "For a free Guildframe mockup, a game summary, artwork link, platform and launch plans are enough to start. We can try the opening design while you prepare the rest. The full campaign is $975, with scope and timing agreed first."
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
    ]
  },
  {
    "slug": "kickstarter-reward-tier-graphics",
    "title": "Kickstarter Reward Tier Graphics for Board Games",
    "description": "Plan clear Kickstarter reward tier graphics for board games, card games and RPGs. Compare contents, editions and optional extras without visual clutter.",
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
        "answer": "Reward presentation is part of the $975 campaign design service. The exact graphics and comparison format are agreed in the brief."
      }
    ]
  },
  {
    "slug": "ttrpg-kickstarter-campaign-page-design",
    "title": "How to Design a TTRPG Kickstarter Campaign Page",
    "description": "Plan a TTRPG Kickstarter page for rulebooks, adventures and zines. Explain the play experience, show readable spreads and distinguish PDF and print rewards.",
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
          "Guildframe campaign design is $975 for page structure, copy and graphics using your artwork. Send a summary, sample spread and launch plans for a free opening mockup. New book illustration and video are separate work."
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
    ]
  },
  {
    "slug": "kickstarter-vs-gamefound-campaign-page-design",
    "title": "Kickstarter vs Gamefound: Campaign Page Design Differences",
    "description": "Compare Kickstarter and Gamefound campaign page design: story sections, reward presentation, preview checks and how to prepare assets for your chosen platform.",
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
        "href": "https://help.kickstarter.com/hc/en-us/articles/360034769114-Setting-up-your-project-s-pre-launch-page"
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
          "After upload, check spacing, compression, labels and reward names on the actual page. Guildframe designs for either platform at $975. Confirm the platform before agreeing the files and deliverables."
        ],
        "source": 0
      }
    ],
    "faqs": [
      {
        "question": "Can the same design be moved between platforms?",
        "answer": "Some artwork and copy can be reused, but page structure, media exports and reward presentation should be checked in the destination editor."
      },
      {
        "question": "Is Gamefound always better for board games?",
        "answer": "This page does not make that claim. Platform suitability requires a separate review of the project, audience and operating requirements."
      },
      {
        "question": "Does Guildframe charge differently for Gamefound?",
        "answer": "The stated campaign design price is $975 for either Kickstarter or Gamefound, with scope confirmed in the brief."
      }
    ]
  },
  {
    "slug": "kickstarter-campaign-graphics-mobile-readability",
    "title": "Make Kickstarter Campaign Graphics Readable on Mobile",
    "description": "Review Kickstarter campaign graphics on a phone. Fix tiny labels, crowded reward comparisons and oversized sections before your tabletop game launch.",
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
      }
    ],
    "sections": [
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
        "title": "Follow the platform guidance for the actual file",
        "paragraphs": [
          "Read the current media guidance before exporting a batch. Upload a representative file and check its compression and layout; a file that works in an image editor may display differently in the campaign.",
          "Gamefound’s description guidance includes image and video recommendations and a warning about very tall videos on mobile. Verify those details for your export. Kickstarter has its own requirements."
        ],
        "source": 1
      },
      {
        "id": "review",
        "title": "Ask a fresh reader to find a reward",
        "paragraphs": [
          "Ask someone to find a specific reward, such as the base game with an expansion or the print book with its PDF. Watch where they hesitate. If they have to search several graphics, make the comparison easier to find and read.",
          "Check contrast, heading order, links and essential text too. Guildframe reviews the campaign presentation within the agreed brief. A free opening mockup can help establish readable type and layout early."
        ],
        "source": 0
      }
    ],
    "faqs": [
      {
        "question": "What exact pixel width should every graphic use?",
        "answer": "Use the current guidance for your chosen platform and inspect the uploaded result. There is no single dimension stated here for both platforms."
      },
      {
        "question": "Should all campaign text be baked into images?",
        "answer": "Keep essential information available as readable page text where practical. Graphics can support the story without carrying every sentence."
      },
      {
        "question": "Can animated graphics help?",
        "answer": "Sometimes, when movement explains play or shows a product function. Keep a useful still image and readable explanation as well."
      }
    ]
  },
  {
    "slug": "when-to-hire-kickstarter-campaign-designer",
    "title": "When Should You Hire a Kickstarter Campaign Designer?",
    "description": "Know when to hire a Kickstarter campaign designer. Check artwork readiness, reward decisions and review time before committing to your game launch date.",
    "tag": "Launch timing",
    "answer": "Contact a campaign designer once you can explain the game and share usable artwork and proposed rewards. You can explore an opening design earlier. Schedule the full page around asset delivery and review time; the right start date depends on what is ready.",
    "sources": [
      {
        "label": "Setting up a Kickstarter prelaunch page",
        "publisher": "Kickstarter",
        "href": "https://help.kickstarter.com/hc/en-us/articles/360034769114-Setting-up-your-project-s-pre-launch-page"
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
          "Check that the title and main image explain the project while the longer page is being designed. Once you have a summary and artwork, request a free Guildframe opening mockup. Full campaign design is $975, with scope and timing agreed first."
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
        "answer": "Timing is agreed after the brief and assets are reviewed. The site does not promise a universal turnaround for every campaign."
      },
      {
        "question": "Can design replace building a prelaunch audience?",
        "answer": "No. Campaign design and audience preparation are different work. A clear page still needs the right people to discover it."
      }
    ]
  }
];

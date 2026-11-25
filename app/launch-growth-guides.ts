import type {LaunchGuide} from "./launch-guides";
export const growthGuides: LaunchGuide[] = [
  {
    "slug": "board-game-kickstarter-funding-goal",
    "title": "How to Set a Kickstarter Funding Goal for a Board Game",
    "description": "Calculate a board game Kickstarter funding goal from production costs, reward margins, minimum orders and cash timing, with a worked example.",
    "tag": "Funding and production",
    "answer": "Set your funding goal from the money needed to deliver the promised game, including manufacturing commitments, fees, fulfillment and a reserve. Check what happens if you finish at exactly that goal. A smaller target does not reduce your production bill.",
    "sections": [
      {
        "id": "minimum",
        "title": "Start with the smallest version you can actually deliver",
        "paragraphs": [
          "Write down what the campaign promises before entering a target. For a card game, that might be one finished deck, its box and a printed rules sheet. A miniature game may also need tooling, trays and specialist packing. Keep optional upgrades outside the base promise until their cost is known.",
          "Kickstarter says the goal should cover completing the project and its associated costs. You cannot change the goal or deadline after launch. Treat the target as a production decision, then check whether your launch plan can realistically reach the required number of backers."
        ],
        "source": 0
      },
      {
        "id": "costs",
        "title": "Separate commitments from costs that grow with each order",
        "paragraphs": [
          "A factory quote for 1,000 copies is a commitment even if the campaign attracts 500 backers. Do not multiply the unit price only by pledged copies and forget the remaining stock. Record when deposits and balances fall due, which currency the supplier uses and how long the quote remains valid.",
          "Use one basis for shipping and taxes throughout the sheet. If you collect shipping separately later, model both the collection and the fulfillment bill. Money collected for postage is not spare production margin."
        ],
        "table": {
          "headers": [
            "Cost",
            "Example evidence",
            "Planning treatment"
          ],
          "rows": [
            [
              "Fixed work",
              "Editing, layout, tooling, approved creative scope",
              "Include the full amount still payable"
            ],
            [
              "Manufacturing",
              "Quote, minimum order and deposit schedule",
              "Include the minimum purchase commitment"
            ],
            [
              "Each order",
              "Packing, handling, shipping obligations and fees",
              "Apply to the expected reward mix"
            ],
            [
              "Reserve",
              "Named uncertainty and a stated allowance",
              "Keep visible rather than hiding it in another line"
            ]
          ]
        }
      },
      {
        "id": "example",
        "title": "Work through a simple funding model",
        "paragraphs": [
          "This invented USD example uses one reward and assumes that all stated costs are complete. It is not a platform fee quote or an industry benchmark. A $60 reward has $30 in variable production and fulfillment costs, an assumed 8% payment/platform allowance of $4.80 and $6 in acquisition costs. That leaves $19.20 toward fixed costs and the reserve.",
          "If the remaining fixed-cost and reserve requirement is $9,600, the example needs 500 successfully collected pledges: $9,600 divided by $19.20. The corresponding gross pledge total is $30,000. Replace every input with your quotes, actual fee schedule and reward mix. Add any minimum-order stock that the simplified example does not cover."
        ],
        "table": {
          "headers": [
            "Illustrative line",
            "Amount"
          ],
          "rows": [
            [
              "Revenue per reward",
              "$60.00"
            ],
            [
              "Variable production and fulfillment",
              "$30.00"
            ],
            [
              "Assumed percentage fee allowance",
              "$4.80"
            ],
            [
              "Acquisition cost",
              "$6.00"
            ],
            [
              "Contribution remaining",
              "$19.20"
            ],
            [
              "Fixed requirement divided by contribution",
              "500 pledges"
            ]
          ]
        }
      },
      {
        "id": "stress-test",
        "title": "Test the weak assumptions before choosing the target",
        "paragraphs": [
          "Run a second version with fewer deluxe pledges, a more expensive shipping mix and some failed collections. Also test the smallest factory order you can buy. If the goal works only when almost everyone buys the most profitable bundle, it needs another review.",
          "Cash timing matters too. A campaign can look affordable on paper while a supplier deposit falls due before collected funds arrive. Record the source of any money needed earlier. Do not silently treat an uncertain future preorder window as money already available."
        ],
        "list": [
          "Check the base reward without stretch goals.",
          "Recalculate for the actual country and currency fee schedule.",
          "Include quantities bought but not yet sold.",
          "Record who will fund deposits before payout.",
          "Stop and revise if the per-reward contribution is zero or negative."
        ]
      },
      {
        "id": "handoff",
        "title": "Give the launch team one approved budget",
        "paragraphs": [
          "Share the same reward names, prices and contents with the designer, advertising lead and production team. Keep a dated budget version with the approved page brief. If a component, box size or shipping promise changes, recalculate before publishing the new offer.",
          "Guildframe can help turn the confirmed offer into a launch plan and campaign page. Bring supplier quotes and the decisions still open; a polished page cannot settle missing manufacturing numbers."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should I set a very low goal so the game funds quickly?",
        "answer": "Only if you can still fulfill the promised rewards at that amount, using any other committed funding you have recorded. A quick funding announcement does not pay an uncovered factory bill."
      },
      {
        "question": "Is the funding goal the same as my sales target?",
        "answer": "No. The funding goal is the threshold required for the campaign to succeed. A sales forecast describes what you expect to sell and needs its own assumptions."
      },
      {
        "question": "Can I change the goal after the campaign launches?",
        "answer": "Kickstarter does not allow the funding goal or deadline to be changed after launch. Resolve the cost model before publishing."
      }
    ],
    "sources": [
      {
        "label": "Setting a Kickstarter funding goal",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236709-how-to-set-the-right-funding-goal-for-your-kickstarter-campaign"
      }
    ],
    "relatedSlugs": [
      "board-game-kickstarter-reward-pricing",
      "kickstarter-advertising-budget-board-games",
      "kickstarter-stretch-goals-planning"
    ],
    "servicePath": "/kickstarter-launch-services",
    "serviceLabel": "Plan your tabletop launch",
    "published": "2026-10-28",
    "updated": "2026-10-28"
  },
  {
    "slug": "board-game-kickstarter-reward-pricing",
    "title": "How to Price Kickstarter Rewards for a Board Game",
    "seoTitle": "Kickstarter Pricing: How to Price Your Board Game Rewards",
    "description": "Kickstarter pricing for board games: build each reward price from its real costs, fees and margin. See where a $40 pledge goes and test core and deluxe tiers.",
    "tag": "Reward pricing",
    "answer": "Price each Kickstarter reward from its own manufacturing, freight and fulfilment costs, then add platform and payment fees, an advertising allowance, a share of fixed work and the margin you need. On a US project Kickstarter takes 5% and payment processing takes 3% plus $0.20 per pledge, so a $40 pledge loses $3.40 to fees before any production cost.",
    "sections": [
      {
        "id": "contents",
        "title": "Start with what each reward actually contains",
        "paragraphs": [
          "A price only means something once the contents are fixed, so we start with a reward sheet. A name such as Deluxe does not tell your factory or fulfilment partner what to pack.",
          "List the game, expansions, upgraded pieces, sleeves, inserts and digital files for each tier, with quantities and language versions. Keep variants apart from extra items, because a choice of English or French rules is different from promising both. Gamefound builds rewards from their included items and lets you mark whether an item can be bought on its own.",
          "Once that sheet is approved, the reward graphics, the pledge manager and the price all work from the same list."
        ],
        "source": 1
      },
      {
        "id": "cost-model",
        "title": "Build the price from your costs, not another campaign's price",
        "paragraphs": [
          "Another campaign's pledge price is useful context, but it cannot tell you your margin. They may print a different quantity, ship a different way or plan a different retail price.",
          "So we build each price from six inputs. Fixed work such as campaign design or tooling sits in the project budget once, then gets spread across the backers you expect, rather than counted in full on every reward."
        ],
        "table": {
          "headers": [
            "Pricing input",
            "What to record"
          ],
          "rows": [
            [
              "Physical contents",
              "Cost per unit at the quoted print run"
            ],
            [
              "Delivery obligation",
              "Freight, packing, handling and any shipping you absorb"
            ],
            [
              "Platform and payment fees",
              "The current percentage and the charge per pledge"
            ],
            [
              "Acquisition",
              "The amount you can spend to win one backer"
            ],
            [
              "Fixed work and reserve",
              "A consistent share per backer and an uncertainty allowance"
            ],
            [
              "Remaining margin",
              "What is left after everything above"
            ]
          ]
        }
      },
      {
        "id": "forty-dollar-pledge",
        "title": "Where a $40 pledge goes",
        "paragraphs": [
          "Fees are the only costs here that are the same for every creator, so we start with them. On a US project, Kickstarter's platform fee is 5% of funds raised and payment processing is 3% plus $0.20 per pledge. Pledges under $10 use a micropledge rate of 5% plus $0.05. Fees are only collected if the project funds. Our [Kickstarter fees guide](/guides/kickstarter-fees) covers the full fee picture, including other countries.",
          "For a $40 pledge that means $2.00 to Kickstarter and $1.40 to payment processing, so $3.40 in total. Everything else in the example below is illustrative, and you should replace it with your own quotes. It assumes shipping to the backer is charged separately.",
          "The point of the example is the last line. A $40 price can look generous and still leave less than $6 to absorb a late freight quote or a damaged shipment."
        ],
        "visual": {
          "kind": "split",
          "title": "In this example, $5.60 of a $40 pledge is left once fees and costs are paid",
          "total": "Example: a $40 core game pledge on a US Kickstarter project",
          "parts": [
            {
              "label": "Kickstarter fee (5%)",
              "share": 2.0,
              "display": "$2.00"
            },
            {
              "label": "Payment processing (3% + $0.20)",
              "share": 1.4,
              "display": "$1.40"
            },
            {
              "label": "Manufacturing (illustrative)",
              "share": 11.0,
              "display": "$11.00"
            },
            {
              "label": "Freight and fulfilment (illustrative)",
              "share": 7.0,
              "display": "$7.00"
            },
            {
              "label": "Advertising allowance (illustrative)",
              "share": 6.0,
              "display": "$6.00"
            },
            {
              "label": "Fixed work and reserve (illustrative)",
              "share": 7.0,
              "display": "$7.00"
            },
            {
              "label": "Remaining margin",
              "share": 5.6,
              "display": "$5.60"
            }
          ],
          "caption": "Fee rates are Kickstarter's published US rates. Every other amount is an invented example, not an industry average or a Guildframe quote.",
          "source": "Kickstarter fees for creators (US)"
        },
        "source": 3
      },
      {
        "id": "example",
        "title": "Work out a price floor, then round to a real price",
        "paragraphs": [
          "Once you know your costs, the floor price is simple arithmetic. This hypothetical example assumes $42 in product and fulfilment costs, $6 for acquisition, $6 for fixed work and an $8 margin you want to keep, which totals $62.",
          "Kickstarter's US fees are 8% of the pledge plus $0.20. So the floor price is $62 plus $0.20, divided by 0.92, which comes to about $67.61. Rounding up to $69 gives fees of $5.72 and leaves $9.28 after the $54 in costs.",
          "Run the same sum for every tier, using your real quotes and the fee rates for your country."
        ],
        "table": {
          "headers": [
            "Illustrative calculation",
            "Result"
          ],
          "rows": [
            [
              "Costs plus the margin you want",
              "$42 + $6 + $6 + $8 = $62"
            ],
            [
              "Floor price before rounding",
              "($62 + $0.20) divided by 0.92 = $67.61"
            ],
            [
              "Fees at a $69 price",
              "$3.45 platform + $2.27 processing = $5.72"
            ],
            [
              "Margin after stated costs",
              "$69 minus $5.72 minus $54 = $9.28"
            ]
          ]
        },
        "source": 3
      },
      {
        "id": "tiers",
        "title": "Check that the deluxe tier earns its extra cost",
        "paragraphs": [
          "A deluxe tier can sell for more and still leave less money per box. So we compare the extra revenue with the extra manufacturing, weight, packaging and handling, tier by tier.",
          "A larger box can move the whole parcel into a higher shipping bracket, even when the component upgrade looks cheap. Bundles and stretch goals need the same check, because a discount can pull backers away from the core box. Keep retailer terms separate too, since a pledge price is not automatically a workable wholesale price.",
          "Run these five checks on every tier, then use the comparison below to decide what stays."
        ],
        "visual": {
          "kind": "compare",
          "title": "A deluxe tier can earn more per pledge and still leave less per box",
          "columns": [
            {
              "name": "Core box",
              "points": [
                "Sets the price most backers compare",
                "Smallest box and lowest weight",
                "Needs a margin on its own"
              ],
              "verdict": "Price it first"
            },
            {
              "name": "Deluxe box",
              "points": [
                "Extra components and a bigger box",
                "May reach a higher shipping bracket",
                "Check the extra margin, not the price"
              ],
              "verdict": "Keep it only if the extra margin is real",
              "highlight": true
            },
            {
              "name": "Bundle with expansion",
              "points": [
                "The discount comes out of your margin",
                "Can pull backers from the core box",
                "Test it against the sales mix you expect"
              ],
              "verdict": "Price the discount, not the headline"
            }
          ],
          "caption": "Guildframe's tier review. Use packed sizes and supplier quotes, not product weight alone."
        },
        "list": [
          "Compare the core and deluxe reward side by side.",
          "Check packed dimensions as well as product weight.",
          "Test bundles with the actual quantities and discounts.",
          "Keep stock allocated across rewards and add ons consistent.",
          "Recalculate when a stretch goal changes the contents."
        ]
      },
      {
        "id": "shipping",
        "title": "Decide whether shipping sits in the pledge or comes later",
        "paragraphs": [
          "Shipping changes how backers read your price, so decide early. Kickstarter supports charging shipping at the pledge or collecting it later in its Pledge Manager.",
          "Charging at the pledge makes the total clear on day one, but you commit to rates months before freight is booked. Collecting later protects you from rate changes, but the page then needs a plain explanation of what backers will pay and when. Either way, the [shipping and delivery page guide](/guides/kickstarter-shipping-delivery-page) shows how to explain it.",
          "Whichever route you choose, the pricing sheet and the campaign page must describe it the same way."
        ],
        "source": 4
      },
      {
        "id": "presentation",
        "title": "Show the price so backers never do arithmetic",
        "paragraphs": [
          "Once the numbers are approved, the page has to make them easy to compare. We design a reward comparison with exact contents, price, delivery estimate and any shipping or tax charged later. Our [reward tier graphics guide](/guides/kickstarter-reward-tier-graphics) covers the layout.",
          "Keep MSRP claims tied to a real retail plan. If the future shop price is still undecided, show the campaign price without inventing a crossed out comparison. A backer who trusts the numbers pledges faster than one doing sums on a phone."
        ]
      },
      {
        "id": "help",
        "title": "Pricing rewards with us",
        "paragraphs": [
          "We check reward pricing as part of launch planning, because a price problem found after launch is expensive to fix. You bring the supplier quotes and the reward sheet. We test each tier against the fees, the ad allowance and the shipping plan, then design the reward graphics from the approved numbers.",
          "You can do the sums yourself with the steps above. The honest limit is time and a second pair of eyes, since one wrong freight figure can erase a tier's margin. See [Kickstarter launch services for tabletop games](/kickstarter-launch-services) for how this fits into a full launch, or start with the [funding goal guide](/guides/board-game-kickstarter-funding-goal)."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What fees does Kickstarter take from a pledge?",
        "answer": "On a US project Kickstarter's platform fee is 5% of funds raised, and payment processing is 3% plus $0.20 per pledge. Pledges under $10 use a 5% plus $0.05 micropledge rate. Fees are only collected if the project funds."
      },
      {
        "question": "How much of a $40 pledge does the creator keep?",
        "answer": "On a US project, $3.40 of a $40 pledge goes to fees, so $36.60 is left for manufacturing, freight, advertising, fixed work and margin. In our illustrative example only $5.60 remains once those costs are paid."
      },
      {
        "question": "Should every reward have the same margin percentage?",
        "answer": "There is no universal rule. Compare the cash each tier contributes, the work it adds and the expected sales mix. A low margin tier becomes a problem if it ends up being the tier most backers choose."
      },
      {
        "question": "Can I use another game's Kickstarter price as my price?",
        "answer": "Use it as market context, then calculate your own costs. A different print run, contents or shipping model can give very different numbers."
      },
      {
        "question": "Does a higher deluxe price guarantee more profit?",
        "answer": "No. Extra components, a bigger box and a higher shipping bracket can use up the difference. Compare the extra revenue with the full extra cost."
      },
      {
        "question": "Should shipping be included in the pledge price?",
        "answer": "Kickstarter supports charging shipping at the pledge or collecting it later in its Pledge Manager. Charging at the pledge makes the total clear on day one. Collecting later protects you from rate changes but needs a clear explanation on the page."
      }
    ],
    "sources": [
      {
        "label": "Adding rewards to your project",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236688-how-do-i-add-rewards-to-my-project"
      },
      {
        "label": "Creating rewards",
        "publisher": "Gamefound Knowledge Base",
        "href": "https://help.gamefound.com/article/127-creating-rewards-in-crowdfunding"
      },
      {
        "label": "Setting a Kickstarter funding goal",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236709-how-to-set-the-right-funding-goal-for-your-kickstarter-campaign"
      },
      {
        "label": "Kickstarter fees for creators (US)",
        "publisher": "Kickstarter",
        "href": "https://www.kickstarter.com/help/fees"
      },
      {
        "label": "Pledge Manager release notes: shipping at pledge or in Pledge Manager",
        "publisher": "Kickstarter",
        "href": "https://start.kickstarter.com/pledge-manager-release-notes"
      }
    ],
    "relatedSlugs": [
      "board-game-kickstarter-funding-goal",
      "kickstarter-reward-tier-graphics",
      "kickstarter-stretch-goals-planning",
      "kickstarter-advertising-budget-board-games"
    ],
    "servicePath": "/kickstarter-launch-services",
    "serviceLabel": "Kickstarter launch services for tabletop games",
    "published": "2026-10-28",
    "updated": "2026-11-25"
  },
  {
    "slug": "kickstarter-referral-tags-tracking",
    "title": "Track Kickstarter Marketing with Referral Tags and UTMs",
    "description": "Track Kickstarter marketing with custom referral tags, consistent UTMs and a reporting sheet that separates clicks, pledges and collected revenue.",
    "tag": "Campaign measurement",
    "answer": "Use Kickstarter referral tags to report attributed pledges and consistent UTM parameters to identify traffic in Analytics. Keep visits, email signups, pledge value and collected revenue separate. A link click is not a pledge, and pledge revenue is not profit.",
    "sections": [
      {
        "id": "measurements",
        "title": "Decide what each report is meant to answer",
        "paragraphs": [
          "Before launch, write down the decisions you need to make. A landing-page report can tell you which traffic reached the page and signed up. Your email platform can show delivery and clicks. Kickstarter can report pledges attributed to its referral links. These are different stages, so their totals will not necessarily match.",
          "Define a successful signup as the completed action your form actually records. Do not count a button click as a confirmed subscriber. Record the date range and timezone for every export so the team compares the same period."
        ]
      },
      {
        "id": "referral-tags",
        "title": "Create named Kickstarter links before you publish the campaign",
        "paragraphs": [
          "Kickstarter now allows custom referral tags to be created before launch in the Promotion tab. After launch, they can also be created through the creator dashboard. Give each link a name that identifies its placement, then keep the generated URL intact.",
          "The current referral report includes attributed pledges and amounts, and dropped-pledge information after collection. It does not provide backer-specific referral records for dropped pledges. Use the report within those limits rather than promising complete person-by-person attribution."
        ],
        "source": 0
      },
      {
        "id": "utm",
        "title": "Use one naming convention for your traffic links",
        "paragraphs": [
          "Google Analytics uses UTM parameters to identify campaign traffic. Source, medium and campaign should be filled consistently. Values are case-sensitive: a newsletter recorded with two spellings can appear as two sources. Keep a small approved naming list and copy from it.",
          "For an owned landing page, an illustrative query string is ?utm_source=creator_newsletter&utm_medium=email&utm_campaign=orbit_launch&utm_content=rules_preview. This example does not contain a real Kickstarter referral tag. Use the URL generated in your campaign dashboard for that part of the tracking."
        ],
        "source": 1,
        "table": {
          "headers": [
            "Field",
            "Example purpose"
          ],
          "rows": [
            [
              "utm_source",
              "The newsletter, advertising platform or referring partner"
            ],
            [
              "utm_medium",
              "The channel, such as email or paid_social"
            ],
            [
              "utm_campaign",
              "The agreed campaign name"
            ],
            [
              "utm_content",
              "The specific creative or link placement"
            ],
            [
              "Kickstarter referral URL",
              "The real link generated for that placement"
            ]
          ]
        }
      },
      {
        "id": "test",
        "title": "Test the route someone will actually use",
        "paragraphs": [
          "Open each published link on a phone. Check the destination, redirects and parameter spelling. If an email tool rewrites links, test the delivered email rather than only the draft. If you use a shortened link, make sure it reaches the intended page with the required information preserved.",
          "Then verify the measurement you control. For an owned signup page, complete the form and check the confirmation and email delivery. For a platform campaign link, confirm the correct public project opens. Do not place an unnecessary paid pledge just to make a dashboard number appear."
        ],
        "table": {
          "headers": [
            "Link record",
            "Keep alongside the URL"
          ],
          "rows": [
            [
              "Placement",
              "Email, partner, advertisement or page"
            ],
            [
              "Owner",
              "Person responsible for changes"
            ],
            [
              "Destination",
              "Public page and campaign stage"
            ],
            [
              "Test",
              "Device, date and observed result"
            ],
            [
              "Reporting",
              "Which report will contain the expected outcome"
            ]
          ]
        }
      },
      {
        "id": "report",
        "title": "Report collected results alongside pledge value",
        "paragraphs": [
          "Here is a hypothetical USD example: $600 in ad spend and $1,800 in attributed pledges give a pledge-value ROAS of 3.0. If $150 of those pledges drops, the collected attributed amount is $1,650 and the equivalent ratio is 2.75. Production, shipping, fees and service costs still sit outside both ratios.",
          "Do not add an advertising platform’s attributed revenue to Kickstarter’s attributed revenue as if they were separate sales. Keep each report labelled, explain its limits and reconcile against collected funds when available. A small results table with dates and assumptions is more useful than one impressive ratio.",
          "Guildframe can help plan the tracking and reporting alongside campaign advertising. Agree the account owner, test budget and decision rules before the first paid traffic arrives."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I create Kickstarter referral tags before launch?",
        "answer": "Yes. Kickstarter’s current Help Center says you can create them in the Promotion tab before the project launches."
      },
      {
        "question": "Do UTM tags and Kickstarter referral tags measure the same thing?",
        "answer": "No. UTMs label campaign traffic in Analytics, while Kickstarter referral reports attribute pledges to its generated links. Use both for the questions each can answer."
      },
      {
        "question": "Is a 3x ROAS profitable?",
        "answer": "The ratio alone cannot answer that. You still need the reward costs, fees, fulfillment obligations, failed collections and other campaign spending."
      }
    ],
    "sources": [
      {
        "label": "Custom referral tags and referral statistics",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236548-how-do-i-create-a-custom-referral-tag-and-track-referral-stats"
      },
      {
        "label": "Campaign data with custom URLs",
        "publisher": "Google Analytics Help",
        "href": "https://support.google.com/analytics/answer/10917952"
      }
    ],
    "relatedSlugs": [
      "kickstarter-advertising-budget-board-games",
      "kickstarter-prelaunch-email-list",
      "board-game-kickstarter-marketing-plan"
    ],
    "servicePath": "/kickstarter-advertising",
    "serviceLabel": "Plan campaign tracking and ads",
    "published": "2026-10-28",
    "updated": "2026-10-28"
  },
  {
    "slug": "board-game-reviewer-outreach",
    "title": "Plan Board Game Reviewer Previews Before Kickstarter",
    "description": "Prepare board game reviewer outreach with a prototype brief, press kit, dispatch plan and clear permissions before your Kickstarter launch.",
    "tag": "Reviewer previews",
    "answer": "Contact reviewers whose audience fits your game, ask about their availability and coverage terms, then send a complete prototype and clear rules. Agree timing, costs, return arrangements and how you may use their content before relying on it in your campaign.",
    "sections": [
      {
        "id": "fit",
        "title": "Choose reviewers by the games their audience plays",
        "paragraphs": [
          "A long subscriber list is less useful if the channel rarely covers your kind of game. Look at several recent videos or articles. Check player count, complexity, session length and whether the reviewer covers prototypes, finished games or both.",
          "Build a shortlist with one sentence explaining the fit for each person. A quick party game, a campaign miniature game and a solo RPG need different introductions. Read the reviewer’s submission policy before sending a generic pitch. Some do not accept unsolicited prototypes or paid previews."
        ]
      },
      {
        "id": "brief",
        "title": "Give the reviewer enough information to decide",
        "paragraphs": [
          "Your first message should identify the game, why it fits their coverage and what you are asking for. Include a short rules overview, player count, estimated play time, the state of the prototype and your target launch window. Link to a tidy folder instead of attaching a large collection of files.",
          "Kickstarter recommends preparing promotion and communication plans before launch. Use that preparation to settle the public project URL and the facts you can share. A reviewer should not have to guess which date or product image is current."
        ],
        "source": 0,
        "table": {
          "headers": [
            "Brief item",
            "Useful detail"
          ],
          "rows": [
            [
              "Game summary",
              "Theme, main action and who it suits"
            ],
            [
              "Prototype status",
              "What is final and what will change"
            ],
            [
              "Rules",
              "Readable rules plus a concise setup reference"
            ],
            [
              "Coverage request",
              "Review, preview, tutorial or another agreed format"
            ],
            [
              "Timing",
              "Target window and any mutually agreed embargo"
            ],
            [
              "Logistics",
              "Delivery location, postage and return arrangements"
            ]
          ]
        }
      },
      {
        "id": "outreach",
        "title": "Make the request short and specific",
        "paragraphs": [
          "An example opening: “Hi Sam, I saw your recent coverage of short cooperative games. We are preparing a two-player card game about repairing a research station. Would you consider a prototype preview? The current rules, component photos and play-time details are here. Our target launch is in November, but I would like to check your availability before agreeing a date.”",
          "The game, reviewer and date in that message are fictional. Replace them with accurate details. Ask about fees and production terms without assuming the answer. Sending a copy does not buy a positive opinion or guarantee that anything will be published."
        ]
      },
      {
        "id": "schedule",
        "title": "Work backward from the reviewer’s own lead time",
        "paragraphs": [
          "Ask how long they need after receiving a playable copy. Then allow for shipping, customs where relevant, missing parts and questions about the rules. Agree a publication window before adding the content to your campaign schedule.",
          "For example, a reviewer might ask for four weeks with the game. If shipping may take ten days, dispatching two weeks before launch will not meet that request. That is an illustrative planning problem, not a standard turnaround time. Find a workable date or prepare the campaign without depending on that coverage."
        ],
        "table": {
          "headers": [
            "Prototype tracker",
            "Record"
          ],
          "rows": [
            [
              "Before dispatch",
              "Inventory, rules version and photographs of the packed set"
            ],
            [
              "In transit",
              "Tracking, expected arrival and contact details"
            ],
            [
              "After arrival",
              "Missing parts and rules questions"
            ],
            [
              "Before publication",
              "Agreed timing, format and disclosure of the arrangement"
            ],
            [
              "After publication",
              "Live URL and permission for any campaign excerpt"
            ]
          ]
        }
      },
      {
        "id": "use",
        "title": "Keep reviews, paid previews and your own claims distinct",
        "paragraphs": [
          "Ask how the creator labels a paid preview, a supplied copy or another commercial arrangement. Make that context clear wherever you feature the content. A paid walkthrough can still help someone understand the game; it should not be presented as an independent verdict.",
          "Before putting a quote or thumbnail on the campaign page, agree the permitted excerpt, credit and link. Preserve the reviewer’s meaning and do not turn a qualified observation into an unqualified endorsement. If the prototype has changed since filming, explain the relevant difference.",
          "Guildframe can organise approved previews within the campaign page and help explain what each one demonstrates. Bring the live links, permissions and confirmed product details with the rest of the campaign assets."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How early should I contact board game reviewers?",
        "answer": "Ask each reviewer about their lead time, then add delivery and preparation time. There is no single schedule that applies to every channel or game."
      },
      {
        "question": "Does sending a prototype guarantee a review?",
        "answer": "No. Confirm acceptance and terms first. The reviewer may decline, need more time or choose not to publish after playing."
      },
      {
        "question": "Can I put a reviewer’s quote on my Kickstarter page?",
        "answer": "Agree how the quote, name and imagery may be used, keep the wording accurate and link to the original coverage. Make any paid or supplied-product arrangement clear."
      }
    ],
    "sources": [
      {
        "label": "Planning your promotion strategy",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236407-when-and-how-should-i-start-planning-my-promotion-strategy"
      },
      {
        "label": "Setting up a prelaunch page",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      }
    ],
    "relatedSlugs": [
      "board-game-kickstarter-gameplay-rulebook",
      "kickstarter-campaign-video-planning",
      "what-to-send-kickstarter-campaign-designer"
    ],
    "servicePath": "/kickstarter-prelaunch-marketing",
    "serviceLabel": "Plan your game prelaunch",
    "published": "2026-10-28",
    "updated": "2026-10-28"
  },
  {
    "slug": "board-game-kickstarter-launch-day-checklist",
    "title": "Board Game Kickstarter Launch Checklist: 90 Days to Launch Day",
    "seoTitle": "Board Game Launch Checklist for Kickstarter: 90 Days Out",
    "description": "A board game Kickstarter launch checklist from 90 days out to launch day. Lock rewards, open the prelaunch page, test ads, pass review and run the first hour.",
    "tag": "Launch checklist",
    "answer": "A board game Kickstarter launch checklist starts about 90 days out, when you lock the rewards, costs and funding goal. The prelaunch page, email list and capped ad tests fill the middle weeks, and review lands two to three weeks before launch. On launch day one person publishes, and a second checks the live page before any email or ad goes out.",
    "sections": [
      {
        "id": "at-a-glance",
        "title": "The checklist at a glance, from 90 days out to day three",
        "paragraphs": [
          "We run first board game launches on a schedule of about 90 days, because the offer, the audience and the page all need time to settle. Most of the work happens well before launch day. Launch day itself is short, if the weeks before it went to plan.",
          "Treat the dates as a working order rather than a rule. If your rewards or artwork arrive late, move every later date with them. Skipping a check to hold a date is how a wrong price or a broken link reaches backers.",
          "So the timeline below is the shape of the whole project, and the sections after it explain each phase in turn."
        ],
        "visual": {
          "kind": "timeline",
          "title": "Most of the launch work is done 30 days or more before the button is pressed",
          "events": [
            {
              "when": "90 days out",
              "label": "Lock the offer",
              "detail": "Reward contents, supplier quotes, funding goal and shipping approach"
            },
            {
              "when": "75 days out",
              "label": "Brief the page and creative",
              "detail": "Story outline, reward graphics list and missing assets"
            },
            {
              "when": "60 days out",
              "label": "Open the signup route",
              "detail": "Landing page, welcome email and the Kickstarter project draft"
            },
            {
              "when": "45 days out",
              "label": "Get the prelaunch page live",
              "detail": "First time creators need review approval before it can go live"
            },
            {
              "when": "30 days out",
              "label": "Test ads and send preview copies",
              "detail": "A capped ad budget and reviewer copies with agreed dates"
            },
            {
              "when": "14 days out",
              "label": "Final page review",
              "detail": "Phone check, reward facts, shipping copy and review buffer"
            },
            {
              "when": "7 days out",
              "label": "Rehearse launch day",
              "detail": "Named owners, a run sheet and a tested launch email"
            },
            {
              "when": "Launch day",
              "label": "Publish, check, then promote",
              "detail": "A manual launch, a live page check, then email and ads",
              "highlight": true
            },
            {
              "when": "Days 1 to 3",
              "label": "Answer what backers ask",
              "detail": "Repeated questions, page fixes and a first spend review"
            }
          ],
          "caption": "Guildframe's working schedule for a first board game campaign. Move the dates when an input is late, and keep the order.",
          "source": "Kickstarter Help Center for review timing and prelaunch page rules"
        }
      },
      {
        "id": "offer",
        "title": "90 to 60 days out: lock the offer and the numbers",
        "paragraphs": [
          "The first month is about the offer, because every later piece of marketing repeats it. If the deluxe reward changes in week ten, the page, the reward graphics, the ads and the emails all change with it.",
          "We start with a reward sheet that names every tier, its exact contents and its price. Then you collect supplier quotes for manufacturing and freight, so the numbers come from real figures. From there you can [set a funding goal that covers delivery](/guides/board-game-kickstarter-funding-goal) and [price each reward](/guides/board-game-kickstarter-reward-pricing) against its own costs.",
          "These five checks close the phase, and once they pass the offer can be shown in public."
        ],
        "list": [
          "Every reward tier has frozen contents, quantities and language versions.",
          "Manufacturing and freight quotes exist at your planned print run.",
          "The funding goal covers production, delivery, fees and a reserve.",
          "Each reward and add on has a price that leaves a margin.",
          "You know whether shipping is charged at pledge or later in the pledge manager."
        ]
      },
      {
        "id": "prelaunch",
        "title": "60 to 30 days out: open the prelaunch page and the email list",
        "paragraphs": [
          "This phase builds the audience you launch to, so it needs a working signup route early. Your own email list and Kickstarter prelaunch followers both matter, but they behave differently.",
          "Kickstarter sends your followers a launch notification email when the project goes live. You cannot message those followers directly, though a prelaunch update reaches them. Your own [prelaunch email list](/guides/kickstarter-prelaunch-email-list) is the channel you control, so test the form, the welcome email and the unsubscribe link with a real address.",
          "One rule catches first time creators out. Kickstarter only lets a first time creator switch on the prelaunch page after the project has been submitted for review and approved. Repeat creators can open it from the Promotion tab sooner. That's why we plan an early submission for a first project, so the follow button is live while the audience is still growing. These five checks close the phase."
        ],
        "list": [
          "Landing page, welcome email and unsubscribe link pass a real test.",
          "The Kickstarter draft exists with a target launch date in the Basics section.",
          "The prelaunch page is live and linked from your own pages.",
          "Each channel has its own named referral link.",
          "A first ad test is running under a written spending cap."
        ],
        "source": 2
      },
      {
        "id": "page-and-review",
        "title": "30 to 14 days out: finish the page and pass review",
        "paragraphs": [
          "By now the campaign page should be close to final, so this phase is about proof. We read the page on a phone with someone who has never played the game, using the [Kickstarter page checklist](/guides/board-game-kickstarter-page-checklist). If they cannot say what comes in the box, the page is not finished.",
          "Kickstarter says review can take up to three business days. If the team asks for changes, the next review takes up to three more business days after you reply, and busy periods run longer. Setting a target launch date does not launch the project, so plan a buffer of at least a week between approval and the date you announce.",
          "Ad tests should still run inside a cap in this phase. Use the [advertising budget guide](/guides/kickstarter-advertising-budget-board-games) to set a ceiling your reward margin can carry, before the launch week asks for more. Before moving on, these five checks should pass."
        ],
        "list": [
          "The story, reward graphics and stretch goal graphic are approved.",
          "The video, rules sample and downloads open on a phone.",
          "Reviewer copies have arrived with agreed publishing dates.",
          "The project is submitted with time left for change requests.",
          "The launch email is drafted with a placeholder for the live link."
        ],
        "source": 0
      },
      {
        "id": "owners",
        "title": "The final week: name one owner for each launch job",
        "paragraphs": [
          "Launch day goes wrong when two people assume the other one pressed the button. So in the last week we write down one owner for each job and what that owner must confirm.",
          "Four checks come first, then the table gives each launch job its owner. The email can be perfect while the ads point at a preview link, which is why each job gets its own owner and its own check."
        ],
        "table": {
          "headers": [
            "Launch job",
            "The owner confirms"
          ],
          "rows": [
            [
              "Publishing the campaign",
              "The approved project, the right account and the public live URL"
            ],
            [
              "Launch email",
              "A test delivered to a real inbox, final links and the right audience"
            ],
            [
              "Advertising",
              "The live destination, the approved spend cap and the start time"
            ],
            [
              "Backer questions",
              "Where comments and messages arrive and who can answer product facts"
            ],
            [
              "Reporting",
              "The referral link names and the time of the first review"
            ]
          ]
        },
        "list": [
          "The launch time and timezone are agreed with everyone on the run sheet.",
          "The maximum daily ad spend is written down and approved.",
          "A fallback message is ready in case publishing slips.",
          "A copy of the approved reward facts sits beside the run sheet."
        ]
      },
      {
        "id": "launch-day",
        "title": "Launch day: publish by hand, then check before you promote",
        "paragraphs": [
          "Kickstarter launches are manual, and the platform cannot schedule an automatic launch for a set date. Someone has to press launch in the project dashboard, so put that person and a backup on the run sheet.",
          "Then the order matters more than the speed. A second person opens the live page as a normal visitor on a phone and checks the rewards, prices and downloads. Only then does the email owner send the announcement, and only after that does the ad owner switch traffic on.",
          "If a reward price or a key product claim is wrong, pause the promotion that points at it while you fix the page. Spending on a broken offer costs more than a short delay."
        ],
        "visual": {
          "kind": "steps",
          "title": "The first hour runs in a fixed order: publish, check, announce, advertise",
          "steps": [
            {
              "label": "Publish",
              "detail": "The owner launches by hand and copies the live URL"
            },
            {
              "label": "Check",
              "detail": "A second person reviews the live page on a phone"
            },
            {
              "label": "Announce",
              "detail": "Email and posts go out with the checked live link"
            },
            {
              "label": "Advertise",
              "detail": "Ads start once the destination is confirmed"
            },
            {
              "label": "Review",
              "detail": "First look at pledges, spend and questions"
            }
          ],
          "caption": "Guildframe's launch day order. Kickstarter launches are manual, so the first step always has a named person."
        },
        "source": 1
      },
      {
        "id": "gamefound",
        "title": "On Gamefound, use Tester Mode before you launch",
        "paragraphs": [
          "If you launch on Gamefound instead, the rehearsal can go further. Gamefound lets invited testers walk through campaign phases and place test orders that are not sent to the payment operator.",
          "So we build a test plan with a base reward, an add on, a language choice and a few shipping regions, then check the order data each one produces. A passing test order proves that route works. It does not prove a real payment or a later payout."
        ],
        "source": 3
      },
      {
        "id": "first-days",
        "title": "Days 1 to 3: answer what the launch reveals",
        "paragraphs": [
          "The first days tell you which parts of the page still confuse people. We keep one list of repeated questions about gameplay, editions, shipping and timing, then fix the wording once the creator confirms the facts.",
          "Kickstarter now shows dropped pledges in the Backer Source data of the creator dashboard, which helps when a channel brings pledges that later fail. Compare ad spend with the reward margin before you approve more budget, and post a first backer update that answers the most common question.",
          "A big first hour total is good news, but it does not prove every part of the launch works. The checks above are what keep the second week healthy."
        ],
        "source": 4
      },
      {
        "id": "full-checklist",
        "title": "The whole checklist on one page",
        "paragraphs": [
          "Here is every check from the phases above in one place, grouped the way we run them. Copy it into your project plan and put a name beside each line.",
          "If a line has no owner a week before launch, that is the line most likely to fail on the day."
        ],
        "visual": {
          "kind": "checklist",
          "title": "30 checks, grouped by phase, from 90 days out to day three",
          "groups": [
            {
              "name": "90 to 60 days out",
              "items": [
                "Reward contents frozen",
                "Supplier quotes in hand",
                "Funding goal covers delivery",
                "Every reward priced with a margin",
                "Shipping approach chosen"
              ]
            },
            {
              "name": "60 to 30 days out",
              "items": [
                "Signup route tested",
                "Kickstarter draft and target date set",
                "Prelaunch page live",
                "Referral link for each channel",
                "First capped ad test running"
              ]
            },
            {
              "name": "30 to 8 days out",
              "items": [
                "Story and reward graphics approved",
                "Video and rules open on a phone",
                "Reviewer copies delivered",
                "Submitted with time for changes",
                "Launch email drafted"
              ]
            },
            {
              "name": "The final week",
              "items": [
                "One owner per launch job",
                "Launch time and timezone agreed",
                "Daily ad cap approved",
                "Launch email test delivered",
                "Fallback message ready"
              ]
            },
            {
              "name": "Launch day",
              "items": [
                "Published by hand",
                "Live page checked on a phone",
                "Email sent with the live link",
                "Ads on after the destination check",
                "First review booked"
              ]
            },
            {
              "name": "Days 1 to 3",
              "items": [
                "Repeated questions logged",
                "Page fixes approved",
                "Spend compared with margin",
                "First backer update posted",
                "Dropped pledges checked"
              ]
            }
          ],
          "caption": "Guildframe's working checklist. Platform rules come from the Kickstarter and Gamefound sources below."
        }
      },
      {
        "id": "help",
        "title": "Running the checklist with us",
        "paragraphs": [
          "We run this checklist for a living, from the reward sheet to the first backer update. Most creators can work through it alone, but the hard part is owning six jobs on the same morning while answering backer comments.",
          "Our full campaign support covers the campaign page, the prelaunch signup page and emails, ad creative and paid advertising, live campaign checks and the final handoff. If you only need part of it, our [Kickstarter launch services for tabletop games](/kickstarter-launch-services) page shows how the pieces split, and [live campaign management](/kickstarter-campaign-management) covers launch day on its own.",
          "Send us your game, your platform and your target date, and we will tell you honestly whether the timeline still fits."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How far ahead should I start a board game Kickstarter launch checklist?",
        "answer": "We plan about 90 days for a first board game campaign. That leaves a month to lock the offer, a month to build the prelaunch audience and a month to finish the page and pass review. Move the dates if an input is late, and keep the order."
      },
      {
        "question": "Does Kickstarter launch automatically at my target time?",
        "answer": "No. Kickstarter says launching is a manual process and an automatic launch cannot be scheduled. Setting a target launch date does not launch the project, so name the person who will press launch and a backup."
      },
      {
        "question": "How long does Kickstarter review take?",
        "answer": "Kickstarter says review can take up to three business days. If changes are requested, the next review takes up to three more business days after you respond, and busy periods can run longer. Plan at least a week of buffer before the date you announce."
      },
      {
        "question": "When can I turn on the Kickstarter prelaunch page?",
        "answer": "First time creators can turn it on after the project has been submitted for review and approved. Repeat creators can open it from the Promotion tab before review. Followers then get a launch notification email when the project goes live."
      },
      {
        "question": "Should ads start before I check the live campaign?",
        "answer": "No. Check the live page on a phone first, then send the launch email, then switch ads on. A short delay costs less than paying for traffic to a wrong price or a broken link."
      },
      {
        "question": "Does a Gamefound test order charge a real payment?",
        "answer": "No. Gamefound says Tester Mode saves the test order without sending it to the payment operator. Check real payment collection separately."
      }
    ],
    "sources": [
      {
        "label": "Project review and launch timing",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236415-my-project-is-awaiting-review-how-does-this-work"
      },
      {
        "label": "Launching an approved project",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236427-how-do-i-launch-my-project-after-it-s-been-approved"
      },
      {
        "label": "Setting up your project's prelaunch page",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page"
      },
      {
        "label": "Tester Mode",
        "publisher": "Gamefound Knowledge Base",
        "href": "https://help.gamefound.com/article/366-tester-mode"
      },
      {
        "label": "Kickstarter release notes: view dropped pledges in your dashboard (Oct 13, 2026)",
        "publisher": "Kickstarter",
        "href": "https://start.kickstarter.com/kickstarter-release-notes"
      }
    ],
    "relatedSlugs": [
      "kickstarter-review-launch-timeline",
      "board-game-kickstarter-page-checklist",
      "kickstarter-prelaunch-email-list",
      "board-game-kickstarter-marketing-plan"
    ],
    "servicePath": "/kickstarter-launch-services",
    "serviceLabel": "Kickstarter launch services for tabletop games",
    "published": "2026-10-28",
    "updated": "2026-11-25"
  },
  {
    "slug": "board-game-pledge-manager-checklist",
    "title": "Choose a Pledge Manager for Your Board Game Campaign",
    "description": "Compare pledge managers for a board game Kickstarter by upgrades, shipping, fees, order exports and support. Use a practical selection checklist.",
    "tag": "Pledge management",
    "answer": "Choose a pledge manager by the work your campaign needs after funding: collecting choices, upgrades, shipping details, applicable payments and reliable fulfillment data. Compare eligible systems against the same sample orders and total fee basis before committing.",
    "sections": [
      {
        "id": "requirements",
        "title": "Start with the orders you need to fulfill",
        "paragraphs": [
          "A campaign with one book and a PDF has different needs from a game with three languages, optional miniatures and regional warehouses. List the choices backers must make and the information the fulfillment partner needs. Then ask which system handles that work without fragile manual corrections.",
          "Separate mandatory tasks from preferences. A polished survey matters, but a missing language code or inaccurate paid status can stop a shipment. Ask the fulfillment partner to review a sample export before selecting the tool."
        ],
        "table": {
          "headers": [
            "Requirement",
            "Question to answer"
          ],
          "rows": [
            [
              "Choices",
              "Which edition, language, size or other option must be recorded?"
            ],
            [
              "Changes",
              "Can backers upgrade or add items, and until when?"
            ],
            [
              "Payments",
              "Which money was already collected and which charges remain?"
            ],
            [
              "Shipping",
              "Which origins, destinations and rate rules must be supported?"
            ],
            [
              "Data",
              "Can the fulfillment team use the exported fields?"
            ],
            [
              "Support",
              "Who resolves an incomplete survey or unusual order?"
            ]
          ]
        }
      },
      {
        "id": "native",
        "title": "Include Kickstarter’s own Pledge Manager in the comparison",
        "paragraphs": [
          "Eligible Kickstarter projects can use its native Pledge Manager. The current help describes surveys, upgrades, optional new backers and later shipping or applicable tax collection. It becomes available after the campaign launches. Check eligibility before including it in your plan.",
          "Kickstarter Late Pledges must end before its Pledge Manager launches. New buyers can still be allowed through the manager when configured. That transition should have a clear public message so someone does not follow an outdated instruction."
        ],
        "source": 0
      },
      {
        "id": "stages",
        "title": "Choose the right stage as well as the right tool",
        "paragraphs": [
          "Gamefound distinguishes its optional Late Pledge stage from Pledge Manager. Late Pledge can extend the offer before shipping collection; Pledge Manager handles shipping details and fees. If you move directly to its manager after crowdfunding, you cannot later open the earlier Late Pledge stage.",
          "A permanent Shopify store has another purpose: retail orders and an ongoing catalogue. It may run alongside campaign fulfillment, but decide which system owns each order and how shared stock is allocated. Do not assume that opening a retail checkout transfers campaign obligations automatically."
        ],
        "source": 1
      },
      {
        "id": "fees",
        "title": "Compare the total cost on the same order scenario",
        "paragraphs": [
          "Ask each provider to price your expected workflow. A headline percentage means little until you know whether it applies to already raised funds, new money, shipping, taxes or another base. Include payment processing, recurring software, support and any migration or setup work.",
          "Use a hypothetical comparison sheet with the same original pledges, expected upgrades and shipping collections in every column. Leave unknown charges blank and ask for confirmation. Do not insert another provider’s fee assumption just to make the totals look complete."
        ],
        "table": {
          "headers": [
            "Quote line",
            "What to confirm"
          ],
          "rows": [
            [
              "Already raised funds",
              "Whether an import or platform charge applies"
            ],
            [
              "New payments",
              "Which upgrades, late buyers or charges enter the fee base"
            ],
            [
              "Payment processing",
              "Percentage, fixed charge and currency treatment"
            ],
            [
              "Refunds",
              "Which charges are returned or retained"
            ],
            [
              "Service period",
              "Support, renewal and closure terms"
            ],
            [
              "Exit",
              "Export access and what happens after the agreement ends"
            ]
          ]
        }
      },
      {
        "id": "test",
        "title": "Run a small order test before inviting every backer",
        "paragraphs": [
          "Prepare sample cases that represent real fulfillment problems: a base game, deluxe upgrade, extra expansion, language change, new buyer, changed country and incomplete survey. Include a mixed physical/digital reward if you offer one. These are test cases, not live customer records.",
          "For each case, compare the selected items with the exported identifiers and quantities. Check what is paid, what remains due and whether the address is ready for fulfillment. Send the test export to the person who will actually import it. A successful download does not prove that their system can use it."
        ],
        "list": [
          "Confirm item and reward identifiers remain distinguishable.",
          "Check options and quantities after an upgrade.",
          "Verify shipping and payment states.",
          "Test address changes before the relevant lock deadline.",
          "Record the handling of unanswered surveys.",
          "Keep the accepted export format with the handoff notes."
        ]
      },
      {
        "id": "handoff",
        "title": "Give backers one clear next action",
        "paragraphs": [
          "Before opening the manager, agree who answers questions and what the message asks backers to do. Explain the choices, any remaining payments and the deadline using confirmed facts. Do not send several competing links for the same task.",
          "Guildframe can help plan the campaign communications and explain the transition. Bring the chosen platform, order scenarios and fulfillment requirements so the message matches the actual workflow."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Do I always need an external pledge manager after Kickstarter?",
        "answer": "No. Check whether Kickstarter’s native Pledge Manager meets your project’s eligibility and requirements before choosing an external service."
      },
      {
        "question": "Is Late Pledge the same as Pledge Manager?",
        "answer": "No. The stages have different tasks and platform-specific rules. In particular, shipping collection and backer choices may belong in the manager rather than the earlier late-pledge stage."
      },
      {
        "question": "What should I test before sending the manager to backers?",
        "answer": "Test representative rewards, options, upgrades, destinations, payment states and the fulfillment export. Ask the person receiving the export to confirm that the fields work."
      }
    ],
    "sources": [
      {
        "label": "Using Kickstarter Pledge Manager",
        "publisher": "Kickstarter Help Center",
        "href": "https://help.kickstarter.com/en-us/articles/16236383-how-do-i-use-kickstarter-s-pledge-manager"
      },
      {
        "label": "Launching Late Pledge and Pledge Manager",
        "publisher": "Gamefound Knowledge Base",
        "href": "https://help.gamefound.com/article/270-preparing-late-pledge-and-pledge-manager-for-launch"
      },
      {
        "label": "Gamefound project types and lifecycle",
        "publisher": "Gamefound Knowledge Base",
        "href": "https://help.gamefound.com/article/285-getting-started-with-crowdfunding"
      }
    ],
    "relatedSlugs": [
      "backerkit-vs-shopify-vs-gamefound",
      "kickstarter-late-pledges-vs-shopify",
      "what-happens-after-kickstarter-is-funded"
    ],
    "servicePath": "/kickstarter-launch-services",
    "serviceLabel": "Plan your tabletop launch",
    "published": "2026-10-28",
    "updated": "2026-10-28"
  }
];

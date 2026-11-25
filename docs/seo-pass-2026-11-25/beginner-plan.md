# Beginner content plan, 25 Nov 2026 (agent: fable-beginner)

Audience: the nervous first time tabletop creator who has a game, no audience and no idea where to start. They ask Umair "how do I do Kickstarter marketing?" and "how do I design a good Kickstarter page?" before they ask about scope or price. The site answers the expert version of these questions well. It has almost no plain "how do I" entry points.

This plan gives the writers one cornerstone page, eight beginner pages and a list of FAQ additions for pages that already exist. Nothing here is final copy.

## 0. How this was researched, and its limits

- Site inventory: every slug in `app/launch-*.ts`, `app/guides/*`, `app/resources/*`, the eight service hubs and the ten new slugs named in the task. All 93 existing guide FAQ questions were read so no addition repeats one.
- Search Console and Bing baselines: beginner phrasing already shows up with poor positions and no fitting page. Examples: "how to launch a board game" (pos 29), "how to market a new board game" (pos 60), "board game kickstarter marketing" (pos 64.8), "kickstarter page design" (pos 54.1), "kickstarter costs" (pos 66), "kickstarter pricing" (66 impressions, pos 53.1), "kickstarter risks" (pos 26.2), "game launch checklist" (173 impressions, pos 37.2).
- Web search on 25 Nov 2026 for the head phrasings. The pages that rank are plain how to guides: Kickstarter's own "How To Market a Tabletop Game in 7 Steps" (20 Feb 2025), LaunchBoom "How to Kickstart a Board Game", Brandon the Game Dev "A Crash Course on Kickstarter for Board Games" and "How to Create the Perfect Board Game Kickstarter Campaign Page", Meeple Mountain "Board Game Kickstarter Marketing 101" and "What makes a good Kickstarter campaign?", PrintNinja "Designing a Kickstarter Page to Fund Your Board Game", Hero Time "How to avoid a failed Kickstarter campaign for your board game", Kickstarter's "From Concept to Fulfillment: The Complete Kickstarter Journey" (9 Sep 2026) and "Why Kickstarter Campaigns Fail After Funding" (3 Jun 2026). Guildframe has no page shaped like any of them.
- Limit, stated plainly: Reddit blocked direct fetching and the search tool returned no Reddit or BoardGameGeek thread URLs, so no thread wording was read first hand. Question wording below comes from Umair's enquiries (as relayed in the task), the query lists in the two baselines, the 24 Nov research list in BRIEF.md, and the titles and question headings of the ranking pages above. Before the writers lock FAQ wording, someone with a browser should spend twenty minutes in r/tabletopgamedesign, r/BoardgameDesign, r/kickstarter and the BGG "Board Game Design" forum and adjust phrasing. No search volume is claimed anywhere in this plan.
- Figures marked "seen today" were read on the source on 25 Nov 2026 through a summarising fetch. Writers must open the source again and confirm the exact number before it goes on a page.

Figures seen today that the briefs lean on:

| Figure | Source | Date of source |
| --- | --- | --- |
| 6,646 tabletop projects launched in 2024, 5,314 funded, 80% success, $220M pledged to successful campaigns | Kickstarter, already cited on `/resources/kickstarter-tabletop-games-benchmark` | 2025 |
| Typical cost to win a backer through ads: $15 to $50. Target return on ad spend: 2.5x | updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps | 20 Feb 2025 |
| Kickoff to launch about 50 days, live campaign about 45 days, late pledges about one month, pledge manager survey open at least one month, launch at 11 am Eastern | updates.kickstarter.com/from-concept-to-fulfillment-the-complete-kickstarter-journey | 9 Sep 2026 |
| Overseas manufacturing usually takes about twelve months from campaign end to delivery. Kickstarter and payment partners take 8 to 10 percent. Suggested contingency 20 to 30 percent. 5 to 14 percent of funded campaigns never deliver (Mollick) | updates.kickstarter.com/why-kickstarter-campaigns-fail-after-funding-and-how-to-avoid-it | 3 Jun 2026 |
| The "30% rule": be able to raise 30% of the goal in 24 hours from your own list | meeplemountain.com/articles/board-game-kickstarter-marketing-101 | 14 Oct 2020 (old, treat as a rule of thumb and say so) |
| Ten failure reasons (demand, price, art, marketing, trust, community, timing, clarity, urgency, alienating the audience) | Stonemaier Games list, as summarised by herotime1.com | 2021 list, 2025 summary. Go to the Stonemaier original |
| "The overwhelming majority of unsuccessful projects raised less than 20% of their goal" | Statista, quoted by Hero Time | Not confirmed on a primary source. kickstarter.com/help/stats now redirects to a year in review post. Leave out unless a primary source is found |

## 1. The beginner question bank (96 questions)

Status codes: **A** already answered well. **B** becomes an FAQ or section on an existing or in progress page (see section 5). **C** needs a new page from this plan. **CS** short answer lives as a cornerstone chapter only.

New page short names used below: CORNER (`how-to-launch-a-board-game-on-kickstarter`), MARKET (`how-to-market-a-kickstarter`), BACKERS (`how-to-get-kickstarter-backers`), DESIGN (`how-to-design-a-kickstarter-page`), READY (`is-my-game-ready-for-kickstarter`), COST (`board-game-kickstarter-cost`), WHEN (`when-to-launch-a-kickstarter`), FAIL (`why-kickstarter-campaigns-fail`), BASICS (`kickstarter-for-beginners`).

### Getting started and how Kickstarter works

| # | Question in creator wording | Status | Owner |
| --- | --- | --- | --- |
| 1 | How do I launch a board game on Kickstarter? | C | CORNER |
| 2 | How do I start a Kickstarter for a board game? | C | CORNER |
| 3 | Where do I even start with Kickstarter? | C | CORNER |
| 4 | Is there a step by step guide to launching a Kickstarter? | C | CORNER |
| 5 | How does Kickstarter actually work? | C | BASICS |
| 6 | What happens if I don't hit my goal? | C | BASICS |
| 7 | Is Kickstarter free to use? | C | BASICS (links to `kickstarter-fees`) |
| 8 | Who can launch a Kickstarter? Can I launch from my country? | C | BASICS |
| 9 | Do I need a company or an LLC to run a Kickstarter? | C | BASICS |
| 10 | When do I get the money after the campaign ends? | C | BASICS (links to `what-happens-after-kickstarter-is-funded`) |
| 11 | Do I pay tax on Kickstarter money? | C | BASICS (short, points to an accountant, no tax advice) |
| 12 | Can I run a Kickstarter by myself? | C | BASICS |
| 13 | Is Kickstarter still worth it for board games in 2026? | C | BASICS |
| 14 | Should I use Kickstarter or Gamefound for my first game? | A | `kickstarter-vs-gamefound` (new) |
| 15 | Should I pitch a publisher or self publish on Kickstarter? | C | BASICS |
| 16 | Can I launch a second time if the first one fails? | C | FAIL |
| 17 | Is my idea good enough for Kickstarter? | C | READY |

### Is my game ready

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| 18 | What do I need before I launch a Kickstarter? | C | READY |
| 19 | Can I launch with a prototype? | C | READY (how to show it stays on `kickstarter-prototype-risks-disclosure`) |
| 20 | How finished does my game need to be? | C | READY |
| 21 | How much art do I need before Kickstarter? | C | READY |
| 22 | Do I need the rulebook finished before I launch? | B | `board-game-kickstarter-gameplay-rulebook` |
| 23 | Do I need a manufacturer quote before launching? | C | READY |
| 24 | How much playtesting is enough? | C | READY |
| 25 | Do I need reviews before I launch? | B | `board-game-reviewer-outreach` |
| 26 | Do I need a website before my Kickstarter? | B | `kickstarter-prelaunch-page-vs-landing-page` |
| 27 | Do I need a trademark or to protect my idea first? | C | BASICS (short, not legal advice) |
| 28 | Can I use AI art on Kickstarter? | C | READY (verify Kickstarter's AI disclosure policy on the primary source first, otherwise leave out) |
| 29 | How do I make my game look professional? | C | DESIGN |

### Money

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| 30 | How much does it cost to launch a board game on Kickstarter? | C | COST |
| 31 | How much money do I need before I launch? | C | COST |
| 32 | Can I launch a Kickstarter with no money? | C | COST |
| 33 | What does Kickstarter take from my funding? | A | `kickstarter-fees` (new) |
| 34 | How much should my funding goal be? | A | `board-game-kickstarter-funding-goal` |
| 35 | Should I set a low goal so I fund fast? | A | `board-game-kickstarter-funding-goal` (FAQ exists) |
| 36 | How much should I charge for my game? | A | `board-game-kickstarter-reward-pricing` |
| 37 | How many reward tiers should I have? | B | `board-game-kickstarter-reward-pricing` |
| 38 | Should I offer early bird rewards? | B | `board-game-kickstarter-reward-pricing` |
| 39 | How much should I spend on ads? | A | `kickstarter-advertising-budget-board-games` |
| 40 | How much does a Kickstarter agency cost? | A | `kickstarter-agency-cost` (new) |
| 41 | How much does a campaign page designer cost? | A | `board-game-kickstarter-campaign-design-cost` |
| 42 | How much does it cost to manufacture a board game? | CS | CORNER chapter (no deep owner yet, see gaps) |
| 43 | Will I actually make a profit on Kickstarter? | C | COST |
| 44 | How much does shipping cost and who pays for it? | B | `kickstarter-shipping-delivery-page` |
| 45 | Do tariffs affect my board game? | A | `board-game-tariffs-shipping-us` (new) |
| 46 | Do I have to charge VAT? | B | `selling-miniatures-internationally-vat-ioss` |

### The campaign page

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| 47 | How do I design a good Kickstarter page? | C | DESIGN |
| 48 | What should a Kickstarter page include? | C | DESIGN (QA list stays on `board-game-kickstarter-page-checklist`) |
| 49 | What makes a good Kickstarter page? | C | DESIGN |
| 50 | Can I design my Kickstarter page myself? | C | DESIGN |
| 51 | What software do I use to make Kickstarter graphics? | C | DESIGN |
| 52 | How long should my Kickstarter page be? | C | DESIGN |
| 53 | What goes at the top of the page? | C | DESIGN |
| 54 | What size should my images be? | A | `kickstarter-image-sizes` (new) |
| 55 | How do I explain how my game plays? | A | `board-game-kickstarter-gameplay-rulebook` |
| 56 | Do I need a video? | A | `kickstarter-campaign-video-planning` (FAQ exists) |
| 57 | How long should my video be? | A | `kickstarter-campaign-video-planning` |
| 58 | Can I film the video on my phone? | B | `kickstarter-campaign-video-planning` |
| 59 | Do I need stretch goals? | B | `kickstarter-stretch-goals-planning` |
| 60 | Should I hire a designer or do it myself? | A | `when-to-hire-kickstarter-campaign-designer` |
| 61 | What do I write in the risks section? | A | `kickstarter-prototype-risks-disclosure` |
| 62 | How do I write a good Kickstarter title and subtitle? | C | DESIGN |
| 63 | Do I need 3D renders of my game? | B | `/campaign-creative` hub FAQ |

### Marketing and backers

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| 64 | How do I market a Kickstarter? | C | MARKET |
| 65 | How do I do Kickstarter marketing with no experience? | C | MARKET |
| 66 | How do I promote my board game before launch? | C | MARKET |
| 67 | How do I build hype for my Kickstarter? | C | MARKET |
| 68 | Does Kickstarter promote my campaign for me? | C | MARKET |
| 69 | Which social media should I use for a board game? | C | MARKET |
| 70 | Do I need an email list? | A | `kickstarter-prelaunch-email-list` (FAQ exists) |
| 71 | How do I build an email list from nothing? | B | `kickstarter-prelaunch-email-list` |
| 72 | How do I get backers on Kickstarter? | C | BACKERS |
| 73 | How do I find my first 100 backers? | C | BACKERS |
| 74 | How do I get backers with no audience? | C | BACKERS |
| 75 | Where do Kickstarter backers come from? | C | BACKERS |
| 76 | Will friends and family be enough? | C | BACKERS |
| 77 | How many followers do I need before I launch? | A | `kickstarter-followers-before-launch` (new) |
| 78 | Are Facebook ads worth it for a board game? | B | `kickstarter-advertising-budget-board-games` |
| 79 | Can I market a Kickstarter without paying for ads? | C | MARKET |
| 80 | How do I get reviewers to cover my game? | A | `board-game-reviewer-outreach` |
| 81 | Should I go to conventions before my Kickstarter? | C | BACKERS |
| 82 | Should I hire a marketing agency? | A | `choose-board-game-kickstarter-marketing-agency` |
| 83 | How do I spot a Kickstarter marketing scam? | B | `choose-board-game-kickstarter-marketing-agency` |
| 84 | How do I know which marketing is working? | A | `kickstarter-referral-tags-tracking` |

### Timing, launch and when it goes wrong

| # | Question | Status | Owner |
| --- | --- | --- | --- |
| 85 | How long does it take to prepare a Kickstarter? | C | WHEN |
| 86 | When should I launch my Kickstarter? | C | WHEN |
| 87 | What is the best day and month to launch? | C | WHEN |
| 88 | How long should my campaign run? | C | WHEN (rule itself is on `kickstarter-review-launch-timeline`) |
| 89 | How do I know I'm ready to press launch? | C | WHEN |
| 90 | How long does Kickstarter take to approve my project? | A | `kickstarter-review-launch-timeline` |
| 91 | What do I do on launch day? | A | `board-game-kickstarter-launch-day-checklist` |
| 92 | What makes a Kickstarter fail? | C | FAIL |
| 93 | My campaign is slow in the middle. Is that normal? | B | `kickstarter-live-campaign-updates` |
| 94 | Should I cancel and relaunch? | C | FAIL |
| 95 | What happens after I'm funded? | A | `what-happens-after-kickstarter-is-funded` |
| 96 | Do I need a pledge manager? | A | `pledge-managers-compared` (new) and `board-game-pledge-manager-checklist` |

Totals: 57 questions go to a new page (C), 1 lives as a cornerstone chapter only (CS), 14 become additions to existing pages (B), 24 are already answered by an existing or planned page (A). Section 5 lists 27 additions in all, because some A pages also need the beginner wording as an FAQ so the answer can be quoted directly.

## 2. Ownership rules so nothing cannibalizes

1. The cornerstone owns the whole journey and the phrase family "how to launch a board game on Kickstarter". Each chapter is a short answer of 3 to 6 paragraphs that ends with a link to the page that owns the topic. A chapter never carries the deep page's table, calculator or checklist.
2. No separate "step by step for first timers" page. That candidate from the task is the cornerstone. Two pages on that phrase would compete.
3. MARKET owns "how do I market" (what marketing is, the channels, the order). `board-game-kickstarter-marketing-plan` keeps "marketing plan", "timeline" and "budget" (the schedule for someone already committed). MARKET links down to the plan with the anchor "board game Kickstarter marketing plan" and never repeats its week table.
4. BACKERS owns "get backers", "first 100 backers", "no audience". It is about where people come from, one source at a time. Follower targets and follower to backer conversion belong to `kickstarter-followers-before-launch`. Email mechanics belong to `kickstarter-prelaunch-email-list`.
5. DESIGN owns "how to design", "what makes a good page", "what to include" in teaching form. `board-game-kickstarter-page-checklist` stays the final check before launch. `/campaign-design` stays the commercial page. `ttrpg-kickstarter-campaign-page-design` keeps TTRPG.
6. READY owns readiness of the game itself (prototype, art, rules, quotes). `kickstarter-prototype-risks-disclosure` keeps how to label and show a prototype on the page.
7. COST owns the total budget to launch. `kickstarter-fees` keeps platform fees, `kickstarter-agency-cost` keeps agency pricing, `board-game-kickstarter-campaign-design-cost` keeps design quotes, `kickstarter-advertising-budget-board-games` keeps ad budgets. COST gives one line on each and links.
8. WHEN owns the date decision and preparation time. `kickstarter-review-launch-timeline` keeps review time, the launch button and campaign length rules.
9. FAIL owns failure reasons, the slow campaign decision and relaunch. Post funding failure (late delivery) gets one section that links to `what-happens-after-kickstarter-is-funded`.
10. BASICS owns platform mechanics for people who have never used Kickstarter as a creator. It is a question bank, so every answer is 2 to 4 sentences plus a link. It does not walk the journey. That is the cornerstone's job.

## 2a. Additions only: overlap register (note from Umair, 25 Nov)

Everything in this plan is an addition. Nothing here replaces, merges, retitles or narrows a page in the original research plan: the Tier 1 and Tier 2 refreshes, the ten new guides and the service hubs all keep their titles, scope and target phrases. Where a beginner question overlaps an existing or planned page, that page keeps ownership. The new page takes a different, more beginner phrasing, gives a short answer and links to the owner. The "additions" in section 5 only add an FAQ or one linking sentence. They never remove or move content.

| New page | Overlaps with (keeps ownership) | Phrases the owner keeps | Beginner phrasing the new page takes instead |
| --- | --- | --- | --- |
| CORNER | `/kickstarter-launch-services` hub; `board-game-kickstarter-launch-day-checklist`; every deep guide it links to | "Kickstarter launch services", "tabletop Kickstarter agency", "launch day checklist", "game launch checklist", and each deep guide's own topic | "how to launch a board game on Kickstarter", "how to start a Kickstarter for a board game", "step by step" |
| MARKET | `board-game-kickstarter-marketing-plan`; `/kickstarter-prelaunch-marketing`; `/kickstarter-advertising`; `choose-board-game-kickstarter-marketing-agency` | "Kickstarter marketing plan", "board game Kickstarter marketing plan", timeline, budget, "prelaunch marketing", "marketing agency" | "how do I market a Kickstarter", "how to promote", "build hype", "with no experience" |
| BACKERS | `kickstarter-followers-before-launch`; `kickstarter-prelaunch-email-list`; `board-game-reviewer-outreach` | follower counts, follower to backer conversion, email list setup and sequence, reviewer outreach | "how do I get backers", "first 100 backers", "no audience", "where do backers come from" |
| DESIGN | `/campaign-design` and the category design pages; `board-game-kickstarter-page-checklist`; `ttrpg-kickstarter-campaign-page-design`; `kickstarter-image-sizes`; `kickstarter-campaign-graphics-mobile-readability`; `kickstarter-reward-tier-graphics` | "Kickstarter campaign design" (service intent), "page checklist", TTRPG page design, image sizes, mobile graphics, reward tier graphics | "how do I design a good Kickstarter page", "what makes a good page", "can I design it myself", "look professional" |
| READY | `kickstarter-prototype-risks-disclosure`; `board-game-kickstarter-page-checklist`; `what-to-send-kickstarter-campaign-designer` | prototype images, risks section, page readiness check, designer handover | "is my game ready", "what do I need before I launch", "can I launch with a prototype", "how much art" |
| COST | `kickstarter-fees`; `kickstarter-agency-cost`; `board-game-kickstarter-campaign-design-cost`; `kickstarter-advertising-budget-board-games`; `board-game-kickstarter-funding-goal` | "Kickstarter fees", "Kickstarter agency cost", "campaign design cost", "advertising budget", "funding goal" | "how much does it cost to launch a board game on Kickstarter", "how much money do I need", "with no money" |
| WHEN | `kickstarter-review-launch-timeline`; `board-game-kickstarter-marketing-plan`; `kickstarter-to-shopify-launch-timeline` | "how long does Kickstarter take to approve", review to launch, campaign duration rules, marketing timeline | "when should I launch", "best day or month", "how long does it take to prepare" |
| FAIL | `kickstarter-prototype-risks-disclosure` (risks section wording); `kickstarter-live-campaign-updates`; `what-happens-after-kickstarter-is-funded`; `/resources/kickstarter-tabletop-games-benchmark` | "risks and challenges" section, campaign updates, after funding steps, success rate statistics | "what makes a Kickstarter fail", "why did my Kickstarter fail", "should I cancel", "can I relaunch" |
| BASICS | `kickstarter-fees`; `kickstarter-vs-gamefound`; `what-happens-after-kickstarter-is-funded` | fee detail, platform comparison, after funding steps | "Kickstarter for beginners", "how does Kickstarter work", "what if I don't hit my goal", "do I need a company" |

Three rules for the writers follow from this.

1. If a beginner page needs a fact that a deep page owns (a fee, an image size, a follower benchmark), it states the fact in one sentence and links. It never carries the owner's table, calculator or checklist.
2. No beginner page uses an owner's main phrase in its seoTitle or H1. "Marketing plan", "fees", "agency cost", "image sizes", "followers", "funding goal", "page checklist" and "launch day checklist" stay out of the new titles.
3. If Search Console later shows a new page and an owner trading places for the same query, the owner wins: trim the beginner page's section to a link.

## 3. Cornerstone brief (first and most important)

**Slug:** `how-to-launch-a-board-game-on-kickstarter`

Why this slug and not `how-to-launch-a-kickstarter`: the bare phrase is answered by Kickstarter's own help pages and by generalist agencies for gadgets, film and every other category, and Guildframe only serves tabletop. Every ranking competitor for the tabletop version uses the board game wording ("How to Kickstart a Board Game", "A Crash Course on Kickstarter for Board Games", "Board Game Kickstarter: Your Winning Campaign"). Search Console already shows "how to launch a board game" at position 29 with no fitting page. The title and H1 still carry "tabletop", and a chapter near the top routes TTRPG, TCG, miniatures, terrain and dice creators to their own guides, so the page serves all categories without diluting the phrase. Keep `how-to-launch-a-kickstarter` unregistered. If the lead prefers the short slug, the brief below works unchanged.

**Where it lives:** `/guides/how-to-launch-a-board-game-on-kickstarter` as a custom page (`app/guides/how-to-launch-a-board-game-on-kickstarter/page.tsx`, the same pattern the Shopify guides use), not a pillar landing page. Reasons: the five pillar hubs are commercial service pages and should stay that way; this page is informational and sits above all five, linking to each hub once; a guide URL gets article schema, the visible updated date and the shared article CTA; and around twenty chapters with two large visuals will not fit the standard `LaunchGuide` data shape comfortably. The lead should pin it at the top of `/guides` as "Start here", add it to the homepage or footer navigation if the design allows without layout change, and list it first in `llms.txt`.

**Working title (H1):** The Complete Guide to Launching a Tabletop Kickstarter, A to Z
**seoTitle:** How to Launch a Board Game on Kickstarter: A to Z Guide (55 chars)
**description:** How to launch a board game on Kickstarter, from prototype and budget to page, marketing, launch day, shipping and delivery. Plain answers for first timers. (155 chars)
**answer (direction):** To launch a tabletop game on Kickstarter you finish the game far enough to show it, work out what it costs to make and ship, build a page and an audience before launch day, run the campaign for a few weeks, then manufacture and deliver. Most of the work that decides the result happens before you press launch.

**Question variants it owns:** how to launch a board game on Kickstarter; how to start a Kickstarter for a board game; how to kickstart a board game; how do I launch a tabletop game on Kickstarter; Kickstarter guide for board games; step by step guide to launching a Kickstarter; where do I start with Kickstarter; board game Kickstarter checklist from start to finish.

**Reader and stage:** has a game or a strong prototype, has never run a campaign, is reading before spending money. Wants the whole map on one page and permission to skip to the part that worries them.

**Angle:** Umair has designed campaigns for ten years and has had this exact conversation with first time creators many times. The page is that conversation written down in order. Each chapter opens with the creator's question as the heading, answers it in the first two sentences, says what first timers usually get wrong, and names the deeper guide. No jargon without a one line definition (pledge manager, stretch goal, add on, late pledge, landed cost).

**Page furniture:** jump list of chapters at the top, the master timeline visual directly under the intro, a "which guide is for my kind of game" box, the budget visual in the costs chapter, the "where Guildframe can help" table before the FAQ, then the CTA to `/buy` and `/kickstarter-launch-services`.

### Chapter list

Each chapter: 3 to 6 short paragraphs, one "read next" link to the owner, no deep tables.

| # | Chapter heading (target question) | Short answer direction | Links to (owner) |
| --- | --- | --- | --- |
| 1 | Is my game ready for Kickstarter? | Kickstarter comes near the end of making a game. You need a tested game, a prototype you can photograph and a quote. | `is-my-game-ready-for-kickstarter`, `kickstarter-prototype-risks-disclosure` |
| 2 | How does Kickstarter work for a first time creator? | All or nothing funding, a fixed deadline, money arrives after the campaign, you owe backers the reward. | `kickstarter-for-beginners` |
| 3 | Which guide fits my kind of game? | Routing box, one line each for card games, TCGs, TTRPGs, miniatures and STLs, terrain and dice. | `card-game-kickstarter-launch-guide`, `tcg-kickstarter-launch-guide`, `ttrpg-kickstarter-launch-guide`, `miniatures-stl-kickstarter-launch-guide`, `terrain-and-dice-kickstarter-launch-guide` |
| 4 | Should I launch on Kickstarter or Gamefound? | Most first games start on Kickstarter for reach. Say when Gamefound suits better. | `kickstarter-vs-gamefound`, hub `/gamefound-launch-services` |
| 5 | How much does it cost to launch? | You pay for art, prototypes, the page, marketing and samples before a single pledge arrives. Budget visual sits here. | `board-game-kickstarter-cost`, `kickstarter-agency-cost`, `board-game-kickstarter-campaign-design-cost` |
| 6 | What fees does Kickstarter take? | One paragraph with the verified percentage and a pointer. | `kickstarter-fees` |
| 7 | How do I set my funding goal? | The goal is the least you need to make and ship the smallest print run, not a sales target. | `board-game-kickstarter-funding-goal` |
| 8 | How do I price my game and rewards? | Price from landed cost up, keep tiers few and easy to compare. | `board-game-kickstarter-reward-pricing`, `kickstarter-reward-tier-graphics` |
| 9 | How do I design the campaign page? | The page has to show what the game is, how it plays, what you get and why to trust you, in that order. | `how-to-design-a-kickstarter-page`, `board-game-kickstarter-page-checklist`, `board-game-kickstarter-gameplay-rulebook`, `kickstarter-image-sizes` |
| 10 | Do I need a video? | Not required, usually worth it, short and clear beats polished. | `kickstarter-campaign-video-planning`, hub `/campaign-creative` |
| 11 | What is a prelaunch page and how many followers do I need? | Put the prelaunch page up early, collect follows and emails, and judge readiness from them. | `kickstarter-prelaunch-page-guide`, `kickstarter-followers-before-launch`, `kickstarter-prelaunch-email-list`, `kickstarter-prelaunch-page-vs-landing-page` |
| 12 | How do I market my campaign? | Marketing starts months before launch. Pick two or three channels you can keep up. | `how-to-market-a-kickstarter`, `board-game-kickstarter-marketing-plan`, `how-to-get-kickstarter-backers`, `board-game-reviewer-outreach` |
| 13 | Should I run ads? | Ads multiply a page that already converts. They do not fix one that does not. | `kickstarter-advertising-budget-board-games`, `kickstarter-referral-tags-tracking`, hub `/kickstarter-advertising` |
| 14 | When should I launch? | Launch when the audience and the page are ready, not when you are tired of waiting. | `when-to-launch-a-kickstarter`, `kickstarter-review-launch-timeline` |
| 15 | What happens on launch day? | The first two days set the tone. Have every email, post and check written beforehand. | `board-game-kickstarter-launch-day-checklist` |
| 16 | What do I do while the campaign is live? | Answer comments, post useful updates, expect a quiet middle. | `kickstarter-live-campaign-updates`, `kickstarter-stretch-goals-planning`, hub `/kickstarter-campaign-management` |
| 17 | What if it is not going well? | Most reasons are visible before launch. Know the options: push, cancel, relaunch. | `why-kickstarter-campaigns-fail` |
| 18 | I'm funded. What happens now? | Payment, dropped pledges, the first backer update, late pledges. | `what-happens-after-kickstarter-is-funded`, `kickstarter-late-pledges-vs-shopify` |
| 19 | Do I need a pledge manager? | What it is in one sentence, when a small campaign can skip it. | `pledge-managers-compared`, `board-game-pledge-manager-checklist`, `backerkit-vs-shopify-vs-gamefound` |
| 20 | How does manufacturing work? | Quotes, samples, file approval, mass production. Chapter only, no deep owner yet. | No owner. Link out to the manufacturer quote section of `is-my-game-ready-for-kickstarter` |
| 21 | How do shipping and fulfillment work? | Freight to regional warehouses, then to backers. Shipping often costs more than first timers expect. | `kickstarter-shipping-delivery-page` |
| 22 | What about VAT and tariffs? | Two short verified paragraphs, then links. No advice beyond the sources. | `board-game-tariffs-shipping-us`, `selling-miniatures-internationally-vat-ioss` |
| 23 | How do I keep backers happy until delivery? | Monthly updates, honest dates, one place for address changes. | hub `/post-campaign-support`, `kickstarter-live-campaign-updates` |
| 24 | What do I do after delivery? | Open a store for late buyers, expansions and the next campaign. | `move-from-kickstarter-to-shopify`, `kickstarter-to-shopify-launch-timeline`, `sell-board-game-preorders-on-shopify` |

### Infographic 1: master timeline (`timeline`)

Title that states the finding: "Most of a Kickstarter happens before launch day and after the last pledge".

Events, each with a label and one line:

1. 6 to 12 months before launch: finish playtesting, start art, request manufacturer quotes.
2. 4 to 6 months before: budget, funding goal, reward prices, choose platform.
3. 3 to 4 months before: prelaunch page live, email signup live, start showing the game.
4. 2 to 3 months before: page design, video, reviewer prototypes sent.
5. 4 to 6 weeks before: ads tests if used, preview page shared for feedback.
6. 1 to 2 weeks before: submit for Kickstarter review, launch emails written.
7. Launch day.
8. Live campaign.
9. 0 to 2 months after: funds arrive, late pledges, pledge manager.
10. 2 to 12 months after: manufacturing, freight, fulfillment, delivery.
11. After delivery: store, restock, next campaign.

Data needed and where it comes from: Kickstarter's Sep 2026 journey post gives about 50 days from kickoff to launch, a campaign of about 45 days, about one month of late pledges and a survey open at least one month. Kickstarter's Jun 2026 post gives about twelve months from campaign end to delivery with an overseas manufacturer. Kickstarter help gives review of up to three business days and a campaign length of 1 to 60 days (both already cited on `kickstarter-review-launch-timeline`). The "months before" ranges for stages 1 to 5 have no single primary source. Label them "Guildframe planning example for a first board game" in the caption, and Umair should confirm the ranges match how he actually plans. Note for the writer: Kickstarter's own 50 day runway assumes the product is finished, so say so, because a first game is usually not.

### Infographic 2: budget split (`split`)

Title: "Example: where the money goes on a $30,000 board game campaign".

Parts: manufacturing; shipping and fulfillment; Kickstarter and payment fees; marketing and ads; art and page; contingency. Only two numbers have a source seen today: fees of 8 to 10 percent and a suggested contingency of 20 to 30 percent (Kickstarter, Jun 2026). Every other share must be a clearly labelled illustrative example that Umair signs off, or the visual should be redrawn as a `checklist` of cost lines with no percentages. Do not publish invented shares as if they were averages.

Optional third visual (`stats`): 6,646 launched, 5,314 funded, 80%, $220M, sourced from the site's own benchmark page, with the caption that the figure covers every tabletop project including small zines and repeat creators.

### Where Guildframe can help at each stage

Render as a table or a `steps` visual before the FAQ. Wording of what is included must match `app/launch-services.ts` and the brief. Prices: campaign page package $1,800, full campaign support $5,900, free opening mockup.

| Stage (chapters) | What the creator does alone | Where Guildframe helps | Hub |
| --- | --- | --- | --- |
| Planning, costs, goal, pricing (1 to 8) | Game, quotes, numbers | Launch planning and scope | `/kickstarter-launch-services` |
| Platform choice (4) | Decide Kickstarter or Gamefound | Gamefound setup and adaptation | `/gamefound-launch-services` |
| Page (9) | Art, rules, product facts | Page design and copy, free opening mockup | `/campaign-design` |
| Video and visuals (10) | Footage, prototype | Renders, motion, ad variants | `/campaign-creative` |
| Prelaunch (11, 12) | Show up in the community | Prelaunch page, landing page, email | `/kickstarter-prelaunch-marketing` |
| Ads (13) | Ad budget, account ownership | Paid advertising | `/kickstarter-advertising` |
| Launch and live (14 to 17) | Approvals, backer replies | Live campaign management, updates | `/kickstarter-campaign-management` |
| After funding (18 to 23) | Manufacturing and shipping decisions | Backer communication, pledge manager content | `/post-campaign-support` |
| After delivery (24) | Stock | Kickstarter to Shopify store setup | `/kickstarter-to-shopify` |

State the honest limit once: Guildframe does not manufacture, ship or give tax advice.

**FAQ (creator wording):**

1. How do I launch a board game on Kickstarter step by step?
2. How long does it take to launch a Kickstarter from start to finish?
3. How much money do I need to launch a board game on Kickstarter?
4. Can I launch a Kickstarter with just a prototype?
5. Do I need an audience before I launch?
6. Can I do the whole Kickstarter myself?
7. What is the hardest part of a board game Kickstarter?

**Links in from:** `/guides` index (pinned first), homepage or footer if allowed, all eight service hubs (one contextual line: "New to this? Start with the A to Z guide"), every beginner page in this plan, `board-game-kickstarter-launch-day-checklist` (it gets the "game launch checklist" impressions and should send early stage readers up), `/resources/tabletop-campaign-launch-worksheet`, `/about`.

**servicePath:** `/kickstarter-launch-services`, label "Kickstarter launch services for tabletop games". Final CTA also offers `/buy`.

**Sources to verify:**

1. updates.kickstarter.com/from-concept-to-fulfillment-the-complete-kickstarter-journey (9 Sep 2026)
2. updates.kickstarter.com/why-kickstarter-campaigns-fail-after-funding-and-how-to-avoid-it (3 Jun 2026)
3. updates.kickstarter.com/how-to-market-a-tabletop-game-in-7-steps (20 Feb 2025)
4. Kickstarter help: fees, review time and campaign duration articles (use the same URLs as `kickstarter-fees` and `kickstarter-review-launch-timeline`)
5. Kickstarter 2024 tabletop figures as cited on `/resources/kickstarter-tabletop-games-benchmark`

## 4. The eight beginner pages

All are data guides in `app/guides-new/<slug>.ts` unless the lead decides otherwise. All link up to the cornerstone in the first section with the anchor "how to launch a board game on Kickstarter". Each needs two visuals.

### 4.1 `how-to-market-a-kickstarter`

- **Working title:** How to Market a Kickstarter Campaign: A Beginner's Guide for Tabletop Creators
- **seoTitle:** How to Market a Kickstarter: Beginner Guide for Board Games (59 chars)
- **description:** How to market a Kickstarter when you have never done marketing before. What to do first, which channels suit a board game and what can wait. (141 chars)
- **Owns:** how do I market a Kickstarter; how do I do Kickstarter marketing; how to promote a Kickstarter campaign; how to promote my board game before launch; how do I build hype for my Kickstarter; does Kickstarter promote my campaign; can I market a Kickstarter without ads; which social media for a board game; how to market a new board game.
- **Evidence:** Umair names this as the question he hears most. Search Console shows "board game marketing", "board game kickstarter marketing", "tabletop game marketing", "ttrpg marketing" and "how to market a new board game" all sitting between positions 60 and 77, which means Google sees the site as relevant but has no page that answers the plain question. Kickstarter itself ranks with a seven step beginner post, so the format is proven.
- **Reader and stage:** game mostly done, no list, no following, finds the word marketing uncomfortable. Three to nine months before launch.
- **Angle:** Marketing a Kickstarter means getting a few hundred of the right people to know the game exists before launch day. Umair explains it as a short list of jobs in order, not a channel list. Say plainly which things first timers waste time on.
- **H2 outline:**
  1. What Kickstarter marketing actually means: getting people to follow before launch so day one is not empty.
  2. Start with who the game is for: one sentence on the player, which decides every channel.
  3. The three jobs before launch: a place to send people, a reason to follow, a way to reach them again.
  4. Pick two or three channels you can keep up: compare community, content, reviewers, events and ads in plain terms.
  5. Does Kickstarter bring backers by itself: what the platform does and does not do for a new creator.
  6. What to do when you have no budget: free routes and their honest ceiling.
  7. When ads make sense: only after the page converts. Hand off to the ad budget guide.
  8. A simple week by week rhythm: one paragraph, then link to the marketing plan for the full schedule.
  9. Doing it yourself or getting help: what we take on, what stays with you.
- **Visual 1 (`steps`):** "Marketing is five jobs in this order": know the player, build the landing spot, show the game weekly, collect follows and emails, tell everyone on launch day. No numbers needed.
- **Visual 2 (`compare`):** "Free channels cost time, paid channels cost money": columns for community and forums, short video and social, reviewers, conventions, paid ads. Rows: cost, time, when to start. Only sourced number: $15 to $50 per backer through ads (Kickstarter, Feb 2025). Everything else in words.
- **FAQ:** How do I market a Kickstarter with no audience? Does Kickstarter market my campaign for me? How early should I start marketing? Do I have to run ads? Which social media is best for a board game Kickstarter? How much should I spend on marketing my first campaign? Can someone do the marketing for me?
- **Links out:** `board-game-kickstarter-marketing-plan`, `how-to-get-kickstarter-backers`, `kickstarter-prelaunch-email-list`, `kickstarter-followers-before-launch`, `kickstarter-advertising-budget-board-games`, `board-game-reviewer-outreach`, `choose-board-game-kickstarter-marketing-agency`, cornerstone, hub `/kickstarter-prelaunch-marketing`.
- **Links in from:** cornerstone chapter 12, `board-game-kickstarter-marketing-plan` (first section: "new to this, read the beginner guide first"), `/kickstarter-prelaunch-marketing`, `/kickstarter-advertising`, `kickstarter-for-beginners`, homepage FAQ if one exists.
- **servicePath:** `/kickstarter-prelaunch-marketing`
- **Sources to verify:** Kickstarter "How To Market a Tabletop Game in 7 Steps" (Feb 2025); Kickstarter help article on how backers discover projects (find current URL); Kickstarter prelaunch page help article (already cited on `kickstarter-prelaunch-page-guide`); Meeple Mountain "Board Game Kickstarter Marketing 101" (2020, rule of thumb only); Kickstarter creator handbook promotion page.

### 4.2 `how-to-get-kickstarter-backers`

- **Working title:** How to Get Your First Kickstarter Backers When Nobody Knows Your Game
- **seoTitle:** How to Get Kickstarter Backers: Your First 100 (46 chars)
- **description:** How to get backers on Kickstarter when you have no audience. Where the first 100 people come from for a board game and what to ask them to do. (143 chars)
- **Owns:** how do I get backers on Kickstarter; how do I find my first 100 backers; how to get backers with no audience; where do Kickstarter backers come from; will friends and family be enough; should I go to conventions before my Kickstarter; how do I get strangers to back my game.
- **Evidence:** "how to get backers" is the outcome wording of the marketing question and sits apart from it in search results (BackerKit ranks a whole guide series titled "how to get more backers"). No Guildframe page targets the word backers. Community, the sixth reason on the Stonemaier failure list, is the one first timers can fix most cheaply.
- **Reader and stage:** has told friends and family, has perhaps 20 interested people, worries that is all there is.
- **Angle:** The first hundred are found one group at a time, mostly by showing up where players already are. Umair is direct that friends and family rarely fund a game by themselves, and that a small real list beats a large cold one.
- **H2 outline:**
  1. Where backers actually come from: your own list, the platform, outside traffic. What a new creator can expect from each.
  2. Start with the people who have played it: playtesters and local groups, and what to ask of them.
  3. Go where your players already talk: BoardGameGeek, Discord servers, Facebook groups, subreddits, with the etiquette that keeps you welcome.
  4. Show the game in person: game nights, stores, conventions. Use the event dates in BRIEF.md after checking each.
  5. Turn interest into a follow you can use: prelaunch page and email signup, why both.
  6. Friends and family: what they are good for (day one momentum) and what they are not.
  7. Reviewers and previewers as borrowed audiences: short, link to the outreach guide.
  8. When the first hundred is not enough: link to followers guide and ads guide.
  9. Where we come in.
- **Visual 1 (`steps`):** "The first 100 backers come in rings": people who played it, people in your communities, people who saw it shown, people reached through reviewers, people reached through ads. No numbers.
- **Visual 2 (`checklist`):** "What to have ready before you ask anyone to follow": groups for the game (one line pitch, three photos), the link (prelaunch page, signup form), the ask (follow, share, play). No numbers.
- **FAQ:** How do I get backers if I have no followers? How many backers can I expect from friends and family? Do people browse Kickstarter and find games without help? Is it worth going to a convention before I launch? Can I post my Kickstarter on Reddit and BoardGameGeek? How do I find my first 100 backers? Should I pay someone who promises backers?
- **Links out:** `kickstarter-followers-before-launch`, `kickstarter-prelaunch-email-list`, `kickstarter-prelaunch-page-guide`, `board-game-reviewer-outreach`, `how-to-market-a-kickstarter`, `kickstarter-advertising-budget-board-games`, `choose-board-game-kickstarter-marketing-agency` (scam red flags), cornerstone, hub `/kickstarter-prelaunch-marketing`.
- **Links in from:** cornerstone chapter 12, `how-to-market-a-kickstarter`, `kickstarter-followers-before-launch`, `kickstarter-prelaunch-email-list`, `why-kickstarter-campaigns-fail`.
- **servicePath:** `/kickstarter-prelaunch-marketing`
- **Sources to verify:** Kickstarter help on prelaunch followers and notifications; Kickstarter help or blog on how projects are discovered and "Projects We Love"; BoardGameGeek community rules on self promotion (read the current rule before describing it); the rules pages of r/boardgames and r/tabletopgamedesign on self promotion; official event pages for PAX Unplugged, UK Games Expo, Gen Con and SPIEL Essen dates.

### 4.3 `how-to-design-a-kickstarter-page`

- **Working title:** How to Design a Good Kickstarter Page for Your Board Game
- **seoTitle:** How to Design a Kickstarter Page for a Board Game (49 chars)
- **description:** How to design a good Kickstarter page for a board game. What goes first, what backers look for and how to make it look professional yourself. (142 chars)
- **Owns:** how do I design a good Kickstarter page; what makes a good Kickstarter page; what should a Kickstarter page include; how to make a Kickstarter page; how do I make my game look professional; can I design my Kickstarter page myself; what software for Kickstarter graphics; how long should a Kickstarter page be; how to write a Kickstarter title and subtitle.
- **Evidence:** the second question Umair quoted. "kickstarter page design" sits at position 54 with only the commercial hub to answer it. Three competitor guides with almost this exact title rank for the phrase. This is also the page closest to Guildframe's core paid service and the free mockup, so it is the strongest route from beginner question to enquiry.
- **Reader and stage:** has art and a rulebook, opens the Kickstarter editor and does not know what to put where. One to three months before launch.
- **Angle:** ten years of designing campaign pages reduced to the order a backer reads in. A good page answers four questions in sequence: what is this, how does it play, what do I get, can I trust you. Umair says what can be done well in free tools and where a designer changes the result.
- **H2 outline:**
  1. What a good Kickstarter page does: lets a stranger understand and trust the game in about a minute.
  2. The order backers read in: the four questions, mapped to page sections.
  3. The top of the page: project image, title, subtitle, opening banner, video. Why most decisions happen here.
  4. Showing how the game plays: one turn, not the rulebook. Link to the gameplay guide.
  5. Showing what backers get: component spread, reward comparison, add ons. Link to the reward graphics guide.
  6. Proof and trust: reviews, playtest quotes, who you are, an honest risks section.
  7. Making it look professional without a designer: consistent fonts and colours, real photos, text that reads on a phone. Tools in general terms.
  8. Common first timer mistakes: walls of text, tiny type in images, every stretch goal up front, no prices near the rewards.
  9. Check it before launch: link to the page checklist and image sizes guide.
  10. What we do on a page, and the free opening mockup.
- **Visual 1 (`steps`):** "A backer reads your page in this order": what is it, how it plays, what you get, why trust you, how to pledge, each with the section that answers it. No numbers.
- **Visual 2 (`compare`):** "Do it yourself or hire: what changes" with columns for doing it yourself, hiring page design only ($1,800), full campaign support ($5,900). Rows: who writes copy, who makes graphics, time needed from you. Prices from the brief only. A third option: a `checklist` titled "Twelve sections most board game pages need" grouped as top of page, the game, the offer, trust.
- **FAQ:** How do I design a Kickstarter page with no design experience? What should I put at the top of my Kickstarter page? How long should a Kickstarter page be? What program do people use to make Kickstarter graphics? Should the text be in images or typed into the page? How do I make a prototype look good on the page? How much does it cost to have someone design it?
- **Links out:** `board-game-kickstarter-page-checklist`, `board-game-kickstarter-gameplay-rulebook`, `kickstarter-reward-tier-graphics`, `kickstarter-image-sizes`, `kickstarter-campaign-graphics-mobile-readability`, `kickstarter-campaign-video-planning`, `kickstarter-prototype-risks-disclosure`, `when-to-hire-kickstarter-campaign-designer`, `board-game-kickstarter-campaign-design-cost`, `/work` case studies, cornerstone, hub `/campaign-design`.
- **Links in from:** cornerstone chapter 9, `/campaign-design`, `/board-game-kickstarter-campaign-design`, `board-game-kickstarter-page-checklist` (first section), `when-to-hire-kickstarter-campaign-designer`, `/resources/tabletop-campaign-page-study`, `kickstarter-for-beginners`.
- **servicePath:** `/campaign-design`
- **Sources to verify:** Kickstarter help on adding images and media to a project (already cited on site); Kickstarter creator handbook "telling your story" page; Kickstarter project image and video specifications (same source as `kickstarter-image-sizes`); Guildframe's own `/resources/tabletop-campaign-page-study` for observed page sections; Gamefound blog "First impression matters: how to make a great campaign draft" for the platform's view.

### 4.4 `is-my-game-ready-for-kickstarter`

- **Working title:** Is My Game Ready for Kickstarter? What You Need Before You Launch
- **seoTitle:** What You Need Before Launching a Kickstarter Board Game (55 chars)
- **description:** What you need before you launch a board game on Kickstarter: how finished the game should be, how much art, and whether a prototype is enough. (143 chars)
- **Owns:** what do I need before I launch a Kickstarter; is my game ready for Kickstarter; can I launch with a prototype; how finished does my game need to be; how much art do I need before Kickstarter; do I need a manufacturer quote first; how much playtesting is enough; is my idea good enough.
- **Evidence:** "how done is done?" is the one explicit question heading in the long standing Brandon the Game Dev crash course, and "how much art before Kickstarter" has had a dedicated article ranking since 2013. Search Console shows `kickstarter-prototype-risks-disclosure` getting impressions at position 23.6, which is searchers with the readiness question landing on a page about labelling. This page catches them properly.
- **Reader and stage:** earliest stage of all. Often has an idea and a hand made prototype and is asking whether to keep going.
- **Angle:** honest and kind. Umair tells creators when they are early, because a page cannot hide an unfinished game. Give a clear line between must have, should have and can wait.
- **H2 outline:**
  1. The short answer: a tested game, a prototype you can photograph, enough final art to show the look, and a real quote.
  2. The game itself: playtested with strangers, rules stable.
  3. How much art is enough: cover, a few finished components, a consistent style. The rest can be funded.
  4. Can you launch with a prototype: yes, with honest labels. Link to the prototype guide and Kickstarter's rules.
  5. Numbers you need first: manufacturer quote, shipping estimate, the least you need to raise. Link to funding goal and cost guides.
  6. People you need first: followers and an email list. Link to followers guide.
  7. Things that can wait: stretch goals, a store, a logo animation, a company in some countries (verify, or keep general).
  8. A readiness check you can do today.
  9. Not ready yet: what to do in the next three months, and when to talk to us.
- **Visual 1 (`checklist`):** "Ready means four things are true": groups for the game, the look, the numbers, the people, three or four ticks each. No numbers.
- **Visual 2 (`compare`):** "Must have, should have, can wait" in three columns. No numbers.
- **FAQ:** Can I launch a Kickstarter with only a prototype? How much of the art has to be finished? Do I need a manufacturer before I launch? Is my game idea good enough for Kickstarter? Do I need reviews before launching? How do I know my game is not ready yet? Can I launch now and finish the game with the money?
- **Links out:** `kickstarter-prototype-risks-disclosure`, `board-game-kickstarter-funding-goal`, `board-game-kickstarter-cost`, `kickstarter-followers-before-launch`, `board-game-reviewer-outreach`, `board-game-kickstarter-gameplay-rulebook`, `what-to-send-kickstarter-campaign-designer`, `when-to-launch-a-kickstarter`, cornerstone, hub `/kickstarter-launch-services`.
- **Links in from:** cornerstone chapters 1 and 20, `kickstarter-prototype-risks-disclosure`, `what-to-send-kickstarter-campaign-designer`, `when-to-hire-kickstarter-campaign-designer`, `/resources/tabletop-campaign-launch-worksheet`, `kickstarter-for-beginners`.
- **servicePath:** `/kickstarter-launch-services`
- **Sources to verify:** Kickstarter rules page (prototype and rendering rules by category, already cited on `kickstarter-prototype-risks-disclosure`); Kickstarter policy on AI generated content disclosure, if the AI art question is kept; Kickstarter creator eligibility requirements; Stonemaier Games Kickstarter Lessons index for the playtesting standard (attribute as opinion); Kickstarter "How To Market a Tabletop Game in 7 Steps" steps 1 and 2 on prototype and playtesting.

### 4.5 `board-game-kickstarter-cost`

- **Working title:** How Much Does It Cost to Launch a Board Game on Kickstarter?
- **seoTitle:** Board Game Kickstarter Cost: What You Pay Before Launch (55 chars)
- **description:** How much it costs to launch a board game on Kickstarter, line by line. What you pay before launch, what comes out of the funding and where to save. (148 chars)
- **Owns:** how much does it cost to launch a board game on Kickstarter; how much money do I need to start a Kickstarter; can I launch a Kickstarter with no money; Kickstarter costs; what does it cost to run a Kickstarter; will I make a profit on Kickstarter.
- **Evidence:** "kickstarter pricing" (66 impressions) and "kickstarter costs" both show in Search Console at positions past 50 with no total cost page to rank. The site has four narrow cost pages (fees, agency, design, website) and nothing that adds them up. LaunchBoom ranks a page on exactly this question. This is a question people ask an AI assistant in full sentence form, so a clear line by line answer is likely to be quoted.
- **Reader and stage:** deciding whether they can afford to try. Often has a figure in mind that covers only printing.
- **Angle:** Umair's honest view that there are two budgets: money you spend before anyone pledges, and money that comes out of the funding. No invented averages. Use a worked example that is labelled as an example, plus the few sourced figures.
- **H2 outline:**
  1. The short answer: two budgets, and why the first one surprises people.
  2. What you pay before launch: art, prototypes, reviewer copies, page and video, prelaunch marketing.
  3. What comes out of the funding: manufacturing, freight, fulfillment, fees, tax, contingency.
  4. Platform and payment fees: one verified line, link to `kickstarter-fees`.
  5. Marketing and ads: what a small test looks like, link to the ad budget guide.
  6. Help: what a designer or studio costs, using Guildframe's own prices and public competitor pricing from the brief.
  7. Launching on a small budget: what to do yourself, what not to cut.
  8. Will you make a profit: what a first campaign is realistically for.
  9. Build your own budget, and where we fit.
- **Visual 1 (`split`):** "Example: a $30,000 campaign leaves less than you think". Same data and same caveat as the cornerstone budget visual. Fees 8 to 10 percent and contingency 20 to 30 percent are sourced (Kickstarter, Jun 2026); other shares are illustrative and need Umair's sign off, or drop the percentages.
- **Visual 2 (`compare`):** "Two budgets: before launch and after funding" with the cost lines under each. A possible `bars` alternative: "Published prices for launch help" using only Guildframe $1,800 and $5,900 and BoostYourCampaign $3,499 to $6,997 (verify on their 2026 pricing page today).
- **FAQ:** How much money do I need to launch a board game on Kickstarter? Can I start a Kickstarter with no money? What costs do first time creators forget? How much of the funding do I actually keep? Is it cheaper to do everything myself? Do I pay Kickstarter if I don't reach my goal? How much should I keep back for things going wrong?
- **Links out:** `kickstarter-fees`, `kickstarter-agency-cost`, `board-game-kickstarter-campaign-design-cost`, `kickstarter-advertising-budget-board-games`, `board-game-kickstarter-funding-goal`, `board-game-kickstarter-reward-pricing`, `kickstarter-shipping-delivery-page`, `board-game-tariffs-shipping-us`, cornerstone, hub `/kickstarter-launch-services`.
- **Links in from:** cornerstone chapter 5, `kickstarter-fees`, `kickstarter-agency-cost`, `board-game-kickstarter-campaign-design-cost`, `board-game-kickstarter-funding-goal`, `/kickstarter-launch-services`, `how-much-does-a-board-game-website-cost`.
- **servicePath:** `/kickstarter-launch-services`
- **Sources to verify:** Kickstarter fees help article (same URL as `kickstarter-fees`); Kickstarter "Why Kickstarter Campaigns Fail After Funding" (fees range, contingency); Kickstarter "How To Market a Tabletop Game in 7 Steps" (ad cost per backer); boostyourcampaign.com 2026 pricing page; Guildframe `/campaign-design` and `/kickstarter-launch-services` for its own prices.

### 4.6 `when-to-launch-a-kickstarter`

- **Working title:** When Should You Launch Your Kickstarter, and How Long Does It Take to Prepare?
- **seoTitle:** When to Launch a Kickstarter: Prep Time and Best Dates (54 chars)
- **description:** How long it takes to prepare a board game Kickstarter and how to pick a launch date. Readiness signs, best days and dates to avoid. (131 chars)
- **Owns:** how long does it take to prepare a Kickstarter; when should I launch my Kickstarter; best day to launch a Kickstarter; best month to launch a board game Kickstarter; how long should my campaign run; how do I know I'm ready to launch; should I launch before or after a convention.
- **Evidence:** two of the example questions in the task (prep time, when to launch) with no owner. `kickstarter-review-launch-timeline` gets "how long does kickstarter take to approve" at position 9.7, which shows timing queries reach the site, but that page covers only the final days. Kickstarter published a full timeline post in Sep 2026, so there is a fresh primary source to cite and improve on for tabletop.
- **Reader and stage:** has picked a date for emotional reasons (a birthday, a convention, impatience) and wants to know if it is realistic.
- **Angle:** the date follows readiness, and Umair has seen more campaigns hurt by launching early than by waiting a month. Give a way to decide, then the practical calendar points.
- **H2 outline:**
  1. The short answer: most first games need several months of preparation, and you launch when three signals are true.
  2. How long each piece takes: page, video, reviewer previews, audience. Ranges labelled as Guildframe's planning example, with Kickstarter's own 50 day runway for comparison.
  3. The three readiness signals: followers and list against your goal, a page strangers understand, numbers that work.
  4. Best day and time: what Kickstarter suggests and how much it really matters.
  5. Months and dates to think about: holidays, big conventions, large campaigns in your niche. Event dates from BRIEF.md after checking.
  6. How long the campaign should run: short answer, link to the review and launch guide.
  7. Working back from a date: a simple backward plan.
  8. When to delay, and how to tell followers.
  9. Planning the date with us.
- **Visual 1 (`timeline`):** "Working back from launch day" with six to eight events from audience building to pressing launch. Sourced points: review up to three business days, campaign 1 to 60 days, Kickstarter's 50 day example. Other ranges labelled as example. Must differ from the cornerstone timeline by stopping at launch day and showing more detail in the last eight weeks.
- **Visual 2 (`checklist`):** "Three signals that say launch" grouped as audience, page, numbers. Third option (`timeline`): 2026 and 2027 tabletop event dates from the brief.
- **FAQ:** How long does it take to prepare a Kickstarter for a board game? What is the best day of the week to launch? What is the best month to launch a board game Kickstarter? Should I launch before or after a convention? How long should my campaign last? Is it bad to push my launch date back? How do I know I'm ready to launch?
- **Links out:** `kickstarter-review-launch-timeline`, `kickstarter-followers-before-launch`, `board-game-kickstarter-marketing-plan`, `board-game-kickstarter-launch-day-checklist`, `is-my-game-ready-for-kickstarter`, `board-game-reviewer-outreach`, cornerstone, hub `/kickstarter-launch-services`.
- **Links in from:** cornerstone chapter 14, `kickstarter-review-launch-timeline`, `board-game-kickstarter-launch-day-checklist`, `board-game-kickstarter-marketing-plan`, `kickstarter-followers-before-launch`, `/kickstarter-launch-services`.
- **servicePath:** `/kickstarter-launch-services`
- **Sources to verify:** Kickstarter "From Concept to Fulfillment" (Sep 2026); Kickstarter help on review time and on campaign duration (already cited on site); Kickstarter creator handbook or help on choosing a launch day and time; official event sites for PAX Unplugged, Zinetopia, UK Games Expo, Gen Con and SPIEL Essen; Meeple Mountain 30% rule (rule of thumb, dated 2020).

### 4.7 `why-kickstarter-campaigns-fail`

- **Working title:** What Makes a Kickstarter Fail, and How to Avoid It
- **seoTitle:** Why Kickstarter Campaigns Fail and How to Avoid It (48 chars)
- **description:** Why board game Kickstarters fail and how to avoid it. The common reasons first time creators miss their goal, and what to do if a campaign is slow. (148 chars)
- **Owns:** what makes a Kickstarter fail; why do Kickstarters fail; why did my Kickstarter fail; Kickstarter mistakes first time creators make; should I cancel my Kickstarter; can I relaunch a failed Kickstarter; Kickstarter risks for creators; is Kickstarter risky.
- **Evidence:** fear of failing is the emotion behind every other question on this list. "kickstarter risks" shows at position 26.2 with no page built for it. The brief's own research list includes "day 2 go or cancel" and "relaunch after failure" as unanswered creator questions. Kickstarter published on failure in Jun 2026 and Hero Time and Stonemaier both rank, so demand is proven. It also sets up the service honestly: most causes are fixed before launch.
- **Reader and stage:** two kinds. Before launch and frightened, or mid campaign and behind.
- **Angle:** calm and specific. Start with the reassuring fact (80% of tabletop projects on Kickstarter funded in 2024) and its caveat, then say that in Umair's experience failures are nearly always visible before launch. No scare tactics, no blaming creators.
- **H2 outline:**
  1. The short answer: most tabletop projects fund, and the ones that do not usually launched without an audience, with an unclear page or with a goal the numbers did not support.
  2. Nobody was waiting on day one: the audience problem.
  3. The page did not explain the game: the clarity problem.
  4. The price or goal was off: the numbers problem.
  5. The game did not look ready: the trust problem.
  6. Launching too early: the timing problem.
  7. Your campaign is live and slow: what to check in the first 48 hours, and how to decide between pushing on and cancelling.
  8. Relaunching: what to change, what Kickstarter allows (verify), how to bring followers back.
  9. Failing after funding: late delivery and running out of money, short, link out.
  10. A check before launch, and how we help.
- **Visual 1 (`stats`):** "Most tabletop Kickstarters fund": 6,646 launched, 5,314 funded, 80%, with the caveat in the caption. Source: Kickstarter via the site's benchmark page.
- **Visual 2 (`compare`):** "Five reasons, each with a fix you make before launch": reason, the sign you can see early, the fix, the guide. No numbers. Optional `steps`: "Slow start: decide in this order".
- **FAQ:** What is the most common reason a board game Kickstarter fails? What percentage of board game Kickstarters fail? Should I cancel my Kickstarter if it starts slowly? Can I relaunch after a failed Kickstarter? Do I owe anything if my Kickstarter fails? Does a failed campaign hurt my next one? What happens if I fund but cannot deliver?
- **Links out:** `kickstarter-followers-before-launch`, `how-to-get-kickstarter-backers`, `how-to-design-a-kickstarter-page`, `board-game-kickstarter-funding-goal`, `board-game-kickstarter-reward-pricing`, `is-my-game-ready-for-kickstarter`, `when-to-launch-a-kickstarter`, `kickstarter-live-campaign-updates`, `what-happens-after-kickstarter-is-funded`, `/resources/kickstarter-tabletop-games-benchmark`, cornerstone, hub `/kickstarter-launch-services`.
- **Links in from:** cornerstone chapter 17, `/resources/kickstarter-tabletop-games-benchmark`, `board-game-kickstarter-funding-goal`, `kickstarter-live-campaign-updates`, `kickstarter-followers-before-launch`, `/kickstarter-campaign-management`.
- **servicePath:** `/kickstarter-launch-services`
- **Sources to verify:** Kickstarter 2024 tabletop figures (benchmark page source); Kickstarter "Why Kickstarter Campaigns Fail After Funding" (Jun 2026); Stonemaier Games original post listing reasons campaigns fail (find the 2021 original, do not cite through Hero Time); Kickstarter help on cancelling a project and on relaunching; Kickstarter help on what happens when a project does not reach its goal. Leave out the "under 20% of goal" claim unless a primary source is found.

### 4.8 `kickstarter-for-beginners`

- **Working title:** Kickstarter for Beginners: Questions First Time Tabletop Creators Ask
- **seoTitle:** Kickstarter for Beginners: First Time Creator Questions (55 chars)
- **description:** Kickstarter for beginners: plain answers to the questions first time tabletop creators ask about how it works, money, rules and where to start. (144 chars)
- **Owns:** Kickstarter for beginners; how does Kickstarter work for creators; what happens if I don't reach my goal; is Kickstarter free; who can launch a Kickstarter; do I need an LLC for Kickstarter; when do I get my Kickstarter money; do I pay tax on Kickstarter; can I run a Kickstarter alone; is Kickstarter worth it for board games; publisher or self publish.
- **Evidence:** none of these mechanics questions has a home on the site, and they are the questions people put to AI assistants word for word. A question bank with short quotable answers is the format most likely to be cited. Bing already reports 348 AI citations for the site, mostly on Shopify topics, so the crawlers are reading it; this gives them launch topics to quote.
- **Reader and stage:** has backed games, has never created a project. Earliest stage, widest net.
- **Angle:** Umair answering the inbox. 20 to 25 questions in five groups, each answered in 2 to 4 sentences, each ending with one link to the page that goes deeper. This is the one page allowed to be a question list, but the brief's rules still apply: every group opens with a framing sentence and closes with a takeaway.
- **H2 outline (question groups):**
  1. How Kickstarter works: all or nothing, deadline, what a pledge is, what a backer expects.
  2. Who can launch and what you need: eligibility by country, identity and bank checks, company or not, age. All from Kickstarter's current help pages.
  3. Money: is it free, fees in one line, when funds arrive, tax in general terms with a pointer to an accountant.
  4. Before you launch: prototype, prelaunch page, audience, how long, how much.
  5. During and after: what you do each day, what happens when it ends, what you owe backers.
  6. Is it right for you: self publish or pitch a publisher, Kickstarter or Gamefound, alone or with help.
  7. Where to go next: route to the cornerstone and the service hub.
- **Visual 1 (`steps`):** "How a Kickstarter works in six steps": build the page, Kickstarter reviews it, you launch, backers pledge until the deadline, funds are collected if the goal is met, you make and deliver. Sourced timings only (review up to three business days; verify payout timing on Kickstarter help).
- **Visual 2 (`compare`):** "Funded or not funded: what happens to the money" in two columns. Or `stats` with the 2024 tabletop figures if not already used twice elsewhere.
- **FAQ (the schema FAQ takes the seven most asked from the bank):** How does Kickstarter work for a board game? What happens if my Kickstarter doesn't reach its goal? Is it free to start a Kickstarter? Can I launch a Kickstarter from outside the United States? Do I need a company to run a Kickstarter? When do I get the money? Is Kickstarter worth it for a first board game?
- **Links out:** cornerstone (prominent, twice), `kickstarter-fees`, `kickstarter-vs-gamefound`, `what-happens-after-kickstarter-is-funded`, `is-my-game-ready-for-kickstarter`, `board-game-kickstarter-cost`, `how-to-market-a-kickstarter`, `how-to-design-a-kickstarter-page`, `why-kickstarter-campaigns-fail`, `choose-board-game-kickstarter-marketing-agency`, hub `/kickstarter-launch-services`.
- **Links in from:** cornerstone chapter 2, `/guides` index, `/about`, `/kickstarter-launch-services`, `kickstarter-fees`, `kickstarter-vs-gamefound`.
- **servicePath:** `/kickstarter-launch-services`
- **Sources to verify:** Kickstarter help "Who can use Kickstarter" and creator eligibility by country; Kickstarter help on all or nothing funding; Kickstarter fees page; Kickstarter help on when creators receive funds and on dropped pledges; Kickstarter help on taxes (general statement only); Kickstarter release notes for 2026 features worth one line each (pledging with only an email, editing backer orders).

## 5. FAQ and section additions for existing and in progress pages

27 additions across 20 pages. Existing FAQ questions were checked so none of these repeats one. Answers must match visible text, so each FAQ needs a matching sentence in a section.

| # | Page | Type | Question in creator wording | Answer direction (one line) |
| --- | --- | --- | --- | --- |
| 1 | `board-game-kickstarter-marketing-plan` | Section intro link | New to Kickstarter marketing? | One added sentence sending complete beginners to `how-to-market-a-kickstarter`. The plan page keeps its title, scope and target phrases. |
| 2 | `board-game-kickstarter-marketing-plan` | FAQ | What if I only have a month before launch? | Say what a short runway can and cannot do, and that moving the date is usually cheaper than a weak launch. |
| 3 | `kickstarter-prelaunch-email-list` | FAQ | How do I build an email list from nothing? | Start with playtesters and one signup page, add a reason to join, link to `how-to-get-kickstarter-backers`. |
| 4 | `kickstarter-prelaunch-email-list` | FAQ | What email tool should I use for my Kickstarter list? | Any mainstream tool that lets you export the list; name none as best; you own the list. |
| 5 | `kickstarter-advertising-budget-board-games` | FAQ | Are Facebook ads worth it for a board game Kickstarter? | Worth testing once the page converts; quote Kickstarter's $15 to $50 per backer range and what that means for a low priced game. |
| 6 | `kickstarter-advertising-budget-board-games` | FAQ | Can I run a Kickstarter without ads? | Yes for small goals with a real community; say the ceiling honestly. |
| 7 | `kickstarter-campaign-video-planning` | FAQ | Can I film my Kickstarter video on my phone? | Yes with good light, clear sound and a tripod; what matters is showing the game in the first seconds. |
| 8 | `kickstarter-campaign-video-planning` | FAQ | What should I say in my Kickstarter video? | What the game is, who it is for, one turn, what you need funding for. |
| 9 | `board-game-kickstarter-reward-pricing` | FAQ | How many reward tiers should a first Kickstarter have? | Few, each with a clear reason to exist; a base game and a deluxe is enough for most first games. |
| 10 | `board-game-kickstarter-reward-pricing` | FAQ | Should I offer early bird rewards? | Explain the trade (day one urgency against later backers feeling penalised) and let the creator choose. |
| 11 | `board-game-kickstarter-funding-goal` | FAQ | What is a realistic funding goal for a first board game? | No universal figure; it comes from the smallest print run quote plus shipping, fees and buffer. Link to `board-game-kickstarter-cost`. |
| 12 | `board-game-reviewer-outreach` | FAQ | Do I need reviews before I launch my Kickstarter? | Not required, but an outside voice is the cheapest trust a new creator can add. |
| 13 | `board-game-reviewer-outreach` | FAQ | Do I have to pay for board game previews? | Many previewers charge; say what a fair arrangement discloses. Verify disclosure rules before stating them. |
| 14 | `kickstarter-stretch-goals-planning` | FAQ | Do I need stretch goals on my first Kickstarter? | No; a complete base game matters more, and each stretch goal adds cost and delivery risk. |
| 15 | `board-game-kickstarter-gameplay-rulebook` | FAQ | Does my rulebook have to be finished before I launch? | Rules should be final in substance; layout can be a labelled draft. |
| 16 | `kickstarter-prototype-risks-disclosure` | Opening link | Can I launch with a prototype at all? | One sentence and a link to `is-my-game-ready-for-kickstarter` for the readiness question. |
| 17 | `kickstarter-prelaunch-page-vs-landing-page` | FAQ | Do I need a website before my Kickstarter? | A single signup page is enough; a full site can wait until after the campaign. |
| 18 | `kickstarter-review-launch-timeline` | Opening link | How long does the whole preparation take? | One added sentence pointing to `when-to-launch-a-kickstarter`. Nothing on this page is removed or narrowed. |
| 19 | `board-game-kickstarter-launch-day-checklist` | Opening link and FAQ | Is there a checklist for the whole launch, not just the day? | Point to the cornerstone. This page gets the "game launch checklist" impressions, so the link matters. |
| 20 | `kickstarter-live-campaign-updates` | FAQ | My campaign has gone quiet in the middle. Is that normal? | Yes, most pledges arrive at the start and the end; say what to do in the quiet weeks. Link to `why-kickstarter-campaigns-fail`. |
| 21 | `kickstarter-shipping-delivery-page` | FAQ | Who pays for shipping on a Kickstarter, me or the backer? | The backer usually pays a shipping charge you set; you carry the difference if you guess low. |
| 22 | `choose-board-game-kickstarter-marketing-agency` | FAQ | How do I spot a Kickstarter marketing scam? | Unsolicited messages after you launch, guaranteed backers, payment up front with no named past work. |
| 23 | `when-to-hire-kickstarter-campaign-designer` | FAQ | Can I design the page myself first and get help later? | Yes; link to `how-to-design-a-kickstarter-page` and say when a designer is worth it. |
| 24 | `selling-miniatures-internationally-vat-ioss` | FAQ | Do I have to charge VAT on my Kickstarter? | General statement tied to the page's sources and Kickstarter's Apr 2026 VAT change; not tax advice. |
| 25 | `kickstarter-fees` (in progress) | FAQ | Do I pay Kickstarter anything if I don't reach my goal? | No fee if the project does not fund; verify on Kickstarter's fees page. Link to `board-game-kickstarter-cost` for the full budget. |
| 26 | `kickstarter-vs-gamefound` (in progress) | FAQ | Which is easier for a complete beginner? | Plain comparison of setup effort and built in audience for a first project; link to `kickstarter-for-beginners`. |
| 27 | `kickstarter-followers-before-launch` (in progress) | FAQ | I have almost no followers. Where do I get the first ones? | Two sentences, then link to `how-to-get-kickstarter-backers`. |

Count by page: `board-game-kickstarter-marketing-plan` 2, `kickstarter-prelaunch-email-list` 2, `kickstarter-advertising-budget-board-games` 2, `kickstarter-campaign-video-planning` 2, `board-game-kickstarter-reward-pricing` 2, `board-game-reviewer-outreach` 2, and one each on `board-game-kickstarter-funding-goal`, `kickstarter-stretch-goals-planning`, `board-game-kickstarter-gameplay-rulebook`, `kickstarter-prototype-risks-disclosure`, `kickstarter-prelaunch-page-vs-landing-page`, `kickstarter-review-launch-timeline`, `board-game-kickstarter-launch-day-checklist`, `kickstarter-live-campaign-updates`, `kickstarter-shipping-delivery-page`, `choose-board-game-kickstarter-marketing-agency`, `when-to-hire-kickstarter-campaign-designer`, `selling-miniatures-internationally-vat-ioss`, `kickstarter-fees`, `kickstarter-vs-gamefound`, `kickstarter-followers-before-launch`.

One hub addition outside the count: `/campaign-creative` could answer "Do I need 3D renders of my game?" in its FAQ (question 63). The hubs belong to other agents, so this is a suggestion for the lead.

## 6. Reader journey

1. A first timer searches a plain question and lands on one of the eight beginner pages, or on the cornerstone.
2. Every beginner page answers in two sentences, teaches the basics, and links up to the cornerstone in its first section ("the whole process is in our A to Z guide").
3. The cornerstone gives the map and sends them down to the deep guide for whatever worries them most.
4. Deep guides and beginner pages end on the shared article CTA to the right hub. The page design guide and the cornerstone also name the free opening mockup, which is the lowest risk first step for a nervous creator.
5. Hubs link back to the cornerstone once for visitors who arrived too early to buy.

## 7. Gaps noted, not briefed

- Manufacturing has no deep page ("how much does it cost to manufacture a board game", "how do I find a manufacturer"). It lives as a cornerstone chapter for now. Guildframe does not manufacture, so a deep page would need careful sourcing and may not suit the offer.
- "Should I pitch a publisher or self publish" is answered in two sentences on the beginners page. It could be a page later if Search Console shows demand.
- "Can I use AI art on Kickstarter" needs Kickstarter's current policy read first hand before any page states it.

## 8. Notes for the lead

- New slugs proposed (9): `how-to-launch-a-board-game-on-kickstarter` (custom page under `app/guides/`), `how-to-market-a-kickstarter`, `how-to-get-kickstarter-backers`, `how-to-design-a-kickstarter-page`, `is-my-game-ready-for-kickstarter`, `board-game-kickstarter-cost`, `when-to-launch-a-kickstarter`, `why-kickstarter-campaigns-fail`, `kickstarter-for-beginners`.
- Pillars: cornerstone sits above all five and links to each hub. MARKET and BACKERS belong to Prelaunch. DESIGN belongs to Campaign page. READY, COST, WHEN, FAIL and BASICS belong to Planning and costs.
- Registration the lead owns: sitemap, content dates, `/guides` index (pin the cornerstone as "Start here" and consider a "New to Kickstarter" group for the eight), `llms.txt`, intent map lines taken from section 2, and test entries.
- Writing order suggestion: the eight beginner pages first, the cornerstone last, because its chapters link to all of them and to the ten slugs still being written.
- Umair needs to confirm two things before the visuals are drawn: the "months before launch" ranges on the master timeline, and whether he wants example percentages on the budget split.
- seoTitle and description lengths were checked by script: every seoTitle is under 60 characters and every description is between 90 and 160.

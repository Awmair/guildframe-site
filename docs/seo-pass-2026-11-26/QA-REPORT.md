# QA report: guides pass, 26 Nov 2026

Reviewer worktree: `/home/claude/wt2/qa` (branch `np-qa`). Nothing here is live. Every guide was checked in its final rendered form (after revision layers and the visual layer), not from raw source.

## What was checked

**Mechanical, all 69 rendered guides** (script over the `launchGuides` dump, plus `scripts/validate.mts`):
- seoTitle under 60 characters, description 90 to 160 after HTML encoding, answer is two sentences, 3 to 5 relatedSlugs that exist, section `source` indexes in range, internal links resolve.
- Paragraphs over 3 sentences or about 70 words, visible hyphenated compounds, em and en dashes, hype words, "your game" in the 18 general guides, Fiverr, the removed launch kit.
- Visual counts per guide (flow, tips, total), takeaways present, takeaways that echo the heading, thin visuals, duplicate section ids.
- All 80 flow diagrams read one by one for yes/no logic (Yes continues, No exits).

**Guildframe facts, all guides:** every mention of $1,800, $5,900, 252 reviews at 5.0, ten years, more than $5M, Secubix (90 backers, €32,218), Bacàn (222, €20,410), A World Without Men (25, $5,149), Cryptic Explorers (961, $55,686). All match the brief, and every result is framed as the client's. No invented client results, no Fiverr.

**External facts checked on the primary source today:**

| Fact | Source read | Result |
| --- | --- | --- |
| Kickstarter 5% fee, US processing 3% + $0.20, under $10 is 5% + $0.05 | kickstarter.com/help/fees | Correct in every guide |
| Indiegogo flat 5% + 3% + $0.20/€0.20, Flexible Funding gone, InDemand now Late Pledge, upgrade Oct 16 2025 | help.indiegogo.com article 645 (updated Oct 13 2026) | Correct |
| Gamefound acquired Indiegogo July 22 2025 | Indiegogo support article | Correct. Press release is dated July 24, which is what the older guides cite as "announced" |
| Payout: 14 calendar days, then 3 to 14 business days; 28 day check point | Kickstarter help, receiving funds | Correct |
| First time creators get the prelaunch page only after approval | Kickstarter help, prelaunch page | Correct in most guides, wrong order in three timelines (fixed) |
| Hardware rules: working prototype, no photorealistic renderings, production plan | Kickstarter help, hardware and product design rules | Correct |
| US de minimis: suspended since Aug 29 2025 (EO 14324), indefinite rule, $2,500 postal informal entry, Pay.gov, ends by law July 1 2027 | Federal Register 2026-12669 | Correct, and consistent with the board game tariffs guide |
| Category success rates 2009 to 2020 (all 15) | ICPSR / NADAC | All 15 match |
| Tabletop 2024: $220M, 6,646 launched, 5,314 funded, 80%; Games $270M; video games $26M, 441 | Kickstarter, Feb 5 2025 | Match |
| 35,512 projects, $706M, 23M backers, Theatre up 61% | Kickstarter Creative Download | Match |
| Publishing over $45M in 2025, comics record over $4.6M, Open Calls close to 80%, Design and Technology record year | Kickstarter 2025 year in review | Match |
| Piper and Paws and Leaves relaunch figures | Two Kickstarter blog case studies | Match |

Arithmetic rechecked by hand: the $10,000 Indiegogo example ($9,180), the three example budgets and their fees, the version two tier fees, the $79 worked example (all three columns, the $25 stress case, the split), the fee share bars, the funding bracket shares and the "ninth of the average" claim. All correct.

**Consistency across guides** (grep and compare): fees, micropledge rate, payout timing, campaign length (1 to 60 days, 30 or fewer recommended), review time (up to 3 business days, plus 3 per round), Pledge Over Time threshold, late pledge pricing, de minimis dates, Gamefound acquisition date in `app/`. Consistent after the fixes below.

## Fixes made

| File | Fix |
| --- | --- |
| `app/guides-new/how-to-launch-a-book-on-kickstarter.ts` | Timeline had the prelaunch page live 8 weeks out but review at 2 weeks out, which is impossible on a first project. Review moved to 10 weeks out, paragraph and takeaway now say approval opens the prelaunch page. |
| `app/guides-new/creative-project-kickstarter-guide.ts` | Same ordering error. Review moved ahead of the prelaunch page (8 weeks, then 6), paragraph and takeaway corrected. |
| `app/guides-new/watch-fashion-accessories-kickstarter-guide.ts` | Same ordering error. Review moved to 10 weeks out, one sentence added on first projects. |
| `app/guides-new/tech-gadget-kickstarter-launch-guide.ts` | Five places gave an invented "$200,000" ceiling for Guildframe. Changed to the brief's wording: a $500,000 launch with a big media budget. |
| `app/guides-new/how-to-launch-a-product-on-kickstarter.ts` | Shipping flow node had Yes as the exit and No as "Continue". Question inverted so Yes continues. |
| `app/guides-new/how-to-launch-a-product-on-kickstarter.ts` | Added a link to `/guides/product-kickstarter-page` in the page section (the two guides did not link each other). |
| `app/guides-new/kickstarter-reward-pricing-physical-products.ts` | Shipping flow: one node inverted, two "No: Continue" exits given real wording. |
| `app/guides-new/kickstarter-vs-indiegogo.ts` | FAQ now gives both dates (acquired July 22, announced July 24) so it no longer reads as a clash with the Gamefound guides. PR Newswire release added to `sources`. |
| `app/guides-new/how-to-launch-a-kickstarter-campaign.ts` | Shipping paragraph was four sentences. Joined to three. |
| `app/guides-new/kickstarter-shipping-physical-products.ts` | Cannibalisation fix: links to `/guides/kickstarter-shipping-delivery-page` (takeaway and relatedSlugs). Custom page slug moved from relatedSlugs, where it is skipped, to a body link. |
| `app/guides-new/kickstarter-campaign-timeline.ts` | Same relatedSlugs fix (now `kickstarter-followers-before-launch`), with a body link to the after funding page. |
| `app/guides-new/crowdfunding-glossary.ts` | Same relatedSlugs fix (now `kickstarter-vs-indiegogo`). The body link already existed. |
| `app/guides-new/kickstarter-campaign-cost.ts` | Added a link to `/guides/kickstarter-funding-goal` in the goal section. |
| `app/guide-layers/kickstarter-review-launch-timeline.ts` | Tip said "four to six weeks" while the same page's FAQ says "at least 2 weeks". Tip now gives both: four to six weeks for a first project, never less than 2. |

After the fixes: `validate.mts` reports only the 11 known table cell and FAQ link items, and the three relatedSlugs warnings left are all on `board-game-pledge-manager-checklist` (shared file).

## Cannibalisation

No two guides share a primary query. Closest pairs, all acceptable:

| Pair | Why it is fine | Action |
| --- | --- | --- |
| `kickstarter-shipping-physical-products` and `kickstarter-shipping-delivery-page` | First is logistics (fulfillment, customs, VAT). Second is how to word the page section. Both lead with "Kickstarter shipping". | Cross link added one way. Suggest the lead adds the return link from the delivery page layer. |
| `kickstarter-campaign-timeline`, `when-to-launch-a-kickstarter`, `kickstarter-review-launch-timeline` | Week by week plan, picking a date, approval time. | New guide links both. Suggest return links. |
| `relaunch-failed-kickstarter` and `why-kickstarter-campaigns-fail` | After failure versus before launch. | New guide links the old. Suggest a return link from its `relaunch` section. |
| `kickstarter-reward-pricing-physical-products` and `board-game-kickstarter-reward-pricing` | Split by niche, titles say so. | None. |
| `kickstarter-campaign-cost`, `board-game-kickstarter-cost`, `kickstarter-agency-cost`, `kickstarter-fees` | Whole budget, tabletop budget, agency prices, platform fees. | None. |
| `kickstarter-prototype-rules` and `kickstarter-prototype-risks-disclosure` | Requirements versus the risks section. | None. |
| `how-to-launch-a-kickstarter-campaign` and `kickstarter-for-beginners` | "How to launch" A to Z versus a tabletop question list. | None. |

## Not fixed, and why

1. **`kickstarter-for-beginners` and `how-to-market-a-kickstarter`** say the prelaunch page opens 6 to 12 weeks out and review goes in "at least two weeks" before launch. Technically true, but a first time creator can read it as the wrong order. Existing guides, outside this pass's edit scope. Suggest one clause: "on a first project, submit before you want the prelaunch page".
2. **Paragraphs over three sentences** remain in `kickstarter-campaign-brief` (5), `product-kickstarter-page` (2) and `kickstarter-funding-goal` (2). They live in `launch-guides-general.ts`, a shared file, and have no layer.
3. **`board-game-pledge-manager-checklist`** lists three custom pages in relatedSlugs, so its related list renders short. Shared file.
4. **`kickstarter-campaign-cost` answer**: the first sentence is 49 words. It is two sentences as required and reads clearly, so left as written.
5. **Statista figures** (41.98% success rate, 651,000 projects, the funding brackets): Statista is paywalled, so the exact values were not read today. Kickstarter's own March 2025 post gives "more than 654,000" campaigns and "more than $8.5 billion", which fits. Bracket counts sum to the stated 272,564.
6. **Indiegogo Express Crowdfunding and payout terms**: the two Indiegogo pages read today do not cover Express. The guide cites its own Express article, which was not rechecked.
7. **Not built**: no npm network, so no `next build` and no test run. Every edited file was reloaded through `launch-guides.ts` with tsx and the full audit rerun.

## Verdict per guide

| Guide | Verdict |
| --- | --- |
| how-to-launch-a-kickstarter-campaign | Ship (one paragraph tightened) |
| how-to-launch-a-product-on-kickstarter | Ship after fix (flow node, done) |
| tech-gadget-kickstarter-launch-guide | Ship after fix ($500K wording, done) |
| how-to-launch-a-book-on-kickstarter | Ship after fix (review order, done) |
| watch-fashion-accessories-kickstarter-guide | Ship after fix (review order, done) |
| creative-project-kickstarter-guide | Ship after fix (review order, done) |
| kickstarter-vs-indiegogo | Ship (date note added) |
| kickstarter-campaign-cost | Ship |
| kickstarter-for-existing-products | Ship |
| relaunch-failed-kickstarter | Ship |
| kickstarter-campaign-timeline | Ship |
| kickstarter-prototype-rules | Ship |
| kickstarter-product-photography | Ship |
| manufacturing-quotes-before-kickstarter | Ship |
| kickstarter-shipping-physical-products | Ship |
| kickstarter-reward-pricing-physical-products | Ship after fix (flow nodes, done) |
| kickstarter-statistics-by-category | Ship (see Statista note) |
| crowdfunding-glossary | Ship (72 terms counted) |
| 48 visual layers | Ship. Each has at least one flow and one tips block, 4 to 9 visuals, a takeaway on every section, no walls, no dashes. |
| kickstarter-review-launch-timeline (folded approval sections) | Ship (one tip reconciled) |

All fixes listed as "done" are committed in this worktree. Nothing is pushed.

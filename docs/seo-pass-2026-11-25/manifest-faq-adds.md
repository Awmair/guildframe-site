# Manifest: faq-adds (beginner plan section 5)

Branch `wt-faq-adds`. 27 planned additions across 21 pages: 22 done, 1 partly done, 4 skipped because the page already answers them. Each FAQ has a matching sentence in a section, and section links point to existing routes. The one exception is the cornerstone link (see the lead notes). No FAQ answer has link markup. No page has more than 8 FAQs (the most is reward pricing, now at 8). No titles, seoTitles, slugs or existing facts were changed.

## Files changed

- `app/launch-marketing-guides.ts` (marketing plan, prelaunch email list, advertising budget, live campaign updates)
- `app/launch-growth-guides.ts` (funding goal, reward pricing, reviewer outreach, launch checklist)
- `app/launch-guides-new.ts` (gameplay rulebook, campaign video, stretch goals, prototype risks, review timeline, shipping page)
- `app/launch-decision-guides.ts` (prelaunch page vs landing page)
- `app/launch-guides.ts` (when to hire a campaign designer; data only, the array was not touched)
- `app/guides-new/kickstarter-fees.ts`, `app/guides-new/kickstarter-vs-gamefound.ts`, `app/guides-new/kickstarter-followers-before-launch.ts`
- `app/guides/selling-miniatures-internationally-vat-ioss/page.tsx`

## Additions

| # | Page | Question | Status | What was added |
| --- | --- | --- | --- | --- |
| 1 | board-game-kickstarter-marketing-plan | New to Kickstarter marketing? | Done | Intro paragraph in `positioning` linking to `/guides/how-to-market-a-kickstarter` |
| 2 | board-game-kickstarter-marketing-plan | What if I only have a month before launch? | Done | FAQ (now 7) and a matching sentence in `launch` |
| 3 | kickstarter-prelaunch-email-list | How do I build an email list from nothing? | Done | FAQ and a paragraph in `signup` linking to `/guides/how-to-get-kickstarter-backers` |
| 4 | kickstarter-prelaunch-email-list | What email tool should I use for my Kickstarter list? | Done | FAQ (now 7) and a matching paragraph in `signup`. No tool is named |
| 5 | kickstarter-advertising-budget-board-games | Are Facebook ads worth it for a board game Kickstarter? | Skipped | The page already has this exact FAQ. The $15 to $50 per backer range was not added |
| 6 | kickstarter-advertising-budget-board-games | Can I run a Kickstarter without ads? | Done | FAQ (now 6) and a paragraph in `budget` |
| 7 | kickstarter-campaign-video-planning | Can I film my Kickstarter video on my phone? | Done | FAQ and a paragraph in `watch` |
| 8 | kickstarter-campaign-video-planning | What should I say in my Kickstarter video? | Done | FAQ (now 7), taken from the existing `brief` steps |
| 9 | board-game-kickstarter-reward-pricing | How many reward tiers should a first Kickstarter have? | Done | FAQ and a paragraph in `tiers` |
| 10 | board-game-kickstarter-reward-pricing | Should I offer early bird rewards? | Done | FAQ (now 8, the maximum) and the same `tiers` paragraph |
| 11 | board-game-kickstarter-funding-goal | What is a realistic funding goal for a first board game? | Done | FAQ (now 6) and a paragraph in `minimum` linking to `/guides/board-game-kickstarter-cost` |
| 12 | board-game-reviewer-outreach | Do I need reviews before I launch my Kickstarter? | Done | FAQ (now 5) and a paragraph in `fit` |
| 13 | board-game-reviewer-outreach | Do I have to pay for board game previews? | Skipped | Already answered by "Should I pay for a board game preview?" and the `use` section. No disclosure rules were added |
| 14 | kickstarter-stretch-goals-planning | Do I need stretch goals on my first Kickstarter? | Done | FAQ (now 7) and a sentence in `base-game` |
| 15 | board-game-kickstarter-gameplay-rulebook | Does my rulebook have to be finished before I launch? | Done | FAQ (now 5) and a paragraph in `rulebook` |
| 16 | kickstarter-prototype-risks-disclosure | Can I launch with a prototype at all? | Done | Opening paragraph in `purpose` linking to `/guides/is-my-game-ready-for-kickstarter` |
| 17 | kickstarter-prelaunch-page-vs-landing-page | Do I need a website before my Kickstarter? | Done | FAQ (now 6) and a paragraph in `landing` |
| 18 | kickstarter-review-launch-timeline | How long does the whole preparation take? | Done | Opening paragraph in `review` linking to `/guides/when-to-launch-a-kickstarter` |
| 19 | board-game-kickstarter-launch-day-checklist | Is there a checklist for the whole launch, not just the day? | Done | Opening paragraph in `at-a-glance` linking to `/guides/how-to-launch-a-board-game-on-kickstarter`, plus FAQ (now 7) |
| 20 | kickstarter-live-campaign-updates | My campaign has gone quiet in the middle. Is that normal? | Done | New section `quiet-middle` linking to `/guides/why-kickstarter-campaigns-fail`, a new source, and FAQ (now 7) |
| 21 | kickstarter-shipping-delivery-page | Who pays for shipping on a Kickstarter, me or the backer? | Done | FAQ (now 6) and a paragraph in `collection` |
| 22 | choose-board-game-kickstarter-marketing-agency | How do I spot a Kickstarter marketing scam? | Skipped | The page already has this exact FAQ and a `red-flags` section |
| 23 | when-to-hire-kickstarter-campaign-designer | Can I design the page myself first and get help later? | Done | FAQ (now 6) and a paragraph in `diy` linking to `/guides/how-to-design-a-kickstarter-page` |
| 24 | selling-miniatures-internationally-vat-ioss | Do I have to charge VAT on my Kickstarter? | Done | New `kickstarter-vat` section with a TOC entry and a link to `/guides/kickstarter-fees`, a new source, and FAQ (now 5). The page says plainly that it is not tax advice |
| 25 | kickstarter-fees | Do I pay Kickstarter anything if I don't reach my goal? | Partly done | FAQ skipped because "Does Kickstarter charge anything if my project doesn't fund?" already exists. Added the planned link to `/guides/board-game-kickstarter-cost` in `budget` |
| 26 | kickstarter-vs-gamefound | Which is easier for a complete beginner? | Done | FAQ (now 7) and a paragraph in `which-to-pick` linking to `/guides/kickstarter-for-beginners`. Every fact comes from the page itself |
| 27 | kickstarter-followers-before-launch | I have almost no followers. Where do I get the first ones? | Done | FAQ (now 7) and a paragraph in `grow` linking to `/guides/how-to-get-kickstarter-backers` |

## External facts checked today (25 Nov 2026)

- Kickstarter, "How to Overcome the Mid Campaign Slump" (Feb 4, 2025, updates.kickstarter.com/overcome-the-mid-campaign-slump/). It says pledges come rolling in during the first few days, then a plateau follows that is "completely normal". It says nothing about the final days, so the page makes no claim about them. Added to the live campaign updates page as source 4.
- Kickstarter release note "VAT Flexibility in Pledge Manager" (Apr 13, 2026). It confirms the two VAT routes and that Kickstarter still collects US and Canadian taxes where required. Added to the VAT page's sources.

## Notes for the lead

- The launch checklist (#19) links to `/guides/how-to-launch-a-board-game-on-kickstarter`, which is being written in `wt-cornerstone`. Merge the cornerstone with or before this branch. The eight beginner guides already link to the same path.
- No new slugs. No changes needed to the sitemap, llms.txt, the intent map, the guides index or the tests.
- Content dates: every guide touched already shows `updated: "2026-11-25"`, and `contentDates.internationalVatIoss` is already `2026-11-25`. No content dates key is needed.
- I could not build here, so the static output test was not run. All data files load through `tsx`, and a script checked the rendered FAQ counts.

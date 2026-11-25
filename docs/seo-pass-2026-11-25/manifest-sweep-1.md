# Manifest: sweep-1 (SEO pass, 25 Nov 2026)

Branch `wt-sweep-1`. No new slugs. No shared registration files edited except the two index CTAs the task asked for (`app/guides/page.tsx`, `app/resources/page.tsx`, one or two links each in the existing `gd-solutions` nav).

## Files changed

- `app/launch-guides.ts` (campaign design cost, page checklist entries only)
- `app/launch-guides-new.ts` (gameplay rulebook, video planning, card game entries; helper type now accepts an optional `updated`)
- `app/launch-growth-guides.ts` (reviewer outreach, pledge manager checklist entries)
- `app/launch-marketing-guides.ts` (prelaunch email list, advertising budget entries)
- `app/launch-guide-revisions.ts` (entries for page checklist, design cost, ad budget only)
- `app/growth-buyer-revisions.ts` (entries for prelaunch email list only)
- `app/about/page.tsx`, `app/authors/guildframe/page.tsx`, `app/editorial-policy/page.tsx`, `app/work/page.tsx`, `app/guides/page.tsx`, `app/resources/page.tsx` (closing CTA with a `/buy` link)

## Per guide

| Slug | seoTitle | Pillar / servicePath | Visuals | FAQs (rendered) | New related |
|---|---|---|---|---|---|
| board-game-kickstarter-campaign-design-cost | Kickstarter Campaign Design Cost for Board Games | Campaign page, `/campaign-design` | checklist (scope), compare with $1,800 / $5,900 (price) | 6 | kickstarter-fees, kickstarter-agency-cost |
| board-game-kickstarter-gameplay-rulebook | Board Game Kickstarter Gameplay and Rulebook Guide | Campaign page, `/campaign-design` (was `/board-game-kickstarter-campaign-design`) | steps (sample turn), compare (rulebook) | 4 | kickstarter-campaign-graphics-mobile-readability |
| board-game-kickstarter-page-checklist | Board Game Kickstarter Page Checklist Before Launch | Campaign page, `/campaign-design` (was `/board-game-kickstarter-campaign-design`) | checklist (opening), steps (review) | 4 | kickstarter-image-sizes, kickstarter-campaign-video-planning |
| board-game-pledge-manager-checklist | Pledge Manager Checklist for Board Game Campaigns | After funding, `/post-campaign-support` (was `/kickstarter-launch-services`) | timeline (stages), checklist (test orders) | 5 | pledge-managers-compared |
| board-game-reviewer-outreach | Board Game Reviewer Outreach Before Kickstarter (new seoTitle) | Prelaunch, `/kickstarter-prelaunch-marketing` | timeline (illustrative schedule), compare (paid vs independent) | 4 | board-game-kickstarter-marketing-plan, kickstarter-prelaunch-email-list |
| card-game-kickstarter-launch-guide | Card Game Kickstarter Launch Guide | Campaign page, `/campaign-design` (was `/card-game-kickstarter-campaign-design`) | steps (cards), compare (product types) | 4 | tcg-kickstarter-launch-guide |
| kickstarter-advertising-budget-board-games | Kickstarter Advertising Budget for Board Games (unchanged) | `/kickstarter-advertising` (kept, label updated) | split $60 example (economics, in revisions), stats ROAS example (profit) | 5 | kickstarter-fees |
| kickstarter-campaign-video-planning | Kickstarter Campaign Video: Length and Planning | `/campaign-creative` (was `/campaign-design`; scripts, motion and video edits live there) | stats (Kickstarter limits), steps (brief) | 5 | kickstarter-image-sizes |
| kickstarter-prelaunch-email-list | Kickstarter Prelaunch Email List for Board Games (unchanged) | Prelaunch, `/kickstarter-prelaunch-marketing` | compare (followers vs list), bars (list size scenarios, in buyer revisions) | 5 | kickstarter-followers-before-launch |

Descriptions unchanged except campaign design cost (removed "design-only"): "Budget your tabletop Kickstarter page by scope: copy, graphics, artwork, video and launch support. Compare quotes and see Guildframe's fixed page price." (154 chars).

Internal links: guide paragraphs are plain strings, so all contextual links were added through `relatedSlugs`. New page slugs (kickstarter-fees, kickstarter-agency-cost, pledge-managers-compared, kickstarter-image-sizes, kickstarter-followers-before-launch, tcg-kickstarter-launch-guide) are filtered out until those guides exist in `launchGuides`, so they appear automatically after merge.

## Lead must do

1. **Dates do not render yet.** Every guide has `updated: "2026-11-25"` on its object, but `reviseLaunchGuide` (app/launch-guide-revisions.ts) overwrites `updated` with `contentDates.launchGuideReview` for every guide, and the `growthUpdatedSlugs` map in app/launch-guides.ts overwrites four of mine with `contentDates.growthReview`. Suggested fix: in `reviseLaunchGuide`, use `guide.updated && guide.updated > fallback ? guide.updated : fallback`, and drop my four slugs from `growthUpdatedSlugs` (or apply the same max rule there). Then add `"2026-11-25"` to content-dates and update `datedPages` in the tests and sitemap lastmod for all nine paths.
2. **Tests:** title expectations in `tests/static-output.test.mjs` lines 17 to 92 change for reviewer outreach, pledge manager, design cost, page checklist, gameplay rulebook, video planning and card game (new value = seoTitle + " | Guildframe"; reviewer outreach and pledge manager now use seoTitle instead of title). The test at line 702 ("Other designers' prices depend on their scope") still passes; the sentence moved into the price section.
3. Category landings `/board-game-kickstarter-campaign-design` and `/card-game-kickstarter-campaign-design` lose one guide CTA each because those guides now point to the `/campaign-design` hub. Revert those two servicePaths if you prefer the category pages.
4. Three guides (gameplay rulebook, video, card game) still end on the shared generic "Use this in your launch review" checklist section from `practicalChecks`; I left that shared text alone. The shared article CTA follows it.
5. `app/guide-workbooks.ts` entry for the design cost guide still shows "editable-file delivery" (visible hyphen); not my file, left alone.

## Index, llms.txt, intent map

No new pages, so no guides/resources index entries, llms.txt lines or intent map lines needed. Suggested llms.txt refresh (optional): the campaign design cost guide now states the $1,800 and $5,900 prices in its answer.

## Facts checked

- Kickstarter video help (fetched 25 Nov 2026): video not required; 5120 MB maximum for project and Discovery Mode videos; Discovery Mode 9:16 vertical; 60 to 90 seconds recommended for Discovery Mode. Already in the page's sources.
- Prices and full support contents taken from the BRIEF and `app/campaign-content.ts`.
- All other visual figures are from the pages' own illustrative examples and labelled as such. No new external facts added; nothing unverified left on the pages.

## Non guide CTAs

- /about: new closing section with links to `/buy` and `/kickstarter-launch-services` plus a coral "Discuss my project" button (`st-actions`, `w-btn--coral`).
- /authors/guildframe: new "Work with me" section (TOC entry added) with `/buy` link and button.
- /editorial-policy: new "Want help with your own launch?" section (TOC entry added) with `/buy` and hub links and button.
- /work: `/buy` row added to the existing `wk-rows` list in the closing note.
- /guides: `/kickstarter-launch-services` and `/buy` links added to the closing `gd-solutions` nav.
- /resources: `/buy` link added to the closing `gd-solutions` nav.

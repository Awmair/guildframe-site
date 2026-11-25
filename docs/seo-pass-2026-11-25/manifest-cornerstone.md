# Manifest: cornerstone (25 Nov 2026)

## Files changed

- Added `app/guides/how-to-launch-a-board-game-on-kickstarter/page.tsx` (custom page on `SeoArticlePage`, metadata via `pageMetadata`)
- `app/content-dates.ts`: added one key only, `howToLaunch: "2026-11-25"` (page reads published and updated from it)
- Added `docs/seo-pass-2026-11-25/manifest-cornerstone.md`

No other shared registration file was edited.

## New page

### /guides/how-to-launch-a-board-game-on-kickstarter

- H1 / title: The Complete Guide to Launching a Tabletop Kickstarter, A to Z
- seoTitle (metadata title): How to Launch a Board Game on Kickstarter: A to Z Guide (55 chars), renders as "How to Launch a Board Game on Kickstarter: A to Z Guide | Guildframe"
- meta description (155 chars): How to launch a board game on Kickstarter, from prototype and budget to page, marketing, launch day, shipping and delivery. Plain answers for first timers.
- category label: Start here
- pillar: sits above all five pillars, links to all eight service hubs once in the help table; the closing chapter and shared CTA go to `/kickstarter-launch-services` ("Kickstarter launch services for tabletop games") and `/buy`
- targets: how to launch a board game on Kickstarter; how to start a Kickstarter for a board game; how to kickstart a board game; Kickstarter guide for board games; step by step guide to launching a Kickstarter; where do I start with Kickstarter
- shape: intro with a chapter jump list, a timeline chapter, 24 question chapters grouped in six stages (each with a "Read next" line of real links to the owner), the "where Guildframe can help" table (links to all eight hubs plus `/kickstarter-to-shopify`), a final "What should I do next?" chapter pointing to `/buy` and the free opening mockup (`#start-project`), 10 FAQs, then the shared article CTA. About 6,000 visible words.
- visuals (GuideVisual): timeline (master timeline, captioned "Guildframe example timeline, adjust to your project"), stats (Kickstarter 2024 tabletop figures), split (illustrative $30,000 budget, only fees and contingency sourced), steps (after funding stages). The help table is a linked table using the existing `article-table-wrap` markup.
- published / updated: `contentDates.howToLaunch` (2026-11-25)

## Registration the lead needs to do

- `app/sitemap.ts`: `{ path: "/guides/how-to-launch-a-board-game-on-kickstarter", modified: contentDates.howToLaunch },`
- `app/guides/page.tsx`: pin first as "Start here":
  - title: The Complete Guide to Launching a Tabletop Kickstarter, A to Z
  - copy: "Every stage of a tabletop Kickstarter in order, from a tested prototype to delivery, with a plain answer for each and the guide that goes deeper."
  - href: `/guides/how-to-launch-a-board-game-on-kickstarter`, tag: "Start here"
  - Check the index test that every guide is reached (`known` vs `reached`) still passes once it is listed.
- `public/llms.txt` (list it first in the guides block):
  - `- [How to launch a board game on Kickstarter, A to Z](https://guildframe.com/guides/how-to-launch-a-board-game-on-kickstarter): every stage of a tabletop Kickstarter in order, from readiness, budget and fees to the page, prelaunch, ads, launch day, pledge managers, manufacturing, shipping, VAT and tariffs, with a link to the deep guide for each.`
- `docs/SEARCH_INTENT_MAP.md`:
  - `how to launch a board game on Kickstarter, how to start a Kickstarter for a board game, how to kickstart a board game, Kickstarter guide for board games, step by step guide to launching a Kickstarter, where do I start with Kickstarter -> /guides/how-to-launch-a-board-game-on-kickstarter (cornerstone above all five pillars; each chapter is a short answer that links to the owner and never carries the owner's table, calculator or checklist)`
  - `how-to-launch-a-kickstarter` stays unregistered (plan section 3).
- `tests/static-output.test.mjs`:
  - pages list: `["/guides/how-to-launch-a-board-game-on-kickstarter", "How to Launch a Board Game on Kickstarter: A to Z Guide | Guildframe", "The Complete Guide to Launching a Tabletop Kickstarter"]`
  - date map: `["/guides/how-to-launch-a-board-game-on-kickstarter", "2026-11-25"]`
  - article paths list (AEO metadata test), if the lead adds custom guides there.
- Links in (plan section 3): one contextual line on each of the eight hubs ("New to this? Start with the A to Z guide"), every beginner page, `board-game-kickstarter-launch-day-checklist`, `/resources/tabletop-campaign-launch-worksheet`, `/about`.
- Optional: add an `ArticleNextStep` entry for the slug in `app/components/ArticleNextStep.tsx` (not edited, shared component).

## Link targets that depend on pages being written now

The page links to all eight beginner slugs: `is-my-game-ready-for-kickstarter`, `kickstarter-for-beginners`, `board-game-kickstarter-cost`, `how-to-design-a-kickstarter-page`, `how-to-market-a-kickstarter`, `how-to-get-kickstarter-backers`, `when-to-launch-a-kickstarter`, `why-kickstarter-campaigns-fail`. Every other link target was checked against `app/guides/*`, `app/launch-*.ts`, `app/guides-new/*.ts`, `app/campaign-*.ts` and the app routes. Do not publish the cornerstone before those eight are registered, or the link check will fail.

## Sources (all reopened on 25 Nov 2026)

1. Kickstarter, From Concept to Fulfillment (9 Sep 2026): about 50 days kickoff to launch, launch 11 am Eastern, late pledges roughly a month, survey open at least a month, "about four months of real, staffed work", assumes "You have a product, a planned launch date", campaign stretch named "The Long Middle".
2. Kickstarter, Why Kickstarter Campaigns Fail After Funding (3 Jun 2026): fees 8 to 10 percent, buffer 20 to 30 percent on the fulfillment estimate, about twelve months campaign end to last rewards with an overseas manufacturer, Mollick estimate 5 to 14 percent never deliver.
3. Kickstarter, How To Market a Tabletop Game in 7 Steps (20 Feb 2025): $15 to $50 per backer through ads, 2.5x return on ad spend, the seven steps.
4. kickstarter.com/help/fees: 5%, US 3% + $0.20, micropledge 5% + $0.05, no fees if unfunded.
5. Kickstarter, biggest platform for games (5 Feb 2025): 6,646 / 5,314 / 80% (highest in its 15 year history) / $220M.
6. Kickstarter Support: review up to 3 business days, changes another 3 or longer; launch is manual; duration 1 to 60 days, 30 or less recommended; video not required (compelling videos succeed at a higher rate); prelaunch followers get a launch email; payout begins 14 days after the deadline; late pledges must be enabled in draft or live, same fees; pledge manager no upfront cost, usual fees, only after launch; tariff surcharge for US shipping addresses only, by request.
7. Kickstarter release note, VAT flexibility (13 Apr 2026).
8. Gamefound Help: fees (5% platform fee), pledge manager and late pledge article, Adfound fees article.

## Decisions and notes

- Timeline months before launch are labelled as a Guildframe example; Umair should confirm the ranges match how he plans (plan section 8).
- Budget split shares other than fees (about 9%, inside the sourced 8 to 10 percent) and the reserve (20% of making and shipping, the low end of the sourced 20 to 30 percent) are a labelled illustrative example. Umair should sign off the shares.
- Prices $1,800 and $5,900 are hardcoded in copy, as on other pages; no price constant exists in `site-config.ts` or `product-data.ts`.
- Left out as unverified or owned elsewhere: tariff rates and court or Section 301 dates (one sentence says rules "have changed more than once since 2025" and links to the tariffs guide), the Gamefound and Indiegogo deal, the 30% rule, event dates, AI art policy.
- Proof line uses the homepage wording: ten years of campaign design before Guildframe, 252 client reviews averaging 5.0. No case study results quoted.
- House writing skills (unslop, unslop-ui, impeccable) live on Umair's Mac and no folder was connected to this session, so the copy follows the BRIEF voice rules only.
- Checks run: no em or en dash in the file; no hyphenated compound in any visible string (hyphens only in paths and ids); `tsc` shows only missing module and missing React type errors.

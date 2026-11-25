# Manifest: shopify agent (branch wt-shopify)

Scope: the Shopify supporting pillar under `/post-campaign-support`. No URLs changed, no pages deleted, no new slugs. Titles (`<title>`) unchanged on every page, so the title assertions in `tests/static-output.test.mjs` still hold. Not touched: `/kickstarter-to-shopify`, `/guides/backerkit-vs-shopify-vs-gamefound`, `/guides/what-happens-after-kickstarter-is-funded`.

## Overlap found (the 5 crawled, not indexed pages)

- `/shopify-theme-for-board-games` shared one template with the TTRPG and miniatures pages: same answer, benefits, steps, FAQ and related links, with only the product nouns swapped. Its catalogue copy also repeated the expansions guide and product page checklist.
- `/guides/move-from-kickstarter-to-shopify` covered roles, product setup, content mapping, store build, testing and launch. Build and testing duplicated the timeline and store checklist; content mapping duplicated the migration checklist; "rewards into products" duplicated the expansions guide.
- `/guides/kickstarter-to-shopify-launch-timeline` repeated the move guide's build list and the store checklist's test list.
- `/resources/board-game-product-page-checklist` repeated store level search checks (canonicals, sitemap) from the store checklist and the edition modelling table from the expansions guide.
- `/guides/sell-board-game-expansions-add-ons-shopify` repeated the product page checklist's edition section and a generic QA list.
- Also trimmed: the store checklist's product versus variant table (now owned by the expansions guide) and the migration checklist's campaign asset table (now owned by the move guide).

## What each page now owns

| Page | Target question | Unique structure | Infographics |
|---|---|---|---|
| `/guides/move-from-kickstarter-to-shopify` | How do I move from Kickstarter to Shopify? | What moves, what stays, what gets rebuilt; Kickstarter Shopify app; backer data; content rewrite; backer first announcement | compare (3 groups), steps (app flow) |
| `/guides/kickstarter-to-shopify-launch-timeline` | When should I open a Shopify store after Kickstarter? | Milestone stages (campaign live, pledge manager open, orders lock), each with an exit check; three ways to open; final gate | timeline (milestones), compare (signup / preorders / in stock) |
| `/guides/sell-board-game-expansions-add-ons-shopify` | How should expansions and add ons be set up on Shopify? | Three question decision; product vs variant vs bundle; pledge tier breakdown (labelled example); compatibility line; catalogue edge case tests | steps (decision), compare (3 models) |
| `/resources/board-game-product-page-checklist` | What should a board game product page include? | Seven page zones in scroll order, one product only; phone check | steps (zones), checklist (lower page) |
| `/shopify-theme-for-board-games` | What does a board game store need from a Shopify theme? | Four theme needs, five check theme trial, theme specific steps and FAQ; links out to the theme picks guide | steps (theme trial) |

## Files changed

- `app/guides/move-from-kickstarter-to-shopify/page.tsx` (rewrite)
- `app/guides/kickstarter-to-shopify-launch-timeline/page.tsx` (rewrite)
- `app/guides/sell-board-game-expansions-add-ons-shopify/page.tsx` (rewrite)
- `app/resources/board-game-product-page-checklist/page.tsx` (rewrite, now reads `contentDates.productPageChecklist`)
- `app/resources/kickstarter-to-shopify-migration-checklist/page.tsx` (rewrite as a six phase tick list, reads `contentDates.migrationChecklist`)
- `app/resources/board-game-shopify-store-checklist/page.tsx` (visual, new answer and meta description, app check, reads `contentDates.storeChecklist`)
- `app/resources/backerkit-vs-shopify-vs-gamefound-comparison/page.tsx` (visual, Kickstarter stack row, app paragraph)
- `app/guides/best-shopify-themes-for-board-games/page.tsx` (visual only plus links and hyphen fixes; title, H1, answer and picks unchanged to protect its ranking)
- `app/guides/shopify-developer-vs-diy-theme/page.tsx`, `kickstarter-late-pledges-vs-shopify`, `sell-board-game-preorders-on-shopify`, `how-much-does-a-board-game-website-cost`, `shopify-vs-etsy-for-selling-miniatures`, `build-a-tabletop-shopify-store-with-ai`, `selling-miniatures-internationally-vat-ioss` (one visual each, pillar and cross links, Kickstarter app where relevant)
- `app/done-for-you-shopify-store/page.tsx` (process visual, links, app paragraph)
- `app/landing-content.ts` (`storeContent` takes an optional overrides object; board games page gets its own H1, answer, benefits, capabilities, steps, FAQ, related and visual; TTRPG and miniatures get their own visual and related links)
- `app/shopify-theme-for-board-games/page.tsx` (meta description and keywords)
- `app/components/SeoLandingPage.tsx` (optional `visual` and `visualHeading` fields render a GuideVisual section; a closing CTA to `/done-for-you-shopify-store` and `/post-campaign-support` after the related links)
- `app/components/SeoArticlePage.tsx` (store guide regex now includes `product-page-checklist`, so that page's CTA points to `/done-for-you-shopify-store` instead of `/buy`)
- `app/content-dates.ts` (only the keys below)

## Content dates set to 2026-11-25

`doneForYouShopifyStore, boardGames, ttrpg, miniatures, moveFromKickstarter, bestBoardGameThemes, shopifyDeveloperVsDiyTheme, latePledgesVsShopify, kickstarterToShopifyTimeline, boardGamePreorders, expansionsAndAddons, internationalVatIoss, boardGameWebsiteCost, shopifyVsEtsyMiniatures, buildWithAi, storeChecklist, migrationChecklist, platformMatrix, productPageChecklist`

The VAT guide and three resources had literal dates. They now read from these keys. `buildWithAi` was also used as the published date, so the AI guide's `published` and `publishedTime` are now the literal `"2026-10-28"`, which keeps the original date.

## Lead actions

- **Tests:** in `tests/static-output.test.mjs` `datedPages`, set every path listed above to `"2026-11-25"`: the 11 guides, 4 resources, `/done-for-you-shopify-store`, and the 3 `/shopify-theme-for-*` pages if they get date entries. The later overrides (the `2026-10-28` loop over all guides, the `2026-11-05` and `2026-11-06` lists) will otherwise reset them. Title and phrase assertions need no change: "Plan your board game" is still visible in the board games page answer, but its H1 is now "Shopify theme setup for board games".
- **Sitemap:** nothing to do; it already reads these keys.
- **llms.txt:** titles unchanged. Optional description lines:
  - move guide: "What moves to Shopify, what stays on Kickstarter and what you rebuild, including Kickstarter's Shopify app."
  - timeline: "When to open a Shopify store after Kickstarter, by campaign milestone."
  - expansions: "Product, variant or bundle: setting up expansions, add ons and pledge tiers on Shopify."
  - product page checklist: "Seven zones of a board game product page, in scroll order."
  - theme page: "The four things a Shopify theme for board games has to show, and how to test one."
- **Intent map** (`docs/SEARCH_INTENT_MAP.md`), owners: move guide = migration (what moves or stays); timeline = when to open; expansions = catalogue structure; product page checklist = single product page anatomy; store checklist = whole store prelaunch check; migration checklist = tick list version of the move; `/shopify-theme-for-board-games` = theme requirements and setup service; best themes guide = named theme picks.
- **Guides and resources index:** no new entries. You may want to refresh the blurbs to match the new descriptions.

## External facts used and verified on 25 Nov 2026

- Kickstarter app on the Shopify App Store (apps.shopify.com/kickstarter): developer Kickstarter, PBC; launched July 31, 2026; listed as free; sends finalized Pledge Manager orders to Shopify; maps rewards to existing products and variants; sync all or export in segments; tracking numbers sync back.
- Kickstarter release notes: backer self serve add ons (Aug 20, 2026); creators can edit backer orders (Oct 28, 2026).
- Shopify bundles eligibility page: "Bundles aren't compatible with purchase options, which includes subscriptions, pre-orders..." Added as a source on the expansions guide.
- Shopify preorders: preorder app required, Shopify Payments or PayPal Express only (already on the preorder guide).
- Etsy fees: $0.20 listing fee and 6.5% transaction fee. The Etsy guide callout now says "as of November 25, 2026".
- EU €3 duty: from July 1, 2026, for B2C consignments of €150 or less, applied per declaration line in current practice, planned until July 1, 2028; product identifiers required from November 1, 2026 (European Commission Access2Markets).

## Not verified, so left out

- Whether the Kickstarter app needs a particular Shopify plan. The listing's compatibility list was cut off, so no plan requirement is stated.
- Kickstarter release notes did not show the July 31 Shopify entry on the first page I fetched. The date is sourced to the Shopify App Store listing instead.
- Theme prices on the best themes guide were not re-checked. The new visual there uses no prices.

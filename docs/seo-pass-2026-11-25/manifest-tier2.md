# Manifest: tier2 (25 Nov 2026)

Four rewritten pages, no new slugs. Branch `wt-tier2`.

## Files changed

- `app/launch-growth-guides.ts`: rewrote `board-game-kickstarter-launch-day-checklist` and `board-game-kickstarter-reward-pricing` objects.
- `app/launch-marketing-guides.ts`: rewrote `board-game-kickstarter-marketing-plan` object.
- `app/launch-guide-revisions.ts`: removed the old `board-game-kickstarter-marketing-plan` revision sections (folded into the guide), and `reviseLaunchGuide` now keeps a guide's own `updated` when it is later than the shared review date. No other guide changes date (their own dates are all earlier than the shared date).
- `app/components/GuideInlineText.tsx` (new): renders `[words](/path)` in guide paragraphs and list items as internal links. Only paths starting with `/` become links.
- `app/guides/[slug]/page.tsx`: paragraphs and list items render through `GuideInlineText` (two lines). Other agents' plain paragraphs are unaffected.
- `app/kickstarter-to-shopify/page.tsx`: new title and description, answer first hero copy, official Kickstarter Shopify app section with a steps visual and a compare visual, two new FAQs (7 total), sources line, final CTA block after the FAQ linking `/buy` and `/post-campaign-support`.
- `app/guide-workbooks.ts`: rewrote the three workbook lines for my slugs (removed hyphenated compounds).
- `public/downloads/guides/board-game-kickstarter-launch-day-checklist.md`, `...-reward-pricing.md`, `...-marketing-plan.md`: matched to the new workbooks; the launch checklist download now carries all 30 checks by phase.

## Page metadata

| Path | H1 title | seoTitle | Description | Category tag | Pillar / servicePath |
| --- | --- | --- | --- | --- | --- |
| /guides/board-game-kickstarter-launch-day-checklist | Board Game Kickstarter Launch Checklist: 90 Days to Launch Day | Board Game Launch Checklist for Kickstarter: 90 Days Out | A board game Kickstarter launch checklist from 90 days out to launch day. Lock rewards, open the prelaunch page, test ads, pass review and run the first hour. | Launch checklist | 1 Planning / `/kickstarter-launch-services` |
| /guides/board-game-kickstarter-reward-pricing | How to Price Kickstarter Rewards for a Board Game (unchanged) | Kickstarter Pricing: How to Price Your Board Game Rewards | Kickstarter pricing for board games: build each reward price from its real costs, fees and margin. See where a $40 pledge goes and test core and deluxe tiers. | Reward pricing | 1 Planning / `/kickstarter-launch-services` (was `/campaign-design`) |
| /guides/board-game-kickstarter-marketing-plan | How to Market a Board Game on Kickstarter: A Phased Plan | How to Market a Board Game on Kickstarter in 2026 | How to market a board game on Kickstarter, phase by phase: the pitch, a prelaunch audience, ad tests, reviewer previews, launch week and the live campaign. | Launch marketing | 1 Planning / `/kickstarter-launch-services` |
| /kickstarter-to-shopify | Move from Kickstarter to a Shopify store (unchanged) | Kickstarter to Shopify: Official App and Store Setup | Kickstarter's free Shopify app sends finalized Pledge Manager orders to your store and tracking back. See what syncs, what does not and how to plan the store. | landing | 5 After funding / `/post-campaign-support` |

Guides carry `updated: "2026-11-25"` on the object. Visuals: checklist guide has timeline + steps + checklist; pricing has split ($40 pledge, fees verified, rest labelled illustrative) + compare; marketing has steps + compare; Shopify page has steps + compare. FAQs: 6, 6, 6, 7. Inline contextual links: 7, 5, 8, plus existing links on the Shopify page.

## Lead actions needed

- `app/content-dates.ts`: set `kickstarter: "2026-11-25"` (only used by `/kickstarter-to-shopify` and its sitemap row).
- **Dependency**: the pricing guide links `/guides/kickstarter-fees` inline. Merge the fees guide with this branch, or the link test in `tests/static-output.test.mjs` fails.
- `tests/static-output.test.mjs` pages list:
  - `["/guides/board-game-kickstarter-reward-pricing", "Kickstarter Pricing: How to Price Your Board Game Rewards | Guildframe", "How to Price Kickstarter Rewards for a Board Game"]`
  - `["/guides/board-game-kickstarter-launch-day-checklist", "Board Game Launch Checklist for Kickstarter: 90 Days Out | Guildframe", "Board Game Kickstarter Launch Checklist"]`
  - `["/guides/board-game-kickstarter-marketing-plan", "How to Market a Board Game on Kickstarter in 2026 | Guildframe", "How to Market a Board Game on Kickstarter"]`
  - `["/kickstarter-to-shopify", "Kickstarter to Shopify: Official App and Store Setup | Guildframe", "Move from Kickstarter"]`
  - datedPages: set all four paths to `2026-11-25` (remove the marketing plan from the `2026-11-05` loop).
  - The marketing plan test still passes: the page keeps "eight week example" and the ScentedRealms link.
- `public/llms.txt` line replacements:
  - `- [How to Market a Board Game on Kickstarter](https://guildframe.com/guides/board-game-kickstarter-marketing-plan): A phased plan with channel comparison, worked ad budget and launch decision.`
  - `- [Kickstarter to Shopify: Official App and Store Setup](https://guildframe.com/kickstarter-to-shopify): What Kickstarter's Shopify app syncs, what it does not, and how to plan the store after funding.`
  - `- [How to Price Kickstarter Rewards for a Board Game](https://guildframe.com/guides/board-game-kickstarter-reward-pricing): Build each reward price from real costs, Kickstarter fees and margin, with a $40 pledge breakdown.`
  - `- [Board Game Kickstarter Launch Checklist](https://guildframe.com/guides/board-game-kickstarter-launch-day-checklist): 30 checks from 90 days out to launch day, grouped by phase, with owners.`
- `docs/SEARCH_INTENT_MAP.md` lines:
  - `/guides/board-game-kickstarter-launch-day-checklist`: game launch checklist, Kickstarter launch checklist, tabletop game Kickstarter launch checklist (90 days to launch day).
  - `/guides/board-game-kickstarter-marketing-plan`: how to market a board game, board game marketing, board game marketing strategy, tabletop game marketing.
  - `/guides/board-game-kickstarter-reward-pricing`: Kickstarter pricing, how to price Kickstarter rewards (fees themselves belong to `/guides/kickstarter-fees`).
  - `/kickstarter-to-shopify`: Shopify Kickstarter, Kickstarter Shopify integration, Kickstarter Shopify app, Kickstarter migration.
- Index labels (lead owned, optional): `app/guides/page.tsx` marketing plan card (`data-title="Marketing plan"`) and `app/page.tsx` line 38 "Board game Kickstarter marketing plan" could become "How to market a board game on Kickstarter". `app/components/GuideWorkbook.tsx` labels still fit.

## Sources checked today

- Kickstarter fees (US): 5% platform fee, 3% + $0.20 processing, pledges under $10 at 5% + $0.05, fees only if funded. kickstarter.com/help/fees.
- Review up to 3 business days, plus up to 3 more after changes; launch is manual and cannot be scheduled; target launch date does not launch. Kickstarter Help Center.
- Prelaunch page: first time creators only after submission and approval; followers get a launch email; no direct messages; count shows from 10 followers. Kickstarter Help Center.
- Dropped pledges in dashboard (Oct 13, 2026); shipping at pledge or in Pledge Manager. start.kickstarter.com release notes.
- Kickstarter Shopify app: free, by Kickstarter, PBC, launched Jul 31, 2026, finalized Pledge Manager orders to Shopify, SKU mapping to existing products, all orders or segments, tracking back. apps.shopify.com/kickstarter. Kickstarter's Aug 18, 2026 post (updates.kickstarter.com) calls it a beta.
- Promotion planning advice: help.kickstarter.com article 16236407 (replaces the old handbook URL, which no longer loads).

## Not verified, left out

- The Kickstarter release notes pages (1, 2, Pledge Manager and fulfilment tags) carry **no Shopify app entry**. The Jul 31, 2026 date comes from the Shopify App Store listing only.
- Setup details from a third party PDF (Crowd Control) such as the address change window and order discount codes were not used.
- No event dates, tariff figures or competitor prices were used.

# Manifest: hubs (service pages), SEO pass 25 Nov 2026

Branch `wt-hubs`. No new slugs. No external facts used, so no `sources` were needed. Every figure is a Guildframe price ($1,800, $5,900) or wording already in `app/case-studies.ts` / `app/past-work.ts` (Cryptic Explorers 961 backers pledged $55,686 shown as the creator's public result; Quiver Time "100% funded within 6 days" and Cryptic Explorers "Funded In 27 Hours" banners described as header content and credited to the creators; ten years, 252 reviews, 5.0 as on the homepage).

## Files changed

- `app/components/CampaignServicePage.tsx`: optional `lead` (hero first paragraph, falls back to description) and `price` (text in the scope intro) on `CampaignPage`; visible `Updated <time>` under the H1 (all service pages, including /campaign-design with its own `campaignDesign` date); new `#how-it-runs` section rendering `delivery.visuals` with `GuideVisual`; "Work you can check" proof line in `sv-terms`; `#stage-guides` "Guides for this stage" block with a link up to the pillar hub; a closing CTA block linking `/buy` (skipped on /campaign-design so tier1-b can decide); FAQs capped at 7 (not on /campaign-design). Only existing classes used (`sv-scope tone-board`, `sv-row-head`, `sv-together`, `sv-inline-links`, `sv-beyond`, `sv-actions`, `w-meta`, `gv-*`).
- `app/service-delivery.ts`: `ServiceDelivery` gains optional `proofCopy`, `visualsIntro`, `visuals`, `guides`. Launch pages get them via `launchExtras`; category and Gamefound design pages via `creativeExtras` (shared five step page project visual plus a per category checklist). New FAQs, named proof slugs (cryptic-explorers added). `creativeDelivery["campaign-design"]` untouched.
- `app/launch-services.ts`: titles, descriptions, H1s, `lead`, `price` for the six launch pages.
- `app/campaign-pages.ts`: Gamefound design and five category pages: titles, descriptions, H1s, `lead`, shared `price`. /campaign-design object untouched.
- `app/campaign-content.ts`: two category FAQs replaced (hub, ads).
- `app/campaign-creative/page.tsx`: title, description, H1, lead, price line, new render FAQ, two `GuideVisual`s, "Guides for this stage" block, CTA to `/buy`.
- `app/content-dates.ts` (service keys only): `campaignCreative` to `2026-11-25`; new `serviceHubs: "2026-11-25"`; `campaignModifiedDate` now returns `serviceHubs` for every service slug except `campaign-design`. `kickstarterAdvertising` key is now unused (left in place).

## New titles, H1s, descriptions (lead: update tests line 10, 58 to 63, 84 to 89, and llms.txt)

| Path | Title (before " \| Guildframe") | H1 | Test phrase suggestion |
| --- | --- | --- | --- |
| /kickstarter-launch-services | Kickstarter Launch Services for Tabletop Games (unchanged) | Kickstarter launch services for tabletop games. | Kickstarter launch services |
| /kickstarter-prelaunch-marketing | Kickstarter Prelaunch Marketing for Tabletop Games | Kickstarter prelaunch marketing for tabletop games. | Kickstarter prelaunch marketing |
| /kickstarter-advertising | Kickstarter Advertising Agency for Tabletop Games | Kickstarter advertising agency for tabletop games. | Kickstarter advertising agency |
| /kickstarter-campaign-management | Kickstarter Campaign Management for Tabletop Games (unchanged) | Kickstarter campaign management for tabletop games. | Kickstarter campaign management |
| /gamefound-launch-services | Gamefound Launch Services for Tabletop Games | Gamefound launch services for tabletop games. | Gamefound launch services |
| /post-campaign-support | Post Campaign Support for Funded Tabletop Games (unchanged) | Post campaign support for funded tabletop games. | Post campaign support |
| /campaign-creative | Kickstarter Campaign Creative for Tabletop Games | Kickstarter campaign creative for tabletop games | Kickstarter campaign creative |
| /gamefound-campaign-design | Gamefound Campaign Design for Tabletop Games | Gamefound campaign page design for tabletop games. | Gamefound campaign page design |
| /board-game-kickstarter-campaign-design | Board Game Kickstarter Campaign Design | Board game Kickstarter campaign design. | Board game Kickstarter |
| /card-game-kickstarter-campaign-design | Card Game & TCG Kickstarter Campaign Design | Card game & TCG Kickstarter campaign design. | Card game |
| /ttrpg-kickstarter-campaign-design | TTRPG Kickstarter Campaign Design | TTRPG Kickstarter campaign design. | TTRPG Kickstarter |
| /miniatures-kickstarter-campaign-design | Miniatures & Terrain Kickstarter Campaign Design | Miniatures & terrain Kickstarter campaign design. | Miniatures |
| /tabletop-accessories-campaign-design | Tabletop Accessories Kickstarter Campaign Design | Tabletop accessories Kickstarter campaign design. | Tabletop accessories |

Descriptions are all 137 to 157 characters and name the price where it applies (see the data files).

llms.txt lines 27 to 31 and 45 to 50 can take the new titles, for example `- [Kickstarter advertising agency for tabletop games](https://guildframe.com/kickstarter-advertising)`, `- [Post campaign support](https://guildframe.com/post-campaign-support)` (current line 31 has a hyphen), `- [Gamefound Campaign Design for Tabletop Games](https://guildframe.com/gamefound-campaign-design)`, `- [Board Game Kickstarter Campaign Design](...)` and so on.

## Test entries for the lead

- `datedPages`: `/campaign-creative` moves from 2026-11-06 to `2026-11-25`. Optionally add the 12 CampaignServicePage routes above (all except /campaign-design) at `2026-11-25`; each now prints `<time datetime="2026-11-25">November 25, 2026</time>`, and schema and sitemap use the same value. /campaign-design prints `campaignDesign` (2026-11-05).
- FAQ counts: 7 on every service page I own, 6 on /campaign-creative. JSON-LD FAQ comes from the same array as the visible list.
- `/kickstarter-launch-services` and `/kickstarter-advertising` still show "paid advertising", "Umair" and "budget". "What you bring" and "What the handoff covers" remain. No Service `offers` added anywhere.

## Intent map lines

- `/kickstarter-launch-services`: "Kickstarter launch services for tabletop games", pillar hub for planning and costs; prices $1,800 and $5,900 visible.
- `/kickstarter-advertising`: "Kickstarter advertising agency for tabletop games", ads run by Umair, ad spend separate.
- `/kickstarter-prelaunch-marketing`: "Kickstarter prelaunch marketing", pillar hub for prelaunch.
- `/gamefound-launch-services`: "Gamefound launch services", pillar hub for platforms.
- `/post-campaign-support`: "post campaign support", pillar hub for after funding.
- Category pages now target "<category> Kickstarter campaign design".

## Guides linked from "Guides for this stage" (new slugs owned by other agents)

Links to these slugs assume they ship in this pass: kickstarter-fees, kickstarter-agency-cost, kickstarter-vs-gamefound, pledge-managers-compared, kickstarter-image-sizes, board-game-tariffs-shipping-us, kickstarter-followers-before-launch, ttrpg-kickstarter-launch-guide, terrain-and-dice-kickstarter-launch-guide, tcg-kickstarter-launch-guide. If any is dropped, remove it from `launchExtras` / `creativeExtras` in `app/service-delivery.ts` or the `guides` array in `app/campaign-creative/page.tsx`.

## Not verified / left out

- No platform fee, tariff, Adfound or event figures were put on service pages (no `sources` array exists there), so nothing needed verification.
- Could not build or run tests (no node_modules). `tsc` shows only the environment's missing React type errors (same `key` errors as existing files).
- Possible merge overlap: tier1-b may also edit `CampaignServicePage.tsx`, `service-delivery.ts` and `campaign-pages.ts` for /campaign-design. My changes leave those entries alone and keep the CTA block off /campaign-design.

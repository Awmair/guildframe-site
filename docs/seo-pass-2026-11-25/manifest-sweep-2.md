# Manifest: sweep-2 (branch wt-sweep-2)

No new pages. Nine guides and three resources revised, plus one headers rule.

## Files changed

- `app/launch-guides-new.ts`: rewrote `kickstarter-prelaunch-page-guide`, `kickstarter-shipping-delivery-page`, `kickstarter-prototype-risks-disclosure`, `miniatures-stl-kickstarter-launch-guide`. The `guide()` helper type now accepts an optional `updated` (one line change on the helper signature).
- `app/launch-guides.ts`: rewrote `what-to-send-kickstarter-campaign-designer`, `kickstarter-reward-tier-graphics`, `ttrpg-kickstarter-campaign-page-design`, `when-to-hire-kickstarter-campaign-designer` (the objects only, not the array or pipeline).
- `app/launch-decision-guides.ts`: rewrote `kickstarter-prelaunch-page-vs-landing-page`.
- `app/launch-guide-revisions.ts`: one sentence added to the `kickstarter-prelaunch-page-vs-landing-page` `route-example` section so the last section points to the prelaunch hub.
- `app/resources/tabletop-campaign-launch-worksheet/page.tsx`: steps infographic, closing CTA aside (to `/campaign-design`, `/kickstarter-launch-services`, `/buy`), removed slashes and a hyphenated compound from copy.
- `app/resources/tabletop-campaign-page-study/page.tsx`: bars infographic computed from the study data (observed count per field, title built from the top field), `/buy` link in the closing aside, "three" case studies corrected to "four".
- `app/resources/tabletop-shopify-metafield-schema/page.tsx`: stats infographic (field counts per block, taken from the page's own tables), closing CTA aside to `/post-campaign-support` and `/done-for-you-shopify-store`.
- `public/_headers`: added `/videos/*.vtt` with `X-Robots-Tag: noindex` (Cloudflare splat matches the rest of the path, so `/videos/*.vtt` covers both caption files).

Every guide now has 2 GuideVisuals, 4 to 7 FAQs (5 or 6 each), a two sentence `answer`, `updated: "2026-11-25"` on the object, hub `servicePath`, and the last authored section closes on the hub.

## seoTitle, title and hub per guide

| Slug | seoTitle | H1 change | servicePath / serviceLabel |
| --- | --- | --- | --- |
| kickstarter-prelaunch-page-guide | Kickstarter Prelaunch Page Guide for Tabletop Games (same) | no | /kickstarter-prelaunch-marketing, "Kickstarter prelaunch marketing for tabletop games" (was /campaign-design) |
| kickstarter-prelaunch-page-vs-landing-page | Kickstarter Prelaunch Page vs Landing Page for Board Games (same) | no | /kickstarter-prelaunch-marketing, same label as above |
| kickstarter-prototype-risks-disclosure | **Kickstarter Risks and Challenges for Tabletop Games** | **yes: "Kickstarter Risks and Challenges: Show What Is Ready"** | /campaign-design, "Kickstarter campaign design for tabletop games" |
| kickstarter-reward-tier-graphics | Kickstarter Reward Tier Graphics for Board Games (same) | no | /campaign-design (was /card-game-kickstarter-campaign-design) |
| kickstarter-shipping-delivery-page | **Kickstarter Shipping: Explain Costs and Delivery** | no | /campaign-design |
| miniatures-stl-kickstarter-launch-guide | **Miniatures and STL Kickstarter Launch Guide** | no | /campaign-design (was /miniatures-kickstarter-campaign-design) |
| ttrpg-kickstarter-campaign-page-design | **TTRPG Kickstarter Page Design: What to Show** | no | /campaign-design (was /ttrpg-kickstarter-campaign-design) |
| what-to-send-kickstarter-campaign-designer | What to Send Your Kickstarter Campaign Designer (same) | no | /campaign-design |
| when-to-hire-kickstarter-campaign-designer | When to Hire a Kickstarter Campaign Designer (same) | no | /campaign-design |

Note: miniatures and TTRPG guides used to point at their category pages. I moved them to the pillar hub per the brief. If you would rather keep the internal link into `/ttrpg-kickstarter-campaign-design` (GSC pos 35.8) and `/miniatures-kickstarter-campaign-design`, revert those two `servicePath` values.

New descriptions (90 to 160 chars, checked): prelaunch page guide, prototype risks, shipping, what to send, when to hire. Others unchanged.

## Lead actions needed

1. **Dates do not render yet.** `reviseLaunchGuide` in `app/launch-guide-revisions.ts` overwrites every guide's `updated` with `contentDates.launchGuideReview` ("2026-10-28"), so the `"2026-11-25"` I set on the nine objects is ignored. Suggested fix (lead owned, since it touches all guides): add a content-dates key such as `seoPassNov25: "2026-11-25"` and keep a guide's own `updated` when it is later than the revision date, or list these nine slugs in the same way `growthUpdatedSlugs` works in `app/launch-guides.ts`. Then update `tests/static-output.test.mjs` dated pages for:
   - /guides/kickstarter-prelaunch-page-guide
   - /guides/kickstarter-prelaunch-page-vs-landing-page
   - /guides/kickstarter-prototype-risks-disclosure
   - /guides/kickstarter-reward-tier-graphics
   - /guides/kickstarter-shipping-delivery-page
   - /guides/miniatures-stl-kickstarter-launch-guide
   - /guides/ttrpg-kickstarter-campaign-page-design
   - /guides/what-to-send-kickstarter-campaign-designer
   - /guides/when-to-hire-kickstarter-campaign-designer
2. **Resource dates (not changed by me):** set to "2026-11-25"
   - `/resources/tabletop-campaign-launch-worksheet`: literal `modifiedTime` and `updated` in its page.tsx plus `app/sitemap.ts` line 41 and the test date map (all three must agree).
   - `/resources/tabletop-campaign-page-study`: `contentDates.campaignPageStudy` (also its published date; add a separate updated key if you want to keep Nov 6 as published).
   - `/resources/tabletop-shopify-metafield-schema`: `contentDates.metafieldSchema` is used for both published and modified; add e.g. `metafieldSchemaUpdated`.
3. **tests/static-output.test.mjs page list** (title | H1 snippet):
   - line 68: `"TTRPG Kickstarter Page Design: What to Show | Guildframe"`, H1 unchanged
   - line 77: `"Kickstarter Shipping: Explain Costs and Delivery | Guildframe"`, H1 unchanged
   - line 78: `"Kickstarter Risks and Challenges for Tabletop Games | Guildframe"`, H1 snippet `"Kickstarter Risks and Challenges"`
   - line 82: `"Miniatures and STL Kickstarter Launch Guide | Guildframe"`, H1 unchanged
4. **New page links go through `relatedSlugs`** (guide paragraphs are plain strings, so no inline links). They render only once the new guides are in `launchGuides`; until then the related list drops them. Added: `kickstarter-followers-before-launch` (prelaunch page guide, vs landing page), `board-game-tariffs-shipping-us` (shipping), `terrain-and-dice-kickstarter-launch-guide` (miniatures STL), `ttrpg-kickstarter-launch-guide` (TTRPG page design), `kickstarter-image-sizes` (reward tier graphics, what to send), `kickstarter-agency-cost` (when to hire). The copy names each guide in plain text where it fits.
5. **llms.txt** line 66: `- [Kickstarter Risks and Challenges: Show What Is Ready](https://guildframe.com/guides/kickstarter-prototype-risks-disclosure)`
6. **Intent map** line: `kickstarter risks`, `kickstarter risks and challenges` -> `/guides/kickstarter-prototype-risks-disclosure` (campaign page pillar, hub /campaign-design).
7. Guides and resources index entries: no change needed unless the index hardcodes the old prototype guide title (it reads from data as far as I can see).

## Sources checked today (Nov 25 2026)

- Kickstarter prelaunch page help (Promotion tab timing, one week recommendation, app omits description, no direct messages, prelaunch updates, launch email, preview and prelaunch URLs differ).
- Kickstarter reward help (3:2, 348 x 232 minimum, 50 MB, JPG PNG GIF; digital main tier cannot take shippable add ons; add ons only shown if they ship to the backer's country).
- Kickstarter shipping options help (Preferences tab, at pledge or later through a pledge manager, shipping counts toward goal, what to say when collecting later through a third party).
- Kickstarter campaign page guide on updates.kickstarter.com (Risks and Challenges outlines potential obstacles and how you plan to address them; transparency builds trust). Added as a source on the risks guide.
- Kickstarter release note, May 8 2026: TTRPG and STL subcategories across Games and Publishing. Added as a source on the TTRPG and miniatures guides.

## Not verified, so left out

- Whether Kickstarter's Risks and Challenges field is mandatory (no primary source says so; copy does not claim it).
- Any tariff figure on the shipping guide (it points to the tariffs guide instead of stating rates).
- Prices: none hardcoded; copy says "fixed price on our campaign design page".

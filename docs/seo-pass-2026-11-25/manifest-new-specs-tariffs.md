# Manifest: new-specs-tariffs

Branch `wt-new-specs-tariffs`. Two new guides, not registered anywhere. Sources were opened and checked on 25 Nov 2026.

## Files added

- `app/guides-new/kickstarter-image-sizes.ts`
- `app/guides-new/board-game-tariffs-shipping-us.ts`
- `docs/seo-pass-2026-11-25/manifest-new-specs-tariffs.md`

Both export `export const guide: LaunchGuide`, with `published` and `updated` set to `"2026-11-25"`. No shared registration file was edited.

## Guide 1: `kickstarter-image-sizes`

- title: Kickstarter Image Sizes and Video Specs (2026 Cheat Sheet)
- seoTitle: Kickstarter Image Sizes & Video Specs: 2026 Cheat Sheet (55 chars)
- description (149 chars): Kickstarter and Gamefound image sizes, reward image ratios and video limits in one table, taken from both help centres, plus the export sizes we use.
- tag: Campaign specs
- pillar: 3, Campaign page. servicePath `/campaign-design`, serviceLabel "Kickstarter and Gamefound campaign design"
- relatedSlugs: kickstarter-campaign-graphics-mobile-readability, kickstarter-campaign-video-planning, kickstarter-reward-tier-graphics
- Size: about 1,960 words as counted by the guide page (including the table). 3 visuals: stats (Kickstarter's five numbers), compare (reward crops), checklist (export). 6 FAQs. Reference table in the first section.
- Platform specs come only from the Kickstarter and Gamefound help centres (plus Kickstarter's own launch checklist post for the "under two minutes" video advice). Guildframe export sizes are labelled "our practice" in the table header, the visuals' captions and the copy.
- Sources: kickstarter.com/help/images; help.kickstarter.com articles 16236740 (story media), 16236688 (rewards), 16236743 (video and Discovery Mode), 16236633 (Spotlight); updates.kickstarter.com/12-things-you-must-do-before-launching-on-kickstarter/; help.gamefound.com articles 304 (project images) and 214 (detailed description).

## Guide 2: `board-game-tariffs-shipping-us`

- title: Board Game Tariffs and US Shipping in 2026: What Creators Need to Know
- seoTitle: Board Game Tariffs and US Shipping 2026: Creator Guide (54 chars)
- description (148 chars): What 2026 US tariff changes mean for board game creators: the IEEPA ruling, Section 301 at 12.5% on China, the end of de minimis and reward pricing.
- tag: Tariffs & shipping
- pillar: 1, Planning and costs. servicePath `/kickstarter-launch-services`, serviceLabel "Kickstarter launch services for tabletop games"
- relatedSlugs: kickstarter-shipping-delivery-page, board-game-kickstarter-reward-pricing, kickstarter-stretch-goals-planning
- Link to `/guides/selling-miniatures-internationally-vat-ioss`: that page is a custom route, not a `launchGuides` entry, so `relatedSlugs` would drop it. It is linked through the `sources` array instead (rendered as a link) and named in the de minimis section. If you want it in the related block, the renderer needs a change.
- Size: about 1,710 words. 3 visuals: timeline (dated 2025 to 2027), compare (where the tariff cost can sit), steps (pricing rewards around tariffs, with an example clearly labelled illustrative). 7 FAQs. The "not legal or customs advice, confirm with your freight forwarder or customs broker" line appears in the first section and in an FAQ.
- Sources: SCOTUSblog breakdown of the 20 Feb 2026 decision; Morgan Lewis (Section 122 from 24 Feb 2026, Section 301 from 24 Jul 2026); Thomson Reuters (China named at 12.5%); Federal Register 2026-12669 (postal informal entry) and 2026-12670 (other modes), both 24 Jun 2026; Kickstarter Tariff Manager post; Kickstarter help 16236621 (tariff surcharge); Kickstarter tariff tips post (Apr 2025); Guildframe VAT and IOSS guide.

## Registration the lead must do

- `app/launch-guides.ts`: import both `guide` exports and add them to the array.
- `app/content-dates.ts`: keys if you want them, for example `kickstarterImageSizes: "2026-11-25"` and `boardGameTariffsShippingUs: "2026-11-25"`. The guide objects already carry the date strings.
- `app/sitemap.ts`: covered automatically if it maps `launchGuides`; otherwise add `/guides/kickstarter-image-sizes` and `/guides/board-game-tariffs-shipping-us`.
- `app/guides/page.tsx`: add under Campaign page (image sizes) and Planning and costs (tariffs).
- `public/llms.txt`:
  - `- [Kickstarter Image Sizes and Video Specs](https://guildframe.com/guides/kickstarter-image-sizes)`
  - `- [Board Game Tariffs and US Shipping in 2026](https://guildframe.com/guides/board-game-tariffs-shipping-us)`
- `docs/SEARCH_INTENT_MAP.md`:
  - `/guides/kickstarter-image-sizes`: published image and video specs for Kickstarter and Gamefound (banner size, image dimensions, reward image size, video length, video production planning). Readability on mobile stays with `/guides/kickstarter-campaign-graphics-mobile-readability`; the video brief stays with `/guides/kickstarter-campaign-video-planning`.
  - `/guides/board-game-tariffs-shipping-us`: US tariffs, de minimis and the Kickstarter Tariff Manager for tabletop creators shipping to the US.
- `tests/static-output.test.mjs` page list:
  - `["/guides/kickstarter-image-sizes", "Kickstarter Image Sizes & Video Specs: 2026 Cheat Sheet | Guildframe", "Kickstarter Image Sizes and Video Specs"]`
  - `["/guides/board-game-tariffs-shipping-us", "Board Game Tariffs and US Shipping 2026: Creator Guide | Guildframe", "Board Game Tariffs and US Shipping in 2026"]`
  - date map: both `"2026-11-25"`.

## Cannibalisation to fix

The existing `/guides/kickstarter-campaign-graphics-mobile-readability` has the title "Kickstarter Image Sizes and Readable Campaign Graphics" and the seoTitle "Kickstarter Image Sizes & Mobile Graphics". It competes directly with the new guide. Suggest retitling it to "Readable Kickstarter Campaign Graphics on Mobile" (seoTitle "Readable Kickstarter Graphics on Mobile: Design Check"), adding `kickstarter-image-sizes` to its relatedSlugs, and updating its row in the test page list (line 70).

## Facts checked and how they were handled

- Supreme Court IEEPA ruling, 20 Feb 2026, 6 to 3: verified (SCOTUSblog; Kavanaugh, Thomas and Alito dissented). Used.
- Section 301 at 12.5% on goods from China from 24 Jul 2026: verified (Thomson Reuters and Orrick name China at 12.5%; effective 12:01 a.m. ET). The federalregister.gov notice 2026-15181 would not load, so the page cites law firm and Thomson Reuters summaries instead of the notice. Whether it stacks on the older China Section 301 duties is not stated in any source, so the page says to ask the broker.
- De minimis suspended since 29 Aug 2025; postal informal entry rule in the Federal Register on 24 Jun 2026 (effective 24 Jul 2026, $2,500 or less); exemption ends by law 1 Jul 2027 (One Big Beautiful Bill Act, 4 Jul 2025): verified on federalregister.gov. Used.
- Kickstarter Tariff Manager "Apr 28 2025": Kickstarter's post is dated 24 Apr 2025 and press coverage is dated 28 Apr 2025. The page says "April 2025" rather than either day.
- Dropped: IEEPA refund process (the ruling sets none; page only says to ask your broker), China's old IEEPA rate, any HTS code or base duty rate for board games, a Gamefound tariff tool (none found), Kickstarter profile or avatar image size and a Gamefound video length (neither published), and Gamefound's "1:3 ratio" video note (ambiguous wording).
- Note on the house writing skills: unslop, unslop-ui and impeccable live on Umair's Mac and no folder was connected to this session, so the copy follows the BRIEF voice rules only.

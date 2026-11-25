# Manifest: new-platforms agent (25 Nov 2026)

## Files added

- `app/guides-new/kickstarter-vs-gamefound.ts` (exports `guide: LaunchGuide`)
- `app/guides-new/pledge-managers-compared.ts` (exports `guide: LaunchGuide`)
- `docs/seo-pass-2026-11-25/manifest-new-platforms.md`

No shared registration file was edited. Both guides set `published` and `updated` to `"2026-11-25"` on the object.

## New slugs

### 1. `kickstarter-vs-gamefound`

- title: Kickstarter vs Gamefound for Board Games in 2026
- seoTitle: Kickstarter vs Gamefound for Board Games in 2026 (48 chars)
- description (155 chars): Kickstarter vs Gamefound for board games in 2026: fees, audience, pledge managers, Adfound and Jellop ads, the Indiegogo deal and which one fits your game.
- tag (category): Platform planning
- pillar: 4 Platforms, hub `/gamefound-launch-services` (servicePath), serviceLabel "Gamefound launch services for tabletop creators"
- targets: "kickstarter vs gamefound", "gamefound vs kickstarter"
- 8 sections, about 1,670 words (renderer count), 3 visuals (stats on fees, compare by genre, checklist), 1 table (ad routes), 6 FAQs
- relatedSlugs: kickstarter-vs-gamefound-campaign-page-design, gamefound-launch-page-checklist, pledge-managers-compared, kickstarter-advertising-budget-board-games
- sources (all opened 25 Nov 2026):
  1. Kickstarter fees and payment processing: https://help.kickstarter.com/en-us/articles/16236674-what-are-the-fees
  2. Fees for projects funded on Gamefound (last updated Aug 10 2026): https://help.gamefound.com/article/284-fees-for-projects-funded-on-gamefound
  3. Adfound fees and billing: https://help.gamefound.com/article/415-adfound-fees-and-billing
  4. Kickstarter and Jellop (Jan 8 2025): https://updates.kickstarter.com/kickstarter-and-jellop-2/
  5. Gamefound acquires Indiegogo, PR Newswire (Jul 24 2025): https://www.prnewswire.com/news-releases/gamefound-acquires-indiegogo-a-groundbreaking-leap-forward-for-global-creativity-and-creator-empowerment-302511967.html
  6. Gamefound pledge manager and Late Pledge for external campaigns: https://help.gamefound.com/article/299-getting-started-with-pledge-manager-and-late-pledge-for-imported-projects

### 2. `pledge-managers-compared`

- title: Pledge Managers Compared: Kickstarter, BackerKit, Gamefound, PledgeBox
- seoTitle: Pledge Managers Compared: BackerKit, Kickstarter, PledgeBox (59 chars)
- description (157 chars): Compare pledge managers for tabletop campaigns: Kickstarter's own, BackerKit, Gamefound and PledgeBox, with published fees, 2026 features and which one fits.
- tag (category): Pledge management
- pillar: 5 After funding, hub `/post-campaign-support` (servicePath), serviceLabel "Post campaign support for funded tabletop games"
- targets: "backerkit", "pledge manager", "pledgemanager", "backerkit crowdfunding"
- 7 sections, about 1,480 words (renderer count), 3 visuals (timeline of Kickstarter Pledge Manager releases, compare of four tools, "which one fits" checklist), 1 list, 7 FAQs
- relatedSlugs: board-game-pledge-manager-checklist, kickstarter-vs-gamefound, kickstarter-shipping-delivery-page, kickstarter-live-campaign-updates
- sources (all opened 25 Nov 2026), 8 in total, two over the 3 to 6 target because each vendor's fees need its own primary page:
  1. Bringing the Kickstarter Pledge Manager to all creators (May 8 2025): https://updates.kickstarter.com/bringing-the-kickstarter-pledge-manager-to-all-creators/
  2. Kickstarter release notes (Aug 20, Oct 13, Oct 28 2026 entries; also Mar 12, Mar 31, Jun 1 via the pledge manager tag page): https://start.kickstarter.com/kickstarter-release-notes
  3. Kickstarter fees, including Pledge Manager fees: https://help.kickstarter.com/en-us/articles/16236674-what-are-the-fees
  4. BackerKit pledge manager pricing: https://backerkit.com/pricing/pledge_manager
  5. DriveThruRPG integration comes to BackerKit Pledge Manager (Oct 6 2026, says the integration launched in June): https://blog.backerkit.com/drivethrurpg-integration-backerkit-pledge-manager/
  6. Gamefound pledge manager and Late Pledge for external campaigns: https://help.gamefound.com/article/299-getting-started-with-pledge-manager-and-late-pledge-for-imported-projects
  7. Fees for projects funded on Gamefound: https://help.gamefound.com/article/284-fees-for-projects-funded-on-gamefound
  8. PledgeBox pricing: https://www.pledgebox.com/pricing

## Registration the lead needs to do

1. `app/launch-guides.ts`: import both (`import {guide as kickstarterVsGamefound} from "./guides-new/kickstarter-vs-gamefound"; import {guide as pledgeManagersCompared} from "./guides-new/pledge-managers-compared";`) and add them to the `originalLaunchGuides` array. Register both together, because each lists the other in `relatedSlugs`.
2. `app/content-dates.ts`: keys for `/guides/kickstarter-vs-gamefound` and `/guides/pledge-managers-compared`, published and updated 2026-11-25 (only if the date test reads from there; the guide objects already carry the dates).
3. `app/sitemap.ts`: both `/guides/<slug>` routes (if not generated from `launchGuides`).
4. `app/guides/page.tsx`: index entries.
   - "Kickstarter vs Gamefound for Board Games in 2026" under platform planning
   - "Pledge Managers Compared: Kickstarter, BackerKit, Gamefound, PledgeBox" under after funding
5. `public/llms.txt` lines:
   - `- [Kickstarter vs Gamefound for Board Games in 2026](https://guildframe.com/guides/kickstarter-vs-gamefound): fees, audience, pledge managers, Adfound and Jellop ads, the Indiegogo deal and which platform fits a tabletop game.`
   - `- [Pledge Managers Compared](https://guildframe.com/guides/pledge-managers-compared): Kickstarter's Pledge Manager, BackerKit, Gamefound and PledgeBox with published fees, 2026 features and a fit checklist.`
6. `docs/SEARCH_INTENT_MAP.md` lines:
   - `/guides/kickstarter-vs-gamefound`: which platform to launch on (fees, audience, after funding tools, ads). Page design differences stay with `/guides/kickstarter-vs-gamefound-campaign-page-design`.
   - `/guides/pledge-managers-compared`: which pledge manager to use and what each charges. The selection test stays with `/guides/board-game-pledge-manager-checklist`; BackerKit vs Shopify store questions stay with `/guides/backerkit-vs-shopify-vs-gamefound`.
7. `tests/static-output.test.mjs`: add both routes to the page list and date map with 2026-11-25.

## Suggested contextual links (for the lead or the owners of those pages)

The guide renderer prints paragraphs as plain text, so the custom pages below are not linked from inside these guides. Linking the other way would help:
- `/guides/backerkit-vs-shopify-vs-gamefound` and `/guides/kickstarter-late-pledges-vs-shopify` to `/guides/pledge-managers-compared`
- `/guides/kickstarter-vs-gamefound-campaign-page-design`, `/guides/gamefound-launch-page-checklist` and `/gamefound-launch-services` to `/guides/kickstarter-vs-gamefound`
- `/guides/board-game-pledge-manager-checklist` and `/post-campaign-support` to `/guides/pledge-managers-compared`

## Facts checked and left out

- Indiegogo's help centre gives the acquisition date as July 22, 2025; the PR Newswire release is dated July 24, 2025. The guide says Gamefound "announced" the purchase on July 24, 2025.
- Gamefound's crowdfunding processing fee wording ("a fixed fee ... + 0.2") is unclear on its own fee page, so the guide only says "plus a payment processing fee on each transaction". Gamefound publishes no pledge manager fee for campaigns funded elsewhere, so the guide tells readers to confirm it.
- Kickstarter's help page gives processing as "roughly 3 to 5%". The exact Stripe split is not stated there, so it is not used.
- Jellop's exact revenue percentage is not published on Kickstarter's pages, so the guide gives none.
- BackerKit's Discord integration (blog post Oct 28 2026) is verified but is a BackerKit Crowdfunding feature, not a pledge manager feature, so it was left out to keep the page on topic.
- Crowd Ox joined BackerKit in November 2020 (BackerKit blog) and publishes no fees on crowdox.com. Left out because it would have been a ninth source for one sentence.
- BackerKit does not publish payment processing on its pledge manager pricing page; the guide says so.
- No Guildframe prices appear in either guide, following CONTRIBUTING.md.

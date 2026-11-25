# Manifest: new-prelaunch-ttrpg

Branch `wt-new-prelaunch-ttrpg`. Two new data guides, not registered anywhere. All external facts were opened and checked on November 25, 2026.

## Files added

- `app/guides-new/kickstarter-followers-before-launch.ts` (exports `guide: LaunchGuide`)
- `app/guides-new/ttrpg-kickstarter-launch-guide.ts` (exports `guide: LaunchGuide`)
- `docs/seo-pass-2026-11-25/manifest-new-prelaunch-ttrpg.md` (this file)

No shared registration file was edited.

## Guide 1

- Slug: `kickstarter-followers-before-launch`
- Title (H1): How Many Kickstarter Followers Do You Need Before Launch?
- seoTitle (54 chars): Kickstarter Followers Before Launch: How Many You Need
- Description (141 chars): How many Kickstarter followers you need before launch, using published conversion figures, three scenarios and a worked funding goal example.
- Tag: Prelaunch
- Pillar: Prelaunch, hub `/kickstarter-prelaunch-marketing` (also the `servicePath`, label "Kickstarter prelaunch marketing")
- Related slugs: `kickstarter-prelaunch-email-list`, `kickstarter-prelaunch-page-guide`, `board-game-kickstarter-funding-goal`
- Visuals: bars (low, typical, strong conversion scenarios, labelled with sources; the low 10% case is labelled as a Guildframe planning assumption), bars (worked example, $15,000 goal at $50 average pledge, labelled illustrative), steps (growing followers)
- FAQs: 6. Words: about 1,580 by the page's own count, about 1,930 including visuals.
- Sources:
  - Kickstarter, The Anatomy of a Great Kickstarter Prelaunch Page (Oct 29, 2025): 32% of prelaunch followers pledge vs 17% of post launch followers; almost twice as likely to back. https://updates.kickstarter.com/the-anatomy-of-a-great-kickstarter-prelaunch-page/
  - Kickstarter Help, Setting up your project's prelaunch page: Promotion tab after approval for first time creators, share at least one week ahead, no direct messaging of followers, prelaunch updates notify followers, count shows at 10+ followers. https://help.kickstarter.com/en-us/articles/16236379-setting-up-your-project-s-pre-launch-page
  - BackerKit (Feb 24, 2020): on average 20 to 25% of prelaunch followers pledge. https://blog.backerkit.com/take-full-advantage-of-kickstarters-pre-launch-page-to-promote-your-upcoming-project/
  - Stonemaier Games, KS Lesson #281 (Dec 18, 2023): Gamefound 24% with follower gift, 32% without; LaunchBoom newsletter 5 to 10%, $1 presale 35 to 45%. https://stonemaiergames.com/prelaunch-promos-accessories-and-expansions-ks-lesson-281/
  - Stonemaier Games, Meepify, Matchmaking, and Knowing the Size of Your Audience (Jun 29, 2020): list of 10,000+ can still fail; "You simply don't know." https://stonemaiergames.com/meepify-matchmaking-and-knowing-the-size-of-your-audience/
  - LaunchBoom, How Long Should a Prelaunch Take? (2025 update): standard prelaunch 2 to 4 months; 20 to 40% of funding from the platform. https://www.launchboom.com/crowdfunding-tips/how-long-should-a-prelaunch-take-updated/
  - LaunchBoom, How to Build a Prelaunch Email List: $1 reservations 30 times more likely to convert. https://www.launchboom.com/crowdfunding-tips/how-to-build-a-prelaunch-email-list
  - BackerKit, From Followers to Funded (Sep 10, 2025): a creator's reservation holders were over 12x more likely to pledge. https://blog.backerkit.com/from-followers-to-funded-4-new-crowdfunding-features-to-grow-and-activate-your-audience/

## Guide 2

- Slug: `ttrpg-kickstarter-launch-guide`
- Title (H1): TTRPG Kickstarter Launch Guide (2026)
- seoTitle (51 chars): TTRPG Kickstarter Launch and Marketing Guide (2026)
- Description (151 chars): Plan a TTRPG Kickstarter: the new RPG subcategory, Zine Quest or Zinetopia, PDF delivery through DriveThruRPG, audience channels and a launch timeline.
- Tag: RPG launches
- Pillar: Planning and costs, hub `/kickstarter-launch-services` (linked from the `sources` array as "Kickstarter launch services for tabletop games" and named in the last section). `servicePath` `/ttrpg-kickstarter-campaign-design`, label "TTRPG Kickstarter page design".
- Related slugs: `ttrpg-kickstarter-campaign-page-design`, `kickstarter-followers-before-launch` (new, guide 1), `kickstarter-prelaunch-email-list`
- Targets: "ttrpg marketing" (pos 63), "how to promote an RPG Kickstarter", "ttrpg kickstarter"
- Visuals: compare (Zine Quest vs Zinetopia 2027 vs own date), checklist (RPG page readiness), timeline (example 12 week schedule, labelled as a Guildframe example)
- FAQs: 6. Words: about 1,450 by the page's own count, about 1,950 including visuals.
- Sources:
  - Kickstarter release note, New Games and Publishing subcategories: TTRPG, STL, and Audiobooks (May 8, 2026). https://start.kickstarter.com/kickstarter-release-notes/new-games-publishing-subcategories-ttrpg-stl-and-audiobooks
  - Kickstarter release notes: Backer Self-Serve Add-Ons (Aug 20, 2026), Edit Your Backers' Orders (Oct 28, 2026). https://start.kickstarter.com/kickstarter-release-notes
  - Kickstarter, Zine Quest 2026 (Jan 7, 2026): annual February open call, form, curated collection. https://updates.kickstarter.com/zine-quest-2026-create-your-own-rpg-adventure/
  - BackerKit, Zinetopia 2027: Feb 2 to 19, 2027; applications through Jan 4, 2027; BackerKit only; new products, no reprints; banner freebie. https://www.backerkit.com/c/events/zinetopia-2027
  - BackerKit blog, DriveThruRPG integration (Jun 23, 2026): instant access rewards on BackerKit Crowdfunding. https://blog.backerkit.com/backerkit-drivethrurpg-integration/
  - BackerKit Help, DriveThruRPG in the Pledge Manager: publisher account, application key with Distribution on, Product ID, manual start, accounts created from order email. https://help.backerkit.com/article/973-how-do-i-integrate-with-drivethrurpg-in-pledge-manager
  - Kickstarter, The Anatomy of a Great Kickstarter Prelaunch Page (Oct 29, 2025): 32% stat.
  - Kickstarter Help, Setting up your project's prelaunch page: one week, approval timing.
  - Guildframe, `/kickstarter-launch-services` (pillar link).

## Registration the lead needs to do

1. `app/launch-guides.ts`: import both and add them to `originalLaunchGuides`, for example
   `import {guide as followersBeforeLaunch} from "./guides-new/kickstarter-followers-before-launch";`
   `import {guide as ttrpgLaunchGuide} from "./guides-new/ttrpg-kickstarter-launch-guide";`
   then `...[followersBeforeLaunch, ttrpgLaunchGuide],` in the array. Neither slug is in `growthUpdatedSlugs`, so `updated` stays "2026-11-25". The sitemap and `/guides` index pick them up from `launchGuides` automatically.
2. `app/content-dates.ts`: no key needed; dates live on the guide objects (`published` and `updated` "2026-11-25"). Add keys only if the lead wants every date centralised.
3. `public/llms.txt`:
   - Marketing guides: `- [How many Kickstarter followers you need before launch](https://guildframe.com/guides/kickstarter-followers-before-launch)`
   - Next to the TTRPG page design guide: `- [TTRPG Kickstarter launch guide (2026)](https://guildframe.com/guides/ttrpg-kickstarter-launch-guide)`
4. `docs/SEARCH_INTENT_MAP.md`:
   - `/guides/kickstarter-followers-before-launch`: how many prelaunch followers before launch, follower to backer conversion, follower targets from a funding goal. Pillar `/kickstarter-prelaunch-marketing`.
   - `/guides/ttrpg-kickstarter-launch-guide`: ttrpg marketing, how to promote an RPG Kickstarter, ttrpg kickstarter, Zine Quest and Zinetopia, RPG PDF delivery. Page design intent stays with `/guides/ttrpg-kickstarter-campaign-page-design`. Pillar `/kickstarter-launch-services`.
   - Update the guide count line.
5. `tests/static-output.test.mjs`:
   - pages: `["/guides/kickstarter-followers-before-launch", "Kickstarter Followers Before Launch: How Many You Need | Guildframe", "How Many Kickstarter Followers Do You Need Before Launch?"]`
   - pages: `["/guides/ttrpg-kickstarter-launch-guide", "TTRPG Kickstarter Launch and Marketing Guide (2026) | Guildframe", "TTRPG Kickstarter Launch Guide (2026)"]`
   - date map: both paths `"2026-11-25"` (check the line 569 filter, which defaults guides to "2026-10-03"; add both paths to its exclusion list).
6. Optional contextual links: add `kickstarter-followers-before-launch` to `relatedSlugs` of `kickstarter-prelaunch-email-list` and `kickstarter-prelaunch-page-guide`; add `ttrpg-kickstarter-launch-guide` to `relatedSlugs` of `ttrpg-kickstarter-campaign-page-design`. A `nextSteps` entry in `app/components/ArticleNextStep.tsx` is optional.

## Facts checked and handled with care

- Zine Quest 2027: no 2027 announcement found on Kickstarter on Nov 25, 2026. The guide says so and tells readers to check in January. Revisit in January 2027.
- The Zine Quest 2026 page still says "2025" in its window and join heading (a typo on Kickstarter's side). The guide only says "In 2026, creators launched during February".
- The release note lists the subcategory as "TTRP" in its body and "TTRPG" in the title, and does not say which parent category it sits under. The guide calls it a "tabletop roleplaying game subcategory" and does not name a parent.
- BackerKit's DriveThruRPG instant access works only on BackerKit Crowdfunding. The pledge manager integration is documented without naming Kickstarter, so the guide says "if your pledge manager runs on BackerKit".
- BackerKit's 20 to 25% figure is from 2020; the guide dates every figure. The 10% low case is labelled as a Guildframe assumption, not a benchmark.
- Not used (could not verify from a primary source today or not needed): Stonemaier guest post "~10% at the start" (unattributed), EN World follower threads, PAX Unplugged and other convention dates.
- Prices are not hardcoded (per CONTRIBUTING); the service is described by scope only.

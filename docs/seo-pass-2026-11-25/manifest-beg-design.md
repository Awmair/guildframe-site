# Manifest: beg-design

Branch `wt-beg-design`. Two new beginner guides from `beginner-plan.md` briefs 4.3 and 4.4. Not registered anywhere. Every external source was reopened on 25 Nov 2026.

## Files added

- `app/guides-new/how-to-design-a-kickstarter-page.ts`
- `app/guides-new/is-my-game-ready-for-kickstarter.ts`
- `docs/seo-pass-2026-11-25/manifest-beg-design.md`

Both export `export const guide: LaunchGuide` with `published` and `updated` set to `"2026-11-25"`. No shared registration file was edited.

## Guide 1: `how-to-design-a-kickstarter-page`

- title: How to Design a Good Kickstarter Page for Your Board Game
- seoTitle: How to Design a Kickstarter Page for a Board Game (49 chars)
- description (141 chars): How to design a good Kickstarter page for a board game. What goes first, what backers look for and how to make it look professional yourself.
- tag: New to Kickstarter
- pillar: 3, Campaign page. servicePath `/campaign-design`, serviceLabel "Kickstarter campaign design for tabletop games". Last section links the hub with the anchor "Kickstarter campaign design" and names the $1,800 package, $5,900 full support and the free opening mockup.
- relatedSlugs: board-game-kickstarter-page-checklist, board-game-kickstarter-gameplay-rulebook, kickstarter-reward-tier-graphics, when-to-hire-kickstarter-campaign-designer
- Size: about 1,850 words by the guide page's own count. 3 visuals: steps (backer reading order), checklist (what stays consistent), compare (do it yourself, $1,800 page package, $5,900 full support). 7 FAQs.
- Case studies used, wording taken from `app/case-studies.ts` only: Cryptic Explorers (header content, characters before rules), FutureProof Terrain (assembled build beside separate parts), Quiver Time (fit and capacity beside the product). No results claimed.
- Sources: help.kickstarter.com 16236738 (what to share on a project page); updates.kickstarter.com "How to tell your campaign story" (9 Feb 2025); "Guide to the Kickstarter campaign page" (9 Feb 2025); kickstarter.com/help/images (1024 × 576, no banners or text); "12 things you must do before launching" (13 Feb 2025: video under 2 minutes, preview feedback, reward tiers locked after a pledge); Guildframe case studies `/work/cryptic-explorers`, `/work/futureproof-terrain`, `/work/quiver-time`.

## Guide 2: `is-my-game-ready-for-kickstarter`

- title: Is My Game Ready for Kickstarter? What You Need Before You Launch
- seoTitle: What You Need Before Launching a Kickstarter Board Game (55 chars)
- description (142 chars): What you need before you launch a board game on Kickstarter: how finished the game should be, how much art, and whether a prototype is enough.
- tag: New to Kickstarter
- pillar: 1, Planning and costs. servicePath `/kickstarter-launch-services`, serviceLabel "Kickstarter launch services for tabletop games" (same phrase used as the in-copy anchor in the last section).
- relatedSlugs: kickstarter-prototype-risks-disclosure, board-game-kickstarter-funding-goal, kickstarter-followers-before-launch, board-game-kickstarter-gameplay-rulebook
- Size: about 1,620 words. 3 visuals: checklist (four groups: game, look, numbers, people), compare (must have, should have, can wait), timeline (three month example, labelled illustrative). 7 FAQs.
- Sources: updates.kickstarter.com "How to playtest your board game" (14 May 2026: friends and family quote, blind tests, written rules test, no set number of sessions); "How to tell your campaign story" (well planned and achievable, development stage); help.kickstarter.com 16236428 (hardware and product design rules, scoped to those categories, games not mentioned); "Why Kickstarter campaigns fail after funding" (3 Jun 2026: fulfillment quotes before pricing, 8 to 10 percent fees, 20 to 30 percent contingency, about twelve months overseas manufacturing, simple stretch goals); "From concept to fulfillment" (9 Sep 2026: activate the prelaunch page early); "12 things" (reward tiers locked after a pledge); "How to market a tabletop game in 7 steps" (20 Feb 2025: rough prototype early, test it).

## Links to pages that do not exist yet

Both guides link beginner slugs named in the plan, which must be live before or with these pages: `/guides/how-to-launch-a-board-game-on-kickstarter` (both), `/guides/board-game-kickstarter-cost`, `/guides/how-to-get-kickstarter-backers`, `/guides/when-to-launch-a-kickstarter` (READY only). Every other target was checked against `launchGuides`, `caseStudies` and the app routes.

## Registration the lead must do

- `app/launch-guides.ts`: import both `guide` exports and add them to the array.
- `app/content-dates.ts` (optional): `howToDesignAKickstarterPage: "2026-11-25"`, `isMyGameReadyForKickstarter: "2026-11-25"`. Date strings are already on the guide objects.
- `app/sitemap.ts`: covered if it maps `launchGuides`; otherwise add both `/guides/...` paths.
- `app/guides/page.tsx`: the plan's "New to Kickstarter" group, or Campaign page (design) and Planning and costs (ready).
- `public/llms.txt`:
  - `- [How to Design a Good Kickstarter Page for Your Board Game](https://guildframe.com/guides/how-to-design-a-kickstarter-page)`
  - `- [Is My Game Ready for Kickstarter? What You Need Before You Launch](https://guildframe.com/guides/is-my-game-ready-for-kickstarter)`
- `docs/SEARCH_INTENT_MAP.md`:
  - `/guides/how-to-design-a-kickstarter-page`: beginner page design (how do I design a good Kickstarter page, what makes a good page, what to include, can I design it myself, how to look professional, page length, what goes at the top). The final check stays with `/guides/board-game-kickstarter-page-checklist`; image sizes with `/guides/kickstarter-image-sizes`; mobile graphics with `/guides/kickstarter-campaign-graphics-mobile-readability`; reward graphics with `/guides/kickstarter-reward-tier-graphics`; TTRPG pages with `/guides/ttrpg-kickstarter-campaign-page-design`; the service intent with `/campaign-design`.
  - `/guides/is-my-game-ready-for-kickstarter`: readiness of the game itself (is my game ready, what do I need before I launch, can I launch with a prototype, how much art, how much playtesting, do I need a manufacturer quote). Prototype labelling and the risks section stay with `/guides/kickstarter-prototype-risks-disclosure`; designer handover with `/guides/what-to-send-kickstarter-campaign-designer`.
- `tests/static-output.test.mjs` page list:
  - `["/guides/how-to-design-a-kickstarter-page", "How to Design a Kickstarter Page for a Board Game | Guildframe", "How to Design a Good Kickstarter Page"]`
  - `["/guides/is-my-game-ready-for-kickstarter", "What You Need Before Launching a Kickstarter Board Game | Guildframe", "Is My Game Ready for Kickstarter?"]`
  - date map: both `"2026-11-25"`.
- Suggested links in (plan section 4.3 and 4.4, owners keep their scope): `/campaign-design`, `/board-game-kickstarter-campaign-design`, `board-game-kickstarter-page-checklist` first section and `when-to-hire-kickstarter-campaign-designer` FAQ to the design guide; `kickstarter-prototype-risks-disclosure` opening sentence and `what-to-send-kickstarter-campaign-designer` to the ready guide.

## Facts checked and how they were handled

- Gamefound blog "First impression matters" returned only metadata: not used.
- kickstarter.com/rules could not be fetched; the prototype point uses the hardware and product design help article and says its scope plainly.
- Kickstarter AI art policy: not checked, question left out (plan section 7 gap).
- No page length figure exists in Kickstarter's guides; the page says so rather than inventing one.
- The three month plan, the reading order and the must have grouping are Guildframe's own practice and are captioned that way.
- House writing skills (unslop, unslop-ui, impeccable) live on Umair's Mac and no folder was connected, so the copy follows the BRIEF voice rules only.

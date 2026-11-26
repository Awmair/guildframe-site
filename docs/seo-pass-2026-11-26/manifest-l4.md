# Manifest l4: visual layers (26 Nov 2026)

One file per guide in `app/guide-layers/<slug>.ts`, each `updated: "2026-11-26"`. All twelve parse with tsx, pass `tsc --strict` against `GuideLayer`, render through `GuideVisual` with react-dom/server, and key only on section ids that exist in the final rendered guide. No shared file edited. The lead still needs to register each layer in `app/guide-visual-layer-data.ts`.

Checks run on the layered result: no paragraph over 3 sentences or 60 words, no sentence over 30 words, no em or en dash, no visible hyphenated compound, no banned words, no Fiverr, every original section link kept.

## Guides done

| Guide | Visuals after layer | Added in this layer | Takeaways | Other changes |
|---|---|---|---|---|
| pledge-managers-compared | 6 | bars (Example fee sum on $10,000 survey spend), tips (five checks before you sign), flow (four questions to pick a pledge manager) | 8/8 | New section `before-you-sign` inserted after `compare`; 5 walls split |
| tcg-kickstarter-launch-guide | 6 | steps (reward ladder), tips (organized play decisions), flow (what the page can promise about boosters) | 8/8 | 4 walls split |
| terrain-and-dice-kickstarter-launch-guide | 6 | steps (modular parts to builds), flow (which images can go on the page), tips (add on groups) | 8/8 | 6 walls split |
| ttrpg-kickstarter-launch-guide | 6 | tips (2026 Kickstarter changes), flow (PDF delivery route), bars (32% vs 17% follower conversion) | 7/7 | 7 walls split |
| when-to-launch-a-kickstarter | 6 | tips (day and time), stats (campaign length), flow (keep or move the date) | 9/9 | 6 walls split; "your game" widened to "your project" where rewritten |
| why-kickstarter-campaigns-fail | 6 | steps (four questions a page answers), flow (relaunch decision), tips (after funding warnings) | 11/11 | 9 walls split; widened to "your project" where rewritten |
| what-to-send-kickstarter-campaign-designer | 4 | tips (artwork folder habits), flow (free mockup now or full project) | 5/5 | 1 wall split; widened to "project" in summary |
| kickstarter-reward-tier-graphics | 5 | tips (phone checks), checklist (graphics vs reward records), flow (can a mixed bundle appear) | 7/7 | Added link to /guides/kickstarter-image-sizes (was plain text) |
| ttrpg-kickstarter-campaign-page-design | 5 | tips (sample pages), flow (four reward format checks), compare (tone to look) | 6/6 | Added link to /guides/ttrpg-kickstarter-launch-guide (was plain text) |
| kickstarter-vs-gamefound-campaign-page-design | 5 | compare (preview link vs prelaunch page), steps (Gamefound stages), tips (export habits), flow (ready to go public) | 7/7 | 4 walls split |
| kickstarter-campaign-graphics-mobile-readability | 5 | flow (animated or detailed graphic checks), tips (fresh reader test), compare (table of contents by context) | 8/8 | 1 wall split |
| when-to-hire-kickstarter-campaign-designer | 5 | tips (three reviews after upload), flow (DIY or hire), stats (prelaunch lead time) | 6/6 | Added links to /campaign-design and /guides/kickstarter-agency-cost (were plain text) |

Every guide now has at least one flow and one tips block, and 4 to 6 visuals in total.

## Facts and sources

No new external facts. Every figure in a new visual comes from the guide's own text and sources. Illustrative numbers are labelled "Example" (pledge manager fee bars, TCG printer caption). Guildframe planning figures (6 to 12 weeks prelaunch) are labelled as our planning example.

## Skipped

- No existing visual, list or table removed, because the layer can only replace or append. The `test` section list in the mobile readability guide stays, so I put that guide's flow on media checks to avoid repeating it.
- Workbook entries: not part of the layer brief, so none written.

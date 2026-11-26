# Manifest l1: visual layers for 12 existing guides (26 Nov 2026)

Files added: `app/guide-layers/<slug>.ts` for each guide below, each exporting `layer: GuideLayer` with `updated: "2026-11-26"`.
The lead must register each one in `app/guide-visual-layer-data.ts` (I did not edit it).

Checks run on every file: tsx import plus the brief's section id check (no missing ids), `tsc --noEmit -p .` (no errors in guide-layers), and a script that applies the layer to the final guide and checks for dashes, visible hyphenated compounds, "48 hours", banned words, paragraphs over 3 sentences or about 60 words, and lost `[text](/path)` links. Every original inline link is kept. No new external facts. Every number comes from the guide's own text and sources, or carries an "Example", "hypothetical" or "illustrative" label.

| Guide | Visuals before | Added | Total | Takeaways |
|---|---|---|---|---|
| board-game-kickstarter-funding-goal | steps, split | tips (base promise), stats (US fees), flow (stress test) | 5 | 7 of 7 |
| board-game-kickstarter-reward-pricing | split, compare | checklist (reward sheet), flow (keep a tier?), compare (shipping at pledge or later), tips (showing prices) | 6 | 8 of 8 |
| kickstarter-referral-tags-tracking | steps, compare, bars | flow (which tracker for this link), tips (link testing) | 5 | 7 of 7 |
| board-game-reviewer-outreach | timeline, compare | flow (pitch this reviewer?), steps (example pitch in five lines), tips (using reviewer content) | 5 | 5 of 5 |
| board-game-kickstarter-launch-day-checklist | timeline, steps, checklist | flow (when the prelaunch page can go live), stats (review timing), tips (days 1 to 3) | 6 | 10 of 10 |
| board-game-pledge-manager-checklist | timeline, checklist | flow (shortlisting a pledge manager), compare (Late Pledge, Pledge Manager, Shopify store), tips (backer message) | 5 | 6 of 6 |
| choose-board-game-kickstarter-marketing-agency | compare | tips (format questions), steps (total commitment), compare (commission base), flow (in house or book help) | 5 | 11 of 11 |
| kickstarter-prelaunch-page-vs-landing-page | compare, steps | checklist (prelaunch page checks), tips (sample by game type), flow (where a link should point) | 5 | 7 of 7 |
| board-game-kickstarter-marketing-plan | steps, compare | stats (three lead times), flow (staged ad budget release), tips (something to play or read) | 5 | 9 of 9 |
| kickstarter-prelaunch-email-list | compare, bars | tips (signup promise and email tool), flow (can the list carry its share), checklist (who owns what) | 5 | 11 of 11 |
| kickstarter-advertising-budget-board-games | split, stats | checklist (separate cost lines), flow (reviewing a capped test), tips (reading ad reports) | 5 | 7 of 7 |
| kickstarter-live-campaign-updates | timeline | stats (update rhythm and floor), flow (post this update?), tips (quiet middle posts), checklist (new promise checks) | 5 | 10 of 10 |

Every guide now has at least 1 flow and 1 tips block, and 5 or 6 visuals in total.

## Text changes
- Long paragraphs (over 3 sentences or about 60 words) were split or moved into tips, flows, steps and checklists. Examples: the reviewer pitch example became a steps visual, the delay update example and the Harbour Council welcome email were split into shorter paragraphs, and the agency cost formula became a steps visual.
- A few original sentences of 28 to 33 words remain where the paragraph rule was already met (mostly sentences with long link text). I left them alone to avoid churn.
- Lead-in sentences were checked against the render order (paragraphs, list, visuals, takeaway, table), so "below" and "after it" point the right way.

## Skipped
- Nothing skipped. No `insertAfter` sections were needed.
- No web verification was needed, because no new external facts were added. The flows and tips reuse platform rules already sourced in each guide (Kickstarter review timing, prelaunch approval, fees, Pledge Manager and Late Pledge rules, Gamefound Late Pledge, referral tags).

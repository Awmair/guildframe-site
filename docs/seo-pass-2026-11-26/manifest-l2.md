# Manifest l2: visual layers for 12 existing guides (26 Nov 2026)

All files are new, in `app/guide-layers/<slug>.ts`, each exporting `layer: GuideLayer` with `updated: "2026-11-26"`. No shared file edited. The lead needs to register each slug in `app/guide-visual-layer-data.ts`.

Every guide checked: parses with tsx, every keyed section id exists, the applied layer renders through `applyVisualLayer`, no dashes, no visible hyphenated compounds, no banned words, no paragraph over 3 sentences or about 60 words, `tsc` reports no errors in the layer files. URLs, titles, seoTitles, descriptions and facts unchanged. No new facts were added. Every number comes from the guide's own text and sources, or is labelled as Guildframe's planning example.

| Guide | Visuals before | Added | Total | Takeaways | Paragraphs rewritten |
|---|---|---|---|---|---|
| kickstarter-prelaunch-page-guide | compare, timeline | steps (preview reader tasks), flow (ready to share prelaunch page), tips (prelaunch updates) | 5 | 6/6 | timing |
| board-game-kickstarter-gameplay-rulebook | steps, compare | checklist (facts backers check first), flow (when a draft rulebook can go on the page), tips (quoting previews) | 5 | 6/6 | facts |
| kickstarter-campaign-video-planning | stats, steps | flow (which production work you need), tips (proof by tabletop category), tips (muted and small screen checks) | 5 | 9/9 | jobs, video-production-options, brief |
| kickstarter-stretch-goals-planning | timeline, compare | compare (Kickstarter vs Gamefound stretch goals), flow (stretch goal, add on or base game), tips (stretch goal graphics) | 5 | 8/8 | base-game, examples, platforms |
| kickstarter-shipping-delivery-page | compare, timeline | flow (charge shipping at pledge or later), tips (shipping sentence), checklist (four places shipping must agree, delay update parts) | 5 | 6/6 | none needed |
| kickstarter-prototype-risks-disclosure | compare, steps | checklist (labels by category), flow (do hardware rules apply), tips (describing progress) | 5 | 7/7 | none needed |
| kickstarter-review-launch-timeline | timeline | timeline (planning example: email list, prelaunch page, review), flow (when to announce a date), tips (manual launch), stats (duration rules) | 5 | 7/7 | dependencies |
| gamefound-launch-page-checklist | stats, checklist | steps (seven sections per stage), tips (copying between stages), flow (stage ready to open) | 5 | 8/8 | adfound, indiegogo, signoff |
| card-game-kickstarter-launch-guide | steps, compare | steps (explanation order), tips (proof and pending details), flow (smallest playable reward test) | 5 | 6/6 | cards, review |
| miniatures-stl-kickstarter-launch-guide | compare, checklist | flow (naming physical, digital or mixed rewards), compare (render, test print, painted), tips (scale and compatibility) | 5 | 6/6 | none needed |
| board-game-kickstarter-campaign-design-cost | checklist, compare | flow (which package fits), tips (what grows the workload), steps (booking) | 5 | 8/8 | worked-design-brief, price |
| board-game-kickstarter-page-checklist | checklist, steps | tips (explaining one turn), flow (spend on traffic only after the five minute check) | 4 | 6/6 | review |

Each guide now has at least 1 flow and at least 1 tips block. No insertAfter sections were needed.

## Skipped or notes
- Tables already in the guides were left as they are and were not counted as visuals.
- Decision rules in flows are built only from rules already in each guide (for example the shipping flow turns the guide's "rates you can stand behind" versus "firmer quotes" comparison into a rule, and its caption says so).
- No external facts were re-verified, because no new external facts were added.
- The Gamefound guide's Indiegogo section keeps its existing wording. It reflects the July 2025 announcement only; the lead may want to check it against the 26 Nov positioning brief.

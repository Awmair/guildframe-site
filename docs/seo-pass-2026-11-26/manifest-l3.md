# Manifest l3: visual layer pass, 26 Nov 2026

Twelve guides done, one file each in `app/guide-layers/<slug>.ts` (exports `layer`, `updated: "2026-11-26"`). Nothing shared was edited. The lead registers each file in `app/guide-visual-layer-data.ts`.

Checks run on every file: it parses with tsx, every keyed section id exists in the final rendered guide, `tsc --noEmit -p .` reports no errors in `app/guide-layers/`, and every `[text](/path)` link from the final guide survives. After the layer is applied, no paragraph runs over 3 sentences or about 60 words. Layer copy has no em or en dashes, no visible hyphenated compounds, no banned words and no Fiverr.

Each guide now has 5 visuals: the 3 it already had, plus 1 flow and 1 tips block. Agency cost had only 2, so it also gets an example bars chart. Image sizes and vs Gamefound also keep their tables. Every section has a keyword rich `takeaway`. Takeaways are plain text, because the renderer does not parse link markup in them.

| Guide | Visuals added | Takeaways | Paragraphs rewritten |
| --- | --- | --- | --- |
| board-game-kickstarter-cost | flow (when ads pay back, in marketing), tips (four budget habits, in your-budget) | 10 of 10 | short-answer, before-launch-amounts, from-funding, marketing, help, your-budget |
| board-game-tariffs-shipping-us | flow (US entry route for a reward parcel, in de-minimis), tips (four parts of a tariff note, in backer-page) | 9 of 9 | short-version, de-minimis, recover-the-cost, backer-page |
| how-to-design-a-kickstarter-page | tips (top of page parts, in top-of-page), flow (stranger test before launch, in check-before-launch) | 10 of 10 | top-of-page, what-backers-get, diy-or-help |
| how-to-get-kickstarter-backers | tips (community etiquette, in communities), flow (are first backers enough, in not-enough) | 9 of 9 | where-backers-come-from, communities, follow, help |
| how-to-market-a-kickstarter | flow (when to start paid ads, in ads), tips (weekly marketing rhythm, in rhythm) | 9 of 9 | does-kickstarter-promote, no-budget, ads, rhythm, help |
| is-my-game-ready-for-kickstarter | tips (how much art is enough, in art), flow (readiness order, in readiness-check) | 9 of 9 | the-game, art, people, not-ready-yet |
| kickstarter-agency-cost | tips (make proposals comparable, in market-ranges), bars (Example: 10% commission vs $5,900 fixed fee), flow (commission or fixed fee, both in commission) | 8 of 8 | commission, not-included, published-prices, red-flags, guildframe-prices |
| kickstarter-fees | flow (which fee applies to a pledge, in platform-fee), tips (fees after the campaign, in after-campaign) | 8 of 8 | small-pledges, worked-example, after-campaign, vat, tariffs, budget |
| kickstarter-followers-before-launch | tips (platform rules for followers) and flow (keep or move the date two weeks out), both in track | 8 of 8 | no-single-number, scenarios, worked-example, quality, grow, track, help |
| kickstarter-for-beginners | tips (what a live campaign asks, in during-and-after), flow (self publish on Kickstarter or not, in is-it-right) | 8 of 8 | how-it-works, who-can-launch, money, before-launch, during-and-after, is-it-right, next-steps |
| kickstarter-image-sizes | flow (story graphic upload checks, in story-images), tips (Discovery Mode clip rules, in video-production) | 8 of 8 | cheat-sheet, project-image, story-images, video-production |
| kickstarter-vs-gamefound | tips (late pledge and pledge manager facts, in pledge-manager), flow (Kickstarter or Gamefound for a first game, in which-to-pick) | 8 of 8 | pledge-manager, which-to-pick |

## Notes

- I added no new facts. Every number in a flow, tips block or bars chart comes from the guide's own text and sources. The agency cost bars chart is labelled "Example" and uses 10% from the published 5 to 15% range and our $5,900 price. Its $59,000 crossover is plain arithmetic.
- Where a paragraph's closing line was a takeaway sentence ("The takeaway is simple..."), I moved it into the `takeaway` field instead of repeating it.
- Wording: agency cost now says "a project with clear demand" instead of "a game". All the other guides have tabletop titles, so I kept them in tabletop language.
- Skipped: no `insertAfter` sections were needed. I did not change any table, FAQ, source, title, seoTitle or description.

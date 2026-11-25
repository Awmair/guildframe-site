# Manifest: qa-old (QA fixes on older guides and pages)

## Files changed
- app/launch-guide-revisions.ts: the shared "Use this in your launch review" closing is replaced by `checklistClosings`, a per guide title and paragraph for all 16 checklist guides, each linking its service page or pillar hub (/campaign-design, /ttrpg-kickstarter-campaign-design, /card-game-kickstarter-campaign-design, /miniatures-kickstarter-campaign-design, /campaign-creative, /kickstarter-prelaunch-marketing, /gamefound-launch-services, /kickstarter-launch-services, plus /guides/kickstarter-vs-gamefound and /guides/board-game-tariffs-shipping-us). Checklist tables kept.
- House timeline (email list 3 months or more, prelaunch page 6 to 12 weeks, review submission at least 2 weeks before launch): app/launch-growth-guides.ts (launch day checklist: answer, timeline events, phase copy, checklist item, 2 FAQs), app/launch-guides-new.ts (review timeline answer, dependencies, FAQ, "fortnight"; prelaunch page guide timing), app/launch-marketing-guides.ts (marketing plan answer, eight week example paragraph, steps, table, 2 FAQs; phrase "eight week example" kept), app/launch-guides.ts (prelaunch section).
- US spelling (fulfillment, catalog, organize, prioritize, color, finalize, Help Center, plus license, labeled, center, behavior, modeling, summarize and similar) across app data files, custom guide and resource pages, components and a few other pages. Prose dates moved to "November 25, 2026" style.
- app/work/page.tsx: lead now names the board game; new compare GuideVisual built from caseStudies (category, name, contribution).
- app/about/page.tsx: new steps GuideVisual (how a project with Umair runs).
- app/content-dates.ts: `work` and `about` set to "2026-11-25" (workDate in case-studies.ts reads contentDates.work, so /work and /work/* follow).
- app/campaign-pages.ts: /campaign-design gets a `lead` (what the package is and includes) and the intro now opens with the package, then the pitch.

## Lead must do
- tests/static-output.test.mjs: update /about date ("2026-10-03" in two lists) and /work plus /work/* dates to "2026-11-25".
- Not touched (outside my scope): app/guides/how-to-launch-a-board-game-on-kickstarter/page.tsx still says "1 to 2 weeks before" for review and "3 to 4 months before" for the prelaunch page, and uses "9 September 2026" style dates; its workbook row in app/guide-workbooks.ts mirrors that page. app/guides/page.tsx index keeps "catalogue" and "fulfilment". Meta descriptions with "catalogue" left for the metadata owner: best-shopify-themes-for-board-games, sell-board-game-expansions-add-ons-shopify, shopify-vs-etsy-for-selling-miniatures.
- Left as is on purpose: proper names "Tidal Harbour" and "Harbour Council", "enquiry" (form wording), "cancelled", and a verbatim testimonial using "sceptical".

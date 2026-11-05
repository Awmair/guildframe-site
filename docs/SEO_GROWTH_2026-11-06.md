# Guildframe growth release, 6 November 2026

## Intent and implementation

The release expands existing buyer decisions rather than creating a page for each keyword variant. These are intent targets, not measured search volumes or ranking promises.

| Search intent | Canonical page and improvement |
| --- | --- |
| Board game Kickstarter agency versus freelancer; fixed fee versus commission | Existing agency guide: roles, handoffs, fee-base comparison and downloadable proposal sheet |
| Kickstarter campaign design deliverables and scope | Existing design-cost guide: worked hypothetical brief and editable scope template |
| How many email subscribers before a board game Kickstarter | Existing prelaunch-list guide: explicit conversion scenarios, audience overlap and fictional launch email |
| Kickstarter product video production brief | Existing video guide: production choices, shot list and editable brief |
| Kickstarter advertising break-even and cost per lead | Existing ad-budget guide: interactive contribution calculator, equations, failed-pledge allowance and worked CSV |
| Sell board game preorders on Shopify after crowdfunding | Existing preorder guide: stock allocation, mixed carts and inventory worksheet |
| Tabletop campaign scripts, product renders, motion and ad creative | New `/campaign-creative` service with clear scope, direct contact path and related service links |
| Tabletop campaign page examples and reward/shipping explanations | New source-linked 25-campaign study, methodology and CSV |
| Tabletop crowdfunding design portfolio | Three revised real case studies; two narrated artwork walkthroughs, captions and complete HTML transcripts |

## Evidence and editorial rules

All calculator and buyer examples are labelled hypothetical. The study records observed text, unknowns and non-applicable fields rather than inferring performance. Its selection and retrieval limits are visible. Source references are on the relevant guides and in `CAMPAIGN_PAGE_STUDY_2026-11-06.md`.

Case studies describe Umair's creative contribution without claiming responsibility for campaign funding or advertising results. Existing creator imagery remains credited. Walkthroughs use synthetic third-person narration and the actual credited artwork. They do not impersonate Umair or clients. No new raster artwork or unverified testimonials were created.

Visible dates, article metadata and sitemap dates identify substantive revisions. Original case publication dates remain unchanged. The calculator is within its existing guide, and the resource hub, guide hub, shared service links and footer expose the new pages. Buyer template files have a narrow robots allowance; React payload exclusions remain.

## Verification and release workflow

The temporary checkout contains no installed dependencies or local Next build. The existing Cloudflare Git deployment runs preflight, lint, production build, typecheck, optimized-output SEO tests, contact tests, attribution tests and calculator tests. A preview is reviewed before the authorized main-branch release. Desktop/mobile browser checks use one headless page at a time with sandboxing and third-party requests blocked. No personal Chrome tab is needed.

Release receipts and final live-audit results are preserved separately by the release owner. An IndexNow receipt records submitted URLs, not indexing. Search Console notifications, page exclusion details, Google indexing requests and Bing owner reports remain unverified in this pass because signed-in Chrome controls are unavailable. No new search-volume or lead-attribution claim is made.

## Measurement

Use `AI_VISIBILITY_MEASUREMENT.md` for equivalent-period landing-page and qualified-enquiry comparisons. Keep traffic, index status, AI citations, kit requests and real enquiries distinct. The existing consent, Turnstile and `/api/contact` delivery flow remain in place. No newsletter was sent and no new recurring automation was created.

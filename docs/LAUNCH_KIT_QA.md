# Tabletop Kickstarter Launch Kit — release verification

Version 1.0 · 29 October 2026 · All checks below describe local artifacts.

## Download contract

Public base: `/downloads/launch-kit/`.

| File | Contents | Verified structure |
| --- | --- | --- |
| `START-HERE.pdf` | File map, first thirty minutes, model boundaries, MOQ example, category paths | 4 pages; searchable text on every page |
| `Tabletop-Launch-Planner.xlsx` | Scenario-driven finances and launch trackers | 12 tabs; 189 formulas; no cached formula errors |
| `Campaign-and-Email-Templates.docx` | One page plan, 12-section campaign outline, reward comparison, launch readiness checklist, 12 lifecycle emails, outcome/delay variants and outreach drafts | 11 rendered pages; 212 paragraphs; 2 tables; editable |
| `Creative-and-Production-Briefs.docx` | Project/asset brief, six asset checklist, six-frame storyboard, four ad-test briefs, manufacturing RFQ, quote comparison and fulfillment handoff | 5 rendered pages; 62 paragraphs; 4 tables; editable |
| `Examples-and-Sources.pdf` | Worked MOQ calculation; original fictional board game, card game, TTRPG, miniatures and accessory examples; official platform references | 7 pages; searchable text on every page |

The bundle is `tabletop-kickstarter-launch-kit.zip`. It contains exactly those five files at its root. `manifest.json` records the size and SHA-256 of each file and the bundle. The ZIP was extracted in memory and each content hash matched its original. CRC checks pass. No macros or document editing restrictions are present.

`preview-start-here.webp` is a real render of the first quick-start page, supplied separately for the landing page. It is not an additional file in the five-file bundle.

## Workbook verification

Tabs: Start, Funding, Rewards, Costs, Shipping, Cash, Launch plan, Ad tests, Sources, Reviewers, Live ops, Production.

The builder changes real workbook inputs, recalculates and restores the example. All 18 assertions pass:

- MOQ deficit at 403 backers: **-$1,353.30**; minimum order: **500 units**.
- MOQ surplus at 450 backers: **$5.00**, with **50 units** left in stock.
- Digital-only rewards: **zero factory order and physical postage**.
- Zero backers: **zero pledge fee and factory order**.
- Later shipping is excluded from campaign gross; later collection fees apply separately.
- Shipping charged at pledge increases net campaign receipts by the expected amount.
- Changing the selected case changes the complete financial build.
- Cash calendar detects the **-$4,000** pre-payout minimum in the default example.
- Negative price, invalid reward mix and invalid fee assumptions each display a warning.
- A blank inactive scenario does not block the active case; a blank active input is reported.

A scan found no `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, `#N/A`, `#NUM!`, `#NULL!`, `#SPILL!` or `#CALC!` values. The exported workbook was independently opened and recalculated with the bundled LibreOffice engine: all 12 tabs and 189 formulas remained, with zero formula errors. Its funding surplus (**$2,637.43125**), minimum cash (**-$4,000**) and ending cash (**$2,637.43125**) matched the artifact calculation. Native Excel and live Google Sheets import were not tested.

All 12 complete used sheet regions were rendered and visually inspected. Input cells, formulas, validation lists, freezes, filters, wrapped content, warning values and negative cash values are readable. All 16 rendered DOCX pages and all 11 PDF pages were visually inspected for clipping, overflow, missing glyphs and table layout. The final quick-start file map uses the exact download filenames.

## Scope and claims

- The financial model supports **one manufactured product SKU shared by several physical reward tiers, plus digital rewards**. Independent extra SKUs require complete separate costing. This boundary appears in the workbook and quick-start PDF.
- Shipping uses one weighted parcel cost per physical backer. Larger bundle costs must be added to the tier or replaced with actual confirmed quotes. The starter model does not calculate tariffs or tax liability.
- Manufacturing demand conservatively covers all pledged backers. Receipts deduct expected failed payments. Unsold inventory is never treated as cash. The funding output is a scenario cash surplus or gap, not an automatically recommended public goal.
- US platform/processing defaults reference the official Kickstarter fee page. Later collection fee inputs are explicitly illustrative and must be replaced with the chosen provider's terms.
- Project names, costs, quotes, ad figures and examples are clearly fictional. There are no invented customers, testimonials, funding outcomes, guarantees, discount claims or unsupported monetary value anchors.
- Templates contain intentional bracketed fields and prompts. Those are editable creator inputs. Every email includes its audience/trigger, CTA and verification steps. Project communications and newsletter permission remain separate.
- Original files are reusable working assets. The kit is not a legal, tax or manufacturing certification service and has no account, supplier or platform integration.

## Rebuild and evidence

Use the bundled Node/Python runtime and installed workspace libraries. No paid APIs or external generation calls were used.

1. `node scripts/kit/build-workbook.mjs` — creates the workbook; executes the 18 assertions; renders all tabs.
2. `python scripts/kit/build-documents.py` — creates the editable DOCX documents and both PDFs.
3. Render DOCX with the documents skill's `render_docx.py`; inspect every generated page. Render PDFs with bundled Poppler and inspect every page.
4. `python scripts/kit/package-kit.py` — checks file integrity, sheet/formula counts, PDF text/page counts, document editability, ZIP content and hashes; writes the manifest.

Intermediate renders and machine-readable evidence are under `/private/tmp/guildframe-kit-qa/`: `workbook-tests.json`, `workbook-formula-scan.txt`, `native-workbook-check.json`, `document-structure.json`, `package-checks.json`, 12 sheet PNGs, 16 DOCX page PNGs and 11 PDF page PNGs. These are QA evidence, not public download files.

The final publication check must confirm the production ZIP and individual file responses match `manifest.json`, and verify the existing signup delivery route supplies the bundle. Local file checks do not establish production delivery.

## Website integration verification

The final local build and static suite passed **334/334 checks**. `npm run lint`, `npm run typecheck` and `git diff --check` also passed. The final test log is `/private/tmp/guildframe-kit-qa/npm-test-final.log`.

- All five working files and the ZIP returned HTTP 200 from the local development server, with correct MIME types and exact manifest sizes and SHA-256 hashes. Evidence: `http-download-checks.json`.
- The landing page, privacy notice and request/thanks page each returned HTTP 200, one H1 and one canonical. Their descriptions are 146, 140 and 136 characters. The indexable pages have WebPage schema. The privacy page's visible breadcrumb now has matching BreadcrumbList schema.
- The landing page and privacy notice appear in the sitemap; the request/thanks page has `noindex, follow` and is excluded. The exported `_headers` sets `X-Robots-Tag: noindex` on `/downloads/launch-kit/*`. Next's local development server does not apply Cloudflare Pages headers; the actual production response header remains part of publication verification.
- The landing and homepage teaser describe exactly five files and twelve workbook tabs. The one-product financial scope, additional-product costing and fictional examples are explicit. The creative-file description was corrected to name the actual brief, storyboard, ad tests, supplier quote request and handoff.
- The preview uses its real dimensions, 993 × 1404. New kit controls contain no visible arrows.
- The suite checks all exported asset hashes, no monetary value/discount anchor, no funding guarantee, valid internal links, unique metadata, canonical/schema/sitemap consistency, and preserved project-specific client quotations. The verified quotations stay with their matching projects; Quiver Time has no invented quotation.
- Initial HTML contains no Google Analytics or Clarity script request before analytics consent. Optional newsletter marketing remains separate from receiving the complete kit.

The test build deliberately uses `http://localhost:3000` as its canonical origin. Production must use `https://guildframe.com` through the existing deployment environment. Sender form configuration, subscriber confirmation and actual email delivery are outside these local release checks and require the separate verified workflow.

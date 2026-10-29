# Tabletop Campaign Launch Kit — release verification

Version 1.1 · 29 October 2026. This report describes the current local files. The final source build, deployed response headers and actual email delivery belong to the release verification.

## Download contract

Public base: `/downloads/launch-kit/`. The existing URL and ZIP filename are retained for links already emailed.

| File | Useful contents | Verified structure |
| --- | --- | --- |
| `START-HERE.pdf` | File map, first thirty minutes, model boundaries, MOQ example and category paths | 4 pages; searchable text; embedded text fonts |
| `Tabletop-Launch-Planner.xlsx` | Editable scenario finances, costs, rewards, shipping, cash and launch trackers | 12 tabs; 189 formulas |
| `Campaign-and-Email-Templates.docx` | One page plan, campaign outline, reward comparison, readiness checklist, 12 lifecycle emails, outcome/delay variants and outreach | 11 rendered pages; 212 paragraphs; 2 tables; editable |
| `Creative-and-Production-Briefs.docx` | Project/asset brief, asset checklist, storyboard, four ad test briefs, manufacturing quote request, quote comparison and fulfillment handoff | 5 rendered pages; 62 paragraphs; 4 tables; editable |
| `Examples-and-Sources.pdf` | Worked MOQ case, five clearly fictional category examples, official Kickstarter references and Gamefound application notes | 8 pages; searchable text; embedded text fonts |

`tabletop-kickstarter-launch-kit.zip` contains exactly those five files at its root. ZIP CRC checks, extracted content hashes and sizes match `manifest.json`. No macros or document editing restrictions are present. The separate landing preview, `preview-start-here.webp`, is an actual first-page render at 993 × 1404 and is not a sixth bundle file.

Final bundle: **240,216 bytes**. SHA-256: `6d69d81b615461dac3aec7f064eae37db6470f97c8f8c3c94002a63bb615b498`.

## Workbook checks

Tabs: Start, Funding, Rewards, Costs, Shipping, Cash, Launch plan, Ad tests, Sources, Reviewers, Live ops and Production.

All 18 real input mutation assertions pass, covering the 403-backer MOQ deficit (-$1,353.30), 450-backer surplus ($5.00), digital rewards, zero backers, later shipping fees, shipping at pledge, scenario selection, cash timing, negative prices, invalid mixes/fees and blank active or inactive inputs. Formula scanning finds zero error cells.

All 189 formulas, validation definitions, freezes/views and actual table definitions are unchanged from version 1.0 across all 12 tabs. An independent bundled LibreOffice recalculation retains 12 tabs and 189 formulas with zero errors. It matches funding surplus $2,637.43125, minimum cash -$4,000 and ending cash $2,637.43125. Native Excel and live Google Sheets import were not tested.

All 12 used sheet regions and all 16 DOCX pages were rendered and visually inspected. All 12 final PDF pages were independently rendered with PDFium and visually inspected: headings, complete text, tables, footers and source links are readable, with no clipping or overflow. The bundled Poppler renderer intermittently omitted repeated text on some pages; PDFium and PDF text extraction show the complete content. Both PDFs now embed Liberation Sans regular/bold to remove font substitution dependence, and packaging asserts that every font used to draw text is embedded.

## Scope and truthful use

The model supports one manufactured product SKU shared by physical reward tiers, plus digital rewards. Independent physical SKUs require complete separate costing. It uses one weighted parcel cost per physical backer; larger bundles need their additional cost or actual tier-specific quotes. It does not determine tax or tariff liability or prove demand.

Default fees are explicitly a Kickstarter US example. Gamefound requires its own current platform/payment terms, small-pledge setting, later fees and payout timing. One transaction per pledge is assumed; installment or multiple-charge plans need an expanded fee and dated cash schedule. Shipping collected later cannot fund an earlier deposit; unsold inventory is not cash. The output is a scenario cash surplus/gap, not a recommended public funding goal.

Official Gamefound references cover different project types/phases, Late Pledge versus Pledge Manager, Tester Mode, current versus legacy editors and possible Endgame deadline extensions. Final reminder drafts tell creators to check the live closing time. The kit does not claim identical platform rules or approval requirements.

All project names, costs, quotes and ad examples are hypothetical. There are no invented customer outcomes, testimonials, funding guarantees, discounts or monetary value anchors. Bracketed fields are intentional editable creator inputs. Marketing templates require the creator's actual permission and audience; required reward delivery is separate.

## Signup, privacy and terms

The current site signup explicitly requests the kit, six launch lessons, a monthly newsletter with tabletop tips and occasional Guildframe service offers. Address confirmation activates that subscription, and each email has an unsubscribe link. Legacy kit-only contacts and project enquirers are not retrospectively enrolled.

Privacy describes Sender enquiry delivery, lawful purposes/bases, retention criteria, rights and contact/ICO/provider links; currently disabled account-wide email open/click tracking; optional website analytics; and the minimal functional invitation session preference. Terms allow editing/use within the creator's projects and team, prohibit resale as a substantially unmodified standalone kit, state no funding guarantee and keep client services under a separate agreed contract.

Focused ESLint and `git diff --check` passed after the current copy changes; typecheck passed for the source revision. Static fixtures now expect the new kit title, version 1.1 and complete combined signup disclosure. A fresh full build/static suite is reserved for the parent release run. Historical 334-test and earlier release audit logs predate this rename and are not a pass for these current files.

The latest local HTTP recheck could not run: sandbox networking returned Operation not permitted, and the clean escalation retry was rejected because automatic approval review timed out. This is an environment limitation, not an asset integrity failure. Production must verify all six download response hashes/MIME types and `X-Robots-Tag: noindex` plus the confirmed signup/delivery flow.

## Rebuild and saved evidence

Use the bundled Node/Python runtime and workspace libraries; no paid API was used.

1. `node scripts/kit/build-workbook.mjs` builds, recalculates, tests and renders the workbook.
2. `python scripts/kit/build-documents.py` builds editable documents and PDFs. `--pdf-only` leaves existing DOCX bytes untouched. Offline Liberation Sans fonts are found in the bundled PDF.js package or a standard Linux font directory.
3. Render DOCX using the documents skill renderer. Render PDFs and inspect every page; PDFium provided the final independent check here.
4. `python scripts/kit/package-kit.py` verifies all files, embedded PDF text fonts, workbook structures, editability and bundle integrity, then writes `manifest.json`.

Working evidence is `/private/tmp/guildframe-kit-qa`. The preserved owner ZIP, manifest, reports and representative images are in the task artifact folder `guildframe-launch-20261029/kit-qa`. Its read-only `audit-release.py` and updated 82-route fixture support the final local/production SEO, internal link, metadata, schema, image, noindex and download checks. Local Cloudflare header configuration is not proof of deployed headers.

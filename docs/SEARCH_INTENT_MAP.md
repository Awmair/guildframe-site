# Guildframe search intent map

Last reviewed: 2026-07-18

Each query family has one primary page. Supporting pages must link to the primary
page and serve a different stage of the decision instead of repeating it.

| Primary intent | Primary page | Page job | Supporting page |
| --- | --- | --- | --- |
| Buy Guildframe | `/buy` | Offer, price, requirements and setup scope | Homepage pricing and product sections |
| Board game Shopify theme | `/shopify-theme-for-board-games` | Commercial category solution | `/guides/best-shopify-themes-for-board-games` provides neutral evaluation criteria |
| Kickstarter to Shopify service | `/kickstarter-to-shopify` | Commercial storefront solution and purchase path | Migration and post-funding guides explain the process without competing for the offer query |
| TTRPG Shopify theme | `/shopify-theme-for-ttrpg` | Commercial category solution | Migration and platform guides provide broader context |
| Miniatures Shopify theme | `/shopify-theme-for-miniatures` | Commercial category solution | Migration and platform guides provide broader context |
| Best board game Shopify theme | `/guides/best-shopify-themes-for-board-games` | Comparison method and route selection | Board game solution page is the Guildframe product route |
| What happens after Kickstarter is funded | `/guides/what-happens-after-kickstarter-is-funded` | Post-funding roadmap from payment collection to ongoing sales | Migration and sales-channel guides handle their narrower implementation decisions |
| Kickstarter to Shopify migration guide | `/guides/move-from-kickstarter-to-shopify` | Step-by-step storefront implementation | Kickstarter solution page is the commercial offer |
| Selling after Kickstarter | `/guides/kickstarter-late-pledges-vs-shopify` | Late pledge, preorder and permanent-store decision | Preorder guide owns Shopify preorder implementation; platform comparison covers the broader stack |
| BackerKit vs Shopify vs Gamefound | `/guides/backerkit-vs-shopify-vs-gamefound` | System-of-record and stack decision | Late Pledges guide covers Kickstarter specifically |
| Kickstarter to Shopify timeline | `/guides/kickstarter-to-shopify-launch-timeline` | Sequencing and launch readiness | Migration guide explains the full operational process |
| Board game preorders on Shopify | `/guides/sell-board-game-preorders-on-shopify` | Preorder setup and communication | Late Pledges guide chooses the channel |
| Board game expansions and add-ons | `/guides/sell-board-game-expansions-add-ons-shopify` | Product, variant and bundle architecture | Product-page checklist handles page-level QA |
| About Guildframe | `/about` | Brand, product and company entity trust | Product pages link here for organization context |
| Guildframe editorial standards | `/editorial-policy` | Research, sourcing and correction policy | Author page identifies the responsible team |
| Guildframe Editorial Team | `/authors/guildframe` | Organization author profile and expertise | Guides and references use this stable author entity |
| Tabletop ecommerce reference library | `/resources` | Collection hub for reusable tools | Guides provide the deeper explanatory layer |
| Board game Shopify store checklist | `/resources/board-game-shopify-store-checklist` | Store launch audit tool | Board game solution page serves commercial theme intent |
| Kickstarter to Shopify migration checklist | `/resources/kickstarter-to-shopify-migration-checklist` | Phase-by-phase execution tool | Migration guide explains the reasoning and tradeoffs |
| Tabletop crowdfunding platform role matrix | `/resources/backerkit-vs-shopify-vs-gamefound-comparison` | Operational ownership worksheet | BackerKit vs Shopify vs Gamefound guide owns the comparison query |
| Board game product page checklist | `/resources/board-game-product-page-checklist` | Product-page anatomy and QA tool | Theme guide evaluates theme-level fit |
| Kickstarter tabletop games statistics | `/resources/kickstarter-tabletop-games-benchmark` | Source-backed funding benchmark and reusable data | Migration content explains what creators do after funding |

## Guardrails

- Do not create a new page for a synonym or minor long-tail variation.
- Expand the existing primary page when the buyer intent is the same.
- Use canonical URLs and redirects for alternate historical paths.
- Keep product facts identical across homepage, `/buy`, solution pages, Gumroad
  and structured data.
- Review queries in Search Console and Bing before adding another landing page.

# Guildframe search intent map

Last reviewed: 2026-08-09

Each query family has one primary page. Supporting pages must link to the primary
page and serve a different stage of the decision instead of repeating it.

| Primary intent | Primary page | Page job | Supporting page |
| --- | --- | --- | --- |
| Shopify developer for tabletop games | `/done-for-you-shopify-store` | $2,500 design and development service for up to 50 product SKUs | Homepage service, comparison and pricing sections |
| Buy the Guildframe Build Guide | `/buy` | $79 self-serve build guide offer, contents and checkout status | Homepage DIY pricing section and the AI build guide |
| Board game Shopify theme and store | `/shopify-theme-for-board-games` | Commercial category solution for board game stores | `/guides/best-shopify-themes-for-board-games` provides neutral theme evaluation |
| Kickstarter to Shopify solution | `/kickstarter-to-shopify` | Commercial post-campaign storefront solution and choice of build path | Migration guides explain implementation; the done-for-you page owns service intent |
| TTRPG Shopify theme and store | `/shopify-theme-for-ttrpg` | Commercial category solution for TTRPG stores | Migration and platform guides provide broader context |
| Miniatures Shopify theme and store | `/shopify-theme-for-miniatures` | Commercial category solution for miniature stores | Migration and platform guides provide broader context |
| Best board game Shopify theme | `/guides/best-shopify-themes-for-board-games` | Comparison method and route selection | Board game solution page is the Guildframe product route |
| What happens after Kickstarter is funded | `/guides/what-happens-after-kickstarter-is-funded` | Post-funding roadmap from payment collection to ongoing sales | Migration and sales-channel guides handle their narrower implementation decisions |
| Kickstarter to Shopify migration guide | `/guides/move-from-kickstarter-to-shopify` | Step-by-step storefront implementation | Kickstarter solution page is the commercial offer |
| Selling after Kickstarter | `/guides/kickstarter-late-pledges-vs-shopify` | Late pledge, preorder and permanent-store decision | Preorder guide owns Shopify preorder implementation; platform comparison covers the broader stack |
| BackerKit vs Shopify vs Gamefound | `/guides/backerkit-vs-shopify-vs-gamefound` | System-of-record and stack decision | Late Pledges guide covers Kickstarter specifically |
| Kickstarter to Shopify timeline | `/guides/kickstarter-to-shopify-launch-timeline` | Sequencing and launch readiness | Migration guide explains the full operational process |
| Board game preorders on Shopify | `/guides/sell-board-game-preorders-on-shopify` | Preorder setup and communication | Late Pledges guide chooses the channel |
| Board game expansions and add-ons | `/guides/sell-board-game-expansions-add-ons-shopify` | Product, variant and bundle architecture | Product-page checklist handles page-level QA |
| International miniature sales, VAT and IOSS | `/guides/selling-miniatures-internationally-vat-ioss` | Cross border product data, tax, customs and shipping readiness | Miniatures solution page owns commercial theme intent |
| Board game website cost | `/guides/how-much-does-a-board-game-website-cost` | Platform, build and ongoing cost explanation | Developer vs DIY guide owns the route decision |
| Build a tabletop Shopify store with AI | `/guides/build-a-tabletop-shopify-store-with-ai` | What AI coding tools can and cannot do on Shopify, and the tabletop catalog decisions no model can make | Developer vs DIY guide owns the hire decision; `/buy` owns the paid build guide |
| Shopify vs Etsy for miniatures | `/guides/shopify-vs-etsy-for-selling-miniatures` | Marketplace versus owned store decision | Miniatures solution page owns the Shopify offer |
| About Guildframe | `/about` | Brand, product and company entity trust | Product pages link here for organization context |
| Guildframe editorial standards | `/editorial-policy` | Research, sourcing and correction policy | Author page identifies the responsible team |
| Guildframe Editorial Team | `/authors/guildframe` | Organization author profile and expertise | Guides and references use this stable author entity |
| Tabletop ecommerce reference library | `/resources` | Collection hub for reusable tools | Guides provide the deeper explanatory layer |
| Board game Shopify store checklist | `/resources/board-game-shopify-store-checklist` | Store launch audit tool | Board game solution page serves commercial theme intent |
| Kickstarter to Shopify migration checklist | `/resources/kickstarter-to-shopify-migration-checklist` | Phase-by-phase execution tool | Migration guide explains the reasoning and tradeoffs |
| Tabletop crowdfunding platform role matrix | `/resources/backerkit-vs-shopify-vs-gamefound-comparison` | Operational ownership worksheet | BackerKit vs Shopify vs Gamefound guide owns the comparison query |
| Board game product page checklist | `/resources/board-game-product-page-checklist` | Product-page anatomy and QA tool | Theme guide evaluates theme-level fit |
| Kickstarter tabletop games statistics | `/resources/kickstarter-tabletop-games-benchmark` | Source-backed funding benchmark and reusable data | Migration content explains what creators do after funding |
| Tabletop Shopify product data and metafields | `/resources/tabletop-shopify-metafield-schema` | Reusable metafield schema for board games, TTRPGs and miniatures | The AI build guide explains how to use it; the product page checklist handles page-level QA |

## Guardrails

- Do not create a new page for a synonym or minor long-tail variation.
- Expand the existing primary page when the buyer intent is the same.
- Use canonical URLs and redirects for alternate historical paths.
- Keep the $79 build guide and $2,500 service for up to 50 product SKUs distinct and identical across the
  homepage, offer pages, Gumroad and structured data.
- Guildframe does not sell a Shopify theme. Never present the build guide as one.
- Review queries in Search Console and Bing before adding another landing page.

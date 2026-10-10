# Architecture

Reviewed: 2026-10-11. Static Next.js App Router export, deployed by the existing Cloudflare Pages integration from GitHub main. No application backend, database or Actions deployment workflow.

## Main modules

- app/page.tsx: server-rendered campaign homepage.
- app/campaign.css: Playful Precision style system, responsive layouts, glass and reduced-motion/transparency/contrast behaviour, shared with app/editorial.css for all editorial, reference and retained pages.
- app/components/ShaderSurface.tsx, app/components/shader-renderer.ts and app/shaders.css: deferred, viewport-aware MeshGradient and Glass decoration with static CSS fallbacks. See SHADER_SURFACES.md.
- app/components/CampaignMotion.tsx: progressive one-time reveal enhancement. Base CSS keeps content visible without JavaScript.
- app/components/ProjectInquiryForm.tsx: existing Formspree route, category, platform, service and launch-timing fields, native validation and accessible success/error states.
- app/campaign-content.ts: category content, primary FAQs and campaign modification date.
- app/campaign-pages.ts: 13 service and category briefs, including six broader launch services in app/launch-services.ts.
- app/[campaign]/page.tsx: statically generated service/category routes with unique metadata.
- app/launch-guides.ts, app/launch-guides-new.ts and app/launch-marketing-guides.ts: 24 launch articles with direct answers, sections, comparisons, FAQs and source citations.
- app/guides/[slug]/page.tsx: statically generated launch articles using the shared SeoArticlePage.
- app/components/SeoChrome.tsx: shared generated logo, navigation, form and footer.
- app/site-config.ts: contact, launch service paths, origin, analytics and social image.
- app/content-dates.ts: modification dates for retained routes.
- app/sitemap.ts and public/llms.txt: every canonical route and current commercial facts.

Legacy Shopify articles and references remain at their existing URLs. Retired product promotions and schema are removed. They form an after-funding archive, alongside the broader tabletop launch services.

Assets are generated with ImageGen and optimised with Sharp. Manrope is self-hosted with its licence. Unreferenced images and old brand assets are removed from the deployable output by optimize-pages-output.mjs.

- app/globals.css: small base reset; no legacy design cascade.
- app/editorial.css: article, collection, company, booking and retained migration layouts.
- app/resources/tabletop-campaign-launch-worksheet: reusable launch brief with a public Markdown download.

69 canonical routes are included in the sitemap. The 37 guides contain 24 launch guides and 13 after-funding articles; the seven resources include the campaign worksheet.

## Delivery gates

Lint, type checking, actual static output tests, production-origin preflight and browser review. Browser review includes mobile, desktop, image loading, native form validation, intercepted success/error responses, reduced motion and no-JavaScript visibility. The inbox behind Formspree is external configuration and needs separate recipient verification.

- app/launch.css: broader studio layouts, dark hero and process surfaces, stage preview animation and responsive engagement cards.

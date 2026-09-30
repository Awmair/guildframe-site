# Architecture

Reviewed: 2026-09-30. Static Next.js App Router export, deployed by the existing Cloudflare Pages integration from GitHub main. No application backend, database or Actions deployment workflow.

## Main modules

- app/page.tsx: server-rendered campaign homepage.
- app/campaign.css: Playful Precision style system, responsive layouts, glass and reduced-motion/transparency/contrast behaviour, loaded after legacy editorial styles.
- app/components/CampaignMotion.tsx: progressive one-time reveal enhancement. Base CSS keeps content visible without JavaScript.
- app/components/ProjectInquiryForm.tsx: existing Formspree route, campaign fields, native validation and accessible success/error states.
- app/campaign-content.ts: category content, primary FAQs and campaign modification date.
- app/campaign-pages.ts: seven service and category briefs.
- app/[campaign]/page.tsx: statically generated service/category routes with unique metadata.
- app/launch-guides.ts: eight launch articles with direct answers, sections, comparisons, FAQs and source citations.
- app/guides/[slug]/page.tsx: statically generated launch articles using the shared SeoArticlePage.
- app/components/SeoChrome.tsx: shared generated logo, navigation, form and footer.
- app/site-config.ts: contact, campaign pricing, origin, analytics and social image.
- app/content-dates.ts: modification dates for retained routes.
- app/sitemap.ts and public/llms.txt: every canonical route and current commercial facts.

Legacy Shopify articles and references remain at their existing URLs. Retired product promotions and schema are removed. They form an after-funding archive, while the primary service is campaign design for $975 USD.

Assets are generated with ImageGen and optimised with Sharp. Manrope is self-hosted with its licence. Unreferenced images and old brand assets are removed from the deployable output by optimize-pages-output.mjs.

## Delivery gates

Lint, type checking, actual static output tests, production-origin preflight and browser review. Browser review includes mobile, desktop, image loading, native form validation, intercepted success/error responses, reduced motion and no-JavaScript visibility. The inbox behind Formspree is external configuration and needs separate recipient verification.

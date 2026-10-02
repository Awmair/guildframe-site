# Architecture

Reviewed: 2026-10-02. Static Next.js App Router export, deployed by the existing Cloudflare Pages integration from GitHub main. A standalone contact Worker is prepared but awaits Email Sending access and delivery verification before deployment and form activation. No database or Actions deployment workflow.

## Main modules

- app/page.tsx: server-rendered campaign homepage.
- app/campaign.css: Playful Precision style system, responsive layouts, glass and reduced-motion/transparency/contrast behaviour, loaded after legacy editorial styles.
- app/components/CampaignMotion.tsx: progressive one-time reveal enhancement. Base CSS keeps content visible without JavaScript.
- app/components/ProjectInquiryForm.tsx: configurable endpoint, campaign fields, native validation, synchronous duplicate-submit prevention and accessible success/error states. The existing endpoint remains the default until the contact Worker is verified.
- workers/contact: standalone Cloudflare email Worker and its route/binding configuration. See CONTACT_EMAIL.md for setup and activation.
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

Lint, type checking, contact Worker tests, actual static output tests, production-origin preflight and browser review. Browser review includes mobile, desktop, image loading, native form validation, intercepted success/error responses, reduced motion and no-JavaScript visibility. The contact Worker additionally requires a live email acceptance and recipient inbox check before activation.

# Manifest: products (option B, one product campaign page)

## Files changed

- `app/product-campaigns.ts` (new): page object, delivery (steps, FAQ, guides), two infographics (steps, compare) and a proof stats infographic.
- `app/campaign-pages.ts`: imports `productCampaignPage` and appends it to `campaignPages`, so `app/[campaign]/page.tsx` renders it and the sitemap picks it up.
- `app/components/CampaignServicePage.tsx`: optional `variant: "product"` and `heroImage` on `CampaignPage`. For the product variant only: Secubix client image in the hero (labelled client work, not "studio concept"), "See the price" link, jump links to `#pricing` and `#product-proof`, a two package block (`id="pricing"`), a proof block listing `beyondTabletop` with the creators' public totals and a stats visual (ten years, 252 reviews, 5.0), FAQ limited to the page's own six questions, schema `serviceType` plus two `Offer`s ($1,800 and $5,900), a product closing CTA to `/buy`, and the related links drop the tabletop category list. The "Need help beyond the page?" block is hidden there because the page already covers full support. Every other service page renders exactly as before.
- `app/content-dates.ts`: added `productCampaigns: "2026-11-25"` and one line in `campaignModifiedDate` that returns it for the new slug.
- `app/work/page.tsx`: one sentence in the "Beyond tabletop" intro linking the page.
- `app/about/page.tsx`: one sentence in the first section naming product campaigns and linking the page.
- `app/components/SeoChrome.tsx`: footer "Launch services" list gains one item, "Product campaigns".
- `app/components/ProjectInquiryForm.tsx`: `game_category` select keeps every option and adds "Tech or gadget product", "Design or lifestyle product", "Book, comic or other project".
- `functions/api/contact.ts`, `tests/contact-handler.test.mjs`, `tests/lead-attribution.test.mjs`: checked, no whitelist of category values (only a 100 character limit), so no change needed. GA4 `generate_lead` already sends `game_category` as typed.

## New route

- Path: `/kickstarter-product-campaign-design`
- Title (and seoTitle): Kickstarter Campaign Design for Product Launches (48 characters; renders as "Kickstarter Campaign Design for Product Launches | Guildframe")
- H1: "Kickstarter campaign design for product launches."
- Description (155 characters): Kickstarter campaign design for gadgets, design and lifestyle products and books: copy, creative, ads and live support. $1,800 page or $5,900 full support.
- Category: service page (campaign services). Pillar: 3, Campaign page; the stage guides block links up to `/campaign-design` ("Kickstarter campaign design").
- Date: 2026-11-25 via `contentDates.productCampaigns`.

## Lines the lead needs to add

- `app/sitemap.ts`: nothing, it maps `campaignPages` with `campaignModifiedDate`.
- `public/llms.txt`, under "## Campaign services", as the last item:
  `- [Kickstarter Campaign Design for Product Launches](https://guildframe.com/kickstarter-product-campaign-design): for tech gadgets, design and lifestyle products and books outside tabletop.`
- `docs/SEARCH_INTENT_MAP.md`, after the `/campaign-design` line:
  `` - `/kickstarter-product-campaign-design`: Kickstarter campaigns outside tabletop (tech gadgets, design and lifestyle products, books). One page only; titles, hubs and guides stay tabletop. Owns "Kickstarter campaign design for products" style queries, not general "Kickstarter agency" terms. ``
- `tests/static-output.test.mjs`, page list:
  `["/kickstarter-product-campaign-design", "Kickstarter Campaign Design for Product Launches | Guildframe", "Kickstarter campaign design"],`
- `tests/static-output.test.mjs`, date map: `["/kickstarter-product-campaign-design", "2026-11-25"],`
- No guides or resources index entry (it is a service page).

## Notes for the lead

- Proof uses only `beyondTabletop` wording and public totals (Secubix 90 backers pledged €32,218; Bacàn 222 backers pledged €20,410; A World Without Men 25 backers pledged $5,149), labelled as the creators' results.
- The "$200,000" line is positioning (where commission agencies fit), taken from the 25 Nov repositioning research, not a market statistic.
- The shared enquiry form heading still says "Let's plan your game launch" and its email subject says "tabletop launch enquiry". Left as is (form copy outside this task); worth a look if product enquiries grow.
- No Fiverr mention, no em or en dash, no visible hyphenated compound in the new copy.

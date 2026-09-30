# Campaign rebrand validation

2026-09-30. Lint and TypeScript checks passed. The actual static export passed all 186 checks, including 46 canonical routes, unique titles/descriptions, schema, review dates, sitemap, internal links and anchors, form fields, public asset references and retired offer checks.

Chrome browser review passed at 1440, 768, 390 and 375 pixels. No horizontal overflow, JavaScript page errors or missing images after lazy loading. Form submissions were intercepted locally: success, error, retry and required payload fields were checked without sending test enquiries. Reduced motion keeps revealed content stationary and visible. All content is visible with JavaScript disabled. The campaign cost article was reviewed on a phone-sized viewport.

Production-equivalent static build passed with https://guildframe.com and the existing GA4 stream. The new social image, generated logo, favicons, self-hosted font and seven generated source visuals are included. npm audit reported zero vulnerabilities after compatible dependency fixes.

Formspree inbox delivery is not verified by these tests. The endpoint is unchanged; contact links use umair@guildframe.com. No funding or search-performance result is implied by deployment or validation.

## Portfolio, copy and process refinement

September 30, 2026. Lint and TypeScript checks passed. All 189 static export checks passed across 46 canonical routes. The production-equivalent build passed with the existing production domain and GA4 stream.

Chrome review passed at 1440, 1000, 768, 390 and 375 pixels, with no horizontal overflow, missing visible images or JavaScript page errors. All four native process steps opened exclusively; keyboard navigation worked. Section navigation visibly scrolled through intermediate positions and stopped below the sticky header. The mobile menu closed after selection. Reduced motion uses immediate scrolling, and process navigation and content remain usable with JavaScript disabled.

Contact checks covered required fields, an intercepted failure, retained inputs, retry, success, reset, duplicate-submit prevention and the expected payload. No real enquiry was sent. Inbox delivery remains unverified until the owner supplies the correct Formspree endpoint.

The card service, campaign service, cost guide and About page were also reviewed on a phone-sized viewport. The three generated card concepts and all three real project preview assets ship in the exported site. See CAMPAIGN_REFINEMENT.md for project links, quote provenance and ImageGen prompts.

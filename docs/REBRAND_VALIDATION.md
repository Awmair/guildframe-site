# Campaign rebrand validation

2026-09-30. Lint and TypeScript checks passed. The actual static export passed all 186 checks, including 46 canonical routes, unique titles/descriptions, schema, review dates, sitemap, internal links and anchors, form fields, public asset references and retired offer checks.

Chrome browser review passed at 1440, 768, 390 and 375 pixels. No horizontal overflow, JavaScript page errors or missing images after lazy loading. Form submissions were intercepted locally: success, error, retry and required payload fields were checked without sending test enquiries. Reduced motion keeps revealed content stationary and visible. All content is visible with JavaScript disabled. The campaign cost article was reviewed on a phone-sized viewport.

Production-equivalent static build passed with https://guildframe.com and the existing GA4 stream. The new social image, generated logo, favicons, self-hosted font and seven generated source visuals are included. npm audit reported zero vulnerabilities after compatible dependency fixes.

Formspree inbox delivery is not verified by these tests. The endpoint is unchanged; contact links use umair@guildframe.com. No funding or search-performance result is implied by deployment or validation.

# Sender tracking and form embed QA

Verified on 29 October 2026. No emails or form submissions were sent during these checks.

## Email tracking

The workflow email setup and custom HTML editor expose no per-message open/click tracking switch. The native Sender account page at https://app.sender.net/settings/account has a **Tracking settings** section with two account-level controls.

Saved both controls, reloaded the page and read back:

| Setting | Persisted value |
| --- | --- |
| Disable click tracking | On |
| Disable open tracking | On |
| Google Analytics / UTM append option | On, unchanged |
| Ask for unsubscribe confirmation | Off, unchanged |

These changes apply at the account level, including kit-only delivery. Email bodies, functional confirmation/unsubscribe links, authored UTMs, workflow conditions and activation state were not edited. Delivery and bounce records remain separate from engagement tracking. The workflow remained draft during inspection.

A fresh owner-controlled inbox test is still required to verify that the next delivered MIME contains no open pixel and no engagement click wrapper. Earlier messages can retain the pixel present when they were sent. Do not claim post-change MIME verification from the saved control state alone.

Sender's [transactional monitoring guide](https://www.sender.net/help/transactional-emails/monitoring-transactional-delivery/) distinguishes delivery/bounce events from pixel-based opens and tracked clicks. The account controls above were verified in the current native UI; the help guide does not document those controls.

## Hosted form embedding

URL: https://stats.sender.net/forms/dyPKAg/view

A public HEAD request returned HTTP 200. Its response had no `X-Frame-Options` header and no `Content-Security-Policy` or `frame-ancestors` restriction.

A fresh isolated headless Chrome loaded that URL inside an iframe served by localhost. The form's own nested iframe rendered with no page errors. Readback confirmed:

- Email required.
- First name optional.
- MARKETING interest checkbox unchecked and optional.
- Explicit six lessons, monthly newsletter and occasional service offers consent label.
- Visible privacy link to https://guildframe.com/privacy.

The same check passed at a 390 × 844 viewport. The native form's inner viewport was 354 px wide, with document scroll width 354 px and scroll height 525 px. No horizontal overflow was observed. The test's outer iframe was 760 px high. Keep dialog scrolling available for smaller screens and validation messages.

Raw temporary results: `/private/tmp/guildframe-embed-check.json` and `/private/tmp/guildframe-embed-mobile-check.json`.

## Address line normalization

The Sender address line initially contained `Suite #6291, Edinburgh`, while the separate city field already held `Edinburgh`. It was normalized to `Suite #6291` so templates using separate account address/city/state fields avoid duplication. Existing city `Edinburgh`, state `Scotland`, country `United Kingdom` and postcode `EH1 1EE` were preserved without changes. Saved fields were read back after reload. This records configuration, not a verified rendered inbox footer.

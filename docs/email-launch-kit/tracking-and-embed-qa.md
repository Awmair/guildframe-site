# Sender tracking and form embed QA

Verified on 29 October 2026. Native UI and embed checks sent no emails or form submissions. Later owner-only inbox tests are identified separately below.

## Email tracking

No per-message open/click tracking switch was found in the inspected native workflow email setup or custom HTML editor. The native Sender account page at https://app.sender.net/settings/account has a **Tracking settings** section with two account-level controls.

Saved both controls, reloaded the page and read back:

| Setting | Persisted value |
| --- | --- |
| Disable click tracking | On |
| Disable open tracking | On |
| Google Analytics / UTM append option | On, unchanged |
| Ask for unsubscribe confirmation | Off, unchanged |

These account defaults did not update the flags on existing templates retroactively. An owner-only inbox test after the account change found no pixel or click wrapper in a newly sent custom contact email, while the existing workflow kit email still contained both. The account readback alone therefore did not establish tracking suppression for the existing kit and nurture templates.

The parent inspected the kit template through the official REST endpoint `GET /v2/transactional/aKYNwY`. It returned `disable_click_tracking: false` and `disable_open_tracking: false`. `PATCH /v2/transactional/aKYNwY` with both flags set to `true` returned HTTP 200, and a subsequent GET confirmed both persisted as `true`.

| Existing template | Verification state |
| --- | --- |
| Kit delivery `aKYNwY` | Both disable flags true, verified by REST readback |
| Six workflow lessons | Parent reports both disable flags true after the same per-template fix |
| Native confirmation `azBD1Y` | Parent reports both disable flags true after the same per-template fix |
| Monthly newsletter draft `82EvGl` | Parent reports both disable flags true after the same per-template fix |

Email bodies, functional confirmation/unsubscribe links, authored UTMs and workflow conditions were not changed by the tracking fix. Delivery and bounce records remain separate from engagement tracking. No workflow save, deactivation or send was performed during the native read-only investigation.

The parent inspected a fresh owner-controlled Gmail kit message `1a187b2f656cc895` after the per-template fix: no open pixel or wrapped content link; SPF, DKIM and DMARC passed; Gmail placed it in Inbox Promotions. iCloud added a spam flag. This proves the inspected receipt, not guaranteed inbox placement. Earlier messages retain the content present when they were sent.

The native workflow unsubscribe resolved to a `campaign-statistics.com/trx_unsubscribe/` URL in that delivered message. The parent clicked that owner-only unsubscribe and read back both `email` and `temail` as unsubscribed at 12:58:56Z. The page stated no newsletters would follow. Groups were preserved. This verifies suppression for both email channels on the inspected owner contact, rather than relying on the resolved URL alone.

After the later single-signup copy change, all seven workflow bodies and the unsent newsletter draft were saved again. Their links and unsubscribe tokens were preserved. The parent is rechecking the per-template tracking flags and next actual recipient message after those saves. Do not infer this from the account defaults.

Sender's [transactional monitoring guide](https://www.sender.net/help/transactional-emails/monitoring-transactional-delivery/) distinguishes delivery/bounce events from pixel-based opens and tracked clicks. The account controls above were verified in the current native UI; the help guide does not document those controls.

## Hosted form embedding

URL: https://stats.sender.net/forms/dyPKAg/view

A public HEAD request returned HTTP 200. Its response had no `X-Frame-Options` header and no `Content-Security-Policy` or `frame-ancestors` restriction.

Before the single-signup change, a fresh isolated headless Chrome loaded that URL inside an iframe served by localhost. The form's own nested iframe rendered with no page errors. That earlier version readback confirmed:

- Email required.
- First name optional.
- MARKETING interest checkbox unchecked and optional.
- Explicit six lessons, monthly newsletter and occasional service offers consent label.
- Visible privacy link to https://guildframe.com/privacy.

The same earlier-version check passed at a 390 × 844 viewport. The native form's inner viewport was 354 px wide, with document scroll width 354 px and scroll height 525 px. No horizontal overflow was observed. The test's outer iframe was 760 px high. Keep dialog scrolling available for smaller screens and validation messages.

Raw temporary results: `/private/tmp/guildframe-embed-check.json` and `/private/tmp/guildframe-embed-mobile-check.json`.

## Single-signup revision

On 29 October the native form was changed to one explicit kit-and-updates signup. Its saved builder routing now has KIT_REQUESTED and MARKETING as base groups and no interest checkbox. The visible offer names the free Tabletop Campaign Launch Kit, six launch lessons, monthly newsletter/tips and occasional Guildframe service offers; the button is Send my kit & updates. Double opt-in and the privacy link remain. Existing contacts were not moved. Final public readback confirmed a single title and the full disclosure before the fields/button, required email, optional first name, no checkbox and a working privacy link. At 390 x 844 the inner width and scroll width were both 370 px, with height 578 px. No horizontal overflow. Native rich-text changes required reopening the saved builder and saving again to compile into the public markup; a saved builder preview alone was insufficient. Readback is also recorded in `sender-form-state.md`; the earlier checkbox screenshots/results describe the previous form only.

## Address line normalization

The Sender address line initially contained `Suite #6291, Edinburgh`, while the separate city field already held `Edinburgh`. It was normalized to `Suite #6291` so templates using separate account address/city/state fields avoid duplication. Existing city `Edinburgh`, state `Scotland`, country `United Kingdom` and postcode `EH1 1EE` were preserved without changes. Saved fields were read back after reload. This records configuration, not a verified rendered inbox footer.

## Confirmation message exception

The owner received native confirmation message `1a187cef08eb83b9` in Inbox. Before clicking confirmation, both email and temail remained non-subscribed even though KIT_REQUESTED and MARKETING groups were assigned. The native `{$unsubscribe-link}` compiled to an empty href for this unconfirmed recipient. The broken anchor was removed from the confirmation template only. It now says: "If you did not sign up, ignore this email. Your subscription starts after you confirm. You can unsubscribe from the emails that follow at any time." The supplied contact address, Suite #6291, Edinburgh, Scotland, was added. The native confirmation link and privacy/contact links remain. No additional test was sent for this correction.

The seven workflow templates were not changed. Their unsubscribe link had already been verified to suppress both email and temail, covering newsletters and automation.

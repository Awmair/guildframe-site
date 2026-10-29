# Sender form handoff

Checked in the native Sender UI on 29 October 2026.

- Form: **Guildframe tabletop launch kit**, ID `dyPKAg`.
- Builder: https://app.sender.net/forms/builder/dyPKAg
- Publishing settings: https://app.sender.net/forms/dyPKAg/settings
- Hosted URL: https://stats.sender.net/forms/dyPKAg/view
- State: **published**. Native double opt-in is enabled and remained checked after reloading saved settings. Sender states that connected automations trigger only after email confirmation.
- Confirmation email: **Confirm your Guildframe launch kit request**, from **Umair at Guildframe <umair@guildframe.com>**. Preview: **One click to confirm your address and receive all five files.**
- The native confirmation email heading and body explain the requested kit. Its footer says lessons, newsletters and offers follow only if chosen separately. The native `{$double-optin-link}` was preserved. Contact and privacy links are included.
- Base group: `KIT_REQUESTED` (`dB2PEN`).
- Optional interest group: `MARKETING` (`dJ2NXP`). Label: **Yes, send me Guildframe's six follow up lessons, then a monthly tabletop newsletter and occasional service offers. I can unsubscribe at any time.**
- Saved routing was read back from the builder. The separate mandatory Confirmation checkbox remains off.
- Public hosted form readback: email `required=true`; first name `required=false`; MARKETING checkbox `checked=false`, `required=false`. Its visible footer includes a working privacy link to https://guildframe.com/privacy.
- Submit redirect saved: https://guildframe.com/resources/tabletop-kickstarter-launch-kit/thanks
- Preview: cream background and green Get the kit button.
- `app/launch-kit.ts` uses the verified hosted URL by default. Environment overrides remain supported. Set `NEXT_PUBLIC_SENDER_LAUNCH_KIT_FORM_URL` to an empty value and leave the embed URL empty to restore the truthful manual email-request mode.

## Finish delivery QA after live assets and workflow readiness

1. Root controls workflow activation. Verify all live kit URLs before activation.
2. Coordinate test submissions with the owner. Use owner-controlled email aliases only: one with marketing unchecked, one checked. Confirm that both require email confirmation; only the checked alias joins MARKETING; neither receives nurture before confirmation; kit-only receives the full kit and no marketing. Verify the redirect and final ZIP link.
3. Check duplicate entry, unsubscribe suppression and send-time exclusions. Suppress test contacts after QA.

No visitor test submissions, test emails, workflow activation, support messages or plan purchases were performed while preparing and publishing this form. Form publication is verified; inbox delivery and live automation behavior still need end-to-end testing.

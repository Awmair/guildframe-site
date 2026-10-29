# Sender form handoff

Checked in the native Sender UI on 29 October 2026 after the user requested a single, explicit kit-and-updates signup.

- Form ID: `dyPKAg`; existing dashboard label **Guildframe tabletop launch kit**.
- Public title: **Tabletop Campaign Launch Kit**.
- Builder: https://app.sender.net/forms/builder/dyPKAg
- Publishing settings: https://app.sender.net/forms/dyPKAg/settings
- Hosted URL: https://stats.sender.net/forms/dyPKAg/view
- State: **published**. Native double opt-in remained enabled after reloading saved settings. Sender states that connected automations trigger after confirmation.
- Both base groups: `KIT_REQUESTED` (`dB2PEN`) and `MARKETING` (`dJ2NXP`). Saved builder readback shows both. Optional interest group rows were removed. No existing contacts were edited or moved.
- Required email and optional first name. No game type or stage field.
- Button: **Send my kit & updates**.
- Visible subtitle, before the fields and submit button: **Sign up for the free Tabletop Campaign Launch Kit: all five files, six launch lessons, a monthly newsletter with tabletop tips and occasional Guildframe service offers. Confirm your email to start. Unsubscribe from any email. Privacy notice.** The privacy text links to https://guildframe.com/privacy. The duplicate bottom paragraph is hidden.
- Separate mandatory Confirmation checkbox remains off. There is no marketing checkbox.
- Submit redirect: https://guildframe.com/resources/tabletop-kickstarter-launch-kit/thanks
- Confirmation subject: **Confirm your Tabletop Campaign Launch Kit and updates**, from **Umair at Guildframe <umair@guildframe.com>**. Preview: **Confirm for the kit, six lessons, monthly tips and occasional Guildframe offers.**
- Confirmation body lists all five files, six lessons, monthly newsletter/tips and occasional Guildframe offers. Native confirmation token was preserved. The requested verification email includes privacy/contact links and the supplied Suite #6291, Edinburgh, Scotland address. Its broken pre-confirmation unsubscribe anchor was removed after the owner receipt exposed an empty href; the footer explains that subsequent emails can be unsubscribed from at any time. See `00-confirmation-copy.md`.

## Public form readback

A fresh isolated headless Chrome checked the final hosted form without submitting. It rendered the title and complete disclosure before Email, Name and the submit button; email was required, name optional, and no checkbox was present. The privacy link was correct. At a 390 x 844 viewport the inner form width and scroll width were both 370 px, with height 578 px: no horizontal overflow. The native rich-text fields needed reopening the saved builder and saving again before Sender compiled them into the public form markup; checking the builder alone was insufficient. Temporary readback: `/private/tmp/guildframe-single-signup/public-readback.json`.

## Workflow readback

Workflow `ejRyxW` is **Tabletop Campaign Launch Kit and updates**. It was briefly deactivated for the seven email copy updates, passed validation with no problems or warnings, and was reactivated. Comparing the entire graph before and after confirmed all 37 nodes, trigger settings, delays and branches unchanged except the intended email subject/preview copy. All six MARKETING gates and eighteen lead-status checks remain. Existing kit-only contacts do not acquire marketing permission through this update.

## Remaining recipient checks

The parent verified an earlier owner-only unsubscribe: both the email and temail channels became unsubscribed, stopping newsletters and automation; groups were preserved. The root agent controls the new single-signup submissions and inbox checks. Verify new signups join both groups, require confirmation and receive no workflow email until confirmed. Check final redirect, duplicate entry, unsubscribe across automation/newsletter channels, bounce suppression and enquiry/client exclusions. Recheck per-template tracking flags after the content save. Publication and readback do not establish inbox placement or unsubscribe scope.

# Tabletop Campaign Launch Kit emails

The public offer is one explicit signup for the free **Tabletop Campaign Launch Kit**, six launch lessons, a monthly newsletter with tabletop tips and occasional Guildframe service offers. The form states this before the **Send my kit & updates** button. There is no separate marketing checkbox. Native double opt-in remains required.

The seven HTML emails and matching plain text files mirror workflow `ejRyxW`, **Tabletop Campaign Launch Kit and updates**. The native confirmation is separate. The monthly newsletter is a draft for review, not a scheduled broadcast.

## Routing and timing

New signups use form `dyPKAg` and join both `KIT_REQUESTED` (`dB2PEN`) and `MARKETING` (`dJ2NXP`). Sender confirms the email address before triggering the connected workflow. Email 01 delivers all five files immediately after confirmation; the six lessons follow on days 2, 5, 8, 12, 17 and 21. The trigger runs once, so repeat requests do not restart the sequence.

The MARKETING membership check remains before each lesson. Existing kit-only contacts and project enquirers were not added to MARKETING. Email 01 retains a delivery-specific footer that also remains accurate for those older contacts. Each lesson also checks `lead_status` and skips `active_enquiry`, `proposal` and `client`. A contact who fails one of these nested checks exits the remaining branch. Stage lists in `sequence.json` are editorial guidance; the current form collects email and optional first name, so automated stage filtering is not configured.

Do not import Josh or other enquiry contacts without a signup. Josh's original source remains unknown unless actual evidence establishes it. Measure confirmed subscriptions, qualified enquiries, proposals and accepted projects separately. Opens are not a success metric.

## Release checks

1. Verify live ZIP and individual download URLs and inspect the resulting files.
2. Read back published form routing, required email, optional name, complete subscription disclosure, privacy link, success redirect and double opt-in.
3. Use owner-controlled aliases to verify unconfirmed signups receive no workflow emails; confirmed signups receive the complete kit and have the intended groups. Do not bulk change existing contacts.
4. Check actual recipient MIME for a resolved confirmation link, working unsubscribe links in the subsequent emails, the mailing address, authentication and absence of engagement pixels/click wrappers. Account tracking defaults do not repair existing templates; verify each template's flags after content updates.
5. Test unsubscribe suppression across the workflow and newsletter channel, duplicates, bounce handling and active enquiry/proposal/client exclusions. Record behavior before claiming completion.
6. Review a newsletter before any broadcast. Preserve the native unsubscribe footer and use only its eligible, subscribed audience.

The native drag-and-drop confirmation keeps Sender's native `{$double-optin-link}`. It asks an unconfirmed recipient to verify the requested signup; ignoring it leaves the email channels non-subscribed. Its attempted native unsubscribe token resolved to an empty href for an unconfirmed owner, so that broken anchor was removed. It states that the emails after confirmation can be unsubscribed from at any time. The custom HTML workflow retains its working `{{ unsubscribe_link }}` and account address fields. Do not replace either format without checking the relevant editor and delivered message. Actual inbox tests are recorded in `tracking-and-embed-qa.md`.

## Official references

- [Native form groups and double opt-in](https://www.sender.net/help/lead-capture/connecting-forms-to-lists/)
- [Current MCP content format](https://api.sender.net/mcp/)
- [Personalization and account fields](https://www.sender.net/help/email-campaigns/personalization-basics/)
- [Unsubscribe and address settings](https://www.sender.net/help/deliverability-compliance/unsubscribe-compliance-setup/)

# Launch kit email setup

These files are prepared drafts, not sent campaigns. The seven content emails are supplied as complete HTML and matching plain text. Email 01 delivers the kit; 02 to 07 require explicit optional marketing consent. The native confirmation is separate. A monthly newsletter example is included for later manual review and editing.

## Routing and timing

Request kit → native address confirmation → email 01 with complete kit → if optional marketing accepted, the relevant lessons at days 2, 5, 8, 12, 17 and 21 → monthly newsletter. Use the kit base group for delivery and a separate optional marketing interest group. Do not use Sender's mandatory Confirmation checkbox to force ongoing marketing. Timing, stages and exclusions are in sequence.json.

Skip lessons that do not fit the declared stage. Pause acquisition when someone replies with a project, submits an enquiry, receives a proposal or becomes a client. Do not add existing enquiry contacts without permission. A future client newsletter needs relevant content and the person's existing preference.

## Configuration checks

1. Confirm the sender domain is ready and actual recipient inbox headers pass authentication.
2. Preview the current Liquid tags using Sender's picker: {{ unsubscribe_link }}, {{ account.address }}, {{ account.city }}, {{ account.zip_code }}, {{ account.state }} and {{ account.country }}. Some older help pages still show legacy dollar tags. Do not use unresolved tokens in live mail.
3. Verify the actual postal address in the account. These templates deliberately do not hardcode the address supplied in chat.
4. Keep Sender's required footer, branding and unsubscribe intact. Set unsubscribe confirmation off so a click processes immediately; verify queued messages stop.
5. Confirm the ZIP and individual files return successfully from production and contain the intended complete kit. Test Gmail, Outlook and mobile rendering.
6. Test new requests with marketing unchecked, checked and confirmed, and checked but unconfirmed. Kit-only people get no lessons/newsletters. Also test duplicates, unsubscribe, bounce handling and the enquiry/client exclusion.
7. Replace the hosted form/confirmation success URL with the actual configured values. The proposed site help route is /resources/tabletop-kickstarter-launch-kit/thanks and is noindex.

Do not bulk import Josh or other enquiry contacts. Source remains unknown unless actual evidence establishes it. Track qualified enquiries, proposals and accepted projects separately from kit requests, provider delivery events and opens.

## Official references

- Native form groups and double opt-in: https://www.sender.net/help/lead-capture/connecting-forms-to-lists/
- Current Liquid and content format: https://api.sender.net/mcp/
- Personalization/account fields: https://www.sender.net/help/email-campaigns/personalization-basics/
- Unsubscribe and address settings: https://www.sender.net/help/deliverability-compliance/unsubscribe-compliance-setup/
- Clarity consent API used by the site: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2
- Google consent reference: https://developers.google.com/tag-platform/security/guides/consent

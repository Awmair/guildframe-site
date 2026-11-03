# Contact spam fix — 3 November 2026

Recent unsolicited sales pitches and repeated generic price enquiries were delivered through the website contact route. Production had no Turnstile secret and the form rendered no widget. The backend treated verification as optional, so copied form fields and a forged Origin header could reach Sender with an empty honeypot.

The regression test reproduced that fail-open behaviour: an unverified request returned 200 and reached the mocked mail provider. It now returns 503 when protection is not configured, with no provider request. A configured route rejects a missing, rejected, expired, reused, wrong-host or wrong-action token before email delivery. Verification outages fail closed. Do not remove this requirement to work around a configuration failure.

The free managed widget is restricted to guildframe.com and www.guildframe.com, with action `contact` and no pre-clearance. The public sitekey is in `ContactSecurity.tsx`; the private key belongs only in the encrypted Cloudflare Pages `TURNSTILE_SECRET_KEY` production binding. No secret is committed. This binding must accompany any redeployment or project migration.

The form disables sending until verification succeeds, clears expired tokens, resets the challenge after a request and retains the enquiry on failure. If scripts or the check are unavailable, the visible email link remains available. Small phones use Cloudflare's compact widget. The existing `/api/contact`, Sender delivery, reply action and lead-status handling remain in place. The kit signup is separate and retains its existing confirmation flow.

No messages were deleted, no reply was sent to a spam sender, and no blanket rule hides Guildframe enquiries. Names, email providers and non-English writing are not blocked. This protects against unverified automated contact posts; it cannot guarantee removal of manually submitted sales pitches or mail sent directly to the public email address.

Checks: 16 backend tests covering the actual handler; full static output suite; lint and TypeScript. Sandboxed local Playwright with pinned installed version and system Chrome covers desktop, 390px and 320px views, disabled-before-verification, expiration, provider-error retry and success. Its browser challenge is a labelled fixture, not a claim that a live human solved Cloudflare. Production checks must separately reject missing and invalid tokens and verify the correct deployment and public widget configuration.

Reference: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

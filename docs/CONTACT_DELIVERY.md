# Contact delivery through Cloudflare Pages and Sender

Prepared on 29 October 2026. The client now targets `/api/contact`. The parent confirmed an actual Sender email in the destination inbox, with SPF, DKIM and DMARC passing, and configured the Cloudflare production secrets. Deployment and the final live-handler check remain with the parent. This agent has not sent mail or deployed.

## Retained Formspree fallback

Formspree's AJAX path rejected this form's CAPTCHA settings. If the configured endpoint is later changed back to external Formspree, the client lets the browser submit natively. Before that ordinary POST, it copies the page/source attribution already assembled in FormData into hidden inputs. Without JavaScript, the form's POST action also works normally.

Only that external fallback shows **Continue to send** and the security-check instruction. It does not claim delivery, bypass CAPTCHA, mark the enquiry sent, or emit `generate_lead`. The current internal `/api/contact` route uses AJAX and shows success only after the function accepts the enquiry.

Initial transactional sends returned HTTP 401 before Sender approved account review. The parent then verified inbox delivery and authentication. This confirms provider delivery; the parent will separately verify the deployed contact handler.

## Endpoint and provider contract

`functions/api/contact.ts` serves `POST /api/contact` through Cloudflare Pages file routing. It accepts the current form's multipart fields, URL encoded forms, or a JSON object. Ordinary HTML submissions receive a simple accessible result page; AJAX receives `{ok, message, requestId}`. Other methods receive 405. [Cloudflare Pages routing](https://developers.cloudflare.com/pages/functions/routing/).

The function calls `POST https://api.sender.net/v2/message/send` with `Authorization: Bearer <server token>`. Its fixed recipient is `umair@guildframe.com`; the verified Guildframe address supplies `from.email`, and the visitor's email is requested as the standard `Reply-To` message header. The subject is fixed. Both plain text and escaped HTML include the project details and source fields. Sender documents the `from`, `to`, `subject`, `text`, `html` and optional `headers` payload, and a successful response containing `success: true` and `emailId`. [Sender transactional send API](https://api.sender.net/transactional-campaigns/send-transactional/), [Sender authentication](https://api.sender.net/authentication/).

**Verified provider limitation:** Sender omitted the requested Reply-To header in the received test email. The function retains the standard requested header as best effort, but does not rely on it. The notification instead puts a prominent escaped **Reply to [name]** mailto link above the details, addressed directly to the visitor with subject `Re: your Guildframe project`. The plain-text version includes the email address and the same mailto action. Use this action to reply, rather than assuming the inbox's default Reply command reaches the visitor.

Provider acceptance confirms submission to Sender; an inbox receipt and delivered event establish delivery. Reply-To preservation is not a release gate now that the direct reply action is present. [Sender identity and delivery verification](https://www.sender.net/help/transactional-emails/sender-identity-and-domain-requirements/).

## Exact configuration

Configure these as **runtime bindings** on the correct Cloudflare Pages project and environment, before deploying the function. API keys must be encrypted secrets, with no `NEXT_PUBLIC_` prefix. Cloudflare exposes these through `context.env`; `_headers` rules do not apply to function responses, so the function supplies its own cache and security headers. [Cloudflare bindings and secrets](https://developers.cloudflare.com/pages/functions/bindings/), [Cloudflare response headers](https://developers.cloudflare.com/pages/configuration/headers/).

| Binding | Value and purpose |
| --- | --- |
| `SENDER_API_KEY` | Required encrypted Sender API access token authorized for transactional sends. Create it through Sender's normal account settings or transactional setup UI. Never commit, print, embed or send this token to the browser. |
| `SENDER_FROM_EMAIL` | Required valid address on the verified sending domain. Intended value: `umair@guildframe.com`. |
| `SENDER_FROM_NAME` | Optional, default `Guildframe website`. |
| `CONTACT_ALLOWED_ORIGINS` | Optional comma separated exact site origins. Default `https://guildframe.com,https://www.guildframe.com`. For a preview, explicitly add that exact HTTPS preview origin. Local testing can explicitly use `http://localhost:8788`. There are no wildcard origins. |
| `SENDER_LEAD_STATUS_FIELD` | Optional. Set to `{{lead_status}}`, the exact field name verified by `GET https://api.sender.net/v2/fields` for this account (field ID `bD9LpY`). The display label `Lead status` is insufficient. Omit to disable subscriber lookup/update. The handler also accepts legacy tokens such as `{$lead_status}`. |
| `TURNSTILE_SECRET_KEY` | Optional encrypted secret. **Leave unset until a matching widget actually adds `cf-turnstile-response` to this contact form.** Setting it makes a valid token mandatory. No widget or frontend dependency is added by this change. |

Sender requires a verified sending domain and its supplied SPF, DKIM and DMARC records. Check the domain's green authentication indicators and account sending eligibility. Its official authentication guide warns that API tokens carry account access; use the narrowest available permissions that support the selected operations. Optional lead updates additionally require subscriber read/update access. [Sender domain requirements](https://www.sender.net/help/transactional-emails/sender-identity-and-domain-requirements/), [Sender token authentication](https://api.sender.net/authentication/).

Transactional email is available on Sender Free. Transactional and marketing mail share the account's 15,000 monthly messages, so internal contact notifications also consume that allowance. No new paid subscription is needed. [Sender transactional plans and shared allowance](https://www.sender.net/features/transactional-emails/).

## Validation, abuse controls and failure behavior

- Request URL and Origin must be on the exact allowlist. A trusted Referer can supply the origin when a native form omits Origin. Explicit cross-site requests are rejected. No permissive CORS response is added.
- A streamed 32 KiB limit applies even without Content-Length. Required project fields, individual length limits, email format, safe project-link protocols, duplicate form fields and file uploads are checked.
- `_gotcha` honeypot submissions receive a generic success response without sending anything. Origin and honeypot checks filter basic unwanted submissions; they do not provide a distributed bot rate limit. If abuse occurs, use a scoped Cloudflare rule or enable the existing optional Turnstile contract.
- User content is escaped in HTML. The visitor cannot choose the recipient, authenticated sender, subject or arbitrary mail headers. Page attribution drops query strings and fragments. The function never fetches a submitted project URL.
- Optional Turnstile validation checks Siteverify success and a trusted hostname. Missing, expired or invalid tokens prevent sending. Cloudflare states tokens are single-use, expire after five minutes, and require server validation. [Cloudflare Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
- Missing configuration, Sender rejection, invalid provider responses and network failures return a non-success response with a direct email fallback. The handler never automatically retries a mail send, avoiding accidental duplicates after a timeout.
- Logs contain only an internal request ID, provider email ID, event name and HTTP status. They omit form contents, visitor email, IP address and credentials. Sender receives enquiry content for the requested delivery; no separate enquiry database is created.

## Optional existing-contact update

After Sender accepts the enquiry email, the function can look up the visitor by email. Only a returned existing ID with the matching email is patched. It writes the configured custom field to `active_enquiry` and sends `trigger_automation: false`. It never creates a subscriber, changes groups, sets subscriber/transactional status, or clears suppression. Unknown contacts remain outside marketing; an optional lookup/update failure does not change a successful enquiry result. Cloudflare `waitUntil` runs this small optional task after the response. [Sender subscriber lookup](https://api.sender.net/subscribers/get-one/), [Sender subscriber update](https://api.sender.net/subscribers/update-subscriber/), [Cloudflare function context](https://developers.cloudflare.com/pages/functions/api-reference/).

The Sender field update documentation shows legacy `fields` keys such as `{$test_text}`. The authenticated account response verified on 29 October returned the modern token `{{lead_status}}` with ID `bD9LpY`. The handler accepts both formats and preserves the configured token exactly; use the actual account response. [Sender field listing](https://api.sender.net/fields/get-all/).

## Verification and cutover

Required submitted fields are `name`, `email`, `game_category`, `service_interest` and `message`; the existing form already supplies them. `next dev` serves the static application, not this Pages Function. Use Wrangler Pages development or a Cloudflare Pages preview for an actual endpoint test.

1. Deploy the root `functions/` directory through the project's Cloudflare Pages CI/Wrangler workflow along with the static output. A static-only artifact upload does not establish that the function is available. Keep function invocation routing limited to `/api/contact` as appropriate; Pages can generate `_routes.json` when Functions are detected. [Pages function routing](https://developers.cloudflare.com/pages/functions/routing/).
2. Confirm `GET /api/contact` returns 405 with `Allow: POST`. Confirm a foreign Origin, an oversized body and a populated honeypot do not generate email.
3. With the exact preview origin allowed and production credentials configured server-side, submit one clearly labelled real test enquiry. Check the fixed inbox, full project text, authenticated From, and direct reply action. Confirm a delivered event in Sender logs. Do not claim a verified Reply-To header: the received provider test omitted it. A 200 or `emailId` alone is not proof of inbox delivery.
4. If optional lead updates are enabled, use an already authorized test contact. Confirm only its custom field changes, existing suppression/groups remain intact, and an unknown enquiry address is not added to marketing.
5. Provider inbox delivery is verified and `siteConfig.formEndpoint` is now `/api/contact`. The parent completes the privacy provider disclosure, deployment and live AJAX/native HTML checks. The retained Formspree-specific wording and native-submit branch are inactive with this endpoint.

Local security/validation tests: `npm run test:contact` (runs `node --experimental-strip-types --test tests/contact-handler.test.mjs`). They mock all external calls and send no email. `npm test` runs the normal static build/tests followed by this contact suite. Run lint/typecheck separately.

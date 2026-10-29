import Link from "next/link";
import { launchKit, launchKitAutomatedSignup, launchKitEmbedUrl, launchKitFormUrl } from "../launch-kit";
import { siteConfig } from "../site-config";

export function LaunchKitSignup() {
  return <section className="kit-signup" id="get-the-kit" aria-labelledby="kit-signup-title">
    <span className="gf-eyebrow">Free kit and email updates</span>
    <h2 id="kit-signup-title">Get the kit and updates.</h2>
    <p>{launchKit.signupCopy} Use the workbook and documents in your own project.</p>
    {launchKitEmbedUrl ? <iframe className="kit-signup-frame" src={launchKitEmbedUrl} title={`Sign up for the ${launchKit.title} and updates`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : null}
    {launchKitFormUrl ? <a className="gf-button" href={launchKitFormUrl} data-analytics-event="launch_kit_signup_click" data-analytics-label="Send my kit and updates" data-analytics-location="launch kit signup">Send my kit &amp; updates</a> : !launchKitEmbedUrl ? <a className="gf-button" href={`mailto:${siteConfig.contactEmail}?subject=Tabletop%20Campaign%20Launch%20Kit%20and%20updates&body=${encodeURIComponent("Please send me the free Tabletop Campaign Launch Kit, six launch lessons, a monthly newsletter with tabletop tips and occasional Guildframe service offers.")}`} data-analytics-location="launch kit signup">Email Umair for kit &amp; updates</a> : null}
    <p className="kit-signup-note">{launchKitAutomatedSignup ? "Confirm your email to receive all five files and start the emails. Unsubscribe at any time." : <>The link opens your email app. Send your signup request to {siteConfig.contactEmail}. Unsubscribe at any time.</>} <Link href="/privacy">Privacy notice</Link>.</p>
  </section>;
}

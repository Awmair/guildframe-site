import Link from "next/link";
import { launchKit } from "../launch-kit";

export function LaunchKitTeaser() {
  return <section className="gf-section gf-kit-teaser" aria-labelledby="kit-teaser-title">
    <div className="gf-kit-teaser-copy"><span className="gf-eyebrow gf-kit-teaser-free">FREE TABLETOP LAUNCH KIT</span><h2 id="kit-teaser-title">Five useful files.<br/><em>A clearer launch plan.</em></h2><p>A 12 tab workbook for the numbers and launch tasks. Campaign copy and email templates. Creative briefs, a start guide and worked examples. All five files are free.</p><Link className="gf-button" href={launchKit.path} data-launch-kit-prompt data-analytics-event="lead_kit_interest" data-analytics-location="homepage kit">Get the free launch kit</Link><span className="gf-kit-free-note">Editable files. Free by email. Your project stays yours.</span></div>
    <div className="gf-kit-browser"><div className="gf-kit-browser-bar"><span className="gf-window-dots" aria-hidden="true"><i/><i/><i/></span><span>Tabletop Kickstarter Launch Kit</span></div><div className="gf-kit-browser-body"><div className="gf-kit-file-list"><span className="gf-kit-folder">Five files. One working plan.</span>{launchKit.files.map(file => <div key={file.name}><span className="gf-file-type">{file.format}</span><span>{file.title}<small>{file.name}</small></span></div>)}</div><Link href={launchKit.path} className="gf-kit-page-preview" aria-label="Preview the real launch kit files"><img src="/downloads/launch-kit/preview-start-here.webp" width="993" height="1404" alt="The actual first page of the Tabletop Kickstarter Launch Kit start guide" loading="lazy"/><span>START-HERE.pdf · Actual file preview</span></Link></div></div>
  </section>;
}

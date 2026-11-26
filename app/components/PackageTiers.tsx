import { Icon, Roll } from "./chrome/Icon";
import { brandToLaunch, launchReady, outsideNote, videoNote, type LaunchPackage } from "../packages";

/** The two packages as full itemised cards. Brand to Launch lists only what it adds, then points back to Launch Ready. */
export function PackageTiers({ location }: { location: string }) {
  const tier = (pack: LaunchPackage, wide: boolean, id?: string) => {
    const groups = wide ? pack.groups.filter(group => !launchReady.groups.includes(group)) : pack.groups;
    return (
      <article className={`h-tier${wide ? " h-tier--wide" : ""}`} id={id} data-reveal="rise">
        <p className="h-tier-for">{pack.audience}</p>
        <h3>{pack.name}</h3>
        <div className="h-price">{pack.priceText}</div>
        <p>{pack.summary}</p>
        {wide ? <p className="h-tier-plus">Everything in {launchReady.name}: planning and strategy, the campaign page and the campaign video. Plus:</p> : null}
        <div className="h-tier-groups">
          {groups.map(group => (
            <div className="h-tier-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="h-tier-actions">
          <a className={`w-btn ${wide ? "w-btn--coral" : "w-btn--ink"}`} href="#start-project" data-analytics-event="service_interest" data-analytics-label={pack.name} data-analytics-location={location}><Roll>{wide ? "Start with the brand" : "Get launch ready"}</Roll><Icon name="arrow" /></a>
        </div>
      </article>
    );
  };
  return (
    <>
      <div className="h-tiers">
        {tier(launchReady, false, "pricing")}
        {tier(brandToLaunch, true)}
      </div>
      <div className="h-tier-notes">
        <p><strong>About the video.</strong> {videoNote}</p>
        <p><strong>Not in the packages.</strong> {outsideNote}</p>
      </div>
    </>
  );
}

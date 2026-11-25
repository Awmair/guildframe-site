"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ResponsiveImage } from "./ResponsiveImage";

const walkthroughs = {
  "scented-realms": {
    title: "ScentedRealms: introducing an unfamiliar accessory",
    image: "scented-realms",
    alt: "ScentedRealms campaign composition with the packaged fantasy scents and ScentEngine",
    credit: "Campaign presentation and visual direction by Umair. Product imagery and the ScentedRealms identity belong to the project creator.",
    campaign: "https://www.kickstarter.com/projects/hans-h-h-hansen/scentedrealms-fantasy-scents-for-immersive-gameplay",
    steps: [
      { title: "Introduce an unfamiliar RPG accessory", start: 0, copy: "ScentedRealms brings fantasy scents to a roleplaying table. For its Kickstarter campaign, Umair developed the visual direction and campaign presentation. The first job was to make an unfamiliar accessory understandable.", position: "50% 50%", scale: 1 },
      { title: "Keep the physical products visible", start: 14.4, copy: "The opening composition puts the physical products in the foreground. Visitors can see the ScentEngine, the packaged scents and the wider collection, while the fantasy imagery establishes the setting.", position: "50% 77%", scale: 1.14 },
      { title: "Bring the collection into one composition", start: 26.8, copy: "Grouping the products gives the collection a visible scale. The red frame, dark background and fantasy color keep the presentation consistent, while the products remain the focus.", position: "50% 65%", scale: 1.06 },
      { title: "Explain the product, its use and the reward", start: 38.1, copy: "For a launch like this, the page needs to explain what the accessory is, how it fits into a session and what a backer receives. Umair's contribution was the campaign presentation. The product, identity and supplied imagery belong to the creator.", position: "50% 50%", scale: 1 },
    ],
  },
  "futureproof-terrain": {
    title: "FutureProof Terrain: connect the parts to the build",
    image: "futureproof",
    alt: "FutureProof Terrain campaign artwork showing assembled terrain beside the separate modular walls and floors",
    credit: "Campaign presentation by Umair. Terrain design, product imagery and the Snot Goblin identity belong to the creator.",
    campaign: "https://www.kickstarter.com/projects/snotgoblingaming/futureproof-wargaming-terrain-by-snot-goblin-gaming",
    steps: [
      { title: "A modular terrain campaign", start: 0, copy: "FutureProof Terrain is a modular wargaming terrain system from Snot Goblin Gaming. Umair designed the Kickstarter campaign presentation around its practical uses, working with the creator's product imagery.", position: "50% 50%", scale: 1 },
      { title: "Show the components beside the build", start: 13.2, copy: "The campaign graphic shows an assembled building beside separate walls and floors. That relationship matters: a player needs to understand how the pieces become terrain they can use on a table.", position: "82% 42%", scale: 1.12 },
      { title: "Keep the product and its benefits clear", start: 25.1, copy: "Short benefit headings keep the graphic easy to scan. The Snot Goblin identity and green accents frame the product against a dark background, so the terrain still carries the explanation.", position: "34% 58%", scale: 1.05 },
      { title: "Explain contents and reward differences", start: 37.1, copy: "For a modular product, the same logic carries through the campaign: show the contents, an assembled view and the differences between rewards. This is campaign creative from the original 2024 launch. It does not measure advertising performance or attribute the campaign's funding.", position: "50% 50%", scale: 1 },
    ],
  },
} as const;

export type WalkthroughProject = keyof typeof walkthroughs;

const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

/**
 * A narrated walkthrough of one client campaign.
 * layout "card" (default) is the compact block used on the case study pages.
 * layout "feature" shows the video large with the steps beside it as a clickable sequence, which is also the full transcript.
 */
export function CreativeWalkthrough({ project, video, layout = "card" }: {
  project: WalkthroughProject;
  video?: { src: string; captions: string };
  layout?: "card" | "feature";
}) {
  const walkthrough = walkthroughs[project];
  const id = `${project}-walkthrough`;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const current = walkthrough.steps[step];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (step === walkthrough.steps.length - 1) setPlaying(false);
      else setStep(step + 1);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [playing, step, walkthrough.steps.length]);

  useEffect(() => {
    const pauseWhenHidden = () => { if (document.hidden) setPlaying(false); };
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => document.removeEventListener("visibilitychange", pauseWhenHidden);
  }, []);

  function selectStep(next: number) {
    setPlaying(false);
    setStep(next);
  }

  const showVideo = Boolean(video) && !videoFailed;

  /** Keeps the highlighted step in time with the narration. */
  function followVideo() {
    const time = videoRef.current?.currentTime ?? 0;
    let index = 0;
    walkthrough.steps.forEach((item, i) => { if (time + 0.2 >= item.start) index = i; });
    if (index !== step) setStep(index);
  }

  /** Jumps the video to the start of a step and plays from there. */
  function seek(index: number) {
    const element = videoRef.current;
    const time = walkthrough.steps[index].start;
    setStep(index);
    setStarted(true);
    if (!element) return;
    if (element.readyState >= 1) element.currentTime = time;
    else element.addEventListener("loadedmetadata", () => { element.currentTime = time; }, { once: true });
    void element.play().catch(() => {});
  }

  const videoElement = video && <video ref={videoRef} className="gf-walkthrough-video" controls preload="none" playsInline poster={`/images/work/${walkthrough.image}.webp`} width={1280} height={720} aria-label={walkthrough.title} aria-describedby={`${id}-credit`} onPlay={layout === "feature" ? () => setStarted(true) : undefined} onTimeUpdate={layout === "feature" ? followVideo : undefined}>
    <source src={video.src} type="video/mp4" onError={() => setVideoFailed(true)} />
    <track kind="captions" src={video.captions} srcLang="en" label="English" default />
    <p>Read the complete walkthrough transcript below.</p>
  </video>;

  const stage = <div className="gf-walkthrough-stage" data-playing={playing}>
    <ResponsiveImage src={`/images/work/${walkthrough.image}.webp`} alt={walkthrough.alt} width={1400} height={788} loading="lazy" sizes={layout === "feature" ? "(max-width: 900px) calc(100vw - 32px), 60vw" : "(max-width: 760px) calc(100vw - 40px), 580px"} style={{ objectPosition: current.position, transform: `scale(${current.scale})` }} />
  </div>;

  const controls = <div className="gf-walkthrough-controls" aria-label="Walkthrough controls">
    <button type="button" onClick={() => selectStep(step - 1)} disabled={step === 0}>Previous</button>
    <button type="button" aria-pressed={playing} onClick={() => { if (!playing && step === walkthrough.steps.length - 1) setStep(0); setPlaying(!playing); }}>{playing ? "Pause walkthrough" : step === walkthrough.steps.length - 1 ? "Replay walkthrough" : "Play walkthrough"}</button>
    <button type="button" onClick={() => selectStep(step + 1)} disabled={step === walkthrough.steps.length - 1}>Next</button>
  </div>;

  const links = <div className="gf-walkthrough-links"><Link href={`/work/${project}`} data-title={walkthrough.title.split(":")[0]}>Read the case study</Link><a href={walkthrough.campaign} target="_blank" rel="noopener noreferrer">See the published campaign</a></div>;

  if (layout === "feature") {
    const highlight = showVideo ? started : true;
    return <article className="cc-walk" aria-labelledby={`${id}-title`}>
      <header className="cc-walk-head">
        <h3 id={`${id}-title`}>{walkthrough.title}</h3>
        {links}
      </header>
      <div className="cc-walk-body">
        <div className="cc-walk-media">
          <div className="cc-walk-frame" data-reveal="media">{showVideo ? videoElement : stage}</div>
          {videoFailed && <p className="gf-walkthrough-status">The video could not load. Explore the artwork or read the transcript beside it.</p>}
          {!showVideo && controls}
          {showVideo && <p className="gf-walkthrough-credit">Synthetic narration; the steps are the complete transcript.</p>}
          <p className="gf-walkthrough-credit" id={`${id}-credit`}>{walkthrough.credit}</p>
        </div>
        <ol className="cc-walk-steps" aria-label={`${walkthrough.title.split(":")[0]} walkthrough transcript`}>
          {walkthrough.steps.map((item, index) => <li key={item.title} aria-current={highlight && index === step ? "step" : undefined}>
            <button type="button" className="cc-walk-seek" onClick={() => showVideo ? seek(index) : selectStep(index)} aria-label={showVideo ? `Play from ${clock(item.start)}: ${item.title}` : `Show step ${index + 1}: ${item.title}`}>
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="M3 1.8v8.4L10 6Z" fill="currentColor" /></svg>
              <span>{showVideo ? clock(item.start) : `Step ${index + 1}`}</span>
            </button>
            <h4>{item.title}</h4>
            <p>{item.copy}</p>
          </li>)}
        </ol>
      </div>
    </article>;
  }

  return <article className="gf-creative-walkthrough" aria-labelledby={`${id}-title`}>
    <header><span className="gf-eyebrow">Campaign artwork, explained</span><h3 id={`${id}-title`}>{walkthrough.title}</h3></header>
    {showVideo ? videoElement : <>
      {videoFailed && <p className="gf-walkthrough-status">The video could not load. Explore the artwork or read the transcript below.</p>}
      {stage}
      <div className="gf-walkthrough-step" aria-live={playing ? "off" : "polite"}>
        <span className="gf-eyebrow">Step {step + 1} of {walkthrough.steps.length}</span><h4>{current.title}</h4><p>{current.copy}</p>
      </div>
      {controls}
    </>}
    {showVideo && <p className="gf-walkthrough-credit">Synthetic narration; transcript below.</p>}
    <p className="gf-walkthrough-credit" id={`${id}-credit`}>{walkthrough.credit}</p>
    <details className="gf-walkthrough-transcript"><summary>Read the complete transcript</summary><ol>{walkthrough.steps.map(item => <li key={item.title}><h4>{item.title}</h4><p>{item.copy}</p></li>)}</ol></details>
    {links}
  </article>;
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ResponsiveImage } from "./ResponsiveImage";

const walkthroughs = {
  "scented-realms": {
    title: "ScentedRealms: introducing an unfamiliar accessory",
    image: "scented-realms",
    alt: "ScentedRealms campaign composition with the packaged fantasy scents and ScentEngine",
    credit: "Campaign presentation and visual direction by Umair. Product imagery and the ScentedRealms identity belong to the project creator.",
    campaign: "https://www.kickstarter.com/projects/hans-h-h-hansen/scentedrealms-fantasy-scents-for-immersive-gameplay",
    steps: [
      { title: "Introduce an unfamiliar RPG accessory", copy: "ScentedRealms brings fantasy scents to a roleplaying table. For its Kickstarter campaign, Umair developed the visual direction and campaign presentation. The first job was to make an unfamiliar accessory understandable.", position: "50% 50%", scale: 1 },
      { title: "Keep the physical products visible", copy: "The opening composition puts the physical products in the foreground. Visitors can see the ScentEngine, the packaged scents and the wider collection, while the fantasy imagery establishes the setting.", position: "50% 77%", scale: 1.14 },
      { title: "Bring the collection into one composition", copy: "Grouping the products gives the collection a visible scale. The red frame, dark background and fantasy colour keep the presentation consistent, while the products remain the focus.", position: "50% 65%", scale: 1.06 },
      { title: "Explain the product, its use and the reward", copy: "For a launch like this, the page needs to explain what the accessory is, how it fits into a session and what a backer receives. Umair's contribution was the campaign presentation. The product, identity and supplied imagery belong to the creator.", position: "50% 50%", scale: 1 },
    ],
  },
  "futureproof-terrain": {
    title: "FutureProof Terrain: connect the parts to the build",
    image: "futureproof",
    alt: "FutureProof Terrain campaign artwork showing assembled terrain beside the separate modular walls and floors",
    credit: "Campaign presentation by Umair. Terrain design, product imagery and the Snot Goblin identity belong to the creator.",
    campaign: "https://www.kickstarter.com/projects/snotgoblingaming/futureproof-wargaming-terrain-by-snot-goblin-gaming",
    steps: [
      { title: "A modular terrain campaign", copy: "FutureProof Terrain is a modular wargaming terrain system from Snot Goblin Gaming. Umair designed the Kickstarter campaign presentation around its practical uses, working with the creator's product imagery.", position: "50% 50%", scale: 1 },
      { title: "Show the components beside the build", copy: "The campaign graphic shows an assembled building beside separate walls and floors. That relationship matters: a player needs to understand how the pieces become terrain they can use on a table.", position: "82% 42%", scale: 1.12 },
      { title: "Keep the product and its benefits clear", copy: "Short benefit headings keep the graphic easy to scan. The Snot Goblin identity and green accents frame the product against a dark background, so the terrain still carries the explanation.", position: "34% 58%", scale: 1.05 },
      { title: "Explain contents and reward differences", copy: "For a modular product, the same logic carries through the campaign: show the contents, an assembled view and the differences between rewards. This is campaign creative from the original 2024 launch. It does not measure advertising performance or attribute the campaign's funding.", position: "50% 50%", scale: 1 },
    ],
  },
} as const;

export type WalkthroughProject = keyof typeof walkthroughs;

export function CreativeWalkthrough({ project, video }: {
  project: WalkthroughProject;
  video?: { src: string; captions: string };
}) {
  const walkthrough = walkthroughs[project];
  const id = `${project}-walkthrough`;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
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

  return <article className="gf-creative-walkthrough" aria-labelledby={`${id}-title`}>
    <header><span className="gf-eyebrow">Campaign artwork, explained</span><h3 id={`${id}-title`}>{walkthrough.title}</h3></header>
    {video && !videoFailed ? <video className="gf-walkthrough-video" controls preload="none" playsInline poster={`/images/work/${walkthrough.image}.webp`} width={1280} height={720} aria-label={walkthrough.title} aria-describedby={`${id}-credit`}>
      <source src={video.src} type="video/mp4" onError={() => setVideoFailed(true)} />
      <track kind="captions" src={video.captions} srcLang="en" label="English" default />
      <p>Read the complete walkthrough transcript below.</p>
    </video> : <>
      {videoFailed && <p className="gf-walkthrough-status">The video could not load. Explore the artwork or read the transcript below.</p>}
      <div className="gf-walkthrough-stage" data-playing={playing}>
        <ResponsiveImage src={`/images/work/${walkthrough.image}.webp`} alt={walkthrough.alt} width={1400} height={788} loading="lazy" sizes="(max-width: 760px) calc(100vw - 40px), 580px" style={{ objectPosition: current.position, transform: `scale(${current.scale})` }} />
      </div>
      <div className="gf-walkthrough-step" aria-live={playing ? "off" : "polite"}>
        <span className="gf-eyebrow">Step {step + 1} of {walkthrough.steps.length}</span><h4>{current.title}</h4><p>{current.copy}</p>
      </div>
      <div className="gf-walkthrough-controls" aria-label="Walkthrough controls">
        <button type="button" onClick={() => selectStep(step - 1)} disabled={step === 0}>Previous</button>
        <button type="button" aria-pressed={playing} onClick={() => { if (!playing && step === walkthrough.steps.length - 1) setStep(0); setPlaying(!playing); }}>{playing ? "Pause walkthrough" : step === walkthrough.steps.length - 1 ? "Replay walkthrough" : "Play walkthrough"}</button>
        <button type="button" onClick={() => selectStep(step + 1)} disabled={step === walkthrough.steps.length - 1}>Next</button>
      </div>
    </>}
    {video && !videoFailed && <p className="gf-walkthrough-credit">Synthetic narration; transcript below.</p>}
    <p className="gf-walkthrough-credit" id={`${id}-credit`}>{walkthrough.credit}</p>
    <details className="gf-walkthrough-transcript"><summary>Read the complete transcript</summary><ol>{walkthrough.steps.map(item => <li key={item.title}><h4>{item.title}</h4><p>{item.copy}</p></li>)}</ol></details>
    <div className="gf-walkthrough-links"><Link href={`/work/${project}`}>Read the case study</Link><a href={walkthrough.campaign} target="_blank" rel="noopener noreferrer">See the published campaign</a></div>
  </article>;
}

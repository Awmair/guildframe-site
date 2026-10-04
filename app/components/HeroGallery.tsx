"use client";

import { useEffect, useRef, useState } from "react";
import { ResponsiveImage } from "./ResponsiveImage";

const concepts = [
  {image: "board-games", name: "Board games", alt: "Original harbour strategy board game and colourful family game concepts", width: 1000, height: 750},
  {image: "party-cards", name: "Party card games", alt: "Snack Attack, an original colourful fruit themed party card game concept", width: 1200, height: 800},
  {image: "ttrpgs", name: "Tabletop RPGs", alt: "Original noir RPG hardback and cosmic horror zine with character sheets", width: 1000, height: 750},
  {image: "miniatures", name: "Miniatures & terrain", alt: "Original science fiction mechs, woodland miniatures and modular lunar terrain concepts", width: 1000, height: 750},
  {image: "minimal-cards", name: "Indie card games", alt: "Common Ground, an original botanical card game concept with illustrated cards", width: 1200, height: 800},
  {image: "accessories", name: "Dice & accessories", alt: "Original colourful dice, coral dice tray, petrol card sleeves and mint tokens", width: 1000, height: 750},
] as const;

/** A static, labelled deck on the server; motion starts only when permitted. */
export function HeroGallery() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(true);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduced(preference.matches);
    const syncVisibility = () => setVisible(!document.hidden && (!root.current || root.current.getBoundingClientRect().bottom > 0));
    syncMotion();
    preference.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(entries => setVisible(entries[0].isIntersecting && !document.hidden));
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (paused || reduced || !visible || interacting) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % concepts.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, visible, interacting]);

  function choose(direction: number) {
    setPaused(true);
    setActive(current => (current + direction + concepts.length) % concepts.length);
  }

  return <div ref={root} className="gf-hero-visual gf-hero-gallery" role="region" aria-roledescription="carousel" aria-label="Gallery of original tabletop campaign concepts"
    onPointerEnter={event => {if (event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setInteracting(true);}}
    onPointerLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)}
    onBlurCapture={event => {if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);}}>
    <span className="gf-sr-only" aria-live="polite">{paused ? concepts[active].name : ""}</span>
    <span className="gf-gallery-eyebrow">A place for every kind of game</span>
    <div className="gf-gallery-deck">{concepts.map((concept, index) => {
      const offset = (index - active + concepts.length) % concepts.length;
      const slot = offset === 0 ? "front" : offset === 1 ? "right" : offset === concepts.length - 1 ? "left" : "back";
      return <figure className="gf-gallery-card" data-slot={slot} key={concept.image} aria-hidden={index !== active}>
        <ResponsiveImage src={`/images/campaign/${concept.image}.webp`} alt={concept.alt} sizes="(max-width: 800px) 240px, 410px" width={concept.width} height={concept.height} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "low"}/>
        <figcaption><span>{concept.name}</span><span aria-hidden="true">↗</span></figcaption>
      </figure>;
    })}</div>
    <div className="gf-gallery-controls"><span className="gf-gallery-note">Original concepts</span><div><button type="button" className="gf-gallery-arrow" aria-label="Previous game concept" onClick={() => choose(-1)}>←</button><button type="button" className="gf-gallery-pause" aria-pressed={paused} disabled={reduced} aria-label={reduced ? "Gallery motion is disabled by your reduced motion preference" : paused ? "Play gallery" : "Pause gallery"} onClick={() => setPaused(current => !current)}><span aria-hidden="true">{reduced || paused ? "▷" : "Ⅱ"}</span>{reduced ? "Motion off" : paused ? "Play" : "Pause"}</button><button type="button" className="gf-gallery-arrow" aria-label="Next game concept" onClick={() => choose(1)}>→</button></div></div>
  </div>;
}

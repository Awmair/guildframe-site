"use client";

import { useEffect, useRef, useState } from "react";


const concepts = [
  { image: "party-card-game", name: "Snack Attack", category: "Party card games", alt: "Original Snack Attack party game concept with a coral box, illustrated fruit cards and tokens" },
  { image: "strategy-board-game", name: "Tidal Harbour", category: "Strategy board games", alt: "Original Tidal Harbour strategy game concept with painted harbour box, hex map and wooden ships" },
  { image: "trading-card-game", name: "Starbound", category: "Trading card games", alt: "Original Starbound trading card game concept with a celestial deck box and illustrated foil cards" },
  { image: "rpg-book", name: "Moth & Moon", category: "Tabletop RPGs", alt: "Original Moth and Moon folk horror RPG concept with a green clothbound book, adventure zine and character sheets" },
  { image: "miniature-terrain", name: "Orbital Outpost", category: "Miniatures & terrain", alt: "Original Orbital Outpost miniature game concept with a lunar box, sculpted mech and modular terrain" },
  { image: "dice-accessories", name: "Prismatic", category: "Dice & accessories", alt: "Original Prismatic accessories concept with jewel coloured dice, coral suede tray and petrol presentation box" },
] as const;

/** One foreground product, with the remaining concepts orbiting behind it. */
export function HeroGallery() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [ready, setReady] = useState(false);
  const frames = useRef(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduced(preference.matches);
    const syncVisibility = () => {
      const rect = root.current?.getBoundingClientRect();
      setVisible(!document.hidden && !!rect && rect.bottom > 0 && rect.top < window.innerHeight);
    };
    syncMotion();
    preference.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(syncVisibility);
    if (root.current) observer.observe(root.current);
    let mounted = true;
    Promise.all(Array.from(root.current?.querySelectorAll("img") ?? []).map(image => image.decode().catch(() => {})))
      .then(() => { if (mounted) setReady(true); });
    return () => {
      mounted = false;
      preference.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduced || !visible || interacting || !ready || frames.current >= concepts.length) return;
    const timer = window.setInterval(() => {
      frames.current += 1;
      setActive(current => (current + 1) % concepts.length);
      if (frames.current >= concepts.length) window.clearInterval(timer);
    }, 640);
    return () => window.clearInterval(timer);
  }, [reduced, visible, interacting, ready]);

  return <div ref={root} className="gf-game-gallery" role="region" aria-label="Original tabletop campaign concepts"
    onPointerEnter={event => { if (event.pointerType === "mouse") setInteracting(true); }} onPointerLeave={() => setInteracting(false)}>
    <div className="gf-gallery-note"><span className="gf-gallery-spark" aria-hidden="true">✳</span><span>Different games.<br/><strong>Different ways to play.</strong></span></div>
    <div className="gf-gallery-stage">{concepts.map((concept, index) => <figure key={concept.image} className="gf-gallery-product" data-position={(index - active + concepts.length) % concepts.length}>
      <img src={`/images/hero/${concept.image}-480w.webp`} srcSet={`/images/hero/${concept.image}-320w.webp 320w, /images/hero/${concept.image}-480w.webp 480w, /images/hero/${concept.image}-640w.webp 640w`} sizes="(max-width: 650px) 280px, (max-width: 1000px) 350px, 410px" width="640" height="640" alt={concept.alt} loading="eager" fetchPriority={index === 0 ? "high" : "auto"} decoding="async"/>
      <figcaption className="gf-sr-only">{concept.name}. {concept.category}. Original concept.</figcaption>
    </figure>)}</div>
    <div className="gf-gallery-caption" aria-hidden="true"><div><span>On the studio table</span><strong>{concepts[active].name}</strong></div><span className="gf-gallery-category">{concepts[active].category}</span></div>
    <p className="gf-gallery-disclaimer">Original concepts. Client work below.</p>
  </div>;
}

"use client";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { playSound } from "../chrome/sound";

type Piece = {
  src: string;
  width: number;
  height: number;
  alt: string;
  kind: "standee" | "token" | "print" | "concept";
  caption?: string;
  /** Desktop place and size, as a share of the desk. */
  x: number; y: number; w: number;
  /** Phone place and size, or null to leave it off the small desk. */
  m: [number, number, number] | null;
  r: number;
  low?: boolean;
  eager?: boolean;
};

const pieces: Piece[] = [
  { src: "/images/hero/rpg-book-480w.webp", width: 640, height: 640, alt: "Moth and Moon, a folk horror RPG concept with a green clothbound book and character sheets", kind: "concept", caption: "Studio concept", x: 50, y: 13, w: 15, m: [57, 2, 40], r: -6, eager: true },
  { src: "/images/world/standee-easel-v1.webp", width: 307, height: 480, alt: "", kind: "standee", x: 67, y: 12, w: 7.5, m: [81, 70, 17], r: 4, eager: true },
  { src: "/images/world/standee-planning-v1.webp", width: 384, height: 461, alt: "", kind: "standee", x: 77, y: 16, w: 11, m: [5, 38, 30], r: -3, eager: true },
  { src: "/images/world/standee-lantern-v1.webp", width: 431, height: 419, alt: "", kind: "standee", x: 89, y: 32, w: 9, m: null, r: 5 },
  { src: "/images/work/scented-realms-480w.webp", width: 480, height: 270, alt: "ScentedRealms campaign artwork", kind: "print", caption: "ScentedRealms, client work", x: 52, y: 45, w: 19, m: [3, 5, 52], r: 3, eager: true },
  { src: "/images/table/final-product-480.webp", width: 447, height: 480, alt: "", kind: "standee", x: 73, y: 50, w: 9, m: [40, 48, 26], r: 0 },
  { src: "/images/table/final-book-480.webp", width: 376, height: 480, alt: "", kind: "standee", x: 66, y: 40, w: 6.5, m: [62, 30, 18], r: -3 },
  { src: "/images/world/standee-cart-v1.webp", width: 463, height: 457, alt: "", kind: "standee", x: 86, y: 60, w: 10, m: null, r: -4 },
  { src: "/images/work/futureproof-480w.webp", width: 480, height: 270, alt: "FutureProof Terrain campaign artwork", kind: "print", caption: "FutureProof Terrain, client work", x: 26, y: 72, w: 17, m: [30, 72, 50], r: -4, low: true },
  { src: "/images/hero/dice-accessories-480w.webp", width: 640, height: 640, alt: "Prismatic, a dice accessories concept with jewel colored dice and a coral tray", kind: "concept", caption: "Studio concept", x: 5, y: 68, w: 13, m: [68, 40, 30], r: 6, low: true },
  { src: "/images/world/standee-shop-v1.webp", width: 490, height: 479, alt: "", kind: "standee", x: 46, y: 73, w: 10, m: [2, 73, 26], r: 2 },
  { src: "/images/world/standee-post-v1.webp", width: 345, height: 497, alt: "", kind: "standee", x: 60, y: 71, w: 7, m: null, r: -5 },
];

type Body = { el: HTMLElement; x: number; y: number; vx: number; vy: number; r: number; tilt: number; held: boolean; b: { minX: number; maxX: number; minY: number; maxY: number } };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** The studio desk: board pieces and printed work that can be picked up and thrown. Static for touch, keyboard and reduced motion. */
export function StudioDesk() {
  const desk = useRef<HTMLDivElement>(null);
  const tidy = useRef<() => void>(() => {});
  const [live, setLive] = useState(false);
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    const root = desk.current;
    if (!root) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    const goLive = requestAnimationFrame(() => setLive(true));

    const bodies: Body[] = Array.from(root.querySelectorAll<HTMLElement>(".st-piece")).map(el => {
      el.dataset.cursor = "drag";
      el.dataset.cursorLabel = "Drag";
      return { el, x: 0, y: 0, vx: 0, vy: 0, r: Number(el.dataset.r ?? 0), tilt: 0, held: false, b: { minX: 0, maxX: 0, minY: 0, maxY: 0 } };
    });
    const measure = (body: Body) => {
      const width = root.clientWidth, height = root.clientHeight;
      const w = body.el.offsetWidth, h = body.el.offsetHeight, left = body.el.offsetLeft, top = body.el.offsetTop;
      body.b = { minX: -left - w * 0.3, maxX: width - left - w * 0.7, minY: -top, maxY: height - top - h * 0.6 };
    };
    const paint = (body: Body) => {
      body.el.style.translate = `${body.x.toFixed(1)}px ${body.y.toFixed(1)}px`;
      body.el.style.rotate = `${(body.r + body.tilt).toFixed(2)}deg`;
    };

    let frame = 0, layer = 20, held: Body | null = null, grabX = 0, grabY = 0;
    const step = () => {
      let busy = false;
      for (const body of bodies) {
        let moving = body.held;
        if (!body.held) {
          if (Math.abs(body.vx) + Math.abs(body.vy) > 0.04) {
            body.x += body.vx; body.y += body.vy;
            body.vx *= 0.92; body.vy *= 0.92;
            if (body.x < body.b.minX || body.x > body.b.maxX) { body.x = clamp(body.x, body.b.minX, body.b.maxX); body.vx *= -0.45; }
            if (body.y < body.b.minY || body.y > body.b.maxY) { body.y = clamp(body.y, body.b.minY, body.b.maxY); body.vy *= -0.45; }
            moving = true;
          } else { body.vx = 0; body.vy = 0; }
        }
        const target = body.held ? clamp(body.vx * 0.9, -14, 14) : clamp(body.vx * 0.5, -8, 8);
        const tilt = body.tilt + (target - body.tilt) * 0.16;
        if (Math.abs(tilt - body.tilt) > 0.01 || Math.abs(tilt) > 0.02) moving = true;
        body.tilt = Math.abs(tilt) < 0.02 && !body.held ? 0 : tilt;
        if (moving) { paint(body); busy = true; }
      }
      frame = busy ? requestAnimationFrame(step) : 0;
    };
    const run = () => { if (!frame) frame = requestAnimationFrame(step); };

    const down = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(".st-piece");
      const body = el && bodies.find(item => item.el === el);
      if (!body) return;
      event.preventDefault();
      root.classList.remove("is-tidying");
      measure(body);
      body.held = true; body.vx = 0; body.vy = 0;
      held = body;
      grabX = event.clientX - body.x; grabY = event.clientY - body.y;
      body.el.style.zIndex = String(++layer);
      body.el.classList.add("is-held");
      body.el.setPointerCapture(event.pointerId);
      playSound("flick");
      run();
    };
    const move = (event: PointerEvent) => {
      if (!held) return;
      const nx = clamp(event.clientX - grabX, held.b.minX, held.b.maxX);
      const ny = clamp(event.clientY - grabY, held.b.minY, held.b.maxY);
      held.vx = held.vx * 0.55 + (nx - held.x) * 0.45;
      held.vy = held.vy * 0.55 + (ny - held.y) * 0.45;
      held.x = nx; held.y = ny;
    };
    const up = (event: PointerEvent) => {
      if (!held) return;
      held.held = false;
      held.el.classList.remove("is-held");
      if (held.el.hasPointerCapture(event.pointerId)) held.el.releasePointerCapture(event.pointerId);
      held.vx = clamp(held.vx, -40, 40); held.vy = clamp(held.vy, -40, 40);
      held = null;
      playSound("tock");
      setMoved(true);
      run();
    };
    const resize = () => {
      for (const body of bodies) {
        measure(body);
        body.x = clamp(body.x, body.b.minX, body.b.maxX);
        body.y = clamp(body.y, body.b.minY, body.b.maxY);
        if (body.x || body.y) paint(body);
      }
    };
    tidy.current = () => {
      root.classList.add("is-tidying");
      for (const body of bodies) { body.x = 0; body.y = 0; body.vx = 0; body.vy = 0; body.tilt = 0; paint(body); }
      window.setTimeout(() => root.classList.remove("is-tidying"), 900);
      playSound("slide");
      setMoved(false);
    };

    root.addEventListener("pointerdown", down);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerup", up);
    root.addEventListener("pointercancel", up);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(goLive);
      cancelAnimationFrame(frame);
      root.removeEventListener("pointerdown", down);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerup", up);
      root.removeEventListener("pointercancel", up);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`st-desk${live ? " is-live" : ""}`} ref={desk}>
      <div className="st-mat" aria-hidden="true" />
      <ul className="st-pieces" aria-label="On the studio desk">
        {pieces.map((piece, index) => (
          <li
            key={piece.src}
            className={`st-piece st-piece--${piece.kind}${piece.m ? "" : " st-piece--wide"}${piece.low ? " st-piece--low" : ""}`}
            data-r={piece.r}
            aria-hidden={piece.alt ? undefined : true}
            style={{
              "--x": `${piece.x}%`, "--y": `${piece.y}%`, "--w": `${piece.w}%`,
              "--mx": `${piece.m?.[0] ?? 0}%`, "--my": `${piece.m?.[1] ?? 0}%`, "--mw": `${piece.m?.[2] ?? 0}%`,
              "--r": piece.r, "--i": index,
            } as CSSProperties}
          >
            <figure>
              <img src={piece.src} width={piece.width} height={piece.height} alt={piece.alt} loading={piece.eager ? "eager" : "lazy"} decoding="async" draggable={false} />
              {piece.caption ? <figcaption className={`w-dot${piece.kind === "concept" ? " w-dot--concept" : ""}`}>{piece.caption}</figcaption> : null}
            </figure>
          </li>
        ))}
      </ul>
      <div className="st-desk-tools">
        <p className="st-desk-hint">Pick up anything on the desk</p>
        <button type="button" className="w-btn w-btn--ghost w-btn--small st-desk-tidy" onClick={() => tidy.current()} hidden={!moved}>Tidy the desk</button>
      </div>
    </div>
  );
}

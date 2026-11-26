"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { statusWords, tableArt, wings, type WingSlug } from "./table-data";
import type { Face, HoverInfo, TableApi } from "./table-scene";

/** The Launch Table. A product, a game and a book take turns in the frame: each hops in as a prototype,
 *  turns round finished, and its campaign page stands up behind it. Phones get one calm card instead. */
export function Table() {
  const host = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLParagraphElement>(null);
  const api = useRef<TableApi | null>(null);
  const [live, setLive] = useState(false);
  const [calm, setCalm] = useState(false);
  const [hover, setHover] = useState<HoverInfo>(null);
  const [overview, setOverview] = useState(false);
  const [status, setStatus] = useState<{ slug: WingSlug | null; face: Face }>({ slug: null, face: "proto" });
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    if (window.matchMedia("(max-width: 700px)").matches) return;
    const saveData = (navigator as { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData) return;
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) return;
    let cancelled = false;
    const start = () => {
      import("./table-scene").then(({ mountTable }) => {
        if (cancelled) return;
        const labels = new Map<string, HTMLElement>();
        element.querySelectorAll<HTMLElement>("[data-landmark]").forEach(label => labels.set(label.dataset.landmark!, label));
        api.current = mountTable({
          host: element, labels, caption: caption.current,
          onReady: () => { setLive(true); setCalm(window.matchMedia("(prefers-reduced-motion: reduce)").matches); },
          onHover: setHover, onOverview: setOverview,
          onStatus: (slug, face) => setStatus({ slug, face }),
          onPlaying: setPlaying,
        });
      }).catch(() => { /* keep the still */ });
    };
    const ric = (window as { requestIdleCallback?: Window["requestIdleCallback"] }).requestIdleCallback;
    const idle: number = ric ? ric.call(window, start, { timeout: 900 }) : window.setTimeout(start, 200);
    return () => {
      cancelled = true;
      if (ric) window.cancelIdleCallback(idle); else window.clearTimeout(idle);
      api.current?.dispose();
      api.current = null;
    };
  }, []);

  const hovered = hover ? wings.find(wing => wing.slug === hover.slug) : undefined;
  const cursorLabel = hover?.mode === "turn" ? "Turn it" : hover?.mode === "frame" && hovered ? `Open ${hovered.label.toLowerCase()}` : hover?.mode === "rest" ? "Bring to the frame" : "Drag or hold";
  const control = calm ? (status.face === "final" ? "Show the prototype" : "Show the finished piece") : playing ? "Pause" : "Play";

  return (
    <div ref={host} className={`w-board w-table${live ? " is-live" : ""}${overview ? " is-overview" : ""}${calm ? " is-calm" : ""}${status.slug ? " has-piece" : ""}`} data-cursor="drag" data-cursor-label={cursorLabel}>
      <img className="w-board-still" src={tableArt.still.src} width={tableArt.still.width} height={tableArt.still.height} alt="" loading="lazy" decoding="async" />
      <nav className="w-board-labels" aria-label="What we launch">
        {wings.map((wing, index) => (
          <Link
            key={wing.slug}
            href={wing.href}
            data-landmark={wing.slug}
            data-title={wing.label}
            className={`w-board-label${hover?.slug === wing.slug ? " is-hot" : ""}`}
            style={{ "--i": index } as React.CSSProperties}
            onFocus={event => { if (event.currentTarget.matches(":focus-visible")) api.current?.bring(wing.slug); }}
            onKeyDown={event => { if (event.key === " " && status.slug === wing.slug) { event.preventDefault(); api.current?.flip(); } }}
          >
            {wing.label}
          </Link>
        ))}
      </nav>
      <p ref={caption} className="w-table-caption" aria-live="polite">
        <span className="w-table-tag"><i aria-hidden="true" />Studio concept</span>
        <span className={`w-table-status is-${status.face}`}>
          <span>{statusWords.proto}</span>
          <span>{statusWords.final}</span>
        </span>
      </p>
      <div className="w-board-hint">
        <span aria-hidden="true">Drag the piece to turn it</span>
        <span aria-hidden="true">Hold to see the table</span>
        <button type="button" className="w-table-play" onClick={() => api.current?.[calm ? "flip" : "togglePlay"]()} aria-label={control}>
          <i aria-hidden="true" className={calm ? "is-flip" : playing ? "is-pause" : "is-play"} />{control}
        </button>
      </div>
      <TablePhone />
    </div>
  );
}

/** Phones: the frame as one card. The piece shows its prototype, turns once to finished, and rests. */
function TablePhone() {
  const [picked, setPicked] = useState(0);
  const [swapped, setSwapped] = useState(false);
  const wing = wings[picked];
  return (
    <div className="w-table-phone">
      <Link className="w-table-card" href={wing.href} data-title={wing.label} aria-label={`${wing.label}: how we launch them`}>
        <i className="w-table-corner" aria-hidden="true" /><i className="w-table-corner" aria-hidden="true" /><i className="w-table-corner" aria-hidden="true" /><i className="w-table-corner" aria-hidden="true" />
        <span key={wing.slug} className={`w-table-flip${swapped ? " is-swap" : ""}`} aria-hidden="true">
          <img className="w-table-face" src={wing.phoneProto} width={wing.w} height={wing.h} alt="" loading="lazy" fetchPriority="high" decoding="async" />
          <img className="w-table-face w-table-face--final" src={wing.phoneFinal} width={wing.w} height={wing.h} alt="" loading="lazy" decoding="async" />
        </span>
        <span className="w-table-card-tag"><i aria-hidden="true" />Studio concept</span>
      </Link>
      <div className="w-table-pills" role="group" aria-label="Show another kind of project">
        {wings.map((item, index) => (
          <button key={item.slug} type="button" aria-pressed={index === picked} onClick={() => { setPicked(index); setSwapped(true); }}>{item.label}</button>
        ))}
      </div>
    </div>
  );
}

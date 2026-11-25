"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { boardArt, landmarks } from "./board-data";

/** The launch board. Plain links over a still image first; a live 3D table once the browser can draw it. */
export function Board() {
  const host = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [overview, setOverview] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) return;
    let dispose: (() => void) | undefined;
    let cancelled = false;
    const start = () => {
      import("./board-scene").then(({ mountBoard }) => {
        if (cancelled) return;
        const labels = new Map<string, HTMLElement>();
        element.querySelectorAll<HTMLElement>("[data-landmark]").forEach(label => labels.set(label.dataset.landmark!, label));
        dispose = mountBoard({ host: element, labels, onReady: () => setLive(true), onHover: setHovered, onOverview: setOverview });
      }).catch(() => { /* keep the still board */ });
    };
    const ric = (window as { requestIdleCallback?: Window["requestIdleCallback"] }).requestIdleCallback;
    const idle: number = ric ? ric.call(window, start, { timeout: 900 }) : window.setTimeout(start, 200);
    return () => {
      cancelled = true;
      if (ric) window.cancelIdleCallback(idle); else window.clearTimeout(idle);
      dispose?.();
    };
  }, []);

  return (
    <div ref={host} className={`w-board${live ? " is-live" : ""}${overview ? " is-overview" : ""}`} data-cursor="drag" data-cursor-label={hovered ? "Open" : "Drag or hold"}>
      <img className="w-board-still" src={boardArt.src} width={boardArt.width} height={boardArt.height} alt="" fetchPriority="high" />
      <nav className="w-board-labels" aria-label="Launch services on the board">
        {landmarks.map((mark, index) => (
          <Link key={mark.slug} href={mark.href} data-landmark={mark.slug} data-title={mark.label} className={`w-board-label${hovered === mark.slug ? " is-hot" : ""}`} style={{ "--u": mark.u, "--v": mark.v, "--i": index } as React.CSSProperties}>
            <span className="w-board-label-n" aria-hidden="true">{index + 1}</span>
            {mark.label}
          </Link>
        ))}
      </nav>
      <p className="w-board-hint" aria-hidden="true"><span>Drag the board</span><span>Hold to see it all</span></p>
    </div>
  );
}

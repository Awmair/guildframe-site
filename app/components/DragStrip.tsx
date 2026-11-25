"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** A sideways strip of figures. Mouse users can drag it with a little glide; touch and trackpads scroll it natively. */
export function DragStrip({ className, label, children }: { className?: string; label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = ref.current;
    if (!strip) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let down = false, startX = 0, lastX = 0, startLeft = 0, velocity = 0, glide = 0;
    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      cancelAnimationFrame(glide);
      down = true; startX = lastX = event.clientX; startLeft = strip.scrollLeft; velocity = 0;
      strip.classList.add("is-dragging");
    };
    const onMove = (event: PointerEvent) => {
      if (!down) return;
      strip.scrollLeft = startLeft - (event.clientX - startX);
      velocity = event.clientX - lastX; lastX = event.clientX;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      strip.classList.remove("is-dragging");
      if (still) return;
      const step = () => { velocity *= 0.93; strip.scrollLeft -= velocity; if (Math.abs(velocity) > 0.4) glide = requestAnimationFrame(step); };
      glide = requestAnimationFrame(step);
    };
    strip.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      cancelAnimationFrame(glide);
      strip.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return <div ref={ref} className={className ? `cc-strip ${className}` : "cc-strip"} role="region" aria-label={label} tabIndex={0} data-cursor="drag" data-cursor-label="Drag">{children}</div>;
}

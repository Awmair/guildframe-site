"use client";
import { useEffect } from "react";
import { playSound } from "../chrome/sound";

/** Home only: the pawn walks the process track, and the concept strip can be dragged. */
export function HomeFx() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const process = document.getElementById("process");
    const pawn = process?.querySelector<HTMLElement>(".h-track-pawn");
    const steps = [...(process?.querySelectorAll<HTMLElement>(".h-steps li") ?? [])];
    let frame = 0;
    let lastStep = -1;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!process || !pawn) return;
        const rect = process.getBoundingClientRect();
        const total = rect.height - innerHeight;
        const raw = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        // Ease into each space so the pawn rests on it, then hops to the next.
        const spaces = 2;
        const scaled = raw * spaces;
        const index = Math.min(spaces, Math.floor(scaled + 0.0001));
        const within = scaled - index;
        const settle = within < 0.55 ? 0 : (within - 0.55) / 0.45;
        const eased = settle < 0.5 ? 4 * settle ** 3 : 1 - (-2 * settle + 2) ** 3 / 2;
        const progress = Math.min(1, (index + (index < spaces ? eased : 0)) / spaces);
        const hop = index < spaces ? Math.sin(Math.PI * eased) : 0;
        pawn.style.setProperty("--progress", reduced ? String(Math.round(progress * 2) / 2) : progress.toFixed(4));
        pawn.style.setProperty("--hop", reduced ? "0" : hop.toFixed(4));
        const current = Math.round(progress * spaces);
        if (current !== lastStep) {
          steps.forEach((step, i) => step.classList.toggle("is-here", i === current));
          if (lastStep !== -1) playSound("tock");
          lastStep = current;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Drag to scroll the concept strip with a little momentum.
    const strip = document.querySelector<HTMLElement>(".h-concepts-strip");
    let down = false, startX = 0, startLeft = 0, velocity = 0, lastX = 0, glide = 0;
    const onDown = (event: PointerEvent) => {
      if (!strip || event.pointerType !== "mouse") return;
      down = true; startX = lastX = event.clientX; startLeft = strip.scrollLeft; velocity = 0;
      cancelAnimationFrame(glide);
      strip.classList.add("is-dragging");
    };
    const onMove = (event: PointerEvent) => {
      if (!down || !strip) return;
      strip.scrollLeft = startLeft - (event.clientX - startX);
      velocity = event.clientX - lastX; lastX = event.clientX;
    };
    const onUp = () => {
      if (!down || !strip) return;
      down = false;
      strip.classList.remove("is-dragging");
      const step = () => { velocity *= 0.93; strip.scrollLeft -= velocity; if (Math.abs(velocity) > 0.4) glide = requestAnimationFrame(step); };
      if (!reduced) glide = requestAnimationFrame(step);
    };
    strip?.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(frame); cancelAnimationFrame(glide);
      window.removeEventListener("scroll", onScroll);
      strip?.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);
  return null;
}

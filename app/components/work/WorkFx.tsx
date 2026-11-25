"use client";
import { useEffect } from "react";

/** Work pages only: case study images lean a few degrees toward the pointer. Fine pointers, motion allowed. */
export function WorkFx() {
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = [...document.querySelectorAll<HTMLElement>("[data-wk-tilt]")];
    const cleanups = targets.map(target => {
      let frame = 0;
      const move = (event: PointerEvent) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          target.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
          target.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
        });
      };
      const leave = () => { cancelAnimationFrame(frame); target.style.setProperty("--ry", "0deg"); target.style.setProperty("--rx", "0deg"); };
      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", leave);
      return () => { cancelAnimationFrame(frame); target.removeEventListener("pointermove", move); target.removeEventListener("pointerleave", leave); };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
  return null;
}

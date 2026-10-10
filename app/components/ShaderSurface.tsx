"use client";

import {useEffect, useRef} from "react";
import type {ShaderController} from "./shader-renderer";

/** Decorative enhancement: the CSS surface is the complete, server-rendered fallback. */
export function ShaderSurface({kind}: {kind: "mesh" | "glass"}) {
  const surface = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = surface.current;
    const canvas = element?.querySelector("canvas");
    const capabilities = navigator as Navigator & {gpu?: unknown; connection?: {saveData?: boolean}};
    if (!element || !canvas || !capabilities.gpu || capabilities.connection?.saveData) return;

    const preferences = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(prefers-reduced-transparency: reduce)"),
      window.matchMedia("(forced-colors: active)"),
    ];
    let disposed = false;
    let visible = false;
    let loaded = false;
    let starting = false;
    let failed = false;
    let generation = 0;
    let controller: ShaderController | null = null;
    let delay: number | undefined;
    let idle: number | undefined;
    let fallbackIdle: number | undefined;
    const allowed = () => !preferences.some(preference => preference.matches);
    const eligible = () => !disposed && allowed() && visible && !document.hidden;
    const cancelStart = () => {
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (fallbackIdle !== undefined) window.clearTimeout(fallbackIdle);
      idle = fallbackIdle = undefined;
    };
    const start = async () => {
      idle = fallbackIdle = undefined;
      if (!eligible() || starting || controller || failed) return;
      starting = true;
      const current = generation;
      try {
        const {createShader} = await import("./shader-renderer");
        if (!eligible() || current !== generation) return;
        const next = await createShader(canvas, kind, () => {
          if (!disposed && current === generation) element.dataset.shaderState = "ready";
        }, () => {
          if (disposed || current !== generation) return;
          failed = true;
          element.dataset.shaderState = "fallback";
        });
        if (disposed || current !== generation || !allowed()) next.destroy();
        else {
          controller = next;
          controller.setPlaying(eligible());
        }
      } catch {
        failed = true;
        element.dataset.shaderState = "fallback";
      } finally {
        starting = false;
        sync();
      }
    };
    const sync = () => {
      if (!allowed()) {
        cancelStart();
        generation++;
        controller?.destroy();
        controller = null;
        element.dataset.shaderState = "fallback";
      } else if (controller) controller.setPlaying(eligible());
      else if (eligible() && loaded && !starting && !failed && idle === undefined && fallbackIdle === undefined) {
        if (typeof window.requestIdleCallback === "function") idle = window.requestIdleCallback(() => {void start();}, {timeout: 4000});
        else fallbackIdle = window.setTimeout(() => {void start();}, 100);
      } else if (!eligible()) cancelStart();
    };
    const afterLoad = () => {
      // Give the main content and product images first use of the connection and CPU.
      delay = window.setTimeout(() => {loaded = true; sync();}, 1200);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(element);
    preferences.forEach(preference => preference.addEventListener("change", sync));
    document.addEventListener("visibilitychange", sync);
    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, {once: true});

    return () => {
      disposed = true;
      generation++;
      cancelStart();
      window.clearTimeout(delay);
      window.removeEventListener("load", afterLoad);
      document.removeEventListener("visibilitychange", sync);
      preferences.forEach(preference => preference.removeEventListener("change", sync));
      observer.disconnect();
      controller?.destroy();
    };
  }, [kind]);

  return <span ref={surface} className={`gf-shader-surface gf-shader-surface--${kind}`} data-shader-state="fallback" aria-hidden="true"><canvas/></span>;
}

"use client";

import { useEffect } from "react";

/**
 * Homepage scroll behaviour: the page colour follows the section in view,
 * sections fade in once, and mouse wheel scrolling is eased.
 * Content stays visible and scrollable without JavaScript.
 */
export function HomeScroll() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main.gfr");
    if (!main || !("IntersectionObserver" in window)) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tones = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) main.dataset.tone = entry.target.dataset.tone ?? "paper";
      });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
    main.querySelectorAll<HTMLElement>("[data-tone]").forEach(section => tones.observe(section));

    let reveals: IntersectionObserver | undefined;
    if (!calm) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
      reveals = observer;
      main.classList.add("rv-on");
      main.querySelectorAll(".rv").forEach(element => observer.observe(element));
    }

    // Eased wheel scrolling for mouse users. Touch, keyboard, anchor links and
    // scrollable form controls keep the browser's own behaviour.
    let target = window.scrollY;
    let current = window.scrollY;
    let frame = 0;
    const smooth = !calm && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    function scrollsItself(start: EventTarget | null) {
      let node = start instanceof Element ? start : null;
      while (node && node !== document.body && node !== document.documentElement) {
        if (node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement || node instanceof HTMLDialogElement) return true;
        const overflow = window.getComputedStyle(node).overflowY;
        if ((overflow === "auto" || overflow === "scroll") && node.scrollHeight > node.clientHeight + 1) return true;
        node = node.parentElement;
      }
      return false;
    }
    function step() {
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        frame = 0;
      } else {
        frame = window.requestAnimationFrame(step);
      }
      window.scrollTo({ top: current, behavior: "instant" });
    }
    function onWheel(event: WheelEvent) {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || scrollsItself(event.target)) return;
      event.preventDefault();
      if (!frame) {
        current = window.scrollY;
        target = current;
      }
      const unit = event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? window.innerHeight : 1;
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      target = Math.max(0, Math.min(limit, target + event.deltaY * unit));
      if (!frame) frame = window.requestAnimationFrame(step);
    }
    if (smooth) window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      tones.disconnect();
      reveals?.disconnect();
      if (smooth) window.removeEventListener("wheel", onWheel);
      if (frame) window.cancelAnimationFrame(frame);
      main.classList.remove("rv-on");
      main.dataset.tone = "paper";
    };
  }, []);

  return null;
}

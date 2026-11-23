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
    let lastSet = window.scrollY;
    let frame = 0;
    const smooth = !calm && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    function stop() {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    }
    // True when something under the pointer can still scroll in this direction,
    // so the wheel belongs to it and not to the page.
    function scrollsItself(start: EventTarget | null, delta: number) {
      let node = start instanceof Element ? start : null;
      while (node && node !== document.body && node !== document.documentElement) {
        if (node instanceof HTMLDialogElement) return true;
        const overflow = window.getComputedStyle(node).overflowY;
        const scrollable = node instanceof HTMLTextAreaElement || overflow === "auto" || overflow === "scroll";
        if (scrollable && node.scrollHeight > node.clientHeight + 1) {
          const room = delta < 0 ? node.scrollTop > 0 : node.scrollTop + node.clientHeight < node.scrollHeight - 1;
          if (room) return true;
        }
        node = node.parentElement;
      }
      return false;
    }
    function step() {
      // Something else moved the page (an embedded frame, the keyboard, an
      // anchor link). Let it win instead of pulling the page back.
      if (Math.abs(window.scrollY - lastSet) > 2) {
        frame = 0;
        return;
      }
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        frame = 0;
      } else {
        frame = window.requestAnimationFrame(step);
      }
      window.scrollTo({ top: current, behavior: "instant" });
      lastSet = window.scrollY;
    }
    function onWheel(event: WheelEvent) {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || scrollsItself(event.target, event.deltaY)) {
        stop();
        return;
      }
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      if (!frame) {
        current = window.scrollY;
        target = current;
        lastSet = current;
      }
      // At the very top or bottom there is nothing to ease.
      if ((event.deltaY > 0 && target >= limit) || (event.deltaY < 0 && target <= 0)) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? window.innerHeight : 1;
      target = Math.max(0, Math.min(limit, target + event.deltaY * unit));
      if (!frame) frame = window.requestAnimationFrame(step);
    }
    if (smooth) window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      tones.disconnect();
      reveals?.disconnect();
      if (smooth) window.removeEventListener("wheel", onWheel);
      stop();
      main.classList.remove("rv-on");
      main.dataset.tone = "paper";
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

/** Page colour follows the section in view. Content stays visible without JavaScript. */
export function HomeScroll() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main.gfr");
    if (!main || !("IntersectionObserver" in window)) return;

    const tones = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) main.dataset.tone = entry.target.dataset.tone ?? "paper";
      });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
    main.querySelectorAll<HTMLElement>("[data-tone]").forEach(section => tones.observe(section));

    let reveals: IntersectionObserver | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
      reveals = observer;
      main.classList.add("rv-on");
      main.querySelectorAll(".rv").forEach(element => observer.observe(element));
    }

    return () => {
      tones.disconnect();
      reveals?.disconnect();
      main.classList.remove("rv-on");
      main.dataset.tone = "paper";
    };
  }, []);

  return null;
}

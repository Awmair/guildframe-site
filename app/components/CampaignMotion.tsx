"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Content remains visible before and without JavaScript. */
export function CampaignMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let reveals: IntersectionObserver | undefined;

    function setupReveals() {
      reveals?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (motion.matches || !("IntersectionObserver" in window)) return;
      reveals = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          reveals?.unobserve(entry.target);
          const animation = entry.target.animate(
            [{ opacity: .45, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 600, easing: "cubic-bezier(.23,1,.32,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { rootMargin: "0px 0px -24px 0px", threshold: 0 });
      document.querySelectorAll("[data-reveal]").forEach(element => {
        if (element.getBoundingClientRect().top > window.innerHeight) reveals?.observe(element);
      });
    }
    setupReveals();
    motion.addEventListener("change", setupReveals);

    const menu = document.querySelector<HTMLDetailsElement>(".gf-mobile-menu");
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest(".gf-mobile-menu a, .article-mobile-toc a");
      if (link) link.closest("details")?.removeAttribute("open");
      if (menu?.open && !menu.contains(target)) menu.open = false;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    const tocLinks = [...document.querySelectorAll<HTMLAnchorElement>(".article-toc nav a")];
    const sections = tocLinks.map(link => document.getElementById(link.hash.slice(1))).filter((el): el is HTMLElement => !!el);
    const visible = new Set<Element>();
    const contents = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      const current = sections.find(section => visible.has(section));
      if (!current) return;
      tocLinks.forEach(link => {
        if (link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-120px 0px -55% 0px", threshold: 0 }) : undefined;
    sections.forEach(section => contents?.observe(section));

    document.querySelectorAll<HTMLAnchorElement>(".gf-desktop-nav a, .gf-mobile-menu nav a").forEach(link => {
      const matches = !link.hash && (link.pathname === pathname || (link.pathname === "/guides" && pathname.startsWith("/guides/")));
      if (matches) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    return () => {
      reveals?.disconnect();
      contents?.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener("change", setupReveals);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      tocLinks.forEach(link => link.removeAttribute("aria-current"));
    };
  }, [pathname]);

  return null;
}

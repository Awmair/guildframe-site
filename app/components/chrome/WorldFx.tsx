"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isSoundOn, onSoundChange, playSound, restoreSound, setSound } from "./sound";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Page curtain, cursor token, scroll reveals and the sound toggle. Everything degrades to plain pages. */
export function WorldFx() {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const pending = useRef<{ path: string; started: number } | null>(null);
  const [sound, setSoundState] = useState(false);
  const [curtainTitle, setCurtainTitle] = useState("");

  // Mark the document as scripted so reveal start states apply only with JavaScript.
  useEffect(() => {
    document.documentElement.classList.add("w-js");
    setSoundState(restoreSound());
    const off = onSoundChange(setSoundState);
    const wake = () => { if (isSoundOn()) setSound(true); };
    window.addEventListener("pointerdown", wake, { once: true });
    return () => { off(); window.removeEventListener("pointerdown", wake); };
  }, []);

  // Curtain: intercept ordinary same-site navigations.
  useEffect(() => {
    const panel = curtain.current;
    if (!panel) return;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link || link.target || link.hasAttribute("download") || link.dataset.noCurtain !== undefined) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) { playSound("tock"); return; }
      if (url.pathname === location.pathname) return;
      if (/\.(?:pdf|csv|zip|xlsx|docx|md|txt|png|jpe?g|webp)$/i.test(url.pathname)) return;
      event.preventDefault();
      playSound("slide");
      const title = link.dataset.title || link.querySelector(".w-roll>span")?.textContent || link.getAttribute("aria-label")?.replace(/ home$/i, "") || link.textContent?.trim() || "";
      setCurtainTitle(title.length > 34 ? `${title.slice(0, 32)}…` : title);
      const target = url.pathname + url.search + url.hash;
      if (reduced()) { router.push(target); return; }
      pending.current = { path: url.pathname, started: performance.now() };
      panel.style.visibility = "visible";
      const cover = panel.querySelector<HTMLElement>(".w-curtain-panel")!;
      const label = panel.querySelector<HTMLElement>(".w-curtain-title")!;
      const pips = panel.querySelector<HTMLElement>(".w-curtain-pips")!;
      cover.animate([{ transform: "translateY(102%)", borderRadius: "50% 50% 0 0 / 18% 18% 0 0" }, { transform: "translateY(0)", borderRadius: "0" }], { duration: 650, easing: "cubic-bezier(.87,0,.13,1)", fill: "forwards" });
      label.animate([{ opacity: 0, transform: "translateY(40px) rotate(2deg)" }, { opacity: 1, transform: "none" }], { duration: 600, delay: 260, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
      pips.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 500, fill: "forwards" });
      window.setTimeout(() => { router.push(target); }, 640);
      window.setTimeout(() => { if (pending.current) reveal(); }, 2400);
    };
    const reveal = () => {
      pending.current = null;
      const cover = panel.querySelector<HTMLElement>(".w-curtain-panel")!;
      const label = panel.querySelector<HTMLElement>(".w-curtain-title")!;
      const pips = panel.querySelector<HTMLElement>(".w-curtain-pips")!;
      label.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(-30px)" }], { duration: 300, easing: "ease-in", fill: "forwards" });
      pips.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: "forwards" });
      const out = cover.animate([{ transform: "translateY(0)", borderRadius: "0" }, { transform: "translateY(-102%)", borderRadius: "0 0 50% 50% / 0 0 18% 18%" }], { duration: 800, delay: 120, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
      out.onfinish = () => { panel.style.visibility = "hidden"; cover.getAnimations().forEach(a => a.cancel()); };
    };
    (panel as HTMLDivElement & { reveal?: () => void }).reveal = reveal;
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  // When the new route has rendered, lift the curtain.
  const firstRoute = useRef(true);
  useEffect(() => {
    if (firstRoute.current) { firstRoute.current = false; return; }
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const panel = curtain.current as (HTMLDivElement & { reveal?: () => void }) | null;
    if (pending.current && panel?.reveal) {
      const wait = Math.max(0, 260 - (performance.now() - pending.current.started - 640));
      window.setTimeout(() => panel.reveal?.(), wait);
    }
    document.querySelector<HTMLElement>("main")?.focus({ preventScroll: true });
  }, [pathname]);

  // Reveals: split marked headings into characters, then observe everything marked.
  useEffect(() => {
    if (reduced()) return;
    document.querySelectorAll<HTMLElement>("[data-reveal='chars']:not([data-split])").forEach(element => {
      element.dataset.split = "1";
      const label = element.textContent ?? "";
      element.setAttribute("aria-label", label);
      const walk = (node: Node): Node[] => {
        if (node.nodeType === Node.TEXT_NODE) {
          let index = 0;
          return [...(node.textContent ?? "")].map(char => {
            if (char === " ") return document.createTextNode(" ");
            const span = document.createElement("span");
            span.className = "w-char";
            span.setAttribute("aria-hidden", "true");
            span.style.setProperty("--i", String(index++));
            span.textContent = char;
            return span;
          });
        }
        const clone = node.cloneNode(false);
        node.childNodes.forEach(child => walk(child).forEach(part => clone.appendChild(part)));
        return [clone];
      };
      const parts = [...element.childNodes].flatMap(walk);
      element.replaceChildren(...parts);
      let i = 0;
      element.querySelectorAll<HTMLElement>(".w-char").forEach(char => char.style.setProperty("--i", String(i++)));
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  // While the enquiry form is on screen, the corner promo and cookie note step aside so nothing sits over the fields.
  useEffect(() => {
    const form = document.getElementById("start-project");
    if (!form || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const observer = new IntersectionObserver(([entry]) => root.classList.toggle("w-at-form", entry.isIntersecting), { threshold: 0.15 });
    observer.observe(form);
    return () => { observer.disconnect(); root.classList.remove("w-at-form"); };
  }, [pathname]);

  // Smooth wheel scrolling on desktop: eases the page toward where the wheel asked for.
  useEffect(() => {
    if (!finePointer() || reduced()) return;
    const root = document.documentElement;
    let target = window.scrollY, current = window.scrollY, frame = 0, running = false, trackpad = false;
    const max = () => root.scrollHeight - window.innerHeight;
    const jump = (y: number) => window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    const innerCanScroll = (start: Element | null, dy: number) => {
      for (let el = start; el && el !== document.body && el !== root; el = el.parentElement) {
        const style = getComputedStyle(el);
        if (!/(auto|scroll)/.test(style.overflowY) || el.scrollHeight - el.clientHeight < 8) continue;
        if (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true;
        if (dy < 0 && el.scrollTop > 0) return true;
      }
      return false;
    };
    let last = 0;
    const stop = () => { cancelAnimationFrame(frame); running = false; target = current = window.scrollY; };
    const tick = (now: number) => {
      // If anything else moved the page (a focus jump, an anchor, the browser), follow it instead of pulling back.
      if (Math.abs(window.scrollY - current) > 3) { stop(); return; }
      // Same feel at 60 and 120 frames a second.
      const dt = Math.min(64, last ? now - last : 16.7);
      last = now;
      current += (target - current) * (1 - Math.pow(1 - 0.14, dt / 16.7));
      if (Math.abs(target - current) < 0.5) { current = target; jump(current); running = false; last = 0; return; }
      jump(current);
      frame = requestAnimationFrame(tick);
    };
    const onWheel = (event: WheelEvent) => {
      // Anything the easing does not handle goes to the browser, and the easing stops first so nothing fights.
      if (event.ctrlKey || event.defaultPrevented || Math.abs(event.deltaX) > Math.abs(event.deltaY) || root.classList.contains("w-menu-open") || root.classList.contains("w-gate-up")) { if (running) stop(); return; }
      // Trackpads already glide natively; easing on top of their momentum feels like stutter. Mouse wheels get the easing.
      if (event.deltaMode === 0 && (event.deltaX !== 0 || !Number.isInteger(event.deltaY) || Math.abs(event.deltaY) < 16)) trackpad = true;
      if (trackpad) { if (running) stop(); return; }
      const el = event.target as Element | null;
      const dy = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
      // Hand over to the browser only where something inside really scrolls (a long textarea, an open list, an embed).
      // Stop the easing first so the two never pull against each other.
      if (el?.closest("iframe,[data-native-scroll]") || innerCanScroll(el, dy)) { if (running) stop(); return; }
      event.preventDefault();
      if (!running) target = current = window.scrollY;
      target = Math.min(max(), Math.max(0, target + dy));
      if (!running) { running = true; last = 0; frame = requestAnimationFrame(tick); }
    };
    // Keyboard, scrollbar and anchor jumps move the page directly; follow them.
    const onScroll = () => { if (!running) target = current = window.scrollY; };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", stop);
    window.addEventListener("pointerdown", stop);
    root.classList.add("w-smooth");
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("w-smooth");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", stop);
      window.removeEventListener("pointerdown", stop);
    };
  }, []);

  // Cursor token.
  useEffect(() => {
    const element = cursor.current;
    if (!element || !finePointer() || reduced()) return;
    document.documentElement.classList.add("w-has-cursor");
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, frame = 0, visible = false;
    const label = element.querySelector<HTMLElement>(".w-cursor-label")!;
    const ring = element.querySelector<HTMLElement>(".w-cursor-ring")!;
    const dot = element.querySelector<HTMLElement>(".w-cursor-dot")!;
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      ring.style.translate = `${x}px ${y}px`;
      label.style.translate = `${x}px ${y}px`;
      frame = requestAnimationFrame(loop);
    };
    const move = (event: PointerEvent) => {
      tx = event.clientX; ty = event.clientY;
      dot.style.translate = `${tx}px ${ty}px`;
      if (!visible) { visible = true; x = tx; y = ty; element.classList.add("is-on"); }
      const target = event.target as HTMLElement | null;
      const hot = target?.closest<HTMLElement>("a,button,summary,label,[data-cursor]");
      const text = target?.closest("input,textarea,select");
      element.classList.toggle("is-text", Boolean(text));
      element.classList.toggle("is-link", Boolean(hot) && !hot?.dataset.cursor);
      element.classList.toggle("is-drag", hot?.dataset.cursor === "drag");
      const hint = hot?.dataset.cursorLabel ?? "";
      element.classList.toggle("has-label", Boolean(hint));
      if (hint && label.textContent !== hint) label.textContent = hint;
    };
    let lastHover: Element | null = null;
    const over = (event: PointerEvent) => {
      const hot = (event.target as HTMLElement | null)?.closest("a,button,summary");
      if (hot && hot !== lastHover) playSound("flick");
      lastHover = hot;
    };
    const down = () => element.classList.add("is-hold");
    const up = () => element.classList.remove("is-hold");
    const leave = () => { visible = false; element.classList.remove("is-on"); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", leave);
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("w-has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <div className="w-grain" aria-hidden="true" />
      <div className="w-curtain" ref={curtain} aria-hidden="true">
        <div className="w-curtain-panel" />
        <div className="w-curtain-title">{curtainTitle}</div>
        <div className="w-curtain-pips"><i /><i /><i /></div>
      </div>
      <div className="w-cursor" ref={cursor} aria-hidden="true">
        <div className="w-cursor-ring" />
        <div className="w-cursor-dot" />
        <div className="w-cursor-label" />
      </div>
      <div className="w-corner w-corner--left">
        <button type="button" className="w-sound" aria-pressed={sound} aria-label={sound ? "Turn sound off" : "Turn sound on"} onClick={() => { setSound(!sound); if (!sound) window.setTimeout(() => playSound("tock"), 30); }}>
          <span className="w-sound-bars" aria-hidden="true"><i /><i /><i /><i /></span>
        </button>
        <a className="w-pill-promo" href="#start-project" data-no-curtain="">Free opening mockup</a>
      </div>
    </>
  );
}

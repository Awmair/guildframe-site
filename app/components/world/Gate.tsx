"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { playSound, setSound } from "../chrome/sound";
import { BrandLockup } from "../chrome/Brand";

/** Runs before the lid is parsed, so returning visitors never see it flash. */
export const gateBootScript = `try{var d=document.documentElement;if(!sessionStorage.getItem("gf-lid")&&!location.hash&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&innerWidth>700){d.classList.add("w-gate-up")}}catch(e){}`;

export function Gate() {
  const lid = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);
  const opened = useRef(false);

  const open = useCallback((withSound = false) => {
    if (opened.current) return;
    opened.current = true;
    try { sessionStorage.setItem("gf-lid", "1"); } catch { /* storage can be unavailable */ }
    if (withSound) { setSound(true); window.setTimeout(() => playSound("slide"), 40); window.setTimeout(() => playSound("tock"), 360); window.setTimeout(() => playSound("tock"), 560); }
    const element = lid.current;
    const finish = () => {
      document.documentElement.classList.remove("w-gate-up");
      window.dispatchEvent(new Event("gf:gate-open"));
      document.getElementById("main-content")?.focus({ preventScroll: true });
    };
    if (!element) return finish();
    element.classList.add("is-opening");
    window.setTimeout(() => window.dispatchEvent(new Event("gf:gate-open")), 420);
    window.setTimeout(finish, 1250);
  }, []);

  useEffect(() => {
    if (!document.documentElement.classList.contains("w-gate-up")) return;
    document.body.style.overflow = "hidden";
    let pips = 1;
    const ticker = window.setInterval(() => { pips = Math.min(6, pips + 1); setStep(pips); }, 160);
    const auto = window.setTimeout(() => open(false), 4200);
    const nudge = (event: Event) => {
      if (event.type === "keydown" && ["Tab", "Shift"].includes((event as KeyboardEvent).key)) return;
      open(false);
    };
    window.addEventListener("wheel", nudge, { passive: true });
    window.addEventListener("touchmove", nudge, { passive: true });
    window.addEventListener("keydown", nudge);
    return () => {
      window.clearInterval(ticker); window.clearTimeout(auto);
      window.removeEventListener("wheel", nudge); window.removeEventListener("touchmove", nudge); window.removeEventListener("keydown", nudge);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const unlock = () => { document.body.style.overflow = ""; };
    window.addEventListener("gf:gate-open", unlock);
    return () => window.removeEventListener("gf:gate-open", unlock);
  }, []);

  return (
    <div className="w-gate" ref={lid} role="dialog" aria-modal="true" aria-label="Welcome to Guildframe">
      <div className="w-gate-lid">
        <div className="w-gate-inner">
          <BrandLockup className="w-gate-logo" />
          <p className="w-gate-line">Your first Kickstarter, <em>done properly</em></p>
          <div className="w-gate-load" aria-hidden="true" style={{ "--p": (step - 1) / 5 } as React.CSSProperties}><i /></div>
          <div className="w-gate-actions">
            <button type="button" className="w-btn w-btn--ink" onClick={() => open(false)}><span className="w-roll"><span>Open the box</span><span aria-hidden="true">Open the box</span></span></button>
            <button type="button" className="w-gate-sound" onClick={() => open(true)}>Open with sound</button>
          </div>
        </div>
      </div>
    </div>
  );
}

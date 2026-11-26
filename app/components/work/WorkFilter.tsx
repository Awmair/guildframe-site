"use client";
import { useCallback, useState } from "react";
import { playSound } from "../chrome/sound";

type Pill = { id: string; label: string };

/**
 * /work: filter pills over the client work deck. Progressive enhancement: the bar only
 * shows once scripts run (html.w-js), and every card stays visible without JavaScript.
 * Visible cards are restacked so the sticky deck keeps its even offsets.
 */
export function WorkFilter({ wings, total }: { wings: Pill[]; total: number }) {
  const [active, setActive] = useState("all");
  const [count, setCount] = useState(total);

  const apply = useCallback((filter: string) => {
    const deck = document.getElementById("work-deck");
    if (!deck) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let shown = 0;
    deck.querySelectorAll<HTMLElement>(".wk-card").forEach(card => {
      const match = filter === "all" || (card.dataset.wings ?? "").split(" ").includes(filter);
      card.hidden = !match;
      card.classList.remove("is-entering");
      if (!match) return;
      card.style.setProperty("--stack", String(shown));
      card.style.setProperty("--enter", String(shown));
      shown += 1;
      if (!reduced) {
        void card.offsetWidth;
        card.classList.add("is-entering");
      }
    });
    setCount(shown);
  }, []);

  const choose = (id: string) => {
    if (id === active) return;
    playSound("flick");
    setActive(id);
    apply(id);
    const deck = document.getElementById("work-deck");
    if (deck && deck.getBoundingClientRect().top < 0) deck.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  const pills: Pill[] = [{ id: "all", label: "All" }, ...wings];
  return (
    <div className="wk-filter wk-wrap" role="group" aria-label="Filter client work">
      <div className="wk-filter-bar">
        {pills.map(pill => (
          <button key={pill.id} type="button" className="wk-filter-pill" aria-pressed={active === pill.id} onClick={() => choose(pill.id)}>{pill.label}</button>
        ))}
      </div>
      <p className="wk-filter-count" aria-live="polite">{count === 1 ? "1 project" : `${count} projects`}</p>
    </div>
  );
}

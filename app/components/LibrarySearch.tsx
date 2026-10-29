"use client";

import { useEffect, useRef, useState } from "react";

type Filter = { value: string; label: string };

export function LibrarySearch({ count, noun, filters = [] }: { count: number; noun: "guides" | "resources"; filters?: Filter[] }) {
  const search = useRef<HTMLElement>(null);
  const [matches, setMatches] = useState(count);
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState("all");

  useEffect(() => {
    const scope = search.current?.closest("main");
    return () => { scope?.querySelectorAll<HTMLAnchorElement>(".guides-grid > a").forEach(link => { link.hidden = false; }); };
  }, []);

  function filter(value: string, selectedStage: string) {
    const terms = value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const scope = search.current?.closest("main") ?? document;
    const links = [...scope.querySelectorAll<HTMLAnchorElement>(".guides-grid > a")];
    let found = 0;
    links.forEach(link => {
      const text = link.textContent?.toLocaleLowerCase() ?? "";
      const match = (selectedStage === "all" || link.dataset.guideStage === selectedStage) && terms.every(term => text.includes(term));
      link.hidden = !match;
      if (match) found++;
    });
    scope.querySelectorAll<HTMLElement>("[data-guide-heading]").forEach(heading => {
      const target = document.getElementById(heading.dataset.guideHeading ?? "");
      heading.hidden = !!target && ![...target.querySelectorAll<HTMLAnchorElement>("a")].some(link => !link.hidden);
    });
    setMatches(found);
  }

  return <search className={`gf-library-search${filters.length ? " gf-library-filters" : ""}`} ref={search} aria-label={`Find ${noun}`}>
    <noscript><style>{`.gf-library-search{display:none!important}`}</style></noscript>
    <label htmlFor="library-search">Find a {noun === "guides" ? "guide" : "resource"}</label>
    <div className="gf-library-search-field"><span aria-hidden="true">⌕</span><input id="library-search" type="search" placeholder="Try rewards, email or miniatures" value={query} onChange={event => { setQuery(event.target.value); filter(event.target.value, stage); }}/></div>
    {filters.length > 0 && <div className="gf-library-filter-pills" role="group" aria-label="Filter guides by launch stage">{filters.map(option => <button type="button" key={option.value} aria-pressed={stage === option.value} onClick={() => { setStage(option.value); filter(query, option.value); }}>{option.label}</button>)}</div>}
    <p role="status" aria-live="polite">{matches === 0 ? "No matches. Try another topic or a broader word." : `${matches} ${noun}`}</p>
  </search>;
}

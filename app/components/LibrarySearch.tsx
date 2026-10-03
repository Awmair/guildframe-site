"use client";

import { useEffect, useRef, useState } from "react";

export function LibrarySearch({ count, noun }: { count: number; noun: "guides" | "resources" }) {
  const search = useRef<HTMLElement>(null);
  const [matches, setMatches] = useState(count);

  useEffect(() => {
    const input = search.current?.querySelector("input");
    if (input) input.disabled = false;
    return () => { document.querySelectorAll<HTMLAnchorElement>(".guides-grid > a").forEach(link => { link.hidden = false; }); };
  }, []);

  function filter(value: string) {
    const terms = value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const links = [...document.querySelectorAll<HTMLAnchorElement>(".guides-grid > a")];
    let found = 0;
    links.forEach(link => {
      const text = link.textContent?.toLocaleLowerCase() ?? "";
      const match = terms.every(term => text.includes(term));
      link.hidden = !match;
      if (match) found++;
    });
    setMatches(found);
  }

  return <search className="gf-library-search" ref={search} aria-label={`Find ${noun}`}>
    <noscript><style>{`.gf-library-search{display:none!important}`}</style></noscript>
    <label htmlFor="library-search">Find a {noun === "guides" ? "guide" : "resource"}</label>
    <div><span aria-hidden="true">⌕</span><input id="library-search" type="search" disabled placeholder="Try rewards, email or miniatures" onChange={event => filter(event.target.value)} /></div>
    <p role="status" aria-live="polite">{matches === 0 ? "No matches. Try a broader word." : `${matches} ${noun}`}</p>
  </search>;
}

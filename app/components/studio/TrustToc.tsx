"use client";
import { useEffect, useState } from "react";

export type TrustTocItem = { id: string; label: string };

/** Contents list for the reading pages. Works as plain anchor links; the script only marks the section in view. */
export function TrustToc({ items }: { items: TrustTocItem[] }) {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const targets = items.map(item => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(entries => {
      const inView = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (inView[0]) setActive(inView[0].target.id);
    }, { rootMargin: "-18% 0px -70% 0px" });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="st-toc" aria-label="On this page">
      <p className="st-toc-title">On this page</p>
      <ol>
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>
              <span className="st-toc-n" aria-hidden="true">{index + 1}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

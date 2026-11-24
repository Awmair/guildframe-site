"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { siteConfig } from "../../site-config";
import { PawnMark, Roll } from "./Icon";
import { playSound } from "./sound";

const nav = [
  { href: "/kickstarter-launch-services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/guides", label: "Guides" },
];
const menu = [
  { href: "/kickstarter-launch-services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "The studio" },
  { href: "#start-project", label: "Start a project" },
];

function isCurrent(pathname: string | null, href: string) {
  if (!pathname || href.startsWith("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const root = useRef<HTMLDetailsElement>(null);
  const button = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const setOpen = useCallback((open: boolean) => {
    const html = document.documentElement;
    if (html.classList.contains("w-menu-open") === open) return;
    html.classList.toggle("w-menu-open", open);
    button.current?.setAttribute("aria-expanded", String(open));
    const main = document.querySelector("main");
    if (main) main.inert = open;
    document.body.style.overflow = open ? "hidden" : "";
    playSound("slide");
    if (open) window.setTimeout(() => panel.current?.querySelector<HTMLElement>("a")?.focus({ preventScroll: true }), 80);
    else button.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const details = root.current;
    if (!details) return;
    details.open = true;
    const summary = button.current;
    const toggle = (event: Event) => {
      event.preventDefault();
      setOpen(!document.documentElement.classList.contains("w-menu-open"));
    };
    const onKey = (event: KeyboardEvent) => {
      const open = document.documentElement.classList.contains("w-menu-open");
      if (event.key === "Escape" && open) setOpen(false);
      const target = event.target as HTMLElement | null;
      const typing = target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if (!typing && !event.metaKey && !event.ctrlKey && !event.altKey && event.key.toLowerCase() === "m") setOpen(!open);
      if (open && event.key === "Tab" && panel.current) {
        const items = [...panel.current.querySelectorAll<HTMLElement>("a,button"), summary].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    summary?.addEventListener("click", toggle);
    document.addEventListener("keydown", onKey);
    return () => { summary?.removeEventListener("click", toggle); document.removeEventListener("keydown", onKey); };
  }, [setOpen]);

  useEffect(() => { setOpen(false); }, [pathname, setOpen]);

  useEffect(() => {
    let last = window.scrollY;
    const header = document.querySelector(".w-header");
    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle("is-hidden", y > 240 && y > last + 4);
      if (y < last - 4 || y < 240) header?.classList.remove("is-hidden");
      header?.classList.toggle("is-scrolled", y > 40);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-header">
      <Link className="w-brand" href="/" aria-label="Guildframe home" data-title="Home">
        <img src="/brand/guildframe-logo-reverse.svg" alt="Guildframe" width="132" height="29" />
      </Link>
      <div className="w-header-right">
        <nav className="w-nav" aria-label="Primary navigation">
          {nav.map(item => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}><Roll>{item.label}</Roll></Link>
          ))}
        </nav>
        <a className="w-btn w-btn--small" href="#start-project" data-analytics-event="service_interest" data-analytics-label="Start a project" data-analytics-location="header"><Roll>Start a project</Roll></a>
        <details className="w-menu-root" ref={root}>
          <summary className="w-pips" ref={button} aria-label="Menu" aria-expanded="false" aria-controls="site-menu"><i /><i /><i /><i /><i /></summary>
          <div className="w-menu" id="site-menu">
            <div className="w-menu-scrim" onClick={() => setOpen(false)} />
            <div className="w-menu-panel" ref={panel} role="dialog" aria-modal="true" aria-label="Site menu">
              <nav aria-label="Menu">
                <ul className="w-menu-list">
                  {menu.map(item => (
                    <li key={item.href}>
                      <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined} onClick={() => setOpen(false)} onMouseEnter={() => playSound("flick")}>
                        <PawnMark className="w-menu-pawn" />
                        <Roll>{item.label}</Roll>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="w-menu-foot">
                <a href={`mailto:${siteConfig.contactEmail}`} data-analytics-event="email_click" data-analytics-location="menu">{siteConfig.contactEmail}</a>
                <nav aria-label="Menu extras">
                  <a href="https://cal.com/guildframe/30min" target="_blank" rel="noopener noreferrer">Book a 30 minute call</a>
                  <Link href="/privacy" onClick={() => setOpen(false)}>Privacy</Link>
                  <Link href="/terms" onClick={() => setOpen(false)}>Terms</Link>
                </nav>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

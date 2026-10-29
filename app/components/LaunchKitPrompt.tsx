"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { launchKit, launchKitEmbedUrl, launchKitFormUrl } from "../launch-kit";
import "../launch-kit-prompt.css";

const preferenceKey = "guildframe-kit-prompt";
let shownInMemory = false;

function wasShown() {
  if (shownInMemory) return true;
  try { return window.sessionStorage.getItem(preferenceKey) === "shown"; }
  catch { return false; }
}

function rememberShown() {
  shownInMemory = true;
  try { window.sessionStorage.setItem(preferenceKey, "shown"); }
  catch { /* The in-memory preference still covers this visit. */ }
}

function PromptOnPage() {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [invite, setInvite] = useState(false);
  const [opened, setOpened] = useState(false);
  const formUrl = launchKitEmbedUrl ?? launchKitFormUrl;

  const openPrompt = useCallback(() => {
    if (!dialog.current || dialog.current.open || typeof dialog.current.showModal !== "function") return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.current.showModal();
    rememberShown();
    setOpened(true);
    closeButton.current?.focus({ preventScroll: true });
  }, []);

  function closePrompt() { dialog.current?.close(); }

  function finishClose() {
    setOpened(false);
    if (previousFocus.current?.isConnected) previousFocus.current.focus({ preventScroll: true });
  }

  useEffect(() => {
    function openFromLink(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
      if (!event.target.closest("a[data-launch-kit-prompt]")) return;
      if (!dialog.current || typeof dialog.current.showModal !== "function") return;
      event.preventDefault();
      openPrompt();
    }
    document.addEventListener("click", openFromLink, true);
    if (wasShown()) return () => document.removeEventListener("click", openFromLink, true);

    const started = performance.now();
    let revealed = false;
    let frame = 0;
    function check() {
      if (revealed || wasShown() || document.hidden || performance.now() - started < 15000) return;
      if (!dialog.current || typeof dialog.current.showModal !== "function") return;
      if (document.querySelector(".analytics-consent, dialog[open]") || document.activeElement?.closest("input, textarea, select, form, [contenteditable='true']")) return;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      if (distance <= 0 || window.scrollY / distance < .45 || window.scrollY < Math.min(600, window.innerHeight * .75)) return;
      revealed = true;
      rememberShown();
      if (window.matchMedia("(max-width: 700px)").matches) setInvite(true);
      else openPrompt();
    }
    function checkAfterChoice() { cancelAnimationFrame(frame); frame = requestAnimationFrame(check); }
    const timer = window.setTimeout(check, 15000);
    window.addEventListener("scroll", check, { passive: true });
    document.addEventListener("visibilitychange", check);
    window.addEventListener("guildframe-analytics-consent-change", checkAfterChoice);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
      document.removeEventListener("visibilitychange", check);
      window.removeEventListener("guildframe-analytics-consent-change", checkAfterChoice);
      document.removeEventListener("click", openFromLink, true);
    };
  }, [openPrompt]);

  return <>
    {invite && <aside className="gf-kit-prompt-invite" aria-labelledby="kit-invite-title">
      <img src="/downloads/launch-kit/preview-start-here.webp" width="993" height="1404" alt="" loading="lazy"/>
      <div><span>FREE · 5 working files</span><h2 id="kit-invite-title">Your campaign launch kit.</h2><button type="button" onClick={openPrompt}>Get the free kit</button></div>
      <button type="button" className="gf-kit-invite-dismiss" aria-label="Dismiss free kit invitation" onClick={() => setInvite(false)}>×</button>
    </aside>}
    <dialog ref={dialog} className="gf-kit-prompt-dialog" aria-labelledby="kit-prompt-title" aria-describedby="kit-prompt-description" onClose={finishClose} onCancel={event => { event.preventDefault(); closePrompt(); }}>
      <div className="gf-kit-prompt-closebar"><button ref={closeButton} className="gf-kit-prompt-close" type="button" aria-label="Close free kit" onClick={closePrompt}>×</button></div>
      <div className="gf-kit-prompt-grid">
        <section className="gf-kit-prompt-value">
          <span className="gf-kit-prompt-free">FREE TABLETOP CAMPAIGN LAUNCH KIT</span>
          <h2 id="kit-prompt-title">Five useful files.<br/>One clearer launch plan.</h2>
          <p id="kit-prompt-description">Plan the numbers, write the campaign and brief the creative for your board game, card game, TTRPG, miniatures or terrain project.</p>
          <div className="gf-kit-prompt-contents"><figure className="gf-kit-prompt-preview"><img src="/downloads/launch-kit/preview-start-here.webp" width="993" height="1404" alt="Actual first page of the launch kit start guide" loading="lazy"/><figcaption>Actual file preview</figcaption></figure>
          <ul>{launchKit.files.map(file => <li key={file.name}><span>{file.format}</span><strong>{file.format === "XLSX" ? "12 tab launch workbook" : file.title}</strong></li>)}</ul></div>
          <Link href={launchKit.path}>See all the kit details</Link>
        </section>
        <section className="gf-kit-prompt-signup" aria-labelledby="kit-prompt-signup-title">
          <h3 id="kit-prompt-signup-title">Get the kit and updates.</h3><p>{launchKit.signupCopy}</p>
          {opened && formUrl ? <iframe src={formUrl} title={`Sign up for the ${launchKit.title} and updates`} className="gf-kit-prompt-frame" referrerPolicy="strict-origin-when-cross-origin"/> : null}
          <p className="gf-kit-prompt-permission">Confirm your email to receive the kit and start the emails. Unsubscribe at any time. <Link href="/privacy">Privacy notice</Link>.</p>
          {formUrl && <a className="gf-kit-prompt-form-link" href={formUrl} target="_blank" rel="noopener noreferrer">Open the signup form in a new tab</a>}
        </section>
      </div>
    </dialog>
  </>;
}

export function LaunchKitPrompt() {
  const pathname = usePathname();
  if (!pathname || !(launchKitEmbedUrl ?? launchKitFormUrl) || pathname.startsWith(launchKit.path) || /(?:^|\/)(?:privacy|terms|thanks|thank-you)(?:\/|$)/.test(pathname)) return null;
  return <PromptOnPage key={pathname}/>;
}

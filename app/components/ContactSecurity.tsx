"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function ContactSecurity({ onToken, resetKey }: { onToken: (token: string) => void; resetKey: number }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const [error, setError] = useState(false);
  const mount = useCallback(() => {
    if (!container.current || !window.turnstile || widget.current !== null) return;
    widget.current = window.turnstile.render(container.current, {
      sitekey: "0x4AAAAAAFx7Uk46KzPpGk9j",
      action: "contact",
      theme: "light",
      size: window.matchMedia("(max-width: 400px)").matches ? "compact" : "flexible",
      "response-field": false,
      callback: (token: string) => { setError(false); onToken(token); },
      "expired-callback": () => onToken(""),
      "error-callback": () => { onToken(""); setError(true); },
    });
  }, [onToken]);

  useEffect(() => {
    mount();
    return () => {
      if (widget.current !== null) window.turnstile?.remove(widget.current);
      widget.current = null;
    };
  }, [mount]);

  useEffect(() => {
    if (resetKey && widget.current !== null) window.turnstile?.reset(widget.current);
  }, [resetKey]);

  return <div className="gf-form-wide">
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={mount} onError={() => setError(true)} />
    <div ref={container} aria-label="Security check" />
    {error && <p role="status">The security check could not load. Please reload the page or email <a href="mailto:umair@guildframe.com">umair@guildframe.com</a>.</p>}
    <noscript><p>Please enable JavaScript for the security check, or email <a href="mailto:umair@guildframe.com">umair@guildframe.com</a>.</p></noscript>
  </div>;
}

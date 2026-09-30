"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { siteConfig } from "../site-config";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const aiSourceStorageKey = "guildframe-ai-source";

export function Analytics() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const measurementId = siteConfig.analyticsId;
  const clarityProjectId = siteConfig.clarityProjectId;

  useEffect(() => {
    if (!ready || !measurementId || !window.gtag) return;
    const location = new URL(`${window.location.origin}${pathname}`);
    const params = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const value = params.get(key);
      if (value && /^[a-zA-Z0-9 ._-]{1,120}$/.test(value)) location.searchParams.set(key, value);
    }
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: location.toString(),
      page_title: document.title,
    });
  }, [ready, measurementId, pathname]);

  useEffect(() => {
    if (!ready || !measurementId || !window.gtag) return;

    const params = new URLSearchParams(window.location.search);
    const campaignSource = params.get("utm_source")?.toLowerCase() ?? "";
    const referrerHost = document.referrer
      ? new URL(document.referrer).hostname.toLowerCase()
      : "";
    const sources: [string, string[]][] = [
      ["chatgpt", ["chatgpt.com", "chat.openai.com"]],
      ["perplexity", ["perplexity.ai"]],
      ["copilot", ["copilot.microsoft.com"]],
      ["claude", ["claude.ai"]],
      ["gemini", ["gemini.google.com", "bard.google.com"]],
      ["you", ["you.com"]],
      ["phind", ["phind.com"]],
    ];
    const match = sources.find(([source, domains]) =>
      campaignSource === source || domains.some(
        (domain) => (campaignSource === domain || referrerHost === domain || referrerHost.endsWith(`.${domain}`)),
      ),
    );
    if (!match) return;

    const sessionKey = `guildframe-ai-referral-${match[0]}`;
    try {
      window.sessionStorage.setItem(aiSourceStorageKey, match[0]);
      if (window.sessionStorage.getItem(sessionKey)) return;
      window.sessionStorage.setItem(sessionKey, "1");
    } catch {
      // Analytics still works when browser privacy settings disable storage.
    }
    window.gtag("event", "ai_referral_visit", {
      ai_source: match[0],
      landing_page: pathname,
      referrer_host: referrerHost || undefined,
    });
  }, [ready, measurementId, pathname]);

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      if (!ready || !measurementId || !window.gtag) return;
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      if (!target) return;

      let aiSource: string | undefined;
      try {
        aiSource = window.sessionStorage.getItem(aiSourceStorageKey) ?? undefined;
      } catch {
        aiSource = undefined;
      }

      window.gtag("event", target.dataset.analyticsEvent ?? "cta_click", {
        cta_label: target.dataset.analyticsLabel ?? target.textContent?.trim(),
        cta_location: target.dataset.analyticsLocation ?? "unknown",
        link_url:
          target instanceof HTMLAnchorElement ? `${target.origin}${target.pathname}${target.hash}` : undefined,
        ai_source: aiSource,
        traffic_type: aiSource ? "ai_referral" : undefined,
      });
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [ready, measurementId]);

  if (!measurementId && !clarityProjectId) return null;

  return (
    <>
      {measurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="guildframe-google-analytics" strategy="afterInteractive" onReady={() => setReady(true)}>
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{send_page_view:false});`}
          </Script>
        </>
      ) : null}
      {clarityProjectId ? (
        <Script id="guildframe-microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityProjectId}");`}
        </Script>
      ) : null}
    </>
  );
}

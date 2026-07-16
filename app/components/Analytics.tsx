"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { siteConfig } from "../site-config";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const measurementId = siteConfig.analyticsId;

  useEffect(() => {
    if (!measurementId || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [measurementId, pathname]);

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    const params = new URLSearchParams(window.location.search);
    const campaignSource = params.get("utm_source")?.toLowerCase() ?? "";
    const referrerHost = document.referrer
      ? new URL(document.referrer).hostname.toLowerCase()
      : "";
    const sources: [string, string[]][] = [
      ["chatgpt", ["chatgpt.com"]],
      ["perplexity", ["perplexity.ai"]],
      ["copilot", ["copilot.microsoft.com"]],
      ["claude", ["claude.ai"]],
      ["gemini", ["gemini.google.com"]],
    ];
    const match = sources.find(([, domains]) =>
      domains.some(
        (domain) => campaignSource.includes(domain) || referrerHost.endsWith(domain),
      ),
    );
    if (!match) return;

    const sessionKey = `guildframe-ai-referral-${match[0]}`;
    try {
      if (window.sessionStorage.getItem(sessionKey)) return;
      window.sessionStorage.setItem(sessionKey, "1");
    } catch {
      // Analytics still works when browser privacy settings disable storage.
    }
    window.gtag("event", "ai_referral_visit", {
      ai_source: match[0],
      landing_page: `${pathname}${window.location.search}`,
      referrer_host: referrerHost || undefined,
    });
  }, [measurementId, pathname]);

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      if (!measurementId || !window.gtag) return;
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      if (!target) return;

      window.gtag("event", target.dataset.analyticsEvent ?? "cta_click", {
        cta_label: target.dataset.analyticsLabel ?? target.textContent?.trim(),
        cta_location: target.dataset.analyticsLocation ?? "unknown",
        link_url:
          target instanceof HTMLAnchorElement ? target.href : undefined,
      });
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [measurementId]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="guildframe-google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{send_page_view:false});`}
      </Script>
    </>
  );
}

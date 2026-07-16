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

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "../site-config";
import { type AnalyticsConsent, getLeadAttribution, getObservedAiSource, readAnalyticsConsent, safeCampaignValue, subscribeAnalyticsConsent, writeAnalyticsConsent } from "./lead-attribution";
import "../analytics-consent.css";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => /^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_clck$|_clsk$)/.test(name));
  const hostname = window.location.hostname;
  const domains = new Set([hostname, `.${hostname}`]);
  if (hostname.endsWith(".guildframe.com")) domains.add(".guildframe.com");
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeAnalyticsConsent, readAnalyticsConsent, () => null);
  const [choicesOpen, setChoicesOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const measuredAiSources = useRef(new Set<string>());
  const measurementId = siteConfig.analyticsId;
  const clarityProjectId = siteConfig.clarityProjectId;
  const accepted = consent === "accepted";

  useEffect(() => {
    getLeadAttribution();
    const openChoices = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLElement>("[data-analytics-preferences]");
      if (!link) return;
      event.preventDefault();
      previousFocus.current = link;
      setChoicesOpen(true);
      window.requestAnimationFrame(() => titleRef.current?.focus());
    };
    document.addEventListener("click", openChoices);
    return () => document.removeEventListener("click", openChoices);
  }, []);

  useEffect(() => {
    if (!accepted || !ready || !measurementId || !window.gtag) return;
    const location = new URL(`${window.location.origin}${pathname}`);
    const params = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
      const value = safeCampaignValue(params.get(key));
      if (value) location.searchParams.set(key, value);
    }
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: location.toString(),
      page_referrer: getLeadAttribution()?.first_touch_referrer_host ?? "",
      page_title: document.title,
    });
    const attribution = getLeadAttribution();
    const aiSource = getObservedAiSource(attribution);
    if (aiSource && !measuredAiSources.current.has(aiSource)) {
      measuredAiSources.current.add(aiSource);
      window.gtag("event", "ai_referral_visit", { ai_source: aiSource, ...attribution });
    }
  }, [accepted, ready, measurementId, pathname]);

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      if (!accepted || !ready || !measurementId || !window.gtag || !(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>("[data-analytics-event], a[href^='mailto:']");
      if (!target) return;
      const isEmail = target instanceof HTMLAnchorElement && target.protocol === "mailto:";
      window.gtag("event", target.dataset.analyticsEvent ?? (isEmail ? "contact_email_click" : "cta_click"), {
        cta_label: isEmail ? "Email Guildframe" : target.dataset.analyticsLabel ?? target.textContent?.trim(),
        cta_location: target.dataset.analyticsLocation ?? pathname,
        link_url: target instanceof HTMLAnchorElement && !isEmail ? `${target.origin}${target.pathname}${target.hash}` : undefined,
        ...getLeadAttribution(),
        ai_source: getObservedAiSource(),
      });
    };
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, [accepted, ready, measurementId, pathname]);

  function chooseConsent(choice: Exclude<AnalyticsConsent, null>) {
    writeAnalyticsConsent(choice);
    setChoicesOpen(false);
    previousFocus.current?.focus();
    if (choice === "declined") {
      window.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      window.clarity?.("consentv2", { analytics_Storage: "denied", ad_Storage: "denied" });
      clearAnalyticsCookies();
      // Reload to remove any scripts loaded before the visitor withdrew consent.
      if (accepted) window.location.reload();
    }
  }

  return <>
    {accepted && measurementId ? <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="guildframe-google-analytics" strategy="afterInteractive" onReady={() => setReady(true)}>
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','${measurementId}',{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:window.location.origin+window.location.pathname,page_referrer:''});`}
      </Script>
    </> : null}
    {accepted && clarityProjectId ? <Script id="guildframe-microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};c[a]('consentv2',{analytics_Storage:'granted',ad_Storage:'denied'});t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityProjectId}");`}
    </Script> : null}
    {consent === null || choicesOpen ? <section className="analytics-consent" aria-labelledby="analytics-consent-title" aria-describedby="analytics-consent-description">
      <div><h2 id="analytics-consent-title" tabIndex={-1} ref={titleRef}>Your analytics choice</h2><p id="analytics-consent-description">With your permission, Google Analytics and Microsoft Clarity help me understand how this site is used. You can browse, get the kit and send a project without them. <Link href="/privacy#analytics">Read about privacy</Link>.</p></div>
      <div className="analytics-consent-actions"><button type="button" onClick={() => chooseConsent("accepted")}>Accept analytics</button><button type="button" onClick={() => chooseConsent("declined")}>Decline analytics</button></div>
    </section> : null}
  </>;
}

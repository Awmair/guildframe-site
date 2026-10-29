export type LeadAttribution = {
  first_touch_path: string;
  first_touch_referrer_host?: string;
  first_touch_utm_source?: string;
  first_touch_utm_medium?: string;
  first_touch_utm_campaign?: string;
  first_touch_utm_content?: string;
  first_touch_evidence: "campaign_tags" | "external_referrer" | "direct_or_unknown";
};

const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
let firstTouch: LeadAttribution | undefined;

export function safeCampaignValue(value: string | null): string | undefined {
  const trimmed = value?.trim();
  return trimmed && /^[a-zA-Z0-9 ._-]{1,100}$/.test(trimmed) ? trimmed : undefined;
}

// Keep this visit's observed source in memory without a tracking identifier.
export function getLeadAttribution(): LeadAttribution | undefined {
  if (typeof window === "undefined") return undefined;
  if (firstTouch) return firstTouch;
  const pathname = window.location.pathname;
  firstTouch = {
    first_touch_path: /^[a-zA-Z0-9/_-]{1,200}$/.test(pathname) ? pathname : "/",
    first_touch_evidence: "direct_or_unknown",
  };
  try {
    if (document.referrer) {
      const referrer = new URL(document.referrer);
      const ownHost = window.location.hostname.replace(/^www\./, "");
      const referrerHost = referrer.hostname.toLowerCase().replace(/^www\./, "");
      if (["http:", "https:"].includes(referrer.protocol) && referrerHost !== ownHost) {
        firstTouch.first_touch_referrer_host = referrerHost.slice(0, 200);
        firstTouch.first_touch_evidence = "external_referrer";
      }
    }
  } catch { /* A malformed referrer stays unknown. */ }
  const params = new URLSearchParams(window.location.search);
  for (const key of campaignKeys) {
    const value = safeCampaignValue(params.get(key));
    if (value) {
      firstTouch[`first_touch_${key}`] = value;
      firstTouch.first_touch_evidence = "campaign_tags";
    }
  }
  return firstTouch;
}

export function getObservedAiSource(attribution = getLeadAttribution()): string | undefined {
  const campaignSource = attribution?.first_touch_utm_source?.toLowerCase() ?? "";
  const referrerHost = attribution?.first_touch_referrer_host ?? "";
  const sources: [string, string[]][] = [
    ["chatgpt", ["chatgpt.com", "chat.openai.com"]],
    ["perplexity", ["perplexity.ai"]],
    ["copilot", ["copilot.microsoft.com"]],
    ["claude", ["claude.ai"]],
    ["gemini", ["gemini.google.com", "bard.google.com"]],
    ["you", ["you.com"]],
    ["phind", ["phind.com"]],
  ];
  return sources.find(([source, domains]) => campaignSource === source || domains.some(
    (domain) => campaignSource === domain || referrerHost === domain || referrerHost.endsWith(`.${domain}`),
  ))?.[0];
}

export const analyticsConsentStorageKey = "guildframe-analytics-consent";
export type AnalyticsConsent = "accepted" | "declined" | null;
let volatileConsent: AnalyticsConsent = null;

export function readAnalyticsConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(analyticsConsentStorageKey);
    return stored === "accepted" || stored === "declined" ? stored : volatileConsent;
  } catch { return volatileConsent; }
}

export function writeAnalyticsConsent(choice: Exclude<AnalyticsConsent, null>) {
  volatileConsent = choice;
  try { window.localStorage.setItem(analyticsConsentStorageKey, choice); } catch { /* Keep the choice for this page when storage is blocked. */ }
  window.dispatchEvent(new Event("guildframe-analytics-consent-change"));
}

export function subscribeAnalyticsConsent(listener: () => void) {
  const changedInAnotherTab = (event: StorageEvent) => {
    if (event.key !== analyticsConsentStorageKey) return;
    volatileConsent = null;
    listener();
    if (event.newValue !== "accepted" && (window.gtag || window.clarity)) window.location.reload();
  };
  window.addEventListener("guildframe-analytics-consent-change", listener);
  window.addEventListener("storage", changedInAnotherTab);
  return () => {
    window.removeEventListener("guildframe-analytics-consent-change", listener);
    window.removeEventListener("storage", changedInAnotherTab);
  };
}

export function hasAnalyticsConsent(): boolean {
  return typeof window !== "undefined" && readAnalyticsConsent() === "accepted";
}

/** @param {unknown} value */
export function safeCampaignValue(value) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return /^[a-zA-Z0-9 ._-]{1,100}$/.test(trimmed) ? trimmed : undefined;
}

/** @param {unknown} value */
export function safePagePath(value) {
  if (typeof value !== "string") return undefined;
  const pathname = value.split(/[?#]/, 1)[0];
  if (pathname.length > 200 || !/^\/(?:[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*\/?)?$/.test(pathname)) return undefined;
  return pathname === "/" ? pathname : pathname.replace(/\/$/, "");
}

/** @param {unknown} value */
export function safeReferrerHost(value) {
  if (typeof value !== "string") return undefined;
  const hostname = value.toLowerCase().replace(/^www\./, "").replace(/\.$/, "");
  if (hostname.length > 200 || !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(hostname)) return undefined;
  return hostname;
}

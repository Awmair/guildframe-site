import { access, readFile } from "node:fs/promises";

const strict = process.argv.includes("--strict");
const failures = [];
const warnings = [];

const requiredFiles = [
  "public/og-guildframe-launch-v2.jpg",
  "public/_headers",
  "public/_redirects",
  "app/not-found.tsx",
  "app/buy/page.tsx",
];

for (const file of requiredFiles) {
  try {
    await access(file);
  } catch {
    failures.push(`Missing launch file: ${file}`);
  }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

if (!siteUrl) failures.push("NEXT_PUBLIC_SITE_URL is not set.");
if (siteUrl && !/^https:\/\/[^/]+\/?$/i.test(siteUrl)) {
  failures.push("NEXT_PUBLIC_SITE_URL must be the final HTTPS origin without a path.");
}
if (siteUrl && /localhost|127\.0\.0\.1/i.test(siteUrl)) {
  failures.push("NEXT_PUBLIC_SITE_URL cannot use localhost for a production build.");
}

if (!checkoutUrl) failures.push("NEXT_PUBLIC_CHECKOUT_URL is not set.");
if (checkoutUrl && !/^https:\/\//i.test(checkoutUrl)) {
  failures.push("NEXT_PUBLIC_CHECKOUT_URL must use HTTPS.");
}

if (!analyticsId) failures.push("NEXT_PUBLIC_GA_MEASUREMENT_ID is not set.");
if (analyticsId && !/^G-[A-Z0-9]+$/i.test(analyticsId)) {
  failures.push("NEXT_PUBLIC_GA_MEASUREMENT_ID must be a GA4 ID beginning with G-.");
}

if (!process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim()) {
  warnings.push(
    "No HTML Search Console token set. This is fine when the domain is verified with a DNS TXT record.",
  );
}

const redirects = await readFile("public/_redirects", "utf8").catch(() => "");
if (!redirects.includes("/pricing")) {
  failures.push("Legacy pricing redirect is missing.");
}

for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (failures.length) {
  const output = failures.map((failure) => `- ${failure}`).join("\n");
  if (strict) {
    console.error(`Launch preflight failed:\n${output}`);
    process.exit(1);
  }
  console.warn(`Launch settings still required:\n${output}`);
} else {
  console.log("Launch preflight passed.");
}

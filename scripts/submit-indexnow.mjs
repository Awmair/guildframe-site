import { readFile, writeFile } from "node:fs/promises";

// IndexNow ownership keys are public verification files, not API secrets.
const config = JSON.parse(await readFile(new URL("../indexnow.config.json", import.meta.url), "utf8"));
const origin = `https://${config.host}`;
if (config.host !== "guildframe.com" || !/^[a-f0-9]{32}$/.test(config.key) || config.keyLocation !== `${origin}/${config.key}.txt`) {
  throw new Error("Unexpected IndexNow host or verification location.");
}

async function getText(url) {
  const response = await fetch(url, { redirect: "error", signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`Fetch failed: ${response.status} ${url}`);
  return response.text();
}

const dryRun = process.argv.includes("--dry-run");
const sitemap = dryRun
  ? await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8")
  : await getText(`${origin}/sitemap.xml`);
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (!urlList.length || urlList.length > 10000 || new Set(urlList).size !== urlList.length) {
  throw new Error("Sitemap must contain 1–10000 distinct canonical URLs.");
}
for (const value of urlList) {
  const url = new URL(value);
  if (url.origin !== origin || url.search || url.hash || /\.(txt|webp|png|jpg|js|css|xml)$/.test(url.pathname)) {
    throw new Error(`Unexpected page URL in sitemap: ${value}`);
  }
}
const payload = { ...config, urlList };
if (dryRun) {
  console.log(JSON.stringify({ dryRun: true, host: config.host, pages: urlList.length, urlList }, null, 2));
} else {
  const verifiedKey = (await getText(config.keyLocation)).trim();
  if (verifiedKey !== config.key) throw new Error("The live ownership file does not match the IndexNow key.");
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20000),
  });
  const receipt = {
    submittedAt: new Date().toISOString(), host: config.host, pages: urlList.length,
    status: response.status,
    result: response.status === 200 ? "Received" : response.status === 202 ? "Received; key validation pending" : "Rejected",
    urlList,
  };
  const output = process.argv.find(value => value.startsWith("--receipt="))?.slice("--receipt=".length);
  if (output) await writeFile(output, JSON.stringify(receipt, null, 2) + "\n");
  console.log(JSON.stringify(receipt, null, 2));
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow rejected the submission: HTTP ${response.status}`);
}

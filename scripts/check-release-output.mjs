import { spawnSync } from "node:child_process";

const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
if (!origin || origin !== "https://guildframe.com") {
  throw new Error("Release output checks require Guildframe's canonical production origin.");
}
const result = spawnSync(process.execPath, ["--test", "tests/static-output.test.mjs"], {
  stdio: "inherit",
  env: {...process.env, STATIC_SITE_ORIGIN: origin},
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);

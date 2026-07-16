import { readdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve("out");
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".txt",
  ".webmanifest",
  ".xml",
]);
const assetExtensions = new Set([".jpg", ".jpeg", ".png", ".svg", ".webp"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    if (entry.isFile()) files.push(file);
  }
  return files;
}

const files = await walk(outputRoot);
const textFiles = files.filter((file) => textExtensions.has(path.extname(file)));
const content = (await Promise.all(textFiles.map((file) => readFile(file, "utf8")))).join("\n");

const candidates = files.filter((file) => {
  const relative = path.relative(outputRoot, file);
  return (
    relative.startsWith(`images${path.sep}`) &&
    assetExtensions.has(path.extname(file).toLowerCase())
  );
});

const removableRootAssets = ["og.png", "og-guildframe-launch-v2.png", "file.svg", "globe.svg", "window.svg"]
  .map((file) => path.join(outputRoot, file));

let removedBytes = 0;
let removedFiles = 0;

for (const file of [...candidates, ...removableRootAssets]) {
  const relativeUrl = `/${path.relative(outputRoot, file).split(path.sep).join("/")}`;
  if (content.includes(relativeUrl)) continue;
  const details = await stat(file).catch(() => null);
  if (!details) continue;
  removedBytes += details.size;
  removedFiles += 1;
  await rm(file);
}

console.log(
  `Pages output optimized: removed ${removedFiles} unreferenced assets (${(removedBytes / 1024 / 1024).toFixed(1)} MB).`,
);

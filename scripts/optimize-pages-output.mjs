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

// Any bundled image that no exported page, stylesheet or data file references
// is dead weight on every deploy. This covers /images/** and retired social
// cards left at the output root, such as older og-guildframe-offers versions.
const candidates = files.filter((file) => {
  const relative = path.relative(outputRoot, file);
  const isImageDirectory = relative.startsWith(`images${path.sep}`);
  const isRootAsset = !relative.includes(path.sep);
  return (
    (isImageDirectory || isRootAsset) &&
    assetExtensions.has(path.extname(file).toLowerCase())
  );
});

// Favicons are declared by the browser and the manifest rather than by a
// literal path in every page, so they are never treated as removable.
const protectedRootAssets = new Set(["favicon.svg", "favicon-192x192.png", "favicon-512x512.png"]);

let removedBytes = 0;
let removedFiles = 0;

for (const file of candidates) {
  if (protectedRootAssets.has(path.basename(file))) continue;
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

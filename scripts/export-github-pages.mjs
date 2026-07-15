import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const clientDir = resolve(projectRoot, "dist/client");
const workerFile = resolve(projectRoot, "dist/server/index.js");
const outputDir = resolve(projectRoot, ".pages");
const origin = process.env.PAGES_ORIGIN ?? "https://example.github.io";

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const workerUrl = pathToFileURL(workerFile);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request(`${origin}/`, { headers: { accept: "text/html" } }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const html = (await response.text())
  .replaceAll("http://localhost:3000", origin)
  .replace(/<link\b[^>]*\brel=["']modulepreload["'][^>]*>\s*/gi, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>\s*/gi, "");

await writeFile(resolve(outputDir, "index.html"), html, "utf8");
await writeFile(resolve(outputDir, ".nojekyll"), "", "utf8");
console.log(`Exported GitHub Pages site to ${outputDir}`);

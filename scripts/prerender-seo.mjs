// Runs after `vite build`. Writes one HTML file per public page into dist/ with its own
// <title>, description, canonical, Open Graph and JSON-LD, so search engines and link
// previews (WhatsApp, Facebook, etc.) see the right metadata without running JavaScript.
// The React app still boots normally on each file.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pages, businessSchema, SITE_URL, OG_IMAGE } from "../src/seo.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist");
const template = await readFile(resolve(distDir, "index.html"), "utf8");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function headFor(page) {
  const url = SITE_URL + page.path;
  const robots = page.noindex ? "noindex, nofollow" : "index, follow";
  const schema = JSON.stringify({ ...businessSchema, url }).replace(/</g, "\\u003c");
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}">`,
    page.keywords ? `<meta name="keywords" content="${esc(page.keywords)}">` : "",
    `<meta name="robots" content="${robots}">`,
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="RR Events">`,
    `<meta property="og:title" content="${esc(page.title)}">`,
    `<meta property="og:description" content="${esc(page.description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(page.title)}">`,
    `<meta name="twitter:description" content="${esc(page.description)}">`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}">`,
    `<script type="application/ld+json">${schema}</script>`,
  ].filter(Boolean).join("\n");
}

function render(page) {
  return template.replace(/<!--SEO-->[\s\S]*?<!--\/SEO-->/, `<!--SEO-->\n${headFor(page)}\n<!--/SEO-->`);
}

for (const [key, page] of Object.entries(pages)) {
  // The 404 page is served by the app itself for unknown URLs, so it gets no static file.
  if (key === "notFound") continue;
  const html = render(page);
  if (page.path === "/") {
    await writeFile(resolve(distDir, "index.html"), html);
  } else {
    const dir = resolve(distDir, page.path.slice(1));
    await mkdir(dir, { recursive: true });
    await writeFile(resolve(dir, "index.html"), html);
  }
  console.log(`seo: wrote ${page.path === "/" ? "/" : page.path + "/"}`);
}

/*
  Mapa strony dla Google (sitemap.xml) — budowana automatycznie
  ze wszystkich stron w obu językach, z odnośnikami hreflang PL ↔ EN.
*/
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { ROUTES } from "../i18n/ui";

export const GET: APIRoute = async ({ site }) => {
  const base = new URL(import.meta.env.BASE_URL.replace(/\/?$/, "/"), site);
  const abs = (p: string) => new URL(p, base).href;

  // pary [adres PL, adres EN]
  const pary: [string, string][] = Object.values(ROUTES).map((r) => [r.pl, r.en]);
  for (const z of await getCollection("zawodnicy")) pary.push([`sklad/${z.id}/`, `en/roster/${z.id}/`]);
  for (const w of await getCollection("aktualnosci")) pary.push([`aktualnosci/${w.id}/`, `en/news/${w.id}/`]);

  const wpis = (loc: string, pl: string, en: string) =>
    `  <url>\n    <loc>${abs(loc)}</loc>\n` +
    `    <xhtml:link rel="alternate" hreflang="pl" href="${abs(pl)}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pl)}"/>\n  </url>`;

  const body = pary.flatMap(([pl, en]) => [wpis(pl, pl, en), wpis(en, pl, en)]).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

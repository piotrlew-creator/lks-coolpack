// @ts-check
import { defineConfig } from "astro/config";

/*
  Adres strony: własna domena lkscoolpacklodz.pl (od 25.11.2026).
  DNS w Cloudflare, strona na GitHub Pages (repozytorium piotrlew-creator/lks-coolpack).
  Stary adres piotrlew-creator.github.io/lks-coolpack/ przekierowuje tutaj automatycznie.
*/
const SITE = "https://lkscoolpacklodz.pl";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  image: {
    // Zdjęcia zawodników i drużyny Astro zamienia na WebP/AVIF
    // w kilku rozmiarach (telefon, tablet, monitor).
    responsiveStyles: true,
  },
  devToolbar: {
    enabled: false,
  },
});

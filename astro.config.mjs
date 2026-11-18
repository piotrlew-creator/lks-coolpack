// @ts-check
import { defineConfig } from "astro/config";

/*
  Adres strony.
  Na razie strona działa jako wersja robocza pod adresem GitHub Pages:
  https://piotrlew-creator.github.io/lks-coolpack/
  Gdy podłączymy własną domenę (np. https://lkscoolpack.pl), wystarczy
  zmienić SITE na adres domeny i BASE na "/".
*/
const SITE = "https://piotrlew-creator.github.io";
const BASE = "/lks-coolpack";

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

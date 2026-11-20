import { getCollection } from "astro:content";
import type { Lang } from "../i18n/ui";

/** Zawodnicy posortowani według numeru na koszulce. */
export async function zawodnicy() {
  return (await getCollection("zawodnicy")).sort((a, b) => a.data.numer - b.data.numer);
}

/** Sztab w kolejności z pola `kolejnosc`. */
export async function sztab() {
  return (await getCollection("sztab")).sort((a, b) => a.data.kolejnosc - b.data.kolejnosc);
}

/** Sponsorzy w kolejności z pola `kolejnosc`. */
export async function sponsorzy() {
  return (await getCollection("sponsorzy")).sort((a, b) => a.data.kolejnosc - b.data.kolejnosc);
}

/** Tekst w wybranym języku (gdy brak angielskiego — polski). */
export function pick(pl: string, en: string, lang: Lang): string {
  return lang === "en" && en.trim() ? en : pl;
}

/** Akapity z tekstu (rozdzielone pustą linią). */
export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

/** Wpisy w Aktualnościach, od najnowszego. */
export async function aktualnosci() {
  return (await getCollection("aktualnosci")).sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

/** Data publikacji wpisu: „18 listopada 2026” / „18 November 2026”. */
export function dataWpisu(d: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

/** Logotypy bardziej „kwadratowe” niż podłużne wyglądają przy tej samej wysokości na mniejsze —
    ta skala (1–1,6) wyrównuje ich wizualną wielkość względem szerokich logotypów. */
export function skalaLogo(img: { width: number; height: number }): number {
  const proporcje = img.width / img.height;
  return Math.min(1.6, Math.max(1, Math.sqrt(4 / proporcje)));
}

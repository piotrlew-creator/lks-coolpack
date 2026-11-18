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

/*
  Kolekcje treści strony.
  Każdy zawodnik, członek sztabu i sponsor to osobny plik .md
  w folderze src/content/... — dodanie lub usunięcie pliku
  automatycznie zmienia siatkę składu, stronę sztabu i sponsorów.
*/
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { LIGI, POZIOMY_SPONSORA, POZYCJE } from "./lib/consts";


const zawodnicy = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/zawodnicy" }),
  schema: ({ image }) =>
    z.object({
      imie: z.string(),
      nazwisko: z.string(),
      numer: z.number().int().min(0).max(99),
      pozycje: z.array(z.enum(POZYCJE)).min(1), // jedna lub dwie, np. ["Rozgrywający", "Rzucający"]
      wzrost: z.number().int().optional(), // w cm, np. 201
      dataUrodzenia: z.coerce.date().optional(), // RRRR-MM-DD
      narodowosc: z.string().optional(), // kod kraju: PL, US, LT… (nazwa pokaże się w obu językach)
      kapitan: z.boolean().default(false),
      zdjecie: image().optional(), // zdjęcie na stronę zawodnika, pion 4:5 (np. 1600×2000)
      kafel: image().optional(), // zdjęcie na kafel w składzie, pion 3:4 (np. 900×1200)
      // Opis zawodnika w obu językach (akapity rozdzielone pustą linią)
      opis: z.string().default(""),
      opisEn: z.string().default(""),
      // Kariera w Polsce (od najnowszego sezonu). liga: EKS = ekstraklasa, 1L, 2L, 3L
      kariera: z
        .array(z.object({ sezon: z.string(), klub: z.string(), liga: z.enum(LIGI) }))
        .default([]),
    }),
});

const sztab = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sztab" }),
  schema: ({ image }) =>
    z.object({
      imie: z.string(),
      nazwisko: z.string(),
      funkcja: z.string(), // np. "Trener główny"
      funkcjaEn: z.string().default(""), // np. "Head coach"
      opis: z.string().default(""),
      opisEn: z.string().default(""),
      kolejnosc: z.number().int().default(50), // mniejsza liczba = wyżej
      zdjecie: image().optional(),
    }),
});


const sponsorzy = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sponsorzy" }),
  schema: ({ image }) =>
    z.object({
      nazwa: z.string(),
      poziom: z.enum(POZIOMY_SPONSORA),
      link: z.url().optional(),
      logo: image().optional(), // kolorowe logo (jasne tło)
      logoMono: image().optional(), // białe logo do stopki i ciemnego motywu
      kolejnosc: z.number().int().default(50),
    }),
});

export const collections = { zawodnicy, sztab, sponsorzy };

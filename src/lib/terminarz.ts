/*
  Terminarz i wyniki ŁKS CoolPack — dane w src/data/terminarz.json
  (pobierane ze strony 1lm.pzkosz.pl po każdym meczu).
*/
import dane from "../data/terminarz.json";
import tabelaDane from "../data/tabela.json";
import { klub, type Mecz } from "../data/klub";

export type MeczT = {
  data: string; // "2026-11-19T18:00" lub sama data, gdy godzina nieznana
  gospodarz: string;
  gosc: string;
  wynik: [number, number] | null; // [gospodarz, gość]
  link: string; // strona meczu na 1lm.pzkosz.pl
};

export type MeczLks = MeczT & {
  dom: boolean; // ŁKS gospodarzem
  rywal: string;
  miasto: string; // gdzie gramy
  lks: number | null; // punkty ŁKS
  rywalPkt: number | null;
  wygrana: boolean | null; // null = mecz nierozegrany
  godzina: boolean; // czy znamy godzinę
};

const jestLks = (n: string) => /ŁKS\s+Coolpack/i.test(n);

export const terminarz: MeczLks[] = (dane.mecze as MeczT[])
  .map((m) => {
    const dom = jestLks(m.gospodarz);
    const rywal = dom ? m.gosc : m.gospodarz;
    const [g, h] = m.wynik ?? [null, null];
    const lks = m.wynik ? (dom ? g : h) : null;
    const rywalPkt = m.wynik ? (dom ? h : g) : null;
    return {
      ...m,
      dom,
      rywal,
      miasto: dom ? "Łódź" : (dane.miasta as Record<string, string>)[rywal] ?? "",
      lks,
      rywalPkt,
      wygrana: lks === null || rywalPkt === null ? null : lks > rywalPkt,
      godzina: m.data.includes("T"),
    };
  })
  .sort((a, b) => a.data.localeCompare(b.data));

export const sezon = dane.sezon;
export const zrodloTerminarza = dane.zrodlo;
export const aktualizacjaTerminarza = dane.aktualizacja;

/** Bilans: zwycięstwa i porażki (wszystkie, u siebie, na wyjeździe). */
export function bilans() {
  const gr = terminarz.filter((m) => m.wygrana !== null);
  const licz = (l: MeczLks[]) => ({ w: l.filter((m) => m.wygrana).length, p: l.filter((m) => m.wygrana === false).length });
  return {
    rozegrane: gr.length,
    wszystkie: terminarz.length,
    razem: licz(gr),
    dom: licz(gr.filter((m) => m.dom)),
    wyjazd: licz(gr.filter((m) => !m.dom)),
  };
}

/** Pierwszy nierozegrany mecz — do karty „Najbliższy mecz”. */
export const nastepny: MeczLks | undefined = terminarz.find((m) => m.wygrana === null);

function doKarty(m: MeczLks | undefined): Mecz | null {
  return m
    ? {
        data: m.godzina ? m.data : `${m.data}T00:00`,
        rywal: m.rywal,
        dom: m.dom,
        hala: m.dom ? klub.kontakt.hala.nazwa || m.miasto : m.miasto,
        bilety: m.dom ? klub.kontakt.bilety.link || undefined : undefined,
      }
    : null;
}

/** Najbliższy mecz na stronę startową (bilety i transmisja z src/data/klub.ts). */
export const najblizszyMecz: Mecz | null = doKarty(nastepny);

/** Mecz po najbliższym — karta zapasowa, gdy wynik nie został jeszcze wpisany. */
export const kolejnyMecz: Mecz | null = doKarty(terminarz.filter((m) => m.wygrana === null)[1]);

/** Oficjalna nazwa rywala z terminarza dla meczu o danej dacie (np. we wpisach). */
export function rywalZTerminarza(data: string, zapas: string): string {
  return terminarz.find((m) => m.data === data)?.rywal ?? zapas;
}

/** Ostatni rozegrany mecz — sekcja „Ostatni wynik” na stronie startowej. */
export const ostatni: MeczLks | undefined = [...terminarz].reverse().find((m) => m.wygrana !== null);

/* ── Tabela ligowa (src/data/tabela.json, z 1lm.pzkosz.pl/tabele.html) ── */

export type Wiersz = {
  miejsce: number;
  druzyna: string;
  pkt: number;
  mecze: number;
  bilans: [number, number];
  dom: [number, number];
  wyjazd: [number, number];
  kosze: [number, number];
  roznica: number;
  strefa: "playoff" | "spadek" | "";
  link: string;
  lks: boolean;
};

export const tabela: Wiersz[] = (tabelaDane.druzyny as Omit<Wiersz, "lks">[]).map((w) => ({ ...w, lks: jestLks(w.druzyna) }));
export const aktualizacjaTabeli = tabelaDane.aktualizacja;
export const zrodloTabeli = tabelaDane.zrodlo;
export const miejsceLks = tabela.find((w) => w.lks);

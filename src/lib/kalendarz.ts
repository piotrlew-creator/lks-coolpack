/*
  Plik kalendarza (.ics) dla pojedynczego meczu — przycisk „Dodaj do kalendarza”.
  Telefon lub komputer otwiera go w domyślnym kalendarzu (Apple, Google, Outlook).
  Godziny zapisujemy w UTC (litera Z), więc kalendarz sam przeliczy czas lokalny.
*/
import { klub } from "../data/klub";
import type { Lang } from "../i18n/ui";
import { idMeczu, type MeczLks, terminarz } from "./terminarz";

/** Czas polski („2026-11-19T18:00”) → Date w UTC (zimą +1, latem +2). */
export function polskiCzas(local: string): Date {
  const guess = new Date(local + "Z");
  const pl = new Date(guess.toLocaleString("en-US", { timeZone: "Europe/Warsaw" }));
  const utc = new Date(guess.toLocaleString("en-US", { timeZone: "UTC" }));
  return new Date(guess.getTime() - (pl.getTime() - utc.getTime()));
}

const ics = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
// Znaki specjalne w treści ICS: \ ; , i nowa linia
const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
// Linie dłuższe niż 75 bajtów zawijamy (wymóg formatu)
function fold(line: string): string {
  const out: string[] = [];
  let cur = "";
  for (const ch of line) {
    if (new TextEncoder().encode(cur + ch).length > 74) {
      out.push(cur);
      cur = " " + ch;
    } else cur += ch;
  }
  out.push(cur);
  return out.join("\r\n");
}

export function meczIcs(m: MeczLks, lang: Lang, adresStrony: string): string {
  const lks = klub.nazwa;
  const gospodarz = m.dom ? lks : m.rywal;
  const gosc = m.dom ? m.rywal : lks;
  const hala = klub.kontakt.hala;
  const tytul = `🏀 ${gospodarz} – ${gosc}`;
  const miejsce = m.dom ? `${hala.nazwa}, ${hala.adres}` : m.miasto;
  const opis =
    lang === "pl"
      ? [
          `1 Liga Mężczyzn PZKosz. ${m.dom ? "Mecz u siebie" : "Mecz na wyjeździe"}.`,
          m.dom && hala.mapa ? `Dojazd: ${hala.mapa}` : "",
          m.bilety ? `Bilety: ${m.bilety}` : "",
          klub.transmisja.link ? `Transmisja na żywo: ${klub.transmisja.nazwa} (subskrypcja) ${klub.transmisja.link}` : "",
          `Terminarz i wyniki: ${adresStrony}`,
        ]
      : [
          `PZKosz 1st League. ${m.dom ? "Home game" : "Away game"}.`,
          m.dom && hala.mapa ? `Directions: ${hala.mapa}` : "",
          m.bilety ? `Tickets: ${m.bilety}` : "",
          klub.transmisja.link ? `Live stream: ${klub.transmisja.nazwa} (subscription) ${klub.transmisja.link}` : "",
          `Fixtures and results: ${adresStrony}`,
        ];
  const id = idMeczu(m);
  const linie = ["BEGIN:VEVENT", `UID:lks-coolpack-${id}@lks-coolpack`, `DTSTAMP:${ics(new Date())}`];
  if (m.godzina) {
    const start = polskiCzas(m.data);
    const koniec = new Date(start.getTime() + 2 * 3600 * 1000);
    linie.push(`DTSTART:${ics(start)}`, `DTEND:${ics(koniec)}`);
    // przypomnienie 2 godziny wcześniej
    linie.push("BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(tytul)}`, "TRIGGER:-PT2H", "END:VALARM");
  } else {
    // godzina jeszcze nieznana — wydarzenie całodniowe
    const d = m.data.slice(0, 10).replace(/-/g, "");
    const next = new Date(Date.UTC(+d.slice(0, 4), +d.slice(4, 6) - 1, +d.slice(6, 8) + 1));
    linie.push(`DTSTART;VALUE=DATE:${d}`, `DTEND;VALUE=DATE:${next.toISOString().slice(0, 10).replace(/-/g, "")}`);
  }
  linie.push(`SUMMARY:${esc(tytul)}`, `LOCATION:${esc(miejsce)}`, `DESCRIPTION:${esc(opis.filter(Boolean).join("\n"))}`, `URL:${adresStrony}`, "END:VEVENT");
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//LKS CoolPack Lodz//Terminarz//PL", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", ...linie, "END:VCALENDAR", ""]
    .map(fold)
    .join("\r\n");
}

/** Mecze, dla których budujemy pliki kalendarza (wszystkie z terminarza). */
export function sciezkiKalendarza() {
  return terminarz.map((m) => ({ params: { id: idMeczu(m) }, props: { m } }));
}

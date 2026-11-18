/*
  Pobieranie statystyk sezonu ze strony 1lm.pzkosz.pl.
  Uruchamiane w konsoli przeglądarki na dowolnej stronie 1lm.pzkosz.pl
  (albo przez Claude w przeglądarce). Zwraca JSON z wierszem
  bieżącego sezonu (sumy i średnie) dla każdego zawodnika.
  Wynik przerabiamy na src/data/statystyki.json.

  Klucz = nazwa pliku zawodnika w src/content/zawodnicy (bez .md),
  wartość = identyfikator i adres zawodnika na 1lm.pzkosz.pl.
*/
const SEZON = "2026/2027";
const ZAWODNICY = {
  "maciej-bender": "3920/maciej-bender",
  "igor-urban": "55535/igor-urban",
  "marcin-tomaszewski": "210/marcin-tomaszewski",
  "jalen-sullinger": "114852/jalen-sullinger",
  "marcel-ponitka": "2957/marcel-ponitka",
  "jakub-motylewski": "27325/jakub-motylewski",
  "iwo-mackowiak": "40554/iwo-mackowiak",
  "adam-lapeta": "73/adam-lapeta",
  "artur-labinowicz": "78160/artur-labinowicz",
  "aleksander-lewandowski": "13620/aleksander-lewandowski",
  "norbert-kulon": "1477/norbert-kulon",
  "michal-kolodziej": "28852/michal-kolodziej",
};
const wynik = {};
for (const [slug, path] of Object.entries(ZAWODNICY)) {
  const html = await fetch(`/zawodnicy/p/${path}/1.html`).then((r) => r.text());
  const doc = new DOMParser().parseFromString(html, "text/html");
  const [sumy, srednie] = [...doc.querySelectorAll("table")];
  const wiersz = (t) =>
    t && [...t.querySelectorAll("tr")]
      .map((r) => [...r.children].map((c) => c.textContent.trim()))
      .find((c) => c[0] === SEZON && /ŁKS/i.test(c[1]));
  wynik[slug] = { sum: [wiersz(sumy)], avg: [wiersz(srednie)] };
}
JSON.stringify(wynik);

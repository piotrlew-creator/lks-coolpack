# ŁKS CoolPack Łódź — strona www

Strona drużyny **ŁKS CoolPack Łódź** (1. liga koszykówki mężczyzn) w dwóch wersjach
językowych: polskiej (adresy bez prefiksu) i angielskiej (`/en/`).

Zbudowana w [Astro](https://astro.build), publikowana za darmo na GitHub Pages.
Wersja robocza: https://piotrlew-creator.github.io/lks-coolpack/

## Praca na komputerze (VS Code, terminal PowerShell)

```powershell
git pull                 # zawsze najpierw — pobierz najnowsze zmiany
npm install              # tylko za pierwszym razem i po aktualizacjach
npm run dev              # podgląd na żywo: http://localhost:4321/lks-coolpack/
```

Wysłanie zmian (strona zaktualizuje się sama po ok. 1–2 minutach):

```powershell
git add -A
git commit -m "Opis zmiany"
git push
```

## Gdzie co jest

| Co zmieniasz | Plik / folder |
| --- | --- |
| Dane klubu, kontakt, Instagram, najbliższy mecz | `src/data/klub.ts` |
| Zawodnicy (jeden plik = jeden zawodnik) | `src/content/zawodnicy/` |
| Sztab (jeden plik = jedna osoba) | `src/content/sztab/` |
| Sponsorzy | `src/content/sponsorzy/` |
| Zdjęcia zawodników / sztabu / sponsorów | `src/assets/zawodnicy/`, `src/assets/sztab/`, `src/assets/sponsorzy/` |
| Zdjęcie w tle strony startowej | `src/assets/start/hero.jpg` (lub .png/.webp) |
| Wszystkie stałe teksty PL i EN | `src/i18n/ui.ts` |
| Kolory, czcionki | `src/styles/global.css` |
| Efekt pioruna | `src/scripts/site.ts` + koniec `src/styles/global.css` |

## Jak dodać zawodnika

1. Zdjęcie (najlepiej portret na przezroczystym tle, PNG, min. 1200 px wysokości)
   wrzuć do `src/assets/zawodnicy/`, np. `jan-kowalski.png`.
2. Skopiuj dowolny plik z `src/content/zawodnicy/` i nazwij go `jan-kowalski.md`
   — nazwa pliku to adres strony zawodnika (`/sklad/jan-kowalski/`).
3. Uzupełnij pola. W `pozycje` wpisz jedną lub dwie z: Rozgrywający, Rzucający,
   Niski skrzydłowy, Silny skrzydłowy, Środkowy. Narodowość wpisz kodem kraju (PL, US, LT…),
   datę urodzenia jako RRRR-MM-DD. Karierę (`kariera`) przepisz ze strony zawodnika na 1lm.pzkosz.pl
   (liga: EKS = ekstraklasa, 1L, 2L, 3L) — „W ŁKS od sezonu” i „Poprzedni klub” liczą się z niej same.
4. Odkomentuj linię `zdjecie:`.
5. Kapitan ma `kapitan: true`.

## Własna domena (później)

1. W `astro.config.mjs`: `SITE = "https://twojadomena.pl"` i `BASE = "/"`.
2. Dodaj plik `public/CNAME` z nazwą domeny.
3. W Cloudflare rekordy DNS jak przy lkskmjunior.pl; w GitHubie Settings → Pages → Custom domain.

## Aktualności (własne wpisy)

Każdy wpis to plik w `src/content/aktualnosci/`, np. `2026-11-25-wynik-z-kotwica.md`
(nazwa pliku = adres wpisu). Skopiuj istniejący wpis i zmień pola:
`tytul`/`tytulEn`, `data`, `lead`/`leadEn`, `tresc`/`trescEn` (akapity oddzielone pustą linią),
opcjonalnie `zdjecie` i `mecz` (karta meczu). Trzy najnowsze wpisy pokazują się na stronie startowej.

Najbliższy mecz na stronie startowej: `najblizszyMecz` w `src/data/klub.ts`.
Trzy godziny po rozpoczęciu karta meczu sama się chowa.

## Statystyki zawodników

Dane sezonu są w `src/data/statystyki.json` (źródło: 1lm.pzkosz.pl).
Po meczu Claude pobiera nowe liczby skryptem `narzedzia/statystyki-pzkosz.js` i podmienia ten plik.

## Interaktywne zdjęcie drużyny

Położenie zawodników na zdjęciu: `src/data/zdjecie-druzyny.ts` (numer koszulki → x, y w %).
Przy nowym zdjęciu drużyny trzeba te punkty przeliczyć.

## Obrazki podglądu linku (Facebook, WhatsApp)

`public/og/zawodnicy/<zawodnik>.jpg` i `public/og-image.jpg` generuje
`python narzedzia/og_zawodnicy.py` (Python + Pillow). Przy zmianie zdjęć lub składu — uruchomić ponownie.

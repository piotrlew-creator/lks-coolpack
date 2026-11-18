/*
  Wersje językowe strony: polska (domyślna, adresy bez prefiksu)
  i angielska (adresy zaczynają się od /en/).
  Wszystkie stałe teksty interfejsu są tutaj — w obu językach.
*/
import { u } from "../lib/url";

export const LANGS = ["pl", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** Klucze stron i ich adresy w obu językach. */
export const ROUTES = {
  start: { pl: "", en: "en/" },
  sklad: { pl: "sklad/", en: "en/roster/" },
  terminarz: { pl: "terminarz/", en: "en/fixtures/" },
  sztab: { pl: "sztab/", en: "en/staff/" },
  sponsorzy: { pl: "sponsorzy/", en: "en/sponsors/" },
  aktualnosci: { pl: "aktualnosci/", en: "en/news/" },
  kontakt: { pl: "kontakt/", en: "en/contact/" },
  prywatnosc: { pl: "prywatnosc/", en: "en/privacy/" },
} as const;
export type RouteKey = keyof typeof ROUTES;

export function route(key: RouteKey, lang: Lang): string {
  return u(ROUTES[key][lang]);
}

/** Adres strony zawodnika — slug jest ten sam w obu językach. */
/** Adres wpisu w Aktualnościach. */
export function newsUrl(slug: string, lang: Lang): string {
  return lang === "pl" ? u(`aktualnosci/${slug}/`) : u(`en/news/${slug}/`);
}

export function playerUrl(slug: string, lang: Lang): string {
  return lang === "pl" ? u(`sklad/${slug}/`) : u(`en/roster/${slug}/`);
}

export const NAV: RouteKey[] = ["start", "sklad", "terminarz", "sztab", "aktualnosci", "sponsorzy", "kontakt"];

export const ui = {
  pl: {
    "lang.name": "Polski",
    "lang.switch": "Wersja językowa",
    "skip": "Przejdź do treści",
    "nav.start": "Start",
    "nav.sklad": "Skład",
    "nav.terminarz": "Terminarz",
    "nav.sztab": "Sztab",
    "nav.sponsorzy": "Sponsorzy",
    "nav.aktualnosci": "Aktualności",
    "nav.kontakt": "Kontakt",
    "nav.prywatnosc": "Prywatność",
    "nav.menu": "Menu",
    "nav.open": "Otwórz menu",
    "nav.close": "Zamknij menu",

    "hero.sub":
      "ŁKS to klub z tradycją sięgającą 1908 roku. Nasi koszykarze grają w 1. lidze i walczą o awans do ekstraklasy.",
    "hero.cta.team": "Poznaj skład",
    "hero.cta.news": "Aktualności",
    "match.kicker": "Najbliższy mecz",
    "match.home": "U siebie",
    "match.away": "Na wyjeździe",
    "match.tickets": "Bilety",
    "match.preview": "Czytaj zapowiedź",
    "match.stream": "Transmisja",
    "match.none.title": "Terminarz i wyniki",
    "match.none.text": "Wszystkie mecze sezonu: daty, godziny i wyniki ze statystykami.",
    "match.none.cta": "Terminarz i wyniki",

    "sched.kicker": "Sezon",
    "sched.title": "Terminarz i wyniki",
    "sched.lead": "Wszystkie mecze ŁKS CoolPack Łódź w 1. lidze i tabela ligi. Kliknij wynik, żeby zobaczyć statystyki meczu na stronie PZKosz.",
    "sched.record": "Bilans",
    "sched.home": "U siebie",
    "sched.away": "Na wyjeździe",
    "sched.played": "Rozegrane",
    "sched.of": "z",
    "sched.next": "Najbliższy mecz",
    "sched.jump": "Przejdź do najbliższego meczu",
    "sched.win": "W",
    "sched.loss": "P",
    "sched.winLong": "Zwycięstwo",
    "sched.lossLong": "Porażka",
    "sched.tbd": "godz. do ustalenia",
    "sched.vsHome": "u siebie",
    "sched.vsAway": "na wyjeździe",
    "sched.stats": "Statystyki meczu na stronie PZKosz",
    "sched.source": "Źródło: Polski Związek Koszykówki (1lm.pzkosz.pl). Stan na",
    "sched.all": "Pełny terminarz",
    "sched.filter": "Filtruj mecze",
    "sched.f.home": "U siebie",
    "sched.f.away": "Na wyjeździe",
    "sched.f.played": "Rozegrane",
    "sched.f.upcoming": "Nadchodzące",
    "sched.f.clear": "Wyczyść",
    "sched.f.none": "Brak meczów dla wybranych filtrów.",
    "sched.toTable": "Tabela ligi",
    "table.title": "Tabela 1. ligi",
    "table.pos": "Miejsce",
    "table.team": "Drużyna",
    "table.gp": "M",
    "table.gpLong": "Mecze",
    "table.wl": "Z–P",
    "table.wlLong": "Zwycięstwa–porażki",
    "table.home": "Dom",
    "table.away": "Wyjazd",
    "table.diff": "+/−",
    "table.diffLong": "Różnica koszy",
    "table.pts": "Pkt",
    "table.ptsLong": "Punkty",
    "table.playoff": "Play-off (miejsca 1–8)",
    "table.releg": "Strefa spadkowa (15–16)",
    "table.source": "Źródło: Polski Związek Koszykówki (1lm.pzkosz.pl). Stan na",
    "last.kicker": "Ostatni mecz",
    "last.place": "miejsce w tabeli",
    "last.table": "Zobacz tabelę",
    "sched.game": "mecz",
    "sched.games2": "mecze",
    "sched.games5": "meczów",

    "team.kicker": "Sezon 2026/2027",
    "team.title": "Skład",
    "team.lead": "Poznaj zawodników ŁKS CoolPack Łódź.",
    "team.all": "Cały skład",
    "team.filter": "Pozycja",
    "team.filter.all": "Wszyscy",
    "team.captain": "Kapitan",
    "team.position": "Pozycja",
    "team.height": "Wzrost",
    "team.born": "Data urodzenia",
    "team.since": "W ŁKS od sezonu",
    "team.career": "Kariera w Polsce",
    "team.career.note": "Źródło: Polski Związek Koszykówki.",
    "team.nation": "Narodowość",
    "team.prevClub": "Poprzedni klub",
    "team.back": "Wróć do składu",
    "team.prev": "Poprzedni zawodnik",
    "team.next": "Następny zawodnik",
    "stats.title": "Sezon 2026/2027 w ŁKS",
    "stats.ppg": "Punkty na mecz",
    "stats.rpg": "Zbiórki na mecz",
    "stats.apg": "Asysty na mecz",
    "stats.eff": "Eval na mecz",
    "stats.games": "Rozegrane mecze",
    "stats.min": "Minuty na mecz",
    "stats.blk": "Bloki na mecz",
    "stats.stl": "Przechwyty na mecz",
    "stats.tov": "Straty na mecz",
    "stats.fg2": "Rzuty za 2",
    "stats.shotsHead": "Celne / oddane na mecz · skuteczność",
    "stats.fg3": "Rzuty za 3",
    "stats.ft": "Rzuty wolne",
    "stats.pm": "+/− na mecz",
    "stats.source": "Źródło: Polski Związek Koszykówki (1lm.pzkosz.pl). Stan na",
    "stats.none": "Statystyki pojawią się po pierwszym meczu zawodnika w sezonie.",
    "swipe.hint": "Przesuń palcem — kolejny zawodnik",

    "staff.kicker": "Sezon 2026/2027",
    "staff.title": "Sztab",
    "staff.lead": "Trenerzy i specjaliści, którzy na co dzień pracują z drużyną.",
    "staff.cta": "Poznaj sztab",

    "sponsors.kicker": "Partnerzy Klubu",
    "sponsors.title": "Sponsorzy",
    "sponsors.lead": "Dziękujemy firmom, które wspierają ŁKS CoolPack Łódź.",
    "sponsors.join.title": "Zostań sponsorem",
    "sponsors.join.text":
      "Chcesz, żeby Twoja firma wspierała ŁKS? Napisz albo zadzwoń — wspólnie ustalimy formę współpracy korzystną dla obu stron.",
    "sponsors.join.cta": "Skontaktuj się",
    "sponsors.strip": "Wspierają nas",

    "news.kicker": "Bądź na bieżąco",
    "news.title": "Aktualności",
    "news.lead":
      "Zapowiedzi meczów, wyniki i komunikaty Klubu. Zdjęcia i relacje na żywo publikujemy na Facebooku i Instagramie.",
    "news.fb.title": "Posty z Facebooka",
    "news.fb.desc": "Wyniki, zapowiedzi i relacje z meczów ŁKS CoolPack.",
    "news.fb.btn": "Pokaż posty",
    "news.fb.note":
      "Po kliknięciu wczytamy treści z serwerów Meta, które mogą zapisywać pliki cookies. Bez kliknięcia strona nie łączy się z Facebookiem.",
    "news.fb.open": "Otwórz profil na Facebooku",
    "news.ig.open": "Otwórz profil na Instagramie",
    "news.follow": "Obserwuj nas",
    "news.latest": "Najnowsze wpisy",
    "news.all": "Wszystkie aktualności",
    "news.more": "Czytaj dalej",
    "news.back": "Wróć do aktualności",
    "news.social": "Facebook i Instagram",
    "news.match": "Mecz",
    "news.fb.card": "Wyniki, zapowiedzi, zdjęcia i relacje z meczów.",
    "news.ig.card": "Zdjęcia, filmy i kulisy życia drużyny.",

    "academy.kicker": "Od grup naborowych do 1. ligi",
    "academy.title": "Szkolimy następców",
    "academy.text":
      "Stowarzyszenie ŁKS Koszykówka Męska szkoli chłopców — od grup naborowych po zespół w 2. lidze. Chcemy, żeby nasi wychowankowie grali kiedyś w ŁKS CoolPack.",
    "academy.cta": "ŁKS KM Junior",

    "contact.kicker": "ŁKS CoolPack Łódź",
    "contact.title": "Kontakt",
    "contact.lead": "Zadzwoń albo napisz — odpowiemy tak szybko, jak to możliwe.",
    "contact.office": "Biuro Klubu",
    "contact.sponsoring": "Sponsoring i współpraca",
    "contact.media": "Media i akredytacje",
    "contact.tickets": "Bilety",
    "contact.arena": "Hala meczowa",
    "contact.map": "Pokaż na mapie",
    "contact.tbd": "Uzupełnimy wkrótce",
    "contact.tel": "tel.:",
    "contact.mail": "e-mail:",

    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.academy": "ŁKS KM Junior",
    "footer.league": "Terminarz i wyniki",

    "privacy.title": "Prywatność",
    "404.title": "Nie ma takiej strony",
    "404.text": "Strona mogła zostać przeniesiona albo adres zawiera błąd.",
    "404.cta": "Wróć na start",
  },

  en: {
    "lang.name": "English",
    "lang.switch": "Language",
    "skip": "Skip to content",
    "nav.start": "Home",
    "nav.sklad": "Roster",
    "nav.terminarz": "Fixtures",
    "nav.sztab": "Staff",
    "nav.sponsorzy": "Sponsors",
    "nav.aktualnosci": "News",
    "nav.kontakt": "Contact",
    "nav.prywatnosc": "Privacy",
    "nav.menu": "Menu",
    "nav.open": "Open menu",
    "nav.close": "Close menu",

    "hero.sub":
      "ŁKS is a club with a history going back to 1908. Our basketball team plays in the Polish 1st League and is pushing for promotion to the top flight.",
    "hero.cta.team": "See the roster",
    "hero.cta.news": "News",
    "match.kicker": "Next game",
    "match.home": "Home",
    "match.away": "Away",
    "match.tickets": "Tickets",
    "match.preview": "Read the preview",
    "match.stream": "Live stream",
    "match.none.title": "Fixtures and results",
    "match.none.text": "Every game of the season: dates, tip-off times, results and box scores.",
    "match.none.cta": "Fixtures and results",

    "sched.kicker": "Season",
    "sched.title": "Fixtures and results",
    "sched.lead": "All ŁKS CoolPack Łódź games in the Polish 1st League, plus the league table. Tap a score to see the box score on the PZKosz website.",
    "sched.record": "Record",
    "sched.home": "Home",
    "sched.away": "Away",
    "sched.played": "Played",
    "sched.of": "of",
    "sched.next": "Next game",
    "sched.jump": "Jump to the next game",
    "sched.win": "W",
    "sched.loss": "L",
    "sched.winLong": "Win",
    "sched.lossLong": "Loss",
    "sched.tbd": "time TBC",
    "sched.vsHome": "home",
    "sched.vsAway": "away",
    "sched.stats": "Box score on the PZKosz website",
    "sched.source": "Source: Polish Basketball Federation (1lm.pzkosz.pl). Updated",
    "sched.all": "Full schedule",
    "sched.filter": "Filter games",
    "sched.f.home": "Home",
    "sched.f.away": "Away",
    "sched.f.played": "Played",
    "sched.f.upcoming": "Upcoming",
    "sched.f.clear": "Clear",
    "sched.f.none": "No games match the selected filters.",
    "sched.toTable": "League table",
    "table.title": "1st League table",
    "table.pos": "Position",
    "table.team": "Team",
    "table.gp": "GP",
    "table.gpLong": "Games played",
    "table.wl": "W–L",
    "table.wlLong": "Wins–losses",
    "table.home": "Home",
    "table.away": "Away",
    "table.diff": "+/−",
    "table.diffLong": "Point difference",
    "table.pts": "Pts",
    "table.ptsLong": "Points",
    "table.playoff": "Play-offs (1st–8th)",
    "table.releg": "Relegation zone (15th–16th)",
    "table.source": "Source: Polish Basketball Federation (1lm.pzkosz.pl). Updated",
    "last.kicker": "Last game",
    "last.place": "in the table",
    "last.table": "View table",
    "sched.game": "game",
    "sched.games2": "games",
    "sched.games5": "games",

    "team.kicker": "Season 2026/2027",
    "team.title": "Roster",
    "team.lead": "Meet the ŁKS CoolPack Łódź players.",
    "team.all": "Full roster",
    "team.filter": "Position",
    "team.filter.all": "All",
    "team.captain": "Captain",
    "team.position": "Position",
    "team.height": "Height",
    "team.born": "Date of birth",
    "team.since": "With ŁKS since",
    "team.career": "Career in Poland",
    "team.career.note": "Source: Polish Basketball Federation.",
    "team.nation": "Nationality",
    "team.prevClub": "Previous club",
    "team.back": "Back to roster",
    "team.prev": "Previous player",
    "team.next": "Next player",
    "stats.title": "Season 2026/2027 at ŁKS",
    "stats.ppg": "Points per game",
    "stats.rpg": "Rebounds per game",
    "stats.apg": "Assists per game",
    "stats.eff": "Efficiency per game",
    "stats.games": "Games played",
    "stats.min": "Minutes per game",
    "stats.blk": "Blocks per game",
    "stats.stl": "Steals per game",
    "stats.tov": "Turnovers per game",
    "stats.fg2": "2-pointers",
    "stats.shotsHead": "Made / attempted per game · percentage",
    "stats.fg3": "3-pointers",
    "stats.ft": "Free throws",
    "stats.pm": "+/− per game",
    "stats.source": "Source: Polish Basketball Federation (1lm.pzkosz.pl). Updated",
    "stats.none": "Stats will appear after the player's first game of the season.",
    "swipe.hint": "Swipe for the next player",

    "staff.kicker": "Season 2026/2027",
    "staff.title": "Staff",
    "staff.lead": "The coaches and specialists who work with the team every day.",
    "staff.cta": "Meet the staff",

    "sponsors.kicker": "Club partners",
    "sponsors.title": "Sponsors",
    "sponsors.lead": "Thank you to the companies that support ŁKS CoolPack Łódź.",
    "sponsors.join.title": "Become a sponsor",
    "sponsors.join.text":
      "Would your company like to support ŁKS? Email or call us and we'll work out a partnership that suits both sides.",
    "sponsors.join.cta": "Get in touch",
    "sponsors.strip": "Our sponsors",

    "news.kicker": "Stay up to date",
    "news.title": "News",
    "news.lead":
      "Game previews, results and club news. For photos and live updates, follow us on Facebook and Instagram.",
    "news.fb.title": "Facebook posts",
    "news.fb.desc": "Results, previews and match reports from ŁKS CoolPack.",
    "news.fb.btn": "Show posts",
    "news.fb.note":
      "Clicking loads content from Meta's servers, which may set cookies. Until you click, this page doesn't connect to Facebook.",
    "news.fb.open": "Go to our Facebook page",
    "news.ig.open": "Go to our Instagram",
    "news.follow": "Follow us",
    "news.latest": "Latest news",
    "news.all": "All news",
    "news.more": "Read more",
    "news.back": "Back to news",
    "news.social": "Facebook and Instagram",
    "news.match": "Game",
    "news.fb.card": "Results, previews, photos and match reports.",
    "news.ig.card": "Photos, videos and behind the scenes.",

    "academy.kicker": "From beginners to the 1st League",
    "academy.title": "Developing young players",
    "academy.text":
      "The ŁKS Koszykówka Męska association coaches boys from beginner groups up to its 2nd League team. We want our young players to play for ŁKS CoolPack one day.",
    "academy.cta": "ŁKS KM Junior",

    "contact.kicker": "ŁKS CoolPack Łódź",
    "contact.title": "Contact",
    "contact.lead": "Call or email us and we'll get back to you as soon as we can.",
    "contact.office": "Club office",
    "contact.sponsoring": "Sponsorship and partnerships",
    "contact.media": "Media and accreditation",
    "contact.tickets": "Tickets",
    "contact.arena": "Home arena",
    "contact.map": "Show on map",
    "contact.tbd": "Coming soon",
    "contact.tel": "phone:",
    "contact.mail": "email:",

    "footer.rights": "All rights reserved.",
    "footer.academy": "ŁKS KM Junior",
    "footer.league": "Fixtures and results",

    "privacy.title": "Privacy",
    "404.title": "Page not found",
    "404.text": "It may have moved, or the address may be wrong.",
    "404.cta": "Back to home",
  },
} as const;

export type UiKey = keyof (typeof ui)["pl"];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui.pl[key];
}

/** Pozycje zawodników w obu językach. */
export const POZYCJE_EN: Record<string, string> = {
  "Rozgrywający": "Point guard",
  "Rzucający": "Shooting guard",
  "Niski skrzydłowy": "Small forward",
  "Silny skrzydłowy": "Power forward",
  "Środkowy": "Center",
};

export const POZIOMY_EN: Record<string, string> = {
  "Sponsor tytularny": "Title sponsor",
  "Sponsor strategiczny": "Strategic sponsor",
  "Sponsor": "Sponsor",
  "Partner": "Partner",
  "Partner medialny": "Media partner",
};

export function pozycja(p: string, lang: Lang): string {
  return lang === "en" ? POZYCJE_EN[p] ?? p : p;
}
/** Kilka pozycji: "Rozgrywający / Rzucający". */
export function pozycje(list: readonly string[], lang: Lang): string {
  return list.map((p) => pozycja(p, lang)).join(" / ");
}

const LIGA_NAZWY: Record<string, { pl: string; en: string }> = {
  EKS: { pl: "Ekstraklasa", en: "Top division" },
  "1L": { pl: "1. liga", en: "1st League" },
  "2L": { pl: "2. liga", en: "2nd League" },
  "3L": { pl: "3. liga", en: "3rd League" },
};
export function liga(code: string, lang: Lang): string {
  return LIGA_NAZWY[code]?.[lang] ?? code;
}

/** Data w formacie zależnym od języka: 28.01.1997 / 28 Jan 1997. */
export function dataUr(d: Date | undefined, lang: Lang): string | undefined {
  if (!d) return undefined;
  return lang === "pl"
    ? new Intl.DateTimeFormat("pl-PL", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(d)
    : new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(d);
}
export function poziom(p: string, lang: Lang): string {
  return lang === "en" ? POZIOMY_EN[p] ?? p : p;
}

/** Narodowość z kodu kraju (PL, US, LT…) w wybranym języku. */
export function kraj(code: string | undefined, lang: Lang): string | undefined {
  if (!code) return undefined;
  if (code.length !== 2) return code;
  try {
    return new Intl.DisplayNames([lang], { type: "region" }).of(code.toUpperCase());
  } catch {
    return code;
  }
}

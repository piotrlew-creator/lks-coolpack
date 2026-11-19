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
  mlodziez: { pl: "grupy-mlodziezowe/", en: "en/youth/" },
  historia: { pl: "historia/", en: "en/history/" },
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

export const NAV: RouteKey[] = ["start", "aktualnosci", "sklad", "sztab", "terminarz", "mlodziez", "historia", "sponsorzy", "kontakt"];

export const ui = {
  pl: {
    "lang.switch": "Wersja językowa",
    "skip": "Przejdź do treści",
    "nav.start": "Start",
    "nav.sklad": "Skład",
    "nav.terminarz": "Terminarz",
    "nav.sztab": "Sztab",
    "nav.mlodziez": "Grupy młodzieżowe",
    "nav.historia": "Historia",
    "nav.sponsorzy": "Sponsorzy",
    "nav.aktualnosci": "Aktualności",
    "nav.kontakt": "Kontakt",
    "nav.prywatnosc": "Prywatność",
    "nav.menu": "Menu",
    "nav.open": "Otwórz menu",
    "nav.close": "Zamknij menu",

    "hero.sub":
      "ŁKS to klub z tradycją sięgającą 1908 roku. Nasi koszykarze grają w 1. lidze i walczą o awans do ekstraklasy.",
    "match.kicker": "Najbliższy mecz",
    "match.home": "U siebie",
    "match.away": "Na wyjeździe",
    "match.tickets": "Bilety",
    "match.preview": "Czytaj zapowiedź",
    "match.stream": "Oglądaj na Emocje.TV",
    "match.calendar": "Dodaj do kalendarza",
    "match.streamNote": "Wszystkie mecze 1. ligi na żywo w Emocje.TV (w ramach subskrypcji).",
    "sched.tvTitle": "Transmisje na żywo",
    "sched.tvText": "Emocje.TV transmituje na żywo wszystkie mecze PZKosz 1 Ligi Mężczyzn, w tym mecze ŁKS CoolPack Łódź. Wystarczy wykupić subskrypcję.",
    "sched.tvCta": "Kalendarz transmisji w Emocje.TV",
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
    "last.top": "Najlepsi w meczu",
    "last.pts": "pkt",
    "last.reb": "zb.",
    "last.ast": "as.",
    "last.place": "miejsce w tabeli",
    "last.table": "Zobacz tabelę",
    "sched.game": "mecz",
    "sched.games2": "mecze",
    "sched.games5": "meczów",

    "team.kicker": "Sezon 2026/2027",
    "team.title": "Skład",
    "team.meta": "Skład ŁKS CoolPack Łódź na sezon 2026/2027: zawodnicy, pozycje, numery i statystyki z 1. ligi koszykówki mężczyzn.",
    "sponsors.meta": "Sponsorzy i partnerzy ŁKS CoolPack Łódź: CoolPack, Urząd Miasta Łodzi i firmy wspierające drużynę. Zobacz, jak zostać sponsorem.",
    "contact.meta": "Kontakt z ŁKS CoolPack Łódź: biuro klubu przy al. Unii Lubelskiej 2 w Łodzi, telefon 733 34 1908, e-mail biuro@lkskm.pl.",
    "youth.meta": "Grupy młodzieżowe ŁKS Koszykówka Męska: drużyny chłopców od grup naborowych po 2. ligę. Zapisy u koordynatorów i na lkskmjunior.pl.",
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
    "swipe.hint": "Przesuń palcem do kolejnego zawodnika",

    "history.kicker": "ŁKS od 1908 roku",
    "history.title": "Historia",
    "history.meta": "Historia męskiej koszykówki w ŁKS Łódź od 1929 roku: mistrzostwo Polski w 1953, brąz w 1978, awans do ekstraklasy w 2011 i powrót do 1. ligi.",
    "history.success": "Największe sukcesy",
    "history.timeline": "Kalendarium",
    "history.facts": "Ciekawostki",
    "history.source": "Źródło:",
    "youth.kicker": "ŁKS Koszykówka Męska",
    "youth.title": "Grupy młodzieżowe",
    "youth.lead": "Stowarzyszenie ŁKS Koszykówka Męska prowadzi drużyny chłopców od grup naborowych po 2. ligę. To pełna piramida szkoleniowa — chcemy, żeby nasi wychowankowie grali kiedyś w ŁKS CoolPack.",
    "youth.site": "Przejdź na lkskmjunior.pl",
    "youth.joinKicker": "Dołącz do klubu",
    "youth.joinTitle": "Jak zacząć?",
    "youth.joinBeg": "Grupy naborowe: zapisy przez cały sezon",
    "youth.joinOld": "Drużyny U11–U19: najpierw rozmowa z koordynatorem",
    "youth.coordBeg": "Koordynator grup naborowych",
    "youth.coordOrg": "Koordynator organizacyjny",
    "youth.join": "Zapisy krok po kroku",
    "staff.kicker": "Za kulisami",
    "staff.title": "Sztab",
    "staff.lead": "Trenerzy i specjaliści, którzy na co dzień pracują z drużyną.",
    "staff.cta": "Poznaj sztab",
    "staff.meta": "Sztab szkoleniowy ŁKS CoolPack Łódź w sezonie 2026/2027: trener główny, trener przygotowania motorycznego, fizjoterapeuci i kierownik drużyny.",
    "privacy.meta": "Prywatność na stronie ŁKS CoolPack Łódź: bez plików cookies, bez formularzy i bez zbierania danych osobowych. Zasady linków do serwisów zewnętrznych.",

    "sponsors.kicker": "Partnerzy klubu",
    "sponsors.title": "Sponsorzy",
    "sponsors.lead": "Dziękujemy firmom, które wspierają ŁKS CoolPack Łódź.",
    "sponsors.join.kicker": "Dla firm",
    "sponsors.join.title": "Zostań sponsorem",
    "sponsors.join.text":
      "Chcesz, żeby Twoja firma wspierała ŁKS? Napisz albo zadzwoń — wspólnie ustalimy formę współpracy korzystną dla obu stron.",
    "sponsors.join.cta": "Skontaktuj się",
    "sponsors.strip": "Wspierają nas",
    "sponsors.ours": "Nasi sponsorzy i partnerzy",
    "venue.kicker": "Gdzie gramy u siebie",
    "venue.map": "Jak dojechać",
    "venue.fixtures": "Terminarz i bilety",

    "news.kicker": "Bądź na bieżąco",
    "news.title": "Aktualności",
    "news.lead":
      "Zapowiedzi meczów, wyniki i komunikaty klubu. Zdjęcia i relacje na żywo publikujemy na Facebooku i Instagramie.",
    "news.fb.title": "Posty z Facebooka",
    "news.fb.desc": "Wyniki, zapowiedzi i relacje z meczów ŁKS CoolPack.",
    "news.fb.btn": "Pokaż posty",
    "news.fb.note":
      "Po kliknięciu wczytamy treści z serwerów Meta, które mogą zapisywać pliki cookies. Bez kliknięcia strona nie łączy się z Facebookiem.",
    "news.fb.open": "Otwórz profil na Facebooku",
    "news.ig.open": "Otwórz profil na Instagramie",
    "news.follow": "Obserwuj nas",
    "news.latest": "Najnowsze wpisy",
    "news.more": "Czytaj dalej",
    "news.back": "Wróć do aktualności",
    "news.social": "Facebook i Instagram",
    "news.notices": "Ogłoszenia",
    "league.label": "Rozgrywki",
    "news.table": "Tabela 1. ligi",
    "news.match": "Mecz",
    "news.fb.card": "Wyniki, zapowiedzi, zdjęcia i relacje z meczów.",
    "news.ig.card": "Zdjęcia, filmy i kulisy życia drużyny.",


    "contact.kicker": "ŁKS CoolPack Łódź",
    "contact.title": "Kontakt",
    "contact.lead": "Zadzwoń albo napisz — odpowiemy tak szybko, jak to możliwe.",
    "contact.office": "Biuro klubu",
    "contact.sponsoring": "Sponsoring i współpraca",
    "contact.media": "Media i akredytacje",
    "contact.tickets": "Bilety",
    "contact.arena": "Hala meczowa",
    "contact.map": "Pokaż na mapie",
    "contact.tbd": "Uzupełnimy wkrótce",
    "contact.tel": "tel.:",
    "contact.mail": "e-mail:",

    "footer.rights": "Wszelkie prawa zastrzeżone.",

    "privacy.title": "Prywatność",
    "404.title": "Nie ma takiej strony",
    "404.text": "Strona mogła zostać przeniesiona albo adres zawiera błąd.",
    "404.cta": "Wróć na start",
  },

  en: {
    "lang.switch": "Language",
    "skip": "Skip to content",
    "nav.start": "Home",
    "nav.sklad": "Roster",
    "nav.terminarz": "Fixtures",
    "nav.sztab": "Staff",
    "nav.mlodziez": "Youth teams",
    "nav.historia": "History",
    "nav.sponsorzy": "Sponsors",
    "nav.aktualnosci": "News",
    "nav.kontakt": "Contact",
    "nav.prywatnosc": "Privacy",
    "nav.menu": "Menu",
    "nav.open": "Open menu",
    "nav.close": "Close menu",

    "hero.sub":
      "ŁKS is a club with a history going back to 1908. Our basketball team plays in the Polish 1st League and is pushing for promotion to the top flight.",
    "match.kicker": "Next game",
    "match.home": "Home",
    "match.away": "Away",
    "match.tickets": "Tickets",
    "match.preview": "Read the preview",
    "match.stream": "Watch on Emocje.TV",
    "match.calendar": "Add to calendar",
    "match.streamNote": "Every 1st League game is streamed live on Emocje.TV (subscription required).",
    "sched.tvTitle": "Live streams",
    "sched.tvText": "Every PZKosz 1st League game, including ŁKS CoolPack Łódź, is streamed live on Emocje.TV — subscription required.",
    "sched.tvCta": "Emocje.TV stream schedule",
    "match.none.title": "Fixtures and results",
    "match.none.text": "Every game of the season: dates, tip-off times, results and box scores.",
    "match.none.cta": "Fixtures and results",

    "sched.kicker": "Season",
    "sched.title": "Fixtures and results",
    "sched.lead": "All ŁKS CoolPack Łódź games in the Polish 1st League, plus the league table. Click a score to see the box score on the PZKosz website.",
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
    "last.top": "Top performers",
    "last.pts": "pts",
    "last.reb": "reb",
    "last.ast": "ast",
    "last.place": "in the table",
    "last.table": "View table",
    "sched.game": "game",
    "sched.games2": "games",
    "sched.games5": "games",

    "team.kicker": "Season 2026/2027",
    "team.title": "Roster",
    "team.meta": "ŁKS CoolPack Łódź roster for the 2026/27 season: players, positions, shirt numbers and stats from the Polish 1st League.",
    "sponsors.meta": "ŁKS CoolPack Łódź sponsors and partners: CoolPack, Łódź City Hall and the companies backing the team. Find out how to join them.",
    "contact.meta": "Contact ŁKS CoolPack Łódź: club office at al. Unii Lubelskiej 2, Łódź, phone +48 733 34 1908, email biuro@lkskm.pl.",
    "youth.meta": "ŁKS Koszykówka Męska youth teams: boys’ teams from beginner groups up to the 2nd League. Sign up via our coordinators or lkskmjunior.pl.",
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

    "history.kicker": "ŁKS since 1908",
    "history.title": "History",
    "history.meta": "The history of ŁKS Łódź men’s basketball since 1929: Polish champions in 1953, bronze in 1978, top-flight promotion in 2011 and a return to the 1st League.",
    "history.success": "Greatest achievements",
    "history.timeline": "Timeline",
    "history.facts": "Did you know?",
    "history.source": "Source:",
    "youth.kicker": "ŁKS Koszykówka Męska",
    "youth.title": "Youth teams",
    "youth.lead": "The ŁKS Koszykówka Męska association runs boys’ teams from beginner groups up to the 2nd League. It is a complete development pathway — we want our players to wear the ŁKS CoolPack shirt one day.",
    "youth.site": "Go to lkskmjunior.pl",
    "youth.joinKicker": "Join the club",
    "youth.joinTitle": "How to join",
    "youth.joinBeg": "Beginner groups: open to new players all season",
    "youth.joinOld": "U11–U19 teams: start by talking to the coordinator",
    "youth.coordBeg": "Beginner groups coordinator",
    "youth.coordOrg": "Operations coordinator",
    "youth.join": "How to sign up",
    "staff.kicker": "Behind the scenes",
    "staff.title": "Staff",
    "staff.lead": "The coaches and specialists who work with the team every day.",
    "staff.cta": "Meet the staff",
    "staff.meta": "ŁKS CoolPack Łódź coaching staff for the 2026/27 season: head coach, strength and conditioning coach, physiotherapists and team manager.",
    "privacy.meta": "Privacy on the ŁKS CoolPack Łódź website: no cookies, no forms and no personal data collected. How links to external services work.",

    "sponsors.kicker": "Club partners",
    "sponsors.title": "Sponsors",
    "sponsors.lead": "Thank you to the companies that support ŁKS CoolPack Łódź.",
    "sponsors.join.kicker": "For businesses",
    "sponsors.join.title": "Become a sponsor",
    "sponsors.join.text":
      "Would your company like to support ŁKS? Email or call us and we'll work out a partnership that suits both sides.",
    "sponsors.join.cta": "Get in touch",
    "sponsors.strip": "Our sponsors",
    "sponsors.ours": "Our sponsors and partners",
    "venue.kicker": "Our home arena",
    "venue.map": "Directions",
    "venue.fixtures": "Fixtures and tickets",

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
    "news.more": "Read more",
    "news.back": "Back to news",
    "news.social": "Facebook and Instagram",
    "news.notices": "Announcements",
    "league.label": "Competition",
    "news.table": "1st League table",
    "news.match": "Game",
    "news.fb.card": "Results, previews, photos and match reports.",
    "news.ig.card": "Photos, videos and a look behind the scenes.",


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
  "Środkowy": "Centre",
};

export const POZIOMY_EN: Record<string, string> = {
  "Sponsor tytularny": "Title sponsor",
  "Sponsor strategiczny": "Strategic sponsor",
  "Sponsor": "Sponsor",
  "Partner": "Partner",
  "Partner techniczny": "Technical partner",
  "Partner medialny": "Media partner",
};

/** Nagłówek grupy sponsorów: liczba mnoga, gdy w grupie jest więcej niż jedna firma. */
const POZIOMY_MNOGA: Record<string, { pl: string; en: string }> = {
  "Sponsor": { pl: "Sponsorzy", en: "Sponsors" },
  "Partner": { pl: "Partnerzy", en: "Partners" },
  "Partner techniczny": { pl: "Partnerzy techniczni", en: "Technical partners" },
  "Partner medialny": { pl: "Partnerzy medialni", en: "Media partners" },
};
export function poziomGrupa(p: string, ile: number, lang: Lang): string {
  const m = ile > 1 ? POZIOMY_MNOGA[p] : undefined;
  return m ? m[lang] : poziom(p, lang);
}

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

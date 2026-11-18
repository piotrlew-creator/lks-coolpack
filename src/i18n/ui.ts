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
  sklad: { pl: "sklad/", en: "en/team/" },
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
export function playerUrl(slug: string, lang: Lang): string {
  return lang === "pl" ? u(`sklad/${slug}/`) : u(`en/team/${slug}/`);
}

export const NAV: RouteKey[] = ["start", "sklad", "sztab", "aktualnosci", "sponsorzy", "kontakt"];

export const ui = {
  pl: {
    "lang.name": "Polski",
    "lang.switch": "Wersja językowa",
    "skip": "Przejdź do treści",
    "nav.start": "Start",
    "nav.sklad": "Skład",
    "nav.sztab": "Sztab",
    "nav.sponsorzy": "Sponsorzy",
    "nav.aktualnosci": "Aktualności",
    "nav.kontakt": "Kontakt",
    "nav.prywatnosc": "Prywatność",
    "nav.menu": "Menu",
    "nav.open": "Otwórz menu",
    "nav.close": "Zamknij menu",
    "theme.toggle": "Przełącz jasny / ciemny motyw",
    "theme.light": "Jasny motyw",
    "theme.dark": "Ciemny motyw",

    "hero.kicker": "1. liga koszykówki mężczyzn",
    "hero.title1": "Łódź",
    "hero.title2": "gra o więcej",
    "hero.sub":
      "ŁKS CoolPack Łódź — koszykarze z tradycją od 1908 roku. Walczymy o awans do ekstraklasy i gramy dla kibiców, którzy są z nami na dobre i na złe.",
    "hero.cta.team": "Poznaj skład",
    "hero.cta.news": "Aktualności",
    "hero.scroll": "Przewiń w dół",

    "match.kicker": "Najbliższy mecz",
    "match.home": "U siebie",
    "match.away": "Na wyjeździe",
    "match.tickets": "Bilety",
    "match.stream": "Transmisja",
    "match.none.title": "Terminarz i wyniki",
    "match.none.text":
      "Terminarz, wyniki, tabelę i statystyki drużyny znajdziesz na oficjalnej stronie 1. Ligi Mężczyzn.",
    "match.none.cta": "Terminarz na stronie ligi",

    "team.kicker": "Sezon 2026/2027",
    "team.title": "Skład",
    "team.lead": "Poznaj zawodników, którzy bronią barw ŁKS CoolPack w 1. lidze.",
    "team.all": "Cały skład",
    "team.filter": "Pozycja",
    "team.filter.all": "Wszyscy",
    "team.captain": "Kapitan",
    "team.position": "Pozycja",
    "team.height": "Wzrost",
    "team.born": "Rocznik",
    "team.nation": "Narodowość",
    "team.prevClub": "Poprzedni klub",
    "team.number": "Numer",
    "team.back": "Wróć do składu",
    "team.prev": "Poprzedni zawodnik",
    "team.next": "Następny zawodnik",
    "team.draft": "Profil w przygotowaniu — zdjęcie i opis wkrótce.",
    "team.see": "Zobacz profil",

    "staff.kicker": "Ludzie za drużyną",
    "staff.title": "Sztab",
    "staff.lead": "Trenerzy i specjaliści, którzy każdego dnia pracują na wynik drużyny.",
    "staff.cta": "Poznaj sztab",

    "sponsors.kicker": "Razem gramy o więcej",
    "sponsors.title": "Sponsorzy",
    "sponsors.lead":
      "Dziękujemy firmom, które wspierają ŁKS CoolPack Łódź. Dzięki nim możemy walczyć o najwyższe cele.",
    "sponsors.join.title": "Dołącz do nas",
    "sponsors.join.text":
      "Jeśli Twoja firma jest zainteresowana współpracą z naszym Klubem, zapraszamy do kontaktu. Napisz lub zadzwoń — porozmawiamy o Twoich oczekiwaniach i razem ustalimy najkorzystniejszą dla obydwu stron formę współpracy.",
    "sponsors.join.cta": "Kontakt dla firm",
    "sponsors.strip": "Wspierają nas",

    "news.kicker": "Bądź na bieżąco",
    "news.title": "Aktualności",
    "news.lead":
      "Zapowiedzi meczów, wyniki, zdjęcia i relacje publikujemy na Facebooku i Instagramie.",
    "news.fb.title": "Posty z Facebooka",
    "news.fb.desc": "Wyniki, zapowiedzi meczów i relacje drużyny ŁKS CoolPack.",
    "news.fb.btn": "Pokaż posty",
    "news.fb.note":
      "Po kliknięciu wczytamy treści z serwerów Meta, które mogą zapisywać pliki cookies. Bez kliknięcia strona nie łączy się z Facebookiem.",
    "news.fb.open": "Otwórz profil na Facebooku",
    "news.ig.open": "Otwórz profil na Instagramie",
    "news.ig.soon": "Instagram — adres wkrótce",
    "news.follow": "Obserwuj nas",

    "academy.kicker": "Od grup naborowych do 1. ligi",
    "academy.title": "Wychowujemy następców",
    "academy.text":
      "Stowarzyszenie ŁKS Koszykówka Męska szkoli chłopców od grup naborowych po zespół w 2. lidze. Wierzymy, że nasi wychowankowie zagrają kiedyś w barwach ŁKS CoolPack.",
    "academy.cta": "Akademia ŁKS",

    "contact.kicker": "Jesteśmy do dyspozycji",
    "contact.title": "Kontakt",
    "contact.lead": "Zadzwoń lub napisz — odpowiemy najszybciej, jak to możliwe.",
    "contact.office": "Biuro klubu",
    "contact.sponsoring": "Sponsoring i współpraca",
    "contact.media": "Media i akredytacje",
    "contact.tickets": "Bilety",
    "contact.arena": "Hala meczowa",
    "contact.map": "Pokaż na mapie",
    "contact.tbd": "Dane wkrótce",
    "contact.tel": "tel.:",
    "contact.mail": "e-mail:",

    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.academy": "Akademia ŁKS Koszykówka Męska",
    "footer.league": "Terminarz i wyniki",

    "privacy.title": "Prywatność",
    "404.title": "Faul! Tej strony nie ma",
    "404.text": "Strona mogła zostać przeniesiona albo adres jest błędny.",
    "404.cta": "Wróć na start",
  },

  en: {
    "lang.name": "English",
    "lang.switch": "Language",
    "skip": "Skip to content",
    "nav.start": "Home",
    "nav.sklad": "Team",
    "nav.sztab": "Staff",
    "nav.sponsorzy": "Sponsors",
    "nav.aktualnosci": "News",
    "nav.kontakt": "Contact",
    "nav.prywatnosc": "Privacy",
    "nav.menu": "Menu",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "theme.toggle": "Switch light / dark theme",
    "theme.light": "Light theme",
    "theme.dark": "Dark theme",

    "hero.kicker": "Polish men's basketball 1st league",
    "hero.title1": "Łódź",
    "hero.title2": "plays for more",
    "hero.sub":
      "ŁKS CoolPack Łódź — a basketball club with a tradition dating back to 1908. We are fighting for promotion to the top division and we play for the fans who stand by us through thick and thin.",
    "hero.cta.team": "Meet the team",
    "hero.cta.news": "News",
    "hero.scroll": "Scroll down",

    "match.kicker": "Next game",
    "match.home": "Home",
    "match.away": "Away",
    "match.tickets": "Tickets",
    "match.stream": "Live stream",
    "match.none.title": "Schedule and results",
    "match.none.text":
      "The team's schedule, results, standings and statistics are available on the official website of the 1st League.",
    "match.none.cta": "Schedule on the league website",

    "team.kicker": "Season 2026/2027",
    "team.title": "Team",
    "team.lead": "Meet the players who wear the ŁKS CoolPack colours in the 1st League.",
    "team.all": "Full roster",
    "team.filter": "Position",
    "team.filter.all": "All",
    "team.captain": "Captain",
    "team.position": "Position",
    "team.height": "Height",
    "team.born": "Born",
    "team.nation": "Nationality",
    "team.prevClub": "Previous club",
    "team.number": "Number",
    "team.back": "Back to the team",
    "team.prev": "Previous player",
    "team.next": "Next player",
    "team.draft": "Profile coming soon — photo and bio on the way.",
    "team.see": "View profile",

    "staff.kicker": "The people behind the team",
    "staff.title": "Staff",
    "staff.lead": "The coaches and specialists who work for the team's success every day.",
    "staff.cta": "Meet the staff",

    "sponsors.kicker": "Together we play for more",
    "sponsors.title": "Sponsors",
    "sponsors.lead":
      "We thank the companies that support ŁKS CoolPack Łódź. They make it possible for us to aim high.",
    "sponsors.join.title": "Join us",
    "sponsors.join.text":
      "If your company is interested in working with our Club, get in touch. Write or call us — we will talk about your expectations and together find the form of cooperation that works best for both sides.",
    "sponsors.join.cta": "Contact for companies",
    "sponsors.strip": "Supported by",

    "news.kicker": "Stay up to date",
    "news.title": "News",
    "news.lead":
      "Game previews, results, photos and match reports are published on our Facebook and Instagram.",
    "news.fb.title": "Facebook posts",
    "news.fb.desc": "Results, game previews and reports from ŁKS CoolPack.",
    "news.fb.btn": "Show posts",
    "news.fb.note":
      "After you click, content will be loaded from Meta's servers, which may set cookies. Until then, this page does not connect to Facebook.",
    "news.fb.open": "Open our Facebook page",
    "news.ig.open": "Open our Instagram profile",
    "news.ig.soon": "Instagram — link coming soon",
    "news.follow": "Follow us",

    "academy.kicker": "From beginners to the 1st League",
    "academy.title": "Raising the next generation",
    "academy.text":
      "The ŁKS Koszykówka Męska association trains boys from beginner groups up to a team in the 2nd League. We believe our youth players will one day wear the ŁKS CoolPack jersey.",
    "academy.cta": "ŁKS Academy",

    "contact.kicker": "Get in touch",
    "contact.title": "Contact",
    "contact.lead": "Call or write to us — we will reply as soon as possible.",
    "contact.office": "Club office",
    "contact.sponsoring": "Sponsorship and partnerships",
    "contact.media": "Media and accreditation",
    "contact.tickets": "Tickets",
    "contact.arena": "Home arena",
    "contact.map": "Show on map",
    "contact.tbd": "Details coming soon",
    "contact.tel": "phone:",
    "contact.mail": "email:",

    "footer.rights": "All rights reserved.",
    "footer.academy": "ŁKS Koszykówka Męska Academy",
    "footer.league": "Schedule and results",

    "privacy.title": "Privacy",
    "404.title": "Foul! This page doesn't exist",
    "404.text": "The page may have moved or the address is wrong.",
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
  "Rzucający obrońca": "Shooting guard",
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

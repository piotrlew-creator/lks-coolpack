/*
  Treści marketingowe: zaproszenie dla kibiców (strona startowa)
  i argumenty dla sponsorów (strona Sponsorzy). Liczby od Klubu — listopad 2026.
  Zmiana liczby (np. obserwujących) = zmiana tylko w tym pliku.
*/
export const liczby = {
  facebook: "9000+",
  kibice: "1000–2000",
  rokZalozenia: "1908",
  mlodziez: "~250",
};

type Tekst = { pl: string; en: string };
type Kafel = { tytul: Tekst; tekst: Tekst; ikona: "fans" | "prize" | "kids" | "trophy" | "tv" | "youth" | "history" };

// ── Kibice: „Przyjdź na mecz!” ───────────────────────────────────
export const kibice = {
  kicker: { pl: "Mecze w Łodzi", en: "Home games in Łódź" },
  tytul: { pl: "Przyjdź na mecz!", en: "Come to a game!" },
  lead: {
    pl: "Każdy mecz ŁKS CoolPack w Sport Arenie to sportowe emocje i wydarzenie dla całej rodziny — coś dla siebie znajdą dorośli, nastolatki i dzieciaki.",
    en: "Every ŁKS CoolPack game at Sport Arena is a night of sporting drama and a day out for the whole family — something for adults, teenagers and kids alike.",
  },
  kafle: [
    {
      ikona: "fans",
      tytul: { pl: `${liczby.kibice} kibiców`, en: `${liczby.kibice} fans` },
      tekst: {
        pl: "Średnio tylu kibiców dopinguje ŁKS na każdym meczu w Łodzi. Głośno, biało-czerwono, z tradycją od 1908 roku.",
        en: "That is the average crowd backing ŁKS at every home game in Łódź. Loud, red and white, with a tradition going back to 1908.",
      },
    },
    {
      ikona: "prize",
      tytul: { pl: "Konkursy z nagrodami", en: "Contests and prizes" },
      tekst: {
        pl: "Na każdym meczu domowym organizujemy konkursy dla kibiców z nagrodami od naszych sponsorów.",
        en: "At every home game we run contests for fans, with prizes from our sponsors.",
      },
    },
    {
      ikona: "kids",
      tytul: { pl: "Atrakcje dla dzieci", en: "Fun for kids" },
      tekst: {
        pl: "Przygotowujemy atrakcje dla najmłodszych, więc na mecz warto przyjść całą rodziną.",
        en: "We lay on activities for the youngest fans, so a game is a great family outing.",
      },
    },
    {
      ikona: "trophy",
      tytul: { pl: "Walczymy o ekstraklasę", en: "Chasing promotion" },
      tekst: {
        pl: "ŁKS jest w czołówce 1. ligi i gra o awans do ekstraklasy. Twój doping naprawdę pomaga!",
        en: "ŁKS is near the top of the 1st League and pushing for promotion to the top flight. Your support really counts!",
      },
    },
  ] satisfies Kafel[],
  bilety: {
    pl: "Bilety na mecz domowy pojawiają się około tydzień wcześniej — przy meczu w terminarzu.",
    en: "Tickets for each home game go on sale about a week before — look for them in the fixtures list.",
  },
};

// ── Sponsorzy: „Dlaczego warto wspierać ŁKS” ─────────────────────
export const sponsorom = {
  kicker: { pl: "Dla firm", en: "For businesses" },
  tytul: { pl: "Dlaczego warto wspierać ŁKS", en: "Why partner with ŁKS" },
  lead: {
    pl: "Wspierając ŁKS CoolPack, łączysz swoją markę z drużyną, która walczy o ekstraklasę, z pełnymi trybunami, z dużą społecznością w sieci i z setkami młodych koszykarzy z Łodzi.",
    en: "Backing ŁKS CoolPack links your brand with a team chasing promotion to the top flight, packed stands, a big online community and hundreds of young players from Łódź.",
  },
  liczby: [
    { wartosc: liczby.facebook, opis: { pl: "obserwujących na Facebooku", en: "Facebook followers" } },
    { wartosc: liczby.kibice, opis: { pl: "kibiców na każdym meczu w Łodzi", en: "fans at every home game" } },
    { wartosc: "100%", opis: { pl: "meczów na żywo w Emocje.TV", en: "of games live on Emocje.TV" } },
    { wartosc: liczby.mlodziez, opis: { pl: "młodych zawodników w grupach ŁKS", en: "young players in ŁKS youth teams" } },
  ],
  kafle: [
    {
      ikona: "trophy",
      tytul: { pl: "Walka o ekstraklasę", en: "Chasing the top flight" },
      tekst: {
        pl: "ŁKS CoolPack jest w czołówce 1. ligi i gra o awans do ekstraklasy. Twoja marka będzie przy drużynie, która stawia sobie najwyższe cele.",
        en: "ŁKS CoolPack is near the top of the 1st League and pushing for promotion. Your brand stands next to a team that aims high.",
      },
    },
    {
      ikona: "fans",
      tytul: { pl: "Pełne trybuny i rodzinne wydarzenie", en: "Packed stands, family events" },
      tekst: {
        pl: `Na każdy mecz w Sport Arenie przychodzi średnio ${liczby.kibice} kibiców. Konkursy z nagrodami od sponsorów i atrakcje dla dzieci sprawiają, że Twoja marka jest częścią wydarzenia dla całych rodzin.`,
        en: `Every game at Sport Arena draws ${liczby.kibice} fans on average. Contests with sponsor prizes and activities for kids put your brand at the heart of a family event.`,
      },
    },
    {
      ikona: "tv",
      tytul: { pl: "Zasięg w sieci i na żywo", en: "Reach online and live" },
      tekst: {
        pl: `Ponad ${liczby.facebook.replace("+", "")} osób aktywnie obserwuje nasz profil na Facebooku, a każdy mecz 1. ligi transmituje na żywo Emocje.TV.`,
        en: `More than ${liczby.facebook.replace("+", "")} people actively follow our Facebook page, and every 1st League game is streamed live on Emocje.TV.`,
      },
    },
    {
      ikona: "youth",
      tytul: { pl: "Młodzież i lokalna społeczność", en: "Youth and the local community" },
      tekst: {
        pl: "Seniorzy to szczyt piramidy szkoleniowej: w 15 drużynach i grupach młodzieżowych ŁKS trenuje ok. 250 chłopców z Łodzi i okolic. Wspierając ŁKS, wspierasz łódzki sport i dzieci.",
        en: "The senior team sits at the top of a full development pathway: around 250 boys from Łódź and the area train in 15 ŁKS youth teams. Supporting ŁKS means supporting local sport and kids.",
      },
    },
    {
      ikona: "history",
      tytul: { pl: "Marka z tradycją", en: "A brand with history" },
      tekst: {
        pl: "ŁKS to klub z historią od 1908 roku, a koszykarze ŁKS byli mistrzami Polski w 1953 roku. Twoja firma dołącza do rozpoznawalnej łódzkiej marki sportowej.",
        en: "ŁKS has a history going back to 1908, and its basketball team were Polish champions in 1953. Your company joins a well-known Łódź sporting brand.",
      },
    },
  ] satisfies Kafel[],
  cta: { pl: "Porozmawiajmy o współpracy", en: "Let’s talk partnership" },
};

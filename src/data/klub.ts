/*
  Podstawowe dane klubu w jednym miejscu.
  Pola z wartością "" (pusty tekst) są na stronie ukryte albo pokazane
  jako „do uzupełnienia” — wystarczy je wpisać, żeby się pojawiły.
*/

export const klub = {
  nazwa: "ŁKS CoolPack Łódź",
  nazwaKrotka: "ŁKS CoolPack",
  liga: "1. liga",
  ligaPelna: "1. Liga Mężczyzn",
  rokZalozenia: 1908,
  // Opis strony dla Google i podglądu linków
  opis: "ŁKS CoolPack Łódź — drużyna koszykówki w 1. lidze. Skład, statystyki zawodników, aktualności i kontakt.",
  opisEn: "ŁKS CoolPack Łódź — a basketball team in the Polish 1st League. Roster, player stats, news and contact.",

  // Media społecznościowe
  facebook: "https://www.facebook.com/lkscoolpack",
  // Posty z Facebooka na stronie Aktualności. Wyłączone, bo Facebook dla profilu
  // ŁKS CoolPack zwraca we wtyczce tylko nagłówek, bez postów (najczęściej
  // przez ograniczenia wieku/kraju w ustawieniach strony na Facebooku).
  // Gdy administrator profilu to zmieni — ustaw true.
  facebookWtyczka: false,
  instagram: "https://www.instagram.com/lks_coolpack/",
  x: "https://x.com/LKSCoolPackLodz",

  // Oficjalna strona drużyny w serwisie ligi (terminarz, wyniki, statystyki)
  stronaLigi: "https://1lm.pzkosz.pl/druzyny/d/14303/lks-coolpack-lodz.html",

  // Kontakt — biuro i hala (uzupełnione); sponsoring i media do uzupełnienia.
  // Bilety: link do konkretnego meczu wpisujemy w src/data/terminarz.json (pole "bilety").
  kontakt: {
    biuro: {
      // te same dane co na lkskmjunior.pl (biuro Stowarzyszenia ŁKS Koszykówka Męska)
      adres: "al. Unii Lubelskiej 2, 94-020 Łódź, II\u00a0piętro",
      telefon: "733 34 1908",
      email: "biuro@lkskm.pl",
    },
    sponsoring: { osoba: "", telefon: "", email: "" },
    media: { osoba: "", telefon: "", email: "" },
    bilety: { opis: "", link: "" },
    // Hala — wszystkie mecze domowe ŁKS CoolPack
    hala: {
      nazwa: "Sport Arena Łódź im. Józefa „Ziuny” Żylińskiego",
      nazwaKrotka: "Sport Arena Łódź",
      adres: "al. Unii Lubelskiej 2, 94-020 Łódź",
      mapa: "https://maps.app.goo.gl/MKyc4p7NLWHGsACMA",
    },
  },

  // Transmisje na żywo — wszystkie mecze PZKosz 1 Ligi Mężczyzn (płatna subskrypcja).
  // Link pojawia się przy każdej karcie meczu i na stronie Terminarz.
  transmisja: {
    nazwa: "Emocje.TV",
    link: "https://emocje.tv/transmisje?dayOffset=0",
  },

  // Statystyki bez cookies (Cloudflare Web Analytics) — token z panelu
  // Cloudflare. Pusty = skrypt statystyk nie jest dołączany.
  cfAnalyticsToken: "",
};

/*
  Karta „Najbliższy mecz” na stronie startowej — pierwszy nierozegrany
  mecz z terminarza. Po meczu karta sama się chowa, a w jej miejscu
  jest odnośnik do strony Terminarz i wyniki.
*/
export type Mecz = {
  data: string; // "2026-11-22T18:00" (czas polski). Po meczu karta sama się chowa.
  rywal: string;
  ics?: string; // plik kalendarza dla tego meczu
  mapa?: string; // mapa dojazdu (mecze domowe)
  dom: boolean; // true = gramy u siebie
  hala: string;
  bilety?: string; // link do biletów
  transmisja?: string; // link do transmisji
};

// Najbliższy mecz liczy się sam z terminarza: src/data/terminarz.json (src/lib/terminarz.ts)

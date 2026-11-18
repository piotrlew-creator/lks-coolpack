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

  // Oficjalna strona drużyny w serwisie ligi (terminarz, wyniki, statystyki)
  stronaLigi: "https://1lm.pzkosz.pl/druzyny/d/14303/lks-coolpack-lodz.html",

  // Akademia — droga od grup naborowych do 1. ligi
  akademia: {
    nazwa: "ŁKS Koszykówka Męska",
    adres: "https://lkskmjunior.pl/",
  },

  // Kontakt — DO UZUPEŁNIENIA (dane biura drużyny seniorskiej)
  kontakt: {
    biuro: {
      // te same dane co na lkskmjunior.pl (biuro Stowarzyszenia ŁKS Koszykówka Męska)
      adres: "Al. Unii Lubelskiej 2, 94-020 Łódź, II\u00a0piętro",
      telefon: "733 34 1908",
      email: "biuro@lkskm.pl",
    },
    sponsoring: { osoba: "", telefon: "", email: "" },
    media: { osoba: "", telefon: "", email: "" },
    bilety: { opis: "", link: "" },
    hala: { nazwa: "", adres: "", mapa: "" },
  },

  // Statystyki bez cookies (Cloudflare Web Analytics) — token z panelu
  // Cloudflare. Pusty = skrypt statystyk nie jest dołączany.
  cfAnalyticsToken: "",
};

/*
  Najbliższy mecz na stronie startowej.
  Ustaw null, gdy nie chcesz pokazywać sekcji z konkretnym meczem —
  wtedy w tym miejscu jest odnośnik do terminarza na stronie ligi.
*/
export type Mecz = {
  data: string; // "2026-11-22T18:00" (czas polski). Po meczu karta sama się chowa.
  rywal: string;
  dom: boolean; // true = gramy u siebie
  hala: string;
  bilety?: string; // link do biletów
  transmisja?: string; // link do transmisji
};

export const najblizszyMecz: Mecz | null = {
  data: "2026-11-19T18:00",
  rywal: "Kotwica Kołobrzeg",
  dom: false,
  hala: "Kołobrzeg",
};

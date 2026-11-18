/*
  Grupy młodzieżowe Stowarzyszenia ŁKS Koszykówka Męska.
  Źródło: lkskmjunior.pl (strona grup młodzieżowych).
  Zmiana trenera lub rocznika: popraw tutaj — podstrona zbuduje się sama.
*/
export const junior = {
  adres: "https://lkskmjunior.pl/",
  domena: "lkskmjunior.pl",
  dolacz: "https://lkskmjunior.pl/dolacz/",
  druzyn: 15,
  zawodnikow: 250,
};

export interface Grupa {
  nazwa: string;
  nazwaEn?: string;
  /** najstarszy rocznik w grupie („… i młodsi”); brak = drużyna seniorska */
  rocznik?: number;
  /** trenerzy; przy dwóch drużynach w roczniku: „U12 I: R. Darnikowski” */
  trenerzy: string[];
  opis?: string;
  opisEn?: string;
  /** podstrona na lkskmjunior.pl */
  link: string;
}

export const grupy: Grupa[] = [
  {
    nazwa: "Grupy naborowe",
    nazwaEn: "Beginner groups",
    rocznik: 2017,
    trenerzy: [],
    opis: "4 grupy w szkołach podstawowych nr 19, 41, 48 i 199. Nabór otwarty przez cały sezon.",
    opisEn: "4 groups at primary schools no. 19, 41, 48 and 199. Open to new players all season.",
    link: "druzyny/naborowa/",
  },
  { nazwa: "U11", rocznik: 2016, trenerzy: ["A. Krzysztoń"], link: "druzyny/u11/" },
  { nazwa: "U12", rocznik: 2015, trenerzy: ["U12 I: R. Darnikowski", "U12 II: W. Szewczyk"], link: "druzyny/u12/" },
  { nazwa: "U13", rocznik: 2014, trenerzy: ["U13 I: M. Kochaniak", "U13 II: M. Markowicz"], link: "druzyny/u13/" },
  { nazwa: "U14", rocznik: 2013, trenerzy: ["M. Rudziński"], link: "druzyny/u14/" },
  { nazwa: "U15", rocznik: 2012, trenerzy: ["U15 I: M. Puczyński", "U15 II: B. Frątczak"], link: "druzyny/u15/" },
  { nazwa: "U17", rocznik: 2010, trenerzy: ["P. Dembowski"], link: "druzyny/u17/" },
  { nazwa: "U19", rocznik: 2008, trenerzy: ["P. Trepka"], link: "druzyny/u19/" },
  {
    nazwa: "ŁKS Politechnika Łódzka",
    trenerzy: ["P. Trepka"],
    opis: "Drużyna seniorska w 2. lidze — następny krok po U19.",
    opisEn: "Senior team in the 2nd League — the next step after U19.",
    link: "druzyny/dwa-liga/",
  },
];

/** Koordynatorzy przyjmujący nowych zawodników (dane jak na lkskmjunior.pl). */
export const koordynatorzy = {
  naborowe: { imie: "Szczepan Prasol", telefon: "695 262 230", email: "szczepan.prasol@lkskm.pl" },
  organizacyjny: { imie: "Maciej Kochaniak", telefon: "508 206 918", email: "maciej.kochaniak@lkskm.pl" },
};

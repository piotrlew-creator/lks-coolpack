/*
  Historia sekcji koszykówki mężczyzn ŁKS — opracowanie na podstawie Wikipedii
  (hasło „ŁKS Łódź (koszykówka)”, stan na listopad 2026) i bibliografii tam podanej.
*/
type T = { pl: string; en: string };

export const wstep: T = {
  pl: "Łódzki Klub Sportowy powstał w 1908 roku, a sekcja koszykówki mężczyzn działa od 1929 roku. Przez prawie sto lat koszykarze ŁKS sięgnęli po mistrzostwo Polski, zagrali w europejskim pucharze i wychowali późniejszego zawodnika NBA, a dziś znów walczą o powrót do ekstraklasy.",
  en: "Łódzki Klub Sportowy was founded in 1908, and its men’s basketball section has existed since 1929. In almost a hundred years ŁKS players have won the Polish title, played in a European cup and produced a future NBA player — and today the team is fighting its way back to the top flight.",
};

export const sukcesy: { rok: string; tytul: T; opis: T }[] = [
  {
    rok: "1953",
    tytul: { pl: "Mistrzostwo Polski", en: "Polish champions" },
    opis: {
      pl: "Największy sukces w historii sekcji. Mistrzowską drużynę prowadził trener Andrzej Kulesza, a w składzie był m.in. Józef „Ziuna” Żyliński — dziś patron hali, w której gramy.",
      en: "The greatest success in the section’s history. The title-winning team was coached by Andrzej Kulesza and included Józef “Ziuna” Żyliński — today the namesake of the arena we play in.",
    },
  },
  {
    rok: "1978",
    tytul: { pl: "Brązowy medal mistrzostw Polski", en: "Bronze medal in the Polish league" },
    opis: {
      pl: "Pod wodzą Bolesława Kwiatkowskiego ŁKS stanął na podium, a Wojciech Fiedorczuk został uznany najlepszym koszykarzem sezonu. Medal dał jedyny w historii start w europejskim Pucharze Koracia.",
      en: "Under coach Bolesław Kwiatkowski ŁKS made the podium, and Wojciech Fiedorczuk was named the player of the season. The medal earned the club its only appearance in Europe’s Korać Cup.",
    },
  },
  {
    rok: "2011",
    tytul: { pl: "Awans do ekstraklasy", en: "Promotion to the top flight" },
    opis: {
      pl: "Drużyna trenera Piotra Zycha wróciła do najwyższej klasy rozgrywek. Mecz ze Śląskiem Wrocław w Atlas Arenie obejrzało około 9 tysięcy kibiców.",
      en: "Coach Piotr Zych’s team returned to the top division. Around 9,000 fans watched the game against Śląsk Wrocław at Atlas Arena.",
    },
  },
  {
    rok: "2024",
    tytul: { pl: "Powrót do 1. ligi", en: "Back in the 1st League" },
    opis: {
      pl: "Po latach odbudowy ŁKS awansował na zaplecze ekstraklasy. Dziś jako ŁKS CoolPack Łódź walczy o kolejny krok — powrót do najwyższej ligi.",
      en: "After years of rebuilding, ŁKS was promoted to the second tier. Today, as ŁKS CoolPack Łódź, the team is pushing for the next step — a return to the top league.",
    },
  },
];

export const kalendarium: { rok: string; tekst: T }[] = [
  { rok: "1908", tekst: { pl: "Powstaje Łódzki Klub Sportowy.", en: "Łódzki Klub Sportowy is founded." } },
  { rok: "1924", tekst: { pl: "Pierwszy mecz koszykarzy ŁKS — wygrana z AZS Warszawa 20:4.", en: "First ŁKS basketball game — a 20:4 win over AZS Warszawa." } },
  { rok: "1929", tekst: { pl: "Założenie sekcji koszykówki i pierwsze mistrzostwo Łodzi (19:12 z IKP w finale).", en: "The basketball section is founded and wins its first Łódź championship (19:12 against IKP in the final)." } },
  { rok: "1945", tekst: { pl: "Po wojnie sekcję reaktywują Witold Bujnowicz, Wacław Kowalczyk, Czesław Raczyński i Eugeniusz Zemełka.", en: "After the war the section is revived by Witold Bujnowicz, Wacław Kowalczyk, Czesław Raczyński and Eugeniusz Zemełka." } },
  { rok: "1953", tekst: { pl: "Mistrzostwo Polski z trenerem Andrzejem Kuleszą.", en: "Polish champions under coach Andrzej Kulesza." } },
  { rok: "1957", tekst: { pl: "ŁKS pokonuje mistrza Polski, Legię Warszawa, po pięciu dogrywkach — to jeden z najdłuższych meczów w historii polskiej koszykówki mężczyzn.", en: "ŁKS beats the Polish champions Legia Warszawa after five overtimes — one of the longest games in the history of Polish men’s basketball." } },
  { rok: "1978", tekst: { pl: "Brązowy medal mistrzostw Polski i start w Pucharze Koracia (rywal: Inter Bratysława).", en: "Bronze medal in the Polish league and a Korać Cup campaign (against Inter Bratislava)." } },
  { rok: "1999", tekst: { pl: "Pierwszy w historii spadek do III ligi.", en: "First-ever relegation to the third division." } },
  { rok: "2002", tekst: { pl: "W drużynie juniorów ŁKS zaczyna trenować Marcin Gortat — później gracz NBA.", en: "Marcin Gortat — later an NBA player — starts training with the ŁKS juniors." } },
  { rok: "2008", tekst: { pl: "Awans do I ligi pod wodzą Piotra Zycha.", en: "Promotion to the 1st League under Piotr Zych." } },
  { rok: "2011", tekst: { pl: "Awans do ekstraklasy, również z trenerem Zychem.", en: "Promotion to the top flight, again with coach Zych." } },
  { rok: "2012", tekst: { pl: "Wycofanie z ekstraklasy i nowy start od III ligi.", en: "Withdrawal from the top flight and a fresh start in the third division." } },
  { rok: "2024", tekst: { pl: "Awans do I ligi — drugiego poziomu rozgrywek.", en: "Promotion to the 1st League — the second tier." } },
];

export const ciekawostki: T[] = [
  {
    pl: "Wiesław Jańczyk zdobył z ŁKS mistrzostwo Polski w koszykówce (1953), a kilka lat później także w piłce nożnej (1958).",
    en: "Wiesław Jańczyk won the Polish title with ŁKS in basketball (1953) and, a few years later, in football too (1958).",
  },
  {
    pl: "Józef „Ziuna” Żyliński — mistrz Polski z 1953 roku — przez 30 lat prowadził koszykarki ŁKS. Jego imię nosi dziś Sport Arena Łódź, nasza hala.",
    en: "Józef “Ziuna” Żyliński — a 1953 Polish champion — coached the ŁKS women’s team for 30 years. Sport Arena Łódź, our home arena, is named after him.",
  },
  {
    pl: "W 2011 roku w Atlas Arenie ŁKS próbował pobić rekord frekwencji na halowym meczu ligowym w Polsce. Zabrakło niecałych 900 osób.",
    en: "In 2011 ŁKS tried to set a Polish attendance record for an indoor league game at Atlas Arena — and fell short by fewer than 900 people.",
  },
];

export const zrodlo = {
  nazwa: "Wikipedia: ŁKS Łódź (koszykówka)",
  link: "https://pl.wikipedia.org/wiki/%C5%81KS_%C5%81%C3%B3d%C5%BA_(koszyk%C3%B3wka)",
};

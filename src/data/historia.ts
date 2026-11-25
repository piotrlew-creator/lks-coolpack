/*
  Historia sekcji koszykówki mężczyzn ŁKS — opracowanie na podstawie
  Encyklopedii ŁKS (encyklopedialks.pl, „Koszykówka mężczyzn”) i Wikipedii
  (hasło „ŁKS Łódź (koszykówka)”), stan na listopad 2026.
  W ciekawostkach **tekst** = wyróżniona liczba (pogrubiona, czerwona).
*/
type T = { pl: string; en: string };

export const wstep: T = {
  pl: "Łódzki Klub Sportowy powstał w 1908 roku, a koszykarze ŁKS grają od lat 20. XX wieku — pierwszy udokumentowany mecz rozegrali w 1924 roku. Przez ponad sto lat zdobyli mistrzostwo Polski, zagrali w europejskim pucharze i wychowali wielu utalentowanych juniorów, a dziś znów walczą o powrót do ekstraklasy.",
  en: "Łódzki Klub Sportowy was founded in 1908, and ŁKS has played men’s basketball since the 1920s — the first documented game dates from 1924. Over more than a century, ŁKS players have won the Polish title, played in a European cup and produced many talented young players — and today the team is fighting its way back to the top flight.",
};

export const sukcesy: { rok: string; tytul: T; opis: T }[] = [
  {
    rok: "1953",
    tytul: { pl: "Mistrzostwo Polski", en: "Polish champions" },
    opis: {
      pl: "Jedyny tytuł mistrza Polski w historii sekcji. W turnieju finałowym w Poznaniu (23–25 stycznia) ŁKS wygrał wszystkie trzy mecze: ze Spójnią Gdańsk, Wartą Poznań i CWKS (Legią) Warszawa. Drużynę prowadził trener Andrzej Kulesza, a w składzie był m.in. Józef „Ziuna” Żyliński — dziś patron hali, w której gramy.",
      en: "The section’s only Polish title. At the final tournament in Poznań (23–25 January) ŁKS won all three games: against Spójnia Gdańsk, Warta Poznań and CWKS (Legia) Warszawa. The team was coached by Andrzej Kulesza and included Józef “Ziuna” Żyliński — today the namesake of the arena we play in.",
    },
  },
  {
    rok: "1978",
    tytul: { pl: "Brązowy medal mistrzostw Polski", en: "Bronze medal in the Polish league" },
    opis: {
      pl: "Drużyna Bolesława Kwiatkowskiego przed ostatnim turniejem miała szansę na złoto, ale kontuzji doznał jej lider Wojciech Fiedorczuk. Mimo to tygodnik „Sportowiec” wybrał Fiedorczuka najlepszym koszykarzem w Polsce, a dzięki medalowi klub jedyny raz w historii zagrał w europejskim Pucharze Koracia.",
      en: "Bolesław Kwiatkowski’s team still had a shot at gold before the final tournament, but their leader Wojciech Fiedorczuk was injured. Fiedorczuk was nonetheless voted Poland’s best basketball player by the weekly “Sportowiec”, and the medal earned the club its only appearance in Europe’s Korać Cup.",
    },
  },
  {
    rok: "2011",
    tytul: { pl: "Awans do ekstraklasy", en: "Promotion to the top flight" },
    opis: {
      pl: "Drużyna trenera Piotra Zycha wróciła do najwyższej klasy rozgrywek. Mecz ze Śląskiem Wrocław w Atlas Arenie obejrzało 9128 kibiców.",
      en: "Coach Piotr Zych’s team returned to the top division. A crowd of 9,128 watched the game against Śląsk Wrocław at Atlas Arena.",
    },
  },
  {
    rok: "2024",
    tytul: { pl: "Powrót do 1. ligi", en: "Back in the 1st League" },
    opis: {
      pl: "Po latach odbudowy — od 3. ligi w 2013 roku — ŁKS awansował na zaplecze ekstraklasy. Dziś jako ŁKS CoolPack Łódź walczy o kolejny krok: powrót do najwyższej ligi.",
      en: "After years of rebuilding — starting from the fourth tier in 2013 — ŁKS was promoted to the second tier. Today, as ŁKS CoolPack Łódź, the team is pushing for the next step: a return to the top league.",
    },
  },
];

export const kalendarium: { rok: string; tekst: T }[] = [
  { rok: "1908", tekst: { pl: "Powstaje Łódzki Klub Sportowy.", en: "Łódzki Klub Sportowy is founded." } },
  { rok: "1924", tekst: { pl: "9 lutego: pierwszy udokumentowany mecz koszykarzy ŁKS — wygrana z AZS Warszawa 20:4.", en: "9 February: the first documented ŁKS basketball game — a 20–4 win over AZS Warszawa." } },
  { rok: "1929", tekst: { pl: "Pierwsze mistrzostwo Łodzi (19:12 z IKP w dodatkowym meczu o tytuł) i pierwszy start w mistrzostwach Polski.", en: "First Łódź championship (19–12 against IKP in a title play-off) and a first appearance in the Polish championship." } },
  { rok: "1945", tekst: { pl: "Po wojnie sekcję reaktywują Witold Bujnowicz, Wacław Kowalczyk i Czesław Raczyński.", en: "After the war the section is revived by Witold Bujnowicz, Wacław Kowalczyk and Czesław Raczyński." } },
  { rok: "1949", tekst: { pl: "Po likwidacji polskiej YMCA do ŁKS przechodzą trener Andrzej Kulesza i grupa świetnych zawodników, zwanych „wileńskimi żubrami”.", en: "After the Polish YMCA is disbanded, coach Andrzej Kulesza and a group of top players known as the “Vilnius bison” join ŁKS." } },
  { rok: "1953", tekst: { pl: "Mistrzostwo Polski z trenerem Andrzejem Kuleszą.", en: "Polish champions under coach Andrzej Kulesza." } },
  { rok: "1957", tekst: { pl: "W turnieju finałowym mistrzostw Polski ŁKS pokonuje Legię Warszawa 77:75 po pięciu dogrywkach — to jeden z najdłuższych meczów w historii polskiej koszykówki.", en: "At the Polish championship final tournament ŁKS beats Legia Warszawa 77–75 after five overtimes — one of the longest games in Polish basketball history." } },
  { rok: "1961", tekst: { pl: "Spadek z najwyższej ligi. W latach 60. ŁKS kilka razy spada i wraca do elity.", en: "Relegation from the top division. Through the 1960s ŁKS goes down and comes back up several times." } },
  { rok: "1969", tekst: { pl: "Trenerem zostaje Krzysztof Kędzierski, który buduje w klubie system szkolenia młodzieży.", en: "Krzysztof Kędzierski becomes coach and builds the club’s youth development system." } },
  { rok: "1975", tekst: { pl: "Awans do najwyższej ligi pod wodzą Kędzierskiego. Do drużyny dołącza 19-letni Wojciech Fiedorczuk.", en: "Promotion to the top division under Kędzierski. 19-year-old Wojciech Fiedorczuk joins the team." } },
  { rok: "1978", tekst: { pl: "Brązowy medal mistrzostw Polski, mistrzostwo Polski juniorów i kadetów oraz start w Pucharze Koracia (rywal: Inter Bratysława).", en: "Bronze medal in the Polish league, national junior and cadet titles, and a Korać Cup campaign (against Inter Bratislava)." } },
  { rok: "1984", tekst: { pl: "Drużynę seniorów przejmuje Społem Łódź.", en: "The senior team is taken over by Społem Łódź." } },
  { rok: "1998", tekst: { pl: "Ze sponsorem DOMAR awans z 3. do 2. ligi.", en: "With backing from sponsor DOMAR, ŁKS wins promotion from the fourth to the third tier." } },
  { rok: "1999", tekst: { pl: "Spadek do 3. ligi — w ostatnim meczu z Meduzą Gdynia do utrzymania zabrakło trzech punktów.", en: "Relegation to the fourth tier — in the final game against Meduza Gdynia, ŁKS falls three points short of staying up." } },
  { rok: "2002", tekst: { pl: "Na trening juniorów ŁKS przychodzi Marcin Gortat — późniejszy gracz NBA.", en: "Marcin Gortat — later an NBA player — turns up at an ŁKS junior training session." } },
  { rok: "2007", tekst: { pl: "Powstaje stowarzyszenie ŁKS Koszykówka Męska.", en: "The ŁKS Koszykówka Męska association is founded." } },
  { rok: "2008", tekst: { pl: "Awans do 1. ligi pod wodzą Piotra Zycha.", en: "Promotion to the 1st League under Piotr Zych." } },
  { rok: "2011", tekst: { pl: "Awans do ekstraklasy, również z trenerem Zychem.", en: "Promotion to the top flight, again with coach Zych." } },
  { rok: "2012", tekst: { pl: "Wycofanie drużyny z ekstraklasy.", en: "The team withdraws from the top flight." } },
  { rok: "2013", tekst: { pl: "Nowy start: drużyna ŁKS SMS MG13 zaczyna grę w 3. lidze.", en: "A fresh start: the ŁKS SMS MG13 team begins in the fourth tier." } },
  { rok: "2014", tekst: { pl: "Awans do 2. ligi, a juniorzy U20 grają w finale mistrzostw Polski.", en: "Promotion to the third tier, while the U20 juniors reach the Polish championship final." } },
  { rok: "2024", tekst: { pl: "Awans do 1. ligi — drugiego poziomu rozgrywek.", en: "Promotion to the 1st League — the second tier." } },
];

export const ciekawostki: T[] = [
  {
    pl: "W decydującym meczu o mistrzostwo Polski w 1953 roku Wiesław Jańczyk zdobył **28 z 56 punktów** ŁKS. To jedyny zawodnik, który z ŁKS wywalczył mistrzostwo Polski w koszykówce (1953) i w piłce nożnej (1958).",
    en: "In the decisive game for the 1953 Polish title, Wiesław Jańczyk scored **28 of ŁKS’s 56 points**. He is the only player to win the Polish title with ŁKS in both basketball (1953) and football (1958).",
  },
  {
    pl: "Przed turniejem finałowym w 1953 roku drużyna trenera Kuleszy budowała formę na zgrupowaniu w górach — jeżdżąc na nartach.",
    en: "Before the 1953 final tournament, coach Kulesza’s team got into shape at a training camp in the mountains — on skis.",
  },
  {
    pl: "W mistrzostwach Łodzi w 1929 roku ŁKS wygrał wszystkie mecze, a i tak miał tyle samo punktów co IKP. Powód? **Pięć zwycięstw walkowerem**, za które przyznawano tylko jeden punkt. O tytule zdecydował dodatkowy mecz.",
    en: "In the 1929 Łódź championship, ŁKS won every game yet still finished level on points with IKP. Why? **Five of those wins were walkovers**, worth just one point each. A play-off decided the title.",
  },
  {
    pl: "Józef „Ziuna” Żyliński — mistrz Polski z 1953 roku — przez 30 lat prowadził koszykarki ŁKS. Jego imię nosi dziś Sport Arena Łódź, nasza hala.",
    en: "Józef “Ziuna” Żyliński — a 1953 Polish champion — coached the ŁKS women’s team for 30 years. Sport Arena Łódź, our home arena, is named after him.",
  },
  {
    pl: "Marcin Gortat w 2002 roku przyszedł na trening juniorów ŁKS, a w 2007 roku podpisał kontrakt z Orlando Magic. W NBA zadebiutował **1 marca 2008 roku**.",
    en: "Marcin Gortat turned up at an ŁKS junior training session in 2002 and signed for the Orlando Magic in 2007. He made his NBA debut on **1 March 2008**.",
  },
  {
    pl: "29 października 2011 roku ŁKS próbował w Atlas Arenie pobić rekord frekwencji na meczu ligowym koszykówki w Polsce. Mecz ze Śląskiem Wrocław obejrzało **9128 kibiców**. Do rekordu Ergo Areny (10 015 widzów) zabrakło tylko **888 osób**.",
    en: "On 29 October 2011 ŁKS tried to set a Polish attendance record for a league basketball game at Atlas Arena. The game against Śląsk Wrocław drew **9,128 fans** — just **888 short** of beating the Ergo Arena record of 10,015.",
  },
];

export const zrodla = [
  { nazwa: "Encyklopedia ŁKS: Koszykówka mężczyzn", link: "https://encyklopedialks.pl/content/koszykowka-mezczyzn/" },
  { nazwa: "Wikipedia: ŁKS Łódź (koszykówka)", link: "https://pl.wikipedia.org/wiki/%C5%81KS_%C5%81%C3%B3d%C5%BA_(koszyk%C3%B3wka)" },
];

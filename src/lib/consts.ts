/** Pozycje zawodników (w plikach zawodników wpisujemy dokładnie te nazwy). */
export const POZYCJE = [
  "Rozgrywający",
  "Rzucający",
  "Niski skrzydłowy",
  "Silny skrzydłowy",
  "Środkowy",
] as const;

/** Poziomy sponsorów (w tej kolejności pokazujemy je na stronie). */
export const POZIOMY_SPONSORA = [
  "Sponsor tytularny",
  "Sponsor strategiczny",
  "Sponsor",
  "Partner",
  "Partner medialny",
] as const;

/** Poziomy rozgrywek w karierze zawodnika. */
export const LIGI = ["EKS", "1L", "2L", "3L"] as const;

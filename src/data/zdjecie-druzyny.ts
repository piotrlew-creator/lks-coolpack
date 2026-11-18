/*
  Interaktywne zdjęcie drużyny: położenie głowy każdego zawodnika
  na zdjęciu (w procentach szerokości i wysokości obrazka).
  Klucz = numer na koszulce. Osobno dla zdjęcia w jasnych i ciemnych strojach.
  Na zdjęciu nie ma nr 2 (Igor Urban).
*/
export type Punkt = { x: number; y: number };

export const ciemne: Record<number, Punkt> = {
  16: { x: 9.8, y: 20.5 },
  51: { x: 19.3, y: 26.1 },
  41: { x: 27.7, y: 27.7 },
  5: { x: 34.8, y: 28.8 },
  13: { x: 42.2, y: 30.9 },
  26: { x: 49.2, y: 32.9 },
  8: { x: 56.9, y: 29.6 },
  1: { x: 64.2, y: 29.3 },
  22: { x: 72.1, y: 27.2 },
  6: { x: 80.6, y: 24.5 },
  10: { x: 91.1, y: 23.7 },
};

export const jasne: Record<number, Punkt> = {
  16: { x: 7.3, y: 22.1 },
  51: { x: 17.2, y: 27.7 },
  41: { x: 25.9, y: 27.4 },
  5: { x: 33.5, y: 28.8 },
  13: { x: 41.7, y: 31.7 },
  26: { x: 50.2, y: 33.0 },
  8: { x: 58.8, y: 29.5 },
  1: { x: 66.5, y: 29.6 },
  22: { x: 74.3, y: 27.7 },
  6: { x: 82.3, y: 25.0 },
  10: { x: 92.3, y: 24.0 },
};

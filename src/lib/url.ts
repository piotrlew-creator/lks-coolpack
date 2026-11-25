/*
  Adresy wewnętrzne niezależne od tego, pod jakim adresem stoi strona
  (dziś: lkscoolpacklodz.pl, BASE = "/").
  Użycie: u("sklad/") → "/sklad/"
*/
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");

export function u(path = ""): string {
  const clean = path.replace(/^\//, "");
  return BASE + clean;
}

/** Ścieżka bieżącej strony bez prefiksu BASE, np. "sklad/jan-kowalski/". */
export function rel(pathname: string): string {
  const p = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\//, "");
  return p;
}

/** Telefon w formacie tel: (+48…) */
export function telHref(tel: string): string {
  const digits = tel.replace(/[^\d+]/g, "");
  return "tel:" + (digits.startsWith("+") ? digits : "+48" + digits);
}

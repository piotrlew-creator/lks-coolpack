/* ═══════════════════════════════════════════════════════════════
   ŁKS CoolPack — skrypty strony
   Zasada: skrypt to dodatek. Wszystkie linki działają także bez
   JavaScriptu; efekty tylko je uatrakcyjniają.
   ═══════════════════════════════════════════════════════════════ */

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ── Motyw jasny / ciemny ─────────────────────────────────────── */
function initTheme() {
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const root = document.documentElement;
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("lks-theme", next);
      } catch {
        /* tryb prywatny */
      }
    });
  });
}

/* ── Menu na telefonie ────────────────────────────────────────── */
function initMenu() {
  const menu = document.querySelector<HTMLElement>("[data-menu]");
  const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
  const closeBtn = document.querySelector<HTMLButtonElement>("[data-menu-close]");
  if (!menu || !openBtn || !closeBtn) return;

  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    menu.classList.remove("is-open");
    menu.hidden = true;
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    openBtn.focus();
  };
  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) close();
  });
  // Na szerokim ekranie menu pełnoekranowe nie jest potrzebne
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
    if (e.matches && !menu.hidden) close();
  });
}

/* ── Pojawianie się elementów przy przewijaniu ────────────────── */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>(".reveal");
  if (!items.length) return;
  if (reduceMotion() || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.remove("reveal"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.classList.add("is-in");
        io.unobserve(el);
        // Po animacji zdejmujemy klasy, żeby nie spowalniały efektów najechania
        const delay = parseInt(getComputedStyle(el).getPropertyValue("--d")) || 0;
        window.setTimeout(() => el.classList.remove("reveal", "is-in"), 800 + delay);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  items.forEach((el) => io.observe(el));
}

/* ── Przechylanie kafli zawodników pod kursorem (tylko mysz) ──── */
function initTilt() {
  if (reduceMotion() || !finePointer()) return;
  document.querySelectorAll<HTMLElement>(".pcard").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--ty", `${(x - 0.5) * 10}deg`);
      card.style.setProperty("--tx", `${(0.5 - y) * 8}deg`);
      card.style.setProperty("--gx", `${x * 100}%`);
      card.style.setProperty("--gy", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tx", "0deg");
      card.style.setProperty("--ty", "0deg");
    });
  });
}

/* ── PIORUN ───────────────────────────────────────────────────────
   Kliknięcie w zawodnika: błysk, piorun uderza w kafel, kafel drży,
   a potem otwiera się strona zawodnika (zdjęcie przelatuje płynnie
   tam, gdzie przeglądarka obsługuje View Transitions).             */
const SVG_NS = "http://www.w3.org/2000/svg";

/** Łamana linia od (x1,y1) do (x2,y2) z losowymi zygzakami. */
function zigzag(x1: number, y1: number, x2: number, y2: number, segments: number, spread: number): [number, number][] {
  const pts: [number, number][] = [[x1, y1]];
  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * spread;
    const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * spread * 0.25;
    pts.push([x, y]);
  }
  pts.push([x2, y2]);
  return pts;
}
const toPath = (pts: [number, number][]) => "M" + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L");

function boltSvg(target: DOMRect): SVGSVGElement {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.setAttribute("width", String(w));
  svg.setAttribute("height", String(h));

  const tx = target.left + target.width * (0.4 + Math.random() * 0.2);
  const ty = target.top + target.height * 0.55;
  const sx = tx + (Math.random() - 0.5) * Math.min(w * 0.5, 320);
  const main = zigzag(sx, -20, tx, ty, 9, Math.min(w, 900) * 0.14);

  const paths: string[] = [toPath(main)];
  // Odgałęzienia
  for (let b = 0; b < 3; b++) {
    const from = main[2 + Math.floor(Math.random() * (main.length - 4))];
    const len = 60 + Math.random() * 120;
    const dir = Math.random() < 0.5 ? -1 : 1;
    paths.push(toPath(zigzag(from[0], from[1], from[0] + dir * len, from[1] + len * 0.9, 4, 40)));
  }

  paths.forEach((d, i) => {
    const glow = document.createElementNS(SVG_NS, "path");
    glow.setAttribute("d", d);
    glow.setAttribute("class", i === 0 ? "bolt-glow" : "bolt-glow bolt-branch");
    const core = document.createElementNS(SVG_NS, "path");
    core.setAttribute("d", d);
    core.setAttribute("class", i === 0 ? "bolt-core" : "bolt-core bolt-branch");
    svg.append(glow, core);
  });

  // Rozbłysk w miejscu uderzenia
  const hit = document.createElementNS(SVG_NS, "circle");
  hit.setAttribute("cx", String(tx));
  hit.setAttribute("cy", String(ty));
  hit.setAttribute("r", "10");
  hit.setAttribute("class", "bolt-hit");
  svg.append(hit);
  return svg;
}

function strike(card: HTMLElement, href: string) {
  const layer = document.querySelector<HTMLElement>(".bolt-layer");
  if (!layer) {
    location.href = href;
    return;
  }
  // Nazwy przejścia — tylko dla klikniętego kafla
  card.querySelector<HTMLElement>("[data-vt=photo]")?.style.setProperty("view-transition-name", "player-photo");
  card.querySelector<HTMLElement>("[data-vt=number]")?.style.setProperty("view-transition-name", "player-number");

  layer.replaceChildren(boltSvg(card.getBoundingClientRect()));
  layer.classList.remove("is-on");
  void layer.offsetWidth; // restart animacji
  layer.classList.add("is-on");
  card.classList.add("is-struck");
  document.documentElement.classList.add("is-shaking");
  if ("vibrate" in navigator) navigator.vibrate?.(30);

  window.setTimeout(() => {
    layer.classList.remove("is-on");
    layer.replaceChildren();
    document.documentElement.classList.remove("is-shaking");
    location.href = href;
  }, 430);
}

function initBolt() {
  document.addEventListener("click", (e) => {
    const card = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-bolt]");
    if (!card) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (reduceMotion()) return; // spokojna wersja: zwykłe przejście
    e.preventDefault();
    strike(card, card.href);
  });

  // Powrót „wstecz” do składu: zdjęcie wraca na swoje miejsce w siatce
  window.addEventListener("pagereveal", (ev: Event) => {
    const e = ev as Event & { viewTransition?: { finished: Promise<void> } };
    if (!e.viewTransition) return;
    // @ts-ignore — Navigation API (Chrome, Edge, Safari 26+)
    const from: string | undefined = window.navigation?.activation?.from?.url;
    if (!from) return;
    const slug = new URL(from).pathname.split("/").filter(Boolean).pop();
    const card = slug && document.querySelector<HTMLElement>(`.pcard[data-slug="${CSS.escape(slug)}"]`);
    if (!card) return;
    // Wraca tylko zdjęcie. Duży numer ze strony zawodnika płynnie gaśnie
    // w miejscu (w kaflu numer jest tylko delikatnym konturem za zdjęciem).
    // Podpis kafla (imię, nazwisko) rysujemy nad lecącym zdjęciem, żeby nie
    // „wyskakiwał” dopiero na końcu animacji.
    const photo = card.querySelector<HTMLElement>("[data-vt=photo]");
    const info = card.querySelector<HTMLElement>(".pcard__info");
    photo?.style.setProperty("view-transition-name", "player-photo");
    info?.style.setProperty("view-transition-name", "player-info");
    e.viewTransition.finished.finally(() => {
      photo?.style.removeProperty("view-transition-name");
      info?.style.removeProperty("view-transition-name");
    });
  });

  // Strona wraca z pamięci przeglądarki (bfcache) — sprzątamy po efekcie
  window.addEventListener("pageshow", () => {
    document.querySelectorAll(".pcard.is-struck").forEach((c) => c.classList.remove("is-struck"));
    document.querySelectorAll<HTMLElement>(".pcard [data-vt], .pcard__info").forEach((el) => el.style.removeProperty("view-transition-name"));
  });
}

/* ── Filtr pozycji w składzie ─────────────────────────────────── */
function initFilter() {
  const bar = document.querySelector<HTMLElement>("[data-filter]");
  if (!bar) return;
  const cards = document.querySelectorAll<HTMLElement>(".pcard");
  const buttons = [...bar.querySelectorAll<HTMLButtonElement>("button[data-pos]")];
  // pozycja w adresie, np. ?pozycja=srodkowy — wybór zostaje po powrocie z profilu
  const slug = (s: string) =>
    s.toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  const select = (btn: HTMLButtonElement, animate: boolean) => {
    const pos = btn.dataset.pos ?? "";
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    const apply = () =>
      cards.forEach((c) => {
        const show = !pos || (c.dataset.pos ?? "").split("|").includes(pos);
        c.parentElement!.hidden = !show;
      });
    // Płynna zmiana siatki tam, gdzie się da
    // @ts-ignore
    if (animate && document.startViewTransition && !reduceMotion()) document.startViewTransition(apply);
    else apply();
    const url = new URL(location.href);
    if (pos) url.searchParams.set("pozycja", slug(pos));
    else url.searchParams.delete("pozycja");
    history.replaceState(history.state, "", url);
  };
  const fromUrl = new URL(location.href).searchParams.get("pozycja");
  const start = fromUrl && buttons.find((b) => b.dataset.pos && slug(b.dataset.pos) === fromUrl);
  if (start) select(start, false);
  bar.addEventListener("click", (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>("button[data-pos]");
    if (btn) select(btn, true);
  });
}

/* ── Posty z Facebooka — dopiero po kliknięciu (zgoda) ──────────── */
const FB_OK = "lks-fb-ok";
function fbAllowed() {
  try {
    return localStorage.getItem(FB_OK) === "1";
  } catch {
    return false;
  }
}
function fbRender(box: HTMLElement) {
  const slot = box.querySelector<HTMLElement>(".fb__slot");
  const href = box.dataset.href;
  if (!slot || !href) return;
  const w = Math.max(180, Math.min(500, Math.floor(slot.clientWidth || box.clientWidth || 500)));
  const h = parseInt(box.dataset.height ?? "", 10) || 720;
  const locale = document.documentElement.lang === "en" ? "en_GB" : "pl_PL";
  const frame = document.createElement("iframe");
  frame.className = "fb__frame";
  frame.src =
    "https://www.facebook.com/plugins/page.php?href=" +
    encodeURIComponent(href) +
    `&tabs=timeline&width=${w}&height=${h}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&locale=${locale}`;
  frame.width = String(w);
  frame.height = String(h);
  frame.title = box.dataset.title ?? "Facebook";
  frame.style.width = w + "px";
  frame.style.height = h + "px";
  frame.loading = "lazy";
  frame.setAttribute("allow", "encrypted-media; clipboard-write; picture-in-picture; web-share");
  slot.replaceWith(frame);
}
function initFacebook() {
  const boxes = document.querySelectorAll<HTMLElement>(".fb");
  if (!boxes.length) return;
  if (fbAllowed()) {
    boxes.forEach(fbRender);
    return;
  }
  boxes.forEach((box) =>
    box.querySelector(".fb__btn")?.addEventListener("click", () => {
      try {
        localStorage.setItem(FB_OK, "1");
      } catch {
        /* tryb prywatny */
      }
      document.querySelectorAll<HTMLElement>(".fb").forEach(fbRender);
    }),
  );
}

/* ── Nagłówek: cień po przewinięciu ────────────────────────────── */
function initHeader() {
  const hdr = document.querySelector<HTMLElement>("[data-hdr]");
  if (!hdr) return;
  const onScroll = () => hdr.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ── Karta meczu: odliczanie i chowanie po meczu ─────────────── */
function initMatch() {
  const now = Date.now();
  document.querySelectorAll<HTMLElement>(".mcard[data-koniec]").forEach((card) => {
    const koniec = Number(card.dataset.koniec);
    const start = Number(card.dataset.start);
    if (now > koniec) {
      // Mecz się skończył — chowamy kartę (na starcie pokazujemy link do terminarza)
      const wrap = card.closest<HTMLElement>(".news-home__match");
      if (wrap) {
        wrap.hidden = true;
        document.querySelector<HTMLElement>("[data-po-meczu]")?.removeAttribute("hidden");
      }
      return;
    }
    const out = card.querySelector<HTMLElement>("[data-odliczanie]");
    if (!out) return;
    const pl = document.documentElement.lang !== "en";
    const tick = () => {
      const ms = start - Date.now();
      if (ms <= 0) {
        out.textContent = pl ? "Trwa mecz" : "Game in progress";
      } else {
        const d = Math.floor(ms / 86400000);
        const h = Math.floor((ms % 86400000) / 3600000);
        const m = Math.floor((ms % 3600000) / 60000);
        const dni = pl ? (d === 1 ? "dzień" : "dni") : d === 1 ? "day" : "days";
        out.textContent =
          (pl ? "Do meczu: " : "Tip-off in: ") + (d ? `${d} ${dni} ` : "") + (pl ? `${h} godz. ${m} min` : `${h} h ${m} min`);
      }
      out.hidden = false;
    };
    tick();
    window.setInterval(tick, 30000);
  });
}

/* ── Przesuwanie palcem między zawodnikami (strona zawodnika) ── */
function initSwipe() {
  const pp = document.querySelector<HTMLElement>("[data-swipe]");
  if (!pp) return;
  const prev = pp.dataset.prev;
  const next = pp.dataset.next;
  let x0 = 0, y0 = 0, t0 = 0, dx = 0, active = false, horizontal: boolean | null = null;
  const area = document.querySelector("main") ?? document.body;

  area.addEventListener("touchstart", (e) => {
    const te = e as TouchEvent;
    if (te.touches.length !== 1) return;
    x0 = te.touches[0].clientX; y0 = te.touches[0].clientY; t0 = Date.now();
    dx = 0; active = true; horizontal = null;
  }, { passive: true });

  area.addEventListener("touchmove", (e) => {
    if (!active) return;
    const te = e as TouchEvent;
    dx = te.touches[0].clientX - x0;
    const dy = te.touches[0].clientY - y0;
    if (horizontal === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) horizontal = Math.abs(dx) > Math.abs(dy) * 1.5;
    if (!horizontal || reduceMotion()) return;
    pp.classList.add("is-swiping");
    pp.style.setProperty("--sx", `${dx * 0.5}px`);
    pp.style.setProperty("--so", String(Math.max(0.3, 1 - Math.abs(dx) / 500)));
  }, { passive: true });

  const reset = () => {
    pp.classList.remove("is-swiping", "is-leaving");
    pp.style.removeProperty("--sx");
    pp.style.removeProperty("--so");
  };

  area.addEventListener("touchend", () => {
    if (!active) return;
    active = false;
    const fast = Date.now() - t0 < 700;
    const target = dx < 0 ? next : prev;
    if (horizontal && Math.abs(dx) > 70 && fast && target) {
      pp.classList.add("is-leaving");
      pp.style.setProperty("--sx", `${dx < 0 ? -120 : 120}px`);
      pp.style.setProperty("--so", "0");
      window.setTimeout(() => (location.href = target), reduceMotion() ? 0 : 160);
    } else {
      pp.classList.add("is-leaving");
      pp.style.setProperty("--sx", "0px");
      pp.style.setProperty("--so", "1");
      window.setTimeout(reset, 230);
    }
  });
  window.addEventListener("pageshow", reset);
}

initTheme();
initMatch();
initSwipe();
initMenu();
initReveal();
initTilt();
initBolt();
initFilter();
initFacebook();
initHeader();

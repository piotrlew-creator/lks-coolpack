"""
Obrazki podglądu linku (Open Graph, 1200×630) dla każdego zawodnika
i dla strony głównej. Wynik: public/og/zawodnicy/<slug>.jpg i public/og-image.jpg.

Uruchomienie (z folderu projektu):  python narzedzia/og_zawodnicy.py
Wymaga: Python 3 + Pillow (pip install pillow pyyaml).
"""
import re, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
FONT = ROOT / "narzedzia" / "fonty"
OUT = ROOT / "public" / "og" / "zawodnicy"
W, H = 1200, 630
RED = (212, 4, 20)
RED_L = (255, 75, 75)
CREAM = (244, 240, 234)

def font(w, size):
    return ImageFont.truetype(str(FONT / f"BarlowCondensed-{w}.ttf"), size)

def frontmatter(path):
    txt = path.read_text(encoding="utf-8").split("---")[1]
    get = lambda k: (re.search(rf'^{k}:\s*"?([^"\n#]*)"?', txt, re.M) or [None, ""])[1].strip()
    poz = re.search(r"^pozycje:\s*\[(.*)\]", txt, re.M)
    return {
        "imie": get("imie"), "nazwisko": get("nazwisko"), "numer": get("numer"),
        "pozycje": " / ".join(x.strip().strip('"') for x in poz.group(1).split(",")) if poz else "",
        "zdjecie": get("zdjecie"),
    }

def background():
    bg = Image.new("RGB", (W, H), (14, 12, 9))
    glow = Image.new("RGB", (W, H), (0, 0, 0))
    d = ImageDraw.Draw(glow)
    d.ellipse((520, -320, 1500, 520), fill=(90, 8, 16))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    return Image.blend(bg, glow, 0.9)

def herb(size):
    h = Image.open(ROOT / "src/assets/logo/herb-bialy.png").convert("RGBA")
    return h.resize((size, size), Image.LANCZOS)

def fit(draw, text, w, start, maxw):
    size = start
    while size > 30 and draw.textlength(text, font=font(w, size)) > maxw:
        size -= 4
    return font(w, size)

def player_card(slug, d):
    im = background()
    photo = (ROOT / "src/content/zawodnicy" / d["zdjecie"]).resolve()
    if photo.exists():
        p = Image.open(photo).convert("RGB")
        ph = H
        pw = int(p.width * ph / p.height)
        p = p.resize((pw, ph), Image.LANCZOS)
        # miękka lewa krawędź zdjęcia
        mask = Image.new("L", (pw, ph), 255)
        md = ImageDraw.Draw(mask)
        for x in range(160):
            md.line([(x, 0), (x, ph)], fill=int(255 * x / 160))
        # dolna krawędź: łagodne przejście w tło
        bottom = Image.new("L", (pw, ph), 255)
        bd = ImageDraw.Draw(bottom)
        for y in range(140):
            bd.line([(0, ph - 1 - y), (pw, ph - 1 - y)], fill=int(255 * y / 140))
        from PIL import ImageChops
        mask = ImageChops.multiply(mask, bottom)
        im.paste(p, (W - pw, 0), mask)
    d2 = ImageDraw.Draw(im)
    # wielki numer
    d2.text((40, -30), d["numer"], font=font("800", 330), fill=(60, 10, 14))
    # pasek u góry
    d2.rectangle((60, 70, 120, 76), fill=RED)
    d2.text((134, 56), "ŁKS COOLPACK ŁÓDŹ · 1. LIGA", font=font("700", 30), fill=RED_L)
    # numer i pozycja
    num = f"#{d['numer']}"
    nf = font("800", 46)
    tw = d2.textlength(num, font=nf)
    d2.rounded_rectangle((60, 300, 60 + tw + 28, 360), radius=10, fill=RED)
    d2.text((74, 303), num, font=nf, fill="white")
    d2.text((60 + tw + 46, 309), d["pozycje"].upper(), font=fit(d2, d["pozycje"].upper(), "700", 38, 560 - tw), fill=CREAM)
    # imię i nazwisko
    d2.text((60, 380), d["imie"].upper(), font=font("700", 58), fill=(221, 212, 202))
    d2.text((56, 432), d["nazwisko"].upper(), font=fit(d2, d["nazwisko"].upper(), "800", 136, 640), fill="white")
    # herb
    im.paste(herb(84), (60, 120), herb(84))
    return im

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for md in sorted((ROOT / "src/content/zawodnicy").glob("*.md")):
        d = frontmatter(md)
        if not d["zdjecie"]:
            continue
        player_card(md.stem, d).save(OUT / f"{md.stem}.jpg", quality=85, optimize=True, progressive=True)
        print("OK", md.stem)
    # strona główna: zdjęcie drużyny + tytuł
    team = Image.open(ROOT / "src/assets/start/hero-dark.jpg").convert("RGB")
    tw = W; th = int(team.height * W / team.width)
    team = team.resize((tw, th), Image.LANCZOS)
    im = Image.new("RGB", (W, H), (14, 12, 9))
    im.paste(team, (0, H - th + 40))
    shade = Image.new("L", (W, H), 0)
    sd = ImageDraw.Draw(shade)
    for y in range(260):
        sd.line([(0, y), (W, y)], fill=int(235 * (1 - y / 260)))
    im.paste((14, 12, 9), (0, 0, W, H), shade)
    d = ImageDraw.Draw(im)
    d.text((150, 22), "ŁKS", font=font("800", 110), fill="white")
    d.text((356, 52), "COOLPACK ŁÓDŹ", font=font("800", 76), fill=RED_L)
    d.text((152, 140), "1. LIGA KOSZYKÓWKI MĘŻCZYZN", font=font("700", 30), fill=CREAM)
    im.paste(herb(110), (24, 24), herb(110))
    im.save(ROOT / "public" / "og-image.jpg", quality=85, optimize=True, progressive=True)
    print("OK og-image.jpg")

if __name__ == "__main__":
    main()

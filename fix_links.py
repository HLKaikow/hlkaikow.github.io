from pathlib import Path
import re
from urllib.parse import urlparse, unquote

BASE = "/standards-site/"

ATTRS = ["href", "src", "action"]

def fix_url(url, current_file):
    url = url.strip()

    if (
        not url
        or url.startswith("#")
        or url.startswith("mailto:")
        or url.startswith("javascript:")
        or url.startswith("tel:")
        or url.startswith("data:")
    ):
        return url

    url = url.replace("http://www.standards.com/", "")
    url = url.replace("https://www.standards.com/", "")
    url = url.replace("http://standards.com/", "")
    url = url.replace("https://standards.com/", "")

    if url.startswith("https://lisajoypezz.github.io/standards-site/"):
        url = url.replace("https://lisajoypezz.github.io/standards-site/", "")

    if url.startswith("https://lisajoypezz.github.io/"):
        url = url.replace("https://lisajoypezz.github.io/", "")

    if url.startswith("/standards-site/"):
        url = url[len("/standards-site/"):]

    if url.startswith("/"):
        url = url[1:]

    url = url.replace("indexmain.html", "index.html")

    current_dir = current_file.parent
    resolved = (current_dir / unquote(url)).as_posix()

    if resolved.startswith("./"):
        resolved = resolved[2:]

    while resolved.startswith("../"):
        resolved = resolved[3:]

    return BASE + resolved

for file in Path(".").rglob("*.html"):
    text = file.read_text(errors="ignore")

    for attr in ATTRS:
        pattern = rf'{attr}="([^"]*)"'
        text = re.sub(
            pattern,
            lambda m: f'{attr}="{fix_url(m.group(1), file)}"',
            text
        )

    file.write_text(text)

print("Done fixing links.")

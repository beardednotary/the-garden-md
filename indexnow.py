#!/usr/bin/env python3
"""
IndexNow submitter for GardenMD.

Notifies IndexNow-enabled search engines (Bing, Yandex, Seznam, etc.) that pages
have been added or updated so they get crawled sooner. Google does NOT use
IndexNow, but this is a big lever for Bing and everything that rides on its index
(Bing itself, DuckDuckGo, Yahoo, Ecosia).

Usage:
    python indexnow.py                # submit every URL in the live sitemap
    python indexnow.py <url> [<url>]  # submit only the specific URL(s) given
    python indexnow.py --sitemap --dry-run   # show what would be sent, send nothing

Requires only the Python standard library (no pip installs).
"""

import json
import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

# ---- Config -----------------------------------------------------------------
HOST = "thegardenmd.com"                      # matches siteUrl in lib/content.ts
KEY = "72550a21b53c4cf1aa5f8b59b133c244"       # IndexNow key, served from public/
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"     # must return exactly the key above
SITEMAP_URL = f"https://{HOST}/sitemap.xml"
ENDPOINT = "https://api.indexnow.org/indexnow"  # shared endpoint; fans out to engines
TIMEOUT = 30
UA = "GardenMD-IndexNow/1.0 (+https://thegardenmd.com)"
# -----------------------------------------------------------------------------


def get_sitemap_urls(url=SITEMAP_URL):
    """Return every <loc> URL from the live sitemap."""
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Encoding": "identity"})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        data = resp.read()
    root = ET.fromstring(data)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text.strip() for loc in root.findall(".//sm:loc", ns) if loc.text]
    return urls


def clean(urls):
    """Drop anything that isn't a valid URL on OUR host."""
    good, bad = [], []
    for u in urls:
        u = u.strip()
        if not u.startswith(f"https://{HOST}/") and u != f"https://{HOST}":
            bad.append(u)
            continue
        good.append(u)
    return good, bad


def submit(urls, dry_run=False):
    """POST the URL list to IndexNow. Returns the HTTP status code."""
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }

    print(f"\n  Endpoint : {ENDPOINT}")
    print(f"  Host     : {HOST}")
    print(f"  Key      : {KEY}")
    print(f"  URLs     : {len(urls)}")

    if dry_run:
        print("\n  DRY RUN - nothing sent. URLs that would be submitted:")
        for u in urls:
            print("    " + u)
        return None

    body = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT,
        data=body,
        method="POST",
        headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": UA},
    )
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            status = resp.status
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "replace").strip()
        print(f"\n  IndexNow error: HTTP {e.code} {e.reason} {detail}")
        explain(e.code)
        return e.code
    except urllib.error.URLError as e:
        print(f"\n  IndexNow network error: {e.reason}")
        return None

    meaning = {
        200: "OK - accepted",
        202: "Accepted - key validation pending",
    }.get(status, "")
    print(f"\n  IndexNow: HTTP {status} {meaning} - submitted {len(urls)} URL(s)")
    return status


def explain(code):
    tips = {
        400: "Bad request - malformed JSON or invalid URL in the list.",
        403: ("KEY NOT VALID. Check that\n"
              f"     {KEY_LOCATION} loads in a browser and returns ONLY the key text."),
        422: f"URLs don't belong to the host, or the key doesn't match. Check every URL starts with https://{HOST}/",
        429: "Too many requests - you're rate limited. Slow down.",
    }
    if code in tips:
        print("     " + tips[code])


def preflight():
    """Check the key file is live and correct BEFORE submitting."""
    print("=" * 74)
    print("PREFLIGHT: checking your key file")
    print("=" * 74)
    print(f"  Fetching {KEY_LOCATION}")
    try:
        req = urllib.request.Request(KEY_LOCATION, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=20) as r:
            body = r.read().decode("utf-8", "replace").strip()
            print(f"  HTTP {r.status}")
            print(f"  Body: {body!r}")
            if body == KEY:
                print("  Key file is correct.")
                return True
            print("  Body does NOT match the key.")
            return False
    except urllib.error.HTTPError as e:
        print(f"  HTTP {e.code} - key file not reachable.")
        print("     Make sure public/" + KEY + ".txt is deployed and live.")
        return False
    except Exception as e:  # noqa: BLE001
        print(f"  {type(e).__name__}: {e}")
        return False


def main():
    args = sys.argv[1:]
    dry = "--dry-run" in args
    args = [a for a in args if a != "--dry-run"]

    if not preflight():
        print("\n  Fix the key file first - submissions will 403 without it.\n")
        if not dry:
            sys.exit(1)

    if "--sitemap" in args or not args:
        print(f"\nFetching URLs from {SITEMAP_URL} ...")
        try:
            urls = get_sitemap_urls()
        except Exception as e:  # noqa: BLE001
            print(f"Could not read sitemap: {e}")
            sys.exit(1)
    else:
        urls = args

    good, bad = clean(urls)
    if bad:
        print(f"\n  Skipped {len(bad)} URL(s) not on https://{HOST}/:")
        for u in bad[:10]:
            print("     " + u)

    if not good:
        print("\n  Nothing valid to submit.")
        sys.exit(1)

    print(f"\nSubmitting {len(good)} URL(s) to IndexNow ...")
    submit(good, dry_run=dry)


if __name__ == "__main__":
    main()

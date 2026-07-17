---
sidebar_position: 2
title: Configure WP Full Picture
description: Exact WP Full Picture settings so SyteHero's consent gate works correctly — jurisdiction, GPC, and cookie registration.
---

# Configure WP Full Picture

SyteHero reads **WP Full Picture's** consent choices natively. When Full Picture is your active
consent tool, SyteHero detects it automatically — there's nothing to enable in SyteHero. This page
covers how to set up **Full Picture itself** so the consent gate behaves correctly, and how to
register SyteHero's cookies so a scanner doesn't delete them.

> These are the settings running live on a production site (Full Picture Pro 10.1.1). If you use a
> different consent tool, see [Privacy & Consent](./overview.md) — SyteHero also works with any CMP
> via a consent event/cookie, or the WP Consent API.

## How SyteHero uses Full Picture

SyteHero maps Full Picture's **Statistics** consent to its own **analytics** category:

| Full Picture category | SyteHero treats it as |
|---|---|
| Statistics | **analytics** — gates all SyteHero tracking |
| Personalisation | functional (not used to gate tracking) |
| Marketing / Advertisement | advertisement (not used to gate tracking) |

So: **SyteHero tracks a visitor only once they've granted _Statistics_ consent in Full Picture.**
A later change or withdrawal is honored. If Full Picture hasn't resolved a choice yet, SyteHero
stores and sends nothing (fail-closed).

## Recommended Full Picture settings

### Geolocation

**Analytics → Geolocation → "Cloudflare (for registered users)"** (`cf_default`). This uses a
same-origin `/cdn-cgi/trace` lookup — reliable, free, no third party, no rate limit. It's what
determines whether a visitor is in an opt-in (EU/EEA/UK) or opt-out region.

### Consent banner

Set the banner to **Manual mode** and configure:

| Setting | Value | Why |
|---|---|---|
| How should the banner work? | **Manual** | Gives you the country lists below. Avoid **Auto/strict** — see the note. |
| Which mode if geolocation fails? | **Opt-in** | Fail closed: an unknown visitor is treated as GDPR (nothing tracked until they accept). |
| Track after visitors agree | **In specific countries** → EU/EEA/UK + your opt-in list | These visitors see the banner and must Accept before anything is stored. |
| Track from the start but let visitors decline | **In all other countries** | Opt-out regions (e.g. US) are tracked by default; the banner offers a decline. |
| Privacy policy page | your policy page | Required for a compliant banner. |
| "Do not ask visitors for consent again" | **Off** | Leaving it on breaks GDPR re-consent. |

**Keep consent records on** (Full Picture → ConsentsDB). GDPR requires **producible** proof of
consent; this is that.

:::warning Don't use Auto/strict mode (Full Picture 10.1.1)
`auto_strict` sets the opt-out region to `US (CA)`, which needs a **region**, and no working
Full Picture geo method supplies one in 10.1.1 (the geo Worker and ipdata paths are dead code;
ipapi.co rate-limits). The result is that opt-out never matches and US visitors silently fall
back to opt-in. **Manual mode with a bare-country opt-out list (e.g. `US`) works** and is what's
verified in production. This is a Full Picture bug, not a SyteHero one.
:::

### Global Privacy Control (GPC)

Full Picture 10.1.1 does **not** honor GPC — **SyteHero honors it itself.** A visitor whose
browser sends Global Privacy Control has no SyteHero cookie set and no analytics recorded,
regardless of Full Picture's mode. You don't need to configure anything for this; it's automatic.

## Register SyteHero's cookies with Full Picture

Add SyteHero's cookies to Full Picture's cookie list under the **Statistics** category, so Full
Picture's scanner keeps them instead of auto-filing them into a denied bucket and deleting them.

| Cookie | Lifetime | Purpose | Category |
|---|---|---|---|
| `sytehero_vid` | 2 years | Anonymous first-party visitor id (a random UUID — no personal data) linking a visitor's touches for attribution | Statistics |
| `sytehero_hero_click` | 30 days | Records which hero slide was clicked, read at checkout for "via Hero" sales attribution | Statistics |

> An **undeclared cookie is the #1 cause of "attribution stopped working."** A CMP scanner that
> finds an unknown cookie files it as "other," and if that category is denied it deletes the
> cookie on every page load — silently killing attribution. Declaring these two cookies prevents
> that.

## Verify it works

Use a **real Chrome** browser with a normal user agent (a headless UA can trip internal-traffic
filters and look like a failure for the wrong reason).

1. **EU, no consent:** load a page from an EU IP (or force `loc=DE` via a `/cdn-cgi/trace`
   intercept). Full Picture shows its opt-in banner. Confirm **no `sytehero_vid` cookie** and **no
   `POST` to `/wp-json/sytehero/v1/touch`**.
2. **EU, after Accept:** click Accept in the banner → the beacon fires and `sytehero_vid` is set.
3. **US:** load from a US IP → tracked by default (opt-out).
4. **GPC:** enable Global Privacy Control in your browser → no cookie, no beacon, in every region.

There's a committed acceptance harness (`tests/e2e/consent-beacon.spec.mjs`) that automates this.

## Troubleshooting

- **EU consent stopped working after a Full Picture update.** Full Picture's consent internals
  (`fpdata.consents`, the `fp_privacyPreferencesChanged` event) are undocumented and can change
  between versions. If tracking stops for consented EU visitors after an FP update, that's the
  first place to look. SyteHero fails closed (no tracking) rather than tracking without consent.
- **Everything looks blocked.** Confirm you're testing with a real browser UA and that Full
  Picture's geolocation is set to the Cloudflare method.
- **Using a caching/CDN layer.** SyteHero's consent decision is made in the browser, so it's
  correct even on cached pages. If you also strip analytics server-side for GPC, make sure your
  cache varies on the `Sec-GPC` request so a cached page isn't served across GPC and non-GPC
  visitors.

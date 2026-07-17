---
sidebar_position: 1
title: Privacy & Consent
description: What SyteHero tracks, the cookies it sets, and how it honors consent, GPC, and jurisdiction.
---

# Privacy & Consent

SyteHero's analytics are **consent-forward**: nothing is stored or sent until the visitor's consent
and jurisdiction allow it. This page explains what SyteHero tracks, the cookies it sets, and how
consent is decided. If you use **WP Full Picture**, see [Configure WP Full Picture](./wp-full-picture.md)
for the exact settings.

## What SyteHero tracks

SyteHero's optional attribution features record, first-party:

- **Attribution touches** — referrer, landing path, and UTM/`?ref` parameters on page load, to
  connect a visit to a later order.
- **Impressions** — which hero slides were shown (aggregate counts, no personal data).
- **Hero clicks** — which hero slide a visitor clicked, read at checkout for "via Hero"
  attribution.

All three wait for consent.

## Cookies SyteHero sets

Register these with your consent tool so its scanner keeps them (an undeclared cookie is often
auto-deleted, which breaks attribution).

| Cookie | Lifetime | Purpose | Category |
|--------|----------|---------|----------|
| `sytehero_vid` | 2 years | Anonymous first-party visitor id (random UUID, no personal data) for multi-touch attribution | Statistics / Analytics |
| `sytehero_hero_click` | 30 days | Which hero slide was clicked, read at checkout for "via Hero" attribution | Statistics / Analytics |

## How consent is decided

For each visitor, SyteHero evaluates — in the browser, so it stays correct even on fully cached
pages:

1. **Global Privacy Control (GPC)** — if the browser signals GPC, SyteHero stores nothing and sends
   nothing. Always.
2. **Consent signal** — if your consent tool has granted analytics/statistics consent, tracking
   runs. If a consent tool is present but hasn't granted, SyteHero waits.
3. **Jurisdiction** (only when no consent signal is available):
   - **EU / EEA / UK** → opt-in: nothing stored or sent until consent.
   - **US / rest of world** → opt-out is acceptable: tracking runs unless GPC is set.

Suppressing tracking never breaks a purchase, coupon, or checkout — only the *tracking write* is
withheld.

## Which consent tools work

- **WP Full Picture** — supported **natively**. SyteHero detects it and reads its consent choices
  directly, no extra setup. See [Configure WP Full Picture](./wp-full-picture.md).
- **WP Consent API–compatible CMPs** — supported automatically via the WP Consent API bridge.
- **Any other CMP** — point SyteHero at your CMP's signal with one line of code: a filter sets the
  DOM event and/or a `window` function SyteHero should read (see the developer docs). Or have your
  CMP dispatch a `sytehero_consent_update` event with `detail.accepted` listing granted categories.

## Jurisdiction detail

When no consent tool is present, SyteHero determines opt-in vs opt-out from the visitor's country
(Cloudflare's `CF-IPCountry`, or a filter your site provides). EU/EEA/UK ⇒ opt-in; everywhere else
⇒ opt-out; unknown ⇒ opt-out (permissive baseline). This is resolved from an endpoint that stores
nothing.

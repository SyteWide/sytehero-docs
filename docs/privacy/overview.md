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
| `sytehero_hero_click` | 30 days | Which hero slide was clicked, read at checkout for "via Hero" attribution. On a headless site the frontend's browser kit writes it on the parent domain shared with WordPress, only after consent | Statistics / Analytics |

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

**When SyteOps Leads is on**, SyteHero follows SyteOps' consent setting (opt-out, opt-in or
geo-based), and in geo-based mode the visitor's opt-in or opt-out answer comes from SyteOps.
SyteHero's own country rule applies only without SyteOps Leads. SyteOps' setting defaults to
opt-out: if you never changed it, SyteHero no longer applies its EU/UK opt-in gate. Set SyteOps to
geo-based (or opt-in) to keep it. Until SyteOps v1.6.693, clear your page
cache after changing the consent setting in SyteOps.

Suppressing tracking never breaks a purchase, coupon, or checkout — only the *tracking write* is
withheld.

**At checkout.** The checkout itself also respects the visitor's choice. If their browser sends
Global Privacy Control, or your consent banner reports (through the WP Consent API) that they
declined statistics, SyteHero records nothing about that order: no "via Hero" flag, no revenue for
the hero slide, and no link between the order and the visitor's earlier visits. The hero-click
cookie is still removed, so it can't be applied to a later order. An affiliate coupon used on the
order still earns its commission, because that comes from the coupon, not from tracking.

## The license consent record

When you agree to the terms as you activate your license, SyteHero sends a consent record to the
SyteWide license service. Along with your choices it includes the address (IP) of the browser you
agreed from, so the record shows who agreed as well as which server it came from. That address is
sent as **reported and unverified**: your site reports it and the license service stores it as
reported. If your site is behind a proxy or CDN, list it in `SYTEHERO_TRUSTED_PROXY_IPS` so the
address recorded is yours and not the proxy's. If no valid address is available, none is sent.

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
nothing. With SyteOps Leads on and its setting geo-based, the answer comes from SyteOps instead, and SyteHero's
`sytehero_visitor_jurisdiction` filter is not consulted (use SyteOps'
`syteops_leads_visitor_jurisdiction`). The lookup is marked uncacheable for LiteSpeed page caches.

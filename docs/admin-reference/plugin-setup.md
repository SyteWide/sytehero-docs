---
sidebar_position: 1
title: Settings
description: Configure SyteHero plugin settings, theme, and ecommerce platform.
---

# Settings

**Location:** SyteHero → Settings (visible before and after license activation)

---

## License Activation

Enter your license key and customer email, then click **Save License**. Check the status table to confirm activation.

### Activation Required (v1.0.168)

A license unlocks only the sites it is activated for. On a site it is not activated for, SyteHero stays locked and the Settings page shows an **Activation Required** notice. Click **Save License** to activate this site with the key and email already saved; you don't need to type them again. If the license has no free activation, deactivate it on another site first.

- A site that was activated before under this same address tries to activate again by itself first (in its background check, or when you click **Refresh License Status**). A site whose address was never recorded doesn't: it locks at its first check after the update, and **Save License** activates it.
- A site that moved to a new address keeps working for 14 days while you move the license with `wp sytehero license move --from=<old address>`, then locks until the license is moved or activated there.
- SyteHero confirms the license at least every 15 days. After 14 days without a successful check, an administrator's next dashboard visit runs one (at most once an hour); after 15, features lock until a check succeeds.
- If the license server can't be reached, features keep working for up to 14 days after the last successful check.

## Deactivate

Toggle **Deactivate license on save** to unlock for a different site.

## Update Channel

- **Production** (default) — requires a valid license.
- **Beta/Development** — requires a GitHub token.

## Theme Selector

The theme selector tells SyteHero how to display hero text overlays and CTA buttons within your page builder. Shortcodes render regardless of which theme is selected — this setting only affects how overlays are positioned.

| Theme | Page Builder |
|-------|-------------|
| [**Avada**](/docs/themes/avada) | Fusion Builder |
| [**Divi**](/docs/themes/divi) | Divi Builder (4 and 5) |
| [**Elementor**](/docs/themes/elementor) | Elementor (Flexbox Containers) |

See the individual theme guides for step-by-step placement instructions.

## Slider Engine

Select which slider library SyteHero loads on the front end:

- **FlexSlider** — lightweight, jQuery-based. Available out of the box on Avada and Divi.
- **Swiper** — modern, CSS-driven with rich transition options (fade, cube, flip, slide).
- **Splide** — lightweight, dependency-free, accessible.

SyteHero bundles all three engines, so no extra plugin is required. The **Engine Settings** panel below the selector exposes per-engine options (smooth height, easing, pagination style, transition direction). Defaults are sensible — open the panel only when tuning a specific behavior.

See [Slider Engines](/docs/features/slider-engines) for the full per-engine reference.

## Ecommerce Selector

The ecommerce selector tells SyteHero which product catalog to use for featured product sliders, sales scheduling, and reporting.

| Platform | Description |
|----------|-------------|
| [**WooCommerce**](/docs/ecommerce/woocommerce) | Native sale price sync, full order tracking, Shippo integration |
| [**FluentCart**](/docs/ecommerce/fluentcart) | SyteHero manages sale pricing and tagging automatically |

See the individual platform guides for details on how each integration works.

## Detection Helpers

**Detect Theme** and **Detect eCommerce Plugin** auto-select supported integrations based on your active theme and plugins. Use these buttons if you're unsure which option to choose.

## Debug Logging

Toggle file-based logging for diagnostics. The panel shows the log file path.

## Cache Controls

- **Purge Admin CSS/JS** — clears cached admin assets.
- **Clear Plugin Update Cache** — forces a fresh update check.

## LiteSpeed Cache

When the LiteSpeed Cache plugin is active, an additional toggle appears:

- **Clear LiteSpeed Cache automatically** — When enabled, SyteHero purges the LiteSpeed cache whenever a schedule goes live or expires. This ensures visitors see updated prices and slides immediately.

This toggle only appears if LiteSpeed Cache is installed and active on your site.

## Access Requirement

Requires the `manage_options` capability (WordPress Administrators).

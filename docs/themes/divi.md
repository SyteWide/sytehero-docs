---
sidebar_position: 2
title: Divi
description: How to set up SyteSlyders with the Divi theme and Divi Builder.
---

# Divi Configuration

Divi with Divi Builder is fully supported by SyteSlyders, including both Divi 4 and Divi 5. This guide walks you through placing hero sliders and setting up text overlays.

## Selecting Divi

1. Go to **SyteSlyders > Plugin Setup**.
2. Under **Theme Selector**, choose **Divi** from the dropdown.
3. Click **Save Changes**.

Alternatively, click **Detect Theme** to have SyteSlyders identify your active theme automatically.

## Placing the Shortcode

To add a hero slider to a page using Divi Builder:

1. Edit the page in Divi Builder (Visual or Classic).
2. Add a **Row** where you want the slider to appear.
3. Inside the row, add a **Text** module.
4. Paste the shortcode: `[slyders_featured_hero]`
5. Below the shortcode module, add your hero text and CTA button modules in the same column.
6. Save the page.

The slider will fill the column width. Use the `height` and `min_height` shortcode attributes to control the slider dimensions, or set defaults in **Settings > Default Shortcode**.

## Setting Up Hero Text Overlays

SyteSlyders injects dynamic text into your page builder elements using CSS class names. Add these classes to your Divi modules:

### Text Areas

1. Add a **Text** module below the slider shortcode.
2. In the module's **Advanced** tab, add the CSS class `slyders-hero-text-area-1` to use it as the primary headline.
3. For a secondary tagline, add another Text module with the class `slyders-hero-text-area-2`.

### CTA Button

1. Add a **Button** module in the same column.
2. In the module's **Advanced** tab, add the CSS class `slyders-hero-cta`.
3. SyteSlyders will automatically update the button text and link on each slide transition. No additional configuration is needed — Divi's button text is handled automatically.

## Divi 4 and Divi 5

SyteSlyders works with both Divi 4 and Divi 5. The same configuration steps apply to both versions — no changes are needed when upgrading.

## Slider Engines

Divi includes FlexSlider, so it is available out of the box. You can also choose **Swiper** or **Splide** in **Plugin Setup > Slider Engine** for additional animation options and modern performance.

## Responsive Layouts

Divi Builder has built-in visibility settings for modules and rows (show/hide on desktop, tablet, phone). You can combine these with SyteSlyders' view-locked shortcodes for full responsive control:

- `[slyders_featured_hero_desktop]` — renders only on desktop
- `[slyders_featured_hero_tablet]` — renders only on tablet
- `[slyders_featured_hero_mobile]` — renders only on mobile

This lets you create separate hero sections with different heights or layouts per device.

## Next Steps

- [Featured Products](/docs/features/featured-products) — manage which products appear in the slider
- [Hero Text & Overlays](/docs/features/hero-text) — customize text, glow effects, and per-device controls
- [Shortcodes](/docs/features/shortcodes) — full attribute reference
- [Custom CSS](/docs/features/custom-css) — per-device styling

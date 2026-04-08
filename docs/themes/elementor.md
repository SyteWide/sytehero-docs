---
sidebar_position: 3
title: Elementor
description: How to set up SyteHero with Elementor and Flexbox Containers.
---

# Elementor Configuration

Elementor with Flexbox Containers is fully supported by SyteHero. This guide walks you through placing hero sliders and setting up text overlays.

## Selecting Elementor

1. Go to **SyteHero > Settings**.
2. Under **Theme Selector**, choose **Elementor** from the dropdown.
3. Click **Save Changes**.

Alternatively, click **Detect Theme** to have SyteHero identify your active theme automatically.

## Placing the Shortcode

To add a hero slider to a page using Elementor:

1. Edit the page in Elementor.
2. Add a **Container** where you want the slider to appear.
3. Inside the container, drag in a **Shortcode** widget.
4. Paste the shortcode: `[sytehero_featured]`
5. Below the shortcode widget, add your hero text and CTA button widgets in the same container.
6. Save the page.

The slider will fill the container width. Use the `height` and `min_height` shortcode attributes to control the slider dimensions, or set defaults in **Settings > Default Shortcode**.

:::note
SyteHero requires Elementor's **Flexbox Containers** (the current default layout mode). If you are using the legacy Section/Column layout, results may vary.
:::

## Setting Up Hero Text Overlays

SyteHero injects dynamic text into your page builder elements using CSS class names. Add these classes to your Elementor widgets:

### Text Areas

1. Add a **Heading** widget below the slider shortcode.
2. In the widget's **Advanced** tab, add the CSS class `sytehero-hero-text-area-1` to use it as the primary headline.
3. For a secondary tagline, add another Heading widget with the class `sytehero-hero-text-area-2`.

### CTA Button

1. Add a **Button** widget in the same container.
2. In the widget's **Advanced** tab, add the CSS class `sytehero-hero-cta`.
3. SyteHero will automatically update the button text and link on each slide transition.

## Slider Engines

Unlike Avada and Divi, Elementor does not bundle a slider library. SyteHero provides all three slider engines independently:

- **FlexSlider** — lightweight, jQuery-based
- **Swiper** — modern, CSS-driven with rich animations (cube, flip, fade, slide)
- **Splide** — lightweight, dependency-free, accessible

Choose your engine in **Settings > Slider Engine**. No additional installation is required — SyteHero handles everything.

## Responsive Layouts

Elementor offers built-in responsive visibility controls for containers and widgets (show/hide on desktop, tablet, mobile). You can combine these with SyteHero' view-locked shortcodes for full responsive control:

- `[sytehero_featured_desktop]` — renders only on desktop
- `[sytehero_featured_tablet]` — renders only on tablet
- `[sytehero_featured_mobile]` — renders only on mobile

This lets you create separate hero sections with different heights or layouts per device.

## Next Steps

- [Featured Products](/docs/features/featured-products) — manage which products appear in the slider
- [Hero Text & Overlays](/docs/features/hero-text) — customize text, glow effects, and per-device controls
- [Shortcodes](/docs/features/shortcodes) — full attribute reference
- [Custom CSS](/docs/features/custom-css) — per-device styling

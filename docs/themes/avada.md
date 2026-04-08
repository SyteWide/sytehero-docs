---
sidebar_position: 1
title: Avada
description: How to set up SyteHero with the Avada theme and Fusion Builder.
---

# Avada Configuration

Avada with Fusion Builder is fully supported by SyteHero. This guide walks you through placing hero sliders, setting up text overlays, and handling common layout scenarios.

## Selecting Avada

1. Go to **SyteHero > Settings**.
2. Under **Theme Selector**, choose **Avada** from the dropdown.
3. Click **Save Changes**.

Alternatively, click **Detect Theme** to have SyteHero identify your active theme automatically.

## Placing the Shortcode

To add a hero slider to a page using Fusion Builder:

1. Edit the page in Fusion Builder.
2. Add a **Column** (or use an existing one) where you want the slider to appear.
3. Inside the column, add a **Text Block** element.
4. Paste the shortcode: `[sytehero_featured]`
5. Below the shortcode element, add your hero text and CTA button elements in the same column.
6. Save the page.

The slider will fill the column width. Use the `height` and `min_height` shortcode attributes to control the slider dimensions, or set defaults in **Settings > Default Shortcode**.

## Setting Up Hero Text Overlays

SyteHero injects dynamic text into your page builder elements using CSS class names. Add these classes to your Fusion Builder elements:

### Text Areas

1. Add a **Text Block** element below the slider shortcode.
2. In the element settings, add the CSS class `sytehero-hero-text-area-1` to use it as the primary headline.
3. For a secondary tagline, add another Text Block with the class `sytehero-hero-text-area-2`.

### CTA Button

1. Add a **Button** element in the same column.
2. In the element settings, add the CSS class `sytehero-hero-cta`.
3. SyteHero will automatically update the button text and link on each slide transition.

## Slider Engines

Avada bundles FlexSlider, so it is available out of the box. You can also choose **Swiper** or **Splide** in **Settings > Slider Engine** for additional animation options (cube, flip) and modern performance.

## Layout Fix: Overlay Text at Bottom

If your hero text overlays appear at the bottom of the column instead of centered, add the following CSS in **SyteHero > Custom CSS > Global CSS**:

```css
.fusion-column-wrapper:has(.sytehero-fhsbg) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
}
```

Replace `500px` with the desired minimum height for your hero section.

## Responsive Layouts

Fusion Builder offers built-in visibility controls for columns (show/hide on desktop, tablet, mobile). You can combine these with SyteHero' view-locked shortcodes for full responsive control:

- `[sytehero_featured_desktop]` — renders only on desktop
- `[sytehero_featured_tablet]` — renders only on tablet
- `[sytehero_featured_mobile]` — renders only on mobile

This lets you create separate hero sections with different heights or layouts per device.

## Next Steps

- [Featured Products](/docs/features/featured-products) — manage which products appear in the slider
- [Hero Text & Overlays](/docs/features/hero-text) — customize text, glow effects, and per-device controls
- [Shortcodes](/docs/features/shortcodes) — full attribute reference
- [Custom CSS](/docs/features/custom-css) — per-device styling

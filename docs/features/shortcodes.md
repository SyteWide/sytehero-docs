---
sidebar_position: 7
title: Shortcodes
description: Use SyteSlyders shortcodes to embed sliders and banners on any page.
---

# Shortcodes

SyteSlyders provides shortcodes that let you place hero sliders anywhere on your site -- in pages, posts, Avada layouts, or any area that supports WordPress shortcodes.

## Available Shortcodes

### Featured Hero

Displays the main slider built from your featured WooCommerce products.

```
[slyders_featured_hero]
```

#### View-Locked Variants

Show the featured hero only on a specific device size:

- **Desktop only:** `[slyders_featured_hero_desktop]`
- **Tablet only:** `[slyders_featured_hero_tablet]`
- **Mobile only:** `[slyders_featured_hero_mobile]`

### Custom Hero

Displays a standalone Custom Slyder (not tied to products). Replace `X` with the Custom Slyder's ID.

```
[slyders_custom_hero id="X"]
```

#### View-Locked Variants

- **Desktop only:** `[slyders_custom_hero_desktop id="X"]`
- **Tablet only:** `[slyders_custom_hero_tablet id="X"]`
- **Mobile only:** `[slyders_custom_hero_mobile id="X"]`

## Common Attributes

All shortcodes accept the following optional attributes to override global defaults:

| Attribute | Description | Example |
|---|---|---|
| `height` | Container height. Accepts any valid CSS value. | `height="65vh"` |
| `min_height` | Minimum container height. Prevents the slider from collapsing on short content. | `min_height="500px"` |
| `interval` | Time between slide transitions, in milliseconds. | `interval="7000"` |
| `glow` | Glow color applied to text and CTA elements. Accepts any valid CSS color. | `glow="#ff6b35"` |
| `pause_on_cta_hover` | Pause the slider when a visitor hovers over the CTA button. Set to `1` to enable. | `pause_on_cta_hover="1"` |
| `background_sliding` | When a visitor returns to the browser tab, the slider catches up to where it would have been. Set to `1` to enable. | `background_sliding="1"` |

### Example with Attributes

```
[slyders_featured_hero height="70vh" min_height="450px" interval="5000" glow="#ff6b35"]
```

## Placement Tips

### Position the Shortcode Before Overlay Content

Place the shortcode **before** your overlay content (CTA buttons, text elements) within the same Avada column or section. The shortcode renders the background slider, and your overlay elements sit on top of it.

```
[slyders_featured_hero]
<!-- Your CTA button and text elements go after the shortcode -->
```

### Use the CTA Class on Your Button

Give your CTA button element the class `.slyders-hero-cta` so the plugin can dynamically update its `href` attribute as slides change. This keeps the button linked to the currently displayed product.

### Use Text Area Classes on Overlay Elements

Add these classes to your overlay text elements so the plugin can update their content dynamically:

- `.slyders-hero-text-area-1` -- For the primary text line.
- `.slyders-hero-text-area-2` -- For the secondary text line.

When these classes are present, the plugin replaces the element's text content with the appropriate value (default text, random fallback, or per-product override) as slides transition.

### Combining View-Locked Shortcodes

You can use multiple view-locked shortcodes in the same section to show different configurations per device:

```
[slyders_featured_hero_desktop height="70vh" interval="7000"]
[slyders_featured_hero_tablet height="50vh" interval="5000"]
[slyders_featured_hero_mobile height="40vh" interval="4000"]
```

Each shortcode renders only on its target device size, giving you full control over the slider experience across breakpoints.

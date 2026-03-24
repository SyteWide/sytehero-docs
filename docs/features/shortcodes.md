---
sidebar_position: 7
title: Shortcodes
description: Use SyteSlyders shortcodes to embed sliders and banners on any page.
---

# Shortcodes

SyteSlyders provides shortcodes that let you place hero sliders anywhere on your site -- in pages, posts, page builder layouts, or any area that supports WordPress shortcodes.

## Available Shortcodes

### Featured Hero

Displays the main slider built from your featured products.

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
| `glow` | Glow color applied to text and CTA elements. Accepts any valid CSS color. | `glow="#ff6b35"` |
| `glow_enabled` | Enable or disable the glow effect. Set to `1` to enable, `0` to disable. | `glow_enabled="1"` |
| `pause_on_cta_hover` | Pause the slider when a visitor hovers over the CTA button. Set to `1` to enable. | `pause_on_cta_hover="1"` |
| `background_sliding` | When a visitor returns to the browser tab, the slider catches up to where it would have been. Set to `1` to enable. | `background_sliding="1"` |

Slide interval is configured per device view in **Settings > Default Shortcode** and cannot be overridden per-shortcode.

### Example with Attributes

```
[slyders_featured_hero height="70vh" min_height="450px" glow="#ff6b35"]
```

## Placement Tips

### Position the Shortcode Before Overlay Content

Place the shortcode **before** your overlay content (CTA buttons, text elements) within the same page builder column. The shortcode renders the background slider, and your overlay elements sit on top of it.

```
[slyders_featured_hero]
<!-- Your CTA button and text elements go after the shortcode -->
```

### Use the CTA Class on Your Button

Give your CTA button element the class `slyders-hero-cta` so the plugin can dynamically update its `href` attribute as slides change. This keeps the button linked to the currently displayed product.

### Use Text Area Classes on Overlay Elements

Add these classes to your overlay text elements so the plugin can update their content dynamically:

- `slyders-hero-text-area-1` -- For the primary text line.
- `slyders-hero-text-area-2` -- For the secondary text line.

When these classes are present, the plugin replaces the element's text content with the appropriate value (default text, random fallback, or per-product override) as slides transition.

### Combining View-Locked Shortcodes

You can use multiple view-locked shortcodes in the same section to show different configurations per device:

```
[slyders_featured_hero_desktop height="70vh"]
[slyders_featured_hero_tablet height="50vh"]
[slyders_featured_hero_mobile height="40vh"]
```

Each shortcode renders only on its target device size, giving you full control over the slider experience across breakpoints.

## Advanced Attributes

These attributes are available for more granular control. Most users won't need them -- the defaults from Settings work for typical setups.

### Visibility Toggles

| Attribute | Description | Default |
|---|---|---|
| `show_text_area_1` | Show or hide Text Area 1. `1` = show, `0` = hide. | From Settings |
| `show_text_area_2` | Show or hide Text Area 2. `1` = show, `0` = hide. | From Settings |
| `show_cta_button` | Show or hide the CTA button. `1` = show, `0` = hide. | From Settings |

### Static Text Overrides

| Attribute | Description | Default |
|---|---|---|
| `text_area_1` | Override Text Area 1 content with a fixed string. | (none) |
| `text_area_2` | Override Text Area 2 content with a fixed string. | (none) |
| `cta_button` | Override CTA button text with a fixed string. | (none) |

### Fade Controls

| Attribute | Description | Default |
|---|---|---|
| `fade_text_area_1` | Fade Text Area 1 during slide transitions. `1` = fade, `0` = instant. | From Settings |
| `fade_text_area_2` | Fade Text Area 2 during slide transitions. `1` = fade, `0` = instant. | From Settings |
| `fade_cta_button` | Fade the CTA button during slide transitions. `1` = fade, `0` = instant. | From Settings |

### Video Controls

| Attribute | Description | Default |
|---|---|---|
| `video_letterbox` | Use letterbox mode for video slides. `1` = letterbox, `0` = cover (may crop). | From Settings |
| `video_letterbox_color` | Background color for letterbox bars. Any valid CSS color. | (none) |

### Layout & Animation

| Attribute | Description | Default |
|---|---|---|
| `animation` | Slide transition type: `fade` or `slide`. | From Settings |
| `arrows` | Show navigation arrows. `1` = show, `0` = hide. | From Settings |
| `dots` | Show pagination dots. `1` = show, `0` = hide. | From Settings |
| `tag` | Product tag slug used to filter featured products. | `slyder-featured-image` |
| `class` | Additional CSS classes for the hero container. | `slyders-hero-featured` |
| `button_selector` | CSS selector for the CTA button element. | `slyders-hero-cta` |

### Fallback Container

Control what happens when no slides are active:

| Attribute | Description | Default |
|---|---|---|
| `inactive_container_enabled` | Enable fallback container behavior. `1` = enabled. | `1` |
| `inactive_container_selector` | CSS selector for a fallback element to show/hide. | (none) |
| `inactive_container_hide_class` | CSS class applied to the fallback element when slides are active. | `slyders-fallback-container` |

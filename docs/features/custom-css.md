---
sidebar_position: 6
title: Custom CSS
description: Add custom CSS per device view for fine-grained styling control.
---

# Custom CSS

Custom CSS gives you full control over the visual styling of your SyteSlyders elements. You can write CSS that applies globally or target specific device sizes for responsive fine-tuning.

## Accessing the Custom CSS Tab

Navigate to **SyteSlyders > Custom CSS** in your WordPress admin menu.

## CSS Sections

The Custom CSS tab is organized into five sections. Each section's CSS is injected only in the appropriate context.

### Global Custom CSS

Applies to all device sizes whenever the plugin is active. Use this for styles that should be consistent across desktop, tablet, and mobile.

### Glow CSS

Target the glow effect applied to CTA buttons and text areas. Use this section to customize glow color, intensity, blur radius, and other glow-related properties.

### Desktop CSS

Scoped to desktop viewports. Rules in this section are wrapped with the `.slyders-fhsbg--desktop` selector, so they only take effect on desktop screens.

### Tablet CSS

Scoped to tablet viewports. Rules in this section are wrapped with the `.slyders-fhsbg--tablet` selector.

### Mobile CSS

Scoped to mobile viewports. Rules in this section are wrapped with the `.slyders-fhsbg--mobile` selector.

## Wrapper-Level Override Classes

For broader layout overrides that target the entire hero container rather than individual elements inside it, use these wrapper classes:

- `.slyders-hero-featured--desktop`
- `.slyders-hero-featured--tablet`
- `.slyders-hero-featured--mobile`

These are useful for adjusting container height, padding, background behavior, or other properties that affect the hero section as a whole on a given device size.

## Combining with Other Features

Custom CSS works best when combined with the CSS classes exposed by other SyteSlyders features:

### Hero Text Classes

Style the text overlays and CTA buttons (see [Hero Text](hero-text) for the full list):

- `.slyders-hero-cta`, `.slyders-hero-cta--desktop`, `--tablet`, `--mobile`
- `.slyders-hero-text-area-1`, `.slyders-hero-text-area-1--desktop`, `--tablet`, `--mobile`
- `.slyders-hero-text-area-2`, `.slyders-hero-text-area-2--desktop`, `--tablet`, `--mobile`

### Custom Slyders Classes

Each Custom Slyder generates its own CSS classes, shown in the [Custom Slyders](custom-slyders) tab. Copy those classes and target them here.

## Tips

- Use the **Desktop/Tablet/Mobile** sections for responsive adjustments instead of writing your own media queries. The plugin handles the viewport scoping for you.
- The **Global** section is the right place for fonts, colors, and other styles that should be uniform across all devices.
- Changes take effect immediately after saving. If you use a caching plugin, you may need to clear the cache to see updates on the front end.

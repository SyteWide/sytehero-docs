---
sidebar_position: 2
title: Hero Text & Overlays
description: Customize text areas, glow effects, and CTA buttons on your hero slider.
---

# Hero Text

Hero Text controls the text overlays and call-to-action buttons that appear on top of the hero slider. You can set global defaults, per-product overrides, and fine-tune positioning for each device size.

## Where to Find Hero Text Settings

Hero text master defaults, random lines, and per-view overrides are managed via the **Set Defaults** modal on the **Slyders** tab. Click the **Set Defaults** button to open the modal. CSS class references for hero text elements are available in a collapsible reference section on the **Custom CSS** tab.

## The Three Text Elements

The hero overlay is built from three independent elements:

1. **Text Area 1** -- A primary text line (typically a headline or product name).
2. **Text Area 2** -- A secondary text line (typically a tagline or description).
3. **CTA Button** -- A call-to-action button linking to a product, page, or custom URL.

Each element is configured independently using the controls described below.

## Element Settings

Every text element offers the following options:

### Master Show/Hide Toggle

A global toggle that controls whether the element is displayed at all. When set to **OFF**, the element is hidden on every slide, regardless of any per-product overrides.

### Default Text

The text shown when no per-product override is set for a given slide. This is your site-wide fallback.

### Random Lines Fallback

Enter multiple lines of text (one per line). When no default text or per-product override is available, one line is chosen at random and displayed.

### Shuffle Fallback on Slide Change

When enabled, a new random line is picked each time the slider transitions to the next slide, keeping the overlay text fresh.

### Fade with Slides

When enabled, the text element fades in and out in sync with the slide transitions. When disabled, the text remains static while slides change behind it.

### Per-View Margin Top

Adjust the top margin of the element separately for each device size:

- **Desktop**
- **Tablet**
- **Mobile**

This lets you fine-tune vertical positioning so the text sits correctly on every screen size.

## Per-Product Overrides

You can override the default text on a product-by-product basis. There are two ways to do this:

1. **Product Editor:** Edit a product in WooCommerce and use the SyteSlyders metabox to enter custom text for Text Area 1, Text Area 2, and the CTA.
2. **Slyders Tab Inline Editor:** Go to **SyteSlyders > Slyders** and edit the text fields directly in each product's row.

When a per-product override is set, it takes priority over the default text and random lines fallback for that product's slide.

### Fallback Slide Hero Text

The fallback slide also supports per-device hero text overrides. Edit the hero text on the fallback slide panel, switch between Desktop/Tablet/Mobile views, then click **Save Hero Text** to stage your changes. Click **Save Changes** to persist them. All three device views are saved together.

Both the product metabox and the inline editor on the **Slyders** tab share the same desktop/tablet/mobile view stack. Each editor shows Desktop, Tablet, and Mobile tabs so you can set the mode, glow, margin, custom text, and CTA target independently per viewport. The **Save Hero Text** button appears above the view tabs so it is always reachable without scrolling. Changes in the inline editor and the product metabox are kept in sync automatically.

### Custom Text fields

When a field's mode is set to **Custom Text** (or **Custom CTA**), the text input appears immediately on page load — you do not need to re-select the option to reveal it. The current saved value is pre-filled.

> **Note:** The "Use Master Default" option in per-view dropdowns inherits the value from the master defaults configured in the Set Defaults modal.

### CTA button sizing on mobile

The CTA button renders at its natural intrinsic width on all device sizes and is centered within the hero column. It does not stretch to fill the full container width on mobile viewports.

## Glow Effect

A glow effect can be applied to any combination of the three text elements. Glow is configured in **SyteSlyders > Settings > Hero Layout**:

- Enable or disable glow for the **CTA Button**.
- Enable or disable glow for **Text Area 1**.
- Enable or disable glow for **Text Area 2**.

The glow color and intensity can be customized in the Custom CSS tab (see the [Custom CSS](custom-css) documentation).

## CSS Classes for Styling

These CSS classes are also listed in the collapsible reference section on the **Custom CSS** tab. Use them to target the hero text elements in your custom styles:

### CTA Button

- `.slyders-hero-cta` -- Base class (all views).
- `.slyders-hero-cta--desktop` -- Desktop only.
- `.slyders-hero-cta--tablet` -- Tablet only.
- `.slyders-hero-cta--mobile` -- Mobile only.

### Text Area 1

- `.slyders-hero-text-area-1` -- Base class (all views).
- `.slyders-hero-text-area-1--desktop` -- Desktop only.
- `.slyders-hero-text-area-1--tablet` -- Tablet only.
- `.slyders-hero-text-area-1--mobile` -- Mobile only.

### Text Area 2

- `.slyders-hero-text-area-2` -- Base class (all views).
- `.slyders-hero-text-area-2--desktop` -- Desktop only.
- `.slyders-hero-text-area-2--tablet` -- Tablet only.
- `.slyders-hero-text-area-2--mobile` -- Mobile only.

## Shortcode Support

Text fields (default text, random lines, and per-product overrides) accept WordPress shortcodes. Shortcodes are processed on the server before output, and the resulting content is stripped to plain text. This means you can use shortcodes that return dynamic values (like dates or product info), but complex HTML output will not be preserved.

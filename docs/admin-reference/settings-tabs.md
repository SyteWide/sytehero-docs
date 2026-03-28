---
sidebar_position: 2
title: Settings Tabs Reference
description: Complete reference for all SyteHero admin settings tabs.
---

# Admin Settings Reference

**Access:** SyteHero menu in WordPress admin. Requires a valid license to see all tabs.

---

## 9 Admin Tabs

### 1. Schedules/Sales

Create and manage sales schedules. Assign products/variations, set sale prices, choose date windows. Saving syncs prices with your ecommerce platform and can link banners. Enable/disable in Settings.

### 2. Heroes

Manage featured products: toggle featured status, set hero media, configure per-product hero text overrides, drag-and-drop hero ordering, supplemental slides, and fallback slide configuration. Features staged remove with Save Changes safety.
- **Set Defaults** button opens a modal for managing all hero text defaults: master enabled/text/fade, random lines, per-view overrides (Desktop/Tablet/Mobile) with mode, text override, and margin controls per field. "Save Defaults" persists hero text master and per-view override options. "Apply to Current" pushes resolved defaults to all existing slides server-side. "Reset to Defaults" restores baseline values. (Glow settings remain on the Settings tab.)

### 3. Banners

Configure promotional banners with date-based scheduling. Can be linked to sales schedules. Enable/disable in Settings.

### 4. Custom Heroes

Build standalone sliders with media, CTA, text areas, interval, and animation. Copy shortcode and CSS classes.

### Plugin Setup Configuration

In addition to license and theme settings, Plugin Setup includes:

- **Slider Engine** — Select the slider library (FlexSlider, Swiper, or Splide). See [Slider Engines](/docs/features/slider-engines).
- **Engine Settings** — Collapsible panels for per-engine configuration (smooth height, easing, pagination style, direction, etc.).

### 5. Settings

Configure the following options:

- **Shortcode defaults per view** (Desktop/Tablet/Mobile): height, min-height, glow
- **Slider behavior**: Background Sliding, Pause on CTA Hover
- **Hero layout**: height, min-height, glow color and apply-to toggles, transition type
- **No Active Slides Alert Email**: Primary/Tech/Marketing contacts, image URL, test email
- **Tab gating**: Enable or disable any admin tab (Schedules/Sales, Heroes, Banners, Custom Heroes, Settings, Integrations, Custom CSS, Backup, Documentation)

### 6. Integrations

Configure connections to external services. Currently includes Shippo for shipping and tracking data. See [Integrations](/docs/features/integrations) for setup details. Enable/disable in Settings.

### 7. Custom CSS

Global CSS, Glow CSS, and per-view CSS editors (Desktop/Tablet/Mobile). Includes a collapsible CSS class reference section for hero text element selectors.

### 8. Backup

Export all settings as JSON. Import from a previously exported file.

### 9. Documentation

The plugin README rendered in-admin for quick reference.

---

## Common Controls Across All Tabs

A collapsible **Troubleshooting** dropdown appears on every tab and contains:

- **Purge Admin CSS/JS** — clears cached admin stylesheets and scripts
- **Clear Plugin Update Cache** — forces a fresh check for plugin updates
- **Refresh WooCommerce & Page Inventory Cache** — rebuilds the product and page search caches
- **Purge Rotation Cache** — removes the current rotation cache so slides are reassembled on the next page load

Each form saves and returns you to the same tab.

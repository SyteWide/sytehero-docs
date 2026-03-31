---
sidebar_position: 2
title: Settings Tabs Reference
description: Complete reference for all SyteHero admin settings tabs.
---

# Admin Settings Reference

**Access:** SyteHero menu in WordPress admin. Requires a valid license to see all tabs.

---

## 10 Admin Tabs

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

### 5. Analytics

View slide performance metrics: impressions, clicks, and attributed revenue per slide. Three view modes (Cards, Dark Dashboard, Table) and a period selector (Last 7, 30, or 90 days). The fallback-only slide appears as **Fallback Slide** with the configured fallback title on a second line. Optional: **Exclude admin and editor views from analytics**, **Reset Statistics** (clears all stored analytics after confirmation), and a preview-only URL flag `?sytehero_notrack=1` (stops impression tracking for that browser tab session).

:::info Data retention
Analytics data older than 90 days is automatically pruned.
:::

### 6. Settings

Configure the following options:

- **Shortcode defaults per view** (Desktop/Tablet/Mobile): interval, height, min-height, glow
- **Slider behavior**: Background Sliding, Pause on CTA Hover
- **Hero layout**: height, min-height, glow color and apply-to toggles, transition type
- **No Active Slides Alert Email**: Primary/Tech/Marketing contacts, image URL, test email
- **Tab gating**: Enable or disable any admin tab (Schedules/Sales, Heroes, Banners, Custom Heroes, Analytics, Settings, Integrations, Custom CSS, Backup, Documentation)

### 7. Integrations

Configure connections to external services. Currently includes Shippo for shipping and tracking data. See [Integrations](/docs/features/integrations) for setup details. Enable/disable in Settings.

### 8. Custom CSS

Global CSS, Glow CSS, and per-view CSS editors (Desktop/Tablet/Mobile). Includes a collapsible CSS class reference section for hero text element selectors.

### 9. Backup

Export all settings as JSON. Import from a previously exported file.

### 10. Documentation

The plugin README rendered in-admin for quick reference.

---

## Common Controls Across All Tabs

A collapsible **Troubleshooting** dropdown appears on every tab and contains:

- **Purge Admin CSS/JS** — clears cached admin stylesheets and scripts
- **Clear Plugin Update Cache** — forces a fresh check for plugin updates
- **Refresh WooCommerce & Page Inventory Cache** — rebuilds the product and page search caches
- **Purge Rotation Cache** — removes the current rotation cache so slides are reassembled on the next page load

Each form saves and returns you to the same tab.

---

## Plugin Setup: Email Cron Status & Reset

The Plugin Setup page includes a diagnostics section showing the current state of email cron scheduling:

- **Periodic Cron** — Shows whether the hourly periodic summary cron is scheduled, its next run time, and the number of reports with periodic email enabled.
- **Digest Cron** — Shows whether the on-demand realtime digest cron is scheduled. This cron is created automatically when a sale arrives with digest batching enabled; "Idle" is normal when no digest is pending.
- **Reset Email Crons** — Clears all email cron events and reschedules based on current report settings. Use this if periodic or realtime sales summary emails are not sending.

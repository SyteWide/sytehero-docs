---
title: Changelog
description: Release history for SyteHero — new features, improvements, and fixes.
---

# Changelog

All notable user-facing changes to SyteHero are documented here.
Uses [Keep a Changelog](https://keepachangelog.com/) format with **Added** / **Changed** / **Fixed** / **Removed** buckets.

---

## v1.0.029 — 2026-04-01

### Fixed
- Video and iframe content now displays correctly in analytics hover preview when a slide uses video media

---

## v1.0.027 — 2026-04-01

### Added
- Persistent slide labels in the analytics dashboard — label your slides for easy identification
- Hover preview tooltip showing the slide image or video in analytics Card and Table views

---

## v1.0.026 — 2026-03-31

### Added
- "No-track" bookmark link in analytics settings for quickly toggling tracking on and off

---

## v1.0.025 — 2026-03-31

### Fixed
- Countdown timer now correctly respects tablet device visibility toggle

---

## v1.0.024 — 2026-03-31

### Added
- Analytics fallback labels for slides without explicit names
- Reset button for analytics data
- Option to exclude admin users from analytics tracking

### Fixed
- Hero rotation order now preserved when schedules add or remove slides

---

## v1.0.010 — 2026-03-30

### Added
- **Sale countdown timer overlay** — display a live countdown on hero slides tied to sale end dates, with configurable position (top strip or below CTA) and per-slide visibility toggles
- **Slide performance analytics dashboard** — track slide impressions with Card and Table views, date-range filtering, and a visual analytics tab in the admin

### Changed
- SyteWide branding applied to admin page header
- Analytics tab repositioned for better workflow

---

## v1.0.009 — 2026-03-30

### Fixed
- Email footer logo now renders at correct size with shared branding helper

---

## v1.0.007 — 2026-03-30

### Changed
- Updated to transparent PNG logos across admin and email branding

---

## v1.0.004 — 2026-03-30

### Fixed
- Email report cron scheduling now fires reliably
- Corrected shortcode tag names after rebrand

### Added
- Cron diagnostics in admin for troubleshooting scheduled emails

---

## v1.0.000 — 2026-03-28

### Added
SyteHero launches as the successor to SyteSlyders, carrying forward all features under a new name and unified codebase:

- **Featured product hero slider** with drag-and-drop ordering, per-slide scheduling, and pause controls
- **Hero text overlays** with per-view (desktop/tablet/mobile) customization, glow effects, and CTA buttons
- **Custom heroes** — add page, category, or custom URL slides alongside products
- **Sales scheduling** — start/end dates, retain-after-expiry, and banner sync
- **Banners** — rich-text announcement banners tied to sale schedules
- **Custom CSS** — cross-theme CSS editor scoped to hero wrappers
- **Shortcodes** — embed featured and custom sliders anywhere via shortcode
- **Slider engines** — choose between FlexSlider, Swiper, or Splide
- **Multi-theme support** — Avada, Divi, and Elementor integrations with theme-aware injection
- **Multi-ecommerce support** — works with both WooCommerce and FluentCart
- **Google Calendar integration** — two-way sync of sale schedules with Google Calendar
- **Shippo shipping integration** — tracking info and shipping label costs in sales summary emails
- **Sales summary reports** — periodic and real-time order notification emails with dark mode support
- **Backup & restore** — full settings export/import
- **License activation** — first-run setup with EULA consent and SyteWide license validation
- **Set Defaults modal** — configure master hero text defaults and push to individual slides
- **Admin preview** — responsive browser-style preview with desktop/tablet/mobile breakpoints
- **Documentation tab** — in-plugin docs with configurable demo video

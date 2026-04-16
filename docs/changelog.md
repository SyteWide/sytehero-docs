---
title: Changelog
description: Release history for SyteHero — new features, improvements, and fixes.
---

# Changelog

All notable user-facing changes to SyteHero are documented here.
Uses [Keep a Changelog](https://keepachangelog.com/) format with **Added** / **Changed** / **Fixed** / **Removed** buckets.

---

## v1.0.043 — 2026-04-15

### Fixed
- **Straico AI provider** — migrated from v1 API (which returned HTTP 522) to the OpenAI-compatible v2 API. Straico now uses the same request format as OpenAI and OpenRouter.
- **Straico model picker** — filters to chat models only, excluding image, video, and audio models from the text-provider dropdown.

### Changed
- **AI chat completion timeout** — increased from 30 seconds to 60 seconds to accommodate slower LLM providers and aggregator services.
- **OpenAI-format token limit** — requests now send both `max_completion_tokens` and `max_tokens` for broad compatibility with OpenAI-compatible providers.

---

## v1.0.042 — 2026-04-15

### Fixed
- **Admin-bar launcher reliability** — removed a hard script dependency (`media-editor`) that could silently prevent the launcher from loading, causing admin-bar AI Studio items to stop responding to clicks.
- **Modal media picker diagnostics** — media picker guards now log a visible console warning when `wp.media` is unavailable, replacing the previous silent no-op.

### Changed
- **Launcher script hardening** — script loader now tracks already-loaded assets to prevent duplicates, scopes click handling to the admin bar, and logs errors on script load failure.

---

## v1.0.041 — 2026-04-15

### Fixed
- **AI Studio admin-bar modals on every page** — Generate, Transform, Remove Background, Upscale, Extend to Fit, Image to Video, and AI Copy now work when launched from the admin bar on any admin page (Dashboard, Posts, Users, Plugins) or on the frontend for logged-in admins. Previously the modals opened but buttons inside were inert because their scripts didn't receive the full SyteHero config or the WordPress media picker.

### Changed
- **Admin-bar launcher moved to enqueued assets** — the launcher script and styles previously printed inline in each admin page now load from cacheable `sytehero-admin-bar-launcher.js` and `.css` files. No user-facing difference beyond slightly smaller page HTML.

---

## v1.0.040 — 2026-04-15

### Fixed
- **AI provider tokens-refresh button** — the refresh button next to **Max Tokens** on the AI Image provider card now syncs only the tokens value from the selected model. It no longer refetches the models list. If the models haven't been loaded yet, click **Refresh models** first.
- **Admin-bar AI modals** — modals launched from the top **SyteHero → AI Studio → [modal]** menu (AI Copy, BG Removal, Upscale, Outpaint, Image-to-Video) now render with the same styling as the AI Studio Generate modal. Previously, opening them outside the AI Studio page loaded only the base modal stylesheet, leaving drop zones and AI Copy-specific layout unstyled.

---

## v1.0.039 — 2026-04-15

### Changed
- **AI Copy modal styling** — reference tiles, inputs, suggestion chips, and status states now use the same dark modal surface styling as the other AI Studio modals.
- **Transform modal footer layout** — action groups now keep a cleaner responsive structure as space tightens, with more consistent button alignment across desktop and mobile.

---

## v1.0.038 — 2026-04-15

### Changed
- **Prompt Enhancement** — now routes through the shared AI text-provider system. Fal is registered as a text provider so existing Fal-only setups keep working without any extra configuration. Saved Fal API keys carry over automatically.

### Removed
- **Legacy AI image shims** — `sytehero_fal_*` AJAX action aliases, the `sytehero_fal_settings` option, and the `FalAiSettings` / `get_fal_service` transitional helpers from the v1.0.036 AI provider refactor have been removed. Any integrations still calling the old names must update to `sytehero_ai_image_*`.

---

## v1.0.037 — 2026-04-15

### Changed
- **AI Studio — Integrations tab** — AI image providers now render as separate card-style blocks with a shared save flow, making multi-provider configuration faster and less error-prone. Per-provider connection testing is preserved.
- **Documentation** — Integrations docs updated to describe the refreshed card layout and shared save workflow.

---

## v1.0.036 — 2026-04-15

### Changed
- **AI Studio** — Fal AI is now implemented as the first adapter in a pluggable AI image/media provider system. Each capability (Generate, Transform, Remove BG, Upscale, Extend to Fit, Image-to-Video) can be independently routed to different providers. Existing Fal API key and settings migrate automatically on upgrade.
- **Prompt Enhancement** — now available as a function area on the Integrations tab; when configured with a text provider (Claude, OpenAI, etc.) prompts are enhanced via that provider instead of Fal's built-in model.

---

## v1.0.035 — 2026-04-09

### Changed
- **FluentCart detection** — recognizes FluentCart and FluentCart Pro using broader class and constant signals when WooCommerce is not installed

### Fixed
- **Plugin activation** — no longer fatals when the ecommerce gateway is unavailable; featured-tag setup runs when the store is ready

---

## v1.0.034 — 2026-04-09

### Added
- **Integrations refresh** — refresh actions for the AI model list and max-tokens fields on the Integrations card

### Changed
- **AI Providers card** — three-column layout, Browse Models links, clearer dropdowns, and visual polish
- **Maintenance** — uninstall cleanup, FluentCart-related fixes, and modularization from the comprehensive review

### Fixed
- **Fal balance capture** — fast models record post-generation balance and cost data more reliably
- **AI integrations** — Straico and Gemini model loading, integrations refresh behavior, badge contrast, and max-tokens synchronization

---

## v1.0.033 — 2026-04-08

### Added
- **AI Studio modal** — new dark-themed modal for text-to-image and image-to-image generation, accessible from any admin page
- **Admin bar launcher** — a ✨ icon in the WordPress admin bar opens the AI Studio modal from any admin screen without navigating to the AI Studio page
- **AI media manager** — dedicated AI Media tab to browse and delete AI-generated images, with usage detection to protect in-use assets

### Removed
- **Unused Media Scanner** — AI Studio's Tools tab and all underlying scan/delete/export functionality has been removed.

### Changed
- **Admin background** — Plugin admin pages now use a neutral slate-gray page canvas (#f8fafc) so white cards visually lift off the background.

### Fixed
- **Countdown modal save** — Clicking "Save Settings" in the countdown modal now immediately persists settings via AJAX. A second manual save of the schedule form is no longer required.
- **Analytics click tracking** — CTA clicks are now tracked at click time via a rate-limited AJAX beacon. Previously, "clicks" only recorded at completed checkout.

### Changed
- **AI Studio checkboxes** — Custom checkbox styling with proper checked state and focus indicator replaces the native browser rendering.

---

## v1.0.032 — 2026-04-01

### Added
- AI hero image generation powered by fal.ai — select a source image from the media library, write a prompt, pick a model (with cost indicators), and generate a new hero image directly in the WordPress admin
- New fal.ai integration card on the Integrations tab for API key management and connection testing
- "Generate with AI" buttons on the product metabox, Heroes tab, and Schedules tab

---

## v1.0.031 — 2026-04-01

### Changed
- FluentCart release workflow: clearer logging and documentation for the `x-sytehero-release` WAF header (including guidance when the same Cloudflare zone also fronts SyteOps)

---

## v1.0.030 — 2026-04-01

### Changed
- Release automation can optionally publish the plugin ZIP to SyteWide FluentCart product downloadables when repository credentials are configured (no change required for sites that only install updates from SyteWide)

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

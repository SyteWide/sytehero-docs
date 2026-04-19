---
title: Changelog
description: Release history for SyteHero — new features, improvements, and fixes.
---

# Changelog

All notable user-facing changes to SyteHero are documented here.
Uses [Keep a Changelog](https://keepachangelog.com/) format with **Added** / **Changed** / **Fixed** / **Removed** buckets.

---

## v1.0.058 — 2026-04-19

### Fixed
- **Elementor pages: SyteHero hero now renders at full size** instead of collapsing to a small square in the corner. The shortcode's inline sizing CSS/JS was hardcoded to the globally-selected SyteHero theme (typically Avada's `.fusion-column-wrapper`), which doesn't exist inside an Elementor widget — leaving the absolutely-positioned slider with no parent height. The Elementor widget now overrides the active injection profile during its render, and the frontend slider JS falls back to the closest `.elementor-widget-container` / `.e-con` / `[data-sytehero-hero-wrapper]` when the configured selector doesn't match. Sites that use SyteHero in mixed-builder contexts (e.g. Avada theme with Elementor pages) will see the hero render correctly in both.
- **Save Image Details: preview at the top now reliably appears with the actual generated image.** In the non-deferred save flow, the modal opened the dialog before the image URL had been fetched, so the preview block stayed empty. The flow now fetches the preview URL before opening the dialog, falls back to reading the rendered result `<img>` element when state is empty, and always renders the preview wrapper as a stable visual anchor.
- **Discard button is now always visible** in the Save Image Details dialog — including in studio mode where no attachment exists yet. In the no-attachment case, Discard simply resets the in-flight generation and closes the dialog so users can re-prompt; in preset-tool mode it still deletes the auto-saved attachment from the media library.
- **Modal no longer auto-closes after saving SEO metadata.** Previously, completing a non-deferred save closed the entire modal, removing the user's chance to review the saved image, regenerate, or apply it. The modal now stays open after save so the user can decide what to do next.

### Added
- **`sytehero_active_theme_injection_profile` filter** lets renderers temporarily substitute the active theme injection profile for the duration of a single shortcode render. Used by the Elementor widget to force its own profile on Avada-themed sites; available for any custom integration that needs the same.

---

## v1.0.057 — 2026-04-19

### Added
- **Save Image Details now shows a preview of the generated image** at the top of the dialog, so you can see exactly what you're about to save before filling in title/alt/caption/description.
- **"Discard" button in Save Image Details** for AI Studio's preset tools (Extend to Fit, Remove Background) where the generated image is auto-saved to the Media Library before the dialog opens. Clicking Discard prompts for confirmation, then deletes the attachment so you don't have to clean up unwanted images by hand. The original source image is preserved so you can immediately retry. If the image is already in use elsewhere on the site, Discard surfaces a friendly inline message instead of force-deleting. (Studio mode hides the button entirely — Cancel still works there because nothing was saved yet.)
- **`sytehero_fal_outpaint_guardrail_prompt` filter** for agencies and developers who want to tune the outpaint guardrail phrasing per-site without forking. Receives `( string $prompt, string $image_url, string $user_prompt )`.

### Changed
- **Extend-to-Fit Aspect Ratio panel spacing has been refined.** The description, the "Extend to &lt;ratio&gt;" button, and the optional fill-prompt input now have proper visual hierarchy — the button reads as the primary action and the prompt is visually separated as an optional refinement.
- **Outpaint (Extend to Fit) now reliably matches the original background.** A guardrail instruction is automatically prepended to every outpaint request asking the model to seamlessly extend the existing scene and avoid introducing unrelated objects, text, or scenery. Your custom fill-prompt (if any) is appended as additional direction. The fill-prompt placeholder and an inline tip have been updated to reflect this.
- **Elementor editor placeholder for the SyteHero Hero Slider widget now shows the human-readable source name** (e.g. "Featured Products slider", "Custom Hero: Spring Sale") instead of the raw slug.

### Fixed
- **Elementor editor canvas no longer loses scroll when the SyteHero Hero Slider widget is added.** The featured-products slider's positioning and touch handlers were trapping wheel/touch events inside Elementor's preview iframe. The widget now renders a static placeholder when in edit mode (the live slider still renders normally on the published page), the slider's frontend JS bails early if it detects Elementor edit mode, and a defensive CSS reset neutralises the slider's `overflow:hidden`/`position:absolute` whenever Elementor's editor body class is present — so even hero markup that lands in the editor through other paths (HTML/shortcode widgets, cached templates) can no longer trap scroll.

---

## v1.0.056 — 2026-04-19

### Fixed
- **Dragging an image into the AI Studio source area now reliably selects it.** A follow-up to v1.0.055 addressing two stacked issues: the uploader falls back through `sizes.medium.url → url → guid` (and logs a warning if none are usable), and the thumbnail `<img>` retries with the full-size URL when its subsize variant (e.g. `-229x300.jpg`) fails to load. If both variants fail (the rare case where the upload response URL points to a different origin that hasn't yet received the file), the drop zone restores its placeholder and surfaces an "Upload failed" hint instead of silently collapsing. Fix spans every AI Studio modal — AI Studio, Remove Background, Extend to Fit, Upscale, Image-to-Video, Hero generator.

### Added
- **"Processing…" spinner in the source image drop zone during upload.** Dropping an image (or using the AI Studio "Upload File" button) now shows a centred spinner and a pulsing accent border while the file is uploading, so the zone never looks unresponsive between drop and selection. The AI Copy Reference image tile gets an equivalent spinner overlay. Copy is localizable via `SyteHero.i18n.aiSourceProcessing` / `aiSourceUploading` / `aiSourceUploadFailed`.
- **Drag-and-drop on the AI Copy modal's Reference image tile.** The tile already accepted click-to-pick via the Media Library; it now also accepts a dropped image file, mirroring the behaviour of every other image input in AI Studio.

### Changed
- **"Extend to Fit Aspect Ratio" now sits directly under the Quality selector** inside the generation options, instead of appearing as a standalone row above the prompt. Keeps the option visually grouped with the other generation controls where users expect it.

---

## v1.0.055 — 2026-04-19

### Changed
- **Unified drop-zone placeholder wording across AI tool modals.** The per-tool modals (Remove Background, Extend to Fit, Upscale, Image-to-Video) now read "Drop or click" to match the hero and AI Studio modals, replacing the longer "Drop or click to select image" for a consistent drop-target affordance.

---

## v1.0.054 — 2026-04-19

### Fixed
- **"Unexpected status: in_progress" error on slow AI generations.** The AI image modals were only recognising fal.ai status codes in their legacy uppercase form, so when a model stayed in progress long enough to be re-polled (common with Nano Banana Pro), the UI bailed out with an error. Poll handlers now normalise the response so either uppercase or lowercase statuses round-trip cleanly.
- **Drag-and-drop uploads into the AI Studio modal no longer vanish.** Previously the dropped file uploaded to the Media Library but never appeared in the source area unless the Media Library picker had been opened first. The drop handler is now wired to the same state-update path as click-to-select, so the thumbnail updates immediately.
- **AI Studio "Upload File" button now shows the image straight away.** Same class of bug as the drag-drop case: if a user clicked Upload File before ever opening the Media Library picker, the file uploaded but the thumb stayed empty. It now routes through the base modal's shared selection handler.

### Added
- **Drag-and-drop is now available in every AI modal.** The hero image generator, AI Studio, and the per-tool modals (Remove Background, Extend to Fit, Upscale, Image-to-Video) all accept an image file dropped onto their source area in addition to click-to-pick. The placeholder now reads "Drop or click to select" as a visible hint.

### Changed
- **"Extend to Fit" is now a collapsed dropdown instead of an always-visible row.** It used to appear automatically whenever the source image's aspect ratio didn't match the target, which confused users unfamiliar with outpainting. It now only appears when your source actually doesn't match the selected ratio, shows up collapsed by default, and carries a discreet "Recommended — your source doesn't match…" hint next to the summary. Opening it reveals the optional fill prompt and "Extend to &lt;ratio&gt;" button. The Extend to Fit tool modal keeps the dropdown auto-expanded since it's the tool's primary action.

---

## v1.0.053 — 2026-04-19

### Changed
- **Scaffold wrapper discovery simplified.** `sytehero-frontend-overlay.js` now recognises `.sytehero-scaffold-wrap` as the overlay wrapper directly, short-circuiting the theme-profile walk-up when a builder widget is present. The scaffold no longer needs to carry `.e-con` (or any theme-specific class) to be discoverable, and the Elementor builder path stops emitting `.e-con` entirely.
- **Non-Elementor builders emit a bare CTA text `<span></span>`** — the unreferenced `sytehero-hero-cta-text` class introduced in v1.0.052 has been dropped. The Elementor path continues to emit `.elementor-button-text` where the Elementor theme profile's host selector expects it.

### Added
- **Editor-script handle contract tests** — `HeroSliderBlockModuleTest` now directly asserts `editor_script_handle()` returns `'sytehero-hero-slider-editor-script'` and stays in lockstep with `BLOCK_NAME`. A `generate_block_asset_handle()` test stub in `tests/bootstrap.php` mirrors WP's real algorithm so both the live and fallback paths are covered.
- **Strengthened coexistence-test sentinel** — verifies via reflection that the three `DiviModuleRegistrarCoexistenceTest` future-contract methods still exist so a rename or accidental deletion trips a failing test immediately.

---

## v1.0.052 — 2026-04-19

### Changed
- **Scaffold decoupled from Elementor-specific class names.** The builder-scaffold renderer now emits `.e-con`, `.elementor-widget-container`, `.elementor-button`, and `.elementor-button-text` *only* for the Elementor widget path. Gutenberg / Avada / Divi / Divi 5 scaffolds produce clean, theme-neutral DOM — `.sytehero-hero-text-area-1`, `.sytehero-hero-text-area-2`, `.sytehero-hero-cta`, `.sytehero-hero-cta-text`. No frontend behaviour change (the overlay-injection JS's `el.closest(selector) || el` fallback continues to land text in our elements regardless).
- **Gutenberg block editor-script handle** is now computed dynamically via `generate_block_asset_handle()` instead of a hardcoded string — future-proof against WP's handle-generation algorithm changes.
- **Fusion Builder preview template** uses the underscore HTML-escape delimiter (`{{- }}` instead of `{{= }}`) for `data.sh_source` interpolation. Defensive escaping at the template boundary even though the field currently only carries sanitized dropdown values.

### Added
- **CI Node build step.** `.github/workflows/release.yml` now runs `npm ci` + `npm run build:all` between PHPUnit and the ZIP-staging step, so the release zip always contains freshly-built `assets/blocks/` and `assets/divi5/` rather than whatever was last committed.
- **Coming Soon placeholder contract tests** — asserts the Divi 5 placeholder row in Settings remains inert (no `TabGateOptions` key backing it) until the module actually ships.
- **Divi 4 ↔ Divi 5 coexistence contract tests** (deliberately skipped until the D5 module lands). Encodes the required short-circuit behaviour as a ready-made regression net for the future implementer.
- **Divi 5 stub bundle** emits a small runtime marker (`window.SyteHeroDivi5 = 'coming-soon'`, ~88 bytes) so WP caching/minify plugins don't treat the compiled file as corrupt.

### Notes
- An attempt to migrate from deprecated `divi-types-*` npm aliases to the direct `@divi/*` packages was reverted — the direct packages have a transitive dependency (`@types/codemirror@5.65.16`) that's missing from the npm registry, breaking fresh installs. Deferred to the Divi 5 native module continuation work; conditions for a successful re-attempt are documented.
- No runtime behaviour change on any of the four supported builders.

---

## v1.0.051 — 2026-04-19

### Added
- **Divi 5 native module infrastructure (Coming Soon feature).** Build-time groundwork for a future first-class Divi 5 module — npm dependencies (`@divi/types` + targeted `@types/divi__*` packages), TypeScript + Webpack configs, a `build:divi5` script, and a stub `src/divi5/` source tree that compiles cleanly. The module implementation itself is deferred pending a green-light signal (customer demand, Divi 5 adoption threshold, or upstream `@divi/*` API stabilisation); see `docs/superpowers/plans/2026-04-19-divi5-module-continuation.md`.
- **"Divi 5 native module (Coming Soon)" placeholder** under *Settings → Advanced → Tab access*. Greyed out and non-interactive — marks where the real toggle will appear when the module ships.

### Changed
- Divi Classic module and Gutenberg block documentation now reference the Coming Soon Divi 5 roadmap.

### Notes
- No runtime behaviour changes on Divi 4 or Divi 5 sites. The Classic module from v1.0.049 continues to serve both (Divi 5 via its Classic-compatibility layer).
- Rolling back this release is safe: all additions are dev-only tooling + a disabled UI row; no new runtime code paths were introduced.

---

## v1.0.050 — 2026-04-19

### Added
- **Fusion Builder element preview** — the SyteHero Hero Slider element now renders a labelled preview card inside Fusion Builder showing the element's name and selected source. Previously the builder showed only a generic element rectangle.

---

## v1.0.049 — 2026-04-18

### Added
- **Avada / Fusion Builder element: SyteHero Hero Slider** — register a native Fusion Builder element via `fusion_builder_map()` on `fusion_builder_before_init`. The element wraps a shortcode (`[sytehero_fusion_hero_slider]`) that reuses the shared scaffold subsystem introduced in v1.0.047, producing byte-identical frontend markup to the Elementor widget and Gutenberg block for equivalent attributes. Style tab exposes colour, font size, font weight, line height, and alignment per Text Area 1 / Text Area 2 / CTA, plus a layout gap.
- **Divi Classic module: SyteHero Hero Slider** — register a custom `ET_Builder_Module` subclass via `et_builder_ready`. Targets the classic back-end Divi Builder; the Visual Builder uses Divi's AJAX fallback rendering (a future release may add native VB rendering via a Divi Extension). Same Style-tab controls as the Fusion element.
- **Settings → Tab access toggles** — two new toggles (**Enable Fusion Builder element**, **Enable Divi module**) let admins hide each integration without affecting existing shortcode placements.

### Changed
- Bumped the shared scaffold subsystem's builder set to four: Elementor (v1.0.047), Gutenberg (v1.0.048), Avada / Fusion Builder, Divi Classic. Every builder consumes the same `Syte\Hero\Integrations\Scaffold\StyleSchema` + `ScaffoldRenderer` so authors see consistent behaviour across platforms.

---

## v1.0.048 — 2026-04-18

### Added
- **Gutenberg block: SyteHero Hero Slider** — insert the block on any post, page, or site-editor template and pick a saved hero from the Inspector. The overlay (Text Area 1, Text Area 2, CTA) is pre-packaged in the block's output; no container assembly required. Reuses the shared scaffold subsystem introduced in v1.0.047 so block placements produce the same frontend markup as the Elementor widget.
- **Inspector Style panels** — colour, font size, font weight, line height, and alignment per Text Area 1 / Text Area 2 / CTA, plus a layout gap control. Values cascade on top of the global SyteHero Settings defaults.
- **Settings → Tab access → Enable Gutenberg block** toggle — hides the block from the inserter without affecting existing shortcode placements.

### Changed
- **Minimum WordPress version** bumped to **5.8** (required for `block.json`-based block registration). Effectively no real-site impact; WP 5.0–5.7 is <1% of active sites per wordpress.org usage stats.
- **Build pipeline**: root `package.json` + `@wordpress/scripts` added for the Gutenberg block bundle. Dev-only — `src/`, `package.json`, `node_modules/` are excluded from the release zip by the existing allowlist. Built output ships from `assets/blocks/`.

---

## v1.0.047 — 2026-04-18

### Added
- **Pre-packaged overlay scaffold for the Elementor widget** — dropping the **SyteHero Hero Slider** widget onto a page now produces the Text Area 1, Text Area 2, and CTA overlay automatically. No separate Heading/Button widgets required and no CSS-class scaffolding to remember. Content still comes from *SyteHero → Custom Heroes* (or the Featured Products slider); empty source fields hide the matching overlay element.
- **Style tab on the Elementor widget** — per-placement controls for text colour, font size, font weight, line height, and alignment on each of Text Area 1, Text Area 2, and CTA, plus a layout "gap between elements" control. Values cascade on top of the global SyteHero Settings defaults.

### Changed
- **Shared scaffold subsystem** introduced under `Syte\Hero\Integrations\Scaffold` (`StyleSchema`, `StyleTokens`, `ScaffoldRenderer`). The Elementor widget is the first consumer; the Gutenberg block (v1.0.048) and Avada/Divi elements (v1.0.049) will reuse the same building blocks.

---

## v1.0.046 — 2026-04-18

### Added
- **Elementor widget: SyteHero Hero Slider** — drop a "SyteHero Hero Slider" widget onto any Elementor page and pick either the Featured Products slider or a saved Custom Hero from a dropdown. Rotation, Text Area 1 / Text Area 2 / CTA overlays, license gating, and theme styling are inherited from the existing shortcode path, so there is no duplicate content to manage. Per-instance view variant (desktop/tablet/mobile) and an optional wrapper CSS class are exposed.
- **Settings → Tab access → Enable Elementor widgets** toggle — lets admins turn the widget off globally without affecting existing shortcode placements.

---

## v1.0.045 — 2026-04-16

### Fixed
- **Fatal error on admin pages** — added missing `use` import for `AiProviderAjaxHandler` in `AdminJsConfig` after the AJAX namespace refactor. The class moved to `Admin\Ajax` but the reference was not updated, causing a fatal "Class not found" error on every admin page load.

---

## v1.0.044 — 2026-04-16

### Fixed
- **Uniform hero height** — product, custom/page, and fallback slides now all render at the same configured height. Previously, custom slides with large images could push the hero beyond the set viewport height.
- **FlexSlider smoothHeight** — no longer fights the hero height constraint inside the slider background.
- **Supplemental slide auto-save** — editing text, margins, modes, or glow on custom/page slides now auto-saves via AJAX. Previously these changes were lost because the save was never triggered.
- **Push View persistence** — the Push View button now persists changes for supplemental and fallback hero text editors.

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

---
sidebar_position: 10
title: Backup & Restore
description: Export and import all SyteHero settings as JSON.
---

# Backup & Restore

Backup & Restore lets you export all of your SyteHero settings as a JSON file and import that file later to restore them. This is useful for migrating to a new site, recovering from a reset, or saving a snapshot before making major changes.

## Accessing the Backup Tab

Navigate to **SyteHero > Backup** in your WordPress admin menu. The Backup tab is always available and does not need to be enabled in Settings.

## Exporting Settings

1. Open the **Backup** tab.
2. Choose which sections to include using the export scope checkboxes (all are checked by default):
   - **Schedules** -- sales schedule definitions
   - **Banners** -- banner configurations and styling
   - **Custom slides** -- supplemental custom slides
   - **Fallback slide** -- the fallback slide configuration
   - **Media files** -- bundles slide images as base64 data inside the JSON so they can be re-imported into the target site's Media Library
3. Click **Download Backup**.
4. A JSON file will download to your computer.

The export always includes these core settings regardless of scope toggles:

- Shortcode defaults
- Hero layout settings
- Hero view overrides
- Hero text master configuration
- Hero random lines
- Tab gates (feature flags)
- No-slides alert contacts
- Custom Heroes
- Custom CSS (global, glow, desktop, tablet, mobile)
- Selected theme and ecommerce provider
- Featured order (filtered on import to match available slides)

## What Is NOT Included

The export does **not** include product-level meta such as:

- Featured product status
- Hero images or videos assigned to individual products
- Per-product hero text overrides stored in product meta

These values are tied directly to individual products and are managed through the product editor or the Heroes tab.

## Importing Settings

1. Open the **Backup** tab.
2. Click **Choose File** and select a previously exported JSON file.
3. Click **Restore Settings**.
4. Your current SyteHero settings will be overwritten with the values from the imported file.

### What happens during import

- All imported values pass through the same sanitizers used by admin forms.
- **Media re-import:** If the backup includes bundled media, each image is uploaded into the target site's Media Library and assigned a new attachment ID. All slide references are remapped automatically.
- **Custom slides only:** Only custom-type supplemental slides are imported. Page and category slide bindings are dropped because the target site may not have the same pages or categories.
- **Featured order filtering:** Product, page, and category keys are removed from the featured order. Only custom slide and fallback references that exist in the imported data are kept.
- **Sales schedules:** Imported schedules are converted to non-sale schedules -- sale flags are cleared, product pricing data is removed, and product/page/category slide links are dropped. Schedule windows (start/end) and custom/fallback slide associations are preserved.
- **Banners:** Imported as-is through the standard banner sanitizer. LiteSpeed cache is automatically purged.
- **Tab gates:** Merged with the existing tab gates on the target site rather than replacing them.

## Common Use Cases

- **Migrating to a new site:** Export from the old site (with media bundling enabled), install SyteHero on the new site, then import the JSON file to carry over all settings and slide images.
- **Restoring after a reset:** If you reset your settings or reinstall the plugin, import a backup to get back to your previous configuration.
- **Pre-change safety net:** Before making significant configuration changes, export a backup so you can easily roll back if needed.

## Slide Field Fidelity

Backups include the full set of per-slide fields:

- **Device-specific hero text** (desktop, tablet, mobile overrides for text areas and CTA)
- **Video letterbox mode** (inherit, cover, or letterbox)
- **CTA target blank** (whether the CTA button opens in a new tab)
- **Slide interval** (per-slide duration override)

All fields are sanitized on import through the same validation rules used by the admin form.

## Media Export Warnings

If a slide references an image that is no longer in the Media Library or whose file cannot be read, the export will include a warning in the backup metadata identifying the affected attachment. The slide is still exported, and on import it is preserved with an empty media reference so you can re-assign an image via the admin UI.

Check that all slide images are accessible in the Media Library before exporting to ensure a complete backup.

## Safety Notes

- Importing a file **replaces** your current settings entirely. There is no merge -- the imported values take over (except tab gates, which are merged).
- Keep your exported JSON files in a safe location. They contain your full plugin configuration.
- If you are unsure about an import, export your current settings first so you have a rollback point.
- Large backups with many bundled media files may take longer to import depending on your server's PHP memory and upload limits.

---
sidebar_position: 1
title: Featured Products
description: Select WooCommerce products to appear in your hero background slider.
---

# Featured Products

Featured Products is the core of SyteSlyders. It lets you select WooCommerce products to appear in the hero background slider on your site, complete with media, text overlays, and call-to-action buttons.

## How to Feature a Product

1. In your WordPress admin, go to **Products** and edit the product you want to feature.
2. In the **SyteSlyders** sidebar metabox, toggle **Featured Slyder Product** to **ON**.
3. Click **Select Slyder Media** and choose an image or video from your media library.
4. Click **Update** to save the product.

The product is now marked as a featured slyder product. The `slyder-featured-image` tag is assigned to the product automatically.

## Managing Featured Products

Navigate to **SyteSlyders > Slyders** to see and manage all featured products in one place. The Slyders tab provides:

### Quick Toggles

Each product row has a toggle to turn featured status on or off without leaving the page.

### Media Pickers

Each row includes a media picker so you can assign or change the hero image or video directly from the list.

### Hero Text Overrides

For each product, you can set:

- **Text Area 1** -- Custom text that overrides the global default for this product's slide.
- **Text Area 2** -- A second text line with the same override behavior.
- **CTA Button** -- Custom call-to-action text and link for this product's slide.
- **Glow** -- Per-product glow settings.

Each row in the Slyders tab renders a hero text views stack so switching between Desktop/Tablet/Mobile tabs edits the mode, glow, margin, text, and CTA target for that specific viewport. The panels hold the respective fields, and the inline editor mirrors the controls that live inside the product metabox, keeping markup and saving logic in sync.

When hero text has been modified but not yet saved, an unsaved-changes notice appears in red/bold to remind you to save.

### Hero Order

Drag and drop products to set the order they appear in the slider. The fallback slide can also be reordered alongside product slides via drag-and-drop. The new order saves automatically.

### Removing Products

Click the **X** button on a product row to stage it for removal. The removal is not immediate -- click **Save Changes** to confirm. This gives you a chance to undo before committing.

## Scheduling Featured Products

Each featured product can have its own schedule window:

- Set a **Start Date** and **End Date** for when the product should appear in the slider.
- When the end date passes, the product automatically expires and is removed from the active rotation.
- Products without dates remain active indefinitely (until manually removed).
- **Retain After Schedule** — Toggle this on to keep the product in the hero rotation after its schedule expires. When off (default), expired products are removed automatically.

## Fallback Slide

When no featured products are currently active (for example, all have expired or been removed), a fallback slide is displayed instead. The fallback slide is required to ensure the hero area always has content.

To configure the fallback:

1. Go to **SyteSlyders > Slyders**.
2. Scroll to the **Fallback Slide** section.
3. Set a fallback image and CTA (call-to-action link and text).

Fallback slide changes auto-save on a 500ms debounce — no need to click Save Changes. A brief "Saving..." notice appears during auto-save.

## Supplemental Slides

In addition to product slides, you can add extra slides that link to pages or category archives:

1. In the **Slyders** tab, find the **Supplemental Slides** section.
2. Add a slide with its media, link URL, and optional text.
3. Save your changes.

Supplemental slides appear alongside product slides in the rotation.

## Per-Slide Controls

Each slide (product or supplemental) supports individual settings:

| Setting | Description |
|---|---|
| **Interval** | How long the slide is displayed, in milliseconds (overrides the global default). |
| **Video Fit** | For video media: **Cover** fills the container (may crop edges) or **Letterbox** shows the full video (may add bars). |
| **Pause State** | Whether the slider pauses while this slide is active. |
| **CTA Target Blank** | When enabled, the CTA link opens in a new browser tab. |

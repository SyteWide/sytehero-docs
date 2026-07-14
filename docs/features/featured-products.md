---
sidebar_position: 1
title: Featured Products
description: Select products to appear in your hero background slider.
---

# Featured Products

Featured Products is the core of SyteHero. It lets you select products from your ecommerce catalog to appear in the hero background slider on your site, complete with media, text overlays, and call-to-action buttons.

:::tip Platform support
SyteHero works with both [WooCommerce](/docs/ecommerce/woocommerce) and [FluentCart](/docs/ecommerce/fluentcart). The workflow below applies to both platforms.
:::

## How to Feature a Product

1. In your WordPress admin, go to **Products** (from your WooCommerce or FluentCart menu) and edit the product you want to feature.
2. In the **SyteHero** sidebar metabox, toggle **Featured Hero Product** to **ON**.
3. Click **Select Hero Media** and choose an image or video from your media library.
4. Click **Update** to save the product.

The product is now marked as a featured hero product. SyteHero tags the product automatically to track its featured status.

## Managing Featured Products

Navigate to **SyteHero > Heroes** to see and manage all featured products in one place. The Heroes tab provides:

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

Every product and supplemental slide row also has a **Hide all text & CTAs** toggle -- a one-click shortcut that sets **Text Area 1**, **Text Area 2**, and the **CTA Button** to **Hide** at once, so that slide shows no hero text or CTA (Glow and other settings are unaffected). Turn it off to restore each of those fields to **Use Default**.

Each row in the Heroes tab renders a hero text views stack so switching between Desktop/Tablet/Mobile tabs edits the mode, glow, margin, text, and CTA target for that specific viewport. The panels hold the respective fields, and the inline editor mirrors the controls that live inside the product metabox, keeping markup and saving logic in sync.

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

## Fallback Slide (required)

Every SyteHero hero area must have a fallback slide configured. When no featured products are currently active (for example, all have expired or been removed), the fallback slide is what visitors see — without it, the hero area would render empty.

To configure the fallback:

1. Go to **SyteHero > Heroes**.
2. Scroll to the **Fallback Slide** section.
3. Set a fallback image and CTA (call-to-action link and text).

Fallback slide changes auto-save on a 500ms debounce — no need to click Save Changes. A brief "Saving..." notice appears during auto-save.

## Supplemental Slides

In addition to product slides, you can add extra slides that link to pages, category archives, or a custom destination:

1. In the **Heroes** tab, find the **Supplemental Slides** section.
2. **Page or category slide** -- select a page or category and click **Add Selected Slide**; its CTA always links to that page's or category's own URL.
3. **Custom slide** -- enter a **title** (required) and click **Add Custom Slide**. The **CTA URL is optional** -- leave it blank for a non-clickable slide. Set the slide's background media after adding it.
4. Save your changes.

Supplemental slides appear alongside product slides in the rotation. Like product slides, each supplemental slide row has its own **Hide all text & CTAs** toggle (described under [Hero Text Overrides](#hero-text-overrides)) to hide that slide's hero text and CTA in one click.

## Per-Slide Controls

Each slide (product or supplemental) supports individual settings:

| Setting | Description |
|---|---|
| **Interval** | How long the slide is displayed, in milliseconds (overrides the global default). |
| **Video Fit** | For video media: **Cover** fills the container (may crop edges) or **Letterbox** shows the full video (may add bars). |
| **Pause State** | Whether the slider pauses while this slide is active. |
| **CTA Target Blank** | When enabled, the CTA link opens in a new browser tab. |
| **Make Slide Clickable** | When enabled, the whole slide is a link to its destination — see [Slide Link](#slide-link-clickable-slides) below. |

## Slide Link (Clickable Slides)

By default only the CTA button is clickable. **Slide Link** makes the entire slide a link, so visitors can click anywhere on the background image or video to navigate. Buttons and text layered on a slide (the CTA button, Text Area 1/2) always keep their own separate links — enabling Slide Link never changes what the CTA button does. Whole-slide clicks are tracked the same way as CTA clicks for attribution.

**Product slides** — the fastest way is the **Make entire slide clickable** toggle **directly on each product row** (next to **Open Button/CTA Link in New Tab**): turn it on to link the whole slide to the **product page** (the same destination the CTA button uses) — it saves automatically. All three row toggles — **Open Button/CTA Link in New Tab**, **Make entire slide clickable**, and **Open slide link in a new tab** — appear on the row as soon as you add a product from search, so you can set them before saving; they mirror the same fields covered below, just on a second surface. For a custom link instead, open the full Slide Link section in the **SyteHero** metabox or under **Modify Hero Text**:

1. Turn **Make entire slide clickable** ON.
2. Choose the destination: **Product link** (the product's own page, default) or **Custom link** (a URL you enter).
3. Optionally enable **Open slide link in a new tab**.

**Supplemental slides** — each Custom/Page/Category slide has its own **Make entire slide clickable** toggle (plus **Open slide link in a new tab**). There's no product-vs-custom choice — the slide links to whatever destination you already set (custom URL, page permalink, or category archive).

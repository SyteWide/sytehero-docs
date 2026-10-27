---
sidebar_position: 2
title: FAQ
description: Frequently asked questions about SyteHero.
---

# Frequently Asked Questions

## What themes does SyteHero support?

[Avada](/docs/themes/avada), [Divi](/docs/themes/divi), and [Elementor](/docs/themes/elementor) are officially supported. Other themes can render the shortcodes, but text-overlay placement and CTA-button wiring may need theme-specific CSS. SyteHero ships its own bundled slider engines (FlexSlider, Swiper, and Splide), so the theme does not need to provide one.

## Do I need WooCommerce?

An ecommerce plugin ([WooCommerce](/docs/ecommerce/woocommerce) or [FluentCart](/docs/ecommerce/fluentcart)) is required for featured product sliders and sales scheduling. Custom Heroes work independently without any ecommerce plugin.

## Does FluentCart work the same as WooCommerce?

Yes, the admin experience is nearly identical. SyteHero handles platform differences automatically. The main difference is that FluentCart does not have native sale scheduling, so SyteHero manages sale prices for you. See the [FluentCart guide](/docs/ecommerce/fluentcart) for details.

## Can I use different images for desktop and mobile?

Use view-locked shortcodes (`[sytehero_featured_desktop]`, `[sytehero_featured_mobile]`) with different height/min-height settings per view. Product images are shared across views, but you can use Custom CSS to adjust display per breakpoint.

## How do I change the slide transition speed?

Set the interval (in milliseconds) in **Settings → Default Shortcode** for each device view (Desktop / Tablet / Mobile). The interval cannot be overridden per-shortcode — `[sytehero_featured]` does not accept an `interval` attribute. To run different intervals on different pages, use a view-locked shortcode (`[sytehero_featured_desktop]`, etc.) and adjust the per-view default.

## Can I use videos instead of images?

Yes. Use **Select Hero Media** and choose a video, or enter a video/embed URL in the Media URL field. Control video fit with the **Video Fit** option (Cover or Letterbox).

## What happens when no products are featured?

A fallback slide is required. Configure it in the **Heroes** tab. If enabled, the No Active Slides Alert will email your configured contacts.

## How do I back up my settings before making changes?

Go to the **Backup** tab and export your settings as JSON. Import the file later to restore.

## Where are my settings stored?

All settings are stored as WordPress options. Product-level settings (featured status, hero images) are stored as post meta on each product.

## Does SyteHero affect my product featured image?

No. SyteHero stores its hero image and video selections in a separate field on each product. Your product's WordPress featured image is untouched.

## How do I completely remove SyteHero?

**Deactivating** keeps everything: your settings, sales, slides and product data stay, and a sale price that is on stays on (WooCommerce still ends a sale at its own end date; a FluentCart sale price stays until SyteHero is active again).

**Deleting** the plugin (Plugins → Delete, after deactivating) removes everything SyteHero stored. In this order:

1. **Running sales end first.** Every product a SyteHero sale is on goes back: in WooCommerce to the product's own sale price and dates, if it had a sale of its own before, or else to its regular price; in FluentCart to the price the sale replaced. A price you changed yourself while the sale ran is kept.
2. Then SyteHero's settings, licence details, schedules, banners, reports, analytics and source tracking, its scheduled tasks, the `sytehero-featured-image` tag, its product, order and media data, its database tables (source tracking and AI spend) and its debug log folder (`wp-content/sytehero-logs`) are deleted.

What stays: your products, orders and their own data, and any images you generated with AI and saved to the Media Library. On a multisite network, every site is cleaned.

Deleting cannot be undone. To keep your setup, export it first (see Backup & Restore), or deactivate instead.

---
sidebar_position: 2
title: FAQ
description: Frequently asked questions about SyteHero.
---

# Frequently Asked Questions

## What themes does SyteHero support?

[Avada](/docs/themes/avada), [Divi](/docs/themes/divi), and [Elementor](/docs/themes/elementor) are fully supported. The core slider features work on any theme that includes FlexSlider.

## Do I need WooCommerce?

An ecommerce plugin ([WooCommerce](/docs/ecommerce/woocommerce) or [FluentCart](/docs/ecommerce/fluentcart)) is required for featured product sliders and sales scheduling. Custom Heroes work independently without any ecommerce plugin.

## Does FluentCart work the same as WooCommerce?

Yes, the admin experience is nearly identical. SyteHero handles platform differences automatically. The main difference is that FluentCart does not have native sale scheduling, so SyteHero manages sale prices for you. See the [FluentCart guide](/docs/ecommerce/fluentcart) for details.

## Can I use different images for desktop and mobile?

Use view-locked shortcodes (`[sytehero_featured_desktop]`, `[sytehero_featured_mobile]`) with different height/min-height settings per view. Product images are shared across views, but you can use Custom CSS to adjust display per breakpoint.

## How do I change the slide transition speed?

Set the interval (in milliseconds) in **Settings > Default Shortcode** section for each view, or override per-shortcode with `interval="5000"`.

## Can I use videos instead of images?

Yes. Use **Select Hero Media** and choose a video, or enter a video/embed URL in the Media URL field. Control video fit with the **Video Fit** option (Cover or Letterbox).

## What happens when no products are featured?

A fallback slide is required. Configure it in the **Heroes** tab. If enabled, the No Active Slides Alert will email your configured contacts.

## How do I back up my settings before making changes?

Go to the **Backup** tab and export your settings as JSON. Import the file later to restore.

## Where are my settings stored?

All settings are stored as WordPress options. Product-level settings (featured status, hero images) are stored as post meta on each product.

## Does SyteHero affect my product featured image?

No. SyteHero uses its own media meta. Your product's featured image is untouched.

## How do I completely remove SyteHero?

Deactivate the plugin. Deactivation does not delete your settings or product meta.

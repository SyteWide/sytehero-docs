---
sidebar_position: 2
title: FAQ
description: Frequently asked questions about SyteSlyders.
---

# Frequently Asked Questions

## What themes does SyteSlyders support?

Avada, Divi, and Elementor are fully supported. The core slider features work on any theme that includes FlexSlider.

## Does SyteSlyders work without WooCommerce?

WooCommerce is required for featured product sliders. Custom Slyders work independently of WooCommerce.

## Can I use different images for desktop and mobile?

Use view-locked shortcodes (`[slyders_featured_hero_desktop]`, `[slyders_featured_hero_mobile]`) with different height/min-height settings per view. Product images are shared across views, but you can use Custom CSS to adjust display per breakpoint.

## How do I change the slide transition speed?

Set the interval (in milliseconds) in **Settings → Default Shortcode** section for each view, or override per-shortcode with `interval="5000"`.

## Can I use videos instead of images?

Yes. Use **Select Slyder Media** and choose a video, or enter a video/embed URL in the Media URL field. Control video fit with the **Video Fit** option (Cover or Letterbox).

## What happens when no products are featured?

A fallback slide is required. Configure it in the **Slyders** tab. If enabled, the No Active Slides Alert will email your configured contacts.

## How do I back up my settings before making changes?

Go to the **Backup** tab and export your settings as JSON. Import the file later to restore.

## Where are my settings stored?

All settings are stored as WordPress options. Product-level settings (featured status, hero images) are stored as post meta on each WooCommerce product.

## Does SyteSlyders affect my WooCommerce featured image?

No. SyteSlyders uses its own media meta. Your WooCommerce featured image is untouched.

## How do I completely remove SyteSlyders?

Deactivate the plugin. The `slyder-featured-image` tag is preserved if products use it. Deactivation does not delete your settings or product meta.

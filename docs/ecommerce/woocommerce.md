---
sidebar_position: 1
title: WooCommerce
description: Using SyteHero with WooCommerce for product sliders, sales scheduling, and reporting.
---

# WooCommerce

SyteHero integrates directly with WooCommerce for product-based hero sliders, automated sales scheduling, and order reporting.

## Requirements

- WooCommerce installed and active on your WordPress site.

## Selecting WooCommerce

1. Go to **SyteHero > Plugin Setup**.
2. Under **Ecommerce Selector**, choose **WooCommerce**.
3. Click **Save Changes**.

Alternatively, click **Detect eCommerce Plugin** to have SyteHero identify your active ecommerce platform automatically.

## Featured Products

SyteHero works with your existing WooCommerce product catalog. When you feature a product for the hero slider, SyteHero assigns a product tag to track it. You manage everything from the SyteHero admin — no need to edit WooCommerce settings directly.

See [Featured Products](/docs/features/featured-products) for full setup instructions.

## Sales Scheduling

SyteHero syncs sale prices directly with WooCommerce. When a scheduled sale activates:

- **Sale prices** are written to WooCommerce automatically — your store recognizes the sale natively.
- **Hero slides** are created to showcase the sale products.
- **Banners** linked to the schedule display automatically.

When the schedule expires, sale prices are removed and products return to their regular pricing.

See [Sales Scheduling](/docs/features/sales-scheduling) for full setup instructions.

## Sales Summary Report

The Sales Summary Report tracks WooCommerce orders with these statuses:

| Status | Included by default |
|--------|-------------------|
| Completed | Yes |
| Processing | Yes |
| On-hold | Yes |

The **"Only include completed orders"** filter limits reports to completed orders only, excluding processing and on-hold.

Order attribution uses WooCommerce's built-in attribution system (WC 8.5+) to show how customers found your store.

See [Sales Summary Report](/docs/features/sales-summary-report) for full configuration.

## Shippo Integration

Shippo shipping and tracking data is available for WooCommerce stores. When enabled, tracking information (carrier, status, tracking number, ETA) appears in your Sales Summary Report emails.

See [Integrations](/docs/features/integrations) for Shippo setup.

## Next Steps

- [Featured Products](/docs/features/featured-products) — feature products in the hero slider
- [Sales Scheduling](/docs/features/sales-scheduling) — automate sales with price sync
- [Sales Summary Report](/docs/features/sales-summary-report) — order tracking and email reports
- [Integrations](/docs/features/integrations) — Shippo shipping integration

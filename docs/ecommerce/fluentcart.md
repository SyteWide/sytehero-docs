---
sidebar_position: 2
title: FluentCart
description: Using SyteHero with FluentCart for product sliders, sales scheduling, and reporting.
---

# FluentCart

SyteHero works with FluentCart as an alternative to WooCommerce. The admin experience is nearly identical — SyteHero handles the differences between platforms automatically.

## Requirements

- FluentCart installed and active on your WordPress site.

## Selecting FluentCart

1. Go to **SyteHero > Plugin Setup**.
2. Under **Ecommerce Selector**, choose **FluentCart**.
3. Click **Save Changes**.

Alternatively, click **Detect eCommerce Plugin** to have SyteHero identify your active ecommerce platform automatically.

## How FluentCart Compares to WooCommerce

The day-to-day workflow is the same. SyteHero handles platform-specific details behind the scenes:

| Feature | WooCommerce | FluentCart |
|---------|-------------|------------|
| Featured product tagging | Automatic | Automatic — SyteHero manages this for you |
| Sales scheduling | Syncs with WooCommerce's native sale prices | SyteHero manages sale pricing directly |
| Sales Summary Report | Tracks completed, processing, on-hold orders | Tracks paid orders |
| Order attribution | WooCommerce built-in attribution (WC 8.5+) | FluentCart order source data |
| Shippo tracking | Available | Not yet available |

## Featured Products

Featuring products works the same way as WooCommerce. Toggle products on from the SyteHero admin, assign hero media, and they appear in your slider. SyteHero manages product tagging automatically — no manual setup needed.

See [Featured Products](/docs/features/featured-products) for full setup instructions.

## Sales Scheduling

SyteHero manages sale pricing for FluentCart stores directly. When a scheduled sale activates:

- **Sale prices** are applied to your products automatically.
- **Hero slides** are created to showcase the sale products.
- **Banners** linked to the schedule display automatically.

When the schedule expires, prices return to normal.

See [Sales Scheduling](/docs/features/sales-scheduling) for full setup instructions.

## Sales Summary Report

The Sales Summary Report tracks FluentCart orders with **paid** status. All paid orders are treated as final, so the "Only include completed orders" filter has no effect on FluentCart stores.

Order attribution uses FluentCart's order source data to show how customers found your store.

See [Sales Summary Report](/docs/features/sales-summary-report) for full configuration.

## Shippo Integration

Shippo shipping and tracking data is **not yet available** for FluentCart stores. This feature is currently limited to WooCommerce. See [Integrations](/docs/features/integrations) for details.

## Next Steps

- [Featured Products](/docs/features/featured-products) — feature products in the hero slider
- [Sales Scheduling](/docs/features/sales-scheduling) — automate sales with price sync
- [Sales Summary Report](/docs/features/sales-summary-report) — order tracking and email reports

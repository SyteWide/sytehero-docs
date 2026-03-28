---
sidebar_position: 4
title: Sales Scheduling
description: Schedule sales with automatic price sync and banner coordination.
---

# Sales Scheduling

Sales Scheduling lets you plan sales in advance. When a scheduled sale goes live, SyteHero automatically updates product prices, creates hero slides for the sale, and syncs any linked banners -- all without manual intervention.

:::tip Platform support
Sales Scheduling works with both [WooCommerce](/docs/ecommerce/woocommerce) and [FluentCart](/docs/ecommerce/fluentcart). For WooCommerce, sale prices sync natively. For FluentCart, SyteHero manages sale pricing directly.
:::

## Accessing the Schedule Tab

Navigate to **SyteHero > Schedule** in your WordPress admin menu.

If you do not see the Schedule tab, it must be enabled first:

1. Go to **SyteHero > Settings**.
2. Toggle the **Schedule** option **ON**.
3. Save your settings.

## Creating a Sales Schedule

1. Open the **Schedule** tab.
2. Click **Add Schedule** (or the equivalent button at the top of the list).
3. **Select products:** Use the product search field to find and select the products (or specific variations) you want to include in the sale.
4. **Set sale prices:** Enter the sale price for each selected product or variation.
5. **Choose dates:** Pick a **Start Date** and **End Date** for the sale window.
6. Click **Save Schedules**.

## What Happens When You Save

Saving a schedule triggers several automated actions:

- **Price updates** -- The sale price is written to each product. For WooCommerce, this syncs natively with WooCommerce's sale system. For FluentCart, SyteHero manages the pricing directly.
- **Slide creation** -- Hero slides are created (or updated) to showcase the sale products during the active period.
- **Banner linking** -- If you selected a banner for the schedule, it is linked and will display automatically when the sale is live.
- **Cache clearing** -- If LiteSpeed Cache is installed and the automatic cache-clearing toggle is enabled in [Plugin Setup](/docs/admin-reference/plugin-setup), the LiteSpeed cache is purged when a sale goes live so visitors see updated prices and slides immediately.

## Assigning a Banner

Each schedule row includes a **Banner** dropdown. Selecting a banner ties that banner's display window to the sale.

If the banner you select is already claimed by another schedule, a confirmation modal will appear explaining the conflict. You can choose to reassign the banner to the current schedule or cancel and pick a different one.

## Schedule States

Every schedule exists in one of three states:

| State | Meaning |
|---|---|
| **Pending** | The start date has not arrived yet. Products are not on sale. |
| **Active** | The sale is currently running. Prices, slides, and banners are live. |
| **Expired** | The end date has passed. Sale prices have been removed and slides are no longer shown. |

## Per-Slide Duration Overrides

By default, slides use the global interval set in your SyteHero settings. Schedules can override this value so that sale slides display for a longer or shorter duration (in milliseconds) than the default.

## Slide Builder Validation

When a schedule creates slides, the slide builder checks that each product has media (an image or video) assigned. If media is missing, you will see guidance explaining which products need media before slides can be generated.

## Disabling Sales Scheduling

To turn off sales scheduling entirely:

1. Go to **SyteHero > Settings**.
2. Toggle the **Schedule** option **OFF**.
3. Save your settings.

Disabling the Schedule tab stops all sale syncing and banner injection hooks. Existing sale prices that were already written to products are not removed automatically -- you would need to clear those manually if desired.

## Retain After Schedule

By default, when a sales schedule expires, the associated slides are automatically removed from the hero rotation. The **Retain After Schedule** toggle changes this behavior:

- **Off (default):** Slides are removed when the schedule window ends.
- **On:** Slides remain in the hero rotation after the schedule expires. The sale prices are still cleared, but the product continues to appear in the slider.

This is useful when you want a product to keep its hero slot after a promotion ends.

## Schedule Evaluation on Save

When you save a schedule whose start time is in the past or equal to the current time, the schedule is activated immediately rather than waiting for the next cron tick. This means:

- Slides become live right away.
- Sale prices are applied instantly.
- Any linked banner begins displaying immediately.

This ensures there is no delay when creating a schedule that should already be active.

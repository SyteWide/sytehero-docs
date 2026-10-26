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

## Accessing the Schedules Tab

Navigate to **SyteHero > Schedules** in your WordPress admin menu.

If you do not see the Schedules tab, it must be enabled first:

1. Go to **SyteHero > Settings**.
2. Toggle the **Schedules** option **ON**.
3. Save your settings.

## Creating a Sales Schedule

1. Open the **Schedules** tab.
2. Click **Add Schedule** (or the equivalent button at the top of the list).
3. **Select products:** Use the product search field to find and select the products (or specific variations) you want to include in the sale.
4. **Set sale prices:** Enter the sale price for each selected product or variation. Type it the way your store writes prices: on a store that uses a comma for decimals, `19,99` is nineteen ninety-nine. A sale price must be lower than the product's regular price. When you save, a warning lists any that are not, and those products stay at their regular price during the sale. On FluentCart a sale price of 0 is not a sale and is not saved.
5. **Choose dates:** Pick a **Start Date** and **End Date** for the sale window. Times are in your site's time zone (**Settings → General → Timezone** in WordPress), whatever time zone your own computer is set to. Prices, the linked banner, slides and the countdown all change at the time you enter here.
6. Click **Save Schedules**.

A schedule's name and dates are also saved as you work. A date is saved when you leave its field, not while you type it, so a half-typed date never changes prices. **Save Schedules** saves everything on the page, and it first waits for any of those saves still on their way, so neither undoes the other.

## What Happens When You Save

Saving a schedule triggers several automated actions:

- **Price updates** -- Nothing is written to your products until the sale starts, so a sale price never shows in your store early, including in WooCommerce's Store API that block themes and apps read. When the sale starts, SyteHero writes the sale price and dates to each product and switches it to its sale price everywhere the store shows prices: the product page, the cart, price sorting and filtering, on-sale product lists, and a variable product's price range. For WooCommerce, this uses WooCommerce's own sale fields, so WooCommerce recognizes the sale natively. For FluentCart, SyteHero manages the pricing directly. A sale you save after its start time goes on straight away.
- **Slide creation** -- Hero slides are created (or updated) to showcase the sale products during the active period.
- **Banner linking** -- If you selected a banner for the schedule, it is linked and will display automatically when the sale is live.
- **Cache clearing** -- If LiteSpeed Cache is installed and the automatic cache-clearing toggle is enabled in [Settings](/docs/admin-reference/plugin-setup), the LiteSpeed cache is purged when a sale goes live so visitors see updated prices and slides immediately. This also happens when a sale starts or ends from a page load or from the five-minute check (see below); the cache is then cleared by the next request that can clear it, or by your site's scheduled tasks.
- **Your own sale comes back** -- On WooCommerce, if a product already had a sale price of its own when a SyteHero sale started, that sale price and its dates are put back when the SyteHero sale ends (also after one SyteHero sale hands the product to another). On FluentCart, the price the product had before the sale is put back, unless you changed the price in FluentCart while the sale was running: then your price is kept.

## Two Sales on One Product

Two schedules can include the same product at the same time. While both are running, the product shows the **lower** sale price. When the sale with the lower price ends, the other sale's price goes back on until that one ends too. When the sale with the higher price ends or is deleted, the lower price stays on, also while your license has lapsed. A sale that has not started yet never changes a product another sale is running on.

Taking a product out of one sale leaves it alone when another running sale still includes it.

## If a Start or End Is Missed

A sale's price goes on and comes off at a scheduled moment. If your site could not act at that moment -- scheduled tasks were switched off, or the site was unreachable -- SyteHero checks again every five minutes and puts it right: the sale price goes on if the sale is running, and comes off if it is over.

A sale's start and end are also picked up by your site's own traffic: after a page is sent to a visitor, SyteHero checks (at most once a minute) for a sale whose start time has passed and starts it, and for a sale whose end has passed and takes its price off (putting another running sale's price back on, if one includes the product). So on a site with visitors a sale goes on, or comes off, within about a minute, even when scheduled tasks run less often. Pages served entirely from a full-page cache do not run this check, and neither do the store's API requests (such as the cart and checkout of a block theme).

- A sale's prices are still taken off when it ends after your license has lapsed. No new sale price is applied until the license is active again.
- A price left on by a start or end that was missed before version 1.0.152 is not corrected automatically. End or remove that sale from the Schedules tab.
- Updating to version 1.0.180 removes, once, the sale prices and dates that earlier versions wrote to products before a sale started. Only values that still match the sale exactly are removed: the same sale price, and the sale's dates (or the whole days WooCommerce's product editor turns them into when you save the product there). A sale price you changed by hand in WooCommerce since is left as it is. A product two running sales include gets the lower price, and a product whose running sale's price an earlier version had replaced with a later sale's gets its running sale's price back. This runs in the background, in small batches, through your site's scheduled tasks, so it can take a few minutes on a large store.
- A sale that has not started yet no longer appears in three places that read the product's own sale dates: the banner editor's list of store sales, the product editor's sale dates, and the **Match Sale Dates** button on the **Featured Products** page. This is the same on WooCommerce and on FluentCart. All three show the sale once it starts.
- Deactivating the plugin leaves sale prices as they are, and while it is deactivated nothing ends a sale: a FluentCart sale price stays on until you activate the plugin again, and the first check after that takes off whatever ended in the meantime. A WooCommerce sale still ends at the end date stored on the product. Removing the plugin puts FluentCart prices back to what they were before the sale, and removes the WooCommerce sale prices and dates that earlier versions wrote early for sales that are not running (only where they still match the sale exactly).

## Assigning a Banner

Each schedule row includes a **Banner** dropdown. Selecting a banner ties that banner's display window to the sale.

If the banner you select is already claimed by another schedule, a confirmation modal will appear explaining the conflict. You can choose to reassign the banner to the current schedule or cancel and pick a different one.

Two sales can use the same banner one after the other. The banner follows the sale that is running, or else the next one to start, and when a sale ends it passes straight to the next sale. When no sale is left, the banner shows your own text again.

The **Go live immediately** option is greyed out for a sale whose start is still ahead. That check uses your site's time, whatever time zone your computer is set to.

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

To hide the schedule editor:

1. Go to **SyteHero > Settings**.
2. Toggle the **Schedules** option **OFF**.
3. Save your settings.

Turning the Schedules tab off hides the editor only. Sales you have already saved still start and end at their times: their prices go on and come off. To cancel a sale, delete it on the Schedules tab (turn the tab back on first).

## Retain After Schedule

By default, when a sales schedule expires, the associated slides are automatically removed from the hero rotation. The **Retain After Schedule** toggle changes this behavior:

- **Off (default):** Slides are removed when the schedule window ends.
- **On:** Slides remain in the hero rotation after the schedule expires. The sale prices are still cleared, but the product continues to appear in the slider.

This is useful when you want a product to keep its hero slot after a promotion ends.

## Sale Countdown Timer

Each sales schedule can display an on-screen countdown timer that ticks down to the sale end time. The countdown overlay appears on the sale's hero slides and syncs with slide transitions automatically.

### Enabling the Countdown

1. Open the **Schedules** tab.
2. On the sale card, toggle **Show Countdown** on.
3. Choose a **Position**:
   - **Bottom Right** (default) — floating overlay in the bottom-right corner of the slide.
   - **Below CTA** — appears directly beneath the CTA button.
   - **Top Strip** — a full-width bar across the top of the slide.
4. Save your schedules.

:::tip No extra setup
The countdown activates automatically when the sale is live and disappears when the sale ends. No shortcode attributes are needed — the timer is injected on any page where the hero slider renders.
:::

## Schedule Evaluation on Save

When you save a schedule whose start time is in the past or equal to the current time, the schedule is activated immediately rather than waiting for the next cron tick. This means:

- Slides become live right away.
- Sale prices are applied instantly.
- Any linked banner begins displaying immediately.

This ensures there is no delay when creating a schedule that should already be active.

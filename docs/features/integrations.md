---
sidebar_position: 9
title: Integrations
description: Connect SyteSlyders to external services like Shippo for shipping and tracking.
---

# Integrations

SyteSlyders integrates with your WordPress theme and ecommerce platform to provide hero sliders, sales scheduling, and merchandising. For theme and ecommerce platform setup, see the [Theme Guides](/docs/themes/avada) and [Ecommerce Platforms](/docs/ecommerce/woocommerce) sections.

The **Integrations tab** in the SyteSlyders admin provides connections to additional external services. Currently, the available integration is Shippo for shipping and tracking data.

## Finding the Integrations Tab

Open the SyteSlyders admin page and click the **Integrations** tab in the top navigation bar. Each integration appears as a card with its own configuration section.

## Shippo Integration

Shippo provides shipping label and tracking data for your WooCommerce orders. When enabled, tracking information appears in your Sales Summary Report emails.

### Setup

1. Open the **Integrations** tab in the SyteSlyders admin.
2. Locate the **Shippo** card.
3. Toggle **Enable Shippo** to on.
4. Enter your Shippo API key in the **API Key** field.
5. Click **Save**.
6. Click **Test Connection** to verify the key is valid.

A green "Connected" badge confirms the integration is active.

### API Key

You can find your Shippo API key in the Shippo dashboard under **Settings > API**. Keys come in two types:

| Key type | Prefix | Use case |
|----------|--------|----------|
| Live | `shippo_live_` | Production -- real shipment data |
| Test | `shippo_test_` | Testing -- simulated data, stricter rate limits |

Your API key is encrypted before being stored in the database and is never displayed in full after saving. To replace a key, enter a new one and save. To remove a key entirely, use the **Clear API Key** button.

### Per-Report Shippo Toggle

Each Sales Summary Report has its own Shippo toggle, independent of the global integration setting.

1. Go to the **Sales** tab.
2. Expand the **Sales Summary Report** section.
3. Under **Display Options**, find the **Include Shippo tracking** toggle.
4. Enable or disable it for that report.

This lets you include tracking data in some reports but not others -- for example, tracking in the daily summary but not in real-time sale notifications.

## Tracking Data in Emails

When Shippo is enabled and the per-report toggle is on, each order card in the Sales Summary email includes a tracking section with:

- **Tracking number** -- Linked to the carrier's tracking page so recipients can click through for full details.
- **Carrier badge** -- Shows the carrier name (e.g., USPS, UPS, FedEx, DHL).
- **Status badge** -- Color-coded to indicate the current shipment status:
  - **Pre-transit** (gray) -- Label created, not yet shipped.
  - **In transit** (blue) -- On the way to the destination.
  - **Delivered** (green) -- Successfully delivered.
  - **Returned** (orange) -- Returned to sender.
  - **Failed** (red) -- Delivery attempt failed.
- **ETA** -- Estimated delivery date, when available from the carrier.

Orders with multiple shipments display a tracking row for each.

## Platform Availability

Shippo tracking is currently available for **WooCommerce** stores only. FluentCart support is not yet available.

## Troubleshooting

### API key is not accepted

- Verify the key starts with `shippo_live_` (production) or `shippo_test_` (testing).
- Copy the key directly from the Shippo dashboard to avoid extra whitespace.
- Click **Test Connection** after saving to confirm the key works.

### No tracking data appears in emails

- Confirm the Shippo integration is enabled on the **Integrations** tab and shows a "Connected" badge.
- Confirm the **Include Shippo tracking** toggle is enabled under Display Options for the specific Sales Summary Report.
- Verify that the orders exist in your Shippo account with matching order numbers.
- Check that labels have been purchased in Shippo for those orders -- tracking data is only available after a label is created.

### Tracking data is outdated

Tracking data is cached for one hour. After that period, the next report will fetch fresh data from Shippo. This is not configurable.

### Rate limit warnings

Shippo enforces per-minute rate limits. If your store has a very large number of orders in a single report period, some orders may not have tracking data in that email. The data will be fetched on the next report cycle when the rate limit resets.

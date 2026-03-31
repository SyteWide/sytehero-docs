---
sidebar_position: 11
title: Sales Summary Report
description: Automated email reports summarizing completed sales.
---

# Sales Summary Report

The Sales Summary Report sends email reports about completed orders from your WooCommerce or FluentCart store. It sits below the Schedule Report section on the Sales tab.

## Configuration

Open the **Sales** tab in the SyteHero admin and expand the **Sales Summary Report** section.

### Recipients

- **To** — Comma-separated email addresses that receive the report.
- **CC** — Comma-separated CC addresses.
- **SyteOps Contacts** — If SyteOps is active, click contacts to cycle through off → To → CC. This picker is independent of the Schedule Report picker.

### Periodic Summary

Enable periodic summaries to receive automatic order digests.

| Setting | Description |
|---------|-------------|
| Frequency | Daily, Weekly, or Monthly |
| Send Time | Hour of day (site timezone) when the report is sent |
| Day of Week | For weekly frequency — which day (Mon–Sun) |
| Day of Month | For monthly frequency — which day (1–28) |
| Send when empty | Toggle to receive a report even when there are no orders in the period |

Period windows:
- **Daily** — Yesterday (midnight to midnight, site timezone)
- **Weekly** — Previous Monday through Sunday
- **Monthly** — Previous calendar month

### Real-Time Notifications

Enable per-sale email notifications to get an email every time an order is completed.

| Setting | Description |
|---------|-------------|
| Digest Window | **Immediately** sends one email per sale. **5/15/30 min** batches multiple sales into a single digest email. |

Deduplication prevents multiple emails for the same order when both order completion and payment hooks fire.

### Order Filters

- **Only include completed orders** — When enabled, emails only include orders with a "completed" status, excluding "processing" and "on-hold" orders. This applies to both periodic summaries and real-time notifications. For real-time, a processing order is silently skipped and will be picked up when it transitions to completed. FluentCart stores are unaffected since all paid orders are already in a completed state.

### Display Options

- **Show thumbnails** — Include product images in the email (embedded via CID for email client compatibility).
- **Logo URL** — Custom logo for the email header. Falls back to the Schedule Report logo if empty.
- **Show order attribution source** — Display how each customer found your store. When enabled, each order card shows a "Source" row with badges indicating the traffic source (e.g., "Facebook (Referral)", "Google (Organic)", "Direct") and whether the customer clicked a hero slide CTA before purchasing ("via Hero"). Attribution data comes from WooCommerce's built-in order attribution (WC 8.5+) or FluentCart's order source columns. If an order has no attribution data, the Source row is omitted even when the setting is enabled.
- **Include Shippo tracking data** — When the Shippo integration is active and an API key is configured on the Integrations tab, enable this toggle to include shipping tracking data (tracking number, carrier, status, ETA) in periodic and digest emails. The toggle is greyed out when the integration is not active or no API key is set. Real-time immediate emails skip tracking data since the order was just placed and no tracking exists yet.

### Actions

- **Save Settings** — Persists all settings and schedules/unschedules the periodic cron.
- **Send Test Email** — Saves settings, then sends a test email using orders from the most recent period window.

## Dark Mode

Both the Sales Summary and Schedule Report emails support automatic dark mode. Email clients that respect `prefers-color-scheme: dark` (Apple Mail, iOS Mail, Yahoo Mail, Outlook.com) will render emails with dark backgrounds, adjusted text colors, and inverted status badges. Product thumbnails retain a white background pad so images remain clear against dark surfaces. Gmail strips `<style>` blocks and applies its own auto-darkening — this is a Gmail limitation and cannot be overridden.

## Email Content

### Periodic Summary Email

1. Dark header bar with logo and "Sales Summary" subtitle
2. Statistics banner: period label, total orders, total revenue, average order value, unique customers, total shipping label cost (when Shippo tracking data includes cost)
3. Top 3 products by quantity sold (with thumbnails, qty, revenue)
4. Individual order cards: order number, date, customer, payment method, status badge, attribution source badges (when enabled — external source badge and/or purple "via Hero" badge), shipping & tracking section (when Shippo enabled — carrier badge, linked tracking number, status badge, ETA, label cost), line items table
5. Footer with admin link

### Real-Time / New Sale Email

1. Dark header bar with "New Sale" subtitle
2. Single order card with full details
3. Footer with admin link

## Hero Click Tracking

When a customer clicks the hero slide CTA button, SyteHero records that interaction. If the customer later completes a purchase, the order is flagged as "via Hero" and a purple badge appears in the sales summary email (when "Show order attribution source" is enabled). This helps you measure how effectively your hero slider drives sales.

The tracking works automatically — no configuration is needed beyond enabling the attribution display option. It works on both WooCommerce and FluentCart stores.

:::info
For detailed per-slide performance data (impressions, clicks, and attributed revenue over time), see the **Analytics** tab in the SyteHero admin.
:::

## Order Statuses

The report includes orders with these statuses by default:
- **WooCommerce**: `completed`, `processing`, `on-hold`
- **FluentCart**: `paid`

When the "Only include completed orders" filter is enabled, WooCommerce reports are limited to `completed` orders only.

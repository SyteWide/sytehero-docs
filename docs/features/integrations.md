---
sidebar_position: 9
title: Integrations
description: Connect SyteHero to external services like Shippo, Google Calendar, fal.ai, and AI Providers for text-based AI features.
---

# Integrations

SyteHero integrates with your WordPress theme and ecommerce platform to provide hero sliders, sales scheduling, and merchandising. For theme and ecommerce platform setup, see the [Theme Guides](/docs/themes/avada) and [Ecommerce Platforms](/docs/ecommerce/woocommerce) sections.

The **Integrations** page in the SyteHero admin (**SyteHero > Integrations** in the sidebar) provides connections to external services and AI providers. Available integrations include Shippo for shipping data, Google Calendar for schedule syncing, fal.ai for AI image generation, and AI Providers for text-based AI features like automatic image SEO metadata.

## Finding the Integrations Tab

Open the SyteHero admin page and click the **Integrations** tab in the top navigation bar. Each integration appears as a card with its own configuration section.

## Shippo Integration

Shippo provides shipping label and tracking data for your WooCommerce orders. When enabled, tracking information appears in your Sales Summary Report emails.

### Setup

1. Open the **Integrations** tab in the SyteHero admin.
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

## Google Calendar Integration

Google Calendar keeps your [sales schedules](/docs/features/sales-scheduling) and calendar events in sync. When you create or edit a schedule in SyteHero, it appears as an event in Google Calendar. When someone edits the event in Google Calendar, those changes sync back to the schedule automatically.

### Prerequisites

:::tip Before you start
You need:

- A Google account with access to Google Calendar.
- A Google Cloud project with the **Calendar API** enabled and an **OAuth 2.0 client** (Web Application type) configured. See the [OAuth Setup Guide](/docs/features/google-calendar-setup) for step-by-step instructions. The authorized redirect URI must match the URL shown on the Google Calendar card after saving credentials.
- The PHP **OpenSSL** extension must be active on your server (required for encrypted credential storage).
:::

### Setup

1. Open the **Integrations** tab in the SyteHero admin.
2. Locate the **Google Calendar** card.
3. Enter your **Client ID** and **Client Secret** from the Google Cloud Console.
4. Click **Save Credentials**.
5. Copy the **Redirect URI** shown on the card and add it to your Google Cloud Console OAuth client's authorized redirect URIs.
6. Click **Connect with Google** to start the OAuth authorization flow.
7. Authorize access in the Google consent screen.
8. After redirect, a green "Connected" badge confirms the integration is active, along with the connected Google account email.
9. Select a calendar from the **Calendar** dropdown.
10. Optionally toggle **Auto-Sync** on (enables automatic sync every 15 minutes).
11. Click **Save Settings**.

### How Sync Works

Sync runs in two directions:

- **Push (SyteHero to Google Calendar):** When you save schedules on the Sales tab, linked events in Google Calendar are automatically created, updated, or deleted to match.
- **Pull (Google Calendar to SyteHero):** Every 15 minutes (when auto-sync is enabled) or on demand via the **Sync Now** button, SyteHero checks for changes in Google Calendar and updates the corresponding schedules.

:::info Synced fields
**What syncs:** Schedule label, start date/time, and end date/time.

**What does not sync:** Products, prices, slides, and banner assignments are managed only within SyteHero. Google Calendar events reflect the schedule window and name, not the sale contents.
:::

### Per-Schedule Sync Toggle

Each schedule on the **Sales** tab has a Google Calendar sync toggle. You can disable sync for individual schedules without disconnecting the integration.

1. Go to the **Sales** tab.
2. Find the schedule row.
3. Use the sync toggle to enable or disable Google Calendar sync for that schedule.

Disabling sync for a schedule stops both push and pull updates for it. The Google Calendar event remains but is no longer linked.

### Importing Events from Google Calendar

You can create schedules from existing Google Calendar events:

1. On the **Sales** tab, click **Import from Google Calendar**.
2. A modal lists future events (next 90 days) from the selected calendar that are not already linked to a schedule.
3. Select the events you want to import.
4. Click **Import**.

Each imported event creates a shell schedule with the event name and dates but no products or slides. You can then add products and configure pricing on the **Sales** tab.

### All-Day Events

All-day events in Google Calendar are supported. The start time maps to midnight and the end time maps to 11:59 PM in your site's configured timezone. Round-trip consistency is maintained -- pushing an all-day-originated schedule back to Google Calendar preserves the all-day format.

### Disconnecting

:::caution
Disconnecting revokes the Google token, removes all sync linkage, and stops the automatic sync. Existing schedules are not deleted -- they simply lose their Google Calendar link.
:::

1. On the **Integrations** tab, click **Disconnect** in the Google Calendar card.
2. Confirm the action.

### Troubleshooting

#### Cannot connect or OAuth fails

- Verify the **Client ID** and **Client Secret** match your Google Cloud Console credentials.
- Ensure the authorized redirect URI in Google Cloud Console matches the URL shown on the Google Calendar card.
- If you have not yet created your Google Cloud credentials, follow the [OAuth Setup Guide](/docs/features/google-calendar-setup).
- Check that the PHP OpenSSL extension is active on your server.

#### Sync does not update schedules

- Confirm the Google Calendar card shows "Connected" and a calendar is selected.
- Verify **Auto-Sync** is enabled if relying on automatic sync.
- Check that the per-schedule sync toggle is enabled for the schedules in question.
- Try clicking **Sync Now** to trigger an immediate sync.

#### Event deleted in Google Calendar but schedule remains

Deleting a Google Calendar event unlinks the schedule but does not delete it. The schedule remains in SyteHero and must be removed manually if no longer needed.

#### "Sync is already in progress"

A sync lock prevents concurrent runs. The lock expires after 30 seconds. Wait briefly and try again.

## AI Image Providers Integration

The AI Image Providers card controls image-generation providers used by AI Studio and image-related workflows. Each provider appears in its own card so you can manage credentials and connection tests independently.

### Setup

1. Open the **Integrations** tab in the SyteHero admin.
2. Locate the **AI Image Providers** card.
3. In each provider card, enable or disable that provider as needed.
4. Enter or update API keys for the providers you want to use.
5. Optionally click **Test Connection** on individual provider cards to validate credentials.
6. Click the shared **Save Settings** button below the provider cards to save all provider changes at once.

### Capability Routing

The **Capability Routing** section appears below the provider cards. It lets you choose which provider handles each capability (Generate, Transform, Remove Background, Upscale, Extend to Fit, and Image-to-Video).

- Routing options only show providers that support the capability.
- Providers without a configured key are excluded from selectable routing options.
- Click **Save Routing** after making routing changes.

## AI Providers Integration

The AI Providers card lets you configure API keys for text-based AI providers (OpenAI, Anthropic, OpenRouter, Gemini, Straico). These keys power features like automatic SEO metadata generation when saving AI-generated images.

### Setup

1. Open the **Integrations** tab in the SyteHero admin.
2. Locate the **AI Providers** card.
3. Enter an API key for one or more providers.
4. Click **Save Settings**.
5. Under **Function Configuration**, select which provider and model to use for each function (e.g., Image SEO Meta).

### Function Configuration

Each AI-powered function can use a different provider and model:

| Function | Description | Status |
|----------|-------------|--------|
| Image SEO Meta | Generates title, alt text, caption, and description for AI images | Active |
| Prompt Enhancement | Enhances fal.ai generation prompts | Coming Soon |

### Key Storage

API keys are encrypted at rest using AES-256-CBC (requires the PHP OpenSSL extension). Keys are stored independently in SyteHero and are not shared with other plugins.

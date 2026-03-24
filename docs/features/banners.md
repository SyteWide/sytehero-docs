---
sidebar_position: 5
title: Banners
description: Manage promotional banners with date-based scheduling.
---

# Banners

Banners let you display promotional content on your site with optional date-based scheduling. They can run independently or be linked to a sales schedule for fully automated campaign launches.

## Accessing the Banners Tab

Navigate to **SyteSlyders > Banners** in your WordPress admin menu.

If you do not see the Banners tab, it must be enabled first:

1. Go to **SyteSlyders > Settings**.
2. Toggle the **Banners** option **ON**.
3. Save your settings.

## Creating a Banner

1. Open the **Banners** tab.
2. Click **Add Banner** (or the equivalent button at the top of the list).
3. **Set banner content:** Enter the HTML that should be displayed. This can include text, images, links, or any valid HTML markup.
4. **Schedule dates:** Choose a **Start Date** and **End Date** to control when the banner is visible.
5. **Enable or disable:** Use the toggle to activate or deactivate the banner. A disabled banner will not display regardless of its scheduled dates.
6. Save your changes.

## Linking Banners to Sales Schedules

Banners become even more powerful when paired with sales scheduling:

1. Go to **SyteSlyders > Schedule**.
2. On any schedule row, use the **Banner** dropdown to select a banner.
3. Save the schedule.

When the linked sale goes live, the banner HTML is injected automatically on your site. This means you can prepare both the sale pricing and the promotional banner ahead of time, and everything activates together on the scheduled start date.

For details on how banner assignment and conflict resolution work, see the [Sales Scheduling](sales-scheduling) documentation.

## Disabling Banners

To turn off the banners feature entirely:

1. Go to **SyteSlyders > Settings**.
2. Toggle the **Banners** option **OFF**.
3. Save your settings.

Disabling hides the Banners tab from the admin menu and stops all banner scheduling and display hooks. No banners will be shown on the front end while the feature is off.

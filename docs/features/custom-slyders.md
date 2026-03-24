---
sidebar_position: 3
title: Custom Slyders
description: Create standalone sliders independent of your product catalog.
---

# Custom Slyders

Custom Slyders let you create standalone hero-like sliders that are not tied to your product catalog. They are ideal for non-product hero sections, landing pages, seasonal promotions, or any page where you want a full-featured slider without product dependencies.

## Accessing the Custom Slyders Tab

Navigate to **SyteSlyders > Custom Slyders** in your WordPress admin menu.

## Creating a Custom Slyder

1. Open the **Custom Slyders** tab.
2. Click **Add Custom Slyder** (or the equivalent button).
3. Configure the slyder using the settings described below.
4. Save your changes.

## Custom Slyder Settings

Each Custom Slyder supports the following options:

| Setting | Description |
|---|---|
| **Enable** | Toggle the slyder on or off. A disabled slyder will not render even if its shortcode is placed on a page. |
| **Name** | An optional label for your reference (not displayed on the front end). |
| **Background Media URL** | The URL of the image or video to use as the slide background. |
| **Image URL** | A fallback background image shown when the Background Media URL is empty or fails to load. |
| **CTA URL** | The link destination for the call-to-action button. |
| **CTA Button Text** | The label displayed on the CTA button. |
| **CTA Open in New Tab** | When enabled, clicking the CTA button opens the link in a new browser tab instead of the current one. |
| **Text Area 1** | Primary overlay text (headline, title, etc.). |
| **Text Area 2** | Secondary overlay text (tagline, description, etc.). |
| **Interval** | Time in milliseconds before transitioning to the next slide (if the slyder has multiple slides). |
| **Animation** | Transition style between slides: **Fade** or **Slide**. |

## Placing a Custom Slyder on a Page

Use the shortcode to embed a Custom Slyder anywhere on your site:

```
[slyders_custom_hero id="X"]
```

Replace `X` with the ID of the Custom Slyder you want to display. The ID is shown in the Custom Slyders tab next to each entry.

### View-Locked Variants

To display a Custom Slyder only on a specific device size, use the view-locked shortcodes:

- **Desktop only:** `[slyders_custom_hero_desktop id="X"]`
- **Tablet only:** `[slyders_custom_hero_tablet id="X"]`
- **Mobile only:** `[slyders_custom_hero_mobile id="X"]`

This lets you show different slyders (or hide them entirely) depending on the visitor's screen size.

## CSS Classes for Styling

Each Custom Slyder generates CSS classes that you can use for targeted styling. These classes are shown in the Custom Slyders tab -- copy them and use them in the [Custom CSS](custom-css) tab to apply your own styles.

## Use Cases

- **Landing pages:** Create a hero section with custom imagery and messaging, independent of your product catalog.
- **Seasonal promotions:** Build a holiday or event-themed slider and activate it only during the relevant period.
- **Non-product pages:** Add polished hero sliders to About, Contact, or informational pages.
- **A/B testing layouts:** Create multiple slyders with different content and swap them by changing the shortcode ID.

---
sidebar_position: 1
title: Common Issues
description: Solutions for common SyteHero problems and error messages.
---

# Troubleshooting

## 1. Plugin Still Locked After Entering License

Re-save your key and email on **Settings**, then click **Refresh License Status**. Check for `product_mismatch`, `variation_mismatch`, or `email_mismatch` messages in the status table.

**"Activation Required" after updating to v1.0.168.** From v1.0.168 a license unlocks only the sites it is activated for. Click **Save License** on **Settings**: it activates this site with the key and email already saved. If the notice says the license has no free activation, deactivate it on another site first. If the site moved to a new address, run `wp sytehero license move --from=<old address>` on the new site instead.

**Locked although the license is active, with no notice about the address.** SyteHero locks when it has not confirmed the license for 15 days (since v1.0.168), for example on a site where WordPress's scheduled tasks never run. Open the dashboard as an administrator (it checks the license when 14 days have passed) or click **Refresh License Status**.

## 2. Changes Not Showing in Admin

Click **Purge Admin CSS/JS** or **Clear Plugin Update Cache** (buttons above the tabs).

## 3. Tabs Missing or Hidden

Some plugins or themes inject CSS that hides tabs. SyteHero has built-in tab recovery. Check the browser console for diagnostic logs. If the Schedule or Banners tab is missing, check **Settings → tab toggles** to ensure they are enabled.

## 4. Slider Not Appearing on Front-End

Verify the following:

- License is active
- At least one product is featured with hero media
- The shortcode is placed on the page
- Page and object caches are cleared

## 5. Product Missing from the Slider

Ensure the product:

- Is marked Featured
- Has Hero media assigned
- Is published
- Has an active schedule (if one is set)

## 6. Overlay Text Floating to Bottom

This is an Avada-specific issue. Add the following to **Custom CSS**:

```css
.fusion-column-wrapper:has(.sytehero-fhsbg) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: <your value>;
}
```

Replace `<your value>` with the desired minimum height for your hero section. Divi and Elementor handle column centering differently — see the [theme guides](/docs/themes/avada) for details.

## 7. CTA Button Not Updating

Ensure the button has the `.sytehero-hero-cta` class and that the frontend JavaScript is loading. Check the browser Network tab to confirm scripts are enqueued.

## 8. Hero Animation Not Running

The slider engine must be loaded. If using FlexSlider, Avada and Divi provide it natively. Elementor sites use SyteHero's bundled slider engines (Swiper or Splide recommended). Verify the library is enqueued by checking the page source or the browser Network tab. See [Slider Engines](/docs/features/slider-engines) for details.

## 9. No-Active-Slides Email Not Sending

Set a valid **Primary Contact** in **Settings → No Active Slides Alert Email**. Use **Send Test Email** to verify delivery. Check that your site can send emails (a plugin like WP Mail SMTP can help diagnose mail issues).

## 10. Stale Update Notice

Click **Clear Plugin Update Cache**. If the notice persists after license deactivation, the plugin auto-strips stale notices on the next page load.

## 11. Products/Pages Not Appearing in Search

Click **Refresh WooCommerce & Page Inventory Cache** to flush cached lookups.

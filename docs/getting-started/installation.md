---
sidebar_position: 1
title: Installation & License Activation
description: Install SyteHero, activate your license, and configure your theme and ecommerce platform.
---

# Installation & License Activation

## Install the Plugin

Upload the ZIP via **WP Admin → Plugins → Add New → Upload**, or install via the WordPress plugin directory if available.

## Activate

Go to **Plugins** and click **Activate** on SyteHero. The `sytehero-featured-image` product tag is created automatically.

## Open Plugin Setup

Navigate to **SyteHero → Plugin Setup**. This is the only screen visible before license activation.

## Enter Your License

Paste your **SyteHero License Key** and purchasing **customer email**, then click **Save Changes**.

## Verify Activation

The status table shows activations used/available, active email, and validation status (Valid, Offline, etc.). Use **Refresh License Status** to re-validate.

## Select Your Theme

Choose your theme/framework. Avada, Divi, and Elementor are supported.

## Select Your Ecommerce Provider

Choose WooCommerce or FluentCart.

## Use Detection Helpers

**Detect Theme** and **Detect eCommerce Plugin** can auto-select if your active theme/plugin is supported.

## Enable Debug Logging (Optional)

Toggle **Write debug logs to file** for diagnostics.

---

## Troubleshooting Activation

| Error | Meaning |
|---|---|
| `product_mismatch` | License key is for a different product |
| `variation_mismatch` | License key is for a different variation |
| `email_mismatch` | Email doesn't match the purchase email |

To replace a license: use **Deactivate license on save** first, then enter the new key.

---

## Update Channels

- **Production** (default): Updates from sytewide.com. Requires a valid license.
- **Beta/Development**: Updates from GitHub. Requires a validated GitHub beta token. Use **Revoke beta credential on save** to clear it.

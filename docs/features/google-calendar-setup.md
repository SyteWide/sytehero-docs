---
sidebar_position: 10
title: "Google Calendar: OAuth Setup"
description: "Step-by-step guide to creating Google Cloud OAuth 2.0 credentials for the SyteSlyders Google Calendar integration."
---

# Google Calendar: OAuth Setup

Before you can connect Google Calendar to SyteSlyders, you need to create OAuth 2.0 credentials in the Google Cloud Console. This guide walks through the process step by step. Once you have your credentials, return to the [Google Calendar Integration setup](/docs/features/integrations#setup-1) to connect your calendar.

:::info Time estimate
This process takes approximately 5--10 minutes. You only need to do it once.
:::

## Step 1: Create or Select a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com/).
2. Sign in with the Google account you want to use for calendar syncing.
3. Click the project dropdown in the top navigation bar.
4. Click **New Project** (or select an existing project if you already have one).
5. Enter a project name (e.g., "SyteSlyders Calendar") and click **Create**.
6. Wait for the project to be created, then select it from the project dropdown.

## Step 2: Enable the Google Calendar API

1. In the left sidebar, go to **APIs & Services > Library**.
2. Search for **Google Calendar API**.
3. Click **Google Calendar API** in the results.
4. Click **Enable**.

:::tip
If the button says "Manage" instead of "Enable," the API is already enabled for this project.
:::

## Step 3: Configure the OAuth Consent Screen

1. In the left sidebar, go to **APIs & Services > OAuth consent screen**.
2. Select **External** as the user type and click **Create**.
3. Fill in the required fields:
   - **App name:** Enter your site name (e.g., "My Store Calendar Sync").
   - **User support email:** Select your email address.
   - **Developer contact information:** Enter your email address.
4. Click **Save and Continue**.
5. On the **Scopes** screen, click **Add or Remove Scopes**.
6. Search for `https://www.googleapis.com/auth/calendar` and check it.
7. Click **Update**, then **Save and Continue**.
8. On the **Test users** screen, click **Add Users**.
9. Enter the Google account email address that will authorize the integration in SyteSlyders.
10. Click **Save and Continue**.
11. Review the summary and click **Back to Dashboard**.

:::caution Publishing status
Your app will be in **Testing** mode. This is fine for SyteSlyders -- only the Google accounts you add as test users can authorize the integration. You do **not** need to submit for Google verification unless you plan to let arbitrary Google users connect, which is not the case for a WordPress plugin admin setting.
:::

## Step 4: Create OAuth 2.0 Credentials

1. In the left sidebar, go to **APIs & Services > Credentials**.
2. Click **Create Credentials** at the top and select **OAuth client ID**.
3. For **Application type**, select **Web application**.
4. Enter a name (e.g., "SyteSlyders").
5. Under **Authorized redirect URIs**, click **Add URI**.
6. Enter the redirect URI shown on the Google Calendar card in your SyteSlyders admin.
7. Click **Create**.

:::info Finding your redirect URI
The redirect URI is displayed on the Google Calendar card **after** you save your Client ID and Client Secret on the SyteSlyders Integrations tab. It follows this format:

`https://yoursite.com/wp-admin/admin-post.php?action=slyders_gcal_oauth_callback`

If you have not saved credentials yet, skip the redirect URI for now. You can come back and add it after completing Step 5 below and saving your credentials in SyteSlyders.
:::

## Step 5: Copy Your Credentials

1. A dialog appears showing your **Client ID** and **Client Secret**.
2. Copy both values -- you will paste them into SyteSlyders on the Integrations tab.
3. Click **OK** to close the dialog.

:::caution
Store your Client Secret securely. Google will not show it again in full after you close this dialog. If you lose it, you will need to create a new OAuth client ID.
:::

## Next Steps

You now have your OAuth 2.0 Client ID and Client Secret. Head to the [Google Calendar Integration setup](/docs/features/integrations#setup-1) to enter these credentials and connect your calendar.

## Troubleshooting

### "Access blocked: This app's request is invalid"

This usually means the redirect URI does not match. Double-check that the **Authorized redirect URI** in Google Cloud Console exactly matches the one shown on the SyteSlyders Google Calendar card, including the protocol (`https` vs `http`).

### "Error 403: access_denied"

The Google account you are using to authorize is not listed as a test user. Go back to **APIs & Services > OAuth consent screen > Test users** and add the account (see Step 3.8 above).

### Consent screen asks for unexpected permissions

SyteSlyders requests two scopes:

- `https://www.googleapis.com/auth/calendar` -- read/write access to Google Calendar events.
- `https://www.googleapis.com/auth/userinfo.email` -- used to display the connected account email in the plugin.

It does not request access to any other Google services.

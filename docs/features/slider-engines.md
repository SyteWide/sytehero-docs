---
sidebar_position: 8
title: Slider Engines
description: Choose and configure FlexSlider, Swiper, or Splide as your slider engine.
---

# Slider Engines

SyteSlyders supports multiple slider engines — the underlying JavaScript library that powers slide transitions and touch interactions. You can choose the engine that best fits your site's needs.

## Available Engines

| Engine | Description |
|--------|-------------|
| **FlexSlider** (default) | jQuery-based slider bundled with most WordPress themes. Stable and widely compatible. |
| **Swiper** | Modern, touch-enabled slider with CSS-driven transitions and rich animation effects. |
| **Splide** | Lightweight, dependency-free slider with accessible defaults. |

## Selecting an Engine

1. Go to **SyteSlyders → Plugin Setup**.
2. Under **Theme Configuration**, find the **Slider Engine** dropdown.
3. Select your preferred engine.
4. Click **Save Changes**.

The change takes effect immediately on the frontend — no additional configuration is required.

## Per-Engine Settings

Each engine exposes its own configuration options. After selecting an engine, expand the **Engine Settings** collapsible panels on the Plugin Setup page to adjust engine-specific behavior.

### FlexSlider Settings

| Setting | Description |
|---------|-------------|
| **Smooth Height** | Automatically adjust slider height to match each slide's content. |
| **Animation Easing** | Transition easing function: `swing` (default) or `linear`. |

### Swiper Settings

| Setting | Description |
|---------|-------------|
| **Pagination Style** | Navigation indicator style: `bullets` (default), `fraction`, or `progressbar`. |
| **Animation Easing** | CSS transition timing: `ease` (default), `ease-in`, `ease-out`, `ease-in-out`, or `linear`. |
| **Free Mode** | Allow free-form swiping without snapping to slide boundaries. |

### Splide Settings

| Setting | Description |
|---------|-------------|
| **Direction** | Slide direction: `ltr` (left-to-right, default) or `ttb` (top-to-bottom). |
| **Pause on Hover** | Pause autoplay when the user hovers over the slider. |

## Animation Options

The available slide transition animations depend on the selected engine:

| Engine | Available Animations |
|--------|---------------------|
| FlexSlider | fade, slide |
| Swiper | fade, slide, cube, flip |
| Splide | fade, slide |

Animation is configured per shortcode (featured hero, custom slyders) and validated against the active engine. If you switch engines, any unsupported animation value falls back to a supported default.

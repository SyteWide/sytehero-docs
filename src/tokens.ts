/**
 * Design tokens for use in React components.
 * These mirror the CSS custom properties in custom.css and the Tailwind config.
 */

export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93bbfd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  success: '#16a34a',
  warning: '#d97706',
  error: '#dc2626',
  info: '#2563eb',
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 996,
  xl: 1280,
} as const;

/**
 * Design tokens for use in React components.
 * These mirror the CSS custom properties in custom.css and the Tailwind config.
 */

export const colors = {
  // SyteHero brand: terra-cotta scale.
  primary: {
    50: '#FDF1EF',
    100: '#FBD8D2',
    200: '#F8C2BA',
    300: '#F2A096',
    400: '#E97A6E',
    500: '#D85A50',
    600: '#C24A40',
    700: '#B4453B',
    800: '#952F26',
    900: '#7A271F',
    950: '#3D120F',
  },
  success: '#16a34a',
  warning: '#d97706',
  error: '#dc2626',
  info: '#D85A50',
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 996,
  xl: 1280,
} as const;

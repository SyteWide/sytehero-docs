/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.{md,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false, // Avoid conflicts with Docusaurus Infima
  },
  theme: {
    extend: {
      colors: {
        // SyteHero brand: terra-cotta scale (kept in sync with src/tokens.ts).
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
        surface: {
          DEFAULT: 'var(--sl-bg-surface)',
          raised: 'var(--sl-bg-surface-raised)',
          overlay: 'var(--sl-bg-surface-overlay)',
        },
        'sl-border': 'var(--sl-border-color)',
        'text-primary': 'var(--sl-text-primary)',
        'text-secondary': 'var(--sl-text-secondary)',
        'text-muted': 'var(--sl-text-muted)',
        success: 'var(--sl-color-success)',
        warning: 'var(--sl-color-warning)',
        error: 'var(--sl-color-error)',
        info: 'var(--sl-color-info)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: [
          'Plus Jakarta Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['Fira Code', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

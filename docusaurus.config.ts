import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SyteSlyders Documentation',
  tagline: 'Dynamic hero sliders, sales scheduling, and visual merchandising for WordPress.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://slydersdocs.sytewide.com',
  baseUrl: '/',

  organizationName: 'sculpted-marketing',
  projectName: 'syteslyders-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/syteslyders-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SyteSlyders',
      logo: {
        alt: 'SyteSlyders Logo',
        src: 'img/logo.png',
        width: 40,
        height: 40,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://sytewide.com',
          label: 'SyteWide.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/getting-started/installation'},
            {label: 'Theme Guides', to: '/docs/themes/avada'},
            {label: 'Features', to: '/docs/features/featured-products'},
            {label: 'Admin Reference', to: '/docs/admin-reference/plugin-setup'},
            {label: 'Troubleshooting', to: '/docs/troubleshooting/common-issues'},
          ],
        },
        {
          title: 'Themes',
          items: [
            {label: 'Avada', href: 'https://avada.theme-fusion.com'},
            {label: 'Divi', href: 'https://www.elegantthemes.com/gallery/divi/'},
            {label: 'Elementor', href: 'https://elementor.com'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'SyteWide.com', href: 'https://sytewide.com'},
            {label: 'WooCommerce', href: 'https://woocommerce.com'},
            {label: 'FluentCart', href: 'https://fluentcart.com'},
          ],
        },
      ],
      copyright: `Copyright \u00a9 ${new Date().getFullYear()} SyteWide. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

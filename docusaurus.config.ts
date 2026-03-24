import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';

const config: Config = {
  title: 'SyteSlyders Documentation',
  tagline: 'Dynamic hero sliders, sales scheduling, and visual merchandising for WordPress.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/Inter-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/Inter-Medium.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/PlusJakartaSans-SemiBold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
  ],

  url: 'https://syteslydersdocs.sytewide.com',
  baseUrl: '/',

  organizationName: 'sculpted-marketing',
  projectName: 'syteslyders-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  plugins: [
    './plugins/tailwind-plugin.cjs',
    'docusaurus-plugin-image-zoom',
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarShortcutHint: true,
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          remarkPlugins: [[npm2yarn, {sync: true}]],
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
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgba(255, 255, 255, 0.9)',
        dark: 'rgba(22, 22, 22, 0.9)',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

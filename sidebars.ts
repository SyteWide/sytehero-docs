import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Themes',
      items: [
        'themes/avada',
        'themes/divi',
        'themes/elementor',
      ],
    },
    {
      type: 'category',
      label: 'Ecommerce Platforms',
      items: [
        'ecommerce/woocommerce',
        'ecommerce/fluentcart',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/featured-products',
        'features/hero-text',
        'features/custom-heroes',
        'features/sales-scheduling',
        'features/banners',
        'features/custom-css',
        'features/shortcodes',
        'features/slider-engines',
        'features/integrations',
        'features/google-calendar-setup',
        'features/backup-restore',
        'features/sales-summary-report',
        'features/ai-image-generation',
      ],
    },
    {
      type: 'category',
      label: 'Admin Reference',
      items: [
        'admin-reference/plugin-setup',
        'admin-reference/settings-tabs',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/faq',
      ],
    },
    'changelog',
  ],
};

export default sidebars;

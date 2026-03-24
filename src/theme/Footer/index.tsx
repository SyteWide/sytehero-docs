import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const footerLinks = [
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
    title: 'Platforms',
    items: [
      {label: 'WooCommerce', href: 'https://woocommerce.com'},
      {label: 'FluentCart', href: 'https://fluentcart.com'},
    ],
  },
  {
    title: 'Resources',
    items: [
      {label: 'SyteWide.com', href: 'https://sytewide.com'},
      {label: 'FAQ', to: '/docs/troubleshooting/faq'},
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Gradient accent bar */}
      <div className="h-[2px] bg-gradient-to-r from-primary-900 via-primary-600 to-primary-400" />

      <div className="bg-[#1a1a1a] text-gray-300">
        <div className="container py-12">
          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="list-none pl-0 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      {'to' in item && item.to ? (
                        <Link
                          to={item.to}
                          className="text-gray-400 hover:text-white text-sm no-underline transition-colors duration-200">
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white text-sm no-underline transition-colors duration-200">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={useBaseUrl('/img/logo.png')}
                  alt="SyteSlyders"
                  width={28}
                  height={28}
                  className="rounded"
                />
                <span className="font-heading font-semibold text-white text-sm">
                  SyteSlyders
                </span>
              </div>
              <p className="text-gray-500 text-xs m-0">
                Copyright &copy; {new Date().getFullYear()} SyteWide. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

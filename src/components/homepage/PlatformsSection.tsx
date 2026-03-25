import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const platforms = [
  {
    title: 'WooCommerce',
    description:
      'Full product sync, sales scheduling with native price updates, and Shippo shipping integration.',
    link: '/docs/ecommerce/woocommerce',
    features: [
      'Product-to-slider sync',
      'Native sale price scheduling',
      'Banner coordination',
    ],
  },
  {
    title: 'FluentCart',
    description:
      'Product tagging, sales management, and reporting — SyteSlyders handles the differences automatically.',
    link: '/docs/ecommerce/fluentcart',
    features: [
      'Automatic product tagging',
      'Sales summary reports',
      'Unified management UI',
    ],
  },
];

export default function PlatformsSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <Heading
            as="h2"
            className="font-heading text-[1.375rem] lg:text-[1.75rem] font-bold text-[var(--sl-text-primary)] mb-3">
            Ecommerce Platforms
          </Heading>
          <div className="w-12 h-[3px] bg-primary-600 rounded-full mx-auto mb-4" />
          <p className="text-base text-[var(--sl-text-secondary)] max-w-lg mx-auto">
            Seamless product sync and sales management across platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <Link
              key={platform.title}
              to={platform.link}
              className="group flex flex-col p-6 rounded-xl border border-[var(--sl-border-color)] bg-[var(--sl-bg-surface)] no-underline text-inherit transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--ifm-color-primary-light)] hover:no-underline hover:text-inherit">
              <Heading
                as="h3"
                className="font-heading text-lg font-semibold mb-2 text-[var(--sl-text-primary)]">
                {platform.title}
              </Heading>
              <p className="text-sm text-[var(--sl-text-secondary)] leading-relaxed mb-4">
                {platform.description}
              </p>
              <ul className="list-none pl-0 space-y-1.5 mb-4 flex-1">
                {platform.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[var(--sl-text-secondary)]">
                    <span className="text-[var(--sl-color-success)] text-xs">
                      &#10003;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="text-[var(--ifm-color-primary)] text-sm font-medium transition-transform duration-200 group-hover:translate-x-1 inline-block">
                Learn more &#8594;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

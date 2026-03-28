import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const resources = [
  {
    title: 'FAQ',
    description: 'Common questions answered',
    to: '/docs/troubleshooting/faq',
  },
  {
    title: 'Troubleshooting',
    description: 'Fix common issues fast',
    to: '/docs/troubleshooting/common-issues',
  },
  {
    title: 'SyteWide.com',
    description: 'Licensing & support',
    href: 'https://sytewide.com',
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--sl-bg-surface-raised)]">
      <div className="container">
        <div className="text-center mb-10">
          <Heading
            as="h2"
            className="font-heading text-[1.375rem] lg:text-[1.75rem] font-bold text-[var(--sl-text-primary)] mb-3">
            Need Help?
          </Heading>
          <div className="w-12 h-[3px] bg-primary-600 rounded-full mx-auto mb-4" />
          <p className="text-base text-[var(--sl-text-secondary)] max-w-lg mx-auto">
            Explore resources to get the most out of SyteHero.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {resources.map((resource) => {
            const linkProps = 'to' in resource && resource.to
              ? {to: resource.to}
              : {href: resource.href, target: '_blank' as const, rel: 'noopener noreferrer'};

            return (
              <Link
                key={resource.title}
                {...linkProps}
                className="flex flex-col gap-1 px-6 py-4 rounded-xl border border-[var(--sl-border-color)] bg-[var(--sl-bg-surface)] no-underline text-inherit transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--ifm-color-primary-light)] hover:no-underline hover:text-inherit">
                <strong className="text-base font-semibold text-[var(--sl-text-primary)]">
                  {resource.title}
                </strong>
                <span className="text-sm text-[var(--sl-text-secondary)]">
                  {resource.description}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

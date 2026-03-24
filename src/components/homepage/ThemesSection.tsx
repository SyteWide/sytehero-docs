import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const themes = [
  {
    title: 'Avada',
    description:
      'Place hero sliders in Fusion Builder columns with automatic text and CTA injection.',
    link: '/docs/themes/avada',
    accent: 'border-t-emerald-500',
  },
  {
    title: 'Divi',
    description:
      'Add hero sliders to Divi Builder rows with full support for Divi 4 and Divi 5.',
    link: '/docs/themes/divi',
    accent: 'border-t-violet-500',
  },
  {
    title: 'Elementor',
    description:
      'Drop hero sliders into Elementor Flexbox Containers with all slider engines included.',
    link: '/docs/themes/elementor',
    accent: 'border-t-rose-500',
  },
];

export default function ThemesSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--sl-bg-surface-raised)]">
      <div className="container">
        <div className="text-center mb-12">
          <Heading
            as="h2"
            className="font-heading text-2xl lg:text-3xl font-bold text-[var(--sl-text-primary)] mb-3">
            Supported Themes
          </Heading>
          <div className="w-12 h-[3px] bg-primary-600 rounded-full mx-auto mb-4" />
          <p className="text-base text-[var(--sl-text-secondary)] max-w-lg mx-auto">
            Native integration with the most popular WordPress page builders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Link
              key={theme.title}
              to={theme.link}
              className={`group flex flex-col p-6 rounded-xl border border-[var(--sl-border-color)] border-t-4 ${theme.accent} bg-[var(--sl-bg-surface)] no-underline text-inherit transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:no-underline hover:text-inherit`}>
              <Heading
                as="h3"
                className="font-heading text-lg font-semibold mb-2 text-[var(--sl-text-primary)]">
                {theme.title}
              </Heading>
              <p className="text-sm text-[var(--sl-text-secondary)] leading-relaxed flex-1 mb-3">
                {theme.description}
              </p>
              <span className="text-[var(--ifm-color-primary)] text-sm font-medium transition-transform duration-200 group-hover:translate-x-1 inline-block">
                View guide &#8594;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

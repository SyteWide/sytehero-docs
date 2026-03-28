import type {ComponentType} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import SliderIcon from '../icons/SliderIcon';
import TextIcon from '../icons/TextIcon';
import CalendarIcon from '../icons/CalendarIcon';
import PaletteIcon from '../icons/PaletteIcon';
import BannerIcon from '../icons/BannerIcon';
import EngineIcon from '../icons/EngineIcon';

interface Feature {
  title: string;
  description: string;
  link: string;
  Icon: ComponentType<{className?: string}>;
}

const features: Feature[] = [
  {
    title: 'Featured Product Sliders',
    description:
      'Turn your products into full-width hero sliders with images, videos, and call-to-action buttons.',
    link: '/docs/features/featured-products',
    Icon: SliderIcon,
  },
  {
    title: 'Hero Text & Overlays',
    description:
      'Customize text areas, glow effects, and CTA buttons with per-device controls for desktop, tablet, and mobile.',
    link: '/docs/features/hero-text',
    Icon: TextIcon,
  },
  {
    title: 'Sales Scheduling',
    description:
      'Plan sales in advance with automatic price sync, hero slides, and banner coordination.',
    link: '/docs/features/sales-scheduling',
    Icon: CalendarIcon,
  },
  {
    title: 'Custom Heroes',
    description:
      'Build standalone sliders independent of your product catalog for landing pages and promotions.',
    link: '/docs/features/custom-heroes',
    Icon: PaletteIcon,
  },
  {
    title: 'Banners',
    description:
      'Display promotional banners with date-based scheduling that sync with your sales campaigns.',
    link: '/docs/features/banners',
    Icon: BannerIcon,
  },
  {
    title: 'Multi-Engine Support',
    description:
      'Choose from FlexSlider, Swiper, or Splide as your slider engine with per-engine configuration.',
    link: '/docs/features/slider-engines',
    Icon: EngineIcon,
  },
];

function FeatureCard({title, description, link, Icon}: Feature) {
  return (
    <Link
      to={link}
      className="group flex flex-col p-6 rounded-xl border border-[var(--sl-border-color)] bg-[var(--sl-bg-surface)] no-underline text-inherit transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--ifm-color-primary-light)] hover:no-underline hover:text-inherit">
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-600/10 text-primary-600 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <Heading
        as="h3"
        className="font-heading text-base font-semibold mb-2 text-[var(--sl-text-primary)]">
        {title}
      </Heading>
      <p className="text-sm text-[var(--sl-text-secondary)] leading-relaxed flex-1 mb-3">
        {description}
      </p>
      <span className="text-[var(--ifm-color-primary)] text-sm font-medium transition-transform duration-200 group-hover:translate-x-1 inline-block">
        Learn more &#8594;
      </span>
    </Link>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <Heading
            as="h2"
            className="font-heading text-[1.375rem] lg:text-[1.75rem] font-bold text-[var(--sl-text-primary)] mb-3">
            Powerful Features
          </Heading>
          <div className="w-12 h-[3px] bg-primary-600 rounded-full mx-auto mb-4" />
          <p className="text-base text-[var(--sl-text-secondary)] max-w-lg mx-auto">
            Everything you need to create stunning hero sliders and manage sales
            campaigns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

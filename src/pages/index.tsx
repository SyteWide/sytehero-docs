import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/installation">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Featured Product Sliders',
    description: 'Turn your products into full-width hero sliders with images, videos, and call-to-action buttons.',
    link: '/docs/features/featured-products',
  },
  {
    title: 'Hero Text & Overlays',
    description: 'Customize text areas, glow effects, and CTA buttons with per-device controls for desktop, tablet, and mobile.',
    link: '/docs/features/hero-text',
  },
  {
    title: 'Sales Scheduling',
    description: 'Plan sales in advance with automatic price sync, hero slides, and banner coordination.',
    link: '/docs/features/sales-scheduling',
  },
  {
    title: 'Custom Slyders',
    description: 'Build standalone sliders independent of your product catalog for landing pages and promotions.',
    link: '/docs/features/custom-slyders',
  },
  {
    title: 'Banners',
    description: 'Display promotional banners with date-based scheduling that sync with your sales campaigns.',
    link: '/docs/features/banners',
  },
  {
    title: 'Multi-Engine Support',
    description: 'Choose from FlexSlider, Swiper, or Splide as your slider engine with per-engine configuration.',
    link: '/docs/features/slider-engines',
  },
];

const themes = [
  {
    title: 'Avada',
    description: 'Place hero sliders in Fusion Builder columns with automatic text and CTA injection.',
    link: '/docs/themes/avada',
  },
  {
    title: 'Divi',
    description: 'Add hero sliders to Divi Builder rows with full support for Divi 4 and Divi 5.',
    link: '/docs/themes/divi',
  },
  {
    title: 'Elementor',
    description: 'Drop hero sliders into Elementor Flexbox Containers with all slider engines included.',
    link: '/docs/themes/elementor',
  },
];

const platforms = [
  {
    title: 'WooCommerce',
    description: 'Full product sync, sales scheduling with native price updates, and Shippo shipping integration.',
    link: '/docs/ecommerce/woocommerce',
  },
  {
    title: 'FluentCart',
    description: 'Product tagging, sales management, and reporting — SyteSlyders handles the differences automatically.',
    link: '/docs/ecommerce/fluentcart',
  },
];

function Card({title, description, link, colClass}: {title: string; description: string; link: string; colClass: string}) {
  return (
    <div className={clsx('col', colClass)}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">
          <Link to={link} className={styles.featureLink}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Card key={idx} colClass="col--4" {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <Heading as="h2" className={styles.sectionHeading}>Supported Themes</Heading>
            <div className="row">
              {themes.map((props, idx) => (
                <Card key={idx} colClass="col--4" {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <Heading as="h2" className={styles.sectionHeading}>Ecommerce Platforms</Heading>
            <div className="row">
              {platforms.map((props, idx) => (
                <Card key={idx} colClass="col--6" {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

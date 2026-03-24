import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/homepage/HeroSection';
import FeaturesGrid from '@site/src/components/homepage/FeaturesGrid';
import ThemesSection from '@site/src/components/homepage/ThemesSection';
import PlatformsSection from '@site/src/components/homepage/PlatformsSection';
import ResourcesSection from '@site/src/components/homepage/ResourcesSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HeroSection />
      <main>
        <FeaturesGrid />
        <ThemesSection />
        <PlatformsSection />
        <ResourcesSection />
      </main>
    </Layout>
  );
}

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

export default function HeroSection() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className="relative overflow-hidden py-20 lg:py-28 text-center bg-gradient-to-br from-primary-900 via-primary-600 to-primary-400">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container relative z-10">
        <Heading
          as="h1"
          className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {siteConfig.title}
        </Heading>
        <p className="text-lg lg:text-xl text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
          {siteConfig.tagline}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/docs/getting-started/installation"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-white text-primary-900 font-semibold text-base no-underline transition-all duration-200 hover:bg-blue-50 hover:text-primary-900 hover:-translate-y-0.5 hover:shadow-lg hover:no-underline">
            Get Started
          </Link>
          <Link
            to="/docs/features/featured-products"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-transparent text-white font-semibold text-base no-underline border-2 border-white/40 transition-all duration-200 hover:border-white hover:text-white hover:-translate-y-0.5 hover:no-underline">
            Explore Features
          </Link>
        </div>
      </div>
    </header>
  );
}

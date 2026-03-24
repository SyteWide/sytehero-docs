import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  to?: string;
  href?: string;
}

export default function Card({icon, title, description, to, href}: CardProps) {
  const content = (
    <>
      {icon && <div className="mb-3 text-2xl leading-none">{icon}</div>}
      <h3 className="font-heading text-lg font-semibold mb-2 text-[var(--sl-text-primary)]">
        {title}
      </h3>
      <p className="text-sm text-[var(--sl-text-secondary)] leading-relaxed flex-1 mb-3">
        {description}
      </p>
      <span className="text-[var(--ifm-color-primary)] text-base transition-transform duration-200 group-hover:translate-x-1 inline-block">
        &#8594;
      </span>
    </>
  );

  const className =
    'group flex flex-col p-6 rounded-lg border border-[var(--sl-border-color)] bg-[var(--sl-bg-surface)] no-underline text-inherit transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--ifm-color-primary-light)] hover:no-underline hover:text-inherit';

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

import type {ReactNode} from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'new';
  children: ReactNode;
}

const variantClasses: Record<string, string> = {
  default:
    'bg-[var(--sl-bg-surface-overlay)] text-[var(--sl-text-secondary)]',
  success:
    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  warning:
    'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  new: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
};

export default function Badge({variant = 'default', children}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

import type {ReactNode} from 'react';

interface CalloutProps {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: ReactNode;
}

const typeStyles: Record<string, {border: string; bg: string; icon: string}> = {
  info: {
    border: 'border-l-[var(--sl-color-info)]',
    bg: 'bg-blue-50/50 dark:bg-blue-950/20',
    icon: '\u2139\uFE0F',
  },
  success: {
    border: 'border-l-[var(--sl-color-success)]',
    bg: 'bg-green-50/50 dark:bg-green-950/20',
    icon: '\u2705',
  },
  warning: {
    border: 'border-l-[var(--sl-color-warning)]',
    bg: 'bg-amber-50/50 dark:bg-amber-950/20',
    icon: '\u26A0\uFE0F',
  },
  danger: {
    border: 'border-l-[var(--sl-color-error)]',
    bg: 'bg-red-50/50 dark:bg-red-950/20',
    icon: '\u274C',
  },
};

export default function Callout({type = 'info', title, children}: CalloutProps) {
  const style = typeStyles[type];
  return (
    <div
      className={`my-4 rounded-lg border-l-4 ${style.border} ${style.bg} p-4`}>
      {title && (
        <div className="font-heading font-semibold mb-2 flex items-center gap-2">
          <span>{style.icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-sm leading-relaxed text-[var(--sl-text-secondary)]">
        {children}
      </div>
    </div>
  );
}

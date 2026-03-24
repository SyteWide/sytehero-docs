import type {ReactNode} from 'react';

interface CardGridProps {
  cols?: 1 | 2 | 3 | 4;
  children: ReactNode;
}

const colClasses: Record<number, string> = {
  1: 'grid grid-cols-1 gap-6',
  2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
  3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
};

export default function CardGrid({cols = 3, children}: CardGridProps) {
  return <div className={colClasses[cols]}>{children}</div>;
}

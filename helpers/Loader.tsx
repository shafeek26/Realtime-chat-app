'use client';

import { cn } from '@/lib/utils';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          'relative w-10 h-10',
          'before:absolute before:inset-0',
          'before:rounded-full before:border-[3px]',
          'before:border-green-600 before:border-t-foreground',
          'animate-[spin_0.6s_linear_infinite]',
          className
        )}
      />
    </div>
  );
}
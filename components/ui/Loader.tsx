'use client';

import { cn } from '@/lib/utils';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className="flex items-center justify-center ml-25">
      <div
        className={cn(
          'relative w-5 h-5',
          'before:absolute before:inset-0',
          'before:rounded-full before:border-[3px]',
          'before:border-orange-600 before:border-t-foreground',
          'animate-[spin_0.6s_linear_infinite]',
          className
        )}
      />
    </div>
  );
}
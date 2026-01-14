'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-cyan-500">
              <Languages className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">Bridge</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#capabilities"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Capabilities
            </Link>
            <Link
              href="#security"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Security
            </Link>
            <Link href="/signin">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

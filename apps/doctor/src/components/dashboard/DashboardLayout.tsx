import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Languages, Bell, Settings, User } from 'lucide-react';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl supports-backdrop-filter:bg-white/75 dark:border-slate-800/80 dark:bg-slate-950/95 dark:supports-backdrop-filter:bg-slate-950/75">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Bridge</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/notifications">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                    3
                  </span>
                </Button>
              </Link>
              <Link href="/settings">
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
              <Link href="/profile">
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="mt-8 border-t border-slate-200 bg-white/50 px-4 py-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs text-slate-600 dark:text-slate-400">
            © 2025 Bridge. All rights reserved. Connecting healthcare through communication.
          </p>
        </div>
      </footer>
    </div>
  );
}

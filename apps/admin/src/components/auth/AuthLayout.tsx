import Link from 'next/link';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  navAction?: {
    label: string;
    href: string;
    buttonText: string;
  };
}

export function AuthLayout({ children, navAction }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-cyan-500">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Bridge
              </span>
            </Link>
            {navAction && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {navAction.label}
                </span>
                <Link href={navAction.href}>
                  <Button variant="outline" size="sm">
                    {navAction.buttonText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Settings, ChevronRight, Activity } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              <Settings className="h-4 w-4" />
              Admin Control Center
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Manage Your Healthcare{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Translation Platform
              </span>
            </h1>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
              Comprehensive administrative dashboard to manage users, monitor system health, analyze
              usage patterns, and ensure smooth operation of your Bridge platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/signin">
                <Button size="lg" className="w-full sm:w-auto">
                  Access Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#capabilities">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">10k+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
              </div>
              <div className="h-12 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
              </div>
              <div className="h-12 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Monitoring</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl" />
            <div className="relative rounded-2xl border bg-card p-8 shadow-2xl dark:border-slate-800">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  System Overview
                </h3>
                <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Active Sessions
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">1,234</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-cyan-500" />
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      System Health
                    </span>
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">
                      Excellent
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full w-full bg-green-500" />
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      API Response Time
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">45ms</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full w-1/4 bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import {
  Home,
  ArrowLeft,
  Search,
  Languages,
  Stethoscope,
  FileQuestion,
  Compass,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Bridge</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-center">
          {/* 404 Illustration */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-linear-to-br from-blue-100 to-cyan-100 opacity-20 blur-3xl dark:from-blue-900 dark:to-cyan-900" />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="text-9xl font-bold text-slate-200 dark:text-slate-800">4</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-linear-to-br from-blue-500 to-cyan-500 p-6">
                      <Compass
                        className="h-16 w-16 animate-spin text-white"
                        style={{ animationDuration: '8s' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-9xl font-bold text-slate-200 dark:text-slate-800">4</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-linear-to-br from-cyan-500 to-blue-500 p-6">
                      <FileQuestion className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mx-auto mb-2 max-w-lg text-lg text-slate-600 dark:text-slate-400">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or
              perhaps never existed.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Don&apos;t worry, even the best translators sometimes get lost in translation!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button
                size="lg"
                className="group w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 sm:w-auto"
              >
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Login
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">
                <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Looking for something specific?
            </h2>
            <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
              Here are some helpful links to get you back on track:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Quick Links */}
              <Link
                href="/"
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                  <Languages className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">Home Page</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Learn about Bridge&apos;s features
                  </p>
                </div>
              </Link>

              <Link
                href="/login"
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-cyan-300 hover:bg-cyan-50 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-cyan-700 dark:hover:bg-cyan-950/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                  <Stethoscope className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    Healthcare Login
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Access your dashboard
                  </p>
                </div>
              </Link>

              <Link
                href="/#features"
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-purple-300 hover:bg-purple-50 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-purple-700 dark:hover:bg-purple-950/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950">
                  <svg
                    className="h-5 w-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">Features</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Explore our capabilities
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Support Text */}
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
            Need assistance?{' '}
            <a
              href="mailto:support@bridge-health.com"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

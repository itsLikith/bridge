'use client';
import { Languages, Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 animate-ping rounded-full bg-linear-to-r from-blue-400 to-cyan-400 opacity-20" />
          </div>

          {/* Rotating Border */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 dark:border-slate-800 dark:border-t-blue-400" />
          </div>

          {/* Logo Container */}
          <div className="relative flex h-24 w-24 items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 shadow-xl">
              <Languages className="h-8 w-8 animate-pulse text-white" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-4 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Loading Bridge</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Connecting doctors and patients across languages...
          </p>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s] dark:bg-blue-400" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-600 [animation-delay:-0.15s] dark:bg-cyan-400" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-400" />
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-1.5 animate-pulse rounded-full bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-size-[200%_100%]"
            style={{
              animation:
                'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, shimmer 2s linear infinite',
            }}
          />
        </div>

        {/* Loading Status Messages */}
        <div className="mt-6 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
          <Loader2 className="h-3 w-3 animate-spin" />
          <span className="animate-pulse">Initializing secure connection...</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

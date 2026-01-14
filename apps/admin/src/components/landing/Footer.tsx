import Link from 'next/link';
import { Languages } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Bridge Admin
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Complete control center for managing your healthcare translation platform.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#capabilities"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © 2025 Bridge Admin. All rights reserved. Empowering healthcare through seamless
            translation.
          </p>
        </div>
      </div>
    </footer>
  );
}

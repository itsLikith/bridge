import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 px-8 py-16 shadow-2xl sm:px-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Manage Your Platform?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Access the admin dashboard to monitor, manage, and optimize your Bridge healthcare
              translation platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/signin">
                <Button
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 sm:w-auto"
                >
                  Access Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:support@bridge.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white bg-transparent text-white hover:bg-white/10 sm:w-auto"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-100">
              Enterprise support • Dedicated account manager • 24/7 assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

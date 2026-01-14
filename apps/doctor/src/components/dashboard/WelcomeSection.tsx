import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

interface WelcomeSectionProps {
  userName?: string;
  isPro?: boolean;
}

export function WelcomeSection({ userName = 'Dr. Smith', isPro = true }: WelcomeSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Welcome back, {userName}
              </h1>
              {isPro && (
                <Badge variant="default" className="gap-1 bg-blue-600 hover:bg-blue-700">
                  <Sparkles className="h-3 w-3" />
                  Pro
                </Badge>
              )}
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Here&apos;s what&apos;s happening with your healthcare communications today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { HeroCarousel } from '@/components/common/HeroCarousel';

interface UpdatesSectionProps {
  onViewAll?: () => void;
}

export function UpdatesSection({ onViewAll }: UpdatesSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Important Updates
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Stay informed about the latest features and announcements
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400"
            onClick={onViewAll}
          >
            View All
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
}

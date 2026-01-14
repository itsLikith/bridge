import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface Activity {
  time: string;
  text: string;
  lang: string;
}

const defaultActivities: Activity[] = [
  {
    time: '2 minutes ago',
    text: 'Completed translation session with Patient #2847',
    lang: 'Spanish → English',
  },
  {
    time: '15 minutes ago',
    text: 'Started consultation with new patient',
    lang: 'French → English',
  },
  {
    time: '1 hour ago',
    text: 'Updated patient records for follow-up',
    lang: 'Hindi → English',
  },
];

interface RecentActivityProps {
  activities?: Activity[];
  onViewAll?: () => void;
}

export function RecentActivity({
  activities = defaultActivities,
  onViewAll,
}: RecentActivityProps) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Recent Activity
              </h3>
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
            <div className="space-y-4">
              {activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 border-l-2 border-blue-200 pl-4 dark:border-blue-900"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {activity.text}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {activity.lang}
                      </Badge>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

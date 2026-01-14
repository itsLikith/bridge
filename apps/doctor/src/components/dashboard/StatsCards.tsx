import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  Clock,
  MessageSquare,
  Activity,
  User,
  Languages,
  LucideIcon,
} from 'lucide-react';

interface StatCardData {
  title: string;
  value: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

const defaultStats: StatCardData[] = [
  {
    title: "Today's Sessions",
    value: '24',
    trend: {
      value: '+12% from yesterday',
      isPositive: true,
    },
    icon: MessageSquare,
    iconBgColor: 'bg-blue-100 dark:bg-blue-950',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Avg. Response Time',
    value: '0.8s',
    trend: {
      value: '15% faster',
      isPositive: true,
    },
    icon: Clock,
    iconBgColor: 'bg-cyan-100 dark:bg-cyan-950',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Active Patients',
    value: '156',
    trend: {
      value: '8 new this week',
      isPositive: true,
    },
    icon: User,
    iconBgColor: 'bg-green-100 dark:bg-green-950',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    title: 'Languages Used',
    value: '12',
    trend: {
      value: 'This month',
      isPositive: false,
    },
    icon: Languages,
    iconBgColor: 'bg-purple-100 dark:bg-purple-950',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
];

interface StatsCardsProps {
  stats?: StatCardData[];
}

export function StatsCards({ stats = defaultStats }: StatsCardsProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend?.isPositive ? TrendingUp : Activity;
            const trendColorClass = stat.trend?.isPositive
              ? 'text-green-600 dark:text-green-400'
              : stat.title === 'Languages Used'
              ? 'text-slate-600 dark:text-slate-400'
              : 'text-blue-600 dark:text-blue-400';

            return (
              <Card
                key={index}
                className="border-slate-200 bg-white transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {stat.title}
                      </p>
                      <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      {stat.trend && (
                        <p className={`mt-1 flex items-center gap-1 text-xs ${trendColorClass}`}>
                          <TrendIcon className="h-3 w-3" />
                          <span>{stat.trend.value}</span>
                        </p>
                      )}
                    </div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBgColor}`}
                    >
                      <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, Users, Activity, FileText } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card p-8 text-center shadow-sm dark:border-slate-800">
            <TrendingUp className="mx-auto mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">1M+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Translations Processed</div>
          </div>
          <div className="rounded-xl border bg-card p-8 text-center shadow-sm dark:border-slate-800">
            <Users className="mx-auto mb-4 h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">10,000+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
          </div>
          <div className="rounded-xl border bg-card p-8 text-center shadow-sm dark:border-slate-800">
            <Activity className="mx-auto mb-4 h-8 w-8 text-green-600 dark:text-green-400" />
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">99.99%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Uptime SLA</div>
          </div>
          <div className="rounded-xl border bg-card p-8 text-center shadow-sm dark:border-slate-800">
            <FileText className="mx-auto mb-4 h-8 w-8 text-purple-600 dark:text-purple-400" />
            <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Languages Supported</div>
          </div>
        </div>
      </div>
    </section>
  );
}

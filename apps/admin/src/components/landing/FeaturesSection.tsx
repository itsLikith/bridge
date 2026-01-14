import {
  Users,
  BarChart3,
  Activity,
  Lock,
  Bell,
  Database,
} from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Complete Administrative Control
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Everything you need to manage and monitor your Bridge platform
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              User Management
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Create, manage, and monitor all doctors, patients, and staff accounts with
              role-based access control.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
              <BarChart3 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              Analytics & Reporting
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Track usage patterns, translation metrics, and generate comprehensive reports for
              insights and compliance.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
              <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              System Monitoring
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Real-time monitoring of system health, performance metrics, and service availability
              with instant alerts.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950">
              <Lock className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              Security Management
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Configure security policies, manage access permissions, and monitor security events
              across the platform.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950">
              <Bell className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              Notification Center
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Manage system-wide notifications, alerts, and announcements to keep all users
              informed.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950">
              <Database className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              Data Management
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Manage data retention policies, backups, and ensure GDPR compliance with automated
              data workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

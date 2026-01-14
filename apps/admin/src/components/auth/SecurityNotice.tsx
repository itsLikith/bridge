import { Shield } from 'lucide-react';

export function SecurityNotice() {
  return (
    <div className="rounded-lg border bg-card p-4 dark:border-slate-800">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
          <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h4 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">
            Secure Admin Access
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            All admin sessions are encrypted and monitored. Multi-factor authentication is required
            for enhanced security.
          </p>
        </div>
      </div>
    </div>
  );
}

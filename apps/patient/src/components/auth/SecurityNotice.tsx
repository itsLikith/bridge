import { Shield } from 'lucide-react';

interface SecurityNoticeProps {
  title: string;
  description: string;
}

export function SecurityNotice({ title, description }: SecurityNoticeProps) {
  return (
    <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex items-start gap-3">
        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
        <div className="text-xs text-slate-600 dark:text-slate-400">
          <p className="font-medium text-slate-900 dark:text-white">{title}</p>
          <p className="mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

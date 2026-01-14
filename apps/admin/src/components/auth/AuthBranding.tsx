import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

interface AuthBrandingProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  description: string;
  features: Feature[];
  notice?: ReactNode;
}

export function AuthBranding({ badge, title, description, features, notice }: AuthBrandingProps) {
  const BadgeIcon = badge.icon;

  return (
    <div className="hidden lg:flex lg:flex-col lg:justify-center">
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
          <BadgeIcon className="h-4 w-4" />
          {badge.text}
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">{description}</p>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${feature.iconBgColor}`}
              >
                <Icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {notice && <div className="mt-8">{notice}</div>}
    </div>
  );
}

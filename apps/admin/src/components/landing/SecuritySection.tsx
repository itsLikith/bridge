import { Shield } from 'lucide-react';

export function SecuritySection() {
  return (
    <section id="security" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
              <Shield className="h-4 w-4" />
              Enterprise-Grade Security
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Secure Platform Management
            </h2>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
              Administrative access is protected with the highest security standards, ensuring your
              platform and user data remain safe at all times.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Multi-Factor Authentication
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Mandatory MFA for all admin accounts with support for hardware tokens
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Role-Based Access Control
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Granular permissions system with audit logs for all administrative actions
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Encrypted Data Access
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    All data access encrypted with industry-standard protocols and zero-trust
                    architecture
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                  <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Continuous Monitoring
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    24/7 security monitoring with anomaly detection and instant threat alerts
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border bg-card p-6 shadow-lg dark:border-slate-800">
                <Shield className="mb-3 h-8 w-8 text-green-600 dark:text-green-400" />
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  ISO 27001
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Certified</div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-lg dark:border-slate-800">
                <Shield className="mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div className="text-sm font-medium text-slate-900 dark:text-white">GDPR</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Compliant</div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-lg dark:border-slate-800">
                <Shield className="mb-3 h-8 w-8 text-purple-600 dark:text-purple-400" />
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  Security Controls
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Toolkit</div>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-lg dark:border-slate-800">
                <Shield className="mb-3 h-8 w-8 text-orange-600 dark:text-orange-400" />
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  Cyber Essentials
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Plus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

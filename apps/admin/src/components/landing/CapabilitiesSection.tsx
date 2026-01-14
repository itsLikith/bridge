export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-slate-50 px-4 py-20 dark:bg-slate-900/50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Powerful Administrative Tools
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Advanced capabilities to streamline your platform management
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="relative">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
              1
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Centralized Dashboard
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Access all critical metrics, user activity, and system status from a single,
              intuitive dashboard with customizable widgets.
            </p>
            {/* Connector line */}
            <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-blue-600 to-transparent lg:block" />
          </div>

          <div className="relative">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
              2
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Automated Workflows
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Set up automated user onboarding, compliance checks, and maintenance tasks to reduce
              manual workload and improve efficiency.
            </p>
            {/* Connector line */}
            <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-blue-600 to-transparent lg:block" />
          </div>

          <div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
              3
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Advanced Reporting
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Generate detailed reports on usage trends, translation accuracy, system performance,
              and compliance with exportable data formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

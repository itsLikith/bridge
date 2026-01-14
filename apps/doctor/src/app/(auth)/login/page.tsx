import { Stethoscope, Shield, Languages } from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthBranding } from '@/components/auth/AuthBranding';
import { SecurityNotice } from '@/components/auth/SecurityNotice';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Branding & Features (Server Component) */}
          <AuthBranding
            badge={{
              icon: Stethoscope,
              text: 'Trusted by Healthcare Teams',
            }}
            title="Welcome Back to Bridge"
            description="Continue bridging communication between doctors and patients. Sign in to access real-time medical translation."
            features={[
              {
                icon: Shield,
                title: 'GDPR Compliant',
                description:
                  'Your data is encrypted and fully compliant with international healthcare standards.',
                iconBgColor: 'bg-blue-100 dark:bg-blue-950',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
              {
                icon: Languages,
                title: '50+ Languages',
                description:
                  'Instant translation with medical terminology accuracy for better patient care.',
                iconBgColor: 'bg-cyan-100 dark:bg-cyan-950',
                iconColor: 'text-cyan-600 dark:text-cyan-400',
              },
              {
                icon: Stethoscope,
                title: 'Medical Accuracy',
                description:
                  'Specialized in medical terminology for precise healthcare communication.',
                iconBgColor: 'bg-green-100 dark:bg-green-950',
                iconColor: 'text-green-600 dark:text-green-400',
              },
            ]}
            notice={
              <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span>GDPR Ready</span>
                </div>
              </div>
            }
          />

          {/* Right Side - Login Form (Client Component) */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-10">
                <LoginForm />
              </div>

              <SecurityNotice
                title="Your security is our priority"
                description="This login is secured with 256-bit encryption and complies with industry security standards and GDPR requirements."
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

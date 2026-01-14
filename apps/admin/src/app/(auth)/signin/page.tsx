import { Settings, Shield, Users, BarChart3 } from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthBranding } from '@/components/auth/AuthBranding';
import { SecurityNotice } from '@/components/auth/SecurityNotice';
import { LoginForm } from '@/components/auth/LoginForm';

export default function SignInPage() {
  return (
    <AuthLayout
      navAction={{
        label: 'Need help?',
        href: '/forgotpassword',
        buttonText: 'Reset Password',
      }}
    >
      <div className="w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Branding & Features */}
          <AuthBranding
            badge={{
              icon: Settings,
              text: 'Admin Control Center',
            }}
            title="Welcome to Bridge Admin"
            description="Secure administrative access to manage your healthcare translation platform. Monitor system health, manage users, and ensure smooth operation."
            features={[
              {
                icon: Shield,
                title: 'Enhanced Security',
                description:
                  'Multi-factor authentication and encrypted sessions protect your administrative access.',
                iconBgColor: 'bg-blue-100 dark:bg-blue-950',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
              {
                icon: Users,
                title: 'User Management',
                description:
                  'Complete control over user accounts, roles, and permissions across the platform.',
                iconBgColor: 'bg-cyan-100 dark:bg-cyan-950',
                iconColor: 'text-cyan-600 dark:text-cyan-400',
              },
              {
                icon: BarChart3,
                title: 'Analytics Dashboard',
                description:
                  'Real-time insights into system performance, usage patterns, and translation metrics.',
                iconBgColor: 'bg-green-100 dark:bg-green-950',
                iconColor: 'text-green-600 dark:text-green-400',
              },
            ]}
            notice={<SecurityNotice />}
          />

          {/* Right Side - Login Form */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border bg-card p-8 shadow-xl dark:border-slate-800 lg:p-10">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

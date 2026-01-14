import { CheckCircle2, Shield, Languages, Heart } from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthBranding } from '@/components/auth/AuthBranding';
import { SecurityNotice } from '@/components/auth/SecurityNotice';
import { SignUpForm } from '@/components/auth/SignUpForm';

export default function SignUpPage() {
  return (
    <AuthLayout
      navAction={{
        label: 'Already have an account?',
        href: '/login',
        buttonText: 'Sign In',
      }}
    >
      <div className="w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Branding & Features (Server Component) */}
          <AuthBranding
            badge={{
              icon: CheckCircle2,
              text: 'Join Our Healthcare Community',
            }}
            title="Create Your Bridge Account"
            description="Start your journey to better healthcare communication. Sign up to access medical translation in your preferred language."
            features={[
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description:
                  'GDPR compliant and aligned with healthcare security standards. Your health data is encrypted and secure.',
                iconBgColor: 'bg-blue-100 dark:bg-blue-950',
                iconColor: 'text-blue-600 dark:text-blue-400',
              },
              {
                icon: Languages,
                title: '50+ Languages',
                description:
                  'Get instant translation with medical terminology accuracy across multiple languages.',
                iconBgColor: 'bg-cyan-100 dark:bg-cyan-950',
                iconColor: 'text-cyan-600 dark:text-cyan-400',
              },
              {
                icon: Heart,
                title: 'Patient-Centered Care',
                description:
                  'Designed for patients to communicate effectively with healthcare providers regardless of language barriers.',
                iconBgColor: 'bg-green-100 dark:bg-green-950',
                iconColor: 'text-green-600 dark:text-green-400',
              },
            ]}
            notice={
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/50">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong className="font-semibold">Free to get started:</strong> Create your
                  account today and start communicating with your healthcare team in your language.
                </p>
              </div>
            }
          />

          {/* Right Side - Sign Up Form (Client Component) */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-10">
                <SignUpForm />
              </div>

              <SecurityNotice
                title="Protected and secure"
                description="Your information is encrypted with 256-bit SSL and stored securely in compliance with international healthcare standards and GDPR."
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

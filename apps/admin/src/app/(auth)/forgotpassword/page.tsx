import Link from 'next/link';
import { Languages, Mail, Shield, CheckCircle, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SecurityNotice } from '@/components/auth/SecurityNotice';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-cyan-500">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Bridge Admin
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/signin">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Branding & Information */}
            <div className="hidden lg:flex lg:flex-col lg:justify-center">
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
                  <Shield className="h-4 w-4" />
                  Secure Account Recovery
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
                  Reset Admin Password
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Secure your administrative access with a new password. We&apos;ll send you a
                  verified link to reset your password safely.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                      Secure Email Link
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Receive a time-limited, encrypted link sent directly to your registered admin
                      email address.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                    <Lock className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                      Enhanced Verification
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Additional security checks ensure only authorized admins can reset their
                      passwords.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                      Logged & Monitored
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      All password reset requests are logged for security auditing and compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <SecurityNotice />
              </div>
            </div>

            {/* Right Side - Forgot Password Form */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border bg-card p-8 shadow-xl dark:border-slate-800 lg:p-10">
                <ForgotPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

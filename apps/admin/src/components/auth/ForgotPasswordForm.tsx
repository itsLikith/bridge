'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          Check your email
        </h2>
        <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
          We&apos;ve sent a password reset link to{' '}
          <strong className="font-semibold text-slate-900 dark:text-white">{email}</strong>
        </p>

        <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/50">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong className="font-semibold">Didn&apos;t receive the email?</strong>
            <br />
            Check your spam folder or{' '}
            <button
              onClick={() => setIsSubmitted(false)}
              className="font-semibold underline hover:no-underline"
            >
              try again
            </button>
          </p>
        </div>

        <Link href="/signin">
          <Button variant="outline" className="w-full" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to sign in
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Reset Admin Password
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Enter your admin email address and we&apos;ll send you a secure link to reset your
          password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Admin Email address
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              placeholder="admin@bridge.com"
            />
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            We&apos;ll send a password reset link to this admin email address
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
          size="lg"
        >
          {isLoading ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending reset link...
            </>
          ) : (
            <>
              Send reset link
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <Link href="/signin">
          <Button variant="ghost" className="w-full" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to sign in
          </Button>
        </Link>
      </form>

      {/* Security Notice */}
      <div className="mt-6 rounded-lg border bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
        <p className="text-xs text-blue-900 dark:text-blue-100">
          <strong className="font-semibold">Security Notice:</strong> Password reset requests are
          logged and monitored for security purposes.
        </p>
      </div>
    </>
  );
}

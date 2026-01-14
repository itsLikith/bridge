'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

        <Link href="/login">
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
          Forgot your password?
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Enter your email address and we&apos;ll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              placeholder="patient@example.com"
            />
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            We&apos;ll send a password reset link to this email address
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="group w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
          size="lg"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending reset link...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send reset link
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </form>

      {/* Back to Sign In Link */}
      <div className="mt-6">
        <Link
          href="/login"
          className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>
      </div>
    </>
  );
}

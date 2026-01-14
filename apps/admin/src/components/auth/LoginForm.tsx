'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formData.email && formData.password) {
        router.push('/dashboard');
      } else {
        setError('Please enter valid admin credentials');
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Admin Portal Sign In
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Access your administrative dashboard
        </p>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Email address
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
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              placeholder="admin@bridge.com"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Password
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-slate-700 dark:text-slate-300"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/forgotpassword"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
          size="lg"
        >
          {isLoading ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Signing in...
            </>
          ) : (
            <>
              Sign in to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      {/* Security Notice */}
      <div className="mt-6 rounded-lg border bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
        <p className="text-center text-xs text-blue-900 dark:text-blue-100">
          <strong className="font-semibold">Security Notice:</strong> This is a restricted admin
          area. All access attempts are logged and monitored.
        </p>
      </div>
    </>
  );
}

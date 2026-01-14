'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Mail,
  Lock,
  ArrowRight,
  AlertCircle,
  User,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (formData.email && formData.password) {
        router.push('/');
      } else {
        setError('Please fill in all required fields');
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
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create an account</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Fill in your details to get started
        </p>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <div className="relative mt-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="pl-10"
                placeholder="John"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <div className="relative mt-2">
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

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
              value={formData.email}
              onChange={handleChange}
              className="pl-10"
              placeholder="patient@example.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Phone className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="pl-10"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Password Fields */}
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="pl-10"
              placeholder="••••••••"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Must be at least 8 characters
          </p>
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="pl-10"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-start">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
          />
          <label
            htmlFor="agreeToTerms"
            className="ml-2 block text-sm text-slate-700 dark:text-slate-300"
          >
            I agree to the{' '}
            <Link
              href="/terms"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Privacy Policy
            </Link>
          </label>
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
              Creating account...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Create account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </form>

      {/* Sign In Link */}
      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}

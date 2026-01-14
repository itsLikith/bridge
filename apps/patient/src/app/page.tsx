import Link from 'next/link';
import { Heart, Languages, Shield, Clock, CheckCircle2, ArrowRight, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Bridge</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              <Heart className="h-4 w-4" />
              Your Health, Your Language
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Healthcare Without Language Barriers
            </h1>
            
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
              Connect with your healthcare providers in your preferred language. Bridge provides real-time medical translation to ensure you understand your care and treatment fully.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 sm:w-auto">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>50+ Languages</span>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                <Languages className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Real-Time Translation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Instant medical translation during appointments in 50+ languages
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                <Shield className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Secure & Private
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Your health information is encrypted and GDPR compliant
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
                <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Better Care
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Understand your diagnosis and treatment in your own language
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                24/7 Access
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Access your medical information and translations anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Everything You Need for Better Healthcare Communication
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Bridge empowers patients to communicate effectively with healthcare providers regardless of language
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Languages,
                title: 'Medical Translation',
                description: 'Specialized translation for medical terminology with accuracy you can trust',
              },
              {
                icon: Users,
                title: 'Connect with Providers',
                description: 'Seamlessly communicate with your doctors, nurses, and medical team',
              },
              {
                icon: Globe,
                title: '50+ Languages',
                description: 'Support for major world languages with medical terminology expertise',
              },
              {
                icon: Shield,
                title: 'GDPR Compliant',
                description: 'Your health data is protected with industry-leading security standards',
              },
              {
                icon: CheckCircle2,
                title: 'Easy to Use',
                description: 'Simple interface designed for patients of all technical backgrounds',
              },
              {
                icon: Heart,
                title: 'Better Outcomes',
                description: 'Clear communication leads to better understanding and health outcomes',
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-3xl bg-linear-to-r from-blue-600 to-cyan-600 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Break Down Language Barriers?
          </h2>
          <p className="mb-8 text-lg text-blue-50">
            Join thousands of patients who trust Bridge for their healthcare communication
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 sm:w-auto">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" className="w-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">Bridge</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Bridge. Bridging healthcare communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

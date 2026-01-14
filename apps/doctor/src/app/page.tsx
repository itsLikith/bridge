import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Languages,
  Shield,
  Zap,
  Clock,
  Award,
  ChevronRight,
  Stethoscope,
  Mic,
  Volume2,
  Hand,
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Bridge</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="#features"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                How It Works
              </Link>
              <Link
                href="#security"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Security
              </Link>
              <Link href="/login">
                <Button size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
                <Stethoscope className="h-4 w-4" />
                Enterprise SaaS for Healthcare
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Building Bridges in{' '}
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Healthcare Communication
                </span>
              </h1>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
                Real-time medical translation for healthcare teams. Bridging the gap between doctors
                and patients across all languages and sign language, ensuring clear and accurate communication.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/login">
                  <Button size="lg" className="w-full sm:w-auto">
                    Sign In
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Watch Demo
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Languages</div>
                </div>
                <div className="h-12 w-px bg-slate-200 dark:bg-slate-800" />
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy</div>
                </div>
                <div className="h-12 w-px bg-slate-200 dark:bg-slate-800" />
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">&lt;1s</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Response Time</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl" />
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
                    <Mic className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 h-3 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-3 w-1/2 rounded bg-slate-100 dark:bg-slate-800/50" />
                  </div>
                </div>
                <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    I&apos;ve been experiencing chest pain for the last two days...
                  </p>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500">
                    <Languages className="h-6 w-6 animate-pulse text-white" />
                  </div>
                </div>
                <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                  <p className="text-sm text-slate-900 dark:text-slate-100">
                    मुझे पिछले दो दिनों से सीने में दर्द हो रहा है...
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                    <Volume2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-3 w-1/3 rounded bg-slate-100 dark:bg-slate-800/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Built for Healthcare Professionals
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Enterprise-grade features designed specifically for medical environments
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Real-Time Translation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Instant voice-to-voice translation with less than 1 second latency for seamless
                conversations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                GDPR Compliant
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Full compliance with international data protection laws. All conversations are encrypted and
                never stored.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950">
                <Stethoscope className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Medical Terminology
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Specialized AI trained on medical vocabulary for accurate translation of clinical
                terms.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                <Clock className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                24/7 Availability
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Always available, no human interpreter scheduling required. Perfect for emergency
                situations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950">
                <Award className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Enterprise Ready
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Built for regulated healthcare environments with security and privacy in mind.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950">
                <Hand className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                Sign Language Support
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Bidirectional sign language to speech conversion, making healthcare accessible for deaf and hard-of-hearing patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-slate-50 px-4 py-20 dark:bg-slate-900/50 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Simple, Fast, Secure
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Start translating conversations in three easy steps
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Select Languages
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choose the patient&apos;s language and the healthcare provider&apos;s language from our
                list of 50+ supported languages.
              </p>
              {/* Connector line */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-linear-to-r from-blue-600 to-transparent lg:block" />
            </div>

            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Start Conversation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Simply speak naturally. Bridge automatically detects who is speaking and translates
                in real-time, creating a seamless connection.
              </p>
              {/* Connector line */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-linear-to-r from-blue-600 to-transparent lg:block" />
            </div>

            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Clear Communication
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Both parties hear translations in their language with accurate medical terminology
                and natural speech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
                <Shield className="h-4 w-4" />
                Enterprise Security
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Your Patient Data is Safe
              </h2>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                We understand the sensitive nature of medical conversations. Bridge is built with
                security and privacy at its core, protecting every connection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      End-to-End Encryption
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      All audio streams are encrypted using AES-256
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      No Data Retention
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Translations are processed in real-time and never stored
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      GDPR & Security Standards
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Built to support regulated healthcare workflows
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                    <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      Regular Security Audits
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Independently audited by cybersecurity experts
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <Shield className="mb-3 h-8 w-8 text-green-600 dark:text-green-400" />
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    ISO 27001
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Certified</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <Shield className="mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <div className="text-sm font-medium text-slate-900 dark:text-white">GDPR</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Compliant</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <Shield className="mb-3 h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    Security Controls
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Toolkit</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <Shield className="mb-3 h-8 w-8 text-orange-600 dark:text-orange-400" />
                  <div className="text-sm font-medium text-slate-900 dark:text-white">
                    Cyber Essentials
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 px-8 py-16 shadow-2xl sm:px-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Bridge the Communication Gap?
              </h2>
              <p className="mb-8 text-lg text-blue-100">
                Join healthcare organizations using Bridge to connect doctors and patients, providing
                better care across all languages.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 sm:w-auto"
                  >
                    Sign In to Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Secure access • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <Languages className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">Bridge</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Connecting doctors and patients across languages, building bridges in healthcare communication.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              © 2025 Bridge. All rights reserved. Connecting healthcare through communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

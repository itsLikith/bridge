"use client";

import Link from "next/link";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "patients",
    icon: Users,
    label: "Patients",
    description: "Manage patient records and communication",
    iconBgColor: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
    href: "/services/patients",
  },
];

export function ServicesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Access and manage your healthcare services
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.id} href={service.href}>
              <Card className="group cursor-pointer border-slate-200 bg-white transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-4 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${service.iconBgColor}`}
                    >
                      <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                      {service.label}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { Bell, TrendingUp, Award, AlertCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const updates = [
  {
    icon: Bell,
    title: "New Feature: Real-time Voice Translation",
    description:
      "Introducing instant voice-to-voice translation with medical terminology support for seamless doctor-patient communication.",
    iconBgColor: "bg-blue-100 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
    badge: "New",
    badgeColor: "bg-blue-600 text-white",
  },
  {
    icon: TrendingUp,
    title: "Performance Update: 40% Faster Processing",
    description:
      "Our latest optimization reduces translation latency to under 500ms, ensuring real-time conversations without delays.",
    iconBgColor: "bg-green-100 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
    badge: "Update",
    badgeColor: "bg-green-600 text-white",
  },
  {
    icon: Award,
    title: "HIPAA Compliance Certified",
    description:
      "Bridge is now fully HIPAA compliant with end-to-end encryption and secure data handling for all healthcare communications.",
    iconBgColor: "bg-purple-100 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
    badge: "Certified",
    badgeColor: "bg-purple-600 text-white",
  },
  {
    icon: AlertCircle,
    title: "Scheduled Maintenance: Jan 5, 2026",
    description:
      "System maintenance scheduled for 2 hours on January 5th, 2AM-4AM EST. All services will be temporarily unavailable.",
    iconBgColor: "bg-orange-100 dark:bg-orange-950",
    iconColor: "text-orange-600 dark:text-orange-400",
    badge: "Notice",
    badgeColor: "bg-orange-600 text-white",
  },
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative mx-auto w-full max-w-5xl px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {updates.map((update, index) => (
            <CarouselItem key={index}>
              <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${update.iconBgColor}`}
                    >
                      <update.icon className={`h-8 w-8 ${update.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${update.badgeColor}`}
                        >
                          {update.badge}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {update.title}
                        </h3>
                      </div>
                      <p className="text-base text-slate-600 dark:text-slate-400">
                        {update.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
        <CarouselDots />
      </Carousel>
    </div>
  );
}

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = {
  scrollTo: (index: number) => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  canScrollNext: () => boolean;
  canScrollPrev: () => boolean;
  selectedIndex: () => number;
};

type CarouselProps = {
  opts?: {
    align?: "start" | "center" | "end";
    loop?: boolean;
  };
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children: React.ReactNode;
};

type CarouselContextProps = {
  scrollNext: () => void;
  scrollPrev: () => void;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  selectedIndex: number;
  itemsCount: number;
  scrollTo: (index: number) => void;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ opts = {}, setApi, className, children }, ref) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [itemsCount, setItemsCount] = React.useState(0);
    const { loop = false } = opts;

    const scrollNext = React.useCallback(() => {
      if (loop) {
        setSelectedIndex((prev) => (prev + 1) % itemsCount);
      } else if (selectedIndex < itemsCount - 1) {
        setSelectedIndex((prev) => prev + 1);
      }
    }, [selectedIndex, itemsCount, loop]);

    const scrollPrev = React.useCallback(() => {
      if (loop) {
        setSelectedIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
      } else if (selectedIndex > 0) {
        setSelectedIndex((prev) => prev - 1);
      }
    }, [selectedIndex, itemsCount, loop]);

    const canScrollNext = loop || selectedIndex < itemsCount - 1;
    const canScrollPrev = loop || selectedIndex > 0;

    const api: CarouselApi = React.useMemo(
      () => ({
        scrollTo: (index: number) => setSelectedIndex(index),
        scrollNext,
        scrollPrev,
        canScrollNext: () => canScrollNext,
        canScrollPrev: () => canScrollPrev,
        selectedIndex: () => selectedIndex,
      }),
      [scrollNext, scrollPrev, canScrollNext, canScrollPrev, selectedIndex]
    );

    React.useEffect(() => {
      if (setApi) {
        setApi(api);
      }
    }, [api, setApi]);

    React.useEffect(() => {
      const count = React.Children.count(children);
      setItemsCount(count);
    }, [children]);

    return (
      <CarouselContext.Provider
        value={{
          scrollNext,
          scrollPrev,
          canScrollNext,
          canScrollPrev,
          selectedIndex,
          itemsCount,
          scrollTo: (index: number) => setSelectedIndex(index),
        }}
      >
        <div ref={ref} className={cn("relative", className)}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { selectedIndex } = useCarousel();

  return (
    <div className="overflow-hidden" ref={ref} {...props}>
      <div
        className={cn("flex transition-transform duration-500 ease-out", className)}
        style={{
          transform: `translateX(-${selectedIndex * 100}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute left-4 top-1/2 z-10 -translate-y-1/2", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute right-4 top-1/2 z-10 -translate-y-1/2", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { selectedIndex, itemsCount, scrollTo } = useCarousel();

  return (
    <div
      ref={ref}
      className={cn("absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2", className)}
      {...props}
    >
      {Array.from({ length: itemsCount }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "h-2 w-2 rounded-full transition-all",
            index === selectedIndex
              ? "w-8 bg-blue-600"
              : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
          )}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
});
CarouselDots.displayName = "CarouselDots";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
};

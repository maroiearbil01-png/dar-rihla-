"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryImage } from "@/types";
import { galleryCategoryLabels } from "@/data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  labels: {
    all: string;
    filter: string;
    expand: string;
    close: string;
    previous: string;
    next: string;
    categories: Record<GalleryCategory, string>;
  };
}

const spanClasses: Record<NonNullable<GalleryImage["span"]>, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

/**
 * Client-side filterable photo grid with a lightweight lightbox.
 * Keeps all interactivity (filtering, lightbox, keyboard nav) isolated
 * here so the page itself can remain a Server Component.
 */
export function GalleryGrid({ images, labels }: GalleryGridProps) {
  const [category, setCategory] = useState<GalleryCategory | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === "all" ? images : images.filter((img) => img.category === category)),
    [images, category]
  );

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  const categories: Array<GalleryCategory | "all"> = [
    "all",
    ...(Object.keys(galleryCategoryLabels) as GalleryCategory[]),
  ];

  return (
    <div>
      <div
        role="tablist"
        aria-label={labels.filter}
        className="flex flex-wrap gap-3"
      >
        {categories.map((cat) => {
          const label = cat === "all" ? labels.all : labels.categories[cat];
          const isActive = category === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setCategory(cat);
                setActiveIndex(null);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-colors",
                isActive
                  ? "border-clay bg-clay text-cream"
                  : "border-sand-dark/60 bg-white text-ink/70 hover:border-clay hover:text-clay"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
        {filtered.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${labels.expand}${image.alt}`}
            className={cn(
              "group relative block overflow-hidden rounded-xl focus-visible:outline-none",
              spanClasses[image.span ?? "normal"]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/25" />
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 animate-fade-in sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10"
          >
            <X size={26} aria-hidden />
          </button>

          <button
            type="button"
            onClick={showPrev}
            aria-label={labels.previous}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 sm:left-6"
          >
            <ChevronLeft size={28} aria-hidden />
          </button>

          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label={labels.next}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 sm:right-6"
          >
            <ChevronRight size={28} aria-hidden />
          </button>

          <p className="absolute bottom-6 left-1/2 max-w-lg -translate-x-1/2 px-4 text-center text-sm text-sand/90">
            {active.alt}
          </p>
        </div>
      ) : null}
    </div>
  );
}

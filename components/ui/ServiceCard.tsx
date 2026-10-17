import type { Service } from "@/types";
import { t, type Locale } from "@/lib/translations";

interface ServiceCardProps {
  service: Service;
  light?: boolean;
  locale: Locale;
}

/**
 * Reusable card for a single riad service/facility.
 * Used on the Home page (subset) and the Services page (full list).
 */
export function ServiceCard({ service, light = false, locale }: ServiceCardProps) {
  const { title, description, icon: Icon } = service;

  return (
    <div
      className={
        light
          ? "rounded-2xl border border-cream/15 bg-cream/5 p-7 transition-colors duration-300 hover:bg-cream/10"
          : "rounded-2xl border border-sand-dark/50 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
      }
    >
      <span
        className={
          light
            ? "flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream"
            : "flex h-12 w-12 items-center justify-center rounded-full bg-sand text-clay"
        }
      >
        <Icon size={22} aria-hidden />
      </span>
      <h3 className={`mt-5 font-serif text-xl ${light ? "text-cream" : "text-charcoal"}`}>
        {t(locale, title)}
      </h3>
      <p className={`mt-2 text-sm leading-relaxed ${light ? "text-sand/80" : "text-ink/75"}`}>
        {t(locale, description)}
      </p>
    </div>
  );
}

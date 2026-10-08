"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

const languages: Array<{ locale: Locale; flag: string; label: string }> = [
  { locale: "fr", flag: "🇫🇷", label: "Français" },
  { locale: "en", flag: "🇬🇧", label: "English" },
];

export function LocaleSwitcher({
  locale,
  light = false,
  compact = false,
}: {
  locale: Locale;
  light?: boolean;
  compact?: boolean;
}) {
  const pathname = usePathname() || "/";
  const currentPage = pathname.replace(/^\/(?:fr|en)(?=\/|$)/, "") || "/";

  return (
    <div
      role="group"
      aria-label="Choisir la langue / Choose language"
      className="flex items-center gap-1.5"
    >
      {languages.map((language) => {
        const pagePath = currentPage.endsWith("/") ? currentPage : `${currentPage}/`;
        const href = `/${language.locale}${pagePath}`;
        return (
          <Link
            key={language.locale}
            href={href}
            aria-current={locale === language.locale ? "page" : undefined}
            aria-label={language.label}
            title={language.label}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-medium transition-colors",
              light
                ? "border-cream/35 text-cream hover:border-cream hover:bg-cream/10"
                : "border-sand-dark/60 text-ink hover:border-clay hover:text-clay",
              locale === language.locale &&
                (light ? "bg-cream/15" : "border-clay bg-sand/60 text-clay"),
              compact && "px-2"
            )}
          >
            <span aria-hidden="true" className="text-base leading-none">{language.flag}</span>
            <span>{compact ? language.locale.toUpperCase() : language.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

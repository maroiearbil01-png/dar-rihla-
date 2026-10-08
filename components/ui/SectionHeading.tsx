import { cn } from "@/lib/utils";
import { t, type Locale } from "@/lib/translations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  locale: Locale;
}

/**
 * Consistent eyebrow + title + description block used across all sections.
 */
export async function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
  as: Heading = "h2",
  locale,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.25em]",
            light ? "text-sand" : "text-clay"
          )}
        >
          {t(locale, eyebrow)}
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-serif text-3xl leading-tight sm:text-4xl md:text-5xl",
          light ? "text-cream" : "text-charcoal"
        )}
      >
        {t(locale, title)}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-sand" : "text-ink/80"
          )}
        >
          {t(locale, description)}
        </p>
      ) : null}
    </div>
  );
}

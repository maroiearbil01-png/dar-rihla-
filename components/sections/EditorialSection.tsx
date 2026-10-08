import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { t, type Locale } from "@/lib/translations";

interface EditorialSectionProps {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: { src: string; alt: string };
  /** Flip the image to the left instead of the right. */
  reverse?: boolean;
  /** Use a plain white background instead of the sand background. */
  tone?: "cream" | "sand";
  as?: "h1" | "h2" | "h3";
  locale: Locale;
}

/**
 * Alternating image/text block used throughout the Home and Hotel pages.
 * Pass `reverse` to flip which side the photograph appears on.
 */
export async function EditorialSection({
  eyebrow,
  title,
  paragraphs,
  image,
  reverse = false,
  tone = "cream",
  as = "h2",
  locale,
}: EditorialSectionProps) {
  return (
    <section className={tone === "sand" ? "bg-sand/60" : "bg-cream"}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28 lg:px-12">
        <div className={cn("relative aspect-[4/5] overflow-hidden rounded-2xl", reverse && "md:order-2")}>
          <Image
            src={image.src}
            alt={t(locale, image.alt)}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className={reverse ? "md:order-1" : undefined}>
          <SectionHeading eyebrow={eyebrow} title={title} as={as} locale={locale} />
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-ink/80">
                {t(locale, paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

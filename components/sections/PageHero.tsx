import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { t, type Locale } from "@/lib/translations";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
  locale: Locale;
}

/**
 * Compact page header used on every inner page (Hotel, Rooms, Services,
 * Gallery, Contact) to keep a consistent, premium visual identity.
 */
export function PageHero({ eyebrow, title, description, image, locale }: PageHeroProps) {
  return (
    <section className="relative flex h-[56svh] min-h-[420px] w-full items-end overflow-hidden">
      <Image
        src={image.src}
        alt={t(locale, image.alt)}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10"
      />
      <Container className="relative z-10 pb-16 pt-32">
        <p className="animate-fade-in text-xs font-medium uppercase tracking-[0.3em] text-sand">
          {t(locale, eyebrow)}
        </p>
        <h1 className="animate-fade-in-up mt-5 max-w-2xl font-serif text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
          {t(locale, title)}
        </h1>
        {description ? (
          <p className="animate-fade-in-up mt-5 max-w-xl text-base leading-relaxed text-cream/85 [animation-delay:150ms]">
            {t(locale, description)}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

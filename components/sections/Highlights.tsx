import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { t, type Locale } from "@/lib/translations";

interface Highlight {
  title: string;
  description: string;
}

interface HighlightsProps {
  items: readonly Highlight[];
  locale: Locale;
}

/**
 * Simple numbered highlights grid for the Hotel page.
 */
export function Highlights({ items, locale }: HighlightsProps) {
  return (
    <section className="bg-sand/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="En un coup d'œil"
          title="Ce qui fait Dar Rihla"
          align="center"
          locale={locale}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.title} className="text-center">
              <span className="font-serif text-4xl text-clay">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-xl text-charcoal">{t(locale, item.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {t(locale, item.description)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

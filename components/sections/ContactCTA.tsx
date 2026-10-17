import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";
import { BookingButton } from "@/components/ui/BookingButton";

/**
 * Closing call-to-action banner encouraging visitors to get in touch.
 */
export function ContactCTA({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <Image
        src="/images/gallery/terrasse.jpeg"
        alt="Terrasse de Riad Dar Rihla au coucher du soleil"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-charcoal/75" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-sand">
          {t(locale, "Votre voyage commence ici")}
        </p>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
          {t(locale, "Préparez votre séjour à")} {siteConfig.name}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/90">
          {t(locale, "Notre équipe se tient à votre disposition pour répondre à toutes vos questions et vous aider à organiser votre séjour aux Habous.")}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BookingButton locale={locale} location="page-closing">
            {t(locale, "Réserver votre séjour")}
          </BookingButton>
          <Button href={localePath(locale, "/contact")} size="lg" variant="outline">
            {t(locale, "Nous contacter")}
            <ArrowRight size={18} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

/**
 * Full-screen hero for the Home page. Communicates atmosphere immediately
 * with the hotel logo, name, tagline and primary CTAs.
 */
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-charcoal">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/20"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-28 sm:px-8 lg:px-12">
        <Image
          src="/logo/logo%20centre.png"
          alt={t(locale, "Logo de Dar Rihla Casablanca")}
          width={1672}
          height={941}
          priority
          sizes="(max-width: 1023px) 200px, 350px"
          className="h-auto w-[min(200px,55vw)] object-contain lg:w-[350px]"
        />

        <div className="w-full">
          <p className="animate-fade-in text-xs font-medium uppercase tracking-[0.35em] text-sand">
            {t(locale, "Quartier des Habous — Casablanca")}
          </p>
          <h1 className="animate-fade-in-up mt-6 max-w-2xl font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            {siteConfig.fullName}
          </h1>
          <p className="animate-fade-in-up mt-6 max-w-xl text-lg italic text-sand sm:text-xl [animation-delay:150ms]">
            {t(locale, siteConfig.tagline)}
          </p>
          <p className="animate-fade-in-up mt-4 max-w-xl text-base leading-relaxed text-cream/85 [animation-delay:250ms]">
            {t(locale, siteConfig.shortDescription)}
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:350ms]">
            <Button href={localePath(locale, "/hotel")} size="lg" variant="primary">
              {t(locale, "Découvrir l'hôtel")}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={localePath(locale, "/rooms")} size="lg" variant="outline">
              {t(locale, "Voir les chambres")}
            </Button>
          </div>
          <div className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:450ms]">
            <span className="text-sm font-medium text-cream">{t(locale, "Langue du site")}</span>
            <LocaleSwitcher locale={locale} light />
          </div>
        </div>
      </div>
    </section>
  );
}

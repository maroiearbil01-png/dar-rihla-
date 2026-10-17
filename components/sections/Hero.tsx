import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

/**
 * Full-screen hero for the Home page. Communicates atmosphere immediately
 * with the riad logo, name, tagline and primary CTAs.
 */
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <Image
        src="/logo/logo%20centre.png"
        alt={t(locale, "Logo de Dar Rihla Casablanca")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 sm:pb-28 lg:px-12">
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
            {t(locale, "Découvrir le riad")}
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
    </section>
  );
}

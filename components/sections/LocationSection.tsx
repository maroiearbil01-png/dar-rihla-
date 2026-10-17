import { ExternalLink, MapPin, PlaneTakeoff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { t, type Locale } from "@/lib/translations";

/**
 * Presents the riad's location with a map embed area and quick facts.
 * Uses an iframe embed (no API key / billing required) as a lightweight
 * "map placeholder" per the project's no-backend constraint.
 */
export function LocationSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Localisation"
            title="Au cœur des Habous"
            description="Un quartier historique, entre artisanat, patrimoine et vie de quartier — à deux pas des principaux sites de Casablanca."
            locale={locale}
          />

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                <MapPin size={20} aria-hidden />
              </span>
              <div>
                <p className="font-medium text-charcoal">{t(locale, "Adresse")}</p>
                <p className="mt-1 text-sm text-ink/75">
                  {siteConfig.address.street}, {t(locale, siteConfig.address.district)}
                  <br />
                  {siteConfig.address.city}, {t(locale, siteConfig.address.country)}
                </p>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-dark"
                >
                  {t(locale, "Ouvrir dans Google Maps")}
                  <ExternalLink size={14} aria-hidden />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                <PlaneTakeoff size={20} aria-hidden />
              </span>
              <div>
                <p className="font-medium text-charcoal">{t(locale, "Aéroport le plus proche")}</p>
                <p className="mt-1 text-sm text-ink/75">
                  {t(locale, siteConfig.nearestAirport.name)} — {siteConfig.nearestAirport.distanceKm} km
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-charcoal/10 lg:aspect-auto">
          <iframe
            title={t(locale, "Localisation de Riad Dar Rihla sur Google Maps")}
            src={siteConfig.mapEmbedUrl}
            className="h-full min-h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}

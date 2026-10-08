import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

export function createMetadata(locale: Locale): Metadata {
  return {
    title: t(locale, "Services"),
    description: t(locale, "Wi-Fi, petit-déjeuner à la carte, restaurant, prêt de vélos, navette aéroport — découvrez tous les services de Riad Dar Rihla."),
    alternates: {
      canonical: localePath(locale, "/services"),
      languages: {
        fr: localePath("fr", "/services"),
        en: localePath("en", "/services"),
      },
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("fr");
}

export default function ServicesPage({ locale = "fr" }: { locale?: Locale }) {
  return (
    <>
      <PageHero
        eyebrow="Services & Facilités"
        title="Un confort pensé dans les moindres détails"
        description="De la réception à la table, chaque service de Dar Rihla est conçu pour que vous vous sentiez chez vous, dès votre arrivée."
        image={{
          src: "/images/hotel/restaurant.jpeg",
          alt: "Salle de restaurant de Riad Dar Rihla",
        }}
        locale={locale}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

/**
 * Highlights a subset of riad services on the Home page.
 */
export function AmenitiesPreview({ locale }: { locale: Locale }) {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="À votre service"
          title="Tout le confort d'une maison attentionnée"
          description="De la réception à la table, chaque service est pensé pour que vous puissiez vous concentrer sur l'essentiel : votre séjour."
          light
          locale={locale}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} light locale={locale} />
          ))}
        </div>

        <div className="mt-10">
          <Button href={localePath(locale, "/services")} variant="outline">
            {t(locale, "Tous les services")}
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}

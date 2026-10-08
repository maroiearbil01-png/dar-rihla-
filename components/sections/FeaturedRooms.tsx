import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RoomCard } from "@/components/ui/RoomCard";
import { rooms } from "@/data/rooms";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

/**
 * Showcases a curated subset of rooms on the Home page, linking through
 * to the full Rooms page for the complete list.
 */
export function FeaturedRooms({ locale }: { locale: Locale }) {
  const featured = rooms.slice(0, 3);

  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Nos chambres"
            title="Cinq chambres, une même attention au détail"
            description="Chaque chambre de Dar Rihla a été pensée comme un cocon, entre confort contemporain et détails artisanaux hérités de la maison."
            locale={locale}
          />
          <Button href={localePath(locale, "/rooms")} variant="secondary" className="hidden sm:inline-flex">
            {t(locale, "Toutes les chambres")}
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((room, index) => (
            <RoomCard key={room.slug} room={room} priority={index === 0} locale={locale} />
          ))}
        </div>

        <Button href={localePath(locale, "/rooms")} variant="secondary" className="mt-10 w-full sm:hidden">
          {t(locale, "Toutes les chambres")}
          <ArrowRight size={16} aria-hidden />
        </Button>
      </Container>
    </section>
  );
}

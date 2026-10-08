import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { galleryImages } from "@/data/gallery";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

/**
 * Small preview grid linking through to the full Gallery page.
 */
export function GalleryPreview({ locale }: { locale: Locale }) {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="bg-sand/60 py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Galerie"
            title="Un aperçu de la maison"
            description="Patios, salons marocains, chambres et jardin — un avant-goût en images de votre séjour."
            locale={locale}
          />
          <Button href={localePath(locale, "/gallery")} variant="secondary" className="hidden sm:inline-flex">
            Toute la galerie
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
          {preview.map((image, index) => (
            <Link
              key={image.src}
              href={localePath(locale, "/gallery")}
              className={
                "group relative block overflow-hidden rounded-xl " +
                (index === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square")
              }
            >
              <Image
                src={image.src}
                alt={t(locale, image.alt)}
                fill
                sizes="(min-width: 768px) 30vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </Link>
          ))}
        </div>

        <Button href={localePath(locale, "/gallery")} variant="secondary" className="mt-10 w-full sm:hidden">
            {t(locale, "Toute la galerie")}
          <ArrowRight size={16} aria-hidden />
        </Button>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";
import { galleryCategoryLabels } from "@/data/gallery";

export function createMetadata(locale: Locale): Metadata {
  return {
    title: t(locale, "Galerie"),
    description: t(locale, "Explorez la galerie photo de Riad Dar Rihla : salons marocains, chambres, jardin et terrasse au cœur des Habous."),
    alternates: {
      canonical: localePath(locale, "/gallery"),
      languages: {
        fr: localePath("fr", "/gallery"),
        en: localePath("en", "/gallery"),
      },
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("fr");
}

export default function GalleryPage({ locale = "fr" }: { locale?: Locale }) {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="La maison en images"
        description="Un aperçu des salons marocains, des chambres et du jardin de Riad Dar Rihla. Cliquez sur une photo pour l'agrandir."
        image={{
          src: "/images/gallery/vue-de-lensemble.jpeg",
          alt: "Vue d'ensemble de Riad Dar Rihla",
        }}
        locale={locale}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <GalleryGrid
            images={galleryImages.map((image) => ({ ...image, alt: t(locale, image.alt) }))}
            labels={{
              all: t(locale, "Tous"),
              filter: t(locale, "Filtrer la galerie par catégorie"),
              expand: t(locale, "Agrandir la photo : "),
              close: t(locale, "Fermer la photo"),
              previous: t(locale, "Photo précédente"),
              next: t(locale, "Photo suivante"),
              categories: Object.fromEntries(
                Object.entries(galleryCategoryLabels).map(([category, label]) => [
                  category,
                  t(locale, label),
                ])
              ) as typeof galleryCategoryLabels,
            }}
          />
        </Container>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}

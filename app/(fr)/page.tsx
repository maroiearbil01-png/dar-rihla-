import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { AmenitiesPreview } from "@/components/sections/AmenitiesPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { hotelStory } from "@/data/hotel";
import { siteConfig } from "@/data/site";
import { t } from "@/lib/translations";
import type { Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

export function createMetadata(locale: Locale): Metadata {
  return {
    title: `${siteConfig.fullName} — ${t(locale, siteConfig.tagline)}`,
    description: t(locale, siteConfig.description),
    alternates: {
      canonical: localePath(locale),
      languages: { fr: localePath("fr"), en: localePath("en") },
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("fr");
}

export default function Home({ locale = "fr" }: { locale?: Locale }) {
  return (
    <>
      <Hero locale={locale} />

      <EditorialSection
        eyebrow={hotelStory.intro.eyebrow}
        title={hotelStory.intro.title}
        paragraphs={hotelStory.intro.paragraphs}
        image={{
          src: "/images/hotel/porte-dentree-marocaine.jpeg",
          alt: "Porte d'entrée marocaine sculptée de Riad Dar Rihla",
        }}
        locale={locale}
      />

      <FeaturedRooms locale={locale} />
      <AmenitiesPreview locale={locale} />
      <GalleryPreview locale={locale} />
      <LocationSection locale={locale} />
      <ContactCTA locale={locale} />
    </>
  );
}

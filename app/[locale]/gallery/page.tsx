import GalleryPage, { createMetadata } from "@/components/pages/GalleryPage";
import { toSiteLocale } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: routeLocale } = await params;
  return createMetadata(toSiteLocale(routeLocale));
}

export default async function LocalizedGallery({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: routeLocale } = await params;
  const locale = toSiteLocale(routeLocale);
  return <GalleryPage locale={locale} />;
}

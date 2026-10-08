import ContactPage, { createMetadata } from "@/app/(fr)/contact/page";
import { toSiteLocale } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: routeLocale } = await params;
  return createMetadata(toSiteLocale(routeLocale));
}

export default async function LocalizedContact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: routeLocale } = await params;
  const locale = toSiteLocale(routeLocale);
  return <ContactPage locale={locale} />;
}

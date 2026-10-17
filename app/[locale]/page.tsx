import HomePage, { createMetadata } from "@/components/pages/HomePage";
import { toSiteLocale } from "@/lib/translations";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: routeLocale } = await params;
  return createMetadata(toSiteLocale(routeLocale));
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: routeLocale } = await params;
  const locale = toSiteLocale(routeLocale);
  return <HomePage locale={locale} />;
}

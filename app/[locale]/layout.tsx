import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { display, inter, createSiteMetadata } from "@/lib/site-metadata";
import { toSiteLocale, type SiteLocale } from "@/lib/translations";
import "@/app/globals.css";

const locales: SiteLocale[] = ["fr", "en"];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return createSiteMetadata(toSiteLocale(locale));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: routeLocale } = await params;
  const locale = toSiteLocale(routeLocale);
  return (
    <html lang={locale} className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-charcoal">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

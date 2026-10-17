import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { display, inter, createSiteMetadata } from "@/lib/site-metadata";
import "@/app/globals.css";

export const metadata = createSiteMetadata("fr");

export default function FrenchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream pb-[calc(5rem+env(safe-area-inset-bottom))] font-sans text-charcoal lg:pb-0">
        <Navbar locale="fr" />
        <main className="flex-1">{children}</main>
        <Footer locale="fr" />
      </body>
    </html>
  );
}

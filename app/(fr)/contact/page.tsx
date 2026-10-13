import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { LocationSection } from "@/components/sections/LocationSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig, socialLinks } from "@/data/site";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

export function createMetadata(locale: Locale): Metadata {
  return {
    title: t(locale, "Contact"),
    description: t(locale, "Contactez Riad Dar Rihla : adresse aux Habous, téléphone, email, horaires de réception et réseaux sociaux."),
    alternates: {
      canonical: localePath(locale, "/contact"),
      languages: {
        fr: localePath("fr", "/contact"),
        en: localePath("en", "/contact"),
      },
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata("fr");
}

export default function ContactPage({ locale = "fr" }: { locale?: Locale }) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre séjour"
        description="Une question, une demande particulière ? Notre équipe vous répond avec plaisir."
        image={{
          src: "/images/hotel/jardin-salon-de-the.jpeg",
          alt: "Jardin et salon de thé de Riad Dar Rihla",
        }}
        locale={locale}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nos coordonnées"
              title="Venez nous rencontrer"
              description="La maison se trouve au cœur des Habous, à quelques minutes du centre de Casablanca."
              locale={locale}
            />

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <MapPin size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">{t(locale, "Adresse")}</p>
                  <p className="mt-1 text-sm text-ink/75">
                    {siteConfig.address.street}
                    <br />
                    {t(locale, siteConfig.address.district)}, {siteConfig.address.city}, {t(locale, siteConfig.address.country)}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <Phone size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">{t(locale, "Téléphone")}</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-sm text-ink/75 hover:text-clay"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay text-xs font-semibold" aria-hidden>
                  WA
                </span>
                <div>
                  <p className="font-medium text-charcoal">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-ink/75 hover:text-clay"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <Mail size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">{t(locale, "Email")}</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-ink/75 hover:text-clay"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <Clock size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">{t(locale, "Horaires")}</p>
                  <ul className="mt-1 space-y-1 text-sm text-ink/75">
                    {siteConfig.hours.map((hour) => (
                      <li key={hour.label}>
                        <span className="font-medium text-ink">{t(locale, hour.label)} : </span>
                        {t(locale, hour.value)}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-sm font-medium text-charcoal">{t(locale, "Suivez-nous")}</p>
              <ul className="mt-3 flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t(locale, label)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-dark/60 text-ink/70 transition-colors hover:border-clay hover:text-clay"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-sand-dark/40 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-charcoal">{t(locale, "Envoyez-nous un message")}</h2>
            <p className="mt-2 text-sm text-ink/70">
              {t(locale, "Pour une réponse directe, contactez notre équipe par téléphone ou WhatsApp.")}
            </p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </div>
        </Container>
      </section>

      <LocationSection locale={locale} />
    </>
  );
}

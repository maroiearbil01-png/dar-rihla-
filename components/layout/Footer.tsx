import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig, socialLinks } from "@/data/site";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

/**
 * Site-wide footer: brand statement, navigation, contact info and socials.
 */
export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-sand">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl text-cream">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/80">
            {t(locale, siteConfig.shortDescription)}
          </p>
          <ul className="mt-6 flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(locale, label)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sand/20 text-sand transition-colors hover:border-clay hover:text-clay"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={t(locale, "Liens du site")}>
          <h2 className="font-serif text-lg text-cream">{t(locale, "Navigation")}</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
                  className="text-sm text-sand/80 transition-colors hover:text-cream"
                >
                  {t(locale, item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-lg text-cream">{t(locale, "Contact")}</h2>
          <ul className="mt-5 space-y-4 text-sm text-sand/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-clay" aria-hidden />
              <span>
                {siteConfig.address.street}
                <br />
                {t(locale, siteConfig.address.district)}, {siteConfig.address.city}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-clay" aria-hidden />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-cream">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="shrink-0 text-clay" aria-hidden>WhatsApp</span>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                {siteConfig.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-clay" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-sand/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand/60 sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. {t(locale, "Tous droits réservés.")}
          </p>
          <p>{siteConfig.address.city}, {siteConfig.address.country}</p>
        </Container>
      </div>
    </footer>
  );
}

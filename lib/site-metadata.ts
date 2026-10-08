import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function createSiteMetadata(locale: Locale): Metadata {
  const title = `${siteConfig.fullName} — ${t(locale, siteConfig.tagline)}`;
  const description = t(locale, siteConfig.shortDescription);

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s — ${siteConfig.name}` },
    description,
    keywords:
      locale === "en"
        ? ["riad Casablanca", "hotel Habous", "Dar Rihla"]
        : ["riad Casablanca", "hôtel Habous", "Dar Rihla"],
    openGraph: {
      title,
      description,
      url: localePath(locale),
      siteName: siteConfig.fullName,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      type: "website",
      images: [
        {
          url: "/images/gallery/jardin-vue-de-lensemble.jpeg",
          width: 1200,
          height: 800,
          alt: siteConfig.fullName,
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

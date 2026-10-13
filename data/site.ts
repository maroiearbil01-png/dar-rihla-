/**
 * Global site configuration: brand info, contact details and social links.
 * Centralized so nothing is hard-coded across components/pages.
 */
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Dar Rihla",
  fullName: "Riad Dar Rihla",
  tagline: "Une maison, un voyage",
  shortDescription:
    "Un riad historique au cœur des Habous, à Casablanca — où l'hospitalité marocaine rencontre un confort raffiné.",
  description:
    "Riad Dar Rihla vous accueille comme un invité, dans une maison centenaire du quartier des Habous à Casablanca. Zelliges, plafonds sculptés et patio ombragé composent un décor authentique pensé pour ralentir le temps.",
  url: "https://www.dar-rihla.example",
  locale: "fr_FR",
  address: {
    street: "92 boulevard Victor Hugo",
    district: "Quartier des Habous",
    city: "Casablanca",
    country: "Maroc",
  },
  phone: "+212 522 490 400",
  whatsapp: "+212 640 255 057",
  email: "bookdarrihla@gmail.com",
  hours: [
    { label: "Réception", value: "24h/24 — 7j/7" },
    { label: "Petit-déjeuner", value: "7h30 – 10h30" },
    { label: "Restaurant", value: "12h30 – 22h00" },
  ],
  nearestAirport: {
    name: "Aéroport Mohammed V de Casablanca",
    distanceKm: 27,
  },
  mapUrl: "https://share.google/wVGJXTVZc2ZJIk4Wv",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Quartier+des+Habous,+Casablanca&output=embed",
} as const;

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "L'hôtel", href: "/hotel" },
  { label: "Chambres", href: "/rooms" },
  { label: "Services", href: "/services" },
  { label: "Galerie", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/dar_rihla/", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const contactDetails = [
  {
    label: "Adresse",
    value: "92 boulevard Victor Hugo, Habous, Casablanca",
    icon: MapPin,
  },
  { label: "Téléphone", value: siteConfig.phone, icon: Phone },
  { label: "Email", value: siteConfig.email, icon: Mail },
];

import type { ComponentType } from "react";

/**
 * A minimal shape compatible with both lucide-react icons and the
 * hand-rolled brand icon components in components/icons.
 */
export type IconComponent = ComponentType<{
  size?: number | string;
  className?: string;
}>;

/**
 * A single navigation link used in the Navbar and Footer.
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * A riad room that can be displayed via the RoomCard component.
 */
export interface Room {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capacity: number;
  bedType: string;
  sizeSqm?: number;
  view?: string;
  facilities: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

/**
 * A riad service or facility shown on the Services page and Home page.
 */
export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconComponent;
}

/**
 * A category used to filter the photo gallery.
 */
export type GalleryCategory = "riad" | "chambres" | "espaces";

/**
 * A single photograph in the gallery.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Optional aspect hint used to vary the grid layout. */
  span?: "tall" | "wide" | "normal";
}

/**
 * A social media link shown in the Footer and Contact page.
 */
export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

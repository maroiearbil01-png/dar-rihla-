import type { GalleryImage } from "@/types";

/**
 * Centralized gallery dataset powering both the Gallery page and the
 * Home page gallery preview. Categories are used for the filter UI.
 */
export const galleryImages: GalleryImage[] = [
  // Hôtel — intérieurs & architecture
  { src: "/images/hotel/porte-dentree-marocaine.jpeg", alt: "Porte d'entrée marocaine sculptée", category: "hotel", span: "tall" },
  { src: "/images/hotel/salon-marocain-restaurant.jpeg", alt: "Salon marocain attenant au restaurant", category: "hotel" },
  { src: "/images/hotel/salon-marocain-restaurant2.jpeg", alt: "Détail du salon marocain et du restaurant", category: "hotel" },
  { src: "/images/hotel/restaurant.jpeg", alt: "Salle de restaurant de Riad Dar Rihla", category: "hotel", span: "wide" },
  { src: "/images/hotel/restaurant-interieur.jpeg", alt: "Intérieur du restaurant", category: "hotel" },
  { src: "/images/hotel/interieur-restaurant.jpeg", alt: "Vue intérieure du restaurant", category: "hotel" },
  { src: "/images/hotel/jardin-salon-de-the.jpeg", alt: "Jardin et salon de thé", category: "hotel", span: "tall" },

  // Espaces — jardin, terrasse, couloirs
  { src: "/images/gallery/vue-de-lensemble.jpeg", alt: "Vue d'ensemble de Riad Dar Rihla", category: "espaces", span: "wide" },
  { src: "/images/gallery/jardin-vue-de-lensemble.jpeg", alt: "Vue d'ensemble du jardin", category: "espaces" },
  { src: "/images/gallery/terrasse.jpeg", alt: "Terrasse de Riad Dar Rihla", category: "espaces", span: "tall" },
  { src: "/images/gallery/the-spot.jpeg", alt: "Coin salon de thé", category: "espaces" },
  { src: "/images/gallery/vue-couloir.jpeg", alt: "Couloir intérieur aux zelliges traditionnels", category: "espaces" },
  { src: "/images/gallery/vue-restaurant.jpeg", alt: "Vue sur le restaurant depuis le patio", category: "espaces", span: "wide" },

  // Chambres
  { src: "/images/rooms/chambre-de-luxe-101.jpeg", alt: "Chambre de Luxe 101", category: "chambres", span: "tall" },
  { src: "/images/rooms/chambre-double-de-luxe-101.jpeg", alt: "Lit de la Chambre de Luxe 101", category: "chambres" },
  { src: "/images/rooms/chambre-102.jpeg", alt: "Chambre 102", category: "chambres" },
  { src: "/images/rooms/chambre-102-vue-sur-ville.jpeg", alt: "Vue sur la ville depuis la Chambre 102", category: "chambres", span: "wide" },
  { src: "/images/rooms/chambre-103.jpeg", alt: "Chambre Double 103", category: "chambres" },
  { src: "/images/rooms/chambre-double-103-vue-sur-ville.jpeg", alt: "Vue sur la ville depuis la Chambre 103", category: "chambres" },
  { src: "/images/rooms/chambre-105-vue-sur-jardin.jpeg", alt: "Chambre 105 avec vue sur le jardin", category: "chambres", span: "tall" },
  {
    src: "/images/rooms/chambre-de-luxe-104-avec-balcon-vue-sur-jardin.jpeg",
    alt: "Chambre de Luxe 104 avec balcon",
    category: "chambres",
    span: "wide",
  },
  {
    src: "/images/rooms/chambre-double-de-luxe-avec-balcon-vue-sur-jardin.jpeg",
    alt: "Lit de la Chambre de Luxe 104",
    category: "chambres",
  },
];

export const galleryCategoryLabels: Record<GalleryImage["category"], string> = {
  hotel: "Hôtel",
  chambres: "Chambres",
  espaces: "Espaces & Jardin",
};

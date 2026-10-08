import {
  BedDouble,
  Bike,
  Coffee,
  ConciergeBell,
  PlaneTakeoff,
  ShieldCheck,
  Trees,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import type { Service } from "@/types";

/**
 * Data-driven list of hotel services & facilities.
 * Add, remove or edit entries here — ServicesGrid renders whatever is here.
 */
export const services: Service[] = [
  {
    slug: "wifi",
    title: "Wi-Fi gratuit",
    description:
      "Une connexion Wi-Fi gratuite et fiable dans l'ensemble de la maison, du patio aux chambres.",
    icon: Wifi,
  },
  {
    slug: "petit-dejeuner",
    title: "Petit-déjeuner à la carte",
    description:
      "Un petit-déjeuner à la carte servi chaque matin dans le patio, entre spécialités marocaines et classiques continentaux.",
    icon: Coffee,
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    description:
      "Une cuisine raffinée servie dans nos salons marocains ou sur la terrasse, pour le déjeuner comme le dîner.",
    icon: UtensilsCrossed,
  },
  {
    slug: "velos",
    title: "Location de vélos",
    description:
      "Louez un vélo et partez à la découverte de la ville à votre rythme. En option, un guide peut vous accompagner pour explorer la ville.",
    icon: Bike,
  },
  {
    slug: "reception",
    title: "Réception 24h/24",
    description:
      "Une équipe présente à toute heure pour vous accueillir, vous conseiller et veiller à votre confort.",
    icon: ConciergeBell,
  },
  {
    slug: "navette-aeroport",
    title: "Navette aéroport",
    description:
      "Service de navette aéroport disponible sur demande (supplément payant) depuis l'aéroport Mohammed V.",
    icon: PlaneTakeoff,
  },
  {
    slug: "jardin-terrasse",
    title: "Jardin & terrasse",
    description:
      "Un jardin ombragé sous l'olivier et une terrasse ouverte, pour se détendre à toute heure de la journée.",
    icon: Trees,
  },
  {
    slug: "chambres-privatives",
    title: "Salles de bain privatives",
    description:
      "Chaque chambre dispose de sa propre salle de bain privative, pour un confort discret et moderne.",
    icon: BedDouble,
  },
  {
    slug: "securite",
    title: "Maison sécurisée",
    description:
      "Un environnement calme et sécurisé, pensé pour que vous puissiez profiter de votre séjour l'esprit tranquille.",
    icon: ShieldCheck,
  },
];

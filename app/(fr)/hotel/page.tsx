import HotelPage, { createMetadata } from "@/components/pages/HotelPage";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return createMetadata("fr");
}

export default function Page() {
  return <HotelPage locale="fr" />;
}

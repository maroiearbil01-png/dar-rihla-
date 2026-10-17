import RoomsPage, { createMetadata } from "@/components/pages/RoomsPage";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return createMetadata("fr");
}

export default function Page() {
  return <RoomsPage locale="fr" />;
}

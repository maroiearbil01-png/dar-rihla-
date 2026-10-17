import ServicesPage, { createMetadata } from "@/components/pages/ServicesPage";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return createMetadata("fr");
}

export default function Page() {
  return <ServicesPage locale="fr" />;
}

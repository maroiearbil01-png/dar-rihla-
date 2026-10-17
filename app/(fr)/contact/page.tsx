import ContactPage, { createMetadata } from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return createMetadata("fr");
}

export default function Page() {
  return <ContactPage locale="fr" />;
}

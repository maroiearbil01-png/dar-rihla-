import HomePage, { createMetadata } from "@/components/pages/HomePage";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return createMetadata("fr");
}

export default function Page() {
  return <HomePage locale="fr" />;
}

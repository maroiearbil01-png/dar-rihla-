import GalleryPage, { createMetadata } from "@/components/pages/GalleryPage";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return createMetadata("fr");
}

export default function Page() {
  return <GalleryPage locale="fr" />;
}

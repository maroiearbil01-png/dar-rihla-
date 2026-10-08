import type { Locale } from "@/lib/translations";

export function localePath(locale: Locale, path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const hashIndex = normalizedPath.indexOf("#");
  const pathname = hashIndex < 0 ? normalizedPath : normalizedPath.slice(0, hashIndex);
  const hash = hashIndex < 0 ? "" : normalizedPath.slice(hashIndex);
  const trailingPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `/${locale}${trailingPath}${hash}`;
}

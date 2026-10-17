import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/data/booking";
import { t, type Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

type BookingPlacement = "inline" | "mobile-fixed";

interface BookingButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  locale: Locale;
  location: string;
  placement?: BookingPlacement;
  children?: ReactNode;
}

export function BookingButton({
  locale,
  location,
  placement = "inline",
  className,
  children,
  ...props
}: BookingButtonProps) {
  const fixed = placement === "mobile-fixed";

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children ?? t(locale, "Réserver maintenant")} — ${t(locale, "ouvre Booking.com dans un nouvel onglet")}`}
      data-booking-cta={location}
      data-locale={locale}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-clay px-7 py-3 text-center text-sm font-medium tracking-wide text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay",
        fixed && "fixed inset-x-4 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 min-h-14 shadow-lg lg:hidden",
        className
      )}
      {...props}
    >
      <span>{children ?? t(locale, "Réserver maintenant")}</span>
      <ArrowUpRight size={17} aria-hidden />
    </a>
  );
}

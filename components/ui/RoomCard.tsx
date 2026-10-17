import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Maximize, Users } from "lucide-react";
import type { Room } from "@/types";
import { t, type Locale } from "@/lib/translations";
import { localePath } from "@/lib/paths";
import { BookingButton } from "@/components/ui/BookingButton";

interface RoomCardProps {
  room: Room;
  /** Marks the first image as a priority load (use for above-the-fold cards). */
  priority?: boolean;
  locale: Locale;
  showBookingCta?: boolean;
}

/**
 * Reusable room card used on both the Home page (featured rooms) and the
 * Rooms page. Add new rooms in data/rooms.ts — no changes needed here.
 */
export function RoomCard({ room, priority = false, locale, showBookingCta = false }: RoomCardProps) {
  const cover = room.images[0];

  return (
    <article
      id={room.slug}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={cover.src}
          alt={t(locale, cover.alt)}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {room.view ? (
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium tracking-wide text-charcoal backdrop-blur-sm">
            {t(locale, room.view)}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-charcoal">{t(locale, room.name)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">
          {t(locale, room.shortDescription)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink/70">
          <li className="flex items-center gap-1.5">
            <Users size={15} className="text-clay" aria-hidden />
            {room.capacity} {t(locale, "pers.")}
          </li>
          <li className="flex items-center gap-1.5">
            <BedDouble size={15} className="text-clay" aria-hidden />
            {t(locale, room.bedType)}
          </li>
          {room.sizeSqm ? (
            <li className="flex items-center gap-1.5">
              <Maximize size={15} className="text-clay" aria-hidden />
              {room.sizeSqm} m²
            </li>
          ) : null}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {room.facilities.slice(0, 3).map((facility) => (
            <li
              key={facility}
              className="rounded-full bg-sand px-3 py-1 text-[11px] font-medium text-ink/80"
            >
              {t(locale, facility)}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-3">
          <Link
            href={localePath(locale, `/rooms#${room.slug}`)}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-clay transition-colors hover:text-clay-dark"
          >
            {t(locale, "Découvrir")}
            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          {showBookingCta ? (
            <BookingButton locale={locale} location={`room-${room.slug}`} className="w-full">
              {t(locale, "Réserver cette chambre")}
            </BookingButton>
          ) : null}
        </div>
      </div>
    </article>
  );
}

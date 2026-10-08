"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { t, type Locale } from "@/lib/translations";

/**
 * Purely visual contact form — no backend yet. Submission is intercepted
 * client-side and replaced with a confirmation message so the UI feels
 * complete without implying a working integration.
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-clay/30 bg-sand/60 p-8 text-center"
      >
        <p className="font-serif text-2xl text-charcoal">{t(locale, "Merci pour votre message")}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          {t(locale, "Notre équipe reviendra vers vous dans les meilleurs délais. À très bientôt à Riad Dar Rihla.")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-charcoal">
            {t(locale, "Nom complet")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 h-12 w-full rounded-lg border border-sand-dark/60 bg-white px-4 text-sm text-charcoal placeholder:text-ink/40 focus-visible:outline-none"
            placeholder={t(locale, "Votre nom")}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal">
            {t(locale, "Email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 h-12 w-full rounded-lg border border-sand-dark/60 bg-white px-4 text-sm text-charcoal placeholder:text-ink/40 focus-visible:outline-none"
            placeholder={t(locale, "vous@exemple.com")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-charcoal">
          {t(locale, "Sujet")}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="mt-2 h-12 w-full rounded-lg border border-sand-dark/60 bg-white px-4 text-sm text-charcoal placeholder:text-ink/40 focus-visible:outline-none"
          placeholder={t(locale, "Demande d'information, séjour, événement…")}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          {t(locale, "Message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-sand-dark/60 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-ink/40 focus-visible:outline-none"
          placeholder={t(locale, "Votre message…")}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-clay px-7 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-clay-dark focus-visible:outline-none"
      >
        {t(locale, "Envoyer le message")}
        <Send size={16} aria-hidden />
      </button>
    </form>
  );
}

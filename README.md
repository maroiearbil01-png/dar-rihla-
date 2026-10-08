# Dar Rihla

Site vitrine Next.js exporté en HTML statique. Les versions française et anglaise sont pré-générées sous `/fr/` et `/en/`.

## Build local

```bash
npm ci
npm run build
```

Le site exporté est généré dans `out/`.

## Déploiement sur Vercel

Importer le dépôt GitHub `azehouani/dar-rihla` dans Vercel, avec le dossier du projet comme répertoire racine. Vercel détecte Next.js et lance `npm run build`, qui génère le site statique dans `out/`.

Chaque push sur `main` déclenche un nouveau déploiement de production ; les autres branches et les pull requests créent des aperçus.

Les réservations et demandes d'expérience doivent rester des liens externes (Booking.com, Airbnb et WhatsApp). Le site ne traite ni réservation ni paiement. Les destinations Booking.com, Airbnb et WhatsApp restent à ajouter quand leurs URL et numéro de contact seront fournis.

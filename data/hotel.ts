/**
 * Long-form editorial content for the Home and Riad pages.
 * Adapted from public/hotel-description.txt.
 */

export const hotelStory = {
  intro: {
    eyebrow: "Bienvenue",
    title: "L'hospitalité d'une maison",
    paragraphs: [
      "À Riad Dar Rihla, nous aimons recevoir nos voyageurs comme des invités. Nous serons heureux de vous accueillir personnellement, de vous faire découvrir la maison et de vous accompagner tout au long de votre séjour.",
      "Nous aimons partager nos bonnes adresses, nos conseils et nos coups de cœur pour vous permettre de découvrir Casablanca autrement, des ruelles des Habous aux adresses confidentielles appréciées des habitants.",
    ],
  },
  history: {
    eyebrow: "Depuis plus d'un siècle",
    title: "Une mémoire de Casablanca",
    paragraphs: [
      "Depuis plus d'un siècle, cette maison fait partie du paysage et de la mémoire de Casablanca. Aujourd'hui inscrite dans le patrimoine architectural, elle a été réaménagée avec une volonté simple : préserver son âme tout en lui donnant une nouvelle vie.",
      "Derrière ses grandes portes en bois, ses zelliges, ses plafonds sculptés et ses salons chargés d'histoire, Dar Rihla invite ses voyageurs à ralentir et à changer d'époque.",
    ],
    image: {
      src: "/images/hotel/porte-dentree-marocaine.jpeg",
      alt: "Porte d'entrée marocaine sculptée de Riad Dar Rihla",
    },
  },
  architecture: {
    eyebrow: "Architecture & design",
    title: "L'âme du zellige, une nouvelle vie",
    paragraphs: [
      "Nous faisons vivre une maison où l'on se réveille dans une architecture centenaire, où l'on prend son petit-déjeuner dans le patio et où l'on s'installe sous l'olivier.",
      "Chaque espace — salons marocains, patio, restaurant — a été pensé pour marier le patrimoine architectural à un confort contemporain discret.",
    ],
    image: {
      src: "/images/hotel/salon-marocain-restaurant.jpeg",
      alt: "Salon marocain attenant au restaurant",
    },
  },
  atmosphere: {
    eyebrow: "L'atmosphère",
    title: "Découvrir Casablanca autrement",
    paragraphs: [
      "Dar Rihla signifie « la maison du voyage ». Et le vôtre commence ici : chaque espace invite à la curiosité, à l'inspiration et au bien-être, que vous soyez ici pour quelques jours, pour le travail ou simplement pour découvrir la ville.",
      "Ici, vous êtes notre invité, accueilli au cœur d'une maison de caractère.",
    ],
    image: {
      src: "/images/hotel/jardin-salon-de-the.jpeg",
      alt: "Jardin et salon de thé de Riad Dar Rihla",
    },
  },
} as const;

export const hotelHighlights = [
  {
    title: "5 chambres d'exception",
    description:
      "Des chambres doubles et suites de luxe, certaines avec balcon et vue sur le jardin ou la ville.",
  },
  {
    title: "Quartier historique des Habous",
    description:
      "Au cœur de l'un des quartiers les plus emblématiques de Casablanca, entre artisanat et architecture marocaine.",
  },
  {
    title: "Patio & jardin centenaires",
    description:
      "Un patio ombragé et un jardin où prendre le petit-déjeuner ou se reposer sous l'olivier.",
  },
  {
    title: "Restaurant & salon de thé",
    description:
      "Une cuisine à la carte servie dans un cadre authentique, entre salons marocains et terrasse.",
  },
] as const;

export const neighborhood = {
  eyebrow: "Le quartier",
  title: "Au cœur des Habous",
  paragraphs: [
    "Riad Dar Rihla se trouve au cœur des Habous, l'un des quartiers historiques les plus emblématiques de Casablanca. Ici, la ville se découvre autrement, au fil des ruelles, des arcades et des places qui mêlent architecture marocaine et héritage casablancais.",
    "À quelques pas de la maison, flânez entre les échoppes d'artisans, les librairies, les marchés traditionnels et les pâtisseries du quartier, ou découvrez le célèbre marché aux olives.",
  ],
} as const;

import { FolderIcon } from '../components/Icons';

export const siteName = 'david.dev'; // mets ton prénom

// Les pages du menu. href = l'adresse de la page.
export const navLinks: { label: string; href: string; }[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Présentation', href: '/presentation' },
  { label: 'Projets perso', href: '/projets-perso' },
  { label: 'Projets LDNR', href: '/projets-ldnr' },
  { label: 'Contact', href: '/contact' },
];

export const cv = {
  label: "03 / CV",
  title: "Mon CV",
  fileName: 'CV.pdf',
  fileText: "CV POINT David",
  fileUrl: '/cv.pdf',
  button: " Télécharger ma fiche personnage",

  scene: {
    window: "routine.exe / 03",
    image: "/images/scene-03.svg",
    title: " 03 - Téléchargement des shaders",
    text: "Là c'est souvent long par contre",
    step: 3,
  },
};

export const accueil = {
  title: "hello world",
  image: "../images/pc.png",
}

export const presentation = {
  label: "PRÉSENTATION :",
  title: "Charater design",
  name: "David",
  job: "Concepteur Développeur d'Application",
  quote: "Je cherche un stage.",
  note: " Toulouse - Permis B - Anglais B"
};

export const competences = {
  label: "01 / COMPÉTENCES",
  title: "Les skills du personnage",
  examples: "COMPÉTENCES - ACQUISES EN FORMATION",
  skills: [
    { title: "Langages", tech: "Java - Javascript - C", text: "Du code objet aux frameworks." },
    { title: "Interfqces", tech: "HTML - Angular", text: "Des ùecrqns web structurés." },
  ],

  scene: {
    window: "routine.exe / 01",
    image: "/images/scene-01.svg",
    title: " 01 - Allumage de la machine",
    text: " ",
    step: 1,
  },
};

export const experiences = {
  label: "02 / EXPÉRIENCES",
  title: "Lore du personnage.",
  text: "Ce n'est que le début",
  items: [
    {
      meta: "FORMATION - LDNR - 2026 - 2027",
      title: "Concepteur Développeur d'Applications",
      text: " Formation certifiante de 1100 heures en centre et 300 heures en entreprise financée région Occitanie préparant un titre de niveau 6 (titre RNCP n°37873) Réalisation de plusieurs projets tutorés en groupe.",
      tag: " En cours - titre de niveau 6",
    },
    {
      meta: "FORMATION - EIMA - 2019 - 2023",
      title: "École Internationale du Manga et de l'Animation",
      text: "Apprentissage des métiers de l’art et du manga : écriture de scénario, storyboard, dessin et illustration. Gestion de projet en équipe, réalisation decommandes selon un cahier des charges. ",
      tag: "Mission accomplie.",
    }
  ],
  scene: {
    window: "routine.exe / 02",
    image: "/images/scene-02.svg",
    title: "02 - Nettoyage des textures...",
    text: "Normalement c'est rapide.",
    step: 2,
  },

};


export const footer = {
  middle: "Oui",
  backToTop: "Retour en haut",
};

export const contactPage = {
  label: "Retour à la réalité",
  title: "Moins de cinéma, plus de blabla",
  text: "Une idée d'application, une question ou une opportunité de stage ?",
  prompt: "> conversation.start()",
  email: "pointdavid@outlook.fr",
  location:"Toulouse",
  formTitle:"Nouveau message",
  required:"* Tous les champs sont obligatoires",
  submit:"Envoyer le message",
  privacy:"Vos coordonnées servent uniquement à répondre à votre message.",
  success:"Votre messagerie s'ouvre avec le message prêt : il ne reste plus qu'à l'envoyer."
};

export const contactIntro={
  gif:"/images/wallpaper.png",
  durationMs:4000,
};
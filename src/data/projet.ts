export type Affichage = 'fenetre' | 'application' ;
export type Statut = 'Terminé' | 'En cours' | 'Idée';

export interface Projet {
    id: string;
    titre: string;
    resume: string;
    description: string;
    technos: string[];
    annee: string;
    statut: Statut;
    affichage: Affichage;
    image?: string;
    icone?: string;
    equipe?: string;
    role?: string;
    liens?: {label: string; url:string}[];
}

export const MODELE_PROJET: Projet = {
    id: "nom-unique-du-projet",
    titre: "Titre du projet",
    resume: "Une ou deux phrases pour donner envie.",
    description: "Le contexte, ce que tu as fait. \n\n Un deuxième paragraphe si besoin",
    technos: ["Java", "MySQL"],
    annee:"2026",
    statut:"En cours",
    affichage: "fenetre",
}

export const projetsPerso: Projet[]= [
    {
        id: "exemple-perso-fenetre",
        titre: "[Titre de ton projet perso]",
        resume: "Exemple affiché sous forme de FENÊTRE avec des onglets.",
        description: "Explique ici le contexte.",
        technos: ["A compléter"],
        annee:"2026",
        statut:"Idée",
        affichage:"fenetre",
    },
        {
        id: "exemple-perso-application",
        titre: "[Titre de ton projet perso]",
        resume: "Exemple affiché sous forme de APP avec des onglets.",
        description: "Explique ici le contexte.",
        technos: ["A compléter"],
        annee:"2026",
        statut:"Idée",
        affichage:"application",
    },
];

export const projetsLdnr: Projet[]= [
        {
        id: "exemple-ldnr-fenetre",
        titre: "[Titre de ton projet ldnr]",
        resume: "Exemple affiché sous forme de FENÊTRE avec des onglets.",
        description: "Explique ici le contexte.",
        technos: ["A compléter"],
        annee:"2026",
        statut:"Idée",
        affichage:"fenetre",
        equipe:"[Taille de l'équipe]",
        role: "[Ton rôle]",
    },
];


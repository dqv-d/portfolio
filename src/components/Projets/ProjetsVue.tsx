import { FC } from "react";

import { footer } from "@/data/data";
import { Projet } from "@/data/projet";
import { FolderIcon } from "../Icons";
import XPWindow from "../XPWindow";
import ProjetApplication from "./ProjetApplication";
import ProjetFenetre from "./ProjetFenetre";

interface ProjetsVueProps {
    windowTitle: string;
    label: string;
    title: string;
    text: string;
    projets: Projet[];
}

const ProjetVue: FC<ProjetsVueProps> = ({windowTitle, label, title, text, projets}) =>
{

    const applications = projets.filter(p => p.affichage === "application");
    const fenetres = projets.filter(p => p.affichage === "fenetre");

    return (
        <XPWindow
        className="mx-auto max-w-5x1"
        icon={<FolderIcon size={16}/>}
        menu = {["Fichier", "Edition", "Affichage", "Favoris", "?"]}
        status = {
            <>
            <span>
                {projets.length} projet{projets.length > 1 ? "s" : "" } . {footer.middle}
            </span>
            <a className="font-bold text-xp-lien hover:underline" href="#top">
               ↑ {footer.backToTop}
            </a>
            </>
        }
        title={windowTitle}>
            <div className="p-3 sm:p-4">
                <div className="xp-panel p-4">
                    <p className="text-xs text-xp-lien">{label}</p>
                    <h1 className="mt-3 font-titre text-lg leading-relaxed text-xp-lien">{title}</h1>
                    <p className="mt-2 max-w-2x1 text-sm">{text}</p>
                </div>

                {applications.length > 0 && (
                    <section className="mt-4">
                        <div className="xp-pane-header"> APPLICATIONS - CLIQUE POUR OUVRIR</div>
                        <div className="bureau" style={{backgroundImage: "url('/images/wallpaper.png')"}}>
                        {applications.map(projet => (
                            <ProjetApplication key={projet.id} projet={projet} />
                        ))}
                        </div>
                    </section>
                )}

                {fenetres.length > 0 && (
                    <section className="mt-4">
                        <div className="xp-pane-header"> FENÊTRES</div>
                        <div className="mt-3 grid gap-5 lg:grid-cols-2">
                            {fenetres.map(projet => (
                                <ProjetFenetre key={projet.id} projet={projet} />
                            ))}
                        </div>
                    </section>
                )}

                {projets.length === 0 && (
                    <div className="xp-panel mt-4 p-4 text-sm">
                        Dossier vide. Ajoute ton premier projet
                    </div>
                )}
            </div>
        </XPWindow>
    );
};

export default ProjetVue;
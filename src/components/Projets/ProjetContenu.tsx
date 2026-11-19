import { FC } from "react";
import { Projet } from "@/data/projet";
import Onglets from "../Onglets";

const IMAGE_PAR_DEFAUT = "/images/projet-defaut.svg";

const ProjetContenu: FC<{ projet: Projet }> = ({ projet }) => {
    const { titre, resume, description, technos, annee, statut, image, equipe, role, liens } = projet;

    return (
        <Onglets onglets={[{
            id: "apercu",
            titre: "Aperçu",
            contenu: (
                <div className="flex flex-col gap-3">
                    <div className="xp-panel p-1">
                        <img alt={`Aperçu de ${titre}`} className="w-full" src={image ?? IMAGE_PAR_DEFAUT} />
                    </div>
                    <p className="text-sm">{resume}</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="xp-tooltip">{statut}</span>
                        <span className="xp-tooltip">{annee}</span>
                    </div>
                </div>
            ),
        },
        {
            id: "détails",
            titre: "Détails",
            contenu: (
                <div className="flex flex-col gap-3 text-sm">
                    {description.split("\n\n").map(paragraphe => (
                        <p key={paragraphe}>{paragraphe}</p>
                    ))}
                    {(equipe || role) && (
                        <ul>
                            {equipe && (
                                <li>
                                    <b>Equipe :</b> {equipe}
                                </li>
                            )}
                            {role && (
                                <li>
                                    <b>Mon rôle :</b> {role}
                                </li>
                            )}
                        </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {technos.map(t => (
                            <span className="xp-tooltip" key={t}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: "liens",
            titre: "Liens",
            contenu:
                liens && liens.length > 0 ? (
                    <ul className="flex flex-col gap-2 text-sm">
                        {liens.map(l => (
                            <li key={l.url}>
                                {''}
                                <a className="font-bold text-xp-lien underline" href={l.url}
                                    rel="noreferrer" target="_blank">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm"> Aucun lien pour le moment</p>
                ),
        },

        ]}
        />
    );
};

export default ProjetContenu;
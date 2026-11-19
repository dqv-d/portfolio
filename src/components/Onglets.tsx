import { FC, ReactNode, useState } from "react";

export interface Onglet {
    id: string;
    titre: string;
    contenu: ReactNode;
}

const Onglets: FC<{onglets: Onglet[]}> = ({onglets}) => {
    const [actif, setActif]= useState(onglets[0].id);
    const courant = onglets.find(o => o.id === actif) ?? onglets[0];

    return (
        <div>
            <div className="xp-tabs" role="tablist">
                {onglets.map(o => (
                    <button aria-selected={o.id ===actif}
                    className="xp-tab"
                    key={o.id}
                    onClick={() => setActif(o.id)}
                    role="tab"
                    type="button">
                        {o.titre}
                    </button>
                ))}
            </div>
            <div className="xp-tabpanel" role="tabpanel">
                {courant.contenu}
            </div>
        </div>
    );
};

export default Onglets;
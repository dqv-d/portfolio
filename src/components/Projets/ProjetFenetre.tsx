import { FC } from "react";
import { Projet } from "@/data/projet";
import XPWindow from "../XPWindow";
import ProjetContenu from "./ProjetContenu";

const ProjetFenetre: FC<{projet: Projet}> = ({projet}) => (
    <XPWindow
    closeHref={null}
    status={
        <>
        <span>{projet.technos.join('.')}</span>
        <span>
            {projet.annee} . {projet.statut}
        </span>
        </>
    }
    title= {`${projet.titre}.exe`}>
        <div className="p-3">
            <ProjetContenu projet={projet} />
        </div>
    </XPWindow>
);

export default ProjetFenetre;
import { FC } from "react";
import Page from "@/components/Layout/Page";
import ProjetVue from "@/components/Projets/ProjetsVue";
import { projetsPersoPage } from "@/data/data";
import { projetsPerso } from "@/data/projet";

const ProjetsPerso: FC = () => (
    <Page description="Mes projets personnels" title="Projets perso - david.dev">
        <ProjetVue {...projetsPersoPage} projets={projetsPerso} />
    </Page>
);

export default ProjetsPerso;
import Link from "next/link";
import { FC } from "react";

import Page from "../components/Layout/Page";
import XPWindow from "@/components/XPWindow";
import { accueil, cv } from "@/data/data";

const Accueil: FC = () => (
  <Page description="Portfolio de David POINT"
    title="Accueil - david.dev">
    <div className="mx-auto flex max-w-5x1 gap-6">
      <div className="hidden flex-col gap-2 sm:flex">
        <Link className="destop-icon" href="/presentation">
          Présentation
        </Link>
        <Link className="destop-icon" href="/projets-perso">
          Projet Perso
        </Link>
        <Link className="destop-icon" href="/projets-ldnr">
          Projets LDNR
        </Link>
        <Link className="destop-icon" href="/contact">
          Contact
        </Link>
        <a className="destop-icon" download={cv.fileName} href={cv.fileUrl}>
          Mon CV
        </a>
      </div>
    </div>

    <XPWindow className="mx-auto h-fit w-full max-w-x1"
      menu={["Fichier", "Edition", "Affichage", "?"]}
      status={
        <>
          <span>1 objet </span>
          <span>Poste de travail</span>
        </>
      }
      title="hello world.exe">
      <div className="p-4 sm:p-6">
        <h1 className="text-center font-titre text-2x1 leading-relaxed text-xp-lien sm:text-3x1">
          {accueil.title}
          <span className="m-1 inline-block animate-blink text-xp-vert"></span>
        </h1>

        <div className="xp-panel mt-6 p-2">
          <img alt="Moi devant mon pc" className="w-full" src={accueil.image} />
        </div>

        <p className="mb-2 mt-5 text-sm"> Chargement du portfolio...</p>
        <div className="xp-progress marquee">
          <span className="animate-chargement"></span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link className="xp-btn default" href="/presentation">
            Présentation
          </Link>
          <Link className="xp-btn" href="/projets-perso">
            Projets
          </Link>
          <Link className="xp-btn" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </XPWindow>
  </Page>

);

export default Accueil;
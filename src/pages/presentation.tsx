import {FC, PropsWithChildren} from "react";
import { FolderIcon } from "@/components/Icons";
import Page from "@/components/Layout/Page";
import SceneWindow from "@/components/SceneWindow";
import XPWindow from "@/components/XPWindow";
import {competences, cv, experiences, footer, presentation} from "../data/data";

const Bloc: FC<PropsWithChildren<{label:string; id:string}>> = ({label, id, children}) =>( 
    <section className="mt-4" id={id}>
        <div className="xp-pane-header">{label}</div>
        <div className="xp-panel grid gap-6 p-4 md:grid-cols-[1.15fr_1fr]">{children}</div>
    </section>
);

const Titre: FC<PropsWithChildren> = ({children}) => (
    <h2 className="font-titre text-base leading-relaxed text-xp-lien">{children}</h2>
);

const Presentation: FC = () => (
    <Page description="Présentation, compétences, expériences et CV" title="Présentation - david.dev">
        <XPWindow className="mx-auto max-w-5x1"
        menu={["Ficher", "Édition", "Affichage", "Favoris", "Outils", "?"]}
        status={
            <>
            <span>{footer.middle}</span>
            <a className="font-bold text-xp-lien hover:underline" href="#top">
                ↑ {footer.backToTop}
            </a>
            </>
        }
        title="Présentation - David">
            <div className="p-3 sm:p-4">
                <div className="grid gap-4 md:grid-cols[15rem_1fr]">
                    <div>
                        <div className="xp-pane-header"> JOUEUR 1</div>
                        <div className="xp-pane-body">
                            <p className="text-base font-bold">{presentation.name}</p>
                            <p className="mt-1">{presentation.job}</p>
                            <p className="mt-3 text-sm">{presentation.note}</p>
                        </div>
                    </div>
                    <div className="xp-panel p-4">
                        <p className="text-xs text-xp-lien">{presentation.label}</p>
                        <h1 className="mt-3 font-titre text-x1 leading-relaxed text-xp-lien">{presentation.title}</h1>
                        <p className="mt-4 border-1-4 border-xp-ligne p1-3 text-sm leading-relaxed">{presentation.quote}</p>
                    </div>
                </div>

                <Bloc id="competences" label={competences.label}>
                    <div>
                        <Titre>{competences.title}</Titre>
                        <p className="mt-4 text-xs font-bold">{competences.examples}</p>
                        <div className="mt-2 grid gap-2 sm:grid-cols-2">{competences.skills.map(({title, tech, text}) => (
                            <div className="border-2 border-xp-ligne bg-[#f6f4ea] p-2" key={title}>
                                <p className="text-sm font-bold">
                                    <span className="text-xp-vert">■</span> {title}
                                </p>
                                <p className="mt-1 text-sm font-bold text-xp-lien">{tech}</p>
                                <p className="mt-1 text-sm">{text}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <SceneWindow {...competences.scene}>
                    </SceneWindow>
                </Bloc>

                <Bloc id="experiences" label={experiences.label}>
                    <div>
                        <Titre>{experiences.title}</Titre>
                        <p className="mt-2 text-sm">{experiences.text}</p>
                        <ul className="mt-4 flex flex-col gap-3">
                            {experiences.items.map(item => (
                                <li className="flex gap-3" key={item.title}>
                                    <div>
                                        <p className="text-xs font-bold uppercase"> {item.meta}</p>
                                        <h3 className="text-base font-bold">{item.title}</h3>
                                        <p className="mt-1 text-sm">{item.text}</p>
                                        <span className="xp-tooltip mt-2">{item.tag}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <SceneWindow {...experiences.scene}></SceneWindow>
                </Bloc>

                
        <Bloc id='cv' label={cv.label}>
          <div>
            <Titre>{cv.title}</Titre>
            <p className='mt-2 text-sm'>{cv.fileText}</p>
            <div className='mt-4 flex gap-3 border-2 border-xp-ligne bg-[#f6f4ea] p-3'>
              <img
                alt='Aperçu du CV'
                className='hidden h-28 w-auto shrink-0 self-start border-2 border-xp-ligne sm:block'
                src={cv.fileName}
              />
              <div>
                <p className='flex items-center gap-2 text-sm font-bold'>
                  {cv.fileName}
                </p>
                <p className='mt-2 text-sm'>{cv.fileText}</p>
              </div>
            </div>
            <a className='xp-btn default mt-4' download={cv.fileName} href={cv.fileUrl}>
              {cv.button} ▼
            </a>
          </div>
          <SceneWindow {...cv.scene} />
        </Bloc>
      </div>
    </XPWindow>
  </Page>
);

export default Presentation;
import { FC } from "react";

import ContactForm from "@/components/Contact/ContactForm";
import { contactIntro } from "@/data/data";
import Page from "@/components/Layout/Page";
import XPWindow from "@/components/XPWindow";
import { contactPage, footer } from "@/data/data";

const Contact: FC = () => (
    <Page description="Me contacter" title="Contact- david.dev">

    <XPWindow className="mx-auto max-w-5x1"
    menu={["Fichier", "Edition", "Affichage", "Outils", "Message", "?"]}
    status={
        <>
        <span>{footer.middle}</span>
        <a className="font-bold text-xp-lien hover:underline" href="#top">
            ↑ {footer.backToTop}
        </a>
        </>
    }
    title="Nouveau message">
        <div className="grid gap-4 p-3 sm:p-4 md:grid-cols-[17rem_1fr]">
            <div>
                <div className="xp-pane-header">{contactPage.label}</div>
                <div className="xp-pane-body">
                    <h1 className="font-titre text-sm leading-relaxed text-xp-lien">{contactPage.title}</h1>
                    <p className="mt-3">{contactPage.text}</p>
                    <ul className="mt-4 flex flex-col gap-1">
                        <li>
                           ✉{' '}
                           <a className="font-bold text-xp-lien underline" href="{`mailto:${contactPage.email}`}">{contactPage.email}</a> 
                        </li>
                        <li>⌖ {contactPage.location}</li>
                    </ul>
                    <p className="mt-4 text-sm">{contactPage.prompt} <span className="inline-block animate-blink">▮</span>
                    </p>
                </div>
            </div>
            <div className="xp-panel p-4">
                <ContactForm/>
            </div>
        </div>
    </XPWindow>

    </Page>
);

export default Contact;
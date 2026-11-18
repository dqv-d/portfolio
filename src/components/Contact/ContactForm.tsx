import { ChangeEvent, FC, FormEvent, useState } from "react";
import { contactPage } from "@/data/data";
import { on } from "events";

const ContactForm: FC = () => {
    const [data, setData] = useState({nom: "", email: "", sujet:"", message:""});
    const [envoye, setEnvoye] = useState(false);


const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    const {name, value} = event.target;
    setData({...data,[name]:value}); 
};

const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sujet = encodeURIComponent(data.sujet);
    const corps = encodeURIComponent(`&{data.message}\n\n- ${data.nom} (${data.email})`);
    window.location.href = `mailto:${contactPage.email}?subject=${sujet}&body=${corps}`;
    setEnvoye(true);
};

return (
    <form onSubmit={onSubmit}>
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-base font-bold">{contactPage.formTitle}</h2>
            <span className="text-sm">{contactPage.required}</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
            <label>
                <span className="xp-label">Nom*</span>
                <input className="xp-input" name="nom" onChange={onChange} placeholder="Votre nom" required type="text"/>
            </label>

            <label>
                <span className="xp-label">E-mail*</span>
                <input autoComplete="email" className="xp-input" name="email" onChange={onChange} placeholder="mail@exemple.fr" required type="email"/>
            </label>
        </div>

        <label className="mt-3 block">
            <span className="xp-label">Sujet*</span>
            <input className="xp-input" name="sujet" onChange={onChange} placeholder="De quoi aimeriez-vous parler ?" required type="text"/>
        </label>

        <label className="mt-3 block">
            <span className="xp-label">Message*</span>
            <textarea name="message" className="xp-input" onChange={onChange} placeholder="Bonjour ! J'ai un stage pour vous..." required rows={7}></textarea>
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-4">
            <button className="xp-btn default" type="submit">✉ {contactPage.submit}</button>
            <p className="max-w-xs text-sm">{contactPage.privacy}</p>
        </div>

        {envoye && <p className="xp-tooltip mt-3">{contactPage.success}</p>}
    </form>
);
};

export default ContactForm;
import { FC, useEffect, useState } from 'react';

import { Projet } from '@/data/projet';
// import { AppIcon } from '../Icons';
import XPWindow from '../XPWindow';
import ProjetContenu from './ProjetContenu';

const ProjetApplication: FC<{ projet: Projet }> = ({ projet }) => {
    const [ouvert, setOuvert] = useState(false); // la fenêtre est-elle ouverte ?

    // Quand la fenêtre est ouverte, la touche Échap la ferme
    useEffect(() => {
        if (!ouvert) return;
        const surTouche = (e: KeyboardEvent) => e.key === 'Escape' && setOuvert(false);
        window.addEventListener('keydown', surTouche);
        return () => window.removeEventListener('keydown', surTouche);
    }, [ouvert]);

    return (
        <>
            <button className='desktop-icon' onClick={() => setOuvert(true)} type='button'>
                {/* {projet.icone ? <img alt='' height={48} src={projet.icone} width={48} /> : <AppIcon size={48} />} */}
                {projet.titre}
            </button>

            {ouvert && (
                <div
                    aria-label={projet.titre}
                    aria-modal='true'
                    className='fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/50 p-4'
                    onClick={() => setOuvert(false)}
                    role='dialog'>
                    {/* stopPropagation : un clic DANS la fenêtre ne la ferme pas */}
                    <div className='w-full max-w-xl' onClick={e => e.stopPropagation()}>
                        <XPWindow
                            closeHref={null}
                            // icon={<AppIcon size={16} />}
                            onClose={() => setOuvert(false)}
                            status={
                                <>
                                    <span>{projet.technos.join(' · ')}</span>
                                    <span>
                                        {projet.annee} · {projet.statut}
                                    </span>
                                </>
                            }
                            title={`${projet.titre}.exe`}>
                            <div className='p-3'>
                                <ProjetContenu projet={projet} />
                            </div>
                        </XPWindow>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjetApplication;
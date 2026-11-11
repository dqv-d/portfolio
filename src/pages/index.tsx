import XPWindow from "../components/XPWindow";
import {FolderIcon} from '../components/Icons';

export default function Accueil() {
  return (
    <div className='desktop' style={{backgroundImage: "url('wallpaper.png')"}}>
      <XPWindow className="mx-auto max-w-md" 
      menu ={["Fichier", "Edition", "?"]}
      status={<span> 1 objet</span>}
      title='hello world.exe'>
        <div className="p-6">
          <h1 className="font-titre text-2x1 text-xp-lien"> hello world</h1>
          <FolderIcon size={64} />
        </div>
      </XPWindow>      
    </div>
  );
}
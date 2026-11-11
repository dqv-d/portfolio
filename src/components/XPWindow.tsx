import {FC, PropsWithChildren, ReactNode} from "react" ;

// Les props que la fenêtre accepte

interface XPWindowProps {
    title: string;
    icon?: ReactNode;
    menu?: string[];
    status?: ReactNode;
    className?: string;
}

const XPWindow: FC<PropsWithChildren<XPWindowProps>> = ({title, icon, menu, status, className = "", children}) => (

    <div className={`xp-window ${className}`}>

        <div className="xp-titlebar">
            {icon}
        <span className="flex-1 truncate"> {title}</span>
        <span aria-hidden="true" className="xp-ctrl"> 
        _
        </span>
        <span aria-hidden="true" className="xp-ctrl"> 
        ▫
        </span>
        <span aria-hidden="true" className="xp-ctrl close">
        X
        </span>
    </div>
    {menu && (
        <div aria-hidden="true" className="xp-menubar">
            { menu.map( item => ( <span key={item}>{item}</span>
        ))}
        </div>
)}

{children}

{status && <div className="xp-statusbar">{status}</div> }

</div>

);

export default XPWindow;
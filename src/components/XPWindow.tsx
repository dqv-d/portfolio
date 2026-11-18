import { FC, PropsWithChildren, ReactNode } from "react";
import Link from "next/link";

// Les props que la fenêtre accepte

interface XPWindowProps {
    title: string;
    icon?: ReactNode;
    menu?: string[];
    status?: ReactNode;
    closeHref?: string | null;
    onClose?: () => void;
    className?: string;
}

const XPWindow: FC<PropsWithChildren<XPWindowProps>> = ({ title, icon, menu, status, closeHref = "/", onClose, className = "", children }) => (

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
            {onClose ? (
                <button aria-label="Fermer" className="xp-ctrl close" onClick={onClose} type="button">
                    X
                </button>
            ) : closeHref ? ( <Link aria-label="Fermer" className="xp-ctrl close" href={closeHref}>
                X
                </Link>) : (
                    <span aria-hidden="true" className="xp-ctrl close">
                        X
                    </span>
                )}
        </div>
        {menu && (
            <div aria-hidden="true" className="xp-menubar">
                {menu.map(item => (<span key={item}>{item}</span>
                ))}
            </div>
        )}

        {children}

        {status && <div className="xp-statusbar">{status}</div>}

    </div>

);

export default XPWindow;
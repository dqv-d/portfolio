import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

import { cv, navLinks, siteName } from "../data/data";
// import { ComputerIcon, NavIcon, PdfIcon, WindowsLogo } from "./Icons";

const Taskbar: FC = () => {
    const { pathname } = useRouter();
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [heure, setHeure] = useState("");

    useEffect(() => {
        const maj = () => setHeure(new Date().toLocaleTimeString("fr-Fr", { hour: "2-digit", minute: "2-digit" }));
        maj();
        const timer = setInterval(maj, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {menuOuvert && (
                <>
                    <div className="fixed inset-0 z-[65]" onClick={() => setMenuOuvert(false)}></div>
                    <div className="start-menu">
                        <div className="start-menu-head">
                            {/* <ComputerIcon size={28}></ComputerIcon> */}
                            David
                        </div>
                        <div className="flex">
                            <div className="flex-1">
                                {navLinks.map(({ label, href }) => (
                                    <Link className="start-menu-item" href={href} key={href} onClick={() =>
                                        setMenuOuvert(false)}>
                                    </Link>
                                ))}
                            </div>
                            <div className="w-[34%] border-1-2 border-xp-ligne bg-[#dfe8ff] p-2 text-sm">
                                <a className="flex items-center gap-2 p-1 font-bold text-xp-lien hover:underline"
                                    download={cv.fileName}
                                    href={cv.fileUrl}>
                                    {/* <PdfIcon size={20}></PdfIcon> Mon CV */}
                                </a>
                            </div>
                        </div>
                    </div>

                </>
            )}

            <div className="taskbar">
                <button aria-expanded={menuOuvert}
                    className="start-btn"
                    onClick={() => setMenuOuvert(!menuOuvert)}
                    type="button">
                    
                    start
                </button>

                <nav className="hidden items-stretch gap-1 lg:flex">
                    {navLinks.map(({ label, href}) => (
                        <Link className={classNames("task-btn", { active: pathname === href })} href={href} key={href}>
                            {/* <NavIcon nom={icone} size={18}></NavIcon> */}
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="tray">
                    <span className="mr-3 hidden md:inline"> {siteName} </span>
                    {heure}
                </div>
            </div>
        </>
    );
};

export default Taskbar;
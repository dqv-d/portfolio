import Head from "next/head";
import {FC, PropsWithChildren} from "react";

import Taskbar from "../Taskbar";

interface PageProps {
    title: string;
    description: string;
}

const Page:FC<PropsWithChildren<PageProps>> = ({children, title, description}) => (
    <>
    <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
    </Head>
    <div className="desktop" id="top" style={{backgroundImage:"url('/images/wallpaper.png')"}}>
        {children}
    </div>
    <Taskbar/>
    </>
)

export default Page;
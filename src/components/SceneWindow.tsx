import { FC } from "react";

interface SceneWindowProps {
    window: string;
    image: string;
    title: string;
    text: string;
    step: number;
}

const SceneWindow: FC<SceneWindowProps> = ({ window, image, title, text, step }) => (
    <div className="xp-window h-fit">
        <div className="xp-titlebar">
            <span className="flex-1 truncate">{window}</span>
            <span aria-hidden="true" className="xp-ctrl">
                _
            </span>
            <span aria-hidden="true" className="xp-ctrl close">
                X
            </span>
        </div>
        <div className="p-2">
            <div className="xp-panel p-1">
                <img alt="" className="w-full" src={image}></img>
            </div>
            <p className="mt-2 text-sm font-bold">{title}</p>
            <p className="mb-2 mt-1 text-sm">{text}</p>
            <div className="xp-progress">
                {[1, 2, 3].map(n => (
                    <span className={n <= step ? 'on' : ''} key={n} />
                ))}
            </div>
        </div>
    </div>
);

export default SceneWindow;
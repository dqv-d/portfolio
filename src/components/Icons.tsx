import { FC } from "react";

const PALETTE: Record<string, string> = {
    k: "#0a1040",
    w: "#ffffff",
    y: "#ffd84a",
    Y: "#e0a800",
    r: "#e8453c",
    s: "#c9c5b3",
};

const dessiner = (grille: string[], size: number) => (
    <svg
        aria-hidden="true"
        height={size}
        shapeRendering="crispEdges"
        viewBox={`0 0 ${grille[0].length} ${grille.length}`}
        width={size}>
        {grille.flatMap((ligne, y) => [...ligne].map((lettre, x) =>
            lettre === "." ? null : <rect fill={PALETTE[lettre]} height={1} key={`${x}-${y}`} width={1} x={x} y={y} />,
        ),
        )}
    </svg>
);

const DOSSIER = [
  '................',
  '................',
  '.kkkkkkk........',
  '.kyyyyyk........',
  '.kkkkkkkkkkkkkk.',
  '.kwyyyyyyyyyyyk.',
  '.kyyyyyyyyyyyyk.',
  '.kyyyyyyyyyyyyk.',
  '.kyyyyyyyyyyyyk.',
  '.kyyyyyyyyyyyyk.',
  '.kyyyyyyyyyyyyk.',
  '.kyyyyyyyyyyyyk.',
  '.kYYYYYYYYYYYYk.',
  '.kkkkkkkkkkkkkk.',
  '................',
  '................',
];

interface IconProps {
  size?: number; // taille affichée, en pixels d'écran
}

export const FolderIcon: FC<IconProps> = ({size = 32}) => dessiner(DOSSIER, size);
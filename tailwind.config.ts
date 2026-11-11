import type {Config} from 'tailwindcss';

const config: Config = {
  // Tailwind cherche ses classes dans tous ces fichiers
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Palette rétro : donne les classes text-xp-lien, bg-xp-fond, border-xp-ligne...
      colors: {
        xp: {
          fond: '#ece9d8',
          lien: '#1f4fd8',
          ligne: '#0a1040',
          bulle: '#fff3a0',
          vert: '#2fb42f',
        },
      },
      // Donne les classes font-xp (texte) et font-titre (titres 8 bits)
      fontFamily: {
        xp: ['"Pixelify Sans"', 'Tahoma', 'Verdana', 'sans-serif'],
        titre: ['"Press Start 2P"', '"Pixelify Sans"', 'monospace'],
      },
      // Animations : un curseur qui clignote, un bloc de chargement qui défile
      keyframes: {
        blink: {'0%, 49%': {opacity: '1'}, '50%, 100%': {opacity: '0'}},
        chargement: {'0%': {transform: 'translateX(-100%)'}, '100%': {transform: 'translateX(450%)'}},
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        chargement: 'chargement 1.6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
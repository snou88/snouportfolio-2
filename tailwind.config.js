/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Active le mode sombre basé sur une classe
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-180deg)", opacity: "0" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideIn: "slideIn 0.5s ease-out",
        bounceIn: "bounceIn 0.6s ease-out",
        rotateIn: "rotateIn 0.5s ease-out",
      },
      colors: {
        primary: '#0c5329', // Vert foncé
        secondary: '#3FE0D0', // Turquoise
        darkBg: '#1a202c', // Fond sombre personnalisé
        darkText: '#f1f1f1', // Texte en mode sombre
        lightBg: '#ffffff', // Fond clair
        lightText: '#333333', // Texte en mode clair
      },
      fontFamily: {
        'brittany-signature': ['BrittanySignature', 'sans-serif'],
        'Gulzar-Regular': ['GulzarRegular', 'sans-serif'],
        'Mikhak-DS2-Bold': ['Mikhak-DS2-Bold', 'sans-serif'],
        'UKIJNsq': ['UKIJNsq', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        opacity: 'opacity',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
        '110': '1.10', // Ajouté pour plus d'effets
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

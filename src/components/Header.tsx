import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import logo from "../assets/images/vz.svg";
import logoDark from "../assets/images/vz2.svg";
import { DarkModeContext } from "../App";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Équipe", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <header className="fixed w-full z-40 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo modernisé */}
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center">
            <img
              src={darkMode ? logoDark : logo}
              alt="Viberz Agency Logo"
              className="h-12 w-12 object-contain drop-shadow-xl mx-auto"
              style={{padding: 0, background: 'transparent'}} 
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = darkMode ? logoDark : logo;
              }}
            />
          </span>
          <span className="ml-2 font-bold text-xl text-primary dark:text-white tracking-wider hidden sm:inline">Viberz Agency</span>
        </a>

        {/* Navigation desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-2 py-1 font-semibold text-primary dark:text-white transition group focus:outline-none"
                tabIndex={0}
              >
                <span>{link.label}</span>
                {/* Underline animé */}
                <span className="block absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-secondary via-primary to-yellow-400 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Switch dark/light mode */}
        <button
          aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
          onClick={() => setDarkMode((prev: boolean) => !prev)}
          className="ml-4 relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 shadow-inner transition focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <span className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}></span>
          <BsSun className={`absolute left-2 top-2 text-yellow-400 w-4 h-4 transition-opacity ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
          <BsMoon className={`absolute right-2 top-2 text-blue-400 w-4 h-4 transition-opacity ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
        </button>

        {/* Menu burger mobile */}
        <button
          className="lg:hidden ml-4 text-3xl text-primary dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <AiOutlineMenu />
        </button>

        {/* Menu mobile animé */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-black shadow-2xl z-50 flex flex-col p-6 gap-8"
            >
              <button
                className="self-end text-3xl mb-4 text-primary dark:text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <AiOutlineClose />
              </button>
              <ul className="flex flex-col gap-6 mt-8">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative px-2 py-1 font-semibold text-primary dark:text-white transition group focus:outline-none"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="block absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-secondary via-primary to-yellow-400 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-3">
                <span className="text-sm text-gray-400">Mode</span>
                <button
                  aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
                  onClick={() => setDarkMode((prev: boolean) => !prev)}
                  className="relative w-12 h-7 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 shadow-inner transition focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <span className={`absolute left-1 top-1 w-5 h-5 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-5' : ''}`}></span>
                  <BsSun className={`absolute left-2 top-2 text-yellow-400 w-4 h-4 transition-opacity ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
                  <BsMoon className={`absolute right-2 top-2 text-blue-400 w-4 h-4 transition-opacity ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

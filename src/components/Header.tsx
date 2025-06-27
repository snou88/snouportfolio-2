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
    <header className="fixed w-full z-40 bg-white dark:bg-black/90 backdrop-blur-md shadow-md transition-all duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:py-3">
        {/* Logo modernisé */}
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center">
            <img
              src={darkMode ? logoDark : logo}
              alt="Viberz Agency Logo"
              className="h-12 w-12 object-contain drop-shadow-xl mx-auto"
              style={{ padding: 0, background: 'transparent' }}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = darkMode ? logoDark : logo;
              }}
            />
          </span>
          <span className="ml-2 font-bold text-xl text-primary dark:text-white tracking-wider hidden sm:inline">Viberz Agency</span>
        </a>

        {/* Navigation desktop */}
        <ul className="hidden lg:flex items-center gap-6">
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
          className="hidden lg:block ml-4 relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 shadow-inner transition focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <span className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}></span>
          <BsSun className={`absolute left-2 top-2 text-yellow-400 w-4 h-4 transition-opacity ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
          <BsMoon className={`absolute right-2 top-2 text-blue-400 w-4 h-4 transition-opacity ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
        </button>
        {/*Title */}
        <h1 className="lg:hidden text-2xl font-bold text-darkBg dark:text-white">Viberz Agency</h1>
        {/* Menu burger mobile */}
        <button
          className="lg:hidden ml-4 text-3xl text-black dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <AiOutlineMenu />
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ 
                opacity: 0,
                scale: 1,
                y: -100,
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{ 
                opacity: 0,
                scale: 1,
                y: -100,
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            >
            <div className="relative top-[200%] bg-white dark:bg-darkBg rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black dark:text-white">Menu</h2>
                <button
                  className="text-2xl text-black dark:text-white hover:text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <AiOutlineClose />
                </button>
              </div>
              <nav className="space-y-4">
                {navLinks.map(link => (
                  <div key={link.href} className="group">
                    <a
                      href={link.href}
                      className="block px-4 py-3 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        <span className="text-sm text- dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </span>
                    </a>
                  </div>
                ))}
              </nav>
              <div className="mt-8 border-t border-gray-100 dark:border-gray-700 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mode</span>
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
              </div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

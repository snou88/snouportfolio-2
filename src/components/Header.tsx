import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [language, setLanguage] = useState("en"); // État pour la langue

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString()); // Conversion en string
  }, [darkMode]);

  const handleScroll = () => {
    const sections = ["home", "projects", "about", "contact"];
    const scrollPosition = window.scrollY + 100;
    for (let section of sections) {
      const element = document.getElementById(section);
      if (
        element &&
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        setActive(section.charAt(0).toUpperCase() + section.slice(1));
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsMenuOpen(false); // Fermer le menu après avoir changé la langue
    // Vous pouvez ajouter ici la logique pour changer la langue de l'application
  };

  return (
    <header className="bg-white dark:bg-green-900 py-6 shadow-md fixed w-full z-30">
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-0">
        <a href="">
          <motion.div
            className="text-green-900 dark:text-white text-4xl font-brittany-signature flex items-center hover:scale-105 transition-transform font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Senouci Ahmed
          </motion.div>
        </a>

        {/* Bouton Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-50 lg:ml-0 lg:absolute lg:right-10 text-green-900 dark:text-white flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-green-900 transition-all"
        >
          <motion.div
            key={darkMode ? "moon" : "sun"}
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          >
            {darkMode ? (
              <BsMoon size={24} className="text-yellow-400" />
            ) : (
              <BsSun size={24} className="text-gray-800" />
            )}
          </motion.div>
        </button>

        {/* Sélecteur de langue (visible uniquement sur les grands écrans) */}
        <div className="hidden lg:block relative ml-4">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-transparent text-green-900 dark:text-white font-bold py-2 px-4 rounded-lg border border-green-900 dark:border-white focus:outline-none focus:ring-2 focus:ring-green-900 dark:focus:ring-white"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        {/* Bouton Hamburger (visible uniquement sur les petits écrans) */}
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <AiOutlineClose
              size={30}
              className="text-green-900 dark:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="text-green-900 dark:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Navigation Desktop */}
        <ul className="hidden lg:flex space-x-8 font-bold text-lg">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              className="relative group transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`hover:text-green-900 dark:hover:text-white text-gray-800 dark:text-white transition-colors ${
                  active === item ? "text-green-900 dark:text-white" : ""
                }`}
              >
                {item}
              </a>
              <span
                className={`absolute left-0 bottom-[-4px] h-1 bg-green-900 dark:bg-white transition-all duration-500 ease-in-out ${
                  active === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </motion.li>
          ))}
        </ul>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 w-full bg-white dark:bg-green-900 shadow-lg lg:hidden mt-[17px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col space-y-5 py-6 px-6 font-bold text-lg">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActive(item);
                      setIsMenuOpen(false);
                    }}
                    className="hover:text-green-900 dark:hover:text-white text-gray-800 dark:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              {/* Sélecteur de langue dans le menu mobile */}
              <li>
                <select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-transparent text-green-900 dark:text-white font-bold py-2 px-4 rounded-lg border border-green-900 dark:border-white focus:outline-none focus:ring-2 focus:ring-green-900 dark:focus:ring-white"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default function App() {
  return (
    <div className="w-auto">
      <Header />
    </div>
  );
}
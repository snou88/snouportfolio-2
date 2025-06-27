import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../App";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Équipe", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setTimeout(() => {
        setSubscribed(true);
      }, 2000);
    }
  };

  return (
    <footer className="bg-[rgb(255,213,42)]/60 dark:bg-[rgb(222,179,0)]/60 dark:text-white text-black pt-12 pb-6">
      <div className="container mx-auto px-4 flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8 items-start">
        {/* Newsletter */}
        <div className="w-full mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-3">Abonne-toi à la newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Ton email..."
              className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-secondary flex-1 min-w-0"
              required
              disabled={subscribed}
            />
            <button
              type="submit"
              className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-60"
              disabled={subscribed}
            >
              {subscribed ? "Merci !" : "S'inscrire"}
            </button>
          </form>
          <p className="text-xs text-white/80 mt-2">Reste informé des nouveautés et offres spéciales !</p>
        </div>

        {/* Navigation */}
        <div className="w-full mb-8 lg:mb-0 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">Navigation</h3>
          <ul className="flex flex-col gap-2 text-base">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-2 py-1 font-semibold transition group focus:outline-none ${
                    darkMode ? 'text-white' : 'text-black'
                  } hover:text-secondary`}
                  tabIndex={0}
                >
                  <span>{link.label}</span>
                  {/* Underline animé */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    whileFocus={{ width: '100%' }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Slogan */}
        <div className="w-full flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold mb-3">Suivez-nous</h3>
          <div className="flex gap-6 mb-2">
            <a href="https://web.facebook.com/ahmed.senoupi.3/" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-full p-2 hover:bg-blue-600 transition shadow-lg">
              <FaFacebook className="text-2xl group-hover:scale-110 group-hover:text-white transition-transform" />
            </a>
            <a href="https://www.instagram.com/ahmed_senouci8/" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-full p-2 hover:bg-pink-500 transition shadow-lg">
              <FaInstagram className="text-2xl group-hover:scale-110 group-hover:text-white transition-transform" />
            </a>
            <a href="https://github.com/snou88" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-full p-2 hover:bg-gray-800 transition shadow-lg">
              <FaGithub className="text-2xl group-hover:scale-110 group-hover:text-white transition-transform" />
            </a>
          </div>
          <blockquote className="italic text-white/90 text-center max-w-xs">
            "Construisons le futur, un projet à la fois."
          </blockquote>
        </div>

        {/* Footer text */}
        <div className="w-full flex justify-center mt-8 text-center text-xs text-white/80">
          © {new Date().getFullYear()} Senouci Ahmed. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect, createContext, Dispatch, SetStateAction } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

// Définition du type pour le contexte
interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

// Création du contexte avec un état initial
export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {} // Fonction placeholder
});

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial dark mode state from localStorage
    return localStorage.getItem("darkMode") === "true";
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation plays only once
      easing: 'ease-in-out', // Animation effect
    });
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="w-auto">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;

import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa"; // Pour l'icône de support

import logo from "../assets/images/vz.svg";
import logoDark from "../assets/images/vz2.svg";
import { DarkModeContext } from "../App";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between bg-lightBg dark:bg-darkBg px-6 lg:px-10 lg:h-screen text-secondary dark:text-primary"
    >
      {/* Left Section */}
      <div
        className="lg:w-1/2 w-full space-y-6 text-center lg:text-left"
        data-aos="fade-right"
      >
        <motion.h1 
          className="text-4xl lg:text-6xl font-bold mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary dark:text-white">Viberz Agency</span> - 
          <span className="text-secondary dark:text-primary">Your Digital Transformation Partner</span>
        </motion.h1>
        
        <motion.p 
          className="text-base lg:text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Nous sommes une agence de télécommunication innovante spécialisée dans la transformation numérique des entreprises. 
          Nous combinons expertise technique et créativité pour créer des solutions de communication efficaces et personnalisées.
        </motion.p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white dark:bg-darkBg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaBuilding className="text-4xl text-primary dark:text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
            <p className="text-gray-600 dark:text-gray-300">Développement et maintenance d'infrastructures de télécommunication de pointe</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white dark:bg-darkBg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaNetworkWired className="text-4xl text-primary dark:text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">Services de télécommunication personnalisés pour votre entreprise</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white dark:bg-darkBg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaHeadset className="text-4xl text-primary dark:text-white mb-4" />
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p className="text-gray-600 dark:text-gray-300">Assistance technique 24/7 pour une continuité optimale</p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8"
        >
          <a href="#contact">
            <button
              className="px-8 py-4 bg-primary dark:bg-white text-secondary dark:text-primary rounded-full font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              Découvrez nos Solutions
            </button>
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center mt-8 lg:mt-0" data-aos="fade-left">
        {/* Hero Image */}
        <motion.div 
          className="w-full h-[400px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={darkMode ? logoDark : logo}
            alt="Viberz Agency"
            className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = darkMode ? logoDark : logo;
            }}
          />
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="text-center p-4 bg-white dark:bg-darkBg rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary dark:text-white">+100</h3>
            <p className="text-gray-600 dark:text-gray-300">Clients Satisfaits</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-darkBg rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary dark:text-white">10+</h3>
            <p className="text-gray-600 dark:text-gray-300">Années d'Expérience</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-darkBg rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary dark:text-white">100%</h3>
            <p className="text-gray-600 dark:text-gray-300">Fiabilité</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

import { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import logo from "../assets/images/vz.svg";
import logoDark from "../assets/images/vz2.svg";
import { DarkModeContext } from "../App";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  // ...
  // Utilise {darkMode ? logoDark : logo} dans le JSX là où tu affiches le logo

  const teamMembers = [
    {
      name: "Sofiane Cherifi",
      role: "Team Leader",
      specialization: "Management des Projets",
      description: "Expert en gestion de projets et leadership, Sofiane dirige l'équipe avec une vision claire et une approche stratégique.",
      image: logo
    },
    {
      name: "Nail",
      role: "Filmmaker",
      specialization: "Montage Vidéo",
      description: "Spécialiste en production vidéo et montage, Nail crée des contenus visuels captivants pour nos clients.",
      image: logo
    },
    {
      name: "Viberz Agency",
      role: "Notre Équipe",
      specialization: "Expertise en Télécommunication",
      description: "Une équipe passionnée et expérimentée dans le domaine de la télécommunication et des solutions numériques.",
      image: logo
    }
  ];

  return (
    <section id="about" className="py-12 bg-lightBg dark:bg-darkBg scroll-mt-64">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary dark:text-white text-center mb-12">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white dark:bg-darkBg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-square mb-6">
                <img
                  src={darkMode ? logoDark : logo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = logo;
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-primary mb-2">{member.name}</h3>
              <p className="text-primary dark:text-white mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.specialization}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

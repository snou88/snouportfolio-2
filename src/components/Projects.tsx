import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../styles/swiper-pagination.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useContext } from "react";
import logo from "../assets/images/vz.svg";
import logoDark from "../assets/images/vz2.svg";
import { DarkModeContext } from "../App";

const projects = [
  {
    title: "Solution de Communication Unifiée",
    description: "Une plateforme de communication complète pour les entreprises",
    image: undefined,
    technologies: ["VoIP", "SMS", "CRM"],
    link: "https://viberz-agency.com"
  },
  {
    title: "Infrastructure Réseau",
    description: "Déploiement et maintenance d'infrastructures réseau modernes",
    image: undefined,
    technologies: ["Fibre Optique", "WiFi", "Sécurité"],
    link: "https://viberz-agency.com"
  },
  {
    title: "Solutions Cloud",
    description: "Services cloud pour la transformation numérique des entreprises",
    image: undefined,
    technologies: ["Cloud Hosting", "Backup", "Sécurité"],
    link: "https://viberz-agency.com"
  },
  {
    title: "Support Technique",
    description: "Support technique 24/7 pour vos solutions de télécommunication",
    image: undefined,
    technologies: ["Support Niveau 1-3", "SLA", "Maintenance"],
    link: "https://viberz-agency.com"
  }
];

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section id="projects" className="py-16 bg-lightBg dark:bg-darkBg scroll-mt-36" data-aos="fade-up">
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff;
          width: 12px;
          height: 12px;
          transform: scale(1.2);
        }
        
        .dark .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .dark .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12">
          Nos Projets
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={false}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.35,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] transform-gpu" data-aos="fade-up" data-aos-delay="300">
                <div className="aspect-video bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <img
                      src={darkMode ? logoDark : logo}
                      alt={project.title}
                      className="w-24 h-24 object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = logo;
                      }}
                    />
                  </div>
                </div>
                <div className="p-6 bg-white dark:bg-darkBg bg-opacity-90 backdrop-blur-sm border border-primary/10 dark:border-secondary/10">
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm bg-primary text-white dark:bg-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-white hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

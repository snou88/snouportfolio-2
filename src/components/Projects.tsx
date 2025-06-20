import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import speed from "../assets/images/progects/Speedgraphique.png";
import Ama from "../assets/images/progects/Ama-meuble.png";
import Agence from "../assets/images/progects/Agence.png";
import UFC from "../assets/images/progects/UFC.png";

const Projects = () => {
  return (
    <section
      id="projects" 
      className="py-16 bg-gray-50 scroll-mt-36 dark:bg-primary"
      data-aos="fade-up" // Animation pour la section entière
    >
      <div
        className="container mx-auto px-4"
        data-aos="fade-down"
        data-aos-delay="200" // Délai d'apparition
      >
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12">
          My Projects
        </h2>
        <Swiper
          spaceBetween={20} // Réduit l'espace entre les slides
          slidesPerView={1} // Les slides adjacents sont partiellement visibles
          centeredSlides={false} // Centrer la slide active
          navigation={true} // Activer les flèches
          breakpoints={{
            768: {
              slidesPerView: 2, // Partiellement visibles sur tablettes
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.35, // Partiellement visibles sur grands écrans
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Carte 1 */}
          <SwiperSlide>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={Ama}
                alt="Project 1"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-opacity-90 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-opacity-90 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Carte 2 */}
          <SwiperSlide>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src={speed}
                alt="Project 2"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-opacity-90 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Carte 3 */}
          <SwiperSlide>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img
                src={Agence}
                alt="Project 3"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-opacity-90 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Carte 4 */}
          <SwiperSlide>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={UFC}
                alt="Project 4"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-opacity-90 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Carte Coming Soon */}
          <SwiperSlide>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="w-full h-80 bg-primary dark:bg-white flex items-center justify-center">
                <span className="text-2xl font-bold text-white dark:text-primary">
                  Coming Soon
                </span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white  text-3xl font-bold max-sm:text-2xl">
                  New Project Coming Soon!
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

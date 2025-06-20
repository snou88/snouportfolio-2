import { useState, useEffect } from "react";
import img from "../assets/images/me2.png";
import imgdark from "../assets/images/me2-W.png";
/* logo-dev */
import R from "../assets/images/dev-logo/React.png";
import JS from "../assets/images/dev-logo/JS.png";
import Php from "../assets/images/dev-logo/php.png";
import Css from "../assets/images/dev-logo/css.png";
import html from "../assets/images/dev-logo/html.png";
import tailwind from "../assets/images/dev-logo/tailwind.png";
/* logo-design */
import photoshop from "../assets/images/design/photoshop.png";
import illustrator from "../assets/images/design/illustrator.png";
import figma from "../assets/images/design/figma.png";
import canva from "../assets/images/design/canva.png";
import capcut from "../assets/images/design/capcut.png";
/* teammates */
import walid from "../assets/images/walid.jpg";
import abdou from "../assets/images/lAbdo.png";
/* diplome */
import diplome from "../assets/images/diplome.png";
/* flag */
import arabe from "../assets/images/flag/arabe.png";
import france from "../assets/images/flag/france.png";
import usa from "../assets/images/flag/usa.jpg";
const About = () => {

  const [activeNav, setActiveNav] = useState("Skills");
  const [subNav, setSubNav] = useState("");

  const [imgSrc, setImgSrc] = useState(img);
  useEffect(() => {
    const updateImage = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setImgSrc(isDark ? imgdark : img );
    };

    // Run on mount
    updateImage();

    // Observe changes
    const observer = new MutationObserver(updateImage);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <section id="about" className="py-12 bg-white dark:bg-primary scroll-mt-64">
      <div
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 "
        data-aos="fade-up"
      >
        {/* Section gauche */}
        <div
          className="lg:w-1/2 flex flex-col items-center"
          data-aos="fade-right"
        >
          <div className="relative flex justify-center">
            <img
              src={imgSrc}
              alt="Me"
              className="rounded-lg w-full sm:w-3/4 mx-auto"
            />
            <a
              href="https://drive.google.com/file/d/17Q2FYD5bWhu5mTj_2Di2A1W69tsXG1Zs/view?usp=drive_link"
              download="Ahmed Senouci CV.pdf"
              className="max-md:w-56 max-sm:w-56 w-2/5 h-1/12 justify-center absolute bottom-8 sm:bottom-12 bg-white dark:bg-primary text-primary dark:text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2 shadow-lg hover:scale-105 text-sm sm:text-lg"
              data-aos="zoom-in"
            >
              <i className="bx bxs-download"></i>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Section droite */}
        <div className="lg:w-1/2 w-full" data-aos="fade-left">
          {/* About Me */}
          <div className="mb-6" data-aos="fade-up">
            <h2 className="text-2xl sm:text-4xl font-bold text-primary dark:text-white text-center lg:text-left">
              About Me
            </h2>
            <p className="mt-4 text-gray-600 dark:text-white text-center lg:text-left">
              I’m a full-stack developer with extensive experience in building
              modern web applications. Additionally, I am a professional
              designer passionate about creating engaging user experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-4" data-aos="fade-down" data-aos-delay="200">
            <ul className="flex flex-wrap justify-center lg:justify-start space-x-4 sm:space-x-8 font-bold text-sm sm:text-lg">
              {["Skills", "Diplome", "Teammates", "Language"].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer ${
                    activeNav === item ? "text-primary dark:text-white" : "text-gray-700 dark:text-yellow-100"
                  }`}
                  onClick={() => {
                    setActiveNav(item);
                    if (item === "Skills") setSubNav("");
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contenu */}
          <div className="mt-6">
            {activeNav === "Skills" && (
              <div data-aos="fade-up">
                <ul className="flex justify-center lg:justify-start space-x-4 ">
                  {["Developer", "Designer"].map((subItem) => (
                    <li
                      key={subItem}
                      className={`cursor-pointer ${
                        subNav === subItem ? "text-primary dark:text-white" : "text-gray-700 dark:text-yellow-100"
                      }`}
                      onClick={() => setSubNav(subItem)}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>

                {subNav === "Developer" && (
                  <div
                    className="mt-4 max-h-[25rem] overflow-y-auto custom-scrollbar sm:grid-cols-2 gap-4"
                    data-aos="zoom-in"
                  >
                    <ul className="space-y-2 pr-5">
                      <li
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                        data-aos="fade-right"
                      >
                        <img src={R} alt="React" className="w-10" />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <p className="font-medium">React</p>
                            <p className="font-bold text-primary"> 80% </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-primary h-2 rounded-full "
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                      {/* JavaScript */}
                      <li
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                        data-aos="fade-right"
                      >
                        <img src={JS} alt="JavaScript" className="w-10" />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <p className="font-medium">Java Script</p>
                            <p className="font-bold text-primary"> 70% </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </li>

                      {/* PHP */}
                      <li
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                        data-aos="fade-right"
                      >
                        <img src={Php} alt="PHP" className="w-10" />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <p className="font-medium">Php</p>
                            <p className="font-bold text-primary"> 70% </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </li>

                      {/* CSS */}
                      <li
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                        data-aos="fade-right"
                      >
                        <img src={Css} alt="CSS" className="w-10" />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <p className="font-medium">Css</p>
                            <p className="font-bold text-primary"> 90% </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </li>

                      {/* Tailwind */}
                      <li
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                        data-aos="fade-right"
                      >
                        <img src={tailwind} alt="Tailwind" className="w-10" />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <p className="font-medium">Tailwind</p>
                            <p className="font-bold text-primary"> 75% </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                      </li>

                      {/* HTML */}
                      <li
                        className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                        data-aos="fade-right"
                      >
                        <img src={html} alt="HTML" className="w-10" />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <p className="font-medium">Html</p>
                            <p className="font-bold text-primary"> 90% </p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {subNav === "Designer" && (
                  <ul
                    className="space-y-2 mt-4 max-h-[25rem] overflow-y-auto custom-scrollbar"
                    data-aos="zoom-in"
                  >
                    <li
                      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                      data-aos="fade-right"
                    >
                      <img src={photoshop} alt="" className="w-10" />
                      <div className="w-full">
                        <div className="flex justify-between">
                          <p className="font-medium">Photoshop</p>
                          <p className="font-bold text-primary"> 90% </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                      data-aos="fade-right"
                    >
                      <img src={illustrator} alt="" className="w-10" />
                      <div className="w-full">
                        <div className="flex justify-between">
                          <p className="font-medium">Adobe Illistrator</p>
                          <p className="font-bold text-primary"> 90% </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                      data-aos="fade-right"
                    >
                      <img src={figma} alt="" className="w-10" />
                      <div className="w-full">
                        <div className="flex justify-between">
                          <p className="font-medium">Figma</p>
                          <p className="font-bold text-primary"> 80% </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                      data-aos="fade-right"
                    >
                      <img src={canva} alt="" className="w-10" />
                      <div className="w-full">
                        <div className="flex justify-between">
                          <p className="font-medium">Canva</p>
                          <p className="font-bold text-primary"> 90% </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                      data-aos="fade-right"
                    >
                      <img src={capcut} alt="" className="w-10" />
                      <div className="w-full">
                        <div className="flex justify-between">
                          <p className="font-medium">Capcut</p>
                          <p className="font-bold text-primary"> 65% </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            )}
            {activeNav === "Diplome" && (
              <div className="text-center" data-aos="zoom-in">
                <h3 className="text-lg font-bold">
                  Diplôme de Technicien Supérieur en Informatique
                </h3>
                <p className="text-sm text-gray-600 dark:text-white">2021 - 2024</p>
                <img
                  src={diplome}
                  alt="Diploma"
                  className="w-auto mt-4 mx-auto"
                />
              </div>
            )}

            {activeNav === "Teammates" && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
                data-aos="fade-up"
              >
                {/* Teammate 1 */}
                <div className="flex items-center p-4 border rounded-lg shadow-sm">
                  <img
                    src={walid}
                    alt="Teammate 1"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-medium dark:text-white">Walid Kheloufi</p>
                    <a
                      href="https://walid-kheloufi.wuaze.com/"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

                {/* Teammate 2 */}
                <div className="flex items-center p-4 border rounded-lg shadow-sm">
                  <img
                    src={abdou}
                    alt="Teammate 2"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-medium dark:text-white">Abdellah Yahia Nafa</p>
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeNav === "Language" && (
              <ul
                className="flex justify-around items-center xl:gap-5"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {[
                  { langue: "Arabe", drapeau: arabe },
                  { langue: "French", drapeau: france },
                  { langue: "English", drapeau: usa },
                ].map(({ langue, drapeau }) => (
                  <li
                    key={langue}
                    className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-transform duration-300 hover:scale-105 xl:w-full "
                  >
                    <img
                      src={drapeau}
                      alt={`Drapeau de ${langue}`}
                      className="xl:w-auto w-16 h-16 object-contain mb-2"
                    />
                    <span className="text-lg font-bold text-gray-700">
                      {langue}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useEffect, useState } from "react";
import img from "../assets/images/Me.png";
import imgdark from "../assets/images/Me-w.png";
import Svg1 from "../assets/images/reseaux-logo/facebook.svg";
import Svg1dark from "../assets/images/reseaux-logo/facebook-W.svg";
import Svg2 from "../assets/images/reseaux-logo/insta.svg";
import Svg2dark from "../assets/images/reseaux-logo/insta-W.svg";
import Svg3 from "../assets/images/reseaux-logo/github.svg";
import Svg3dark from "../assets/images/reseaux-logo/github-W.svg";

const Home = () => {
  const [imgSrc, setImgSrc] = useState(img);
  const [Svg1Src, setsvg1Src] = useState(Svg1);
  const [Svg2Src, setsvg2Src] = useState(Svg2);
  const [Svg3Src, setsvg3Src] = useState(Svg3);
  useEffect(() => {
    const updateImage = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setImgSrc(isDark ? imgdark : img );
      setsvg1Src(isDark ? Svg1dark : Svg1 );
      setsvg2Src(isDark ? Svg2dark : Svg2 );
      setsvg3Src(isDark ? Svg3dark : Svg3 );
    };

    // Run on mount
    updateImage();

    // Observe changes
    const observer = new MutationObserver(updateImage);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-primary px-6 lg:px-10 lg:h-screen text-gray-900 dark:text-white"
    >
      {/* Left Section */}
      <div
        className="lg:w-1/2 w-full space-y-6 text-center lg:text-left"
        data-aos="fade-right"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mt-32">
        <span className="dark:text-black">Hey, I&#39;m</span> <span className="text-primary dark:text-white">Senouci Ahmed</span>
        </h1>
        <p className="text-base lg:text-lg text-gray-500 dark:text-gray-300">
          I am a Passionate developer with strong expertise in design, blending
          creativity and technical precision to craft intuitive interfaces and
          innovative solutions.
        </p>

        {/* Button with Icons */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-4">
          <div className="flex gap-2 lg:order-2" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://web.facebook.com/ahmed.senoupi.3/" target="_blank" rel="noopener noreferrer">
              <img
                src={Svg1Src}
                alt="Facebook"
                className="h-20 w-20 hover:opacity-80 transition-all duration-300"
              />
            </a>
            <a href="https://www.instagram.com/ahmed_senouci8/" target="_blank" rel="noopener noreferrer">
              <img
                src={Svg2Src}
                alt="Instagram"
                className="h-20 w-20 hover:opacity-80 transition-all duration-300"
              />
            </a>
            <a href="https://github.com/snou88" target="_blank" rel="noopener noreferrer">
              <img
                src={Svg3Src}
                alt="GitHub"
                className="h-20 w-20 hover:opacity-80 transition-all duration-300"
              />
            </a>
          </div>
          <a href="#contact">
            <button
              className="lg:order-1 px-6 py-3  text-white bg-primary dark:text-primary dark:bg-white rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300"
              data-aos="fade-up"
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center mt-8 lg:mt-0" data-aos="fade-left">
        {/* Profile Image */}
        <div className="w-3/4 lg:w-1/2 relative" data-aos="zoom-in">
          <img src={imgSrc} alt="Profile" className="w-full h-auto rounded-lg hover:scale-125 transition-all" />
        </div>

        {/* Information Rectangles */}
        <div className="flex flex-wrap gap-5 justify-center  lg:space-y-0 lg:space-x-6 mt-6 lg:mt-10 text-4xl text-primary dark:text-white">
          <div
            className="flex items-center bg-white dark:bg-black shadow-lg p-4 lg:p-6 rounded-lg w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <i className="bx bx-star bx-spin"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm lg:text-base">
              +3 Years Experience
            </span>
          </div>
          <div
            className="flex items-center bg-white dark:bg-black shadow-lg p-4 lg:p-6 rounded-lg w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <i className="bx bxs-landscape bx-tada"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm lg:text-base">
              Designer
            </span>
          </div>
          <div
            className="flex items-center bg-white dark:bg-black shadow-lg p-4 lg:p-6 rounded-lg w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i className="bx bx-code-alt bx-fade-right"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm lg:text-base">
              Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

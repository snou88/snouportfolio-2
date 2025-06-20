import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary dark:bg-black text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center">
        {/* Navigation Links */}
        <ul className="flex space-x-8 mb-4 max-md:space-x-4">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-secondary text-lg font-semibold transition duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://web.facebook.com/ahmed.senoupi.3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary text-2xl transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/ahmed_senouci8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary text-2xl transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/snou88"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Senouci Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

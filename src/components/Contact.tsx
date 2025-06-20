import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ContactPage: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_nj31o1j",
        "template_l76ywua",
        form,
        "MGUMI4w8huSg9yp2_"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message envoyé !",
            text: "Votre message a été envoyé avec succès.",
            icon: "success",
            customClass: {
              popup: "flex justify-center items-center", // Styles pour centrer
              confirmButton:
                "bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all",
            },
          });
        },
        (error) => {
          console.error("Erreur EmailJS:", error);
          Swal.fire({
            title: "Erreur",
            text: "Une erreur est survenue lors de l'envoi. Réessayez plus tard.",
            icon: "error",
            customClass: {
              popup: "flex justify-center items-center", // Styles pour centrer
              confirmButton:
                "bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all",
            },
          });
        }
      );

    form.reset(); // Réinitialise le formulaire après l'envoi
  };

  return (
    <div
      id="contact"
      className=" min-h-screen bg-gray-100 dark:bg-primary flex flex-col items-center justify-center p-6 scroll-mt-10"
      data-aos="fade-up" // Animation pour la section entière
    >
      <h1
        className="text-4xl font-bold text-center text-primary dark:text-white mb-12"
        data-aos="fade-down" // Animation du titre
        data-aos-delay="200" // Délai avant l'animation
      >
        Contact
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
        data-aos="fade-up" // Animation pour le conteneur principal
        data-aos-delay="400" // Délai avant l'animation
      >
        {/* Rectangle gauche */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-right" // Animation pour AOS
          data-aos-delay="600" // Délai spécifique
        >
          <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
            <i className="bx bxs-phone text-primary text-3xl"></i>
            <a
              href="tel:0540432265"
              className="text-lg max-xl:text-sm font-semibold text-gray-700"
            >
              05 40 43 22 65
            </a>
          </div>
          <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
            <i className="bx bxs-envelope text-primary text-3xl"></i>
            <span className="text-lg max-xl:text-sm  font-semibold text-gray-700">
              senouciahmeddev@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
            <i className="bx bxs-map text-primary text-3xl"></i>
            <span className="text-lg max-xl:text-sm  font-semibold text-gray-700">
              Cheraga
            </span>
          </div>
          {/* Intégration de la carte avec iframe */}
          <div
            className="mt-4 rounded-sm"
            data-aos="zoom-in" // Animation de zoom pour la carte
            data-aos-delay="800" // Délai spécifique
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25571.735958256166!2d2.908477005129146!3d36.75936294929527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb03e932164f9%3A0xb760f1cc8569076a!2zQ2jDqXJhZ2E!5e0!3m2!1sfr!2sdz!4v1737463812377!5m2!1sfr!2sdz"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-left" // Animation pour AOS
          data-aos-delay="600" // Délai spécifique
        >
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col" data-aos="fade-up">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                required
              />
            </div>
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary transition-all"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

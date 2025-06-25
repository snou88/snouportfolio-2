import React, { useState } from "react";
import "../styles/contact.css";
import "../styles/contact-transition.css";
import { FaUserCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "",
        "",
        form,
        ""
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          alert("Une erreur est survenue lors de l'envoi. Réessayez plus tard.");
        }
      );
    form.reset();
  };

  return (
    <div className="relative">
      <section id="contact" className="min-h-screen w-full contact-transition flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-3xl w-full mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white mb-4">Contactez-moi</h1>
          <p className="text-lg text-gray-700 dark:text-white mb-2">Une question, un projet, une collaboration ? Je réponds sous 24h.</p>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Encart infos */}
          <div className="contact-card bg-white dark:bg-white/95 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-6">
            <FaUserCircle className="text-7xl text-primary mb-2" />
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-3 text-gray-700 dark:text-white/90">
                <FaPhoneAlt className="text-primary" />
                <a href="tel:0550505050" className="hover:underline transition-colors dark:text-gray-800">05 50 50 50 50</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-white/90">
                <FaEnvelope className="text-primary" />
                <a href="mailto:Viberzagency@gmail.com" className="hover:underline transition-colors dark:text-gray-800">Viberzagency@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 ">
                <FaMapMarkerAlt className="text-primary" />
                <span>Cheraga</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 ">
                <FaClock className="text-primary" />
                <span>Lun - Ven : 9h - 18h</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://web.facebook.com/ahmed.senoupi.3/" target="_blank" rel="noopener noreferrer" className="social-link facebook group bg-primary/10 dark:bg-black/10 rounded-full p-2 transition shadow-md">
                <FaFacebook className="text-2xl group-hover:text-white transition-transform" />
              </a>
              <a href="https://www.instagram.com/ahmed_senouci8/" target="_blank" rel="noopener noreferrer" className="social-link instagram group bg-primary/10 dark:bg-black/10 rounded-full p-2 transition shadow-md">
                <FaInstagram className="text-2xl group-hover:text-white transition-transform" />
              </a>
              <a href="https://github.com/snou88" target="_blank" rel="noopener noreferrer" className="social-link github group bg-primary/10 dark:bg-black/10 rounded-full p-2 transition shadow-md">
                <FaGithub className="text-2xl group-hover:text-white transition-transform" />
              </a>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mt-4 border border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25571.735958256166!2d2.908477005129146!3d36.75936294929527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb03e932164f9%3A0xb760f1cc8569076a!2zQ2jDqXJhZ2E!5e0!3m2!1sfr!2sdz!4v1737463812377!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation"
              ></iframe>
            </div>
          </div>
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-5xl text-primary dark:text-white mb-4">✅</div>
                <p className="text-xl font-semibold text-primary dark:text-white mb-2">Merci pour votre message !</p>
                <p className="text-gray-600 dark:text-gray-200">Je vous répondrai rapidement.</p>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="contact-form flex flex-col gap-5">
                <div className="flex flex-col items-start gap-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom</label>
                  <div className="flex items-center w-full bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-800 rounded-lg px-3">
                    <FaUserCircle className="text-primary/70 mr-2" />
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="w-full bg-transparent py-2 focus:outline-none text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <div className="flex items-center w-full bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-800 rounded-lg px-3">
                    <FaEnvelope className="text-primary/70 mr-2" />
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="w-full bg-transparent py-2 focus:outline-none text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <div className="flex w-full bg-gray-50 dark:bg-gray-100 border border-gray-200 dark:border-gray-800 rounded-lg px-3">
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-transparent py-2 focus:outline-none text-gray-800 dark:text-white resize-none"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary flex items-center justify-center gap-2 disabled:opacity-60 transform hover:scale-[1.02]"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

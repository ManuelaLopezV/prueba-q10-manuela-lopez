import React from "react";
import { motion } from "framer-motion";

const PartnersProgram = () => {
  return (
    <main className="bg-gradient-to-b from-neutral-200 to-neutral-300 p-6 sm:p-8">
      <section className="container mt-16 sm:mt-28 lg:mt-20 xl:mt-20 flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Contenido del Slider */}
        <motion.article
          className="w-full space-y-8 sm:space-y-10 md:space-y-12 lg:w-2/5 xl:w-1/2 2xl:pl-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 text-center sm:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Potencia Tu Empresa con Q10
          </motion.h1>
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.p
              className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-neutral-700 text-center sm:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Únete al Programa Partners Q10 y lidera el cambio en el sector
              educativo.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-neutral-700 text-center sm:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Amplía tus horizontes y aumenta tus ingresos ofreciendo soluciones
              tecnológicas avanzadas.
            </motion.p>
          </div>
          <div className="text-center sm:text-center">
            <motion.button
              onClick={() =>
                (window.location.href =
                  "https://waf-www.q10.com/Colombia/Contacto")
              }
              className="inline-block text-lg sm:text-xl md:text-xl xl:text-2xl text-white bg-q10-orange px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 hover:bg-neutral-600 hover:text-white transition-colors shadow-lg hover:shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              ¡Afíliate ahora!
            </motion.button>
          </div>
        </motion.article>

        {/* Imagen */}
        <motion.figure
          className="w-3/4 mt-8 sm:mt-0 lg:w-2/5 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.img
            src="/partners-img-1.svg"
            alt="Programa Partners"
            className="w-auto sm:max-w-xs md:max-w-sm lg:w-lg object-cover mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />
        </motion.figure>
      </section>
    </main>
  );
};

export default PartnersProgram;

import React from "react";
import { motion } from "framer-motion";

const PartnersEligibility = () => {
  // Categorías de Partner
  const partnerCategories = [
    {
      icon: "/empresas-ti.svg",
      title: "Empresas de Tecnología",
      description:
        "TI, Desarrollo, Hardware, Software y Soluciones Tecnológicas.",
    },
    {
      icon: "/consultores.svg",
      title: "Consultores Independientes",
      description: "De Tecnología y/o Educación.",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-10">
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:mb-10 lg:text-4xl lg:mb-14 font-bold mb-6 text-neutral-800 text-center sm:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          ¿Quién puede ser Partner Q10?
        </motion.h2>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-col md:w-4/5 lg:w-5/6 lg:flex-row lg:mx-20 justify-center items-center gap-12">
        {/* Imagen */}
        <motion.figure
          className="w-3/4 sm:w-3/5 mb-8 sm:mb-0 lg:w-5/6 xl:pl-24 xl:w-5/6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/partners-img-2.svg"
            alt="Partners Q10"
            className="w-full h-auto rounded-lg"
          />
        </motion.figure>

        {/* Contenido */}
        <article className="w-5/6 sm:w-full">
          <div className="flex flex-col gap-6 lg:w-full 2xl:w-5/6">
            {partnerCategories.map((category, index) => (
              <motion.section
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border-2 border-neutral-200 hover:bg-neutral-100 transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center ml-2">
                  {/* Icono */}
                  <motion.figure
                    className="w-14 h-14 sm:w-20 sm:h-20 mx-auto sm:mx-0"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-auto h-auto"
                    />
                  </motion.figure>

                  {/* Descripción */}
                  <motion.div
                    className="flex flex-col py-3 px-5 text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold text-neutral-700">
                      {category.title}
                    </h3>
                    <p className="text-neutral-600">{category.description}</p>
                  </motion.div>
                </div>
              </motion.section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default PartnersEligibility;

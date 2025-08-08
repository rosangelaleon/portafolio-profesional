import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function SobreMi() {

  // Configuración de animaciones
  const Contenedor = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1}
    }
  };
  const Elemento = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut"}
    }
  };

  // Datos del contenido 
  const AcercaDe = [
    "<p>",
    "Soy una profesional con experiencia a quien le apasiona la tecnología y resolver problemas. He crecido y aprendido mucho a través de competencias, talleres, cursos y proyectos académicos.",
    
    "Mi trayectoria comenzó en el bachillerato técnico en informática, donde descubrí mi pasión por la programación. Desde entonces, he participado en competencias nacionales y departamentales de desarrollo videojuegos, explorando muchas más areas como el desarrollo de software, robótica y ciberseguridad.",
    
    "Como Licenciada en Ciencias Informáticas, combino el rigor académico con la experiencia práctica. Mi proyecto final de grado fue un sistema de gestión y control de stock, refleja mi capacidad para crear soluciones que impactan operaciones reales.",
    "</p>"
  ];
  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        variants={Contenedor}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        {/* Título Principal */}
        <motion.h2 
          variants={Elemento}
          className="titulo-principal text-center animar-aparicion"
        >
          Sobre Mí
        </motion.h2>

        {/* Tarjeta de Información con Animación de Borde Brillante */}
        <motion.article
          variants={Elemento}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 30px rgba(168, 85, 247, 0.4)",
              "0 0 40px rgba(34, 197, 94, 0.3)",
              "0 0 30px rgba(248, 113, 113, 0.4)",
              "0 0 20px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut"}
          }}
          className="tarjeta-acerca-de w-full max-w-7xl mx-auto p-12"
        >
          <div className="contenido-tarjeta-acerca-de text-left">
            {AcercaDe.map((parrafo, indice) => (
              <motion.p 
                key={indice}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: indice * 0.25,ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-gray-300 tamano-texto w-full mb-4 last:mb-0 text-justify"
              >
                {parrafo}
              </motion.p>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
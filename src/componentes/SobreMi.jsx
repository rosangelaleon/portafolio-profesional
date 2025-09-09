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
    "Descubrí lo que me apasiona en el bachillerato técnico, participando en competencias de desarrollo de videojuegos.",
    
    "Eso me llevó a estudiar una carrera relacionada y a buscar siempre oportunidades para seguir creciendo.",
    
    "Me caracteriza la curiosidad y las ganas constantes de aprender. Me motiva crear soluciones que realmente importen.",

    "Profesionalmente disfruto trabajando tanto en el frontend como en el backend, creando aplicaciones web completas desde la interfaz hasta la base de datos."
  ];

  return (
    <section 
      id="sobre-mi" 
      className="flex flex-col justify-center max-w-6xl mx-auto px-6 pt-20 pb-12 md:min-h-screen md:justify-center md:pt-0 md:px-6 lg:px-16 xl:px-6 2xl:px-6 md:pl-20 lg:pl-24 xl:pl-16 2xl:pl-6"
    >
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
            className="titulo-principal text-center "
          >
            Sobre Mí
          </motion.h2>

          {/* Tarjeta de Información*/}
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
            className="tarjeta-acerca-de w-full max-w-7xl mx-auto"
          >
            <div className="contenido-tarjeta-acerca-de">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                
                {/* Imagen sutil dentro de la tarjeta */}
                <motion.div 
                  className="lg:col-span-1 flex justify-center items-center order-1 lg:order-2"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Imagen sin efectos adicionales */}
                  <img 
                    src="/FotoSobremi.png" 
                    alt="Rosangela - Sobre mí"
                    className="w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full object-cover"

                  />
                </motion.div>

                {/* Contenido de texto */}
                <div className="lg:col-span-2 text-left order-2 lg:order-1">
                  {AcercaDe.map((parrafo, indice) => (
                    <motion.p 
                      key={indice}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: indice * 0.25, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="tamano-texto w-full mb-4 last:mb-0 text-justify"
                    >
                      {parrafo}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
    </section>
  );
}
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

// Configuración de las tecnologias (nombres, iconos y colores)
export default function Tecnologias() {
  const habilidadesTecnicas = [
    { name: "HTML5", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      color: "#E34F26" 
    },
    { name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      color: "#1572B6" 
    },
    { name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      color: "#F7DF1E" 
    },
    { name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      color: "#61DAFB" 
    },
    { name: "Tailwind CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "#38B2AC" 
    },
    { name: "Vite", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", 
      color: "#646CFF" 
    },
    { name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      color: "#3776AB" 
    },
    { name: "Flask", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", 
      color: "#ffffff" 
    },
    { name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
      color: "#ED8B00" 
    },
    { name: "Kotlin", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", 
      color: "#7F52FF" 
    },
    { name: "GML",
      icon: "https://www.gmlscripts.com/favicon.ico", 
      color: "#00D4AA" 
    },
    { name: "APIs REST", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", 
      color: "#009688" 
    },
    { name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      color: "#339933" 
    },
    { name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      color: "#4479A1" 
    },
    { name: "PostgreSQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
      color: "#336791" 
    },
    { name: "PL/SQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", 
      color: "#F80000" 
    },
    { name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      color: "#F05032" 
    },
    { name: "GitHub", 
      icon: Github, // Componente de Lucide React
      color: "#ffffff",
      isComponent: true // Marcador para identificar que es un componente
    }
  ];

  // Configuración de animaciones
  const Contenedor = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2}
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
  const TecnologiaItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut"}
    }
  };

  // Efecto cascada 
  const ContainerCascada = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };
  const ItemCascada = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      y: 30,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { type: "spring", stiffness: 200, damping: 15}
      }
    }
  };

  return (
    <section 
      id="tecnologias" 
      className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:min-h-screen md:flex md:flex-col md:justify-center md:pt-0 md:px-6 lg:px-16 xl:px-6 2xl:px-6 md:pl-20 lg:pl-24 xl:pl-16 2xl:pl-6"
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
          className="titulo-principal text-center animar-aparicion"
        >
          Tecnologías
        </motion.h2>

        {/* Grid de Habilidades Técnicas con Borde Brillante */}
        <motion.div 
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
          <motion.div 
            variants={ContainerCascada}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-center"
          >
            {habilidadesTecnicas.map((habilidad, indice) => (
              <motion.div
                key={indice}
                variants={ItemCascada}
                className="flex flex-col items-center justify-center p-2"
              >
                {/* Icono - Renderizado condicional */}
                {habilidad.isComponent ? (
                  <habilidad.icon 
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain mb-1 sm:mb-2 md:mb-3 transition-transform duration-300 icono-sombra text-white"
                  />
                ) : (
                  <img 
                    src={habilidad.icon} 
                    alt={`${habilidad.name} icon`}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain mb-1 sm:mb-2 md:mb-3 transition-transform duration-300 icono-sombra"
                    loading="lazy"
                  />
                )}

                {/* Nombre */}
                <span className="tamano-texto text-center font-medium" translate="no">
                  {habilidad.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
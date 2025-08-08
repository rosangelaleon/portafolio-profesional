import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Configuración de las tecnologias (nombres, iconos y colores)
export default function Tecnologias() {
  const habilidadesTecnicas = [
    { name: "HTML5", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      color: "#E34F26" 
    },
    { name: "CSS3", 
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
      icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnoiLz48L3N2Zz4K", 
      color: "#ffffff" 
    },
    { name: "Docker", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
      color: "#2496ED" 
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
    <section id="tecnologias" className="max-w-6xl mx-auto px-6 py-16">
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
          className="titulo-principal text-center"
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
            boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut"
            }
          }}
          className="tarjeta-acerca-de w-full max-w-7xl mx-auto p-12"
        >
          <motion.div 
            variants={ContainerCascada}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
          >
            {habilidadesTecnicas.map((habilidad, indice) => (
              <motion.div
                key={indice}
                variants={ItemCascada}
                className="flex flex-col items-center justify-center"
              >
                {/* Icono */}
                <img 
                  src={habilidad.icon} 
                  alt={`${habilidad.name} icon`}
                  className="w-10 h-10 object-contain mb-3 transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'}}
                />

                {/* Nombre */}
                <span className="tamano-texto text-center font-medium " translate="no">
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
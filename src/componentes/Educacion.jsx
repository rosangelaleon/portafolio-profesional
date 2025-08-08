import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { GraduationCap, Award, FileText, BookOpen, ExternalLink, X } from 'lucide-react';

export default function Educacion() {

  // Estado de certificados
  const [certificadoSeleccionado, setCertificadoSeleccionado] = useState(null);

  // Configuración de animaciones
  const variacionesContenedor = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Animación desde la izquierda
  const variacionesElemento = {
    hidden: { 
      opacity: 0, 
      x: -100, // Comienza 100px a la izquierda
      y: 0 
    },
    visible: {
      opacity: 1,
      x: 0, // Se mueve a su posición original
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animación específica para certificaciones (más sutil)
  const variacionesCertificacion = {
    hidden: { 
      opacity: 0, 
      x: -50, // Menos desplazamiento para certificaciones
      y: 0 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Datos de educación
  const datosEducacion = [
    {
      icono: GraduationCap,
      titulo: "Licenciatura en Ciencias Informáticas",
      institucion: "Universidad Nacional de Asunción",
      enfasis: [
        "Énfasis en Programación de Computadoras",
        "Énfasis en Análisis de Sistemas Informáticos"
      ],
      periodo: "2020 - 2024"
    },
    {
      icono: Award,
      titulo: "Técnico en Informática",
      institucion: "Centro Educativo Integral Carlos Rubén Cáceres Buscio",
      periodo: "2017 - 2019"
    }
  ];

  // Datos de certificaciones (organizadas por categorías)
  const datosCertificaciones = [
    { titulo: "Visual Studio Code y GitHub Copilot", 
      institucion: "Codigo Facilito", año: "2025", 
      categoria: "Desarrollo", color: "bg-blue-500", 
      imagen: "/certificados/vscode-copilot.jpg" 
    },
    { titulo: "Git profesional", 
      institucion: "Codigo Facilito", 
      año: "2025", categoria: "Desarrollo", 
      color: "bg-blue-500", 
      imagen: "/certificados/git-profesional.jpg" 
    },
    { titulo: "Fundamentos de arquitectura de software", 
      institucion: "Codigo Facilito", año: "2025", 
      categoria: "Desarrollo", 
      color: "bg-blue-500", 
      imagen: "/certificados/arquitectura-software.jpg" 
    },
    { titulo: "Power BI", 
      institucion: "Hazlo con Exel", 
      año: "2025", categoria: "Análisis de Datos", 
      color: "bg-purple-500", 
      imagen: "/certificados/power-bi.jpg" 
    },
    { titulo: "Competencias de Ciberseguridad HackCamp", 
      institucion: "Universidad Nacional de Asunción y LNX Network", 
      año: "2023", categoria: "Ciberseguridad", 
      color: "bg-green-500", 
      imagen: "/certificados/hackcamp-ciberseguridad.jpg" 
    },
    { titulo: "Programación con Robots", 
      institucion: "Universidad Nacional de Asunción", 
      año: "2022", categoria: "Desarrollo", 
      color: "bg-blue-500", 
      imagen: "/certificados/programacion-robots.jpg" 
    },
    { titulo: "Concurso Intercolegial 'Cabildo patrimonios de sueño e historia'", 
      institucion: "Centro Educativo los Laureles",
      año: "2019", categoria: "Desarrollo de Videojuegos",
      color: "bg-orange-500",
      imagen: "/certificados/cabildo-videojuegos.jpg" 
    },
    { titulo: "Segundo puesto - Concurso Nacional Intercolegial 'Juguemos creando'",
      institucion: "Ministerio de Educación y Ciencias",
      año: "2019", categoria: "Desarrollo de Videojuegos",
      color: "bg-yellow-500",
      imagen: "/certificados/juguemos-creando-2019.jpg" 
    },
    { titulo: "Concurso Intercolegial Temática Superhéroes",
      institucion: "Centro Educativo los Laureles", año: "2018",
      categoria: "Desarrollo de Videojuegos",
      color: "bg-orange-500",
      imagen: "/certificados/superheroes-videojuegos.jpg" 
    },
    { titulo: "Concurso Nacional Intercolegial 'Juguemos creando'",
      institucion: "Ministerio de Educación y Ciencias",
      año: "2018", categoria: "Desarrollo de Videojuegos",
      color: "bg-orange-500",
      imagen: "/certificados/juguemos-creando-2018.jpg" 
    },
  ];

  // Función para abrir 
  const abrirCertificado = (certificado) => {
    setCertificadoSeleccionado(certificado);
  };

  // Función para cerrar 
  const cerrarModal = () => {
    setCertificadoSeleccionado(null);
  };

  return (
    <section id="educacion" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        variants={variacionesContenedor}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        {/* Título Principal  */}
        <motion.h2 
          variants={variacionesElemento}
          className="titulo-principal text-center mb-4"
        >
          Educación
        </motion.h2>

        {/* Tarjeta con dos secciones */}
        <motion.div 
          variants={variacionesElemento}
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
            boxShadow: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="tarjeta-acerca-de w-full max-w-7xl mx-auto p-12"
        >
          {/* Layout de dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            
            {/* SECCIÓN 1: Formación Académica */}
            <motion.div 
              variants={variacionesElemento}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold  tamano-texto">
                  Formación Académica
                </h3>
              </div>
              
              <div className="space-y-12">
                {datosEducacion.map((educacion, index) => (
                  <motion.div
                    key={index}
                    variants={variacionesElemento}
                    className="border-l-2 border-blue-400 pl-4 py-2  "
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <educacion.icono className="w-4 h-4 text-gray-300" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 tamano-texto" translate="no">
                          {educacion.titulo}
                        </h4>
                        <p className="mb-1 tamano-texto-pequeno" translate="no">
                          {educacion.institucion}
                        </p>
                        {educacion.enfasis && (
                          <div className="mb-1 tamano-texto-pequeno" translate="no">
                            {educacion.enfasis.map((enfasis, enfasisIndex) => (
                              <p key={enfasisIndex} className="mb-0.5">
                                {enfasis}
                              </p>
                            ))}
                          </div>
                        )}
                        <p className="tamano-texto-pequeno" translate="no">
                          {educacion.periodo}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SECCIÓN 2: Certificaciones */}
            <motion.div 
              variants={variacionesElemento}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold tamano-texto">
                  Certificaciones
                </h3>
              </div>
              
              {/* Grid compacto de certificaciones */}
              <div className="space-y-0.5 max-h-72 overflow-y-auto pr-2">
                {datosCertificaciones.map((certificacion, index) => (
                  <motion.div
                    key={index}
                    variants={variacionesCertificacion}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="relative cursor-pointer"
                  >
                    <div className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-md p-1.5 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                      <div className="flex items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 tamano-texto" translate="no">
                            {certificacion.titulo}
                          </h4>
                          <p className="mb-1 tamano-texto-pequeno" translate="no">
                            {certificacion.institucion}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className={`inline-block px-1.5 py-0.5 rounded-full font-medium ${certificacion.color} bg-opacity-80 tamano-texto-pequeno`} translate="no">
                              {certificacion.categoria}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="tamano-texto-pequeno" translate="no">
                                {certificacion.año}
                              </span>
                              {/* Icono para ver certificado */}
                              <button
                                onClick={() => abrirCertificado(certificacion)}
                                className="p-1 text-gray-400 transition-colors duration-200 hover:bg-gray-700 rounded"
                                title="Ver certificado"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Muestra el certificado */}
      {certificadoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden">
            {/* Botón de cerrar */}
            <button
              onClick={cerrarModal}
              className="absolute top-4 right-4 z-60 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Encabezado del certificado */}
            <div className="bg-gray-800 p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold text-lg">{certificadoSeleccionado.titulo}</h3>
              <p className="tamano-texto-pequeno">{certificadoSeleccionado.institucion} • {certificadoSeleccionado.año}</p>
            </div>
            
            {/* Imagen del certificado */}
            <div className="p-4 bg-gray-900 flex items-center justify-center">
              <img
                src={certificadoSeleccionado.imagen}
                alt={`Certificado: ${certificadoSeleccionado.titulo}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = '/certificados/placeholder.jpg'; // Imagen de respaldo
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
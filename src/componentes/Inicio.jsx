import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

// Componente Typewriter
const TextoMaquinaEscribir = ({ texto, className, velocidad = 100 }) => {
  const [textoMostrado, setTextoMostrado] = useState('');
  const [indiceActual, setIndiceActual] = useState(0);
  useEffect(() => {
    if (indiceActual < texto.length) {
      const timeout = setTimeout(() => {
        setTextoMostrado(prev => prev + texto[indiceActual]);
        setIndiceActual(prev => prev + 1);
      }, velocidad);
      return () => clearTimeout(timeout);
    }
  }, [indiceActual, texto, velocidad]);
  return (
    <div className={className} translate="no">
      {textoMostrado}
      <span className="cursor-maquina-escribir" />
    </div>
  );
};

// Componente para iconos sociales
const IconoSocial = ({ href, children, colorHover, className = "", esEmail = false, email = "" }) => {
  const [mostrarCopiado, setMostrarCopiado] = useState(false);
  const manejarMouseEnter = (e) => {
    e.currentTarget.style.color = colorHover;
  };
  const manejarMouseLeave = (e) => {
    e.currentTarget.style.color = '';
  };
  const manejarClicEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setMostrarCopiado(true);
      setTimeout(() => setMostrarCopiado(false), 2000);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  };
  if (esEmail) {
    return (
      <div className="relative">
        <button
          onClick={manejarClicEmail}
          className={`text-gray-300 hover:text-white hover-icono-social ${className}`}
          onMouseEnter={manejarMouseEnter}
          onMouseLeave={manejarMouseLeave}
        >
          {children}
        </button>
        {mostrarCopiado && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            ¡Copiado!
          </div>
        )}
      </div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-300 hover:text-white hover-icono-social ${className}`}
      onMouseEnter={manejarMouseEnter}
      onMouseLeave={manejarMouseLeave}
    >
      {children}
    </a>
  );
};

// Componente para el botón CV
const BotonCV = () => {
  const manejarDescargarCV = () => {
    // Enlace para descargar el CV
    const enlace = document.createElement('a');
    enlace.href = '/Cv-RosangelaLeonS.pdf'; 
    enlace.download = 'CV-RosangelaLeon.pdf';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };
  return (
    <button 
      onClick={manejarDescargarCV}
      className="px-4 py-2 border border-gray-300 hover:border-white text-gray-300 hover:text-white font-medium rounded text-sm hover-boton-cv flex items-center gap-2"
    >
      <Download size={16} />
      Ver CV
    </button>
  );
};

// Componente principal
const Inicio = () => {
// Iconos sociales con enlaces 
  const enlacesSociales = [
    {
      href: "https://github.com/rosangelaleon", 
      colorHover: "#8B5CF6",
      icono: <Github size={32} />
    },
    {
      href: "https://www.linkedin.com/in/rosangela-le%C3%B3n/", 
      colorHover: "#0077B5",
      icono: <Linkedin size={32} />
    },
    {
      href: "",
      colorHover: "#EA4335",
      icono: <Mail size={32} />,
      esEmail: true,
      email: "rosileon262002@gmail.com"
    }
  ];
  return (
    <div id="inicio" className="min-h-screen relative overflow-hidden">

      {/* Contenido Principal */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 max-w-7xl mx-auto">

        {/* Contenido de Texto */}
        <div className="flex-1 max-w-lg text-center lg:text-left mx-auto ml-3 lg:ml-16 xl:ml-20 mt-40 lg:mt-0">
          {/* Título Principal */}
          <div className="animar-aparicion">
            <h1 className="titulo-principal">
              Hola, soy {' '}
              <span className="nombre-titulo-principal inline">
                Rosangela
              </span>
            </h1>
          </div>

          {/* Subtítulo con efecto typewriter */}
          <div className="aparicion-delay-500 mt-8">
            <TextoMaquinaEscribir 
              texto="Licenciada en Ciencias Informáticas | Desarrolladora Full Stack"
              className="subtitulo-maquina-escribir"
            />
          </div>

          {/* Frase */}
          <div className="aparicion-delay-1000 mt-6">
            <p className="text-gray-300 tamano-texto max-w-xl mx-auto lg:mx-0">
              Apasionada por construir soluciones tecnológicas creativas y funcionales que conectan necesidades con código.
            </p>
          </div>

          <div className="contenedor-social lg:justify-start">
            {/* Iconos de Redes Sociales */}
            <div className="grupo-iconos-sociales">
              {enlacesSociales.map((social, indice) => (
                <IconoSocial
                  key={indice}
                  href={social.href}
                  colorHover={social.colorHover}
                  esEmail={social.esEmail}
                  email={social.email}
                >
                  {social.icono}
                </IconoSocial>
              ))}
            </div>

            {/* Botón CV */}
            <BotonCV />
          </div>
        </div>

        {/* Imagen de Perfil */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="contenedor-imagen-perfil">
            {/* Contenedor de la imagen con efectos */}
            <div className="relative z-10 aparicion-delay-800">
              <div className="relative">
                {/* Círculo de fondo animado */}
                <div className="brillo-fondo-perfil"></div>
                
                {/* Imagen */}
                <img 
                  src="/Foto.png" 
                  alt="Rosangela - Perfil"
                  className="imagen-perfil"
                />
                
                {/* Overlay de gradiente sutil */}
                <div className="superposicion-perfil"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen móvil */}
        <div className="lg:hidden absolute top-20 right-16">
          <div className="contenedor-imagen-perfil">
            <div className="relative z-10 aparicion-delay-300">
              <div className="relative">
                <div className="brillo-fondo-perfil"></div>
                <img 
                  src="/Foto.png" 
                  alt="Rosangela - Perfil"
                  className="imagen-perfil"
                />
                <div className="superposicion-perfil"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
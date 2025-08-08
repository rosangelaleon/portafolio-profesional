import React, { useState, useEffect, useCallback, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, GraduationCap, FolderOpen } from 'lucide-react';

// Configuración del menú de navegación
const ELEMENTOS_MENU = [
  { icono: Home, etiqueta: 'Inicio', id: 'inicio', gradiente: 'gradiente-azul', indicador: 'indicador-azul' },
  { icono: User, etiqueta: 'Sobre Mi', id: 'sobre-mi', gradiente: 'gradiente-morado', indicador: 'indicador-morado' },
  { icono: Code, etiqueta: 'Tecnologías', id: 'tecnologias', gradiente: 'gradiente-verde', indicador: 'indicador-verde' },
  { icono: GraduationCap, etiqueta: 'Educación', id: 'educacion', gradiente: 'gradiente-naranja', indicador: 'indicador-naranja' },
  { icono: FolderOpen, etiqueta: 'Proyectos', id: 'proyectos', gradiente: 'gradiente-rojo', indicador: 'indicador-rojo' }
];
const BREAKPOINT_MOVIL = 768;
const DURACION_TOOLTIP = 2000;
const DESPLAZAMIENTO_SCROLL = 100;

// Configuración de las animaciones
const animaciones = {
  contenedor: {
    hidden: { x: -100, opacity: 0, filter: "blur(10px)" },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },

   // Animación de cada elemento del menú
  elemento: {
    hidden: { x: -50, opacity: 0, scale: 0.3, rotate: -180 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }
    }
  },
  // Animación del botón del menú
  boton: {
    hover: { 
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: { duration: 0.3, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 400, damping: 10 }
      }
    },
    tap: { 
      scale: 0.9,
      transition: { type: "spring", stiffness: 600, damping: 15 }
    }
  },

// Animaciones del icono (estados: idle, hover, active)
  icono: {
    idle: {
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      y: [-2, 0, -2, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    // Animación cuando el elemento está activo
    active: {
      scale: 1.15,
      rotate: 360,
      transition: {
        rotate: { duration: 0.8, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 300, damping: 20 }
      }
    }
  },
  indicador: {
    hidden: { scaleY: 0, x: -10, opacity: 0 },
    visible: { 
      scaleY: 1,
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 30, duration: 0.3 }
    },
    exit: { scaleY: 0, x: -10, opacity: 0, transition: { duration: 0.2 } }
  },
  tooltip: {
    hidden: { opacity: 0, x: -15, scale: 0.8, filter: "blur(4px)" },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.3 }
    }
  }
};

// Detecta dispositivos móviles
const useDeteccionMovil = () => {
  const [esMovil, setEsMovil] = useState(false);
  useEffect(() => {
    const verificarMovil = () => {
      setEsMovil(window.innerWidth <= BREAKPOINT_MOVIL || 'ontouchstart' in window);
    };
    
    verificarMovil();
    window.addEventListener('resize', verificarMovil);
    return () => window.removeEventListener('resize', verificarMovil);
  }, []);
  return esMovil;
};

// Detecta la sección activa en el scroll
const useSeccionActiva = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const estaDesplazandoPorClic = useRef(false);
  const refTimeoutScroll = useRef(null);
  useEffect(() => {
    const idsSeccion = ELEMENTOS_MENU.map(elemento => elemento.id);
    
    const manejarScroll = () => {
      if (estaDesplazandoPorClic.current) return;
      
      const secciones = idsSeccion.map(id => document.getElementById(id));
      const scrollY = window.scrollY + DESPLAZAMIENTO_SCROLL;
      secciones.forEach((seccion, indice) => {
        if (seccion) {
          const { offsetTop, offsetHeight } = seccion;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setIndiceActivo(indice);
          }
        }
      });
    };
    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);
  const setIndiceActivoManualmente = useCallback((indice) => {
    if (refTimeoutScroll.current) {
      clearTimeout(refTimeoutScroll.current);
    }
    
    estaDesplazandoPorClic.current = true;
    setIndiceActivo(indice);
    
    refTimeoutScroll.current = setTimeout(() => {
      estaDesplazandoPorClic.current = false;
      refTimeoutScroll.current = null;
    }, 1000);
  }, []);
  useEffect(() => {
    return () => {
      if (refTimeoutScroll.current) {
        clearTimeout(refTimeoutScroll.current);
      }
    };
  }, []);
  return [indiceActivo, setIndiceActivoManualmente];
};

const Tooltip = ({ mostrar, etiqueta, esMovil }) => (
  <AnimatePresence>
    {mostrar && (
      <motion.div
        variants={animaciones.tooltip}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={`tooltip ${esMovil ? 'tooltip-movil' : ''}`}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {etiqueta}
        </motion.span>
        <motion.div 
          className="flecha-tooltip"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

// Componente para el indicador de elemento activo
const IndicadorActivo = ({ estaActivo, claseIndicador }) => (
  <AnimatePresence>
    {estaActivo && (
      <motion.div
        className={`indicador-activo ${claseIndicador}`}
        variants={animaciones.indicador}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    )}
  </AnimatePresence>
);

// Componente para cada botón del menú
const BotonMenu = ({ 
  elemento, 
  indice, 
  estaActivo, 
  estaHover, 
  estaTocado, 
  esMovil,
  alClicElemento,
  alInicioTouch,
  alEventosMouse 
}) => {
  const Icono = elemento.icono;
  const mostrarTooltip = estaHover || estaTocado;
  const clasesBoton = `boton-menu ${estaActivo ? elemento.gradiente : 'boton-menu-inactivo'}`;

  return (
    <motion.div
      variants={animaciones.elemento}
      className="relative"
      onHoverStart={() => alEventosMouse(indice, true)}
      onHoverEnd={() => alEventosMouse(indice, false)}
    >
      <motion.button
        onClick={() => alClicElemento(indice)}
        onTouchStart={() => alInicioTouch(indice)}
        variants={animaciones.boton}
        whileHover="hover"
        whileTap="tap"
        className={clasesBoton}
        aria-label={elemento.etiqueta}
      >
        <motion.div
          className="superposicion-boton"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: estaActivo ? [0, 1.5] : 0, opacity: [0.5, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        <motion.div
          variants={animaciones.icono}
          animate={estaHover ? "hover" : estaActivo ? "active" : "idle"}
          key={`icon-${indice}-${estaHover ? 'hover' : estaActivo ? 'active' : 'idle'}`}
        >
          <Icono size={18} />
        </motion.div>
      </motion.button>
      <IndicadorActivo estaActivo={estaActivo} claseIndicador={elemento.indicador} />
      <Tooltip mostrar={mostrarTooltip} etiqueta={elemento.etiqueta} esMovil={esMovil} />
    </motion.div>
  );
};

// Componente para la barra de navegación
const BarraNav = () => {
  const [indiceActivo, setIndiceActivo] = useSeccionActiva();
  const [indiceHover, setIndiceHover] = useState(null);
  const [indiceTocado, setIndiceTocado] = useState(null);
  const esMovil = useDeteccionMovil();
  
const manejarClicElemento = useCallback((indice) => {
  setIndiceActivo(indice);
  
  const elemento = document.getElementById(ELEMENTOS_MENU[indice].id);
  if (elemento) {
    window.scrollTo({
      top: elemento.offsetTop - 20,
      behavior: 'smooth'
    });
  }
}, [setIndiceActivo]);

  const manejarInicioTouch = useCallback((indice) => {
    if (!esMovil) return;
    
    setIndiceTocado(indice);
    const idTimeout = setTimeout(() => setIndiceTocado(null), DURACION_TOOLTIP);
    return () => clearTimeout(idTimeout);
  }, [esMovil]);

   // Manejador de eventos de mouse (hover)
  const manejarEventosMouse = useCallback((indice, estaEntrando) => {
    if (esMovil) return;
    setIndiceHover(estaEntrando ? indice : null);
  }, [esMovil]);

  return (
    <motion.nav
      className="barra-navegacion" 
      variants={animaciones.contenedor}
      initial="hidden"
      animate="visible"
    >
      <div className="contenedor-menu">
        <AnimatePresence>
          {ELEMENTOS_MENU.map((elemento, indice) => (
            <BotonMenu
              key={elemento.id}
              elemento={elemento}
              indice={indice}
              estaActivo={indiceActivo === indice}
              estaHover={indiceHover === indice}
              estaTocado={indiceTocado === indice}
              esMovil={esMovil}
              alClicElemento={manejarClicElemento}
              alInicioTouch={manejarInicioTouch}
              alEventosMouse={manejarEventosMouse}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default BarraNav;
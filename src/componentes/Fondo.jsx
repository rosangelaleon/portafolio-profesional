import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Fondo() {

// Configuración de la escena
  const refMontaje = useRef(null);
  useEffect(() => {
    const montajeActual = refMontaje.current;
    if (!montajeActual) return;
    const escena = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderizador = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderizador.setSize(window.innerWidth, window.innerHeight);
    renderizador.setClearColor(0x000000, 1); // Fondo negro
    montajeActual.appendChild(renderizador.domElement);
    camara.position.z = 5;

    // Crea campo de estrellas
    const geometriaEstrella = new THREE.BufferGeometry();
    const cantidadEstrellas = 2000;
    const posicionesEstrella = new Float32Array(cantidadEstrellas * 3);
    const coloresEstrella = new Float32Array(cantidadEstrellas * 3);
    
    // Genera posiciones y colores aleatorios para las estrellas
    for(let i = 0; i < cantidadEstrellas; i++) {
      const i3 = i * 3;

      // Posiciones aleatorias en una esfera
      posicionesEstrella[i3] = (Math.random() - 0.5) * 200;
      posicionesEstrella[i3 + 1] = (Math.random() - 0.5) * 200;
      posicionesEstrella[i3 + 2] = (Math.random() - 0.5) * 200;

      // Colores aleatorios 
      coloresEstrella[i3] = 0.8 + Math.random() * 0.2;    
      coloresEstrella[i3 + 1] = 0.8 + Math.random() * 0.2; 
      coloresEstrella[i3 + 2] = 0.9 + Math.random() * 0.1; 
    }
    geometriaEstrella.setAttribute('position', new THREE.BufferAttribute(posicionesEstrella, 3));
    geometriaEstrella.setAttribute('color', new THREE.BufferAttribute(coloresEstrella, 3));

    // Crea material de estrella 
    const materialEstrella = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const campoEstrellas = new THREE.Points(geometriaEstrella, materialEstrella);
    escena.add(campoEstrellas);

    // Efecto de movimiento del mouse
    let mouseX = 0;
    let mouseY = 0;
    const manejarMovimientoMouse = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
    };
    window.addEventListener('mousemove', manejarMovimientoMouse);

    // Bucle de animación
    let idAnimacion;
    const reloj = new THREE.Clock();
    function animar() {
      idAnimacion = requestAnimationFrame(animar);
      const tiempoTranscurrido = reloj.getElapsedTime();

      // Rota el campo de estrellas
      campoEstrellas.rotation.x += 0.0002;
      campoEstrellas.rotation.y += 0.0005;

      // Añade efectos
      campoEstrellas.rotation.x += mouseY * 0.1;
      campoEstrellas.rotation.y += mouseX * 0.1;
      const posiciones = campoEstrellas.geometry.attributes.position.array;
      for(let i = 0; i < cantidadEstrellas; i++) {
        const i3 = i * 3;
        const tiempo = tiempoTranscurrido + i * 0.1;
        posiciones[i3 + 2] += Math.sin(tiempo * 0.5) * 0.01;
      }
      campoEstrellas.geometry.attributes.position.needsUpdate = true;
      renderizador.render(escena, camara);
    }
    animar();

    // Maneja redimensionamiento de ventana
    const manejarRedimensionamiento = () => {
      camara.aspect = window.innerWidth / window.innerHeight;
      camara.updateProjectionMatrix();
      renderizador.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', manejarRedimensionamiento);

    // Función de limpieza
    return () => {
      if (idAnimacion) {
        cancelAnimationFrame(idAnimacion);
      }
      window.removeEventListener('mousemove', manejarMovimientoMouse);
      window.removeEventListener('resize', manejarRedimensionamiento);
      if (montajeActual && renderizador.domElement) {
        montajeActual.removeChild(renderizador.domElement);
      }

      // Libera objetos
      geometriaEstrella.dispose();
      materialEstrella.dispose();
      renderizador.dispose();
    };
  }, []);
  return (
    <div 
      ref={refMontaje} 
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
    />
  );
}
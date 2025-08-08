import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, User, Bot, Zap, Image, ChevronLeft, ChevronRight, X, Code, Monitor, FileText 
} from 'lucide-react';

export default function Proyectos() {
    const [imagenActual, setImagenActual] = useState({});
    const [mostrarGaleria, setMostrarGaleria] = useState(null);

    // Configuración de animaciones
    const variacionesContenedor = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1}
        }
    };
    const variacionesElemento = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1,
            transition: { duration: 0.6, ease: "easeOut"}
        }
    };
    const listaProyectos = [
        {
            id: 1,
            titulo: "Invetory System",
            descripcion:"Sistema de Gestión y Control de Stock con arquitectura MVC que permite administrar stock, ventas, compras, generar reportes con filtros, control de seguridad con usuarios, roles y permisos.",
            tecnologias: ["Java", "MySQL"],
            tipoProyecto: "Sistema Local",
            enlaceGithub: "https://github.com/rosangelaleon/InventorySystem",
            enlaceDemo: null,
            enlaceManual: "/proyectos/InventorySystem/ManualUsuario.pdf",
            imagenes: [
                "/proyectos/InventorySystem/Inicio.PNG",
                "/proyectos/InventorySystem/Menu_Archivo.PNG",
                "/proyectos/InventorySystem/Clientes.PNG",
                "/proyectos/InventorySystem/Productos.PNG",
                "/proyectos/InventorySystem/Permisos.PNG",
                "/proyectos/InventorySystem/Ventas.PNG",
                "/proyectos/InventorySystem/Compra.PNG",
                "/proyectos/InventorySystem/Ajuste_Stock.PNG",
                "/proyectos/InventorySystem/Reporte_Filtro_Usuario.PNG",
                "/proyectos/InventorySystem/Reportes_Usuario.PNG"        
            ],
            icono: <Database className="w-4 h-4" />, colorTema: "blue"
        },
        {
            id: 2,
            titulo: "Portafolio Web Personal",
            descripcion: "Portafolio web moderno y responsivo con animaciones suaves y efectos visuales 3D.",
            tecnologias: ["React", "Tailwind CSS", "JavaScript", "Vite"],
            tipoProyecto: "Aplicación Web",
            enlaceGithub: "https://github.com/rosangelaleon/portafolio-profesional",
            enlaceDemo: "https://portfolio-demo.vercel.app",
            imagenes: ["/proyectos/Portafolio.PNG"],
            icono: <User className="w-4 h-4" />, colorTema: "purple"
        },
        {
            id: 3,
            titulo: "Agente IA para Floristería",
            descripcion: "Asistente virtual inteligente para automatizar la atención al cliente con recomendaciones personalizadas.",
            tecnologias: ["Python", "OpenAI API", "Flask"],
            tipoProyecto: "Inteligencia Artificial",
            enlaceGithub: "https://github.com/dylanc/floristeria-ai",
            enlaceDemo: "https://floristeria-ai-demo.vercel.app",
            imagenes: ["/images/proyectos/ai-florist-1.png"],
            icono: <Bot className="w-4 h-4" />, colorTema: "green"
        }
    ];
    const obtenerClaseColor = (colorTema) => {
        const colores = { blue: "bg-blue-500", purple: "bg-purple-500", green: "bg-green-500"};
        return colores[colorTema] || "bg-blue-500";
    };
    const imagenAnterior = (proyectoId) => {
        const proyecto = listaProyectos.find(p => p.id === proyectoId);
        setImagenActual(prev => ({...prev,
            [proyectoId]: (prev[proyectoId] || 0) === 0 ? proyecto.imagenes.length - 1 : (prev[proyectoId] || 0) - 1
        }));
    };
    const siguienteImagen = (proyectoId) => {
        const proyecto = listaProyectos.find(p => p.id === proyectoId);
        setImagenActual(prev => ({ ...prev,
            [proyectoId]: (prev[proyectoId] || 0) === proyecto.imagenes.length - 1 ?  0 : (prev[proyectoId] || 0) + 1
        }));
    };
    const abrirGaleria = (proyectoId) => {
        setMostrarGaleria(proyectoId);
    };
    const cerrarModal = () => {
        if (mostrarGaleria) {
            setImagenActual(prev => ({ ...prev, [mostrarGaleria]: 0 }));
        }
        setMostrarGaleria(null);
    };
    return (
        <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16 pb-24">
            <motion.div
                variants={variacionesContenedor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-4"
            >

                {/* Título Principal */}
                <motion.h2 
                    variants={variacionesElemento} 
                    className="titulo-principal text-center"
                >
                    Proyectos
                </motion.h2>

                {/* Tarjeta Principal*/}
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
                        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="tarjeta-acerca-de w-full max-w-7xl mx-auto p-12"
                >

                    {/* Grid de proyectos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {listaProyectos.map((proyecto) => (
                            <motion.div
                                key={proyecto.id}
                                variants={variacionesElemento}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
                                className="bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                            >
                                {/* Imagen del proyecto */}
                                <div className="relative h-32 mb-3 rounded-md overflow-hidden bg-gray-800">
                                    <img src={proyecto.imagenes[imagenActual[proyecto.id] || 0]}
                                        alt={`${proyecto.titulo} - Imagen`}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />

                                    {/* Botón para ver galería */}
                                    {proyecto.imagenes.length > 1 && (
                                        <button
                                            onClick={() => abrirGaleria(proyecto.id)}
                                            className="absolute top-1 right-1 p-1 text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200 rounded"
                                            title="Ver galería"
                                        >
                                            <Image className="w-5 h-5" />
                                        </button>
                                    )}

                                    {/* Overlay con tipo de proyecto */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1.5">
                                        <div className="flex items-center gap-1">
                                            {proyecto.icono}
                                            <span className="text-white font-medium">
                                                {proyecto.tipoProyecto}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contenido del proyecto */}
                                <div className="space-y-2">
                                    <h4 className="tamano-texto-pequeno" translate="no">
                                        {proyecto.titulo}
                                    </h4>
                                    <p className="tamano-texto-pequeno leading-relaxed">
                                        {proyecto.descripcion}
                                    </p>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-1">
                                        {proyecto.tecnologias.map((tecnologia, indice) => (
                                            <span
                                                key={indice}
                                                className={`inline-block px-1.5 py-0.5 rounded-full font-medium ${obtenerClaseColor(proyecto.colorTema)} bg-opacity-80 tamano-texto-pequeno`}
                                                translate="no"
                                            >
                                                {tecnologia}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Enlaces */}
                                    <div className="flex gap-2 pt-2">
                                        <a
                                            href={proyecto.enlaceGithub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-white text-xs"
                                        >
                                            <Github className="w-3 h-3" />
                                            <span>Código</span>
                                        </a>

                                        {/* Botón de manual de usuario para el primer proyecto */}
                                        {proyecto.id === 1 && (
                                            <a
                                                href={proyecto.enlaceManual}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 px-2 py-1 rounded bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white text-xs"
                                            >
                                                <FileText className="w-3 h-3" />
                                                <span>Manual</span>
                                            </a>
                                        )}

                                        {/* Demo solo para el tercer proyecto */}
                                        {proyecto.id === 3 && proyecto.enlaceDemo && (
                                            <a
                                                href={proyecto.enlaceDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-1 px-2 py-1 rounded ${obtenerClaseColor(proyecto.colorTema)} bg-opacity-80 text-white hover:opacity-90 transition-opacity text-xs`}
                                            >
                                                <ExternalLink className="w-3 h-3" />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Modal de galería */}
            {mostrarGaleria && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="relative w-[90vw] max-w-5xl h-[85vh] bg-gray-900 rounded-lg overflow-hidden flex flex-col">

                        {/* Botón de cerrar */}
                        <button
                            onClick={cerrarModal}
                            className="absolute top-4 right-4 z-60 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Encabezado del modal */}
                        <div className="bg-gray-800 p-4 border-b border-gray-700 flex-shrink-0">
                            <h3 className="text-white font-semibold">
                                {listaProyectos.find(p => p.id === mostrarGaleria)?.titulo}
                            </h3>
                            <p className="tamano-texto-pequeno">
                                {listaProyectos.find(p => p.id === mostrarGaleria)?.tipoProyecto}
                            </p>
                        </div>

                        {/* Contenedor de imagen con tamaño fijo */}
                        <div className="relative flex-1 bg-gray-900 flex items-center justify-center p-4">
                            <div className="w-full h-full flex items-center justify-center">
                                <img 
                                    src={listaProyectos.find(p => p.id === mostrarGaleria)?.imagenes[imagenActual[mostrarGaleria] || 0]}
                                    alt={`Galería - Imagen ${(imagenActual[mostrarGaleria] || 0) + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Controles de navegación */}
                            {listaProyectos.find(p => p.id === mostrarGaleria)?.imagenes.length > 1 && (
                                <>
                                    <button
                                        onClick={() => imagenAnterior(mostrarGaleria)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    
                                    <button
                                        onClick={() => siguienteImagen(mostrarGaleria)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    {/* Indicadores */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {listaProyectos.find(p => p.id === mostrarGaleria)?.imagenes.map((_, indice) => (
                                            <button
                                                key={indice}
                                                onClick={() => setImagenActual(prev => ({ ...prev, [mostrarGaleria]: indice }))}
                                                className={`w-3 h-3 rounded-full transition-colors ${
                                                    indice === (imagenActual[mostrarGaleria] || 0) ? 'bg-white' : 'bg-white/50'}`
                                                }
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
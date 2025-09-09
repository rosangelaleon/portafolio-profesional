import Fondo from "./componentes/Fondo";
import BarraNav from "./componentes/BarraNav";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Tecnologias from "./componentes/Tecnologias";
import Educacion from "./componentes/Educacion";
import Proyectos from  "./componentes/Proyectos";
import './index.css'; // Asegúrate de importar tu CSS
function App() {

  return (
    <>
      <Fondo />
      <BarraNav />
      <Inicio />
      <SobreMi />
      <Tecnologias />
      <Educacion/>
      <Proyectos/>
    </>
  )
}

export default App

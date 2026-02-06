import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio"
import ListaJuegos from "./componentes/ListaJuegos"
import Formulario from "./componentes/Formulario"
import NotFound from "./componentes/NotFound"

// Aquí tengo mi Browser Route, con las rutas de incio /, lista de juegos /lista y para añadir juego /formulario
// cualquier otra ruta será NotFound.

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Inicio />} />
        <Route path="/lista" element={<ListaJuegos />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

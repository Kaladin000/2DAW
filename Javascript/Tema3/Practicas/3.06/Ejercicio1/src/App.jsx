import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Cabecera from "./componentes/Cabecera.jsx"
import Pie from "./componentes/Pie.jsx"
import Menu from "./componentes/Menu.jsx"
import Error from "./componentes/Error.jsx"

import Peliculas from "./componentes/subcomponentes/Peliculas.jsx"
import Interpretes from "./componentes/subcomponentes/Interpretes.jsx"
import Galeria from "./componentes/subcomponentes/Galeria.jsx"

function App() {
  
  return (
    <>
        <Menu />
        <Routes>
            <Route path='/' element={<Cabecera />} />
        </Routes>
        <main>
          <Routes>
            <Route path='peliculas' element={<Peliculas />} />
            <Route path='interpretes' element={<Interpretes />} />
            <Route path='galeria' element={<Galeria />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Pie />
    </>
  )
}

export default App

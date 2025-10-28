import datosPeliculas from './objetos/peliculas.json'
import Peliculas from './componentes/Peliculas.jsx'

// Recojo los datos de las películas del JSON, le paso los datos en formato array al componente Peliculas mediante props
// De ésta manera la página puede procesar todo el contenido

function App(props) {
  return (
    <>
      <Peliculas arrayPeliculas = {datosPeliculas.peliculas}>
      </Peliculas>
    </>
  );
}

export default App;

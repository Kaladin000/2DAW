import { useEffect, useState } from 'react'
import './App.css'
import { accederPeliculas, accederPersonajes, accederNaves, accederVehiculos} from "./accesoAPI/accesoAPI.js";

import Peliculas from "./componentes/Peliculas.jsx";
import Pelicula from "./componentes/Pelicula.jsx";
import Personajes from "./componentes/Personajes.jsx";
import Personaje from "./componentes/Personaje.jsx";
import NavesVehiculos from "./componentes/NavesVehiculos.jsx";

function App() {

// Esto es un grupo de useStates, son listas, seguidas de la selección actual en esa lista

  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSel, setPeliculaSel] = useState(null);
  const [personajes, setPersonajes] = useState([]);
  const [personaSel, setPersonaSel] = useState(null);
  const [navesVehiculos, setNavesVehiculos] = useState([]);

// Para imprimir o no las naves y vehiculos
  
  const [mostrarNaves, setMostrarNaves] = useState(false);

// Muestra las naves del personaje (al hacer click en pilota)

  const handleMostrarNaves = () => {
    setMostrarNaves(true);
  };

// Carga las películas

  useEffect(() => {
    accederPeliculas().then(setPeliculas);
  }, []);

// Muestra la información de la pelicula clickada

  const mostrarInfoPelicula = async (pelicula) => {

    // Accedo a los datos y los almaceno en un objeto
    const personajesData = await Promise.all(
      pelicula.characters.map(accederPersonajes)
    );

    // Guarda la película, acorta los personajes a 10 máximo y reinicia sus detalles

    setPeliculaSel(pelicula);
    setPersonajes(personajesData.slice(0, 10));
    setPersonaSel(null);
    setNavesVehiculos([]);
  };

// Muestra la info del personaje/persona clickado

  const mostrarPersona = async (persona) => {
    setPersonaSel(persona);

    // Accedo a los datos y los almaceno en un objeto
    const naves = await Promise.all(persona.starships.map(accederNaves));
    const vehiculos = await Promise.all(persona.vehicles.map(accederVehiculos));

    // Junto ambos datos, y por defecto no se mostrará

    setNavesVehiculos([...naves, ...vehiculos]);
    setMostrarNaves(false);
  };

  return (
    <>
      <div id="contenedor">
      <Peliculas
        peliculas={peliculas}
        onSelect={mostrarInfoPelicula}
      />

      <Pelicula pelicula={peliculaSel} />

      <Personajes
        personajes={personajes}
        onSelect={mostrarPersona}
      />

      {personajes.length > 0 && (
        <div id="boton">
          <button onClick={handleMostrarNaves}>Pilota</button>
        </div>
      )}

      <div id="contenedorPersonajeYItems">
      <Personaje persona={personaSel} />

      <NavesVehiculos items={navesVehiculos} mostrar={mostrarNaves} />
      </div>
      </div>
    </>
  );
}

export default App;
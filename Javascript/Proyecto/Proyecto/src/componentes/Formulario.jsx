import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Videojuego from "../clases/Videojuego";
import useFirestore from "../hooks/useFirestore";
import { buscarJuegos } from "../api/apiJuegos";

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../componentes/otros/Header";
import Footer from "../componentes/otros/Footer";

// Componente hijo para PROPS, cuando de todos los juegos sugeridos, el usuario elige uno,
// deja el nombre de ese juego como campo.
const SugerenciaJuego = ({ juego, onSelect }) => {
  return (
    <li onClick={() => onSelect(juego)} style={{ cursor: "pointer", padding: "0.5rem" }}>
      {juego.name}
    </li>
  );
};

const Formulario = () => {
  // useRef
  const nombreRef = useRef(null);

  // estados
  const [sugerencias, setSugerencias] = useState([]);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const [mes, setMes] = useState("");
  const [year, setYear] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState(""); // (1) COMPLETADO, (2) JUGANDO/ON HOLD, (3) INACABADO
  const [error, setError] = useState(null);

  const { addJuego } = useFirestore();

  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Cada vez que carga la página comprueba si el parámetro loading cambia, compruebo que exista y sea true,
  // entonces vuelve (el usuario está logueado y puede navegar).
  // En caso contrario, significará que el usuario no está logueado, y lo devuelve al inicio.

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/"); 
  }, [loading]);

  // Espera al texto del usuario, lo utiliza como campo para buscar en la api,
  // la api genera 10 juegos que guardo en el estado de sugerencias.
  const handleInput = async () => {
    const texto = nombreRef.current.value;
    const resultados = await buscarJuegos(texto);
    setSugerencias(resultados);
  };

  // Cuando el usuario elije un juego, lo guardo en el estado de juego
  // seleccionado.
  const seleccionarJuego = (juegoAPI) => {
    setJuegoSeleccionado(juegoAPI);
    setSugerencias([]);
  };

  // Handle que ocurre cuando el usuario le da click a Añadir juego
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!juegoSeleccionado) {
      setError("Debes seleccionar un videojuego de la lista");
      return;
    }

    if (!mes || !year || !estado) {
      setError("Mes, año y estado son obligatorios");
      return;
    }

    if (estado > 3 || estado <= 0) {
      setError("Estado solo puede ser 1, 2 o 3");
      return;
    }

    if (mes > 12 || mes <= 0) {
      setError("Mes erróneo. Tiene que ser del 1 al 12");
      return;
    }

    if (year > 3000 || year <= 1900) {
      setError("ERROR. El año tiene que ser un entero del 1900 al 2999");
      return;
    }

    try {

      // Creo un videojuego con los campos generados por el usuario

      const videojuego = new Videojuego(
        juegoSeleccionado,
        mes,
        year,
        descripcion,
        estado
      );

      // Paso el objeto a json, para que firestore lo pueda leer

      let videojuegoJSON = videojuego.toJSON();

      console.log(videojuegoJSON);

      // Lo añado a firestore

      await addJuego(videojuegoJSON);

      alert("¡Juego añadido!");

      // Limpieza
      nombreRef.current.value = "";
      setJuegoSeleccionado(null);
      setMes("");
      setYear("");
      setDescripcion("");
    } catch (error) {
      setError("Error al guardar el videojuego");
      console.error(error);
    }
  };

  // Los campos escuchan constantemente cambios, y cuando lo hacen guardan
  // en su estado los parámetros (véase mes, año o estado, todos estos 
  // excepto el videojuego, que arriba explico como funciona) y si hay
  // un error se muestra un párrafo junto al error.

  return (
    <>

    <Header />

    <main>
      <Link to="/lista">Lista de juegos</Link>
      <h2>Añadir videojuego</h2>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>Videojuego *</label>
        <input
          type="text"
          ref={nombreRef}
          placeholder="Escribe el nombre del juego"
          onChange={handleInput}
        />

        {sugerencias.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {sugerencias.map((juego) => (
              <SugerenciaJuego
                key={juego.id}
                juego={juego}
                onSelect={seleccionarJuego}
              />
            ))}
          </ul>
        )}

        <label>Mes *</label>
        <input
          type="number"
          min="1"
          max="12"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
        />

        <label>Año *</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <label>Estado *</label>
        <input
          type="number"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <p className="estado-help">
          (1) COMPLETADO, (2) JUGANDO/ON HOLD, (3) INACABADO
        </p>

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button type="submit">Añadir</button>
      </form>

      {error && <p className="form-error">{error}</p>}
    </main>

    <Footer />

    </>
  );
};

export default Formulario;
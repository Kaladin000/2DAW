import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Header from "../componentes/otros/Header";
import Footer from "../componentes/otros/Footer";

const nombresMes = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const ListaJuegos = () => {
  const { juegos, years, borrarJuego, editarJuego } = useFirestore();

  const [yearSeleccionado, setYearSeleccionado] = useState("");
  const [juegosPorMes, setJuegosPorMes] = useState({});

  const [editandoId, setEditandoId] = useState(null);
  const [formEdit, setFormEdit] = useState({ // Esto es para inicializar los parámetros de edición
    mes: "",
    year: "",
    descripcion: "",
    estado: ""
  });
  const [errorEdit, setErrorEdit] = useState("");

  const navigate = useNavigate();
  const { user, loading } = useAuth();

  // Cada vez que carga la página comprueba si el parámetro loading cambia, compruebo que exista y sea true,
  // entonces vuelve (el usuario está logueado y puede navegar).
  // En caso contrario, significará que el usuario no está logueado, y lo devuelve al inicio.

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/"); 
  }, [loading]);

  // Selecciona el primer año entre los juegos dentro de años que tiene el usuario,
  // la primera vez que renderiza la página.
  useEffect(() => {
    if (years.length > 0 && !yearSeleccionado) {
      setYearSeleccionado(years[0]);
    }
  }, [years]);

  // Agrupo los juegos por mes y los ordeno por fechaAdicion
  useEffect(() => {
    if (!yearSeleccionado) return;

    const filtrados = juegos
      .filter(juego => juego.year === yearSeleccionado) // Filtro los juegos por años
      .sort((a, b) => Number(a.mes) - Number(b.mes)) // Ordeno los juegos por meses

    // Guardo en un objeto de objetos, mes - juegos
    const agrupados = {};

    // Recorro los juegos ordenados por meses y por cada juego,
    // compruebo si en el objeto vacío existe ese mes, en caso contrario,
    // crea un array vacío para ese mes, en caso de que exista ese mes,
    // lo meterá en ese mismo array, de esta manera tengo dentro de cada mes,
    // los juegos que pertenecen a éste.

    filtrados.forEach(juego => {
      if (!agrupados[juego.mes]) agrupados[juego.mes] = [];
      agrupados[juego.mes].push(juego);
    });

    // Ordeno el grupo de objetos por fechaAdicion
    Object.keys(agrupados).forEach(mes => {
      agrupados[mes].sort((a, b) => {
        return a.fechaAdicion - b.fechaAdicion;
      });
    });

    setJuegosPorMes(agrupados);
  }, [juegos, yearSeleccionado]);

  // Al darle click al botón de editar, abro el formulario de edición

  const abrirEdicion = (juego) => {

    // Si el editor ya está abierto y le das click a editar, se cierra.

    if (editandoId === juego.id) {
      setEditandoId(null);
      return;
    }

    setEditandoId(juego.id); // Guardo en estado el id del juego que estoy editando.

    // Los parámetros que ya tenía el juego, se ponen automáticamente en el formulario
    // de edición.

    setFormEdit({
      mes: juego.mes,
      year: juego.year,
      descripcion: juego.descripcion,
      estado: juego.estado
    });
  };

  // Actualizo el nuevo json del juego (formEdit), copiando el estado anterior de su json,
  // y actualizo sus campos (formEdit) cada vez que cambian.

  const handleChange = (campoEditado) => {
    const { name, value } = campoEditado.target;
    setFormEdit(prev => ({ ...prev, [name]: value })); // Copia los valores anteriores y cambia solo los editados.
  };

  // Se ejecuta cuando guardas la edición, recogiendo el id del juego, luego
  // utiliza useFirestore para finalizar los cambios (editarJuego)

  const guardarEdicion = async (id) => {
    const mes = formEdit.mes;
    const year = formEdit.year;
    const estado = formEdit.estado;

    if (estado > 3 || estado <= 0) {
      setErrorEdit("Estado solo puede ser 1, 2 o 3");
      return;
    }

    if (mes > 12 || mes <= 0) {
      setErrorEdit("Mes erróneo. Tiene que ser del 1 al 12");
      return;
    }

    if (year > 3000 || year <= 1900) {
      setErrorEdit("ERROR. El año tiene que ser un entero del 1900 al 2999");
      return;
    }

    setErrorEdit("");
    await editarJuego(id, formEdit);
    setEditandoId(null); // Se cierra el desplegable
  };

  // Aquí, de igual manera recojo los valores de edición de manera constante y los guardo en sus estados, en caso de error lo muestra.

  // Muestro una barra desplegable de años, si seleccionas un año te muestra los juegos por meses y por fecha de adición.
  // Los juegos por meses están guardados en un estado, por lo tanto dentro simplemente anido juegos dentro de meses mediante
  // map.

  // He creado un desplegable para la edición el cual solo se mostrará si el id de juego y el id de juego siendo editado son iguales.
  
  return (
    <>
      <Header />

      <main>
        <Link to="/formulario">Añadir juego</Link>

        <div className="lista-container">

        {/* SELECT AÑO */}
        <div className="lista-filtro">
          <label>Año:</label>

          <select
            value={yearSeleccionado}
            onChange={(e) => setYearSeleccionado(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* LISTA POR MESES */}
        <div className="lista-meses">

          {Object.keys(juegosPorMes).map(mes => (
            <div key={mes} className="bloque-mes">

              <h2 className="mes-titulo">
                {nombresMes[mes-1]}
              </h2>

              {juegosPorMes[mes].map(juego => (
                <div key={juego.id} className="juego-card">

                  {/* Imagen */}
                  <img
                    className="juego-img"
                    src={juego.artwork}
                    alt={juego.nombre}
                    width={45}
                    height={45}
                  />

                  <div className="juego-contenido">

                    {/* Línea principal */}
                    <div className="juego-top">
                      <div className={`estado-box estado-${juego.estado}`} />

                      <span className="juego-nombre">
                        {juego.nombre}
                      </span>

                      <span className="juego-rating">
                        ({Math.round(juego.ratingIGDB || "")})
                      </span>

                    </div>

                    {/* Géneros */}
                    <div className="juego-generos">
                      {juego.generos?.join(" · ")}
                    </div>

                    {/* Summary */}
                    <div className="juego-summary">
                      {juego.summary}
                    </div>

                    {/* Storyline */}
                    <div className="juego-storyline">
                      {juego.storyline}
                    </div>

                    {/* Descripción personal */}
                    {juego.descripcion && (
                      <div className="juego-descripcion">
                        {juego.descripcion}
                      </div>
                    )}

                    {/* Acciones */}
                    <div className="juego-acciones">
                      <button onClick={() => abrirEdicion(juego)}>
                        Editar
                      </button>

                      <button onClick={() => borrarJuego(juego.id)}>
                        Borrar
                      </button>

                      {/* DESPLEGABLE PARA EDITAR EL JUEGO */}

                      {editandoId === juego.id && (
                      <div className="edit-form">

                        <div className="edit-row">
                          <label>Mes:</label>
                          <input
                            type="number"
                            min="1"
                            max="12"
                            name="mes"
                            value={formEdit.mes}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="edit-row">
                          <label>Año:</label>
                          <input
                            type="number"
                            name="year"
                            value={formEdit.year}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="edit-row">
                          <label>Estado:</label>
                          <input
                            type="number"
                            name="estado"
                            value={formEdit.estado}
                            onChange={handleChange}
                          />
                        </div>

                        <p className="estado-help">
                          (1) COMPLETADO, (2) JUGANDO/ON HOLD, (3) INACABADO
                        </p>

                        <div className="edit-row">
                          <label>Descripción:</label>
                          <textarea
                            name="descripcion"
                            value={formEdit.descripcion}
                            onChange={handleChange}
                          />
                        </div>

                        {errorEdit && (
                          <div className="edit-error">
                            {errorEdit}
                          </div>
                        )}

                        <div className="edit-actions">
                          <button onClick={() => guardarEdicion(juego.id)}>
                            Guardar
                          </button>

                          <button onClick={() => setEditandoId(null)}>
                            Cancelar
                          </button>
                        </div>

                      </div>
                    )}

                    </div>
                  </div>
                </div>
              ))}

            </div>
          ))}

        </div>
      </div>


      </main>

      <Footer />
    </>
  );
};

export default ListaJuegos;
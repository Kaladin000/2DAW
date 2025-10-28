import Interpretes from "./Interpretes";

// Aquí tengo la base del anterior ejercicio, cambiando los nombres de los props
// El distintivo es que pongo el componente Interpretes en cada sección Elenco
// para que establezca el nombre de cada actor, su imágen y su descripción

function Pelicula(props) {
  return (
    <>
      <h1>{props.nombre}</h1>
      <h2>Escrita y dirigida por {props.director}</h2>
      <p>{props.children}</p>

      <div className="elenco">
        <img src={props.cartelera} />
        <article>
          <section>
            <h3>Elenco:</h3>
            <Interpretes actores={props.actores} />
          </section>
        </article>
      </div>
    </>
  );
}

export default Pelicula;
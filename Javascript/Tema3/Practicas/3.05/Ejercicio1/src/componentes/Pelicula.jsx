"use strict";

import { useRef } from 'react';
import Interpretes from "./Interpretes";
import Taquilla from "./Taquilla";

// Aquí tengo la base del anterior ejercicio, cambiando los nombres de los props
// El distintivo es que pongo el componente Interpretes en cada sección Elenco
// para que establezca el nombre de cada actor, su imágen y su descripción

/* He aplicado useRef para recoger el valor de la visibilidad en CSS de la seccion del elenco
   para luego poder mostrarla o esconderla cuando se pulsa el botón
*/

function Pelicula(props) {
  
  const elencoRef = useRef();

  const visibilidad = () => {
    if (elencoRef.current.style.visibility == "hidden") {
      elencoRef.current.style.visibility = "visible";
    } else {
      elencoRef.current.style.visibility = "hidden";
    }
  };

  return (
    <>
      <h1>{props.nombre}</h1>
      <h2>Escrita y dirigida por {props.director}</h2>
      <p>{props.children}</p>

      <div style={{ marginBottom: "-50px"}} className="elenco">
        <img src={props.cartelera} />
        <article>
          <button onClick={visibilidad}>ELENCO</button>
          <section style={{ visibility: "hidden" }} ref={elencoRef}>
            <h3>Elenco:</h3>
            <Interpretes actores={props.actores} />
          </section>
        </article>
      </div>
      <Taquilla taquilla={props.taquilla}/>
    </>
  );
}




export default Pelicula;
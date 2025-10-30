"use strict";

import { generarUuidAleatorio } from "/Users/Kaladin/Downloads/2DAW/2DAW/Javascript/Tema3/Practicas/3.04/Ejercicio1/src/bibliotecas/funciones.js";
import Interprete from "./Interprete";

// Recibe como prop el array de actores de todas las películas
// y con el map muestro o doy forma a cada mapa individual de actores

const Interpretes = ({ actores }) => {
  const arrayActores = actores || [];

  return (
    <ul>
      {arrayActores.map((actor) => (
        <Interprete key={generarUuidAleatorio()} datos={actor} />
      ))}
    </ul>
  );
};

export default Interpretes;

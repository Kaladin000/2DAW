"use strict";

import "./style.css"
import { mostrarPeliculas } from "./biblioteca.js";

window.onload = function () {
  const url = "https://swapi.dev/api/films";
  fetch(url)
    .then((objetoRespuesta) => {
      // Se recibe un objeto respuesta y se consume (para acceder a su contenido).
      return objetoRespuesta.json();
    })
    .then((datosRespuesta) => {
      // Esta API devuelve un objeto y en su clave "results" están los datos que se están buscando.
      mostrarPeliculas(datosRespuesta.results,document.getElementById("peliculas"));
    })
    .catch((error) => {
      // Problemas con la gestión de errores según el servidor.
      console.error(error);
    });
};

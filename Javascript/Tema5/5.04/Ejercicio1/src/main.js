"use strict";

import "./style.css"
import { mostrarPeliculas, accederPeliculas } from "./biblioteca.js";

window.onload = function () {
  // Recoge de la función acceder películas el fetch con los datos de las películas de la API
  // Entonces las muestra con otra función distinta
  const obtenerJsonPeliculasYMostrar = async () => {
    const jsonPeliculas = await accederPeliculas();
    console.log(jsonPeliculas);
    mostrarPeliculas(jsonPeliculas,document.getElementById("peliculas"));
  }

  obtenerJsonPeliculasYMostrar();
};

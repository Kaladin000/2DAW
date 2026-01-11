"use strict";

import "./style.css"
import { mostrarPokemons, accederPokemons } from "./biblioteca.js";

window.onload = function () {
  // Recoge de la función acceder películas el fetch con los datos de los pokemons de la API
  // Entonces las muestra con otra función distinta
  const obtenerJsonPokemonsYMostrar = async () => {
    const jsonPokemons = await accederPokemons();
    mostrarPokemons(jsonPokemons.results,document.getElementById("pokemons"));
  }

  obtenerJsonPokemonsYMostrar();
};

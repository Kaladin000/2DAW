"use strict";
import "./style.css"
import { add, listar, buscar, editar, borrar } from "./biblioteca.js";

window.onload = function () {

  // Solo carga si el navegador soporta localStorage

  if (typeof(Storage) !== "undefined") {
    add();
    listar();
    buscar();
    editar();
    borrar();
  } else {
    alert("El navegador no soporta localStorage");
  }
};

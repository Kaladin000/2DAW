"use strict";
import "./style.css"
import { add, listar, buscar, editar, borrar, guardarEnFirestore, listarFirestore } from "./biblioteca.js";

window.onload = function () {

  listarFirestore();
  guardarEnFirestore();

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

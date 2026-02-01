"use strict";
import "./style.css"
import { add, buscar, editar, listarFirestore, borrar } from "./biblioteca.js";

window.onload = function () {
  add();
  buscar();
  editar();
  borrar();
  listarFirestore();
};

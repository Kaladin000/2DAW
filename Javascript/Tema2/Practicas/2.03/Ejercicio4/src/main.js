"use strict";

// Notas del discente 1

var notas1 = {
  primeraEv: 10,
  segundaEv: 10,
  terceraEv: 10,
};

// Objeto predefinido discente

var discente1 = {
  id: 10,
  nombre: "Kaladin",
  apellidos: "Stormblessed",
  aficiones: ["medicina", "lanza", "flauta"],
  notas: notas1,
};

// Notas del discente 2

var notas2 = {
  primeraEv: 6,
  segundaEv: 7,
  terceraEv: 10,
};

// Objeto predefinido discente

var discente2 = {
  id: 1,
  nombre: "Shallan",
  apellidos: "Davar",
  aficiones: ["leer", "dibujar"],
  notas: notas2,
};

// Construye un curso con dos valores string, uno numérico y un array JSON alumnado que previamente habría que crear

function constructorCurso(nombre, año, descripción) {
  var curso = {
    nombre: nombre,
    año: año,
    descripción: descripción,
  };
  return curso;
}

// Creación de un objeto curso

var cursoLectura = constructorCurso(
  "Lectura",
  2025,
  "Curso de lectura",
);

// agrega una funcion alumnado y su primer discente

function matricular(discente, curso) {
  return { ...curso, 'alumnado' : [discente]}
}

// Agrego al segundo discente

cursoLectura = matricular(discente2, cursoLectura);

// Agrego al primer discente

cursoLectura.alumnado.push(discente1);

// Mostrar el objeto cursoLectura, para mostrar el objeto alumnos he buscado una manera para tener todos los valores de alumnado (de manera efectiva) (Object.values)
// para luego poder hacerle un mapeado en función de su nombre, para poder leer sus nombres, y uniéndolos con una coma.

console.log("TIPO------NOMBRE------VALOR");

for (let propiedad in cursoLectura) {
  let valor = cursoLectura[propiedad]; // saco el valor de las propiedades

  if (propiedad === "alumnado") {
    console.log(`${typeof valor}    ${propiedad}    ${Object.values(valor).map(valor => valor.nombre).join(", ")}`)
  } else {
    console.log(`${typeof valor}    ${propiedad}    ${valor}`)
  }
}
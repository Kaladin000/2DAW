"use strict";

// Construye un curso con dos valores string, uno numérico y un array JSON alumnado que previamente habría que crear

function constructorCurso(nombre, año, descripción, alumnado) {
  var curso = {
    nombre: nombre,
    año: año,
    descripción: descripción,
    alumnado: alumnado,
  };
  return curso;
}

// JSON alumnos de prueba

var alumnoManuel = {
  nombre: "Manuel",
  edad: "26",
  dni: "29159244E",
};

var alumnoJose = {
  nombre: "Jose",
  edad: "24",
  dni: "98426455C",
};

var alumnoDavid = {
  nombre: "David",
  edad: "21",
  dni: "64216488B",
};

// array alumnos

var alumnosLectura = {
  alumno1: alumnoManuel,
  alumno2: alumnoJose,
  alumno3: alumnoDavid,
};

// Creación de un objeto curso

var cursoLectura = constructorCurso(
  "Lectura",
  2025,
  "Curso de lectura",
  alumnosLectura
);

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
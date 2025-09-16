"use strict";

// Función que imprime la tabla de multiplicar del dos hasta la del parámetro que se le pasa

function mostrarTablas(cantidad) {
  if (cantidad >= 2) {
    for (let i = 2; i < cantidad+1; i++) {
        multiplicar(i);
    }
  } else {
    console.log("ERROR. Has introducido una cantidad errónea.");
  }
}

// Función que imprime la tabla de multiplicar del parámetro introducido (previamente guarda cada valor en un array)

function multiplicar(num) {
  var tabla = [];
  for (let i = 1; i < 11; i++) {
    tabla.push(num*i);
  }
  console.log(tabla.join(", "));
}

mostrarTablas(2);

console.log("---");

mostrarTablas(5);

console.log("---");

mostrarTablas(0);
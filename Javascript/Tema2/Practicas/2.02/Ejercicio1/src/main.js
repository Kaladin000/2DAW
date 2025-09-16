"use strict";

// Funcion que suma los argumentos que se les pasa por parámetro

function sumar() {
  var total = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (isNaN(arguments[i])) {
      console.log("ERROR. Número(s) no válido(s).");
      break;
    } else if (arguments.length < 2) {
      console.log("ERROR. Debes insertar mínimo dos parámetros.");
      break;
    }
    total += arguments[i];    
  }

  if (total !== 0) {
    return total.toFixed(2);
  }
}

console.log(sumar(1, 1, 1, 1, 1));
console.log(sumar(2.5, 7, 4.2, 1.4, 9.632));
console.log(sumar("a", 1, 1, 1, 1));
console.log(sumar(1));
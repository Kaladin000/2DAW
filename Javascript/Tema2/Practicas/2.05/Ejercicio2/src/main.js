"use strict";

// genera un número random del 1 al 9, le asigna ese valor a una variable y mientras que el array incluya esa variable
// no lo va a meter en el array. Si no incluye la variable, lo mete, de esta manera tenemos el array sin repeticiones.
// Para comprobar con el array bidimensional que no existe el valor, convierto el array a una dimensión y entonces ya lo compruebo.

function arrayRandom() {
  let valor;
  var array = [[0,0,0],
               [0,0,0],
               [0,0,0]];
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        do {
          valor = Math.floor(Math.random()*9) + 1;
        } while (array.flat().includes(valor));
        array[i][j] = valor;
      }
  } return array;
}

// Comprueba si algún valor del array se repite, para ello primero convierte el array en unidimensional

function arraySeRepiten(array) {
  var seRepiten = false;
  let arrayUniDimensional = array.flat();
  for (let i = 0; i < arrayUniDimensional.length; i++) {
    for (let j = i + 1; j < arrayUniDimensional.length; j++) { // j = i + 1 para que el primer valor no se repita y de siempre true
      if (arrayUniDimensional[i] === arrayUniDimensional[j]) {
        seRepiten = true;
        break;
      }
    }
  } return seRepiten;
}

var array1 = arrayRandom();

var stringArray = "";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      stringArray = stringArray.concat(`${array1[i][j]} `);
  } stringArray = stringArray.concat("\n");
}

console.log(`${arraySeRepiten(array1)}`);
console.log(stringArray);


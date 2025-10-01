"use strict";

// genera un número random del i al 9, le asigna ese valor a una variable y mientras que el array incluya esa variable
// no lo va a meter en el array. Si no incluye la variable, lo mete, de ésta manera tenemos el array sin repeticiones.

function arrayRandom() {
  var array = [];
  for (let i = 0; i < 9; i++) {
    let valor;
    do {
        valor = Math.floor(Math.random()*9) + 1;
    } while (array.includes(valor));
    array.push(valor);
  } return array;
}

// Una función muy simple que recorre cada valor nueve veces para comprobar si se repite alguno de ellos en cada posición

function arraySeRepiten(array) {
  var seRepiten = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) { // j = i + 1 para que el primer valor no se repita y de siempre true
      if (array[i] === array[j]) {
        seRepiten = true;
        break;
      }
    }
  } return seRepiten;
}

var array1 = arrayRandom();

console.log(`${arraySeRepiten(array1)} ${array1}`);
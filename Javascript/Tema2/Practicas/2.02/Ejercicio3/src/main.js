"use strict";

// Presenta tres arrays, los imprime, y imprime la suma de los contrarios del primero y el segundo, y del primero y el tercero

function calcular() {
  var array1 = arrayAleatorios(5);
  var array2 = arrayAleatorios(5);
  var array3 = arrayAleatorios(6);

  imprimirArray(array1);
  imprimirArray(array2);
  imprimirArray(array3);

  console.log("---");

  imprimirArray(sumarContrarios(array1, array2));
  imprimirArray(sumarContrarios(array1, array3));
}

// Genera un array de números aleatorios

function arrayAleatorios(cantidad) {
  var array = [];
  if (cantidad > 0) {
    for (let i = 0; i < cantidad; i++) {
      array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
  } else {
    console.log("ERROR. Has introducido una cantidad errónea.");
  }
}

// Suma los valores de los dos arrays, dándole primero la vuelta al segundo array

function sumarContrarios(array1, array2) {
  var array3 = array2;
  array3.reverse;
  var arrayResultado = [];
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      arrayResultado.push(array1[i] + array3[i]);
    }
  } else {
    console.log("ERROR. Los arrays tienen una longitud distinta.");
  }
  return arrayResultado;
}

function imprimirArray(array) {
  console.log(array.join(", "));
}

calcular(arrayAleatorios, sumarContrarios, imprimirArray);

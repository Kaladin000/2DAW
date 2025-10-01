"use strict";

// Array minas

var arrayMinas = [];
arrayMinas[0] = [ -1, 0, 0, -1];
arrayMinas[1] = [ 0, 0, 0, -1];
arrayMinas[2] = [ -1,-1, 0, 0];
arrayMinas[3] = [ -1, 0, 0, -1];

function cantidadDeMinas(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === -1) {

        // Aquí creo un 3x3 que recorre los valores del mismo, teniendo en cuenta también
        // la posibilidad de que no haya valores en una fila o columna dentro del 3x3 (k = -1, l = -1)

        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            let ejeV = i + k; // eje vertical
            let ejeH = j + l; // eje horizontal

            // al crear estos dos ejes, puedo comprobar si no podré introducir valores
            // ejemplo: i = 0, k = -1. El eje seria = -1. Está fuera de nuestro 3x3, por tanto no introduciremos valores en esa posición.

            // ---
            // Si k y l no son 0 (posición mina) y si los valores que se crean de los ejes no exceden
            // las posiciones máximas/mínimas que puede tener el array

            if ((k !== 0 || l !== 0) && ejeV >= 0 && ejeV < array.length && ejeH >= 0 && ejeH < array[0].length) {   
              if (array[[ejeV]][ejeH] !== -1) {
                array[ejeV][ejeH]++;
              }
            }
          }
        }
      }
    }
  } return array;
}

function imprimirArray(array) {
  var stringArray = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      stringArray = stringArray.concat(`${array[i][j]} `);
    } stringArray = stringArray.concat("\n");
  } console.log(stringArray);
}

imprimirArray(cantidadDeMinas(arrayMinas));
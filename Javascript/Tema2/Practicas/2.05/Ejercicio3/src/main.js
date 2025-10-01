"use strict";

// Ejemplo de sudoku correcto

var sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

// Ejemplo de sudoku incorrecto

var sudokuIncorrecto = [];
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

// Compruebo si las filas individualmente tienen valores repetidos y creo un array para cada columna y compruebo si tienen valores repetidos

function esSudokuCorrecto(sudoku) {
  var arrayColumna = [];
  for (let i = 0; i < 9; i++) {
    if (arraySeRepiten(sudoku[i])) {
      return false;
    }

    for (let j = 0; j < 9; j++) {
      arrayColumna.push(sudoku[j][i]);

      if (j === 8) {
        if (arraySeRepiten(arrayColumna)) {
          return false;
        } else {
          arrayColumna = [];
        }
      }
    }
  }
  return true;
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
``
console.log(esSudokuCorrecto(sudokuIncorrecto));
console.log(esSudokuCorrecto(sudokuCorrecto));


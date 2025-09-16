"use strict";

// La función dibuja una cruz :D (he hecho un bucle bidimensional, y he jugado con las tres particiones visuales (num / 3) según me convenía para que el número de bucles coincidiese con la partición y así imprimir correctamente los "." y "#")

function dibujarCruz(num) {
  var cruz = "";
  if (num % 3 === 0 || num < 0) {
    var cruz;
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num + 1; j++) {
        if (i >= num / 3 && i < (num / 3) * 2) {
          if (j < num) {
            cruz = cruz.concat(".");
          }
        } else {
          if (j < num / 3 || j > (num / 3) * 2) {
            cruz = cruz.concat("#");
          }
          if (j > num / 3 && j <= (num / 3) * 2) {
            cruz = cruz.concat(".");
          }
        }
      }
      cruz = cruz.concat("\n");
    }
  } else {
    console.log("ERROR. El número no es múltiplo de 3 o es negativo.");
    return;
  }

  console.log(cruz);
}

dibujarCruz(20);
dibujarCruz(21);
dibujarCruz(3);

"use strict";

// Muestro la catnidad de dnis y los dnis que hay entre 48357001 y 48357999.

// He simplificado el código y consigo la clave con un único string, hago el módulo entre el rango actual de dni y el
// número de index de la clave.
// Finalmente concatena los strings en un while (cada vez que termina suma en uno el dni, si se pasa de 48357999 acaba el bucle),
// para no tener que usar arrays.

function cantidadDNIsPorLetra(letra) {
  var rangoDNIS = 48357001;
  var stringDNIS = "";
  var numDNIS = 0;

  var clavesDNI = "TRWAGMYFPDXBNJZSQVHLCKE"
  var numClave = clavesDNI.indexOf(letra);

  while (rangoDNIS < 48357999) {
    if (rangoDNIS % 23 === numClave) {
      stringDNIS = stringDNIS.concat(`${rangoDNIS}${letra}    `);
      numDNIS++;
    }
    rangoDNIS++;
  }
  console.log(`Hay ${numDNIS} DNI entre 48357001 y 48357999`);
  console.log(stringDNIS);
}

cantidadDNIsPorLetra("C");
"use strict";

// Creo las variables que voy a imprimir

var objetoBoolean = true;
var objetoFunction = function funcion() {};
var objetoString = "Javascript";
var objetoNumber = 10;
var objetoArray = [1, 2, 3];

// Imprime el objeto según el tipo que sea

function imprimirObjeto(objeto) {
  if (typeof objeto === "number" || typeof objeto === "string") {
    console.log(`El valor del objeto es ${objeto} y es un ${typeof objeto}`);
  } else if (typeof objeto === "object") {
    if (Array.isArray(objeto)) {
      // utilizo Array.isArray para saber si el objeto es un array, ya que no podia sacarlo con typeof
      console.log(`El valor del objeto es ${objeto} y es un array`);
    } else {
      console.log(`El valor del objeto es ${objeto} y es un ${typeof objeto}`);
    }
  } else if (typeof objeto === "function") {
    console.log(`El valor del objeto es ${objeto} y es un ${typeof objeto}`);
  } else {
    console.log(`El valor del objeto es ${objeto} y es un ${typeof objeto}`);
  }
}

imprimirObjeto(objetoNumber);
imprimirObjeto(objetoString);
imprimirObjeto(objetoArray);
imprimirObjeto(objetoFunction);
imprimirObjeto(objetoBoolean);

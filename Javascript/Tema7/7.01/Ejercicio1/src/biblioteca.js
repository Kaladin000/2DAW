"use strict";

const funcionalidadPrincipal = () => {
  // Añado el prototipo
  
  String.prototype.repetir = function(repeticiones) {

    // Si las repeticiones son 0 o menor mando un mensaje informativo y sale

    if (repeticiones <= 0 ) {
      console.log("Número de repeticiones erróneo");
      return "error";
    }

    // Obtengo un string resultado, que suma al objeto propio y el objeto string,
    // tantas veces como repeticiones insertadas

    let stringResultado = "";
    for (let i = 0; i < repeticiones; i++) {
      stringResultado += this;
    } return stringResultado;

  };
}

export { funcionalidadPrincipal };

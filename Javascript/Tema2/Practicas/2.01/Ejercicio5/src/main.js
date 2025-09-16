"use strict";

// Muestro el valor de las facturas, las propinas y los totales, utilizando un bucle for para poder expandir el array

function mostrarPropinas(valorFacturas) {
  let propinas = [];
  let preciosFinales = [];

  console.log("Factura  |  Propina  |  Total");
  console.log("-----------------------------");

  for (let i = 0; i < valorFacturas.length; i++) {
    if (valorFacturas[i] < 50) {
      propinas.push(valorFacturas[i]*0.2);
    } else if (valorFacturas[i] >= 50 && valorFacturas[i] < 200) {
      propinas.push(valorFacturas[i]*0.15);
    } else {
      propinas.push(valorFacturas[i]*0.1);
    }
    preciosFinales.push(valorFacturas[i]+propinas[i]);

    console.log(`${(valorFacturas[i]).toFixed(2)}  |  ${(propinas[i]).toFixed(2)}  |  ${(preciosFinales[i]).toFixed(2)}`);
  }

}

mostrarPropinas([124,48,268,19.5]);
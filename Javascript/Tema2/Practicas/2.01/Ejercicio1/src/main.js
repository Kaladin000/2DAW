"use strict";

function calcularIMC() {
  var alturaMarcos = 183;
  var pesoMarcos = 77;
  var alturaJuan = 169;
  var pesoJuan = 65;

  // Calcula el IMC de cada persona siguiendo la fórmula oficial

  let imcMarcos = pesoMarcos / (alturaMarcos*alturaMarcos);
  let imcJuan = pesoJuan / (alturaJuan*alturaJuan);

  // Comprueba si el IMC de Marcos es mayor

  let imcMarcosMayor = imcMarcos > imcJuan;

  console.log(`¿Marcos tiene un IMC mayor al de Juan?: ${imcMarcosMayor}`);
}

calcularIMC();
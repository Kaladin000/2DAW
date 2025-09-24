"use strict";

// Notas del discente

var notas = {
  primeraEv: 10,
  segundaEv: 10,
  terceraEv: 10,
};

// Objeto predefinido discente

var discente = {
  id: 10,
  nombre: "Kaladin",
  apellidos: "Stormblessed",
  aficiones: ["medicina", "lanza", "flauta"],
  notas: notas,
};

// Calcula la media recogiendo los valores del discente

function calcularMedia(discente) {
  return (discente.notas.primeraEv + discente.notas.segundaEv + discente.notas.terceraEv)/3
}

// Imprime las aficiones recogiendo los valores del array aficiones

function imprimirAficiones(discente) {
  let aficionesString = "";
  for (let i = 0; i < discente.aficiones.length; i++) {
    if (i === discente.aficiones.length - 1) { // última instancia del bucle
      aficionesString = aficionesString.concat(discente.aficiones[i]);
    } else {
      aficionesString = aficionesString.concat(discente.aficiones[i] + ", ");
    }
  }
  console.log(`Aficiones: ${aficionesString}`);
}

// Imprime el informe completo del discente

function imprimirInforme(discente) {
  console.log(`ID: ${discente.id}`);
  console.log(`Nombre: ${discente.nombre} ${discente.apellidos}`);
  imprimirAficiones(discente);
  console.log(`Notas: Primera Evaluación: ${discente.notas.primeraEv}, Segunda Evaluación: ${discente.notas.segundaEv}, Tercera Evaluación: ${discente.notas.terceraEv}`);
  console.log(`Nota Media: ${calcularMedia(discente)}`);
}

imprimirInforme(discente);
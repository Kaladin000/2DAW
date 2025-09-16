"use strict";

var puntosEquipoJuan = [89, 120, 103];
var puntosEquipoMiguel = [116, 94, 123];
var puntosEquipoMaria = [97, 137, 105];
var equipo1 = "Juan";
var equipo2 = "Miguel";
var equipo3 = "María";

// Imprime los puntos de cada equipo en base al string nombre de su equipo

function imprimirPuntos(puntos, equipo) {
  if (equipo === "Juan") {
    console.log(`Los puntos del equipo de ${equipo} son: ${puntos}`);
  } else if (equipo === "Miguel") {
    console.log(`Los puntos del equipo de ${equipo} son: ${puntos}`);
  }
}

// Imprime la puntuación media del equipo que pasa por parámetro

function puntuacionMedia(puntos, equipo) {
  if (equipo === "Juan") {
    console.log(`La puntuación media del equipo de ${equipo} es: ${(puntos[0]+puntos[1]+puntos[2])/3}`);
  } else if (equipo === "Miguel") {
    console.log(`La puntuación media del equipo de ${equipo} es: ${(puntos[0]+puntos[1]+puntos[2])/3}`);
  } else if (equipo === "María") {
    console.log(`La puntuación media del equipo de ${equipo} es: ${(puntos[0]+puntos[1]+puntos[2])/3}`);
  }
}

// Imprime un ganador insertando dos arrays de puntos como parámetros

function equipoGanador(puntos1, puntos2, equipo1, equipo2) {
  if ((puntos1[0]+puntos1[1]+puntos1[2])/3 > (puntos2[0]+puntos2[1]+puntos2[2])/3) {
    console.log(`El equipo ganador es el equipo de ${equipo1} y la puntuación media es: ${(puntos1[0]+puntos1[1]+puntos1[2])/3}`);
  } else if ((puntos1[0]+puntos1[1]+puntos1[2])/3 < (puntos2[0]+puntos2[1]+puntos2[2])/3) {
    console.log(`El equipo ganador es el equipo de ${equipo2} y la puntuación media es: ${(puntos2[0]+puntos2[1]+puntos2[2])/3}`);
  } else {
    console.log(`¡Ha habido un empate!`);
  }
}

imprimirPuntos(puntosEquipoJuan, equipo1);
imprimirPuntos(puntosEquipoMiguel, equipo2);
imprimirPuntos(puntosEquipoMaria, equipo3);

console.log("---");

puntuacionMedia(puntosEquipoJuan, equipo1);
puntuacionMedia(puntosEquipoMiguel, equipo2);
puntuacionMedia(puntosEquipoMaria, equipo3);

console.log("---");

equipoGanador(puntosEquipoJuan, puntosEquipoMiguel, equipo1, equipo2);
equipoGanador([89, 120, 103], [20, 94, 123], equipo1, equipo2);
equipoGanador(puntosEquipoMiguel, puntosEquipoMiguel);

console.log("---");

equipoGanador(puntosEquipoMaria, [20, 94, 123], equipo3);
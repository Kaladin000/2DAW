"use strict";

// Construye una persona con dos valores string, uno numérico y un array JSON alumno que previamente habría que crear

function constructorPersona(curso, año, descripción, alumno) {
    var persona = {
        curso: curso,
        año: año,
        descripción: descripción,
        alumno: alumno,
    }
    return persona;
}

// JSON alumno de prueba

var alumnoManuel = {
    nombre: "Manuel",
    edad: "26",
    dni: "29159244E"
}

// Creación de un objeto persona

var personaManuel = constructorPersona("Lectura" , 2025, "Curso de lectura", alumnoManuel);

// Para verificar si funciona correctamente

console.log(`${personaManuel.curso}, ${personaManuel.año}, ${personaManuel.descripción}, ${personaManuel.alumno.nombre}`);
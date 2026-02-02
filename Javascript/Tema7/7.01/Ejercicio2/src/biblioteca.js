"use strict";

import { Curso } from "./clases/Curso.js";
import { Alumnado } from "./clases/Alumnado.js";
import { Profesorado } from "./clases/Profesorado.js";
import { Modulos } from "./clases/Modulos.js";

const funcionalidadPrincipal = () => {

// OBJETOS

const curso = new Curso("DAW", 101, 2, 30);

// Alumnado
const a1 = new Alumnado("1A", "Ana", "López", "2005-01-01", 7);
const a2 = new Alumnado("2B", "Luis", "Pérez", "2004-06-10", 5);

a1.notaMedia = 8;

// Matricular alumnado (comprobando prototipo)
curso.matricularAlumno(a1);
curso.matricularAlumno(a2);

// Profesorado
const p1 = new Profesorado("11A", "Juan", "Pérez", "1980-03-10");
const p2 = new Profesorado("22B", "Marta", "Ruiz", "1979-07-22");

// Módulos
const dwes = new Modulos("DWES", 160);
dwes.profesorado = [p2];

const diw = new Modulos("DIW", 120);
diw.profesorado = [p1];

curso.modulos = {dwes, diw};

// DOM

document.getElementById("alumnado").innerHTML = `
    <h2>Alumnado</h2>
    <p>${a1.nombre} ${a1.apellidos} - Nota: ${a1.notaMedia} - Mayor de edad: ${a1.esMayorDeEdad()}</p>
    <p>${a2.nombre} ${a2.apellidos} - Nota: ${a2.notaMedia} - Mayor de edad: ${a2.esMayorDeEdad()}</p>
`;

document.getElementById("notaCurso").innerHTML = `
    <h2>Nota media del curso</h2>
    <p>${curso.obtenerNotaMedia().toFixed(2)}</p>
`;

document.getElementById("profesorado").innerHTML = `
    <h2>Profesorado de los módulos</h2>
    ${curso.mostrarProfesorado()}
`;

document.getElementById("listadoAsc").innerHTML = `
    <h2>Listado alumnado A–Z</h2>
    ${curso.listarAlumnado("asc")}
`;

document.getElementById("listadoDesc").innerHTML = `
    <h2>Listado alumnado Z–A</h2>
    ${curso.listarAlumnado("desc")}
`;

document.getElementById("informe").innerHTML = `
    <h2>Informe completo del curso</h2>
    ${curso.obtenerInforme()}
`;
}

export { funcionalidadPrincipal };

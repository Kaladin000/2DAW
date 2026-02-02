"use strict";

import { Alumnado } from "./Alumnado.js";

class Curso {
    constructor(nombre, numAula, numModulos, numAlumnado) {
        this._nombre = nombre;
        this._numAula = numAula;
        this._numModulos = numModulos;
        this._numAlumnado = numAlumnado;

        this._alumnado = []; // Array de alumnos
        this._modulos = {}; // Objeto de objetos de Modulos
    }

    // Métodos

    // Suma todas las notas de los alumnos y las divide entre el número que son.

    obtenerNotaMedia() {
        let sumaNotas = 0;

        for (let i = 0; i < this._alumnado.length; i++) {
            sumaNotas += this._alumnado[i].notaMedia;
        }
        return sumaNotas / this._alumnado.length;
    };

    // Por cada módulo, genera una lista del profesorado (nombre y apellidos)

    mostrarProfesorado() {
        let html = "";

        for (const nombreModulo in this._modulos) {
            const modulo = this._modulos[nombreModulo];

            html += `<h3>${modulo.nombre}</h3><ul>`;

            for (const profesor of modulo.profesorado) {
                html += `<li>${profesor.nombre} ${profesor.apellidos}</li>`;
            } html += `</ul>`;
        } return html;
    };

    // Añado un alumno al array de alumnado

    matricularAlumno(alumno) {

        // Si el alumno no posee el prototipo Alumnado o el curso ya incluye al alumno, el proceso finaliza sin resultado.

        if (!(alumno instanceof Alumnado) || this._alumnado.includes(alumno)) return;

        this._alumnado.push(alumno);
    }

    // Creo una copia del array de alumnado, lo ordeno alfabéticamente de manera ascendente o descendente
    // y creo un string lista con el nombre y apellidos de cada alumno del array alumnado.

    listarAlumnado(orden) { // Para especificar, se escribe el string "asc" para definir ascendente o "desc" para descendente
        let alumnado = [...this._alumnado];

        if (orden === "desc") {
            alumnado.sort((a, b) => b.nombre.localeCompare(a.nombre));
        } else if (orden === "asc") {
            alumnado.sort((a, b) => a.nombre.localeCompare(b.nombre));
        }

        let string = "<ul>";
        for (let i = 0; i < alumnado.length; i++) {
            string += `<li>${alumnado[i].nombre + " " + alumnado[i].apellidos}</li>`;
        } string += "</ul>"
        return string;
    }

    // Obtengo el una tabla indicativa del curso

    obtenerInforme() {
        let html = `
        <h2>Curso: ${this._nombre}</h2>
        <p>Aula: ${this._numAula}</p>
        <p>Nº módulos: ${Object.keys(this._modulos).length}</p>
        <p>Nº alumnado: ${this._alumnado.length}</p>

        <table border="1">
            <tr>
                <th>Alumno</th>
                <th>Módulo</th>
                <th>Profesorado</th>
            </tr>`;

    // for anidado, el primero es cada alumno del array alumnado y 
    // el segundo es cada módulo (nombre del mismo) del objeto módulos
    
    // De esta forma tengo los módulos de cada alumno

    for (const alumno of this._alumnado) {
        for (const nombreModulo in this._modulos) {
            const modulo = this._modulos[nombreModulo];

            html += `
                <tr>
                    <td>${alumno.nombre} ${alumno.apellidos}</td>
                    <td>${modulo.nombre}</td>
                    <td>
                        <ul>
                            ${modulo.profesorado
                                .map(p => `<li>${p.nombre} ${p.apellidos}</li>`)
                                .join("")}
                        </ul>
                    </td>
                </tr>`;
        }
    }

    html += `</table>`;
    return html;
    }

    // Getters
    get nombre() {
        return this._nombre;
    }

    get numAula() {
        return this._numAula;
    }

    get numModulos() {
        return this._numModulos;
    }

    get numAlumnado() {
        return this._numAlumnado;
    }

    // Setters
    set modulos(modulos) {
        this._modulos = modulos;
    }
};

export { Curso };
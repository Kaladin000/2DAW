"use strict";

class Profesorado {
    constructor(dni, nombre, apellidos, fechaNac) {
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fechaNac = fechaNac;
    }

    // Getters
    get dni() {
        return this._dni;
    }

    get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    get fechaNac() {
        return this._fechaNac;
    }

    // Setters
    set dni(dni) {
        this._dni = dni;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    set fechaNac(fechaNac) {
        this._fechaNac = fechaNac;
    }
};

export { Profesorado };
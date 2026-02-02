"use strict";

class Alumnado {
    constructor(dni, nombre, apellidos, fechaNac, notaMedia) {
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fechaNac = fechaNac;
        this._notaMedia = notaMedia;
    }

    // Métodos

    // Resto el año actual menos el año de nacimiento y compruebo si es mayor a 18, devuelve un bool

    esMayorDeEdad() {
        return new Date().getFullYear() - new Date(this.fechaNac).getFullYear() >= 18;
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

    get notaMedia() {
        return this._notaMedia;
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

    set notaMedia(notaMedia) {
        this._notaMedia = notaMedia;
    }
};

export { Alumnado };
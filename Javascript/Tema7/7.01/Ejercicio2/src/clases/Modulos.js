"use strict";

import { Profesorado } from "./Profesorado.js";

class Modulos {
    constructor(nombre, numHoras) {
        this._nombre = nombre;
        this._numHoras = numHoras;
        this._profesorado = [];
    }

    // Getters
    get nombre() {
        return this._nombre;
    }

    get numHoras() {
        return this._numHoras;
    }

    get profesorado() {
        return this._profesorado;
    }

    // Setters
    set profesorado(profesorado) {
        this._profesorado = profesorado;
    }
};

export { Modulos };
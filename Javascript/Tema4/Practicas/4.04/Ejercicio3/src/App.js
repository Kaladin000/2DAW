"use strict";

import { useState } from "react";

const funcionalidadPrincipal = () => {

    var discos = []; // Inicializo el array de discos

    // Creo un json disco con los datos del formulario y lo agrego al array discos

    function guardar(event) {
        event.preventDefault();
        const disco = {
            nombre: document.getElementById("nombreDisco").value,
            grupo: document.getElementById("grupo").value,
            year: document.getElementById("year").value,
            tipoMusica: document.getElementById("tipoMusica").value,
            localizacion: document.getElementById("localizacion").value,
            prestado: document.getElementById("prestado").checked
        };

        discos.push(disco);
    }

    // Recojo los valores de cada disco y los muestro dentro de un div, dividido en párrafos
    // Cada disco tiene una etiqueta br al final para mejorar la presentación

    function mostrar(event) {
        event.preventDefault();
        const div = document.createElement("div");
        const br = document.createElement("br");
        const p = document.createElement("p");

        document.body.insertBefore(div, document.getElementById("DOM"));

        for (let i = 0; i < discos.length; i++) {
            p.innerHTML = "Nombre del disco: " + discos[i].nombre;
            div.appendChild(p.cloneNode(true));

            p.innerHTML = "Grupo/Intérprete: " + discos[i].grupo;
            div.appendChild(p.cloneNode(true));

            p.innerHTML = "Año de publicación: " + discos[i].year;
            div.appendChild(p.cloneNode(true));

            p.innerHTML = "Tipo de música: " + discos[i].tipoMusica;
            div.appendChild(p.cloneNode(true));

            p.innerHTML = "Localización: " + discos[i].localizacion;
            div.appendChild(p.cloneNode(true));

            p.innerHTML = "Prestado: " + discos[i].prestado;
            div.appendChild(p.cloneNode(true));

            div.appendChild(br.cloneNode(true));
        }
    }

    // Localizo los botones y les agrego el eventListener

    const botonGuardar = document.getElementById("guardar");
    const botonMostrar = document.getElementById("mostrar");

    botonGuardar.addEventListener("click", guardar);
    botonMostrar.addEventListener("click", mostrar);
}

export { funcionalidadPrincipal };
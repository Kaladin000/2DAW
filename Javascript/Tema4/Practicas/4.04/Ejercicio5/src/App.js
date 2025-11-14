"use strict";

import { useState } from "react";

const funcionalidadPrincipal = () => {

    var discos = []; // Inicializo el array de discos

    // Creo un json disco con los datos del formulario y lo agrego al array discos

    function guardar(event) {
        event.preventDefault();

        let reNombre = new RegExp(".{5,}"); // 5 o más caracteres
        let reYear = new RegExp("\\d{4}"); // 4 dígitos
        let reLocalizacion = new RegExp("^[A-Z]{2}-\\d{3}[A-Z]{2}$"); 
        // Dos letras mayus seguidas de un guión y tres dígitos, seguidos de dos letas mayus

        // Si no existe valor para el nombre o grupo del disco, no se guarda el disco.

        if (!document.getElementById("nombreDisco").value || !document.getElementById("grupo").value) {
            alert("ERROR. No existe nombre de disco o grupo del disco.");
            return;
        }

        // Si el nombre del disco tiene menos de cinco caracteres, se muestra el error

        if (!document.getElementById("nombreDisco").value.match(reNombre)) {
            alert("ERROR. Nombre de disco con menos de 5 caracteres.");
            document.getElementById("nombreDisco").className = "errorValidation";
            return;
        } else {
            document.getElementById("nombreDisco").className = "";
        }

        // Si el grupo del disco tiene menos de cinco caracteres, se muestra el error

        if (!document.getElementById("grupo").value.match(reNombre)) {
            alert("ERROR. Grupo con menos de 5 caracteres.");
            document.getElementById("grupo").className = "errorValidation";
            return;
        } else {
            document.getElementById("grupo").className = "";
        }

        // Si el año del disco tiene un número distinto a 4 caracteres o no son números, se muestra el error

        if (!document.getElementById("year").value.match(reYear)) {
            alert("ERROR. Año distinto a 4 caracteres o con caracteres distintos a números.");
            document.getElementById("year").className = "errorValidation";
            return;
        } else {
            document.getElementById("year").className = "";
        }

        // Si no se ha seleccionado un tipo de música, se muestra el error

        if (document.getElementById("tipoMusica").value === "") {
            alert("ERROR. No se ha seleccionado tipo de música.");
            document.getElementById("tipoMusica").className = "errorValidation";
            return;
        } else {
            document.getElementById("tipoMusica").className = "";
        }

        // Si la localización no sigue el formato indicado, se muestra el error

        if (!document.getElementById("localizacion").value.match(reLocalizacion)) {
            alert("ERROR. La localización no sigue el formato indicado.");
            document.getElementById("localizacion").className = "errorValidation";
            return;
        } else {
            document.getElementById("localizacion").className = "";
        }


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
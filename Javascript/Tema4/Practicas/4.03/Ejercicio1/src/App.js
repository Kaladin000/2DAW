"use strict";

import { useState } from "react";

// Creo una tabla html mediante un for anidado, creo 60 filas y 50 columnas utilizando el DOM

const generarTabla = () => {
    const divTabla = document.getElementById("divTabla");
    const tabla = document.createElement("table");
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    divTabla.appendChild(tabla);

    for (let i = 0; i < 60; i++) {
        let trActual = tr.cloneNode(true)
        tabla.appendChild(trActual);
        for (let j = 0; j < 50; j++) {
            trActual.appendChild(td.cloneNode(true));
        }
    }
}

const funcionalidadPrincipal = () => {

    // Seleccionar Color

    /* al darle click a un td con su respectiva pompa de color,
       el valor colorSeleccionado pasa a ser el string de dicho color
       y el texto del segundo td pasa a ser ese mismo string */

    var colorSeleccionado = "";
    const coloresTd = document.querySelectorAll("#primerTr td");
    
    function clickColor(event) {
        let td = event.target;
        let tdTexto = td.parentElement.nextElementSibling.firstElementChild;

        if (event.target.id == "blanco") {
            colorSeleccionado = "blanco";
            tdTexto.innerHTML = colorSeleccionado;
        } else if (event.target.id == "negro") {
            colorSeleccionado = "negro";
            tdTexto.innerHTML = colorSeleccionado;
        } else if (event.target.id == "rojo") {
            colorSeleccionado = "rojo";
            tdTexto.innerHTML = colorSeleccionado;
        } else if (event.target.id == "amarillo") {
            colorSeleccionado = "amarillo";
            tdTexto.innerHTML = colorSeleccionado;
        } else if (event.target.id == "verde") {
            colorSeleccionado = "verde";
            tdTexto.innerHTML = colorSeleccionado;
        } else if (event.target.id == "azul") {
            colorSeleccionado = "azul";
            tdTexto.innerHTML = colorSeleccionado;
        }
    }

    for (let i = 0; i < coloresTd.length; i++) {
        coloresTd[i].addEventListener("click", clickColor);
    }

    // Pintar

    /* al darle click a una celda, cambia su color de fondo al valor colorSeleccionado
       y después añade un eventListener (si se pasa el ratón por cualquier celda, cambiará
       el color de fondo al valor colorSeleccionado), borra el eventListener de "click" y
       añade uno nuevo de "click", dicho evento borra los eventListener "mouseover", el propio
       ("click", dejarDePintar), y añade de nuevo el eventListener "click" primigenio */

    function pintarCeldas(event) {
        if (colorSeleccionado == "blanco") {
            event.target.style.backgroundColor = "white";
        } else if (colorSeleccionado == "negro") {
            event.target.style.backgroundColor = "black";
        } else if (colorSeleccionado == "rojo") {
            event.target.style.backgroundColor = "#ff4c4c";
        } else if (colorSeleccionado == "amarillo") {
            event.target.style.backgroundColor = "#ffeb3b";
        } else if (colorSeleccionado == "verde") {
            event.target.style.backgroundColor = "#66bb6a";
        } else if (colorSeleccionado == "azul") {
            event.target.style.backgroundColor = "#42a5f5";
        }
    }

    function pintarCelda(event) {
        if (colorSeleccionado == "blanco") {
            event.target.style.backgroundColor = "white";
        } else if (colorSeleccionado == "negro") {
            event.target.style.backgroundColor = "black";
        } else if (colorSeleccionado == "rojo") {
            event.target.style.backgroundColor = "#ff4c4c";
        } else if (colorSeleccionado == "amarillo") {
            event.target.style.backgroundColor = "#ffeb3b";
        } else if (colorSeleccionado == "verde") {
            event.target.style.backgroundColor = "#66bb6a";
        } else if (colorSeleccionado == "azul") {
            event.target.style.backgroundColor = "#42a5f5";
        }
        
        for (let i = 0; i < celdas.length; i++) {
            celdas[i].addEventListener("mouseover", pintarCeldas);
            celdas[i].removeEventListener("click", pintarCelda);
            celdas[i].addEventListener("click", dejarDePintar);
        }
    }

    function dejarDePintar() {
        for (let i = 0; i < celdas.length; i++) {
            celdas[i].removeEventListener("mouseover", pintarCeldas);
            celdas[i].removeEventListener("click", dejarDePintar);
            celdas[i].addEventListener("click", pintarCelda);
        }
    }

    const celdas = document.querySelectorAll("#divTabla table tr td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener("click", pintarCelda);
    }
    
    // Borrar

    /* al darle click al botón borrar, cambia el 
       color de fondo de todas las celdas a blanco */

    function borrado() {
        for (let i = 0; i < celdas.length; i++) {
            celdas[i].style.backgroundColor = "white";
        }
    }

    document.getElementById("borrar").addEventListener("click", borrado);
}



export { generarTabla, funcionalidadPrincipal };
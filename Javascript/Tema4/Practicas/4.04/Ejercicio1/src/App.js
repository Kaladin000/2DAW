"use strict";

import { useState } from "react";

const funcionalidadPrincipal = () => {

    // Funciones botones

    function marcarPares(event) {
        event.preventDefault(); // Para que haga sumbit el form y se recargue la página
        let labels = document.querySelectorAll("label");
        let checkboxes = document.querySelectorAll("input");

        for (let i = 0; i < labels.length; i++) {

            // Si el módulo de dividir entre 2 los números es 0, se checkea la caja

            if ((labels[i].innerHTML) % 2 === 0) {
                checkboxes[i].checked = true;
            }
        }
    }

    function desmarcar(event) {
        event.preventDefault();

        // Simplemente desmarco todas las checkboxes

        let checkboxes = document.querySelectorAll("input");
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }

    // Botones

    const botonPares = document.createElement("button");
    const desmarcarTodos = document.createElement("button");

    botonPares.innerHTML = "Marcar todos los pares";
    desmarcarTodos.innerHTML = "Desmarcar todos";
    botonPares.addEventListener("click", marcarPares);
    desmarcarTodos.addEventListener("click", desmarcar);

    // Creo un formulario que se va rellenando con label e input type checkbox

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const form = document.createElement("form");
    const label = document.createElement("label");

    document.body.insertBefore(form, document.getElementById("DOM"));

    for (let i = 0; i < 100; i++) {
        form.appendChild(checkbox.cloneNode(true));
        label.innerHTML = Math.floor(Math.random()*901 + 100);
        form.appendChild(label.cloneNode(true));
        form.appendChild(document.createElement("br"));

        // Añado los botones

        form.appendChild(botonPares);
        form.appendChild(desmarcarTodos);
    }

}

export { funcionalidadPrincipal };
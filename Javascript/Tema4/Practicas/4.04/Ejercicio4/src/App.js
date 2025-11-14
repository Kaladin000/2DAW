"use strict";

import { useState } from "react";

const funcionalidadPrincipal = () => {

    var formulario = document.forms.formProvinciaPoblacion;

    // Cambia los valores del select población

    function establecerPoblaciones(event) {
        let option = document.createElement("option");

        // Dependiendo del valor de provincia

        if (event.target.value === "Alicante") {

            // Borro cualquier dato en el select poblacion

            formulario.poblacion.innerHTML = "";
            
            option.setAttribute("value", "");
            option.innerHTML = "No seleccionado";
            formulario.poblacion.appendChild(option.cloneNode(true));

            // Creo las opciones específicas

            option.setAttribute("value", "Alicante");
            option.innerHTML = "Alicante";
            formulario.poblacion.appendChild(option.cloneNode(true));

            option.setAttribute("value", "Elche");
            option.innerHTML = "Elche";
            formulario.poblacion.appendChild(option.cloneNode(true));

            option.setAttribute("value", "Petrer");
            option.innerHTML = "Petrer";
            formulario.poblacion.appendChild(option.cloneNode(true));

        } else if (event.target.value === "Castellón") {

            // Borro cualquier dato en el select poblacion

            formulario.poblacion.innerHTML = "";
            
            option.setAttribute("value", "");
            option.innerHTML = "No seleccionado";
            formulario.poblacion.appendChild(option.cloneNode(true));

            // Creo las opciones específicas

            option.setAttribute("value", "Castellón");
            option.innerHTML = "Castellón";
            formulario.poblacion.appendChild(option.cloneNode(true));

            option.setAttribute("value", "Oropesa");
            option.innerHTML = "Oropesa";
            formulario.poblacion.appendChild(option.cloneNode(true));

            option.setAttribute("value", "Vinaroz");
            option.innerHTML = "Vinaroz";
            formulario.poblacion.appendChild(option.cloneNode(true));

        } else if (event.target.value === "Valencia") {

            // Borro cualquier dato en el select poblacion

            formulario.poblacion.innerHTML = "";
            
            option.setAttribute("value", "");
            option.innerHTML = "No seleccionado";
            formulario.poblacion.appendChild(option.cloneNode(true));

            // Creo las opciones específicas

            option.setAttribute("value", "Valencia");
            option.innerHTML = "Valencia";
            formulario.poblacion.appendChild(option.cloneNode(true));

            option.setAttribute("value", "Xàtiva");
            option.innerHTML = "Xàtiva";
            formulario.poblacion.appendChild(option.cloneNode(true));

            option.setAttribute("value", "Torrent");
            option.innerHTML = "Torrent";
            formulario.poblacion.appendChild(option.cloneNode(true));

        } else if (event.target.value === "") {

            // Borro cualquier dato en el select poblacion

            formulario.poblacion.innerHTML = "";
            
            option.setAttribute("value", "");
            option.innerHTML = "No seleccionado";
            formulario.poblacion.appendChild(option.cloneNode(true));
        }
    }

    formulario.provincia.addEventListener("change", establecerPoblaciones);
}

export { funcionalidadPrincipal };
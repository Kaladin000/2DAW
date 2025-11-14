"use strict";

import { useState } from "react";

const funcionalidadPrincipal = () => {
    
    function crearParrafo(event) {
        
        event.preventDefault();
        let div = document.createElement("div");
        div.setAttribute("id", "resultado");

        let p = document.createElement("p");
        p.innerHTML = document.getElementById("texto").value;
        p.className = document.getElementById("estilos").value;

        if (p.innerHTML === "" || p.className === "" || p.className === null) {
            p.innerHTML = "No has introducido nada en el campo de texto...";
            p.className = "error";
        }

        document.body.appendChild(div);
        div.appendChild(p);
    }

    const botonCrearP = document.getElementById("boton");

    botonCrearP.addEventListener("click", crearParrafo);
}   

export { funcionalidadPrincipal };
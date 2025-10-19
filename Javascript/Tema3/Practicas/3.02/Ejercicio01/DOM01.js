"use strict";

// Establezco el primer elemento hijo

var elemento = document.body.firstElementChild;
var texto = "";
var contenidoB = "Contenido Bloqueado";

// Recorro el primer elemento hijo y el resto de ellos, cambio el texto a los que contienen la palabra censurada y les agrego a la clase CSS censurado

for (let i = 0; i < document.body.children.length; i++) {
    if (i === 0) {
        texto = elemento.textContent;
        if (texto.includes("sexo")) {
            elemento.innerHTML = contenidoB;
            elemento.className = "censurado";
        }
    } else {
        elemento = elemento.nextElementSibling;
        texto = elemento.textContent;
        if (texto.includes("sexo")) {
            elemento.innerHTML = contenidoB;
            elemento.className = "censurado";
        }
    }
}

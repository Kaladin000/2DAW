"use strict";

// inserta el nuevo elemento, después crea una copia del existente, borra el existente y pone detrás del insertado el clon

function insertAfter(nuevoElemento, existenteElemento) {
    existenteElemento.parentNode.insertBefore(nuevoElemento ,existenteElemento);
    let elementoClon = existenteElemento;
    existenteElemento.parentNode.removeChild(existenteElemento);
    nuevoElemento.parentNode.insertBefore(elementoClon , nuevoElemento);
}

var parrafos = document.querySelectorAll("p");

var nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "Párrafo insertado después de otro"

insertAfter(nuevoParrafo, parrafos[0]);
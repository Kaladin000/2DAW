"use strict";

// Mostrar el número de párrafos de la página

var elementosP = document.querySelectorAll("p");
console.log(elementosP.length);

// Mostrar el texto del segundo párrafo

console.log(elementosP[1].textContent);

// Mostrar el número de enlaces de la página

var elementosA = document.querySelectorAll("a");
console.log(elementosA.length);

// Mostrar la dirección del primer enlace

console.log(elementosA[0].attributes.getNamedItem("href"));

// Mostrar la dirección del penúltimo enlace

console.log(elementosA[30].attributes.getNamedItem("href"));

// Introducir texto al div

document.getElementById("info").innerHTML = elementosP[0].textContent;
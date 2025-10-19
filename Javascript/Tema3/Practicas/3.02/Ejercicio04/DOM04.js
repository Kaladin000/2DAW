"use strict"; // Mi Doom favorito es el Doom 2016, aunque he jugado también al Eternal, el Dark Ages y el Doom I y II :)

var imagenes = ["img/1.png", "img/2.png", "img/3.png", "img/4.png"];

// Inserto el div antes del script que inyecta el DOM

var dom = document.getElementById("DOM");
var div = document.createElement("div");
document.body.insertBefore(div, dom);

// La primera vez que se carga la página, establezco la primera imagen en el html

var imagen = document.createElement("img");
imagen.setAttribute("src", "img/1.png");
div.appendChild(imagen);

// Modifica el atributo src de la imagen para que se asigne la siguiente imagen (en un intervalo de dos segundos)

var numImagen = 0;

function cambiarImagen() {
    if (numImagen == 3) {
        numImagen = 0;
    } imagen.src = imagenes[++numImagen];
}

const intervaloCambiarImagen = setInterval(cambiarImagen, 2000);

// Establezco un borde para la imagen

imagen.style.borderWidth = "20px";
imagen.style.borderStyle = "solid";
imagen.style.borderColor = "red";

// Cambio el color del borde cada 2s

function cambiarColorBorde() {
    imagen.style.borderColor = randomColor();
}

const intervaloCambiarBorde = setInterval(cambiarColorBorde, 2000);

// Cojo un número random del 0 al 9 y se lo asigno a un color, devuelvo ese mismo string

function randomColor() {
    var color = "";
    let numRandom = Math.floor(Math.random()*10);
    switch (numRandom) {
        case 0:
            color = "red";
            break;
        case 1:
            color = "orange";
            break;
        case 2:
            color = "yellow";
            break;
        case 3:
            color = "green";
            break;
        case 4:
            color = "blue";
            break;
        case 5:
            color = "purple";
            break;
        case 6:
            color = "brown";
            break;
        case 7:
            color = "darkgray";
            break;
        case 8:
            color = "lightgray";
            break;
        case 9:
            color = "turquoise";
            break;
    } return color;
}
"use strict";

var parrafos = document.querySelectorAll("p");

// Establezco el botón Reaparecer

var botonReaparecer = document.createElement("button");
botonReaparecer.onclick = restablecer;
botonReaparecer.textContent = "Reaparecer";
document.body.insertBefore(botonReaparecer, parrafos[0]);

// Le da la propiedad de poder esconderse si se clicka a todos los párrafos

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].setAttribute("onclick", "hide(this)");
}

// Le da la propiedad de cambiar de color si el puntero se mueve fuera del párrafo a todos los párrafos


for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].setAttribute("onmouseout", "mouseOut(this)");
}

function mouseOut(p) {
    p.style.backgroundColor = randomColor(); // Cambio el background a uno aleatorio
}

function hide(p) {
    p.className = 'hidden' // Cambio su clase a hidden
}

function show(p) {
    p.className = 'visible' // Cambio su clase a visible
}

// Para volver a mostrar todos los párrafos de una sola vez

function showAll() {
    for (let i = 0; i < parrafos.length; i++) {
        show(parrafos[i]);
    }
}

// Restablece a su estado original todos los párrafos

function restablecer() {
    parrafos[0].style.backgroundColor = "lightblue";
    parrafos[1].style.backgroundColor = "lightgreen";
    parrafos[2].style.backgroundColor = "lightyellow";
    parrafos[3].style.backgroundColor = "lightcoral";
    parrafos[4].style.backgroundColor = "lavender";
    showAll();
}

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
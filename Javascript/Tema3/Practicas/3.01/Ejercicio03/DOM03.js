"use strict";

// recojo el valor del texto del hermano anterior al nodo padre del botón y reemplazo algunos de sus caracteres, la c por la k, y algunos carac por mayúsculas, al final le concateno dos Hs, después lo inserto de nuevo

function toCani() {

    var string = this.parentNode.previousElementSibling.textContent;

    for (let i = 0; i < string.length; i++) {
        string = string.replace("c", "k");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("o", "O");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("d", "D");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("n", "N");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("e", "E");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("b", "B");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("k", "K");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("i", "I");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("p", "P");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("l", "L");
    }
    for (let i = 0; i < string.length; i++) {
        string = string.replace("g", "G");
    }
    string = string.concat("HH");
    
    this.parentNode.previousElementSibling.innerHTML = string;
}

var botones = document.querySelectorAll("button");
botones[0].onclick = addFila;

var botonToCani = document.createElement("button");
botonToCani.onclick = toCani;
botonToCani.textContent = "Caniar";

// Crea una fila de la tabla, después le asigna el texto del input a la primera fila de datos, creo una segunda fila de datos y el boton a cani, por último agrego cada elemento en su lugar correspondiente

function addFila() {
  let fila = document.createElement("tr");

  let texto = document.getElementById("texto").value;
  let datosFila1 = document.createElement("td");
  datosFila1.textContent = texto;

  let datosFila2 = document.createElement("td");

  let botonToCani = document.createElement("button");
  botonToCani.onclick = toCani;
  botonToCani.textContent = "Caniar";

  document.getElementById("bodyTabla").appendChild(fila);
  fila.appendChild(datosFila1);
  fila.appendChild(datosFila2);
  datosFila2.appendChild(botonToCani);
}

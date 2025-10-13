"use strict";

// Función para agregar un número aleatorio entre 1 y 1000 a la lista

function agregarALaLista() {
    var li = document.createElement("li");
    li.innerHTML = Math.floor((Math.random()*1000)+1);
    lista.appendChild(li);
}

// Creo el botón, le asigno atributos y texto, y lo pongo antes de la lista

var boton = document.createElement("button");
boton.onclick = agregarALaLista;
boton.innerHTML = "Nuevo número";

var lista = document.getElementById("lista");

lista.parentNode.insertBefore(boton ,document.getElementById("lista"));
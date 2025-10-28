"use strict";

var parrafoTareas = document.getElementById("tareas"); // Párrafo que contiene el área de texto y los dos botones
var textoArea = parrafoTareas.firstElementChild; // Área de texto
var botonAdd = parrafoTareas.firstElementChild.nextElementSibling; // Botón Añadir
var botonMostrar = botonAdd.nextElementSibling; // Botón Mostrar

var divPendientes = document.getElementById("pendientes"); // div Pendientes
var pendiente = divPendientes.firstElementChild.nextElementSibling; // div que contiene el párrafo y los dos botones
var botonRemove = pendiente.lastElementChild.firstElementChild; // Botón Borrar
var botonAcabar = botonRemove.nextElementSibling; // Botón Acabar

var divAcabadas = document.getElementById("acabadas"); // div Acabadas
var acabada = divAcabadas.firstElementChild.nextElementSibling; // div que contiene el párrafo y los dos botones
var botonArchivar = acabada.lastElementChild.firstElementChild; // Botón Archivar
var botonVolver = botonArchivar.nextElementSibling; // Botón Volver

// Atributos onclick

botonAdd.setAttribute("onclick", "add()");
botonMostrar.setAttribute("onclick", "mostrar()");

botonRemove.setAttribute("onclick", "remove()");
botonAcabar.setAttribute("onclick", "finish()");

botonVolver.setAttribute("onclick", "volver()");
botonArchivar.setAttribute("onclick", "archivar()");

// Atributos onclick para el segundo elemento que viene por predeterminado en el HTML

pendiente.nextElementSibling.lastElementChild.firstElementChild.setAttribute("onclick", "remove()"); // El segundo botón remove predeterminado
pendiente.nextElementSibling.lastElementChild.lastElementChild.setAttribute("onclick", "finish()"); // El segundo botón acabar predeterminado

// Creo una copia permanente de cada div con texto

var pendienteDuplicado = pendiente.cloneNode(true);
var acabadaDuplicado = acabada.cloneNode(true);

// Agrego el valor del área de texto al párrafo de la copia de la pendiente
// pongo el elemento en el div de Pendientes

function add() {
    if (textoArea.value == "") {
        alert("¡No has puesto nada en el área de texto!");
    } else {
        let texto = textoArea.value;
        textoArea.value = "";
        let pendientesCopia = pendienteDuplicado.cloneNode(true);
        pendientesCopia.firstElementChild.textContent = texto;
        divPendientes.appendChild(pendientesCopia);
    }
}

// Borro el div que lleva el botón de la pendiente

function remove() {
    let boton = event.target; // Al no poder poner this en la función ni un Event Listener, he tenido que recurrir a esto 
                              // (busqué en Stack Overflow, y pone que no funciona en todos los navegadores, 
                              // pero me funciona y no se me ocurre otra manera de hacerlo sin this).
    let div = boton.parentNode.parentNode;
    divPendientes.removeChild(div);
}

// Borro el div que lleva el botón de la acabada

function removeAcabada() {
    let div = event.target.parentNode.parentNode;
    divAcabadas.removeChild(div);
}

// Cojo el texto de la pendiente, duplico mi div de acabada, le asigno ese texto,
// le asigno la clase acabadaVerde y pongo el elemento en el HTML

function finish() {
    let texto = event.target.parentNode.previousElementSibling.textContent;
    let acabadasCopia = acabadaDuplicado.cloneNode(true);
    acabadasCopia.firstElementChild.textContent = texto;
    acabadasCopia.className = "acabadaVerde";
    divAcabadas.appendChild(acabadasCopia);
    remove();
}

// Cojo el texto de la acabada, duplico mi div de pendiente, le asigno ese texto y
// pongo el elemento en el HTML

function volver() {
    let texto = event.target.parentNode.previousElementSibling.textContent;
    let pendientesCopia = pendienteDuplicado.cloneNode(true);
    pendientesCopia.firstElementChild.textContent = texto;
    divPendientes.appendChild(pendientesCopia);
    removeAcabada();
}

// Archivo el div que lleva el botón (le cambio la clase a oculto)

function archivar() {
    let div = event.target.parentNode.parentNode;
    div.className = "oculto";
}

// Muestra todos los divs con la clase oculto (les cambia la clase)

function mostrar() {
    let divsOcultos = document.querySelectorAll(".oculto");
    for (let i = 0; i < divsOcultos.length; i++) {
        divsOcultos[i].className = "acabadaVerde";
    }
}

